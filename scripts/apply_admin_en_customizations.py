#!/usr/bin/env python3
"""Keep the custom English admin UI patch when upstream admin assets change."""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LOCALE_DIR = ROOT / "locales"
ASSET_DIR = ROOT / "assets"
MARKER = "请选择重置方式"

# These keys exist in zh-CN but were missing from upstream en-US at the time this
# customization was created. Keep this list explicit so updates are deterministic.
LOCALE_ADDITIONS = {
    "nav.pluginMenuDemo": "Plugin Menu (Demo)",
    "settings.server.manage.title": "Node Management",
    "settings.server.manage.description": "Manage all nodes, including adding, deleting, and editing.",
    "server.columns.loadStatus.metrics.api": "API Status",
    "server.columns.loadStatus.metrics.kernel": "Kernel Status",
    "server.columns.loadStatus.metrics.gc": "GC Pause",
    "server.columns.loadStatus.metrics.limit": "Rate-Limited Users",
    "server.columns.loadStatus.metrics.ws": "WebSocket",
    "server.columns.loadStatus.metrics.goroutines": "Concurrent Goroutines",
    "server.columns.loadStatus.metrics.load": "System Load",
    "server.columns.loadStatus.metrics.users": "Online Users",
    "server.form.listen_address.label": "Listen Address",
    "server.form.listen_address.placeholder": "Leave empty for the default (0.0.0.0), or enter 127.0.0.1, ::1, etc.",
    "server.form.listen_address.description": "Specify the IP address the server listens on. Leave empty for the default (0.0.0.0) to listen on all interfaces. You can set 127.0.0.1 for local-only access or a specific IP address.",
    "server.form.listen_address.show": "Show Listen Address",
    "server.form.listen_address.hide": "Hide Listen Address",
    "server.form.listen_address.optional": "Optional",
    "server.dynamic_form.cert_config.tab": "TLS Certificate",
    "server.dynamic_form.cert_config.cert_mode.label": "Certificate Mode",
    "server.dynamic_form.cert_config.cert_mode.description": "Choose how to obtain the certificate; support depends on the backend node.",
    "server.dynamic_form.cert_config.cert_mode.none_desc": "TLS certificate configuration is disabled",
    "server.dynamic_form.cert_config.domain.label": "Certificate Domain",
    "server.dynamic_form.cert_config.email.label": "Notification Email",
    "server.dynamic_form.cert_config.http_port.label": "Challenge Port",
    "server.dynamic_form.cert_config.http_port.description": "ACME challenge port (default 80)",
    "server.dynamic_form.cert_config.dns_provider.label": "DNS Provider",
    "server.dynamic_form.cert_config.dns_provider.doc_link": "View DNS provider configuration guide",
    "server.dynamic_form.cert_config.dns_env.label": "Environment Variables (API Keys)",
    "server.dynamic_form.cert_config.dns_env.description_short": "One KEY=VALUE entry per line",
    "server.dynamic_form.cert_config.cert_content.label": "Certificate Content (Public Key)",
    "server.dynamic_form.cert_config.key_content.label": "Key Content (Private Key)",
    "server.network_settings.edit_padding_scheme": "Edit Padding Scheme",
    "server.network_settings.validation.must_be_array": "Configuration must be a JSON array",
    "sidebar.pluginManagement": "Plugin Management",
}

# Hard-coded Chinese strings found in the minified admin bundle. Replacements
# are ordered by source length at runtime, preventing short terms from corrupting
# longer phrases (for example, replacing "默认" before "{{key|默认值}}").
REPLACEMENTS = {
    "请选择重置方式": "Select reset type",
    "请选择": "Please select",
    "支付宝": "Alipay",
    "更新成功": "Updated successfully",
    "边栏风格": "Sidebar Style",
    "头部风格": "Header Style",
    "主题色": "Theme Color",
    "默认": "Default",
    "黑色": "Black",
    "暗蓝色": "Dark Blue",
    "奶绿色": "Mint Green",
    "背景": "Background",
    "请输入图片地址": "Enter image URL",
    "将会在后台登录页面进行展示。": "This will be displayed on the admin login page.",
    "保存设置": "Save Settings",
    "个性化设置": "Personalization",
    "自定义系统界面外观，包括主题风格、布局、颜色方案、背景图等个性化选项。": "Customize the system appearance, including theme, layout, colors, and background image.",
    "邮件发送成功": "Email sent successfully",
    "邮件发送失败": "Email sending failed",
    "测试邮件已成功发送，请检查收件箱": "Test email sent successfully. Please check your inbox.",
    "发送测试邮件时遇到错误": "An error occurred while sending the test email.",
    "发送详情": "Send Details",
    "收件地址": "Recipient",
    "邮件主题": "Email Subject",
    "模板名称": "Template Name",
    "错误信息": "Error Details",
    "配置信息": "Configuration",
    "驱动": "Driver",
    "服务器": "Server",
    "端口": "Port",
    "加密方式": "Encryption",
    "无": "None",
    "发件人": "Sender",
    "未设置": "Not Set",
    "用户名": "Username",
    "请选择加密方式": "Select encryption",
    "站点名称": "Site Name",
    "站点网址": "Site URL",
    "验证码": "Verification Code",
    "通知正文": "Notification Body",
    "这是一封测试通知邮件。": "This is a test notification email.",
    "登录链接": "Login Link",
    "取消": "Cancel",
    "确认": "Confirm",
    "元": "CNY",
    "确认操作": "Confirm Action",
    "确定要执行此操作吗？": "Are you sure you want to perform this action?",
    "排序保存成功": "Sort order saved successfully",
    "配置加载失败": "Failed to load configuration",
    "配置保存成功": "Configuration saved successfully",
    "配置保存失败": "Configuration save failed",
    "保存中...": "Saving...",
    "保存配置": "Save Configuration",
    "安装状态": "Installation Status",
    "全部状态": "All Statuses",
    "已安装": "Installed",
    "可安装": "Available",
    "插件文档": "Plugin Documentation",
    "主题上传成功": "Theme uploaded successfully",
    "主题删除成功": "Theme deleted successfully",
    "主题切换成功": "Theme switched successfully",
    "预览图": "preview",
    "缩略图": "thumbnail",
    "您确定要清空所有内容吗？": "Are you sure you want to clear all content?",
    "标题": "Title",
    "清空": "Clear",
    "加粗": "Bold",
    "斜体": "Italic",
    "下划线": "Underline",
    "删除线": "Strikethrough",
    "无序列表": "Bulleted List",
    "有序列表": "Numbered List",
    "引用": "Quote",
    "换行": "Line Break",
    "行内代码": "Inline Code",
    "代码块": "Code Block",
    "表格": "Table",
    "图片": "Image",
    "链接": "Link",
    "撤销": "Undo",
    "重做": "Redo",
    "全屏": "Fullscreen",
    "退出全屏": "Exit Fullscreen",
    "仅显示编辑器": "Editor Only",
    "仅显示预览": "Preview Only",
    "显示编辑器与预览": "Editor and Preview",
    "按下 Tab 键时实际的输入": "Actual input when pressing the Tab key",
    "制表符": "Tab",
    "空格": "Spaces",
    "发布或编辑系统公告，支持 Markdown 格式。": "Publish or edit a system announcement. Markdown is supported.",
    "发布或编辑知识库文章，支持多语言和 Markdown 格式。": "Publish or edit a knowledge-base article with multilingual Markdown support.",
    "适合高延迟、大带宽且不需要 Brutal 的环境": "Suitable for high-latency, high-bandwidth environments that do not need Brutal",
    "通用模式，兼容性最好": "General mode with the best compatibility",
    "最大建立的物理 TCP 数量": "Maximum number of physical TCP connections",
    "填充数据包以对抗流量特征分析": "Pad packets to resist traffic fingerprinting",
    "Hop 间隔 (秒)": "Hop Interval (seconds)",
    "例如: 30": "Example: 30",
    "Hop 间隔时间，单位为秒": "Hop interval in seconds",
    "请选择协议类型": "Select a protocol type",
    "证书模式": "Certificate Mode",
    "未启用 TLS 证书配置": "TLS certificate configuration is disabled",
    "自定义Outbounds (JSON)": "Custom Outbounds (JSON)",
    "自定义Routes (JSON)": "Custom Routes (JSON)",
    "选择全部": "Select All",
    "选择节点": "Select Nodes",
    "保存失败": "Save failed",
    "表单校验失败，请检查输入": "Form validation failed. Please check your input.",
    "总用户数": "Total Users",
    "所有使用该套餐的用户（包括已过期）": "All users who use this plan, including expired users",
    "有效期内用户": "Users Within Validity Period",
    "当前仍在有效期内的活跃用户": "Currently active users whose plans have not expired",
    "活跃率：": "Active Rate:",
    "月付": "Monthly",
    "季付": "Quarterly",
    "半年付": "Semiannual",
    "年付": "Annual",
    "两年付": "Two Years",
    "三年付": "Three Years",
    "流量包": "Traffic Package",
    "重置包": "Reset Package",
    "表单校验失败": "Form validation failed",
    "标签": "Tags",
    "输入标签后按回车确认": "Enter a tag and press Enter to confirm",
    "创建或编辑优惠券，支持金额、百分比优惠及多种限制。": "Create or edit coupons with amount, percentage, and other restrictions.",
    "删除成功": "Deleted successfully",
    "天": "Days",
    "请输入模板名称": "Enter a template name",
    "基础配置": "Basic Configuration",
    "排序": "Sort Order",
    "请选择一个模板": "Select a template",
    "生成数量必须大于0": "Quantity must be greater than 0",
    "单次最多生成10000个": "The maximum per batch is 10,000",
    "有效期必须大于0": "Validity period must be greater than 0",
    "最大使用次数必须大于0": "Maximum uses must be greater than 0",
    "搜索用户邮箱...": "Search user email...",
    "【{{app.name}}】系统通知（{{now}}）": "[{{app.name}}] System Notification ({{now}})",
    "尊敬的用户 {{user.email}} 您好：\\n\\n这里是来自 {{app.name}} 的系统通知。\\n\\n如有问题请访问：{{app.url}}\\n": "Hello {{user.email}},\\n\\nThis is a system notification from {{app.name}}.\\n\\nIf you have any questions, visit {{app.url}}.\\n",
    "请先选择用户": "Please select users first",
    "发送范围": "Send To",
    "仅选中（" + "$" + "{h}）": "Selected only (" + "$" + "{h})",
    "筛选后的用户": "Filtered Users",
    "全部用户": "All Users",
    "例如：系统通知（支持占位符）": "Example: System notification (placeholders supported)",
    "支持占位符：": "Supported placeholders:",
    " 或": " or",
    "{{key|默认值}}": "{{key|default value}}",
    "（未知变量会原样保留）": "(Unknown variables are kept as-is)",
    "填入系统通知模板": "Enter the system notification template",
    "请输入邮件正文（可使用占位符）": "Enter the email body (placeholders supported)",
    "content 默认按纯文本处理（会转义），不支持 HTML 富文本。": "Content is treated as plain text by default (escaped); rich HTML is not supported.",
    "可用变量": "Available Variables",
    "筛选": "Filter",
    "全部": "All",
    "将对选中的 " + "$" + "{a} 个用户执行封禁": "This will ban the selected " + "$" + "{a} users",
    "时间": "Time",
    "上行流量": "Upload",
    "下行流量": "Download",
    "倍率": "Multiplier",
    "总计": "Total",
    "选择用户": "Select Users",
    "重置成功": "Reset successful",
    "台": "Devices",
    "用户邮箱": "User Email",
    "用户ID": "User ID",
    "重置类型": "Reset Type",
    "触发源": "Trigger",
    "清零流量": "Clear Traffic",
    "上传流量(GB)": "Upload Traffic (GB)",
    "下载流量(GB)": "Download Traffic (GB)",
    "重置时间": "Reset Time",
    "记录时间": "Recorded At",
}


def parse_locale(path: Path) -> dict[str, str]:
    source = path.read_text(encoding="utf-8")
    return dict(re.findall(r'"([^"]+)":\s*"((?:\\.|[^"])*)"', source))


def flatten_keys(path: Path) -> set[str]:
    return set(parse_locale(path))


def update_locale() -> None:
    path = LOCALE_DIR / "en-US.js"
    source = path.read_text(encoding="utf-8")
    existing = parse_locale(path)
    additions = [(key, value) for key, value in LOCALE_ADDITIONS.items() if key not in existing]
    if additions:
        closing = source.rfind("}")
        if closing < 0:
            raise RuntimeError(f"Cannot find the end of {path}")
        lines = "".join(f'  "{key}": "{value}",\\n' for key, value in additions)
        source = source[:closing].rstrip() + ",\\n" + lines + source[closing:]
        path.write_text(source, encoding="utf-8")

    missing = flatten_keys(LOCALE_DIR / "zh-CN.js") - flatten_keys(path)
    if missing:
        raise RuntimeError("Missing English locale keys: " + ", ".join(sorted(missing)))


def update_bundles() -> None:
    bundles = sorted(ASSET_DIR.glob("index-*.js"))
    if not bundles:
        raise RuntimeError("No admin index bundle found")

    for path in bundles:
        source = path.read_text(encoding="utf-8")
        marker_at = source.find(MARKER)
        if marker_at < 0:
            marker_at = source.find("Select reset type")
        if marker_at < 0:
            raise RuntimeError(f"Cannot find expected UI marker in {path}; update REPLACEMENTS for the new build")

        prefix, suffix = source[:marker_at], source[marker_at:]
        for original, translated in sorted(REPLACEMENTS.items(), key=lambda item: len(item[0]), reverse=True):
            suffix = suffix.replace(original, translated)
        path.write_text(prefix + suffix, encoding="utf-8")

        remaining = sorted(set(re.findall(r'["\x60][^"\x60\\n]*[\u4e00-\u9fff][^"\x60\\n]*["\x60]', suffix)))
        if remaining:
            sample = "; ".join(remaining[:8])
            raise RuntimeError(f"Untranslated Chinese UI string(s) remain in {path}: {sample}")


def main() -> int:
    try:
        update_locale()
        update_bundles()
    except Exception as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print("English admin customization applied and verified.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
