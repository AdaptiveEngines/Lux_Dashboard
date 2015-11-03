var Nav = function(elementId, options) {
	// Backend functions. Should be called before Page since Page may overwrite server functions with options
	
	// root/scripts/Page.js
	Page.call(this, elementId, options);
	
	// Initialize some stuff
	var nav = document.createElement('nav');
	var navbarHeader = document.createElement('div');
	var contentLeft = document.createElement('div');
	var contentRight = document.createElement('div');
	
	contentLeft.id = 'navbar';
	
	nav.className = 'navbar navbar-default navbar-fixed-top';
	navbarHeader.className = 'navbar-header';
	contentLeft.className = 'navbar-collapse collapse';
	contentRight.className = 'nav navbar-nav navbar-right';
	
	// Header
	var button = document.createElement('button');
	var span = document.createElement('span');
	var span1 = document.createElement('span');
	var span2 = document.createElement('span');
	var span3 = document.createElement('span');
	var brand = document.createElement('a');
	
	button.className = 'navbar-toggle collapsed';
	span.className = 'sr-only';
	span1.className = 'icon-bar';
	span2.className = 'icon-bar';
	span3.className = 'icon-bar';
	brand.className = 'navbar-brand';
	
	button.dataset.toggle = 'collapse';
	button.dataset.target = '#navbar';
	button.setAttribute('aria-expanded', false);
	button.setAttribute('aria-controls', 'navbar');
	
	span.innerHTML = 'Toggle navigation';
	brand.innerHTML = 'PLUM';
	
	brand.href = '#';
	
	button.appendChild(span);
	button.appendChild(span1);
	button.appendChild(span2);
	button.appendChild(span3);
	
	navbarHeader.appendChild(button);
	navbarHeader.appendChild(brand);

	nav.appendChild(navbarHeader);
	nav.appendChild(contentLeft);
	nav.appendChild(contentRight);
	this.placement.appendChild(nav);
}