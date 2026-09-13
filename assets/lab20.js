/**
 * Lab 20: Lưu đồ Thuật toán (Flowchart)
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab20 = window.AGY_LABS[20] = function (env) {
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

    function Lab22({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState("has_webcam"),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(
          "Ghi nhận: Đã hỗ trợ chị An xử lý xong lỗi Webcam họp Zoom. Khách hàng rất hài lòng.",
        ),
        [N, M] = reactExports.useState(5),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(!1),
        [A, O] = reactExports.useState(!1),
        L = (V) => {
          if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const pe = new SpeechSynthesisUtterance(V);
            ((pe.lang = "vi-VN"),
              (pe.rate = 1),
              O(!0),
              (pe.onend = () => O(!1)),
              (pe.onerror = () => O(!1)),
              window.speechSynthesis.speak(pe));
          }
        },
        le = () => {
          n === 3
            ? i(l === "no_webcam" ? 4 : 5)
            : n === 4 || n === 5
              ? i(6)
              : n < 6 && i(n + 1);
        },
        P = () => {
          n === 6
            ? i(l === "no_webcam" ? 4 : 5)
            : n === 4 || n === 5
              ? i(3)
              : n > 1 && i(n - 1);
        },
        G = () => {
          (I(!0), z(!0), a());
        },
        ee = () => {
          (i(1), c("has_webcam"), m(!1), g(!1), f(!1), I(!1), z(!1));
        },
        ce = [
          {
            num: 1,
            stepLabel: "Bước 01",
            mainTitle: "Chào hỏi & Lắng nghe",
            icon: Headphones,
          },
          {
            num: 2,
            stepLabel: "Bước 02",
            mainTitle: "Trấn an khách hàng",
            icon: ShieldCheck,
          },
          {
            num: 3,
            stepLabel: "Bước 03",
            mainTitle: "Xác minh phần cứng",
            icon: Monitor,
          },
          {
            num: 4,
            stepLabel: "Bước 04",
            mainTitle: "Báo Giám sát IT",
            icon: Truck,
          },
          {
            num: 5,
            stepLabel: "Bước 05",
            mainTitle: "Xử lý cắm lại USB",
            icon: Usb,
          },
          {
            num: 6,
            stepLabel: "Bước 06",
            mainTitle: "Ghi nhật ký Call Log",
            icon: FileText,
          },
        ];
      return jsxRuntimeExports.jsxs("div", {
        className:
          "space-y-6 max-w-7xl mx-auto text-slate-800 dark:text-slate-100",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 text-slate-900 dark:text-white shadow-lg",
            children: [
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute right-0 top-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute left-0 bottom-0 -mb-8 -ml-8 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl",
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
                          "inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs sm:text-sm font-black text-blue-600 dark:text-blue-400",
                        children: [
                          jsxRuntimeExports.jsx(Headphones, {
                            className:
                              "h-4.5 w-4.5 text-blue-600 dark:text-blue-400",
                          }),
                          " LAB 22 • HELPDESK CUSTOMER SUPPORT",
                        ],
                      }),
                      jsxRuntimeExports.jsx("h1", {
                        className:
                          "text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white",
                        children: "Hỗ Trợ Khách Hàng Gặp Sự Cố Kỹ Thuật",
                      }),
                      jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed",
                        children: [
                          "Trực quan hoá kịch bản mô phỏng đóng vai giữa ",
                          jsxRuntimeExports.jsx("strong", {
                            children: "Kỹ thuật viên IT (Nam)",
                          }),
                          " và ",
                          jsxRuntimeExports.jsx("strong", {
                            children: "Khách hàng (Chị An)",
                          }),
                          " xử lý sự cố màn hình đen khi tham gia cuộc họp Zoom.",
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto",
                    children: [
                      jsxRuntimeExports.jsxs("button", {
                        onClick: ee,
                        className:
                          "px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-95",
                        children: [
                          jsxRuntimeExports.jsx(RotateCw, {
                            className:
                              "h-4.5 w-4.5 text-blue-600 dark:text-blue-400",
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
                            jsxRuntimeExports.jsx(CircleCheck, {
                              className: "h-5 w-5",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "Hoàn thành Lab 22",
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
                          "p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400",
                        children: jsxRuntimeExports.jsx(Zap, {
                          className: "h-5 w-5",
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        children: [
                          jsxRuntimeExports.jsx("h2", {
                            className:
                              "text-sm sm:text-base font-black text-slate-900 dark:text-white uppercase tracking-wider",
                            children: "Quy Trình 6 Bước Hỗ Trợ IT Helpdesk",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-xs font-semibold text-slate-500 dark:text-slate-400",
                            children:
                              "Nhấp vào từng bước để theo dõi kịch bản tương tác chi tiết",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("span", {
                    className:
                      "self-start sm:self-auto text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 shrink-0",
                    children: [
                      "Bước ",
                      n === 4 || n === 5
                        ? l === "no_webcam"
                          ? "4/6"
                          : "5/6"
                        : `${n}/6`,
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4",
                children: ce.map((V) => {
                  const pe = V.icon,
                    Ie = n === V.num,
                    se =
                      n > V.num ||
                      (n === 6 && V.num !== 6) ||
                      (n === 4 && V.num < 4) ||
                      (n === 5 && V.num < 5),
                    de =
                      (l === "no_webcam" && V.num === 5) ||
                      (l === "has_webcam" && V.num === 4);
                  return jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        (V.num === 4 && c("no_webcam"),
                          V.num === 5 && c("has_webcam"),
                          i(V.num));
                      },
                      className: `p-4 rounded-2xl border-2 text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[115px] ${Ie ? "bg-blue-600 border-blue-600 text-white shadow-xl ring-4 ring-blue-400/30 scale-[1.03] z-10" : se ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 hover:border-emerald-500" : de ? "bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 text-slate-400 opacity-40" : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-blue-400 hover:shadow-md"}`,
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between w-full mb-2",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: `p-2 rounded-xl transition-colors ${Ie ? "bg-white/20 text-white" : se ? "bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200" : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"}`,
                              children: jsxRuntimeExports.jsx(pe, {
                                className: "h-4.5 w-4.5",
                              }),
                            }),
                            se
                              ? jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-xs",
                                  children: jsxRuntimeExports.jsx(Check, {
                                    className: "h-3.5 w-3.5 stroke-[3]",
                                  }),
                                })
                              : jsxRuntimeExports.jsxs("span", {
                                  className: `text-xs font-black px-2 py-0.5 rounded-full ${Ie ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}`,
                                  children: ["0", V.num],
                                }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "mt-1 space-y-0.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className: `text-[11px] font-black uppercase tracking-wider block ${Ie ? "text-blue-100" : se ? "text-emerald-700 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400"}`,
                              children: V.stepLabel,
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: `text-xs sm:text-sm font-black leading-snug tracking-tight ${Ie ? "text-white" : "text-slate-900 dark:text-white"}`,
                              children: V.mainTitle,
                            }),
                          ],
                        }),
                      ],
                    },
                    V.num,
                  );
                }),
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
            children: [
              jsxRuntimeExports.jsx("div", {
                className: "lg:col-span-7 space-y-6",
                children: jsxRuntimeExports.jsxs("div", {
                  className:
                    "bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-slate-100 dark:bg-slate-950 px-6 py-4 border-b-2 border-slate-200 dark:border-slate-800 flex items-center justify-between",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: "relative",
                              children: jsxRuntimeExports.jsxs("span", {
                                className: "relative flex h-3.5 w-3.5",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500",
                                  }),
                                ],
                              }),
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "font-black text-xs sm:text-sm text-slate-900 dark:text-slate-100 tracking-wider uppercase",
                              children: "Mô phỏng Cuộc gọi Hỗ trợ IT Helpdesk",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("button", {
                          onClick: () => {
                            (n === 1 &&
                              L(
                                "Alo, bộ phận hỗ trợ Kỹ thuật nghe ạ! Em là Nam, chị An đang gặp sự cố gì cần em hỗ trợ ạ?",
                              ),
                              n === 2 &&
                                L(
                                  "Dạ chị An yên tâm nhé, sự cố này rất quen thuộc thôi ạ. Em sẽ đồng hành hướng dẫn chị xử lý xong ngay để kịp giờ họp!",
                                ),
                              n === 3 &&
                                L(
                                  "Chị kiểm tra giúp em xem trên đỉnh màn hình máy tính của chị hiện tại có đang cắm chiếc Webcam rời nào không ạ?",
                                ),
                              n === 4 &&
                                L(
                                  "Dạ vậy là máy mình chưa gắn thiết bị rồi. Em sẽ báo ngay cho anh Trưởng nhóm Kỹ thuật để mang gấp một chiếc Webcam sang lắp cho chị nhé!",
                                ),
                              n === 5 &&
                                L(
                                  "Dạ thế thì tốt rồi ạ! Chị giúp em rút dây cắm USB của Webcam ra cắm lại để khởi động lại thiết bị, sau đó mở lại app Zoom giúp em là được ạ!",
                                ),
                              n === 6 &&
                                L(
                                  "Ghi nhận: Đã hỗ trợ chị An xử lý xong lỗi Webcam họp Zoom.",
                                ));
                          },
                          className: `px-4 py-2 rounded-xl border-2 transition-all flex items-center gap-2 text-xs font-black cursor-pointer shadow-xs active:scale-95 ${A ? "bg-rose-600 border-rose-600 text-white animate-pulse" : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100"}`,
                          children: [
                            jsxRuntimeExports.jsx(Volume2, {
                              className:
                                "h-4 w-4 text-blue-600 dark:text-blue-400",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: A ? "Đang đọc..." : "Nghe giọng thoại",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-6 space-y-5 min-h-[320px] flex flex-col justify-center bg-slate-50/70 dark:bg-slate-900/90",
                      children: jsxRuntimeExports.jsxs(AnimatePresence, {
                        mode: "wait",
                        children: [
                          n === 1 &&
                            jsxRuntimeExports.jsxs(
                              motion.div,
                              {
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-blue-400",
                                        children: "👨‍💻",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-700 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-blue-700 dark:text-blue-400",
                                                children:
                                                  "IT Nam (Kỹ thuật viên)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 px-2.5 py-0.5 rounded-full border border-blue-300",
                                                children: "🎧 Lời chào lịch sự",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-slate-950 dark:text-white leading-relaxed",
                                            children:
                                              '"Alo, bộ phận hỗ trợ Kỹ thuật nghe ạ! Em là Nam, chị An đang gặp sự cố gì cần em hỗ trợ ạ?"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-start gap-3.5 flex-row-reverse",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-purple-400",
                                        children: "👩‍💼",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-purple-50 dark:bg-purple-950/80 border-2 border-purple-300 dark:border-purple-700 rounded-2xl rounded-tr-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 justify-end",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] font-black bg-purple-200 text-purple-950 dark:bg-purple-900 dark:text-purple-100 px-2.5 py-0.5 rounded-full border border-purple-300",
                                                children:
                                                  "😟 Lo lắng sát giờ họp",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-purple-900 dark:text-purple-300",
                                                children: "Chị An (Khách hàng)",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-slate-950 dark:text-white leading-relaxed",
                                            children:
                                              '"Nam ơi, chị chuẩn bị vào họp Zoom mà bật máy lên màn hình cứ đen thui, không thấy hình chị đâu cả!"',
                                          }),
                                        ],
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
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-blue-400",
                                        children: "👨‍💻",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-400 dark:border-emerald-600 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-blue-800 dark:text-blue-300",
                                                children:
                                                  "IT Nam (Kỹ thuật viên)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] bg-emerald-200 text-emerald-950 font-black px-2.5 py-0.5 rounded-full border border-emerald-400",
                                                children:
                                                  "🛡️ Cam kết & Trấn an tâm lý",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-100 leading-relaxed",
                                            children:
                                              '"Dạ chị An yên tâm nhé, sự cố này rất quen thuộc thôi ạ. Em sẽ đồng hành hướng dẫn chị xử lý xong ngay để kịp giờ họp!"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-start gap-3.5 flex-row-reverse",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-emerald-400",
                                        children: "😊",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 rounded-2xl rounded-tr-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 justify-end",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] font-black bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300",
                                                children: "Thái độ yên tâm hơn",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-emerald-800 dark:text-emerald-300",
                                                children: "Chị An (Khách hàng)",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-slate-950 dark:text-slate-100 leading-relaxed",
                                            children:
                                              '"May quá có Nam hỗ trợ! Giờ chị phải thao tác kiểm tra gì tiếp theo em nhỉ?"',
                                          }),
                                        ],
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
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-blue-400",
                                        children: "👨‍💻",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-800 border-2 border-blue-300 dark:border-blue-700 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-blue-700 dark:text-blue-400",
                                                children:
                                                  "IT Nam (Kỹ thuật viên)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] bg-amber-100 text-amber-950 font-black px-2.5 py-0.5 rounded-full border border-amber-300",
                                                children:
                                                  "🔍 Đặt câu hỏi kiểm tra thiết bị",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-slate-950 dark:text-white leading-relaxed",
                                            children:
                                              '"Chị kiểm tra giúp em xem trên đỉnh màn hình máy tính của chị hiện tại có đang cắm chiếc Webcam rời nào không ạ?"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-4.5 bg-white dark:bg-slate-950 rounded-2xl border-2 border-slate-300 dark:border-slate-800 space-y-3 text-left",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-xs font-black text-slate-900 dark:text-slate-100 uppercase tracking-wider block",
                                        children:
                                          "👉 Chọn tình huống kiểm tra phần cứng của Chị An:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: () => {
                                              (c("no_webcam"), i(4));
                                            },
                                            className: `p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${l === "no_webcam" ? "bg-rose-100 border-rose-600 text-rose-950 ring-2 ring-rose-500/50 shadow-md" : "bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-rose-400"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-black text-xs text-rose-700",
                                                      children: "Trường hợp 1",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    VideoOff,
                                                    {
                                                      className:
                                                        "h-5 w-5 text-rose-600",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "font-black text-sm text-slate-950 dark:text-white",
                                                children: "KHÔNG CÓ WEBCAM",
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-xs font-bold text-slate-700 dark:text-slate-300 italic",
                                                children:
                                                  '"Máy bàn chị không thấy có Webcam nào cắm vào cả!"',
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "pt-2 text-xs font-black text-rose-700 flex items-center gap-1",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Chuyển sang Bước 4 (Báo Giám sát IT)",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    ChevronRight,
                                                    { className: "h-4 w-4" },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: () => {
                                              (c("has_webcam"), i(5));
                                            },
                                            className: `p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${l === "has_webcam" ? "bg-emerald-100 border-emerald-600 text-emerald-950 ring-2 ring-emerald-500/50 shadow-md" : "bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:border-emerald-400"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-black text-xs text-emerald-700",
                                                      children: "Trường hợp 2",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(Video, {
                                                    className:
                                                      "h-5 w-5 text-emerald-600",
                                                  }),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "font-black text-sm text-slate-950 dark:text-white",
                                                children:
                                                  "CÓ WEBCAM KẸP MÀN HÌNH",
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-xs font-bold text-slate-700 dark:text-slate-300 italic",
                                                children:
                                                  '"Có Webcam kẹp trên màn hình, dây USB vẫn cắm!"',
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "pt-2 text-xs font-black text-emerald-700 flex items-center gap-1",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Chuyển sang Bước 5 (Thao tác cắm lại USB)",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    ChevronRight,
                                                    { className: "h-4 w-4" },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
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
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-blue-400",
                                        children: "👨‍💻",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-amber-50 dark:bg-amber-950/80 border-2 border-amber-400 dark:border-amber-600 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-blue-800 dark:text-blue-300",
                                                children:
                                                  "IT Nam (Kỹ thuật viên)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] bg-amber-200 text-amber-950 font-black px-2.5 py-0.5 rounded-full border border-amber-400",
                                                children:
                                                  "🚚 Báo Trưởng nhóm mang thiết bị sang",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-amber-950 dark:text-amber-100 leading-relaxed",
                                            children:
                                              '"Dạ vậy là máy mình chưa gắn thiết bị rồi. Em sẽ báo ngay cho anh Trưởng nhóm Kỹ thuật để mang gấp một chiếc Webcam sang lắp tận nơi cho chị nhé!"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-4.5 bg-amber-100 dark:bg-amber-950/50 border-2 border-amber-400 rounded-2xl text-left flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md",
                                        children: jsxRuntimeExports.jsx(Truck, {
                                          className: "h-6 w-6",
                                        }),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "font-black text-sm text-amber-950 dark:text-amber-200",
                                            children:
                                              "Đang điều phối Kỹ thuật viên di động:",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-xs font-bold text-slate-900 dark:text-slate-200 leading-relaxed",
                                            children:
                                              "Trưởng nhóm IT đã tiếp nhận phiếu hỗ trợ khẩn cấp và đang chuyển Webcam USB sang phòng làm việc của Chị An.",
                                          }),
                                        ],
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
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-blue-400",
                                        children: "👨‍💻",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-400 dark:border-emerald-600 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-blue-800 dark:text-blue-300",
                                                children:
                                                  "IT Nam (Kỹ thuật viên)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] bg-emerald-200 text-emerald-950 font-black px-2.5 py-0.5 rounded-full border border-emerald-400",
                                                children:
                                                  "🔌 Hướng dẫn xử lý sự cố USB",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm font-black text-emerald-950 dark:text-emerald-100 leading-relaxed",
                                            children:
                                              '"Dạ thế thì tốt rồi ạ! Chị giúp em rút dây cắm USB của Webcam ra cắm lại để khởi động lại thiết bị, sau đó mở lại app Zoom giúp em là được ạ!"',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-4.5 bg-white dark:bg-slate-950 rounded-2xl border-2 border-slate-300 dark:border-slate-800 text-left space-y-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "text-xs font-black uppercase text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx(Usb, {
                                                className: "h-4 w-4",
                                              }),
                                              " Thao tác tương tác: Cắm lại dây USB",
                                            ],
                                          }),
                                          p &&
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-400",
                                              children: "✓ Đã nhận tín hiệu HD",
                                            }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => {
                                          f(!0);
                                        },
                                        className: `w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95 ${p ? "bg-emerald-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white animate-pulse"}`,
                                        children: [
                                          jsxRuntimeExports.jsx(Usb, {
                                            className: "h-5 w-5",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children: p
                                              ? "✓ Đã rút & cắm lại USB thành công"
                                              : "👉 Nhấp để rút & cắm lại dây USB Webcam",
                                          }),
                                        ],
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
                                initial: { opacity: 0, x: -10 },
                                animate: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: 10 },
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-start gap-3.5",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-12 w-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0 border-2 border-purple-400",
                                        children: "📝",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-purple-50 dark:bg-purple-950/80 border-2 border-purple-300 dark:border-purple-700 rounded-2xl rounded-tl-none p-4.5 text-left shadow-sm space-y-1.5 max-w-xl",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-black text-xs text-purple-900 dark:text-purple-300",
                                                children:
                                                  "IT Nam (Ghi phần mềm Helpdesk)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[10px] bg-purple-200 text-purple-950 font-black px-2.5 py-0.5 rounded-full border border-purple-300",
                                                children:
                                                  "Ticket #8921 • Finished",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-xs sm:text-sm font-bold text-purple-950 dark:text-purple-100 leading-relaxed italic",
                                            children:
                                              '"Ghi nhận: Đã hỗ trợ chị An xử lý xong lỗi Webcam họp Zoom. Bàn giao thông tin cho ca trực tiếp theo để theo dõi."',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-5 bg-white dark:bg-slate-950 rounded-2xl border-2 border-slate-300 dark:border-slate-800 text-left space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "text-xs font-black uppercase text-purple-800 dark:text-purple-300 flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx(FileText, {
                                                className: "h-4 w-4",
                                              }),
                                              " Nhật ký cuộc gọi Helpdesk Call Log",
                                            ],
                                          }),
                                          y &&
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-400",
                                              children: "✓ Ticket Closed",
                                            }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsx("label", {
                                            className:
                                              "text-xs font-black text-slate-800 dark:text-slate-200 uppercase",
                                            children:
                                              "Ghi chú nội dung hỗ trợ:",
                                          }),
                                          jsxRuntimeExports.jsx("textarea", {
                                            value: b,
                                            onChange: (V) => k(V.target.value),
                                            className:
                                              "w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 text-slate-950 dark:text-slate-100 text-xs font-bold focus:ring-2 focus:ring-purple-600 focus:outline-none min-h-[75px]",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between pt-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-xs font-black text-slate-800 dark:text-slate-200 mr-2",
                                                children: "Đánh giá của KH:",
                                              }),
                                              [1, 2, 3, 4, 5].map((V) =>
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    onClick: () => M(V),
                                                    className:
                                                      "text-amber-500 hover:scale-110 transition-transform cursor-pointer",
                                                    children:
                                                      jsxRuntimeExports.jsx(
                                                        Star,
                                                        {
                                                          className: `h-5 w-5 ${V <= N ? "fill-amber-400" : "text-slate-300 dark:text-slate-600"}`,
                                                        },
                                                      ),
                                                  },
                                                  V,
                                                ),
                                              ),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: G,
                                            className:
                                              "px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95",
                                            children: [
                                              jsxRuntimeExports.jsx(Send, {
                                                className: "h-4 w-4",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "Lưu Nhật Ký & Đóng Ticket",
                                              }),
                                            ],
                                          }),
                                        ],
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
                          onClick: P,
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
                        jsxRuntimeExports.jsxs("button", {
                          onClick: le,
                          disabled: n === 6 && y,
                          className:
                            "px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              children:
                                n === 6 ? "Hoàn tất 6 bước" : "Bước tiếp theo",
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
              }),
              jsxRuntimeExports.jsx("div", {
                className: "lg:col-span-5 space-y-6",
                children: jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl border-2 border-slate-200 dark:border-slate-800 shadow-lg text-left space-y-4",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-3",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            jsxRuntimeExports.jsx(Monitor, {
                              className:
                                "h-5 w-5 text-blue-600 dark:text-blue-400",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "font-black text-sm text-slate-900 dark:text-white",
                              children: "Mô Phỏng Zoom Meeting",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 text-[11px] font-black text-slate-800 dark:text-slate-200",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: `h-2.5 w-2.5 rounded-full ${l === "no_webcam" ? "bg-rose-500" : p || n === 6 ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`,
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children:
                                l === "no_webcam"
                                  ? "Thiếu Webcam"
                                  : p || n === 6
                                    ? "Webcam 1080p Live"
                                    : "No Signal",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "relative rounded-2xl bg-slate-950 border-2 border-slate-800 overflow-hidden min-h-[260px] flex flex-col justify-between shadow-inner",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "absolute top-2 left-1/2 -translate-x-1/2 bg-slate-800/90 border border-slate-700 px-3 py-0.5 rounded-full flex items-center gap-1.5 z-20 text-[10px] font-extrabold text-slate-200 shadow-md",
                          children: [
                            jsxRuntimeExports.jsx(Usb, {
                              className: "h-3 w-3 text-blue-400",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children:
                                l === "no_webcam"
                                  ? "Chưa kẹp Webcam"
                                  : "Logitech HD USB Cam",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "my-auto p-4 flex flex-col items-center justify-center text-center space-y-2 min-h-[180px]",
                          children:
                            l === "no_webcam"
                              ? jsxRuntimeExports.jsxs(motion.div, {
                                  initial: { scale: 0.9 },
                                  animate: { scale: 1 },
                                  className: "space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsx(VideoOff, {
                                      className:
                                        "h-12 w-12 text-rose-500 mx-auto",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "font-black text-rose-400 text-xs",
                                      children:
                                        "Màn hình đen - Không tìm thấy thiết bị Webcam",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-[11px] text-slate-300 font-bold",
                                      children:
                                        "Cần báo Giám sát IT mang phần cứng sang lắp bổ sung.",
                                    }),
                                  ],
                                })
                              : u
                                ? jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx(VideoOff, {
                                        className:
                                          "h-10 w-10 text-slate-400 mx-auto",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "font-black text-slate-300 text-xs",
                                        children: "Đang tắt Video (Camera Off)",
                                      }),
                                    ],
                                  })
                                : (n === 5 && p) || n === 6
                                  ? jsxRuntimeExports.jsxs(motion.div, {
                                      initial: { opacity: 0, scale: 0.95 },
                                      animate: { opacity: 1, scale: 1 },
                                      className: "space-y-2 w-full py-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "relative inline-block",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "h-16 w-16 rounded-full bg-linear-to-tr from-indigo-500 to-purple-600 border-2 border-emerald-400 flex items-center justify-center font-black text-white text-xl shadow-lg mx-auto",
                                              children: "AN",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "absolute bottom-0 right-0 h-4.5 w-4.5 bg-emerald-500 rounded-full border-2 border-slate-900",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "font-black text-emerald-400 text-xs flex items-center justify-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(CircleCheck, {
                                              className: "h-4 w-4",
                                            }),
                                            " Webcam hiển thị sắc nét!",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-[11px] text-slate-200 font-bold",
                                          children:
                                            "Chị An đã sẵn sàng tham gia cuộc họp Zoom.",
                                        }),
                                      ],
                                    })
                                  : jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx(VideoOff, {
                                          className:
                                            "h-10 w-10 text-amber-400 mx-auto animate-bounce",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "font-black text-amber-400 text-xs",
                                          children:
                                            "Màn hình đen - Mất tín hiệu kết nối USB",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-[11px] text-slate-300 font-bold",
                                          children:
                                            "Thao tác rút & cắm lại cổng USB ở Bước 5 để làm tươi thiết bị.",
                                        }),
                                      ],
                                    }),
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-900 px-4 py-3 border-t border-slate-800 flex items-center justify-center gap-3",
                          children: [
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => m(!d),
                              className: `px-3.5 py-2 rounded-xl border-2 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 ${d ? "bg-rose-100 border-rose-500 text-rose-950 hover:bg-rose-200" : "bg-white border-slate-300 text-slate-950 hover:bg-slate-100"}`,
                              title: d ? "Bật Micro" : "Tắt Micro (Mute)",
                              children: [
                                d
                                  ? jsxRuntimeExports.jsx(MicOff, {
                                      className: "h-4 w-4 text-rose-600",
                                    })
                                  : jsxRuntimeExports.jsx(Mic, {
                                      className: "h-4 w-4 text-emerald-600",
                                    }),
                                jsxRuntimeExports.jsx("span", {
                                  children: d
                                    ? "Mute (Tắt Micro)"
                                    : "Unmute (Bật Micro)",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => g(!u),
                              className: `px-3.5 py-2 rounded-xl border-2 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 ${u ? "bg-rose-100 border-rose-500 text-rose-950 hover:bg-rose-200" : "bg-white border-slate-300 text-slate-950 hover:bg-slate-100"}`,
                              title: u ? "Bật Video" : "Tắt Video",
                              children: [
                                u
                                  ? jsxRuntimeExports.jsx(VideoOff, {
                                      className: "h-4 w-4 text-rose-600",
                                    })
                                  : jsxRuntimeExports.jsx(Video, {
                                      className: "h-4 w-4 text-emerald-600",
                                    }),
                                jsxRuntimeExports.jsx("span", {
                                  children: u ? "Start Video" : "Stop Video",
                                }),
                              ],
                            }),
                          ],
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

    return Lab20;
  };
})();
