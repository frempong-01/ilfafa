const music = document.getElementById("bgMusic");

function nextPage(current) {
    // Hide current page, Show next page
    document.getElementById("page" + current).classList.add("hidden");
    document.getElementById("page" + (current + 1)).classList.remove("hidden");

    // 1. Start Music on First Click
    if (current === 1) {
        music.volume = 0.3;
        music.play().catch(error => console.log("Music play prevented by browser policy"));
    }

    // 2. Trigger Floating Hearts on Page 3
    if (current + 1 === 3) {
        startHearts();
    }

    // 3. Trigger Video Play on Page 5 (The Zig Zag Page)
    if (current + 1 === 5) {
        const vid = document.getElementById("finalVideo");
        vid.play().catch(error => console.log("Video autoplay prevented"));
    }
}

function startHearts() {
    // Create floating hearts every 400ms
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        // Random size between 18px and 38px
        heart.style.fontSize = (Math.random() * 20 + 18) + "px";
        document.body.appendChild(heart);
        
        // Remove heart after 6 seconds to save memory
        setTimeout(() => heart.remove(), 6000);
    }, 400);
}