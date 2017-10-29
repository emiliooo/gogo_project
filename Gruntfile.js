module.exports = function(grunt) {

grunt.initConfig({
      sass: {                              // Task 
        dist: {                            // Target 
          options: {                       // Target options 
            style: 'expanded'
          },
          src:"style.scss",
          dest:"css/style.css"
        }
      },
      autoprefixer: {                //autoadd for all webbrowser
        dist: {  src: 'css/*.css'}
      },
      watch:{
          dev: {
            files: ['*'],
            tasks: ['dev']
          }
      },
     sprite:{
      all: {
        src: 'img/icons/*.png',
        dest: 'img/spritesheet.png',
        destCss: 'img/sprites.css'
      }
      }
});
 
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-spritesmith');

grunt.registerTask('sprites', ['sprite']); 
grunt.registerTask('dev', ['sass','autoprefixer','watch']);   // add task
grunt.registerTask('default', 'dev');
};