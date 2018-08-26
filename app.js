$("#submit").on("click" function(){
    var valid = document.from1.name1.value;
    console.log(valid);
     if (valid === " ")
      { 
         alert("Please add Name");  	
         return false; 
      }  	
      return true; 
    
})


    