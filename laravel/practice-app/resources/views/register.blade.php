@extends('layouts.main')
@push('title')
    <title>Registeration</title>
@endpush
@section('main-section')
    <h2>Registeration</h2>
    <form action="{{ url('/') }}/register" method="POST">
        @csrf
        {{-- @php
            print_r($errors->all());
        @endphp --}}
        Name: <input type="text" name="name" value={{ old('name') }}>
        @error('name')
            {{ $message }}
        @enderror
        <br>
        Email: <input type="email" name="email" value={{ old('email') }}>
        @error('email')
            {{ $message }}
        @enderror
        <br>
        Password: <input type="password" name="password">
        @error('password')
            {{ $message }}
        @enderror
        <br>
        Confirm Password: <input type="password" name="password_confirmation">
        @error('password_confirmation')
            {{ $message }}
        @enderror
        <br>
        <input type="submit" name="submit" value="submit">
    </form>
@endsection
