// directions to edit this file

    // step 1: change var dest to your theme name ala '../themes/your-theme-name'
   // step 2: change var stage to your local dev url ala 'local.dev'
  // step 3: run 'gulp build' in terminal to cook initial fileset, assign in WordPress dashboard
 // step 4: run 'gulp' in terminal to begin watch + spawn dev browser
// step 5: run 'gulp build' one last time when you're done with edits to get your shiny fileset

var

// location variables
  src         = './src/',
  dest        = '../themes/wp-gulp4-starter',  // step 1: change this to your theme name
  stage       = 'example.dev',                     // step 2: change this to your local dev url

// paths
  paths = {
    src: {
      scss: src+'scss/**/*.scss',
      js: src+'js/**/*.js',
      php: src+'**/*.php',
      img: src+'img/**/*.+(png|jpg|gif|svg)'
    },
    dest: {
      js: dest+'/js',
      img: dest+'/img'
    }
  },

// requirements
  gulp            = require("gulp"),
  sass            = require("gulp-sass"),
  postcss         = require("gulp-postcss"),
  autoprefixer    = require("autoprefixer"),
  cssnano         = require("cssnano"),
  sourcemaps      = require("gulp-sourcemaps"),
  browserSync     = require("browser-sync").create(),
  ugly            = require('gulp-uglify'),
  imgMin          = require('gulp-imagemin'),
  casht           = require('gulp-cache'),
  dL              = require('del');

// grab + cook teh styles
  function style() {
    return gulp
      .src(paths.src.scss)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
    }

// grab + cook teh javascrptz
  function js() {
    return gulp.src(paths.src.js)
      .pipe(ugly())
      .pipe(gulp.dest(paths.dest.js))
      .pipe(browserSync.stream());
    }

// grab + cook teh PHPpers
  function php() {
    return gulp.src(paths.src.php)
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
    }

// grab + squeeze teh imagers
  function img() {
    return gulp.src(paths.src.img)
      .pipe(casht(imgMin({
          // settings
      })))
      .pipe(gulp.dest(paths.dest.img));
    }

// clear the room
  async function clean() {
    return dL.sync([dest], {force: true});
    }

// reload teh bsync
  function reload() {
    browserSync.reload();
    }

// I am the Watcher on the Wall
  function watch() {
    browserSync.init({
        proxy: stage
    });
    gulp.watch(paths.src.scss, style);
    gulp.watch(paths.src.php, php);
    gulp.watch(paths.src.js, js);
    }


// expose teh tasks for command line testing
  exports.style = style;
  exports.js = js;
  exports.php = php;
  exports.img = img;


// default gulp triggers Watcher 
  gulp.task('default', watch);      

// all done let's build
  var build = gulp.series(clean, gulp.parallel(style, js, php, img));
  exports.build = build;



  // by Dan Cruzat //
 // for Cruzat.Media // and E+C //
// cruzat.media // eencee.me // thecruzat.com //
