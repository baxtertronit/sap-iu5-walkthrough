sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragement) {
    "use strict";

    return ManagedObject.extend(
      "sap.ui.demo.walkthrough.controller.HelloDialog",
      {
        constructor: function (oView) {
          this._oView = oView;
        },

        exit: function () {
          delete this._oView;
        },

        open: function () {
          const oView = this._oView;
          // create dialog lazily
          if (!oView.byId("helloDialog")) {
            const oFragmentController = {
              oncloseDialog: function () {
                oView.byId("helloDialog").close();
              },
            };
            // load asynchronous XML fragment
            Fragement.load({
              id: oView.getId(),
              name: "sap.ui.demo.walkthrough.view.HelloDialog",
              controller: oFragmentController,
            }).then(function (oDialog) {
              // connect dialog to the root view of this component (models, lifecycle)
              oView.addDependent(oDialog);
              oDialog.open();
            });
          } else {
            oView.byId("helloDialog").open();
          }
        },
      }
    );
  }
);
