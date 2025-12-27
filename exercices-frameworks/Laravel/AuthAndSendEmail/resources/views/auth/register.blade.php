
@extends('base')

@section('title', 'S\'inscrire')

@section('content')

    <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">

        @if (session('success'))

            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">

                <strong class="font-bold">Success !</strong>
                <strong class="block sm:inline">{{ session('success') }}</strong>

            </div>

        @endif

        <form action="{{ route('registration.register') }}" method="POST" class="mt-6">
            @csrf

            <div class="mb-4">

                <label for="name" class="block text-sm font-medium text-gray-500">Nom</label>
                <input type="text" class="mt-1 p-3 block w-full border border-gray-300 outline-none rounded-md shadow-md" name="name" id="name" value="{{ old('name') }}">

                @error('name')
                    <span class="text-red-500 text-sm">{{ $message }}</span>
                @enderror

            </div>

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

            <div class="mb-4">

                <label for="password_confirmation" class="block text-sm font-medium text-gray-500">Confirmer le mot de passe</label>
                <input type="password" class="mt-1 p-3 block w-full border border-gray-300 outline-none rounded-md shadow-md" name="password_confirmation" id="password_confirmation" >

            </div>

            <button type="submit" class="w-full py-2 px-4 bg-purple-700 hover:bg-purple-500 text-white rounded-md">S'inscrire</button>

            <p class="my-2">
                Déjà un compte ? 
                <a href="{{ route('login') }}" class="text-red-500">Se connecter</a>
            </p>

        </form>

    </div>

@endsection