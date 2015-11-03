var Landing = function Landing(elementId, options) {
	// Backend functions. Should be called before Page since Page may overwrite server functions with options
	this.server = {
		adjust: function(data, callback) {
			
		},
		query: function(data, callback) {
			
		},
		sendmail: function(data, callback) {
			
		}
	}
	
	// root/scripts/Page.js
	Page.call(this, elementId, options);
};