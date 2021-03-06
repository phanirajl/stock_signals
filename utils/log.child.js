/**
 * [log arguments being passed to child_process methods (spawn, exec, etc.) Useful for debugging]
 * @return {[ChildProcess]}
 */

module.exports = function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;

  function mySpawn() {
    console.log('spawn called');
    console.log(arguments);
    var result = oldSpawn.apply(this, arguments);
    return result;
  }
  childProcess.spawn = mySpawn;
}
