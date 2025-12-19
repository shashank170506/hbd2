function updateClock() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const diff = midnight - now;
    const clock = document.getElementById("clock");

    if (diff <= 0) {
        clock.innerHTML = "🎉 Happy Birthday Papa 🎂❤️";
        playAudio();
        return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    clock.innerHTML = `${h} hours ${m} minutes ${s} seconds ⏳`;
}

setInterval(updateClock, 1000);
updateClock();
