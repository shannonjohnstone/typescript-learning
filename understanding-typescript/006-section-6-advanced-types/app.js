"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('dustin', 'zag');
result.split('');
const result2 = add(1, 'zag');
result2.split('');
const result3 = add('dustin', 1);
result3.split('');
const result4 = add(2, 1);
result4.toFixed();
