<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Requests\MovieStoreRequest;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all(); // Fetch all movies

        return response()->json($movies); // Return movies as JSON for Axios
    }
    public function show($id)
    {
        $movie = Movie::find($id);
        
        if (!$movie) {
            return response()->json(['error' => 'Movie not found'], 404);
        }

        return response()->json($movie);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MovieStoreRequest $request)
    {
    $validatedData = $request->validate([
        'name' => 'required|string',
        'summary' => 'required|string',
        'genre' => 'required|string',
        'release_date' => 'required|date',
        'runtime_minutes' => 'nullable|integer', // Allow null values for runtime
        'rating' => 'required|numeric|between:0,5', // Ensure rating is between 0 and 5
        'image_poster' => 'nullable|string', // Allow null values for poster
        'trailer' => 'nullable|string', // Allow null values for trailer
    ]);

    $movie = Movie::create($validatedData);

    return response()->json($movie, 201); // Return created movie with status code 201 (Created)
    }
}
