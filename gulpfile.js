const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const browserSync = require("browser-sync").create();
const rename = require("gulp-rename");
const del = require("del");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");

// Compile sass into css
function style() {
  return (
    src("./sass/style.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(dest("./public/css"))
      // Stream changes to all browser
      .pipe(browserSync.stream())
  );
}

// Watch sass files when change
function watcher() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./sass/**/*.scss", style);
  watch("./*.html").on("change", browserSync.reload);
  watch("./js/*.js").on("change", browserSync.reload);
}

// Minify the js files
function jsMinify() {
    return src("./js/main.js")
      .pipe(uglify())
      .pipe(rename("main.min.js"))
      .pipe(dest("./public/js"));
  }

// Add vendor prefixes to CSS
function cssAutoprefixer() {
    return src("./public/css/style.css").pipe(autoprefixer()).pipe(dest("./public/css"));
  }

// Clean old folders and files
function clean() {
    return del([
      "./public/js/main.min.js",
      "./public/css/style.css",
    ]);
  }

module.exports = {
  style,
  watch: watcher,
  cssAutoprefixer,
  clean,
  jsMinify,
  build: series(
    clean,
    parallel(series(style, cssAutoprefixer))
  )
};
