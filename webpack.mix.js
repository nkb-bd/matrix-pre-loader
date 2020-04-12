let mix = require('laravel-mix');
mix.setPublicPath('assets');

mix.setResourceRoot('../');
mix
    .js('src/js/boot.js', 'assets/js/boot.js')
    .js('src/js/main.js', 'assets/js/plugin-main-js-file.js')
    .js('src/js/matrix-loader-public', 'assets/js/matrix-pre-loader.js')
    .js('src/js/matrix-style-pre-loader.js', 'assets/js/matrix-style-pre-loader.js')
    .sass('src/scss/admin/app.scss', 'assets/css/element.css')
    