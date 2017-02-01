// ==UserScript==
// @name         Github: CommentSkipFields
// @namespace    https://github.com/muescha/UserScriptsAndStyleScripts
// @version      0.3
// @description  skip select attachmend and skip html markup help to get comment on TAB - available in Sections: Issues, PullRequest,Gist
// @author       Muescha
// @match        https://github.com/*/*/issues/*
// @match        https://github.com/*/*/pull/*
// @match        https://gist.github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll("p.drag-and-drop .default input, .tabnav-extra").forEach(function(el){
        ///console.log(el);
        el.setAttribute("tabindex","-1");
    });
})();
