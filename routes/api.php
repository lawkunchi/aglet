<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/movies/latest/{id}', [
    'uses' => 'App\Http\Controllers\MovieController@getLatestMovie',
]);


Route::get('/movies/category/{category}', [
    'uses' => 'App\Http\Controllers\MovieController@getMoviesByCategory',
    'as' => 'movies.actegory'
]);


Route::get('/movies/genres', [
    'uses' => 'App\Http\Controllers\MovieController@getMovieGenres',
    'as' => 'movies.genres'
]);

Route::get('/movies/search/{querystring}', [
    'uses' => 'App\Http\Controllers\MovieController@searchMovies',
    'as' => 'movies.search'
]);

Route::post('/movies/favorite/{id}/{userId}', [
    'uses' => 'App\Http\Controllers\MovieController@addMovieToFavoriteList',
    'as' => 'add.favorite'
]);

Route::get('/movies/user/favorite/{id}', [
    'uses' => 'App\Http\Controllers\MovieController@getFavoriteList',
    'as' => 'user.favorite'
]);



Route::group([ 'middleware' => 'CORS'], function() {

    Route::group([ 'prefix' => 'user'], function() {

        Route::post('/register', [
            'uses' => 'App\Http\Controllers\UserController@register',
            'as' => 'user.register'
        ]);

        Route::post('/login', [
            'uses' => 'App\Http\Controllers\UserController@login',
            'as' => 'login'
        ]);

        Route::post('/profile', [
            'uses' => 'App\Http\Controllers\UserController@profile',
            'as' => 'profile'
        ]);


        Route::get('/logout', [
            'uses' => 'App\Http\Controllers\UserController@logout',
            'as' => 'user.logout'
        ]);


    });

});

