//example usage of Extendable Revealing Module



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

//It works as expected and has only two methods: say, extend
console.log(Duck.say('Hello all you happy people'));
console.log(Duck);


var VerbouseDuck = Duck.extend(function(M) {
  //private properties can be changed here
  M.sound = 'Quack Quack';
  //method can be manipulated and overriden
  M.oldSay=M.say;
  M.say = function(a) {
    return M.sound + ' ' + M.oldSay(a);
  }
  //just remember to do this
  return M;
});

console.log(VerbouseDuck.say('Hello all you happy people'));
console.log(VerbouseDuck);
