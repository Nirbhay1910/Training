<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class customerController extends Controller
{
    public function index(){
        return view('customer');
    }
    public function store(Request $req){
        //Insert query
        $customer = new Customer;
        $customer->name = $req['name'];
        $customer->email = $req['email'];
        $customer->country = $req['country'];
        $customer->state = $req['state'];
        $customer->address = $req['address'];
        $customer->gender = $req['gender'];
        $customer->dob = $req['dob'];
        $customer->password = md5($req['password']);
        $customer->save();

        return redirect('/customer');
    }
    public function view(){
        $customers = Customer::all();
        $data = compact('customers');
        return view('customer-table')->with($data);
    }
    public function delete($id){
        $customer = Customer::find($id);
        if(!is_null($customer)){
            $customer->delete();
        }
        return redirect('customer');
    }
    public function edit($id){
        $customer = Customer::find($id);
        if(is_null($customer)){
            return redirect('customer');
        }else{
            $data = compact('customer');
            /// table ke ander ye data show krao phir update button pe click krke update kro
            return view('customer')->with($data);
        }
    }
    public function update($id, Request $req){
        $customer = Customer::find($id);
        if(is_null($customer)){
            return redirect('customer');
        }else{
            $customer->name = $req['name'];
            $customer->email = $req['email'];
            $customer->country = $req['country'];
            $customer->state = $req['state'];
            $customer->address = $req['address'];
            $customer->gender = $req['gender'];
            $customer->dob = $req['dob'];
            $customer->password = md5($req['password']);
            $customer->save();
            return redirect('customer');
        }
    }
}
