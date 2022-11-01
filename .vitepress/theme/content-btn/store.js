import { ref } from 'vue';

export const groups = [
	{
		group: 'api',
		label: 'The API',
		choices: ['REST', 'GraphQL', 'SDK', 'CLI'],
		defaultType: 'REST',
		pref: ref(''),
	},
	{
		group: 'stack',
		label: 'The Stack',
		choices: ['JAM', 'MEAN', 'MERN', 'LAMP'],
		defaultType: 'JAM',
		pref: ref(''),
	},
];
