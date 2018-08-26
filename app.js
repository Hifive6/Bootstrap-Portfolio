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
if( $(this).val().length == 0 ) {
    $(this).parents('p').addClass('warning');
    
    }});