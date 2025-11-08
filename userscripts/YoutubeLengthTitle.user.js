// ==UserScript==
// @name         YouTube Video Length in Tab Title
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Add the length of a YouTube video to the tab title
// @author       You
// @match        https://www.youtube.com/*
// @exclude      https://www.youtube.com/shorts/*
// @exclude      https://www.youtube.com/embed/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let count = 0;
    let maxCount = 10000;

    function setYoutubeTitle(){

       function formatTime(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let remainingSeconds = seconds % 60;

            hours = String(hours).padStart(2, '0');
            minutes = String(minutes).padStart(2, '0');
            remainingSeconds = String(remainingSeconds).padStart(2, '0');

            return `${hours}:${minutes}:${remainingSeconds}`;
        }

        console.log("maxCount: " + maxCount + " - count: " + count);
        if(count++ > maxCount){
            let message = "!!! maxCount reached !!!"
            console.log(message);
            if(document.title != message){
                document.title = message;
            }
            return
        }


        // var videoTitle = document.querySelector("#container h1 yt-formatted-string").innerText;
        // var videoLength = document.querySelector("span.ytp-time-duration").innerText;
        var videoTitle = ytplayer.config.args.title;
        var videoLen = parseInt(ytplayer.config.args.length_seconds);


        // var mvp = document.querySelector("#movie_player");
        // var videoTitle = mvp.getVideoData().title;
        // var videoLen = mvp.getVideoStats().len;

//        console.log(videoTitle);
//        console.log(videoLen);
        // var videoLength = new Date(videoLen*1000).toLocaleTimeString('en-US', { hour12: false });
        var videoLength = formatTime(videoLen);

        //var documentTitle = videoLength + " - " + videoTitle.replaceAll("  "," ") + " - YouTube";
        var documentTitle = videoLength + " - " + videoTitle.replace(/\s+/g, ' ') + " - YouTube";

        console.log('------------');
        console.log('documentTitle:  ' + documentTitle);
        console.log('document.title: ' + document.title);
        console.log('equal?          ' + (document.title == documentTitle));
        if(document.title == documentTitle){
            console.log('action:         ' + "no change");
        } else {
            document.title = documentTitle;
            console.log('action:         ' + "changed");
        }
        console.log('document.title: ' + document.title);

    }
    new MutationObserver(function(mutations) {
        console.log('------------');
//        console.log(mutations);
        mutations.forEach(mutation => console.log("Mutation to:    "+ mutation.target.text));
        setYoutubeTitle();
    }).observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    );

    // disconnect()
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

    setYoutubeTitle();

    // set again, because it is changed by youtube itself
    //    setTimeout(() => {
    //        setYoutubeTitle();
    //    }, 2000); // wait for 2 sec after the page load
})();


// window.addEventListener('load', function() {
// }, false);
