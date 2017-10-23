function getOpeningURL() {
  var launcher = new Appworks.AWLauncher();
  launcher.getLaunchURL(function(url) {
    out(url);
  }, function(error) {
    out(error);
  });
}

function clearOpeningURL() {
  var launcher = new Appworks.AWLauncher();
  launcher.clearLaunchURL();
  out("Opening URL cleared");
}

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function getObject(name) {
  return document.getElementById(name);
}
