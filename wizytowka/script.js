document.addEventListener("DOMContentLoaded", () => {

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) themeIcon.textContent = "☀️";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");
            
            if (themeIcon) {
                themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
            }
            
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        });
    }


    const phrases = ["Aspirującym Developerem", "Pasjonatem Webu", "Twórcą Projektów"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const dynamicText = document.getElementById("dynamicText");

    function typeEffect() {
        if (!dynamicText) return;

        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }

    typeEffect();

    
    const card = document.getElementById("tiltCard");

    if (card) {
        document.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }

    // 4. ANIMACJA LICZNIKÓW
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 50;

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

   
    const copyBtn = document.getElementById("copyMailBtn");
    const toast = document.getElementById("toast");
    const myEmail = "nightstar2508@gmail.com";

    if (copyBtn && toast) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(myEmail);
            
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2500);
        });
    }

});