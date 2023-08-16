@extends('layouts.main')
@push('title')
    <title>Demo page</title>
@endpush
@section('main-section')
    {{-- {{$varName}} -> It is like simple echo statement i.e it wil not render html stagtement in var while{!! $varname !!} will do --}}
    <h1>Welcome {{ $name . ' ' . $id }} </h1>
    {!! $id !!}
    @if ($name == '')
        {{ 'Name is not defined' }}
    @else
        {{ 'Name is not empty' }}
    @endif
    @isset($id)
        {{ 'ID is set as : ' . $id }};
    @endisset
    {{-- for loop --}}
    @for ($i = 0; $i < 10; $i++)
        <p>{{ $i }}</p>
    @endfor
    {{-- while loop --}}
    @php
        $i = 1;
    @endphp
    @while ($i < 10)
        {{ $i }}
        @php
            $i++;
        @endphp
    @endwhile
    {{-- foreach --}}
    @php
        $arr = [1, 2, 3, 4, 5, 6, 7, 8];
    @endphp
    @foreach ($arr as $i)
        {{ $i }}
    @endforeach
@endsection
