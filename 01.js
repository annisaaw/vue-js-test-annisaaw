function grade(point) {
	if(point >= 90){
    	ret="A";
    } else if(point < 90 && point >=80){
    	ret="B";
    } else if(point < 80 && point >=70){
    	ret="C";
    } else if(point < 70 && point >=60){
    	ret="D";
    } else if(point <= 59){
    	ret="E";
    } else {
    	ret="error";
    }
	
    return ret;
}

console.log(grade(30));
console.log(grade(75));