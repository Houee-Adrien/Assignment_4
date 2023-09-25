document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", () => {
        const number = document.getElementById("input").value;
        console.log(number);
        fetch(`/api/test/${number}`)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                const result = document.getElementById("result");
                result.textContent = data.fact;
            })
            .catch((error) => {
                console.error(error);
            });
    });
});

