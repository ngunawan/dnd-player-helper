module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    const notifier = require('node-notifier');

    grunt.initConfig({
        browserify: {
            options: {
                watch: true,
                browserifyOptions: {
                    debug: true
                },
                postBundleCB: function (err, src, next) {
                    grunt.task.run('notify-browserify');
                    next(err, src);
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
                paths: ['src/static/css/less']
            },
            src: {
                expand: true,
                cwd: "src/static/css/less", //all src matches are relative to this path
                src: "main.less", //pattern to match
                dest: "src/static/css", //destination path prefix
                ext: ".css" //replace any existing value with this extension in generated dest path
            }
        },
        watch: {
            less: {
                files: 'src/static/css/less/*.less',
                tasks: ['less', 'notify-less']
            }
        }

    });

    grunt.task.registerTask('notify-browserify', function () {
        notifier.notify({
            'title': 'dnd-player-helper',
            'message': 'Browserify created bundle'
        });
    })

    grunt.task.registerTask('notify-less', function () {
        notifier.notify({
            'title': 'dnd-player-helper',
            'message': 'CSS files created'
        });
    })

    //Register an "alias task" or a task function.  
    grunt.registerTask('default', ['browserify', 'watch']);
    grunt.registerTask('min', ['uglify']);

};
