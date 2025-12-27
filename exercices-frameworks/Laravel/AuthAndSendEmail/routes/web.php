<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/register', [AuthController::class, 'ShowSignUp'])->name('register');
Route::post('/register', [AuthController::class, 'SignUp'])->name('registration.register');

Route::get('/login', [AuthController::class, 'ShowFormLogin'])->name('login');
Route::post('/login', [AuthController::class, 'Login'])->name('login.submit');

Route::post('/logout', [AuthController::class, 'Logout'])->name('logout');
