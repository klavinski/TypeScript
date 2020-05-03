//// [pipeline.ts]
const uried = 'Foobar' |> encodeURI;

const squared = 3 |> ((n: number) => n * n);

const makeAdder = (addNum: number) =>
	(addTo: number) => addTo + addNum;

const added = 2 |> (1 |> makeAdder);

const zeroOrOne = () => (Math.floor(Math.random() * 2)) % 2;
const ternaryFunctions = 11 |>
	(zeroOrOne() === 0
		? (x: number) => x - 1
		: (x: number) => x + 1
	);


//// [pipeline.js]
var uried = encodeURI('Foobar');
var squared = (function (n) { return n * n; })(3);
var makeAdder = function (addNum) {
    return function (addTo) { return addTo + addNum; };
};
var added = (makeAdder(1))(2);
var zeroOrOne = function () { return (Math.floor(Math.random() * 2)) % 2; };
var ternaryFunctions = (zeroOrOne() === 0
    ? function (x) { return x - 1; }
    : function (x) { return x + 1; })(11);
