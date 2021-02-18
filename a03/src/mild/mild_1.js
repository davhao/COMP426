/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

export function sumToString(a, b) {
	return `${a} + ${b} = ${a + b}`;
}

/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
	const res = [];
	for (let i = startNumber; i <= endNumber; i++) {
		res.push(i);
	}

	return res;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

export function maxAndMin(numbers) {
	return {
		min : Math.min(...numbers),
		max : Math.max(...numbers)
	};
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */

export function countArray(array) {
	return array.reduce((freq, el) => {
		return { ...freq, [el]: (freq[el] || 0) + 1 };
	}, {});
}

// Tests
console.log(sumToString(6, 9));

console.log(getIncreasingArray(1, 10));

console.log(
	maxAndMin([
		1,
		2,
		3,
		4,
		5
	])
);

console.log(
	countArray([
		3,
		6,
		3,
		2,
		2,
		3,
		'some',
		'hello',
		'some',
		[
			1,
			2
		]
	])
);
