<?php

namespace App\Http\Controllers;

use App\Mail\WelcomeEmail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{

    public function ShowSignUp() 
    {

        if(Auth::check())
        {

            return redirect()->route('dashboard');

        }

        return view('auth.register');

    }

    public function ShowFormLogin() 
    {

        if(Auth::check())
        {

            return redirect()->route('dashboard');

        }

        return view('auth.login');

    }

    public function Login(Request $request)
    {

        $credentials = $request->validate(
        [
            'email' => 'required|email',
            'password' => 'required|string'
        ],
        [
            'email.required' => 'L\'email est requis',
            'email.email' => 'L\'email doit être une adresse email valide',
            'password.required' => 'Le mot de passe est requis'
        ]);

        if(Auth::attempt($credentials))
        {

            return redirect()->route('dashboard');

        }

        return back()->withErrors([
            'email' => 'Le mot de passe ou l\'email est incorrecte',
        ]);

    }

    public function SignUp(Request $request)
    {

        $request->validate(
        [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ],
        [
            'name.required' => 'Le nom est requis',
            'email.required' => 'L\'email est requis',
            'email.email' => 'L\'email doit être une adresse email valide',
            'email.unique' => 'L\'email est deja utilisé',
            'password.required' => 'Le mot de passe est requis',
            'password.min' => 'Le mot de passe doit avoir au moins 6 caractères',
            'password.confirmed' => 'Le mot de passe de confirmation ne correspond pas'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        Mail::to($user->email)->send(new WelcomeEmail($user));

        return back()->with('success', 'Votre compte a été créé avec succès.');

    }

    public function Logout()
    {

        Auth::logout();

        return redirect('/login');

    }

}
