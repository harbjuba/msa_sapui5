jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"msa/test/integration/NavigationJourneyPhone",
		"msa/test/integration/NotFoundJourneyPhone",
		"msa/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});