const Service = require("node-windows").Service;

const svc = new Service({
  name: "X-Ray Sync Frontend Service",
  description: "This service is used to run/host X-Ray Sync Frontend Service",
  script: require("path").join(__dirname, "server.js"),
});

svc.on("uninstall", function () {
  svc.stop();
  console.log("Uninstall complete");
});

svc.uninstall();
