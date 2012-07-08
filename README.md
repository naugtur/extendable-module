Extendable Revealing Module
===========

JavaScript's popular Revealing Module pattern has this disadvantage that it is impossible to extend any behaviour related to the private parts [this joke is never getting old]. 

This little bit of code has been devised to do just that. 


## Usage:

`Module.extend` - pass a callback function that does the extension. The callback gains access to the whole module definition (passed as the single argument).

`_public` - a private array of properties that are supposed to be publicly avaliable.

### Example:


        var Duck = Module.extend(function(M) {
          // M is the private parts
          M.sound = 'Quack';

          M.translateToDucky = function(a) {
            return a.split(' ').join(' '+M.sound+' ');
          }

          //set up what will be public
          M._public.push('say');
          M.say = function(a) {
            return M.translateToDucky(a);
          }

          //just remember to do this
          return M;

        });


        Duck.say('Hello all you happy people');
        //Hello Quack all Quack you Quack happy Quack people


## Files

`module.js` - basic Extendable Revealing Module implementation.

`module.amd.js` - AMD-enabled Extendable Revealing Module implementation.

`test.js` - longer example
