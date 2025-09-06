 /* Script for Active Link*/

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav ul li a");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  

    const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Link click করলে menu close হবে
document.querySelectorAll('.nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
