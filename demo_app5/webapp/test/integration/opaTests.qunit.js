/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"NPLDHL/demoapp5/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});