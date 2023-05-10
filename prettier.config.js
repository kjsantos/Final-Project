module.exports = {
	plugins: [require('prettier-plugin-tailwindcss')],
	trailingComma: 'es5',
	tabWidth: 4,
	usetabs: true,
	semi: false,
	singleQuote: true,
	tailwindConfig: './tailwind.config.js',
	tailwindAttributes: ['myClassList'],
}
