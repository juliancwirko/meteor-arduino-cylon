## Meteor [CylonJS](http://cylonjs.com/) wrapper for [Arduino](http://arduino.cc/) board.

### Usage

Just add the package and config your Cylon. Example:

**Server side:**

    Meteor.startup(function () {

        Cylon.robot({
            name: 'Number Six',
            description: 'Description is optional..',

            connections: {
              arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
            },

            devices: {
              redLed: { driver: 'led', pin: 13 },
              yellowLed: { driver: 'led', pin: 12 }
            },

            redLed: function () {
                this.devices.redLed.toggle();
                return this.name + ' toggles red led';
            },

            yellowLed: function () {
                this.devices.yellowLed.toggle();
                return this.name + ' toggles yellow led';
            },

            commands: function () {
                return {
                    'Toggle red Led': this.redLed,
                    'Toggle yellow Led': this.yellowLed
                };
            }
        }).start();

    });

More configuration options and devices documentation on cylonjs website: [http://cylonjs.com/](http://cylonjs.com/) There will be blog post about it soon...

You can also add ````juliancwirko:caprica```` package. This is a simple admin panel for all your connected Cylons. It will list all configured commands. It need to be added by hand. You can read more about it here: []()