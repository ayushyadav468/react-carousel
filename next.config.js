const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	images: {
		domains: ['images.unsplash.com', 'unsplash.com']
	}
};
