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
    requiredName();
    requiredEmail();
    
    });

function requiredName()
{
var empt = $("#valid").val().trim();
console.log(empt)
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

function requiredEmail()
{
var empt = $("#email-Input").val().trim();
console.log(empt)
if (empt === "")
{
alert("Please an Email");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}