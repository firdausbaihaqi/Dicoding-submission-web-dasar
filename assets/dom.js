const bioButton = document.querySelector(".bio-button");
        const closeButton = document.querySelector(".close-button");
        const cardContainer = document.querySelector(".card-container");

        function bioShow() {
            if (getComputedStyle(cardContainer).display === "none") {
                cardContainer.style.display = "flex"
            } else {
                cardContainer.style.display = "none"
            }
        }

        bioButton.addEventListener("click", function (event) {
            bioShow()
        })

        closeButton.addEventListener("click", function (event) {
            bioShow()
        })