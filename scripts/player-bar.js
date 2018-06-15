{

//Write a click handler that targets the #play-pause buttons
$('button#play-pause').on('click', function() {

  //call player.playPause()
  player.playPause();

  //Set playState attribute of #play-pause button
  //to get the icons to show/hide appropriately
  $(this).attr('playState',player.playState);

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

}
