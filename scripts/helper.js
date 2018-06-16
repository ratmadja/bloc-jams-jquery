class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    //update the total time on song change
    $('#time-control .total-time').text(song.duration);
  }
}

const helper = new Helper();
