@extends('layouts.main')
@push('title')
    <title>Registeration</title>
@endpush
@section('main-section')
    <div class="centered">
        <h2>Registration Form</h2>
    </div>
    <form action="{{ url('/') }}/customer/create" method="post">
        @csrf
        <x-input type="text" name="name" label="Name" />
        <x-input type="email" name="email" label="Email" />
        <x-input type="password" name="password" label="Password" />
        <x-input type="password" name="password_confirmation" label="Confirm Password" />
        <x-input type="text" name="country" label="Country" />
        <x-input type="text" name="state" label="State" />
        <x-input type="text" name="address" label="Address" />
        <x-input type="text" name="gender" label="Gender" />
        <x-input type="date" name="dob" label="DOB" />
        <input type='submit' value='Submit' />
    </form>
@endsection
