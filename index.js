const track =document.getElementById("image-track");

window.onmousedown = e => {
    const track =document.getElementById("image-track");
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
    const track =document.getElementById("image-track");
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage =track.dataset.percentage;
}
window.onmousemove = e => {
    const track =document.getElementById("image-track");
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
    const percentage =(mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage,
        Math.min(nextPercentage,0);
        Math.max(nextPercentage,-100);

    track.style.transform = `translate(${percentage}%, -50%)`;
}

