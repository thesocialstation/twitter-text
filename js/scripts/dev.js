const browserify = require('browserify');
const babelify = require('babelify');
const fs = require('fs');

function build () {
    browserify('./twitter-text.js', { debug: true })
        .transform(babelify, {
            extensions: ['js'],
            preset: ['env'],
            sourceMaps: true
        })
        .bundle()
        .pipe(fs.createWriteStream(`./twitter-text-dev.js`))
}

build();