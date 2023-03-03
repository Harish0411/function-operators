
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("enter operator");

let sum1 = () => num1+num2
let sub = () => num1 -num2
let mul = () => num1 *num2
let div = () => num1 /num2
let mod = () => num1 %num2



switch(operator){
     case "+":
	     document.write(sum1());
		 break;
	case "-":
	     document.write(sub());
		 break;
	case "*":
	    document.write(mul());
		 break;
	 case "/":
	     document.write(div());
		 break;
	 case "%":
	     document.write(mod());
		 break;
	 case "**":
	     document.write(exp());
		 break;
	 default:
	     document.write("enter correct operator");
}
