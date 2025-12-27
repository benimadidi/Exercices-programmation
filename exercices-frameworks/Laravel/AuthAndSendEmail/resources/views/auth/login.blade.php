
@extends('base')

@section('title', 'Se connecter')

@section('content')

    <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">

        @if ($errors->any())

            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">

                <strong class="font-bold">Erreur !</strong>
                <strong class="block sm:inline">{{ $errors->first() }}</strong>

            </div>

        @endif

        <form action="{{ route('login.submit') }}" method="POST" class="mt-6">
            @csrf

            <div class="mb-4">

                <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
                <input type="email" class="mt-1 p-3 block w-full border border-gray-300 outline-none rounded-md shadow-md" name="email" id="email" value="{{ old('email') }}">

                @error('email')
                    <span class="text-red-500 text-sm">{{ $message }}</span>
                @enderror

            </div>

            <div class="mb-4">

                <label for="password" class="block text-sm font-medium text-gray-500">Mot de passe</label>
                <input type="password" class="mt-1 p-3 block w-full border border-gray-300 outline-none rounded-md shadow-md" name="password" id="password" value="{{ old('password') }}">

                @error('password')
                    <span class="text-red-500 text-sm">{{ $message }}</span>
                @enderror

            </div>

            <button type="submit" class="w-full py-2 px-4 bg-purple-700 hover:bg-purple-500 text-white rounded-md">Se connecter</button>

            <p class="my-2">
                Pas encore de compte ?
                <a href="{{ route('register') }}" class="text-red-500">S'inscrire dès maintenant</a>
            </p>

        </form>

    </div>

@endsection