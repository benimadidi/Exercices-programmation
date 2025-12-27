

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <link href='https://cdn.boxicons.com/3.0.6/fonts/basic/boxicons.min.css' rel='stylesheet'>
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <title>@yield('title')</title>

    </head>

    <body>

        <nav class="bg-gray-900 text-white p-4 flex justify-between space-x-4">
            <ul>
                <li>
                    <a href="/">Acceuil</a>
                </li>
            </ul>

            <a href="{{ route('login') }}">
                <i class='bx  bxs-user-circle' style='color:#fff'></i> 
            </a>
        </nav>

        <div>

            @yield('content')
            
        </div>


        @yield('scripts')
        
    </body>

</html>