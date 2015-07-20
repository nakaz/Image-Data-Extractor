window.onload = function(){
  // alert('hello');
  var container = document.getElementById("container");
  document.getElementById("image").onclick = function() {
    EXIF.getData(this, function(){
      var imgDesc = EXIF.getTag(this, "ImageDescription");
      var caption = document.createElement("p");
      caption.innerHTML = imgDesc;
      container.appendChild(caption);
    });
  };
};