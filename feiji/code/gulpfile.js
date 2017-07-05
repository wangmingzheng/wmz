//var gulp = require("gulp");
//gulp.src("js/*.js")
//.pipe(gulp.dest("js"));
var gulp = require("gulp");
var babel = require('gulp-babel');  
var jsmin =require("gulp-uglify");
gulp.task("jsmin1",function(){
	gulp.src("js1/*.js")
	.pipe(babel({presets:['es2015']})) 
	.pipe(jsmin())
	.pipe(gulp.dest("js2"))
});
gulp.task("default",["jsmin1"]);
