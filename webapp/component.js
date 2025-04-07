sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog",
    "sap/ui/Device",
  ],
  function (UIComponent, JSONModel, HelloDialog, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data models
        const oData = {
          recipient: {
            name: "UI5",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set device model
        const oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        // set dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        // create the views based on the url/hash
        this.getRouter().initialize();
      },

      getContentDensityClass: function () {
        // return compact or cozy based on device
        if (!this._sContentDensityClass) {
          if (!Device.support.touch) {
            this._sContentDensityClass = "sapUiSizeCompact";
          } else {
            this._sContentDensityClass = "sapUiSizeCozy";
          }
        }
        return this._sContentDensityClass;
      },

      exit: function () {
        // destroy dialog
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog: function () {
        // open dialog
        this._helloDialog.open();
      },
    });
  }
);
