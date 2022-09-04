// ==UserScript==
// @name         Mario bros
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mario bros in 'mijn gebruiker' schoolware
// @author       You
// @match        https://vlot-leerlingen.durme.be/start.html
// @icon         https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/dcl6qui-b8412a3c-115f-47c6-b40e-2b2fd77eb0f8.png/v1/fill/w_600,h_736,strp/super_mario__mario_icon_2d_by_joshuat1306_dcl6qui-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM2IiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kY2w2cXVpLWI4NDEyYTNjLTExNWYtNDdjNi1iNDBlLTJiMmZkNzdlYjBmOC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.pdnNdKyYUawtgJZ7q4TnSxT3N3h4VzKZa_22--POa-M
// @grant        none
// ==/UserScript==

let playing = false;

setInterval(function(){

    let url = document.URL;

    if(url == "https://vlot-leerlingen.durme.be/start.html#!fn=myprofilevue" && playing == false){
        //alert('correct page found!');
        try{
            var iframe = document.getElementById('iframeMyProfileIdElement');
            console.log(iframe)
            iframe.src = "https://jcw87.github.io/c2-smb1/"
            playing = true;
            document.getElementById("wisa-center_header_hd-textEl").textContent="Super Mario Bros."; //wisa-center_header_hd-textEl
          //alert('succes!')
        } catch(err){
            playing = false;
        }
    }else if(url != "https://vlot-leerlingen.durme.be/start.html#!fn=myprofilevue"){
        playing = false;
    }

}, 300);
