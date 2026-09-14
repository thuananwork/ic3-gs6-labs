/**
 * Lab 19: Khái niệm Prototype
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab19 = window.AGY_LABS[19] = function (env) {
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

    function Lab19({ onSuccess: a }) {
      const [n, i] = reactExports.useState("phase1_design"),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState("#10b981"),
        [u, g] = reactExports.useState("idle"),
        [p, f] = reactExports.useState(""),
        [b, k] = reactExports.useState(null),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        y && R && a();
      }, [y, R, a]);
      const A = [
          {
            id: "header",
            label: "Thanh tiêu đề (Header)",
            desc: "Hiển thị tên ứng dụng và logo thương hiệu",
            icon: PanelsTopLeft,
            requiredInP1: !0,
            requiredInP2: !0,
          },
          {
            id: "search",
            label: "Ô tìm kiếm (Search Bar)",
            desc: "Tìm nhanh món ăn theo từ khóa gõ tay",
            icon: Search,
            requiredInP1: !1,
            requiredInP2: !0,
          },
          {
            id: "products",
            label: "Khung sản phẩm (Products)",
            desc: "Danh sách burger kèm hình ảnh & giá bán lẻ",
            icon: Utensils,
            requiredInP1: !0,
            requiredInP2: !0,
          },
          {
            id: "cart",
            label: "Nút Giỏ hàng (Cart Button)",
            desc: "Hiển thị tổng tiền và nút thanh toán",
            icon: ShoppingBag,
            requiredInP1: !0,
            requiredInP2: !0,
          },
        ],
        O = (se, de) => {
          (se.dataTransfer.setData("text/plain", de), k(de));
        },
        L = () => {
          (k(null), M(null));
        },
        le = (se, de) => {
          (se.preventDefault(), M(de));
        },
        P = () => {
          M(null);
        },
        G = (se, de) => {
          se.preventDefault();
          const _ = se.dataTransfer.getData("text/plain") || b;
          (_ && _ === de && ee(_), M(null), k(null));
        },
        ee = (se) => {
          (l.includes(se) || c([...l, se]), g("idle"));
        },
        ce = (se) => {
          (c(l.filter((de) => de !== se)), g("idle"));
        },
        V = () => {
          (c([]), m("#10b981"), g("idle"));
        },
        pe = () => {
          (g("testing"),
            setTimeout(() => {
              const se = l.includes("header"),
                de = l.includes("search"),
                _ = l.includes("products"),
                U = l.includes("cart");
              if (n === "phase1_design")
                se && _ && U && !de
                  ? (g("feedback_p1_ok"),
                    f(`🎉 Tuyệt vời! Anh Hoàng nhận xét: "Bản mẫu đầu tiên rất trực quan!"

👉 Ý kiến khách hàng: "Cần thêm Ô tìm kiếm (Search Bar) và đổi màu Header sang màu Cam ấm áp (Amber/Orange) để kích thích thèm ăn."

Hãy nhấn nút "Bước tiếp theo" bên dưới để chỉnh sửa!`),
                    I(!0))
                  : (g("feedback_p1_error"),
                    se
                      ? _
                        ? U
                          ? de &&
                            f(
                              "❌ Chưa cần Ô tìm kiếm (Search Bar) ở bản đầu tiên. Hãy gỡ ra để test luồng cơ bản.",
                            )
                          : f(
                              "❌ Thiếu Nút Giỏ hàng (Cart Button)! Khách không có nút để đặt hàng.",
                            )
                        : f(
                            "❌ Thiếu Khung sản phẩm (Products Grid)! Khách không thấy món ăn để mua.",
                          )
                      : f(
                          "❌ Thiếu Thanh tiêu đề (Header)! Khách sẽ không biết đây là cửa hàng gì.",
                        ));
              else if (n === "phase2_design") {
                const Z = d === "#f59e0b";
                se && de && _ && U && Z
                  ? (g("feedback_p2_ok"),
                    f(`🎉 HOÀN HẢO! Khách hàng khen nức nở: tìm món nhanh, màu cam bắt mắt!

💡 Nhờ Prototype, chúng ta chỉ mất vài giây chỉnh sửa với 0 đồng chi phí trước khi lập trình thật!`),
                    z(!0))
                  : (g("feedback_p2_error"),
                    de
                      ? Z
                        ? (!se || !_ || !U) &&
                          f(
                            "❌ Khi thêm ô tìm kiếm, vui lòng giữ đầy đủ Thanh tiêu đề, Khung sản phẩm và Giỏ hàng.",
                          )
                        : f(
                            "❌ Quên đổi màu Thanh tiêu đề sang màu Cam ấm áp (Amber/Orange) rồi!",
                          )
                      : f(
                          "❌ Chưa có Ô tìm kiếm (Search Bar)! Hãy kéo thêm vào điện thoại.",
                        ));
              }
            }, 1200));
        },
        Ie = () => {
          (i("phase2_design"), g("idle"), f(""));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-6",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-0.5 text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400",
                    children: [
                      jsxRuntimeExports.jsx(Smartphone, {
                        className: "h-3.5 w-3.5 animate-pulse",
                      }),
                      " THỬ NGHIỆM GIAO DIỆN",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h1", {
                    className:
                      "text-xl font-black text-slate-900 dark:text-white mt-1",
                    children:
                      "Lab 19: Thiết Kế Bản Mẫu Phần Mềm (Software Prototyping)",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-400 max-w-2xl font-semibold mt-0.5 leading-relaxed",
                    children:
                      "Học cách xây dựng bản mẫu thô sơ (Prototype) để kiểm thử trực quan với khách hàng, thu thập ý kiến phản hồi sớm giúp tiết kiệm tối đa thời gian và chi phí phát triển.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800 text-center shrink-0 flex flex-col items-center justify-center min-w-[200px] shadow-inner",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-[9px] text-slate-500 font-extrabold tracking-wider block uppercase",
                    children: "TIẾN TRÌNH LAB 19",
                  }),
                  jsxRuntimeExports.jsxs("span", {
                    className:
                      "text-2xl font-black text-emerald-400 tracking-tighter block my-0.5 font-mono",
                    children: [
                      (y ? 1 : 0) + (R ? 1 : 0),
                      " ",
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-400 font-bold",
                        children: "/ 2",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-1.5 mt-0.5",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: `h-2.5 w-2.5 rounded-full ${y ? "bg-emerald-500" : "bg-slate-700"}`,
                        title: "Bản mẫu ban đầu",
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: `h-2.5 w-2.5 rounded-full ${R ? "bg-emerald-500" : "bg-slate-700"}`,
                        title: "Bản nâng cấp chỉnh sửa",
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className: "text-[9px] text-slate-400 font-bold ml-1",
                        children: y && R ? "ĐÃ HOÀN THÀNH!" : "CHƯA HOÀN THÀNH",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-indigo-500/5 border border-indigo-500/10 rounded-3xl p-5 sm:p-6 text-left grid grid-cols-1 md:grid-cols-3 gap-5",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "space-y-1",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-indigo-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(Lightbulb, {
                        className: "h-4 w-4",
                      }),
                      " Bản Mẫu Là Gì?",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-indigo-500",
                        children: "Software Prototype",
                      }),
                      " là mô hình thô sơ, trực quan dựng cực nhanh để khách hàng chạy thử nhằm xác minh tính năng và trải nghiệm trước khi code thật.",
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "space-y-1 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-850 md:pl-5 pt-3 md:pt-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-emerald-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(CircleCheck, {
                        className: "h-4 w-4",
                      }),
                      " Lợi Ích Khổng Lồ",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      "Giúp phát hiện ",
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-emerald-500",
                        children: "sai sót trải nghiệm sớm",
                      }),
                      ". Việc chỉnh sửa trên bản mẫu chỉ mất ",
                      jsxRuntimeExports.jsx("span", {
                        className: "underline",
                        children: "vài giây kéo thả",
                      }),
                      " với giá ",
                      jsxRuntimeExports.jsx("strong", { children: "0 đồng" }),
                      " thay vì sửa trên sản phẩm đã lập trình cực kỳ đắt đỏ.",
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "space-y-1 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-850 md:pl-5 pt-3 md:pt-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-amber-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(RefreshCw, {
                        className: "h-4 w-4",
                      }),
                      " Quy Trình Tinh Gọn",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      "Dựng nhanh bản thô ➔ Lấy phản hồi khách hàng ➔ ",
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-amber-500",
                        children: "Chỉnh sửa tức thì",
                      }),
                      " ➔ Lập trình viên lập trình chính xác sản phẩm thực tế mà không sợ làm sai ý.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-wrap items-center justify-center gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: `flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${n === "phase1_design" ? "bg-indigo-600 text-white shadow-md" : y ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-bold"}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: `h-6 w-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${n === "phase1_design" ? "bg-white text-indigo-700" : y ? "bg-white text-emerald-700" : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                    children: "1",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "Dựng Bản mẫu đầu tiên",
                  }),
                ],
              }),
              jsxRuntimeExports.jsx(ArrowRight, {
                className: "h-4 w-4 text-slate-400 shrink-0",
              }),
              jsxRuntimeExports.jsxs("div", {
                className: `flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${n === "phase2_design" ? "bg-indigo-600 text-white shadow-md" : R ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-bold"}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: `h-6 w-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${n === "phase2_design" ? "bg-white text-indigo-700" : R ? "bg-white text-emerald-700" : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                    children: "2",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "Bổ sung & Chỉnh sửa màu theo Feedback",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 text-left",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-5 space-y-4",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-3",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center gap-3 border-b border-slate-100 dark:border-slate-850 pb-3",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "relative",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg font-bold shadow-md",
                                children: "👨‍🍳",
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute -bottom-1 -right-1 h-4.5 w-4.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center text-[9px] text-white",
                                children: "✓",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className:
                                  "text-sm sm:text-base font-medium font-black text-slate-900 dark:text-white",
                                children: "Anh Hoàng",
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                children:
                                  "Chủ chuỗi cửa hàng Hoàng Burger (Khách hàng)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl relative text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-150 dark:border-slate-850",
                        children: [
                          n === "phase1_design" &&
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-indigo-500 font-black block mb-1",
                                  children: "🎯 YÊU CẦU BẢN MẪU LẦN 1:",
                                }),
                                '"Chào em! Anh đang muốn mở app giao đồ ăn thô sơ. Bản đầu tiên hãy kéo thả giúp anh 3 phần tử cơ bản nhất: ',
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Thanh tiêu đề (Header)",
                                }),
                                ", ",
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Khung sản phẩm (Products)",
                                }),
                                ", và ",
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Nút Giỏ hàng (Cart Button)",
                                }),
                                ' vào điện thoại để chạy thử luồng chính nhé! Đừng vội thêm thanh tìm kiếm."',
                              ],
                            }),
                          n === "phase2_design" &&
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-indigo-500 font-black block mb-1",
                                  children:
                                    "🎯 CẬP NHẬT YÊU CẦU BẢN MẪU LẦN 2 (EDIT):",
                                }),
                                '"Tuyệt quá, bản mẫu giúp khách của anh hiểu cách mua ngay! Bây giờ hãy nâng cấp bản mẫu theo feedback khách hàng nhé:',
                                jsxRuntimeExports.jsxs("ul", {
                                  className:
                                    "list-disc pl-4 mt-1.5 space-y-1 font-semibold text-slate-600 dark:text-slate-400",
                                  children: [
                                    jsxRuntimeExports.jsxs("li", {
                                      children: [
                                        "Kéo thả thêm ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className: "text-emerald-500",
                                          children: "Ô tìm kiếm (Search Bar)",
                                        }),
                                        " vào để tìm món nhanh.",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("li", {
                                      children: [
                                        "Sử dụng bảng màu bên dưới để đổi màu sơn Thanh tiêu đề thành ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className: "text-amber-500",
                                          children:
                                            "Màu Vàng Cam (Amber/Orange)",
                                        }),
                                        " giúp tạo cảm giác thèm ăn!",
                                      ],
                                    }),
                                  ],
                                }),
                                'Thử xem chúng ta sửa nhanh thế nào!"',
                              ],
                            }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute top-4 -left-2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-slate-50 dark:border-r-slate-900/60 border-b-8 border-b-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-4",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        children: [
                          jsxRuntimeExports.jsxs("h3", {
                            className:
                              "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5",
                            children: [
                              jsxRuntimeExports.jsx(PanelsTopLeft, {
                                className: "h-4 w-4 text-indigo-500",
                              }),
                              "Thư viện phần tử Bản mẫu (Wireframe Assets)",
                            ],
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[10.5px] text-slate-400 font-semibold mt-1",
                            children:
                              "Kéo thả các phần tử này sang màn hình điện thoại bên phải, hoặc nhấn trực tiếp để thêm/gỡ nhanh.",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: "grid grid-cols-1 gap-2.5",
                        children: A.map((se) => {
                          const de = l.includes(se.id),
                            _ = se.icon;
                          return jsxRuntimeExports.jsxs(
                            "div",
                            {
                              draggable: !de,
                              onDragStart: (U) => O(U, se.id),
                              onDragEnd: L,
                              onClick: () => {
                                de ? ce(se.id) : ee(se.id);
                              },
                              className: `p-8 sm:p-5 rounded-3xl border transition-all duration-200 cursor-pointer select-none flex items-center justify-between group ${de ? "border-emerald-500/30 bg-emerald-500/5 text-slate-500 dark:text-slate-500 opacity-60" : "border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 shadow-xs"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl ${de ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover:text-indigo-500"}`,
                                      children: jsxRuntimeExports.jsx(_, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `text-sm sm:text-base font-bold block ${de ? "line-through text-slate-400" : "text-slate-800 dark:text-white"}`,
                                          children: se.label,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9.5px] text-slate-400 font-semibold block leading-tight",
                                          children: se.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] font-extrabold text-slate-400 uppercase tracking-wide group-hover:text-indigo-500 transition-colors",
                                      children: de
                                        ? "ĐÃ GẮN ✓"
                                        : "KÉO HOẶC CLICK",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: `h-4.5 w-4.5 rounded-full border flex items-center justify-center ${de ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300"}`,
                                      children:
                                        de &&
                                        jsxRuntimeExports.jsx(Check, {
                                          className: "h-3 w-3",
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            se.id,
                          );
                        }),
                      }),
                      n === "phase2_design" &&
                        jsxRuntimeExports.jsxs(motion.div, {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          className:
                            "pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2.5",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase flex items-center gap-1.5",
                              children: [
                                jsxRuntimeExports.jsx(Palette, {
                                  className: "h-3.5 w-3.5 text-amber-500",
                                }),
                                " CHỈNH SỬA MÀU SƠN PROTOTYPE (THEME):",
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 font-semibold",
                              children:
                                "Nhấp vào màu bên dưới để đổi màu Thanh tiêu đề ngay lập tức:",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex gap-2",
                              children: [
                                {
                                  hex: "#10b981",
                                  name: "Xanh Lá",
                                  class: "bg-emerald-500",
                                },
                                {
                                  hex: "#3b82f6",
                                  name: "Xanh Lam",
                                  class: "bg-blue-500",
                                },
                                {
                                  hex: "#f59e0b",
                                  name: "Vàng Cam (Yêu cầu)",
                                  class: "bg-amber-500 ring-2 ring-indigo-500",
                                },
                              ].map((se) =>
                                jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => m(se.hex),
                                    className: `flex-1 py-3 px-2 rounded-3xl text-sm sm:text-base font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${d === se.hex ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-transparent shadow-xs" : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-250 dark:border-slate-800 hover:bg-slate-50"}`,
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className: `h-3 w-3 rounded-full ${se.class}`,
                                      }),
                                      se.name.split(" ")[0],
                                    ],
                                  },
                                  se.hex,
                                ),
                              ),
                            }),
                          ],
                        }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "pt-3 border-t border-slate-100 dark:border-slate-850 flex justify-between items-center text-sm sm:text-base font-medium",
                        children: [
                          jsxRuntimeExports.jsxs("button", {
                            onClick: V,
                            className:
                              "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold flex items-center gap-1 cursor-pointer",
                            children: [
                              jsxRuntimeExports.jsx(Undo2, {
                                className: "h-3.5 w-3.5",
                              }),
                              " Xóa hết thiết kế lại",
                            ],
                          }),
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "text-sm sm:text-base font-semibold text-indigo-500 font-black",
                            children: ["Giao diện: ", l.length, " / 4 phần tử"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "lg:col-span-7 bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs flex flex-col justify-between items-stretch",
                children: jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "md:col-span-7 flex flex-col items-center",
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-extrabold text-slate-400 mb-2 uppercase block",
                          children: "BẢN MẪU DI ĐỘNG (PROTOTYPE WORKSPACE)",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-[240px] h-[440px] border-[8px] border-slate-800 dark:border-slate-700 rounded-[36px] bg-slate-950 overflow-hidden relative shadow-2xl flex flex-col justify-between p-8 sm:p-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full flex items-center justify-center gap-1.5 z-20",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-1 w-8 bg-slate-900 rounded-full",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-1.5 w-1.5 bg-slate-900 rounded-full",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 bg-slate-50 dark:bg-slate-900 rounded-[24px] mt-1.5 overflow-hidden p-8 sm:p-5 flex flex-col gap-2 relative",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "header"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "header"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "header" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("header")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "header-item",
                                        className:
                                          "text-white p-8 sm:p-5 rounded-3xl text-center font-bold text-[10.5px] shadow-sm flex justify-between items-center relative group",
                                        style: { backgroundColor: d },
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: "🍔 Hoàng Burger",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[7px] bg-white/25 px-1 py-0.2 rounded uppercase font-black",
                                            children: "Bản mẫu",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("header"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-9 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Thanh tiêu đề tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "search"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "search"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "search" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("search")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "search-item",
                                        className:
                                          "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 sm:p-5 rounded-3xl text-[9px] text-slate-400 flex items-center justify-between shadow-xs relative group",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children:
                                              "🔍 Nhập món ăn tìm kiếm...",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("search"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-7 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          n === "phase1_design"
                                            ? "🔒 Khóa ở Bản 1"
                                            : "+ Kéo thả Ô tìm kiếm tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "products"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "products"),
                                  className: `flex-1 transition-all duration-200 rounded-3xl relative flex flex-col ${N === "products" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("products")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "products-item",
                                        className:
                                          "flex-1 bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-750 p-8 sm:p-5 rounded-3xl space-y-2 overflow-hidden text-[9px] relative group flex flex-col justify-between",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-extrabold text-slate-700 dark:text-slate-300 block border-b dark:border-slate-700 pb-1 text-[8px] uppercase tracking-wider",
                                                children: "🍔 THỰC ĐƠN HÔM NAY",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-1.5 mt-1.5",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex gap-2 items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-7 h-7 bg-amber-500/20 rounded flex items-center justify-center text-[12px]",
                                                            children: "🍔",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className: "flex-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold block text-slate-800 dark:text-white",
                                                                  children:
                                                                    "Bò Burger Phô Mai",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-500 font-bold text-[8px]",
                                                                  children:
                                                                    "45.000đ",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex gap-2 items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-7 h-7 bg-red-500/20 rounded flex items-center justify-center text-[12px]",
                                                            children: "🍟",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className: "flex-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold block text-slate-800 dark:text-white",
                                                                  children:
                                                                    "Khoai Tây Chiên",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-500 font-bold text-[8px]",
                                                                  children:
                                                                    "25.000đ",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "text-[7.5px] text-indigo-500 font-semibold border-t dark:border-slate-700 pt-1 text-center bg-slate-50 dark:bg-slate-900 rounded py-0.5",
                                            children:
                                              "✓ Sản phẩm hiển thị thành công!",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("products"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "flex-1 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Khung sản phẩm tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "cart"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "cart"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "cart" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("cart")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "cart-item",
                                        className:
                                          "bg-emerald-500 text-white p-8 sm:p-5 rounded-3xl text-center font-black text-[9.5px] shadow-sm flex items-center justify-center gap-1 cursor-pointer active:scale-95 hover:scale-103 transition-all relative group",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "🛒 Xem giỏ hàng & Đặt món (70.000đ)",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("cart"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Nút Giỏ hàng tại đây",
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "md:col-span-5 flex flex-col justify-between space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black text-slate-800 dark:text-white block uppercase tracking-wider",
                              children:
                                "💬 ĐÁNH GIÁ CỦA NGƯỜI DÙNG CHẠY THỬ (USER FEEDBACK)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "min-h-[160px] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 p-5 sm:p-6 rounded-3xl text-sm sm:text-base font-medium flex flex-col justify-between shadow-inner",
                              children: [
                                u === "idle" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "text-slate-500 italic text-sm sm:text-base font-semibold space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("p", {
                                        children:
                                          "📱 Giao diện bản mẫu của em hiện tại:",
                                      }),
                                      jsxRuntimeExports.jsxs("ul", {
                                        className:
                                          "list-disc pl-4 text-sm sm:text-base font-semibold not-italic text-slate-400",
                                        children: [
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Thanh tiêu đề: ",
                                              l.includes("header")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Ô tìm kiếm: ",
                                              l.includes("search")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Thực đơn sản phẩm: ",
                                              l.includes("products")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Nút đặt giỏ hàng: ",
                                              l.includes("cart")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-indigo-500 font-bold mt-1.5",
                                        children:
                                          '👉 Hãy lắp các phần tử cần thiết và bấm nút "Kiểm thử Bản mẫu" để gọi người dùng vào nhận xét!',
                                      }),
                                    ],
                                  }),
                                u === "testing" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-3 py-8 flex-1",
                                    children: [
                                      jsxRuntimeExports.jsx(RefreshCw, {
                                        className:
                                          "h-8 w-8 text-indigo-500 animate-spin",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "text-center space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black text-slate-700 dark:text-slate-300 block",
                                            children:
                                              "Đang mời người dùng kiểm thử...",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 font-bold block",
                                            children:
                                              "Đang thu thập ý kiến về trải nghiệm nút bấm, bố cục và màu sắc...",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                (u === "feedback_p1_error" ||
                                  u === "feedback_p2_error") &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-2 text-left flex-1 flex flex-col justify-between",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex gap-2 text-rose-500",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleAlert, {
                                            className: "h-5 w-5 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-bold leading-relaxed whitespace-pre-line",
                                            children: p,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9.5px] bg-rose-500/10 text-rose-600 px-2 py-0.5 rounded font-black block text-center uppercase",
                                        children:
                                          "Sửa đổi bản mẫu trong 1 giây ngay!",
                                      }),
                                    ],
                                  }),
                                u === "feedback_p1_ok" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-3 text-left flex flex-col justify-between flex-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex gap-2 text-emerald-600 dark:text-emerald-400",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-5 w-5 shrink-0 text-emerald-500",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "space-y-1",
                                            children: jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "text-[10.5px] font-bold leading-relaxed whitespace-pre-line",
                                                children: p,
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: Ie,
                                        className:
                                          "w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-black text-sm sm:text-base font-medium rounded-3xl flex items-center justify-center gap-1.5 active:scale-95 hover:scale-103 transition-all transition-all shadow-md cursor-pointer",
                                        children: [
                                          "Bước tiếp theo: Chỉnh sửa Bản mẫu ",
                                          jsxRuntimeExports.jsx(ArrowRight, {
                                            className: "h-4 w-4",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                u === "feedback_p2_ok" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-3 text-left flex flex-col justify-between flex-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex gap-2 text-emerald-600 dark:text-emerald-400",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-5.5 w-5.5 shrink-0 text-emerald-500 animate-bounce",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "space-y-1",
                                            children: jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "text-[10.5px] font-bold leading-relaxed whitespace-pre-line",
                                                children: p,
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "text-[9.5px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-5 sm:px-5 py-1 rounded-3xl font-black text-center uppercase tracking-wider",
                                        children:
                                          "🎉 ĐÃ HOÀN THÀNH BÀI LAB XUẤT SẮC!",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        u !== "feedback_p1_ok" &&
                          u !== "feedback_p2_ok" &&
                          jsxRuntimeExports.jsx("button", {
                            disabled: u === "testing",
                            onClick: pe,
                            className:
                              "w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 hover:scale-103 transition-all disabled:opacity-50 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer",
                            children:
                              u === "testing"
                                ? jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsx(RefreshCw, {
                                          className: "h-4 w-4 animate-spin",
                                        }),
                                        "ĐANG KIỂM THỬ PHẢN HỒI...",
                                      ],
                                    },
                                  )
                                : jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsx(Play, {
                                          className: "fill-current h-3.5 w-3.5",
                                        }),
                                        n === "phase1_design"
                                          ? "KIỂM THỬ BẢN MẪU LẦN 1"
                                          : "KIỂM THỬ BẢN NÂNG CẤP",
                                      ],
                                    },
                                  ),
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

    return Lab19;
  };
})();
