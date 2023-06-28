export default function createIteratorObject(report) {
    const keys = Object.keys(report);
    return {
	next() {
	    const key = keys.shift();
	    return {
		value: key,
		done: key === undefined,
	    };
	},
    };
}
