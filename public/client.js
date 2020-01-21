function r(min, max) {
  return Math.random() * (max - min) + min;
}
$(".btn").click(function(e) {
  console.log(e);

  confetti({
    angle: r(55, 125),
    spread: r(50, 70),
    particleCount: r(50, 100),
    origin: {
      y: e.clientY,
      x: e.clientX
    }
  });
});
