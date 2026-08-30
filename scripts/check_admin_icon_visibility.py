#!/usr/bin/env python3
"""Fail fast when an admin customization makes icons invisible or non-portable."""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets"
ICON_CSS = "/* xboard-admin-icon-visibility */.tabler-icon,.lucide{flex-shrink:0}"

VIETNAM_FLAG_SELECTOR = (
    'code:"vi-VN",name:"Tiếng Việt",flag:e=>Q.jsxs("svg",'
    '{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",'
    'role:"img","aria-label":"Việt Nam",...e'
)

# These global rules would hide every Tabler/Lucide icon regardless of route.
# Scoped responsive rules are intentionally not rejected.
FORBIDDEN_GLOBAL_SVG_RULES = (
    re.compile(r"(?:^|})\s*svg\s*\{[^}]*(?:display\s*:\s*none|visibility\s*:\s*hidden|opacity\s*:\s*0(?:[;}]))"),
    re.compile(r"(?:^|})\s*svg\s*\{[^}]*(?:width|height)\s*:\s*0(?:px|rem|em|%)?(?:[;}])"),
)


def main() -> int:
    bundles = sorted(ASSET_DIR.glob("index-*.js"))
    stylesheets = sorted(ASSET_DIR.glob("index-*.css"))
    if not bundles or not stylesheets:
        raise RuntimeError("Compiled admin JavaScript or CSS bundle is missing")

    for path in bundles:
        source = path.read_text(encoding="utf-8")
        if source.count(VIETNAM_FLAG_SELECTOR) != 1:
            raise RuntimeError(f"Vietnamese flag SVG integration is missing or duplicated in {path}")
        if 'flag:()=>Q.jsx("span",{className:"text-base",children:"🇻🇳"})' in source:
            raise RuntimeError(f"Platform-dependent Vietnamese flag emoji remains in {path}")
        if 'viewBox:"0 0 30 20"' not in source or 'fill:"#DA251D"' not in source or 'fill:"#FF0"' not in source:
            raise RuntimeError(f"Vietnamese flag SVG paths are incomplete in {path}")
        if 'tabler-icon tabler-icon-' not in source:
            raise RuntimeError(f"Tabler SVG icon renderer is missing in {path}")
        if 'stroke:"currentColor"' not in source:
            raise RuntimeError(f"Current-color SVG icon support is missing in {path}")

    for path in stylesheets:
        source = path.read_text(encoding="utf-8")
        if source.count(ICON_CSS) != 1:
            raise RuntimeError(f"Responsive icon shrink guard is missing or duplicated in {path}")
        for forbidden in FORBIDDEN_GLOBAL_SVG_RULES:
            if forbidden.search(source):
                raise RuntimeError(f"Global CSS hides or collapses SVG icons in {path}")

    print("Admin icon visibility checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
