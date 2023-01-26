// ==UserScript==
// @name         YouTube Video Length in Tab Title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add the length of a YouTube video to the tab title
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {

        var videoTitle = document.querySelector("#container h1 yt-formatted-string").innerText;
        var videoLength = document.querySelector("span.ytp-time-duration").innerText;

        document.title = videoLength + " - " + videoTitle + " - YouTube";
    }, 2000); // wait for 2 sec after the page load
})();
