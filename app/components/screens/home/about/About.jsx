import { APP_URL } from '@/app/constants'
import Image from 'next/image'
import styles from './About.module.scss'
import AboutButton from './about-button/AboutButton'
import EmailButton from './email-button/EmailButton'

const About = ({ about }) => {
	return (
		<div className={styles.aboutWrapper}>
			<AboutButton description={about.description} />
			<div className={styles['image-wrapper']}>
				<Image
					src={`${APP_URL}${about.avatar}`}
					width={190}
					height={190}
					className={styles.image}
					alt={about.siteName}
					quality={100}
				/>
				<div className={styles.heading}>
					<span>Name of site</span>
					<Image
						src={`${APP_URL}/icons/verified.svg`}
						alt=''
						height={16}
						width={16}
					/>
				</div>
			</div>
			<EmailButton />
		</div>
	)
}

export default About
