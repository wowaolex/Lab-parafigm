console.log('16th variant');


console.log('№1');
var marki = ['Chevrolet', 'Bentley', 'Mercedes-Benz', 'Nissan', 'Renault', 'Aston Martin', 'Toyota', 'Volkswagen', 'Mazda', 'Opel', 'Honda', 'LADA', 'Ferrari', 'Peugeot', 'Ford', 'Audi', 'Suzuki', 'Subaru', 'Lexus', 'Porsche', 'Cadillac', 'Tesla', 'Rolls-Royce', 'Chery', 'Hummer'];
console.log(marki);


console.log('№2');
console.log(marki.filter(x => x.length < 10));  


console.log('№3');
function glasnie(a)
{
    let bukvi = 'AEIOUYaeiouy';
    let x = 0;
    for(let i = 0; i < a.length; i++){
    if(bukvi.indexOf(a[i]) != -1)
    x++;}
return x;
}

marki.sort((a, b) => {
    if (glasnie(a) > glasnie(b))
    return 1;
    else
    return -1;
});
console.log(marki);		


console.log('№4');
let codes = [];
for(let i = 0; i < marki.length; i++) {
	let word = [];
	for(let j = 0; j < marki[i].length; j++) {
		word.push(marki[i].charCodeAt(j));
	}
	codes.push(word);
}
console.log('\n');
for(let i = 0; i < marki.length; i++) {
	console.log(marki[i] + ": " + JSON.stringify(codes[i]) + "\n");
}

let words = [];
for(let i = 0; i < marki.length; i++) {
	words.push(marki[i].split(' '));
}
console.log('\n');
for(let i = 0; i < marki.length; i++) {
	console.log(words[i]);
}

console.log('\n');
console.log('№5');
global = {};
global.api={}

global.api.searchBySubstr = function(subs) {
  let ans = [];
  for(let i = 0; i < marki.length; i++) {
    if(marki[i].indexOf(subs) != -1)
        ans.push(marki[i]);
  }
  return ans;
}

global.api.searchInText = function(text) {
  let ans = [];
  for(let i = 0; i < marki.length; i++) {
    if(text.indexOf(marki[i]) != -1) {
      ans.push(marki[i]);
    }
  }
  return ans;
}














                                                