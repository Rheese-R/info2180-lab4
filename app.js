
const searchButton = document.getElementById("search");

searchButton.addEventListener("click", function () {
    fetch("superheroes.php")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("The request failed.");
            }

            return response.text();
        })
        .then(function (data) {
            alert(data);
        })
        .catch(function (error) {
            alert("Unable to retrieve the superheroes. Please try again.");
            console.error(error);
        });
});