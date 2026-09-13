/**
 * Lab 10: Công cụ Kết nối Mạng
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab10 = window.AGY_LABS[10] = function (env) {
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
      FileText,
      FileWarning,
      Film,
      Flag,
      Flame,
      Folder,
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

    function Lab12({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState(null),
        [d, m] = reactExports.useState(null),
        [u, g] = reactExports.useState({}),
        [p, f] = reactExports.useState(null),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState(3),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(0),
        [A, O] = reactExports.useState(0),
        [L, le] = reactExports.useState(0),
        [P, G] = reactExports.useState(1e3),
        [ee, ce] = reactExports.useState(0),
        [V, pe] = reactExports.useState("movie"),
        [Ie, se] = reactExports.useState(!1);
      (reactExports.useEffect(() => {
        let Z;
        if (y && N === 4) {
          const be = () => {
            (ce((he) => (he + 30) % 360), (Z = requestAnimationFrame(be)));
          };
          Z = requestAnimationFrame(be);
        } else ce(0);
        return () => cancelAnimationFrame(Z);
      }, [y, N]),
        reactExports.useEffect(() => {
          let Z;
          if (y) {
            const he = { 1: 45, 2: 130, 3: 3150, 4: 105 }[N];
            Z = setInterval(() => {
              const E = Math.round(he * (0.92 + Math.random() * 0.16));
              (O(E),
                le((v) => {
                  const K = v + E / 5;
                  return K >= P
                    ? (I(!1), z(100), se(!0), setTimeout(() => se(!1), 3e3), P)
                    : (z(Math.round((K / P) * 100)), K);
                }));
            }, 200);
          }
          return () => clearInterval(Z);
        }, [y, N, P]));
      const de = [
          {
            id: 1,
            name: "Ổ đĩa flash USB",
            vietnameseName: "Ổ đĩa flash USB",
            icon: Usb,
            color:
              "border-blue-500 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
            badgeBg: "bg-blue-500 text-white",
            textColor: "text-blue-700 dark:text-blue-300",
            correctDefId: 1,
            friendlySpec: {
              location: "🔌 Cắm bên ngoài (Cổng USB)",
              speedText: "Bình thường (30 - 150 MB/s) 🏃",
              capacityText: "Nhỏ gọn (16 GB - 256 GB) 📱",
              durabilityText: "Bền bỉ (Rơi thoải mái không sợ hỏng) 💪",
              analogy:
                "🎒 Giống như chiếc bóp cầm tay - nhỏ gọn để mang đi học hằng ngày.",
              bestFor:
                "Lưu bài tập về nhà, slide thuyết trình mang lên lớp nộp cho thầy cô.",
            },
          },
          {
            id: 2,
            name: "Ổ cứng di động",
            vietnameseName: "Ổ cứng di động",
            icon: HardDrive,
            color:
              "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400",
            badgeBg: "bg-emerald-500 text-white",
            textColor: "text-emerald-700 dark:text-emerald-300",
            correctDefId: 2,
            friendlySpec: {
              location: "🔌 Cắm bên ngoài (Cáp kết nối USB)",
              speedText: "Khá nhanh (100 - 500 MB/s) ⚡",
              capacityText: "Rất lớn (1.000 GB - 5.000 GB) 📦",
              durabilityText: "Trung bình (Tránh làm rơi khi đang cắm dây) ⚠️",
              analogy:
                "🧳 Giống như chiếc vali du lịch - đựng được siêu nhiều đồ để mang đi chơi xa.",
              bestFor:
                "Sao lưu (lưu trữ sơ cua) toàn bộ tranh ảnh, trò chơi, phim hoạt hình của cả nhà.",
            },
          },
          {
            id: 3,
            name: "Ổ cứng thể rắn",
            vietnameseName: "Ổ cứng thể rắn (SSD)",
            icon: Cpu,
            color:
              "border-purple-500 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
            badgeBg: "bg-purple-500 text-white",
            textColor: "text-purple-700 dark:text-purple-300",
            correctDefId: 3,
            friendlySpec: {
              location: "🖥️ Gắn chặt bên trong máy tính",
              speedText: "Cực kỳ nhanh (500 - 3.200+ MB/s) 🚀",
              capacityText: "Lớn (250 GB - 2.000 GB) 💾",
              durabilityText:
                "Siêu bền (Dùng chip điện tử đứng yên, chống va đập) 🛡️",
              analogy:
                "🏎️ Giống như xe đua công thức 1 - tốc độ nhanh nhất giúp khởi động máy chỉ mất 5 giây.",
              bestFor:
                "Cài đặt hệ điều hành Windows, khởi động máy tính, load game nặng cực kỳ mượt mà.",
            },
          },
          {
            id: 4,
            name: "Ổ đĩa cứng",
            vietnameseName: "Ổ đĩa cứng cơ học (HDD)",
            icon: Database,
            color:
              "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
            badgeBg: "bg-amber-500 text-white",
            textColor: "text-amber-700 dark:text-amber-300",
            correctDefId: 4,
            friendlySpec: {
              location: "🖥️ Gắn chặt bên trong máy tính",
              speedText: "Chậm & Đều đặn (80 - 160 MB/s) 🐢",
              capacityText: "Cực kỳ khổng lồ (1.000 GB - 18.000 GB) 🏟️",
              durabilityText:
                "Thấp (Dễ hỏng đĩa từ quay bên trong nếu bị rung lắc mạnh) 💔",
              analogy:
                "🚛 Giống như xe tải chở hàng - chở được khối lượng cực khủng nhưng đi chậm chạp.",
              bestFor:
                "Lưu trữ tài liệu học tập khổng lồ lâu năm, video bài giảng dài không cần tốc độ cao.",
            },
          },
        ],
        _ = (Z) => {
          if (y) return;
          pe(Z);
          let be = 1e3;
          (Z === "comics" && (be = 5e3),
            Z === "all" && (be = 15e3),
            G(be),
            le(0),
            z(0),
            I(!0));
        },
        U = de.find((Z) => Z.id === N);
      return jsxRuntimeExports.jsxs("div", {
        id: "lab-12-container",
        className: "space-y-6",
        children: [
          jsxRuntimeExports.jsx("div", {
            className:
              "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3",
            children:
              b &&
              jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/50 px-5 sm:px-5 py-3 rounded-3xl flex items-center gap-2 animate-bounce",
                children: [
                  jsxRuntimeExports.jsx(CircleCheck, {
                    className: "h-4 w-4 text-emerald-500 shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-bold text-emerald-800 dark:text-emerald-300",
                    children:
                      "Chính xác! Bạn học giỏi quá, đạt điểm 10 rồi! 🎉",
                  }),
                ],
              }),
          }),
          !1,
          n === 1 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-fadeIn",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className:
                    "lg:col-span-4 bg-white dark:bg-slate-900/45 border border-slate-200 dark:border-slate-850 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between text-left",
                  children: jsxRuntimeExports.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-[10.5px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block",
                            children: "🎮 BƯỚC 1: CHỌN THIẾT BỊ ĐỂ CẮM",
                          }),
                          jsxRuntimeExports.jsx("h4", {
                            className:
                              "text-sm sm:text-base font-medium text-slate-500 mt-1 font-semibold leading-relaxed",
                            children:
                              "Nhấp vào thiết bị bên dưới để cắm nó vào chiếc máy tính ảo bên phải:",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: "flex flex-col items-stretch gap-3 w-full",
                        children: de.map((Z) => {
                          const be = Z.icon,
                            he = N === Z.id;
                          return jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: () => {
                                y || (M(Z.id), z(0), le(0));
                              },
                              disabled: y,
                              className: `w-full box-border px-4 py-3 min-h-[60px] text-left rounded-2xl border text-sm sm:text-base font-bold transition-all flex items-center justify-between ${y ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:scale-[1.01]"} ${he ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.01]" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 min-w-0 flex-1",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-2 rounded-xl shrink-0 ${he ? "bg-white/20 text-white" : "bg-indigo-50 dark:bg-slate-800 text-indigo-500"}`,
                                      children: jsxRuntimeExports.jsx(be, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "truncate min-w-0 flex-1",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `block font-black text-sm ${he ? "text-white" : "text-slate-800 dark:text-white"}`,
                                          children: Z.name,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: `text-xs font-semibold block truncate ${he ? "text-white" : "text-slate-400"}`,
                                          children:
                                            Z.id === 1
                                              ? "🎒 Nhỏ gọn, cắm ngoài"
                                              : Z.id === 2
                                                ? "🧳 Chứa siêu nhiều, cắm ngoài"
                                                : Z.id === 3
                                                  ? "🏎️ Tốc độ tên lửa, lắp bên trong"
                                                  : "🚛 Trâu bò lưu trữ, lắp bên trong",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className: `text-xs font-black px-2.5 py-1 rounded-full shrink-0 ml-auto pl-2 ${he ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                                  children: Z.id <= 2 ? "Ngoài 🔌" : "Trong 🖥️",
                                }),
                              ],
                            },
                            Z.id,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between text-left text-slate-100 relative min-h-[460px] overflow-hidden",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex items-center justify-between pb-3 border-b border-slate-800/80 text-sm sm:text-base font-semibold font-mono text-slate-400",
                      children: [
                        jsxRuntimeExports.jsxs("span", {
                          className:
                            "flex items-center gap-1.5 font-bold uppercase",
                          children: [
                            jsxRuntimeExports.jsx(Activity, {
                              className:
                                "h-3.5 w-3.5 text-indigo-400 animate-pulse",
                            }),
                            " GIẢ LẬP TRUYỀN DỮ LIỆU THỰC TẾ // SMARTTECH LAPTOP SIMULATOR",
                          ],
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className: "font-bold text-emerald-400",
                          children: "ĐÃ KẾT NỐI ✓",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-12 gap-5 py-4 flex-1 items-center",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "md:col-span-5 flex flex-col items-center justify-center space-y-3.5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "relative h-44 w-full max-w-[190px] bg-slate-900 border-2 border-slate-800 rounded-3xl flex flex-col items-center justify-center p-5 sm:p-6 overflow-hidden shadow-inner",
                              children: [
                                U.id === 4 &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "relative h-28 w-28 flex items-center justify-center animate-fadeIn",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        style: {
                                          transform: `rotate(${ee}deg)`,
                                        },
                                        className:
                                          "h-28 w-28 rounded-full border-4 border-slate-600 bg-linear-to-br from-slate-700 via-slate-800 to-slate-950 flex items-center justify-center relative overflow-hidden transition-all duration-75 shadow-lg",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute inset-2 rounded-full border border-slate-500/30",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute inset-5 rounded-full border border-slate-500/20",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute inset-8 rounded-full border border-slate-500/10",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute top-0 bottom-0 left-[48%] right-[48%] bg-white/10 skew-x-12",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("svg", {
                                        className:
                                          "absolute top-1 right-1 h-14 w-14 origin-top-right transform -scale-x-100",
                                        viewBox: "0 0 100 100",
                                        children: [
                                          jsxRuntimeExports.jsx("path", {
                                            d: "M 10 10 L 40 50 L 50 80",
                                            stroke: "#94a3b8",
                                            strokeWidth: "4",
                                            fill: "none",
                                            strokeLinecap: "round",
                                          }),
                                          jsxRuntimeExports.jsx("path", {
                                            d: "M 40 50 L 45 75",
                                            stroke: "#cbd5e1",
                                            strokeWidth: "2",
                                            fill: "none",
                                            strokeLinecap: "round",
                                          }),
                                          jsxRuntimeExports.jsx("rect", {
                                            x: "42",
                                            y: "75",
                                            width: "6",
                                            height: "8",
                                            rx: "1",
                                            fill: "#ef4444",
                                            className: y ? "animate-pulse" : "",
                                          }),
                                          jsxRuntimeExports.jsx("circle", {
                                            cx: "10",
                                            cy: "10",
                                            r: "8",
                                            fill: "#475569",
                                            stroke: "#64748b",
                                            strokeWidth: "2",
                                          }),
                                        ],
                                      }),
                                      y &&
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute bottom-1 bg-red-950/90 border border-red-500/40 text-[8.5px] text-red-400 font-mono font-bold px-1.5 py-0.5 rounded-xs animate-pulse",
                                          children: "ĐĨA TỪ ĐANG QUAY TRÒN!",
                                        }),
                                    ],
                                  }),
                                U.id === 3 &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "w-full space-y-2 relative z-10 animate-fadeIn",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-mono text-purple-400 block font-black text-center tracking-widest",
                                        children: "CHIP BÁN DẪN TĨNH",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-950 border border-purple-500/30 p-2 sm:p-2.5 rounded-2xl flex items-center gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx(Cpu, {
                                            className:
                                              "h-4.5 w-4.5 text-purple-400 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "text-left",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] block font-black text-slate-300",
                                                children: "BỘ ĐIỀU KHIỂN",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[7.5px] block text-slate-500",
                                                children:
                                                  "Quản lý chép dữ liệu",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "grid grid-cols-2 gap-1.5",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className: `p-1.5 border rounded-md text-center flex items-center justify-center text-[8px] font-mono font-bold transition-all ${y ? "border-purple-500 bg-purple-950/20 text-purple-300" : "border-slate-800 text-slate-500"}`,
                                            children: "NAND CHIP",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: `p-1.5 border rounded-md text-center flex items-center justify-center text-[8px] font-mono font-bold transition-all ${y ? "border-purple-500 bg-purple-950/20 text-purple-300" : "border-slate-800 text-slate-500"}`,
                                            children: "NAND CHIP",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                U.id === 1 &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex flex-col items-center space-y-2 z-10 animate-fadeIn",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "h-20 w-8 bg-blue-600 border-2 border-slate-300 rounded-3xl relative flex items-center justify-center shadow-md",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute -top-3 left-1.5 right-1.5 h-3 bg-slate-400 border-x-2 border-t-2 border-slate-300 rounded-t-xs",
                                          }),
                                          jsxRuntimeExports.jsx(Usb, {
                                            className: "h-5 w-5 text-white/40",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: `h-1.5 w-1.5 rounded-full absolute bottom-2.5 ${y ? "bg-amber-400 animate-ping" : "bg-slate-850"}`,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-mono font-bold text-blue-300 tracking-widest",
                                        children: "USB FLASH",
                                      }),
                                    ],
                                  }),
                                U.id === 2 &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex flex-col items-center space-y-2 z-10 animate-fadeIn",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "h-20 w-14 bg-emerald-950 border border-emerald-500 rounded-3xl p-2 sm:p-2.5 relative flex flex-col justify-between shadow-lg",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute top-0 left-1/2 -translate-x-1/2 h-1 w-3 bg-slate-700 rounded-b-xs",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[6.5px] text-emerald-400 font-mono font-bold text-center block",
                                            children: "SYS READY",
                                          }),
                                          jsxRuntimeExports.jsx(HardDrive, {
                                            className:
                                              "h-6 w-6 mx-auto text-emerald-300",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "w-full h-1 bg-slate-900 rounded-full overflow-hidden",
                                            children: jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                className: `h-full bg-emerald-400 ${y ? "w-full animate-pulse" : "w-1/3"}`,
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-mono font-bold text-emerald-300 tracking-wider",
                                        children: "Ổ CỨNG DI ĐỘNG",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "text-center",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[9.5px] font-black text-slate-500 uppercase tracking-widest",
                                  children: "Đang kết nối:",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-white mt-0.5",
                                  children: U.vietnameseName,
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "md:col-span-7 space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-5 space-y-2.5 text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[9px] font-black text-indigo-400 uppercase tracking-widest block",
                                  children: "⚡ BÁO CÁO THÔNG SỐ SIÊU DỄ HIỂU",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-2 gap-3 text-sm sm:text-base font-semibold leading-relaxed font-semibold",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 text-sm sm:text-base font-semibold block",
                                          children: "Vị trí lắp đặt:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-slate-200",
                                          children: U.friendlySpec.location,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 text-sm sm:text-base font-semibold block",
                                          children: "Tốc độ chép file:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-slate-200",
                                          children: U.friendlySpec.speedText,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 text-sm sm:text-base font-semibold block",
                                          children: "Dung lượng:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-slate-200",
                                          children: U.friendlySpec.capacityText,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 text-sm sm:text-base font-semibold block",
                                          children: "Khả năng chịu rơi vỡ:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-slate-200",
                                          children:
                                            U.friendlySpec.durabilityText,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "col-span-2 space-y-0.5 border-t border-slate-800/80 pt-1.5 mt-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-indigo-400 text-sm sm:text-base font-semibold block font-bold",
                                          children: "Thích hợp nhất để:",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className: "text-slate-300 italic",
                                          children: [
                                            '"',
                                            U.friendlySpec.bestFor,
                                            '"',
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
                                "bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-5 space-y-3 relative",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-sm sm:text-base font-bold",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        jsxRuntimeExports.jsx(FolderOpen, {
                                          className:
                                            "h-3.5 w-3.5 text-amber-400",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "Thử thách chép tệp tin ảo",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "text-[9.5px] text-slate-400 font-mono",
                                      children: [
                                        Math.round(L),
                                        " MB / ",
                                        P,
                                        " MB",
                                      ],
                                    }),
                                  ],
                                }),
                                y &&
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute -top-6 left-[40%] text-sm sm:text-base font-semibold bg-indigo-600 text-white font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md animate-bounce z-10",
                                    children: jsxRuntimeExports.jsx("span", {
                                      children: "📁 Đang chép...",
                                    }),
                                  }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "h-3.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      style: { width: `${R}%` },
                                      className:
                                        "h-full bg-linear-to-r from-indigo-600 to-indigo-400 transition-all duration-300 rounded-full",
                                    }),
                                    y &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer",
                                      }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex justify-between items-center text-sm sm:text-base font-bold",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 block text-sm sm:text-base font-semibold",
                                          children: "Tốc độ đo được:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-white font-mono text-sm sm:text-base font-medium font-black",
                                          children: y
                                            ? `${A} MB / giây 🚀`
                                            : "0 MB / giây",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-0.5 text-right",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 block text-sm sm:text-base font-semibold",
                                          children: "Tiến độ chép:",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-white font-mono text-sm sm:text-base font-medium font-black",
                                          children: [R, "%"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-1.5 pt-1.5 border-t border-slate-800/80",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9.5px] text-slate-500 block font-bold uppercase tracking-wider",
                                      children:
                                        "👇 CHỌN LOẠI TỆP ĐỂ CHÉP VÀ SO SÁNH TỐC ĐỘ:",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("button", {
                                          disabled: y,
                                          onClick: () => _("movie"),
                                          className: `py-3 rounded-3xl text-sm sm:text-base font-semibold font-black flex flex-col items-center justify-center gap-1 transition-all border ${V === "movie" && !y ? "bg-indigo-600 text-white border-indigo-500" : "bg-slate-950 border-slate-850 text-slate-300 hover:bg-slate-900"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "🎬 Phim Hoạt Hình",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8.5px] text-slate-400",
                                              children: "Dung lượng: 1 GB",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          disabled: y,
                                          onClick: () => _("comics"),
                                          className: `py-3 rounded-3xl text-sm sm:text-base font-semibold font-black flex flex-col items-center justify-center gap-1 transition-all border ${V === "comics" && !y ? "bg-indigo-600 text-white border-indigo-500" : "bg-slate-950 border-slate-850 text-slate-300 hover:bg-slate-900"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "📚 500 Quyển Truyện",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8.5px] text-slate-400",
                                              children: "Dung lượng: 5 GB",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          disabled: y,
                                          onClick: () => _("all"),
                                          className: `py-3 rounded-3xl text-sm sm:text-base font-semibold font-black flex flex-col items-center justify-center gap-1 transition-all border ${V === "all" && !y ? "bg-indigo-600 text-white border-indigo-500" : "bg-slate-950 border-slate-850 text-slate-300 hover:bg-slate-900"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "📁 Game & Phần Mềm",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8.5px] text-slate-400",
                                              children: "Dung lượng: 15 GB",
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
                        }),
                      ],
                    }),
                    !y &&
                      R === 100 &&
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "absolute inset-x-5 bottom-12 bg-indigo-900/90 border border-indigo-500/50 p-8 sm:p-5 rounded-3xl flex items-center justify-between text-left text-sm sm:text-base font-medium text-white shadow-xl animate-scaleUp z-20",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-0.5",
                            children: [
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-[9px] font-bold text-amber-400 uppercase tracking-widest block flex items-center gap-1",
                                children: [
                                  jsxRuntimeExports.jsx(Sparkles, {
                                    className: "h-3 w-3",
                                  }),
                                  " THƯ VIỆN BÁO CÁO KẾT QUẢ",
                                ],
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className: "font-extrabold text-slate-100",
                                children:
                                  U.id === 3
                                    ? "⚡ Ổ cứng SSD chép xong chỉ trong chớp mắt! Bạn thấy sức mạnh của chip bán dẫn chưa?"
                                    : U.id === 1
                                      ? "🎒 USB flash chép xong rồi! Vừa gọn vừa bền, hợp mang đi học nhóm."
                                      : U.id === 2
                                        ? "🧳 Ổ cứng di động chép xong tệp tin rất an toàn! Thích hợp lưu trữ gia đình."
                                        : "🐢 Ổ cứng HDD mâm quay hoạt động chậm rãi, đĩa cơ học phải quay tốn thời gian hơn.",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("button", {
                            onClick: () => {
                              (z(0), le(0));
                            },
                            className:
                              "px-2 py-1 bg-white text-indigo-900 font-extrabold rounded-md text-sm sm:text-base font-semibold hover:bg-indigo-50 shrink-0",
                            children: "Ok em đã hiểu",
                          }),
                        ],
                      }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "mt-8 flex justify-end items-center gap-4 w-full",
                      children: jsxRuntimeExports.jsxs("button", {
                        onClick: () => {
                          (k(!0), a());
                        },
                        className:
                          "flex items-center gap-1.5 rounded-3xl bg-emerald-600 text-sm sm:text-base font-extrabold text-white py-3 px-5 sm:px-6 shadow-md hover:bg-emerald-700 transition-all cursor-pointer active:scale-95 hover:scale-[1.03]",
                        children: [
                          "Xác nhận hoàn thành ",
                          jsxRuntimeExports.jsx(Check, {
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
    }
    const evaluatePassword = (a) => {
      if (!a)
        return {
          label: "Trống",
          color:
            "text-red-500 bg-red-100/50 dark:bg-red-950/20 border-red-200 dark:border-red-900",
          time: "0.00 giây",
          strength: "weak",
        };
      if (
        [
          "123456",
          "12345678",
          "123456789",
          "admin",
          "password",
          "qwerty",
          "123123",
        ].includes(a.toLowerCase()) ||
        a.length < 6
      )
        return {
          label: "Rất yếu (Mật khẩu phổ biến/quá ngắn) 🔴",
          color:
            "text-red-600 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900",
          time: "0.05 giây",
          strength: "weak",
        };
      const i = /[a-zA-Z]/.test(a),
        l = /[0-9]/.test(a),
        c = /[^a-zA-Z0-9]/.test(a),
        d = /[A-Z]/.test(a);
      return a.length >= 10 && i && l && c && d
        ? {
            label: "Cực kỳ mạnh (Mật khẩu chuẩn bảo mật cao) 🟢",
            color:
              "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900",
            time: "Khoảng 500,000 năm (Không thể bẻ khóa bằng brute-force thông thường)",
            strength: "strong",
          }
        : a.length >= 8 && ((i && l) || (i && c) || (l && c))
          ? {
              label: "Trung bình (Độ an toàn vừa phải) 🟡",
              color:
                "text-amber-600 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900",
              time: "Khoảng 12 ngày",
              strength: "medium",
            }
          : {
              label: "Yếu (Dễ bị brute-force) 🟠",
              color:
                "text-orange-600 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900",
              time: "Khoảng 15 phút",
              strength: "weak",
            };
    };

    return Lab10;
  };
})();
