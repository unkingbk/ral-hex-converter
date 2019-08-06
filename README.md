# Color converter (RAL, HEX)

Convert RAL color codes to HEX codes. 
Data table [this gist](https://gist.github.com/lunohodov/1995178).

## Installation

```bash
npm install --save ral-hex-converter
```

## Usage

```js
const converter = require('ral-hex-converter')

const RAL_COLOR = converter.toRal(5025) // '#2A6478' ('RAL5025')
const HEX_CODE = converter.toHex('#C35831') // 'RAL2013'  ('#C35831')

const HEX_PALETTE = converter.hex // Return RAL palette in HEX codes
const RAL_PALETTE = converter.ral // Return RAL palette in RAL colors
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/unkingbk/ral-hex-converter/issues).
