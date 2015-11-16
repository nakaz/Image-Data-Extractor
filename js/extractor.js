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

    var schoolCode = arr.filter(function(s){
      return /^[a-zA-Z]+\d+$/.test(s);
    });

    schoolCode.forEach(function(el){
      var school = el.match('[a-zA-Z]+');
      var number = el.match('[0-9]+');
      school = school[0];
      number = number[0];

      if (school[0] === "P"){
        school = el.substring(0,2);
        number = el.substring(2);
      }


      console.log(school, number);
    });

    // var schoolCode = [];
    // var schoolName = [];
    // arr.forEach(function(element){
    //   var sku = element.match('^(?=.*[a-zA-Z])(?=.*[0-9])');
    //   if (sku instanceof Array){
    //     schoolCode.push(sku.input);
    //   }
    // });
    // console.log('School Code ', schoolCode);
    // schoolCode.forEach(function (element){
    //   console.log('Element ', element);
    //   for (var i = 0; i < element.length; i++){
    //     // console.log(parseInt(element[i]));
    //     if (parseInt(element[i])){
    //       schoolName.push(element.substring(0, i));
    //     }
    //   }
    // console.log('School Name ', schoolName);
    // });
    //   function findSchool(string){
    //     if (school.hasOwnProperty(element)){
    //       // console.log(school[element]);
    //     }
    //     if (!(ILH.hasOwnProperty(element))){
    //       console.log(false);
    //     }
    //   }

    // arr.forEach(function(element){
    //   console.log(typeof element);
    // });
  }
};

// (\w+[1-9])\w*\
// (\w+\B\d\b)