{

//Insert album.data into the DOM #album-title element
$('#album-title').text(album.title);

//Use .attr() method to add album.albumArtUrl (from album-info.js) to the
//src attribute of the img#album-cover-art DOM element (from index.html).
$('img#album-cover-art').attr('src',album.albumArtUrl);

//artist Info
$('.artist').text(album.artist);

//release info
$('#release-info').text(album.releaseInfo);

}
