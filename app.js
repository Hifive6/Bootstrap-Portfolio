$("#submit").on("click", function() {
    requiredName();
    
    
    });

function requiredName()
{
empt = $("#valid").val().trim();
emptEmail = $("#email-Input").val().trim();
valid = empt && emptEmail
console.log(valid)
if (valid === "")
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

// function requiredEmail()
// {

// console.log(empt)
// if (empt === "")
// {
// alert("Please an Email");
// return false;
// }
// else 
// {
// alert('Code has accepted : you can try another');
// return true; 
// }
// }