//document.getElementById("Calculate").addEventListener("click", function()
//{
    //var num1 = document.getElementById("num1").Value;
    //var num2 = document.getElementById("num2").Value;
    //var sum = parseInt(num1) + parseInt(num2);
    //var sum = parseInt(num1) - parseInt(num2);
    //var sum = parseInt(num1) * parseInt(num2);
    //var sum = parseInt(num1) / parseInt(num2);
    //document.getElementById("result").innerHTML = "SUM :" +sum
    //document.getElementById("result2").innerHTML = "SUM :" -sum
    //document.getElementById("result3").innerHTML = "SUM :" *sum
    //document.getElementById("result4").innerHTML = "SUM :" /sum
//});

document.getElementById("Calculate").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" +sum
});

document.getElementById("Calculate").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" -sum
});

document.getElementById("Calculate").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" *sum
});

document.getElementById("Calculate").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" /sum
});


function myalert(){
    var num1 = document.getElementById("num1").Value;
    var num2 = document.getElementById("num2").Value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" +sum
    alert("innerHTML = "SUM :" +sum")
}


