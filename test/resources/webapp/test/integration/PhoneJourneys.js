jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"rtrt/test/integration/NavigationJourneyPhone",
		"rtrt/test/integration/NotFoundJourneyPhone",
		"rtrt/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});