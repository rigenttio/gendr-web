<?php

namespace App\Http\Controllers\api;

use App\Models\Article;
use Illuminate\Http\Request;
use Mews\Purifier\Facades\Purifier;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'category_id' => 'required|exists:categories,id',
            'status' => 'required',
            'tags' => 'nullable',
        ], [
            'required' => 'Tidak boleh kosong'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $cleanHtml = Purifier::clean($request->content);
        $status = $request->has('status') ? $request->status : false;
        $article = new Article();
        $article->fill([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'content' => $cleanHtml,
            'tags' => $request->tags,
            'status' => $status,
        ])->save();

        if ($request->hasFile('thumbnail')) {
            $img = $request->file('thumbnail');
            $photoName = $article->id . '_' . uniqid() . '.' . $request->file('thumbnail')->extension();
            $img->storeAs('article/thumbnail', $photoName, 'public');
            $article->thumbnail = $photoName;
        }
        $article->save();
        $article->categories()->attach($request->category_id);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil menyimpan article',
        ]);
    }

    public function read(Request $request)
    {
        $search = $request->input('search');
        $query = Article::with('user:id,nama,avatar', 'categories')->where('status', true);

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', '%' . $search . '%')
                    ->orWhere('tags', 'like', '%' . $search . '%');
            });
        }

        $perPage = $request->input('per_page', 10);
        $articles = $query->paginate($perPage);

        return response()->json([
            'data' => $articles
        ], 200);
    }

    public function readMe(Request $request)
    {
        $userId = auth()->id();
        $search = $request->input('search');
        $query = Article::with('categories')->where('user_id', $userId);

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', '%' . $search . '%')
                    ->orWhere('tags', 'like', '%' . $search . '%');
            });
        }

        $perPage = $request->input('per_page', 10);
        $articles = $query->paginate($perPage);
        return response()->json([
            'data' => $articles
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = validator($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'category_id' => 'required|exists:categories,id',
            'status' => 'required',
            'tags' => 'nullable',
        ], [
            'required' => 'Tidak boleh kosong'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $cleanHtml = Purifier::clean($request->content);
        $status = $request->has('status') ? $request->status : false;
        $user = User::findOrFail(auth()->id());
        $article = $user->article()->findOrFail($id);

        $article->update([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'content' => $cleanHtml,
            'tags' => $request->tags,
            'status' => $status,
        ]);

        if ($request->hasFile('thumbnail')) {
            $existFile = Storage::disk('public')->exists('article/thumbnail/' . $article->thumbnail);
            if ($existFile) {
                Storage::delete('article/thumbnail/' . $article->thumbnail);
            }
            $img = $request->file('thumbnail');
            $photoName = $article->id . '_' . uniqid() . '.' . $request->file('thumbnail')->extension();
            $img->storeAs('article/thumbnail', $photoName, 'public');
            $article->thumbnail = $photoName;
        }

        $article->save();

        return response()->json([
            'message' => 'Artikel berhasil diperbarui',
        ], 200);
    }
}
