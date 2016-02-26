'use strict';
module.exports = function(grunt) {  
    grunt.initConfig({
        concurrent: {  
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        sass: {
            dev: {
                files: {
                    'public/css/style.css': 'sass/style.scss'
                }
            }
        },        
        nodemon: {  
            script: 'app/app.js',
            options: {
                ext: 'js,twig',
                    callback: function (nodemon) {
                        // opens browser on initial server start
                        nodemon.on('config:update', function () {
                            setTimeout(function() {
                            require('open')('http://localhost:3000');
                        }, 1000);
                    });
                }
            }
        },
        watch: {  
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass:dev']
            },
            css: {
                files: ['public/css/*.css'],
                options: { 
                    livereload: true,
                    nospawn: true                    
                }
            }
        },
    });

    grunt.loadNpmTasks("grunt-nodemon");  
    grunt.loadNpmTasks("grunt-concurrent")  
    grunt.loadNpmTasks("grunt-contrib-watch");  
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask("default", ['sass:dev','concurrent']);  
};