<?php

use Illuminate\Http\Request;

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


// sample API
Route::get('/rooms',function(){

	return \App\Room::all();
	
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



