type AddInput = number | string;

function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;

function add(a: AddInput, b: AddInput): string | number {
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
