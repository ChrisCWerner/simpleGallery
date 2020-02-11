"use strict";
const controller = require("../controller");

module.exports = {
	name: "image",

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Retrieve images
		 */
		getImages() {
			return controller.getImages();
		}

	},

};
