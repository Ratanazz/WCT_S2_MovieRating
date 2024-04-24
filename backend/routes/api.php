<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ApiController;


Route::get('/movies', [MovieController::class, 'index']);
Route::post('/movies', [MovieController::class, 'store']);
Route::get('/movies/{movie}', [MovieController::class, 'show'])->where('movie', '[0-9]+');
Route::put('/movies/{movie}', [MovieController::class, 'update'])->where('movie', '[0-9]+');
Route::delete('/movies/{movie}', [MovieController::class, 'destroy'])->where('movie', '[0-9]+');

Route::post('register',[ApiController::class,'register']);
Route::post('login',[ApiController::class,'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('profile', [ApiController::class, 'profile']);
  });