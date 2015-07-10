// GULPFILE
// ========
// Entry point for the live development environment. Automatically builds and
// transpiles the GUI's source code with inteligent watchers and pipelines.

"use strict";

var gulp = require( "gulp" );

// Load all independent tasks defined in the gulp_tasks directory, including
// those in subdirectories.
require( "require-dir" )( "./gulp_tasks/", { recurse: true } );

gulp.task( "default", [ "init", "build", "serve" ] );

// LDE INIT TASKS
gulp.task( "init", [ "clean", "check-environment", "install-packages" ] );

// ASYNCHRONOUS BUILD TASKS
gulp.task( "build"
         , [ "init"
           , "babel"
           , "browserify"
           , "libs"
           , "less"
           , "images"
           , "favicons"
           , "fonts"
           ]
         );
