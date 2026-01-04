<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Auth;


class Post extends Model
{
    protected $fillable = 
    [
        'title',
        'content',
        'user_id'
    ];

    protected $appends = 
    [
        'is_liked',
        'likes_count'
    ];

    protected $with = ['likedBy'];

    public function author() : BelongsTo
    {

        return $this->belongsTo(User::class);

    }

    public function likedBy() : BelongsToMany
    {

        return $this->belongsToMany(User::class, 'post_likes');

    }

    public function getIsLikedAttribute() : bool
    {

        return Auth::check() && $this->likedBy->contains('id', Auth::id());

    }

    public function getLikesCountAttribute() : int
    {

        return $this->likedBy->count();

    }

}
