import AnimateBlock from '@/app/components/ui/animate-block/AnimateBlock'
import styles from './Grid.module.scss'

const GridItem = ({ item }) => {
	return (
		<a
			href={item.link}
			rel={'noreferrer'}
			target='_blank'
			className={styles['grid-item']}>
			<span
				className={styles.gradient}
				style={{
					backgroundImage: `linear-gradient(to right, ${item.gradient.from} 0%, ${item.gradient.to} 50%, ${item.gradient.from} 100%)`,
				}}>
				{/* eslint-disable-next-line @next/next/no-img-element*/}
				<img src={item.icon.path} alt='' width={item.icon.width} />
			</span>
			<div className={styles.title}>{item.title}</div>
			{item.isImportant && <AnimateBlock />}
		</a>
	)
}

export default GridItem
