sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("app.first.sapui5project1.controller.Tiles", {
        onInit: function () {
            var oModel = new JSONModel("../model/Tiles.json");
            this.getView().setModel(oModel, "Tiles");
        },
        onPress: function (oRoute) { // MessageToast.show("The GenericTile is pressed.");
            if (oRoute.substring(0, 4) == 'EXT-') {

                let selitem = JSON.parse(this.getView().getModel("Tiles").getJSON()).find(item => {
                    if (item.Route == oRoute) {
                        return item;
                    }
                });
              //  alert(selitem.url);
              sap.m.URLHelper.redirect(selitem.url);

            } else {
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }

        }
    });
});
