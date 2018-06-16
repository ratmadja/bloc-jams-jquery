{


//Write a click handler that targets the #play-pause buttons
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


//Write a click handler that targets the button#next
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


//Write a click hander that targets button#previous
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


}
