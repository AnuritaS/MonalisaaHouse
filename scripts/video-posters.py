"""Extract each player's cover at one second. Requires ffmpeg."""
from pathlib import Path
from hashlib import sha256
import re
import subprocess

root = Path(__file__).resolve().parent.parent
folder = root / 'images' / 'video-posters'
folder.mkdir(exist_ok=True)
for path in sorted((root / 'videos').glob('*.mp4')):
    if not path.stat().st_size:
        continue
    name = f'{path.stem}.{sha256(path.read_bytes()).hexdigest()[:12]}.webp'
    target = folder / name
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', '1', '-i', str(path), '-vf', 'scale=540:-2', '-frames:v', '1', str(target)], check=True)
    for file in ['index.html', 'impact.html']:
        html = (root / file).read_text()
        pattern = r'(<video\b[^>]*\bposter=")[^"]*("[^>]*>\s*<source src="videos/' + re.escape(path.name) + r'")'
        html = re.sub(pattern, lambda match: match[1] + 'images/video-posters/' + name + match[2], html)
        (root / file).write_text(html)
    print(name)
