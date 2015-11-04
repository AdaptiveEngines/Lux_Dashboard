var ColumnComponent = function(columnCount, title) {
	this.container = document.createElement('div');
	
	var row = document.createElement('div');
	var containerId;
	var count = 0;
	var cells = [];
		
	if (title.trim().length > 0) {
		var header = document.createElement('h2');
		header.innerHTML = title.trim();
		this.container.appendChild(header);
	}
	
	containerId = 'columns-' + columnCount + '_';
	row.className = 'row';
	
	for (var i = 0; i < columnCount; i++) {
		cells.push(document.createElement('div'));
		cells[i].className = 'col-sm-3 col-md-3 col-lg-3';
		
		row.appendChild(cells[i]);
	}
	
	while (document.getElementById(containerId + count) != null)
		count++;
		
	this.container.id = containerId + count;
	this.container.appendChild(row);
	this.elements = row;
}