/**
 * Lab 02 (Chủ đề 10): Cách xác định kết nối với Internet
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab02 = window.AGY_LABS[2] = function (env) {
    const {
      Activity,
      AnimatePresence,
      ArrowLeft,
      ArrowLeftRight,
      ArrowRight,
      ArrowUpDown,
      Award,
      Binary,
      BookOpen,
      Bug,
      Cable,
      Calculator,
      Camera,
      Car,
      ChartBar,
      ChartColumn,
      ChartPie,
      ChartScatter,
      Check,
      ChevronDown,
      ChevronRight,
      ChevronUp,
      CircleAlert,
      CircleCheck,
      CircleCheckBig,
      CircleQuestionMark,
      CircleX,
      Cloud,
      CloudDownload,
      CloudRain,
      CloudUpload,
      Code,
      Coins,
      Compass,
      Contrast,
      Cookie,
      Copy,
      CornerUpRight,
      Cpu,
      CreditCard,
      Crop,
      Crown,
      Database,
      Delete,
      DollarSign,
      Download,
      Droplets,
      Eraser,
      Eye,
      EyeOff,
      FileCode,
      FileText,
      FileWarning,
      Film,
      Flag,
      Flame,
      Folder,
      FolderLock,
      FolderOpen,
      FolderTree,
      Gamepad2,
      Gavel,
      GitCommitHorizontal,
      Globe,
      HardDrive,
      Hash,
      Headphones,
      HeartHandshake,
      House,
      Image,
      Info,
      Key,
      KeyRound,
      Keyboard,
      Laptop,
      Layers,
      LayoutGrid,
      Lightbulb,
      LoaderCircle,
      Lock,
      LockOpen,
      Mail,
      MapPin,
      Megaphone,
      MessageCircle,
      MessageSquare,
      Mic,
      MicOff,
      Minus,
      Monitor,
      MousePointer,
      Move,
      Music,
      Network,
      Palette,
      PanelsTopLeft,
      Paperclip,
      Pause,
      PenTool,
      Phone,
      PhoneCall,
      PhoneOff,
      Play,
      Plus,
      Power,
      Printer,
      Radio,
      React,
      RefreshCw,
      Reply,
      ReplyAll,
      Rocket,
      RotateCcw,
      RotateCw,
      Scale,
      Scissors,
      Search,
      Send,
      Server,
      Settings,
      Shield,
      ShieldAlert,
      ShieldCheck,
      ShoppingBag,
      ShoppingCart,
      Skull,
      SlidersVertical,
      Smartphone,
      Sparkles,
      Star,
      Sun,
      Table,
      Tablet,
      Target,
      Terminal,
      ThumbsDown,
      ThumbsUp,
      Trash2,
      TrendingDown,
      TrendingUp,
      TriangleAlert,
      Trophy,
      Truck,
      Tv,
      Undo2,
      Usb,
      User,
      UserCheck,
      UserX,
      Users,
      Utensils,
      Video,
      VideoOff,
      Volume2,
      VolumeX,
      WandSparkles,
      Wifi,
      WifiOff,
      Wrench,
      X,
      Zap,
      ZoomIn,
      jsxRuntimeExports,
      motion,
      reactExports,
    } = env;

    function Activity3({ networkState: a, setNetworkState: n, onSuccess: i }) {
      const [l, c] = reactExports.useState(1),
        [d, m] = reactExports.useState({
          1: "not_run",
          2: "not_run",
          3: "not_run",
          4: "not_run",
          5: "not_run",
          6: "not_run",
        }),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(!1),
        N = u && p && b,
        [M, y] = reactExports.useState([]),
        [I, R] = reactExports.useState(!1),
        [z, A] = reactExports.useState(!1),
        [O, L] = reactExports.useState(!1),
        [le, P] = reactExports.useState([]),
        [G, ee] = reactExports.useState(!1),
        [ce, V] = reactExports.useState(null),
        [pe, Ie] = reactExports.useState([]),
        [se, de] = reactExports.useState(!1),
        [_, U] = reactExports.useState([]),
        [Z, be] = reactExports.useState("ping"),
        [he, E] = reactExports.useState(0),
        [v, K] = reactExports.useState("default"),
        [te, je] = reactExports.useState(!1),
        [Se, He] = reactExports.useState([]),
        [Xe, Qe] = reactExports.useState("idle"),
        [qe, at] = reactExports.useState([
          "trojan.network.hijack",
          "worm.dns.redirect",
          "adware.bandwidth.drain",
        ]),
        [ze, De] = reactExports.useState(!1),
        [tt, it] = reactExports.useState(0);
      reactExports.useEffect(() => {
        qe.length === 0 &&
          a === "issue" &&
          (n("fixed"),
          g(!0),
          f(!0),
          k(!0),
          m({
            1: "success",
            2: "success",
            3: "success",
            4: "success",
            5: "success",
            6: "success",
          }),
          A(!0),
          L(!0),
          K("changed"),
          Qe("connected"),
          y([
            "Microsoft Windows [Version 10.0.22000]",
            "(c) Microsoft Corporation. All rights reserved.",
            "",
            "C:\\Users\\HocSinhLop7> ipconfig",
            "",
            "Windows IP Configuration",
            "",
            "Ethernet adapter Ethernet0:",
            "   Connection-specific DNS Suffix  . : home.gateway",
            "   Link-local IPv6 Address . . . . . : fe80::d4a8:643f:23a1:112%4",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.20",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "",
            "✅ KIỂM TRA THÀNH CÔNG: Đã nhận địa chỉ IP hợp lệ 192.168.1.20 và Default Gateway 192.168.1.1 thông suốt!",
          ]),
          P([
            "C:\\Users\\HocSinhLop7> ping google.com",
            "",
            "Pinging google.com [142.250.190.46] with 32 bytes of data:",
            "Reply from 142.250.190.46: bytes=32 time=12ms TTL=118",
            "Reply from 142.250.190.46: bytes=32 time=11ms TTL=118",
            "Reply from 142.250.190.46: bytes=32 time=10ms TTL=118",
            "Reply from 142.250.190.46: bytes=32 time=14ms TTL=118",
            "",
            "Ping statistics for 142.250.190.46:",
            "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
            "Approximate round trip times in milli-seconds:",
            "    Minimum = 10ms, Maximum = 14ms, Average = 11ms",
            "✅ KIỂM TRA THÀNH CÔNG: Ping google.com hoạt động tốt! Thời gian phản hồi 11ms cực nhanh.",
          ]),
          V(!0),
          U([
            "C:\\Users\\HocSinhLop7> tracert google.com",
            "",
            "Tracing route to google.com [142.250.190.46] over a maximum of 30 hops:",
            " 1     1 ms     1 ms     1 ms  192.168.1.1 (Router Home Gateway)",
            " 2     4 ms     5 ms     4 ms  10.20.0.1 (ISP Gateway)",
            " 3    11 ms    12 ms    11 ms  113.173.2.45 (VNPT Core Router)",
            " 4    14 ms    15 ms    14 ms  209.85.121.32 (Google Edge Gateway)",
            " 5    13 ms    13 ms    14 ms  google.com [142.250.190.46]",
            "",
            "Trace complete.",
            "✅ KIỂM TRA THÀNH CÔNG: Gói tin đã truyền qua 5 trạm mạng an toàn và thông suốt!",
          ]),
          E(5),
          He([
            "C:\\Users\\HocSinhLop7> nslookup google.com",
            "Server:  dns.google",
            "Address:  8.8.8.8",
            "",
            "Non-authoritative answer:",
            "Name:    google.com",
            "Addresses:  142.250.190.46",
            "",
            "✅ KIỂM TRA THÀNH CÔNG: nslookup trả về địa chỉ IP chính xác của Google thông qua máy chủ an toàn 8.8.8.8!",
          ]),
          i());
      }, [qe]);
      const oe = () => {
          m(
            N
              ? (w) => ({ ...w, 1: "success" })
              : (w) => ({ ...w, 1: "failed" }),
          );
        },
        ie = () => {
          (R(!0), y([]), A(!0), L(!1));
          const w = (C, Ee) => {
            setTimeout(() => {
              y((ke) => [...ke, C]);
            }, Ee);
          };
          (w("Microsoft Windows [Version 10.0.22000]", 200),
            w("(c) Microsoft Corporation. All rights reserved.", 400),
            w("", 550),
            w("C:\\Users\\HocSinhLop7> ipconfig", 700),
            w("", 800),
            w("Windows IP Configuration", 1e3),
            w("", 1150),
            setTimeout(() => {
              (N
                ? a === "issue"
                  ? (w("Ethernet adapter Ethernet0:", 0),
                    w("   Connection-specific DNS Suffix  . :", 200),
                    w(
                      "   Link-local IPv6 Address . . . . . : fe80::d4a8:643f:23a1:112%4",
                      400,
                    ),
                    w(
                      "   IPv4 Address. . . . . . . . . . . : 169.254.12.83 (APIPA)",
                      600,
                    ),
                    w(
                      "   Subnet Mask . . . . . . . . . . . : 255.255.0.0",
                      800,
                    ),
                    w("   Default Gateway . . . . . . . . . : ", 1e3),
                    w("", 1100),
                    w(
                      "❌ CẢNH BÁO KIỂM TRA THẤT BẠI: Không nhận được IPv4 từ Router!",
                      1200,
                    ),
                    w(
                      "Máy tính chỉ nhận địa chỉ tự gán APIPA (169.254.12.83) do lỗi cấu hình DHCP tự động.",
                      1300,
                    ),
                    w(
                      "Hãy chạy lệnh 'ipconfig /renew' bằng nút bên dưới để thử xin cấp lại IP xem sao nhé!",
                      1450,
                    ),
                    m((C) => ({ ...C, 2: "failed" })))
                  : (w("Ethernet adapter Ethernet0:", 0),
                    w(
                      "   Connection-specific DNS Suffix  . : home.gateway",
                      200,
                    ),
                    w(
                      "   Link-local IPv6 Address . . . . . : fe80::d4a8:643f:23a1:112%4",
                      400,
                    ),
                    w(
                      "   IPv4 Address. . . . . . . . . . . : 192.168.1.20",
                      600,
                    ),
                    w(
                      "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
                      800,
                    ),
                    w(
                      "   Default Gateway . . . . . . . . . : 192.168.1.1",
                      1e3,
                    ),
                    w("", 1100),
                    w(
                      "✅ KIỂM TRA THÀNH CÔNG: Đã nhận địa chỉ IP hợp lệ 192.168.1.20 và Default Gateway 192.168.1.1 thông suốt!",
                      1200,
                    ),
                    m((C) => ({ ...C, 2: "success" })))
                : (w("Ethernet adapter Ethernet0:", 0),
                  w("   Connection-specific DNS Suffix  . :", 200),
                  w(
                    "   Media State . . . . . . . . . . . : Media disconnected",
                    400,
                  ),
                  w(
                    "   IPv4 Address. . . . . . . . . . . : 169.254.12.83 (APIPA)",
                    600,
                  ),
                  w("   Subnet Mask . . . . . . . . . . . : 255.255.0.0", 800),
                  w("   Default Gateway . . . . . . . . . : ", 1e3),
                  w("", 1100),
                  w(
                    "❌ CẢNH BÁO KIỂM TRA THẤT BẠI: Media disconnected (Cáp bị tuột)!",
                    1200,
                  ),
                  w(
                    "Máy tính CHƯA kết nối vật lý với Router. Hãy kiểm tra lại ở Bước 1 nhé!",
                    1350,
                  ),
                  m((C) => ({ ...C, 2: "failed" }))),
                R(!1));
            }, 1500));
        },
        ge = () => {
          (R(!0), y([]), L(!0));
          const w = (C, Ee) => {
            setTimeout(() => {
              y((ke) => [...ke, C]);
            }, Ee);
          };
          (w("Microsoft Windows [Version 10.0.22000]", 200),
            w("(c) Microsoft Corporation. All rights reserved.", 400),
            w("", 550),
            w("C:\\Users\\HocSinhLop7> ipconfig /renew", 700),
            w("", 800),
            w(
              "Đang gửi yêu cầu xin cấp lại địa chỉ IP tới DHCP Server...",
              1e3,
            ),
            w("", 1150),
            setTimeout(() => {
              (N
                ? a === "issue"
                  ? (w(
                      "An error occurred while renewing interface Ethernet0 : DHCP request timed out.",
                      0,
                    ),
                    w("No IP address was assigned by the Router.", 200),
                    w("", 350),
                    w("Ethernet adapter Ethernet0:", 450),
                    w("   Connection-specific DNS Suffix  . :", 600),
                    w(
                      "   Link-local IPv6 Address . . . . . : fe80::d4a8:643f:23a1:112%4",
                      750,
                    ),
                    w(
                      "   IPv4 Address. . . . . . . . . . . : 169.254.12.83 (APIPA)",
                      900,
                    ),
                    w(
                      "   Subnet Mask . . . . . . . . . . . : 255.255.0.0",
                      1050,
                    ),
                    w("   Default Gateway . . . . . . . . . : ", 1200),
                    w("", 1300),
                    w(
                      "❌ LỖI GIAO THỨC DHCP: Router không phản hồi yêu cầu xin cấp lại IP (Timeout)!",
                      1400,
                    ),
                    w(
                      "Máy tính vẫn bị giữ ở dải IP tự gán lỗi 169.254.12.83 và không nhận được địa chỉ IPv4 thực.",
                      1550,
                    ),
                    w(
                      "Hãy chuyển sang Bước 3 để sử dụng công cụ Ping và Tracert để xem đường mạng bị đứt/nghẽn ở đâu nhé!",
                      1700,
                    ),
                    m((C) => ({ ...C, 2: "failed" })))
                  : (w("Ethernet adapter Ethernet0:", 0),
                    w(
                      "   Connection-specific DNS Suffix  . : home.gateway",
                      200,
                    ),
                    w(
                      "   Link-local IPv6 Address . . . . . : fe80::d4a8:643f:23a1:112%4",
                      400,
                    ),
                    w(
                      "   IPv4 Address. . . . . . . . . . . : 192.168.1.20",
                      600,
                    ),
                    w(
                      "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
                      800,
                    ),
                    w(
                      "   Default Gateway . . . . . . . . . : 192.168.1.1",
                      1e3,
                    ),
                    w("", 1100),
                    w(
                      "✅ THÀNH CÔNG: Đã xin cấp lại và nhận địa chỉ IP hợp lệ 192.168.1.20 từ DHCP Server!",
                      1200,
                    ),
                    m((C) => ({ ...C, 2: "success" })))
                : (w("Ethernet adapter Ethernet0:", 0),
                  w("   Connection-specific DNS Suffix  . :", 200),
                  w(
                    "   Media State . . . . . . . . . . . : Media disconnected",
                    400,
                  ),
                  w(
                    "   IPv4 Address. . . . . . . . . . . : 169.254.12.83 (APIPA)",
                    600,
                  ),
                  w("   Subnet Mask . . . . . . . . . . . : 255.255.0.0", 800),
                  w("   Default Gateway . . . . . . . . . : ", 1e3),
                  w("", 1100),
                  w("❌ CẢNH BÁO: Media disconnected (Cáp bị tuột)!", 1200),
                  w(
                    "Không thể xin cấp IP mới vì thiết bị chưa kết nối vật lý với Router.",
                    1350,
                  ),
                  m((C) => ({ ...C, 2: "failed" }))),
                R(!1));
            }, 1500));
        },
        ae = () => {
          (ee(!0), P([]), V(null), Ie([]));
          const w = (C, Ee) => {
            setTimeout(() => {
              P((ke) => [...ke, C]);
            }, Ee);
          };
          (w("C:\\Users\\HocSinhLop7> ping google.com", 200),
            w("", 300),
            w(
              "Pinging google.com [142.250.190.46] with 32 bytes of data:",
              500,
            ),
            setTimeout(() => {
              N
                ? a === "issue"
                  ? (Ie([1, 2, 3, 4]),
                    w("Request timed out.", 400),
                    w("Request timed out.", 800),
                    w("Request timed out.", 1200),
                    w("Request timed out.", 1600),
                    setTimeout(() => {
                      (w("", 100),
                        w("Ping statistics for 142.250.190.46:", 200),
                        w(
                          "    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)",
                          300,
                        ),
                        w(
                          "❌ KIỂM TRA THẤT BẠI: Gói tin bị mất 100%. Không có phản hồi từ máy chủ Google.",
                          450,
                        ),
                        w(
                          "Đường truyền mạng ngoài bị chặn hoặc ngắt. Chuyển sang bước tiếp theo!",
                          550,
                        ),
                        V(!1),
                        ee(!1),
                        m((C) => ({ ...C, 3: "failed" })));
                    }, 1800))
                  : (Ie([1, 2, 3, 4]),
                    w(
                      "Reply from 142.250.190.46: bytes=32 time=12ms TTL=118",
                      400,
                    ),
                    w(
                      "Reply from 142.250.190.46: bytes=32 time=11ms TTL=118",
                      800,
                    ),
                    w(
                      "Reply from 142.250.190.46: bytes=32 time=10ms TTL=118",
                      1200,
                    ),
                    w(
                      "Reply from 142.250.190.46: bytes=32 time=14ms TTL=118",
                      1600,
                    ),
                    setTimeout(() => {
                      (w("", 100),
                        w("Ping statistics for 142.250.190.46:", 200),
                        w(
                          "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
                          300,
                        ),
                        w(
                          "Approximate round trip times in milli-seconds:",
                          400,
                        ),
                        w(
                          "    Minimum = 10ms, Maximum = 14ms, Average = 11ms",
                          500,
                        ),
                        w(
                          "✅ KIỂM TRA THÀNH CÔNG: Ping google.com hoạt động tốt! Thời gian phản hồi 11ms cực nhanh.",
                          600,
                        ),
                        V(!0),
                        ee(!1),
                        m((C) => ({ ...C, 3: "success" })));
                    }, 1800))
                : (w(
                    "Ping request could not find host google.com. Please check the connection and try again.",
                    300,
                  ),
                  V(!1),
                  ee(!1),
                  m((C) => ({ ...C, 3: "failed" })));
            }, 1e3));
        },
        Ae = () => {
          (de(!0), U([]), E(0));
          const w = (C, Ee) => {
            setTimeout(() => {
              U((ke) => [...ke, C]);
            }, Ee);
          };
          (w("C:\\Users\\HocSinhLop7> tracert google.com", 200),
            w("", 300),
            w(
              "Tracing route to google.com [142.250.190.46] over a maximum of 30 hops:",
              500,
            ),
            setTimeout(() => {
              N
                ? a === "issue"
                  ? (setTimeout(() => E(1), 300),
                    w(
                      " 1     1 ms     1 ms     1 ms  192.168.1.1 (Router Home Gateway)",
                      400,
                    ),
                    setTimeout(() => {
                      (w(
                        " 2     *        *        *     Request timed out.",
                        400,
                      ),
                        w(
                          " 3     *        *        *     Request timed out.",
                          800,
                        ),
                        w("", 900),
                        w(
                          "❌ KIỂM TRA THẤT BẠI: Tuyến đường bị đứt quãng ngay sau Router (Hops 2+ bị quá thời gian).",
                          1100,
                        ),
                        w(
                          "Dữ liệu truyền ra ngoài Internet bị mã độc cấu hình Proxy ảo chặn lại.",
                          1300,
                        ),
                        de(!1),
                        m((C) => ({ ...C, 3: "failed" })));
                    }, 900))
                  : (setTimeout(() => E(1), 300),
                    w(
                      " 1     1 ms     1 ms     1 ms  192.168.1.1 (Router Home Gateway)",
                      400,
                    ),
                    setTimeout(() => {
                      (E(2),
                        w(
                          " 2     4 ms     5 ms     4 ms  10.20.0.1 (ISP Gateway)",
                          0,
                        ));
                    }, 800),
                    setTimeout(() => {
                      (E(3),
                        w(
                          " 3    11 ms    12 ms    11 ms  113.173.2.45 (VNPT Core Router)",
                          0,
                        ));
                    }, 1500),
                    setTimeout(() => {
                      (E(4),
                        w(
                          " 4    14 ms    15 ms    14 ms  209.85.121.32 (Google Edge Gateway)",
                          0,
                        ));
                    }, 2200),
                    setTimeout(() => {
                      (E(5),
                        w(
                          " 5    13 ms    13 ms    14 ms  google.com [142.250.190.46]",
                          0,
                        ),
                        w("", 100),
                        w("Trace complete.", 200),
                        w(
                          "✅ KIỂM TRA THÀNH CÔNG: Gói tin đã truyền qua 5 trạm mạng an toàn và thông suốt!",
                          300,
                        ),
                        de(!1),
                        m((C) => ({ ...C, 3: "success" })));
                    }, 2900))
                : (w(" 1     *        *        *     Request timed out.", 300),
                  w("", 450),
                  w(
                    "❌ KIỂM TRA THẤT BẠI: Tracert bị chặn ngay từ cổng mạng đầu tiên.",
                    600,
                  ),
                  w(
                    "Lỗi: Máy tính chưa cắm cáp vật lý đến Router (Media disconnected).",
                    800,
                  ),
                  de(!1),
                  m((C) => ({ ...C, 3: "failed" })));
            }, 1e3));
        },
        Q = () => {
          (je(!0), He([]));
          const w = (C, Ee) => {
            setTimeout(() => {
              He((ke) => [...ke, C]);
            }, Ee);
          };
          (w("C:\\Users\\HocSinhLop7> nslookup google.com", 150),
            setTimeout(() => {
              N
                ? v === "default"
                  ? (w("Server:  dns-infected-proxy.local", 100),
                    w("Address:  192.168.1.1", 200),
                    w("", 300),
                    w("Name:    google.com", 450),
                    w("Address:  0.0.0.0", 550),
                    w("", 650),
                    w(
                      "⚠ CẢNH BÁO: Phát hiện địa chỉ google.com bị điều hướng về IP rác 0.0.0.0 (Mã độc giả mạo DNS)!",
                      750,
                    ),
                    w(
                      "Khuyến nghị: Thay đổi cài đặt DNS sang tĩnh 8.8.8.8 ở bảng thuộc tính bên dưới.",
                      850,
                    ),
                    je(!1),
                    m((C) => ({ ...C, 4: "failed" })))
                  : a === "issue"
                    ? (w("Server:  dns.google", 100),
                      w("Address:  8.8.8.8", 200),
                      w("", 300),
                      w(
                        "*** dns.google can't find google.com: Server failed",
                        450,
                      ),
                      w("", 550),
                      w(
                        "⚠ CẢNH BÁO: Đã đổi cấu hình DNS sang 8.8.8.8 nhưng truy vấn vẫn bị mã độc ngầm chặn chiếm quyền mạng!",
                        650,
                      ),
                      w(
                        "Hãy tiếp tục đi tới Bước 5 và 6 để tiến hành diệt mã độc nhé!",
                        750,
                      ),
                      je(!1),
                      m((C) => ({ ...C, 4: "failed" })))
                    : (w("Server:  dns.google", 100),
                      w("Address:  8.8.8.8", 200),
                      w("", 300),
                      w("Non-authoritative answer:", 400),
                      w("Name:    google.com", 500),
                      w("Addresses:  142.250.190.46", 600),
                      w("", 700),
                      w(
                        "✅ KIỂM TRA THÀNH CÔNG: nslookup trả về địa chỉ IP chính xác của Google thông qua máy chủ an toàn 8.8.8.8!",
                        800,
                      ),
                      je(!1),
                      m((C) => ({ ...C, 4: "success" })))
                : (w("Server:  UnKnown", 100),
                  w("Address:  192.168.1.1", 200),
                  w("", 300),
                  w(
                    "*** UnKnown can't find google.com: Network unreachable",
                    400,
                  ),
                  w(
                    "❌ LỖI TRUY VẤN: Không thể kết nối tới máy chủ DNS do chưa cắm mạng!",
                    550,
                  ),
                  je(!1),
                  m((C) => ({ ...C, 4: "failed" })));
            }, 1200));
        },
        Te = () => {
          (K("changed"),
            a === "issue"
              ? (alert(`Em đã thiết lập đổi DNS sang Google DNS (8.8.8.8) thành công!

Tuy nhiên hiện tại máy tính đang bị nhiễm mã độc nguy hiểm ở Bước 6 ngầm chiếm quyền và bóp méo mạng, do đó truy vấn mạng vẫn bị chuyển hướng thất bại. Hãy tiếp tục đi tới Bước 5 và 6 để tiêu diệt mã độc triệt để nhé!`),
                m((w) => ({ ...w, 4: "failed" })))
              : (alert(
                  "Cấu hình DNS Google (8.8.8.8) hoạt động tuyệt vời và an toàn!",
                ),
                m((w) => ({ ...w, 4: "success" }))));
        },
        $e = () => {
          (Qe("calling"),
            setTimeout(() => {
              (Qe("connected"), m((w) => ({ ...w, 5: "success" })));
            }, 1800));
        },
        _e = () => {
          (De(!0), it(0));
        };
      reactExports.useEffect(() => {
        if (!ze) return;
        const w = setInterval(() => {
          it((C) =>
            C >= 100
              ? (clearInterval(w),
                De(!1),
                at([]),
                m((Ee) => ({ ...Ee, 6: "success" })),
                100)
              : C + 5,
          );
        }, 100);
        return () => clearInterval(w);
      }, [ze]);
      const Ue = [
          {
            name: "Thiết bị PC",
            ip: "192.168.1.20",
            label: "Máy tính học sinh",
          },
          { name: "Router Nhà", ip: "192.168.1.1", label: "Default Gateway" },
          { name: "Cổng Nhà Mạng", ip: "10.20.0.1", label: "ISP Server" },
          { name: "Trạm VNPT", ip: "113.173.2.45", label: "Core Transit" },
          { name: "Google Edge", ip: "209.85.121.32", label: "Edge Router" },
          {
            name: "Google Server",
            ip: "142.250.190.46",
            label: "Đích google.com",
          },
        ],
        Ke = (w) =>
          w === 1
            ? N
              ? "success"
              : d[1] === "failed"
                ? "failed"
                : "not_run"
            : w === 6
              ? a === "fixed"
                ? "success"
                : d[6] === "failed"
                  ? "failed"
                  : "not_run"
              : d[w],
        ot = [
          { id: 1, title: "Bước 1: Kiểm tra phần cứng", icon: Wrench },
          { id: 2, title: "Bước 2: Sử dụng ipconfig", icon: Terminal },
          { id: 3, title: "Bước 3: Sử dụng Ping hay Tracert", icon: Activity },
          { id: 4, title: "Bước 4: Kiểm tra DNS", icon: Server },
          { id: 5, title: "Bước 5: Liên hệ ISP", icon: PhoneCall },
          { id: 6, title: "Bước 6: Quét mã độc hại", icon: Bug },
        ];
      return jsxRuntimeExports.jsxs("section", {
        id: "activity-3",
        className:
          "scroll-mt-6 rounded-3xl bg-white p-5 sm:p-6 shadow-md border-2 border-slate-200 dark:bg-slate-850 dark:border-slate-800 transition-all duration-300",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "border-b-2 border-slate-200 pb-4 mb-6 dark:border-slate-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className: "flex items-center gap-2",
                    children: jsxRuntimeExports.jsx("h3", {
                      className:
                        "text-xl font-extrabold text-slate-900 dark:text-white",
                      children:
                        "Hoạt Động: Cách xác định kết nối với Internet",
                    }),
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "mt-1 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300",
                    children:
                      "Duyệt qua 6 bước để trực tiếp thực hiện, mô phỏng các công cụ và lệnh thực tế để giải quyết sự cố mất mạng.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex items-center gap-2 rounded-3xl bg-slate-100 p-8 sm:p-5 border-2 border-slate-350 dark:bg-slate-900 dark:border-slate-800 shrink-0",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-300",
                    children: "Trạng thái mạng:",
                  }),
                  a === "issue"
                    ? jsxRuntimeExports.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 rounded-3xl bg-rose-100 border border-rose-400 px-2.5 py-1 text-sm sm:text-base font-medium font-black text-rose-800 dark:bg-rose-950/20 dark:border-rose-900 dark:text-rose-400",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "h-2.5 w-2.5 rounded-full bg-rose-600 animate-pulse",
                          }),
                          "Đang mất kết nối",
                        ],
                      })
                    : jsxRuntimeExports.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 rounded-3xl bg-emerald-100 border border-emerald-400 px-2.5 py-1 text-sm sm:text-base font-medium font-black text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-900 dark:text-emerald-400",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse",
                          }),
                          "Đã khắc phục hoàn toàn",
                        ],
                      }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "lab-grid-layout grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 items-start w-full box-border",
            children: [
              jsxRuntimeExports.jsx("div", {
                className: "w-full min-w-0 flex flex-col gap-2.5",
                children: ot.map((w) => {
                  const C = w.icon,
                    Ee = l === w.id,
                    ke = Ke(w.id);
                  return jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => c(w.id),
                      className: `step-card allow-wrap w-full box-border px-3.5 py-3 min-h-[56px] text-left rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${Ee ? "active bg-blue-600 text-white border-blue-600 shadow-md scale-[1.01]" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2.5 min-w-0 flex-1",
                          children: [
                            C &&
                              jsxRuntimeExports.jsx("div", {
                                className: `p-2 rounded-xl shrink-0 ${Ee ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"}`,
                                children: jsxRuntimeExports.jsx(C, {
                                  className: "h-4 w-4",
                                }),
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "min-w-0 flex-1 pr-1",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className: `block font-black text-xs sm:text-sm leading-snug break-words ${Ee ? "text-white" : "text-slate-800 dark:text-white"}`,
                                  children: w.title,
                                }),
                                "desc" in w && w.desc
                                  ? jsxRuntimeExports.jsx("span", {
                                      className: `text-[11px] font-medium block mt-0.5 leading-tight ${Ee ? "text-white/90" : "text-slate-500"}`,
                                      children: w.desc,
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2 shrink-0 ml-2",
                          children: [
                            ke === "success" &&
                              jsxRuntimeExports.jsx("span", {
                                className: `flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${Ee ? "bg-white text-blue-700" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"}`,
                                title: "Kiểm tra thành công",
                                children: jsxRuntimeExports.jsx(Check, {
                                  className: "h-3.5 w-3.5 stroke-[3]",
                                }),
                              }),
                            ke === "failed" &&
                              jsxRuntimeExports.jsx("span", {
                                className: `flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${Ee ? "bg-white text-rose-700" : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"}`,
                                title: "Kiểm tra thất bại",
                                children: jsxRuntimeExports.jsx(X, {
                                  className: "h-3.5 w-3.5 stroke-[3]",
                                }),
                              }),
                            jsxRuntimeExports.jsxs("span", {
                              className: `text-xs font-mono font-black px-2.5 py-1 rounded-full ${Ee ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                              children: ["#0", w.id],
                            }),
                          ],
                        }),
                      ],
                    },
                    w.id,
                  );
                }),
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "w-full min-w-0 rounded-3xl bg-slate-50 p-5 sm:p-6 border-2 border-slate-200 dark:bg-slate-900/40 dark:border-slate-800 min-h-[440px] flex flex-col justify-between",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex-1",
                    children: [
                      l === 1 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "PHÒNG LAB VẬT LÝ",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children:
                                    "Kiểm tra kết nối vật lý và thiết bị",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2",
                                  children:
                                    "Nhiều lúc mất mạng chỉ vì những lý do rất đơn giản như ổ cắm lỏng, Router bị sập nguồn hoặc vô tình tắt card WiFi. Hãy thử kiểm tra 3 thiết bị sau:",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl bg-amber-100 border-2 border-amber-300 p-5 sm:p-6 text-slate-950 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-100 flex gap-3 text-left",
                              children: [
                                jsxRuntimeExports.jsx(Info, {
                                  className:
                                    "h-5 w-5 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("h5", {
                                      className:
                                        "font-extrabold text-sm sm:text-base font-medium text-amber-900 dark:text-amber-300",
                                      children: "Tình huống thực tế:",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium mt-1 font-bold leading-relaxed",
                                      children: [
                                        '"Bạn Lan đột nhiên không thể truy cập Internet để nộp bài tập. Lan tưởng máy tính hỏng nặng, nhưng hóa ra khi dọn dẹp phòng, Lan đã vô tình kéo làm ',
                                        jsxRuntimeExports.jsx("strong", {
                                          className:
                                            "text-rose-700 dark:text-rose-400 underline",
                                          children: "tuột dây cáp mạng LAN",
                                        }),
                                        ' khỏi cổng sau máy tính."',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 sm:grid-cols-3 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-5 sm:p-6 rounded-3xl border-2 transition-all flex flex-col justify-between min-h-[220px] h-auto space-y-4 pb-4 ${u ? "bg-white border-emerald-500 dark:bg-slate-850 shadow-sm" : "bg-rose-50/50 border-rose-300 dark:border-rose-950 dark:bg-rose-950/10"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx(Wifi, {
                                          className: `h-6 w-6 ${u ? "text-emerald-600" : "text-rose-600"}`,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: `h-2.5 w-2.5 rounded-full ${u ? "bg-emerald-500" : "bg-rose-500"}`,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("h5", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase",
                                          children: "1. Nguồn Router",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 mt-1",
                                          children: u
                                            ? "Đèn Router sáng (ON)"
                                            : "Router chưa bật nguồn",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (g(!u),
                                          m((w) => ({ ...w, 1: "not_run" })));
                                      },
                                      className: `w-full py-3 rounded-3xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${u ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" : "bg-rose-600 text-white hover:bg-rose-700 shadow-sm"}`,
                                      children: u ? "Tắt Router" : "Bật Router",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-5 sm:p-6 rounded-3xl border-2 transition-all flex flex-col justify-between min-h-[220px] h-auto space-y-4 pb-4 ${p ? "bg-white border-emerald-500 dark:bg-slate-850 shadow-sm" : "bg-rose-50/50 border-rose-300 dark:border-rose-950 dark:bg-rose-950/10"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx(Network, {
                                          className: `h-6 w-6 ${p ? "text-emerald-600" : "text-rose-600"}`,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: `h-2.5 w-2.5 rounded-full ${p ? "bg-emerald-500" : "bg-rose-500"}`,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("h5", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase",
                                          children: "2. Dây cáp LAN",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 mt-1",
                                          children: p
                                            ? "Cáp LAN đã cắm chặt"
                                            : "Cáp LAN bị tuột ra ngoài",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (f(!p),
                                          m((w) => ({ ...w, 1: "not_run" })));
                                      },
                                      className: `w-full py-3 rounded-3xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${p ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" : "bg-rose-600 text-white hover:bg-rose-700 shadow-sm"}`,
                                      children: p
                                        ? "Rút dây cáp"
                                        : "Cắm dây cáp",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-5 sm:p-6 rounded-3xl border-2 transition-all flex flex-col justify-between min-h-[220px] h-auto space-y-4 pb-4 ${b ? "bg-white border-emerald-500 dark:bg-slate-850 shadow-sm" : "bg-rose-50/50 border-rose-300 dark:border-rose-950 dark:bg-rose-950/10"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx(Laptop, {
                                          className: `h-6 w-6 ${b ? "text-emerald-600" : "text-rose-600"}`,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: `h-2.5 w-2.5 rounded-full ${b ? "bg-emerald-500" : "bg-rose-500"}`,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("h5", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase",
                                          children: "3. WiFi trên PC",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 mt-1",
                                          children: b
                                            ? "Card WiFi đang Mở"
                                            : "Card WiFi đang Tắt",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (k(!b),
                                          m((w) => ({ ...w, 1: "not_run" })));
                                      },
                                      className: `w-full py-3 rounded-3xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${b ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" : "bg-rose-600 text-white hover:bg-rose-700 shadow-sm"}`,
                                      children: b ? "Tắt WiFi" : "Bật WiFi",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-200/60 p-5 sm:p-6 rounded-3xl dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: oe,
                                  className:
                                    "flex items-center gap-2 rounded-3xl bg-slate-950 text-white font-extrabold px-5 py-3 hover:bg-slate-800 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md",
                                  children: [
                                    jsxRuntimeExports.jsx(Play, {
                                      className:
                                        "h-4 w-4 text-emerald-400 fill-emerald-400",
                                    }),
                                    " Chạy Chẩn Đoán Phần Cứng",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex-1 text-center sm:text-right",
                                  children: [
                                    Ke(1) === "success" &&
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-extrabold text-emerald-700 dark:text-emerald-400 flex items-center justify-end gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Check, {
                                            className: "h-5 w-5 stroke-[3]",
                                          }),
                                          " Phần cứng đã thông suốt 100%!",
                                        ],
                                      }),
                                    Ke(1) === "failed" &&
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-extrabold text-rose-700 dark:text-rose-400 flex items-center justify-end gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(X, {
                                            className: "h-5 w-5 stroke-[3]",
                                          }),
                                          " Thất bại: Hãy cắm cáp, bật nguồn Router và card WiFi!",
                                        ],
                                      }),
                                    Ke(1) === "not_run" &&
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children:
                                          "Nhấp nút để thực hiện đo kiểm phần cứng.",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            Ke(1) === "failed" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-rose-50 border-2 border-rose-300 p-5 sm:p-6 dark:bg-rose-950/20 dark:border-rose-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-950 dark:text-rose-300 leading-relaxed",
                                    children: [
                                      "💡 Mặc dù kiểm tra phần cứng ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Thất bại",
                                      }),
                                      ", em có muốn chuyển sang Bước 2 để học cách xem cấu hình IP mạng không?",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(2),
                                    className:
                                      "text-sm sm:text-base font-medium bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Tiếp tục sang Bước 2 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Ke(1) === "success" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 dark:bg-emerald-950/20 dark:border-emerald-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-950 dark:text-emerald-300 leading-relaxed",
                                    children:
                                      "🎉 Kết nối phần cứng tốt! Bây giờ hãy tiến hành xem cấu hình IP mạng tại Bước 2.",
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(2),
                                    className:
                                      "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Đi tới Bước 2 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      l === 2 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "LỆNH HỆ THỐNG",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children: "Sử dụng công cụ ipconfig",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2 text-left",
                                  children: [
                                    "Lệnh ",
                                    jsxRuntimeExports.jsx("code", {
                                      className:
                                        "rounded border border-slate-300 bg-slate-200 px-1.5 py-0.5 text-sm sm:text-base font-medium font-mono font-bold text-pink-700 dark:bg-slate-800 dark:border-slate-700",
                                      children: "ipconfig",
                                    }),
                                    " hiển thị thông số mạng của máy tính, đặc biệt là ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "địa chỉ IP (IPv4)",
                                    }),
                                    " và ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "Cổng mặc định (Default Gateway - IP của Router)",
                                    }),
                                    ".",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl bg-black p-5 sm:p-6 font-mono text-sm sm:text-base font-medium text-emerald-400 border-2 border-slate-700 shadow-2xl overflow-hidden min-h-[240px]",
                              style: { backgroundColor: "#0c0f17", color: "#f8fafc", borderColor: "#334155" },
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between border-b border-emerald-900 pb-2 mb-3 text-emerald-600",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-3 w-3 rounded-full bg-rose-600",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-3 w-3 rounded-full bg-amber-500",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-3 w-3 rounded-full bg-emerald-500",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold tracking-widest uppercase font-extrabold text-emerald-500",
                                      children:
                                        "Command Prompt (Administrator)",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "w-10",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "space-y-1.5 h-44 overflow-y-auto leading-relaxed text-left",
                                  children:
                                    M.length === 0
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex flex-col items-center justify-center h-full text-emerald-700 py-6",
                                          children: [
                                            jsxRuntimeExports.jsx(Terminal, {
                                              className:
                                                "h-8 w-8 mb-2 animate-pulse",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className: "font-extrabold",
                                              style: { color: "#34d399" },
                                              children:
                                                "Nhấp vào nút bên dưới để thực thi lệnh 'ipconfig'",
                                            }),
                                          ],
                                        })
                                      : M.map((w, C) =>
                                          jsxRuntimeExports.jsx(
                                            "p",
                                            {
                                              className:
                                                "whitespace-pre-wrap font-bold",
                                              style: { color: "#f8fafc" },
                                              children: w,
                                            },
                                            C,
                                          ),
                                        ),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-wrap items-center gap-3",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: ie,
                                      disabled: I,
                                      className:
                                        "flex items-center gap-2 rounded-3xl bg-slate-950 text-white font-extrabold px-5 py-3 hover:bg-slate-800 disabled:opacity-50 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md",
                                      children:
                                        I && !O
                                          ? jsxRuntimeExports.jsxs(
                                              jsxRuntimeExports.Fragment,
                                              {
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    LoaderCircle,
                                                    {
                                                      className:
                                                        "h-4 w-4 animate-spin text-emerald-400",
                                                    },
                                                  ),
                                                  " Đang chạy...",
                                                ],
                                              },
                                            )
                                          : jsxRuntimeExports.jsxs(
                                              jsxRuntimeExports.Fragment,
                                              {
                                                children: [
                                                  jsxRuntimeExports.jsx(Play, {
                                                    className:
                                                      "h-4 w-4 text-emerald-400 fill-emerald-400",
                                                  }),
                                                  " Chạy lệnh ipconfig",
                                                ],
                                              },
                                            ),
                                    }),
                                    z &&
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: ge,
                                        disabled: I,
                                        className: `flex items-center gap-2 rounded-3xl font-extrabold px-5 py-3 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md ${O ? "bg-slate-850 hover:bg-slate-800 text-emerald-400 border border-emerald-500" : "bg-amber-600 hover:bg-amber-700 text-white animate-pulse"}`,
                                        children:
                                          I && O
                                            ? jsxRuntimeExports.jsxs(
                                                jsxRuntimeExports.Fragment,
                                                {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      LoaderCircle,
                                                      {
                                                        className:
                                                          "h-4 w-4 animate-spin text-amber-400",
                                                      },
                                                    ),
                                                    " Đang xin cấp IP...",
                                                  ],
                                                },
                                              )
                                            : jsxRuntimeExports.jsxs(
                                                jsxRuntimeExports.Fragment,
                                                {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      RefreshCw,
                                                      {
                                                        className: `h-4 w-4 ${O ? "" : "animate-spin"}`,
                                                      },
                                                    ),
                                                    " Chạy lệnh ipconfig /renew",
                                                  ],
                                                },
                                              ),
                                      }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-350 max-w-[340px] text-left",
                                  children: [
                                    "💡 ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "Cổng mặc định (Default Gateway)",
                                    }),
                                    " là cửa ngõ chính giúp dữ liệu truyền qua Router để truy cập Internet toàn cầu.",
                                  ],
                                }),
                              ],
                            }),
                            !z &&
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "rounded-3xl bg-blue-50 border-2 border-blue-200 p-5 sm:p-6 dark:bg-blue-950/20 dark:border-blue-900/30 text-left",
                                children: jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-bold text-blue-950 dark:text-blue-300 leading-relaxed",
                                  children: [
                                    "💡 ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Hướng dẫn:",
                                    }),
                                    " Nhấp nút ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: '"Chạy lệnh ipconfig"',
                                    }),
                                    " để kiểm tra cấu hình địa chỉ IP hiện tại của máy tính nhé.",
                                  ],
                                }),
                              }),
                            z &&
                              !N &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-rose-50 border-2 border-rose-300 p-5 sm:p-6 dark:bg-rose-950/20 dark:border-rose-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-950 dark:text-rose-300 leading-relaxed",
                                    children: [
                                      "💡 Cáp mạng đang bị tuột! Thiết bị báo ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Media disconnected",
                                      }),
                                      " nên không thể nhận IP. Hãy quay lại ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Bước 1",
                                      }),
                                      " để cắm cáp trước nhé!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(1),
                                    className:
                                      "text-sm sm:text-base font-medium bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Quay lại Bước 1 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            z &&
                              N &&
                              a === "issue" &&
                              !O &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-amber-50 border-2 border-amber-300 p-5 sm:p-6 dark:bg-amber-950/20 dark:border-amber-900/30 flex flex-col gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-bold text-amber-950 dark:text-amber-300 leading-relaxed",
                                    children: [
                                      "⚠️ ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Phát hiện lỗi DHCP:",
                                      }),
                                      " Máy tính không nhận được địa chỉ IPv4 hợp lệ từ Router mà đang tự gán IP cục bộ dạng APIPA (169.254.12.83).",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-bold text-amber-900 dark:text-amber-400",
                                    children: [
                                      "👉 Hãy nhấp nút ",
                                      jsxRuntimeExports.jsx("strong", {
                                        className: "underline",
                                        children: '"Chạy lệnh ipconfig /renew"',
                                      }),
                                      " màu cam ở trên để thử gửi yêu cầu xin cấp lại IP hợp lệ từ Router.",
                                    ],
                                  }),
                                ],
                              }),
                            z &&
                              N &&
                              a === "issue" &&
                              O &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-rose-50 border-2 border-rose-300 p-5 sm:p-6 dark:bg-rose-950/20 dark:border-rose-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-950 dark:text-rose-300 leading-relaxed",
                                    children: [
                                      "💡 Mặc dù đã dùng lệnh ",
                                      jsxRuntimeExports.jsx("code", {
                                        children: "ipconfig /renew",
                                      }),
                                      " nhưng Router vẫn báo lỗi ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children:
                                          "Request timed out (Lỗi DHCP)",
                                      }),
                                      ". Sự cố có thể do mã độc hoặc đường mạng ngoại vi. Hãy chuyển sang ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Bước 3 (Ping & Tracert)",
                                      }),
                                      " để dò lỗi nhé!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(3),
                                    className:
                                      "text-sm sm:text-base font-medium bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Tiếp tục sang Bước 3 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Ke(2) === "success" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 dark:bg-emerald-950/20 dark:border-emerald-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-950 dark:text-emerald-300 leading-relaxed",
                                    children:
                                      "🎉 Thành Công! Máy tính đã nhận được địa chỉ IP hợp lệ từ Router (192.168.1.20) và Default Gateway kết nối thông suốt!",
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(3),
                                    className:
                                      "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Đi tới Bước 3 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      l === 3 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "ĐƯỜNG TRUYỀN MẠNG WAN",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children: "Sử dụng lệnh Ping & Tracert",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2 text-left",
                                  children: [
                                    "Lệnh ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Ping",
                                    }),
                                    " gửi gói tin nhỏ tới máy chủ (google.com) để kiểm tra độ phản hồi. Lệnh ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Tracert",
                                    }),
                                    " dò tìm đường truyền đi qua từng thiết bị trung gian (hops) để phát hiện vị trí nghẽn hoặc đứt mạng ngoại vi.",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex border-b-2 border-slate-200 dark:border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => be("ping"),
                                  className: `py-3 px-5 sm:px-6 text-sm sm:text-base font-medium font-black border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${Z === "ping" ? "border-blue-700 text-blue-700 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-slate-700 hover:text-slate-950 dark:text-slate-400"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Activity, {
                                      className: "h-4 w-4",
                                    }),
                                    " Lệnh PING",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => be("tracert"),
                                  className: `py-3 px-5 sm:px-6 text-sm sm:text-base font-medium font-black border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${Z === "tracert" ? "border-blue-700 text-blue-700 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-slate-700 hover:text-slate-950 dark:text-slate-400"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Terminal, {
                                      className: "h-4 w-4",
                                    }),
                                    " Lệnh TRACERT (Dò đường)",
                                  ],
                                }),
                              ],
                            }),
                            Z === "ping" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 dark:bg-slate-850 dark:border-slate-700",
                                    children: jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between gap-4 py-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex flex-col items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "h-10 w-10 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-700 dark:bg-blue-900/30 shadow-sm border border-blue-200",
                                              children: jsxRuntimeExports.jsx(
                                                Laptop,
                                                { className: "h-5 w-5" },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-300 mt-1",
                                              children: "Máy tính",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 relative h-6 bg-slate-200 rounded-full dark:bg-slate-900 flex items-center overflow-hidden",
                                          children: [
                                            G &&
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "absolute inset-y-0 left-0 bg-linear-to-r from-blue-500 to-indigo-500 animate-pulse w-full opacity-30",
                                              }),
                                            pe.map((w, C) =>
                                              jsxRuntimeExports.jsx(
                                                "div",
                                                {
                                                  className: `absolute h-3 w-3 rounded-full ${Ke(3) === "success" ? "bg-emerald-500 shadow-md animate-ping-success" : "bg-rose-500 shadow-md animate-ping-fail"}`,
                                                  style: {
                                                    animationDelay: `${C * 0.4}s`,
                                                    animationDuration: "1.6s",
                                                    animationIterationCount:
                                                      "infinite",
                                                  },
                                                },
                                                C,
                                              ),
                                            ),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex flex-col items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `h-10 w-10 rounded-3xl flex items-center justify-center border ${Ke(3) === "success" ? "bg-emerald-100 border-emerald-300 text-emerald-700" : "bg-rose-100 border-rose-300 text-rose-700"}`,
                                              children: jsxRuntimeExports.jsx(
                                                Server,
                                                { className: "h-5 w-5" },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-300 mt-1",
                                              children: "google.com",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "rounded-3xl bg-black p-8 sm:p-5 font-mono text-sm sm:text-base font-medium text-slate-100 border-2 border-slate-700 min-h-[160px] max-h-[200px] overflow-y-auto leading-normal text-left",
                                    style: { backgroundColor: "#0c0f17", color: "#f8fafc", borderColor: "#334155" },
                                    children:
                                      le.length === 0
                                        ? jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-emerald-400 text-center py-8 font-bold",
                                            style: { color: "#34d399" },
                                            children:
                                              "Chưa có kết quả. Nhấp 'ping google.com' ở dưới để kiểm tra.",
                                          })
                                        : le.map((w, C) =>
                                            jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "whitespace-pre-wrap font-bold",
                                                style: { color: "#f8fafc" },
                                                children: w,
                                              },
                                              C,
                                            ),
                                          ),
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: ae,
                                    disabled: G,
                                    className:
                                      "flex items-center gap-2 rounded-3xl bg-slate-950 text-white font-extrabold px-5 py-3 hover:bg-slate-800 disabled:opacity-50 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md",
                                    children: G
                                      ? jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                LoaderCircle,
                                                {
                                                  className:
                                                    "h-4 w-4 animate-spin text-emerald-400",
                                                },
                                              ),
                                              " Đang gửi gói tin...",
                                            ],
                                          },
                                        )
                                      : jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(Play, {
                                                className:
                                                  "h-4 w-4 text-emerald-400 fill-emerald-400",
                                              }),
                                              " ping google.com",
                                            ],
                                          },
                                        ),
                                  }),
                                ],
                              }),
                            Z === "tracert" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 dark:bg-slate-850 dark:border-slate-700",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-slate-800 dark:text-slate-300 uppercase tracking-widest block mb-3 text-left",
                                        children: "Định tuyến gói tin (Hops):",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "flex flex-wrap md:flex-nowrap items-center justify-between gap-2",
                                        children: Ue.map((w, C) => {
                                          const Ee = C + 1;
                                          let ke = "idle";
                                          if (se)
                                            Ee <= he
                                              ? (ke = "success")
                                              : Ee === he + 1 &&
                                                (ke = "active");
                                          else {
                                            const We = Ke(3);
                                            We === "success"
                                              ? (ke = "success")
                                              : We === "failed" &&
                                                (!N && Ee === 1
                                                  ? (ke = "failed")
                                                  : N &&
                                                      a === "issue" &&
                                                      Ee === 2
                                                    ? (ke = "success")
                                                    : N &&
                                                        a === "issue" &&
                                                        Ee === 3
                                                      ? (ke = "failed")
                                                      : ((N &&
                                                          a === "issue" &&
                                                          Ee > 3) ||
                                                          (!N && Ee > 1)) &&
                                                        (ke = "idle"));
                                          }
                                          return jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center flex-1 min-w-[90px] md:min-w-0",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex flex-col items-center w-full",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className: `h-8 w-8 rounded-full flex items-center justify-center text-sm sm:text-base font-medium font-black transition-all duration-300 ${ke === "success" ? "bg-emerald-100 text-emerald-800 border-2 border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-300" : ke === "failed" ? "bg-rose-100 text-rose-800 border-2 border-rose-500 dark:bg-rose-950/40 dark:text-rose-300 animate-pulse" : ke === "active" ? "bg-blue-100 text-blue-800 border-2 border-blue-500 dark:bg-blue-950/40 dark:text-blue-300 animate-ping-success" : "bg-slate-200 text-slate-700 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-700"}`,
                                                        children: Ee,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-extrabold mt-1 text-slate-900 dark:text-slate-200 truncate w-full text-center",
                                                        children: w.name,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black text-slate-800 dark:text-slate-400 font-mono",
                                                        children: w.ip,
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                C < Ue.length - 1 &&
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "hidden md:block flex-1 h-[2px] bg-slate-300 dark:bg-slate-700 mx-1",
                                                    children:
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className: `h-full transition-all duration-300 ${ke === "success" ? "bg-emerald-500 w-full" : "bg-transparent"}`,
                                                        },
                                                      ),
                                                  }),
                                              ],
                                            },
                                            C,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "rounded-3xl bg-black p-8 sm:p-5 font-mono text-sm sm:text-base font-medium text-slate-100 border-2 border-slate-700 min-h-[160px] max-h-[200px] overflow-y-auto leading-normal text-left",
                                    style: { backgroundColor: "#0c0f17", color: "#f8fafc", borderColor: "#334155" },
                                    children:
                                      _.length === 0
                                        ? jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-emerald-400 text-center py-8 font-bold",
                                            style: { color: "#34d399" },
                                            children:
                                              "Chưa có kết quả. Nhấp 'tracert google.com' ở dưới để kiểm tra.",
                                          })
                                        : _.map((w, C) =>
                                            jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "whitespace-pre-wrap font-bold",
                                                style: { color: "#f8fafc" },
                                                children: w,
                                              },
                                              C,
                                            ),
                                          ),
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: Ae,
                                    disabled: se,
                                    className:
                                      "flex items-center gap-2 rounded-3xl bg-slate-950 text-white font-extrabold px-5 py-3 hover:bg-slate-800 disabled:opacity-50 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md",
                                    children: se
                                      ? jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                LoaderCircle,
                                                {
                                                  className:
                                                    "h-4 w-4 animate-spin text-emerald-400",
                                                },
                                              ),
                                              " Đang quét tuyến đường...",
                                            ],
                                          },
                                        )
                                      : jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(Play, {
                                                className:
                                                  "h-4 w-4 text-emerald-400 fill-emerald-400",
                                              }),
                                              " tracert google.com",
                                            ],
                                          },
                                        ),
                                  }),
                                ],
                              }),
                            Ke(3) === "failed" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-rose-50 border-2 border-rose-300 p-5 sm:p-6 dark:bg-rose-950/20 dark:border-rose-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-950 dark:text-rose-300 leading-relaxed",
                                    children: [
                                      "💡 Cả Ping và Tracert đều báo ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Thất bại",
                                      }),
                                      " đứt kết nối mạng WAN ngoài Router. Hãy sang Bước 4 để kiểm tra Hệ thống phân giải tên miền (DNS) bằng lệnh nslookup!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(4),
                                    className:
                                      "text-sm sm:text-base font-medium bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Tiếp tục sang Bước 4 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Ke(3) === "success" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 dark:bg-emerald-950/20 dark:border-emerald-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-950 dark:text-emerald-300 leading-relaxed",
                                    children:
                                      "🎉 Tuyệt vời! Cả Ping và Tracert đều báo kết nối mạng WAN hoạt động thông suốt 100%!",
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(4),
                                    className:
                                      "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Đi tới Bước 4 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      l === 4 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "PHÂN GIẢI TÊN MIỀN",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children:
                                    "Kiểm tra và cấu hình DNS bằng nslookup",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2 text-left",
                                  children: [
                                    "DNS (Domain Name System) hoạt động như cuốn danh bạ, giúp chuyển đổi các địa chỉ tên miền dạng chữ (như ",
                                    jsxRuntimeExports.jsx("code", {
                                      className:
                                        "rounded border border-slate-300 bg-slate-200 px-1 dark:bg-slate-800 dark:border-slate-700 font-mono font-bold text-pink-700",
                                      children: "google.com",
                                    }),
                                    ") thành địa chỉ IP dạng số (như ",
                                    jsxRuntimeExports.jsx("code", {
                                      className:
                                        "rounded border border-slate-300 bg-slate-200 px-1 dark:bg-slate-800 dark:border-slate-700 font-mono font-bold text-indigo-700",
                                      children: "142.250.190.46",
                                    }),
                                    ") để máy tính hiểu được. Lệnh chẩn đoán DNS chuyên nghiệp là ",
                                    jsxRuntimeExports.jsx("code", {
                                      className:
                                        "rounded border border-slate-300 bg-slate-200 px-1 dark:bg-slate-800 dark:border-slate-700 font-mono font-bold text-indigo-700",
                                      children: "nslookup",
                                    }),
                                    ".",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl border-2 border-indigo-300 bg-linear-to-b from-indigo-50/75 to-white p-5 sm:p-6 dark:from-slate-800/40 dark:to-slate-855 dark:border-indigo-900 shadow-md space-y-4 text-left",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 border-b border-indigo-200 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-medium",
                                      children: "⚙️",
                                    }),
                                    jsxRuntimeExports.jsx("h5", {
                                      className:
                                        "text-sm sm:text-base font-medium font-black text-indigo-950 dark:text-indigo-300 uppercase tracking-wide",
                                      children:
                                        "Bảng Thuộc Tính Cấu Hình Mạng (IPv4 Properties Settings)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200",
                                  children:
                                    "Chọn phương thức thiết lập Máy chủ phân giải tên miền (DNS Server):",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3 pl-1",
                                  children: [
                                    jsxRuntimeExports.jsxs("label", {
                                      className:
                                        "flex items-start gap-2.5 cursor-pointer select-none",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: "radio",
                                          name: "dns_config_radio",
                                          checked: v === "default",
                                          onChange: () => {
                                            (K("default"),
                                              m((w) => ({
                                                ...w,
                                                4: "not_run",
                                              })));
                                          },
                                          className:
                                            "mt-1 h-4.5 w-4.5 text-blue-700 border-slate-400 focus:ring-blue-600",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 block",
                                              children:
                                                "Obtain DNS server address automatically (Nhận DNS tự động từ Router)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-semibold block mt-0.5 leading-relaxed",
                                              children:
                                                "Hệ thống sẽ lấy DNS của nhà mạng hoặc Router nội bộ. Hiện tại đang bị mã độc bóp méo hướng về máy chủ giả mạo.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("label", {
                                      className:
                                        "flex items-start gap-2.5 cursor-pointer select-none",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: "radio",
                                          name: "dns_config_radio",
                                          checked: v === "changed",
                                          onChange: Te,
                                          className:
                                            "mt-1 h-4.5 w-4.5 text-blue-700 border-slate-400 focus:ring-blue-600",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-extrabold text-blue-800 dark:text-blue-400 block",
                                              children:
                                                "Use the following DNS server addresses (Sử dụng máy chủ DNS tĩnh của Google)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-semibold block mt-0.5 leading-relaxed",
                                              children:
                                                "Chỉ định máy chủ DNS cực kỳ an toàn của Google để chống các phần mềm độc hại ngầm chuyển hướng trang web.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `ml-7 pr-3 py-3 rounded-3xl border-2 transition-all space-y-2 text-left ${v === "changed" ? "bg-blue-50/50 border-blue-300 dark:bg-blue-950/20 dark:border-blue-900" : "bg-slate-100/50 border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 opacity-65"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-4",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-300 w-36 shrink-0",
                                          children: "Preferred DNS (Chính):",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 font-mono text-sm sm:text-base font-medium font-black text-slate-900 dark:text-slate-100",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-400 font-black ml-2",
                                              children: "Google Server",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-4",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-300 w-36 shrink-0",
                                          children: "Alternate DNS (Dự phòng):",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 font-mono text-sm sm:text-base font-medium font-black text-slate-900 dark:text-slate-100",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "8",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "4",
                                            }),
                                            " .",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-white border border-slate-400 rounded-md dark:bg-slate-800 dark:border-slate-600",
                                              children: "4",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-bold ml-2",
                                              children: "Alternate",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Se.length > 0 &&
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "rounded-3xl bg-black p-8 sm:p-5 font-mono text-sm sm:text-base font-medium text-slate-100 border-2 border-slate-700 min-h-[140px] text-left",
                                style: { backgroundColor: "#0c0f17", color: "#f8fafc", borderColor: "#334155" },
                                children: Se.map((w, C) =>
                                  jsxRuntimeExports.jsx(
                                    "p",
                                    {
                                      className: "font-bold",
                                      style: { color: "#f8fafc" },
                                      children: w,
                                    },
                                    C,
                                  ),
                                ),
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex flex-wrap items-center gap-3",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: Q,
                                  disabled: te,
                                  className:
                                    "flex items-center gap-2 rounded-3xl bg-slate-950 text-white font-extrabold px-5 py-3 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all text-sm sm:text-base font-medium shadow-md",
                                  children: te
                                    ? jsxRuntimeExports.jsx(LoaderCircle, {
                                        className:
                                          "h-4 w-4 animate-spin text-emerald-400",
                                      })
                                    : "Chạy lệnh nslookup google.com",
                                }),
                                v !== "changed" &&
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: Te,
                                    className:
                                      "flex items-center gap-2 rounded-3xl bg-indigo-700 text-white font-bold px-5 py-3 hover:bg-indigo-800 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all text-sm sm:text-base font-medium shadow-md",
                                    children: [
                                      jsxRuntimeExports.jsx(RefreshCw, {
                                        className: "h-4 w-4",
                                      }),
                                      " Đổi cấu hình sang DNS Google (8.8.8.8)",
                                    ],
                                  }),
                              ],
                            }),
                            Ke(4) === "failed" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-rose-50 border-2 border-rose-300 p-5 sm:p-6 dark:bg-rose-950/20 dark:border-rose-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-950 dark:text-rose-300 leading-relaxed",
                                    children: [
                                      "💡 Đổi DNS tĩnh Google báo ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Thất bại",
                                      }),
                                      " do bị mã độc ngầm chặn chiếm quyền mạng. Hãy tiếp tục qua Bước 5 để liên hệ nhà cung cấp mạng (ISP) đo từ xa hỗ trợ nhé!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(5),
                                    className:
                                      "text-sm sm:text-base font-medium bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Tiếp tục sang Bước 5 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Ke(4) === "success" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 dark:bg-emerald-950/20 dark:border-emerald-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-950 dark:text-emerald-300 leading-relaxed",
                                    children:
                                      "🎉 Tuyệt vời! Truy vấn tên miền qua nslookup đã phân giải chính xác google.com thành công!",
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(5),
                                    className:
                                      "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Đi tới Bước 5 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      l === 5 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "ĐƯỜNG TRUYỀN NGOẠI VI",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children:
                                    "Liên hệ nhà cung cấp dịch vụ Internet (ISP)",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2 text-left",
                                  children:
                                    "Nếu các bước kiểm tra trong nhà không giải quyết được, có thể đường dây cáp quang bên ngoài bị đứt hoặc lỗi tủ cáp quang đường phố. Cần gọi tổng đài đo kiểm mức suy hao từ xa.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 sm:grid-cols-3 gap-4 py-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 text-center dark:bg-slate-850 dark:border-slate-700 shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "mx-auto h-10 w-10 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-700 mb-2 dark:bg-amber-900/30 border border-amber-200",
                                      children: jsxRuntimeExports.jsx(Phone, {
                                        className: "h-5 w-5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("h5", {
                                      className:
                                        "font-extrabold text-sm sm:text-base font-medium text-slate-900 dark:text-white",
                                      children: "Tổng đài hỗ trợ",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-400 mt-1 leading-relaxed",
                                      children:
                                        "Đo kiểm mức độ suy hao tín hiệu quang từ xa.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 text-center dark:bg-slate-850 dark:border-slate-700 shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "mx-auto h-10 w-10 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-700 mb-2 dark:bg-blue-900/30 border border-blue-200",
                                      children: jsxRuntimeExports.jsx(
                                        UserCheck,
                                        { className: "h-5 w-5" },
                                      ),
                                    }),
                                    jsxRuntimeExports.jsx("h5", {
                                      className:
                                        "font-extrabold text-sm sm:text-base font-medium text-slate-900 dark:text-white",
                                      children: "Kỹ thuật viên",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-400 mt-1 leading-relaxed",
                                      children:
                                        "Hỗ trợ xử lý trực tiếp tại trạm hoặc tại nhà riêng.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-white p-5 sm:p-6 rounded-3xl border-2 border-slate-200 text-center dark:bg-slate-850 dark:border-slate-700 shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "mx-auto h-10 w-10 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-700 mb-2 dark:bg-emerald-900/30 border border-emerald-200",
                                      children: jsxRuntimeExports.jsx(Truck, {
                                        className: "h-5 w-5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("h5", {
                                      className:
                                        "font-extrabold text-sm sm:text-base font-medium text-slate-900 dark:text-white",
                                      children: "Khắc phục sự cố",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-400 mt-1 leading-relaxed",
                                      children:
                                        "Sửa chữa đứt cáp hoặc thay thiết bị hỏng quang trục.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Xe !== "idle" &&
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "rounded-3xl bg-amber-50 p-5 sm:p-6 border-2 border-amber-300 dark:bg-slate-900 dark:border-slate-800 text-left",
                                children:
                                  Xe === "calling"
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          jsxRuntimeExports.jsx(LoaderCircle, {
                                            className:
                                              "h-5 w-5 text-amber-700 animate-spin",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-amber-900 dark:text-amber-400 animate-pulse",
                                            children:
                                              "Đang quay số và kết nối tổng đài nhà mạng...",
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-medium font-black text-emerald-700 dark:text-emerald-400",
                                                children:
                                                  "● Tổng đài viên đã nhấc máy: VN098",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-500 font-bold",
                                                children: "Cuộc gọi kết nối",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-bold text-slate-950 dark:text-slate-200 leading-relaxed bg-white/60 p-8 sm:p-5 rounded-3xl border border-amber-200 dark:bg-slate-800/60 dark:border-slate-700",
                                            children: [
                                              '"Dạ tổng đài xin chào em! Hệ thống đo kiểm quang từ xa báo đường tín hiệu quang tới Router nhà em ',
                                              jsxRuntimeExports.jsx("strong", {
                                                className:
                                                  "text-emerald-700 dark:text-emerald-400",
                                                children:
                                                  "hoàn toàn tốt và ổn định",
                                              }),
                                              ". Tuy nhiên, hệ thống phát hiện máy tính em đang truyền gửi dữ liệu bất thường, nghi ngờ do ",
                                              jsxRuntimeExports.jsx("strong", {
                                                className:
                                                  "text-rose-700 dark:text-rose-400",
                                                children:
                                                  "mã độc, virus chiếm dụng Proxy mạng",
                                              }),
                                              '. Em vui lòng chạy quét virus ở Bước 6 nhé!"',
                                            ],
                                          }),
                                        ],
                                      }),
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: $e,
                                  disabled: Xe === "calling",
                                  className:
                                    "flex items-center gap-2 rounded-3xl bg-amber-600 text-white font-extrabold px-5 py-3 hover:bg-amber-700 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-sm",
                                  children: [
                                    jsxRuntimeExports.jsx(Phone, {
                                      className: "h-4 w-4 text-white",
                                    }),
                                    " Gọi Đo Kiểm Đường Truyền ISP",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-300",
                                  children:
                                    "💡 Gọi ISP giúp biết chính xác sự cố do đường truyền ngoài hay do thiết bị nội bộ của mình.",
                                }),
                              ],
                            }),
                            Ke(5) === "success" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl bg-emerald-50 border-2 border-emerald-300 p-5 sm:p-6 dark:bg-emerald-950/20 dark:border-emerald-900/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-left",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-950 dark:text-emerald-300 leading-relaxed",
                                    children:
                                      "🎉 Nhận được hướng dẫn hữu ích từ ISP! Đã xác định rõ mạng ngoài ổn định, sự cố do phần mềm mã độc cục bộ. Hãy diệt mã độc ở Bước 6.",
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => c(6),
                                    className:
                                      "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-3xl flex items-center gap-1 cursor-pointer transition-colors shrink-0 shadow-sm",
                                    children: [
                                      "Đi tới Bước 6 ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      l === 6 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider",
                                  children: "BẢO MẬT HỆ THỐNG",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-xl font-extrabold text-slate-900 dark:text-white mt-1",
                                  children:
                                    "Kiểm tra phần mềm độc hại (Malware)",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-300 mt-2 text-left",
                                  children:
                                    "Các phần mềm độc hại (Malware) ngấm ngầm thay đổi tệp tin hệ thống và dựng máy chủ Proxy giả để chuyển hướng lối ra Internet. Hãy tiến hành quét sâu để diệt sạch mã độc nguy hại.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl border-2 border-slate-300 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-850 shadow-sm",
                              children: [
                                jsxRuntimeExports.jsxs("h5", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-1.5 text-left dark:text-slate-200",
                                  children: [
                                    jsxRuntimeExports.jsx(Shield, {
                                      className: "h-4 w-4 text-rose-600",
                                    }),
                                    " Trung tâm bảo mật PC Defender",
                                  ],
                                }),
                                qe.length > 0
                                  ? jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-rose-50 border-2 border-rose-300 rounded-3xl flex items-center justify-between dark:bg-rose-950/20 dark:border-rose-900 text-left",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2.5",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "flex h-7 w-7 items-center justify-center bg-rose-100 text-rose-700 rounded-3xl animate-pulse dark:bg-rose-900/30",
                                                  children: "💀",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-extrabold text-rose-900 dark:text-rose-300 block",
                                                        children: [
                                                          "Phát hiện: ",
                                                          qe.length,
                                                          " tiến trình mã độc cực kỳ nguy hiểm!",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold text-rose-700 dark:text-rose-400 font-bold block",
                                                        children:
                                                          "Các tiến trình đang bóp méo luồng DNS và giả mạo Proxy mạng.",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black text-rose-800 px-2.5 py-1 bg-rose-100 border border-rose-300 rounded-md uppercase dark:bg-rose-900/40 shrink-0",
                                              children: "Nguy Hiểm",
                                            }),
                                          ],
                                        }),
                                        ze &&
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-2 text-left",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center text-sm sm:text-base font-medium",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-slate-900 font-black dark:text-slate-200",
                                                      children:
                                                        "Đang tiến hành diệt sâu mã độc mạng...",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-700 font-black dark:text-blue-400",
                                                      children: [tt, "%"],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-3.5 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-350",
                                                children: jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "h-full bg-blue-700 rounded-full transition-all duration-100",
                                                    style: { width: `${tt}%` },
                                                  },
                                                ),
                                              }),
                                            ],
                                          }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "flex flex-wrap gap-2 justify-start",
                                          children: qe.map((w) =>
                                            jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                className:
                                                  "px-2.5 py-1 text-sm sm:text-base font-medium font-mono font-black bg-slate-100 border border-slate-300 rounded-3xl dark:bg-slate-900 dark:border-slate-700 text-rose-700 dark:text-rose-400",
                                                children: w,
                                              },
                                              w,
                                            ),
                                          ),
                                        }),
                                      ],
                                    })
                                  : jsxRuntimeExports.jsxs("div", {
                                      className: "text-center py-6",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "mx-auto h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3 dark:bg-emerald-900/30 animate-bounce-subtle border border-emerald-300 shadow-sm",
                                          children: jsxRuntimeExports.jsx(
                                            ShieldCheck,
                                            { className: "h-7 w-7" },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-base font-extrabold text-emerald-800 dark:text-emerald-400",
                                          children: "Máy tính an toàn 100%!",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-300 mt-1",
                                          children:
                                            "Các tiến trình mã độc nguy hại đã bị tiêu diệt và dọn sạch hoàn toàn.",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "mt-4 p-5 sm:p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-900/30 text-emerald-950 dark:text-emerald-300 text-sm sm:text-base font-extrabold leading-relaxed text-left flex items-start gap-2.5 shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsx(Zap, {
                                              className:
                                                "h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5 fill-emerald-500",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-emerald-800 dark:text-emerald-400",
                                                  children:
                                                    "Nhiệm vụ cuối hoàn tất xuất sắc!",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "block font-bold mt-1 text-slate-900 dark:text-slate-200 leading-relaxed",
                                                  children: [
                                                    "Bây giờ em hãy nhấp quay lại các ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        className:
                                                          "text-indigo-700 dark:text-indigo-400",
                                                        children:
                                                          "Bước 2 (ipconfig), Bước 3 (Ping/Tracert), Bước 4 (nslookup)",
                                                      },
                                                    ),
                                                    " để chạy lại các lệnh đo kiểm. Chúng sẽ thành công rực rỡ và hiển thị biểu tượng lá cờ xanh lá hoàn thành nhiệm vụ!",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                            qe.length > 0 &&
                              jsxRuntimeExports.jsx("div", {
                                className: "flex justify-end",
                                children: jsxRuntimeExports.jsx("button", {
                                  onClick: _e,
                                  disabled: ze,
                                  className:
                                    "flex items-center gap-2 rounded-3xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold px-6 py-3 disabled:opacity-50 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all shadow-md",
                                  children: ze
                                    ? jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx(
                                              LoaderCircle,
                                              {
                                                className:
                                                  "h-4 w-4 animate-spin text-white",
                                              },
                                            ),
                                            " Đang dọn dẹp mã độc mạng...",
                                          ],
                                        },
                                      )
                                    : jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx(Bug, {
                                              className: "h-4 w-4 text-white",
                                            }),
                                            " Quét dọn & Tiêu Diệt Mã Độc",
                                          ],
                                        },
                                      ),
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "mt-6 border-t border-slate-200 pt-4 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-400",
                        children:
                          "Lab 10 - Cách xác định kết nối với Internet",
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          jsxRuntimeExports.jsx("button", {
                            disabled: l === 1,
                            onClick: () => c((w) => w - 1),
                            className:
                              "px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-750 disabled:opacity-40 cursor-pointer active:scale-95 hover:scale-103 transition-all transition-all",
                            children: "Trước đó",
                          }),
                          jsxRuntimeExports.jsx("button", {
                            disabled: l === 6,
                            onClick: () => c((w) => w + 1),
                            className:
                              "px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-750 disabled:opacity-40 cursor-pointer active:scale-95 hover:scale-103 transition-all transition-all",
                            children: "Tiếp theo",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsx("style", {
            children: `
        @keyframes ping-success {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          45% { left: 100%; opacity: 1; }
          55% { left: 100%; opacity: 1; }
          85% { opacity: 1; }
          100% { left: 0%; opacity: 0; }
        }
        @keyframes ping-fail {
          0% { left: 0%; opacity: 0; }
          15% { opacity: 1; }
          50% { left: 45%; opacity: 1; background-color: #ef4444; }
          55% { left: 45%; opacity: 0; }
          100% { left: 0%; opacity: 0; }
        }
        .animate-ping-success {
          animation: ping-success 2s infinite linear;
        }
        .animate-ping-fail {
          animation: ping-fail 2s infinite linear;
        }
      `,
          }),
        ],
      });
    }

    return Activity3;
  };
})();
