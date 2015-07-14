window.onload = function(){
  alert('hello');
  document.getElementById("image").onclick = function() {
      EXIF.getData(this, function() {
          alert(EXIF.pretty(this));
      });
  }
};