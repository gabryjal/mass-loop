const { src, dest } = require("gulp");

function copy(cb) {
  src('routes/*.js')
    .pipe(dest('copies'));
  cb();
}
exports.copy = copy;
