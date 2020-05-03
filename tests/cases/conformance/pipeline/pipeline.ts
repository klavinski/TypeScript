const uried = 'Foobar' |> encodeURI;

const squared = 3 |> ((n: number) => n * n);

const makeAdder = (addNum: number) =>
	(addTo: number) => addTo + addNum;

const added = 2 |> (1 |> makeAdder);
