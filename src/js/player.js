let player;
const playerContainer = $('.player');


let eventsInit = () => {
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
};

$('.player__playback').click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
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

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);
    function addZero(num) {
        return num < 10 ? '0${num}': num;
    };
    return '${minutes}:${seconds}';

};

 const onPlayerReady = () => {
     let interval;
     const durationSec = player.getDuration();
     console.log(durationSec);
     $('.player__duration-estimated').text(formatTime(durationSec));
     console.log(interval);
     if(typeof interval !=='undefined') {
         clearInterval(interval);
     };
     console.log(interval);
     interval = setInterval(() => {
         const completedSec = player.getCurrentTime();
         const completedPercent = (completedSec/durationSec) * 100;
         $('.player__playback-btn').css({
             left: completedPercent +'%'
             
         });
         console.log(completedPercent);
         $('.player__duration-completed').text(formatTime(completedSec))

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