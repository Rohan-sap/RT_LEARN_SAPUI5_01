sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", 'sap/viz/ui5/format/ChartFormatter', 'sap/viz/ui5/api/env/Format',
],
/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, ChartFormatter, Format) {
    "use strict";

    return Controller.extend("app.first.sapui5project1.controller.covid.Covid", {
        dataPath: "https://api.rootnet.in/covid19-in/stats/history",
        oVizFrame: null,

        onInit: function () {
            Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;
            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        formatString: formatPattern.SHORTFLOAT_MFD2,
                        visible: true
                    }
                },
                valueAxis: {
                    label: {
                        formatString: formatPattern.SHORTFLOAT
                    },
                    title: {
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: 'Covid Cases History'
                }
            });
            var dataModel = new JSONModel(this.dataPath);
            oVizFrame.setModel(dataModel);

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


        },
        onPressLine: function () {
            this.getOwnerComponent().getRouter().navTo("second-list")
        },
        onPressGraph: function () {
            this.getOwnerComponent().getRouter().navTo("second-pie")
        }

    });
});
