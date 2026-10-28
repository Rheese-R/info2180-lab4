
const searchForm = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const result = document.getElementById("result");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const query = queryInput.value.trim();
    const url = "superheroes.php?query=" + encodeURIComponent(query);

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("The request failed.");
            }

            return response.text();
        })
        .then(function (data) {
            result.innerHTML = data;
        })
        .catch(function (error) {
            result.textContent = "Unable to retrieve superhero information.";
            console.error(error);
        });
});