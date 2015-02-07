Package.describe({
    name: 'juliancwirko:arduino-cylon',
    summary: 'Meteor and Cylon.js for Arduino',
    version: '1.0.0',
    git: 'https://github.com/juliancwirko/meteor-arduino-cylon.git'
});

Npm.depends({
    'cylon-firmata': '0.19.0'
});

Package.onUse(function(api) {

    api.addFiles([
        'cylon.js',
    ], 'server');

    api.export('Cylon', 'server');

});
