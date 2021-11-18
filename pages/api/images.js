export default function handler(req, res) {
	if (req.method === 'GET') {
		const resposne = {
			imagesURL: [
				'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1280&q=60',
				'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280&q=60',
				'https://images.unsplash.com/flagged/photo-1590425113058-3a2678b4cdad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280&q=60',
				'https://images.unsplash.com/photo-1554446422-d05db23719d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1280&q=60'
			]
		};
		res.status(200).json(resposne);
	} else {
		res.status(404).json({ message: 'No route found' });
	}
}
