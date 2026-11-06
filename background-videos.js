/* Background films share accessible pause controls on both pages. */
document.querySelectorAll('.diplomacy-scene').forEach(scene => {
  const videos = [...scene.querySelectorAll('.background-film')];
  const button = scene.querySelector('.diplomacy-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = motion.matches;
  function update() {
    videos.forEach(video => {
      video.muted = true;
      if (paused) video.pause();
      else video.play().catch(() => {});
    });
    button.textContent = paused ? 'Play background videos' : 'Pause background videos';
    button.setAttribute('aria-pressed', String(paused));
  }
  button.addEventListener('click', () => { paused = !paused; update(); });
  motion.addEventListener('change', event => { paused = event.matches; update(); });
  update();
});
