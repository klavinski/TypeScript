//// [pipelineDecoratorFunction.ts]
function greets (person) {
	person.greet = () => `${person.name} says hi!`;
	return person;
}
function ages (age) {
	return function (person) {
		person.age = age;
		person.birthday = function () { person.age += 1; };
		return person;
	}
}
function programs (favLang) {
	return function (person) {
		person.favLang = favLang;
		person.program = () => `${person.name} starts to write ${person.favLang}!`;
		return person;
	}
}

function Person (name, age) {
	return { name: name } |> greets |> ages(age);
}
function Programmer (name, age) {
	return { name: name }
		|> greets
		|> ages(age)
		|> programs('javascript');
}


//// [pipelineDecoratorFunction.js]
function greets(person) {
    person.greet = function () { return person.name + " says hi!"; };
    return person;
}
function ages(age) {
    return function (person) {
        person.age = age;
        person.birthday = function () { person.age += 1; };
        return person;
    };
}
function programs(favLang) {
    return function (person) {
        person.favLang = favLang;
        person.program = function () { return person.name + " starts to write " + person.favLang + "!"; };
        return person;
    };
}
function Person(name, age) {
    return ages(age)(greets({ name: name }));
}
function Programmer(name, age) {
    return programs('javascript')(ages(age)(greets({ name: name })));
}
