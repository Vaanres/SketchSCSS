const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("sass");

function generateCSS() {
  return src("main.scss")
    .pipe(sass())
    .pipe(dest("css"));
}

exports.default = function() {
  watch("*.scss", series(generateCSS));
};
