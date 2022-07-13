sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("app.first.sapui5project1.controller.covid.List", {
        dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
        onInit: function () {
            var oModel = new JSONModel(this.dataPath);
            this.getView().setModel(oModel, "List");
        }

    });
});
