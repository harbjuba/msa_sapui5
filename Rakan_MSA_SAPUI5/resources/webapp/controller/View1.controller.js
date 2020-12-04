sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapui5.Rakan_MSA_SAPUI5.controller.View1", {
		onInit: function () {
			var that = this;
			var oModel1 = new sap.ui.model.odata.v2.ODataModel("https://saps4d02.msa.local:8001/sap/opu/odata/sap/YRH_EIGENSCHAFT1_CDS_CDS/");
			that.getView().setModel(oModel1, "employees3");
		//	var oModel1 = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc/");
		//	that.getView().setModel(oModel1, "employees");

			this.getOwnerComponent().getRouter().attachRouteMatched(function (oEvent) {
				var Data = oEvent.getParameter("arguments");
				that.getView().byId("idName1").setValue(Data.Name);
				//	console.log(Data.Name);

			});
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/ProductCollection");
			//sap.ui.getCore().setModel(oModel);
			this.getView().setModel(oModel);
		}

	});
});