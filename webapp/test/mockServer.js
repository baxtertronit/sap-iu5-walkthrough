sap.ui.define(["../localService/mockserver"], function (mockServer) {
  "use strict";

  // Initialize the mock server
  mockServer.init();

  // initialize the embedded component on the HTML page
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
