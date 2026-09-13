/**
 * Lab 12: Phân loại Thiết bị Lưu trữ
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab12 = window.AGY_LABS[12] = function (env) {
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

    function Lab14({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        a();
      }, []);
      const [d, m] = reactExports.useState([]),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState("inkjet"),
        [y, I] = reactExports.useState(1),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState("text"),
        [L, le] = reactExports.useState("laser"),
        [P, G] = reactExports.useState("few"),
        [ee, ce] = reactExports.useState(0),
        [V, pe] = reactExports.useState(!1),
        [Ie, se] = reactExports.useState(0),
        [de, _] = reactExports.useState(85),
        [U, Z] = reactExports.useState(90),
        [be, he] = reactExports.useState([]),
        [E, v] = reactExports.useState(!1),
        [K, te] = reactExports.useState(!1),
        [je, Se] = reactExports.useState(!1),
        [He, Xe] = reactExports.useState(!1),
        [Qe, qe] = reactExports.useState(0),
        [at, ze] = reactExports.useState(!1),
        [De, tt] = reactExports.useState(""),
        [it, oe] = reactExports.useState(!1),
        [ie, ge] = reactExports.useState(0),
        [ae, Ae] = reactExports.useState([]),
        [Q, Te] = reactExports.useState("idle"),
        [$e, _e] = reactExports.useState(!1),
        [Ue, Ke] = reactExports.useState([]),
        [ot, w] = reactExports.useState(!1),
        [C, Ee] = reactExports.useState(!1),
        [ke, We] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        let Fe;
        return (
          V &&
            (Fe = setInterval(
              () => {
                se((rt) => {
                  let yt = 0;
                  P === "few"
                    ? (yt = L === "laser" ? 15 : 4)
                    : (yt = L === "laser" ? 10 : 3);
                  const xt = rt + yt;
                  if (P === "many") {
                    const ve = Math.min(100, Math.round((xt / 100) * 100));
                    ce(ve);
                  } else ce(1);
                  return xt >= 100
                    ? (pe(!1),
                      P === "few"
                        ? L === "laser"
                          ? (Z((ve) => Math.max(5, ve - 2)),
                            he([
                              "⚡ Nhận lệnh in 1 trang...",
                              "🌀 Trống lăn hút bột mực khô siêu mảnh...",
                              "🔥 Trục sấy 200°C ép chín bột dính chặt vào giấy...",
                              "🎉 Đã in xong 1 trang! Giấy khô ráo, ấm áp hoàn hảo!",
                            ]))
                          : (_((ve) => Math.max(5, ve - 5)),
                            he([
                              "⚡ Nhận lệnh in 1 trang...",
                              "💦 Đầu phun di động CMYK lắc trái phải...",
                              "🎨 Phun hàng ngàn hạt mực lỏng rực rỡ...",
                              "🎉 Đã in xong 1 trang! Giấy hơi ẩm nhẹ, chờ 3 giây mực sẽ khô!",
                            ]))
                        : L === "laser"
                          ? (Z((ve) => Math.max(5, ve - 4)),
                            he([
                              "⚡ Đang nhận lệnh in KHỦNG: 100 trang liên tục...",
                              "🚀 Trục sấy hoạt động liên tục cực nhanh...",
                              "🔋 CỰC KỲ TIẾT KIỆM: Chỉ tiêu tốn 4% bột mực Toner khô!",
                              "🎉 Hoàn thành in 100 trang văn bản chỉ trong vài giây! Máy chạy êm ru, vô địch tốc độ!",
                            ]))
                          : (_((ve) => Math.max(5, ve - 45)),
                            he([
                              "⚡ Đang nhận lệnh in KHỦNG: 100 trang liên tục...",
                              "🐢 Đầu phun lắc qua lắc lại quá chậm, tốn nhiều thời gian...",
                              "⚠️ QUÁ NHIỆT & HAO MỰC: Tiêu tốn tới 45% lượng mực lỏng nước đắt đỏ!",
                              "❌ Khuyên dùng: Chỉ nên in 1-2 trang thôi nhé. Máy in phun in nhiều sẽ rất tốn kém và hại đầu vòi phun mực nước!",
                            ])),
                      100)
                    : xt;
                });
              },
              L === "laser" ? 80 : 150,
            )),
          () => clearInterval(Fe)
        );
      }, [V, L, A, P]);
      const ht = () => {
        V ||
          (se(0),
          ce(0),
          pe(!0),
          v(!1),
          he(
            P === "few"
              ? L === "laser"
                ? [
                    "⚡ Khởi động tia sáng Laser quét trống từ...",
                    "📦 Đang kéo một tờ giấy phẳng phiu vào trục sấy...",
                  ]
                : [
                    "⚡ Khởi động đầu vòi phun mực nước...",
                    "📦 Đang rục rịch đưa giấy vào khay phun mực...",
                  ]
              : L === "laser"
                ? [
                    "🚀 Chế độ in hàng loạt (100 trang): Khởi động trục sấy tăng tốc...",
                    "📦 Giấy nạp liên tục vào khay nạp...",
                  ]
                : [
                    "⏳ Chế độ in hàng loạt (100 trang): Khởi hành đầu phun nước...",
                    "📦 Giấy kéo vào rất chậm để đợi phun đủ màu...",
                  ],
          ));
      };
      (reactExports.useEffect(() => {
        V &&
          (P === "few"
            ? Ie > 30 && Ie < 60
              ? he(
                  L === "laser"
                    ? (Fe) => [
                        ...Fe.slice(0, 2),
                        "🌀 Trống lăn hút bột mực khô (Toner) bám vào vùng nhiễm điện!",
                      ]
                    : (Fe) => [
                        ...Fe.slice(0, 2),
                        "💦 Đầu phun lắc nhanh bên trái, bên phải, xịt tia mực màu lỏng rực rỡ!",
                      ],
                )
              : Ie > 60 &&
                Ie < 90 &&
                he(
                  L === "laser"
                    ? (Fe) => [
                        ...Fe.slice(0, 3),
                        "🔥 Lô sấy nóng 200°C làm tan chảy bột mực bám siêu chặt!",
                      ]
                    : (Fe) => [
                        ...Fe.slice(0, 3),
                        "⏳ Giấy hơi ẩm nhẹ, chờ mực nước thấm thấu vào thớ giấy...",
                      ],
                )
            : Ie > 20 && Ie < 50
              ? he(
                  L === "laser"
                    ? (Fe) => [
                        ...Fe.slice(0, 2),
                        "🌀 Các hạt bột cực kỳ tiết kiệm điện và bột bám đều đặn...",
                      ]
                    : (Fe) => [
                        ...Fe.slice(0, 2),
                        "⚠️ Máy in phun lắc mệt mỏi đầu phun, mực nước rút xuống rất nhanh...",
                      ],
                )
              : Ie > 50 &&
                Ie < 85 &&
                he(
                  L === "laser"
                    ? (Fe) => [
                        ...Fe.slice(0, 3),
                        "⚡ Đang tải các trang liên tục, xếp chồng thành sấp giấy dày!",
                      ]
                    : (Fe) => [
                        ...Fe.slice(0, 3),
                        "⚠️ Cảnh báo nóng đầu phun! Tiêu tốn cực kỳ nhiều mực nước lỏng đắt đỏ!",
                      ],
                ));
      }, [Ie, L, V, P]),
        reactExports.useEffect(() => {
          if (!it) return;
          const rt = setTimeout(() => {
            ge((yt) => {
              const xt = yt + 1;
              return (
                xt === 1
                  ? (Ae([
                      "Pinging 192.168.1.100 with 32 bytes of data:",
                      "Reply from 192.168.1.100: bytes=32 time=4ms TTL=64",
                    ]),
                    Te("responding"))
                  : xt === 2
                    ? (Ae((ve) => [
                        ...ve,
                        "Reply from 192.168.1.100: bytes=32 time=2ms TTL=64",
                      ]),
                      Te("sending"))
                    : xt === 3
                      ? (Ae((ve) => [
                          ...ve,
                          "Reply from 192.168.1.100: bytes=32 time=5ms TTL=64",
                        ]),
                        Te("responding"))
                      : xt === 4
                        ? (Ae((ve) => [
                            ...ve,
                            "Reply from 192.168.1.100: bytes=32 time=3ms TTL=64",
                          ]),
                          Te("sending"))
                        : xt === 5 &&
                          (Ae((ve) => [
                            ...ve,
                            "",
                            "Ping statistics for 192.168.1.100:",
                            "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)",
                            "🎉 KẾT NỐI THÀNH CÔNG! Ping phản hồi 100% không bị mất gói tin.",
                          ]),
                          Te("success"),
                          oe(!1)),
                xt
              );
            });
          }, 1e3);
          return () => clearTimeout(rt);
        }, [it, ie]),
        reactExports.useEffect(() => {
          if (!at) return;
          const Fe = setInterval(() => {
            qe((rt) => {
              const yt = rt + 10;
              return yt >= 100
                ? (ze(!1),
                  tt(
                    "🎉 Đã in trang kiểm tra (Test Page) thành công! Hãy nhìn giấy chạy ra ở khay máy in!",
                  ),
                  100)
                : yt;
            });
          }, 200);
          return () => clearInterval(Fe);
        }, [at]));
      const lt = () => {
        (Z(100), _(100));
      };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-6 animate-fadeIn",
        id: "lab-14-root",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col sm:flex-row border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-t-2xl p-1.5 shadow-sm gap-2",
            children: [
              jsxRuntimeExports.jsxs("button", {
                onClick: () => {
                  (i(1), I(1), z(null));
                },
                className: `flex-1 py-3 text-sm sm:text-base font-extrabold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 1 ? "bg-blue-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/40"}`,
                children: [
                  jsxRuntimeExports.jsx(Sparkles, {
                    className: "h-4 w-4 text-amber-500 shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Nguyên Lý Siêu Dễ Hiểu",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => {
                  (i(2), se(0), pe(!1), v(!1));
                },
                className: `flex-1 py-3 text-sm sm:text-base font-extrabold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 2 ? "bg-emerald-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/40"}`,
                children: [
                  jsxRuntimeExports.jsx(Printer, {
                    className: "h-4 w-4 animate-bounce shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Mô Phỏng Buồng In Đơn Giản",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => {
                  (i(3),
                    te(!1),
                    Se(!1),
                    Xe(!1),
                    qe(0),
                    ze(!1),
                    tt(""),
                    oe(!1),
                    ge(0),
                    Ae([]),
                    Te("idle"),
                    _e(!1));
                },
                className: `flex-1 py-3 text-sm sm:text-base font-extrabold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 3 ? "bg-purple-600 text-white shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/40"}`,
                children: [
                  jsxRuntimeExports.jsx(Settings, {
                    className: "h-4 w-4 shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Xác Nhận Kết Nối Máy In",
                  }),
                ],
              }),
            ],
          }),
          !1,
          n === 1 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 shadow-sm space-y-6 text-left animate-fadeIn",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "text-center space-y-1",
                  children: [
                    jsxRuntimeExports.jsxs("h4", {
                      className:
                        "text-base sm:text-lg font-black text-slate-950 dark:text-white uppercase tracking-tight flex items-center justify-center gap-1",
                      children: [
                        jsxRuntimeExports.jsx(Sparkles, {
                          className: "h-5 w-5 text-amber-500",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          children: "Hộp Cát Khám Phá Nguyên Lý Trực Quan",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "text-sm sm:text-base font-medium text-slate-500 max-w-lg mx-auto font-medium",
                      children:
                        "Chỉ cần nhấn chọn 1 trong 2 loại máy in bên dưới để xem hình ảnh chuyển động cực dễ hiểu!",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-2 gap-3 max-w-md mx-auto",
                  children: [
                    jsxRuntimeExports.jsxs("button", {
                      onClick: () => {
                        (M("inkjet"), I(1), z(null));
                      },
                      className: `p-8 sm:p-5 rounded-3xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${N === "inkjet" ? "border-blue-500 bg-blue-50/40 dark:border-blue-500 dark:bg-blue-950/20 font-black text-blue-600" : "border-slate-200 text-slate-500 hover:border-slate-350 bg-slate-50/10"}`,
                      children: [
                        jsxRuntimeExports.jsx(Droplets, {
                          className: "h-5 w-5 text-blue-500 animate-pulse",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className: "text-sm sm:text-base font-bold uppercase",
                          children: "1. Máy In Phun",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("button", {
                      onClick: () => {
                        (M("laser"), I(1), z(null));
                      },
                      className: `p-8 sm:p-5 rounded-3xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${N === "laser" ? "border-purple-500 bg-purple-50/40 dark:border-purple-500 dark:bg-purple-950/20 font-black text-purple-600" : "border-slate-200 text-slate-500 hover:border-slate-350 bg-slate-50/10"}`,
                      children: [
                        jsxRuntimeExports.jsx(Zap, {
                          className: "h-5 w-5 text-purple-500 animate-bounce",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className: "text-sm sm:text-base font-bold uppercase",
                          children: "2. Máy In Laser",
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-12 gap-6 border border-slate-150 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 bg-slate-50/30 dark:bg-slate-950/10",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "lg:col-span-7 bg-slate-950 text-white p-5 sm:p-6 rounded-3xl flex flex-col justify-between min-h-[300px] relative overflow-hidden",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between border-b border-white/10 pb-2 z-10",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black tracking-widest text-slate-400 uppercase",
                              children: "BẢN VẼ KỸ THUẬT SIÊU ĐƠN GIẢN",
                            }),
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-bold text-amber-400 uppercase px-2 py-0.5 bg-amber-950/40 rounded",
                              children: ["Bước ", y, " / 3"],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "flex-1 flex flex-col items-center justify-center py-6 z-10",
                          children: jsxRuntimeExports.jsxs(AnimatePresence, {
                            mode: "wait",
                            children: [
                              N === "inkjet" &&
                                jsxRuntimeExports.jsxs(
                                  motion.div,
                                  {
                                    initial: { opacity: 0, scale: 0.95 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.95 },
                                    transition: { duration: 0.2 },
                                    className: "w-full text-center space-y-5",
                                    children: [
                                      y === 1 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-end justify-center gap-3",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-14 w-8 bg-cyan-400 border border-white rounded-t-md flex flex-col items-center justify-end pb-1 shadow-md",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black text-black select-none",
                                                        children: "C",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-14 w-8 bg-pink-500 border border-white rounded-t-md flex flex-col items-center justify-end pb-1 shadow-md",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black text-white select-none",
                                                        children: "M",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-14 w-8 bg-yellow-400 border border-white rounded-t-md flex flex-col items-center justify-end pb-1 shadow-md",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black text-black select-none",
                                                        children: "Y",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-14 w-8 bg-slate-800 border border-white rounded-t-md flex flex-col items-center justify-end pb-1 shadow-md",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black text-white select-none",
                                                        children: "K",
                                                      },
                                                    ),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-300",
                                              children:
                                                "💧 Mực nước lỏng đầy bình màu vẽ tranh!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-sm mx-auto font-medium",
                                              children:
                                                "Giống như bộ hộp màu nước nước gồm 4 màu cơ bản (CMYK: Xanh, Đỏ, Vàng, Đen) được lấp sẵn trong khay.",
                                            }),
                                          ],
                                        }),
                                      y === 2 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-4",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "relative w-full h-12 bg-slate-900 border border-white/10 rounded-3xl flex items-center justify-center",
                                              children: jsxRuntimeExports.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "absolute h-10 w-24 bg-blue-600 rounded-3xl flex items-center justify-center gap-1 shadow-lg animate-bounce",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Droplets,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-white animate-pulse",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-black text-white",
                                                        children:
                                                          "Đầu Vòi Phun",
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-center gap-1.5 py-1",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "h-1.5 w-1.5 bg-cyan-400 rounded-full animate-ping",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "h-1.5 w-1.5 bg-pink-500 rounded-full animate-ping",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "h-1.5 w-1.5 bg-yellow-400 rounded-full animate-ping",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-blue-400",
                                              children:
                                                "💦 Di chuyển qua lại và xịt mực nước lên thớ giấy!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-xs mx-auto font-medium",
                                              children:
                                                "Đầu phun trượt lướt liên tục từ Trái qua Phải, xịt bắn hàng triệu giọt nước siêu tí hon lên giấy vẽ để tạo hình.",
                                            }),
                                          ],
                                        }),
                                      y === 3 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-4",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "mx-auto w-32 h-16 bg-white rounded border border-slate-700 flex flex-col justify-center items-center relative overflow-hidden",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black text-blue-600 uppercase",
                                                  children: "Bức tranh rực rỡ",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute bottom-1 right-2 flex gap-1 items-center bg-blue-100 text-blue-800 text-[8px] font-bold px-1 rounded",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Droplets,
                                                      { className: "h-2 w-2" },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        children: "Hơi ẩm ướt",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-amber-400",
                                              children:
                                                "👉 Vừa in xong sẽ hơi ẩm nhẹ!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-xs mx-auto font-medium",
                                              children:
                                                "Vì dùng mực dạng lỏng nước, giấy in xong sẽ hơi có độ ẩm nhẹ. Hãy đợi 3 giây mực sẽ tự ngấm ráo hẳn vào giấy nhé!",
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  `inkjet-step-${y}`,
                                ),
                              N === "laser" &&
                                jsxRuntimeExports.jsxs(
                                  motion.div,
                                  {
                                    initial: { opacity: 0, scale: 0.95 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.95 },
                                    transition: { duration: 0.2 },
                                    className: "w-full text-center space-y-5",
                                    children: [
                                      y === 1 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "mx-auto h-16 w-14 border border-white/25 bg-slate-900 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute inset-x-0 bottom-0 h-3/5 bg-purple-500/20 flex flex-wrap gap-0.5 p-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-1 w-1 bg-purple-400 rounded-full animate-ping",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-1 w-1 bg-pink-400 rounded-full animate-bounce",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-1 w-1 bg-indigo-400 rounded-full animate-pulse",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx(Layers, {
                                                  className:
                                                    "h-5 w-5 text-purple-400",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-300",
                                              children:
                                                "🌀 Bột mực khô ráo, siêu mịn như phấn!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-sm mx-auto font-medium",
                                              children:
                                                "Máy in Laser không có một giọt nước nào! Mực là các hạt bột mịn màng đựng trong hộp mực (Toner), không sợ bị khô nghẹt vòi phun.",
                                            }),
                                          ],
                                        }),
                                      y === 2 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "flex items-center justify-center gap-3",
                                              children: jsxRuntimeExports.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "h-14 w-14 rounded-full border-2 border-indigo-400 bg-slate-900 flex items-center justify-center relative animate-spin",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Settings,
                                                      {
                                                        className:
                                                          "h-6 w-6 text-indigo-400",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "absolute top-1 right-2 text-[8px] font-bold text-yellow-300",
                                                        children: "+",
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-purple-400",
                                              children:
                                                "⚡ Tia sáng Laser vẽ chữ lên trục quay trống từ!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-sm mx-auto font-medium",
                                              children:
                                                "Tia sáng Laser chiếu vẽ hình lên trục lăn. Trục lăn hút các hạt bột mực khô tích điện bám dính vào đúng các vị trí đã vẽ cực chính xác.",
                                            }),
                                          ],
                                        }),
                                      y === 3 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-center items-center gap-1 text-red-500 font-bold text-sm sm:text-base font-medium animate-pulse",
                                              children: [
                                                jsxRuntimeExports.jsx(Flame, {
                                                  className: "h-4 w-4",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  children:
                                                    "Lô Sấy Nhiệt Độ Cao (200°C)",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "mx-auto w-32 h-14 bg-white rounded border border-slate-700 flex flex-col justify-center items-center relative overflow-hidden",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black text-purple-700 uppercase",
                                                  children: "Tài liệu Văn bản",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute bottom-1 right-2 flex gap-1 items-center bg-red-100 text-red-800 text-[8px] font-bold px-1 rounded animate-pulse",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Flame,
                                                      { className: "h-2 w-2" },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "Ấm Nóng" },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-sm sm:text-base font-bold text-emerald-400",
                                              children:
                                                "🔥 Sấy nóng chảy bột mực và ép dính chết vào giấy!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 max-w-sm mx-auto font-medium",
                                              children:
                                                "Khi giấy chạy qua, lô sấy nung chảy bột khô dính cứng chặt vào giấy. Giấy chạy ra lò ấm nóng hôi hổi và khô ráo hoàn toàn!",
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  `laser-step-${y}`,
                                ),
                            ],
                          }),
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "flex justify-center gap-2 border-t border-white/10 pt-3 z-10",
                          children: [1, 2, 3].map((Fe) =>
                            jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => {
                                  (I(Fe), z(null));
                                },
                                className: `h-2.5 w-8 rounded-full transition-all cursor-pointer ${y === Fe ? (N === "inkjet" ? "bg-blue-500" : "bg-purple-500") : "bg-slate-800 hover:bg-slate-700"}`,
                              },
                              Fe,
                            ),
                          ),
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "lg:col-span-5 space-y-4 flex flex-col justify-between",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-3xl space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black tracking-wider uppercase text-slate-400 block",
                              children: "Cơ Chế Bám Mực Lên Giấy",
                            }),
                            jsxRuntimeExports.jsx(AnimatePresence, {
                              mode: "wait",
                              children:
                                N === "inkjet"
                                  ? jsxRuntimeExports.jsxs(
                                      motion.div,
                                      {
                                        initial: { opacity: 0, x: 5 },
                                        animate: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: -5 },
                                        className: "space-y-2.5",
                                        children: [
                                          jsxRuntimeExports.jsx("h5", {
                                            className:
                                              "font-bold text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400",
                                            children: "💦 CƠ CHẾ PHUN NƯỚC:",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed",
                                            children:
                                              "- Đầu in di chuyển liên tục, bắn hàng triệu vệt nước màu cực nhỏ trực tiếp lên giấy.",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed",
                                            children:
                                              "- Thích hợp nhất: Rửa tranh màu, in ảnh thẻ rực rỡ, chân thực từng chi tiết.",
                                          }),
                                        ],
                                      },
                                      "txt-ink",
                                    )
                                  : jsxRuntimeExports.jsxs(
                                      motion.div,
                                      {
                                        initial: { opacity: 0, x: 5 },
                                        animate: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: -5 },
                                        className: "space-y-2.5",
                                        children: [
                                          jsxRuntimeExports.jsx("h5", {
                                            className:
                                              "font-bold text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400",
                                            children: "⚡ CƠ CHẾ SẤY KHÔ BỘT:",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed",
                                            children:
                                              "- Dùng nhiệt độ cao (200°C) nung chảy hạt bột khô siêu nhỏ để sấy ép dính chết vào xơ giấy.",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed",
                                            children:
                                              "- Thích hợp nhất: In sách học tập, văn bản công ty số lượng khổng lồ.",
                                          }),
                                        ],
                                      },
                                      "txt-laser",
                                    ),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-amber-500/10 border border-amber-500/20 rounded-3xl space-y-2.5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-extrabold text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx(CircleQuestionMark, {
                                  className: "h-4 w-4 animate-bounce",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    'TRÒ CHƠI "SỜ THỬ" GIẤY IN THÀNH PHẨM',
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-450 leading-relaxed font-semibold",
                              children:
                                'Nhấp vào một trong hai nút bên dưới để thử "sờ tay" vào tờ giấy vừa in xong để cảm nhận sự khác biệt vật lý:',
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => z("wet"),
                                  className:
                                    "p-8 sm:p-5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base font-semibold rounded-3xl transition-all cursor-pointer",
                                  children: "✋ Sờ Giấy In Phun",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => z("warm"),
                                  className:
                                    "p-8 sm:p-5 bg-purple-500 hover:bg-purple-600 text-white font-bold text-sm sm:text-base font-semibold rounded-3xl transition-all cursor-pointer",
                                  children: "✋ Sờ Giấy Laser",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx(AnimatePresence, {
                              mode: "wait",
                              children:
                                R &&
                                jsxRuntimeExports.jsx(
                                  motion.div,
                                  {
                                    initial: { opacity: 0, y: 5 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0 },
                                    className: `p-8 sm:p-5 rounded-3xl border text-sm sm:text-base font-bold leading-normal ${R === "wet" ? "bg-blue-100 text-blue-900 border-blue-200" : "bg-orange-100 text-orange-950 border-orange-200"}`,
                                    children:
                                      R === "wet"
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-blue-700 block",
                                                children:
                                                  "💦 Sờ tay thấy hơi ẩm nhẹ!",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-medium text-sm sm:text-base font-semibold",
                                                children:
                                                  "Vì máy in phun vừa bắn mực nước lỏng lỏng lên thớ giấy. Chờ một tẹo là nó khô hẳn nhé!",
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-orange-700 block",
                                                children:
                                                  "🔥 Sờ tay thấy ấm áp cực kỳ!",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-medium text-sm sm:text-base font-semibold",
                                                children:
                                                  "Vì máy in laser vừa cho giấy đi qua bộ sấy nhiệt 200°C để sấy tan chảy bột mực bám khô ráo luôn đấy!",
                                              }),
                                            ],
                                          }),
                                  },
                                  R,
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          n === 2 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 shadow-sm space-y-6 text-left animate-fadeIn",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 sm:p-6 rounded-r-xl",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-medium font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
                      children: "PHÒNG THÍ NGHIỆM ĐƠN GIẢN",
                    }),
                    jsxRuntimeExports.jsxs("h4", {
                      className:
                        "mt-0.5 text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-1.5",
                      children: [
                        jsxRuntimeExports.jsx(Printer, {
                          className: "h-5 w-5 text-emerald-600",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          children: "Thực Hành Đưa Lệnh In Vào Buồng Máy Ảo",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "mt-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                      children:
                        "Chọn mẫu giấy, chọn máy in rồi kích hoạt in để xem cơ cấu sấy bột hoặc phun mực hoạt động chuyển động trực quan!",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "lg:col-span-5 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/10 rounded-3xl space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider flex items-center gap-1",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "h-4.5 w-4.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-[9px] font-black",
                                  children: "1",
                                }),
                                "Bấm Chọn Loại Tài Liệu",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2.5",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || O("text");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${A === "text" ? "border-emerald-500 bg-emerald-50/20 dark:border-emerald-500/50 dark:bg-emerald-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(FileText, {
                                      className: `h-4 w-4 ${A === "text" ? "text-emerald-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "Báo Cáo Văn Bản",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 font-medium",
                                          children: "Đen Trắng (Nhiều Chữ)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || O("photo");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${A === "photo" ? "border-emerald-500 bg-emerald-50/20 dark:border-emerald-500/50 dark:bg-emerald-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Image, {
                                      className: `h-4 w-4 ${A === "photo" ? "text-emerald-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "Tranh Màu Doremon",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 font-medium",
                                          children: "Đầy Sắc Màu Rực Rỡ",
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
                            "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/10 rounded-3xl space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider flex items-center gap-1",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "h-4.5 w-4.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-[9px] font-black",
                                  children: "2",
                                }),
                                "Bấm Chọn Số Lượng Bản In",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2.5",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || G("few");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${P === "few" ? "border-emerald-500 bg-emerald-50/20 dark:border-emerald-500/50 dark:bg-emerald-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(FileText, {
                                      className: `h-4 w-4 ${P === "few" ? "text-emerald-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "In Số Lượng ÍT",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 font-medium",
                                          children: "1 trang duy nhất",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || G("many");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${P === "many" ? "border-emerald-500 bg-emerald-50/20 dark:border-emerald-500/50 dark:bg-emerald-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Layers, {
                                      className: `h-4 w-4 ${P === "many" ? "text-emerald-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "In Số Lượng NHIỀU",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 font-medium",
                                          children: "100 trang liên tục",
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
                            "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/10 rounded-3xl space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider flex items-center gap-1",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "h-4.5 w-4.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-[9px] font-black",
                                  children: "3",
                                }),
                                "Bấm Chọn Loại Máy In phù hợp",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2.5",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || le("laser");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${L === "laser" ? "border-purple-500 bg-purple-50/20 dark:border-purple-500/50 dark:bg-purple-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Zap, {
                                      className: `h-4 w-4 ${L === "laser" ? "text-purple-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "Máy In LASER",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-purple-500 font-black",
                                          children: "HỢP IN NHIỀU 🔥",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    V || le("inkjet");
                                  },
                                  disabled: V,
                                  className: `p-8 sm:p-5 rounded-3xl border text-left flex flex-col justify-between h-20 transition-all cursor-pointer ${L === "inkjet" ? "border-blue-500 bg-blue-50/20 dark:border-blue-500/50 dark:bg-blue-950/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Droplets, {
                                      className: `h-4 w-4 ${L === "inkjet" ? "text-blue-500" : "text-slate-400"}`,
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold block text-slate-950 dark:text-white",
                                          children: "Máy In PHUN",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-blue-500 font-black",
                                          children: "HỢP IN ÍT 💦",
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
                          className: "space-y-2.5",
                          children: [
                            jsxRuntimeExports.jsxs("button", {
                              onClick: ht,
                              disabled: V || (L === "laser" ? U <= 5 : de <= 5),
                              className: `w-full py-4 rounded-3xl font-black text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${V ? "bg-amber-500 text-white animate-pulse cursor-wait shadow-sm" : (L === "laser" ? U <= 5 : de <= 5) ? "bg-red-100 text-red-500 dark:bg-red-950 dark:text-red-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95 hover:scale-103 transition-all"}`,
                              children: [
                                jsxRuntimeExports.jsx(Printer, {
                                  className: "h-4.5 w-4.5",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: V
                                    ? "Đang In Ấn Chuyển Động..."
                                    : "BẤM ĐỂ IN NGAY! 🚀",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: lt,
                                  disabled: V,
                                  className:
                                    "py-3 px-5 sm:px-5 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 hover:bg-slate-100 text-sm sm:text-base font-bold rounded-3xl transition-all cursor-pointer",
                                  children: "🛠️ Bơm đầy lại mực",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => {
                                    (he([]), se(0), v(!1));
                                  },
                                  disabled: V,
                                  className:
                                    "py-3 px-5 sm:px-5 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 hover:bg-slate-100 text-sm sm:text-base font-bold rounded-3xl transition-all cursor-pointer",
                                  children: "Xóa nhật ký",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "lg:col-span-7 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-950 text-white rounded-3xl p-5 sm:p-6 border border-slate-850 relative min-h-[260px] flex flex-col justify-between overflow-hidden",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_20px] pointer-events-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center justify-between border-b border-white/10 pb-2 z-10",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold font-black tracking-widest text-slate-400 flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-2 w-2 rounded-full bg-emerald-500 animate-ping",
                                    }),
                                    "BUỒNG MÁY IN TRỰC QUAN",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded font-mono",
                                  children: V
                                    ? P === "many"
                                      ? `ĐANG IN: ${ee}/100 TRANG`
                                      : `IN ĐƯỢC ${Ie}%`
                                    : "ĐANG CHỜ...",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "flex-1 flex flex-col items-center justify-center relative py-5",
                              children: V
                                ? jsxRuntimeExports.jsxs("div", {
                                    className: "w-full text-center space-y-4",
                                    children: [
                                      L === "laser"
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex flex-col items-center space-y-3",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-8 justify-center relative",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "relative flex flex-col items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-14 w-14 rounded-full border-2 border-purple-500 flex items-center justify-center animate-spin",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                Settings,
                                                                {
                                                                  className:
                                                                    "h-6 w-6 text-purple-400",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[8px] font-extrabold text-purple-400 mt-1 uppercase",
                                                            children:
                                                              "Trống điện",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "relative flex flex-col items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-14 w-14 rounded-full border-2 border-red-500 bg-red-950/50 flex items-center justify-center animate-pulse",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                Flame,
                                                                {
                                                                  className:
                                                                    "h-5 w-5 text-red-500 animate-bounce",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[8px] font-extrabold text-red-500 mt-1 uppercase",
                                                            children:
                                                              "Trục Sấy 🔥",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "absolute -top-4 text-[9px] font-black text-red-500 animate-ping",
                                                            children: "200°C",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "relative w-48 h-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] rounded animate-pulse",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] text-cyan-400 font-extrabold uppercase animate-pulse",
                                                children:
                                                  "⚡ Đang sấy khô ráo bột mực ròng rã...",
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex flex-col items-center space-y-3",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "relative w-full h-8 bg-slate-900 border border-white/10 rounded flex items-center px-2",
                                                children:
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "h-6 w-16 bg-blue-500 border border-white rounded flex items-center justify-center gap-1 transition-all duration-100",
                                                      style: {
                                                        transform: `translateX(${(Ie % 4) * 35}px)`,
                                                      },
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          Droplets,
                                                          {
                                                            className:
                                                              "h-3 w-3 text-white animate-bounce",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[8px] font-black text-white",
                                                            children:
                                                              "Đầu Phun",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex gap-1.5 justify-center py-1",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "h-1.5 w-1.5 bg-cyan-400 rounded-full animate-ping",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "h-1.5 w-1.5 bg-magenta-400 bg-pink-500 rounded-full animate-ping font-black",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "h-1.5 w-1.5 bg-yellow-400 rounded-full animate-ping font-extrabold",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] text-blue-400 font-extrabold uppercase animate-pulse",
                                                children:
                                                  "💦 Đang lắc đầu phun mực màu CMYK...",
                                              }),
                                            ],
                                          }),
                                      P === "many" &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-center items-center gap-1.5 bg-slate-900/80 px-5 sm:px-5 py-3 rounded-3xl border border-white/10 max-w-xs mx-auto",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "relative h-6 w-8 bg-white border border-slate-400 rounded flex items-center justify-center",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[9px] font-black text-black",
                                                  children: "📄",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute top-0.5 left-0.5 h-full w-full bg-slate-200 border border-slate-400 rounded -z-10 transform translate-x-1 translate-y-1",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute top-1 left-1 h-full w-full bg-slate-300 border border-slate-400 rounded -z-20 transform translate-x-2 translate-y-2",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "text-left",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-extrabold block text-slate-300",
                                                  children: [
                                                    "Đã in: ",
                                                    ee,
                                                    "/100 trang",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] font-semibold text-emerald-400",
                                                  children:
                                                    L === "laser"
                                                      ? "🚀 Siêu nhanh & giá siêu rẻ!"
                                                      : "⚠️ Hao mực và chậm mỏi đầu phun!",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "w-4/5 mx-auto bg-slate-900 border border-white/15 rounded p-8 sm:p-5 text-center text-sm sm:text-base font-semibold space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-slate-400 font-bold",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "Kéo giấy vào",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [Ie, "%"],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-2 w-full bg-slate-800 rounded-full overflow-hidden",
                                            children: jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                className:
                                                  "h-full bg-emerald-500 rounded-full transition-all duration-100",
                                                style: { width: `${Ie}%` },
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsx("div", {
                                    className: "text-center space-y-3",
                                    children:
                                      Ie === 100
                                        ? jsxRuntimeExports.jsxs(motion.div, {
                                            initial: { y: 20, opacity: 0 },
                                            animate: { y: 0, opacity: 1 },
                                            onClick: () => v(!0),
                                            className:
                                              "mx-auto w-32 h-44 bg-white hover:bg-slate-100 dark:hover:bg-slate-200 rounded-3xl p-8 sm:p-5 shadow-xl border border-slate-300 text-slate-900 cursor-pointer flex flex-col justify-between transition-all hover:scale-105 active:scale-95 hover:scale-103 transition-all",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "border-b border-slate-200 pb-1 flex justify-between items-center text-[8px] text-slate-400 font-bold",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        L === "laser"
                                                          ? "Máy Laser"
                                                          : "Máy Phun",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-emerald-600",
                                                      children: "ĐÃ XUẤT ✅",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              A === "text"
                                                ? jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex-1 flex flex-col justify-center space-y-1 py-3",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-1.5 bg-slate-400 rounded w-full",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-1.5 bg-slate-400 rounded w-5/6",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-1.5 bg-slate-400 rounded w-4/5",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-1.5 bg-slate-400 rounded w-11/12",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "text-[9px] font-black text-center text-emerald-600 mt-2",
                                                            children:
                                                              "Báo Cáo Điểm 10 💯",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "flex-1 flex flex-col justify-center items-center py-3 relative overflow-hidden",
                                                    children:
                                                      jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-center",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-xl",
                                                                children: "🐱",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-semibold font-black text-pink-500 block leading-none mt-1",
                                                                children:
                                                                  "DORAEMON",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                  }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "bg-amber-100 hover:bg-amber-200 text-amber-900 text-[8px] font-black py-1 rounded text-center animate-pulse",
                                                children:
                                                  "✋ Bấm vào đây để SỜ THỬ!",
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-2 py-4",
                                            children: [
                                              jsxRuntimeExports.jsx(Printer, {
                                                className:
                                                  "h-12 w-12 text-slate-600 mx-auto animate-pulse",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-medium text-slate-400 block font-bold",
                                                children:
                                                  "Chưa có lệnh in nào! Hãy bấm nút màu xanh lá ở góc trái để bắt đầu.",
                                              }),
                                            ],
                                          }),
                                  }),
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-2 gap-4 border-t border-white/10 pt-3 text-sm sm:text-base font-semibold z-10",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between font-extrabold text-blue-400",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "💦 Bình Mực Lỏng (Ink)",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          children: [de, "%"],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5",
                                      children: jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-full bg-linear-to-r from-cyan-400 via-pink-400 to-yellow-400",
                                        style: { width: `${de}%` },
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between font-extrabold text-purple-400",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "🌀 Bột Mực Khô (Toner)",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          children: [U, "%"],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5",
                                      children: jsxRuntimeExports.jsx("div", {
                                        className: "h-full bg-purple-500",
                                        style: { width: `${U}%` },
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
                            "p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-3xl text-left",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] font-black text-blue-400 tracking-wider uppercase block border-b border-white/10 pb-1.5 mb-2.5",
                              children: "Nhật Ký Các Bước Hoạt Động Của Máy In",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "space-y-1.5 font-mono text-sm sm:text-base font-semibold text-slate-300",
                              children:
                                be.length === 0
                                  ? jsxRuntimeExports.jsx("div", {
                                      className: "text-slate-500 italic py-3",
                                      children:
                                        '> Hệ thống đang rảnh rỗi. Đang đợi em nhấn "Bấm để in ngay!"...',
                                    })
                                  : be.map((Fe, rt) =>
                                      jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex gap-2 items-start animate-fadeIn",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-500 select-none font-bold",
                                              children: "✔",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: Fe,
                                            }),
                                          ],
                                        },
                                        rt,
                                      ),
                                    ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-4 sm:p-5 bg-emerald-50/30 dark:bg-slate-900/40 border border-emerald-200/40 dark:border-slate-800 rounded-3xl space-y-3",
                  children: [
                    jsxRuntimeExports.jsxs("button", {
                      type: "button",
                      onClick: () => c(!l),
                      className:
                        "w-full flex items-center justify-between text-sm sm:text-base font-black uppercase text-emerald-700 dark:text-emerald-400 cursor-pointer",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            jsxRuntimeExports.jsx(Info, {
                              className: "h-4 w-4",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "💡 GÓC GIẢI THÍCH",
                            }),
                          ],
                        }),
                        l
                          ? jsxRuntimeExports.jsx(ChevronDown, {
                              className: "h-4 w-4 text-emerald-600",
                            })
                          : jsxRuntimeExports.jsx(ChevronRight, {
                              className: "h-4 w-4 text-emerald-600",
                            }),
                      ],
                    }),
                    l &&
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-emerald-200/30 dark:border-slate-800",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-5 sm:p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850 space-y-2.5",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 font-black text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "p-1 bg-blue-100 dark:bg-blue-950 rounded-md",
                                    children: "💦",
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    children:
                                      "MÁY IN PHUN: PHÙ HỢP IN SỐ LƯỢNG ÍT (Gia đình, hình ảnh)",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 space-y-2 font-medium leading-relaxed",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    children: [
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Vì sao phù hợp?",
                                      }),
                                      " Giá mua máy rẻ, in ảnh màu rất đẹp và mịn nhờ mực lỏng.",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/20 p-8 sm:p-5 rounded-3xl border border-amber-200/20",
                                    children: [
                                      "❌ ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Hạn chế:",
                                      }),
                                      " Hộp mực rất nhỏ (chỉ in được 150 – 300 trang), chi phí thay mực rất đắt nếu in nhiều. Để lâu không in dễ bị nghẹt đầu phun.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-5 sm:p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850 space-y-2.5",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 font-black text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "p-1 bg-purple-100 dark:bg-purple-950 rounded-md",
                                    children: "⚡",
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    children:
                                      "MÁY IN LASER: VUA IN SỐ LƯỢNG NHIỀU (Văn phòng, tài liệu)",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 space-y-2 font-medium leading-relaxed",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    children: [
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Vì sao phù hợp?",
                                      }),
                                      " Tốc độ in cực nhanh, hộp mực lớn (in từ 1.500 – 10.000 trang), chi phí trên mỗi trang in siêu rẻ.",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/20 p-8 sm:p-5 rounded-3xl border border-emerald-200/20",
                                    children: [
                                      "✅ ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Ưu điểm vượt trội:",
                                      }),
                                      " Mực bột khô nên để lâu không dùng cũng không sợ hỏng.",
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
                E &&
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn",
                    children: jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 max-w-sm w-full space-y-4 text-center shadow-2xl relative",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "mx-auto h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl",
                          children: L === "laser" ? "🔥" : "💦",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            jsxRuntimeExports.jsx("h5", {
                              className:
                                "font-extrabold text-base text-slate-950 dark:text-white uppercase tracking-tight",
                              children:
                                L === "laser"
                                  ? "Cảm Giác Sờ Giấy: ẤM ÁP CỰC KỲ!"
                                  : "Cảm Giác Sờ Giấy: HƠI ẨM NHẸ!",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                              children:
                                L === "laser"
                                  ? "Do máy in Laser vừa sử dụng lô sấy nhiệt nóng tới 200°C sấy chảy bột khô rồi nén dính chặt vào thớ giấy. Vì vậy tờ giấy chạy ra luôn khô cong và có hơi ấm hôi hổi dính chặt màu chữ!"
                                  : "Do máy in Phun vừa phun trực tiếp mực lỏng (nhuy các giọt màu nước nhỏ) lên trang giấy để vẽ Doraemon. Hãy đợi thêm 3 giây mực sẽ tự khô thấm sâu ráo hóng vào giấy nhé!",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("button", {
                          onClick: () => v(!1),
                          className:
                            "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base font-medium rounded-3xl transition-all cursor-pointer shadow-md active:scale-95 hover:scale-103 transition-all",
                          children: "Đã hiểu, đóng lại nha! Thích quá 👍",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          n === 3 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 shadow-sm space-y-6 text-left animate-fadeIn",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "border-l-4 border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 p-5 sm:p-6 rounded-r-xl",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-medium font-black uppercase tracking-wider text-purple-600 dark:text-purple-400",
                      children: "KIẾN THỨC IC3 THỰC HÀNH",
                    }),
                    jsxRuntimeExports.jsxs("h4", {
                      className:
                        "mt-0.5 text-base sm:text-lg font-bold text-slate-950 dark:text-white flex items-center gap-1.5",
                      children: [
                        jsxRuntimeExports.jsx(Settings, {
                          className: "h-5 w-5 text-purple-600",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          children: "Xác Nhận Kết Nối Máy In Thành Công",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "mt-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                      children:
                        "Khám phá cách hệ thống máy tính xác thực kết nối với thiết bị in vật lý (Cục bộ qua USB và Máy in mạng qua LAN/Wifi). Bấm chọn các thiết lập bên dưới để xem mô phỏng tương tác!",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 bg-slate-50/30 dark:bg-slate-950/10 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "p-1.5 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-3xl text-sm sm:text-base font-medium font-black",
                              children: "1",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-900 dark:text-white uppercase",
                                  children: "Máy In Cục Bộ (Local Printer)",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 font-medium",
                                  children:
                                    "Kết nối trực tiếp tới 1 máy tính duy nhất qua dây cáp vật lý (thường là cáp USB).",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider block",
                              children: "Thiết Lập Kết Nối Vật Lý:",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (te(!K), tt(""), qe(0));
                                  },
                                  className: `p-8 sm:p-5 rounded-3xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${K ? "border-emerald-500 bg-emerald-50/30 text-emerald-700 dark:text-emerald-400 font-extrabold" : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 text-slate-600 dark:text-slate-400"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-base",
                                      children: K
                                        ? "🔌 Đã Cắm Cáp USB"
                                        : "🔌 Cắm Cáp USB",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] text-slate-400 font-medium",
                                      children: "Nối máy tính & máy in",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (Se(!je), tt(""), qe(0));
                                  },
                                  className: `p-8 sm:p-5 rounded-3xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${je ? "border-emerald-500 bg-emerald-50/30 text-emerald-700 dark:text-emerald-400 font-extrabold" : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 text-slate-600 dark:text-slate-400"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-base",
                                      children: je
                                        ? "🟢 Máy In Đang Bật"
                                        : "🔴 Bật Nguồn Máy In",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] text-slate-400 font-medium",
                                      children: "Cấp nguồn hoạt động",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => Xe(!He),
                              className: `w-full py-3 rounded-3xl border font-bold text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${He ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                              children: [
                                jsxRuntimeExports.jsx(FileText, {
                                  className: "h-4 w-4",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: He
                                    ? "Đóng Hàng Đợi In (Print Queue)"
                                    : "Mở Hàng Đợi In (Print Queue)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "h-36 sm:h-40 bg-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-around px-5 sm:px-6 border border-slate-800",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col items-center z-10 text-white",
                              children: [
                                jsxRuntimeExports.jsx(Laptop, {
                                  className: "h-10 w-10 text-blue-400",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[9px] font-bold mt-1 text-slate-300",
                                  children: "Máy Tính",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex-1 h-1 relative mx-2",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className: `absolute inset-0 rounded-full transition-all ${K ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-slate-700"}`,
                                }),
                                K &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute h-2 w-2 rounded-full bg-yellow-400 -top-0.5",
                                    animate: { x: [0, 80, 0] },
                                    transition: {
                                      repeat: 1 / 0,
                                      duration: 2,
                                      ease: "linear",
                                    },
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col items-center z-10 text-white relative",
                              children: [
                                jsxRuntimeExports.jsx(Printer, {
                                  className: `h-10 w-10 transition-colors ${je ? "text-purple-400" : "text-slate-600"}`,
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[9px] font-bold mt-1 text-slate-300",
                                  children: "Canon LBP2900",
                                }),
                                Qe > 0 &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute -bottom-1 bg-white border border-slate-400 rounded-sm w-8 h-6 flex items-center justify-center -z-10 shadow-md",
                                    animate: { y: [0, 16, 16] },
                                    transition: { duration: 1.5 },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-black font-bold",
                                      children: "📄",
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx(AnimatePresence, {
                          children:
                            He &&
                            jsxRuntimeExports.jsxs(motion.div, {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 10 },
                              className:
                                "border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg text-slate-900 dark:text-white",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-100 dark:bg-slate-800 px-5 sm:px-5 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 text-sm sm:text-base font-semibold font-black text-slate-500",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "🖨️ WINDOWS PRINT QUEUE - CANON LBP2900",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[9px]",
                                      children: "LOCAL_USB",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "p-5 sm:p-6 space-y-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-500",
                                          children: "Trạng Thái Thiết Bị:",
                                        }),
                                        K && je
                                          ? jsxRuntimeExports.jsx("span", {
                                              className:
                                                "inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-full text-sm sm:text-base font-semibold font-black animate-pulse",
                                              children: "🟢 Ready (Sẵn Sàng)",
                                            })
                                          : jsxRuntimeExports.jsx("span", {
                                              className:
                                                "inline-flex items-center gap-1 bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-400 px-2 py-0.5 rounded-full text-sm sm:text-base font-semibold font-black",
                                              children:
                                                "🔴 Offline (Ngoại Tuyến)",
                                            }),
                                      ],
                                    }),
                                    (!K || !je) &&
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/10 p-8 sm:p-5 rounded-3xl border border-amber-200/10 font-semibold",
                                        children:
                                          "⚠️ Trạng thái đang Offline vì em chưa cắm cáp USB hoặc chưa bật nguồn máy in. Hãy bật cả 2 công tắc bên trên để đưa máy in về Sẵn sàng (Ready) nhé!",
                                      }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "border border-slate-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-semibold overflow-hidden",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-3 bg-slate-50 dark:bg-slate-850 p-8 sm:p-5 font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Tên Tài Liệu",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Trạng Thái",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Tiến Độ",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "p-8 sm:p-5 space-y-1 bg-white dark:bg-slate-900",
                                          children: at
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "grid grid-cols-3 font-semibold text-slate-600 dark:text-slate-300",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "TestPage_IC3.pdf",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-500 font-extrabold animate-pulse",
                                                      children:
                                                        Qe < 40
                                                          ? "Spooling..."
                                                          : Qe < 80
                                                            ? "Printing..."
                                                            : "Sending...",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    { children: [Qe, "%"] },
                                                  ),
                                                ],
                                              })
                                            : De
                                              ? jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-slate-400 italic text-center py-1",
                                                  children:
                                                    "Hàng đợi trống (Đã in thành công)",
                                                })
                                              : jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-slate-400 italic text-center py-1",
                                                  children:
                                                    "Không có tài liệu nào trong hàng đợi",
                                                }),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "flex gap-2 pt-1",
                                      children: jsxRuntimeExports.jsx(
                                        "button",
                                        {
                                          disabled: !K || !je || at,
                                          onClick: () => {
                                            (qe(0), tt(""), ze(!0));
                                          },
                                          className: `flex-1 py-3 rounded-3xl font-black text-sm sm:text-base font-semibold transition-all cursor-pointer ${K && je && !at ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"}`,
                                          children:
                                            "📄 Gửi Bản In Kiểm Tra (Print Test Page)",
                                        },
                                      ),
                                    }),
                                    De &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-8 sm:p-5 bg-emerald-100/30 dark:bg-emerald-950/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-sm sm:text-base font-semibold rounded-3xl font-bold",
                                        children: De,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 bg-slate-50/30 dark:bg-slate-950/10 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "p-1.5 bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 rounded-3xl text-sm sm:text-base font-medium font-black",
                              children: "2",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-900 dark:text-white uppercase",
                                  children: "Máy In Mạng (Network Printer)",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 font-medium",
                                  children:
                                    "Kết nối vào Router mạng qua dây cáp Ethernet hoặc sóng Wifi để nhiều máy cùng in chung.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider block",
                              children: "Thao Tác Xác Nhận Kết Nối:",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (_e(!$e), Ae([]), oe(!1), Te("idle"));
                                  },
                                  className: `p-8 sm:p-5 rounded-3xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${$e ? "border-purple-500 bg-purple-50/30 text-purple-700 dark:text-purple-400 font-extrabold" : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 text-slate-600 dark:text-slate-400"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Terminal, {
                                      className: "h-5 w-5",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold block mt-0.5",
                                      children: $e
                                        ? "Đóng Terminal/CMD"
                                        : "Mở Terminal (CMD)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  disabled: !$e || it,
                                  onClick: () => {
                                    (ge(0),
                                      Ae([
                                        "C:\\Users\\IC3_Student> ping 192.168.1.100",
                                      ]),
                                      Te("sending"),
                                      oe(!0));
                                  },
                                  className: `p-8 sm:p-5 rounded-3xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${$e && !it ? "border-emerald-500 bg-emerald-50/20 text-emerald-700 dark:text-emerald-400 font-extrabold" : "border-slate-200 bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Send, {
                                      className: "h-5 w-5",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold block mt-0.5",
                                      children: "Gửi Lệnh PING máy in",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "h-36 sm:h-40 bg-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-between px-6 border border-slate-800 text-white",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex flex-col items-center z-10",
                              children: [
                                jsxRuntimeExports.jsx(Laptop, {
                                  className: "h-8 w-8 text-blue-400",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[8px] font-mono text-slate-400",
                                  children: "192.168.1.5",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 h-0.5 border-t-2 border-dashed border-slate-700 relative mx-1",
                              children: [
                                Q === "sending" &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute h-2.5 w-2.5 rounded-full bg-yellow-400 -top-1",
                                    animate: { x: [0, 45] },
                                    transition: {
                                      duration: 0.5,
                                      ease: "linear",
                                    },
                                  }),
                                Q === "responding" &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute h-2.5 w-2.5 rounded-full bg-cyan-400 -top-1",
                                    animate: { x: [45, 0] },
                                    transition: {
                                      duration: 0.5,
                                      ease: "linear",
                                    },
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col items-center z-10 p-1.5 rounded-3xl bg-slate-850 border border-slate-700",
                              children: [
                                jsxRuntimeExports.jsx(Wifi, {
                                  className:
                                    "h-6 w-6 text-emerald-400 animate-pulse",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[8px] font-mono text-slate-300",
                                  children: "ROUTER Wifi",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 h-0.5 border-t-2 border-dashed border-slate-700 relative mx-1",
                              children: [
                                Q === "sending" &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute h-2.5 w-2.5 rounded-full bg-yellow-400 -top-1",
                                    animate: { x: [0, 45] },
                                    transition: {
                                      delay: 0.5,
                                      duration: 0.5,
                                      ease: "linear",
                                    },
                                  }),
                                Q === "responding" &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    className:
                                      "absolute h-2.5 w-2.5 rounded-full bg-cyan-400 -top-1",
                                    animate: { x: [45, 0] },
                                    transition: {
                                      delay: 0,
                                      duration: 0.5,
                                      ease: "linear",
                                    },
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex flex-col items-center z-10",
                              children: [
                                jsxRuntimeExports.jsx(Printer, {
                                  className: "h-8 w-8 text-purple-400",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[8px] font-mono text-slate-400",
                                  children: "192.168.1.100",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute bottom-1 left-2 flex gap-3 text-[8px] text-slate-400 font-bold bg-slate-950/80 px-2 py-0.5 rounded border border-white/5",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-1.5 w-1.5 rounded-full bg-yellow-400 inline-block",
                                    }),
                                    "Ping",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block",
                                    }),
                                    "Phản hồi",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx(AnimatePresence, {
                          children:
                            $e &&
                            jsxRuntimeExports.jsxs(motion.div, {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 10 },
                              className:
                                "border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 text-emerald-400 shadow-xl font-mono",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900 px-5 sm:px-5 py-3 flex items-center justify-between border-b border-slate-800 text-sm sm:text-base font-bold text-slate-400",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children: "💻 Command Prompt (CMD)",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-2 w-2 rounded-full bg-red-500",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "p-5 sm:p-6 space-y-2 text-sm sm:text-base font-medium h-40 overflow-y-auto",
                                  children:
                                    ae.length === 0
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className: "text-slate-400",
                                              children:
                                                "Microsoft Windows [Version 10.0.19045]",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className: "text-slate-400",
                                              children:
                                                "(c) Microsoft Corporation. All rights reserved.",
                                            }),
                                            jsxRuntimeExports.jsx("br", {}),
                                            jsxRuntimeExports.jsxs("p", {
                                              className: "text-white",
                                              children: [
                                                "C:\\Users\\IC3_Student> ",
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "animate-pulse",
                                                  children: "_",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-500 italic mt-3",
                                              children:
                                                '👉 Hãy bấm nút "Gửi Lệnh PING máy in" bên trên để thực thi lệnh!',
                                            }),
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            ae.map((Fe, rt) =>
                                              jsxRuntimeExports.jsx(
                                                "p",
                                                {
                                                  className: Fe.startsWith("🎉")
                                                    ? "text-emerald-400 font-black"
                                                    : Fe.startsWith("Reply")
                                                      ? "text-yellow-300"
                                                      : "text-white",
                                                  children: Fe,
                                                },
                                                rt,
                                              ),
                                            ),
                                            it &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "animate-pulse text-white",
                                                children: "_",
                                              }),
                                          ],
                                        }),
                                }),
                              ],
                            }),
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

    return Lab12;
  };
})();
