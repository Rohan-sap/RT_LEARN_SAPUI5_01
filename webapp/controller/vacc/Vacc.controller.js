sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("app.first.sapui5project1.controller.vacc.Vacc", {
            onInit: function () {
                var oModel = new JSONModel("../model/Vacc.json");
                this.getView().setModel(oModel, "Vacc");
                let myViewConfig  = {
                    table: true,
                    calendar: false,
                };
                var oRadioModel = new JSONModel(myViewConfig);
                this.getView().setModel(oRadioModel, "view");                
            },
            formatDate:function(input){
                return new Date(input);
              },               
              formatState:function(input){
                let currentDate = new Date();
                let inputDate= new Date(input);
                if (inputDate < currentDate){
                return 'Success';
                } else if (inputDate > currentDate){
                  return 'Warning';
                }else{
                  return 'Error';
                }
              }                         
        });
    });
