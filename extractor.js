window.onload = function(){
  // alert('hello');
  document.getElementById("image").onclick = function() {
    EXIF.getData(this, function(){
      console.log(EXIF.getTag(this, "ImageDescription"));
    });
  };
};