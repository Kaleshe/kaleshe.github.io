
const { src, dest } = require('gulp');
const imageResize = require('gulp-image-resize');
const rename = require("gulp-rename");

function resizeImagesPromise(path, width) {
  return new Promise( resolve => {
    src(path)
    .pipe(imageResize({ width }))
    .pipe(rename(p => {
      p.basename = `${p.basename}@${width}`
     }))
    .pipe(dest(path.join(__dirname, 'assets', 'resize')))
    .on("end", () => resolve())
  }) 
}

function updated() {
  return Promise.all([100, 300, 800, 1000, 2000].map(width => resizeImagesPromise('/assets/img/**/*.{jpg,jpeg,png}', width)))
}

exports.default = updated;