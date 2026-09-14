/**
 * Lab 23: 6 Bước tạo Game Di động
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab23 = window.AGY_LABS[23] = function (env) {
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

    function Lab23({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState(!1),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState(!1),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(!1),
        [A, O] = reactExports.useState(""),
        [L, le] = reactExports.useState(""),
        [P, G] = reactExports.useState(""),
        [ee, ce] = reactExports.useState(""),
        [V, pe] = reactExports.useState(""),
        [Ie, se] = reactExports.useState({
          "Nhiệm vụ": !1,
          Boss: !1,
          "Phần thưởng": !1,
          "Vật phẩm đặc biệt": !1,
          "Các màn chơi thú vị": !1,
        }),
        [de, _] = reactExports.useState(""),
        [U, Z] = reactExports.useState({
          "Nhân vật": !1,
          "Bối cảnh": !1,
          "Hiệu ứng": !1,
          "Biểu tượng": !1,
          "Giao diện": !1,
        }),
        [be, he] = reactExports.useState({
          "Hiển thị quảng cáo": !1,
          "Bán vật phẩm trong game": !1,
          "Gói Premium": !1,
          "Thu phí tải game": !1,
        }),
        [E, v] = reactExports.useState(""),
        [K, te] = reactExports.useState(""),
        [je, Se] = reactExports.useState({
          "Lập trình viên Game (Gameplay Coder)": !1,
          "Lập trình viên Đồ họa & Physics": !1,
          "Lập trình viên Server & Backend": !1,
          "Công ty / Studio Outsource Game": !1,
          "Chuyên gia Kiểm thử & Tối ưu (Tester)": !1,
        }),
        [He, Xe] = reactExports.useState(100),
        [Qe, qe] = reactExports.useState(1250),
        [at, ze] = reactExports.useState(45),
        [De, tt] = reactExports.useState([]),
        [it, oe] = reactExports.useState(!1),
        ge = !!(
          A.trim() ||
          L ||
          P ||
          ee ||
          V.trim() ||
          Object.values(Ie).some(Boolean) ||
          de ||
          Object.values(U).some(Boolean) ||
          Object.values(be).some(Boolean) ||
          E ||
          K ||
          Object.values(je).some(Boolean)
        ),
        ae = (C) => {
          try {
            const Ee = window.AudioContext || window.webkitAudioContext;
            if (!Ee) return;
            const ke = new Ee();
            if (C === "click") {
              const We = ke.createOscillator(),
                ht = ke.createGain();
              ((We.type = "sine"),
                We.frequency.setValueAtTime(600, ke.currentTime),
                ht.gain.setValueAtTime(0.12, ke.currentTime),
                ht.gain.exponentialRampToValueAtTime(
                  0.01,
                  ke.currentTime + 0.08,
                ),
                We.connect(ht),
                ht.connect(ke.destination),
                We.start(),
                We.stop(ke.currentTime + 0.08));
            } else if (C === "hit") {
              const We = ke.createOscillator(),
                ht = ke.createGain();
              ((We.type = "square"),
                We.frequency.setValueAtTime(220, ke.currentTime),
                We.frequency.exponentialRampToValueAtTime(
                  110,
                  ke.currentTime + 0.1,
                ),
                ht.gain.setValueAtTime(0.2, ke.currentTime),
                ht.gain.exponentialRampToValueAtTime(
                  0.01,
                  ke.currentTime + 0.1,
                ),
                We.connect(ht),
                ht.connect(ke.destination),
                We.start(),
                We.stop(ke.currentTime + 0.1));
            } else if (C === "success") {
              const We = ke.createOscillator(),
                ht = ke.createGain();
              ((We.type = "triangle"),
                We.frequency.setValueAtTime(523.25, ke.currentTime),
                We.frequency.exponentialRampToValueAtTime(
                  1046.5,
                  ke.currentTime + 0.2,
                ),
                ht.gain.setValueAtTime(0.2, ke.currentTime),
                ht.gain.exponentialRampToValueAtTime(
                  0.01,
                  ke.currentTime + 0.22,
                ),
                We.connect(ht),
                ht.connect(ke.destination),
                We.start(),
                We.stop(ke.currentTime + 0.22));
            } else
              C === "win" &&
                [523.25, 659.25, 783.99, 1046.5].forEach((ht, lt) => {
                  const Fe = ke.createOscillator(),
                    rt = ke.createGain();
                  ((Fe.type = "sine"),
                    Fe.frequency.setValueAtTime(ht, ke.currentTime + lt * 0.1),
                    rt.gain.setValueAtTime(0.2, ke.currentTime + lt * 0.1),
                    rt.gain.exponentialRampToValueAtTime(
                      0.01,
                      ke.currentTime + lt * 0.1 + 0.28,
                    ),
                    Fe.connect(rt),
                    rt.connect(ke.destination),
                    Fe.start(ke.currentTime + lt * 0.1),
                    Fe.stop(ke.currentTime + lt * 0.1 + 0.28));
                });
          } catch {}
        },
        Ae = (C) => {
          if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const Ee = new SpeechSynthesisUtterance(C);
            ((Ee.lang = "vi-VN"),
              (Ee.rate = 1),
              oe(!0),
              (Ee.onend = () => oe(!1)),
              (Ee.onerror = () => oe(!1)),
              window.speechSynthesis.speak(Ee));
          }
        },
        Q = (C) => {
          (ae("success"),
            I(!0),
            C === 1 && c(!0),
            C === 2 && m(!0),
            C === 3 && g(!0),
            C === 4 && f(!0),
            C === 5 && k(!0),
            C === 6 ? (M(!0), z(!0), ae("win"), a()) : i(C + 1));
        },
        Te = () => {
          (ae("click"), n > 1 && i(n - 1));
        },
        $e = () => {
          (ae("click"),
            i(1),
            c(!1),
            I(!1),
            m(!1),
            g(!1),
            f(!1),
            k(!1),
            M(!1),
            z(!1),
            O(""),
            le(""),
            G(""),
            ce(""),
            pe(""),
            se({
              "Nhiệm vụ": !1,
              Boss: !1,
              "Phần thưởng": !1,
              "Vật phẩm đặc biệt": !1,
              "Các màn chơi thú vị": !1,
            }),
            _(""),
            Z({
              "Nhân vật": !1,
              "Bối cảnh": !1,
              "Hiệu ứng": !1,
              "Biểu tượng": !1,
              "Giao diện": !1,
            }),
            he({
              "Hiển thị quảng cáo": !1,
              "Bán vật phẩm trong game": !1,
              "Gói Premium": !1,
              "Thu phí tải game": !1,
            }),
            v(""),
            te(""),
            Se({
              "Lập trình viên Game (Gameplay Coder)": !1,
              "Lập trình viên Đồ họa & Physics": !1,
              "Lập trình viên Server & Backend": !1,
              "Công ty / Studio Outsource Game": !1,
              "Chuyên gia Kiểm thử & Tối ưu (Tester)": !1,
            }),
            Xe(100),
            qe(1250),
            ze(45));
        },
        _e = (C) => {
          if (!ge) return;
          const Ee = C.currentTarget.getBoundingClientRect(),
            ke = C.clientX - Ee.left,
            We = C.clientY - Ee.top;
          (ae("hit"),
            Xe((lt) => (lt <= 10 ? 100 : lt - 15)),
            qe((lt) => lt + 50),
            ze((lt) => lt + 1));
          const ht = { id: Date.now(), x: ke, y: We, text: "-15 HP! +50🪙" };
          (tt((lt) => [...lt, ht]),
            setTimeout(() => {
              tt((lt) => lt.filter((Fe) => Fe.id !== ht.id));
            }, 800));
        },
        Ue = (C) =>
          C
            ? C.includes("Mèo Ninja")
              ? "🐱‍👤"
              : C.includes("Chiến binh")
                ? "👨‍🚀"
                : C.includes("Hiệp sĩ")
                  ? "🛡️"
                  : C.includes("Robot")
                    ? "🤖"
                    : "🦸‍♂️"
            : "❓",
        Ke = (C) =>
          C
            ? C.includes("Hacker")
              ? "🦹‍♂️"
              : C.includes("Độc Xà")
                ? "🐍"
                : C.includes("Rồng Lửa")
                  ? "🐉"
                  : C.includes("Quái Vật")
                    ? "👾"
                    : "👹"
            : "❓",
        ot = (C) => {
          switch (C) {
            case "Pixel Art 8-bit":
              return "bg-slate-950 text-emerald-400 font-mono border-2 border-emerald-500";
            case "Cartoon 2D":
              return "bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 text-white font-sans";
            case "Anime Stylized":
              return "bg-gradient-to-b from-pink-500 via-purple-600 to-slate-900 text-pink-100";
            case "Cyberpunk 3D":
              return "bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 text-cyan-300";
            default:
              return "bg-white text-slate-900 border-2 border-slate-200";
          }
        },
        w = [
          {
            num: 1,
            label: "Bước 01",
            name: "Ý tưởng câu chuyện",
            icon: BookOpen,
          },
          { num: 2, label: "Bước 02", name: "Kế hoạch thu hút", icon: Target },
          {
            num: 3,
            label: "Bước 03",
            name: "Thiết kế nghệ thuật",
            icon: Palette,
          },
          { num: 4, label: "Bước 04", name: "Tích hợp kiếm tiền", icon: Coins },
          { num: 5, label: "Bước 05", name: "Nền tảng & Ngôn ngữ", icon: Code },
          {
            num: 6,
            label: "Bước 06",
            name: "Nhà phát triển & Studio",
            icon: Users,
          },
        ];
      return jsxRuntimeExports.jsxs("div", {
        className: "w-full space-y-6 text-slate-800 dark:text-slate-100",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-white shadow-lg",
            children: [
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute right-0 top-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute left-0 bottom-0 -mb-8 -ml-8 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl",
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "text-left space-y-2",
                    children: [
                      jsxRuntimeExports.jsxs("span", {
                        className:
                          "inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400",
                        children: [
                          jsxRuntimeExports.jsx(Gamepad2, {
                            className:
                              "h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400",
                          }),
                          " LAB 23 • GAME DEVELOPMENT SIMULATOR",
                        ],
                      }),
                      jsxRuntimeExports.jsx("h1", {
                        className:
                          "text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-3",
                        children: jsxRuntimeExports.jsx("span", {
                          children:
                            "🎮 MÔ PHỎNG: TRỞ THÀNH NHÀ PHÁT TRIỂN GAME",
                        }),
                      }),
                      jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed",
                        children: [
                          "Bạn vừa thành lập ",
                          jsxRuntimeExports.jsx("strong", {
                            children: "Dream Game Studio",
                          }),
                          ". Mục tiêu của bạn là tạo ra một trò chơi di động thật hấp dẫn để phát hành lên Google Play và App Store. Hãy chọn từng tùy chọn ở 6 bước dưới đây để cập nhật ngay lên điện thoại!",
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto",
                    children: [
                      jsxRuntimeExports.jsxs("button", {
                        onClick: $e,
                        className:
                          "px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                        children: [
                          jsxRuntimeExports.jsx(RotateCw, {
                            className:
                              "h-4.5 w-4.5 text-emerald-600 dark:text-emerald-400",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "Bắt đầu lại",
                          }),
                        ],
                      }),
                      R &&
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "px-5 py-3 rounded-2xl bg-emerald-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md",
                          children: [
                            jsxRuntimeExports.jsx(Trophy, {
                              className: "h-5 w-5",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "Đã phát hành Game!",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-lg space-y-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-200 dark:border-slate-800",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400",
                        children: jsxRuntimeExports.jsx(Sparkles, {
                          className: "h-5 w-5",
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "text-left",
                        children: [
                          jsxRuntimeExports.jsx("h2", {
                            className:
                              "text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wider",
                            children:
                              "Quy Trình 6 Bước Phát Triển Trò Chơi Di Động",
                          }),
                          jsxRuntimeExports.jsxs("p", {
                            className:
                              "text-xs font-semibold text-slate-500 dark:text-slate-400",
                            children: [
                              "Studio: Dream Game Studio • Dự án: ",
                              A || "(Chưa đặt tên game)",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("span", {
                    className:
                      "self-start sm:self-auto text-xs font-black text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0",
                    children: ["Bước ", n, "/6"],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
                children: w.map((C) => {
                  const Ee = C.icon,
                    ke = n === C.num,
                    We =
                      (C.num === 1 && l) ||
                      (C.num === 2 && d) ||
                      (C.num === 3 && u) ||
                      (C.num === 4 && p) ||
                      (C.num === 5 && b) ||
                      (C.num === 6 && N);
                  return jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        (ae("click"), i(C.num));
                      },
                      className: `p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[110px] ${ke ? "bg-emerald-600 border-emerald-600 text-white shadow-xl ring-4 ring-emerald-400/30 scale-[1.02] z-10" : We ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 hover:border-emerald-500" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-emerald-400 hover:shadow-md"}`,
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between w-full mb-2",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: `p-2 rounded-xl transition-colors ${ke ? "bg-white/20 text-white" : We ? "bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200" : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"}`,
                              children: jsxRuntimeExports.jsx(Ee, {
                                className: "h-4.5 w-4.5",
                              }),
                            }),
                            We
                              ? jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-xs",
                                  children: jsxRuntimeExports.jsx(Check, {
                                    className: "h-3.5 w-3.5 stroke-[3]",
                                  }),
                                })
                              : jsxRuntimeExports.jsxs("span", {
                                  className: `text-xs font-black px-2 py-0.5 rounded-full ${ke ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`,
                                  children: ["0", C.num],
                                }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "mt-1 space-y-0.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className: `text-[10px] font-black uppercase tracking-wider block ${ke ? "text-emerald-100" : We ? "text-emerald-700 dark:text-emerald-400" : "text-emerald-600 dark:text-emerald-400"}`,
                              children: C.label,
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: `text-xs sm:text-sm font-black leading-snug tracking-tight ${ke ? "text-white" : "text-slate-900 dark:text-white"}`,
                              children: C.name,
                            }),
                          ],
                        }),
                      ],
                    },
                    C.num,
                  );
                }),
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-7 space-y-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden text-left",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-100 dark:bg-slate-950 px-6 py-4 border-b-2 border-slate-200 dark:border-slate-800 flex items-center justify-between",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className: "text-xl",
                                children: "🟢",
                              }),
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "font-black text-sm text-slate-900 dark:text-white uppercase tracking-wider",
                                children: [
                                  n === 1 &&
                                    "BƯỚC 1: XÂY DỰNG Ý TƯỞNG CÂU CHUYỆN",
                                  n === 2 &&
                                    "BƯỚC 2: LÊN KẾ HOẠCH ĐỂ TRÒ CHƠI GÂY THU HÚT",
                                  n === 3 &&
                                    "BƯỚC 3: THIẾT KẾ TÁC PHẨM NGHỆ THUẬT",
                                  n === 4 &&
                                    "BƯỚC 4: TÍCH HỢP CHIẾN LƯỢC KIẾM TIỀN",
                                  n === 5 &&
                                    "BƯỚC 5: CHỌN NỀN TẢNG MÃ HÓA & NGÔN NGỮ LẬP TRÌNH",
                                  n === 6 &&
                                    "BƯỚC 6: CHỌN NHÀ PHÁT TRIỂN & CÔNG TY LẬP TRÌNH GAME",
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("button", {
                            onClick: () => {
                              (n === 1 &&
                                Ae(
                                  "BƯỚC 1: XÂY DỰNG Ý TƯỞNG CÂU CHUYỆN. Tên game, nhân vật chính, phản diện, cách chơi và mục tiêu.",
                                ),
                                n === 2 &&
                                  Ae(
                                    "BƯỚC 2: LÊN KẾ HOẠCH BỔ SUNG CÁC YẾU TỐ HẤP DẪN. Nhiệm vụ, boss, phần thưởng, vật phẩm đặc biệt và các màn chơi.",
                                  ),
                                n === 3 &&
                                  Ae(
                                    "BƯỚC 3: THIẾT KẾ TÁC PHẨM NGHỆ THUẬT. Chọn phong cách đồ họa và thiết kế nhân vật, bối cảnh, hiệu ứng.",
                                  ),
                                n === 4 &&
                                  Ae(
                                    "BƯỚC 4: TÍCH HỢP CHIẾN LƯỢC KIẾM TIỀN. Quảng cáo, bán vật phẩm, gói premium hoặc thu phí tải game.",
                                  ),
                                n === 5 &&
                                  Ae(
                                    "BƯỚC 5: CHỌN NỀN TẢNG MÃ HÓA VÀ NGÔN NGỮ LẬP TRÌNH. Chọn C sharp, Java, C cộng cộng, GDScript, JavaScript hoặc Swift.",
                                  ),
                                n === 6 &&
                                  Ae(
                                    "BƯỚC 6: CHỌN NHÀ PHÁT TRIỂN HOẶC CÔNG TY LẬP TRÌNH GAME. Lựa chọn công ty outsource, lập trình viên in house, freelancer hoặc indie dev.",
                                  ));
                            },
                            className: `px-3.5 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 text-xs font-black cursor-pointer shadow-xs ${it ? "bg-emerald-600 border-emerald-600 text-white animate-pulse" : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"}`,
                            children: [
                              jsxRuntimeExports.jsx(Volume2, {
                                className:
                                  "h-4 w-4 text-emerald-600 dark:text-emerald-400",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                children: it ? "Đang đọc..." : "Đọc hướng dẫn",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "p-6 space-y-5 bg-slate-50/60 dark:bg-slate-900/90",
                        children: jsxRuntimeExports.jsxs(AnimatePresence, {
                          mode: "wait",
                          children: [
                            n === 1 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children: [
                                        "Hãy nhập Tên game và chọn các yếu tố cốt truyện. Mọi thao tác sẽ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "cập nhật NGAY TRỰC TIẾP",
                                        }),
                                        " lên chiếc điện thoại bên phải:",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children: "Tên trò chơi của bạn:",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: A,
                                          onChange: (C) => {
                                            (O(C.target.value), I(!0));
                                          },
                                          className:
                                            "w-full p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 font-black text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none",
                                          placeholder:
                                            "Nhập tên trò chơi của bạn (ví dụ: Cyber Cat Hero)...",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children: "• Chọn nhân vật chính:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                          children: [
                                            "Mèo Ninja Cyber",
                                            "Chiến binh Vũ trụ",
                                            "Hiệp sĩ Rồng",
                                            "Robot Tương lai",
                                          ].map((C) =>
                                            jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"), le(C), I(!0));
                                                },
                                                className: `p-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${L === C ? "bg-emerald-600 border-emerald-600 text-white shadow-md scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: Ue(C) },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: C },
                                                  ),
                                                ],
                                              },
                                              C,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "• Chọn nhân vật phản diện:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                          children: [
                                            "Ma Vương",
                                            "Độc Xà Độc Ác",
                                            "Rồng Lửa Cổ Đại",
                                            "Quái Vật Vũ Trụ",
                                          ].map((C) =>
                                            jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"), G(C), I(!0));
                                                },
                                                className: `p-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${P === C ? "bg-rose-600 border-rose-600 text-white shadow-md scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-rose-400"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: Ke(C) },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: C },
                                                  ),
                                                ],
                                              },
                                              C,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "• Cách chơi chính (Gameplay):",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                          children: [
                                            "Vuốt né chướng ngại vật & chiến đấu",
                                            "Giải đố mê cung & thu thập mảnh vỡ",
                                            "Bắn súng góc nhìn thứ 3 & bảo vệ căn cứ",
                                            "Xây dựng thành phố & điều khiển quân đội",
                                          ].map((C) =>
                                            jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"), ce(C), I(!0));
                                                },
                                                className: `p-3 rounded-xl border-2 text-xs font-black text-left transition-all cursor-pointer ${ee === C ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400"}`,
                                                children: ["• ", C],
                                              },
                                              C,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "• Mục tiêu cuối cùng của trò chơi:",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: V,
                                          onChange: (C) => {
                                            (pe(C.target.value), I(!0));
                                          },
                                          className:
                                            "w-full p-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none",
                                          placeholder:
                                            "Nhập mục tiêu game (ví dụ: Giải cứu thế giới Cyber & Phá hủy căn cứ Hacker)...",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children:
                                            A.trim() && L && P && ee && V.trim()
                                              ? "✅ Kết quả: Bạn đã có cốt truyện và ý tưởng hoàn chỉnh cho trò chơi."
                                              : "💡 Hãy nhập Tên game, chọn Nhân vật chính, Phản diện, Cách chơi và Mục tiêu để hoàn thành Bước 1.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(1),
                                      className:
                                        "w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "Xác nhận Ý Tưởng & Sang Bước 2",
                                        }),
                                        jsxRuntimeExports.jsx(ArrowRight, {
                                          className: "h-4 w-4",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step1",
                              ),
                            n === 2 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children:
                                        "Bây giờ hãy nghĩ xem điều gì sẽ khiến người chơi muốn tiếp tục chơi. Bật/Tắt các yếu tố dưới đây để xuất hiện ngay trên điện thoại:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        {
                                          name: "Nhiệm vụ",
                                          desc: "Thêm bảng Daily Quest & nhiệm vụ cốt truyện",
                                        },
                                        {
                                          name: "Boss",
                                          desc: "Thêm thanh máu & trùm Boss khổng lồ thử thách",
                                        },
                                        {
                                          name: "Phần thưởng",
                                          desc: "Thêm bộ đếm Vàng, Kim Cương & Quà tặng",
                                        },
                                        {
                                          name: "Vật phẩm đặc biệt",
                                          desc: "Thêm thanh Skill hỗ trợ (Khiên, Lửa, Thuốc hồi máu)",
                                        },
                                        {
                                          name: "Các màn chơi thú vị",
                                          desc: "Thêm thanh chọn Map / Căn cứ thử thách",
                                        },
                                      ].map((C) => {
                                        const Ee = Ie[C.name];
                                        return jsxRuntimeExports.jsxs(
                                          "button",
                                          {
                                            onClick: () => {
                                              (ae("click"),
                                                se({ ...Ie, [C.name]: !Ee }),
                                                I(!0));
                                            },
                                            className: `w-full p-3.5 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${Ee ? "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-100 shadow-sm" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-400"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className: `h-6 w-6 rounded-lg flex items-center justify-center font-black ${Ee ? "bg-emerald-500 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-500"}`,
                                                    children: Ee ? "✓" : "",
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-black text-sm block",
                                                            children: [
                                                              "• ",
                                                              C.name,
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                                            children: C.desc,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `text-xs font-black px-2.5 py-1 rounded-full ${Ee ? "bg-emerald-200 text-emerald-900" : "bg-slate-100 text-slate-500"}`,
                                                children: Ee
                                                  ? "Đã bật"
                                                  : "+ Bật",
                                              }),
                                            ],
                                          },
                                          C.name,
                                        );
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children:
                                            "✅ Kế hoạch thu hút giúp trò chơi giữ chân người chơi lâu hơn.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(2),
                                      className:
                                        "w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "Xác nhận Kế Hoạch & Sang Bước 3",
                                        }),
                                        jsxRuntimeExports.jsx(ArrowRight, {
                                          className: "h-4 w-4",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step2",
                              ),
                            n === 3 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children:
                                        "Đã đến lúc làm cho trò chơi đẹp mắt. Chọn phong cách nghệ thuật đồ họa để đổi giao diện màn hình ngay:",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children: "Phong cách Đồ họa chính:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                          children: [
                                            "Cyberpunk 3D",
                                            "Pixel Art 8-bit",
                                            "Cartoon 2D",
                                            "Anime Stylized",
                                          ].map((C) =>
                                            jsxRuntimeExports.jsx(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"), _(C), I(!0));
                                                },
                                                className: `p-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer ${de === C ? "bg-purple-600 border-purple-600 text-white shadow-md scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-400"}`,
                                                children: C,
                                              },
                                              C,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "Thành phần Mỹ thuật cần thiết kế:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                          children: [
                                            { key: "Nhân vật", icon: "🎭" },
                                            { key: "Bối cảnh", icon: "🏙️" },
                                            { key: "Hiệu ứng", icon: "✨" },
                                            { key: "Biểu tượng", icon: "🎯" },
                                            { key: "Giao diện", icon: "📱" },
                                          ].map((C) => {
                                            const Ee = U[C.key];
                                            return jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"),
                                                    Z({ ...U, [C.key]: !Ee }),
                                                    I(!0));
                                                },
                                                className: `p-3 rounded-xl border-2 text-xs font-black text-left flex items-center justify-between transition-all cursor-pointer ${Ee ? "bg-purple-50 dark:bg-purple-950/80 border-purple-500 text-purple-950 dark:text-purple-100" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"}`,
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          { children: C.icon },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            children: [
                                                              "• Thiết kế ",
                                                              C.key,
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children: Ee
                                                        ? "✓ Hoàn thành"
                                                        : "+ Chọn",
                                                    },
                                                  ),
                                                ],
                                              },
                                              C.key,
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children:
                                            "✅ Trò chơi có hình ảnh và đồ họa độc đáo.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(3),
                                      className:
                                        "w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "Xác nhận Thiết Kế & Sang Bước 4",
                                        }),
                                        jsxRuntimeExports.jsx(ArrowRight, {
                                          className: "h-4 w-4",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step3",
                              ),
                            n === 4 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children:
                                        "Bạn cần quyết định trò chơi sẽ tạo doanh thu như thế nào. Lựa chọn mô hình kiếm tiền:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        {
                                          name: "Hiển thị quảng cáo",
                                          icon: "📺",
                                          desc: "Thêm banner video quảng cáo nhận hồi sinh miễn phí",
                                        },
                                        {
                                          name: "Bán vật phẩm trong game",
                                          icon: "💎",
                                          desc: "Thêm Cửa Hàng In-App Purchase mua Kim Cương & Skin",
                                        },
                                        {
                                          name: "Gói Premium",
                                          icon: "👑",
                                          desc: "Thêm huy hiệu VIP Battle Pass đặc quyền cao cấp",
                                        },
                                        {
                                          name: "Thu phí tải game",
                                          icon: "💵",
                                          desc: "Bán game dạng Paid App ($1.99) trên Google Play",
                                        },
                                      ].map((C) => {
                                        const Ee = be[C.name];
                                        return jsxRuntimeExports.jsxs(
                                          "button",
                                          {
                                            onClick: () => {
                                              (ae("click"),
                                                he({ ...be, [C.name]: !Ee }),
                                                I(!0));
                                            },
                                            className: `w-full p-3.5 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${Ee ? "bg-amber-50 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-100 shadow-sm" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className: "text-2xl",
                                                      children: C.icon,
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-black text-sm block",
                                                            children: [
                                                              "• ",
                                                              C.name,
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-xs font-semibold text-slate-500 dark:text-slate-400",
                                                            children: C.desc,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `text-xs font-black px-2.5 py-1 rounded-full ${Ee ? "bg-amber-200 text-amber-900" : "bg-slate-100 text-slate-500"}`,
                                                children: Ee
                                                  ? "✓ Bật Store"
                                                  : "+ Chọn",
                                              }),
                                            ],
                                          },
                                          C.name,
                                        );
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children:
                                            "✅ Mô hình doanh thu giúp duy trì và phát triển trò chơi lâu dài.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(4),
                                      className:
                                        "w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "Xác nhận Doanh Thu & Sang Bước 5",
                                        }),
                                        jsxRuntimeExports.jsx(ArrowRight, {
                                          className: "h-4 w-4",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step4",
                              ),
                            n === 5 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children: [
                                        "Lựa chọn ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "Nền tảng mã hóa & Ngôn ngữ lập trình chính",
                                        }),
                                        " (ví dụ: C#, Java, C++, GDScript, JavaScript/TypeScript, Swift...) để xây dựng mã nguồn trò chơi:",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                      children: [
                                        {
                                          name: "Lập trình C# (Unity Engine)",
                                          icon: "🎮",
                                          lang: "Ngôn ngữ: C#",
                                          desc: "Ngôn ngữ C# hướng đối tượng mạnh mẽ, chuẩn công nghiệp phổ biến nhất cho Game Mobile 2D/3D",
                                          recommended: !0,
                                        },
                                        {
                                          name: "Lập trình Java / Kotlin (Android Studio)",
                                          icon: "📱",
                                          lang: "Ngôn ngữ: Java & Kotlin",
                                          desc: "Lập trình thuần Android Native với Java/Kotlin, tối ưu tối đa hiệu năng phần cứng thiết bị",
                                        },
                                        {
                                          name: "Lập trình C++ (Unreal Engine)",
                                          icon: "💥",
                                          lang: "Ngôn ngữ: C++ / Blueprints",
                                          desc: "Ngôn ngữ C++ hiệu năng cực cao, xử lý tính toán ma trận đồ họa 3D & vật lý phức tạp",
                                        },
                                        {
                                          name: "Lập trình GDScript / Python (Godot Engine)",
                                          icon: "🤖",
                                          lang: "Ngôn ngữ: GDScript",
                                          desc: "Ngôn ngữ kịch bản siêu nhẹ, mã nguồn mở linh hoạt và dễ bảo trì logic trò chơi",
                                        },
                                        {
                                          name: "Lập trình JavaScript / TypeScript (Phaser / WebGL)",
                                          icon: "🌐",
                                          lang: "Ngôn ngữ: JS & TypeScript",
                                          desc: "Lập trình Web Game chạy trực tiếp trên Trình duyệt, Facebook Instant Games & HTML5 Apps",
                                        },
                                        {
                                          name: "Lập trình Swift (iOS Native)",
                                          icon: "🍎",
                                          lang: "Ngôn ngữ: Swift",
                                          desc: "Ngôn ngữ Swift tối ưu hóa mượt mà cho các hệ điều hành iOS, iPhone & iPad",
                                        },
                                      ].map((C) => {
                                        const Ee = E === C.name;
                                        return jsxRuntimeExports.jsxs(
                                          "button",
                                          {
                                            onClick: () => {
                                              (ae("click"), v(C.name), I(!0));
                                            },
                                            className: `p-4 rounded-2xl border-2 text-left flex flex-col justify-between space-y-2 transition-all cursor-pointer ${Ee ? "bg-blue-600 border-blue-600 text-white shadow-lg ring-2 ring-blue-400 scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className: "text-2xl",
                                                      children: C.icon,
                                                    },
                                                  ),
                                                  C.recommended
                                                    ? jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className: `text-[10px] font-black px-2 py-0.5 rounded-full ${Ee ? "bg-amber-300 text-slate-950" : "bg-amber-400 text-slate-950"}`,
                                                          children:
                                                            "Phổ biến nhất",
                                                        },
                                                      )
                                                    : jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className: `text-[9px] font-black px-2 py-0.5 rounded-full ${Ee ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`,
                                                          children: C.lang,
                                                        },
                                                      ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className: `font-black text-sm sm:text-base ${Ee ? "text-white" : "text-slate-900 dark:text-white"}`,
                                                      children: ["• ", C.name],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className: `text-xs font-medium mt-1 leading-relaxed ${Ee ? "text-blue-100" : "text-slate-600 dark:text-slate-300"}`,
                                                    children: C.desc,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          C.name,
                                        );
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children: E
                                            ? `✅ Đã chọn nền tảng & ngôn ngữ: ${E}`
                                            : "💡 Hãy chọn ngôn ngữ lập trình cho dự án.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(5),
                                      className:
                                        "w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all active:scale-95",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "Xác nhận Nền Tảng & Sang Bước 6",
                                        }),
                                        jsxRuntimeExports.jsx(ArrowRight, {
                                          className: "h-4 w-4",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step5",
                              ),
                            n === 6 &&
                              jsxRuntimeExports.jsxs(
                                motion.div,
                                {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -10 },
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300",
                                      children: [
                                        "Lựa chọn ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "Nhà phát triển / Lập trình viên phù hợp",
                                        }),
                                        " hoặc hợp tác với ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "Công ty / Studio chuyên về mảng lập trình game",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "• Mô hình Lập trình viên / Công ty phát triển:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            {
                                              type: "Công ty / Game Studio Chuyên nghiệp (Outsource)",
                                              icon: "🏢",
                                              desc: "Ủy thác cho Công ty gia công chuyên nghiệp thực hiện toàn bộ lập trình & sản xuất",
                                            },
                                            {
                                              type: "Tuyển Lập trình viên In-House (Toàn thời gian)",
                                              icon: "👨‍💻",
                                              desc: "Tuyển dụng các Lập trình viên cố định làm việc trực tiếp tại Studio của bạn",
                                            },
                                            {
                                              type: "Hợp tác Lập trình viên Freelancer Chuyên nghiệp",
                                              icon: "⚡",
                                              desc: "Thuê các Lập trình viên tự do xuất sắc viết mã theo từng giai đoạn dự án",
                                            },
                                            {
                                              type: "Nhà phát triển Độc lập (Indie Game Developer)",
                                              icon: "🚀",
                                              desc: "Tự đóng vai trò Lập trình viên chính viết toàn bộ mã nguồn game",
                                            },
                                          ].map((C) => {
                                            const Ee = K === C.type;
                                            return jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"),
                                                    te(C.type),
                                                    I(!0));
                                                },
                                                className: `p-3.5 rounded-2xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer ${Ee ? "bg-indigo-600 border-indigo-600 text-white shadow-md scale-[1.02]" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-2xl shrink-0",
                                                      children: C.icon,
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className: "space-y-0.5",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-black text-xs sm:text-sm block leading-snug",
                                                            children: [
                                                              "• ",
                                                              C.type,
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className: `text-[11px] font-medium block leading-relaxed ${Ee ? "text-indigo-100" : "text-slate-500 dark:text-slate-400"}`,
                                                            children: C.desc,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              },
                                              C.type,
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2 pt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-xs font-black uppercase text-slate-800 dark:text-slate-200",
                                          children:
                                            "• Chọn các vị trí chuyên môn lập trình & phát triển bổ sung:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className: "space-y-2",
                                          children: [
                                            {
                                              role: "Lập trình viên Game (Gameplay Coder)",
                                              icon: "💻",
                                              desc: "Viết mã logic gameplay, tương tác điều khiển & va chạm",
                                            },
                                            {
                                              role: "Lập trình viên Đồ họa & Physics",
                                              icon: "🎨",
                                              desc: "Tối ưu hóa shader, vật lý 3D & hiệu ứng đẹp mắt",
                                            },
                                            {
                                              role: "Lập trình viên Server & Backend",
                                              icon: "☁️",
                                              desc: "Lập trình lưu trữ dữ liệu tài khoản, bảng xếp hạng & cloud",
                                            },
                                            {
                                              role: "Công ty / Studio Outsource Game",
                                              icon: "🏭",
                                              desc: "Đối tác công ty kiểm thử, Việt hóa & xuất bản ứng dụng",
                                            },
                                            {
                                              role: "Chuyên gia Kiểm thử & Tối ưu (Tester)",
                                              icon: "🐞",
                                              desc: "Kiểm thử lỗi bug, đảm bảo trải nghiệm không giật lag",
                                            },
                                          ].map((C) => {
                                            const Ee = je[C.role];
                                            return jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (ae("click"),
                                                    Se({
                                                      ...je,
                                                      [C.role]: !Ee,
                                                    }),
                                                    I(!0));
                                                },
                                                className: `w-full p-3 rounded-2xl border-2 text-left flex items-center justify-between gap-3 transition-all cursor-pointer ${Ee ? "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-500 text-indigo-950 dark:text-indigo-100 shadow-sm" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400"}`,
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-3",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-xl",
                                                            children: C.icon,
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            children: [
                                                              jsxRuntimeExports.jsxs(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-black text-xs sm:text-sm block",
                                                                  children: [
                                                                    "• ",
                                                                    C.role,
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-[11px] font-semibold text-slate-500 dark:text-slate-400",
                                                                  children:
                                                                    C.desc,
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className: `text-xs font-black px-2.5 py-1 rounded-full ${Ee ? "bg-indigo-200 text-indigo-900" : "bg-slate-100 text-slate-500"}`,
                                                      children: Ee
                                                        ? "✓ Đã chọn"
                                                        : "+ Chọn",
                                                    },
                                                  ),
                                                ],
                                              },
                                              C.role,
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-400 rounded-2xl flex items-center gap-3",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className:
                                            "h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-950 dark:text-emerald-100",
                                          children: K
                                            ? `✅ Đã chọn đối tác / lập trình viên: ${K}`
                                            : "💡 Hãy chọn nhà phát triển hoặc công ty lập trình game.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => Q(6),
                                      className:
                                        "w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base flex items-center justify-center gap-2 shadow-xl cursor-pointer transition-all active:scale-95 animate-pulse",
                                      children: [
                                        jsxRuntimeExports.jsx(Rocket, {
                                          className: "h-5 w-5",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children:
                                            "🎉 HOÀN THÀNH & PHÁT HÀNH LÊN GOOGLE PLAY",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "step6",
                              ),
                          ],
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-100 dark:bg-slate-950 px-6 py-4 border-t-2 border-slate-200 dark:border-slate-800 flex items-center justify-between",
                        children: [
                          jsxRuntimeExports.jsxs("button", {
                            onClick: Te,
                            disabled: n === 1,
                            className: `px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${n === 1 ? "opacity-30 cursor-not-allowed bg-slate-200 text-slate-500" : "bg-white hover:bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 shadow-xs"}`,
                            children: [
                              jsxRuntimeExports.jsx(ArrowLeft, {
                                className: "h-4 w-4",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                children: "Quay lại",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-xs font-black text-slate-500 dark:text-slate-400",
                            children: "Lựa chọn tự động lưu & không bị mất ⚡",
                          }),
                          n < 6 &&
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => Q(n),
                              className:
                                "px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center gap-1.5 shadow-md cursor-pointer transition-all active:scale-95",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children: "Tiếp theo",
                                }),
                                jsxRuntimeExports.jsx(ArrowRight, {
                                  className: "h-4 w-4",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  R &&
                    jsxRuntimeExports.jsx(motion.div, {
                      initial: { scale: 0.95, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      className:
                        "p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl shadow-xl space-y-3 text-left",
                      children: jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: "p-3 bg-white/20 rounded-2xl",
                            children: jsxRuntimeExports.jsx(Trophy, {
                              className: "h-8 w-8 text-yellow-300",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h3", {
                                className:
                                  "text-lg font-black uppercase tracking-wide",
                                children:
                                  "🏆 Chúc mừng! Bạn đã hoàn thành quy trình tạo Game!",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className: "text-xs font-bold text-emerald-100",
                                children: [
                                  'Trò chơi "',
                                  A || "Trò chơi mới",
                                  '" của Dream Game Studio đã chính thức có mặt trên Google Play & App Store!',
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-5 space-y-4 sticky top-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "p-4 bg-slate-900 dark:bg-slate-950 rounded-3xl border-4 border-slate-800 shadow-2xl space-y-3",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between text-white text-xs font-black px-2",
                        children: [
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "flex items-center gap-1.5 text-emerald-400",
                            children: [
                              jsxRuntimeExports.jsx(Smartphone, {
                                className: "h-4 w-4",
                              }),
                              " LIVE PHONE PREVIEW",
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px]",
                            children: "Google Play & App Store",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "relative mx-auto max-w-[320px] sm:max-w-[340px] rounded-[40px] border-[10px] border-slate-950 bg-slate-950 shadow-2xl overflow-hidden min-h-[580px] flex flex-col justify-between",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute top-0 inset-x-0 h-6 bg-slate-950 z-30 flex items-center justify-center",
                            children: jsxRuntimeExports.jsxs("div", {
                              className:
                                "w-20 h-3.5 bg-slate-900 rounded-full flex items-center justify-end px-2 gap-1.5",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-blue-500/80",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 rounded-full bg-slate-700",
                                }),
                              ],
                            }),
                          }),
                          ge
                            ? jsxRuntimeExports.jsxs("div", {
                                onClick: _e,
                                className: `relative flex-1 pt-8 pb-4 px-3 flex flex-col justify-between select-none cursor-crosshair transition-all duration-300 overflow-hidden ${ot(de)}`,
                                children: [
                                  De.map((C) =>
                                    jsxRuntimeExports.jsx(
                                      motion.div,
                                      {
                                        initial: {
                                          opacity: 1,
                                          y: C.y - 10,
                                          scale: 1,
                                        },
                                        animate: {
                                          opacity: 0,
                                          y: C.y - 40,
                                          scale: 1.3,
                                        },
                                        transition: { duration: 0.8 },
                                        style: {
                                          left: C.x - 20,
                                          top: C.y - 20,
                                        },
                                        className:
                                          "absolute z-50 pointer-events-none text-yellow-300 font-black text-xs drop-shadow-md bg-black/60 px-2 py-0.5 rounded-full border border-yellow-400",
                                        children: C.text,
                                      },
                                      C.id,
                                    ),
                                  ),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2 z-20",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: `flex items-center justify-between gap-1 p-2 rounded-2xl border transition-colors ${de ? "bg-black/40 backdrop-blur-md border-white/10 text-white" : "bg-slate-100 border-slate-300 text-slate-900 shadow-xs"}`,
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1.5 min-w-0",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: "text-lg shrink-0",
                                                children: Ue(L),
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "truncate text-left",
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className: `font-extrabold text-xs truncate leading-tight ${de ? "text-white" : "text-slate-900"}`,
                                                    children:
                                                      A || "Tên game mới",
                                                  }),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className: `text-[9px] font-bold truncate ${de ? "text-emerald-300" : "text-emerald-700"}`,
                                                    children:
                                                      "Dream Game Studio",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          Ie["Phần thưởng"] &&
                                            jsxRuntimeExports.jsxs("div", {
                                              className: `flex items-center gap-1.5 px-2 py-1 rounded-xl text-[10px] font-black shrink-0 ${de ? "bg-slate-900/80 border border-yellow-500/30 text-yellow-300" : "bg-amber-100 border-2 border-amber-400 text-amber-950 shadow-xs"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: ["🪙 ", Qe],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: ["💎 ", at],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      Ie["Nhiệm vụ"] &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, scale: 0.9 },
                                          animate: { opacity: 1, scale: 1 },
                                          className: `p-1.5 rounded-xl text-[10px] text-left flex items-center justify-between font-black ${de ? "bg-emerald-950/80 border border-emerald-500/40 text-emerald-200" : "bg-emerald-100 border-2 border-emerald-400 text-emerald-950 shadow-xs"}`,
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "flex items-center gap-1 truncate",
                                              children: [
                                                "📜 Quest: Đánh gục ",
                                                P || "Boss",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "bg-emerald-600 text-white px-1.5 py-0.2 rounded-md font-extrabold text-[9px] shrink-0",
                                              children: "0/1",
                                            }),
                                          ],
                                        }),
                                      Ie.Boss &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, y: -5 },
                                          animate: { opacity: 1, y: 0 },
                                          className: `p-1.5 rounded-xl space-y-0.5 text-left border ${de ? "bg-black/50 border-rose-500/40" : "bg-rose-100 border-rose-300 shadow-xs"}`,
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: `flex justify-between items-center text-[10px] font-black ${de ? "text-rose-300" : "text-rose-950"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: [
                                                    Ke(P),
                                                    " ",
                                                    P || "Boss",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: ["HP: ", He, "%"],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className: `w-full h-2 rounded-full overflow-hidden border ${de ? "bg-slate-800 border-rose-900" : "bg-slate-200 border-slate-300"}`,
                                              children: jsxRuntimeExports.jsx(
                                                "div",
                                                {
                                                  className:
                                                    "bg-gradient-to-r from-rose-500 to-red-600 h-full transition-all duration-300",
                                                  style: { width: `${He}%` },
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "my-auto py-3 relative z-10 flex flex-col items-center justify-center space-y-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: `text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-center max-w-[90%] truncate shadow-xs ${de ? "bg-black/40 text-white border border-white/20 backdrop-blur-sm" : "bg-slate-900 text-white border-2 border-slate-700"}`,
                                        children: [
                                          "🎮 ",
                                          ee || "Cách chơi đang thiết kế",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-around w-full px-2 py-1 relative",
                                        children: [
                                          jsxRuntimeExports.jsxs(motion.div, {
                                            animate: { y: [0, -6, 0] },
                                            transition: {
                                              repeat: 1 / 0,
                                              duration: 2,
                                              ease: "easeInOut",
                                            },
                                            className:
                                              "flex flex-col items-center space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className: `relative p-3 rounded-2xl shadow-md ${de ? "bg-emerald-500/20 border-2 border-emerald-400 backdrop-blur-md" : "bg-emerald-100 border-2 border-emerald-500"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-4xl sm:text-5xl",
                                                      children: Ue(L),
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "absolute -top-2 -right-2 bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full",
                                                      children: "LV.99",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `whitespace-nowrap text-[10px] font-black px-2 py-0.5 rounded-full ${de ? "text-white bg-black/60 border border-emerald-500/40" : "text-emerald-950 bg-white border-2 border-emerald-500 shadow-xs"}`,
                                                children: L || "Nhân vật chính",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex flex-col items-center",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-xs font-black text-rose-700 bg-rose-100 p-1.5 rounded-full border-2 border-rose-400 shadow-md",
                                                children: "VS",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `whitespace-nowrap text-[9px] font-bold mt-1 ${de ? "text-white/80" : "text-slate-700"}`,
                                                children: "Chạm màn hình!",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs(motion.div, {
                                            animate: { scale: [1, 1.05, 1] },
                                            transition: {
                                              repeat: 1 / 0,
                                              duration: 1.5,
                                              ease: "easeInOut",
                                            },
                                            className:
                                              "flex flex-col items-center space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className: `relative p-3 rounded-2xl shadow-md ${de ? "bg-rose-500/20 border-2 border-rose-500 backdrop-blur-md" : "bg-rose-100 border-2 border-rose-500"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-4xl sm:text-5xl",
                                                      children: Ke(P),
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "absolute -top-2 -right-2 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full",
                                                      children: "BOSS",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `whitespace-nowrap text-[10px] font-black px-2 py-0.5 rounded-full ${de ? "text-rose-200 bg-black/60 border border-rose-500/40" : "text-rose-950 bg-white border-2 border-rose-500 shadow-xs"}`,
                                                children: P || "Phản diện",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      V &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-xs font-black text-center px-3.5 py-2 bg-slate-950 text-white rounded-xl border-2 border-yellow-400 shadow-md max-w-[95%] leading-snug break-words",
                                          children: [
                                            "🎯 ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-yellow-300 font-extrabold",
                                              children: "Mục tiêu:",
                                            }),
                                            " ",
                                            V,
                                          ],
                                        }),
                                      de &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, scale: 0.95 },
                                          animate: { opacity: 1, scale: 1 },
                                          className:
                                            "p-1.5 bg-purple-950/90 border border-purple-400/50 rounded-xl text-[9px] font-black text-purple-200 w-full text-center space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center justify-between text-[9px] font-black text-purple-300",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: ["🎨 Đồ họa: ", de],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] bg-purple-800 text-white px-1.5 rounded-md",
                                                  children: "Art Ready",
                                                }),
                                              ],
                                            }),
                                            Object.values(U).some(Boolean) &&
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "flex flex-wrap items-center justify-center gap-1 text-[8px]",
                                                children: Object.keys(U)
                                                  .filter((C) => U[C])
                                                  .map((C) =>
                                                    jsxRuntimeExports.jsxs(
                                                      "span",
                                                      {
                                                        className:
                                                          "bg-purple-800/80 px-1.5 py-0.2 rounded-md text-white border border-purple-400/30",
                                                        children: ["✓ ", C],
                                                      },
                                                      C,
                                                    ),
                                                  ),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5 z-20",
                                    children: [
                                      Ie["Vật phẩm đặc biệt"] &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, y: 5 },
                                          animate: { opacity: 1, y: 0 },
                                          className: `flex justify-center gap-1 p-1 rounded-xl border ${de ? "bg-black/40 border-white/10" : "bg-slate-100 border-slate-300 shadow-xs"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] font-black bg-blue-600/80 text-white px-2 py-0.5 rounded-lg border border-blue-400 flex items-center gap-0.5",
                                              children: "🛡️ Khiên",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] font-black bg-orange-600/80 text-white px-2 py-0.5 rounded-lg border border-orange-400 flex items-center gap-0.5",
                                              children: "🔥 Lửa",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] font-black bg-emerald-600/80 text-white px-2 py-0.5 rounded-lg border border-emerald-400 flex items-center gap-0.5",
                                              children: "🧪 HP",
                                            }),
                                          ],
                                        }),
                                      Ie["Các màn chơi thú vị"] &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, y: 5 },
                                          animate: { opacity: 1, y: 0 },
                                          className: `flex justify-between items-center text-[9px] font-black px-2.5 py-1 rounded-xl ${de ? "bg-purple-950/80 border border-purple-500/40 text-purple-200" : "bg-purple-100 border-2 border-purple-400 text-purple-950 shadow-xs"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "🗺️ Map 1: Cyber",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "bg-purple-600 text-white px-1.5 py-0.2 rounded-md",
                                              children: "Map 2: Sa mạc",
                                            }),
                                          ],
                                        }),
                                      Object.values(be).some(Boolean) &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, y: 5 },
                                          animate: { opacity: 1, y: 0 },
                                          className:
                                            "flex flex-wrap items-center justify-center gap-1 text-[8px] font-black",
                                          children: [
                                            be["Hiển thị quảng cáo"] &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded-md border border-amber-300",
                                                children: "📺 Video Ads",
                                              }),
                                            be["Bán vật phẩm trong game"] &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "bg-cyan-500 text-slate-950 px-1.5 py-0.5 rounded-md border border-cyan-300",
                                                children: "💎 Store In-App",
                                              }),
                                            be["Gói Premium"] &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "bg-purple-500 text-white px-1.5 py-0.5 rounded-md border border-purple-300",
                                                children: "👑 VIP Pass",
                                              }),
                                            be["Thu phí tải game"] &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded-md border border-emerald-300",
                                                children: "💵 Paid $1.99",
                                              }),
                                          ],
                                        }),
                                      E &&
                                        jsxRuntimeExports.jsxs(motion.div, {
                                          initial: { opacity: 0, scale: 0.95 },
                                          animate: { opacity: 1, scale: 1 },
                                          className: `p-1 rounded-xl text-[9px] font-black flex items-center justify-between px-2 ${de ? "bg-slate-950/90 border border-blue-400/60 text-blue-300" : "bg-blue-100 border-2 border-blue-400 text-blue-950 shadow-xs"}`,
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "flex items-center gap-1 truncate",
                                              children: ["💻 Code: ", E],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8px] bg-blue-600 text-white px-1 rounded-sm",
                                              children: "Ready",
                                            }),
                                          ],
                                        }),
                                      (K || Object.values(je).some(Boolean)) &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `pt-1 border-t flex items-center justify-between text-[8px] font-bold px-1 ${de ? "border-white/10 text-white/90" : "border-slate-300 text-slate-800"}`,
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className: "truncate",
                                              children: [
                                                "🏢 ",
                                                K || "Đội ngũ lập trình",
                                              ],
                                            }),
                                            R
                                              ? jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-emerald-600 font-black animate-pulse shrink-0",
                                                  children: "🚀 Published!",
                                                })
                                              : jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-amber-600 font-black shrink-0",
                                                  children: "Dev Mode",
                                                }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              })
                            : jsxRuntimeExports.jsxs("div", {
                                className:
                                  "relative flex-1 pt-12 pb-6 px-4 bg-white text-slate-900 flex flex-col items-center justify-center text-center space-y-3 select-none transition-all duration-300",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "p-4 rounded-full bg-slate-100 border border-slate-200",
                                    children: jsxRuntimeExports.jsx(
                                      Smartphone,
                                      { className: "h-8 w-8 text-slate-400" },
                                    ),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-sm font-bold text-slate-600",
                                    children: "Đang chờ lên ý tưởng...",
                                  }),
                                ],
                              }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "h-5 bg-slate-950 flex items-center justify-center",
                            children: jsxRuntimeExports.jsx("div", {
                              className: "w-24 h-1 bg-slate-700 rounded-full",
                            }),
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-[11px] font-bold text-slate-400 text-center",
                        children:
                          "💡 Chạm vào màn hình điện thoại để tấn công Boss & kiếm vàng trực tiếp!",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "p-4 bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-md space-y-3 text-left",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl shadow-md font-black",
                            children: Ue(L),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className:
                                  "text-sm font-black text-slate-900 dark:text-white truncate",
                                children: A || "Tên trò chơi của bạn",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-xs font-bold text-emerald-600 dark:text-emerald-400 truncate",
                                children: [
                                  "Dream Game Studio • ",
                                  E || "Chưa chọn ngôn ngữ",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center gap-1 text-[11px] font-black text-amber-500 mt-0.5",
                                children: [
                                  jsxRuntimeExports.jsx(Star, {
                                    className:
                                      "h-3.5 w-3.5 fill-amber-400 text-amber-400",
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    children: "4.9 ★★★★★ (100K+ Tải về)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-2 gap-2 text-[11px] font-black",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-slate-700 dark:text-slate-300 truncate",
                            children: ["🎮 Style: ", de || "Chưa chọn"],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-2 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center text-slate-700 dark:text-slate-300",
                            children: [
                              "🛡️ ",
                              R ? "Đã Phát Hành" : "Đang Thiết Thiết",
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
        ],
      });
    }

    return Lab23;
  };
})();
