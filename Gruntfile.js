module.exports = function(grunt) {
	// var autoprefixer = require('autoprefixer');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'./client/css/style.css' : './client/sass/index.scss'
				}
			}
		},
		postcss: {
	    options: {
	      map: true, // inline sourcemaps

	      // or
	      // map: {
	      //     inline: false, // save all sourcemaps as separate files...
	      //     annotation: 'dist/css/maps/' // ...to the specified directory
	      // },

	      processors: [
	        require('pixrem')(), // add fallbacks for rem units
	        require('autoprefixer')([
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 8",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6"
        ]) // add vendor prefixes
				,
	        // require('cssnano')() // minify the result
	      ]
	    },
	    dist: {
				files: {
					'./client/css/postStyle.css' : './client/css/style.css'
				}

	    }
  },
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'postcss']
			}
		}
	});
grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};
