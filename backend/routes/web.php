<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::get('/movies', [MovieController::class, 'index']); // Route to fetch all movies
Route::post('/movies', [MovieController::class, 'store']);
// Route to show a specific movie by ID (GET /movies/{id})
Route::get('/movies/{movie}', [MovieController::class, 'show'])->where('movie', '[0-9]+'); 

// Route to update a specific movie by ID (PUT /movies/{id})
Route::put('/movies/{movie}', [MovieController::class, 'update'])->where('movie', '[0-9]+'); 

// Route to delete a specific movie by ID (DELETE /movies/{id})
Route::delete('/movies/{movie}', [MovieController::class, 'destroy'])->where('movie', '[0-9]+');
