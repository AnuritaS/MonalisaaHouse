# The Monalisaa House website — copyright of https://www.monalisahandicraft.com

Pages: `index.html`, `impact.html`, `contact.html`, `privacy.html`, `terms.html`, `cookies.html`.

All pages share **one external stylesheet**, `style.css`. Adjust spacing in that file; section padding is approximately half the previous version.

## Uploading photographs and films

Replace these files with your media, using the exact lowercase filenames below.
The included JPGs and short MP4s are working placeholders; no HTML edits are needed.

| Location | Upload path |
| --- | --- |
| Homepage latest-event photograph | `images/hero.jpg` |
| Pop-up Experiences, large film | `videos/pop-up-01.mp4` |
| Pop-up Experiences, second film | `videos/pop-up-02.mp4` |
| Pop-up Experiences, third film | `videos/pop-up-03.mp4` |
| Impact page, Our Story | `videos/our-story.mp4` |
| Impact page, Cultural Diplomacy film 1 | `videos/cultural-diplomacy-01.mp4` |
| Impact page, Cultural Diplomacy film 2 | `videos/cultural-diplomacy-02.mp4` |
| Impact page, Cultural Diplomacy film 3 | `videos/cultural-diplomacy-03.mp4` |
| Homepage hero, new photograph 1 | `images/collage-13.jpg` |
| Homepage hero, new photograph 2 | `images/collage-14.jpg` |
| Homepage hero, new photograph 3 | `images/collage-15.jpg` |

Export MP4s with H.264 video and AAC audio for browser compatibility. Landscape
footage suits the homepage pop-up players (360 × 240 pixels); portrait footage
suits Our Story (150 × 267 pixels). Both use native controls. Those videos play only when visitors
choose, with `preload="none"`. Cultural Diplomacy backgrounds use portrait
footage, muted autoplay, and existing photos as posters.

The homepage pop-up players use 360 × 240 pixel frames (responsive on phones) that wrap
onto another row on narrow screens. Their dimensions stay unchanged during playback.
The three new hero JPG placeholders are decorative, like the existing hero photos.

Our Story stays beside the story text on desktop and mobile.
The latest event is a photograph only; `videos/latest-event.mp4` is no longer used.

Cultural Diplomacy uses three muted, looping, autoplay background films in 9:16
portrait frames (side by side on desktop, vertically arranged on phones). The
section is taller, with a dark overlay for readable text and a pause/play button.
Reduced-motion preferences start the films paused. Browsers that block autoplay
continue showing the existing poster photos. Our Story uses a 150 × 267 pixel portrait frame.

Hero photos use optimized, fingerprinted WebP copies and a service worker that
caches only those images. Originals are preserved. After uploading new collage
JPGs, install Pillow (`python -m pip install Pillow`) and run
`python scripts/optimize-hero.py`, then commit the generated images, index.html,
and hero-assets.js. Changed filenames refresh the cache automatically; HTML and
videos are never stored by this service worker. Caching requires HTTPS or localhost.
