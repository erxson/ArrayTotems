// ==UserScript==
// @name         ArrayTotems
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Create totem resourcepack from array
// @author       ericsson
// @include      https://spea.cc/totem/
// @match        https://www.tampermonkey.net/index.php?version=4.18.6166&ext=gcal&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        GM_cookie
// ==/UserScript==

GM_cookie("delete", { "name": "r2totem" });

var names; // ["ericsson_", "Shimochka", "Ilyaxin"]

var button = document.createElement("button");
button.innerHTML = "MegaWhitelist";
button.style = "top:0;right:0;position:absolute;z-index:99999;background-color: #596673;border: 2px solid #647382;color: white;padding: 16px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;transition-duration: 0.4s;cursor: pointer;";
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

// xd
function dl(){var t,e,a=parseFloat($("#versions").val()),n=$("#versions option:selected").text();switch(console.log(a),a){case 3:e="assets/minecraft/mcpatcher/cit/totem_of_undying",t="type=item\nitems=totem\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%";break;case 3.1:e="assets/minecraft/mcpatcher/cit/totem_of_undying",t="type=item\nmatchItems=totem_of_undying\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%";break;case 4:case 5:case 6:case 7:case 8:case 9:e="assets/minecraft/optifine/cit/totem_of_undying",t="type=item\nmatchItems=totem_of_undying\ntexture=%NAME%.png\nnbt.display.Name=ipattern:%NAME%"}a=parseInt(a),console.log(a,e,t);var i=new JSZip;i.file("pack.mcmeta",JSON.stringify({pack:{pack_format:a,description:"\xa77Custom \xa7cTotem of Undying\xa77 Pack!"}})),i.file("pack.png",canvasImg.src.substr(canvasImg.src.indexOf(",")+1),{base64:!0});var s=i.folder(e);$("tr").each(function(){var e=$(this).attr("id");if(console.log(e),e)try{var a=$(this).find(".inp").val().toLowerCase();s.file(a+".png",$(this).find("img").attr("src").split(",")[1],{base64:!0}),s.file(a+".properties",t.replace("%NAME%",a).replace("%NAME%",a))}catch(n){console.log(n)}}),i.generateAsync({type:"blob"}).then(function(t){saveAs(t,"CustomTotems-"+n.replace(" ","")+".zip")})}
