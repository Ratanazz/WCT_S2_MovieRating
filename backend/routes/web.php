<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::get('/movies', [MovieController::class, 'index']); // Route to fetch all movies
Route::post('/movies', [MovieController::class, 'store']);



