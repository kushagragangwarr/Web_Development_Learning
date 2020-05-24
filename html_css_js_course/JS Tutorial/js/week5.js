function sayhello() {
    document.querySelector("button").textContent = "Said It!";
    // window.alert("Hello " + document.getElementById("hello").value);
    // document.write("Hello " + document.getElementById("hello").value);
    // console.log("Hello " + document.getElementById("hello").value);
    // var result = document.getElementById("hello").value;

    // Usage of textContent and innerHTML and difference among them.

    // document.getElementById("output").textContent = "<h2>Hello " + result + "!</h2>";
    // document.getElementById("output").innerHTML = "<h2>Hello " + result + "!</h2>";

    // Usage of querySelector()
    var result = document.querySelector("#hello").value;
    document.querySelector("#output").textContent = "Hello " + result + "!";
}

document.querySelector("button").addEventListener("click", sayhello);