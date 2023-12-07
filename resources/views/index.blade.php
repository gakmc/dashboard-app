@extends('layouts.app')

@section('content')

    <div class="">

            
        {{-- @if (Route::has('login'))
            <div class="">
                @auth
                <a href="{{ url('/home') }}" class="btn btn-primary">Home</a>
                @else
                    <a href="{{ route('login') }}" class="btn btn-primary">Ingresar</a>
                    
                    @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="btn btn-primary">Registrar</a>
                    @endif
                    @endauth
                </div>
                @endif --}}
                

            
                    <div id="root"></div>


    </div>





@endsection
