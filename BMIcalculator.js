function bmi(weight,height)
{
 var bmi = weight/(height**2);
//  alternatively, var bmi = weight/Math.pow(height,index);

console.log("your bmi is " + Math.round(bmi) +"kg/m^2");
}

bmi(65,1.8);
