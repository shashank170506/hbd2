function playAudio() {
    const audio = document.getElementById("myAudio");
    if (audio) {
        audio.play().catch(() => {});
    }
}
