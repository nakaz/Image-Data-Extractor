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
    console.log(arr);

    var school, number;

    var schoolCode = arr.filter(function(s){
      return /^[a-zA-Z]+\d+$/.test(s);
    });

    schoolCode.forEach(function(el){
      school = el.match('[a-zA-Z]+')[0].toUpperCase();
      number = el.match('[0-9]+')[0];

      // Validation for Pac5
      if (school === "P"){
        school = el.substring(0,2);
        number = el.substring(2);
      }

      console.log(schools[school], number);

    });
  }
};