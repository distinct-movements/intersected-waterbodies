var iframe = document.createElement('iframe');
iframe.setAttribute('src', "https://player.vimeo.com/video/469295212?autoplay=1&loop=1&color=000&title=0&byline=0&portrait=0&autopause=0&quality=4K");
iframe.setAttribute('style', "position:absolute;top:0;left:0;width:100%;height:100%;");
iframe.setAttribute('allow', "autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer");
iframe.setAttribute('frameborder', "0");
iframe.setAttribute('allowfullscreen', true);

function toggle_360() {

    var el = document.querySelectorAll('.ac_second_video_container')[0];
    var vid_home = document.getElementById("bgvid"); 
    var vid_transition = document.getElementById("bgvid3"); 
    var vimeo_parent = document.querySelectorAll('.vimeo_block')[0];
    
    if (el.classList.contains("ac_open")) {
        el.classList.remove("ac_open");
        vid_home.play();
        vid_transition.pause();
        vid_transition.currentTime = 0;
        vid_transition.load();
        vimeo_parent.removeChild(iframe);
    } else {
        el.classList.add("ac_open");
        vid_home.pause();
        vid_transition.play();
        vimeo_parent.appendChild(iframe);
    }
    
}

function toggle_main() {
    
    var el = document.querySelectorAll('.ac_main_video_container')[0];
    
    var vid = document.getElementById("bgvid2"); 
    var vid_home = document.getElementById("bgvid"); 
    
    if (el.classList.contains("ac_open")) {
        el.classList.remove("ac_open");
        vid.pause();
        vid_home.play();
    } else {
        el.classList.add("ac_open");
        vid.play();
        vid_home.pause();
    }
    
}