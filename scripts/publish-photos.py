"""Phone-sized photos, made when the site is published (review E1, 23 Oct 2026).

GitHub runs this on the copy of the site it is about to publish, never on the
files in this folder:

    python scripts/publish-photos.py _site/images

For every JPEG or WebP photo wider than 900 px it writes an 800 px copy to
images/w800/. The page offers phones that copy and laptops the original. Photos
keep being added to images/ exactly as before; nothing here needs running or
editing by hand.
"""
import os
import sys

from PIL import Image, ImageOps


def main(folder):
    out = os.path.join(folder, "w800")
    os.makedirs(out, exist_ok=True)
    made = 0
    for name in sorted(os.listdir(folder)):
        path = os.path.join(folder, name)
        if not os.path.isfile(path) or not name.lower().endswith((".jpg", ".jpeg", ".webp")):
            continue
        try:
            with Image.open(path) as im:
                im = ImageOps.exif_transpose(im)  # phone photos carry their rotation in EXIF
                if im.width <= 900:
                    continue
                small = im.convert("RGB").resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
                target = os.path.join(out, name)
                if name.lower().endswith(".webp"):
                    small.save(target, "WEBP", quality=78)
                else:
                    small.save(target, "JPEG", quality=78, optimize=True, progressive=True)
                made += 1
        except Exception as error:  # one odd file should never stop a publish
            print(f"skipped {name}: {error}")
    print(f"{made} phone-sized photos in {out}")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "_site/images")
