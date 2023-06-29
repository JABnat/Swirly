window.onmousedown = e => {
    const track =document.getElementById("image-track");
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    const track =document.getElementById("image-track");
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
    
    const percentage =(mouseDelta / maxDelta) * -100;

    track.style.transform = `translate(${percentage}%, -50%)`;
}

