//
// Utils
//

if (!Utils) var Utils = {};
Utils.openUrlInBrowser = function(url) {
    //window.open(url);
	if (typeof browser !== 'undefined') {
		browser.tabs.create({ "url": url });
	}
	else {
		window.open(url);
	}
};
