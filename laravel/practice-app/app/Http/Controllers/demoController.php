<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class demoController extends Controller
{
    public function index($name,$id=null){
        $data = compact('name','id');
        return view('demo')->with($data);
    }
}
