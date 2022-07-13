sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("app.first.sapui5project1.controller.CountDown.CountDown", {
            onInit: function () {
                this.timer = {
                    "days"  : 0,
                    "hours"  : 0,
                    "minutes" : 0,
                    "seconds" : 0,
                }
                let myTilesModel = new JSONModel(this.timer);
                //var oModel = new JSONModel(mytime);
                this.getView().setModel(myTilesModel, "myTime");
                setInterval(this.onCountDownCalculate.bind(this),1000);
            },
            onCountDownCalculate: function(){
                let techedDate = new Date("Feb 28 2023");
                let currentDate = new Date();
                let diff = techedDate.getTime() - currentDate.getTime();
                this.timer.days = Math.floor(diff / ( 1000 * 60 * 60 * 24 ));
                this.timer.hours = Math.floor((diff % ( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 ));
                this.timer.minutes = Math.floor((diff % ( 1000 * 60 * 60 ))/ ( 1000 * 60  ) );
                this.timer.seconds = Math.floor((diff % ( 1000 * 60  ))/ ( 1000  ) );
                this.getView().getModel("myTime").setData(this.timer);

            }
        });
    });
