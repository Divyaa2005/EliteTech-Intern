//  Rating system
document.querySelectorAll(".rating").forEach(ratingDiv => {
  let stars = ratingDiv.innerText.split("");
  ratingDiv.innerHTML = stars.map((star, i) => `<span data-index="${i}">★</span>`).join("");

  ratingDiv.querySelectorAll("span").forEach(star => {
    star.addEventListener("click", () => {
      let index = star.getAttribute("data-index");
      ratingDiv.querySelectorAll("span").forEach((s, i) => {
        s.classList.toggle("active", i <= index);
      });
    });
  });
});

// ✅ Request permission on load
if ("Notification" in window) {
  Notification.requestPermission();
}

// 🛒 Add to Cart + Push Notification
document.querySelectorAll(".cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    if (Notification.permission === "granted") {
      new Notification("🛒 Added to Cart!", {
        body: "Your item has been added to the cart successfully.",
        icon: "https://cdn-icons-png.flaticon.com/512/263/263142.png"
      });
    } else {
      alert("Enable notifications to see Add to Cart alerts!");
    }
  });
});


// ✅ Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
  .then(() => console.log("Service Worker Registered"));
}
