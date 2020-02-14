function duplicateRemover (array) {
  let a = []
  array.map(x => 
    if(!a.includes(x) {
      a.push(x)
    })
  return a 
}

var city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

console.log(duplicateRemover(city));