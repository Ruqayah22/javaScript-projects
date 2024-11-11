// this project to count the words, letters in the string 

// const s = "hello world";
// const s = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const s = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and.";

// console.log(s.substring(0, 5));
// console.log(s.split(""));
// console.log(s.split(" "));

// count the letter with the space 
const sl = s.length;
console.log(sl);

// count the words in the string 
const sp = s.split(" ");
const lsp = sp.length;
console.log(lsp);


// const sws = s.trim() // to remove the space around the string 
// console.log(sws);

// // remove the space from the string 
// const noSpaces = s.split(" ").join("");
// console.log(noSpaces);

// count the letter without the space
const noSp = s.split(" ").join("");
const lenNoSp = noSp.length;
console.log(lenNoSp);

// to count the length of the Sentences in the paragraph 
const sen = s.split('.')
const legSen = sen.length;
console.log(legSen);

