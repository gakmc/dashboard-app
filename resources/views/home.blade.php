@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if (Auth::user()->genero == 'Masculino')
                    {{ __('Bienvenido')}} 
                    @elseif (Auth::user()->genero == 'Femenino')
                    {{ __('Bienvenida')}}
                    @else
                    {{ __('Bienvenida/o')}} 
                    @endif
                    {{ Auth::user()->nombre }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')

@endsection