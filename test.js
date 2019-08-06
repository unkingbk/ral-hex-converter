'use strict';

const tape = require('tape');
const converter = require('./index');

tape('Convert HEX to RAL', function(t) {
	t.plan(3);
	t.ok(converter.toRal('#1C1C1C') === 'RAL9011', ' expected value RAL9011');
	t.ok(converter.toRal('#f6f6f6') === 'RAL9016', ' expected value RAL9016');
	t.ok(converter.toRal(828282) === 'RAL9023', 'expected value RAL9023');
});

tape('Convert RAL to HEX', function(t) {
	t.plan(3);
	t.ok(converter.toHex('RAL9011') === '#1C1C1C', ' expected value #1C1C1C');
	t.ok(converter.toHex('9016') === '#F6F6F6', ' expected value #F6F6F6');
	t.ok(converter.toHex(9023) === '#828282', 'expected value #828282');
});
