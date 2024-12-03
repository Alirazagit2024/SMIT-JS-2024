// script.js

// Gallery images ko select karte hain
var galleryImages = document.querySelectorAll('.gallery-img');

// Popup aur uske elements ko select karte hain
var popup = document.getElementById('popup');
var popupImg = document.getElementById('popup-img');
var closeBtn = document.getElementById('close');

// Her image par click event lagate hain
for (var i = 0; i < galleryImages.length; i++) {
  galleryImages[i].onclick = function () {
    popup.style.display = 'flex'; // Popup ko show karte hain
    popupImg.src = this.src; // Jo image click hui uska source popup mein lagate hain
  };
}

// Close button par click event lagate hain
closeBtn.onclick = function () {
  popup.style.display = 'none'; // Popup ko hide karte hain
};

// Popup ke background par click se band karte hain
popup.onclick = function (event) {
  if (event.target === popup) {
    popup.style.display = 'none'; // Agar background click ho to popup band ho jaye
  }
};
