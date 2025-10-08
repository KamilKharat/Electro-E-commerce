// SweetAlert
let buttons = document.querySelectorAll(".alert-btn");
buttons.forEach(button => {
    button.onclick = function showAlert() {
        Swal.fire({
          title: "Added To Caret Successfully",
          icon: "success",
        });
    }
});
//  side menu
let menu = document.querySelector(".menu");
let nav = document.querySelector(".side-nav");
    menu.onclick = function () {
        nav.classList.toggle("act");
    };
// scroll top action
let topArrow = document.querySelector(".scroll-top");
topArrow.onclick = function() {
    scrollTo(0, 0);
};
// select elements
let icon = document.querySelector(".a-caret");
let caret = document.querySelector(".caret-list");
icon.addEventListener("click", function() {
    if (caret.style.visibility === "visible") {
        caret.style.visibility = "hidden";
    } else {
        caret.style.visibility = "visible";
    }
});
// create card
buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        // Create Elements
        let box = this.closest(".box");
        let card = document.createElement("div");
        let imageDiv = document.createElement("div");
        let theImage = document.createElement("img");
        let text = document.createElement("div");
        let productTitle = document.createElement("h4");
        let productPrice = document.createElement("h5");
        let button = document.createElement("button");
        // Product Details
        let image = box.querySelector("img").src;
        let title = box.querySelector("h3").textContent.trim();
        let price = box.querySelector("h4").textContent.trim();
        theImage.src = image;
        productTitle.textContent = title;
        productPrice.textContent = price;
        button.innerHTML = "x";
        // Append Child
        card.appendChild(imageDiv);
        imageDiv.appendChild(theImage);
        card.appendChild(text);
        text.appendChild(productTitle);
        text.appendChild(productPrice);
        card.appendChild(button);
        caret.appendChild(card);
        // remove card
        button.addEventListener("click", function(e) {
            card.remove();
        });
        // CSS Styling
        caret.style.cssText = "z-index: 40; bottom: -100px; right: 0px; box-shadow: 0px 0px 0px 2px #E4E7ED; visibility :hidden; overflow: scroll; height: 100px; width: 275px; background: white;";
        card.style.cssText = "background-color: white; display: flex; justify-content: space-between; padding: 5px; font-weight: 500; font-size: 15px; align-items: center; border-bottom: 1px solid #d10024; height: 100%;";
        imageDiv.style.cssText = "width: 40%;";
        button.style.cssText = "width: 25px; height: 23px; background-color: #d10024; color: white; border-radius: 25px;"
    });
});