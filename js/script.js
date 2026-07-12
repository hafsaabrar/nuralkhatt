document.addEventListener("DOMContentLoaded", function() {
    // --- Safe Scroll Animations ---
    const faders = document.querySelectorAll('.fade-in-up');
    const appearOptions = { 
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // --- Safe WhatsApp Form Submission ---
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check elements existence to prevent crashes
            const nameEl = document.getElementById('name');
            const addressEl = document.getElementById('address');
            const messageEl = document.getElementById('message');
            
            if (!nameEl || !addressEl || !messageEl) {
                console.error("WhatsApp form fields are missing in the HTML!");
                return;
            }

            const name = nameEl.value;
            const address = addressEl.value;
            const userMessage = messageEl.value;
            const phoneNumber = "923365566580"; 
            
            const formattedText = `Assalam-o-Alaikum!%0A%0A` +
                                  `*Name:* ${encodeURIComponent(name)}%0A` +
                                  `*Address:* ${encodeURIComponent(address)}%0A` +
                                  `*Order Details:* ${encodeURIComponent(userMessage)}`;
                                 
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedText}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});

// --- Dynamic Product Order Function ---
function sendOrder(productName, price) {
    const phoneNumber = "923365566580";
    const message = `Assalam-o-Alaikum! I want to order this calligraphy:%0A%0A` +
                    `*Art:* ${encodeURIComponent(productName)}%0A` +
                    `*Price:* ${encodeURIComponent(price)}%0A%0A` +
                    `Please provide more details.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
