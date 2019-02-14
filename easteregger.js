var easter = new function() {
	var current = [];
	var events = [];
	var max = 0;

	this.egg = function(sequence, callback) {
		if(typeof sequence === 'string') sequence = Array.from(sequence);
		if(max < sequence.length) max = sequence.length;
		events.push({sequence: sequence, action: callback});
	}

	this.addKey = function(key) {
		current.push(key);
		triggerAction();
		if(current.length > max) current = current.slice(max * -1);
	}

	function triggerAction() {
		events.forEach(function(element){
			var sequence = element.sequence;
			var last = current.slice(sequence.length * -1);
			if(last.join(':') == sequence.join(':')) {
				element.action();
				current = [];
			}
		});
	}

	document.addEventListener('keydown', function(evt){
		easter.addKey(evt.key);
	});
};