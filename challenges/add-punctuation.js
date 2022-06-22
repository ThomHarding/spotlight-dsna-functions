function addPunctuation (punctuation) {
    return (string) => {
        return string + punctuation;
    }
}

const addExcitement = addPunctuation('!!!');
console.log(addExcitement('Hello World'));
// Hello World!!!
console.log(addExcitement('Pokemon, catch em all'));
// Pokemon, catch em all!!!

const addUnsure = addPunctuation('?!?');
console.log(addUnsure('Hello World'));
// Hello World?!?
console.log(addUnsure('Pokemon, catch em all'));
// Pokemon, catch em all?!?