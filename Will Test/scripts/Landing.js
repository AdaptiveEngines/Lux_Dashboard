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
	
	this.addComponent = function(type, title) {
		if (type != null) {
			if (type.indexOf('columns') != -1) {
				this.components.push(new ColumnComponent(type.split('-')[1], title));
				this.placement.appendChild(this.components[this.components.length - 1].container);
				return this.components[this.components.length - 1];
			}
		}
		
		return null;
	}
};