// Extendable Revealing Module, ECMA 3 compatible
// by naugtur
// MIT license
(function() {
  var root = this,
    Module = (function() {
      var module = {
        _public: [] //list of properties to publish
      }

      function reveal() {
        var i, returns = {};
        for (i = 0; i < module._public.length; i += 1) {
          returns[module._public[i]] = module[module._public[i]];
        }
        returns.extend = function(f) {
          return reveal(f(module));
        }
        return returns;
      }

      return reveal(module);

    })();

  if (typeof define !== "undefined") {
    //AMD if avaliable
    define("Module", [], function() {
      return Module;
    });
  } else {
    //publishing to the global space
    root.Module = Module;
  }

}).call(this);
