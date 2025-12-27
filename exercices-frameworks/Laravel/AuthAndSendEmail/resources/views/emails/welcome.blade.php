
<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <title>Bienvenue sur notre site</title>

    </head>

    <body>

        <h1>Bonjour {{ $user['name'] }}</h1>
        <p>Merci pour votre inscription.</p>
        <a href="#">Acceder au site</a>

    </body>

</html>