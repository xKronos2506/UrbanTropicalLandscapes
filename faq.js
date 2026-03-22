var faqcard = document.getElementsByClassName("faq_card");
var i;

for (i = 0; i < faqcard.length; i++) {
    faqcard[i].addEventListener("click", function () {
        this.classList.toggle("faq_active");
        this.parentElement.classList.toggle("faq_active");

        var pannel = this.nextElementSibling;
        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    }); 
}