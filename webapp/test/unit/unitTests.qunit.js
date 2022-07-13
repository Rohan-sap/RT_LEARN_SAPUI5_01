/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appfirst/sapui5_project1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
