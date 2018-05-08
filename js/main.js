var num1 = 2;
var num2 = 5;
function wiekszaLiczba (num1, num2){
    if (num1 > num2) {
    console.log(num1);
    } else if(num2 > num1) {
        console.log(num2);
    } else {
        console.log("liczby są równe")
    }
}
wiekszaLiczba(num1, num2);