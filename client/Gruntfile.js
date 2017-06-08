module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.initConfig({
        browserify: {
            options: {
                watch: true,
                keepAlive: true,
                browserifyOptions: {
                    debug: true
                }
            },
            build: {
                src: 'src/app/app.js',
                dest: 'dist/bundle.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/bundle.js': ['dist/bundle.js']
                }
            }
        },
        less: {
            options: {
                cleancss: true, //prettify css
                syncImport: true, //reads @import synchronously
                paths: ['src/view/css/less']
            },
            src: {
                expand: true,
                cwd: "src/views/css/less", //all src matches are relative to this path
                src: "main.less", //pattern to match
                dest: "src/views/css", //destination path prefix
                ext: ".css" //replace any existing value with this extension in generated dest path
            }
        },
        watch: {
            less: {
                files: 'src/views/css/less/*.less',
                tasks: 'less'
            }
        }

    });

    //Register an "alias task" or a task function.  
    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('min', ['uglify']);

};
