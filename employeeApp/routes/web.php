<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use App\Models\Employee;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/employee/list', [EmployeeController::class, 'getEmployeeList'])->name('employee.list');
Route::post('/get/individual/employee/details', [EmployeeController::class, 'getEmployeeDetails'])->name('employee.details');
Route::post('/update/employee/data', [EmployeeController::class, 'updateEmployeeData']);
Route::delete('/delete/employee/data/{employee}', [EmployeeController::class, 'destroy']);
Route::post('/store/employee/data', [EmployeeController::class, 'store']);
