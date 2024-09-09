const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/htmllessons.svg',
			width: 76,
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/vip.svg',
			width: 115,
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff',
		},
		link: '#',
		title: 'Title',
		isImportant: true,
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/global.svg',
			width: 80,
		},
		gradient: {
			from: '#FEAC5E',
			to: '#4BC0C8',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 80,
		},
		gradient: {
			from: '#66A0F3',
			to: '#A1E0FF',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_5',
		icon: {
			path: '/icons/intensives.svg',
			width: 150,
		},
		gradient: {
			from: '#c659ff',
			to: '#ff3f4d',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_6',
		icon: {
			path: '/icons/vs-code.svg',
			width: 80,
		},
		gradient: {
			from: '#3EA6EA',
			to: '#2179c1',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84,
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_8',
		icon: {
			path: '/icons/airbnb.svg',
			width: 75,
		},
		gradient: {
			from: '#FF385C',
			to: '#dd2e63',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_9',
		icon: {
			path: '/icons/emoji.svg',
			width: 90,
		},
		gradient: {
			from: '#f6d365',
			to: '#fda085',
		},
		link: '#',
		title: 'Title',
	},
	{
		_id: 'link_10',
		icon: {
			path: '/icons/boosty.svg',
			width: 160,
		},
		gradient: {
			from: '#ff8d42',
			to: '#ff8257',
		},
		link: '#',
		title: 'Title',
	},
]

export default function handler(req, res) {
	res.status(200).json(links)
}
