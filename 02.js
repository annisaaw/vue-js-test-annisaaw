function reverse(str) {
	var splitString = str.split(" ");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(" ");
    return joinArray;
}

console.log(reverse('saya ingin makan nasi goreng'));