var Draggable = 0
var PostPath = "#posts #indexaudioo"
var iframePath = "span .audio_player iframe"
var WindowWidth = $(window).width();
var WindowHeight = $(window).height();
var jPlayerBackgroundColour = '255,255,255,1';

$(document).ready(function() {

  console.log("Waiting for document to load");
  console.log("Preventing iframes from render");
  $( PostPath ).each( function( index, element ){
    $(iframePath,this).css('visibility', 'hidden');
  });
  $("#jp_container_1").css('z-index', '99999');
  $(".jp-interface").css('background-color', 'transparent');
  if (Draggable > 0){
    console.log('Draggable activated');
    $("#jp_container_1").css('position:', 'fixed');
    $("#jp_container_1").css('top', (WindowHeight * 0.99) - $("#jp_container_1").height() + 'px');
    $("#jp_container_1").css('right', WindowWidth * 0.01 + 'px');
    $( "#jp_container_1" ).draggable();
  }

});
$(window).on("load", function() {
  console.log('Initializing media player');
  var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
  },[],{
    playlistOptions: {
      enableRemoveControls: true
    },
    supplied: "mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true
  });

  console.log('Analyzing posts with parameters: ' + '"' + PostPath + '/' + iframePath + '"');
  $( PostPath ).each( function( index, element ){
    console.log('Scrapping information...');
    var scrappedinfo = $(iframePath, this).contents().find(".native-audio-container");
    var trackthumbnail = '';
    var trackname = '';
    var trackartist = '';
    var trackurl = '';
    trackthumbnail = scrappedinfo.attr('data-album-art');
    trackname = scrappedinfo.attr('data-track');
    trackartist = scrappedinfo.attr('data-artist');
    trackurl = scrappedinfo.attr('data-stream-url');
    console.log('Found: ' + trackname + " - " + trackartist + ", " + trackurl);
    console.log('Removing iframe from post, replacing with div')
    $(iframePath,this).remove();
    $(iframePath.replace('iframe',''), this).append('<a id="listen" ' + 'href="#"">• Play</a>');
    $(iframePath.replace('iframe',''), this).append('<a id="" ' + 'href="#""> | </a>');
    $(iframePath.replace('iframe',''), this).append('<a id="addtoplaylist" ' + 'href="#"">  • Add to Queue</a>');
    $(iframePath.replace('iframe','') + " #addtoplaylist").css('width', '100');
    $(iframePath.replace('iframe','') + " #addtoplaylist").css('height', '27');
    $(iframePath.replace('iframe','') + " #addtoplaylist").css('background-color', 'transparent');
    $(iframePath.replace('iframe','') + " #listen", this).click( function() {
      myPlaylist.add({
        title:trackname,
        artist:trackartist,
        free:true,
        mp3:trackurl
      });
      myPlaylist.play(-1)
    });

    $(iframePath.replace('iframe','') + " #addtoplaylist", this).click( function() {
      myPlaylist.add({
        title:trackname,
        artist:trackartist,
        free:true,
        mp3:trackurl
      });
    });
  });

});
