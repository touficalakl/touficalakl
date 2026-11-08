# Toufic Al Akl — Portfolio

A responsive, build-free portfolio with a decorative midnight, lavender, and gold visual design, illustrated project cards, paragraph-based project stories, sticky navigation, and a reading-progress indicator. Includes all 12 uploaded certificates and the NeuroAssist video.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload the **contents** of this folder (index.html must be at the repository root).
3. All included files, including the optimized video, are small enough for GitHub’s browser uploader.
4. In the repository: Settings → Pages → Deploy from a branch → main → /(root) → Save.
5. GitHub displays the published URL when deployment finishes.

No npm, API keys, server, or build command required. All asset paths are relative, supporting project repositories and username.github.io repositories.

## Edit the content
- `content.js`: project titles, descriptions, detail bullets, video path, experience, certificates.
- `index.html`: introduction, academic achievements, skills, email, LinkedIn.
- `styles.css`: visual design and responsive layouts.
- `script.js`: project dialogs, certificate previews, gallery filtering.

Project descriptions were expanded using the supplied NeuroAssist report and paper, CardioAI report, ZeroBite draft and poster, and prior RCI discussion. NeuroAssist’s CAISAIS acceptance is included as supplied by Toufic. Reported research metrics are labeled with their evaluation context. ZeroBite features are described as a concept and proposed MVP.

## Run locally
Open index.html in a modern browser, or run `python -m http.server 8000` inside this folder and visit http://localhost:8000.

## Media
Certificates are original uploaded images. NeuroAssist video loads only when requested in the project dialog, with native playback controls. Decorative project illustrations are made entirely in CSS.

## CV download
The final section links to `assets/documents/Toufic_Al_Akl_CV.pdf`. Replace that PDF to update the downloadable CV.
