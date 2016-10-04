var input = $("#not-a-real-id")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("sophiasVariable", valueeeee);
  }
})

onNewValue("sophiasVariable", function(value) {
  $("#value-output").html(value)
})