if (typeof window !== "undefined") {
  module.exports = require("./crypto-web");
} else {
  module.exports = require("./crypto-node");
}
