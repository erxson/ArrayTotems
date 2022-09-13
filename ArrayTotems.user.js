// ==UserScript==
// @name         ArrayTotems
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Create totem resourcepack from array
// @author       ericsson
// @include      https://spea.cc/totem/
// @match        https://www.tampermonkey.net/index.php?version=4.18.6166&ext=gcal&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

for (let index = 0; index < 50; index++) {
    removerow(0)
}

var names; // ["ericsson_", "Shimochka"]

var button = document.createElement("whitelistarray");
button.innerHTML = "[MegaWhitelist]";
button.style = "top:0;right:0;position:absolute;z-index:99999;padding:20px;";
document.body.appendChild(button);
button.onclick = function(){
    names = JSON.parse(prompt("Type array\ne.g. [\"ericsson_\", \"Shimochka\"]"));
    console.log(names);
    names.forEach((value,key,array) => {
        newrow();
        $("#username" + key).val(value);
        skinfromname(key)
    });
};
