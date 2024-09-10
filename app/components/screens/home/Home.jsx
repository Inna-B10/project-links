import Circles from '../../ui/circles/Circles'
import MetaTitle from '../../ui/MetaTitle'
import About from './about/About'
import Grid from './grid/Grid'
import styles from './Home.module.scss'
import RecentVideos from './recent-videos/RecentVideos'

const Home = ({ links, about }) => {
	return (
		<section className={styles.section}>
			<MetaTitle title='Project: Links' />
			<div className={styles.container}>
				<About about={about} />
				<RecentVideos />
				<Grid links={links} />
			</div>
			<Circles />
		</section>
	)
}

export default Home
