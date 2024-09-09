import styles from './Grid.module.scss'
import GridItem from './GridItem'

const Grid = ({ links }) => {
	return (
		<div className={styles.grid}>
			{links.map(link => (
				<GridItem item={link} key={link._id} />
			))}
		</div>
	)
}

export default Grid
