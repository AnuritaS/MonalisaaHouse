# The Monalisaa House website — copyright of https://www.monalisahandicraft.com

Pages: `index.html`, `impact.html`, `contact.html`, `privacy.html`, `terms.html`, `cookies.html`.

All pages share **one external stylesheet**, `style.css`. Adjust spacing in that file; section padding is approximately half the previous version.

## Uploading photographs and films

Replace these files with your media, using the exact lowercase filenames below.
The included JPGs and short MP4s are working placeholders; no HTML edits are needed.

| Location | Upload path |
| --- | --- |
| Homepage latest-event photograph | `images/hero.jpg` |
| Homepage work background film 1 | `videos/pop-up-01.mp4` |
| Homepage work background film 2 | `videos/pop-up-02.mp4` |
| Homepage work background film 3 | `videos/pop-up-03.mp4` |
| Impact page, Our Story | `videos/our-story.mp4` |
| Impact page, Cultural Diplomacy film 1 | `videos/cultural-diplomacy-01.mp4` |
| Impact page, Cultural Diplomacy film 2 | `videos/cultural-diplomacy-02.mp4` |
| Impact page, Cultural Diplomacy film 3 | `videos/cultural-diplomacy-03.mp4` |
| Homepage hero, new photograph 1 | `images/collage-13.jpg` |
| Homepage hero, new photograph 2 | `images/collage-14.jpg` |
| Homepage hero, new photograph 3 | `images/collage-15.jpg` |

Export MP4s with H.264 video and AAC audio for browser compatibility.

The homepage Our Work section uses the three pop-up films as portrait video
backgrounds behind “Culture with a Point of View.” There is no separate pop-up
video section. These and the Impact Cultural Diplomacy backgrounds autoplay
muted and loop, with dark overlays, pause controls, and video-derived covers.
Reduced-motion preferences start them paused.

Our Story uses a landscape player up to 595 × 336 pixels, 30% smaller in each
dimension than the previous player. Its heading and body text are 20% smaller.
It sits beside the text on desktop and below it on phones and tablets.
The latest event is a photograph only; `videos/latest-event.mp4` is no longer used.

Hero photos use optimized, fingerprinted WebP copies and a service worker that
caches those images plus the optimized Impact artisan hero. Originals are preserved. After uploading new collage
JPGs, install Pillow (`python -m pip install Pillow`) and run
`python scripts/optimize-hero.py`, then commit the generated images, index.html,
impact.html, and hero-assets.js. Changed filenames refresh the cache automatically; HTML and
videos are never stored by this service worker. Caching requires HTTPS or localhost.

Video cover images are extracted at the one-second mark from their own MP4s.
After replacing a video, run `python scripts/video-posters.py` (requires ffmpeg)
and commit the generated covers and updated HTML. Fingerprinted poster filenames
ensure newly uploaded videos receive fresh covers.
