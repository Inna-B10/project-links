const getString = (initialText, start, end) => {
	const from = initialText.indexOf(start)
	const to = initialText.indexOf(end)

	return initialText.substring(from, to).replace(start, '')
}

const parseFirstVideo = async name => {
	const data = await fetch(`https://www.youtube.com/c/${name}/videos`)
	const result = await data.text()

	const title = getString(
		result,
		'"title":{"runs":[{"text":"',
		'"}],"accessibility":'
	)

	const videoId = getString(
		result,
		'"videoRenderer":{"videoId":"',
		'","thumbnail":'
	)

	const thumbnail = getString(result, '{"thumbnails":[{"url":"', '?sqp=')

	return { title, videoId, thumbnail }
}

export default async function handler(req, res) {
	const result = [
		await parseFirstVideo('justinstoys'),
		await parseFirstVideo('ClairesWears'),
	]
	res.status(200).json(result)
}
