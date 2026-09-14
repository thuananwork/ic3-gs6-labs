/**
 * Lab 24: Giao tiếp Phần cứng & Phần mềm
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab24 = window.AGY_LABS[24] = function (env) {
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

    function Lab24({ onSuccess: a }) {
      const [n, i] = reactExports.useState("principle"),
        [l, c] = reactExports.useState("word_a"),
        [d, m] = reactExports.useState("A"),
        [u, g] = reactExports.useState(!0),
        [p, f] = reactExports.useState(null),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState("idle"),
        y = (le = 440) => {
          try {
            const P = window.AudioContext || window.webkitAudioContext;
            if (!P) return;
            const G = new P(),
              ee = G.createOscillator(),
              ce = G.createGain();
            ((ee.type = "sine"),
              ee.frequency.setValueAtTime(le, G.currentTime),
              ce.gain.setValueAtTime(0.12, G.currentTime),
              ce.gain.exponentialRampToValueAtTime(1e-4, G.currentTime + 0.3),
              ee.connect(ce),
              ce.connect(G.destination),
              ee.start(),
              ee.stop(G.currentTime + 0.3));
          } catch {}
        },
        I = (le) =>
          le ? le.charCodeAt(0).toString(2).padStart(8, "0") : "00000000",
        R = d.length > 0 ? d.slice(-1) : "",
        z = I(R),
        A = (le) => {
          (g(le), y(le ? 520 : 260));
        },
        O = (le) => {
          (f(le),
            k(!0),
            M("idle"),
            le === "instruction"
              ? (y(600),
                setTimeout(() => {
                  (k(!1), M("active"), y(880), a());
                }, 1e3))
              : (y(300),
                setTimeout(() => {
                  (k(!1), M("error"), y(200));
                }, 1e3)));
        },
        L = () => {
          (m("A"), g(!0), f(null), M("idle"), k(!1));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "w-full space-y-6 text-left select-none",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-wrap items-center gap-3 p-2 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-md",
            children: [
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i("principle"),
                className: `flex items-center gap-2.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer border-2 ${n === "principle" ? "bg-blue-600 text-white border-blue-300 shadow-lg" : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750"}`,
                children: [
                  jsxRuntimeExports.jsx(Cpu, {
                    className: "h-5 w-5 text-cyan-300",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Tab 1: Nguyên Lý Giao Tiếp Phần Cứng & Phần Mềm",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i("control_method"),
                className: `flex items-center gap-2.5 px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer border-2 ${n === "control_method" ? "bg-emerald-600 text-white border-emerald-300 shadow-lg" : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750"}`,
                children: [
                  jsxRuntimeExports.jsx(Zap, {
                    className: "h-5 w-5 text-amber-300",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Tab 2: Cách Phần Mềm Điều Khiển Phần Cứng",
                  }),
                ],
              }),
            ],
          }),
          n === "principle" &&
            jsxRuntimeExports.jsxs("div", {
              className: "space-y-6",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 border-4 border-blue-600 shadow-2xl relative overflow-hidden",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3 max-w-4xl",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border-2 border-blue-500 text-blue-900 dark:text-blue-200 text-xs font-black uppercase",
                              children: [
                                jsxRuntimeExports.jsx(Zap, {
                                  className:
                                    "h-4 w-4 text-blue-600 dark:text-blue-400 fill-current",
                                }),
                                "NỘI DUNG MÔ PHỎNG IC3 GS6",
                              ],
                            }),
                            jsxRuntimeExports.jsx("h1", {
                              className:
                                "text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight",
                              children:
                                "Nguyên Lý Giao Tiếp Phần Cứng & Phần Mềm",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 bg-amber-50 dark:bg-amber-950/80 rounded-2xl border-2 border-amber-400 text-slate-950 dark:text-amber-100 text-sm sm:text-base font-bold leading-relaxed shadow-xs",
                              children: [
                                "💡 ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-black text-blue-800 dark:text-blue-300 uppercase",
                                  children: "Ghi nhớ:",
                                }),
                                " Để một ứng dụng hoạt động, ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-black text-amber-900 dark:text-amber-200 underline",
                                  children: "phần cứng",
                                }),
                                " và ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-black text-blue-800 dark:text-blue-300 underline",
                                  children: "phần mềm",
                                }),
                                " của máy tính phải có chung ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-black text-emerald-700 dark:text-emerald-300",
                                  children: "ngôn ngữ nhị phân",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("button", {
                          onClick: L,
                          className:
                            "flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-black text-xs sm:text-sm border-2 border-slate-700 shadow-md cursor-pointer shrink-0",
                          children: [
                            jsxRuntimeExports.jsx(RotateCcw, {
                              className: "h-4 w-4 text-amber-400",
                            }),
                            "Đặt Lại",
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "mt-6 pt-6 border-t-2 border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        jsxRuntimeExports.jsxs("button", {
                          onClick: () => c("word_a"),
                          className: `flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer border-3 ${l === "word_a" ? "bg-blue-600 text-white border-blue-800 shadow-xl scale-[1.02]" : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:bg-slate-200"}`,
                          children: [
                            jsxRuntimeExports.jsx(Keyboard, {
                              className: "h-6 w-6 text-cyan-300",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "Mô Phỏng 1: Gõ bàn phím trong Word",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("button", {
                          onClick: () => c("music_play_pause"),
                          className: `flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer border-3 ${l === "music_play_pause" ? "bg-emerald-600 text-white border-emerald-800 shadow-xl scale-[1.02]" : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:bg-slate-200"}`,
                          children: [
                            jsxRuntimeExports.jsx(Music, {
                              className: "h-6 w-6 text-amber-300",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "Mô Phỏng 2: Bấm Phát / Dừng nhạc",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                l === "word_a" &&
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-4 border-blue-500 shadow-2xl space-y-6",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between pb-4 border-b-2 border-slate-200 dark:border-slate-800",
                        children: [
                          jsxRuntimeExports.jsxs("h2", {
                            className:
                              "text-lg sm:text-xl font-black text-slate-950 dark:text-white flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx(Keyboard, {
                                className: "h-6 w-6 text-blue-600",
                              }),
                              "Mô Phỏng 1: Gõ Bàn Phím Trực Tiếp",
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-xs font-black bg-blue-100 text-blue-900 px-3 py-1 rounded-full border border-blue-300",
                            children: "Ví dụ 1 / 2",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-blue-50 dark:bg-slate-800/90 rounded-3xl p-6 border-3 border-blue-400 flex flex-col justify-between space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-blue-800 dark:text-blue-300 tracking-wider",
                                    children: "BƯỚC 1: PHẦN MỀM (SOFTWARE)",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-extrabold text-sm text-slate-950 dark:text-white",
                                    children:
                                      "Ứng dụng Soạn thảo Văn bản (Word)",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children:
                                      "Hãy gõ hoặc xóa bất kỳ phím nào trên bàn phím của bạn:",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-3 bg-white dark:bg-slate-950 rounded-2xl border-3 border-blue-500 shadow-md space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-[11px] font-black text-blue-900 dark:text-blue-300 uppercase",
                                        children:
                                          "⌨️ Khung Nhập Liệu Bàn Phím:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            value: d,
                                            onChange: (le) =>
                                              m(le.target.value),
                                            placeholder: "Gõ phím bất kỳ...",
                                            className:
                                              "w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 border-2 border-blue-400 dark:border-blue-600 rounded-xl font-black text-slate-950 dark:text-white text-lg focus:outline-none focus:ring-4 focus:ring-blue-400/50",
                                          }),
                                          d &&
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => m(""),
                                              className:
                                                "p-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-black shrink-0 transition-all cursor-pointer shadow-md",
                                              title: "Xóa tất cả",
                                              children: jsxRuntimeExports.jsx(
                                                Delete,
                                                { className: "h-5 w-5" },
                                              ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "text-xs font-extrabold text-slate-900 dark:text-slate-100 text-center bg-blue-100 dark:bg-blue-950/80 p-2.5 rounded-xl border border-blue-300",
                                    children: [
                                      "Ký tự đang xử lý: ",
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-blue-700 dark:text-blue-300 font-black text-base",
                                        children: ['"', R || "Rống", '"'],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-slate-950 text-white rounded-3xl p-6 border-4 border-cyan-400 flex flex-col justify-between space-y-4 shadow-xl",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-cyan-300 tracking-wider",
                                    children:
                                      "BƯỚC 2: NGÔN NGỮ NHỊ PHÂN (BINARY)",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "font-black text-sm text-white bg-slate-900 px-3 py-1.5 rounded-xl border border-cyan-500/50",
                                    children: [
                                      'Mã Nhị Phân 8-bit của ký tự "',
                                      R || "Rống",
                                      '":',
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs text-slate-200 font-bold leading-relaxed",
                                    children:
                                      "Phần mềm dịch ký tự trên bàn phím thành tín hiệu điện nhị phân 0 & 1:",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 bg-slate-900 rounded-2xl border-3 border-cyan-400 text-center space-y-2 shadow-inner",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black text-cyan-300 uppercase tracking-wider",
                                    children: "Mã nhị phân gửi đi:",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-3xl sm:text-4xl font-black font-mono tracking-widest text-cyan-300 bg-slate-950 py-2 rounded-xl border-2 border-cyan-500",
                                    children: z,
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black text-emerald-400 mt-1",
                                    children: d
                                      ? "⚡ Đang truyền dòng điện nhị phân 0 & 1"
                                      : "💤 Chưa nhận ký tự nào",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-emerald-50 dark:bg-slate-800/90 rounded-3xl p-6 border-3 border-emerald-500 flex flex-col justify-between space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-emerald-800 dark:text-emerald-300 tracking-wider",
                                    children: "BƯỚC 3: PHẦN CỨNG (HARDWARE)",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-extrabold text-sm text-slate-950 dark:text-white",
                                    children: "Màn Hình Máy Tính (Monitor)",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children:
                                      "Màn hình nhận tín hiệu điện nhị phân và hiển thị chữ ngay lập tức:",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 bg-slate-950 rounded-2xl border-3 border-slate-700 flex flex-col items-center justify-center min-h-[150px] shadow-inner",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "w-full max-w-[220px] h-28 bg-white rounded-xl border-4 border-slate-800 flex items-center justify-center relative shadow-md overflow-hidden p-2",
                                    children: d
                                      ? jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-3xl sm:text-4xl font-black text-slate-950 font-serif break-all text-center leading-tight",
                                          children: d,
                                        })
                                      : jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-xs font-bold text-slate-400 italic",
                                          children: "Màn hình trống...",
                                        }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "w-32 h-2 bg-slate-700 rounded-b-md mt-1",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "text-xs font-black text-emerald-900 dark:text-emerald-300 text-center",
                                children: d
                                  ? "✅ Chữ hiển thị tức thì trên màn hình!"
                                  : "⬜ Màn hình chưa có chữ.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                l === "music_play_pause" &&
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-4 border-emerald-500 shadow-2xl space-y-6",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between pb-4 border-b-2 border-slate-200 dark:border-slate-800",
                        children: [
                          jsxRuntimeExports.jsxs("h2", {
                            className:
                              "text-lg sm:text-xl font-black text-slate-950 dark:text-white flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx(Music, {
                                className: "h-6 w-6 text-emerald-600",
                              }),
                              "Mô Phỏng 2: Bấm Phát / Dừng Nhạc",
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-xs font-extrabold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-300",
                            children: "Ví dụ 2 / 2",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-blue-50 dark:bg-slate-800/90 rounded-3xl p-6 border-3 border-blue-400 flex flex-col justify-between space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-blue-800 dark:text-blue-300 tracking-wider",
                                    children: "BƯỚC 1: PHẦN MỀM (SOFTWARE)",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-extrabold text-sm text-slate-950 dark:text-white",
                                    children: "Ứng Dụng Nghe Nhạc",
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children: [
                                      "Học sinh bấm nút ",
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-emerald-700 dark:text-emerald-300 font-black",
                                        children: "PLAY (▶️)",
                                      }),
                                      " hoặc ",
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-rose-700 dark:text-rose-300 font-black",
                                        children: "PAUSE (⏸️)",
                                      }),
                                      ":",
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => A(!0),
                                        className: `py-4 px-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 border-3 shadow-md transition-all cursor-pointer ${u ? "bg-emerald-600 text-white border-emerald-800 ring-4 ring-emerald-400/50 scale-[1.03]" : "bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-slate-300"}`,
                                        children: [
                                          jsxRuntimeExports.jsx(Play, {
                                            className: "h-5 w-5 fill-current",
                                          }),
                                          "PLAY (▶️)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => A(!1),
                                        className: `py-4 px-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 border-3 shadow-md transition-all cursor-pointer ${u ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-slate-300" : "bg-rose-600 text-white border-rose-800 ring-4 ring-rose-400/50 scale-[1.03]"}`,
                                        children: [
                                          jsxRuntimeExports.jsx(Pause, {
                                            className: "h-5 w-5 fill-current",
                                          }),
                                          "PAUSE (⏸️)",
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-center text-xs font-black text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950 p-2.5 rounded-xl border-2 border-slate-300 dark:border-slate-800",
                                    children: u
                                      ? "▶️ Đang chọn nút PLAY"
                                      : "⏸️ Đang chọn nút PAUSE",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-slate-950 text-white rounded-3xl p-6 border-4 border-cyan-400 flex flex-col justify-between space-y-4 shadow-xl",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-cyan-300 tracking-wider",
                                    children:
                                      "BƯỚC 2: NGÔN NGỮ NHỊ PHÂN (BINARY CODE)",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-black text-sm text-white bg-slate-900 px-3 py-1.5 rounded-xl border border-cyan-500/50",
                                    children: "Mã nhị phân gửi đi:",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs text-slate-200 font-bold leading-relaxed",
                                    children:
                                      "Phần mềm dịch lệnh bấm thành mã điện nhị phân:",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 bg-slate-900 rounded-2xl border-3 border-cyan-400 text-center space-y-2 shadow-inner",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-3xl sm:text-4xl font-black font-mono tracking-widest text-cyan-300 bg-slate-950 py-2.5 rounded-xl border-2 border-cyan-500",
                                    children: u ? "Mã: 1" : "Mã: 0",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className: `text-xs font-black px-3 py-1.5 rounded-xl ${u ? "bg-emerald-950 text-emerald-300 border border-emerald-500" : "bg-slate-800 text-slate-300 border border-slate-600"}`,
                                    children: u
                                      ? "⚡ Tín hiệu BẬT điện"
                                      : "💤 Tín hiệu TẮT điện",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "text-[11px] font-black text-cyan-200 bg-slate-900 p-2 rounded-xl text-center border border-slate-800",
                                children:
                                  "Bấm PLAY ➔ Gửi số 1 | Bấm PAUSE ➔ Gửi số 0",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-emerald-50 dark:bg-slate-800/90 rounded-3xl p-6 border-3 border-emerald-500 flex flex-col justify-between space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs font-black uppercase text-emerald-800 dark:text-emerald-300 tracking-wider",
                                    children: "BƯỚC 3: PHẦN CỨNG (HARDWARE)",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-extrabold text-sm text-slate-950 dark:text-white",
                                    children: "Cái LOA (Speaker) Nhận Tín Hiệu",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children:
                                      "Loa nhận tín hiệu điện nhị phân và phản ứng:",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 bg-slate-950 rounded-2xl border-3 border-slate-700 flex flex-col items-center justify-center text-center space-y-3 min-h-[150px] shadow-inner",
                                children: [
                                  u
                                    ? jsxRuntimeExports.jsx(motion.div, {
                                        animate: { scale: [1, 1.15, 1] },
                                        transition: {
                                          repeat: 1 / 0,
                                          duration: 0.5,
                                        },
                                        className:
                                          "p-4 rounded-full bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/50",
                                        children: jsxRuntimeExports.jsx(
                                          Volume2,
                                          { className: "h-10 w-10" },
                                        ),
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-4 rounded-full bg-slate-800 text-slate-500",
                                        children: jsxRuntimeExports.jsx(
                                          VolumeX,
                                          { className: "h-10 w-10" },
                                        ),
                                      }),
                                  jsxRuntimeExports.jsx("div", {
                                    className: "text-xs font-black text-white",
                                    children: u
                                      ? jsxRuntimeExports.jsx("span", {
                                          className: "text-emerald-400",
                                          children:
                                            "🎵 Màng loa RUNG LÊN ➔ Phát ra tiếng nhạc!",
                                        })
                                      : jsxRuntimeExports.jsx("span", {
                                          className: "text-slate-400",
                                          children:
                                            "🔇 Màng loa ĐỨNG YÊN ➔ Yên lặng",
                                        }),
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "text-xs font-black text-emerald-900 dark:text-emerald-300 text-center",
                                children: u
                                  ? "✅ Nhận số 1 (Bật điện) ➔ Loa phát nhạc!"
                                  : "✅ Nhận số 0 (Tắt điện) ➔ Loa ngừng phát.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          n === "control_method" &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-[#f8fafc] dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-4 border-slate-300 dark:border-slate-800 shadow-2xl space-y-6 text-slate-900 dark:text-slate-100",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "bg-white dark:bg-slate-950 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-sm space-y-2",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-400 text-emerald-900 dark:text-emerald-200 text-xs font-black uppercase",
                      children: [
                        jsxRuntimeExports.jsx(Zap, {
                          className:
                            "h-4 w-4 text-emerald-600 dark:text-emerald-400 fill-current",
                        }),
                        "TƯƠNG TÁC MÔ PHỎNG LÝ THUYẾT IC3 GS6",
                      ],
                    }),
                    jsxRuntimeExports.jsx("h2", {
                      className:
                        "text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white",
                      children: "Cách Phần Mềm Điều Khiển Phần CỨng",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed",
                      children:
                        "Phần cứng máy tính là các máy móc vô hồn. Hãy thử gửi các dạng tín hiệu từ phần mềm sang phần cứng để xem loại tín hiệu nào giúp phần cứng hoạt động!",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "md:col-span-4 bg-white dark:bg-slate-950 p-6 rounded-3xl border-3 border-blue-400 dark:border-blue-700 shadow-md flex flex-col justify-between space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-xs font-black uppercase text-blue-800 dark:text-blue-300 tracking-wider flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx(Cpu, {
                                  className: "h-5 w-5 text-blue-600",
                                }),
                                "PHẦN MỀM (Software)",
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed",
                              children:
                                "Bảng điều khiển chứa các nút bấm gửi thông điệp sang phần cứng:",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => O("instruction"),
                              disabled: b,
                              className: `w-full p-4 rounded-2xl font-black text-xs sm:text-sm text-left border-3 transition-all cursor-pointer flex items-center justify-between shadow-md ${p === "instruction" ? "bg-emerald-600 text-white border-emerald-800 ring-4 ring-emerald-400/50 scale-[1.02]" : "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-100 border-emerald-400 hover:bg-emerald-100"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: "font-extrabold text-sm",
                                      children: "✅ Gửi CHỈ DẪN (Instruction)",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-[11px] font-bold opacity-90 mt-0.5",
                                      children:
                                        'Mã lệnh cụ thể: "Bật loa & Mở màn hình"',
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx(Send, {
                                  className: "h-5 w-5 shrink-0",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => O("suggestion"),
                              disabled: b,
                              className: `w-full p-4 rounded-2xl font-black text-xs sm:text-sm text-left border-3 transition-all cursor-pointer flex items-center justify-between shadow-md ${p === "suggestion" ? "bg-rose-600 text-white border-rose-800 ring-4 ring-rose-400/50 scale-[1.02]" : "bg-rose-50 dark:bg-rose-950/80 text-rose-950 dark:text-rose-100 border-rose-400 hover:bg-rose-100"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: "font-extrabold text-sm",
                                      children: "❌ Gửi ĐỀ NGHỊ (Suggestion)",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-[11px] font-bold opacity-90 mt-0.5",
                                      children:
                                        'Lời nhờ vả: "Bạn có thể chạy giúp mình không?"',
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx(Send, {
                                  className: "h-5 w-5 shrink-0",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => O("assist"),
                              disabled: b,
                              className: `w-full p-4 rounded-2xl font-black text-xs sm:text-sm text-left border-3 transition-all cursor-pointer flex items-center justify-between shadow-md ${p === "assist" ? "bg-amber-600 text-white border-amber-800 ring-4 ring-amber-400/50 scale-[1.02]" : "bg-amber-50 dark:bg-amber-950/80 text-amber-950 dark:text-amber-100 border-amber-400 hover:bg-amber-100"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: "font-extrabold text-sm",
                                      children: "❌ Gửi HỖ TRỢ (Assist)",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-[11px] font-bold opacity-90 mt-0.5",
                                      children:
                                        'Yêu cầu chung chung: "Mong bạn giúp đỡ"',
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx(Send, {
                                  className: "h-5 w-5 shrink-0",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "text-[11px] font-bold text-slate-500 text-center",
                          children:
                            "Bấm vào 1 nút để phát tín hiệu sang phần cứng!",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "md:col-span-4 bg-slate-950 text-white p-6 rounded-3xl border-3 border-slate-800 flex flex-col items-center justify-between space-y-4 shadow-md relative overflow-hidden",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "text-xs font-black uppercase text-cyan-400 tracking-wider flex items-center gap-2",
                          children: [
                            jsxRuntimeExports.jsx(ArrowRight, {
                              className: "h-5 w-5",
                            }),
                            "ĐƯỜNG TRUYỀN DỮ LIỆU",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-full py-8 flex flex-col items-center justify-center relative min-h-[160px]",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "w-full h-3 bg-slate-800 rounded-full relative overflow-hidden flex items-center",
                              children: jsxRuntimeExports.jsx("div", {
                                className: "w-full h-1 bg-cyan-500/30",
                              }),
                            }),
                            jsxRuntimeExports.jsx(AnimatePresence, {
                              children:
                                b &&
                                p &&
                                jsxRuntimeExports.jsx(motion.div, {
                                  initial: { x: "-120%", scale: 0.8 },
                                  animate:
                                    p === "instruction"
                                      ? { x: "120%", scale: 1.1 }
                                      : {
                                          x: ["-120%", "0%", "-60%"],
                                          scale: [0.8, 1.1, 0.9],
                                        },
                                  transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                  },
                                  className: `absolute px-4 py-2 rounded-2xl font-black text-xs shadow-2xl flex items-center gap-2 border-2 ${p === "instruction" ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-emerald-500/80" : "bg-rose-600 text-white border-rose-300 shadow-rose-600/80"}`,
                                  children:
                                    p === "instruction"
                                      ? jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(Zap, {
                                                className:
                                                  "h-4 w-4 fill-current",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children: "CHỈ DẪN (1010)",
                                              }),
                                            ],
                                          },
                                        )
                                      : jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                CircleQuestionMark,
                                                { className: "h-4 w-4" },
                                              ),
                                              jsxRuntimeExports.jsx("span", {
                                                children: "? KHÔNG HIỂU ?",
                                              }),
                                            ],
                                          },
                                        ),
                                }),
                            }),
                            !b &&
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "text-xs font-bold text-slate-400 text-center mt-3",
                                children: p
                                  ? "Dòng dữ liệu đã truyền xong"
                                  : "Đang chờ phát lệnh...",
                              }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "text-[11px] font-bold text-slate-400 text-center bg-slate-900 p-2.5 rounded-xl border border-slate-800 w-full",
                          children: "Tín hiệu điện truyền theo đường bus",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "md:col-span-4 bg-white dark:bg-slate-950 p-6 rounded-3xl border-3 border-emerald-500 dark:border-emerald-700 shadow-md flex flex-col justify-between space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-xs font-black uppercase text-emerald-800 dark:text-emerald-300 tracking-wider flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx(Monitor, {
                                  className: "h-5 w-5 text-emerald-600",
                                }),
                                "PHẦN CỨNG (Hardware)",
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed",
                              children:
                                "Thiết bị gồm Màn hình, Đèn LED, và Loa:",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: `p-5 rounded-3xl border-3 transition-all duration-300 flex flex-col items-center justify-center space-y-4 min-h-[220px] ${N === "active" ? "bg-slate-950 border-emerald-500 shadow-xl shadow-emerald-500/20 text-white" : N === "error" ? "bg-rose-950/40 border-rose-500 text-rose-200" : "bg-slate-200 dark:bg-slate-900 border-slate-400 dark:border-slate-800 text-slate-500 opacity-60 grayscale"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-3 rounded-2xl border-2 flex flex-col items-center ${N === "active" ? "bg-blue-600 border-blue-400 text-white" : "bg-slate-800 border-slate-700 text-slate-600"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Monitor, {
                                      className: "h-8 w-8",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[10px] font-black mt-1",
                                      children: "Màn Hình",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-3 rounded-2xl border-2 flex flex-col items-center ${N === "active" ? "bg-amber-400 border-amber-200 text-slate-950 shadow-lg shadow-amber-400" : "bg-slate-800 border-slate-700 text-slate-600"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Lightbulb, {
                                      className: "h-8 w-8 fill-current",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[10px] font-black mt-1",
                                      children: "Đèn LED",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-3 rounded-2xl border-2 flex flex-col items-center ${N === "active" ? "bg-emerald-500 border-emerald-300 text-slate-950 shadow-lg shadow-emerald-500" : "bg-slate-800 border-slate-700 text-slate-600"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Volume2, {
                                      className: "h-8 w-8",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[10px] font-black mt-1",
                                      children: "Cái Loa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-center font-black text-xs sm:text-sm",
                              children: [
                                N === "idle" &&
                                  "💤 Phần cứng đang chờ chỉ dẫn...",
                                N === "active" &&
                                  "🎉 PHẦN CỨNG ĐÃ BẬT SÁNG & PHÁT NHẠC!",
                                N === "error" &&
                                  "❓ KHÔNG HIỂU (Phần cứng đứng yên)",
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "text-[11px] font-bold text-slate-500 text-center",
                          children:
                            "Thiết bị máy tính phản ứng khi có mã lệnh đúng",
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx(AnimatePresence, {
                  children:
                    N !== "idle" &&
                    jsxRuntimeExports.jsxs(motion.div, {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0 },
                      className: `p-6 rounded-3xl border-4 shadow-xl flex items-start gap-4 ${N === "active" ? "bg-emerald-100 border-emerald-500 text-emerald-950" : "bg-rose-100 border-rose-500 text-rose-950"}`,
                      children: [
                        N === "active"
                          ? jsxRuntimeExports.jsx(CircleCheck, {
                              className:
                                "h-8 w-8 text-emerald-700 shrink-0 mt-0.5",
                            })
                          : jsxRuntimeExports.jsx(CircleX, {
                              className:
                                "h-8 w-8 text-rose-700 shrink-0 mt-0.5",
                            }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: "font-black text-base sm:text-lg",
                              children:
                                N === "active"
                                  ? "✅ CHÍNH XÁC!"
                                  : "❌ CHƯA CHÍNH XÁC!",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-xs sm:text-sm font-bold leading-relaxed",
                              children:
                                N === "active"
                                  ? "Chính xác! Phần mềm cung cấp chỉ dẫn cụ thể để phần cứng biết phải làm gì."
                                  : "Chưa chính xác! Phần cứng là máy móc, chỉ hoạt động khi nhận được chỉ dẫn/mã lệnh chính xác chứ không hiểu sự đề nghị hay hỗ trợ.",
                            }),
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

    return Lab24;
  };
})();
