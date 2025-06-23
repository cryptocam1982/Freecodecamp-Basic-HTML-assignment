let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;

    // First pop-up
    alert("You clicked the button! Total clicks: " + numButtonClicks);

    // Second pop-up
    alert("Congratulations, you made it!");
}

