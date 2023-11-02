window.onload = function() {

	var master = QuickSettingsIterator.create(0, 0, "Master"),
		sliders = QuickSettingsIterator.create(210, 0, "Sliders"),
		bools = QuickSettingsIterator.create(420, 0, "Booleans"),
		colors = QuickSettingsIterator.create(630, 0, "Colors"),
		buttons = QuickSettingsIterator.create(0, 240, "Buttons"),
		texts = QuickSettingsIterator.create(210, 240, "Text"),
		infos = QuickSettingsIterator.create(420, 240, "Info");

	master.addBoolean("Sliders", true, function(value) {
		if(value) {
			sliders.show();
		}
		else {
			sliders.hide();
		}
	});
	master.addBoolean("Booleans", true, function(value) {
		if(value) {
			bools.show();
		}
		else {
			bools.hide();
		}
	});
	master.addBoolean("Colors", true, function(value) {
		if(value) {
			colors.show();
		}
		else {
			colors.hide();
		}
	});
	master.addBoolean("Buttons", true, function(value) {
		if(value) {
			buttons.show();
		}
		else {
			buttons.hide();
		}
	});
	master.addBoolean("Text", true, function(value) {
		if(value) {
			texts.show();
		}
		else {
			texts.hide();
		}
	});
	master.addBoolean("Info", true, function(value) {
		if(value) {
			infos.show();
		}
		else {
			infos.hide();
		}
	});

	for(var i = 1; i <= 3; i++ ){
		sliders.addRange("Slider " + i);
	}

	for(var i = 1; i <= 5; i++ ){
		bools.addBoolean("Boolean " + i);
	}

	for(var i = 1; i <= 3; i++ ){
		colors.addColor("Color " + i, "#ff0000	");
	}

	for(var i = 1; i <= 5; i++ ){
		buttons.addButton("Button " + i);
	}

	for(var i = 1; i <= 4; i++ ){
		texts.addText("Text " + i, "foo");
	}

	for(var i = 1; i <= 4; i++ ){
		infos.addHTML("Info " + i, "Info " + i);
	}


}