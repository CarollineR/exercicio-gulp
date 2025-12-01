const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá, Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("Tchau, Gulp");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;