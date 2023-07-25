function introduction(name) {
  let greating = `Hi, my name is ${name}.`;
  return greating;
}
const result = introduction("Aki");
console.log(result);

function introductionWithLanguage(name, language) {
  let message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return message;
}
const result1 = introductionWithLanguage("Aki", "Ember.js");
console.log(result1);

function introductionWithLanguageOptional(name, language = "Javascript") {
  let greetin = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return greetin;
}
let message4 = introductionWithLanguageOptional("Gracie");
console.log(message4);

function introductionWithLanguageOptional(name, language = "Javascript") {
  let greeting1 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  return greeting1;
}
let message3 = introductionWithLanguageOptional("Gracie", "Python");
console.log(message3);
