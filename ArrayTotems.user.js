// ==UserScript==
// @name         ArrayTotems
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Create totem resourcepack from array
// @author       ericsson
// @match        https://spea.cc/totem/
// @icon         https://spea.cc/totem/icon.png
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==
(function () {
	'use strict';
    unsafeWindow.dl = function(){var e=parseFloat($("#versions").val());var t=$("#versions option:selected").text();var a;var n;console.log(e);switch(e){case 3:n="assets/minecraft/mcpatcher/cit/totem_of_undying";a="type=item\nitems=totem\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%";break;case 3.1:n="assets/minecraft/mcpatcher/cit/totem_of_undying";a="type=item\nmatchItems=totem_of_undying\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%";break;case 4:case 5:case 6:case 7:case 8:case 9:n="assets/minecraft/optifine/cit/totem_of_undying";a="type=item\nmatchItems=totem_of_undying\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%";break}e=parseInt(e);console.log(e,n,a);var s=new JSZip;s.file("pack.mcmeta",JSON.stringify({pack:{pack_format:e,description:"§7Custom §cTotem of Undying§7 Pack"}}));s.file("pack.png",canvasImg.src.substr(canvasImg.src.indexOf(",")+1),{base64:true});var i=s.folder(n);$("tr").each((function(){var e=$(this).attr("id");console.log(e);if(e){try{var t=$(this).find(".inp").val().toLowerCase();i.file(t+".png",$(this).find("img").attr("src").split(",")[1],{base64:true});i.file(t+".properties",a.replace("%NAME%",t).replace("%NAME%",t))}catch(e){console.log(e)}}}));s.generateAsync({type:"blob"}).then((function(e){saveAs(e,"Totems-"+t.replace(" ","")+".zip")}))}

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
