module.exports = {
	extends: "stylelint-config-standard",
	plugins: ["stylelint-order"],
	ignoreFiles: ["**/*.js*", "**/*.ts*"],
	rules: {
		indentation: ["tab"],
		"declaration-block-trailing-semicolon": "always",
		"declaration-empty-line-before": "never",
		"order/order": [
			["custom-properties", "declarations"],
			{
				disableFix: false,
			},
		],
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"],
			},
		],
		"order/properties-order": [
			[
				{
					groupName: "dimensions",
					emptyLineBefore: "never",
					properties: ["width", "height"],
				},
				{
					groupName: "font",
					emptyLineBefore: "never",
					properties: ["text-transform", "font-size", "font-weight", "color"],
				},
				{
					groupName: "flex",
					emptyLineBefore: "never",
					properties: ["display", "flex-flow", "flex-wrap", "flex-direction", "justify-content", "align-items"],
				},
				{
					groupName: "position",
					emptyLineBefore: "never",
					properties: ["position", "z-index", "left", "top"],
				},
				{
					groupName: "padding",
					emptyLineBefore: "never",
					properties: ["padding", "padding-left", "padding-top", "padding-right", "padding-bottom"],
				},
				{
					groupName: "margin",
					emptyLineBefore: "never",
					properties: ["margin", "margin-left", "margin-top", "margin-right", "margin-bottom"],
				},
			],
			{
				disableFix: false,
				unspecified: "bottomAlphabetical",
			},
		],
	},
}
