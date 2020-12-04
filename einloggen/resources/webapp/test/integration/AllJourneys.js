jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 YRHEINLOGGEN_TSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"msa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"msa/test/integration/pages/App",
	"msa/test/integration/pages/Browser",
	"msa/test/integration/pages/Master",
	"msa/test/integration/pages/Detail",
	"msa/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "msa.view."
	});

	sap.ui.require([
		"msa/test/integration/MasterJourney",
		"msa/test/integration/NavigationJourney",
		"msa/test/integration/NotFoundJourney",
		"msa/test/integration/BusyJourney",
		"msa/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});