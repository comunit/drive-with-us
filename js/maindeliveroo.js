var uberButton = document.getElementById("button-uber");

uberButton.addEventListener("click", function() {

    var name = document.getElementById("name").value;

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