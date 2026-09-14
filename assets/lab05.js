/**
 * Lab 19: Nhận diện & Mô phỏng Mã độc
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab05 = window.AGY_LABS[5] = function (env) {
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

    const TERMS$2 = [
        {
          id: 1,
          name: "Trojan",
          icon: jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
          color: "from-amber-500 to-amber-600",
          desc: "Phần mềm ẩn mình dưới vỏ bọc một ứng dụng hữu ích để lừa cài đặt.",
          label: "Mô phỏng Trojan",
        },
        {
          id: 2,
          name: "Ransomware",
          icon: jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }),
          color: "from-red-500 to-rose-600",
          desc: "Mã hóa dữ liệu cá nhân của bạn và yêu cầu trả tiền chuộc.",
          label: "Mô phỏng Ransomware",
        },
        {
          id: 3,
          name: "Phishing",
          icon: jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
          color: "from-sky-500 to-indigo-500",
          desc: "Tấn công giả mạo (email/web) để lấy cắp thông tin đăng nhập/thẻ tín dụng.",
          label: "Mô phỏng Phishing",
        },
        {
          id: 4,
          name: "Spyware",
          icon: jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" }),
          color: "from-emerald-500 to-teal-500",
          desc: "Theo dõi ngầm hành động, chụp màn hình, ghi lại phím bấm của người dùng.",
          label: "Mô phỏng Spyware",
        },
        {
          id: 5,
          name: "Virus",
          icon: jsxRuntimeExports.jsx(Bug, { className: "h-5 w-5" }),
          color: "from-orange-500 to-red-500",
          desc: "Chương trình độc hại bám vào một tệp vật chủ khác để tự sao chép lây lan.",
          label: "Mô phỏng Virus",
        },
        {
          id: 6,
          name: "Malware",
          icon: jsxRuntimeExports.jsx(FileWarning, { className: "h-5 w-5" }),
          color: "from-slate-600 to-slate-800",
          desc: "Thuật ngữ rộng chỉ chung mọi loại phần mềm độc hại gây hại hệ thống.",
          label: "Mô phỏng Malware",
        },
        {
          id: 7,
          name: "Worm",
          icon: jsxRuntimeExports.jsx(Network, { className: "h-5 w-5" }),
          color: "from-purple-500 to-fuchsia-600",
          desc: "Sâu máy tính tự nhân bản và chủ động lan truyền siêu tốc qua mạng LAN/Internet.",
          label: "Mô phỏng Worm",
        },
        {
          id: 8,
          name: "Adware",
          icon: jsxRuntimeExports.jsx(Megaphone, { className: "h-5 w-5" }),
          color: "from-blue-400 to-cyan-500",
          desc: "Phần mềm quảng cáo tự động hiển thị hoặc tải các quảng cáo (pop-up, banner) không mong muốn.",
          label: "Mô phỏng Adware",
        },
      ],
      DEFINITIONS$2 = [
        {
          id: 1,
          text: "Phần mềm độc hại tự mô tả sai để có vẻ hữu ích, quen thuộc hoặc thú vị nhằm thuyết phục nạn nhân cài đặt phần mềm đó",
          correctTermId: 1,
        },
        {
          id: 2,
          text: "Khóa máy tính của bạn cho đến khi thu được một khoản tiền thanh toán",
          correctTermId: 2,
        },
        {
          id: 3,
          text: "Cố gắng đánh lừa ai đó chia sẻ thông tin nhạy cảm như mật khẩu và số thẻ tín dụng",
          correctTermId: 3,
        },
        {
          id: 4,
          text: "Được cài đặt trên máy tính mà chủ sở hữu không biết để thu thập thông tin cá nhân của chủ sở hữu",
          correctTermId: 4,
        },
        {
          id: 5,
          text: "Một chương trình máy tính độc hại tự tái tạo bằng cách sao chép chính nó sang một chương trình khác",
          correctTermId: 5,
        },
        {
          id: 6,
          text: "Một thuật ngữ rộng dùng để chỉ nhiều loại chương trình độc hại, chẳng hạn như adware, bots, bugs, rootkits, spyware, Trojan horses, viruses, và worms",
          correctTermId: 6,
        },
        {
          id: 7,
          text: "Một chương trình có thể tự sao chép và lây lan sang các máy tính khác",
          correctTermId: 7,
        },
        {
          id: 8,
          text: "Một loại chương trình độc hại tự động hiển thị hoặc tải quảng cáo trực tuyến không mong muốn lên máy tính của người dùng",
          correctTermId: 8,
        },
      ],
      getInitialVirusFiles = () => [
        {
          name: "games_crack_mien_phi.exe",
          size: "5.4 MB",
          infected: !1,
          hasVirus: !0,
          content:
            "0xEF99 [Chương trình lậu bẻ khóa game - NHẤP CHUỘT ĐỂ MỞ TỆP!]",
        },
        {
          name: "pdf_reader_pro_crack.exe",
          size: "8.2 MB",
          infected: !1,
          hasVirus: !0,
          content:
            "0xEF99 [Phần mềm chỉnh sửa PDF crack - NHẤP CHUỘT ĐỂ MỞ TỆP!]",
        },
        {
          name: "luong_nhan_vien.xlsx",
          size: "2.4 MB",
          infected: !1,
          content: "0x4D5A... [Bản tính lương nhân sự tháng 7]",
        },
        {
          name: "hop_dong_kinh_doanh.docx",
          size: "1.2 MB",
          infected: !1,
          content: "0x4D5A... [Kế hoạch kinh doanh 2026]",
        },
        {
          name: "bao_cao_tai_chinh_quy2.xlsx",
          size: "3.5 MB",
          infected: !1,
          content: "0x4D5A... [Báo cáo tài chính quý 2]",
        },
        {
          name: "ke_hoach_marketing.pptx",
          size: "8.7 MB",
          infected: !1,
          content: "0x4D5A... [Slide kế hoạch Marketing]",
        },
        {
          name: "co_so_du_lieu_khach_hang.sql",
          size: "15.4 MB",
          infected: !1,
          content: "0x4D5A... [CSDL thông tin mật khách hàng]",
        },
        {
          name: "ma_nguon_phan_mem.ts",
          size: "0.4 MB",
          infected: !1,
          content: "0x4D5A... [Source code cốt lõi của công ty]",
        },
        {
          name: "mat_khau_tai_khoan.txt",
          size: "0.1 MB",
          infected: !1,
          content: "0x4D5A... [Danh sách mật khẩu tài khoản hệ thống]",
        },
        {
          name: "hinh_anh_van_phong.jpg",
          size: "4.2 MB",
          infected: !1,
          content: "0x4D5A... [Hình ảnh nội bộ công ty]",
        },
      ];
    function Lab5({ onSuccess: a }) {
      var Bs, F, Be;
      const [n, i] = reactExports.useState("simulator"),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState(
          TERMS$2.map((S) => ({ termId: S.id, definition: null })),
        ),
        [u, g] = reactExports.useState(null),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState({}),
        [N, M] = reactExports.useState(!1),
        [y, I] = reactExports.useState(null),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState(6),
        [L, le] = reactExports.useState(!1),
        P = reactExports.useRef([]),
        G = (S, J) => {
          const pt = setTimeout(S, J);
          return (P.current.push({ id: pt, type: "timeout" }), pt);
        },
        ee = (S, J) => {
          const pt = setInterval(S, J);
          return (P.current.push({ id: pt, type: "interval" }), pt);
        },
        ce = () => {
          (P.current.forEach((S) => {
            S.type === "timeout" ? clearTimeout(S.id) : clearInterval(S.id);
          }),
            (P.current = []));
        };
      reactExports.useEffect(
        () => (
          a(),
          () => {
            ce();
          }
        ),
        [],
      );
      const [V, pe] = reactExports.useState(100),
        [Ie, se] = reactExports.useState([]),
        [de, _] = reactExports.useState("idle"),
        [U, Z] = reactExports.useState(0),
        [be, he] = reactExports.useState(getInitialVirusFiles()),
        [E, v] = reactExports.useState(!1),
        [K, te] = reactExports.useState([]),
        [je, Se] = reactExports.useState(null),
        [He, Xe] = reactExports.useState([
          {
            id: "node-A",
            name: "PC Kế toán (192.168.1.10)",
            infected: !0,
            os: "Windows 10",
            portOpen: "445",
          },
          {
            id: "node-B",
            name: "PC Thiết kế (192.168.1.12)",
            infected: !1,
            os: "Windows 11",
            portOpen: "445",
          },
          {
            id: "node-C",
            name: "Server Backup (192.168.1.50)",
            infected: !1,
            os: "Ubuntu Server",
            portOpen: "22",
          },
          {
            id: "node-D",
            name: "PC Giám đốc (192.168.1.2)",
            infected: !1,
            os: "Windows 10",
            portOpen: "445",
          },
        ]),
        [Qe, qe] = reactExports.useState([]),
        [at, ze] = reactExports.useState("catalog"),
        [De, tt] = reactExports.useState(0),
        [it, oe] = reactExports.useState(0),
        [ie, ge] = reactExports.useState(!1),
        [ae, Ae] = reactExports.useState(null),
        [Q, Te] = reactExports.useState([]),
        [$e, _e] = reactExports.useState([
          { name: "luan_van_tot_nghiep.docx", size: "1.8 MB", status: "safe" },
          { name: "hop_dong_kinh_doanh.pdf", size: "4.2 MB", status: "safe" },
          { name: "anh_gia_dinh_2026.jpg", size: "12.5 MB", status: "safe" },
          { name: "vi_tien_crypto.dat", size: "0.2 MB", status: "safe" },
        ]),
        [Ue, Ke] = reactExports.useState([
          { name: "PC Kế toán (192.168.1.10)", infected: !1 },
          { name: "Server Backup (192.168.1.50)", infected: !1 },
          { name: "PC Giám đốc (192.168.1.2)", infected: !1 },
        ]),
        [ot, w] = reactExports.useState("uninfected"),
        [C, Ee] = reactExports.useState(0),
        [ke, We] = reactExports.useState([
          { name: "luan_van_tot_nghiep.docx", status: "safe" },
          { name: "anh_gia_dinh_2026.jpg", status: "safe" },
          { name: "vi_tien_crypto.dat", status: "safe" },
          { name: "bao_cao_tai_chinh.xlsx", status: "safe" },
        ]),
        [ht, lt] = reactExports.useState(!0),
        [Fe, rt] = reactExports.useState(""),
        [yt, xt] = reactExports.useState("idle"),
        [ve, Ye] = reactExports.useState(""),
        [mt, Dt] = reactExports.useState(""),
        [ye, H] = reactExports.useState([]),
        [me, Le] = reactExports.useState(!1),
        [Pe, W] = reactExports.useState("inbox"),
        [Me, et] = reactExports.useState(""),
        [Je, Et] = reactExports.useState(""),
        [ft, Mt] = reactExports.useState(!1),
        [D, Re] = reactExports.useState(!1),
        [Ve, Ge] = reactExports.useState([]),
        [Ze, Nt] = reactExports.useState([]);
      reactExports.useEffect(() => {
        Kt();
      }, []);
      const Kt = () => {
          const S = [...DEFINITIONS$2].sort(() => Math.random() - 0.5);
          (c(S),
            m(TERMS$2.map((J) => ({ termId: J.id, definition: null }))),
            g(null),
            f(!1),
            k({}),
            M(!1));
        },
        It = () => {
          (ce(),
            le(!1),
            pe(100),
            se([]),
            _("idle"),
            Z(0),
            he(getInitialVirusFiles()),
            v(!1),
            te([]),
            Se(null),
            Xe([
              {
                id: "node-A",
                name: "PC Kế toán (192.168.1.10)",
                infected: !0,
                os: "Windows 10",
                portOpen: "445",
              },
              {
                id: "node-B",
                name: "PC Thiết kế (192.168.1.12)",
                infected: !1,
                os: "Windows 11",
                portOpen: "445",
              },
              {
                id: "node-C",
                name: "Server Backup (192.168.1.50)",
                infected: !1,
                os: "Ubuntu Server",
                portOpen: "22",
              },
              {
                id: "node-D",
                name: "PC Giám đốc (192.168.1.2)",
                infected: !1,
                os: "Windows 10",
                portOpen: "445",
              },
            ]),
            qe([]),
            ze("catalog"),
            tt(0),
            oe(0),
            ge(!1),
            Ae(null),
            Te([]),
            _e([
              {
                name: "luan_van_tot_nghiep.docx",
                size: "1.8 MB",
                status: "safe",
              },
              {
                name: "hop_dong_kinh_doanh.pdf",
                size: "4.2 MB",
                status: "safe",
              },
              {
                name: "anh_gia_dinh_2026.jpg",
                size: "12.5 MB",
                status: "safe",
              },
              { name: "vi_tien_crypto.dat", size: "0.2 MB", status: "safe" },
            ]),
            Ke([
              { name: "PC Kế toán (192.168.1.10)", infected: !1 },
              { name: "Server Backup (192.168.1.50)", infected: !1 },
              { name: "PC Giám đốc (192.168.1.2)", infected: !1 },
            ]),
            w("uninfected"),
            Ee(0),
            We([
              { name: "luan_van_tot_nghiep.docx", status: "safe" },
              { name: "anh_gia_dinh_2026.jpg", status: "safe" },
              { name: "vi_tien_crypto.dat", status: "safe" },
              { name: "bao_cao_tai_chinh.xlsx", status: "safe" },
            ]),
            rt(""),
            xt("idle"),
            Ye(""),
            Dt(""),
            H([]),
            Le(!1),
            W("inbox"),
            et(""),
            Et(""),
            Mt(!1),
            Re(!1),
            Ge([]),
            Nt([]));
        };
      reactExports.useEffect(() => {
        It();
      }, [A, n]);
      const wt = () => {
        (_("scanning"), Z(0));
      };
      reactExports.useEffect(() => {
        if (de === "scanning") {
          const S = setInterval(() => {
            Z((J) =>
              J >= 100 ? (clearInterval(S), _("cleaning"), 100) : J + 10,
            );
          }, 200);
          return () => clearInterval(S);
        } else if (de === "cleaning") {
          const S = setTimeout(() => {
            (pe(100),
              se([]),
              _("protected"),
              he(getInitialVirusFiles()),
              v(!1),
              Xe((J) =>
                J.map((pt) => ({ ...pt, infected: pt.id === "node-A" })),
              ),
              qe([]),
              ze("catalog"),
              ge(!1),
              w("uninfected"),
              We((J) => J.map((pt) => ({ ...pt, status: "safe" }))),
              rt(""),
              xt("idle"),
              H([]),
              Le(!1),
              Re(!1),
              Ge([]),
              Nt([]));
          }, 1500);
          return () => clearTimeout(S);
        }
      }, [de]);
      const Ls = (S) => {
          E ||
            (v(!0),
            Se(null),
            te([
              `🚀 [Khởi chạy] Người dùng chạy tệp tin chứa virus ẩn: "${S}"...`,
            ]),
            he((J) =>
              J.map((pt) =>
                pt.name === S
                  ? {
                      ...pt,
                      infected: !0,
                      content:
                        "⚡ [VIRUS KHỞI CHẠY] 0xEF99 - Đang kích hoạt mã độc ngầm...",
                    }
                  : pt,
              ),
            ),
            G(() => {
              te((J) => [
                ...J,
                "⚙️ [Can thiệp] Khởi chạy tiến trình can thiệp sâu vào kernel hệ thống...",
              ]);
            }, 600),
            G(() => {
              te((J) => [
                ...J,
                "⚠️ [Can thiệp] Vô hiệu hóa Windows Defender Real-time Protection thành công.",
              ]);
            }, 1200),
            G(() => {
              te((J) => [
                ...J,
                "🔎 [Tìm kiếm] Đang quét hệ thống để phát hiện các tệp tin nhạy cảm (.sql, .txt, .xlsx, .ts)...",
              ]);
            }, 1800),
            G(() => {
              const J = ee(() => {
                he((pt) => {
                  const nt = [...pt],
                    q = nt.filter((bt) => !bt.infected && bt.name !== S);
                  if (q.length > 0) {
                    const bt = q[0],
                      vt = nt.findIndex((Ct) => Ct.name === bt.name);
                    if (vt !== -1) {
                      const Ct = parseFloat(nt[vt].size);
                      ((nt[vt] = {
                        ...nt[vt],
                        infected: !0,
                        size: (Ct * 1.4).toFixed(1) + " MB",
                        content:
                          `VIRUS_ATTACHED_0xEF99
` + nt[vt].content,
                      }),
                        te((St) => [
                          ...St,
                          `⚡ [Lây nhiễm] Chèn mã độc thành công vào tệp: "${bt.name}" (Kích thước tăng vọt).`,
                        ]),
                        (bt.name === "co_so_du_lieu_khach_hang.sql" ||
                          bt.name === "mat_khau_tai_khoan.txt" ||
                          bt.name === "bao_cao_tai_chinh_quy2.xlsx" ||
                          bt.name === "ma_nguon_phan_mem.ts") &&
                          G(() => {
                            te((St) => [
                              ...St,
                              `📥 [Đánh cắp] Đang bí mật sao chép dữ liệu quan trọng của "${bt.name}" để chuẩn bị truyền ra ngoài...`,
                            ]);
                          }, 400));
                    }
                  } else
                    (clearInterval(J),
                      G(() => {
                        te((bt) => [
                          ...bt,
                          '📦 [Đóng gói] Đã nén toàn bộ thông tin nhạy cảm đánh cắp được thành file "secret_leak_2026.zip" (mật khẩu, CSDL, báo cáo tài chính).',
                        ]);
                      }, 500),
                      G(() => {
                        te((bt) => [
                          ...bt,
                          '🌐 [Truyền tải] Đang gửi trộm tệp "secret_leak_2026.zip" đến máy chủ Hacker từ xa (IP: 45.112.5.24)...',
                        ]);
                      }, 1200),
                      G(() => {
                        (te((bt) => [
                          ...bt,
                          "🚨 [Hoàn thành] Đã can thiệp máy tính & lấy toàn bộ thông tin quan trọng THÀNH CÔNG!",
                        ]),
                          te((bt) => [
                            ...bt,
                            "🚨 [Hậu quả] Virus can thiệp phá hỏng Registry hệ thống, làm chậm máy 80%, quạt tản nhiệt chạy hết công suất do tiến trình đào coin ngầm trái phép.",
                          ]));
                      }, 2200));
                  return nt;
                });
              }, 900);
            }, 2400));
        },
        Ot = () => {
          (le(!0),
            qe([
              "[Bắt đầu] Sâu máy tính (Worm) kích hoạt trên PC Kế toán (192.168.1.10).",
            ]),
            G(() => {
              qe((S) => [
                ...S,
                "[Quét mạng] Đang gửi yêu cầu quét cổng SMB (445) dải mạng nội bộ...",
              ]);
            }, 1e3),
            G(() => {
              qe((S) => [
                ...S,
                "[Tìm thấy] Tìm thấy 2 máy Windows mở cổng 445: PC Thiết kế và PC Giám đốc. Server Backup chạy Linux mở cổng 22.",
              ]);
            }, 2200),
            G(() => {
              (qe((S) => [
                ...S,
                "[Khai thác] Đang gửi payload lây lan qua lỗ hổng hệ thống sang 192.168.1.12...",
              ]),
                Xe((S) =>
                  S.map((J) =>
                    J.id === "node-B" ? { ...J, infected: !0 } : J,
                  ),
                ));
            }, 3500),
            G(() => {
              qe((S) => [
                ...S,
                "[Thành công] Lây nhiễm PC Thiết kế (192.168.1.12). Sâu bắt đầu tự nhân bản và quét dải mạng tiếp theo từ PC này.",
              ]);
            }, 4500),
            G(() => {
              (qe((S) => [
                ...S,
                "[Khai thác] Đang gửi payload lây lan sang PC Giám đốc (192.168.1.2) bằng quyền Administrator dò được...",
              ]),
                Xe((S) =>
                  S.map((J) =>
                    J.id === "node-D" ? { ...J, infected: !0 } : J,
                  ),
                ));
            }, 5800),
            G(() => {
              (qe((S) => [
                ...S,
                "[Thành công] Lây nhiễm PC Giám đốc (192.168.1.2). Không thể khai thác Server Backup (Linux cổng 22) - Sâu bị chặn ở tường lửa.",
              ]),
                qe((S) => [
                  ...S,
                  "[Kết quả] Toàn bộ máy trạm Windows nội bộ đã bị chiếm đóng mà không cần người dùng click vào file!",
                ]),
                le(!1));
            }, 7e3));
        },
        Ce = (S, J) => {
          (Ae({ name: S, realType: J }), ze("downloading"), tt(0));
          const pt = ee(() => {
            tt((nt) =>
              nt >= 100 ? (clearInterval(pt), ze("downloaded"), 100) : nt + 20,
            );
          }, 300);
        },
        st = () => {
          (ze("installing"),
            oe(0),
            Te(["[Khởi chạy] Đang chạy file FIFA26_FreeCrack.exe..."]));
          const S = ee(() => {
            oe((J) =>
              J >= 100
                ? (clearInterval(S), ze("infected"), ge(!0), At(), 100)
                : (J === 20
                    ? Te((pt) => [
                        ...pt,
                        "[Cài đặt] Đang sao chép tệp tin vào ổ C:...",
                      ])
                    : J === 40
                      ? Te((pt) => [
                          ...pt,
                          "[Lừa dối] Đang hiển thị giao diện cài đặt FIFA giả...",
                        ])
                      : J === 60
                        ? Te((pt) => [
                            ...pt,
                            "[Mã độc] Khởi chạy tệp tin backdoor Trojan.RemoteAccess ngầm...",
                          ])
                        : J === 80 &&
                          Te((pt) => [
                            ...pt,
                            "[Registry] Ghi registry Windows để tự động chạy cùng hệ thống...",
                          ]),
                  J + 20),
            );
          }, 400);
        },
        At = () => {
          (Te((S) => [
            ...S,
            "⚠️ [PHÁT HIỆN TROJAN PAYLOAD] Bắt đầu phá hoại hệ thống ngầm!",
          ]),
            G(() => {
              (Te((S) => [
                ...S,
                "🗑️ [Hành động] Đang xóa toàn bộ tệp tin cá nhân của người dùng...",
              ]),
                _e((S) => {
                  const J = [...S];
                  return ((J[0] = { ...J[0], status: "deleted" }), J);
                }),
                Te((S) => [...S, "❌ Đã xóa tệp: luan_van_tot_nghiep.docx"]));
            }, 1200),
            G(() => {
              (_e((S) => {
                const J = [...S];
                return ((J[1] = { ...J[1], status: "deleted" }), J);
              }),
                Te((S) => [...S, "❌ Đã xóa tệp: hop_dong_kinh_doanh.pdf"]));
            }, 2400),
            G(() => {
              (_e((S) => {
                const J = [...S];
                return (
                  (J[2] = { ...J[2], status: "deleted" }),
                  (J[3] = { ...J[3], status: "deleted" }),
                  J
                );
              }),
                Te((S) => [
                  ...S,
                  "❌ Đã xóa toàn bộ thư mục hình ảnh và ví điện tử của bạn!",
                ]));
            }, 3600),
            G(() => {
              Te((S) => [
                ...S,
                "🌐 [XÂM NHẬP MẠNG] Quét mạng LAN để tìm kiếm máy tính khác lây nhiễm backdoor...",
              ]);
            }, 4800),
            G(() => {
              (Ke((S) =>
                S.map((J) =>
                  J.name.includes("1.10") ? { ...J, infected: !0 } : J,
                ),
              ),
                Te((S) => [
                  ...S,
                  "⚡ Xâm nhập thành công! Đã cài backdoor lên PC Kế toán (192.168.1.10).",
                ]));
            }, 5800),
            G(() => {
              (Ke((S) =>
                S.map((J) =>
                  J.name.includes("1.2") ? { ...J, infected: !0 } : J,
                ),
              ),
                Te((S) => [
                  ...S,
                  "⚡ Chiếm quyền kiểm soát thành công PC Giám đốc (192.168.1.2) từ xa!",
                ]));
            }, 7e3),
            G(() => {
              (Te((S) => [
                ...S,
                "📷 [THEO DÕI NGUY HIỂM] Webcam được kích hoạt ngầm (Đèn xanh báo sáng)!",
              ]),
                Te((S) => [
                  ...S,
                  "🚨 Hacker đang xem trực tiếp bạn qua Webcam và ghi hình hoạt động màn hình!",
                ]));
            }, 8500));
        },
        Lt = () => {
          (w("encrypting"), Ee(0));
          const S = ee(() => {
            Ee((J) =>
              J >= 100
                ? (clearInterval(S),
                  w("encrypted"),
                  We((pt) =>
                    pt.map((nt) => ({
                      ...nt,
                      status: "encrypted",
                      name: nt.name + ".locked",
                    })),
                  ),
                  100)
                : J + 25,
            );
          }, 400);
        },
        Zt = () => {
          alert(
            "⚠️ CẢNH BÁO AN NINH: Trả tiền chuộc KHÔNG đảm bảo tin tặc sẽ cung cấp khóa giải mã, đồng thời tiếp tay cho tội phạm mạng. Hãy phục hồi bằng bản sao lưu ngoại tuyến!",
          );
        },
        Vt = () => {
          (w("recovered"),
            We([
              { name: "luan_van_tot_nghiep.docx", status: "safe" },
              { name: "anh_gia_dinh_2026.jpg", status: "safe" },
              { name: "vi_tien_crypto.dat", status: "safe" },
              { name: "bao_cao_tai_chinh.xlsx", status: "safe" },
            ]));
        },
        Ut = (S) => {
          (rt((J) => J + S), yt === "idle" && xt("logging"));
        },
        hs = () => {
          (xt("leaked"), Le(!0));
          const S = [
            {
              id: 101,
              title: "🎰 BẠN ĐÃ TRÚNG THƯỞNG!",
              content:
                "Chúc mừng! Bạn trúng giải Jackpot trị giá 1,000,000 USD! Click để nhận tiền ngay!",
            },
            {
              id: 102,
              title: "🚨 WINDOWS SYSTEM CRITICAL ERROR!",
              content:
                "Cảnh báo: Phát hiện 45 loại virus nguy hiểm trong máy. Vui lòng tải Antivirus_SpeedUp.exe để sửa lỗi!",
            },
            {
              id: 103,
              title: "👙 KHUYẾN MÃI HẤP DẪN!",
              content:
                "Chat trực tuyến với những cô gái nóng bỏng xung quanh bạn ngay lập tức! Hoàn toàn miễn phí!",
            },
            {
              id: 104,
              title: "📉 TÀI KHOẢN NGÂN HÀNG BỊ KHÓA!",
              content:
                "Cảnh báo: Tài khoản ngân hàng của bạn đang bị khóa. Đăng nhập tại đây để khôi phục!",
            },
          ];
          let J = 0;
          const pt = ee(() => {
            if (J < S.length) {
              const nt = S[J];
              (H((q) => [
                ...q,
                {
                  id: nt.id,
                  title: nt.title,
                  content: nt.content,
                  top: 20 + J * 15,
                  left: 10 + J * 15,
                },
              ]),
                J++);
            } else clearInterval(pt);
          }, 1e3);
        },
        Xs = (S) => {
          H((J) => J.filter((pt) => pt.id !== S));
        },
        ws = () => {
          (Re(!0),
            Nt([
              '[Kích hoạt] Bạn vừa tải về & cài đặt tiện ích "Free PDF Reader".',
            ]),
            G(() => {
              Nt((nt) => [
                ...nt,
                "[Phát hiện] Tiện ích tự động tải mã độc Adware ngầm vào trình duyệt.",
              ]);
            }, 800));
          const S = [
            {
              id: 201,
              title: "💰 Hướng dẫn kiếm 500$ mỗi ngày!",
              content:
                "Chỉ cần ngồi nhà làm việc 2 tiếng mỗi ngày. Click để tham gia khóa học miễn phí!",
            },
            {
              id: 202,
              title: "⚡ Máy tính của bạn đang chạy rất CHẬM!",
              content:
                "Tải ngay DriverUpdate_Pro.exe để tăng tốc máy tính thêm 300%!",
            },
            {
              id: 203,
              title: "🎰 Nhận Voucher 100k Shopee Miễn Phí!",
              content:
                "Vòng quay may mắn dành riêng cho bạn. Click ngay kẻo hết hạn!",
            },
            {
              id: 204,
              title: "🍕 Giảm giá 50% Pizza hôm nay!",
              content: "Nhận mã giảm giá Pizza Hut cực hot ngay hôm nay!",
            },
          ];
          let J = 0;
          const pt = ee(() => {
            if (J < 10) {
              const nt = S[J % S.length];
              (Ge((q) => [
                ...q,
                {
                  id: Date.now() + J,
                  title: nt.title,
                  content: nt.content,
                  top: 15 + (J % 4) * 20 + Math.random() * 5,
                  left: 10 + (J % 3) * 15 + Math.random() * 5,
                },
              ]),
                Nt((q) => [
                  ...q,
                  `🚨 [Pop-up Ad] Đã bật lên trang quảng cáo: "${nt.title}"`,
                ]),
                J++);
            } else clearInterval(pt);
          }, 1500);
        },
        fs = (S) => {
          Ge((J) => J.filter((pt) => pt.id !== S));
        };
      return jsxRuntimeExports.jsxs("div", {
        className:
          "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 transition-all duration-300",
        children: [
          jsxRuntimeExports.jsx("div", {
            className:
              "flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-100 pb-5 mb-6 dark:border-slate-800 gap-4",
            children: jsxRuntimeExports.jsxs("div", {
              children: [
                jsxRuntimeExports.jsx("span", {
                  className:
                    "inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-5 sm:px-5 py-1 text-sm sm:text-base font-bold text-purple-700 dark:bg-purple-900/20 dark:text-purple-400",
                  children: "🛡️ Lab Thực Hành Số 19 (IC3 GS6)",
                }),
                jsxRuntimeExports.jsx("h2", {
                  className:
                    "mt-2 text-2xl font-black text-slate-900 dark:text-white",
                  children:
                    "Nhận Diện & Mô Phỏng Hoạt Động Của Phần Mềm Độc Hại",
                }),
                jsxRuntimeExports.jsx("p", {
                  className:
                    "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold mt-1",
                  children:
                    "Hiểu rõ bản chất, cách thức lây lan và cách tự bảo vệ trước các hiểm họa an ninh mạng phổ biến.",
                }),
              ],
            }),
          }),
          !1,
          n === "simulator" &&
            jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-8 text-left",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "lg:col-span-4 space-y-2",
                  children: [
                    jsxRuntimeExports.jsx("h3", {
                      className:
                        "font-extrabold text-slate-900 dark:text-white text-sm sm:text-base font-medium uppercase tracking-widest mb-3",
                      children: "Chọn chương trình để mô phỏng:",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "flex flex-col items-stretch gap-3 w-full",
                      children: TERMS$2.map((S) => {
                        const J = A === S.id;
                        return jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => O(S.id),
                            className: `w-full box-border px-4 py-3 min-h-[60px] text-left rounded-2xl border text-sm sm:text-base font-bold transition-all flex items-center justify-between cursor-pointer ${J ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.01]" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center gap-3 min-w-0 flex-1",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className: `p-2 rounded-xl shrink-0 ${J ? "bg-white/20 text-white" : `text-white bg-gradient-to-br ${S.color}`}`,
                                    children: S.icon,
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "truncate min-w-0 flex-1",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className: `block font-black text-sm ${J ? "text-white" : "text-slate-800 dark:text-white"}`,
                                        children: S.name,
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className: `text-xs font-semibold block truncate ${J ? "text-white" : "text-slate-400"}`,
                                        children: S.label,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("span", {
                                className: `text-xs font-mono font-black px-2.5 py-1 rounded-full shrink-0 ml-auto pl-2 ${J ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                                children: ["#0", S.id],
                              }),
                            ],
                          },
                          S.id,
                        );
                      }),
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("div", {
                  className:
                    "lg:col-span-8 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 dark:bg-slate-950 dark:border-slate-800 flex flex-col justify-between min-h-[460px]",
                  children: jsxRuntimeExports.jsxs("div", {
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 flex items-center justify-between",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsxs("h4", {
                                className:
                                  "font-black text-slate-900 dark:text-white text-base",
                                children: [
                                  "Mô phỏng: ",
                                  (Bs = TERMS$2.find((S) => S.id === A)) == null
                                    ? void 0
                                    : Bs.name,
                                ],
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-semibold text-slate-400 dark:text-slate-500 font-bold mt-0.5",
                                children:
                                  (F = TERMS$2.find((S) => S.id === A)) == null
                                    ? void 0
                                    : F.desc,
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: `px-2.5 py-0.5 rounded text-[9px] font-black uppercase text-white bg-gradient-to-br ${(Be = TERMS$2.find((S) => S.id === A)) == null ? void 0 : Be.color}`,
                            children: "Live Sandbox",
                          }),
                        ],
                      }),
                      A === 6 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 text-white",
                              children: [
                                jsxRuntimeExports.jsxs("h5", {
                                  className:
                                    "font-mono text-sm sm:text-base font-medium font-black text-purple-400 uppercase tracking-widest border-b border-slate-800 pb-1.5 mb-2.5 flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx(FileWarning, {
                                      className: "h-4 w-4",
                                    }),
                                    " BẢN ĐỒ PHÂN LOẠI MALWARE (PHẦN MỀM ĐỘC HẠI):",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-400 leading-relaxed font-semibold mb-3",
                                  children: [
                                    "💡 ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Malware",
                                    }),
                                    " không phải là một loại riêng biệt, mà là ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "thuật ngữ chung (mái nhà chung)",
                                    }),
                                    " chỉ tất cả phần mềm được thiết kế để phá hoại, đánh cắp hoặc xâm nhập hệ thống trái phép.",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base font-semibold font-mono",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-orange-500/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-orange-400 font-black",
                                          children: "🧬 1. Virus",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Cần tệp vật chủ, cần người click chạy file để tự sao chép lây lan.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-purple-500/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-purple-400 font-black",
                                          children: "🐛 2. Worm (Sâu)",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Không cần vật chủ, tự động lây lan qua mạng LAN/Internet.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-amber-500/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-amber-400 font-black",
                                          children: "🐴 3. Trojan",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Ngụy trang có ích (game, tiện ích) để lừa người dùng cài đặt.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-emerald-500/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-emerald-400 font-black",
                                          children: "👁️ 4. Spyware",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Chạy lén, ghi bàn phím (keylogger), chụp webcam đánh cắp mật khẩu.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-red-500/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-red-400 font-black",
                                          children: "🔒 5. Ransomware",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Mã hóa toàn bộ tệp tin cá nhân rồi tống tiền nạn nhân.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-blue-400/30",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-blue-400 font-black",
                                          children: "📣 6. Adware",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-slate-400 mt-0.5 font-bold",
                                          children:
                                            "Tự ý hiển thị và spam hàng loạt pop-up quảng cáo phiền nhiễu.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-3.5",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5 uppercase",
                                      children: [
                                        jsxRuntimeExports.jsx(Laptop, {
                                          className:
                                            "h-4 w-4 text-purple-600 animate-pulse",
                                        }),
                                        " Trực quan hệ điều hành ảo (OS Dashboard)",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: `text-[9px] font-black px-2 py-0.5 rounded-md uppercase ${V === 100 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800 animate-pulse"}`,
                                      children:
                                        V === 100
                                          ? "Hệ thống Sạch"
                                          : `Đang Nhiễm: ${Ie.join(", ")}`,
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-3 gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 font-black block mb-1",
                                          children: "CHỈ SỐ AN TOÀN:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-baseline gap-1",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className: `text-2xl font-black ${V < 50 ? "text-rose-500 animate-pulse" : "text-emerald-500"}`,
                                              children: [V, "%"],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                              children: [
                                                "(",
                                                V === 100
                                                  ? "Hoàn hảo"
                                                  : V > 50
                                                    ? "Nguy cơ"
                                                    : "Báo động đỏ!",
                                                ")",
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "mt-2 h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",
                                          children: jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              className: `h-full transition-all duration-500 ${V > 70 ? "bg-emerald-500" : V > 40 ? "bg-amber-500" : "bg-red-500 animate-pulse"}`,
                                              style: { width: `${V}%` },
                                            },
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 font-black block mb-1",
                                          children: "TẢI TRỌNG CPU & RAM:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-baseline gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className: `text-2xl font-black ${V < 100 ? "text-amber-500 animate-pulse" : "text-slate-700 dark:text-slate-300"}`,
                                              children:
                                                V === 100
                                                  ? "12%"
                                                  : `${100 - V + 15}%`,
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                              children: "(Đang sử dụng)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-[9px] text-slate-400 font-bold mt-2",
                                          children:
                                            V < 50
                                              ? "⚠️ Quá tải! Các tiến trình mã độc chạy ngầm ngốn tài nguyên."
                                              : "✓ Hệ thống hoạt động mượt mà.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 font-black block mb-1",
                                          children: "KẾT NỐI MẠNG (NETWORK):",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5 mt-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className: `h-2.5 w-2.5 rounded-full ${V === 100 ? "bg-emerald-500" : "bg-rose-500 animate-ping"}`,
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200",
                                              children:
                                                V === 100
                                                  ? "An toàn"
                                                  : "Rò rỉ dữ liệu (Port: 445/8080)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-[9px] text-slate-400 font-bold mt-2",
                                          children: Ie.includes("Worm")
                                            ? "🐛 Sâu máy tính đang tự quét và gõ cổng máy khác!"
                                            : Ie.includes("Spyware")
                                              ? "🚨 Tiến trình gián điệp gửi keystroke về hacker!"
                                              : "✓ Không phát hiện lưu lượng truy cập bất thường.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold font-black uppercase text-slate-400",
                                  children:
                                    "Chọn loại mã độc muốn tiêm nhiễm vào hệ thống để thử nghiệm:",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(40), se(["Trojan", "Backdoor"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm sm:text-base font-extrabold hover:bg-amber-500/20 text-center transition-all cursor-pointer",
                                      children: "🐴 Tiêm Trojan & Backdoor",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(50), se(["Virus"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm sm:text-base font-extrabold hover:bg-orange-500/20 text-center transition-all cursor-pointer",
                                      children: "🧬 Tiêm Virus Tự Nhân Bản",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(60), se(["Worm"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm sm:text-base font-extrabold hover:bg-purple-500/20 text-center transition-all cursor-pointer",
                                      children: "🐛 Tiêm Worm Mạng LAN",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(20), se(["Ransomware"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-600 text-sm sm:text-base font-extrabold hover:bg-red-500/20 text-center transition-all cursor-pointer",
                                      children: "🔒 Tiêm Ransomware Tống Tiền",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(55), se(["Spyware", "Keylogger"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 text-sm sm:text-base font-extrabold hover:bg-emerald-500/20 text-center transition-all cursor-pointer",
                                      children: "👁️ Tiêm Spyware Gián Điệp",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (pe(70), se(["Adware"]));
                                      },
                                      className:
                                        "px-2.5 py-3 rounded-3xl bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm sm:text-base font-extrabold hover:bg-blue-500/20 text-center transition-all cursor-pointer",
                                      children: "📣 Tiêm Adware Quảng Cáo",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: wt,
                                  disabled:
                                    de === "scanning" || de === "cleaning",
                                  className:
                                    "w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base font-medium py-3 rounded-3xl transition-all shadow-md active:scale-95 hover:scale-103 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:bg-slate-300 disabled:text-slate-500",
                                  children: [
                                    jsxRuntimeExports.jsx(ShieldCheck, {
                                      className: "h-4.5 w-4.5",
                                    }),
                                    " Chạy Khiên Diệt Antivirus Shield (Khôi phục & dọn dẹp)",
                                  ],
                                }),
                              ],
                            }),
                            de === "scanning" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-blue-200 bg-blue-50/50 p-5 sm:p-6 dark:border-blue-900/30 dark:bg-blue-950/20 text-sm sm:text-base font-medium",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-1 font-bold",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-blue-700 dark:text-blue-300 animate-pulse",
                                        children:
                                          "🔎 Đang quét tệp hệ thống, tìm chữ ký phân biệt malware...",
                                      }),
                                      jsxRuntimeExports.jsxs("span", {
                                        children: [U, "%"],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "h-2 w-full bg-slate-200 rounded-full overflow-hidden dark:bg-slate-800",
                                    children: jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-full bg-blue-600 rounded-full transition-all duration-200",
                                      style: { width: `${U}%` },
                                    }),
                                  }),
                                ],
                              }),
                            de === "cleaning" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-amber-200 bg-amber-50/50 p-5 sm:p-6 dark:border-amber-900/30 dark:bg-amber-950/20 text-sm sm:text-base font-medium text-amber-700 dark:text-amber-300 font-extrabold animate-pulse flex items-center gap-2",
                                children: [
                                  jsxRuntimeExports.jsx(RefreshCw, {
                                    className: "h-4 w-4 animate-spin",
                                  }),
                                  " 🛠️ Đang gỡ cài đặt mã độc, vá lỗ hổng mạng, dọn dẹp pop-up quảng cáo...",
                                ],
                              }),
                            de === "protected" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6 dark:border-emerald-900/30 dark:bg-emerald-950/20 text-sm sm:text-base font-medium text-emerald-700 dark:text-emerald-300 font-extrabold flex items-center gap-2",
                                children: [
                                  jsxRuntimeExports.jsx(CircleCheckBig, {
                                    className: "h-5 w-5 text-emerald-500",
                                  }),
                                  " Hoàn thành quét! Tất cả các dòng Malware (Virus, Trojan, Worm, Spyware) đã bị cách ly thành công.",
                                ],
                              }),
                          ],
                        }),
                      A === 5 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-amber-500/10 border border-amber-500/30 rounded-3xl p-8 sm:p-5 text-sm sm:text-base font-medium text-amber-700 dark:text-amber-300 leading-relaxed space-y-2",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 font-black uppercase text-[12px]",
                                  children: [
                                    jsxRuntimeExports.jsx(TriangleAlert, {
                                      className:
                                        "h-5 w-5 text-amber-500 animate-pulse",
                                    }),
                                    "NHIỆM VỤ ĐÁNH THỨC VIRUS:",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className: "font-semibold",
                                  children: [
                                    "Virus máy tính ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "không thể tự động lây lan độc lập",
                                    }),
                                    " mà buộc phải bám vào một tệp tin vật chủ. Chỉ khi người dùng click khởi chạy tệp chứa virus ẩn, nó mới có thể hoạt động!",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "font-semibold text-sm sm:text-base font-semibold text-slate-550 dark:text-slate-400",
                                  children: [
                                    "👉 Hãy tìm và ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "nhấp chuột vào một tệp nghi vấn chứa mã độc lậu",
                                    }),
                                    " dưới đây (ví dụ: các tệp có đuôi ",
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-mono text-red-500 font-black",
                                      children: ".exe",
                                    }),
                                    " bẻ khóa) để khởi chạy tệp đó và kích hoạt con virus sống dậy, bắt đầu lây lan sang tất cả tệp lành mạnh khác!",
                                  ],
                                }),
                              ],
                            }),
                            je &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-8 sm:p-5 rounded-3xl border border-blue-200 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-950/20 text-sm sm:text-base font-medium text-blue-700 dark:text-blue-300 font-extrabold flex items-center gap-2 animate-pulse",
                                children: [
                                  jsxRuntimeExports.jsx(Info, {
                                    className:
                                      "h-5 w-5 flex-shrink-0 text-blue-500",
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    children: je,
                                  }),
                                ],
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5 uppercase",
                                  children:
                                    "Danh sách tệp tin trong thư mục hệ thống:",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                  children: be.map((S) => {
                                    const J = S.hasVirus && !E;
                                    return jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        onClick: () => {
                                          E ||
                                            (S.hasVirus
                                              ? Ls(S.name)
                                              : Se(
                                                  `🔍 Tệp "${S.name}" hoàn toàn sạch và an toàn. Hãy nhấp chuột vào một trong hai tệp crack lậu chứa mã độc ẩn dưới danh sách để khởi chạy!`,
                                                ));
                                        },
                                        className: `p-3.5 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden select-none cursor-pointer flex flex-col justify-between ${S.infected ? "border-rose-500 bg-rose-50/30 dark:bg-rose-950/10 shadow-sm" : J ? "border-amber-400 bg-amber-50/20 dark:bg-amber-950/5 hover:border-rose-500 hover:scale-[1.01] shadow" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-slate-300 hover:scale-[1.01]"}`,
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "flex items-start justify-between gap-1.5 pr-14",
                                                children:
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-1.5 min-w-0",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              S.infected
                                                                ? "text-rose-500 shrink-0"
                                                                : J
                                                                  ? "text-amber-500 shrink-0"
                                                                  : "text-slate-400 shrink-0",
                                                            children:
                                                              S.name.endsWith(
                                                                ".exe",
                                                              )
                                                                ? "⚙️"
                                                                : "📄",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-black text-xs text-slate-800 dark:text-slate-200 truncate block",
                                                            children: S.name,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                              }),
                                              J &&
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute right-2 top-2 text-[8px] font-black text-amber-700 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-1.5 py-0.5 rounded flex items-center gap-1 animate-pulse border border-amber-300/50",
                                                  children: "⚠️ Crack Lậu",
                                                }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "mt-2 flex items-center justify-between",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-xs font-bold text-slate-400 font-mono",
                                                      children: S.size,
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className: `text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${S.infected ? "bg-red-500 text-white animate-pulse" : J ? "bg-amber-500 text-white hover:bg-red-500" : "bg-slate-100 text-slate-500 dark:bg-slate-800"}`,
                                                      children: S.infected
                                                        ? "Đã bị nhiễm"
                                                        : J
                                                          ? "NHẤP CHẠY"
                                                          : "Sạch",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "mt-2 bg-slate-950 p-2 rounded-xl text-[9px] font-mono text-slate-300 leading-relaxed break-words border border-slate-800",
                                            children: S.content,
                                          }),
                                        ],
                                      },
                                      S.name,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            E &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-slate-950 rounded-3xl p-8 sm:p-5 border border-slate-850 text-sm sm:text-base font-semibold font-mono text-emerald-400 h-36 overflow-y-auto space-y-1 scrollbar-thin",
                                    children: [
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-slate-500 border-b border-slate-900 pb-1 uppercase font-black text-[8px] flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Terminal, {
                                            className:
                                              "h-3.5 w-3.5 text-slate-400",
                                          }),
                                          " Bản ghi hoạt động của Virus (Terminal):",
                                        ],
                                      }),
                                      K.map((S, J) =>
                                        jsxRuntimeExports.jsx(
                                          "p",
                                          {
                                            className:
                                              S.includes("🚨") ||
                                              S.includes("⚠️") ||
                                              S.includes("⚡")
                                                ? "text-rose-400 font-bold"
                                                : "",
                                            children: S,
                                          },
                                          J,
                                        ),
                                      ),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-rose-950/20 border border-rose-900/40 p-5 sm:p-6 rounded-3xl space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsx("h5", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-rose-600 dark:text-rose-400 uppercase tracking-wide flex items-center gap-1.5",
                                            children:
                                              "⚙️ HÀNH VI CAN THIỆP HỆ THỐNG:",
                                          }),
                                          jsxRuntimeExports.jsxs("ul", {
                                            className:
                                              "text-[10.5px] text-slate-700 dark:text-slate-300 font-semibold space-y-1.5 list-disc list-inside",
                                            children: [
                                              jsxRuntimeExports.jsxs("li", {
                                                children: [
                                                  "Vô hiệu hóa hoàn toàn trình diệt virus ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-red-500 font-bold",
                                                      children:
                                                        "Windows Defender",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Ghi đè Registry cấu hình hệ thống để tự động tải cùng Windows",
                                              }),
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Can thiệp sâu vào các tệp hệ điều hành (.dll, .sys) để tránh bị phát hiện",
                                              }),
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Chiếm dụng tài nguyên CPU (lên tới 95%) để chạy ngầm tiến trình đào coin trái phép",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-red-950/30 border border-red-500/35 p-5 sm:p-6 rounded-3xl space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsx("h5", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-red-600 dark:text-red-400 uppercase tracking-wide flex items-center gap-1.5",
                                            children:
                                              "📥 DỮ LIỆU QUAN TRỌNG ĐÃ BỊ ĐÁNH CẮP:",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1.5",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between text-[10.5px] font-mono bg-black/40 px-2 py-1 rounded",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-slate-300",
                                                      children:
                                                        "co_so_du_lieu_khach_hang.sql",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-rose-400 font-black uppercase",
                                                      children:
                                                        "ĐÃ SAO CHÉP 🚨",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between text-[10.5px] font-mono bg-black/40 px-2 py-1 rounded",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-slate-300",
                                                      children:
                                                        "mat_khau_tai_khoan.txt",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-rose-400 font-black uppercase",
                                                      children:
                                                        "ĐÃ SAO CHÉP 🚨",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between text-[10.5px] font-mono bg-black/40 px-2 py-1 rounded",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-slate-300",
                                                      children:
                                                        "bao_cao_tai_chinh_quy2.xlsx",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-rose-400 font-black uppercase",
                                                      children:
                                                        "ĐÃ SAO CHÉP 🚨",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between text-[10.5px] font-mono bg-black/40 px-2 py-1 rounded",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-slate-300",
                                                      children:
                                                        "ma_nguon_phan_mem.ts",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-rose-400 font-black uppercase",
                                                      children:
                                                        "ĐÃ SAO CHÉP 🚨",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-[9.5px] text-slate-400 font-bold italic leading-tight",
                                            children:
                                              "⚡ Toàn bộ tệp nén đã được exfiltrate thành công về máy chủ điều khiển (C2) của Hacker.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-slate-100 rounded-3xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10.5px] text-slate-650 dark:text-slate-350 font-semibold leading-relaxed",
                                    children: [
                                      "📌 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Bài học IC3 GS6:",
                                      }),
                                      " Khác với sâu máy tính (Worm) tự lan truyền độc lập, ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Virus máy tính",
                                      }),
                                      " buộc phải bám vào một tệp vật chủ lành mạnh để kích hoạt. Khi người dùng chạy tệp vật chủ đó, virus sẽ can thiệp phá hoại hệ thống và âm thầm đánh cắp, sao chép các thông tin bảo mật cực kỳ quan trọng gửi cho Hacker.",
                                    ],
                                  }),
                                ],
                              }),
                            jsxRuntimeExports.jsx("div", {
                              className: "pt-2",
                              children:
                                E &&
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => {
                                    (v(!1),
                                      te([]),
                                      Se(null),
                                      he(getInitialVirusFiles()));
                                  },
                                  className:
                                    "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm sm:text-base font-medium py-3 rounded-3xl transition-all cursor-pointer text-center",
                                  children: "Reset mô phỏng Virus",
                                }),
                            }),
                          ],
                        }),
                      A === 7 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-5 sm:p-6",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-200 uppercase mb-3 flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Network, {
                                      className: "h-4 w-4 text-purple-600",
                                    }),
                                    " Sơ đồ lây lan của Sâu máy tính trong mạng nội bộ (LAN):",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "grid grid-cols-2 md:grid-cols-4 gap-3 relative",
                                  children: He.map((S) =>
                                    jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className: `p-8 sm:p-5 rounded-3xl border text-center relative transition-all duration-300 ${S.infected ? "border-purple-500 bg-purple-500/10 shadow-sm" : "border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800"}`,
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "absolute top-2 right-2 flex h-2 w-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${S.infected ? "bg-purple-400" : "bg-emerald-400"}`,
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `relative inline-flex rounded-full h-2 w-2 ${S.infected ? "bg-purple-500" : "bg-emerald-500"}`,
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: `mx-auto h-9 w-9 rounded-full flex items-center justify-center text-white ${S.infected ? "bg-purple-600" : "bg-slate-400 dark:bg-slate-700"}`,
                                            children: "💻",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-extrabold text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mt-2 truncate",
                                            children: S.name,
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-[9px] text-slate-400 font-bold mt-0.5",
                                            children: [
                                              S.os,
                                              " (Port: ",
                                              S.portOpen,
                                              ")",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "mt-1.5",
                                            children: jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                className: `text-[8px] px-1 rounded font-black uppercase text-white ${S.infected ? "bg-purple-600" : "bg-emerald-600"}`,
                                                children: S.infected
                                                  ? "Bị nhiễm Worm"
                                                  : "An toàn",
                                              },
                                            ),
                                          }),
                                        ],
                                      },
                                      S.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-3xl p-8 sm:p-5 border border-slate-800 text-sm sm:text-base font-semibold font-mono text-emerald-400 h-40 overflow-y-auto space-y-1 scrollbar-thin",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-slate-500 border-b border-slate-900 pb-1 uppercase font-black text-[8px] flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Terminal, {
                                      className: "h-3.5 w-3.5 text-slate-400",
                                    }),
                                    " Bản ghi hoạt động của Worm (Terminal):",
                                  ],
                                }),
                                Qe.length === 0
                                  ? jsxRuntimeExports.jsx("p", {
                                      className: "text-slate-500 italic",
                                      children:
                                        "Nhấn nút bên dưới để bắt đầu lây lan tự động...",
                                    })
                                  : Qe.map((S, J) =>
                                      jsxRuntimeExports.jsx(
                                        "p",
                                        { children: S },
                                        J,
                                      ),
                                    ),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: Ot,
                                  disabled:
                                    L ||
                                    He.filter((S) => S.infected).length ===
                                      He.length,
                                  className:
                                    "w-full bg-purple-600 text-white font-extrabold text-sm sm:text-base font-medium py-3 rounded-3xl hover:bg-purple-700 shadow-md active:scale-95 hover:scale-103 transition-all transition-all flex items-center justify-center gap-1.5 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer",
                                  children: [
                                    jsxRuntimeExports.jsx(Play, {
                                      className: "h-4 w-4",
                                    }),
                                    " Bắt đầu lây lan Sâu (Worm) qua mạng",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-400 text-center font-bold mt-1.5",
                                  children:
                                    "💡 Nhận định IC3: Sâu máy tính hoàn toàn tự động lây nhiễm dải mạng thông qua các cổng mở mà không cần sự tương tác hay kích hoạt tệp của con người.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      A === 1 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            at === "catalog" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 uppercase",
                                    children:
                                      "Chọn một phần mềm bẻ khóa bạn muốn tải từ trang web lậu miễn phí:",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 gap-3",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        onClick: () =>
                                          Ce(
                                            "Trò chơi miễn phí FIFA 2026 Crack",
                                            "RAT (Remote Access Trojan)",
                                          ),
                                        className:
                                          "p-8 sm:p-5 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl hover:border-amber-500 hover:shadow-xs transition-all cursor-pointer text-left",
                                        children: jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: "text-xl",
                                                children: "🎮",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                                    children:
                                                      "FIFA26_FreeCrack.exe",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-amber-600 font-bold",
                                                    children:
                                                      "Game đá bóng miễn phí 100%! Tải ngay!",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                        ),
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        onClick: () =>
                                          Ce(
                                            "Phần mềm PDF Editor Premium Pro",
                                            "Remote Access Trojan",
                                          ),
                                        className:
                                          "p-8 sm:p-5 bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl hover:border-amber-500 hover:shadow-xs transition-all cursor-pointer text-left",
                                        children: jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: "text-xl",
                                                children: "📄",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                                    children:
                                                      "PDF_Editor_Pro_Crack.exe",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-amber-600 font-bold",
                                                    children:
                                                      "Chỉnh sửa tệp PDF không cần trả phí!",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            at === "downloading" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 text-center space-y-3 dark:bg-slate-900 dark:border-slate-800",
                                children: [
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 animate-pulse flex items-center justify-center gap-2",
                                    children:
                                      "📥 Đang tải xuống tệp tin từ máy chủ chia sẻ ẩn danh...",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "h-3 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800",
                                    children: jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-full bg-amber-500 rounded-full transition-all duration-300",
                                      style: { width: `${De}%` },
                                    }),
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 font-mono",
                                    children: [De, "% Hoàn thành"],
                                  }),
                                ],
                              }),
                            at === "downloaded" &&
                              ae &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-blue-200 bg-blue-50/40 p-5 sm:p-6 text-center space-y-3.5 dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-slate-200",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "mx-auto h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl text-blue-600 animate-bounce",
                                    children: "📦",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "font-black text-sm sm:text-base font-medium",
                                        children: "Đã tải tệp về thành công!",
                                      }),
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-sm sm:text-base font-medium text-slate-500 font-bold",
                                        children: [
                                          "Tệp tin: ",
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-rose-500",
                                            children:
                                              ae.name ===
                                              "Trò chơi miễn phí FIFA 2026 Crack"
                                                ? "FIFA26_FreeCrack.exe"
                                                : "PDF_Editor_Pro_Crack.exe",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 font-semibold leading-relaxed",
                                    children:
                                      "⚠️ Cảnh báo IC3: Một phần mềm bẻ khóa (crack) được quảng cáo miễn phí luôn có nguy cơ cao chứa Trojan ngầm bên trong lớp vỏ bọc ứng dụng có ích.",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: st,
                                    className:
                                      "w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm sm:text-base font-medium py-3 rounded-3xl transition-all shadow-md active:scale-95 hover:scale-103 transition-all cursor-pointer",
                                    children:
                                      "⚡ Nhấp đúp chuột để Mở & Cài đặt phần mềm",
                                  }),
                                ],
                              }),
                            at === "installing" &&
                              ae &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:bg-slate-900 dark:border-slate-800 space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-200 flex items-center justify-between",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            children: [
                                              "⚙️ Đang thiết lập cấu hình ",
                                              ae.name,
                                              "...",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-sm sm:text-base font-semibold",
                                            children: [it, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-2 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800",
                                        children: jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-full bg-purple-600 rounded-full transition-all duration-300",
                                          style: { width: `${it}%` },
                                        }),
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "bg-slate-950 rounded-3xl p-8 sm:p-5 text-sm sm:text-base font-semibold font-mono text-emerald-400 space-y-1 h-40 overflow-y-auto",
                                    children: Q.map((S, J) =>
                                      jsxRuntimeExports.jsx(
                                        "p",
                                        { children: S },
                                        J,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            at === "infected" &&
                              ae &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4 text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                     style: { backgroundColor: "#1e1316", borderColor: "rgba(239, 68, 68, 0.45)" },
                                    className:
                                      "bg-red-950 border border-red-500 text-white rounded-3xl p-5 sm:p-6 space-y-3 shadow-lg relative overflow-hidden animate-pulse",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center gap-3 border-b border-red-800 pb-2.5",
                                        children: [
                                          jsxRuntimeExports.jsx(Skull, {
                                            className:
                                              "h-8 w-8 text-red-500 animate-bounce",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("h4", {
                                                className:
                                                  "font-black text-sm sm:text-base font-medium uppercase text-red-400 tracking-wider",
                                                children:
                                                  "CẢNH BÁO: PHÁT HIỆN TROJAN ĐỘC HẠI CHẠY NGẦM!",
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                 style: { color: "#e2e8f0" },
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                                children:
                                                  "Hệ thống của em đã bị xâm nhập hoàn toàn bởi Remote Access Trojan.",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-1 md:grid-cols-3 gap-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                             style: { backgroundColor: "#161c28", borderColor: "rgba(239, 68, 68, 0.25)" },
                                            className:
                                              "p-8 sm:p-5 bg-black/40 rounded-3xl border border-red-900/40",
                                            children: [
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-red-400 font-black flex items-center gap-1 uppercase mb-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    Trash2,
                                                    {
                                                      className:
                                                        "h-3.5 w-3.5 text-red-500",
                                                    },
                                                  ),
                                                  " Tàn phá dữ liệu:",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className: "space-y-2",
                                                children: $e.map((S, J) =>
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center justify-between text-sm sm:text-base font-semibold font-mono",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                             style: { color: "#93c5fd", fontWeight: "600" },
                                                            className:
                                                              "truncate max-w-[120px] text-slate-300",
                                                            children: S.name,
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className: `text-[9px] font-black uppercase px-1 rounded ${S.status === "deleted" ? "bg-red-500 text-white animate-pulse" : "bg-slate-800 text-slate-400"}`,
                                                            children:
                                                              S.status ===
                                                              "deleted"
                                                                ? "Đã xóa 🗑️"
                                                                : "Đang xử lý",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                    J,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                             style: { backgroundColor: "#161c28", borderColor: "rgba(239, 68, 68, 0.25)" },
                                            className:
                                              "p-8 sm:p-5 bg-black/40 rounded-3xl border border-red-900/40",
                                            children: [
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-red-400 font-black flex items-center gap-1 uppercase mb-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(Wifi, {
                                                    className:
                                                      "h-3.5 w-3.5 text-red-500",
                                                  }),
                                                  " Xâm nhập máy tính khác:",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className: "space-y-2",
                                                children: Ue.map((S, J) =>
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center justify-between text-sm sm:text-base font-semibold font-mono",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                             style: { color: "#a7f3d0", fontWeight: "600" },
                                                            className:
                                                              "text-slate-300",
                                                            children: S.name,
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className: `text-[9px] font-black uppercase px-1 rounded ${S.infected ? "bg-red-600 text-white animate-pulse" : "bg-slate-800 text-slate-400"}`,
                                                            children: S.infected
                                                              ? "ĐÃ CÀI BACKDOOR"
                                                              : "Đang tìm kiếm",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                    J,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                             style: { backgroundColor: "#161c28", borderColor: "rgba(239, 68, 68, 0.25)" },
                                            className:
                                              "p-8 sm:p-5 bg-black/40 rounded-3xl border border-red-900/40 flex flex-col justify-between",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-red-400 font-black flex items-center gap-1 uppercase mb-2",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          Camera,
                                                          {
                                                            className:
                                                              "h-3.5 w-3.5 text-red-500",
                                                          },
                                                        ),
                                                        " Gián điệp Webcam:",
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                       style: { backgroundColor: "#0f172a", borderColor: "rgba(239, 68, 68, 0.35)" },
                                                      className:
                                                        "h-14 bg-slate-950 rounded border border-red-900/40 flex flex-col items-center justify-center relative overflow-hidden",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "absolute top-1.5 left-1.5 flex h-1.5 w-1.5",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          Camera,
                                                          {
                                                            className:
                                                              "h-6 w-6 text-red-600 animate-pulse mb-1",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[8px] font-mono text-red-400 font-bold uppercase animate-pulse",
                                                            children:
                                                              "REC // LIVE FEED TO HACKER",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                 style: { color: "#fde047", fontWeight: "600" },
                                                className:
                                                  "text-[9px] text-slate-400 font-bold mt-1.5 leading-tight",
                                                children:
                                                  "⚠️ Tin tặc có thể xem lén bạn trực tiếp từ webcam mà không hề hiện thông báo nào!",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                         style: { backgroundColor: "#172033", borderColor: "rgba(248, 113, 113, 0.3)", color: "#cbd5e1" },
                                        className:
                                          "bg-black/25 p-8 sm:p-5 rounded-3xl border border-red-900/30 text-sm sm:text-base font-semibold leading-relaxed text-slate-300",
                                        children: [
                                          "📌 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            style: { color: "#fbbf24" },
                                            children:
                                              "Bài học IC3 GS6 cốt lõi:",
                                          }),
                                          " Trojan ngụy trang dưới giao diện cài đặt hữu ích (như crack trò chơi, crack văn phòng), nhưng chạy ngầm phá hoại máy tính, mở ",
                                          jsxRuntimeExports.jsx("strong", {
                                            style: { color: "#fbbf24" },
                                            children: "Backdoor (cổng hậu)",
                                          }),
                                          " cho tin tặc điều khiển webcam, xóa tệp tin và lây lan sang các máy lân cận trong cùng mạng nội bộ.",
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => {
                                      (ze("catalog"),
                                        _e([
                                          {
                                            name: "luan_van_tot_nghiep.docx",
                                            status: "safe",
                                          },
                                          {
                                            name: "hop_dong_kinh_doanh.pdf",
                                            status: "safe",
                                          },
                                          {
                                            name: "anh_gia_dinh_2026.jpg",
                                            status: "safe",
                                          },
                                          {
                                            name: "vi_tien_crypto.dat",
                                            status: "safe",
                                          },
                                        ]),
                                        Ke([
                                          {
                                            name: "PC Kế toán (192.168.1.10)",
                                            infected: !1,
                                          },
                                          {
                                            name: "PC Giám đốc (192.168.1.2)",
                                            infected: !1,
                                          },
                                        ]));
                                    },
                                    className:
                                      "w-full bg-slate-800 text-white font-black text-sm sm:text-base font-medium py-3 rounded-3xl hover:bg-slate-900 transition-all cursor-pointer",
                                    children:
                                      "Thử mô phỏng một phần mềm lậu khác",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      A === 2 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 text-left",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 dark:bg-slate-900 dark:border-slate-800 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-200 flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Folder, {
                                      className: "h-4 w-4 text-yellow-500",
                                    }),
                                    " Thư mục tài liệu cực kỳ quan trọng của em:",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "grid grid-cols-2 gap-3.5",
                                  children: ke.map((S) =>
                                    jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-2.5 p-8 sm:p-5 rounded-3xl border border-slate-100 bg-slate-50/50 dark:bg-slate-950 dark:border-slate-850",
                                        children: [
                                          S.status === "encrypted"
                                            ? jsxRuntimeExports.jsx(Lock, {
                                                className:
                                                  "h-5 w-5 text-red-600 animate-pulse shrink-0",
                                              })
                                            : jsxRuntimeExports.jsx(
                                                CircleCheckBig,
                                                {
                                                  className:
                                                    "h-5 w-5 text-emerald-500 shrink-0",
                                                },
                                              ),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "truncate",
                                            children: [
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 truncate",
                                                children: S.name,
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                                children:
                                                  S.status === "encrypted"
                                                    ? "BỊ MÃ HÓA (LOCKED)"
                                                    : "Đọc/Ghi an toàn",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      S.name,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            ot === "uninfected" &&
                              jsxRuntimeExports.jsx("button", {
                                onClick: Lt,
                                className:
                                  "w-full bg-rose-600 text-white font-extrabold text-sm sm:text-base font-medium py-3 rounded-3xl hover:bg-rose-700 shadow-md active:scale-95 hover:scale-103 transition-all transition-all cursor-pointer",
                                children:
                                  "☠️ Kích hoạt Ransomware (Khóa dữ liệu)",
                              }),
                            ot === "encrypting" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-rose-200 bg-rose-50/40 p-5 sm:p-6 dark:bg-rose-950/20 text-center space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-bold text-rose-800 dark:text-rose-400 animate-pulse flex items-center justify-center gap-2",
                                    children: [
                                      jsxRuntimeExports.jsx(Lock, {
                                        className: "h-4 w-4 animate-spin",
                                      }),
                                      " Ransomware đang sử dụng thuật toán mã hóa AES-256 khóa tất cả tệp tin...",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "h-3 w-full bg-slate-100 rounded-full overflow-hidden dark:bg-slate-800",
                                    children: jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-full bg-red-600 rounded-full transition-all duration-300",
                                      style: { width: `${C}%` },
                                    }),
                                  }),
                                ],
                              }),
                            ot === "encrypted" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-red-500 bg-red-950 text-white p-5 sm:p-6 text-center space-y-3 shadow-lg relative overflow-hidden animate-pulse",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute -right-8 -top-8 h-40 w-24 rounded-full bg-red-500/10 blur-xl",
                                  }),
                                  jsxRuntimeExports.jsx(Skull, {
                                    className:
                                      "h-10 w-10 text-red-500 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "font-black text-sm sm:text-base font-medium uppercase tracking-widest text-red-400",
                                    children:
                                      "🚨 THƯ ĐÒI TIỀN CHUỘC (RANSOM NOTE) 🚨",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold leading-relaxed text-slate-300",
                                    children:
                                      "Toàn bộ tệp tin, dữ liệu, luận văn và ảnh lưu trữ của bạn đã bị mã hóa bảo mật. Bạn KHÔNG THỂ đọc tệp nếu không có khóa giải mã riêng.",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-yellow-400",
                                    children:
                                      "Giá chuộc dữ liệu: 0.5 BITCOIN (Tương đương 35,000 USD)",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2 justify-center pt-2",
                                    children: [
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: Zt,
                                        className:
                                          "px-5 sm:px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm sm:text-base font-medium rounded-3xl transition-all cursor-pointer",
                                        children:
                                          "💸 Trả tiền chuộc (Rủi ro cao)",
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: Vt,
                                        className:
                                          "px-5 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base font-medium rounded-3xl transition-all shadow-md cursor-pointer",
                                        children:
                                          "🔄 Khôi phục từ Sao lưu Ngoại tuyến",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ot === "recovered" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-emerald-200 bg-emerald-500/10 p-5 sm:p-6 text-sm sm:text-base font-bold text-emerald-800 dark:border-slate-800 dark:bg-slate-900/40 dark:text-emerald-400 flex flex-col items-center gap-2",
                                children: [
                                  jsxRuntimeExports.jsx(ShieldCheck, {
                                    className:
                                      "h-8 w-8 text-emerald-500 animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className: "font-extrabold text-center",
                                    children:
                                      "Khôi phục thành công 100% dữ liệu từ Bản Sao Lưu Vật Lý Ngoại Tuyến an toàn!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold text-center mt-1",
                                    children:
                                      "💡 Giải pháp vàng: Hãy luôn lưu trữ dữ liệu quan trọng trên một ổ đĩa cứng cắm ngoài hoặc Cloud riêng biệt, ngắt kết nối khi không sử dụng để đề phòng Ransomware.",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => w("uninfected"),
                                    className:
                                      "mt-2 text-sm sm:text-base font-semibold underline hover:text-slate-900 dark:hover:text-white",
                                    children: "Thử mô phỏng lại",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      A === 4 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 text-left relative",
                          children: [
                            me &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-rose-500/10 border border-rose-500 text-rose-800 dark:text-rose-400 p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-medium space-y-1.5 animate-pulse",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "font-black flex items-center gap-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx(TriangleAlert, {
                                        className:
                                          "h-4 w-4 text-rose-600 animate-spin",
                                      }),
                                      " TRÌNH DUYỆT BỊ CHIẾM QUYỀN ĐIỀU KHIỂN (BROWSER HIJACKED):",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("ul", {
                                    className:
                                      "list-disc list-inside text-sm sm:text-base font-bold space-y-1 pl-1 text-slate-700 dark:text-slate-300",
                                    children: [
                                      jsxRuntimeExports.jsxs("li", {
                                        children: [
                                          "Công cụ tìm kiếm mặc định bị tự ý đổi sang: ",
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-red-500 font-mono",
                                            children:
                                              "http://search-hijacker.xyz",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("li", {
                                        children: [
                                          "Trang chủ trình duyệt (Homepage) bị khóa cứng thành: ",
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-red-500 font-mono",
                                            children:
                                              "http://spam-jackpot-ads.com",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("li", {
                                        children:
                                          "Đã thêm 4 tiến trình nền theo dõi hành vi mua sắm trực tuyến của em trái phép.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-200 flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Laptop, {
                                      className: "h-4 w-4 text-slate-400",
                                    }),
                                    " Bảng đăng nhập cổng thanh toán ảo:",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-2.5 max-w-sm",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "block text-sm sm:text-base font-semibold font-black uppercase text-slate-400 mb-1",
                                          children:
                                            "Tài khoản ngân hàng / Email:",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          placeholder: "Nhập tên đăng nhập...",
                                          value: ve,
                                          onChange: (S) => {
                                            (Ye(S.target.value),
                                              Ut(S.target.value.slice(-1)));
                                          },
                                          className:
                                            "w-full text-sm sm:text-base font-bold border rounded px-5 sm:px-5 py-3 bg-slate-50 dark:bg-slate-950 dark:border-slate-800",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "block text-sm sm:text-base font-semibold font-black uppercase text-slate-400 mb-1",
                                          children:
                                            "Mật khẩu (Gõ để thấy cách Spyware chụp lại ký tự thực):",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "password",
                                          placeholder: "••••••••",
                                          value: mt,
                                          onChange: (S) => {
                                            (Dt(S.target.value),
                                              Ut(S.target.value.slice(-1)));
                                          },
                                          className:
                                            "w-full text-sm sm:text-base font-bold border rounded px-5 sm:px-5 py-3 bg-slate-50 dark:bg-slate-950 dark:border-slate-800",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              style: { backgroundColor: "#141a29", borderColor: "rgba(244, 63, 94, 0.35)" },
                              className:
                                "spyware-hacker-dashboard rounded-3xl p-5 sm:p-6 border space-y-2.5 relative overflow-hidden",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-wrap items-center justify-between gap-2 pb-1",
                                  children: [
                                    jsxRuntimeExports.jsx("h5", {
                                      style: { color: "#fb7185" },
                                      className:
                                        "font-mono text-sm sm:text-base font-black text-rose-500 uppercase",
                                      children:
                                        "📺 BẢN GHI LÉN CỦA PHẦN MỀM GIÁN ĐIỆP (HACKER DASHBOARD):",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 bg-red-600 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full animate-pulse shadow-sm",
                                      children: [
                                        jsxRuntimeExports.jsx(Eye, {
                                          className: "h-3.5 w-3.5 animate-bounce",
                                        }),
                                        " Spyware Active (Plain Text Logger)",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "font-mono text-[10.5px] text-slate-400 space-y-2 mt-2",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      style: { color: "#94a3b8" },
                                      className: "text-slate-500 spyware-terminal-comment",
                                      children:
                                        "// Đang chạy keylogger ngầm chụp lại bàn phím theo thời gian thực...",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          style: { backgroundColor: "#1c2538", borderColor: "rgba(148, 163, 184, 0.25)" },
                                          className:
                                            "spyware-box p-5 rounded-2xl border space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              style: { color: "#cbd5e1", fontWeight: 700, letterSpacing: "0.03em" },
                                              className:
                                                "text-[9px] uppercase font-black block spyware-label",
                                              children:
                                                "Dòng 1: Tài khoản ngân hàng đã nhập:",
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              style: { color: "#fde047", fontWeight: 800 },
                                              className:
                                                "font-mono text-sm sm:text-base truncate spyware-account",
                                              children: [
                                                "👤 ",
                                                ve ||
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      style: { color: "#94a3b8", fontStyle: "italic", fontWeight: 400 },
                                                      className:
                                                        "font-normal italic spyware-empty",
                                                      children:
                                                        "[Chưa nhập - Hãy gõ thử ở trên]",
                                                    },
                                                  ),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          style: { backgroundColor: "#1c2538", borderColor: "rgba(148, 163, 184, 0.25)" },
                                          className:
                                            "spyware-box p-5 rounded-2xl border space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              style: { color: "#cbd5e1", fontWeight: 700, letterSpacing: "0.03em" },
                                              className:
                                                "text-[9px] uppercase font-black block spyware-label",
                                              children:
                                                "Dòng 2: Mật khẩu đã ghi (Giải mã rõ):",
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              style: { color: "#fb7185", fontWeight: 800 },
                                              className:
                                                "font-mono text-sm sm:text-base truncate spyware-password",
                                              children: [
                                                "🔑 ",
                                                mt ||
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      style: { color: "#94a3b8", fontStyle: "italic", fontWeight: 400 },
                                                      className:
                                                        "font-normal italic spyware-empty",
                                                      children:
                                                        "[Chưa nhập - Hãy gõ thử ở trên]",
                                                    },
                                                  ),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    yt === "leaked" &&
                                      jsxRuntimeExports.jsx("p", {
                                        style: { color: "#f87171", fontWeight: 800 },
                                        className:
                                          "text-red-500 font-extrabold animate-pulse text-sm sm:text-base font-medium",
                                        children:
                                          "🚨 [ĐÃ TRÍCH XUẤT THÀNH CÔNG] Thông tin tài khoản và mật khẩu rõ của bạn đã bị nén mật và gửi trực tiếp về IP của Hacker: 45.112.5.24!",
                                      }),
                                  ],
                                }),
                                (ve || mt) &&
                                  yt !== "leaked" &&
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: hs,
                                    className:
                                      "mt-2 w-full bg-red-700 hover:bg-red-800 text-white font-extrabold text-[10.5px] py-3 rounded-3xl transition-all cursor-pointer shadow-md active:scale-95 hover:scale-103 transition-all flex items-center justify-center gap-1.5",
                                    children:
                                      "⚡ Rút trích dữ liệu (Exfiltrate Data) & Kích hoạt hành vi bên thứ 3",
                                  }),
                              ],
                            }),
                            yt === "leaked" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    style: { backgroundColor: "#171a26", borderColor: "rgba(244, 63, 94, 0.3)" },
                                    className:
                                      "spyware-hijack-card border p-5 sm:p-6 rounded-3xl space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("h6", {
                                        style: { color: "#fb7185", fontWeight: 800 },
                                        className:
                                          "text-sm sm:text-base font-medium font-black text-rose-500 uppercase tracking-wide flex items-center gap-1.5",
                                        children:
                                          "🌐 MỞ TRANG WEB KHÔNG MONG MUỐN (WEB HIJACK):",
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        style: { color: "#cbd5e1" },
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 font-semibold mb-2 leading-relaxed",
                                        children:
                                          "Trình duyệt tự động bị chuyển hướng sang các trang web cờ bạc lừa đảo, quảng cáo khiêu dâm trái phép:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            style: { backgroundColor: "#202637", borderColor: "rgba(244, 63, 94, 0.25)" },
                                            className:
                                              "spyware-url-item flex items-center gap-1.5 font-mono text-sm sm:text-base font-semibold px-2.5 py-3 rounded border",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "🔗",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                style: { color: "#93c5fd", fontWeight: 600 },
                                                className: "truncate",
                                                children:
                                                  "http://gambling-slots-scam.net/jackpot-claim",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            style: { backgroundColor: "#202637", borderColor: "rgba(244, 63, 94, 0.25)" },
                                            className:
                                              "spyware-url-item flex items-center gap-1.5 font-mono text-sm sm:text-base font-semibold px-2.5 py-3 rounded border",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "🔗",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                style: { color: "#93c5fd", fontWeight: 600 },
                                                className: "truncate",
                                                children:
                                                  "http://phishing-banking-portal-secure.ru/alert",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            style: { backgroundColor: "#202637", borderColor: "rgba(244, 63, 94, 0.25)" },
                                            className:
                                              "spyware-url-item flex items-center gap-1.5 font-mono text-sm sm:text-base font-semibold px-2.5 py-3 rounded border",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "🔗",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                style: { color: "#93c5fd", fontWeight: 600 },
                                                className: "truncate",
                                                children:
                                                  "http://malicious-ext-adware-installer.xyz",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    style: { backgroundColor: "#1b1922", borderColor: "rgba(251, 146, 60, 0.3)" },
                                    className:
                                      "spyware-altered-card border p-5 sm:p-6 rounded-3xl space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("h6", {
                                        style: { color: "#fb923c", fontWeight: 800 },
                                        className:
                                          "text-sm sm:text-base font-medium font-black text-orange-500 uppercase tracking-wide flex items-center gap-1.5",
                                        children:
                                          "🛠️ THAY ĐỔI CHỨC NĂNG MÁY TÍNH (SYSTEM ALTERED):",
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        style: { color: "#cbd5e1" },
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 font-semibold mb-2 leading-relaxed",
                                        children:
                                          "Spyware can thiệp sâu sửa đổi Registry và tệp hệ thống để vô hiệu hóa người dùng:",
                                      }),
                                      jsxRuntimeExports.jsxs("ul", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-300 font-semibold space-y-1.5 list-disc list-inside",
                                        children: [
                                          jsxRuntimeExports.jsxs("li", {
                                            style: { color: "#fdba74" },
                                            className: "text-orange-400",
                                            children: [
                                              "Vô hiệu hóa ",
                                              jsxRuntimeExports.jsx("span", {
                                                style: { color: "#fde047", fontWeight: 700 },
                                                className: "font-bold",
                                                children: "Task Manager",
                                              }),
                                              " để không thể tắt spyware",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            style: { color: "#fdba74" },
                                            className: "text-orange-400",
                                            children: [
                                              "Khóa tổ hợp phím hệ thống ",
                                              jsxRuntimeExports.jsx("span", {
                                                style: { color: "#fde047", fontWeight: 700 },
                                                className: "font-bold",
                                                children:
                                                  "Ctrl+Alt+Del, Alt+F4",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("li", {
                                            style: { color: "#fdba74" },
                                            className: "text-orange-400",
                                            children:
                                              "Đảo ngược nút chuột trái và nút chuột phải",
                                          }),
                                          jsxRuntimeExports.jsx("li", {
                                            style: { color: "#fdba74" },
                                            className: "text-orange-400",
                                            children:
                                              "Ghi đè cấu hình DNS khiến bạn không thể truy cập các trang diệt virus",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-8 sm:p-5 bg-slate-100 rounded-3xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10.5px] text-slate-650 dark:text-slate-350 font-semibold leading-relaxed",
                              children: [
                                "💡 ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Kiến thức IC3 GS6:",
                                }),
                                " Spyware (phần mềm gián điệp) được cài lén lút vào hệ thống để ghi nhận mật khẩu rõ của người dùng (không bị ẩn đi như dấu *), sau đó gửi cho bên thứ ba. Bên thứ ba sử dụng dữ liệu này để xâm nhập tài khoản, thay đổi chức năng máy tính và dội bom quảng cáo pop-up rác khắp màn hình.",
                              ],
                            }),
                            ye.map((S) =>
                              jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className:
                                    "absolute bg-white dark:bg-slate-900 border-2 border-red-500 rounded-3xl shadow-2xl p-5 sm:p-6 w-72 space-y-2 animate-bounce z-50 transition-all duration-300",
                                  style: {
                                    top: `${S.top}%`,
                                    left: `${S.left}%`,
                                  },
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between items-center bg-red-600 text-white px-2 py-1 rounded-md text-[9px] font-black uppercase",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: S.title,
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => Xs(S.id),
                                          className:
                                            "bg-black/30 hover:bg-black/50 text-white px-1 rounded font-extrabold",
                                          children: "X",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 font-bold leading-relaxed",
                                      children: S.content,
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => Xs(S.id),
                                      className:
                                        "w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[9px] py-1 rounded font-black hover:bg-red-500 hover:text-white",
                                      children: "Click to Claim Reward",
                                    }),
                                  ],
                                },
                                S.id,
                              ),
                            ),
                          ],
                        }),
                      A === 3 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 text-left",
                          children: [
                            Pe === "inbox" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 uppercase",
                                    children:
                                      "Hộp thư Email cá nhân của em nhận được email sau:",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "border border-slate-200 bg-white rounded-3xl overflow-hidden dark:bg-slate-900 dark:border-slate-800 shadow-xs",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-50 p-8 sm:p-5 border-b border-slate-100 dark:bg-slate-850 dark:border-slate-800 flex justify-between items-center",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white",
                                                children: [
                                                  "Người gửi: ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-red-500 font-black",
                                                      children:
                                                        "support@gmai1-security-verification.com",
                                                    },
                                                  ),
                                                  " ⚠️",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold mt-0.5",
                                                children:
                                                  "Tiêu đề: 🔴 CẢNH BÁO: Tài khoản của bạn sẽ bị khóa sau 24h nếu không xác minh!",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[8px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-black",
                                            children: "KHẨN CẤP",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 text-sm sm:text-base font-medium space-y-2 text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            children:
                                              "Xin chào quý khách hàng,",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            children:
                                              "Chúng tôi phát hiện có hành vi đăng nhập bất hợp pháp vào tài khoản Gmail của bạn từ vị trí lạ. Để đảm bảo an toàn, vui lòng nhấn vào đường liên kết bên dưới để xác thực danh tính ngay lập tức.",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-red-600 font-black",
                                            children:
                                              "Nếu không hoàn thành xác thực, tài khoản của bạn sẽ bị tạm khóa vĩnh viễn sau 24 giờ.",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "pt-2",
                                            children: jsxRuntimeExports.jsx(
                                              "button",
                                              {
                                                onClick: () => W("fake-login"),
                                                className:
                                                  "px-5 sm:px-6 py-3 bg-blue-600 text-white font-extrabold rounded-3xl hover:bg-blue-700 transition-all cursor-pointer",
                                                children:
                                                  "🔗 Nhấp vào đây để xác minh tài khoản",
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: () => Mt(!0),
                                        className:
                                          "px-5 sm:px-6 py-3 bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold text-sm sm:text-base font-medium rounded-3xl transition-all dark:bg-slate-850 dark:text-purple-400 cursor-pointer",
                                        children:
                                          "💡 Kiểm tra dấu hiệu lừa đảo?",
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: () => {
                                          (W("reported"),
                                            alert(
                                              "🛡️ Tuyệt vời! Em đã xử lý chính xác theo quy chuẩn an toàn của IC3.",
                                            ));
                                        },
                                        className:
                                          "px-5 sm:px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 font-extrabold text-sm sm:text-base font-medium rounded-3xl transition-all shadow-xs cursor-pointer ml-auto",
                                        children:
                                          "🚩 Báo cáo Spam/Phishing & Xóa email",
                                      }),
                                    ],
                                  }),
                                  ft &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 rounded-3xl border border-purple-200 bg-purple-50/50 text-sm sm:text-base font-bold text-purple-800 dark:bg-slate-900/40 dark:border-slate-800 dark:text-purple-300 leading-relaxed",
                                      children: [
                                        "🕵️‍♂️ Các điểm đáng ngờ:",
                                        jsxRuntimeExports.jsxs("ul", {
                                          className:
                                            "list-disc list-inside mt-1 font-semibold space-y-1 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400",
                                          children: [
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                "Địa chỉ email người gửi giả mạo: ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className: "text-rose-500",
                                                    children: "gmai1",
                                                  },
                                                ),
                                                " (thay vì ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-emerald-500",
                                                    children: "gmail",
                                                  },
                                                ),
                                                ").",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("li", {
                                              children:
                                                'Tạo áp lực tâm lý khẩn cấp ("khóa tài khoản sau 24h") để lừa bạn hành động nhanh mà không suy nghĩ kỹ.',
                                            }),
                                            jsxRuntimeExports.jsx("li", {
                                              children:
                                                "Yêu cầu đăng nhập thông qua một đường link lạ không thuộc sở hữu chính thức của Google.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            Pe === "fake-login" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-slate-100 border border-slate-300 rounded-t-xl p-8 sm:p-5 flex items-center gap-2 dark:bg-slate-900 dark:border-slate-800",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2.5 w-2.5 rounded-full bg-red-400",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2.5 w-2.5 rounded-full bg-yellow-400",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2.5 w-2.5 rounded-full bg-green-400",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex-1 bg-white border rounded px-2.5 py-0.5 text-sm sm:text-base font-semibold font-mono text-rose-500 font-bold dark:bg-slate-950 dark:border-slate-850 flex justify-between",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "🌐 http://accounts.gmai1-security-verification.com/login",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-red-500 font-black",
                                            children: "⚠️ Không bảo mật",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "border border-t-0 border-slate-300 bg-white p-5 sm:p-6 rounded-b-xl dark:bg-slate-900 dark:border-slate-800 text-center space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "text-xl font-black tracking-tight",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-blue-500",
                                            children: "G",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-red-500",
                                            children: "o",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-yellow-500",
                                            children: "o",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-blue-500",
                                            children: "g",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-green-500",
                                            children: "l",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-red-500",
                                            children: "e",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("h4", {
                                        className:
                                          "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                        children: "Đăng nhập tài khoản của bạn",
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 font-semibold",
                                        children:
                                          "Để tiếp tục xác minh bảo mật Gmail",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "space-y-3 max-w-xs mx-auto text-left",
                                        children: [
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            placeholder:
                                              "Email hoặc số điện thoại",
                                            value: Me,
                                            onChange: (S) => et(S.target.value),
                                            className:
                                              "w-full text-sm sm:text-base font-bold border rounded p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 dark:border-slate-850",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "password",
                                            placeholder: "Nhập mật khẩu",
                                            value: Je,
                                            onChange: (S) => Et(S.target.value),
                                            className:
                                              "w-full text-sm sm:text-base font-bold border rounded p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 dark:border-slate-850",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => W("success-stolen"),
                                            disabled: !Me || !Je,
                                            className:
                                              "w-full py-3 bg-blue-600 text-white text-sm sm:text-base font-extrabold rounded-md hover:bg-blue-700 transition-all disabled:opacity-50 cursor-pointer",
                                            children: "Tiếp tục",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: () => W("inbox"),
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 hover:underline block mx-auto font-bold mt-2",
                                        children:
                                          "← Quay lại và rời khỏi trang web nguy hiểm này",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Pe === "success-stolen" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-red-200 bg-red-500/10 p-5 sm:p-6 text-center space-y-3 dark:border-slate-800 dark:bg-slate-900/40",
                                children: [
                                  jsxRuntimeExports.jsx(Skull, {
                                    className:
                                      "h-10 w-10 text-red-500 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "font-black text-sm sm:text-base font-medium text-red-700 dark:text-red-400 uppercase tracking-wide",
                                    children:
                                      "🔴 THÔNG TIN ĐÃ BỊ TIN TẶC CHIẾM ĐOẠT!",
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-bold leading-relaxed",
                                    children: [
                                      "Em vừa nhập tài khoản ",
                                      jsxRuntimeExports.jsxs("strong", {
                                        className:
                                          "text-slate-800 dark:text-white",
                                        children: ['"', Me, '"'],
                                      }),
                                      " và mật khẩu thật của mình vào trang web lừa đảo. Tin tặc hiện đã sở hữu tài khoản này để rút trích toàn bộ thư từ, thông tin cá nhân và tiền bạc.",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => {
                                      (W("inbox"), et(""), Et(""));
                                    },
                                    className:
                                      "mt-2 inline-flex items-center gap-1.5 bg-white border border-red-300 text-red-700 font-extrabold text-sm sm:text-base font-medium px-5 sm:px-5 py-3 rounded-3xl hover:bg-red-50 transition-all dark:bg-slate-800 dark:text-red-400 dark:border-slate-700 cursor-pointer",
                                    children:
                                      "Quay lại làm lại một cách an toàn hơn",
                                  }),
                                ],
                              }),
                            Pe === "reported" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "rounded-3xl border border-emerald-200 bg-emerald-500/10 p-5 sm:p-6 text-center space-y-3 dark:border-slate-800 dark:bg-slate-900/40",
                                children: [
                                  jsxRuntimeExports.jsx(ShieldCheck, {
                                    className:
                                      "h-10 w-10 text-emerald-500 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "font-black text-sm sm:text-base font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wide",
                                    children:
                                      "🛡️ CHÚC MỪNG! EM ĐÃ BẢO VỆ MÁY TÍNH AN TOÀN!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-bold leading-relaxed",
                                    children:
                                      "Hành động phát hiện lỗi đánh vần người gửi giả mạo và nhấn báo cáo Spam/Phishing là quyết định tuyệt vời của một công dân số thông thái.",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => W("inbox"),
                                    className:
                                      "mt-2 inline-flex items-center gap-1.5 bg-white border border-emerald-300 text-emerald-700 font-extrabold text-sm sm:text-base font-medium px-5 sm:px-5 py-3 rounded-3xl hover:bg-emerald-50 transition-all dark:bg-slate-800 dark:text-emerald-400 dark:border-slate-700 cursor-pointer",
                                    children: "Quay lại hòm thư email",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      A === 8 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 text-left relative min-h-96",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-2.5",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-200 flex items-center gap-1.5 uppercase",
                                  children: [
                                    jsxRuntimeExports.jsx(Megaphone, {
                                      className:
                                        "h-4 w-4 text-amber-500 animate-pulse",
                                    }),
                                    " Trình trạng trình duyệt web:",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium",
                                  children:
                                    "Màn hình mô phỏng khi Adware (phần mềm quảng cáo) xâm chiếm máy tính của bạn và tự động đẩy ra hàng loạt cửa sổ quảng cáo rác không thể đóng nổi.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-3xl p-5 sm:p-6 border border-slate-800 space-y-1 font-mono text-sm sm:text-base font-semibold text-emerald-400 h-36 sm:h-40 overflow-y-auto scrollbar-thin",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-slate-500 uppercase font-black text-[8px] border-b border-slate-900 pb-1 flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Terminal, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    " BẢN GHI HOẠT ĐỘNG CỦA ADWARE (LOGS):",
                                  ],
                                }),
                                Ze.length === 0
                                  ? jsxRuntimeExports.jsx("p", {
                                      className: "text-slate-500 italic",
                                      children:
                                        "Nhấn nút bên dưới để kích hoạt dội bom quảng cáo Adware...",
                                    })
                                  : Ze.map((S, J) =>
                                      jsxRuntimeExports.jsx(
                                        "p",
                                        {
                                          className: S.includes("🚨")
                                            ? "text-rose-400 font-bold"
                                            : "",
                                          children: S,
                                        },
                                        J,
                                      ),
                                    ),
                              ],
                            }),
                            D
                              ? jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "rounded-3xl border border-rose-200 bg-rose-50/40 p-5 sm:p-6 text-sm sm:text-base font-bold text-rose-800 dark:border-slate-800 dark:bg-slate-900/40 dark:text-rose-400 flex items-center gap-2",
                                      children: [
                                        jsxRuntimeExports.jsx(TriangleAlert, {
                                          className:
                                            "h-5 w-5 shrink-0 text-amber-500",
                                        }),
                                        "Adware đã dội bom hàng loạt cửa sổ quảng cáo lên trình duyệt. Nhiều tệp rác quảng cáo đang hoạt động ngầm làm nghẽn hiệu năng máy!",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (Re(!1), Ge([]), Nt([]));
                                      },
                                      className:
                                        "w-full bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm sm:text-base font-medium py-3 rounded-3xl transition-all cursor-pointer text-center",
                                      children: "Reset mô phỏng Adware",
                                    }),
                                  ],
                                })
                              : jsxRuntimeExports.jsx("button", {
                                  onClick: ws,
                                  className:
                                    "w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm sm:text-base font-medium py-3 rounded-3xl transition-all shadow-md active:scale-95 hover:scale-103 transition-all flex justify-center items-center gap-1.5 cursor-pointer",
                                  children:
                                    "🚀 Kích hoạt mô phỏng Adware (Hàng loạt Pop-up)",
                                }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-8 sm:p-5 bg-slate-100 rounded-3xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10.5px] text-slate-650 dark:text-slate-350 font-semibold leading-relaxed",
                              children: [
                                "💡 ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Bài học IC3 GS6:",
                                }),
                                " Adware (Phần mềm quảng cáo) tự cài đặt khi em cài đặt ứng dụng miễn phí không rõ nguồn gốc. Nó phá hoại trải nghiệm người dùng bằng cách tự động bật lên các trang pop-up rác, chuyển hướng trình duyệt ngoài ý muốn và làm giảm đáng kể hiệu năng của máy tính.",
                              ],
                            }),
                            Ve.map((S) =>
                              jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className:
                                    "absolute bg-white dark:bg-slate-900 border-2 border-amber-500 rounded-3xl shadow-2xl p-8 sm:p-5 w-64 space-y-1.5 animate-bounce z-50 transition-all duration-300",
                                  style: {
                                    top: `${S.top}%`,
                                    left: `${S.left}%`,
                                  },
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between items-center bg-amber-500 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "🔥 CHÚC MỪNG PHẦN THƯỞNG!",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => fs(S.id),
                                          className:
                                            "bg-black/20 hover:bg-black/45 text-white px-1 rounded font-extrabold",
                                          children: "X",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-800 dark:text-slate-200 leading-tight",
                                      children: S.title,
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-[9px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                                      children: S.content,
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => fs(S.id),
                                      className:
                                        "w-full bg-amber-500 hover:bg-amber-600 text-white text-[9px] py-1 rounded font-black transition-all",
                                      children: "Bấm Nhận Quà Ngay!",
                                    }),
                                  ],
                                },
                                S.id,
                              ),
                            ),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      });
    }

    return Lab5;
  };
})();
