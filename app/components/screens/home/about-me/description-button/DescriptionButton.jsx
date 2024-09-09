import useOutside from '@/app/hooks/useOutside'
import cn from 'clsx'
import parse from 'html-react-parser'
import styles from './DescriptionButton.module.scss'

const DescriptionButton = ({ description }) => {
	const { isShow, setIsShow, ref } = useOutside(false)
	return (
		<div className={styles.parent} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({ [styles.active]: isShow })}>
				<span>About me</span>
			</button>
			{isShow && <article>{parse(description)}</article>}
		</div>
	)
}

export default DescriptionButton
