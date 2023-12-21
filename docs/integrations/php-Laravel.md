---
description: Integrate Ping2me with PHP app or Laravel to sending notifications.
---

# Integrate Ping2me with PHP app or Laravel with official SDK

## PHP app
You can check the official SDK [ping2me/php](https://github.com/ping2-me/php)
### Install

```bash
composer require ping2me/php
```

### Usage

Setup the endpoint at very first of your PHP app
```php
\Ping2Me\Php\Ping::$endpoint = '@your_end_point'; // example: @david/telegram
```

Then you can send notification to your chat app like this
```php
\Ping2Me\Php\Ping::make()->send('Hello world');
// or simply use helper function
ping('hello world');
```

## Laravel app

We also have a Laravel package [ping2me/laravel](https://github.com/ping2-me/laravel)

### Install

```bash
composer require ping2me/laravel
```

### Configuration

Update your `config/services.php` file with the following:

```php
// other services
'ping2me' => [
    'endpoint' => env('PING2ME_ENDPOINT'),
],
```

So you can set up your endpoint in your `.env` file:

```dotenv
PING2ME_ENDPOINT=@daudau/ping2me
```

### Usage

```php
\Ping2Me\Laravel\Facades\Ping::send('Hello world!');
// or
ping('Hello world!');
```
