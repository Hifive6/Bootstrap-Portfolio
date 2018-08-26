// $("#submit").on("click", function(){
//     var valid = $("#valid").val();
    
    
//      if (valid == )
//       { 
//          alert("Please add Name");  	
//          return false; 
//       }  	
//       return true; 
    
// })


// $('#valid').blur(function()
// {
//     
//     }
// });

$("#submit").on("click", function() {
    required();
    
    });

function required()
{
var empt = $("#valid").val().trim();
if (empt === "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}