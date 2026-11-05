# The Monalisaa House website — copyright of https://www.monalisahandicraft.com

Pages: `index.html`, `impact.html`, `contact.html`, `privacy.html`, `terms.html`, `cookies.html`.

All pages share **one external stylesheet**, `style.css`. Adjust spacing in that file; section padding is approximately half the previous version.

## Uploading photographs and films

Replace these files with your media, using the exact lowercase filenames below.
The included JPGs and short MP4s are working placeholders; no HTML edits are needed.

| Location | Upload path |
| --- | --- |
| Homepage latest-event cinematic film | `videos/latest-event.mp4` |
| Pop-up Experiences, large film | `videos/pop-up-01.mp4` |
| Pop-up Experiences, second film | `videos/pop-up-02.mp4` |
| Pop-up Experiences, third film | `videos/pop-up-03.mp4` |
| Impact page, Our Story | `videos/our-story.mp4` |
| Homepage hero, new photograph 1 | `images/collage-13.jpg` |
| Homepage hero, new photograph 2 | `images/collage-14.jpg` |
| Homepage hero, new photograph 3 | `images/collage-15.jpg` |

Export MP4s with H.264 video and AAC audio for browser compatibility. Landscape
footage is recommended; the latest-event player uses a cinematic 21:9 frame on
desktop and 16:9 on mobile. Videos have native playback, volume, and fullscreen
controls and play only when visitors choose. Existing photos remain as posters;
`preload="none"` avoids downloading all five films on page load.

The pop-up collage shows one large film beside two smaller films on desktop,
a full-width film above two films on tablets, and three stacked films on phones.
The three new hero JPG placeholders are decorative, like the existing hero photos.
