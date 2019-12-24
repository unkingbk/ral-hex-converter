/// <reference path="./index.d.ts" />
const { RalPalette } = require('./colors');

function Converter() {

}

Converter.prototype.fromRal  = function(ralName) {
	const sanitizeRalReg = /\d*$/m;
	const sanitizedRal = sanitizeRalReg.exec(ralName)[0]

	return Object.values(RalPalette).find(function(ral) {
		return sanitizeRalReg.exec(ral.RAL)[0] === sanitizedRal;
	});
};

Converter.prototype.fromHex = function(hex)  {
	const sanitizeHex = /[0-9A-z]\S*/gm;

	const key = `#${sanitizeHex.exec(hex)[0].toUpperCase()}`;
	return Object.values(RalPalette).find(function(ral) {
		return ral.HEX.toUpperCase() === key
	});
}

Converter.prototype.toHex = function(ralName) {
	const RAL = this.fromRal(ralName)

	if (!ralName || !RAL) throw new Error(`Unknown RAL code: '${ralName}'`);
	return RAL.HEX;
};

Converter.prototype.toRal = function(hex) {
	const RAL = this.fromHex(hex)

	if (!RAL || !hex) throw new Error(`Unknown Hex code: '${hex}'`);

	return RAL.RAL;
};

const instance = new Converter();

module.exports = instance;
