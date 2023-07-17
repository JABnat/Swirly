let track = document.getElementById("image-track");
track.dataset.percentage = 0 

const handleOnSelect = e => track.dataset.mouseDownAt = e.clientX;

const handleOnRelease = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
  console.log(track.dataset.percentage)
}

const handleOnMove = e => {
    // if mouse is not clicked, return to 0 value for the tracking position
  if(track.dataset.mouseDownAt === "0") return;
    // otherwise, register the position of the click as the Delta (within parameters), 
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        maxDelta = window.innerWidth / 2;
    // and calculate % to control translation of miage track
  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  console.log(track.dataset.prevPercentage);
  
  track.dataset.percentage = nextPercentage;
    // the spead of the image track must be different than that of the individual images
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    // individual images must slide at a different rate as the image track. 
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}
    // Attention, calling all functions
window.onmousedown = e => handleOnSelect(e);

window.ontouchstart = e => handleOnSelect(e.touches[0]);

window.onmouseup = e => handleOnRelease(e);

window.ontouchend = e => handleOnRelease(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
