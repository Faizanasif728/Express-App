var routes = require("express").Router();
routes.get("/create", (req, res) => {
  res.send("create user api");
});

var routes = require("express").Router();
routes.get("/post", (req, res) => {
  res.send("post method  running");
});

var routes = require("express").Router();
routes.get("/put", (req, res) => {
  res.send("PUT/PATCH");
});

var routes = require("express").Router();
routes.get("/delete", (req, res) => {
  res.send("DELETE");
});

module.exports = routes;
