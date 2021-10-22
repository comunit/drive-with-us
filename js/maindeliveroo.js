var uberButton = document.getElementById("button-deliveroo");

uberButton.addEventListener("click", function() {

    var name = document.getElementById("name").value;

    if (name == "") {
        name = "Anonymous";
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`https://extra-services.herokuapp.com/drivewithus/deliveroo/${name}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(
            window.location.href = "https://roo.it/RI110516"
        ))
        .catch(() => {
            window.location.href = "https://roo.it/RI110516"
        });
})