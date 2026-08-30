#!/usr/bin/env python3
"""Keep admin SVG icons from collapsing in translated responsive layouts."""

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets"
MARKER = "/* xboard-admin-icon-visibility */"
ICON_CSS = f"{MARKER}.tabler-icon,.lucide{{flex-shrink:0}}"


def main() -> int:
    stylesheets = sorted(ASSET_DIR.glob("index-*.css"))
    if not stylesheets:
        raise RuntimeError("No compiled admin stylesheet found")

    for path in stylesheets:
        source = path.read_text(encoding="utf-8")
        if MARKER not in source:
            source += ICON_CSS
            path.write_text(source, encoding="utf-8")
        if source.count(MARKER) != 1 or ICON_CSS not in source:
            raise RuntimeError(f"Admin icon visibility rule is invalid in {path}")

    print("Admin icon visibility customization applied and verified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
