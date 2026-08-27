window.XBOARD_TRANSLATIONS = window.XBOARD_TRANSLATIONS || {};
window.XBOARD_TRANSLATIONS['vi-VN'] = {
  "giftCard": {
    "title": "Quản lý thẻ quà tặng",
    "description": "Quản lý mẫu thẻ quà tặng, mã đổi quà và hồ sơ sử dụng.",
    "tabs": {
      "templates": "Quản lý mẫu",
      "codes": "Quản lý mã đổi quà",
      "usages": "Hồ sơ sử dụng",
      "statistics": "Thống kê"
    },
    "template": {
      "title": "Quản lý mẫu",
      "description": "Quản lý mẫu thẻ quà tặng, bao gồm tạo, chỉnh sửa và xóa mẫu.",
      "table": {
        "title": "Danh sách mẫu",
        "columns": {
          "id": "ID",
          "name": "Tên",
          "type": "Loại",
          "status": "Trạng thái",
          "sort": "Sắp xếp",
          "rewards": "Phần thưởng",
          "created_at": "Thời gian tạo",
          "actions": "Thao tác",
          "no_rewards": "Không có phần thưởng"
        }
      },
      "form": {
        "add": "Thêm mẫu",
        "edit": "Chỉnh sửa mẫu",
        "name": {
          "label": "Tên mẫu",
          "placeholder": "Vui lòng nhập tên mẫu",
          "required": "Vui lòng nhập tên mẫu"
        },
        "sort": {
          "label": "Sắp xếp",
          "placeholder": "Số nhỏ hơn xuất hiện đầu tiên"
        },
        "type": {
          "label": "Loại",
          "placeholder": "Vui lòng chọn loại thẻ quà tặng"
        },
        "description": {
          "label": "Mô tả",
          "placeholder": "Vui lòng nhập mô tả thẻ quà tặng"
        },
        "status": {
          "label": "Trạng thái",
          "description": "Khi bị tắt, mẫu này không thể tạo hoặc đổi thẻ quà tặng mới."
        },
        "display": {
          "title": "Hiệu ứng hiển thị"
        },
        "theme_color": {
          "label": "Màu chủ đề"
        },
        "icon": {
          "label": "Biểu tượng",
          "placeholder": "Vui lòng nhập URL biểu tượng"
        },
        "background_image": {
          "label": "Hình nền",
          "placeholder": "Vui lòng nhập URL hình nền"
        },
        "conditions": {
          "title": "Điều kiện sử dụng",
          "new_user_max_days": {
            "label": "Giới hạn ngày đăng ký người dùng mới",
            "placeholder": "Ví dụ: 7 (Chỉ dành cho người dùng đăng ký trong vòng 7 ngày)"
          },
          "new_user_only": {
            "label": "Chỉ người dùng mới"
          },
          "paid_user_only": {
            "label": "Chỉ người dùng trả phí"
          },
          "require_invite": {
            "label": "Yêu cầu mối quan hệ lời mời"
          },
          "allowed_plans": {
            "label": "Gói được phép",
            "placeholder": "Chọn các gói được phép đổi (để trống nếu không bị hạn chế)"
          },
          "disallowed_plans": {
            "label": "Gói không được phép",
            "placeholder": "Chọn các gói bị cấm đổi quà (để trống nếu không bị hạn chế)"
          }
        },
        "limits": {
          "title": "Giới hạn sử dụng",
          "max_use_per_user": {
            "label": "Số lần sử dụng tối đa cho mỗi người dùng",
            "placeholder": "Để trống không giới hạn"
          },
          "cooldown_hours": {
            "label": "Số giờ hồi chiêu cho cùng loại",
            "placeholder": "Để trống không giới hạn"
          },
          "invite_reward_rate": {
            "label": "Tỷ lệ phần thưởng của người mời",
            "placeholder": "Ví dụ: 0,2 (đại diện cho 20%)",
            "description": "Khi người dùng có người mời, phần thưởng của người mời = phần thưởng số dư × tỷ lệ này"
          }
        },
        "rewards": {
          "title": "Phần thưởng",
          "balance": {
            "label": "Số dư thưởng (Nhân dân tệ)",
            "short_label": "Số dư",
            "placeholder": "Vui lòng nhập số tiền thưởng (Yuan)"
          },
          "transfer_enable": {
            "label": "Lưu lượng thưởng (GB)",
            "short_label": "Lưu lượng",
            "placeholder": "Vui lòng nhập lưu lượng thưởng (GB)"
          },
          "expire_days": {
            "label": "Gia hạn hiệu lực (Ngày)",
            "short_label": "hiệu lực",
            "placeholder": "Vui lòng nhập ngày gia hạn"
          },
          "transfer": {
            "label": "Lưu lượng thưởng (Byte)",
            "placeholder": "Vui lòng nhập lưu lượng thưởng (byte)"
          },
          "days": {
            "label": "Gia hạn hiệu lực (Ngày)",
            "placeholder": "Vui lòng nhập ngày gia hạn"
          },
          "device_limit": {
            "label": "Tăng số lượng thiết bị",
            "short_label": "Thiết bị",
            "placeholder": "Vui lòng nhập số lượng thiết bị tăng lên"
          },
          "reset_package": {
            "label": "Đặt lại lưu lượng truy cập hàng tháng",
            "description": "Khi được bật, việc quy đổi sẽ xóa lưu lượng truy cập đã sử dụng trong gói hiện tại của người dùng."
          },
          "reset_count": {
            "description": "Loại thẻ này sẽ thiết lập lại mức sử dụng lưu lượng truy cập hàng tháng của người dùng."
          },
          "task_card": {
            "description": "Phần thưởng cụ thể cho thẻ quà tặng nhiệm vụ sẽ được cấu hình trong hệ thống nhiệm vụ."
          },
          "plan_id": {
            "label": "Gói được chỉ định",
            "short_label": "Gói",
            "placeholder": "Vui lòng chọn một gói"
          },
          "plan_validity_days": {
            "label": "Hiệu lực của gói (Ngày)",
            "short_label": "Hiệu lực của gói",
            "placeholder": "Để trống để sử dụng hiệu lực mặc định của gói"
          },
          "random_rewards": {
            "label": "Nhóm phần thưởng ngẫu nhiên",
            "add": "Thêm vật phẩm phần thưởng ngẫu nhiên",
            "weight": "Trọng số"
          }
        },
        "special_config": {
          "title": "Cấu hình đặc biệt",
          "start_time": {
            "label": "Thời gian bắt đầu sự kiện",
            "placeholder": "Vui lòng chọn ngày bắt đầu"
          },
          "end_time": {
            "label": "Thời gian kết thúc sự kiện",
            "placeholder": "Vui lòng chọn ngày kết thúc"
          },
          "festival_bonus": {
            "label": "Hệ số thưởng lễ hội",
            "placeholder": "Ví dụ: 1,5 (đại diện cho 1,5x)"
          }
        },
        "submit": {
          "saving": "Đang lưu...",
          "save": "Lưu"
        }
      },
      "actions": {
        "edit": "Chỉnh sửa",
        "delete": "Xóa",
        "deleteConfirm": {
          "title": "Xác nhận Xóa",
          "description": "Hành động này sẽ xóa vĩnh viễn mẫu này. Bạn có chắc chắn muốn tiếp tục không?",
          "confirmText": "Xóa"
        }
      }
    },
    "code": {
      "title": "Quản lý mã đổi quà",
      "form": {
        "generate": "Tạo mã đổi quà",
        "template_id": {
          "label": "Chọn mẫu",
          "placeholder": "Vui lòng chọn một mẫu để tạo mã đổi quà"
        },
        "count": {
          "label": "Số lượng thế hệ"
        },
        "prefix": {
          "label": "Tiền tố tùy chỉnh (Tùy chọn)"
        },
        "expires_hours": {
          "label": "Hiệu lực (Giờ)"
        },
        "max_usage": {
          "label": "Số lượng sử dụng tối đa"
        },
        "download_csv": "Xuất CSV",
        "submit": {
          "generating": "Đang tạo...",
          "generate": "Tạo ngay bây giờ"
        }
      },
      "description": "Quản lý mã đổi thẻ quà tặng, bao gồm tạo, xem và xuất mã.",
      "generate": {
        "title": "Tạo mã đổi quà",
        "template": "Chọn mẫu",
        "count": "Số lượng thế hệ",
        "prefix": "Tiền tố tùy chỉnh",
        "expires_hours": "Hiệu lực (Giờ)",
        "max_usage": "Số lượng sử dụng tối đa",
        "submit": "Tạo"
      },
      "table": {
        "title": "Danh sách mã đổi quà",
        "columns": {
          "id": "ID",
          "code": "Mã đổi quà",
          "template_name": "Tên mẫu",
          "status": "Trạng thái",
          "expires_at": "Hết hạn vào lúc",
          "usage_count": "Số lượng đã sử dụng",
          "max_usage": "Số lượng có sẵn",
          "created_at": "Thời gian tạo"
        }
      },
      "actions": {
        "enable": "Kích hoạt",
        "disable": "Vô hiệu hóa",
        "export": "Xuất dữ liệu",
        "exportConfirm": {
          "title": "Xác nhận xuất",
          "description": "Thao tác này sẽ xuất tất cả mã đổi quà từ lô đã chọn dưới dạng tệp văn bản. Bạn có chắc chắn muốn tiếp tục không?",
          "confirmText": "Xuất dữ liệu"
        }
      },
      "status": {
        "0": "Chưa sử dụng",
        "1": "đã qua sử dụng",
        "2": "Đã tắt",
        "3": "Đã hết hạn"
      }
    },
    "usage": {
      "title": "Hồ sơ sử dụng",
      "description": "Xem hồ sơ sử dụng thẻ quà tặng và thông tin chi tiết.",
      "table": {
        "columns": {
          "id": "ID",
          "code": "Mã đổi quà",
          "template_name": "Tên mẫu",
          "user_email": "Email người dùng",
          "rewards_given": "Phần thưởng được trao",
          "invite_rewards": "Phần thưởng mời",
          "multiplier_applied": "Áp dụng hệ số nhân",
          "ip_address": "Địa chỉ IP",
          "created_at": "Thời gian sử dụng",
          "actions": "Thao tác"
        }
      },
      "actions": {
        "view": "Xem chi tiết"
      }
    },
    "statistics": {
      "title": "Thống kê",
      "description": "Xem số liệu thống kê về thẻ quà tặng và phân tích việc sử dụng.",
      "total": {
        "title": "Thống kê tổng thể",
        "templates_count": "Tổng số mẫu",
        "active_templates_count": "Mẫu hoạt động",
        "codes_count": "Tổng số mã đổi thưởng",
        "used_codes_count": "Mã đổi quà đã sử dụng",
        "usages_count": "Hồ sơ sử dụng"
      },
      "daily": {
        "title": "Sử dụng hàng ngày",
        "chart": "Biểu đồ xu hướng sử dụng"
      },
      "type": {
        "title": "Thống kê loại",
        "chart": "Biểu đồ phân phối loại"
      },
      "dateRange": {
        "label": "Phạm vi ngày",
        "start": "Ngày bắt đầu",
        "end": "Ngày kết thúc"
      }
    },
    "types": {
      "1": "Thẻ quà tặng chung",
      "2": "Gói thẻ quà tặng",
      "3": "Thẻ quà tặng bí ẩn",
      "4": "Thẻ quà tặng nhiệm vụ"
    },
    "common": {
      "search": "Tìm kiếm thẻ quà tặng...",
      "reset": "Đặt lại",
      "filter": "Bộ lọc",
      "export": "Xuất dữ liệu",
      "refresh": "Làm mới",
      "back": "Quay lại",
      "close": "Đóng",
      "confirm": "Xác nhận",
      "cancel": "Hủy",
      "enabled": "Đã bật",
      "disabled": "Đã tắt",
      "loading": "Đang tải...",
      "noData": "Không có dữ liệu",
      "success": "Hoạt động thành công",
      "error": "Thao tác không thành công"
    },
    "messages": {
      "formInvalid": "Vui lòng kiểm tra xem thông tin nhập vào biểu mẫu có chính xác không",
      "templateCreated": "Mẫu được tạo thành công",
      "templateUpdated": "Đã cập nhật mẫu thành công",
      "templateDeleted": "Đã xóa mẫu thành công",
      "codeGenerated": "Mã đổi quà được tạo thành công",
      "generateCodeFailed": "Không tạo được mã đổi thưởng",
      "codeStatusUpdated": "Trạng thái mã đổi quà được cập nhật thành công",
      "updateCodeStatusFailed": "Không thể cập nhật trạng thái mã đổi quà",
      "codesExported": "Mã đổi quà đã được xuất thành công",
      "createTemplateFailed": "Không tạo được mẫu",
      "updateTemplateFailed": "Không cập nhật được mẫu",
      "deleteTemplateFailed": "Không xóa được mẫu",
      "loadDataFailed": "Không tải được dữ liệu",
      "codesGenerated": "Mã đổi quà được tạo thành công"
    }
  },
  "user": {
    "manage": {
      "title": "Quản lý người dùng",
      "description": "Tại đây bạn có thể quản lý người dùng, bao gồm các thao tác thêm, xóa, chỉnh sửa và truy vấn."
    },
    "columns": {
      "is_admin": "Quản trị",
      "is_staff": "nhân viên",
      "id": "ID",
      "email": "Email",
      "online_count": "Thiết bị trực tuyến",
      "status": "Trạng thái",
      "subscription": "Đăng ký",
      "group": "Nhóm",
      "used_traffic": "Lưu lượng truy cập đã sử dụng",
      "total_traffic": "Tổng lưu lượng truy cập",
      "expire_time": "Thời gian hết hạn",
      "balance": "Số dư",
      "commission": "Hoa hồng",
      "register_time": "Thời gian đăng ký",
      "actions": "Thao tác",
      "next_reset_at": "Tiếp theo Đặt lại vào lúc",
      "device_limit": {
        "unlimited": "Không giới hạn thiết bị",
        "limited": "Tối đa {{count}} thiết bị được phép"
      },
      "status_text": {
        "normal": "Bình thường",
        "banned": "Bị cấm"
      },
      "online_status": {
        "online": "Hiện đang trực tuyến",
        "never": "Không bao giờ trực tuyến",
        "last_online": "Trực tuyến lần cuối: {{time}}",
        "offline_duration": {
          "days": "Thời lượng ngoại tuyến: {{count}}d",
          "hours": "Thời lượng ngoại tuyến: {{count}}h",
          "minutes": "Thời lượng ngoại tuyến: {{count}}tôi",
          "seconds": "Thời lượng ngoại tuyến: {{count}}s"
        }
      },
      "expire_status": {
        "permanent": "Vĩnh viễn",
        "expired": "Đã hết hạn {{days}} ngày trước",
        "remaining": "{{days}} ngày còn lại"
      },
      "actions_menu": {
        "edit": "Chỉnh sửa",
        "view_details": "Xem chi tiết",
        "assign_order": "Chỉ định đơn hàng",
        "copy_url": "Sao chép URL đăng ký",
        "reset_secret": "Đặt lại UUID & URL",
        "orders": "Đơn hàng",
        "invites": "Lời mời",
        "traffic_records": "Hồ sơ lưu lượng",
        "reset_traffic": "Đặt lại lưu lượng truy cập",
        "delete": "Xóa",
        "delete_confirm_title": "Xác nhận Xóa người dùng",
        "delete_confirm_description": "Hành động này sẽ xóa vĩnh viễn người dùng {{email}} và tất cả dữ liệu liên quan, bao gồm đơn hàng, ticket giảm giá, hồ sơ lưu lượng truy cập và ticket hỗ trợ. Không thể hoàn tác hành động này. Bạn có muốn tiếp tục không?"
      }
    },
    "filter": {
      "selected": "{{count}} đã chọn",
      "no_results": "Không tìm thấy kết quả nào.",
      "clear": "Xóa bộ lọc",
      "search_placeholder": "Tìm kiếm...",
      "email_search": "Tìm kiếm email người dùng...",
      "advanced": "Bộ lọc nâng cao",
      "reset": "Đặt lại bộ lọc",
      "sheet": {
        "title": "Bộ lọc nâng cao",
        "description": "Thêm một hoặc nhiều điều kiện lọc để tìm người dùng một cách chính xác",
        "conditions": "Điều kiện lọc",
        "add": "Thêm điều kiện",
        "condition": "tình trạng {{number}}",
        "field": "Chọn trường",
        "operator": "Chọn nhà điều hành",
        "value": "Nhập giá trị",
        "value_number": "Nhập giá trị ({{unit}})",
        "reset": "Đặt lại",
        "apply": "Áp dụng bộ lọc"
      },
      "fields": {
        "email": "Email",
        "phone": "Số điện thoại",
        "id": "ID người dùng",
        "plan_id": "Đăng ký",
        "transfer_enable": "Lưu lượng",
        "total_used": "Lưu lượng truy cập đã sử dụng",
        "online_count": "Thiết bị trực tuyến",
        "expired_at": "Thời gian hết hạn",
        "uuid": "UUID",
        "token": "Mã thông báo",
        "banned": "Trạng thái tài khoản",
        "remark": "Nhận xét",
        "inviter_email": "Email người mời",
        "invite_user_id": "ID người mời",
        "is_admin": "Quản trị",
        "is_staff": "nhân viên"
      },
      "operators": {
        "contains": "Chứa",
        "eq": "Bằng",
        "gt": "lớn hơn",
        "lt": "Ít hơn"
      },
      "status": {
        "normal": "Bình thường",
        "banned": "Bị cấm"
      },
      "boolean": {
        "true": "Có",
        "false": "Không"
      }
    },
    "generate": {
      "button": "Tạo người dùng",
      "title": "Tạo người dùng",
      "form": {
        "email": "Email",
        "email_prefix": "Tài khoản (để trống để tạo hàng loạt)",
        "email_domain": "Tên miền",
        "password": "Mật khẩu",
        "password_placeholder": "Để trống để sử dụng email làm mật khẩu",
        "expire_time": "Thời gian hết hạn",
        "expire_time_placeholder": "Chọn ngày hết hạn của người dùng, để trống vĩnh viễn",
        "permanent": "Vĩnh viễn",
        "subscription": "Gói đăng ký",
        "subscription_none": "không có",
        "generate_count": "Tạo số lượng",
        "generate_count_placeholder": "Nhập số lượng để tạo hàng loạt",
        "cancel": "Hủy",
        "submit": "Tạo",
        "success": "Đã tạo thành công",
        "download_csv": "Xuất dưới dạng tệp CSV"
      }
    },
    "edit": {
      "button": "Chỉnh sửa thông tin người dùng",
      "title": "Quản lý người dùng",
      "form": {
        "email": "Email",
        "phone_country": "Quốc gia/Khu vực",
        "phone": "Số điện thoại",
        "phone_placeholder": "Vui lòng nhập số điện thoại",
        "email_placeholder": "Vui lòng nhập email",
        "inviter_email": "Email người mời",
        "inviter_email_placeholder": "Vui lòng nhập email",
        "password": "Mật khẩu",
        "password_placeholder": "Nhập mật khẩu mới nếu bạn muốn thay đổi",
        "balance": "Số dư",
        "balance_placeholder": "Vui lòng nhập số dư",
        "commission_balance": "Số dư hoa hồng",
        "commission_balance_placeholder": "Vui lòng nhập số dư hoa hồng",
        "upload": "Tải lên lưu lượng truy cập",
        "upload_placeholder": "Tải lên lưu lượng truy cập",
        "download": "Tải xuống lưu lượng truy cập",
        "download_placeholder": "Lưu lượng tải xuống",
        "total_traffic": "Tổng lưu lượng truy cập",
        "total_traffic_placeholder": "Vui lòng nhập lưu lượng truy cập",
        "expire_time": "Thời gian hết hạn",
        "expire_time_placeholder": "Chọn ngày hết hạn của người dùng, để trống vĩnh viễn",
        "expire_time_specific": "Thời gian cụ thể",
        "expire_time_today": "Đặt vào cuối ngày hôm nay",
        "expire_time_permanent": "Vĩnh viễn",
        "expire_time_1month": "một tháng",
        "expire_time_3months": "ba tháng",
        "expire_time_confirm": "Xác nhận",
        "subscription": "Gói đăng ký",
        "subscription_none": "không có",
        "account_status": "Trạng thái tài khoản",
        "commission_type": "Loại hoa hồng",
        "commission_type_system": "Theo dõi cài đặt hệ thống",
        "commission_type_cycle": "Hoa hồng chu kỳ",
        "commission_type_onetime": "Hoa hồng một lần",
        "commission_rate": "Tỷ lệ hoa hồng",
        "commission_rate_placeholder": "Để trống để theo dõi tỷ lệ hoa hồng của trang web",
        "discount": "Giảm giá độc quyền",
        "discount_placeholder": "Để trống để không được giảm giá độc quyền",
        "speed_limit": "Giới hạn tốc độ",
        "speed_limit_placeholder": "Để trống vì không giới hạn tốc độ",
        "device_limit": "Giới hạn thiết bị",
        "device_limit_placeholder": "Để trống vì không giới hạn thiết bị",
        "is_admin": "Là quản trị viên",
        "is_staff": "là nhân viên",
        "remarks": "Bình luận",
        "remarks_placeholder": "Vui lòng nhập nhận xét vào đây",
        "cancel": "Hủy",
        "submit": "Gửi",
        "success": "Đã sửa đổi thành công"
      }
    },
    "actions": {
      "title": "Thao tác",
      "send_email": "Gửi email",
      "export_csv": "Xuất CSV",
      "traffic_reset_stats": "Thống kê thiết lập lại lưu lượng truy cập",
      "batch_ban": "Lệnh cấm hàng loạt",
      "confirm_ban": {
        "title": "Xác nhận lệnh cấm hàng loạt",
        "filtered_description": "Hành động này sẽ cấm tất cả người dùng phù hợp với bộ lọc hiện tại của bạn. Không thể hoàn tác hành động này.",
        "all_description": "Hành động này sẽ cấm tất cả người dùng trong hệ thống. Không thể hoàn tác hành động này.",
        "cancel": "Hủy",
        "confirm": "Xác nhận lệnh cấm",
        "banning": "Cấm..."
      }
    },
    "messages": {
      "success": "Thành công",
      "error": "Lỗi",
      "export": {
        "success": "Xuất thành công",
        "failed": "Xuất không thành công"
      },
      "batch_ban": {
        "success": "Lệnh cấm hàng loạt thành công",
        "failed": "Lệnh cấm hàng loạt không thành công"
      },
      "send_mail": {
        "success": "Email đã được gửi thành công",
        "failed": "Không gửi được email",
        "required_fields": "Vui lòng điền vào tất cả các trường bắt buộc"
      }
    },
    "traffic_reset": {
      "title": "Đặt lại lưu lượng",
      "description": "Đặt lại mức sử dụng lưu lượng cho người dùng {{email}}",
      "tabs": {
        "reset": "Đặt lại lưu lượng truy cập",
        "history": "Đặt lại lịch sử"
      },
      "user_info": "Thông tin người dùng",
      "warning": {
        "title": "Thông báo quan trọng",
        "irreversible": "Thao tác thiết lập lại lưu lượng truy cập là không thể đảo ngược, vui lòng tiến hành một cách thận trọng",
        "reset_to_zero": "Sau khi đặt lại, lưu lượng tải lên và tải xuống của người dùng sẽ bị xóa về 0",
        "logged": "Mọi thao tác reset sẽ được ghi vào hệ thống"
      },
      "reason": {
        "label": "Đặt lại lý do",
        "placeholder": "Vui lòng nhập lý do đặt lại lưu lượng truy cập (tùy chọn)",
        "optional": "Trường này là tùy chọn và được sử dụng để ghi lại lý do thiết lập lại"
      },
      "confirm_reset": "Xác nhận đặt lại",
      "resetting": "Đang đặt lại...",
      "reset_success": "Đặt lại lưu lượng truy cập thành công",
      "reset_failed": "Đặt lại lưu lượng truy cập không thành công",
      "history": {
        "summary": "Đặt lại Tổng quan",
        "reset_count": "Đặt lại số lượng",
        "last_reset": "Đặt lại lần cuối",
        "next_reset": "Tiếp theo Đặt lại",
        "never": "Không bao giờ đặt lại",
        "no_schedule": "Không có lịch đặt lại",
        "records": "Đặt lại hồ sơ",
        "recent_records": "10 bản ghi đặt lại gần đây",
        "no_records": "Không có hồ sơ thiết lập lại",
        "reset_time": "Đặt lại thời gian",
        "traffic_cleared": "Đã thông xe"
      },
      "stats": {
        "title": "Thống kê thiết lập lại lưu lượng truy cập",
        "description": "Xem số liệu thống kê thiết lập lại lưu lượng truy cập hệ thống",
        "time_range": "Phạm vi thời gian thống kê",
        "total_resets": "Tổng số lần đặt lại",
        "auto_resets": "Tự động đặt lại",
        "manual_resets": "Đặt lại thủ công",
        "cron_resets": "Đặt lại Cron",
        "in_period": "Cuối cùng {{days}} ngày",
        "breakdown": "Phân tích loại đặt lại",
        "breakdown_description": "Phân tích tỷ lệ phần trăm của các loại thao tác đặt lại khác nhau",
        "auto_percentage": "Tỷ lệ đặt lại tự động",
        "manual_percentage": "Tỷ lệ đặt lại thủ công",
        "cron_percentage": "Tỷ lệ đặt lại Cron",
        "days_options": {
          "week": "Tuần trước",
          "month": "Tháng trước",
          "quarter": "Quý trước",
          "year": "Năm ngoái"
        }
      }
    },
    "traffic_reset_logs": {
      "title": "Nhật ký đặt lại lưu lượng truy cập",
      "description": "Xem hồ sơ chi tiết về tất cả các hoạt động thiết lập lại lưu lượng truy cập trong hệ thống",
      "columns": {
        "id": "ID nhật ký",
        "user": "Người dùng",
        "reset_type": "Đặt lại loại",
        "trigger_source": "Nguồn kích hoạt",
        "cleared_traffic": "Đã xóa lưu lượng truy cập",
        "cleared": "Đã xóa",
        "upload": "Tải lên",
        "download": "Tải xuống",
        "reset_time": "Đặt lại thời gian",
        "log_time": "Đăng nhập thời gian"
      },
      "filters": {
        "search_user": "Tìm kiếm email người dùng...",
        "reset_type": "Đặt lại loại",
        "trigger_source": "Nguồn kích hoạt",
        "all_types": "Tất cả các loại",
        "all_sources": "Tất cả các nguồn",
        "start_date": "Ngày bắt đầu",
        "end_date": "Ngày kết thúc",
        "apply_date": "Áp dụng bộ lọc",
        "reset": "Đặt lại bộ lọc",
        "filter_title": "Tùy chọn bộ lọc",
        "filter_description": "Đặt điều kiện lọc để tìm bản ghi đặt lại lưu lượng truy cập cụ thể",
        "reset_types": {
          "monthly": "Đặt lại hàng tháng",
          "first_day_month": "Đặt lại ngày đầu tiên của tháng",
          "yearly": "Đặt lại hàng năm",
          "first_day_year": "Đặt lại ngày đầu năm",
          "manual": "Đặt lại thủ công"
        },
        "trigger_sources": {
          "auto": "Tự động kích hoạt",
          "manual": "Kích hoạt thủ công",
          "cron": "Công việc định kỳ"
        }
      },
      "actions": {
        "export": "Xuất nhật ký",
        "exporting": "Đang xuất...",
        "export_success": "Xuất thành công",
        "export_failed": "Xuất không thành công"
      },
      "trigger_descriptions": {
        "manual": "Quản trị viên đặt lại lưu lượng truy cập theo cách thủ công",
        "cron": "Tự động thực hiện theo nhiệm vụ theo lịch trình của hệ thống",
        "auto": "Tự động được kích hoạt bởi hệ thống dựa trên các điều kiện",
        "other": "Kích hoạt bằng các phương pháp khác"
      }
    },
    "send_mail": {
      "title": "Gửi email",
      "description": "Gửi email cho người dùng đã chọn hoặc đã lọc",
      "subject": "chủ đề",
      "content": "Nội dung",
      "sending": "Đang gửi...",
      "send": "Gửi"
    },
    "dialog": {
      "title": "Chi tiết người dùng",
      "basicInfo": "Thông tin cơ bản",
      "subscriptionInfo": "Thông tin đăng ký",
      "trafficInfo": "Thông tin lưu lượng",
      "financialInfo": "Thông tin tài chính",
      "activityInfo": "Thông tin hoạt động",
      "inviteInfo": "Thông tin lời mời",
      "timeInfo": "Thông tin thời gian",
      "subscriptionUrl": "URL đăng ký",
      "fields": {
        "userId": "ID người dùng",
        "email": "Email",
        "phone": "Số điện thoại",
        "uuid": "UUID",
        "token": "Mã thông báo",
        "remarks": "Bình luận",
        "subscriptionPlan": "Gói đăng ký",
        "permissionGroup": "Nhóm quyền",
        "expiredAt": "Hết hạn vào lúc",
        "deviceLimit": "Giới hạn thiết bị",
        "speedLimit": "Giới hạn tốc độ",
        "transferEnable": "Tổng lưu lượng truy cập",
        "uploadUsed": "Tải lên đã sử dụng",
        "downloadUsed": "Tải xuống đã qua sử dụng",
        "totalUsed": "Tổng số đã sử dụng",
        "lastResetAt": "Đặt lại lần cuối",
        "nextResetAt": "Tiếp theo Đặt lại",
        "resetCount": "Đặt lại số lượng",
        "balance": "Số dư",
        "commissionBalance": "Số dư hoa hồng",
        "commissionType": "Loại hoa hồng",
        "commissionRate": "Tỷ lệ hoa hồng",
        "lastLoginAt": "Đăng nhập lần cuối",
        "lastLoginIp": "IP đăng nhập lần cuối",
        "lastOnlineAt": "Trực tuyến lần cuối",
        "onlineCount": "Thiết bị trực tuyến",
        "inviteUser": "Người mời",
        "inviteUserId": "ID người mời",
        "createdAt": "Thời gian tạo",
        "updatedAt": "Thời gian cập nhật",
        "subscribeUrl": "URL đăng ký",
        "telegramId": "ID điện tín"
      }
    },
    "status": {
      "normal": "Bình thường",
      "banned": "Bị cấm",
      "admin": "Quản trị",
      "staff": "nhân viên"
    }
  },
  "nav": {
    "dashboard": "Bảng điều khiển",
    "systemManagement": "Quản lý hệ thống",
    "systemConfig": "Cấu hình hệ thống",
    "themeConfig": "Cấu hình giao diện",
    "noticeManagement": "Quản lý thông báo",
    "pluginManagement": "Quản lý plugin",
    "paymentConfig": "Cấu hình thanh toán",
    "knowledgeManagement": "Quản lý kho kiến thức",
    "nodeManagement": "Quản lý node",
    "machineManagement": "Quản lý máy chủ",
    "permissionGroupManagement": "Nhóm quyền",
    "routeManagement": "Quản lý định tuyến",
    "subscriptionManagement": "Đăng ký",
    "planManagement": "Quản lý gói",
    "orderManagement": "Quản lý đơn hàng",
    "couponManagement": "Quản lý mã giảm giá",
    "giftCardManagement": "Quản lý thẻ quà tặng",
    "userManagement": "Quản lý người dùng",
    "trafficResetLogs": "Nhật ký đặt lại lưu lượng truy cập",
    "ticketManagement": "Quản lý ticket",
    "pluginApps": "Ứng dụng plugin",
    "pluginMenuDemo": "Menu plugin (Bản demo)"
  },
  "subscribe": {
    "plan": {
      "title": "Gói đăng ký",
      "add": "Thêm gói",
      "search": "Gói tìm kiếm...",
      "sort": {
        "edit": "Chỉnh sửa sắp xếp",
        "save": "Lưu Sắp xếp"
      },
      "columns": {
        "id": "ID",
        "show": "Hiển thị",
        "sell": "Bán",
        "renew": "Gia hạn",
        "renew_tooltip": "Liệu người dùng hiện tại có thể gia hạn khi đăng ký ngừng bán hay không",
        "name": "Tên",
        "stats": "Thống kê",
        "group": "Nhóm quyền",
        "price": "Giá",
        "actions": "Thao tác",
        "edit": "Chỉnh sửa",
        "delete": "Xóa",
        "delete_confirm": {
          "title": "Xác nhận Xóa",
          "description": "Hành động này sẽ xóa vĩnh viễn đăng ký này và không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục không?",
          "success": "Đã xóa thành công"
        },
        "price_period": {
          "monthly": "Hàng tháng",
          "quarterly": "Hàng quý",
          "half_yearly": "Nửa năm một lần",
          "yearly": "Hàng năm",
          "two_yearly": "hai năm",
          "three_yearly": "ba năm",
          "onetime": "Một lần",
          "reset_traffic": "Đặt lại lưu lượng truy cập",
          "no_price": "Không có giá",
          "unit": {
            "month": "/tháng",
            "quarter": "/quý",
            "half_year": "/nửa năm",
            "year": "/năm",
            "two_year": "/2 năm",
            "three_year": "/3 năm",
            "times": "/lần"
          }
        }
      },
      "form": {
        "add_title": "Thêm gói",
        "edit_title": "Chỉnh sửa gói",
        "name": {
          "label": "Tên gói",
          "placeholder": "Nhập tên gói"
        },
        "group": {
          "label": "Nhóm máy chủ",
          "add": "Thêm nhóm",
          "placeholder": "Chọn nhóm máy chủ"
        },
        "transfer": {
          "label": "Lưu lượng",
          "placeholder": "Nhập giới hạn lưu lượng",
          "unit": "GB"
        },
        "speed": {
          "label": "Giới hạn tốc độ",
          "placeholder": "Nhập giới hạn tốc độ",
          "unit": "Mbps"
        },
        "price": {
          "title": "Cài đặt giá",
          "base_price": "Giá cơ sở",
          "clear": {
            "button": "Xóa",
            "tooltip": "Xóa tất cả giá"
          },
          "period": {
            "monthly": "Hàng tháng",
            "months": "{{count}} Tháng"
          },
          "onetime_desc": "Gói lưu lượng một lần, không giới hạn thời gian",
          "reset_desc": "Đặt lại gói lưu lượng, có thể sử dụng nhiều lần"
        },
        "device": {
          "label": "Giới hạn thiết bị",
          "placeholder": "Nhập giới hạn thiết bị",
          "unit": "Thiết bị"
        },
        "capacity": {
          "label": "Giới hạn công suất",
          "placeholder": "Nhập giới hạn dung lượng",
          "unit": "Người dùng"
        },
        "tags": {
          "label": "Thẻ",
          "placeholder": "Nhập tag và nhấn Enter để xác nhận"
        },
        "reset_method": {
          "label": "Phương pháp thiết lập lại lưu lượng truy cập",
          "placeholder": "Chọn phương thức đặt lại",
          "description": "Phương pháp thiết lập lại lưu lượng truy cập sẽ xác định cách thiết lập lại lưu lượng truy cập",
          "options": {
            "follow_system": "Theo dõi cài đặt hệ thống",
            "monthly_first": "Ngày đầu tiên hàng tháng",
            "monthly_reset": "Ngày mua hàng tháng",
            "no_reset": "Không cần đặt lại",
            "yearly_first": "Ngày đầu tiên hàng năm",
            "yearly_reset": "Ngày mua hàng năm"
          }
        },
        "content": {
          "label": "Mô tả gói",
          "placeholder": "Nhập mô tả gói",
          "description": "Hỗ trợ định dạng Markdown",
          "preview": "Xem trước",
          "preview_button": {
            "show": "Hiển thị bản xem trước",
            "hide": "Ẩn bản xem trước"
          },
          "template": {
            "button": "Sử dụng mẫu",
            "tooltip": "Sử dụng mẫu mặc định",
            "content": "## Chi tiết gói\n\n- Dữ liệu: {{transfer}} GB\n- Giới hạn tốc độ: {{speed}} Mb/giây\n- Thiết bị đồng thời: {{devices}}\n\n## Thông tin dịch vụ\n\n1. Dữ liệu {{reset_method}}\n2. Hỗ trợ đa nền tảng\n3. Hỗ trợ kỹ thuật 24/7"
          }
        },
        "force_update": {
          "label": "Buộc cập nhật gói người dùng"
        },
        "submit": {
          "cancel": "Hủy",
          "submit": "Gửi",
          "submitting": "Đang gửi...",
          "success": {
            "add": "Đã thêm gói thành công",
            "update": "Đã cập nhật gói thành công"
          },
          "error": {
            "validation": "Xác thực biểu mẫu không thành công. Vui lòng kiểm tra lỗi và thử lại."
          }
        }
      },
      "page": {
        "description": "Tại đây, bạn có thể định cấu hình các gói đăng ký, bao gồm các thao tác thêm, xóa và chỉnh sửa."
      }
    }
  },
  "settings": {
    "title": "Cài đặt hệ thống",
    "description": "Quản lý cấu hình hệ thống cốt lõi, bao gồm trang web, bảo mật, đăng ký, mời hoa hồng, node, email và thông báo",
    "server": {
      "title": "Cấu hình máy chủ",
      "description": "Định cấu hình cài đặt liên lạc và đồng bộ hóa node, bao gồm các khóa liên lạc, khoảng thời gian kiểm tra vòng, cân bằng tải và các tùy chọn nâng cao khác.",
      "server_token": {
        "title": "Mã thông báo truyền thông",
        "placeholder": "Nhập mã thông báo liên lạc",
        "description": "Được sử dụng để xác thực giữa các máy chủ",
        "generate_tooltip": "Nhấp để tạo mã thông báo ngẫu nhiên"
      },
      "server_pull_interval": {
        "title": "Khoảng thời gian thăm dò hành động kéo node",
        "description": "Tần suất mà các node lấy dữ liệu từ bảng điều khiển.",
        "placeholder": "Nhập khoảng thời gian kéo"
      },
      "server_push_interval": {
        "title": "Khoảng thời gian thăm dò hành động đẩy node",
        "description": "Tần suất mà các node đẩy dữ liệu vào bảng điều khiển.",
        "placeholder": "Nhập khoảng thời gian đẩy"
      },
      "device_limit_mode": {
        "title": "Chế độ giới hạn thiết bị",
        "description": "Ở chế độ thoải mái, việc sử dụng nhiều node từ cùng một địa chỉ IP được tính là một thiết bị.",
        "strict": "Chế độ nghiêm ngặt",
        "relaxed": "Chế độ thư giãn",
        "placeholder": "Chọn chế độ giới hạn thiết bị"
      },
      "server_ws_enable": {
        "title": "Kích hoạt giao tiếp WebSocket",
        "description": "Khi được bật, các node sẽ giao tiếp với bảng điều khiển thông qua WebSocket để có độ trễ thấp hơn và đẩy kịp thời hơn.",
        "supported_clients": "Các máy khách node hiện hỗ trợ giao tiếp WebSocket: Xboard Node"
      },
      "server_ws_url": {
        "title": "URL WebSocket",
        "description": "Các node địa chỉ WebSocket sử dụng để kết nối với bảng điều khiển. Để trống để sử dụng URL trang web.",
        "placeholder": "Để trống để sử dụng URL trang web"
      },
      "saving": "Đang lưu...",
      "manage": {
        "title": "Quản lý node",
        "description": "Quản lý tất cả các node, bao gồm thêm, xóa và chỉnh sửa."
      }
    },
    "invite": {
      "title": "Cài đặt Lời mời & Hoa hồng",
      "description": "Định cấu hình đăng ký lời mời và cài đặt liên quan đến hoa hồng.",
      "invite_force": {
        "title": "Bật lời mời bắt buộc",
        "description": "Khi được bật, chỉ người dùng được mời mới có thể đăng ký."
      },
      "invite_commission": {
        "title": "Tỷ lệ hoa hồng mời",
        "description": "Tỷ lệ phân phối hoa hồng toàn cầu mặc định, bạn có thể định cấu hình các tỷ lệ riêng lẻ trong quản lý người dùng.",
        "placeholder": "Nhập phần trăm hoa hồng"
      },
      "invite_gen_limit": {
        "title": "Giới hạn tạo mã lời mời",
        "description": "Số lượng mã mời tối đa mà người dùng có thể tạo",
        "placeholder": "Nhập giới hạn thế hệ"
      },
      "invite_never_expire": {
        "title": "Mã mời không bao giờ hết hạn",
        "description": "Khi được bật, mã mời sẽ không hết hạn sau khi sử dụng, nếu không chúng sẽ hết hạn sau khi được sử dụng."
      },
      "commission_first_time": {
        "title": "Chỉ hoa hồng lần đầu",
        "description": "Khi được bật, hoa hồng sẽ chỉ được tạo trong lần thanh toán đầu tiên của người được mời, có thể được định cấu hình riêng trong quản lý người dùng."
      },
      "commission_auto_check": {
        "title": "Xác nhận hoa hồng tự động",
        "description": "Khi được bật, hoa hồng sẽ tự động được xác nhận 3 ngày sau khi hoàn thành đơn hàng."
      },
      "commission_withdraw_limit": {
        "title": "Ngưỡng rút tiền (Yuan)",
        "description": "Yêu cầu rút tiền dưới ngưỡng này sẽ không được gửi.",
        "placeholder": "Nhập ngưỡng rút tiền"
      },
      "commission_withdraw_method": {
        "title": "Phương thức rút tiền",
        "description": "Hỗ trợ các phương thức rút tiền, phân tách nhiều phương thức bằng dấu phẩy.",
        "placeholder": "Nhập các phương thức rút tiền, phân cách bằng dấu phẩy"
      },
      "withdraw_close": {
        "title": "Vô hiệu hóa việc rút tiền",
        "description": "Khi được bật, người dùng sẽ bị cấm yêu cầu rút tiền và hoa hồng mời sẽ chuyển trực tiếp vào số dư của người dùng."
      },
      "commission_distribution": {
        "title": "Phân phối ba cấp",
        "description": "Khi được kích hoạt, hoa hồng sẽ được chia theo ba tỷ lệ đã đặt, tổng số không được vượt quá 100%.",
        "l1": "Tỷ lệ người mời cấp 1",
        "l2": "Tỷ lệ người mời cấp 2",
        "l3": "Tỷ lệ người mời cấp 3",
        "placeholder": "Nhập tỷ lệ, ví dụ: 50"
      },
      "saving": "Đang lưu..."
    },
    "site": {
      "title": "Cài đặt trang web",
      "description": "Định cấu hình thông tin cơ bản của trang web, bao gồm tên trang web, mô tả, đơn vị tiền tệ và các cài đặt cốt lõi khác.",
      "form": {
        "siteName": {
          "label": "Tên trang web",
          "placeholder": "Vui lòng nhập tên trang web",
          "description": "Được sử dụng khi tên trang web cần được hiển thị."
        },
        "siteDescription": {
          "label": "Mô tả trang web",
          "placeholder": "Vui lòng nhập mô tả trang web",
          "description": "Được sử dụng khi cần hiển thị mô tả trang web."
        },
        "siteUrl": {
          "label": "URL trang web",
          "placeholder": "Vui lòng nhập URL trang web, không có dấu /",
          "description": "URL trang web hiện tại, sẽ được sử dụng trong email và những nơi khác cần có URL."
        },
        "forceHttps": {
          "label": "Buộc HTTPS",
          "description": "Cần kích hoạt khi trang web không sử dụng HTTPS nhưng CDN hoặc proxy ngược đã buộc HTTPS."
        },
        "logo": {
          "label": "biểu tượng",
          "placeholder": "Vui lòng nhập URL LOGO, không có dấu /",
          "description": "Được sử dụng khi cần hiển thị LOGO."
        },
        "subscribeUrl": {
          "label": "URL đăng ký",
          "placeholder": "Được sử dụng để đăng ký, nhiều URL được phân tách bằng ','. Để trống để sử dụng URL trang web.",
          "description": "Được sử dụng để đăng ký, để trống để sử dụng URL trang web."
        },
        "tosUrl": {
          "label": "URL của Điều khoản dịch vụ (TOS)",
          "placeholder": "Vui lòng nhập URL TOS, không có dấu /",
          "description": "Được sử dụng để liên kết đến Điều khoản dịch vụ (TOS)"
        },
        "stopRegister": {
          "label": "Dừng đăng ký người dùng mới",
          "description": "Khi được kích hoạt, sẽ không ai có thể đăng ký."
        },
        "ticketMustWaitReply": {
          "label": "Hạn chế chờ trả lời",
          "description": "Khi được bật, người dùng không thể tiếp tục gửi tin nhắn trong cùng một ticket cho đến khi quản trị viên trả lời."
        },
        "tryOut": {
          "label": "Đăng ký dùng thử",
          "placeholder": "Đã tắt",
          "description": "Chọn đăng ký để dùng thử, nếu không có tùy chọn, vui lòng thêm vào quản lý đăng ký trước.",
          "duration": {
            "label": "Thời gian dùng thử",
            "placeholder": "0",
            "description": "Thời gian dùng thử tính bằng giờ."
          }
        },
        "currency": {
          "label": "Đơn vị tiền tệ",
          "placeholder": "CNY",
          "description": "Chỉ để hiển thị, việc thay đổi điều này sẽ ảnh hưởng đến tất cả các đơn vị tiền tệ trong hệ thống."
        },
        "currencySymbol": {
          "label": "Ký hiệu tiền tệ",
          "placeholder": "¥",
          "description": "Chỉ để hiển thị, việc thay đổi điều này sẽ ảnh hưởng đến tất cả các ký hiệu tiền tệ trong hệ thống."
        }
      }
    },
    "safe": {
      "title": "Cài đặt bảo mật",
      "description": "Định cấu hình các tùy chọn bảo mật hệ thống, bao gồm xác minh đăng nhập, chính sách mật khẩu và cài đặt truy cập API.",
      "form": {
        "emailVerify": {
          "label": "Xác minh email",
          "description": "Khi được bật, người dùng sẽ được yêu cầu xác minh email của họ."
        },
        "gmailLimit": {
          "label": "Vô hiệu hóa bí danh Gmail",
          "description": "Khi được bật, bí danh Gmail sẽ không được phép đăng ký."
        },
        "safeMode": {
          "label": "Chế độ an toàn",
          "description": "Khi được bật, việc truy cập trang web thông qua các tên miền không phải URL của trang web sẽ bị chặn với 403."
        },
        "securePath": {
          "label": "Đường dẫn quản trị",
          "placeholder": "quản trị viên",
          "description": "Đường dẫn quản lý quản trị viên, việc thay đổi điều này sẽ sửa đổi đường dẫn quản trị ban đầu"
        },
        "emailWhitelist": {
          "label": "Danh sách trắng hậu tố email",
          "description": "Khi được bật, chỉ những hậu tố email trong danh sách mới được phép đăng ký.",
          "suffixes": {
            "label": "Hậu tố email",
            "placeholder": "Nhập hậu tố email, mỗi dòng một hậu tố",
            "description": "Nhập các hậu tố email được phép, một hậu tố trên mỗi dòng"
          }
        },
        "captcha": {
          "enable": {
            "label": "Bật hình ảnh xác thực",
            "description": "Khi được bật, người dùng sẽ cần phải vượt qua xác minh hình ảnh xác thực khi đăng ký."
          },
          "type": {
            "label": "Loại hình ảnh xác thực",
            "description": "Chọn loại dịch vụ captcha để sử dụng",
            "options": {
              "recaptcha": "Google reCAPTCHA v2",
              "recaptcha-v3": "Google reCAPTCHA v3",
              "turnstile": "Cửa quay Cloudflare"
            }
          },
          "recaptcha": {
            "key": {
              "label": "Khóa reCAPTCHA",
              "placeholder": "Nhập khóa reCAPTCHA",
              "description": "Nhập khóa reCAPTCHA của bạn"
            },
            "siteKey": {
              "label": "Khóa trang web reCAPTCHA",
              "placeholder": "Nhập khóa trang web reCAPTCHA",
              "description": "Nhập khóa trang web reCAPTCHA của bạn"
            }
          },
          "recaptcha_v3": {
            "secretKey": {
              "label": "Khóa reCAPTCHA v3",
              "placeholder": "Nhập khóa reCAPTCHA v3",
              "description": "Nhập khóa máy chủ reCAPTCHA v3 của bạn"
            },
            "siteKey": {
              "label": "Khóa trang web reCAPTCHA v3",
              "placeholder": "Nhập khóa trang web reCAPTCHA v3",
              "description": "Nhập khóa trang web reCAPTCHA v3 của bạn"
            },
            "scoreThreshold": {
              "label": "Ngưỡng điểm",
              "placeholder": "0.5",
              "description": "Đặt ngưỡng điểm xác minh (0-1), điểm càng cao cho thấy hành vi của con người càng có khả năng xảy ra"
            }
          },
          "turnstile": {
            "secretKey": {
              "label": "Chìa khóa cửa quay",
              "placeholder": "Nhập phím quay vòng",
              "description": "Nhập khóa quay vòng Cloudflare của bạn"
            },
            "siteKey": {
              "label": "Khóa trang web quay vòng",
              "placeholder": "Nhập khóa trang web Turnstile",
              "description": "Nhập khóa trang web Cloudflare Turnstile của bạn"
            }
          }
        },
        "registerLimit": {
          "enable": {
            "label": "Giới hạn đăng ký IP",
            "description": "Khi được bật, số lượng đăng ký từ cùng một IP sẽ bị giới hạn."
          },
          "count": {
            "label": "Số lượng đăng ký",
            "placeholder": "Nhập số lượng đăng ký tối đa",
            "description": "Số lượng đăng ký tối đa được phép từ cùng một IP"
          },
          "expire": {
            "label": "Giới hạn thời lượng",
            "placeholder": "Nhập thời lượng giới hạn tính bằng phút",
            "description": "Thời hạn của giới hạn đăng ký tính bằng phút"
          }
        },
        "passwordLimit": {
          "enable": {
            "label": "Giới hạn lần thử mật khẩu",
            "description": "Khi được bật, số lần thử mật khẩu sẽ bị giới hạn."
          },
          "count": {
            "label": "Số lần thử",
            "placeholder": "Nhập số lần thử tối đa",
            "description": "Số lần thử mật khẩu tối đa được phép"
          },
          "expire": {
            "label": "Thời lượng khóa",
            "placeholder": "Nhập thời lượng khóa tính bằng phút",
            "description": "Thời gian khóa tài khoản tính bằng phút"
          }
        }
      }
    },
    "subscribe": {
      "title": "Cài đặt đăng ký",
      "description": "Quản lý các cấu hình liên quan đến đăng ký, bao gồm định dạng liên kết đăng ký, tần suất cập nhật, thống kê lưu lượng truy cập và các cài đặt khác.",
      "plan_change_enable": {
        "title": "Cho phép thay đổi đăng ký",
        "description": "Khi được bật, người dùng sẽ có thể thay đổi gói đăng ký của mình."
      },
      "reset_traffic_method": {
        "title": "Phương pháp thiết lập lại lưu lượng truy cập hàng tháng",
        "description": "Phương pháp đặt lại lưu lượng truy cập toàn cầu, mặc định là ngày 1 hàng tháng. Có thể được đặt riêng cho các đăng ký trong quản lý đăng ký.",
        "options": {
          "monthly_first": "Ngày 1 hàng tháng",
          "monthly_reset": "Đặt lại hàng tháng",
          "no_reset": "Không cần đặt lại",
          "yearly_first": "ngày 1 tháng 1",
          "yearly_reset": "Đặt lại hàng năm"
        }
      },
      "surplus_enable": {
        "title": "Kích hoạt gói khấu trừ",
        "description": "Khi kích hoạt, hệ thống sẽ trừ vào thuê bao ban đầu khi người dùng thay đổi thuê bao, tham khảo tài liệu để biết chi tiết."
      },
      "new_order_event": {
        "title": "Sự kiện kích hoạt khi đăng ký mới",
        "description": "Nhiệm vụ này sẽ được kích hoạt khi hoàn tất đăng ký mới.",
        "options": {
          "no_action": "Không hành động",
          "reset_traffic": "Đặt lại lưu lượng người dùng"
        }
      },
      "renew_order_event": {
        "title": "Sự kiện kích hoạt khi gia hạn đăng ký",
        "description": "Nhiệm vụ này sẽ được kích hoạt khi quá trình gia hạn đăng ký hoàn tất.",
        "options": {
          "no_action": "Không hành động",
          "reset_traffic": "Đặt lại lưu lượng người dùng"
        }
      },
      "change_order_event": {
        "title": "Sự kiện kích hoạt khi thay đổi đăng ký",
        "description": "Tác vụ này sẽ được kích hoạt khi hoàn tất thay đổi đăng ký.",
        "options": {
          "no_action": "Không hành động",
          "reset_traffic": "Đặt lại lưu lượng người dùng"
        }
      },
      "subscribe_path": {
        "title": "Đường dẫn đăng ký",
        "description": "Đường dẫn đăng ký, sửa đổi sẽ thay đổi đường dẫn đăng ký ban đầu",
        "current_format": "Định dạng đường dẫn đăng ký hiện tại: {path}/xxxxxxxxxx",
        "restart_tip": "Bạn có thể cần phải khởi động lại dịch vụ để đường dẫn đăng ký mới có hiệu lực."
      },
      "show_info_to_server": {
        "title": "Hiển thị thông tin đăng ký trong node",
        "description": "Khi được bật, thông tin đăng ký sẽ được xuất ra khi người dùng đăng ký các node."
      },
      "show_protocol_to_server": {
        "title": "Hiển thị giao thức trong tên node",
        "description": "Khi được bật, các dòng đăng ký sẽ bao gồm tên giao thức (ví dụ: [Hy2]Hong Kong)"
      },
      "saving": "Đang lưu...",
      "plan": {
        "title": "Gói đăng ký",
        "add": "Thêm gói",
        "search": "Gói tìm kiếm...",
        "sort": {
          "edit": "Chỉnh sửa sắp xếp",
          "save": "Lưu Sắp xếp"
        },
        "columns": {
          "id": "ID",
          "show": "Hiển thị",
          "sell": "Bán",
          "renew": "Gia hạn",
          "renew_tooltip": "Liệu người dùng hiện tại có thể gia hạn khi đăng ký ngừng bán hay không",
          "name": "Tên",
          "stats": "Thống kê",
          "group": "Nhóm quyền",
          "price": "Giá",
          "actions": "Thao tác",
          "edit": "Chỉnh sửa",
          "delete": "Xóa",
          "delete_confirm": {
            "title": "Xác nhận Xóa",
            "description": "Hành động này sẽ xóa vĩnh viễn đăng ký này và không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục không?",
            "success": "Đã xóa thành công"
          },
          "price_period": {
            "monthly": "Hàng tháng",
            "quarterly": "Hàng quý",
            "half_yearly": "Nửa năm một lần",
            "yearly": "Hàng năm",
            "two_yearly": "hai năm",
            "three_yearly": "ba năm",
            "onetime": "Một lần",
            "reset_traffic": "Đặt lại lưu lượng truy cập",
            "unit": {
              "month": "/tháng",
              "quarter": "/quý",
              "half_year": "/nửa năm",
              "year": "/năm",
              "two_year": "/2 năm",
              "three_year": "/3 năm",
              "times": "/lần"
            }
          }
        },
        "form": {
          "add_title": "Thêm gói",
          "edit_title": "Chỉnh sửa gói",
          "name": {
            "label": "Tên gói",
            "placeholder": "Nhập tên gói"
          },
          "group": {
            "label": "Nhóm quyền",
            "placeholder": "Chọn nhóm quyền",
            "add": "Thêm nhóm"
          },
          "transfer": {
            "label": "Lưu lượng",
            "placeholder": "Nhập quy mô lưu lượng truy cập",
            "unit": "GB"
          },
          "speed": {
            "label": "Giới hạn tốc độ",
            "placeholder": "Nhập giới hạn tốc độ",
            "unit": "Mbps"
          },
          "price": {
            "title": "Cài đặt giá",
            "base_price": "Giá cơ bản hàng tháng",
            "clear": {
              "button": "Xóa giá",
              "tooltip": "Xóa tất cả cài đặt giá trong kỳ"
            }
          },
          "device": {
            "label": "Giới hạn thiết bị",
            "placeholder": "Để trống không giới hạn",
            "unit": "thiết bị"
          },
          "capacity": {
            "label": "Giới hạn công suất",
            "placeholder": "Để trống không giới hạn",
            "unit": "người dùng"
          },
          "reset_method": {
            "label": "Phương pháp thiết lập lại lưu lượng truy cập",
            "placeholder": "Chọn phương pháp đặt lại lưu lượng truy cập",
            "description": "Đặt cách đặt lại lưu lượng truy cập đăng ký, các phương pháp khác nhau ảnh hưởng đến cách tính lưu lượng truy cập của người dùng",
            "options": {
              "follow_system": "Theo dõi cài đặt hệ thống",
              "monthly_first": "Ngày 1 hàng tháng",
              "monthly_reset": "Đặt lại hàng tháng",
              "no_reset": "Không cần đặt lại",
              "yearly_first": "ngày 1 tháng 1",
              "yearly_reset": "Đặt lại hàng năm"
            }
          },
          "content": {
            "label": "Mô tả gói",
            "placeholder": "Viết mô tả gói ở đây...",
            "description": "Hỗ trợ định dạng Markdown, bạn có thể sử dụng tiêu đề, danh sách, in đậm, in nghiêng và các kiểu khác để làm đẹp nội dung",
            "preview": "Xem trước",
            "preview_button": {
              "show": "Hiển thị bản xem trước",
              "hide": "Ẩn bản xem trước"
            },
            "template": {
              "button": "Sử dụng mẫu",
              "tooltip": "Nhấp để sử dụng mẫu mô tả gói đặt trước",
              "content": "## Tính năng gói\n• Truy cập mạng toàn cầu tốc độ cao và ổn định\n• Hỗ trợ trực tuyến nhiều thiết bị cùng lúc\n• Đặt lại lưu lượng truy cập không giới hạn\n\n## Hướng dẫn sử dụng\n1. Thiết bị được hỗ trợ: iOS, Android, Windows, macOS\n2. Hỗ trợ kỹ thuật 24/7\n3. Tự động thiết lập lại lưu lượng truy cập định kỳ\n\n## Ghi chú\n- Không được phép lạm dụng\n- Tuân thủ luật pháp và quy định của địa phương\n- Hỗ trợ thay đổi gói bất cứ lúc nào"
            }
          },
          "force_update": {
            "label": "Buộc cập nhật cho người dùng"
          },
          "submit": {
            "submitting": "Đang gửi...",
            "submit": "Gửi",
            "cancel": "Hủy",
            "success": {
              "add": "Đã thêm gói thành công",
              "update": "Đã cập nhật gói thành công"
            }
          }
        },
        "page": {
          "description": "Tại đây, bạn có thể định cấu hình các gói đăng ký, bao gồm các thao tác thêm, xóa và chỉnh sửa."
        }
      }
    },
    "email": {
      "title": "Cài đặt email",
      "description": "Định cấu hình dịch vụ email hệ thống để gửi mã xác minh, đặt lại mật khẩu và thông báo, hỗ trợ các nhà cung cấp SMTP khác nhau.",
      "tab_settings": "Cài đặt",
      "tab_templates": "Mẫu",
      "email_host": {
        "title": "Máy chủ SMTP",
        "description": "Địa chỉ máy chủ SMTP, ví dụ: smtp.gmail.com"
      },
      "email_port": {
        "title": "Cổng SMTP",
        "description": "Cổng máy chủ SMTP, cổng chung: 25, 465, 587"
      },
      "email_username": {
        "title": "Tên người dùng SMTP",
        "description": "Tên người dùng xác thực SMTP"
      },
      "email_password": {
        "title": "Mật khẩu SMTP",
        "description": "Mật khẩu xác thực SMTP hoặc mật khẩu dành riêng cho ứng dụng"
      },
      "email_encryption": {
        "title": "Phương pháp mã hóa",
        "description": "Phương pháp mã hóa email",
        "none": "không có",
        "ssl": "SSL/TLS",
        "tls": "BẮT ĐẦU"
      },
      "email_from": {
        "title": "Từ địa chỉ",
        "description": "Địa chỉ email của người gửi"
      },
      "email_from_name": {
        "title": "Từ tên",
        "description": "Tên hiển thị của người gửi"
      },
      "email_template": {
        "title": "Mẫu email",
        "description": "Bạn có thể kiểm tra tài liệu để biết cách tùy chỉnh mẫu email",
        "placeholder": "Chọn mẫu email"
      },
      "remind_mail": {
        "title": "Lời nhắc qua email",
        "description": "Khi được bật, người dùng sẽ nhận được thông báo qua email khi đăng ký của họ sắp hết hạn hoặc khi lưu lượng truy cập sắp hết."
      },
      "test": {
        "title": "Gửi email kiểm tra",
        "sending": "Đang gửi...",
        "description": "Gửi email kiểm tra để xác minh cấu hình",
        "success": "Email kiểm tra đã được gửi thành công",
        "error": "Không gửi được email kiểm tra"
      }
    },
    "telegram": {
      "title": "Cài đặt điện tín",
      "description": "Định cấu hình chức năng bot Telegram để thông báo cho người dùng, ràng buộc tài khoản và tương tác lệnh.",
      "bot_token": {
        "title": "Mã thông báo bot",
        "description": "Vui lòng nhập token do Botfather cung cấp.",
        "placeholder": "0000000000:xxxxxxxxx_xxxxxxxxxxxxxxx"
      },
      "webhook_url": {
        "title": "URL cơ sở Webhook",
        "description": "Chỉ cung cấp URL cơ sở ở đây. Hệ thống sẽ tự động thêm đường dẫn gọi lại webhook Telegram đầy đủ. Để trống để sử dụng URL trang web.",
        "docs": "Xem tài liệu Webhook của Telegram",
        "placeholder": "https://example.com"
      },
      "webhook": {
        "title": "Đặt Webhook",
        "description": "Thiết lập webhook cho bot. Nếu không cài đặt, bạn sẽ không nhận được thông báo Telegram.",
        "button": "Cài đặt bằng một cú nhấp chuột",
        "setting": "Đang đặt Webhook...",
        "success": "Đã đặt webhook thành công",
        "target_default": "URL trang web sẽ được sử dụng làm URL cơ sở Webhook.",
        "target_custom": "URL cơ sở Webhook tùy chỉnh hiện đang được sử dụng là: {{url}}",
        "debug": {
          "title": "Thông tin gỡ lỗi Webhook",
          "success": "Thành công",
          "url": "URL webhook",
          "baseUrl": "URL cơ sở"
        }
      },
      "bot_enable": {
        "title": "Kích hoạt Hướng dẫn ràng buộc Telegram",
        "description": "Khi được bật, hướng dẫn ràng buộc Telegram sẽ được hiển thị ở phía người dùng để giúp người dùng liên kết tài khoản Telegram của họ để nhận thông báo."
      },
      "discuss_link": {
        "title": "Liên kết nhóm",
        "description": "Sau khi điền vào, nó sẽ được hiển thị ở phía người dùng hoặc được sử dụng khi cần thiết.",
        "placeholder": "https://t.me/xxxxxx"
      }
    },
    "app": {
      "title": "Cài đặt ứng dụng",
      "description": "Quản lý cấu hình ứng dụng di động, bao gồm giao diện API, kiểm soát phiên bản và thông báo đẩy.",
      "common": {
        "placeholder": "Vui lòng nhập"
      },
      "windows": {
        "version": {
          "title": "Phiên bản Windows",
          "description": "Số phiên bản hiện tại của máy khách Windows"
        },
        "download": {
          "title": "URL tải xuống Windows",
          "description": "Liên kết tải xuống cho máy khách Windows"
        }
      },
      "macos": {
        "version": {
          "title": "Phiên bản macOS",
          "description": "Số phiên bản hiện tại của máy khách macOS"
        },
        "download": {
          "title": "URL tải xuống macOS",
          "description": "Liên kết tải xuống cho máy khách macOS"
        }
      },
      "android": {
        "version": {
          "title": "Phiên bản Android",
          "description": "Số phiên bản hiện tại của ứng dụng khách Android"
        },
        "download": {
          "title": "URL tải xuống Android",
          "description": "Liên kết tải xuống cho máy khách Android"
        }
      }
    },
    "common": {
      "saving": "Đang lưu...",
      "save_success": "Đã lưu tự động",
      "placeholder": "Vui lòng nhập",
      "autoSaved": "Đã lưu tự động"
    },
    "subscribe_template": {
      "title": "Đăng ký mẫu",
      "description": "Định cấu hình mẫu đăng ký cho các khách hàng khác nhau",
      "singbox": {
        "title": "Mẫu hộp hát",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Sing-box"
      },
      "clash": {
        "title": "Mẫu xung đột",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Clash"
      },
      "clashmeta": {
        "title": "Mẫu Meta Clash",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Clash Meta"
      },
      "stash": {
        "title": "Mẫu lưu trữ",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Stash"
      },
      "surge": {
        "title": "Mẫu đột biến",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Surge"
      },
      "surfboard": {
        "title": "Mẫu ván lướt sóng",
        "description": "Định cấu hình định dạng mẫu đăng ký cho Surfboard"
      }
    },
    "email_template": {
      "title": "Mẫu email",
      "description": "Tùy chỉnh nội dung mẫu email hệ thống",
      "customized": "tùy chỉnh",
      "subject": "chủ đề",
      "subject_placeholder": "Nhập chủ đề email, hỗ trợ {{name}} phần giữ chỗ",
      "content": "Nội dung mẫu (HTML)",
      "preview": "Xem trước trực tiếp",
      "override_hint": "Việc lưu sẽ ghi đè mẫu hệ thống mặc định. Nhấp vào \"Đặt lại về mặc định\" để khôi phục mẫu mặc định của chủ đề bất kỳ lúc nào.",
      "placeholders": "Trình giữ chỗ có sẵn",
      "var_name": "Biến",
      "var_desc": "Mô tả",
      "var_sample": "Giá trị mẫu",
      "required": "Bắt buộc",
      "insert": "Chèn",
      "placeholder_hint": "* đánh dấu phần giữ chỗ bắt buộc. Click để chèn vào cuối nội dung.",
      "click_to_insert": "Bấm để chèn",
      "save": "Lưu",
      "save_success": "Đã lưu mẫu thành công",
      "save_before_test": "Vui lòng lưu các thay đổi trước khi gửi email kiểm tra",
      "send_test": "Gửi bài kiểm tra",
      "test_dialog_title": "Gửi email kiểm tra",
      "test_dialog_description": "Nhập địa chỉ email người nhận. Để trống để gửi đến email quản trị viên của bạn.",
      "test_email_placeholder": "Email người nhận (để trống đối với tài khoản hiện tại)",
      "sending": "Đang gửi...",
      "test_success": "Email kiểm tra đã được gửi thành công",
      "reset": "Đặt lại về mặc định",
      "reset_title": "Đặt lại mẫu",
      "reset_description": "Bạn có chắc chắn muốn đặt lại mẫu này về mặc định không? Các tùy chỉnh của bạn sẽ bị xóa.",
      "reset_confirm": "Xác nhận đặt lại",
      "reset_success": "Đặt lại mẫu về mặc định",
      "unsaved": "Những thay đổi chưa được lưu",
      "discard_title": "Những thay đổi chưa được lưu",
      "discard_description": "Mẫu này có những thay đổi chưa được lưu. Chuyển đổi tab sẽ loại bỏ chúng.",
      "discard_confirm": "Loại bỏ",
      "cancel": "Hủy"
    }
  },
  "notice": {
    "title": "Quản lý thông báo",
    "description": "Tại đây bạn có thể định cấu hình các thông báo, bao gồm thêm, xóa, chỉnh sửa và các thao tác khác.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "Trạng thái hiển thị",
        "title": "Tiêu đề",
        "actions": "Thao tác"
      },
      "toolbar": {
        "search": "Tìm kiếm tiêu đề thông báo...",
        "reset": "Đặt lại",
        "sort": {
          "edit": "Chỉnh sửa đơn hàng",
          "save": "Lưu đơn hàng"
        }
      },
      "actions": {
        "edit": "Chỉnh sửa",
        "delete": {
          "title": "Xóa xác nhận",
          "description": "Bạn có chắc chắn muốn xóa thông báo này? Không thể hoàn tác hành động này.",
          "success": "Đã xóa thành công"
        }
      }
    },
    "form": {
      "add": {
        "title": "Thêm thông báo",
        "button": "Thêm thông báo"
      },
      "edit": {
        "title": "Chỉnh sửa thông báo"
      },
      "fields": {
        "title": {
          "label": "Tiêu đề",
          "placeholder": "Vui lòng nhập tiêu đề thông báo"
        },
        "content": {
          "label": "Nội dung"
        },
        "img_url": {
          "label": "Hình nền",
          "placeholder": "Vui lòng nhập URL hình nền thông báo"
        },
        "show": {
          "label": "Hiển thị"
        },
        "tags": {
          "label": "Thẻ",
          "placeholder": "Nhấn Enter để thêm thẻ"
        }
      },
      "buttons": {
        "cancel": "Hủy",
        "submit": "Gửi",
        "success": "Đã gửi thành công"
      }
    }
  },
  "group": {
    "title": "Nhóm quyền",
    "description": "Quản lý tất cả các nhóm quyền, bao gồm các thao tác thêm, xóa và chỉnh sửa.",
    "columns": {
      "id": "Mã nhóm",
      "name": "Tên nhóm",
      "usersCount": "Số lượng người dùng",
      "serverCount": "Số node",
      "actions": "Thao tác"
    },
    "form": {
      "add": "Thêm nhóm",
      "edit": "Chỉnh sửa nhóm",
      "create": "Tạo nhóm",
      "update": "Cập nhật",
      "name": "Tên nhóm",
      "namePlaceholder": "Vui lòng nhập tên nhóm",
      "nameDescription": "Tên nhóm được sử dụng để xác định các nhóm người dùng khác nhau, nên sử dụng những tên có ý nghĩa.",
      "cancel": "Hủy",
      "editDescription": "Sửa đổi thông tin nhóm, những thay đổi sẽ có hiệu lực ngay lập tức.",
      "createDescription": "Tạo một nhóm quyền mới để gán các quyền khác nhau cho những người dùng khác nhau."
    },
    "toolbar": {
      "searchPlaceholder": "Tìm kiếm nhóm...",
      "reset": "Đặt lại"
    },
    "messages": {
      "deleteConfirm": "Xác nhận Xóa",
      "deleteDescription": "Hành động này sẽ xóa vĩnh viễn nhóm quyền này và không thể khôi phục được. Bạn có chắc chắn muốn tiếp tục không?",
      "deleteButton": "Xóa",
      "createSuccess": "Đã tạo thành công",
      "updateSuccess": "Đã cập nhật thành công",
      "nameValidation": {
        "min": "Tên nhóm phải có ít nhất 2 ký tự",
        "max": "Tên nhóm không được vượt quá 50 ký tự",
        "pattern": "Tên nhóm chỉ được chứa chữ cái, số, ký tự tiếng Trung, dấu gạch dưới và dấu gạch nối"
      }
    }
  },
  "auth": {
    "signIn": {
      "title": "Đăng nhập",
      "description": "Nhập email và mật khẩu của bạn để đăng nhập",
      "email": "Email",
      "emailPlaceholder": "tên@example.com",
      "password": "Mật khẩu",
      "passwordPlaceholder": "Nhập mật khẩu của bạn",
      "forgotPassword": "Quên mật khẩu?",
      "submit": "Đăng nhập",
      "rememberMe": "nhớ tôi",
      "resetPassword": {
        "title": "Đặt lại mật khẩu",
        "description": "Thực hiện lệnh sau trong thư mục trang web để đặt lại mật khẩu của bạn",
        "command": "Đặt lại nghệ nhân php: mật khẩu-email quản trị"
      },
      "validation": {
        "emailRequired": "Vui lòng nhập địa chỉ email của bạn",
        "emailInvalid": "Vui lòng nhập địa chỉ email hợp lệ",
        "passwordRequired": "Vui lòng nhập mật khẩu của bạn",
        "passwordLength": "Mật khẩu phải có ít nhất 7 ký tự"
      }
    }
  },
  "traffic": {
    "trafficRecord": {
      "title": "Hồ sơ sử dụng lưu lượng truy cập",
      "time": "thời gian",
      "upload": "Tải lên",
      "download": "Tải xuống",
      "rate": "tỷ lệ",
      "total": "Tổng",
      "noRecords": "Không tìm thấy bản ghi nào",
      "perPage": "Hiển thị trên mỗi trang",
      "records": "hồ sơ",
      "page": "Trang {{current}} / {{total}}",
      "multiplier": "{{value}}x"
    }
  },
  "payment": {
    "title": "Cấu hình thanh toán",
    "description": "Định cấu hình các phương thức thanh toán bao gồm Alipay, WeChat Pay, v.v.",
    "table": {
      "columns": {
        "id": "ID",
        "enable": "Kích hoạt",
        "name": "Tên hiển thị",
        "payment": "Cổng thanh toán",
        "notify_url": "URL thông báo",
        "notify_url_tooltip": "Cổng thanh toán sẽ gửi thông báo tới địa chỉ này. Hãy đảm bảo nó có thể truy cập được thông qua tường lửa của bạn.",
        "actions": "Thao tác"
      },
      "actions": {
        "edit": "Chỉnh sửa",
        "delete": {
          "title": "Xác nhận Xóa",
          "description": "Bạn có chắc chắn muốn xóa phương thức thanh toán này không? Không thể hoàn tác hành động này.",
          "success": "Đã xóa thành công"
        }
      },
      "toolbar": {
        "search": "Tìm kiếm phương thức thanh toán...",
        "reset": "Đặt lại",
        "sort": {
          "hint": "Kéo phương thức thanh toán để sắp xếp, bấm lưu khi hoàn tất",
          "save": "Lưu đơn hàng",
          "edit": "Chỉnh sửa đơn hàng"
        }
      }
    },
    "form": {
      "add": {
        "button": "Thêm phương thức thanh toán",
        "title": "Thêm phương thức thanh toán"
      },
      "edit": {
        "title": "Chỉnh sửa phương thức thanh toán"
      },
      "fields": {
        "name": {
          "label": "Tên hiển thị",
          "placeholder": "Nhập tên thanh toán",
          "description": "Được sử dụng để hiển thị giao diện người dùng"
        },
        "icon": {
          "label": "URL biểu tượng",
          "placeholder": "https://example.com/icon.svg",
          "description": "URL biểu tượng để hiển thị giao diện người dùng"
        },
        "notify_domain": {
          "label": "Thông báo tên miền",
          "placeholder": "https://example.com",
          "description": "Tên miền cho thông báo cổng"
        },
        "handling_fee_percent": {
          "label": "Phần trăm phí (%)",
          "placeholder": "0-100"
        },
        "handling_fee_fixed": {
          "label": "Phí cố định",
          "placeholder": "0"
        },
        "payment": {
          "label": "Cổng thanh toán",
          "placeholder": "Chọn cổng thanh toán",
          "description": "Chọn cổng thanh toán để sử dụng"
        }
      },
      "validation": {
        "name": {
          "min": "Tên phải có ít nhất 2 ký tự",
          "max": "Tên không thể vượt quá 30 ký tự"
        },
        "notify_domain": {
          "url": "Vui lòng nhập một URL hợp lệ"
        },
        "payment": {
          "required": "Vui lòng chọn cổng thanh toán"
        }
      },
      "buttons": {
        "cancel": "Hủy",
        "submit": "Gửi"
      },
      "sections": {
        "payment_config": "Cấu hình thanh toán"
      },
      "messages": {
        "success": "Đã lưu thành công"
      }
    }
  },
  "server": {
    "title": "Cấu hình node",
    "description": "Định cấu hình cài đặt liên lạc và đồng bộ hóa node, bao gồm khóa liên lạc, khoảng thời gian kiểm tra vòng, cân bằng tải và các tùy chọn nâng cao khác.",
    "server_token": {
      "title": "Khóa giao tiếp",
      "description": "Chìa khóa liên lạc giữa Xboard và các node nhằm ngăn chặn việc truy cập dữ liệu trái phép.",
      "placeholder": "Vui lòng nhập khóa liên lạc"
    },
    "server_pull_interval": {
      "title": "Khoảng thời gian thăm dò hành động kéo node",
      "description": "Tần suất mà các node lấy dữ liệu từ bảng điều khiển.",
      "placeholder": "Vui lòng nhập khoảng thời gian kéo"
    },
    "server_push_interval": {
      "title": "Khoảng thời gian thăm dò hành động đẩy node",
      "description": "Tần suất mà các node đẩy dữ liệu vào bảng điều khiển.",
      "placeholder": "Vui lòng nhập khoảng thời gian đẩy"
    },
    "device_limit_mode": {
      "title": "Chế độ giới hạn thiết bị",
      "description": "Ở chế độ thoải mái, nhiều node từ cùng một địa chỉ IP được tính là một thiết bị.",
      "strict": "Chế độ nghiêm ngặt",
      "relaxed": "Chế độ thư giãn",
      "placeholder": "Vui lòng chọn chế độ giới hạn thiết bị"
    },
    "saving": "Đang lưu...",
    "manage": {
      "title": "Quản lý node",
      "description": "Quản lý tất cả các node, bao gồm thêm, xóa, chỉnh sửa và các hoạt động khác.",
      "filtered_by_server": "Xem các node được lưu trữ bởi {{server}} (SID:{{id}})",
      "filtered_by_server_description": "Các node mới được tạo ở đây có thể trực tiếp sử dụng lại máy chủ hiện tại làm mục tiêu triển khai của chúng.",
      "add_node_to_server": "Thêm node vào máy chủ này",
      "clear_server_filter": "Xóa bộ lọc máy chủ"
    },
    "columns": {
      "sort": "Sắp xếp",
      "nodeId": "ID node",
      "show": "Hiển thị",
      "node": "Node",
      "address": "Địa chỉ",
      "onlineUsers": {
        "title": "Người dùng trực tuyến",
        "tooltip": "Số người dùng trực tuyến được tính dựa trên tần suất báo cáo của máy chủ"
      },
      "rate": {
        "title": "tỷ lệ",
        "tooltip": "Tỷ lệ thanh toán lưu lượng truy cập"
      },
      "traffic": {
        "title": "Sử dụng lưu lượng truy cập",
        "tooltip": "Mức sử dụng lưu lượng node, hiển thị lưu lượng đã sử dụng và giới hạn",
        "total": "Tổng",
        "used": "đã qua sử dụng",
        "percentage": "Cách sử dụng"
      },
      "groups": {
        "title": "Nhóm quyền",
        "tooltip": "Các nhóm có thể đăng ký node này",
        "empty": "--"
      },
      "loadStatus": {
        "title": "Trạng thái tải",
        "tooltip": "Sử dụng tài nguyên máy chủ",
        "noData": "Không có dữ liệu",
        "details": "Chi tiết tải hệ thống",
        "cpu": "Sử dụng CPU",
        "memory": "Sử dụng bộ nhớ",
        "swap": "Sử dụng Hoán đổi",
        "disk": "Sử dụng đĩa",
        "lastUpdate": "Cập nhật lần cuối",
        "metrics": {
          "title": "Số liệu",
          "uptime": "Thời gian hoạt động",
          "conns": "Kết nối",
          "speed": "Tốc độ",
          "api": "Trạng thái API",
          "kernel": "Trạng thái kernel",
          "gc": "Tạm dừng GC",
          "limit": "Người dùng bị giới hạn tỷ lệ",
          "ws": "WebSocket",
          "goroutines": "Số goroutine đồng thời",
          "load": "Tải hệ thống",
          "users": "Người dùng trực tuyến"
        }
      },
      "customId": "ID tùy chỉnh",
      "originalId": "Giấy tờ tùy thân gốc",
      "type": "Loại",
      "actions": "Thao tác",
      "copyAddress": "Sao chép địa chỉ kết nối",
      "internalPort": "Cảng nội bộ",
      "deployment": {
        "title": "Triển khai",
        "tooltip": "Hiển thị xem node chạy độc lập hay được máy chủ lưu trữ và điều chỉnh node đó trực tiếp từ danh sách.",
        "standalone": "Độc lập",
        "standalone_row_hint": "Không bị ràng buộc với một máy chủ",
        "standalone_description": "node này chạy độc lập mà không cần lưu trữ máy chủ.",
        "online": "Máy chủ trực tuyến",
        "offline": "Máy chủ ngoại tuyến",
        "inactive": "Máy chủ không hoạt động",
        "disabled": "node bị vô hiệu hóa",
        "enabled": "Kích hoạt trên máy chủ",
        "enabled_description": "Chỉ các node được kích hoạt mới được khởi động và đồng bộ hóa bởi máy chủ đã chọn.",
        "enabled_standalone_description": "Các node độc lập không cần trạng thái kích hoạt phía máy chủ.",
        "bind_success": "Được tổ chức bởi {{server}}",
        "standalone_success": "Đã chuyển sang triển khai độc lập",
        "update_success": "Đã cập nhật triển khai",
        "update_error": "Không thể cập nhật triển khai"
      },
      "status": {
        "0": "Không chạy",
        "1": "Không sử dụng hoặc bất thường",
        "2": "Chạy bình thường"
      },
      "childNode": "node con",
      "actions_dropdown": {
        "edit": "Chỉnh sửa",
        "copy": "Sao chép",
        "reset_traffic": {
          "title": "Xác nhận đặt lại lưu lượng truy cập",
          "description": "Điều này sẽ đặt lại lưu lượng tải lên và tải xuống về 0 và bỏ cấm node. Bạn có chắc chắn muốn tiếp tục không?",
          "confirm": "Đặt lại lưu lượng truy cập"
        },
        "reset_traffic_success": "Đặt lại lưu lượng truy cập thành công",
        "delete": {
          "title": "Xác nhận Xóa",
          "description": "Hành động này sẽ xóa vĩnh viễn node này và không thể hoàn tác được. Bạn có chắc chắn muốn tiếp tục không?",
          "confirm": "Xóa"
        },
        "copy_success": "Đã sao chép thành công",
        "delete_success": "Đã xóa thành công"
      }
    },
    "toolbar": {
      "search": "Tìm kiếm các node...",
      "type": "Loại",
      "server": "Máy chủ",
      "server_search": "Máy chủ tìm kiếm...",
      "server_empty": "Không tìm thấy máy chủ",
      "reset": "Đặt lại",
      "actions": "Thao tác",
      "sort": {
        "tip": "Kéo các node để sắp xếp, sau đó nhấp vào lưu",
        "edit": "Chỉnh sửa sắp xếp",
        "save": "Lưu Sắp xếp",
        "success": "Đã lưu thứ tự sắp xếp"
      },
      "batch_delete": {
        "menu": "Xóa các node",
        "button": "Xóa {{count}} đồ vật",
        "title": "Xác nhận xóa hàng loạt",
        "description": "Bạn có chắc chắn muốn xóa mục đã chọn {{count}} node? Không thể hoàn tác hành động này.",
        "confirm": "Xác nhận Xóa"
      },
      "batch_delete_success": "Đã xóa thành công {{count}} node",
      "batch_delete_error": "Xóa hàng loạt không thành công",
      "batch_show": {
        "menu": "Hiển thị node"
      },
      "batch_show_success": "Hiển thị thành công {{count}} node",
      "batch_show_error": "Chương trình hàng loạt không thành công",
      "batch_hide": {
        "menu": "Ẩn node"
      },
      "batch_hide_success": "Đã ẩn thành công {{count}} node",
      "batch_hide_error": "Ẩn hàng loạt không thành công",
      "batch_enable": {
        "menu": "Kích hoạt node"
      },
      "batch_enable_success": "Đã kích hoạt thành công {{count}} node",
      "batch_enable_error": "Kích hoạt hàng loạt không thành công",
      "batch_disable": {
        "menu": "Vô hiệu hóa node"
      },
      "batch_disable_success": "Đã tắt thành công {{count}} node",
      "batch_disable_error": "Vô hiệu hóa hàng loạt không thành công",
      "batch_reset_traffic": {
        "menu": "Đặt lại lưu lượng truy cập",
        "button": "Đặt lại {{count}} lưu lượng",
        "title": "Xác nhận lưu lượng đặt lại hàng loạt",
        "description": "Bạn có chắc chắn muốn đặt lại lưu lượng truy cập cho địa điểm đã chọn không? {{count}} node? Điều này sẽ xóa lưu lượng truy cập và bỏ cấm các node.",
        "confirm": "Xác nhận đặt lại"
      },
      "batch_reset_traffic_success": "Đặt lại thành công lưu lượng truy cập cho {{count}} node",
      "batch_reset_traffic_error": "Lưu lượng đặt lại hàng loạt không thành công"
    },
    "form": {
      "add_node": "Thêm node",
      "edit_node": "Chỉnh sửa node",
      "new_node": "node mới",
      "type": {
        "placeholder": "Chọn loại giao thức",
        "select_prompt": "Vui lòng chọn loại giao thức trước",
        "select_error": "Vui lòng chọn loại giao thức"
      },
      "name": {
        "label": "Tên node",
        "placeholder": "Vui lòng nhập tên node",
        "error": "Vui lòng nhập tên hợp lệ"
      },
      "rate": {
        "label": "Lãi suất cơ bản",
        "error": "Lãi suất cơ bản là bắt buộc",
        "error_numeric": "Lãi suất cơ bản phải là một số",
        "error_gte_zero": "Lãi suất cơ bản phải lớn hơn hoặc bằng 0",
        "child_node_tooltip": "Tốc độ cơ bản của node con được kế thừa từ node cha và không thể đặt riêng",
        "child_node_note": "Tốc độ node con được kế thừa từ node cha"
      },
      "traffic_limit": {
        "label": "Giới hạn lưu lượng",
        "placeholder": "0 có nghĩa là không có giới hạn",
        "hint": "Đặt giới hạn lưu lượng node (đơn vị: GB), 0 nghĩa là không giới hạn",
        "error_numeric": "Giới hạn lưu lượng phải là một con số",
        "error_gte_zero": "Giới hạn lưu lượng phải lớn hơn hoặc bằng 0"
      },
      "banned": {
        "label": "Tắt node",
        "description": "node sẽ không khả dụng khi bị tắt"
      },
      "dynamic_rate": {
        "section_title": "Cấu hình tốc độ động",
        "enable_label": "Kích hoạt tốc độ động",
        "enable_description": "Đặt hệ số nhân tỷ lệ khác nhau dựa trên khoảng thời gian",
        "rules_label": "Quy tắc khoảng thời gian",
        "add_rule": "Thêm quy tắc",
        "rule_title": "quy tắc {{index}}",
        "start_time": "Thời gian bắt đầu",
        "end_time": "Thời gian kết thúc",
        "multiplier": "Hệ số tỷ lệ",
        "no_rules": "Chưa có quy tắc nào, nhấp vào nút bên trên để thêm",
        "start_time_error": "Thời gian bắt đầu là bắt buộc",
        "end_time_error": "Thời gian kết thúc là bắt buộc",
        "multiplier_error": "Hệ số tỷ lệ là bắt buộc",
        "multiplier_error_numeric": "Hệ số tỷ lệ phải là một số",
        "multiplier_error_gte_zero": "Hệ số tỷ lệ phải lớn hơn hoặc bằng 0"
      },
      "code": {
        "label": "ID node tùy chỉnh",
        "optional": "(Tùy chọn)",
        "placeholder": "Vui lòng nhập ID node tùy chỉnh"
      },
      "tags": {
        "label": "Thẻ node",
        "placeholder": "Nhấn Enter để thêm thẻ"
      },
      "groups": {
        "label": "Nhóm quyền",
        "add": "Thêm nhóm",
        "placeholder": "Vui lòng chọn nhóm quyền",
        "empty": "Không tìm thấy kết quả nào"
      },
      "machine": {
        "label": "Liên kết với máy",
        "placeholder": "Chọn máy (tùy chọn)",
        "none": "Độc lập",
        "enabled_hint": "Liệu máy này có quản lý node không"
      },
      "host": {
        "label": "Địa chỉ node",
        "placeholder": "Vui lòng nhập tên miền hoặc IP",
        "error": "Địa chỉ node là bắt buộc"
      },
      "port": {
        "label": "Cổng kết nối",
        "placeholder": "Cổng kết nối người dùng",
        "tooltip": "Cổng mà người dùng thực sự kết nối tới, đây là số cổng cần điền vào cấu hình máy khách. Nếu sử dụng chuyển tiếp hoặc đường hầm, cổng này có thể khác với cổng mà máy chủ thực sự lắng nghe.",
        "sync": "Đồng bộ hóa với cổng máy chủ",
        "error": "Cần có cổng kết nối"
      },
      "server_port": {
        "label": "Cổng máy chủ",
        "placeholder": "Nhập cổng máy chủ",
        "error": "Cần có cổng máy chủ",
        "tooltip": "Cổng nghe thực tế trên máy chủ.",
        "sync": "Đồng bộ hóa với cổng máy chủ"
      },
      "parent": {
        "label": "node gốc",
        "placeholder": "Chọn node cha",
        "none": "không có"
      },
      "route": {
        "label": "Nhóm tuyến đường",
        "placeholder": "Chọn nhóm tuyến đường",
        "empty": "Không tìm thấy kết quả nào"
      },
      "submit": "Gửi",
      "cancel": "Hủy",
      "success": "Đã gửi thành công",
      "listen_address": {
        "label": "Địa chỉ lắng nghe",
        "placeholder": "Để trống cho giá trị mặc định (0.0.0.0) hoặc nhập 127.0.0.1, ::1, v.v.",
        "description": "Chỉ định địa chỉ IP mà máy chủ lắng nghe. Để trống để mặc định (0.0.0.0) nghe trên tất cả các giao diện. Bạn có thể đặt 127.0.0.1 để chỉ truy cập cục bộ hoặc một địa chỉ IP cụ thể.",
        "show": "Hiển thị địa chỉ nghe",
        "hide": "Ẩn địa chỉ nghe",
        "optional": "Không bắt buộc"
      }
    },
    "dynamic_form": {
      "multiplex": {
        "enabled": {
          "label": "Ghép kênh",
          "description": "Vận chuyển nhiều luồng thông qua một kết nối TCP"
        },
        "protocol": {
          "label": "Giao thức"
        },
        "max_connections": {
          "label": "Kết nối tối đa"
        },
        "min_streams": {
          "label": "Luồng tối thiểu"
        },
        "padding": {
          "label": "Bật đệm"
        },
        "brutal": {
          "enabled": {
            "label": "TCP tàn bạo"
          },
          "up_mbps": {
            "label": "Tải lên băng thông"
          },
          "down_mbps": {
            "label": "Băng thông tải xuống"
          },
          "description": "TCP Brutal là một thuật toán tăng tốc song phương. Đặt băng thông ở mức 80%-90% dung lượng thực tế. BBR sẽ bị tắt khi được bật."
        }
      },
      "ech": {
        "description": "Máy khách được mã hóa Xin chào các máy khách TLS được hỗ trợ. Để trống cấu hình để tự động truy vấn DNS.",
        "generate": "Tự động tạo cặp khóa ECH",
        "config": {
          "label": "Cấu hình ECH (PEM)",
          "placeholder": "Dán cấu hình ECH ở định dạng PEM, mỗi dòng một hàng",
          "description": "Nếu trống, sing-box sẽ cố tải cấu hình ECH từ DNS."
        },
        "config_path": {
          "label": "Đường dẫn cấu hình ECH",
          "placeholder": "/etc/sing-box/ech.pem",
          "description": "Đường dẫn đến tệp cấu hình ECH ở định dạng PEM."
        },
        "query_server_name": {
          "label": "Tên máy chủ truy vấn ECH",
          "placeholder": "Ghi đè tùy chọn để tra cứu bản ghi HTTPS",
          "description": "Ghi đè miền được sử dụng cho truy vấn bản ghi ECH HTTPS. Mặc định là server_name."
        },
        "key": {
          "label": "Khóa ECH",
          "placeholder": "Dán nội dung khóa ECH khi chương trình phụ trợ yêu cầu",
          "description": "Tải trọng khóa ECH tùy chọn được sử dụng bởi chương trình phụ trợ."
        },
        "key_path": {
          "label": "Đường dẫn khóa ECH",
          "placeholder": "/etc/sing-box/ech.key",
          "description": "Đường dẫn đến tệp khóa ECH khi chương trình phụ trợ yêu cầu."
        }
      },
      "anytls": {
        "tls": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn"
        },
        "padding_scheme": {
          "description": "Mỗi dòng thể hiện một quy tắc đệm, định dạng: stop=8, 0=30-30",
          "label": "Sơ đồ đệm",
          "placeholder": "Nhập quy tắc đệm",
          "use_default": "Sử dụng lược đồ mặc định",
          "edit_btn": "Chỉnh sửa lược đồ đệm",
          "configured": "{{count}} quy tắc được cấu hình",
          "not_configured": "Chưa được định cấu hình"
        }
      },
      "shadowsocks": {
        "cipher": {
          "label": "Phương pháp mã hóa",
          "placeholder": "Chọn phương thức mã hóa",
          "search_placeholder": "Tìm kiếm hoặc nhập phương thức mã hóa tùy chỉnh...",
          "description": "Chọn phương thức mã hóa cài sẵn hoặc nhập phương thức mã hóa tùy chỉnh",
          "preset_group": "Phương pháp mã hóa cài sẵn",
          "custom_group": "Phương thức mã hóa tùy chỉnh",
          "current_value": "Giá trị hiện tại",
          "use_custom": "sử dụng",
          "no_results": "Không tìm thấy phương thức mã hóa phù hợp",
          "custom_hint": "Bạn có thể nhập trực tiếp phương thức mã hóa tùy chỉnh, chẳng hạn như: aes-256-cfb",
          "custom_label": "tùy chỉnh"
        },
        "plugin": {
          "label": "Plugin",
          "placeholder": "Chọn plugin",
          "obfs_hint": "Gợi ý: Định dạng cấu hình như obfs=http;obfs-host=www.bing.com;path=/",
          "v2ray_hint": "Gợi ý: Định dạng chế độ WebSocket là mode=websocket;host=mydomain.me;path=/;tls=true, định dạng chế độ QUIC là mode=quic;host=mydomain.me",
          "gost_hint": "Gợi ý: Định dạng cấu hình như mode=websocket;host=mydomain.me;path=/;tls=true",
          "shadow_tls_hint": "Gợi ý: Định dạng cấu hình như Host=cloud.tencent.com;password=auth_password;version=3",
          "restls_hint": "Gợi ý: Định dạng cấu hình như Host=www.microsoft.com;password=auth_password;version-hint=tls13;restls-script=300?100<1,400~100",
          "kcptun_hint": "Gợi ý: Định dạng cấu hình như key=psk;crypt=aes-128-gcm;mode=fast;mtu=1350"
        },
        "plugin_opts": {
          "label": "Tùy chọn plugin",
          "description": "Nhập các tùy chọn plugin ở định dạng key=value;key2=value2",
          "placeholder": "Ví dụ: mode=tls;host=bing.com"
        },
        "client_fingerprint": "Dấu vân tay của khách hàng",
        "client_fingerprint_placeholder": "Chọn dấu vân tay của khách hàng",
        "client_fingerprint_description": "Khách hàng giả mạo dấu vân tay để giảm nguy cơ bị phát hiện",
        "obfs": {
          "label": "Làm xáo trộn",
          "placeholder": "Chọn phương pháp làm xáo trộn",
          "none": "không có",
          "http": "HTTP"
        },
        "obfs_settings": {
          "path": "Đường dẫn",
          "host": "Máy chủ"
        },
        "cert_config": {
          "tab": "Chứng chỉ TLS",
          "cert_mode": {
            "label": "Chế độ chứng chỉ",
            "description": "Chọn cách quản lý chứng chỉ",
            "self_description": "Tự ký: Có hiệu lực trong 10 năm, được tạo tự động bởi node",
            "http_description": "HTTP-01: Cổng 80 phải có thể truy cập được",
            "dns_description": "DNS-01: Xác thực qua bản ghi DNS, hỗ trợ chứng chỉ ký tự đại diện",
            "content_description": "Nội dung: Đẩy các tệp chứng chỉ thô vào node"
          },
          "domain": {
            "label": "Tên miền",
            "placeholder": "ví dụ.com"
          },
          "email": {
            "label": "Email thông báo",
            "placeholder": "quản trị viên@example.com"
          },
          "http_port": {
            "label": "Cổng thử thách",
            "description": "Cổng thử thách ACME (mặc định 80)"
          },
          "dns_provider": {
            "label": "Nhà cung cấp DNS",
            "doc_link": "Hướng dẫn cấu hình nhà cung cấp DNS"
          },
          "dns_env": {
            "label": "Env Vars (Khóa API)",
            "description_short": "Một KEY=VALUE trên mỗi dòng"
          },
          "cert_content": {
            "label": "Nội dung khóa công khai"
          },
          "key_content": {
            "label": "Nội dung khóa riêng"
          },
          "none_desc": "Cấu hình TLS bị vô hiệu hóa"
        }
      },
      "vmess": {
        "tls": {
          "label": "TLS",
          "placeholder": "Vui lòng chọn bảo mật",
          "disabled": "Đã tắt",
          "enabled": "Đã bật"
        },
        "tls_settings": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Để trống nếu không sử dụng"
          },
          "allow_insecure": "Cho phép không an toàn?"
        },
        "network": {
          "label": "Giao thức vận chuyển",
          "placeholder": "Chọn giao thức vận chuyển"
        }
      },
      "trojan": {
        "server_name": {
          "label": "Chỉ định tên máy chủ (SNI)",
          "placeholder": "Được sử dụng để xác minh chứng chỉ khi địa chỉ node khác với chứng chỉ"
        },
        "allow_insecure": "Cho phép không an toàn?",
        "reality_settings": {
          "server_name": {
            "label": "Trang web đích (đích)",
            "placeholder": "ví dụ: example.com"
          },
          "server_port": {
            "label": "Cảng",
            "placeholder": "ví dụ: 443"
          },
          "allow_insecure": "Cho phép không an toàn?",
          "private_key": {
            "label": "Khóa riêng"
          },
          "public_key": {
            "label": "Khóa công khai"
          },
          "short_id": {
            "label": "ID ngắn",
            "placeholder": "Tùy chọn, độ dài phải chẵn, tối đa 16 ký tự",
            "description": "Danh sách shortId có sẵn cho khách hàng, có thể được sử dụng để phân biệt các khách hàng khác nhau, sử dụng các ký tự thập lục phân 0-f",
            "generate": "Tạo ID ngắn",
            "success": "ID ngắn được tạo thành công"
          },
          "key_pair": {
            "generate": "Tạo cặp khóa",
            "success": "Cặp khóa được tạo thành công",
            "error": "Không tạo được cặp khóa"
          }
        },
        "network": {
          "label": "Giao thức vận chuyển",
          "placeholder": "Chọn giao thức vận chuyển"
        }
      },
      "hysteria": {
        "version": {
          "label": "Phiên bản giao thức",
          "placeholder": "Phiên bản giao thức"
        },
        "alpn": {
          "label": "ALPN",
          "placeholder": "ALPN"
        },
        "obfs": {
          "label": "Làm xáo trộn",
          "type": {
            "label": "Thực hiện xáo trộn",
            "placeholder": "Chọn triển khai che giấu",
            "salamander": "kỳ nhông"
          },
          "password": {
            "label": "Mật khẩu xáo trộn",
            "placeholder": "Vui lòng nhập mật khẩu che giấu",
            "generate_success": "Mật khẩu xáo trộn được tạo thành công"
          }
        },
        "tls": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi địa chỉ node khác với chứng chỉ"
          },
          "allow_insecure": "Cho phép không an toàn?"
        },
        "bandwidth": {
          "up": {
            "label": "Tải lên băng thông",
            "placeholder": "Vui lòng nhập băng thông tải lên",
            "suffix": "Mbps",
            "bbr_tip": ", để trống để sử dụng BBR"
          },
          "down": {
            "label": "Băng thông tải xuống",
            "placeholder": "Vui lòng nhập băng thông tải xuống",
            "suffix": "Mbps",
            "bbr_tip": ", để trống để sử dụng BBR"
          }
        }
      },
      "vless": {
        "tls": {
          "label": "Bảo mật",
          "placeholder": "Vui lòng chọn bảo mật",
          "none": "không có",
          "tls": "TLS",
          "reality": "Reality"
        },
        "tls_settings": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Để trống nếu không sử dụng"
          },
          "allow_insecure": "Cho phép không an toàn?"
        },
        "reality_settings": {
          "server_name": {
            "label": "Trang web đích (đích)",
            "placeholder": "ví dụ: example.com"
          },
          "server_port": {
            "label": "Cảng",
            "placeholder": "ví dụ: 443"
          },
          "allow_insecure": "Cho phép không an toàn?",
          "private_key": {
            "label": "Khóa riêng"
          },
          "public_key": {
            "label": "Khóa công khai"
          },
          "short_id": {
            "label": "ID ngắn",
            "placeholder": "Tùy chọn, độ dài phải chẵn, tối đa 16 ký tự",
            "description": "Danh sách shortId có sẵn cho khách hàng, có thể được sử dụng để phân biệt các khách hàng khác nhau, sử dụng các ký tự thập lục phân 0-f",
            "generate": "Tạo ID ngắn",
            "success": "ID ngắn được tạo thành công"
          },
          "key_pair": {
            "generate": "Tạo cặp khóa",
            "success": "Cặp khóa được tạo thành công",
            "error": "Không tạo được cặp khóa"
          }
        },
        "network": {
          "label": "Giao thức vận chuyển",
          "placeholder": "Chọn giao thức vận chuyển"
        },
        "flow": {
          "label": "Kiểm soát dòng chảy",
          "placeholder": "Chọn điều khiển luồng"
        },
        "encryption": {
          "label": "Mã hóa VLES",
          "description": "Kích hoạt mã hóa VLES",
          "server_label": "giải mã",
          "server_placeholder": "./xray vlessenc",
          "server_description": "",
          "client_label": "mã hóa",
          "client_placeholder": "./xray vlessenc",
          "client_description": "",
          "generate_hint": "./xray vlessenc"
        }
      },
      "tuic": {
        "version": {
          "label": "Phiên bản giao thức",
          "placeholder": "Chọn phiên bản TUIC"
        },
        "password": {
          "label": "Mật khẩu",
          "placeholder": "Nhập mật khẩu",
          "generate_success": "Mật khẩu được tạo thành công"
        },
        "congestion_control": {
          "label": "Kiểm soát tắc nghẽn",
          "placeholder": "Chọn thuật toán kiểm soát tắc nghẽn"
        },
        "udp_relay_mode": {
          "label": "Chế độ chuyển tiếp UDP",
          "placeholder": "Chọn Chế độ chuyển tiếp UDP"
        },
        "tls": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn?",
          "alpn": {
            "label": "ALPN",
            "placeholder": "Chọn giao thức ALPN",
            "empty": "Không có giao thức ALPN nào"
          }
        }
      },
      "socks": {
        "version": {
          "label": "Phiên bản giao thức",
          "placeholder": "Chọn phiên bản SOCKS"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Vui lòng chọn bảo mật",
          "disabled": "Đã tắt",
          "enabled": "Đã bật"
        },
        "tls_settings": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Để trống nếu không sử dụng"
          },
          "allow_insecure": "Cho phép không an toàn?"
        },
        "network": {
          "label": "Giao thức vận chuyển",
          "placeholder": "Chọn giao thức vận chuyển"
        }
      },
      "naive": {
        "tls_settings": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Vui lòng chọn bảo mật",
          "disabled": "Đã tắt",
          "enabled": "Đã bật",
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn"
        }
      },
      "http": {
        "tls_settings": {
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn"
        },
        "tls": {
          "label": "TLS",
          "placeholder": "Vui lòng chọn bảo mật",
          "disabled": "Đã tắt",
          "enabled": "Đã bật",
          "server_name": {
            "label": "Chỉ định tên máy chủ (SNI)",
            "placeholder": "Được sử dụng để xác minh chứng chỉ khi tên miền khác với địa chỉ node"
          },
          "allow_insecure": "Cho phép không an toàn"
        }
      },
      "mieru": {
        "transport": {
          "label": "Giao thức vận chuyển",
          "placeholder": "Chọn giao thức vận chuyển"
        },
        "traffic_pattern": {
          "label": "Mô hình lưu lượng truy cập (Base64)",
          "placeholder": "Nhập chuỗi Base64 để tinh chỉnh mạng",
          "success": "Mẫu lưu lượng truy cập được tạo"
        }
      },
      "routing": {
        "outbounds_tab": "Thư đi tùy chỉnh",
        "routes_tab": "Tuyến đường tùy chỉnh",
        "outbounds": "Thư đi tùy chỉnh (JSON)",
        "routes": "Tuyến đường tùy chỉnh (JSON)",
        "error": {
          "must_be_array": "Phải là một mảng JSON []",
          "invalid_json": "Định dạng JSON không hợp lệ"
        }
      },
      "advanced": {
        "trigger_label": "Cấu hình nâng cao",
        "dialog_title": "Cấu hình giao thức nâng cao",
        "tls_tab": "TLS",
        "route_tab": "Định tuyến",
        "multiplex_tab": "Ghép kênh"
      },
      "cert_config": {
        "tab": "Chứng chỉ TLS",
        "cert_mode": {
          "label": "Chế độ chứng chỉ",
          "description": "Chọn cách lấy chứng chỉ; hỗ trợ phụ thuộc vào node phụ trợ.",
          "none_desc": "Cấu hình chứng chỉ TLS bị tắt"
        },
        "domain": {
          "label": "Miền chứng chỉ"
        },
        "email": {
          "label": "Email thông báo"
        },
        "http_port": {
          "label": "Cổng thử thách",
          "description": "Cổng thử thách ACME (mặc định 80)"
        },
        "dns_provider": {
          "label": "Nhà cung cấp DNS",
          "doc_link": "Xem hướng dẫn cấu hình nhà cung cấp DNS"
        },
        "dns_env": {
          "label": "Biến môi trường (Khóa API)",
          "description_short": "Một mục nhập KEY=VALUE trên mỗi dòng"
        },
        "cert_content": {
          "label": "Nội dung chứng chỉ (Khóa công khai)"
        },
        "key_content": {
          "label": "Nội dung chính (Khóa riêng)"
        }
      }
    },
    "network_settings": {
      "edit_protocol": "Chỉnh sửa giao thức",
      "edit_protocol_config": "Chỉnh sửa cấu hình giao thức",
      "use_template": "sử dụng {{template}} mẫu",
      "json_config_placeholder": "Vui lòng nhập cấu hình JSON",
      "json_config_placeholder_with_template": "Vui lòng nhập cấu hình JSON hoặc chọn mẫu ở trên",
      "validation": {
        "must_be_object": "Cấu hình phải là một đối tượng JSON",
        "invalid_json": "Định dạng JSON không hợp lệ",
        "must_be_array": "Cấu hình phải là một mảng JSON"
      },
      "errors": {
        "save_failed": "Đã xảy ra lỗi khi lưu"
      },
      "edit_padding_scheme": "Chỉnh sửa lược đồ đệm"
    },
    "common": {
      "cancel": "Hủy",
      "confirm": "Xác nhận"
    }
  },
  "coupon": {
    "title": "Quản lý mã giảm giá",
    "description": "Tại đây bạn có thể quản lý phiếu giảm giá, bao gồm các thao tác thêm, xem và xóa.",
    "table": {
      "columns": {
        "id": "ID",
        "show": "Kích hoạt",
        "name": "Tên phiếu giảm giá",
        "type": "Loại",
        "code": "Mã",
        "limitUse": "Sử dụng còn lại",
        "limitUseWithUser": "Sử dụng cho mỗi người dùng",
        "validity": "Thời hạn hiệu lực",
        "actions": "Thao tác"
      },
      "validity": {
        "expired": "Đã hết hạn {{days}} ngày trước",
        "notStarted": "Bắt đầu vào {{days}} ngày",
        "remaining": "{{days}} ngày còn lại",
        "startTime": "Thời gian bắt đầu",
        "endTime": "Thời gian kết thúc",
        "unlimited": "Không giới hạn",
        "noLimit": "Không giới hạn"
      },
      "actions": {
        "edit": "Chỉnh sửa",
        "delete": "Xóa",
        "deleteConfirm": {
          "title": "Xác nhận Xóa",
          "description": "Hành động này sẽ xóa vĩnh viễn phiếu giảm giá này và không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục không?",
          "confirmText": "Xóa"
        }
      },
      "toolbar": {
        "search": "Tìm kiếm phiếu giảm giá...",
        "type": "Loại",
        "reset": "Đặt lại",
        "types": {
          "1": "Số tiền cố định",
          "2": "Tỷ lệ phần trăm"
        }
      }
    },
    "form": {
      "add": "Thêm phiếu giảm giá",
      "edit": "Chỉnh sửa phiếu giảm giá",
      "name": {
        "label": "Tên phiếu giảm giá",
        "placeholder": "Nhập tên phiếu giảm giá",
        "required": "Vui lòng nhập tên phiếu giảm giá"
      },
      "type": {
        "label": "Loại phiếu giảm giá và giá trị",
        "placeholder": "Chọn loại phiếu giảm giá"
      },
      "value": {
        "placeholder": "Nhập giá trị"
      },
      "validity": {
        "label": "Thời hạn hiệu lực",
        "to": "để",
        "endTimeError": "Thời gian kết thúc phải muộn hơn thời gian bắt đầu"
      },
      "limitUse": {
        "label": "Sử dụng tối đa",
        "placeholder": "Đặt mức sử dụng tối đa, để trống không giới hạn",
        "description": "Đặt tổng số lần phiếu giảm giá này có thể được sử dụng, để trống để sử dụng không giới hạn"
      },
      "limitUseWithUser": {
        "label": "Sử dụng cho mỗi người dùng",
        "placeholder": "Đặt mức sử dụng cho mỗi người dùng, để trống không giới hạn",
        "description": "Giới hạn số lần mỗi người dùng có thể sử dụng phiếu giảm giá này, để trống để sử dụng không giới hạn cho mỗi người dùng"
      },
      "limitPeriod": {
        "label": "Thời gian đăng ký",
        "placeholder": "Giới hạn thời gian đăng ký cụ thể, để trống nếu không có hạn chế",
        "description": "Chọn thời gian đăng ký có thể sử dụng phiếu giảm giá này, để trống để không bị giới hạn thời gian",
        "empty": "Không tìm thấy khoảng thời gian phù hợp"
      },
      "limitPlan": {
        "label": "Gói đăng ký",
        "placeholder": "Giới hạn các gói đăng ký cụ thể, để trống nếu không có hạn chế",
        "description": "Chọn gói đăng ký nào có thể sử dụng phiếu giảm giá này, để trống nếu không có hạn chế về gói",
        "empty": "Không tìm thấy gói phù hợp"
      },
      "code": {
        "label": "Mã phiếu giảm giá tùy chỉnh",
        "placeholder": "Nhập mã tùy chỉnh, để trống để tự động tạo",
        "description": "Tùy chỉnh mã phiếu giảm giá, để trống để tự động tạo"
      },
      "generateCount": {
        "label": "Số lượng thế hệ hàng loạt",
        "placeholder": "Số lượng phiếu giảm giá cần tạo, để trống cho một phiếu giảm giá",
        "description": "Tạo nhiều mã phiếu giảm giá cùng một lúc, để trống để tạo một mã duy nhất"
      },
      "submit": {
        "saving": "Đang lưu...",
        "save": "Lưu"
      },
      "error": {
        "saveFailed": "Không lưu được phiếu giảm giá"
      },
      "timeRange": {
        "quickSet": "Đặt nhanh",
        "presets": {
          "1week": "1 tuần",
          "2weeks": "2 tuần",
          "1month": "1 tháng",
          "3months": "3 tháng",
          "6months": "6 tháng",
          "1year": "1 năm"
        }
      }
    },
    "period": {
      "monthly": "Hàng tháng",
      "quarterly": "Hàng quý",
      "half_yearly": "Nửa năm một lần",
      "yearly": "Hàng năm",
      "two_yearly": "Hai năm một lần",
      "three_yearly": "ba hàng năm",
      "onetime": "Một lần",
      "reset_traffic": "Đặt lại lưu lượng truy cập"
    }
  },
  "route": {
    "title": "Quản lý định tuyến",
    "description": "Quản lý tất cả các nhóm tuyến đường, bao gồm các hoạt động thêm, xóa và chỉnh sửa.",
    "columns": {
      "id": "Mã nhóm",
      "remarks": "Bình luận",
      "action": "Thao tác",
      "actions": "Thao tác",
      "matchRules": "Trận đấu {{count}} quy tắc",
      "action_value": {
        "title": "Giá trị hành động",
        "dns": "DNS: {{value}}",
        "proxy": "Ủy quyền ({{value}})",
        "block": "Chặn quyền truy cập",
        "direct": "Kết nối trực tiếp"
      }
    },
    "actions": {
      "dns": "Giải quyết bằng máy chủ DNS được chỉ định",
      "block": "Chặn quyền truy cập",
      "direct": "Kết nối trực tiếp",
      "proxy": "ủy nhiệm"
    },
    "form": {
      "add": "Thêm tuyến đường",
      "edit": "Chỉnh sửa tuyến đường",
      "create": "Tạo tuyến đường",
      "remarks": "Bình luận",
      "remarksPlaceholder": "Vui lòng nhập nhận xét",
      "match": "Quy tắc trận đấu",
      "matchPlaceholder": "ví dụ.com\n*.example.com",
      "action": "Thao tác",
      "actionPlaceholder": "Vui lòng chọn hành động",
      "dns": "Máy chủ DNS",
      "dnsPlaceholder": "Vui lòng nhập máy chủ DNS",
      "proxy": "Thẻ đi",
      "proxyPlaceholder": "Vui lòng nhập thẻ gửi đi",
      "cancel": "Hủy",
      "submit": "Gửi",
      "validation": {
        "remarks": "Vui lòng nhập nhận xét hợp lệ"
      }
    },
    "toolbar": {
      "searchPlaceholder": "Tìm kiếm tuyến đường...",
      "reset": "Đặt lại"
    },
    "messages": {
      "deleteConfirm": "Xác nhận Xóa",
      "deleteDescription": "Hành động này sẽ xóa vĩnh viễn nhóm tuyến đường này và không thể khôi phục được. Bạn có chắc chắn muốn tiếp tục không?",
      "deleteButton": "Xóa",
      "deleteSuccess": "Đã xóa thành công",
      "createSuccess": "Đã tạo thành công",
      "updateSuccess": "Đã cập nhật thành công"
    }
  },
  "ticket": {
    "title": "Quản lý ticket",
    "description": "Xem và quản lý yêu cầu của người dùng, bao gồm các hoạt động xem, trả lời và đóng.",
    "columns": {
      "id": "Mã ticket",
      "subject": "chủ đề",
      "level": "Ưu tiên",
      "status": "Trạng thái",
      "updated_at": "Cập nhật lần cuối",
      "created_at": "Thời gian tạo",
      "actions": "Thao tác"
    },
    "status": {
      "closed": "Đã đóng",
      "replied": "đã trả lời",
      "pending": "Đang chờ xử lý",
      "processing": "Đang xử lý"
    },
    "level": {
      "low": "Mức độ ưu tiên thấp",
      "medium": "Ưu tiên trung bình",
      "high": "Ưu tiên cao"
    },
    "filter": {
      "placeholder": "Tìm kiếm {field}...",
      "no_results": "Không tìm thấy kết quả nào",
      "selected": "đã chọn {count}",
      "clear": "Xóa bộ lọc"
    },
    "actions": {
      "view_details": "Xem chi tiết",
      "close_ticket": "Đóng ticket",
      "close_confirm_title": "Xác nhận Đóng ticket",
      "close_confirm_description": "Bạn có chắc chắn muốn đóng ticket này không? Nó sẽ chuyển sang danh sách đã đóng nhưng bạn vẫn có thể trả lời sau.",
      "close_confirm_button": "Xác nhận Đóng",
      "close_success": "Đã đóng ticket thành công",
      "view_ticket": "Xem ticket"
    },
    "detail": {
      "no_messages": "Chưa có tin nhắn nào",
      "created_at": "Được tạo vào lúc",
      "sender_admin": "Quản trị",
      "sender_user": "Người dùng",
      "user_info": "Thông tin người dùng",
      "traffic_records": "Hồ sơ lưu lượng",
      "order_records": "Hồ sơ đặt hàng",
      "input": {
        "closed_reply_placeholder": "ticket này đã bị đóng nhưng bạn vẫn có thể trả lời...",
        "closed_hint": "ticket này đã bị đóng. Bạn có thể tiếp tục trả lời và tin nhắn mới sẽ vẫn được thêm vào đây.",
        "reply_placeholder": "Nhập câu trả lời của bạn...",
        "sending": "Đang gửi...",
        "send": "Gửi"
      }
    },
    "list": {
      "title": "Danh sách ticket",
      "search_placeholder": "Tìm kiếm chủ đề ticket hoặc email người dùng",
      "no_tickets": "Không có ticket",
      "no_open_tickets": "Không có ticket mở",
      "no_closed_tickets": "Không có ticket đóng",
      "no_search_results": "Không tìm thấy ticket phù hợp",
      "collapse": "Thu gọn danh sách",
      "expand": "Mở rộng danh sách"
    }
  },
  "machine": {
    "title": "Quản lý máy chủ",
    "description": "Xem lại tình trạng máy chủ, tải và các node được lưu trữ, sau đó khởi chạy các hành động của node từ chế độ xem hoạt động.",
    "columns": {
      "id": "ID",
      "name": "Tên máy chủ",
      "status": "Trạng thái",
      "nodes": "Node",
      "nodesHosted": "node lưu trữ",
      "nodesIdle": "nhàn rỗi",
      "load": "Tải",
      "lastSeen": "Nhìn thấy lần cuối",
      "actions": "Thao tác",
      "online": "Trực tuyến",
      "offline": "Ngoại tuyến",
      "inactive": "Đã tắt",
      "noData": "Không tải dữ liệu",
      "cpu": "CPU",
      "memory": "Bộ nhớ",
      "disk": "Đĩa",
      "never": "không bao giờ",
      "lastReport": "Tải báo cáo"
    },
    "toolbar": {
      "search": "Tìm kiếm theo tên máy chủ, ghi chú hoặc SID...",
      "status": "Trạng thái",
      "nodes": "Node",
      "nodesHosted": "node lưu trữ",
      "nodesIdle": "nhàn rỗi",
      "with_nodes": "node lưu trữ",
      "idle_nodes": "Máy chủ nhàn rỗi",
      "high_load": "Tải cao",
      "online_ratio": "Trực tuyến",
      "high_load_count": "Tải cao",
      "tip": "Sử dụng trang này để nhanh chóng xem xét tình trạng máy chủ, số lượng node được lưu trữ và áp lực tài nguyên.",
      "reset": "Đặt lại"
    },
    "overview": {
      "total": "Tổng số máy chủ",
      "total_hint": "Lưu trữ {{count}} tổng số node",
      "online": "Máy chủ trực tuyến",
      "online_hint": "Nhịp tim nhận được trong 5 phút vừa qua",
      "offline": "Ngoại tuyến / Bị mất",
      "offline_hint": "Nhịp tim hoặc tác nhân nên được kiểm tra",
      "high_load": "Tải cao",
      "high_load_hint": "CPU, bộ nhớ hoặc đĩa gần ngưỡng",
      "nodes_suffix": "node",
      "attention": "Chú ý",
      "stable": "Ổn định",
      "needs_review": "Xem lại",
      "normal": "Bình thường"
    },
    "form": {
      "add": "Thêm máy chủ",
      "create": "Máy chủ mới",
      "edit": "Chỉnh sửa máy chủ",
      "createDescription": "Tạo bản ghi máy chủ khi bạn muốn một máy chủ quản lý nhiều node.",
      "editDescription": "Sửa đổi tên máy chủ, ghi chú hoặc trạng thái.",
      "name": "Tên máy chủ",
      "namePlaceholder": "ví dụ: HK-01",
      "nameError": "Tên máy chủ là bắt buộc",
      "notes": "Ghi chú",
      "notesPlaceholder": "Ghi chú tùy chọn về máy chủ này",
      "isActive": "Kích hoạt máy chủ",
      "isActiveDescription": "Máy chủ bị vô hiệu hóa sẽ không được xboard-node sử dụng.",
      "cancel": "Hủy",
      "submit": "Gửi",
      "update": "Cập nhật"
    },
    "token": {
      "title": "Mã thông báo máy chủ",
      "description": "Mã thông báo này được xboard-node sử dụng để xác thực với bảng điều khiển. Giữ nó an toàn.",
      "show": "Xem mã thông báo",
      "hide": "Ẩn mã thông báo",
      "reset": "Đặt lại mã thông báo",
      "resetConfirm": "Đặt lại mã thông báo?",
      "resetDescription": "Mã thông báo cũ sẽ bị vô hiệu ngay lập tức. node xboard phải được cấu hình lại bằng mã thông báo mới.",
      "copy": "Sao chép",
      "copied": "Đã sao chép mã thông báo vào bảng nhớ tạm",
      "copiedInline": "Đã sao chép!",
      "copyFailed": "Sao chép không thành công, vui lòng sao chép thủ công",
      "autoHide": "Tự động ẩn trong {{time}}",
      "resetSuccess": "Mã thông báo đã được đặt lại",
      "createdHint": "Mã thông báo được tạo. Bạn có thể xem nó bất cứ lúc nào trong trang chi tiết máy chủ."
    },
    "install": {
      "title": "Cài đặt node xboard",
      "description": "Chạy lệnh này trên máy chủ đích để cài đặt node xboard ở chế độ máy và kết nối nó với bản ghi máy chủ này.",
      "copy": "Sao chép lệnh cài đặt",
      "copied": "Đã sao chép lệnh cài đặt",
      "copiedInline": "Đã sao chép!",
      "copyFailed": "Sao chép không thành công",
      "loading": "Đang tạo lệnh...",
      "hint": "Yêu cầu quyền root hoặc sudo và máy chủ Linux có systemd."
    },
    "detail": {
      "title": "Chi tiết máy chủ",
      "info": "Thông tin máy chủ",
      "associatedNodes": "Các node liên kết",
      "noNodes": "Không có node nào được lưu trữ bởi máy chủ này.",
      "nodeId": "ID",
      "nodeName": "Tên",
      "nodeType": "Loại",
      "nodeHost": "Địa chỉ",
      "nodePort": "Cảng",
      "nodeShow": "Hiển thị",
      "nodeEnabled": "Đã bật",
      "loadTrend": "Tải xu hướng",
      "networkTrend": "Tốc độ mạng",
      "noHistory": "Chưa có dữ liệu tải lịch sử.",
      "openNodeManage": "Quản lý node mở",
      "addNodeToServer": "Thêm node vào máy chủ này",
      "nodeCount": "{{count}} node",
      "nodeEnabledCount": "{{count}} đã bật",
      "toggleEnabledError": "Không thể chuyển đổi trạng thái node",
      "bindExistingButton": "Ràng buộc hiện có",
      "bindExistingTitle": "Liên kết các node hiện có",
      "bindExistingDescription": "Chọn các node để liên kết với \"{{name}}\"",
      "bindSearchPlaceholder": "Tìm kiếm theo tên, địa chỉ, loại...",
      "noUnboundNodes": "Không có node không liên kết nào",
      "noSearchResults": "Không có node phù hợp",
      "selectAll": "Chọn tất cả ({{count}})",
      "selectedCount": "{{count}} đã chọn",
      "bindConfirm": "Ràng buộc {{count}} node",
      "binding": "Ràng buộc...",
      "bindSuccess": "Liên kết thành công {{count}} node tới \"{{name}}\"",
      "bindFailed": "Ràng buộc không thành công",
      "unbindNode": "Hủy liên kết",
      "unbindSuccess": "\"{{name}}\" đã được giải phóng",
      "unbindFailed": "Hủy liên kết không thành công",
      "cancel": "Hủy"
    },
    "messages": {
      "createSuccess": "Máy chủ được tạo thành công",
      "updateSuccess": "Máy chủ được cập nhật thành công",
      "deleteConfirm": "Xóa máy chủ?",
      "deleteDescription": "Các node liên kết sẽ không bị ràng buộc (không bị xóa). Không thể hoàn tác hành động này.",
      "deleteButton": "Xóa",
      "deleteSuccess": "Máy chủ đã được xóa thành công",
      "deleteFailed": "Không thể xóa máy chủ",
      "saveFailed": "Không lưu được máy chủ",
      "tokenFetchFailed": "Không tìm nạp được mã thông báo",
      "tokenResetFailed": "Không thể đặt lại mã thông báo"
    },
    "nodeForm": {
      "machineId": "Liên kết với máy chủ",
      "machineIdPlaceholder": "Chọn máy chủ (tùy chọn)",
      "machineIdNone": "Triển khai độc lập",
      "enabled": "Đã bật trên máy chủ",
      "enabledDescription": "Liệu node có được kích hoạt trên máy chủ đã chọn hay không"
    }
  },
  "search": {
    "placeholder": "Tìm kiếm menu và chức năng...",
    "title": "Điều hướng menu",
    "noResults": "Không tìm thấy kết quả nào",
    "shortcut": {
      "label": "Tìm kiếm",
      "key": "⌘K"
    }
  },
  "knowledge": {
    "title": "Kho kiến thức",
    "description": "Tại đây bạn có thể định cấu hình cơ sở kiến thức, bao gồm các thao tác thêm, xóa và chỉnh sửa.",
    "columns": {
      "id": "ID",
      "status": "Trạng thái",
      "title": "Tiêu đề",
      "category": "Danh mục",
      "actions": "Thao tác"
    },
    "form": {
      "add": "Thêm kiến thức",
      "edit": "Chỉnh sửa kiến thức",
      "title": "Tiêu đề",
      "titlePlaceholder": "Vui lòng nhập tên kiến thức",
      "category": "Danh mục",
      "categoryPlaceholder": "Vui lòng nhập danh mục, nó sẽ được tự động phân loại",
      "language": "Ngôn ngữ",
      "languagePlaceholder": "Vui lòng chọn ngôn ngữ",
      "content": "Nội dung",
      "show": "Hiển thị",
      "cancel": "Hủy",
      "submit": "Gửi"
    },
    "languages": {
      "en-US": "Tiếng Anh",
      "ja-JP": "Tiếng Nhật",
      "ko-KR": "Tiếng Hàn",
      "vi-VN": "Tiếng Việt",
      "zh-CN": "Tiếng Trung (Giản thể)",
      "zh-TW": "Tiếng Trung (Phồn thể)",
      "ru-RU": "Tiếng Nga"
    },
    "messages": {
      "deleteConfirm": "Xác nhận Xóa",
      "deleteDescription": "Hành động này sẽ xóa vĩnh viễn bản ghi cơ sở kiến thức này và không thể khôi phục được. Bạn có chắc chắn muốn tiếp tục không?",
      "deleteButton": "Xóa",
      "operationSuccess": "Hoạt động thành công"
    },
    "toolbar": {
      "searchPlaceholder": "Tìm kiếm kiến thức...",
      "reset": "Đặt lại",
      "sortModeHint": "Kéo các mục kiến thức để sắp xếp, bấm lưu khi hoàn thành",
      "editSort": "Chỉnh sửa sắp xếp",
      "saveSort": "Lưu Sắp xếp"
    }
  },
  "common": {
    "loading": "Đang tải...",
    "error": "Lỗi",
    "success": "Thành công",
    "save": "Lưu",
    "cancel": "Hủy",
    "confirm": "Xác nhận",
    "close": "Đóng",
    "delete": {
      "success": "Đã xóa thành công",
      "failed": "Không thể xóa"
    },
    "edit": "Chỉnh sửa",
    "view": "Xem",
    "toggleNavigation": "Chuyển đổi điều hướng",
    "toggleSidebar": "Chuyển đổi thanh bên",
    "search": "Tìm kiếm...",
    "theme": {
      "light": "Ánh sáng",
      "dark": "Tối",
      "system": "Hệ thống"
    },
    "user": "Người dùng",
    "defaultEmail": "người dùng@example.com",
    "settings": "Cài đặt",
    "logout": "Đăng xuất",
    "copy": {
      "success": "Đã sao chép thành công",
      "failed": "Không sao chép được",
      "error": "Sao chép không thành công",
      "errorLog": "Lỗi sao chép vào clipboard"
    },
    "submit": "Gửi",
    "saving": "Đang lưu...",
    "table": {
      "noData": "Không có sẵn dữ liệu",
      "pagination": {
        "selected": "{{selected}} của {{total}} mục đã chọn",
        "itemsPerPage": "Mỗi trang",
        "page": "Trang",
        "pageOf": "của {{total}} trang",
        "firstPage": "Tới trang đầu tiên",
        "previousPage": "Trang trước",
        "nextPage": "Trang tiếp theo",
        "lastPage": "Tới trang cuối cùng"
      },
      "viewOptions": {
        "button": "Cột",
        "label": "Chuyển đổi cột"
      }
    },
    "update": {
      "title": "Cập nhật hệ thống",
      "newVersion": "Phiên bản mới có sẵn",
      "currentVersion": "Phiên bản hiện tại",
      "latestVersion": "Phiên bản mới nhất",
      "updateLater": "Cập nhật sau",
      "updateNow": "Cập nhật ngay",
      "updating": "Đang cập nhật...",
      "updateSuccess": "Cập nhật thành công, hệ thống sẽ khởi động lại ngay",
      "updateFailed": "Cập nhật không thành công, vui lòng thử lại sau"
    },
    "time": {
      "day": "ngày",
      "hour": " (các) giờ"
    },
    "reset": "Đặt lại",
    "export": "Xuất dữ liệu",
    "currency": {
      "yuan": "Nhân dân tệ"
    },
    "http": {
      "notLoggedIn": "Chưa đăng nhập",
      "unknownError": "Lỗi không xác định",
      "loginExpired": "Đăng nhập đã hết hạn",
      "noPermission": "Không có sự cho phép",
      "notFound": "Không tìm thấy tài nguyên hoặc API",
      "unknownException": "Ngoại lệ không xác định"
    }
  },
  "sidebar": {
    "dashboard": "Bảng điều khiển",
    "systemManagement": "Quản lý hệ thống",
    "systemConfig": "Cấu hình hệ thống",
    "themeConfig": "Cấu hình giao diện",
    "noticeManagement": "Quản lý thông báo",
    "paymentConfig": "Cấu hình thanh toán",
    "knowledgeManagement": "Kho kiến thức",
    "nodeManagement": "Quản lý node",
    "permissionGroupManagement": "Nhóm quyền",
    "routeManagement": "Quản lý định tuyến",
    "subscriptionManagement": "Quản lý đăng ký",
    "planManagement": "Quản lý gói",
    "orderManagement": "Quản lý đơn hàng",
    "couponManagement": "Quản lý mã giảm giá",
    "userManagement": "Quản lý người dùng",
    "ticketManagement": "Quản lý ticket",
    "pluginManagement": "Quản lý plugin"
  },
  "plugin": {
    "title": "Quản lý plugin",
    "description": "Quản lý và cấu hình các plugin hệ thống",
    "search": {
      "placeholder": "Tìm kiếm tên plugin hoặc mô tả..."
    },
    "type": {
      "placeholder": "Chọn loại plugin",
      "all": "Tất cả các loại"
    },
    "tabs": {
      "all": "Tất cả các plugin",
      "installed": "Đã cài đặt",
      "available": "Có sẵn"
    },
    "status": {
      "enabled": "Đã bật",
      "disabled": "Đã tắt",
      "not_installed": "Chưa được cài đặt",
      "protected": "Được bảo vệ",
      "filter_placeholder": "Trạng thái cài đặt",
      "all": "Tất cả trạng thái",
      "installed": "Đã cài đặt",
      "available": "Có sẵn"
    },
    "button": {
      "install": "cài đặt",
      "upgrade": "Nâng cấp",
      "config": "Cấu hình",
      "enable": "Kích hoạt",
      "disable": "Vô hiệu hóa",
      "uninstall": "Gỡ cài đặt",
      "readme": "Xem tài liệu",
      "menuDemo": "Trình diễn thực đơn"
    },
    "upload": {
      "button": "Tải lên plugin",
      "title": "Tải lên plugin",
      "description": "Tải gói plugin (.zip) lên",
      "dragText": "Kéo và thả gói plugin vào đây hoặc",
      "clickText": "duyệt qua",
      "supportText": "Chỉ hỗ trợ tệp .zip",
      "uploading": "Đang tải lên...",
      "error": {
        "format": "Chỉ hỗ trợ tệp .zip"
      }
    },
    "delete": {
      "title": "Xóa plugin",
      "description": "Bạn có chắc chắn muốn xóa plugin này? Không thể hoàn tác hành động này.",
      "button": "Xóa"
    },
    "uninstall": {
      "title": "Gỡ cài đặt plugin",
      "description": "Bạn có chắc chắn muốn gỡ cài đặt plugin này không? Dữ liệu plugin sẽ bị xóa sau khi gỡ cài đặt.",
      "button": "Gỡ cài đặt"
    },
    "upgrade": {
      "title": "Nâng cấp plugin",
      "description": "Bạn có chắc chắn muốn nâng cấp plugin này không? Plugin sẽ tạm thời không khả dụng trong quá trình nâng cấp.",
      "button": "Nâng cấp"
    },
    "config": {
      "title": "Cấu hình",
      "description": "Sửa đổi cấu hình plugin",
      "save": "Lưu",
      "cancel": "Hủy"
    },
    "readme": {
      "title": "Tài liệu bổ trợ"
    },
    "author": "tác giả",
    "messages": {
      "installSuccess": "Đã cài đặt plugin thành công",
      "installError": "Không cài đặt được plugin",
      "upgradeSuccess": "Đã nâng cấp plugin thành công",
      "upgradeError": "Không thể nâng cấp plugin",
      "uninstallSuccess": "Đã gỡ cài đặt plugin thành công",
      "uninstallError": "Không thể gỡ cài đặt plugin",
      "enableSuccess": "Đã bật plugin thành công",
      "enableError": "Không thể bật plugin",
      "disableSuccess": "Đã tắt plugin thành công",
      "disableError": "Không thể tắt plugin",
      "configLoadError": "Không tải được cấu hình plugin",
      "configSaveSuccess": "Đã lưu cấu hình thành công",
      "configSaveError": "Không lưu được cấu hình",
      "uploadSuccess": "Đã tải plugin lên thành công",
      "uploadError": "Không thể tải lên plugin",
      "deleteSuccess": "Đã xóa plugin thành công",
      "deleteError": "Không thể xóa plugin"
    }
  },
  "dashboard": {
    "title": "Bảng điều khiển",
    "stats": {
      "newUsers": "Người dùng mới",
      "totalScore": "Tổng số điểm",
      "monthlyUpload": "Tải lên hàng tháng",
      "vsLastMonth": "so với tháng trước",
      "vsYesterday": "vs hôm qua",
      "todayIncome": "Thu nhập hôm nay",
      "monthlyIncome": "Thu nhập hàng tháng",
      "totalIncome": "Tổng thu nhập",
      "totalUsers": "Tổng số người dùng",
      "activeUsers": "Người dùng đang hoạt động: {{count}}",
      "totalOrders": "Tổng số đơn hàng",
      "revenue": "Doanh thu",
      "todayRegistered": "Hôm nay đã đăng ký",
      "monthlyRegistered": "Đăng ký hàng tháng",
      "onlineUsers": "Người dùng trực tuyến",
      "pendingTickets": "ticket đang chờ xử lý",
      "hasPendingTickets": "Có những ticket cần chú ý",
      "noPendingTickets": "Không có ticket đang chờ xử lý",
      "pendingCommission": "Hoa hồng đang chờ xử lý",
      "hasPendingCommission": "Có hoa hồng cần xác nhận",
      "noPendingCommission": "Không có hoa hồng đang chờ xử lý",
      "monthlyNewUsers": "Người dùng mới hàng tháng",
      "monthlyDownload": "Tải xuống hàng tháng",
      "todayTraffic": "Hôm nay: {{value}}",
      "activeUserTrend": "Xu hướng người dùng đang hoạt động",
      "realtimeUsers": "Người dùng thời gian thực",
      "todayPeak": "Đỉnh điểm hôm nay",
      "vsLastWeek": "so với tuần trước"
    },
    "trafficRank": {
      "nodeTrafficRank": "Xếp hạng lưu lượng truy cập node",
      "userTrafficRank": "Xếp hạng lưu lượng truy cập của người dùng",
      "today": "Hôm nay",
      "last7days": "7 ngày qua",
      "last30days": "30 ngày qua",
      "customRange": "Phạm vi tùy chỉnh",
      "selectTimeRange": "Chọn phạm vi thời gian",
      "selectDateRange": "Chọn phạm vi ngày",
      "currentTraffic": "Lưu lượng truy cập hiện tại",
      "previousTraffic": "Lưu lượng trước đó",
      "changeRate": "Thay đổi tỷ lệ",
      "recordTime": "Ghi lại thời gian"
    },
    "overview": {
      "title": "Tổng quan về doanh thu",
      "thisMonth": "Tháng này",
      "lastMonth": "Tháng trước",
      "to": "để",
      "selectTimeRange": "Chọn phạm vi",
      "selectDate": "Chọn ngày",
      "last7Days": "7 ngày qua",
      "last30Days": "30 ngày qua",
      "last90Days": "90 ngày qua",
      "last180Days": "180 ngày qua",
      "lastYear": "Năm ngoái",
      "customRange": "Phạm vi tùy chỉnh",
      "amount": "Số tiền",
      "count": "Đếm",
      "transactions": "{{count}} giao dịch",
      "orderAmount": "Số tiền đặt hàng",
      "commissionAmount": "Số tiền hoa hồng",
      "orderCount": "Số lượng đơn hàng",
      "commissionCount": "Số tiền hoa hồng",
      "totalIncome": "Tổng thu nhập",
      "totalCommission": "Tổng hoa hồng",
      "totalTransactions": "Tổng số: {{count}} giao dịch",
      "avgOrderAmount": "Số tiền đặt hàng trung bình:",
      "commissionRate": "Tỷ lệ hoa hồng:"
    },
    "traffic": {
      "title": "Xếp hạng lưu lượng",
      "rank": "Xếp hạng",
      "domain": "Tên miền",
      "todayTraffic": "Lưu lượng ngày nay",
      "monthlyTraffic": "Lưu lượng truy cập hàng tháng"
    },
    "queue": {
      "title": "Trạng thái hàng đợi",
      "jobDetails": "Chi tiết công việc",
      "status": {
        "description": "Trạng thái chạy hàng đợi hiện tại",
        "running": "Trạng thái chạy",
        "normal": "Bình thường",
        "abnormal": "bất thường",
        "waitTime": "Thời gian chờ hiện tại: {{seconds}} giây",
        "pending": "Đang chờ xử lý",
        "processing": "Đang xử lý",
        "completed": "Đã hoàn thành",
        "failed": "Thất bại",
        "cancelled": "Đã hủy"
      },
      "details": {
        "description": "Chi tiết xử lý hàng đợi",
        "recentJobs": "Việc làm gần đây",
        "statisticsPeriod": "Thời kỳ thống kê: {{hours}} giờ",
        "jobsPerMinute": "Việc làm mỗi phút",
        "maxThroughput": "Thông lượng tối đa: {{value}}",
        "failedJobs7Days": "Công việc thất bại (7 ngày)",
        "retentionPeriod": "Thời gian lưu giữ: {{hours}} giờ",
        "longestRunningQueue": "Hàng đợi chạy dài nhất",
        "activeProcesses": "Quy trình hoạt động",
        "id": "Mã công việc",
        "type": "Loại công việc",
        "status": "Trạng thái",
        "progress": "Tiến độ",
        "createdAt": "Thời gian tạo",
        "updatedAt": "Thời gian cập nhật",
        "error": "Thông báo lỗi",
        "data": "Dữ liệu công việc",
        "result": "kết quả",
        "duration": "Thời lượng",
        "attempts": "Nỗ lực",
        "nextRetry": "Lần thử lại tiếp theo",
        "failedJobsDetailTitle": "Chi tiết công việc thất bại",
        "viewFailedJobs": "Xem công việc thất bại",
        "jobDetailTitle": "Chi tiết công việc",
        "time": "thời gian",
        "queue": "Hàng đợi",
        "name": "Tên công việc",
        "exception": "Ngoại lệ",
        "noFailedJobs": "Không có công việc thất bại",
        "connection": "Kết nối",
        "payload": "Khối lượng công việc",
        "viewDetail": "Xem chi tiết",
        "action": "Thao tác"
      },
      "actions": {
        "retry": "Thử lại",
        "cancel": "Hủy",
        "delete": "Xóa",
        "viewDetails": "Xem chi tiết"
      },
      "empty": "Không có công việc nào trong hàng đợi",
      "loading": "Đang tải trạng thái hàng đợi...",
      "error": "Không tải được trạng thái hàng đợi"
    },
    "common": {
      "refresh": "Làm mới",
      "close": "Đóng",
      "pagination": "Trang {{current}}/{{total}}, {{count}} tổng số mặt hàng"
    },
    "search": {
      "placeholder": "Tìm kiếm menu và chức năng...",
      "title": "Điều hướng menu",
      "noResults": "Không tìm thấy kết quả nào",
      "loading": "Đang tìm kiếm..."
    }
  },
  "order": {
    "title": "Quản lý đơn hàng",
    "description": "Tại đây bạn có thể xem các đơn hàng của người dùng, bao gồm phân công, xem, xóa và các hoạt động khác.",
    "table": {
      "columns": {
        "tradeNo": "Số thứ tự",
        "type": "Loại",
        "plan": "Gói đăng ký",
        "period": "Thời kỳ",
        "amount": "Số tiền thanh toán",
        "status": "Trạng thái đơn hàng",
        "commission": "Số tiền hoa hồng",
        "commissionStatus": "Trạng thái hoa hồng",
        "createdAt": "Thời gian tạo"
      }
    },
    "type": {
      "NEW": "Mua mới",
      "RENEWAL": "Gia hạn",
      "UPGRADE": "Nâng cấp",
      "RESET_FLOW": "Đặt lại lưu lượng truy cập"
    },
    "period": {
      "month_price": "Hàng tháng",
      "quarter_price": "Hàng quý",
      "half_year_price": "Nửa năm một lần",
      "year_price": "Hàng năm",
      "two_year_price": "2 năm",
      "three_year_price": "3 năm",
      "onetime_price": "Một lần",
      "reset_price": "Đặt lại gói"
    },
    "status": {
      "PENDING": "Đang chờ xử lý",
      "PROCESSING": "Đang xử lý",
      "CANCELLED": "Đã hủy",
      "COMPLETED": "Đã hoàn thành",
      "DISCOUNTED": "Giảm giá",
      "tooltip": "Sau khi đánh dấu là [Đã thanh toán], hệ thống sẽ tiến hành kích hoạt và hoàn thành"
    },
    "commission": {
      "PENDING": "Đang chờ xử lý",
      "PROCESSING": "Đang xử lý",
      "VALID": "hợp lệ",
      "INVALID": "không hợp lệ"
    },
    "actions": {
      "markAsPaid": "Đánh dấu là đã trả tiền",
      "cancel": "Hủy đơn hàng",
      "openMenu": "Mở trình đơn",
      "reset": "Đặt lại"
    },
    "search": {
      "placeholder": "Tìm kiếm đơn hàng..."
    },
    "dialog": {
      "title": "Thông tin đặt hàng",
      "basicInfo": "Thông tin cơ bản",
      "amountInfo": "Thông tin số tiền",
      "timeInfo": "Thông tin thời gian",
      "commissionInfo": "Thông tin hoa hồng",
      "commissionStatusActive": "Đang hoạt động",
      "addOrder": "Thêm đơn hàng",
      "assignOrder": "Chỉ định đơn hàng",
      "fields": {
        "userEmail": "Email người dùng",
        "userPhone": "Điện thoại người dùng",
        "orderPeriod": "Thời gian đặt hàng",
        "subscriptionPlan": "Gói đăng ký",
        "callbackNo": "Số gọi lại",
        "paymentAmount": "Số tiền thanh toán",
        "balancePayment": "Thanh toán số dư",
        "discountAmount": "Số tiền chiết khấu",
        "refundAmount": "Số tiền hoàn lại",
        "deductionAmount": "Số tiền khấu trừ",
        "createdAt": "Thời gian tạo",
        "updatedAt": "Thời gian cập nhật",
        "commissionStatus": "Trạng thái hoa hồng",
        "commissionAmount": "Số tiền hoa hồng",
        "actualCommissionAmount": "Hoa hồng thực tế",
        "inviteUser": "Người mời",
        "inviteUserId": "ID người mời"
      },
      "placeholders": {
        "email": "Vui lòng nhập email người dùng",
        "plan": "Vui lòng chọn gói đăng ký",
        "period": "Vui lòng chọn thời gian đăng ký",
        "amount": "Vui lòng nhập số tiền thanh toán"
      },
      "actions": {
        "cancel": "Hủy",
        "confirm": "Xác nhận"
      },
      "messages": {
        "addSuccess": "Đã thêm thành công"
      }
    }
  },
  "theme": {
    "title": "Cấu hình giao diện",
    "description": "Cấu hình chủ đề, bao gồm màu chủ đề, kích thước phông chữ, v.v. Nếu bạn triển khai V2board theo cách tách biệt giữa front-end và back-end, cấu hình chủ đề sẽ không có hiệu lực.",
    "upload": {
      "button": "Tải chủ đề lên",
      "title": "Tải chủ đề lên",
      "description": "Vui lòng tải lên gói chủ đề hợp lệ (định dạng .zip). Gói chủ đề phải chứa cấu trúc tệp chủ đề hoàn chỉnh.",
      "dragText": "Kéo và thả tệp chủ đề vào đây hoặc",
      "clickText": "bấm vào để chọn",
      "supportText": "Hỗ trợ các gói chủ đề định dạng .zip",
      "uploading": "Đang tải lên...",
      "error": {
        "format": "Chỉ hỗ trợ các tệp chủ đề định dạng ZIP"
      }
    },
    "preview": {
      "title": "Xem trước chủ đề",
      "imageCount": "{{current}} / {{total}}"
    },
    "card": {
      "version": "Phiên bản: {{version}}",
      "currentTheme": "Chủ đề hiện tại",
      "activateTheme": "Kích hoạt chủ đề",
      "configureTheme": "Cài đặt chủ đề",
      "preview": "Xem trước",
      "delete": {
        "title": "Xóa chủ đề",
        "description": "Bạn có chắc chắn muốn xóa chủ đề này? Không thể hoàn tác hành động này.",
        "button": "Xóa",
        "error": {
          "active": "Không thể xóa chủ đề hiện đang hoạt động"
        }
      }
    },
    "config": {
      "title": "Cấu hình {{name}} Giao diện",
      "description": "Sửa đổi kiểu chủ đề, bố cục và các tùy chọn hiển thị khác.",
      "cancel": "Hủy",
      "save": "Lưu",
      "success": "Đã lưu cài đặt thành công"
    }
  },
  "nav.pluginMenuDemo": "Menu plugin (Bản demo)",
  "settings.server.manage.title": "Quản lý node",
  "settings.server.manage.description": "Quản lý tất cả các node, bao gồm thêm, xóa và chỉnh sửa.",
  "server.columns.loadStatus.metrics.api": "Trạng thái API",
  "server.columns.loadStatus.metrics.kernel": "Trạng thái kernel",
  "server.columns.loadStatus.metrics.gc": "Tạm dừng GC",
  "server.columns.loadStatus.metrics.limit": "Người dùng bị giới hạn tỷ lệ",
  "server.columns.loadStatus.metrics.ws": "WebSocket",
  "server.columns.loadStatus.metrics.goroutines": "Số goroutine đồng thời",
  "server.columns.loadStatus.metrics.load": "Tải hệ thống",
  "server.columns.loadStatus.metrics.users": "Người dùng trực tuyến",
  "server.form.listen_address.label": "Địa chỉ lắng nghe",
  "server.form.listen_address.placeholder": "Để trống cho giá trị mặc định (0.0.0.0) hoặc nhập 127.0.0.1, ::1, v.v.",
  "server.form.listen_address.description": "Chỉ định địa chỉ IP mà máy chủ lắng nghe. Để trống để mặc định (0.0.0.0) nghe trên tất cả các giao diện. Bạn có thể đặt 127.0.0.1 để chỉ truy cập cục bộ hoặc một địa chỉ IP cụ thể.",
  "server.form.listen_address.show": "Hiển thị địa chỉ nghe",
  "server.form.listen_address.hide": "Ẩn địa chỉ nghe",
  "server.form.listen_address.optional": "Không bắt buộc",
  "server.dynamic_form.cert_config.tab": "Chứng chỉ TLS",
  "server.dynamic_form.cert_config.cert_mode.label": "Chế độ chứng chỉ",
  "server.dynamic_form.cert_config.cert_mode.description": "Chọn cách lấy chứng chỉ; hỗ trợ phụ thuộc vào node phụ trợ.",
  "server.dynamic_form.cert_config.cert_mode.none_desc": "Cấu hình chứng chỉ TLS bị tắt",
  "server.dynamic_form.cert_config.domain.label": "Miền chứng chỉ",
  "server.dynamic_form.cert_config.email.label": "Email thông báo",
  "server.dynamic_form.cert_config.http_port.label": "Cổng thử thách",
  "server.dynamic_form.cert_config.http_port.description": "Cổng thử thách ACME (mặc định 80)",
  "server.dynamic_form.cert_config.dns_provider.label": "Nhà cung cấp DNS",
  "server.dynamic_form.cert_config.dns_provider.doc_link": "Xem hướng dẫn cấu hình nhà cung cấp DNS",
  "server.dynamic_form.cert_config.dns_env.label": "Biến môi trường (Khóa API)",
  "server.dynamic_form.cert_config.dns_env.description_short": "Một mục nhập KEY=VALUE trên mỗi dòng",
  "server.dynamic_form.cert_config.cert_content.label": "Nội dung chứng chỉ (Khóa công khai)",
  "server.dynamic_form.cert_config.key_content.label": "Nội dung chính (Khóa riêng)",
  "server.network_settings.edit_padding_scheme": "Chỉnh sửa lược đồ đệm",
  "server.network_settings.validation.must_be_array": "Cấu hình phải là một mảng JSON",
  "sidebar.pluginManagement": "Quản lý plugin"
};

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
