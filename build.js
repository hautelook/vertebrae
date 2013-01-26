({
    appDir: './src',
    baseUrl: './',
    dir: './public',
    inlineText: true,
    mainConfigFile: './src/main.js',
    optimize: 'uglify',
    paths: {

        // Libraries

        'json2'        : 'vendor/json2',
        'modernizr'    : 'vendor/modernizr-2.6.2.min',
        'jquery'       : 'vendor/jquery-1.9.0.min',
        'zepto'        : 'vendor/zepto',
        'underscore'   : 'vendor/underscore',
        'mustache'     : 'vendor/mustache',
        'backbone'     : 'vendor/backbone',

        // Plugins

        // RequireJS
        'domready'     : 'vendor/plugins/domReady',
        'text'         : 'vendor/plugins/text',
        
        // Touch events
        'touch'        : 'vendor/plugins/touch',

        // Vendor libs, packaged group of common dependencies
        'vendor'       : 'vendor',

        // Facade references to vendor / library methods
        'facade'       : 'facade',

        // Utilities and libraries
        'utils'        : 'utils',
        
        // Backbone syncs depend on both vendor and utils
        'syncs'        : 'syncs',

        // Should be used as required dependencies with use of `define`, 
        'models'       : 'models',
        'views'        : 'views',
        'collections'  : 'collections',
        'controller'   : 'controller',

        // Packages

        'packages'     : 'packages',
        'chrome'       : 'packages/chrome',
        'products'     : 'packages/products',
        'hello'        : 'packages/hello',
        'todos'        : 'packages/todos',

        // Application - bootstrap for frontend app 
        'application'  : 'application'

    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
/*
    modules: [
        {
            name: "application"
        }
    ]
*/
    modules: [

        // Common libraries, Utilities, Syncs, Models, Views, Collections

        {
            name: 'utils',
            exclude: ['jquery', 'vendor', 'facade']
        },
        {
            name: 'syncs',
            exclude: ['vendor', 'facade', 'utils']
        },
        {
            name: 'models',
            exclude: ['vendor', 'facade', 'utils', 'syncs']
        },
        {
            name: 'views',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models']
        },
        {
            name: 'collections',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models', 'views']
        },

        // Packages

        {
            name: 'chrome',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models', 'views', 'collections']
        },
        {
            name: 'products',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models', 'views', 'collections', 'chrome']
        },
        {
            name: 'hello',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models', 'views', 'collections']
        },
        {
            name: 'todos',
            exclude: ['vendor', 'facade', 'utils', 'syncs', 'models', 'views', 'collections']
        }
    ]
})