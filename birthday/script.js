document.getElementById("giftBox").addEventListener("click", function() {
    this.classList.add("hidden");
    document.getElementById("messageBox").classList.remove("hidden");
});

document.getElementById("nextButton").addEventListener("click", function() {
    document.getElementById("messageBox").classList.add("hidden");
    document.getElementById("sliderContainer").classList.remove("hidden");

    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.style.opacity = "0");
        slides[index].style.opacity = "1";
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 4000);
    showSlide();
});
