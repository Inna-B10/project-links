import { APP_URL } from '@/app/constants'
import useOutside from '@/app/hooks/useOutside'
import cn from 'clsx'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from './AboutButton.module.scss'

const AboutButton = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<div className={styles.parent} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({ [styles.active]: isShow })}>
				<span>
					<Image
						src={`${APP_URL}/icons/about.svg`}
						alt=''
						height={20}
						width={20}
					/>
				</span>
				<span>About</span>
			</button>
			{isShow && (
				<article>
					<div className={styles.desc}>{parse(description)}</div>
				</article>
			)}
		</div>
	)
}

export default AboutButton
