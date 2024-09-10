import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from './RecentVideos.module.scss'
import VideoItem from './VideoItem'

const RecentVideos = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get recent videos'],
		queryFn: async () => await axios.get('/api/youtube'),
		select: ({ data }) => data,
	})
	return (
		<div className={styles.videoWrapper}>
			<div className={styles.heading}>
				New videos <span>👉</span>
			</div>
			{isLoading
				? 'Loading...'
				: data?.length
				? data.map(video => <VideoItem key={video.videoId} item={video} />)
				: 'Waiting for videos'}
		</div>
	)
}

export default RecentVideos
