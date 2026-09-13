/**
 * Lab 05: Nhận diện & Mô phỏng Mã độc
 * Modular standalone component decoupled from main bundle.
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

    function Lab6({ onSuccess: a }) {
      const [n, i] = reactExports.useState("builder"),
        [l, c] = reactExports.useState(""),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(null),
        [p, f] = reactExports.useState({}),
        [b, k] = reactExports.useState({}),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState("yes"),
        [A, O] = reactExports.useState("yes"),
        [L, le] = reactExports.useState(0),
        [P, G] = reactExports.useState(null),
        [ee, ce] = reactExports.useState(!1),
        [V, pe] = reactExports.useState(0),
        [Ie, se] = reactExports.useState(!1),
        _ = (() => {
          let v = "CC BY",
            K = "Ghi nhận công trạng",
            te = ["BY"],
            je = [
              "Ghi danh & dẫn nguồn tác giả gốc bắt buộc trong mọi trường hợp sử dụng.",
            ];
          return (
            A === "no" &&
              ((v += "-NC"),
              (K += " - Phi thương mại"),
              te.push("NC"),
              je.push(
                "Cấm tuyệt đối mọi hình thức sử dụng thương mại, kiếm tiền từ tác phẩm.",
              )),
            R === "no"
              ? ((v += "-ND"),
                (K += " - Không phái sinh"),
                te.push("ND"),
                je.push(
                  "Không cho phép bất kỳ sự chỉnh sửa, cắt ghép, dịch thuật nào. Phải giữ nguyên gốc.",
                ))
              : R === "sa"
                ? ((v += "-SA"),
                  (K += " - Chia sẻ tương tự"),
                  te.push("SA"),
                  je.push(
                    "Nếu tạo bản remix/chỉnh sửa, bắt buộc phải chia sẻ bản mới với giấy phép tương tự.",
                  ))
                : je.push(
                    "Cho phép người khác chỉnh sửa, phối lại (remix) tác phẩm một cách tự do.",
                  ),
            { code: v, title: K, icons: te, rules: je }
          );
        })(),
        U = (v) => {
          ee || G(v);
        },
        Z = () => {
          if (!P || ee) return;
          const K = CASE_STUDIES[L].options.find((te) => te.id === P);
          (K != null && K.isCorrect && pe((te) => te + 1), ce(!0));
        },
        be = () => {
          (G(null),
            ce(!1),
            L < CASE_STUDIES.length - 1 ? le((v) => v + 1) : (se(!0), a()));
        },
        he = () => {
          (le(0), G(null), ce(!1), pe(0), se(!1), m(!1));
        },
        E = (v) => {
          (v.preventDefault(), l.trim() && m(!0));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 animate-fade-in",
        id: "lab-6-root",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "text-left",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-semibold uppercase font-black tracking-wider text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-md",
                    children: "Chủ Đề IC3 GS6: Giấy phép Creative Commons (CC)",
                  }),
                  jsxRuntimeExports.jsx("h4", {
                    className:
                      "font-extrabold text-slate-900 dark:text-white text-lg mt-1.5",
                    children:
                      "Lab 6: Mô Phỏng Tương Tác Quyền & Sử Dụng Bản Quyền CC",
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className: "flex flex-wrap gap-1.5 w-full sm:w-auto",
                children: [
                  { id: "builder", label: "Trình Tạo & Thử Nghiệm CC" },
                  { id: "scenarios", label: "Thử Thách Bản Quyền & Chứng Chỉ" },
                ].map((v) =>
                  jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => i(v.id),
                      className: `flex-1 sm:flex-none text-center rounded-3xl px-5 sm:px-6 py-3 text-sm sm:text-base font-medium font-black transition-all cursor-pointer ${n === v.id ? "bg-indigo-600 text-white shadow-md" : "bg-slate-100 text-slate-650 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"}`,
                      children: v.label,
                    },
                    v.id,
                  ),
                ),
              }),
            ],
          }),
          !1,
          n === "builder" &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "grid grid-cols-1 xl:grid-cols-12 gap-6 items-start w-full min-w-0",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className: "xl:col-span-5 space-y-5 text-left min-w-0 w-full",
                  children: jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 sm:p-5 rounded-3xl shadow-xs space-y-4 min-w-0",
                    children: [
                      jsxRuntimeExports.jsxs("h5", {
                        className:
                          "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white uppercase border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "flex h-5 w-5 items-center justify-center rounded-3xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 text-sm sm:text-base font-medium font-black",
                            children: "⚙️",
                          }),
                          "BẢNG CẤU HÌNH ĐIỀU KIỆN CC",
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-2 min-w-0",
                        children: [
                          jsxRuntimeExports.jsx("label", {
                            className:
                              "block text-xs sm:text-sm font-black text-slate-600 dark:text-slate-400 uppercase tracking-wide",
                            children:
                              "1. Cho phép chia sẻ bản sửa đổi (Adaptations)?",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "grid grid-cols-1 gap-2 min-w-0",
                            children: [
                              {
                                id: "yes",
                                label: "Có (Yes)",
                                desc: "Cho phép tự do chỉnh sửa, tạo tác phẩm phái sinh.",
                              },
                              {
                                id: "no",
                                label: "Không (No - ND)",
                                desc: "Cấm tuyệt đối chỉnh sửa tác phẩm gốc (No Derivatives).",
                              },
                              {
                                id: "sa",
                                label:
                                  "Miễn là chia sẻ tương tự (ShareAlike - SA)",
                                desc: "Cho chỉnh sửa nhưng bản sửa đổi phải cấp cùng giấy phép gốc.",
                              },
                            ].map((v) =>
                              jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => z(v.id),
                                  className: `allow-wrap w-full p-3 rounded-2xl border text-left transition-all ${R === v.id ? "border-indigo-600 bg-indigo-50/30 dark:bg-indigo-950/30 ring-1 ring-indigo-500 shadow-xs" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-slate-300"} cursor-pointer`,
                                  children: jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-start gap-2.5 text-left w-full min-w-0",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className: `mt-0.5 h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${R === v.id ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 dark:border-slate-700"}`,
                                        children:
                                          R === v.id &&
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2 w-2 rounded-full bg-white",
                                          }),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex-1 min-w-0 text-left",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug",
                                            children: v.label,
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5 leading-normal",
                                            children: v.desc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                v.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-2 pt-2 min-w-0",
                        children: [
                          jsxRuntimeExports.jsx("label", {
                            className:
                              "block text-xs sm:text-sm font-black text-slate-600 dark:text-slate-400 uppercase tracking-wide",
                            children:
                              "2. Cho phép sử dụng cho mục đích thương mại?",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "grid grid-cols-1 gap-2 min-w-0",
                            children: [
                              {
                                id: "yes",
                                label: "Cho phép (Yes)",
                                desc: "Có thể dùng kiếm tiền.",
                              },
                              {
                                id: "no",
                                label: "Cấm thương mại (No - NC)",
                                desc: "Chỉ dùng phi thương mại.",
                              },
                            ].map((v) =>
                              jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => O(v.id),
                                  className: `allow-wrap w-full p-3 rounded-2xl border text-left transition-all ${A === v.id ? "border-indigo-600 bg-indigo-50/30 dark:bg-indigo-950/30 ring-1 ring-indigo-500 shadow-xs" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-slate-300"} cursor-pointer`,
                                  children: jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-start gap-2.5 text-left w-full min-w-0",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className: `mt-0.5 h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${A === v.id ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 dark:border-slate-700"}`,
                                        children:
                                          A === v.id &&
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2 w-2 rounded-full bg-white",
                                          }),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex-1 min-w-0 text-left",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug",
                                            children: v.label,
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5 leading-normal",
                                            children: v.desc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                v.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "xl:col-span-7 space-y-4 text-left min-w-0 w-full",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-slate-950 text-slate-100 rounded-3xl p-4 sm:p-5 border border-slate-800 space-y-4 min-w-0",
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-[9px] uppercase font-black text-indigo-400 tracking-wider",
                          children: "⚡ KẾT QUẢ GIẤY PHÉP TẠO RA:",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 min-w-0",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                jsxRuntimeExports.jsx("h6", {
                                  className:
                                    "font-mono text-xl sm:text-2xl font-black text-white tracking-tight break-all",
                                  children: _.code,
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-xs sm:text-sm font-medium text-slate-400 font-extrabold mt-0.5 break-words",
                                  children: _.title,
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-1.5 bg-black/45 px-3 py-2 rounded-2xl border border-slate-800 shrink-0",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-black text-white border border-slate-700",
                                  title: "Creative Commons",
                                  children: "CC",
                                }),
                                _.icons.map((v) => {
                                  const K = CC_RIGHTS.find(
                                    (te) => te.code === v,
                                  );
                                  return jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className:
                                        "flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-black text-yellow-400 border border-slate-700 hover:scale-110 transition-transform cursor-pointer",
                                      title: (K == null ? void 0 : K.name) || v,
                                      children:
                                        v === "BY"
                                          ? jsxRuntimeExports.jsx(User, {
                                              className: "h-3 w-3",
                                            })
                                          : v === "NC"
                                            ? jsxRuntimeExports.jsx(
                                                DollarSign,
                                                { className: "h-3 w-3" },
                                              )
                                            : v === "ND"
                                              ? jsxRuntimeExports.jsx(Scale, {
                                                  className: "h-3 w-3",
                                                })
                                              : jsxRuntimeExports.jsx(
                                                  RefreshCw,
                                                  { className: "h-3 w-3" },
                                                ),
                                    },
                                    v,
                                  );
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2 min-w-0",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-xs font-bold uppercase font-black text-slate-500",
                              children:
                                "Các quy định ràng buộc của giấy phép này:",
                            }),
                            jsxRuntimeExports.jsx("ul", {
                              className:
                                "text-xs sm:text-sm font-medium text-slate-300 font-semibold space-y-2 list-none pl-0 min-w-0",
                              children: _.rules.map((v, K) =>
                                jsxRuntimeExports.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex items-start gap-2 bg-slate-900/40 p-3 sm:p-4 rounded-2xl border border-slate-900 min-w-0",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-indigo-400 shrink-0",
                                        children: "✔",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "leading-relaxed break-words",
                                        children: v,
                                      }),
                                    ],
                                  },
                                  K,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 sm:p-5 rounded-3xl shadow-xs space-y-3 min-w-0",
                      children: [
                        jsxRuntimeExports.jsx("h6", {
                          className:
                            "font-extrabold text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wide flex items-center gap-1.5",
                          children: "👤 TRÌNH MÔ PHỎNG HÀNH VI CỦA CỘNG ĐỒNG:",
                        }),
                        jsxRuntimeExports.jsxs("p", {
                          className:
                            "text-[11px] text-slate-500 font-semibold leading-relaxed",
                          children: [
                            "Khi em cấp giấy phép ",
                            jsxRuntimeExports.jsx("strong", {
                              className: "text-indigo-600 dark:text-indigo-400",
                              children: _.code,
                            }),
                            " cho tác phẩm của mình, các hành động sau từ cộng đồng sẽ được xử lý như thế nào?",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 min-w-0",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-1.5 flex flex-col justify-between min-w-0",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-black text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 block truncate",
                                      children: "🎧 Nam Remix Nhạc",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-xs font-semibold text-slate-500 font-semibold mt-0.5 leading-relaxed break-words",
                                      children:
                                        "Nam muốn lấy tác phẩm phối lại (remix), chỉnh sửa để tạo một phiên bản phong cách sôi động hơn.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "pt-2 border-t border-slate-100 dark:border-slate-850 mt-2 min-w-0",
                                  children:
                                    R === "no"
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 text-xs font-bold text-rose-500 uppercase bg-rose-50 dark:bg-rose-950/20 p-1.5 rounded min-w-0",
                                          children: [
                                            jsxRuntimeExports.jsx(ThumbsDown, {
                                              className: "h-3 w-3 shrink-0",
                                            }),
                                            " ",
                                            jsxRuntimeExports.jsx("span", {
                                              className: "truncate",
                                              children: "Cấm (Vi phạm ND)",
                                            }),
                                          ],
                                        })
                                      : R === "sa"
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-xs font-bold text-emerald-600 uppercase bg-emerald-50 dark:bg-emerald-950/20 p-1.5 rounded leading-relaxed min-w-0",
                                            children: [
                                              jsxRuntimeExports.jsx(ThumbsUp, {
                                                className: "h-3 w-3 shrink-0",
                                              }),
                                              " ",
                                              jsxRuntimeExports.jsxs("span", {
                                                className: "break-words",
                                                children: [
                                                  "Được phép (",
                                                  _.code,
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 text-xs font-bold text-emerald-600 uppercase bg-emerald-50 dark:bg-emerald-950/20 p-1.5 rounded min-w-0",
                                            children: [
                                              jsxRuntimeExports.jsx(ThumbsUp, {
                                                className: "h-3 w-3 shrink-0",
                                              }),
                                              " ",
                                              jsxRuntimeExports.jsx("span", {
                                                className: "truncate",
                                                children: "Được phép tự do",
                                              }),
                                            ],
                                          }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-850 space-y-1.5 flex flex-col justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-black text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 block",
                                      children: "👕 Lan In Bán Áo",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 font-semibold mt-0.5 leading-relaxed",
                                      children:
                                        "Lan muốn in tác phẩm này lên áo phông thun của cửa hàng thời trang và rao bán kiếm lợi nhuận.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "pt-2 border-t border-slate-100 dark:border-slate-850 mt-2",
                                  children:
                                    A === "no"
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 text-sm sm:text-base font-semibold font-black text-rose-500 uppercase bg-rose-50 dark:bg-rose-950/20 p-1.5 rounded",
                                          children: [
                                            jsxRuntimeExports.jsx(ThumbsDown, {
                                              className: "h-3 w-3 shrink-0",
                                            }),
                                            " Cấm (Vi phạm NC)",
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 text-sm sm:text-base font-semibold font-black text-emerald-600 uppercase bg-emerald-50 dark:bg-emerald-950/20 p-1.5 rounded",
                                          children: [
                                            jsxRuntimeExports.jsx(ThumbsUp, {
                                              className: "h-3 w-3 shrink-0",
                                            }),
                                            " Được phép kinh doanh",
                                          ],
                                        }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-850 space-y-1.5 flex flex-col justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-black text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 block",
                                      children: "🌐 Huy Chia Sẻ Blog",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 font-semibold mt-0.5 leading-relaxed",
                                      children:
                                        "Huy muốn đăng lại tệp gốc lên blog học tập phi lợi nhuận của mình và ghi đầy đủ tên tác giả gốc.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "pt-2 border-t border-slate-100 dark:border-slate-850 mt-2",
                                  children: jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-center gap-1 text-sm sm:text-base font-semibold font-black text-emerald-600 uppercase bg-emerald-50 dark:bg-emerald-950/20 p-1.5 rounded",
                                    children: [
                                      jsxRuntimeExports.jsx(ThumbsUp, {
                                        className: "h-3 w-3 shrink-0",
                                      }),
                                      " Luôn Được (Đúng luật BY)",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "pt-2 flex justify-end",
                      children: jsxRuntimeExports.jsxs("button", {
                        onClick: () => i("scenarios"),
                        className:
                          "bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black px-5 py-3 rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer",
                        children: [
                          "Tiến vào Thử thách & Cấp Chứng chỉ ",
                          jsxRuntimeExports.jsx(ChevronRight, {
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          n === "scenarios" &&
            jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className: "lg:col-span-8 space-y-5 text-left",
                  children: Ie
                    ? jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-5 text-center",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
                            children: jsxRuntimeExports.jsx(Award, {
                              className: "h-8 w-8",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-1.5",
                            children: [
                              jsxRuntimeExports.jsx("h5", {
                                className:
                                  "font-extrabold text-slate-900 dark:text-white text-base",
                                children:
                                  "HOÀN THÀNH KỲ KIỂM TRA BẢN QUYỀN CC!",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 font-semibold max-w-md mx-auto leading-relaxed",
                                children: [
                                  "Em đã xuất sắc trả lời đúng ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className:
                                      "text-emerald-600 font-mono text-sm sm:text-base font-medium",
                                    children: V,
                                  }),
                                  " trên tổng số ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className:
                                      "text-slate-800 dark:text-slate-250 font-mono text-sm sm:text-base font-medium",
                                    children: CASE_STUDIES.length,
                                  }),
                                  " tình huống kiểm định khắt khe của chứng chỉ số quốc tế IC3 GS6.",
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "inline-block bg-slate-50 dark:bg-slate-950 px-5 py-3 rounded-3xl border border-slate-100 dark:border-slate-850",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 block tracking-wider",
                                children: "Đánh giá chung:",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "font-extrabold text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 block mt-1",
                                children:
                                  V === CASE_STUDIES.length
                                    ? "🏆 CHUYÊN GIA KIỂM ĐỊNH BẢN QUYỀN CC XUẤT SẮC"
                                    : V >= 3
                                      ? "🥈 CHUYÊN GIA BẢN QUYỀN CC ĐẠT CHUẨN"
                                      : "🥉 CẦN ÔN TẬP THÊM LÝ THUYẾT CC",
                              }),
                            ],
                          }),
                          d
                            ? jsxRuntimeExports.jsx("div", {
                                className: "pt-2",
                                children: jsxRuntimeExports.jsx("button", {
                                  onClick: he,
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 px-5 sm:px-6 py-3 rounded-3xl transition-all cursor-pointer",
                                  children: "🔄 Thử thách lại kỳ thi",
                                }),
                              })
                            : jsxRuntimeExports.jsxs("form", {
                                onSubmit: E,
                                className: "max-w-xs mx-auto pt-3 space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider text-left",
                                        children:
                                          "Nhập tên của em để ghi nhận chứng chỉ:",
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "text",
                                        required: !0,
                                        value: l,
                                        onChange: (v) => c(v.target.value),
                                        placeholder: "Ví dụ: Nguyễn Văn A",
                                        className:
                                          "w-full px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    type: "submit",
                                    disabled: !l.trim(),
                                    className:
                                      "w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 text-white text-sm sm:text-base font-medium font-black py-3 rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm",
                                    children: [
                                      jsxRuntimeExports.jsx(Sparkles, {
                                        className: "h-4 w-4 text-yellow-300",
                                      }),
                                      " Nhận chứng chỉ số chuyên gia CC",
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      })
                    : jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-4",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5",
                            children: [
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-sm sm:text-base font-semibold font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider",
                                children: [
                                  "🏆 Tình huống thi thử IC3 GS6 (",
                                  L + 1,
                                  "/",
                                  CASE_STUDIES.length,
                                  ")",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-[10.5px] font-bold text-slate-450 dark:text-slate-400",
                                children: [
                                  "Điểm số hiện tại: ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className: "text-indigo-600 font-mono",
                                    children: V,
                                  }),
                                  "/",
                                  CASE_STUDIES.length,
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-2.5",
                            children: [
                              jsxRuntimeExports.jsx("h5", {
                                className:
                                  "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white leading-relaxed",
                                children: CASE_STUDIES[L].title,
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-850 text-sm sm:text-base font-medium text-slate-650 dark:text-slate-300 font-semibold leading-relaxed space-y-2",
                                children: [
                                  jsxRuntimeExports.jsx("p", {
                                    children: CASE_STUDIES[L].context,
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "pt-2 flex items-center gap-2 text-[10.5px] border-t border-slate-200/50 dark:border-slate-800/50",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded font-black text-[9px] uppercase",
                                        children: [
                                          "Giấy phép đính kèm: ",
                                          CASE_STUDIES[L].license,
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("span", {
                                        className: "text-slate-400 italic",
                                        children: [
                                          "(",
                                          CASE_STUDIES[L].licenseDetails,
                                          ")",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "font-black text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 uppercase mt-4 flex items-center gap-1.5",
                                children: [
                                  jsxRuntimeExports.jsx(CircleQuestionMark, {
                                    className: "h-4 w-4 text-indigo-500",
                                  }),
                                  "CHỌN KHẲNG ĐỊNH CHÍNH XÁC NHẤT:",
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className: "space-y-2",
                                children: CASE_STUDIES[L].options.map((v) => {
                                  const K = P === v.id,
                                    te = ee;
                                  return jsxRuntimeExports.jsxs(
                                    "button",
                                    {
                                      disabled: ee,
                                      onClick: () => U(v.id),
                                      className: `w-full p-8 sm:p-5 rounded-3xl border text-left transition-all relative overflow-hidden flex items-start gap-3.5 leading-relaxed ${te ? (v.isCorrect ? "border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/15" : K ? "border-red-500 bg-red-50/20 dark:bg-red-950/15" : "border-slate-200 bg-slate-50/50 dark:bg-slate-900/30 opacity-60") : K ? "border-indigo-600 bg-indigo-50/10 dark:bg-indigo-950/10 ring-1 ring-indigo-500 scale-[1.005]" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-slate-300 cursor-pointer"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-sm sm:text-base font-semibold font-black ${te ? (v.isCorrect ? "bg-emerald-500 border-emerald-500 text-white" : K ? "bg-red-500 border-red-500 text-white" : "border-slate-300 text-slate-400") : K ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-355 text-slate-650"}`,
                                          children: te
                                            ? v.isCorrect
                                              ? "✓"
                                              : K
                                                ? "✗"
                                                : ""
                                            : v.id.slice(-1).toUpperCase(),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200",
                                          children: [
                                            v.text,
                                            te &&
                                              (K || v.isCorrect) &&
                                              jsxRuntimeExports.jsxs("p", {
                                                className: `mt-2 text-sm sm:text-base font-semibold leading-relaxed border-t pt-2 ${v.isCorrect ? "text-emerald-600 dark:text-emerald-400 border-emerald-500/10" : "text-rose-500 border-red-500/10"}`,
                                                children: [
                                                  "💡 ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Giải thích chi tiết:",
                                                    },
                                                  ),
                                                  " ",
                                                  v.explanation,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    v.id,
                                  );
                                }),
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                children:
                                  ee &&
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-extrabold flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx(Info, {
                                        className:
                                          "h-4.5 w-4.5 text-indigo-500 shrink-0",
                                      }),
                                      "Kiến thức: ",
                                      CASE_STUDIES[L].insight,
                                    ],
                                  }),
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className: "shrink-0",
                                children: ee
                                  ? jsxRuntimeExports.jsx("button", {
                                      onClick: be,
                                      className:
                                        "bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-md flex items-center gap-1.5 cursor-pointer",
                                      children:
                                        L < CASE_STUDIES.length - 1
                                          ? "Câu tiếp theo"
                                          : "Hoàn thành thử thách",
                                    })
                                  : jsxRuntimeExports.jsx("button", {
                                      onClick: Z,
                                      disabled: !P,
                                      className: `px-5 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-sm flex items-center gap-1.5 ${P ? "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed"}`,
                                      children: "Gửi câu trả lời",
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "lg:col-span-4 space-y-4 text-left",
                  children: [
                    d &&
                      l.trim() &&
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-900 border border-amber-500/35 rounded-3xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden text-center animate-fade-in",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute -left-10 -top-10 h-40 w-32 rounded-full bg-amber-500/10 blur-2xl",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute -right-10 -bottom-10 h-40 w-32 rounded-full bg-indigo-500/10 blur-2xl",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute left-2.5 top-2.5 right-2.5 bottom-2.5 border border-dashed border-amber-500/20 rounded-3xl pointer-events-none",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-[8px] font-black text-amber-500 uppercase tracking-widest block",
                            children: "CHỨNG CHỈ ĐẠT CHUẨN",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "mt-2 text-2xl",
                            children: "📜",
                          }),
                          jsxRuntimeExports.jsx("h6", {
                            className:
                              "font-extrabold text-[12px] uppercase text-slate-100 tracking-wide mt-1.5",
                            children: "CHỨNG CHỈ HOÀN THÀNH",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[8px] text-slate-450 uppercase font-bold tracking-wider mt-0.5",
                            children: "KIẾN THỨC BẢN QUYỀN CREATIVE COMMONS",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "my-3 text-slate-400 text-sm sm:text-base font-semibold italic",
                            children: "Chứng nhận học viên xuất sắc:",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "font-serif text-base text-amber-300 font-extrabold border-b border-slate-800 pb-1.5 max-w-[180px] mx-auto truncate",
                            children: l,
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[9px] text-slate-300 font-semibold mt-2.5 leading-relaxed max-w-xs mx-auto",
                            children:
                              "Đã hoàn thành xuất sắc bài thi thực hành chẩn đoán, ghép nối điều khoản và giải mã các tình huống bản quyền sở hữu trí tuệ số chuẩn IC3 GS6 quốc tế.",
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "mt-4.5 flex items-center justify-between text-[8px] text-slate-400 font-mono",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                children: "Hệ thống: Simulator Live",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                className: "text-amber-500",
                                children: "Mã: CC-EXPERT-2026",
                              }),
                            ],
                          }),
                        ],
                      }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-3.5",
                      children: [
                        jsxRuntimeExports.jsxs("h6", {
                          className:
                            "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white uppercase tracking-wide flex items-center gap-1.5",
                          children: [
                            jsxRuntimeExports.jsx(ShieldCheck, {
                              className: "h-4.5 w-4.5 text-indigo-500",
                            }),
                            " CÁC SỰ KẾT HỢP CC TIÊU BIỂU (6 LOẠI)",
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className: "space-y-2.5",
                          children: [
                            {
                              code: "CC BY",
                              desc: "Dễ dãi nhất. Chỉ cần ghi nhận tác giả là được dùng thoải mái cho mọi mục đích.",
                            },
                            {
                              code: "CC BY-SA",
                              desc: "Sử dụng miễn phí cho mọi mục đích, sửa thoải mái nhưng bản sửa phải cùng giấy phép này (Thường dùng trên Wikipedia).",
                            },
                            {
                              code: "CC BY-ND",
                              desc: "Dùng cho mọi mục đích thương mại/cá nhân, nhưng bắt buộc giữ nguyên bản tác phẩm gốc.",
                            },
                            {
                              code: "CC BY-NC",
                              desc: "Cho chỉnh sửa, ghi công, nhưng chỉ dùng cho mục đích phi thương mại.",
                            },
                            {
                              code: "CC BY-NC-SA",
                              desc: "Cho chỉnh sửa, phi thương mại, và bắt buộc bản sửa cùng giấy phép.",
                            },
                            {
                              code: "CC BY-NC-ND",
                              desc: "Khắt khe nhất. Chỉ cho tải về chia sẻ nguyên bản phi thương mại, cấm sửa, cấm kiếm tiền.",
                            },
                          ].map((v) =>
                            jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className:
                                  "text-sm sm:text-base font-semibold leading-relaxed border-b border-slate-50 dark:border-slate-850 pb-2 last:border-0 last:pb-0",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "font-mono font-black text-indigo-600 dark:text-indigo-400 text-[10.5px] block",
                                    children: v.code,
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-slate-500 dark:text-slate-400 font-semibold mt-0.5",
                                    children: v.desc,
                                  }),
                                ],
                              },
                              v.code,
                            ),
                          ),
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
    const JUDGE_CASES = [
      {
        id: "case-1",
        title: "Tình huống 1: Làm Video Reaction và Bình Luận Game",
        context:
          "Một streamer quay video chơi game mới phát hành, đồng thời dừng lại phân tích chiến thuật, khen chê lỗi đồ họa và lồng tiếng hài hước cho nhân vật. Nhà phát triển game gửi yêu cầu gỡ video vì vi phạm bản quyền hình ảnh game.",
        question:
          "Là Thẩm Phán, em phán quyết video này có thuộc diện Sử Dụng Hợp Lý (Fair Use) không?",
        options: [
          {
            id: "1a",
            text: 'Có. Đây là Fair Use vì video mang tính chất "Transformative" (Sáng tạo phái sinh/Chuyển đổi), có thêm phân tích bình luận, đánh giá giáo dục chuyên môn, không đơn thuần là phát sóng lại trò chơi.',
            isCorrect: !0,
            explanation:
              "Việc dừng lại bình luận, phân tích chuyên môn và thêm giá trị cá nhân (Reaction/Review) làm thay đổi mục đích sử dụng ban đầu của game, cấu thành tính chất biến đổi cao (transformative), rất mạnh để bảo vệ dưới luật Fair Use.",
          },
          {
            id: "1b",
            text: "Không. Vì toàn bộ hình ảnh nền vẫn là game của nhà phát triển, streamer đang kiếm tiền từ tác phẩm của người khác nên chắc chắn vi phạm bản quyền.",
            isCorrect: !1,
            explanation:
              'Mặc dù có yếu tố thương mại (kiếm tiền quảng cáo), nhưng tính chất "biến đổi" và "phê bình" quá mạnh đã giúp nó được coi là Fair Use. Không phải cứ thương mại là vi phạm bản quyền.',
          },
        ],
        pills: [
          "Mục đích: Phê bình/Đánh giá",
          "Tác phẩm gốc: Sáng tạo",
          "Lượng sử dụng: Vừa phải",
          "Thị trường: Không thay thế game gốc",
        ],
      },
      {
        id: "case-2",
        title: "Tình huống 2: Chia sẻ Bản Scan Sách Giáo Khoa cho Lớp Học",
        context:
          "Một giáo viên đã quét (scan) toàn bộ cuốn sách bài tập tiếng Anh mới nhất của Nhà xuất bản Giáo dục (đang được bán rộng rãi ngoài hiệu sách) thành tệp PDF rồi đăng công khai lên nhóm Facebook có 1.000 học sinh tự học miễn phí.",
        question:
          "Là Thẩm Phán, em phán quyết hành vi này có được bảo vệ dưới dạng Fair Use không?",
        options: [
          {
            id: "2a",
            text: "Có. Vì mục đích của giáo viên hoàn toàn là phi thương mại, phục vụ giảng dạy miễn phí cho học sinh nghèo hiếu học.",
            isCorrect: !1,
            explanation:
              "Mặc dù mục đích giáo dục là phi thương mại, việc chia sẻ 100% tác phẩm sách bài tập đang bán trên thị trường gây ảnh hưởng nghiêm trọng đến doanh thu của nhà xuất bản. Học sinh không mua sách nữa, phá hỏng thị trường gốc của tác phẩm.",
          },
          {
            id: "2b",
            text: "Không. Vì việc sao chép 100% cuốn sách giáo khoa thương mại đang bán trên thị trường trực tiếp cướp đi tệp khách hàng mua sách gốc, gây thiệt hại kinh tế trực tiếp cho nhà sáng tạo.",
            isCorrect: !0,
            explanation:
              "Yếu tố thứ 4 (Tác động thị trường) cực kỳ nghiêm trọng trong trường hợp này. Sao chép trọn vẹn (100%) một tác phẩm đang kinh doanh để phân phối rộng rãi làm mất đi động lực sáng tạo và thị trường tiêu thụ của tác giả.",
          },
        ],
        pills: [
          "Mục đích: Giáo dục phi lợi nhuận",
          "Tác phẩm gốc: Sáng tạo cao",
          "Lượng sử dụng: 100%",
          "Thị trường: Triệt tiêu doanh số bán sách",
        ],
      },
      {
        id: "case-3",
        title: "Tình huống 3: Nhại Lại Nhạc Để Châm Biếm (Parody Memes)",
        context:
          "Một nhóm học sinh viết lại lời mới vui nhộn cho bài hát Pop nổi tiếng của một ca sĩ để châm biếm về thói hư tật xấu nghiện điện thoại của giới trẻ. Nhóm tự thu âm, giữ nguyên giai điệu nhạc nền gốc (beat) và đăng lên Tiktok giải trí.",
        question:
          'Hành vi làm nhạc "nhái" châm biếm (Parody) này có cơ sở được coi là Fair Use không?',
        options: [
          {
            id: "3a",
            text: "Có. Thể loại Parody (nhái châm biếm) được pháp luật quốc tế ưu ái đặc biệt trong Fair Use vì bản chất của nó là sử dụng tác phẩm cũ để phản ánh một hiện tượng xã hội mới.",
            isCorrect: !0,
            explanation:
              "Parody/Châm biếm là một trụ cột cực kỳ vững chắc của Fair Use. Do mục đích là hài hước hóa để phê bình, xã hội cần giai điệu gốc để người nghe nhận diện được đang nhại cái gì, đồng thời nó cũng không thay thế cho bài hát lãng mạn ban đầu trên thị trường.",
          },
          {
            id: "3b",
            text: "Không. Nhóm học sinh đã ăn cắp toàn bộ giai điệu nhạc nền của nhạc sĩ mà không xin phép, đây là vi phạm bản quyền sở hữu trí tuệ trắng trợn.",
            isCorrect: !1,
            explanation:
              "Parody đòi hỏi phải gợi nhắc tác phẩm gốc để tạo hiệu ứng châm biếm. Luật bản quyền chấp nhận điều này miễn là tác phẩm parody không nhằm mục đích cạnh tranh thay thế bài hát gốc.",
          },
        ],
        pills: [
          "Mục đích: Parody/Châm biếm",
          "Tác phẩm gốc: Âm nhạc nghệ thuật",
          "Lượng sử dụng: Giai điệu",
          "Thị trường: Khán giả mua nhạc gốc không giảm",
        ],
      },
      {
        id: "case-4",
        title: "Tình huống 4: Dịch Nhật ký Chưa Xuất Bản của Người Nổi Tiếng",
        context:
          "Một nhà báo tìm thấy cuốn nhật ký viết tay chưa bao giờ công bố của một chính trị gia quá cố. Nhà báo lập tức dịch 5 trang nhật ký chứa đựng những tâm sự tuyệt mật về đời tư rồi đăng lên trang tin điện tử lớn để công chúng cùng bàn luận.",
        question:
          "Hành vi công khai nhật ký CHƯA XUẤT BẢN này có được chấp nhận là Fair Use?",
        options: [
          {
            id: "4a",
            text: "Có. Vì đây là tin tức thời sự sốt dẻo, thuộc quyền tự do báo chí và quyền được biết của người dân.",
            isCorrect: !1,
            explanation:
              'Luật sở hữu trí tuệ cực kỳ bảo vệ những tác phẩm CHƯA XUẤT BẢN. Tác giả hoặc gia đình có quyền tuyệt đối quyết định "khi nào" và "bằng cách nào" tác phẩm đầu tay xuất hiện trước công chúng. Fair Use rất khó áp dụng cho tác phẩm chưa công bố.',
          },
          {
            id: "4b",
            text: "Không. Vì tác phẩm gốc chưa được xuất bản. Tác giả/người thừa kế có quyền kiểm soát tuyệt đối lần công bố đầu tiên của tác phẩm thuộc sở hữu cá nhân.",
            isCorrect: !0,
            explanation:
              'Bản chất của tác phẩm gốc ở đây là "Chưa xuất bản" (Unpublished). Việc tự ý công bố thay cho tác giả tước đi quyền công bố đầu tiên của họ, vi phạm nghiêm trọng bản chất sáng lập của quyền tác giả.',
          },
        ],
        pills: [
          "Mục đích: Báo chí/Công luận",
          "Tác phẩm gốc: Riêng tư chưa xuất bản",
          "Lượng sử dụng: 5 trang mật",
          "Thị trường: Xâm phạm quyền công bố",
        ],
      },
      {
        id: "case-5",
        title: "Tình huống 5: Cắt Đoạn Code Nhỏ Trên Thư Viện Open Source",
        context:
          "Một lập trình viên sao chép một hàm xử lý chuỗi ký tự dài khoảng 15 dòng từ một dự án phần mềm có bản quyền thương mại khép kín để dán vào công cụ quản lý gia đình phi thương mại của mình.",
        question:
          "Hành vi mượn 15 dòng code từ hệ thống lớn này có dễ dàng đạt chuẩn Fair Use?",
        options: [
          {
            id: "5a",
            text: "Có. Vì số lượng sử dụng cực kỳ nhỏ (15 dòng trên hàng triệu dòng code gốc), đồng thời việc này không cạnh tranh hay ảnh hưởng đến thị phần thương mại của phần mềm gốc.",
            isCorrect: !0,
            explanation:
              'Tỷ lệ sao chép cực kỳ nhỏ và không lấy đi phần "linh hồn cấu trúc cốt lõi" của phần mềm gốc, cộng với việc phục vụ nhu cầu cá nhân phi lợi nhuận giúp hành vi này hoàn toàn đạt tiêu chí Fair Use một cách an toàn.',
          },
          {
            id: "5b",
            text: "Không. Đã là code thương mại đóng thì dù chỉ 1 dòng cũng không được lấy nếu chưa trả tiền mua bản quyền.",
            isCorrect: !1,
            explanation:
              "Quy mô và số lượng đóng vai trò quan trọng trong Fair Use. Việc mượn một đoạn chức năng nhỏ, phổ thông không cấu thành hành vi vi phạm bản quyền nghiêm trọng trừ khi nó là thuật toán cốt lõi độc quyền phát minh.",
          },
        ],
        pills: [
          "Mục đích: Sử dụng cá nhân phi lợi nhuận",
          "Tác phẩm gốc: Code thương mại",
          "Lượng sử dụng: Cực kỳ nhỏ (15 dòng)",
          "Thị trường: Không có tác động",
        ],
      },
    ];

    return Lab5;
  };
})();
