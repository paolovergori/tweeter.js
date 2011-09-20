#!/usr/bin/env node

try {
    var reporter = require('nodeunit').reporters.default;
} catch(e) {
    var p = require('sys').puts;
    p("Cannot find nodeunit module.");
    p("You can download submodules for this project by doing:\n");
    p("\tgit submodule init");
    p("\tgit submodule update\n");
    process.exit();
}

process.chdir(__dirname);
reporter.run(['']);
