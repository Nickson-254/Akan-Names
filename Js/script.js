var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var akanMale=["Kwasi","kwadwo","Kwabena","kwaku","Yow","Kwame","Kofi"];
var akanFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function naming() {
    var century=parseInt(document.getElementById("century").value);
    var year=parseInt(document.getElementById("year of birth").value);
    var month=parseInt(document.getElementById("month of the year").value);
    var day=parseInt(document.getElementById("day of the week").value);
    var gender=parseInt(document.getElementById("gender").value);

    var CC=century;
    var YY=year;
    var MM=month;
    var DD=day;

     var d =parseInt (((CC/4) -2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD ) %7

     if (CC <1 ||CC>25){
         alert("invalid css");
     }
     else if (YY<1 ||YY>90){
         alert("invalid yy");
     }
     else if (MM<1 ||MM>12){
         alert(e"invalid mm");
     }
     else if(DD<1 ||DD>31){
         alert("invalid dd");
     }
     else if(gender=== "Male"){
         alert("Your akan name is" + akanMale[d])

     }
     else if(gender=== "Female"){
        alert("Your akan name is" + akanFemale[d])
    }
    
    }
