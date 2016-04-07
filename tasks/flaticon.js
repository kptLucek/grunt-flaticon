/*
 * grunt-flaticon
 *
 * Copyright (c) 2015 Marcin Bonk, Bronisław Białek
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    'use strict';

    var needle = require('needle');
    var unzip = require('unzip');
    var fs = require('fs');
    var path = require('path');
    var flaticon = require('./lib/flaticon');

    grunt.registerMultiTask(
        'flaticon',
        'Grunt task to automatically download flaticon icons collection from config stored in JSON file',
        function flaticonTask() {
            var self = this;
            var files = this.files;
            var done = this.async();

            var options = this.options({
                url_package: 'http://www.flaticon.com/download-collection',
                config: null,
                fonts: 'fonts',
                styles: 'css',
                font_url: '../fonts/',
                use_package_css: false,
                template: 'css',
                cache_dir: null
            });

            var fl = new flaticon(options);
            fl.downloadZip(done);
        }
    );
};
