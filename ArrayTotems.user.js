// ==UserScript==
// @name         ArrayTotems
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Create totem resourcepack from array
// @author       ericsson
// @match        https://spea.cc/totem/
// @icon         https://spea.cc/totem/icon.png
// @run-at       document-end
// ==/UserScript==
(function () {
	'use strict';

	var names; // ["ericsson_", "Shimochka", "Ilyaxin"]

	var button = document.createElement("button");
	button.innerHTML = "MegaWhitelist";
	button.style = "top:0;right:0;position:absolute;z-index:99999;background-color: #596673;border: 2px solid #647382;color: white;padding: 16px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer;";
	document.body.appendChild(button);
	button.onclick = function () {
		names = JSON.parse(prompt("Type array\ne.g. [\"ericsson_\", \"Shimochka\"]"));
		console.log(names);
		names.forEach((value, key, array) => {
			newrow();
			$("#username" + key).val(value);
			skinfromname(key)
		});
	};
})();
