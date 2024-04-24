<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
use HasFactory;

   protected $fillable = [
       'name',
       'summary',
       'genre',
       'release_date',
       'rating',
       'runtime_minutes',
       'image_poster',
       'trailer',
       'rated_type',
       'director',
       'wrtitter',
       'production',
   ];
}

