<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  
</head>
<body>
    <p id="name">NANTHAWAT</p>
    <p class="test">NANTHAWAT</p>

    <form action="">
        <input type="text" id="num1">
        <input type="text" id="num2">
        <button type="button" id="Calculate">+</button>
        <button onclick="Calculate2()">-</button>
        <button onclick="Calculate3()">*</button>
        <button onclick="Calculate4()">/</button>

        <button onclick="myalert()">Alert</button>
    </form>

    <p id="result"></p>
    <p id="result2"></p>
    <p id="result3"></p>
    <p id="result4"></p>
</body>
<script src="main.js"></script>

</html>