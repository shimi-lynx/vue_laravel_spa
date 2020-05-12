const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .browserSync({
        proxy: {
            target: 'web', //nginxのコンテナサービス名と一致させる
        },
        files: [
            './resources/**/*',
            './app/**/*',
            './config/**/*',
            './routes/**/*',
            './public/**/*',
        ],
        open: false,
        reloadOnRestart: true,
    });
