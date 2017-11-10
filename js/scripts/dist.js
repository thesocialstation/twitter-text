const argv = require('minimist')(process.argv.slice(2));
const browserify = require('browserify');
const babelify = require('babelify');
const fs = require('fs');

const version = argv.version;
if (!version) {
    throw new Error('Provide version');
}

function build () {
    browserify('./twitter-text.js', { debug: true })
        .transform(babelify, {
            extensions: ['js'],
            preset: ['env'],
            sourceMaps: true
        })
        .bundle()
        .pipe(fs.createWriteStream(`./pkg/twitter-text-${version}.js`))
}

build();