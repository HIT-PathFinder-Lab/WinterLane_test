# WinterLane_test / docs

This folder is ready to be used as the GitHub Pages source for:

`HIT-PathFinder-Lab/WinterLane_test`

## GitHub Pages setup

1. Upload the entire `docs/` folder to the root of the repository.
2. Open the repository on GitHub.
3. Go to `Settings` → `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select:
   - Branch: `main`
   - Folder: `/docs`
6. Click `Save`.

Your page should then be available at:

`https://hit-pathfinder-lab.github.io/WinterLane_test/`

## Files to replace later

- `assets/images/teaser.svg` → final teaser
- `assets/images/method.svg` → final method overview
- `assets/images/results.svg` → final qualitative comparison
- `assets/images/snow-scene-1.svg`
- `assets/images/snow-scene-2.svg`
- `assets/images/snow-scene-3.svg`
- `assets/videos/demo-snow.mp4`
- `assets/videos/demo-hard.mp4`

Also edit in `index.html`:

- title
- author list
- affiliations
- Paper link
- Dataset link
- Supplementary link
- Abstract
- Citation

## Local preview

Run from the repository root:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000/docs/`
