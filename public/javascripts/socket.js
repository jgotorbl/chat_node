var socket = io();
var username = $("#usernameused").text();

//sending messages when clicking the button
$('#send').on("click", function(data){
  socket.emit('chat message', username+ ": " + $('#m').val());
  $('#m').val('');
  return false;
});

//sending messages submitting the web form
$('#message').submit( function(data){
  var sentText = $('#m').val();
  if(sentText ==''){
	return false;  
  }else{
	  socket.emit('chat message', username + ": " + $('#m').val());
	  $('#m').val('');
      return false;
  }
  
});

//receiving messages
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg.data));
});

//sending images
$("#thumb").on("click", function(){
	socket.emit('image',username+": "+ '<img src="./images/fb_like.png">');
});

//recceiving images
socket.on('image', function(data){
  $('#messages').append(data.image+"<br>");
});



