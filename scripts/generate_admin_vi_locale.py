#!/usr/bin/env python3
"""Generate and verify the complete Vietnamese admin locale.

The upstream admin distribution currently ships English, Chinese and Russian.
This script keeps the Vietnamese object structurally identical to en-US,
preserves placeholders/protocol names, and reuses cached translations on
subsequent upstream updates. New English strings are translated in batches and
then normalized for Xboard terminology.
"""

from __future__ import annotations

import json
import re
import time
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
LOCALE_DIR = ROOT / "locales"
EN_PATH = LOCALE_DIR / "en-US.js"
VI_PATH = LOCALE_DIR / "vi-VN-v3.js"
CACHE_PATH = Path(__file__).resolve().parent / "admin_vi_google_cache.json"

EXACT = {
    "Admin": "Quản trị",
    "Administrator": "Quản trị viên",
    "Dashboard": "Bảng điều khiển",
    "Settings": "Cài đặt",
    "Save": "Lưu",
    "Save Settings": "Lưu cài đặt",
    "Cancel": "Hủy",
    "Confirm": "Xác nhận",
    "Close": "Đóng",
    "Delete": "Xóa",
    "Edit": "Chỉnh sửa",
    "View": "Xem",
    "Add": "Thêm",
    "Create": "Tạo",
    "Update": "Cập nhật",
    "Reset": "Đặt lại",
    "Refresh": "Làm mới",
    "Search": "Tìm kiếm",
    "Search...": "Tìm kiếm...",
    "Filter": "Bộ lọc",
    "Export": "Xuất dữ liệu",
    "Submit": "Gửi",
    "Status": "Trạng thái",
    "Actions": "Thao tác",
    "Action": "Thao tác",
    "Name": "Tên",
    "Type": "Loại",
    "Description": "Mô tả",
    "Optional": "Không bắt buộc",
    "Default": "Mặc định",
    "Enabled": "Đã bật",
    "Disabled": "Đã tắt",
    "Active": "Đang hoạt động",
    "Inactive": "Không hoạt động",
    "Success": "Thành công",
    "Error": "Lỗi",
    "Failed": "Thất bại",
    "Loading...": "Đang tải...",
    "Saving...": "Đang lưu...",
    "No Data": "Không có dữ liệu",
    "No data": "Không có dữ liệu",
    "User": "Người dùng",
    "Users": "Người dùng",
    "User Management": "Quản lý người dùng",
    "Node": "Node",
    "Nodes": "Node",
    "Node Management": "Quản lý node",
    "Server": "Máy chủ",
    "Servers": "Máy chủ",
    "Server Management": "Quản lý máy chủ",
    "Plan": "Gói",
    "Plans": "Gói",
    "Plan Management": "Quản lý gói",
    "Subscription Plan": "Gói đăng ký",
    "Subscription Management": "Quản lý đăng ký",
    "Order": "Đơn hàng",
    "Orders": "Đơn hàng",
    "Order Management": "Quản lý đơn hàng",
    "Ticket": "Ticket",
    "Tickets": "Ticket",
    "Ticket Management": "Quản lý ticket",
    "Traffic": "Lưu lượng",
    "Upload": "Tải lên",
    "Download": "Tải xuống",
    "Total": "Tổng",
    "Commission": "Hoa hồng",
    "Coupon": "Mã giảm giá",
    "Coupon Management": "Quản lý mã giảm giá",
    "Gift Card": "Thẻ quà tặng",
    "Gift Card Management": "Quản lý thẻ quà tặng",
    "Payment": "Thanh toán",
    "Payment Configuration": "Cấu hình thanh toán",
    "Plugin": "Plugin",
    "Plugin Management": "Quản lý plugin",
    "Theme": "Giao diện",
    "Theme Configuration": "Cấu hình giao diện",
    "Knowledge Base": "Kho kiến thức",
    "Knowledge Management": "Quản lý kho kiến thức",
    "Notice Management": "Quản lý thông báo",
    "System Management": "Quản lý hệ thống",
    "System Configuration": "Cấu hình hệ thống",
    "Route Management": "Quản lý định tuyến",
    "Permission Group Management": "Quản lý nhóm quyền",
    "Email": "Email",
    "Password": "Mật khẩu",
    "Login": "Đăng nhập",
    "Logout": "Đăng xuất",
    "Language": "Ngôn ngữ",
    "English": "Tiếng Anh",
    "Chinese": "Tiếng Trung",
    "Russian": "Tiếng Nga",
    "Vietnamese": "Tiếng Việt",
    "日本語": "Tiếng Nhật",
    "한국어": "Tiếng Hàn",
    "简体中文": "Tiếng Trung (Giản thể)",
    "繁體中文": "Tiếng Trung (Phồn thể)",
    "Today": "Hôm nay",
    "Yesterday": "Hôm qua",
    "This Month": "Tháng này",
    "Last Month": "Tháng trước",
    "Created At": "Thời gian tạo",
    "Updated At": "Thời gian cập nhật",
    "Start Date": "Ngày bắt đầu",
    "End Date": "Ngày kết thúc",
    "Amount": "Số tiền",
    "Balance": "Số dư",
    "Currency": "Tiền tệ",
    "Monthly": "Hàng tháng",
    "Quarterly": "Hàng quý",
    "Semiannual": "Nửa năm",
    "Annual": "Hàng năm",
    "One Time": "Một lần",
    "Permanent": "Vĩnh viễn",
    "Weight": "Trọng số",
    "Copy": "Sao chép",
    "Copied": "Đã sao chép",
    "Select All": "Chọn tất cả",
    "Please select": "Vui lòng chọn",
    "Select reset type": "Chọn kiểu đặt lại",
    "Configuration": "Cấu hình",
    "Basic Configuration": "Cấu hình cơ bản",
    "Advanced Configuration": "Cấu hình nâng cao",
    "TLS Certificate": "Chứng chỉ TLS",
    "Certificate Mode": "Chế độ chứng chỉ",
    "Listen Address": "Địa chỉ lắng nghe",
    "API Status": "Trạng thái API",
    "Kernel Status": "Trạng thái kernel",
    "System Load": "Tải hệ thống",
    "Online Users": "Người dùng trực tuyến",
    "Concurrent Goroutines": "Số goroutine đồng thời",
    "WebSocket": "WebSocket",
}

PRESERVE = {
    "API", "TLS", "XTLS", "ECH", "VLESS", "VMess", "Hysteria2",
    "AnyTLS", "REALITY", "Reality", "WebSocket", "HTTP", "HTTPS",
    "TCP", "UDP", "DNS", "ACME", "JSON", "UUID", "URL", "URI",
    "SSH", "IPv4", "IPv6", "GB", "MB", "KB", "Mbps", "CNY", "QR",
    "ID", "IP", "GC", "Redis", "Laravel", "Xboard", "XBoard",
    "SingBox", "Clash", "Shadowsocks", "Trojan", "uTLS", "Safari",
}

PLACEHOLDER_RE = re.compile(
    r"(\{\{[^{}]+\}\}|\$\{[^{}]+\}|https?://[^\s]+|<[^>]+>|`[^`]+`)"
)
CHINESE_RE = re.compile(r"[\u3400-\u9fff]")


def load_locale(path: Path) -> dict[str, Any]:
    source = path.read_text(encoding="utf-8")
    assignment = re.search(r"window\.XBOARD_TRANSLATIONS\[['\"][^'\"]+['\"]\]\s*=\s*", source)
    if assignment is None:
        raise RuntimeError(f"Cannot find locale assignment: {path}")
    start = source.find("{", assignment.end())
    depth = 0
    quote: str | None = None
    escaped = False
    end = -1
    for index in range(start, len(source)):
        char = source[index]
        if quote is not None:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
            continue
        if char in {'"', "'"}:
            quote = char
        elif char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                end = index + 1
                break
    if start < 0 or end < start:
        raise RuntimeError(f"Cannot parse locale object: {path}")
    body = re.sub(r",(?=\s*[}\]])", "", source[start:end])
    return json.loads(body)


def flatten(value: Any, prefix: str = "") -> dict[str, str]:
    output: dict[str, str] = {}
    if isinstance(value, dict):
        for key, item in value.items():
            path = f"{prefix}.{key}" if prefix else key
            output.update(flatten(item, path))
    elif isinstance(value, str):
        output[prefix] = value
    return output


def get_path(root: dict[str, Any], path: str) -> str | None:
    current: Any = root
    for part in path.split("."):
        if not isinstance(current, dict) or part not in current:
            return None
        current = current[part]
    return current if isinstance(current, str) else None


def translate_segment(text: str, translator: Any) -> str:
    if not text.strip() or text.strip() in PRESERVE:
        return text
    leading = text[: len(text) - len(text.lstrip())]
    trailing = text[len(text.rstrip()) :]
    core = text.strip()
    if core in EXACT:
        translated = EXACT[core]
    elif re.fullmatch(r"[\w./:+-]+", core) and any(ch.isdigit() for ch in core):
        translated = core
    else:
        translated = translator.translate(core)
    return leading + translated + trailing


def normalize(original: str, translated: str, path: str) -> str:
    replacements = {
        "bảng điều khiển quản trị": "bảng điều khiển admin",
        "phiếu": "ticket" if "ticket" in path.lower() else "phiếu",
        "giao thông": "lưu lượng",
        "ủy ban": "hoa hồng",
        "Uỷ ban": "Hoa hồng",
        "kế hoạch thuê bao": "gói đăng ký",
        "kế hoạch đăng ký": "gói đăng ký",
        "đơn đặt hàng": "đơn hàng",
    }
    result = translated
    for old, new in replacements.items():
        result = result.replace(old, new)
    result = re.sub(r"thẻ quà(?! tặng)", "thẻ quà tặng", result, flags=re.IGNORECASE)
    lower_original = original.lower()
    if "node" in lower_original:
        result = re.sub(r"\bnút\b", "node", result, flags=re.IGNORECASE)
    if "ticket" in lower_original:
        result = re.sub(r"\b(vé|phiếu)\b", "ticket", result, flags=re.IGNORECASE)
    if "traffic" in lower_original:
        result = result.replace("giao thông", "lưu lượng").replace("Giao thông", "Lưu lượng")
    if "commission" in lower_original:
        result = result.replace("ủy ban", "hoa hồng").replace("Ủy ban", "Hoa hồng")
    if "plan" in lower_original and "planning" not in lower_original:
        result = result.replace("kế hoạch", "gói").replace("Kế hoạch", "Gói")
    return result


def translate_text(text: str, path: str, translator: Any) -> str:
    if text in EXACT:
        return EXACT[text]
    parts = PLACEHOLDER_RE.split(text)
    translated = "".join(
        part if PLACEHOLDER_RE.fullmatch(part or "") else translate_segment(part, translator)
        for part in parts
    )
    return normalize(text, translated, path)


class GoogleBatchTranslator:
    """Translate unique text fragments in compact batches and cache reviewed input."""

    URL = "https://translate.googleapis.com/translate_a/single"
    SEPARATOR = "[[[XBOARD_SPLIT_9F3A]]]"

    def __init__(self, texts: list[str]) -> None:
        import requests

        self.session = requests.Session()
        self.cache: dict[str, str] = {}
        if CACHE_PATH.exists():
            self.cache.update(json.loads(CACHE_PATH.read_text(encoding="utf-8")))
        pending = sorted({text.strip() for text in texts if self.needs_translation(text) and text.strip() not in self.cache})
        batches: list[list[str]] = []
        current: list[str] = []
        size = 0
        for text in pending:
            added = len(text) + len(self.SEPARATOR) + 2
            if current and size + added > 3500:
                batches.append(current)
                current, size = [], 0
            current.append(text)
            size += added
        if current:
            batches.append(current)
        for number, batch in enumerate(batches, 1):
            self.translate_batch(batch)
            if number % 10 == 0 or number == len(batches):
                print(f"Google translation batches {number}/{len(batches)}", flush=True)
                CACHE_PATH.write_text(json.dumps(self.cache, ensure_ascii=False, indent=2), encoding="utf-8")

    @staticmethod
    def needs_translation(text: str) -> bool:
        core = text.strip()
        return bool(core and core not in EXACT and core not in PRESERVE and not (
            re.fullmatch(r"[\w./:+-]+", core) and any(ch.isdigit() for ch in core)
        ))

    def translate_batch(self, batch: list[str]) -> None:
        payload = ("\n" + self.SEPARATOR + "\n").join(batch)
        last_error: Exception | None = None
        for attempt in range(5):
            try:
                response = self.session.get(
                    self.URL,
                    params={"client": "gtx", "sl": "en", "tl": "vi", "dt": "t", "q": payload},
                    timeout=45,
                )
                response.raise_for_status()
                translated = "".join(item[0] for item in response.json()[0])
                parts = [part.strip() for part in translated.split(self.SEPARATOR)]
                if len(parts) != len(batch):
                    raise RuntimeError(f"Translation batch split mismatch: {len(parts)} != {len(batch)}")
                self.cache.update(zip(batch, parts))
                return
            except Exception as error:
                last_error = error
                time.sleep(1 + attempt * 2)
        raise RuntimeError(f"Google translation failed after retries: {last_error}")

    def translate(self, text: str) -> str:
        return self.cache.get(text, text)


def translate_tree(
    value: Any,
    path: str,
    previous: dict[str, Any],
    translator: Any,
    progress: list[int],
    total: int,
) -> Any:
    if isinstance(value, dict):
        return {
            key: translate_tree(
                item,
                f"{path}.{key}" if path else key,
                previous,
                translator,
                progress,
                total,
            )
            for key, item in value.items()
        }
    if not isinstance(value, str):
        return value
    output = translate_text(value, path, translator)
    progress[0] += 1
    if progress[0] % 100 == 0 or progress[0] == total:
        print(f"Translated {progress[0]}/{total}", flush=True)
    return output


def runtime_guard() -> str:
    return r'''
;(function () {
  var en = window.XBOARD_TRANSLATIONS && window.XBOARD_TRANSLATIONS['en-US'];
  var vi = window.XBOARD_TRANSLATIONS && window.XBOARD_TRANSLATIONS['vi-VN'];
  if (!en || !vi) return;
  var replacements = {};
  function collect(a, b) {
    Object.keys(a || {}).forEach(function (key) {
      if (typeof a[key] === 'string' && typeof b[key] === 'string' && a[key] !== b[key]) {
        replacements[a[key]] = b[key];
      } else if (a[key] && b[key] && typeof a[key] === 'object' && typeof b[key] === 'object') {
        collect(a[key], b[key]);
      }
    });
  }
  collect(en, vi);
  Object.assign(replacements, {
    '功能': 'Chức năng',
    '支付方式': 'Phương thức thanh toán',
    '集成': 'Tích hợp',
    'Telegram Bot 集成': 'Tích hợp Telegram Bot',
    '消息处理和命令系统': 'Hệ thống xử lý tin nhắn và lệnh'
  });
  var keys = Object.keys(replacements).sort(function (a, b) { return b.length - a.length; });
  function active() {
    var saved = localStorage.getItem('i18nextLng');
    return saved === 'vi-VN' || (!saved && /^vi(?:-|$)/i.test(navigator.language || ''));
  }
  function translateText(text) {
    if (!active() || !text || !text.trim()) return text;
    var lead = (text.match(/^\s*/) || [''])[0];
    var tail = (text.match(/\s*$/) || [''])[0];
    var core = text.slice(lead.length, text.length - tail.length);
    if (replacements[core]) return lead + replacements[core] + tail;
    var next = core;
    keys.forEach(function (key) {
      if ((key.length >= 4 || /[\u3400-\u9fff]/.test(key)) && next.indexOf(key) !== -1) next = next.split(key).join(replacements[key]);
    });
    return lead + next + tail;
  }
  function apply(root) {
    var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || /^(SCRIPT|STYLE|TEXTAREA|CODE|PRE)$/.test(node.parentElement.tagName) || node.parentElement.isContentEditable) continue;
      var next = translateText(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    (root || document).querySelectorAll('[placeholder],[title],[aria-label]').forEach(function (element) {
      ['placeholder', 'title', 'aria-label'].forEach(function (attribute) {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, translateText(element.getAttribute(attribute)));
      });
    });
  }
  function start() {
    apply(document.body);
    new MutationObserver(function (records) {
      records.forEach(function (record) {
        if (record.type === 'characterData' && record.target.parentElement) apply(record.target.parentElement);
        record.addedNodes.forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE && node.parentElement) apply(node.parentElement);
          if (node.nodeType === Node.ELEMENT_NODE) apply(node);
        });
      });
    }).observe(document.body, { childList: true, characterData: true, subtree: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start, { once: true });
})();
'''


def main() -> int:
    english = load_locale(EN_PATH)
    segments: list[str] = []
    for value in flatten(english).values():
        segments.extend(
            part.strip()
            for part in PLACEHOLDER_RE.split(value)
            if part and not PLACEHOLDER_RE.fullmatch(part)
        )
    translator = GoogleBatchTranslator(segments)
    total = len(flatten(english))
    vietnamese = translate_tree(english, "", {}, translator, [0], total)

    en_keys = set(flatten(english))
    vi_flat = flatten(vietnamese)
    if set(vi_flat) != en_keys:
        raise RuntimeError("Vietnamese locale keys do not match English locale keys")
    chinese = {key: value for key, value in vi_flat.items() if CHINESE_RE.search(value)}
    if chinese:
        raise RuntimeError("Chinese remains in Vietnamese locale: " + ", ".join(sorted(chinese)[:20]))

    payload = json.dumps(vietnamese, ensure_ascii=False, indent=2)
    output = (
        "window.XBOARD_TRANSLATIONS = window.XBOARD_TRANSLATIONS || {};\n"
        "window.XBOARD_TRANSLATIONS['vi-VN'] = " + payload + ";\n"
        + runtime_guard()
    )
    VI_PATH.write_text(output, encoding="utf-8")
    print(f"Vietnamese admin locale generated and verified: {len(vi_flat)} strings.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
