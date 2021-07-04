'use strict';

const tape = require('tape');
const converter = require('./index');

tape('Convert HEX to RAL', function(t) {
	t.plan(3);
	t.ok(converter.toRal('#292C2F') === 'RAL9011', ' expected value RAL9011');
	t.ok(converter.toRal('#F7FBF5') === 'RAL9016', ' expected value RAL9016');
	t.ok(converter.toRal('7E8182') === 'RAL9023', 'expected value RAL9023');
});

tape('Convert RAL to HEX', function(t) {
	t.plan(3);
	t.ok(converter.toHex('RAL9011') === '#292C2F', ' expected value #292C2F');
	t.ok(converter.toHex('9016') === '#F7FBF5', ' expected value #F7FBF5');
	t.ok(converter.toHex(9023) === '#7E8182', 'expected value #7E8182');
});
