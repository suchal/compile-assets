const mix = require('laravel-mix');
mix.styles([
        'resources/css/font-awesome.css',
        'resources/css/bootstrap-social.css',
        'resources/css/bootstrap.min.css',
        'resources/css/bootstrap-datepicker.css',
        'resources/css/red.css'
    ], 'public/css/all.css');
   mix.babel([
        'resources/js/jquery.min.js',
        'resources/js/bootstrap.min.js',
        'resources/js/bootstrap-datepicker.js',
        'resources/js/front.js',
        'resources/js/slick.js',
        'resources/js/main.js',
        'resources/js/handleCounter.js',
    ], 'public/js/all.js');
