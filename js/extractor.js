window.onload = function(){
  var container = document.getElementById("container");
  document.getElementById("image").onclick = function() {
    EXIF.getData(this, function(){
      var imgCap = EXIF.getIPTC(this, "caption");
      var imgKeys = EXIF.getIPTC(this, "keywords");
      var caption = document.createElement("p");
      caption.innerHTML = imgCap + ' | ' + imgKeys;
      container.appendChild(caption);
      playerSchool(imgKeys);
    });
  };

  function playerSchool (arr){
    var schoolCode = [];
    var schoolName = [];
    arr.forEach(function(element){
      var sku = element.match('^(?=.*[a-zA-Z])(?=.*[0-9])');
      if (sku instanceof Array){
        schoolCode.push(sku.input);
      }
    });
    console.log('School Code ', schoolCode);
    schoolCode.forEach(function (element){
      console.log('Element ', element);
      for (var i = 0; i < element.length; i++){
        // console.log(parseInt(element[i]));
        if (parseInt(element[i])){
          schoolName.push(element.substring(0, i));
        }
      }
    console.log('School Name ', schoolName);
    });
      function findSchool(string){
        if (school.hasOwnProperty(element)){
          // console.log(school[element]);
        }
        if (!(ILH.hasOwnProperty(element))){
          console.log(false);
        }
      }

    // arr.forEach(function(element){
    //   console.log(typeof element);
    // });
  }
};