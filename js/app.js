const scrollSpeeds = {
  ".section1": 2, 
  ".section2": 1, 
  ".section3": 0.5, 
};

const observer = new IntersectionObserver((entries) => {

   
   entries.forEach((entry) => {
    const selector = entry.target.className;

    observer.thresholds = -4;

    const speed = scrollSpeeds[selector]; 
    console.log(entry);

      if (entry.isIntersecting) {
         entry.target.classList.add("show");

        entry.target.style.transitionDuration = `${speed}s`;
      } else {
        entry.target.classList.remove("show");
      }
   });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(hidden => observer.observe(hidden));
