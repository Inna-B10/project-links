import { APP_URL } from '@/app/constants'
import Image from 'next/image'
import styles from './AboutMe.module.scss'
import DescriptionButton from './description-button/DescriptionButton'
import EmailButton from './email-button/EmailButton'

const AboutMe = ({ me }) => {
	return (
		<div className={styles.me}>
			<div className={styles['image-wrapper']}>
				<Image
					src={`${APP_URL}${me.avatar}`}
					width={190}
					height={190}
					className={styles.image}
					alt={me.siteName}
					quality={100}
				/>
			</div>
			<div className={styles.heading}>
				<span>Name of site</span>
				<Image
					src={`${APP_URL}/icons/verified.svg`}
					alt=''
					height={16}
					width={16}
				/>
			</div>
			<EmailButton />
			<DescriptionButton description={me.description} />
		</div>
	)
}

export default AboutMe
