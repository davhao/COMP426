import mpg_data from './data/mpg_data.js';
import { getStatistics } from './medium_1.js';
import { removeKey } from '../mild/mild_2.js';

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/

/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */

export const allCarStats = {
	avgMpg       : mpg_data.reduce(
		(data, car) => ({
			city    : data.city + car.city_mpg / mpg_data.length,
			highway : data.highway + car.highway_mpg / mpg_data.length
		}),
		{ city: 0, highway: 0 }
	),
	allYearStats : getStatistics(mpg_data.map((car) => car.year)),
	ratioHybrids : mpg_data.reduce((numHybrids, car) => numHybrids + (car.hybrid ? 1 : 0), 0) / mpg_data.length
};

/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

export const moreStats = {
	makerHybrids          : Object.entries(
		mpg_data.reduce(
			(makes, car) =>
				car.hybrid
					? {
							...makes,
							[car.make]: [
								...(makes[car.make] || []),
								car.id
							]
						}
					: makes,
			{}
		)
	)
		.map((make) => ({
			make    : make[0],
			hybrids : make[1]
		}))
		.sort((a, b) => b.hybrids.length - a.hybrids.length),
	avgMpgByYearAndHybrid : Object.entries(
		mpg_data.reduce((totals, car) => {
			const { city_mpg, highway_mpg } = car;
			if (!totals[car.year]) {
				totals[car.year] = { hybrid: {}, notHybrid: {} };
			}

			if (car.hybrid) {
				totals[car.year].hybrid.city = (totals[car.year].hybrid.city || 0) + city_mpg;
				totals[car.year].hybrid.highway = (totals[car.year].hybrid.highway || 0) + highway_mpg;
				totals[car.year].hybrid.count = (totals[car.year].hybrid.count || 0) + 1;
			}
			else {
				totals[car.year].notHybrid.city = (totals[car.year].notHybrid.city || 0) + city_mpg;
				totals[car.year].notHybrid.highway = (totals[car.year].notHybrid.highway || 0) + highway_mpg;
				totals[car.year].notHybrid.count = (totals[car.year].notHybrid.count || 0) + 1;
			}

			return totals;
		}, {})
	).reduce((averagedMPGs, [ year, data
	]) => {
		data.hybrid.city /= data.hybrid.count;
		data.hybrid.highway /= data.hybrid.count;
		data.notHybrid.city /= data.notHybrid.count;
		data.notHybrid.highway /= data.notHybrid.count;

		removeKey(data.hybrid, 'count');
		removeKey(data.notHybrid, 'count');

		return { ...averagedMPGs, [year]: data };
	}, {})
};

// Tests
console.log(allCarStats);

console.log(moreStats);
