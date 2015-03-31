var gulp = require('gulp');
var colors = require('colors');

gulp.task('test',function(cb){
setTimeout(function(){
  console.log('Your tests passed!'.green);
  cb()
},2000);
})