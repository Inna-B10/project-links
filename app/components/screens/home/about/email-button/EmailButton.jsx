import { APP_URL } from '@/app/constants'
import Image from 'next/image'
import styles from './EmailButton.module.scss'

const EmailButton = () => {
	return (
		<div className={styles.emailBtn}>
			<a
				href='mailto:123@gmail.com'
				target='_blank'
				rel='noreferrer'
				title='123@gmail.com'>
				<span>
					<Image
						src={`${APP_URL}/icons/email.svg`}
						alt=''
						height={24}
						width={24}
					/>
				</span>
				<span>Email</span>
			</a>
		</div>
	)
}

export default EmailButton
