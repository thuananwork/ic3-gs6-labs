/**
 * Lab 23: 6 Bước tạo Game Di động
 * Modular standalone component decoupled from main bundle.
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

    function Lab25({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState(new Set([1])),
        [d, m] = reactExports.useState("old"),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState(90),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState("emotion"),
        [A, O] = reactExports.useState("herring"),
        [L, le] = reactExports.useState(2),
        P = (ee) => {
          (i(ee),
            c((ce) => {
              const V = new Set(ce);
              return (V.add(ee), V.size === FALLACIES.length && a(), V);
            }));
        },
        G = FALLACIES.find((ee) => ee.id === n) || FALLACIES[0];
      return jsxRuntimeExports.jsxs("div", {
        className:
          "w-full space-y-6 text-slate-950 dark:text-slate-100 font-sans",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "p-3 bg-blue-600 text-white rounded-xl shadow-sm",
                    children: jsxRuntimeExports.jsx(Zap, {
                      className: "h-6 w-6",
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    children: [
                      jsxRuntimeExports.jsx("h1", {
                        className:
                          "text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight",
                        children: "Mô Phỏng Tương Tác: 8 Dạng Ngụy Biện Logic",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm font-bold text-slate-700 dark:text-slate-300",
                        children:
                          "Nhận diện lỗi lập luận qua hình ảnh & ví dụ mô phỏng tương tác thực tế.",
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 shrink-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "text-right",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "text-xs font-bold text-slate-700 dark:text-slate-300",
                        children: "Tiến độ trải nghiệm",
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "text-base font-black text-blue-700 dark:text-blue-400",
                        children: [
                          l.size,
                          " / ",
                          FALLACIES.length,
                          " ngụy biện",
                        ],
                      }),
                    ],
                  }),
                  l.size === FALLACIES.length
                    ? jsxRuntimeExports.jsx("div", {
                        className:
                          "p-2.5 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold",
                        children: jsxRuntimeExports.jsx(Sparkles, {
                          className: "h-6 w-6",
                        }),
                      })
                    : jsxRuntimeExports.jsxs("div", {
                        className:
                          "w-10 h-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin flex items-center justify-center text-[10px] font-bold",
                        children: [
                          Math.round((l.size / FALLACIES.length) * 100),
                          "%",
                        ],
                      }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className:
                  "lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-300 dark:border-slate-700 p-3.5 space-y-2 shadow-md",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "text-xs font-black uppercase tracking-wider text-slate-900 dark:text-slate-200 px-3 py-2 border-b-2 border-slate-200 dark:border-slate-800 flex justify-between items-center",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        children: "Danh Sách Ngụy Biện",
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-blue-700 dark:text-blue-400 font-black",
                        children: "Chọn để khám phá",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "space-y-2",
                    children: FALLACIES.map((ee) => {
                      const ce = n === ee.id,
                        V = l.has(ee.id);
                      return jsxRuntimeExports.jsxs(
                        "button",
                        {
                          id: `btn-fallacy-${ee.id}`,
                          onClick: () => P(ee.id),
                          className: `w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${ce ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md font-black scale-[1.01]" : V ? "bg-slate-50 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-blue-50 hover:border-blue-300" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-blue-50 hover:border-blue-300"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className: `p-2.5 rounded-lg ${ce ? "bg-blue-600 text-white" : `bg-gradient-to-r ${ee.color} text-white`}`,
                                  children: ee.icon,
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-sm font-black leading-tight",
                                      children: ee.name,
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5",
                                      children: ee.englishName,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-1.5 shrink-0",
                              children: [
                                V &&
                                  jsxRuntimeExports.jsx(Check, {
                                    className:
                                      "h-5 w-5 text-emerald-600 dark:text-emerald-400 font-bold",
                                  }),
                                jsxRuntimeExports.jsx(ChevronRight, {
                                  className: `h-5 w-5 ${ce ? "text-blue-700 dark:text-blue-300" : "text-slate-400"}`,
                                }),
                              ],
                            }),
                          ],
                        },
                        ee.id,
                      );
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-300 dark:border-slate-700 p-5 sm:p-6 shadow-md space-y-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "p-5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border-2 border-slate-300 dark:border-slate-700 space-y-3",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className: `p-3 rounded-xl bg-gradient-to-r ${G.color} text-white shadow-md`,
                                children: G.icon,
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("h2", {
                                    className:
                                      "text-xl sm:text-2xl font-black text-slate-950 dark:text-white",
                                    children: G.name,
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-xs font-mono font-bold text-slate-600 dark:text-slate-400",
                                    children: G.englishName,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-xs sm:text-sm px-3.5 py-1.5 rounded-lg font-black border-2 bg-blue-100 text-blue-950 border-blue-400 dark:bg-blue-950 dark:text-blue-100",
                            children: G.quote,
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-relaxed",
                        children: G.summary,
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "p-3.5 bg-white dark:bg-slate-900 rounded-xl border-2 border-blue-200 dark:border-blue-900 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-blue-700 dark:text-blue-400 font-black",
                            children: "📌 Ví dụ thực tế ngoài đời: ",
                          }),
                          G.example,
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-800 space-y-5",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-3",
                        children: [
                          jsxRuntimeExports.jsxs("h3", {
                            className:
                              "text-base font-black text-slate-950 dark:text-white flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx(Play, {
                                className:
                                  "h-5 w-5 text-blue-600 fill-blue-600",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                children: "Khung Mô Phỏng Hình Ảnh Tương Tác",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-xs font-black px-3 py-1 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 rounded-lg border border-blue-300",
                            children: "Bấm nút chọn để xem sự khác biệt",
                          }),
                        ],
                      }),
                      G.id === 1 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex justify-center gap-3",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  id: "btn-tradition-old",
                                  onClick: () => m("old"),
                                  className: `px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${d === "old" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md scale-105" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                  children:
                                    "📜 Sổ Sách Thủ Công (10 Năm Trải Nghiệm)",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  id: "btn-tradition-new",
                                  onClick: () => m("new"),
                                  className: `px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${d === "new" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md scale-105" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                  children:
                                    "💻 Phần Mềm Số Hóa Mới (Tối Ưu Tốc Độ)",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-4 sm:p-5 rounded-xl border-2 transition-all ${d === "old" ? "border-amber-500 bg-amber-50 dark:bg-amber-950/40 ring-2 ring-amber-400" : "border-slate-300 bg-white dark:bg-slate-900 opacity-60"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-3 border-b pb-2 border-amber-200 dark:border-amber-800",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 font-black text-sm text-amber-950 dark:text-amber-200",
                                          children: [
                                            jsxRuntimeExports.jsx(FileText, {
                                              className:
                                                "h-5 w-5 text-amber-600",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Sổ Sách Giấy Thủ Công",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "px-2.5 py-0.5 bg-amber-200 text-amber-950 rounded font-mono text-xs font-black",
                                          children: "Lối Cũ",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "space-y-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "⏱️ Thời gian ghi sổ:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-red-600 font-black",
                                              children: "4 tiếng / ngày",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "❌ Tỷ lệ nhầm số liệu:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-red-600 font-black",
                                              children: "15% (Hay sai sót)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-amber-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "🧠 Lý do từ chối đổi mới:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-amber-900 dark:text-amber-200 font-black",
                                              children:
                                                "“Vì 10 năm rồi vẫn làm thế!”",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: `p-4 sm:p-5 rounded-xl border-2 transition-all ${d === "new" ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-400" : "border-slate-300 bg-white dark:bg-slate-900 opacity-60"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-3 border-b pb-2 border-emerald-200 dark:border-emerald-800",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 font-black text-sm text-emerald-950 dark:text-emerald-200",
                                          children: [
                                            jsxRuntimeExports.jsx(Monitor, {
                                              className:
                                                "h-5 w-5 text-emerald-600",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Phần Mềm Quản Lý Số",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "px-2.5 py-0.5 bg-emerald-200 text-emerald-950 rounded font-mono text-xs font-black",
                                          children: "Đổi Mới",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "space-y-2.5 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "⚡ Thời gian xử lý:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-600 font-black",
                                              children: "5 giây / phiếu",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "✅ Độ chính xác:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-600 font-black",
                                              children: "99.9% (Chuẩn xác)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-emerald-300 flex justify-between items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "💡 Đánh giá Logic:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-800 dark:text-emerald-200 font-black",
                                              children:
                                                "Số năm tồn tại ≠ Tối ưu",
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
                      G.id === 2 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 flex items-center justify-between",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Lời khuyên: “Kem dưỡng da này tốt lắm, mua ngay đi!”",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "px-2.5 py-1 bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 rounded-md font-mono text-xs",
                                      children: "Mỹ phẩm",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 rounded-xl border-2 border-purple-300 bg-purple-50 dark:bg-purple-950/40 space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "font-black text-sm sm:text-base text-purple-950 dark:text-purple-200 flex items-center gap-2",
                                          children: jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              children:
                                                "🎤 Ca Sĩ B (KOL Nổi Tiếng)",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200",
                                          children: [
                                            "• Mức độ nổi tiếng: ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-purple-700 dark:text-purple-300 font-black",
                                              children: "10/10 ⭐",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200",
                                          children: [
                                            "• Kiến thức y khoa da liễu: ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-red-600 font-black",
                                              children: "0/10 ❌",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "font-black text-sm sm:text-base text-emerald-950 dark:text-emerald-200 flex items-center gap-2",
                                          children: jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              children:
                                                "🩺 Bác Sĩ Chuyên Khoa Da Liễu",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200",
                                          children: [
                                            "• Mức độ nổi tiếng: ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-slate-600 font-black",
                                              children: "Vừa phải",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200",
                                          children: [
                                            "• Bằng cấp & Kiểm nghiệm: ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-600 font-black",
                                              children: "10/10 ✅",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex justify-center",
                              children: jsxRuntimeExports.jsx("button", {
                                id: "btn-toggle-authority-check",
                                onClick: () => g(!u),
                                className: `px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${u ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                children: u
                                  ? "✓ Đã Bật: Lọc Theo Đúng Bằng Cấp Chuyên Môn"
                                  : "🔍 Bật Kính Lọc Kiểm Tra Chuyên Môn Ngành",
                              }),
                            }),
                            u &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 rounded-xl bg-blue-100 dark:bg-blue-950 border-2 border-blue-400 text-blue-950 dark:text-blue-100 text-xs sm:text-sm font-bold leading-relaxed",
                                children: [
                                  "🎯 ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "Kết luận Logic:",
                                  }),
                                  " Ca sĩ nổi tiếng ở lĩnh vực âm nhạc không đồng nghĩa với có kiến thức đúng về y khoa da liễu. Luôn kiểm tra bằng chứng chuyên ngành thay vì tin mù quáng theo danh tiếng idol!",
                                ],
                              }),
                          ],
                        }),
                      G.id === 3 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-xs sm:text-sm font-black text-rose-950 dark:text-rose-200 flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx(TriangleAlert, {
                                      className: "h-5 w-5 text-rose-600",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Chiêu trò ép người nghe chỉ có 2 lựa chọn cực đoan:",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-3 text-center",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "p-3.5 bg-white dark:bg-slate-900 border-2 border-rose-400 rounded-xl font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200",
                                      children:
                                        "❌ Lựa chọn A: Mua ngay khóa học 15 triệu",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "p-3.5 bg-white dark:bg-slate-900 border-2 border-rose-400 rounded-xl font-black text-xs sm:text-sm text-rose-950 dark:text-rose-200",
                                      children:
                                        "❌ Lựa chọn B: Chấp nhận lương 5 triệu cả đời",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex justify-center",
                              children: jsxRuntimeExports.jsx("button", {
                                id: "btn-unlock-dilemma",
                                onClick: () => f(!p),
                                className: `px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${p ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                children: p
                                  ? "Thu gọn các giải pháp"
                                  : "🔓 Mở Rộng Các Lựa Chọn Khác (C, D, E... Thực Tế)",
                              }),
                            }),
                            p &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-4 sm:p-5 rounded-xl bg-blue-100 dark:bg-blue-950/80 border-2 border-blue-400 space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-xs sm:text-sm font-black text-blue-950 dark:text-blue-100",
                                    children:
                                      "✅ Phá vỡ Song đề sai - Các phương án thực tế hoàn toàn khả thi:",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-300",
                                        children:
                                          "• Phương án C: Tự học qua tài liệu mở & sách báo miễn phí",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-300",
                                        children:
                                          "• Phương án D: Học hỏi trực tiếp từ công việc thực tế",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-3 bg-white dark:bg-slate-900 rounded-lg border border-blue-300",
                                        children:
                                          "• Phương án E: Tham gia các khóa học ngắn hạn giá hợp lý hơn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      G.id === 4 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100",
                                  children: [
                                    "💬 Lời công kích: ",
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-red-600 font-black",
                                      children:
                                        "“Cậu mới 22 tuổi mặt búng ra sữa thì biết gì về quản trị!”",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: `p-4 rounded-xl border-2 transition-all ${b ? "opacity-30 line-through border-red-300 bg-red-50 dark:bg-red-950" : "border-red-400 bg-red-50 dark:bg-red-950/40"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-red-900 dark:text-red-300 mb-1",
                                          children: "❌ Lời công kích cá nhân",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-red-950 dark:text-red-200",
                                          children:
                                            "Nói về tuổi tác (22 tuổi) & ngoại hình (“mặt búng ra sữa”) → Không có giá trị chứng minh tính đúng sai của báo cáo!",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black text-emerald-900 dark:text-emerald-300 mb-1",
                                          children:
                                            "📊 Luận điểm dữ liệu thực sự",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-200",
                                          children:
                                            "Các con số tối ưu chi phí & sơ đồ quy trình đề xuất. (Đây mới là trọng tâm cần thảo luận!)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex justify-center",
                              children: jsxRuntimeExports.jsx("button", {
                                id: "btn-filter-ad-hominem",
                                onClick: () => k(!b),
                                className: `px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${b ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                children: b
                                  ? "✓ Đã Lọc Bỏ Lời Công Kích Cá Nhân"
                                  : "🛡️ Bật Lá Chắn Loại Bỏ Công Kích Cá Nhân",
                              }),
                            }),
                          ],
                        }),
                      G.id === 5 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-col sm:flex-row items-center justify-between gap-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "text-xs sm:text-sm font-black text-slate-900 dark:text-white",
                                      children: [
                                        "Tỷ lệ người bị cuốn theo trào lưu: ",
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-blue-700 dark:text-blue-400 font-extrabold text-base",
                                          children: [N, "%"],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      id: "btn-change-crowd",
                                      onClick: () =>
                                        M((ee) => (ee >= 95 ? 25 : ee + 25)),
                                      className:
                                        "px-3.5 py-1.5 bg-blue-100 text-blue-950 border border-blue-400 rounded-lg text-xs font-black hover:bg-blue-200",
                                      children: "Thay đổi mật độ đám đông",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "grid grid-cols-10 gap-1.5 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300",
                                  children: Array.from({ length: 20 }).map(
                                    (ee, ce) => {
                                      const V = (ce + 1) * 5 <= N;
                                      return jsxRuntimeExports.jsx(
                                        "div",
                                        {
                                          className: `h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all ${V ? "bg-blue-600 text-white font-black shadow-sm" : "bg-slate-300 dark:bg-slate-700 text-slate-500"}`,
                                          children: "👤",
                                        },
                                        ce,
                                      );
                                    },
                                  ),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex justify-center",
                              children: jsxRuntimeExports.jsx("button", {
                                id: "btn-bandwagon-truth",
                                onClick: () => I(!y),
                                className: `px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${y ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                children: y
                                  ? "Ẩn ví dụ thực tế"
                                  : "🔍 Kiểm Tra Bản Chất Sự Thật (Không Phụ Thuộc Số Đông)",
                              }),
                            }),
                            y &&
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "p-4 sm:p-5 rounded-xl bg-blue-100 dark:bg-blue-950/80 border-2 border-blue-400 text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 space-y-1.5 leading-relaxed",
                                children: jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    "💡 ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Bài học lịch sử thực tế:",
                                    }),
                                    " Hàng triệu người từng cùng tin tưởng và tham gia vào các cơn sốt lan đột biến hay tiền ảo lừa đảo. Sự tham gia của số đông hoàn toàn không đảm bảo tính an toàn hay hợp pháp!",
                                  ],
                                }),
                              }),
                          ],
                        }),
                      G.id === 6 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "text-center font-black text-xs sm:text-sm text-slate-900 dark:text-white",
                              children:
                                "⚖️ Mô Phỏng Cán Cân: Dữ Liệu Logic vs Thao Túng Cảm Xúc",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex justify-center gap-3",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  id: "btn-emotion-type-emotion",
                                  onClick: () => z("emotion"),
                                  className: `px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${R === "emotion" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md scale-105" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                  children:
                                    "😭 Trường hợp A: Dùng Nước Mắt & Gia Cảnh (Ngụy biện)",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  id: "btn-emotion-type-logic",
                                  onClick: () => z("logic"),
                                  className: `px-5 py-3 rounded-xl font-black text-xs sm:text-sm transition-all border-2 ${R === "logic" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md scale-105" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-blue-50"}`,
                                  children:
                                    "📊 Trường hợp B: Dùng Số Liệu Đánh Giá Năng Lực (Logic)",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex justify-around items-end h-36 border-b-4 border-slate-400 relative",
                                  children: [
                                    jsxRuntimeExports.jsxs(motion.div, {
                                      animate: { y: R === "logic" ? 15 : -15 },
                                      className: `w-40 p-3 rounded-xl border-2 text-center transition-all ${R === "logic" ? "border-emerald-500 bg-emerald-100 dark:bg-emerald-950 font-black text-emerald-950 dark:text-emerald-100 shadow-lg" : "border-slate-300 bg-slate-100 dark:bg-slate-800 text-slate-500 opacity-60"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black",
                                          children: "📊 Đĩa Lý Trí",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-[11px] sm:text-xs mt-1",
                                          children: "KPI, Doanh số, Năng lực",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[30px] border-b-slate-600 dark:border-b-slate-300",
                                    }),
                                    jsxRuntimeExports.jsxs(motion.div, {
                                      animate: {
                                        y: R === "emotion" ? 15 : -15,
                                      },
                                      className: `w-40 p-3 rounded-xl border-2 text-center transition-all ${R === "emotion" ? "border-rose-500 bg-rose-100 dark:bg-rose-950 font-black text-rose-950 dark:text-rose-100 shadow-lg" : "border-slate-300 bg-slate-100 dark:bg-slate-800 text-slate-500 opacity-60"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs sm:text-sm font-black",
                                          children: "😭 Đĩa Cảm Xúc",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-[11px] sm:text-xs mt-1",
                                          children:
                                            "Khóc lóc, Hoàn cảnh khó khăn",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: `p-4 rounded-xl border-2 text-xs sm:text-sm font-bold leading-relaxed ${R === "emotion" ? "bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-950 dark:text-rose-100" : "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 text-emerald-950 dark:text-emerald-100"}`,
                                  children:
                                    R === "emotion"
                                      ? jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            "❌ ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Quyết định bị thao túng:",
                                            }),
                                            " Hoàn cảnh khó khăn cần sự trợ giúp phúc lợi cá nhân, nhưng KHÔNG THỂ thay thế cho tiêu chí xét duyệt tăng lương dựa trên hiệu quả công việc!",
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            "✅ ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Đánh giá Khách quan & Độc lập:",
                                            }),
                                            " Đưa ra quyết định dựa trên báo cáo KPI thực tế giúp duy trì sự công bằng và minh bạch trong tập thể.",
                                          ],
                                        }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      G.id === 7 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-xs sm:text-sm font-black text-slate-900 dark:text-white",
                                  children: [
                                    "🎯 Câu hỏi ban đầu: ",
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-blue-700 dark:text-blue-400 font-black",
                                      children:
                                        "“Tại sao nhà máy của công ty xả nước thải bẩn ra sông?”",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      id: "btn-herring-topic",
                                      onClick: () => O("herring"),
                                      className: `p-3.5 rounded-xl border-2 text-left transition-all ${A === "herring" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md font-black" : "border-slate-300 bg-slate-50 dark:bg-slate-800 text-slate-800 hover:bg-blue-50"}`,
                                      children: [
                                        "🐟 Chủ đề Cá Trích Đỏ (Bẻ lái):",
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs font-normal mt-1 leading-snug",
                                          children:
                                            "“Nhưng công ty chúng tôi vừa từ thiện 2 tỷ đồng cho quỹ trẻ em!”",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      id: "btn-core-topic",
                                      onClick: () => O("core"),
                                      className: `p-3.5 rounded-xl border-2 text-left transition-all ${A === "core" ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md font-black" : "border-slate-300 bg-slate-50 dark:bg-slate-800 text-slate-800 hover:bg-blue-50"}`,
                                      children: [
                                        "🎯 Trọng tâm Vấn đề Cốt lõi:",
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "text-xs font-normal mt-1 leading-snug",
                                          children:
                                            "“Biện pháp khắc phục hệ thống lọc nước thải là gì?”",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-blue-100 dark:bg-blue-950/80 border-2 border-blue-400 text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 leading-relaxed",
                              children:
                                A === "herring"
                                  ? jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        "⚠️ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Ngụy biện Cá Trích Đỏ:",
                                        }),
                                        " Việc từ thiện là hành động tốt, nhưng hoàn toàn KHÔNG LIÊN QUAN và KHÔNG THỂ bào chữa cho hành vi xả thải gây ô nhiễm môi trường!",
                                      ],
                                    })
                                  : jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        "✅ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Giữ vững Tiêu điểm:",
                                        }),
                                        " Yêu cầu người phát ngôn quay lại trả lời đúng trọng tâm câu hỏi ô nhiễm, không để bị dẫn dắt bởi thông tin từ thiện.",
                                      ],
                                    }),
                            }),
                          ],
                        }),
                      G.id === 8 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-col sm:flex-row items-center justify-between gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-xs sm:text-sm font-black text-slate-900 dark:text-white",
                                      children: [
                                        "📊 Quy mô mẫu khảo sát: ",
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-blue-700 dark:text-blue-400 font-black text-base",
                                          children: [L, " / 100 người"],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        jsxRuntimeExports.jsx("button", {
                                          id: "btn-sample-2",
                                          onClick: () => le(2),
                                          className: `px-3.5 py-1.5 rounded-lg text-xs font-black border-2 transition-all ${L <= 3 ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 hover:bg-blue-50"}`,
                                          children: "Mẫu quá nhỏ (2 người)",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          id: "btn-sample-80",
                                          onClick: () => le(80),
                                          className: `px-3.5 py-1.5 rounded-lg text-xs font-black border-2 transition-all ${L >= 50 ? "bg-blue-100 dark:bg-blue-900/60 text-blue-950 dark:text-blue-100 border-blue-500 shadow-md" : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 hover:bg-blue-50"}`,
                                          children: "Mẫu đủ lớn (80 người)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsx("input", {
                                      id: "input-sample-size-slider",
                                      type: "range",
                                      min: 1,
                                      max: 100,
                                      value: L,
                                      onChange: (ee) =>
                                        le(Number(ee.target.value)),
                                      className:
                                        "w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between text-[11px] font-bold text-slate-600 dark:text-slate-400",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "1 người (Cực kỳ vội vàng)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "50 người (Trung bình)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "100 người (Toàn bộ)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "grid grid-cols-10 gap-1.5 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300",
                                  children: Array.from({ length: 100 }).map(
                                    (ee, ce) => {
                                      const V = ce < L;
                                      return jsxRuntimeExports.jsx(
                                        "div",
                                        {
                                          className: `h-4 rounded-sm transition-all ${V ? (L <= 5 ? "bg-red-500 scale-110 shadow-sm" : "bg-emerald-500") : "bg-slate-300 dark:bg-slate-700"}`,
                                        },
                                        ce,
                                      );
                                    },
                                  ),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: `p-4 sm:p-5 rounded-xl border-2 text-xs sm:text-sm font-bold leading-relaxed ${L <= 5 ? "bg-rose-100 dark:bg-rose-950/80 border-rose-400 text-rose-950 dark:text-rose-100" : L < 40 ? "bg-amber-100 dark:bg-amber-950/80 border-amber-400 text-amber-950 dark:text-amber-100" : "bg-emerald-100 dark:bg-emerald-950/80 border-emerald-400 text-emerald-950 dark:text-emerald-100"}`,
                              children:
                                L <= 5
                                  ? jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        "🔴 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "KHÁI QUÁT HÓA VỘI VÀNG (SAI LỆCH NGHIÊM TRỌNG):",
                                        }),
                                        jsxRuntimeExports.jsx("br", {}),
                                        "Mới chỉ gặp ",
                                        L,
                                        " tài xế xấu tính mà đã quy chụp cho tất cả hàng trăm nghìn người dân thành phố X! Độ đại diện mẫu chỉ đạt ",
                                        L,
                                        "%.",
                                      ],
                                    })
                                  : L < 40
                                    ? jsxRuntimeExports.jsxs("div", {
                                        children: [
                                          "🟡 ",
                                          jsxRuntimeExports.jsxs("strong", {
                                            children: [
                                              "MẪU TRUNG BÌNH (",
                                              L,
                                              "%):",
                                            ],
                                          }),
                                          " Khảo sát ",
                                          L,
                                          " người. Cần thêm dữ liệu thống kê chính thức để đưa ra nhận xét bao quát.",
                                        ],
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        children: [
                                          "🟢 ",
                                          jsxRuntimeExports.jsxs("strong", {
                                            children: [
                                              "ĐỘ ĐÁNG TIN CÂY CAO (",
                                              L,
                                              "%):",
                                            ],
                                          }),
                                          " Số lượng mẫu đã đủ lớn để đưa ra đánh giá khách quan về toàn bộ tập thể.",
                                        ],
                                      }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "p-4 sm:p-5 rounded-xl bg-blue-100 dark:bg-blue-950/80 border-2 border-blue-400 dark:border-blue-700 space-y-2",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "text-sm sm:text-base font-black text-blue-950 dark:text-blue-100 flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(ShieldCheck, {
                            className:
                              "h-5 w-5 text-blue-700 dark:text-blue-400",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children:
                              "Phương Pháp Phản Bác & Bài Học Tư Duy Logic:",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100 leading-relaxed",
                        children: [
                          G.id === 1 &&
                            "Chỉ ra rằng số năm tồn tại không chứng minh tính hiệu quả. Luôn đo lường dựa trên tốc độ, chi phí và kết quả thực tế.",
                          G.id === 2 &&
                            "Yêu cầu kiểm chứng bằng chứng khoa học đúng chuyên ngành thay vì dựa vào mức độ nổi tiếng của nghệ sĩ/idol.",
                          G.id === 3 &&
                            "Chỉ ra các phương án thứ 3, thứ 4 (Option C, D, E...) để phá vỡ thế ép buộc 2 lựa chọn cực đoan.",
                          G.id === 4 &&
                            'Chủ động tách biệt nhân thân người nói và nội dung lập luận: "Hãy tập trung thảo luận số liệu, không phải về tuổi tác cá nhân tôi".',
                          G.id === 5 &&
                            "Số đông hưởng ứng không biến một điều sai thành đúng. Luôn duy trì tư duy độc lập và phân tích rủi ro.",
                          G.id === 6 &&
                            "Lắng nghe sự chia sẻ nhưng kiên quyết đưa tiêu chuẩn đánh giá về đúng thước đo logic và dữ liệu thực tế.",
                          G.id === 7 &&
                            "Giữ nguyên tiêu điểm ban đầu và yêu cầu đối phương trả lời đúng câu hỏi gốc, không để bị giật gân đánh lạc hướng.",
                          G.id === 8 &&
                            "Cảnh giác với tư duy vội vàng: Một vài hiện tượng cá biệt không thể đại diện cho bản chất của cả một tập thể lớn.",
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
