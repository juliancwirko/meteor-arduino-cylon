Package.describe({
    name: 'juliancwirko:arduino-cylon',
    summary: 'Meteor and Cylon.js for Arduino',
    version: '1.1.0',
    git: 'https://github.com/juliancwirko/meteor-arduino-cylon.git'
});

Npm.depends({
    'serialport': '1.3.1',
    'cylon-firmata': '0.20.0'
});

Package.onUse(function(api) {
    api.addFiles([
        'cylon.js',
    ], 'server');
    api.export('Cylon', 'server');
});
