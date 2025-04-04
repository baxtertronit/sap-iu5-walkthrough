sap.ui.define(
  ["sap/ui/core/util/MockServer", "sap/base/util/UrlParameters"],
  function (MockServer, UrlParameters) {
    "use strict";

    return {
      init: function () {
        // create
        const oMockServer = new MockServer({
          rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/",
        });

        const oUriParameters = new UrlParameters(window.location.href);

        // configure mock server with the URL parameter
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: oUriParameters.get("serverDelay") || 500,
        });

        // simulate
        const sPath = "../localService/mockdata";
        oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

        // start
        oMockServer.start();
      },
    };
  }
);
