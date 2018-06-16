//How to grab album object from album-data.js?

//for_each albumn.songs
  //create song_element comprised of
    //table row
    //3 columns of table data
  //append song element to #song-list
//end for_each

//You can call other objects (.js files) from other .js files
//So long as the .js is referenced by the index.html


{
  //Use .forEach() to iterate through album.songs
  //For the callback function, pass it two parameters:
  //The 'song' param holds the 'song' object for each loop iteration
  //The 'index' holds the array index, we'll use to render the song number
  album.songs.forEach( (song, index) => {
    //Create a song element using the jQuery function
    //Pass it a tempalte literal so we can insert data directly into the string
    //Assign it to song.element so the player object can access the element
    song.element = $(`
      <tr>
        <td>${index+1}</td>
        <td>
          <button>
            <span class="song-number">${index+1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `);

    //Pass the 'song' object into the playPause() method
    //insde the player object inside a click event handler
    song.element.on('click', event => {
      helper.playPauseAndUpdate(song);
      $('button#play-pause').attr('playState', player.playState);
    });

    $('#song-list').append(song.element);
  });

}
