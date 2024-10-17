console.log("Hello");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("observe");

      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
      console.log("unobserve");
      
    }
  });
};

const options = {
  threshold: 0.5,
};

const imageObserver = new IntersectionObserver(callback, options);

const btn = document.querySelector("button");

const images = document.querySelectorAll("img[data-src]");
// images.forEach(img => {
//     imageObserver.observe(img)
// })

btn.addEventListener("click", () => {
  btn.classList.add("thisButton");

  if (btn.classList.contains("thisButton")) {
    images.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    alert("Please click the button");
  }
});
