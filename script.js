var input = $("#not-a-real-id")
console.log(input)

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("sophiasVariable", value);
  }
})

onNewValue("sophiasVariable", function() {
  $("#value-output").html(value)
})

//function storeValue(name, value) {	
//  var obj = {}
//  obj[name] = value;
//  store.child("vars").update(obj)
//}
//
//function onNewValue(name, callback) {	
//  store.child("vars").child(name).on("value", function(data) {		
//    callback(data.val());
//  })
//}