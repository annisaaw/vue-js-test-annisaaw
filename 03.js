function reverse(str) {
	var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    
  return str+joinArray;
}

console.log(reverse('---ccv'));