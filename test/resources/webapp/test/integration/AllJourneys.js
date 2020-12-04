jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 YRH_eigenschaft1_CDS in the list
// * All 3 YRH_eigenschaft1_CDS have at least one to_Verbindung

sap.ui.require([
	"sap/ui/test/Opa5",
	"rtrt/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"rtrt/test/integration/pages/App",
	"rtrt/test/integration/pages/Browser",
	"rtrt/test/integration/pages/Master",
	"rtrt/test/integration/pages/Detail",
	"rtrt/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "rtrt.view."
	});

	sap.ui.require([
		"rtrt/test/integration/MasterJourney",
		"rtrt/test/integration/NavigationJourney",
		"rtrt/test/integration/NotFoundJourney",
		"rtrt/test/integration/BusyJourney",
		"rtrt/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});