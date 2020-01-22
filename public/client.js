function r(min, max) {
  return Math.random() * (max - min) + min;
}

$(".btn").click(function(e) {
  const doc = $(document);
  confetti({
    angle: r(55, 125),
    spread: r(50, 70),
    particleCount: r(50, 100),
    origin: {
      x: e.pageX / doc.width(),
      y: e.pageY / doc.height()
    }
  });
  e.preventDefault();
});
