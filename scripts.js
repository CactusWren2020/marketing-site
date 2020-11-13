
        // Script for sticky header

        // (function(d) {
        //     "use strict";
        //     var newEl = d.createElement("div");
        //     newEl.classList.add("myObserver");
        //     var ref = d.querySelector("#header");
        //     insertBefore(newEl, ref);
        //     function insertBefore(el, referenceNode) {
        //         referenceNode.parentNode.insertBefore(el, referenceNode);
        // }
        // const addStick = (entries) => {
        //         if (entries[0].intersectionRatio === 0)
        //             d.querySelector("#header").classList.add("sticky");
        //         else if (entries[0].intersectionRatio === 1)
        //             d.querySelector("#header").classList.remove("sticky");
        //         }
        //     const stickOptions = { threshold: [0, 1] };
        //     var observer = new IntersectionObserver(addStick, stickOptions);
        //     observer.observe(d.querySelector(".myObserver"));
        // })(document);

    // Script for animate-left
    // (function(d) {
    //     "use strict";
    //     var newEl = d.createElement("div");
    //     newEl.classList.add("myObserver");
    //     var ref = d.querySelector("#animate-pi-style");
    //     insertBefore(newEl, ref);
    //     function insertBefore(el, referenceNode) {
    //         referenceNode.parentNode.insertBefore(el, referenceNode);
    //     }
    //     const addAnimateLeft = (entries, observer) => {
    //         console.log('entry: ', entries);
    //         console.log('observer: ', observer);
    //         if (entries[0].intersectionRatio === 1) {
    //             d.querySelector("#animate-pi-style").classList.add("animate-left");
    //         } else if (entries[0].intersectionRatio === 0) {
    //             d.querySelector("#animate-pi-style").classList.remove("animate-left");
    //         }
    //     }
    //     const options = { threshold: [0, 1] };
    //     var observer = new IntersectionObserver(addAnimateLeft, options);
    //     observer.observe(d.querySelector(".myObserver"));
    // })(document);
         
const animatees = document.querySelectorAll('.animate-me');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.target.classList.contains('left-anim')) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate-left');
          } else {
            entry.target.classList.remove('animate-left');
          }
        
    } else if (entry.target.classList.contains('right-anim')) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate-right');
          } else {
            entry.target.classList.remove('animate-right');
          }
    }
  });
});

animatees.forEach(element => {
  observer.observe(element);
});