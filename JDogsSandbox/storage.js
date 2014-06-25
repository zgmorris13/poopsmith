function storeValue {
    var theButton = document.getElementById("storeValueBtn")
    theButton.onClick = function() {
        theButton.innerhtml = "New Text"
    }
}