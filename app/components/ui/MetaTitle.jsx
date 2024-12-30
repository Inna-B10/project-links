import Head from 'next/head'

const MetaTitle = ({ title }) => {
	return (
		<Head>
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1'
			/>
			<link rel='icon' type='image/x-png' href='link.png'></link>
			<title>{title}</title>
		</Head>
	)
}

export default MetaTitle
