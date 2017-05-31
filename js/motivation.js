var quotesArr = [{"Les Brown": "Shoot for the moon. Even if you miss, you'll land among the stars."},
    {"Henry Ford": "Obstacles are those frightful things you see when you take your eyes off your goal."},
    {"Arnold H. Glasow": "Success isn't a result of spontaneous combustion. You must set yourself on fire."},
    {"Unknown": "Put your future in good hands - your own."},
    {"Edmund Hillary": "It is not the mountain we conquer but ourselves."},
    {"Charles M. Schwab": "The man who has done his best has done everything."},
    {"Terri Guillemets": "Put on your dream hat and dance all the way to success!"},
    {"Patch Adams": "Spread joy. Chase your wildest dreams."},
    {"Terri Guillemets": "There is no need to reach high for the stars. They are already within you — just reach deep into yourself!"},
    {"Unknown": "Keep shining, beautiful one. The world needs your light."},
    {"Henry Ford": "Don't find fault. Find a remedy."},
    {"Walt Disney": "The way to get started is to quit talking and begin doing"},
    {"Will Rogers": "Don't let yesterday take up too much of today"},
    {"Steve Jobs": "If you are working on something exciting that you really care about, you don’t have to be pushed. The vision pulls you."}
    ]
$(document).ready(function() {
  var keyPressed = false;
  $('.name').text('');
  $('#questions').show();
  $('.result').hide();
  var nameEntered = false;
  $(document).keypress(function(evt) {
    if (keyPressed == false) {
      if (nameEntered === false) {
        $('#nameInput').focus();
      }
      keyPressed = true;
    }
    if (evt.which === 13) {
      evt.preventDefault();
      nameEntered = true;
      $('#questions').hide();
      var str = $('#nameInput').val();
      $('.name').text(str + ',');
      $('.result').show();
      var randomNumber = Math.floor(Math.random() * (quotesArr.length));
      for (var key in quotesArr[randomNumber]) {
        var val = quotesArr[randomNumber][key];
        $(".quote").text(val);
        $(".author").text('--' + key);
      }
    }
  });

  $(document).keydown(function(evt) {
    if (evt.which === 13) {
      evt.preventDefault();
      nameEntered = true;
      $('#questions').hide();
      var str = $('#nameInput').val();
      $('.name').text(str + ',');
      $('.result').show();
      var randomNumber = Math.floor(Math.random() * (quotesArr.length));
      for (var key in quotesArr[randomNumber]) {
        var val = quotesArr[randomNumber][key];
        $(".quote").text(val);
        $(".author").text('--' + key);
      }
    }
  });
});