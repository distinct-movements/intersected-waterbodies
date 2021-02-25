function toggle_360() {
      

    var el = document.querySelectorAll('.ac_second_video_container')[0];
     var vid_home = document.getElementById("bgvid"); 
     var vid_transition = document.getElementById("bgvid3"); 

    if (el.classList.contains("ac_open")) {
        el.classList.remove("ac_open");
      vid_home.play();
      vid_transition.pause();
       vid_transition.currentTime = 0;
       vid_transition.load();
  } else {
        el.classList.add("ac_open");
      vid_home.pause();
      vid_transition.play();
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