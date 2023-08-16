<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class registrationController extends Controller
{
    public function index(){
        return view('register');
    }
    public function register(Request $req){
        print_r($req->all());
    }
}
