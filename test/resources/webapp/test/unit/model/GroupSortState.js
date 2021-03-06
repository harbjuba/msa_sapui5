sap.ui.define([
		"rtrt/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("id").length, 1, "The sorting by id returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("usern").length, 1, "The sorting by usern returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("id").length, 1, "The group by id returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to id if the user groupes by id", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("id");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "id", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by usern and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "id");

		this.oGroupSortState.sort("usern");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});