<?php

namespace App\Http\Controllers\api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = validator($request->all(), [
            'login' => 'required|string',
            'password' => 'required'
        ], [
            'required' => 'Tidak boleh kosong'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $data = $request->all();
        if (filter_var($request->login, FILTER_VALIDATE_EMAIL)) {
            $user = User::where('email', $request->login)->first();
            if ($user) {
                return $this->checkUser($user, $data);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Akun tidak ditemukan'
                ], 400);
            }
        } else {
            $user = User::where('username', $request->login)->first();
            if ($user) {
                return $this->checkUser($user, $data);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Akun tidak ditemukan'
                ], 400);
            }
        }
    }

    function checkUser($user, $data)
    {
        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Email, username atau password salah'
            ], 400);
        } elseif ($user->hasBanned()) {
            return response()->json([
                'status' => false,
                'message' => 'Akun anda telah di ban'
            ], 400);
        }

        $token = $user->createToken($user->nama)->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Berhasil login',
            'token' => $token
        ], 200);
    }

    public function logout()
    {
        $user = User::findOrFail(auth()->user()->id);

        if ($user) {
            $user->tokens()->delete();
        }

        return response()->json([
            'status' => true,
            'message' => 'Berhasil logout',
        ], 200);
    }
}
