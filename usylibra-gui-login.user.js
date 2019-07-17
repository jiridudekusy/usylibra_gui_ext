// ==UserScript==
// @name         LIBRA - Support for password managers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Switch accessCode1 input to text input.
// @author       Jiří Dudek
// @match        https://*/usy-librag01-gui/*/login*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==
let $ = window.$;

function setAccessCode1InputasText(retries){
    if(retries==0){
        console.error("LIBRA - Support fro password managers : cannot find accessCode1 input in the limit");
    }
    let input;
    input = $('input[name="accessCode1"]');
    console.log(input);
    if(input.length > 0){
        input[0].type = "text";
    }else {
        setTimeout(() => setAccessCode1InputasText(retries-1),100);
    }
}

(function() {
    'use strict';
    setAccessCode1InputasText(100);
})();
