class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);

    const durationPretty = player.prettyTime(song.duration);
    $('#time-control .total-time').text(durationPretty);

  }
}

const helper = new Helper();
