#!/usr/bin/env python3
"""Wire the generated Vietnamese locale into the compiled admin application."""

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets"

OLD_I18N = 'resources:{"en-US":window.XBOARD_TRANSLATIONS?.["en-US"]||{},"zh-CN":window.XBOARD_TRANSLATIONS?.["zh-CN"]||{},"ru-RU":window.XBOARD_TRANSLATIONS?.["ru-RU"]||{}},fallbackLng:"zh-CN",supportedLngs:["en-US","zh-CN","ru-RU"]'
NEW_I18N = 'resources:{"en-US":window.XBOARD_TRANSLATIONS?.["en-US"]||{},"vi-VN":window.XBOARD_TRANSLATIONS?.["vi-VN"]||{},"zh-CN":window.XBOARD_TRANSLATIONS?.["zh-CN"]||{},"ru-RU":window.XBOARD_TRANSLATIONS?.["ru-RU"]||{}},fallbackLng:"en-US",supportedLngs:["en-US","vi-VN","zh-CN","ru-RU"]'

OLD_SELECTOR = 'shortName:"CN"},{code:"ru-RU",name:"Русский"'
LEGACY_VI_SELECTOR = 'shortName:"CN"},{code:"vi-VN",name:"Tiếng Việt",flag:()=>Q.jsx("span",{className:"text-base",children:"🇻🇳"}),shortName:"VI"},{code:"ru-RU",name:"Русский"'
NEW_SELECTOR = 'shortName:"CN"},{code:"vi-VN",name:"Tiếng Việt",flag:e=>Q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",role:"img","aria-label":"Việt Nam",...e,children:[Q.jsx("path",{fill:"#DA251D",d:"M0 0h30v20H0z"}),Q.jsx("path",{fill:"#FF0",d:"m15 4.2 1.31 4.02h4.23l-3.42 2.49 1.31 4.02L15 12.24l-3.42 2.49 1.31-4.02-3.42-2.49h4.23z"})]}),shortName:"VI"},{code:"ru-RU",name:"Русский"'


def main() -> int:
    bundles = sorted(ASSET_DIR.glob("index-*.js"))
    if not bundles:
        raise RuntimeError("No compiled admin bundle found")
    for path in bundles:
        source = path.read_text(encoding="utf-8")
        if NEW_I18N not in source:
            if OLD_I18N not in source:
                raise RuntimeError(f"Cannot locate i18n initialization in {path}")
            source = source.replace(OLD_I18N, NEW_I18N, 1)
        if NEW_SELECTOR not in source:
            if LEGACY_VI_SELECTOR in source:
                source = source.replace(LEGACY_VI_SELECTOR, NEW_SELECTOR, 1)
            elif OLD_SELECTOR in source:
                source = source.replace(OLD_SELECTOR, NEW_SELECTOR, 1)
            else:
                raise RuntimeError(f"Cannot locate language selector in {path}")
        path.write_text(source, encoding="utf-8")

        if source.count('"vi-VN":window.XBOARD_TRANSLATIONS') != 1:
            raise RuntimeError(f"Vietnamese resource integration is invalid in {path}")
        if source.count('code:"vi-VN",name:"Tiếng Việt"') != 1:
            raise RuntimeError(f"Vietnamese language selector is invalid in {path}")
        if LEGACY_VI_SELECTOR in source or "🇻🇳" in source:
            raise RuntimeError(f"Vietnamese flag must use the bundled SVG in {path}")
    print("Vietnamese admin integration applied and verified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
