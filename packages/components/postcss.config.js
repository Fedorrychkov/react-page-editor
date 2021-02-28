module.exports = {
	plugins: {
		"autoprefixer": {},
		"postcss-import": {},
		"postcss-csso": {},
		"postcss-nested": {},
		"postcss-custom-media": {
			importFrom: "./node_modules/@tokenplace/ui/build/common/custom-media.json",
		},
		"postcss-custom-properties": {
			preserve: false,
		},
		"postcss-calc": {},
		"postcss-color-function": {},
		"postcss-selector-matches": {},
		"postcss-flexbugs-fixes": {},
	},
}
