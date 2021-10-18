var uberButton = document.getElementById("button-bolt");

uberButton.addEventListener("click", function() {

    var name = document.getElementById("name").value;

    if (name == "") {
        name = "Anonymous";
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`https://extra-services.herokuapp.com/drivewithus/bolt/${name}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(
            window.location.href = "https://partners.bolt.eu/driver-signup/?refid=RIZWANR233"
        ))
        .catch(() => {
            window.location.href = "https://partners.bolt.eu/driver-signup/?refid=RIZWANR233"
        });
})