const about = {
	siteName: 'Site name',
	avatar: '/avatar.jpeg',
	description:
		'<p>Aenean sit amet tristique arcu. Quisque massa ipsum, auctor vitae dui et, viverra hendrerit dui. Ut nec tempus massa. Quisque id dignissim tortor. Fusce sit amet cursus velit.</p>' +
		'<p>Maecenas porttitor libero id quam varius, vel vestibulum ex elementum. Praesent congue nulla vel aliquam auctor. Quisque tellus arcu, imperdiet.</p>' +
		'<p>Donec in ornare nulla. Curabitur viverra vitae arcu in sagittis. Curabitur elit tellus, consectetur sed blandit non, dapibus eget odio. Nam dui neque.</p>' +
		'<p>Praesent efficitur nulla pellentesque tristique porttitor. Nunc aliquam eros eu lectus mattis, nec consequat augue condimentum. Nullam at porta erat. Praesent quis ante non dolor sodales molestie at sed nibh...</p>',
}

export default function handler(req, res) {
	res.status(200).json(about)
}
