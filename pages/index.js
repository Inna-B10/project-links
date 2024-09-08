import Home from '@/app/components/screens/home/Home'
import { API_URL } from '@/app/constants'
import axios from 'axios'

// import localFont from 'next/font/local'
//
// const geistSans = localFont({
// 	src: './fonts/GeistVF.woff',
// 	variable: '--font-geist-sans',
// 	weight: '100 900',
// })
// const geistMono = localFont({
// 	src: './fonts/GeistMonoVF.woff',
// 	variable: '--font-geist-mono',
// 	weight: '100 900',
// })

export default function HomePage(props) {
	return <Home {...props} />
}

export const getStaticProps = async () => {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
	const me = await axios.get(`${API_URL}/me`).then(({ data }) => data)
	return {
		props: {
			links,
			me,
		},
		revalidate: 60,
	}
}
