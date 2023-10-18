/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Slate-mamatom',
		author: 'mamatom',
		description: `A fork of DiscordStyles/Slate`,
		version: '1.2',
		source: 'https://github.com/mamatom/Slate/',
	},
	base: {
		output: 'dist/dist'
	},
	baseImport: 'https://mamatom.github.io/Slate/dist/Slate.css',
	addons: [
		['./src/addons/_toolbar-actions.scss', 'dist/ToolbarActions.css'],
		['./src/addons/_serverlist.scss', 'dist/Serverlist.css']
	]
};
