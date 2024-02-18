<?php

namespace App\Models;

use App\Models\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'categories';

    public function article(): BelongsToMany
    {
        return $this->belongsToMany(Article::class, 'article_categories', 'article_id', 'category_id');
    }
}
