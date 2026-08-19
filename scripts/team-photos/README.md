# Team photo standardization

Every image in /public/team is a 640×880 crop produced by one pipeline, so the
grid keeps a single eye-line, head size and background tone. To add a person,
run their original photo(s) through the same steps:

1. Face detection (Apple Vision):
   swiftc -O facedet.swift -o facedet
   ./facedet <file-listing-image-paths>   # prints path|x|y|w|h (largest face)
   Feed it orientation-normalized copies (PIL `ImageOps.exif_transpose` first —
   Vision doesn't apply EXIF rotation here).

2. Crop (PIL): face-box height = 21% of crop height (FACE_FRAC 0.21), face-box
   center 34% from the top (ANCHOR_Y 0.34), aspect 640/880. Keep the crop
   bottom inside the image; if the achieved face fraction exceeds 0.30, allow a
   bottom extension capped at ~14% of the crop, filled with a Gaussian-blurred
   (r=14) stretch of the bottom rows and a blurred seam band. Pad sides/top by
   replicating the 1px edge (plain walls make this invisible).

3. Level: sample the brighter of the two top-corner patches (w/7 × h/9) as the
   wall color; scale each RGB channel so the wall hits #e9eaec (233,234,236) —
   the team card's own background — clamping gains to [0.75, 1.5]. This
   white-balances and levels exposure in one step.

4. Resize to 640×880 (Lanczos), save JPEG quality 85 progressive.

Name files <kebab-name>.jpg / <kebab-name>-pose.jpg and register them in
src/lib/teamRoster.js.
