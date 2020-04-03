let player;
const playerContainer = $('.player');


let eventsInit = () => {
    //play btn switch
    $('.player__start').click(e => {
        e.preventDefault();

        //const btn = $(e.currentTarget);

        if(playerContainer.hasClass('paused')) {
            //playerContainer.removeClass('paused');
            player.pauseVideo();
        } else {
            //playerContainer.addClass('paused');
            player.playVideo();
        }
    });
    //mute btn switch
    $('.player__mute').click(e => {
        e.preventDefault();
        const muteBtn = $(e.currentTarget);

        if(muteBtn.hasClass('player__mute--soundoff')) {
            muteBtn.removeClass('player__mute--soundoff');
            player.unMute();
        } else {
            muteBtn.addClass('player__mute--soundoff');
            player.mute();
        }
    });
};
//playback control
$('.player__playback').click(e => {
    const bar = $(e.currentTarget); //get the line
    const clickedPosition = e.originalEvent.layerX; //get the coords of poiner
    const newBtnPositionPercent = (clickedPosition/bar.width())*100;
    const newPlaybackPositionSec = (player.getDuration()/100) * newBtnPositionPercent;
    $('.player__playback-btn').css({
        left:newBtnPositionPercent+'%'
    })
    
    player.seekTo(newPlaybackPositionSec);

});
$('.player__splash').click(e => {
    player.playVideo();
});

// volume control 

$('.player__volume-scale').click(e => {
    const line = $(e.currentTarget); //get the scale's line
    const clickedPosition = e.originalEvent.layerX; //get the coords of poiner
    const newBtnPositionPercent = (clickedPosition/line.width())*100;
    $('.player__volume-btn').css( {
        left: newBtnPositionPercent+'%'
    })
    player.setVolume(newBtnPositionPercent);
});


const formatTime = timeSec => {   //there's no need of it but it's used in next function
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);
    function addZero(num) {
        return num < 10 ? '0${num}': num;
    };
    return '${minutes}:${seconds}';

};

 const onPlayerReady = () => {
    const volume = player.getVolume();
    $('.player__volume-btn').css( {
        left: volume+'%'
    });
     let interval;
     const durationSec = player.getDuration();
     $('.player__duration-estimated').text(formatTime(durationSec));
     if(typeof interval !=='undefined') {
         clearInterval(interval);
     };
     interval = setInterval(() => {
         const completedSec = player.getCurrentTime();
         const completedPercent = (completedSec/durationSec) * 100;
         $('.player__playback-btn').css({
             left: completedPercent +'%'
             
         });
         $('.player__duration-completed').text(formatTime(completedSec));
         if(completedPercent > 0) {
             $('.player__splash-photo').css({
                 //display: 'none'
                 height: 0
             });
             $('.player__splash::after').css({

             })
         }

     }, 1000);
 };

const onPlayerStateChange = event => {
    // -1 (unstarted)
    // 0 (ended)
    // 1 (playing)
    // 2 (paused)
    // 3 (buffering)
    // 5 (video cued).
    switch(event.data) {
        case 1 :
            playerContainer.addClass('player--active');
            playerContainer.addClass('paused');
            break;

        case 2:
            playerContainer.removeClass('player--active');
            playerContainer.removeClass('paused');
            break;

    }
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
      height: '405',
      width: '660',
      videoId: 'YmGBAiHnK0U',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
          controls: 0,
          disablekb: 0,
          showinfo: 0,
          rel: 0,
          autoplay: 0,
          modestbranding: 1,

      }
    });
  }

eventsInit();