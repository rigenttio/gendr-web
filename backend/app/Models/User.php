<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Article;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, MustVerifyEmail, Authorizable;

    protected $guarded = ['id'];
    public $incrementing = false;
    protected $keyType = 'string';
    // protected $hidden = [
    //     'password',
    //     'email_verified_at',
    //     'banned_at',
    //     'updated_at',
    //     'deleted_at',
    // ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($self) {
            $self->id = generateUuid(5, 'ZX', 'users');
        });
    }

    public function article(): HasMany
    {
        return $this->hasMany(Article::class, 'user_id', 'id');
    }

    // cek apakah user di ban
    public function hasBanned()
    {
        return !is_null($this->banned_at);
    }

    // melakukan banned
    public function markAsBanned()
    {
        if (is_null($this->banned_at)) {
            $this->forceFill(['banned_at' => $this->freshTimestamp()])->save();
            $this->tokens()->delete();
        }
    }

    public function markAsUnbanned()
    {
        if (!is_null($this->banned_at)) {
            $this->forceFill(['banned_at' => null])->save();
        }
    }

    // query user banned
    // User::banned()->get();
    public function scopeBanned(Builder $query)
    {
        return $query->whereNotNull('banned_at');
    }

    // query user tidak dibanned
    // User::notbanned()->get();
    public function scopeNotbanned(Builder $query)
    {
        return $query->whereNull('banned_at');
    }
}
