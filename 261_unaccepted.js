document.addEventListener("DOMContentLoaded", () => {
    const notesToPlay = [7,7,7,3,10,null,7,3,10,7,14,14,14,15,10,null,6,3,10,7];
    const keys = document.querySelectorAll(".key");

    let delay = 40;

    notesToPlay.forEach((note, index) => {
        if (note !== null) {
            setTimeout(() => keys[note].click(), index * delay);
        }
    });
});
