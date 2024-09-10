import Home from '@/app/components/screens/home/Home'
import { API_URL } from '@/app/constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function HomePage(props) {
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<Home {...props} />
		</QueryClientProvider>
	)
}

export const getStaticProps = async () => {
	const links = await axios.get(`${API_URL}/links`).then(({ data }) => data)
	const about = await axios.get(`${API_URL}/about`).then(({ data }) => data)
	return {
		props: {
			links,
			about,
		},
		revalidate: 60,
	}
}
