<?php

use App\Http\Controllers\OrderItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers'], function () {
    Route::apiResource('users', 'UserController');
    Route::apiResource('products', 'ProductController');
    Route::apiResource('clients', 'ClientController');
    Route::apiResource('orders', 'OrderController');
    Route::apiResource('orders-items/{orderId}', 'OrderItemController');
});
