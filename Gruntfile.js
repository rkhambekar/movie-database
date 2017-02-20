module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //individual plugin configs

        cssmin: {
            css: {
                files: {
                    'dist/min/app.style.min.css': ['scripts/css/bootstrap.css', 'css/app.css']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 version', 'ie 8', 'ie 9']
            },
            files:{
                src: 'dist/min/app.style.min.css',
                dest: 'dist/min/app.style.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/min/app.script.min.js': ['scripts/js/angular.js', 'scripts/js/angular-messages.js',
                        'scripts/js/angular-route.js', 'app/app.js', 'app/**/*-controller.js', 'app/**/*-service.js']
                }
            }
        },
        copy:{
            main:{
                files:[
                    {
                        expand: true,
                        cwd: 'scripts/',
                        src: ['fonts/**'],
                        dest:'dist'
                    }
                ]
            }
        },
        watch:{
            css:{
                files:['css/app.css'],
                tasks: ['cssmin', 'autoprefixer']
            },
            js:{
                files: ['app/**/*.js'],
                tasks:['uglify']
            }
        },
        karma:{
            unit:{
                options:{
                    frameworks:['jasmine'],
                    browser: ['PhantomJS'],
                    singleRun: true,
                    files:[
                        'scripts/js/angular.js',
                        'scripts/js/angular-route.js',
                        'scripts/js/angular-messages.js',
                        'scripts/js/angular-mocks.js',
                        'app/**/*.js',
                        'test/**/*.js'

                    ]
                }
            }
        }

    });
    //load tasks using grunt.loadNpmTasks()
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');



    //register custom tasks using grunt.registerTask()
    grunt.registerTask('default',['cssmin:css','autoprefixer', 'uglify:js','copy']);
};