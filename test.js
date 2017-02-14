import test from 'ava';

var f = require('./index');

test('bytes', t => {
  t.is(f(0, 'byte'), '0 B');
	t.is(f(0.4, 'byte'), '0.4 B');
	t.is(f(0.7, 'byte'), '0.7 B');
	t.is(f(10), '10 B');
	t.is(f(10.1), '10.1 B');
	t.is(f(999), '999 B');
	t.is(f(1001), '1 kB');
	t.is(f.byte(1001), '1 kB');
	t.is(f.byte(1e16), '10 PB');
	t.is(f.byte(1e30), '1000000 YB');
});

test('bytes negative', t => {
  t.is(f(-0.4), '-0.4 B');
	t.is(f(-0.7), '-0.7 B');
	t.is(f(-10.1), '-10.1 B');
	t.is(f(-999), '-999 B');
	t.is(f(-1001), '-1 kB');
});
