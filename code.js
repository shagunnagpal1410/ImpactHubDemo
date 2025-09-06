 document.getElementById("home").addEventListener("click", (e) => {
      e.preventDefault(); 
    });

    document.getElementById("about").addEventListener("click", () => {
      window.location.href = "about.html";  
    });

    document.getElementById("Testimony").addEventListener("click", () => {
      window.location.href = "testimony.html";
    });

    document.getElementById("login").addEventListener("click", () => {
      window.location.href = "login.html";
    });

    const quotes = [
      "When volunteers and NGOs unite, small actions turn into lasting change.",
      "The bridge between compassion and impact is built by connection.",
      "Every hand that reaches out can help rewrite someone's story.",
      "Together, we don't just dream of a better world — we build it."
    ];

    let index = 0;
    const taglineText = document.querySelector(".tagline p");

    function showQuote() {
      taglineText.style.opacity = 0;
      taglineText.style.transform = 'translateY(20px)';

      setTimeout(() => {
        taglineText.textContent = `"${quotes[index]}"`;
        taglineText.style.opacity = 1;
        taglineText.style.transform = 'translateY(0)';
        index = (index + 1) % quotes.length;
      }, 500); 
    }

    showQuote();
    setInterval(showQuote, 5000);

    // Add smooth scrolling
    document.querySelectorAll('.main').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
      });
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });