Helper = {
	getJsonFromUrl: function() {// done and functional
		var query = location.search.substr(1);
		var result = {};
		query.split("&").forEach(function(part) {
			var item = part.split("=");
			result[item[0]] = decodeURIComponent(item[1]);
		});
		return result;
    	},
	insertAfter: function(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    	},
    	require: function(file, callback) {
		var scripts = document.getElementsByTagName('script');
		var found = false;
		
		for (var i = 0; i < scripts.length; i++) {
			if (scripts[i].src == file) {
				found = true;
				break;
			}
		}
		
		if (!found) {
			var script = document.getElementsByTagName('script')[0],
				newfile = document.createElement('script');
				
			newfile.type = 'text/JavaScript';

			// IE
			newfile.onreadystatechange = function() {
			console.log("Loading a js IE");
				if (newfile.readyState === 'loaded' || newfile.readyState === 'complete') {
					callback();
				}
			};

			// others
			newfile.onload = function () {
			console.log("Loading a js Chrome");
				callback();
			};

			newfile.src = file;
			this.insertAfter(newfile, script);
		}
		
        return true;
    	},
	insertNavObject: function(data, placement) {
		if (typeof data.anchor !== 'undefined') {
			var li = document.createElement('li');
			var a = document.createElement('a');
			
			a.innerHTML = data.name;
			a.href = data.anchor;
			a.onclick = function() {
				
			}
			
			li.appendChild(a);
			placement.appendChild(li);
		}
	},
	loadNav: function(data, placement) {
		var myNavDiv = document.getElementById(placement);
		var bsContainer = document.createElement('div');
		var myNav = document.createElement('nav');
		var headerDiv = document.createElement('div');
		var button = document.createElement('button');
		var span1 = document.createElement('span');
		var span2 = document.createElement('span');
		var span3 = document.createElement('span');
		var span4 = document.createElement('span');
		var elementDiv = document.createElement('div');
		var elementList = document.createElement('ul');
		
		myNavDiv.innerHTML = ''; // clear it;
		
		bsContainer.className = 'container';
		
		myNav.className = 'navbar navbar-default navbar-fixed-top';
		myNav.setAttribute('role', 'navigation');
		
		headerDiv.className ='navbar-header';
		
		button.type = 'button';
		button.className = 'navbar-toggle collapsed';
		button.dataset.toggle = 'collapse';
		button.dataset.target = '#bs-nav';
		button.setAttribute('aria-expanded', false);
		
		span1.className = 'sr-only';
		span2.className = 'icon-bar';
		span3.className = 'icon-bar';
		span4.className = 'icon-bar';
		
		button.appendChild(span1);
		button.appendChild(span2);
		button.appendChild(span3);
		button.appendChild(span4);
		
		headerDiv.appendChild(button);
		
		elementDiv.className = 'collapse navbar-collapse';
		elementDiv.id = 'bs-nav';
		
		elementList.className = 'nav navbar-nav navbar-right';
		
		// Should be a JSON array
		if (data.constructor === Array) {
			for (var i = 0; i < data.length; i++)
				this.insertNavObject(data[i], elementList);
		} else if (data.constructor === Object){
			this.insertNavObject(data, elementList);
		} else {
			console.error('the data is not properly formatted');
		}
		
		elementDiv.appendChild(elementList);
		bsContainer.appendChild(headerDiv);
		bsContainer.appendChild(elementDiv);
		myNav.appendChild(bsContainer);
		myNavDiv.appendChild(myNav);
	},
    loadBody: function(url, placement) {
		var helper = this;
		
        helper.Ajax("pages/html/"+url+".html", {}, function(data) {
            document.getElementById(placement).innerHTML = data;
            //document.getElementsByClassName(placement+"-title")[0].innerHTML = url.toUpperCase();
            helper.require("pages/js/" +url+".js", function(){});
        });
    },
    Ajax: function(urlCall, data, callback) {
        var url = this.getJsonFromUrl();
        var http = new XMLHttpRequest();
		
		// Jake's code
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                try {
                    callback(JSON.parse(http.responseText));
                    console.log(JSON.parse(http.responseText));
                } catch(err) {
                    callback(http.responseText);
                    console.log(http.responseText);
                }
            }
        }
		
		// My code
		/*http.open("GET", urlCall);
		http.onload = function(e) {
			if (http.readyState === 4) {
				if (http.status === 200 || http.status === 0) { // 0 for local files
					try {
						callback(JSON.parse(http.responseText));
						console.log(JSON.parse(http.responseText));
					} catch(err) {
						callback(http.responseText);
						console.log(http.responseText);
					}
					div.innerHTML = http.responseText;
				} else
					console.error(http.statusText);
			}
		};
		
		http.onerror = function(e) {
			console.error(http.statusText);
		}
		
		http.send(null);*/
		
        if(url.hasOwnProperty("access_token")) {
            console.log(JSON.stringify(data) + " ?access_token="+url.access_token);
            urlCall = urlCall + "?access_token="+url.access_token; 
        } else {
            console.log(JSON.stringify(data));
            urlCall = urlCall;
        }
		
        console.log(urlCall);
        http.open("POST", urlCall, true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.send(JSON.stringify(data));
    }
};
