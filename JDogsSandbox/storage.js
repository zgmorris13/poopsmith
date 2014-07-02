function storeValue() {
    if (localStorage.getItem(1) != null) {
        var count = localStorage.getItem(1) * 1
    } else {
        var count = 5
    }

    document.querySelector("#storeValueBtn").remove()

    var main = document.querySelector("#main")

    var generateValue = document.createElement("button")
    generateValue.innerHTML = "Generate Value"

    var attributes = document.querySelector("#attributes")
    attributes.innerHTML = "<p>The value is: " + count + ".</p>"
    main.appendChild(generateValue)

    var saveValue = document.createElement("button")
    saveValue.innerHTML = "Save Value"
    main.appendChild(saveValue)

    var clearValue = document.createElement("button")
    clearValue.innerHTML = "Clear Value"
    main.appendChild(clearValue)

    generateValue.onclick = function() {
        count += 5
        attributes.innerHTML = "<p>The value is: " + count + ".</p>"
    }

    saveValue.onclick = function() {
        if (Modernizr.localstorage) {
            // window.localStorage is available!
            localStorage.setItem(1, count)
            var savedVar = localStorage.getItem(1)

            attributes.innerHTML = savedVar
        } else {
            // no native support for HTML5 storage :(
            // maybe try dojox.storage or a third-party solution
            alert("Local storage is not available in this broswer! :(")
        }
    }

    clearValue.onclick = function() {
        localStorage.setItem(1, 0)
        count = 0
    }
}