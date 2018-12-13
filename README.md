# lovely--music-player
This plugin scraps trough all posts that contain the default iframe based audio player in tumblr and extract their media urls
Then replace them with instances of a div with two buttons "Play" & "Add to Queue"
jPlayer will appear wherever you place the class="jp-player" div and all its inner html

Turn draggable off/on (0/1)
~~~~
var Draggable = 0
~~~~
Post path in CSS format
~~~~
var PostPath = "#posts #indexaudioo"
~~~~
iframe path in CSS format relative to PostPath
~~~~
var iframePath = "span .audio_player iframe"
~~~~

Since there is no file hosting in tumblr I used the following dependencies (see index.html)
~~~~
https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/skin/blue.monday/css/jplayer.blue.monday.min.css
https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css
https://code.jquery.com/jquery-1.12.4.js
https://code.jquery.com/ui/1.12.1/jquery-ui.js
Https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js
https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/add-on/jplayer.playlist.min.js
~~~~
