{


//1 Write a click handler that targets the #play-pause buttons
$('button#play-pause').on('click', function() {

  //Play song by calling player.playPause()
  player.playPause();

  //Set playState attribute of #play-pause button to player.playState
  //to get the icons to show/hide appropriately
  $(this).attr('playState', player.playState);

  //The Play/Pause button needs to change by clicking on a song row
  //Go to song-list.js, find click event for song row, and
  //Set the playState attribute of button#play-pause to player.playState

});


//2 Write a click handler that targets the button#next
$('button#next').on('click',function() {

  //If song is not playing, then abort
  if (player.playState !== 'playing') {return; }

  //Use .indexOf method to get currentSongIndex from album.songs object
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;

  //If nextSongIndex is greater than equal to the length of album.songs, abort
  if (nextSongIndex >= album.songs.length) {return; }

  const nextSong = album.songs[nextSongIndex];

  //Call player.playPause() on the next song
  player.playPause(nextSong);

});


//3 Write a click hander that targets button#previous
$('button#previous').on('click',function() {

  //If song is not playing, then abort
  if (player.playState !== 'playing') {return; }

  //Use .indexOf() to get currentSongIndex from album.songs object
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const previousSongIndex = currentSongIndex - 1;
  const previousSong = album.songs[previousSongIndex];

  //If there is no previous song, abort
  if (previousSongIndex < 0) {return; }

  //Call player.playPause on the previous song
  player.playPause(previousSong);

});


//5 To change the song's playback position
//Create event handler that responds to input changes on the
//time control range input, using the .on() method to bind to any DOM event
$('#time-control input').on('input', function(event) {
    //use plaer object's .skipTo() method to change the time in audio soundFileUrl
    //.skipTo() accepts a percentage as a parameter
    //pass it the 'value' property of our seek bar, event.target
    player.skipTo(event.target.value);
});


//4 To make our time control's range input update every second
//to reflect the current time of the song,
//Use the setInterval() method (applies to the global window object)
//Pass 2 parameters: an empty callback function and the no. 1000
setInterval( () => {

  //If a song isn't playing, abort
  if (player.playState !== 'playing') {return; }

  //Convert current time to percentage before applying
  //a value for the range input, percent = (part/whole)*100
  //Use the player object's .getTime() to get the part
  //And the .getDuration() to get the whole
  const currentTime = player.getTime();
  const duration = player.getDuration();
  const percent = (currentTime/duration) * 100;

  //Update current time, use jQuery's .text() method
  //to set #time-control .current-time to the value of the currentTime
  $('#time-control .current-time').text(currentTime);

  //Now that we have percent, set the input's value
  //by using jQuery's .val() method, used to set or get the text
  //value of input or textarea elements
  $('#time-control input').val(percent);
}, 1000);


}
