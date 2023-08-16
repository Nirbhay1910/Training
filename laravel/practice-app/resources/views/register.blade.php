@extends('layouts.main')
@push('title')
    <title>Registeration</title>
@endpush
@section('main-section')
    <h2>Registeration</h2>
    <form action="{{ url('/') }}/register" method="POST">
        @csrf
        Email: <input type="email" name="email">
        Password: <input type="password" name="password">
        <input type="submit" name="submit" value="submit">
    </form>
@endsection
