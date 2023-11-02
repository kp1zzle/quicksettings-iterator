window.onload = function() {

  var panel1 = QuickSettingsIterator.create(10, 10, "Panel 1")
      .addColor("foo", "#ffff00")
      .addBoolean("bar", false);
  var panel1 = QuickSettingsIterator.create(220, 10, "Panel 2")
      .addColor("foo", "#ff0000")
      .addBoolean("bar", false);
}
