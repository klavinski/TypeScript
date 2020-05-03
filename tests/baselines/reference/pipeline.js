//// [pipeline.ts]
const uried = 'Foobar' |> encodeURI;

const squared = 3 |> ((n: number) => n * n);

const makeAdder = (addNum: number) =>
	(addTo: number) => addTo + addNum;

const added = 2 |> (1 |> makeAdder);


//// [pipeline.js]
var uried = encodeURI('Foobar');
var squared = (function (n) { return n * n; })(3);
var makeAdder = function (addNum) {
    return function (addTo) { return addTo + addNum; };
};
var added = (makeAdder(1))(2);
