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
		link: 'https://htmllessons.ru/?utm_source=youtube&utm_medium=red-group&utm_campaign=red-links&utm_content=link',
		title: 'Моя гордость',
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
		link: 'https://htmllessons.ru/premium',
		title: 'ТА самая премиум подписка',
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
		link: 'https://t.me/redgroupchannel/37',
		title: 'Как купить из других стран',
	},
	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 80,
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff',
		},
		link: 'https://t.me/redgroupchannel',
		title: 'Розыгрыши и стримы тут',
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
		link: 'https://htmllessons.ru/list-intensives',
		title: 'Список интенсивов по подписке',
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
		link: 'https://www.youtube.com/watch?v=_jquc4KJ4IU',
		title: 'Мой сетап VS Code',
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
		link: 'https://www.youtube.com/c/MaxShushval?sub_confirmation=1',
		title: 'Личный Youtube',
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
		link: 'https://abnb.me/e/Mgl6khUuN3',
		title: 'Получи 4000 руб. на бронирование',
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
		link: 'https://www.youtube.com/channel/UCdpPBwKPriPIP2eyP9a1C6g/join',
		title: 'Уникальный значок и эмоджи',
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
		link: 'https://boosty.to/redgroup',
		title: 'Эксклюзивный контент',
	},
]

export default function handler(req, res) {
	res.status(200).json(links)
}
