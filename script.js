var input = $("#not-a-real-id")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("davidsVariable", valueeeee);
  }
})

onNewValue("davidsVariable", function(value) {
  $("#value-output").html(value)
})