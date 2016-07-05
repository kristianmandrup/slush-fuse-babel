var Observable = require("FuseJS/Observable");

var items = Observable("A", "B", "C");

module.exports = {
	items: items.map(item => item + " mapped from ES2015!")
};