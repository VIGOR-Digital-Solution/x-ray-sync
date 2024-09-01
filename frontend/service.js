const Service = require("node-windows").Service;

const svc = new Service({
  name: "X-Ray Sync Frontend Service",
  description: "This service is used to run/host X-Ray Sync Frontend Service",
  env: [
    {
      name: "NODE_ENV",
      value: "production",
    },
  ],
  script: require("path").join(__dirname, "server.js"),
});

svc.on("install", function () {
  svc.start();
});

svc.install();
