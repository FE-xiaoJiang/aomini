
function _deepEqual(objA, objB) {
	if (objA === objB) return true;

	if (typeof objA !== 'object' || objA === null || objA === undefined || typeof objB !== 'object' || objB === null || objB === undefined) {
		return false;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) return false;

	var hasOwn = Object.prototype.hasOwnProperty;
	for (var i = 0; i < keysA.length; i++) {
		if (!hasOwn.call(objB, keysA[i]) || !_deepEqual(objA[keysA[i]], objB[keysA[i]])) {
			return false;
		}
	}

	return true;
}

export {
	_deepEqual
};