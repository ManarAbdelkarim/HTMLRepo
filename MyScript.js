// <script type="text/javascript">

var val = 0;

     

function Cal(){

    
debugger;

var price = document.getElementById("price").value;
var val = document.getElementById("count").value;
const  matches= document.getElementById("discount").value;
var mat = matches.toUpperCase();

while(mat !== "DISC10" && mat !=="DISC25" && mat !== "DISC50")
{
document.getElementById("answer").innerHTML = "Please enter a valid discount code" ; 
var matches2= prompt("enter the write code");
mat = matches2.toUpperCase();

}
var discount = matches2.match(/(\d+)/)[0]; 



if (val==0) {
document.getElementById("answer").innerHTML = "Choose at least one item" ; 
}
else{
if (discount ==0) {

var resule = price* val ;
document.getElementById("answer").innerHTML = "The total is"+ resule + "JD" +"no discount has been applied"; 
}

else{
if ((val *price) <= 100 ) {

var resule = (price*val) ;
document.getElementById("answer").innerHTML = "The total is "+ resule+ "JD , no discount has been applied ,to get the discount the amount should be greater than 100 JD" ; 
}
else{

var resule = (price * val) - ((price * val)*(discount/100));
document.getElementById("answer").innerHTML = "The discount has been applied. The total is "+ resule + "JD"  ; 
}

}
}
}





function theme(){

    debugger;
     if (document.getElementById("body").style.background == "white") {
    
  document.getElementById("body").style.background = 'black';
  
      
      
  }
 else
    {
        document.getElementById("body").style.background = 'white';
        document.getElementById("footer").style.color = "#333"

           for (let index = 0; index < 8; index++) {

                document.getElementsByClassName("desc")[index].style.color = "antiquewhite";
                
                document.getElementsByClassName("desc")[index].style.border = "solid antiquewhite 5px";
                document.getElementsByClassName("desc")[index].style.background = "#333";
              
             
             
         }
           
    }


 }


 window.onload = (function() {
    // document.getElementById("body").style.background = 'black';
    var len = prompt("choose the number of image in the page (from 1 to 8)");
    debugger
    for (var i = 0; i < len ; i++) {

        document.getElementsByClassName("pop")[i].style.display = "block";
        document.getElementsByClassName("desc")[i].style.display = "block";
        

      }
 
 });
 
// </script>

//     $('.pop').dblclick(function(){
// debugger;
       
//         $(this).remove();
   
//     });
    // function Theme() {
         
    // }

     //  $('#theme').click(function(){
    //  debugger;
    //      if (document.getElementById("body").style.background == "white") {
        
    //   document.getElementById("body").style.background = 'black';
      
          
          
    //   }
    //  else
    //     {
    //         document.getElementById("body").style.background = 'white';
    //         $(".desc").css("color", "antiquewhite");
    //       $(".desc").css("border", "solid antiquewhite 5px");
    //        $(".desc").css("background-color", "#333");
    //       $("#title").css("-webkit-text-stroke", "1px black");
         
          
    //     }

    //  });
//         function pop(){
//             debugger;


// var bord = document.getElementsByClassName("pop")[0].style.border;
// if (bord == 'rgb(255, 255, 255)')
//     {
            
//         document.getElementsByClassName("pop")[0].style.border =  "solid green 3px ";
//         val += 1;

//     }
//         else{
//             document.getElementsByClassName("pop")[0].style.border = "rgb(255, 255, 255)";
//         val -= 1;
//         }
   
//     }

// function Cal2(){
//             debugger;
//         var price = document.getElementById("price").value;
//         var count = document.getElementById("count").value;
//         var discount = document.getElementById("discount").value;
//         if ((count *price) <= 100) {

//              document.getElementById("answer").innerHTML = "The amount should be greater than 100 JD" ; 
//         }
//         else{

//             var resule = (price*count) - ((price*count)*(discount/100))
//         document.getElementById("answer").innerHTML = resule ; 
//         }
        


//     }