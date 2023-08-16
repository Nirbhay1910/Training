<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class registrationController extends Controller
{
    public function index(){
        return view('register');
    }
    public function register(Request $req){
        $req->validate([
            'name'=>'required',
            'email'=>'required|email',
            // 'password'=>'required|confirmed',
            // 'password_confirmation'=>'required' //name field must be password_confirmation only
            'password'=>'required',
            'password_confirmation'=>'required|same:password' //if we want to use different name field then use this method
        ]);
        print_r($req->all());
    }
}
