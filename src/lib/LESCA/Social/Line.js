const UserAgent = require('./../Device/UserAgent');

module.exports = {
	share(u, t) {
		if (UserAgent.get() === 'mobile') window.open(`line://msg/text/${encodeURIComponent(t + '\n' + u)}`, '_blank');
		else window.open(`https://lineit.line.me/share/ui?url=${encodeURIComponent(u)}&text=${encodeURIComponent(t)}`);
	},
};
