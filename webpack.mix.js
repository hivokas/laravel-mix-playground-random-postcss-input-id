const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.setPublicPath('dist');

mix.options({
    postCss: [require('tailwindcss')],
});

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].chunk.js?id=[contenthash]',
    },
});

mix.before(() => {
    fs.rmdirSync(path.resolve('dist/js'), { recursive: true });
});

mix.sourceMaps(true);

mix.js('src/app.js', 'js').vue();
