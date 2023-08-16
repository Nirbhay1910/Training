<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\demoController;
use App\Http\Controllers\registrationController;
use App\Models\Customer;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/demo/{name}/{id?}', function($name, $id=null){ //id is optional
//     // return view('demo');
//     //echo $name;
//     $id = "<h2>siuuuu</h2>";
//     $data = compact('name','id'); // will create assoc array of variables
//     return view('demo')->with($data);
// });

// Route::post('/test',function(){
//     echo "Testing the route";
// });

// Route::put('/test',function(){
//     echo "Testing the route";
// });

// Route::patch('/test',function(){
//     echo "Testing the route";
// });

// Route::delete('/test',function(){
//     echo "Testing the route";
// });

// Route::any('/test',function(){
//     echo "Testing the route";
// });

Route::get('/register',[registrationController::class,'index']);
Route::post('/register',[registrationController::class,'register']);
Route::get('/',[demoController::class,'index']);
Route::get('/customer',function(){
    $customers = Customer::all();
    echo "<pre>";
    print_r($customers->toArray());
});
