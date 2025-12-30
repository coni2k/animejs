console.log("square.js");
// Target the element with the class 'square'
const { animate } = anime;

animate(".square", {
  // Animation properties
  translateX: 250, // Move 250 pixels to the right
  rotate: "1turn", // Rotate one full turn (360 degrees)
  scale: 1.2, // Grow slightly in size (120%)

  // Animation settings
  duration: 2000, // Duration of the animation in milliseconds (2 seconds)
  easing: "easeInOutQuad", // Smooth start and end to the motion
  loop: true, // Make the animation repeat indefinitely
  direction: "alternate", // Play forward, then reverse, then repeat
});
