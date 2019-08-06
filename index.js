/// <reference path="./index.d.ts" />
const { RalPalette, HexPalette, HexRal } = require('./colors');

function Converter() {
	this.rals = RalPalette;
	this.hex = HexPalette;
}

Converter.prototype.toHex = function(ral) {
	const sanitizeRal = /\d*$/m;

	const hex = Object.keys(HexRal).find(function(hexKey) {
		return sanitizeRal.exec(HexRal[hexKey])[0] === sanitizeRal.exec(ral)[0];
	});

	if (!ral || !hex) throw new Error(`Unknown RAL code: '${ral}'`);
	return hex;
};

Converter.prototype.toRal = function(hex) {
	const sanitizeHex = /[0-9A-z]\S*/gm;

	const key = `#${sanitizeHex.exec(hex)[0].toUpperCase()}`;
	const ral = HexRal[key];

	if (!ral || !hex) throw new Error(`Unknown Hex code: '${hex}'`);

	return ral;
};

const instance = new Converter();

module.exports = instance;
