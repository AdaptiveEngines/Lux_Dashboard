var header;
var nav;
var footer;

var header_options;
var nav_options;
var footer_options;

window.onload = function() {
	nav = new Nav('nav', nav_options);
	
	Helper.loadBody('landing', 'Page');
}