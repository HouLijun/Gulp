var gulp=require('gulp');
var del=require('del');
var fileinclude  = require('gulp-file-include');
var minimist = require('minimist');

/**
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
  del(['./build/**/*.*']).then(function paths(){
    cb();
  });
});


//使用fileinclude 实现页面 include 任务
gulp.task('fileinclude', function() {
	gulp.src(["dev/page/**/*.html"])
	  .pipe(fileinclude({
	    prefix: '@@',
	    basepath: '@file'
	  }))
	  .pipe(gulp.dest('build/'));//输出到build
      
   	gulp.src(['dev/page/**/css/*.css'])
      .pipe(gulp.dest('build/'));//输出到build
      
    gulp.src(['dev/page/**/js/*.js'])
      .pipe(gulp.dest('build/'));//输出到build
      
    gulp.src(['dev/page/**/images/**'])
      .pipe(gulp.dest('build/'));//输出到build
    
});

//移动common
gulp.task('common', function() {
   gulp.src(['dev/*.js'])           
    .pipe(gulp.dest('build'));   
  gulp.src(['dev/common/*.*'])            //公用样式文件
    .pipe(gulp.dest('build/common'));   //公用样式输出的文件夹
  gulp.src(['dev/common/css/*.css'])		        //公用样式文件
    .pipe(gulp.dest('build/common/css'));   //公用样式输出的文件夹
  gulp.src(['dev/common/js/*.*'])       //公用js文件
    .pipe(gulp.dest('build/common/js'));  //公用js输出的文件夹
  gulp.src(['dev/common/plugins/**'])       //公用js文件
    .pipe(gulp.dest('build/common/plugins'));  //公用js输出的文件夹
  gulp.src(['dev/common/images/**'])     //公用img文件
    .pipe(gulp.dest('build/common/images'));  //公用img输出的文件夹
  gulp.src('dev/common/fonts/*.*')      //公用fonts文件
    .pipe(gulp.dest('build/common/fonts'))   //公用fonts输出的文件夹
});

gulp.task('default', ['clean'], function() {
   gulp.start('fileinclude','common')
});


function gulpSingle(paths){
  del(['build/'+paths+'/**/*.*']).then();
  gulp.src(["dev/page/"+paths+"/*.html"])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('build/'+paths));//输出到build
        
    gulp.src(['dev/page/'+paths+'/css/*.css'])
      .pipe(gulp.dest('build/'+paths+'/css/'));//输出到build
      
    gulp.src(['dev/page/'+paths+'/js/*.js'])
      .pipe(gulp.dest('build/'+paths+'/js/'));//输出到build
      
    gulp.src(['dev/page/'+paths+'/images/*.*'])
      .pipe(gulp.dest('build/'+paths+'/images/'));//输出到build
  
}
//命令行传参
var knownOptions = {
  string: 'paths',
  default: { paths: process.env.NODE_ENV || '**/**/**' }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('single', function() {
	gulpSingle(options.paths);	    
});

// gulp single --paths 2018/online_store/1.1



















