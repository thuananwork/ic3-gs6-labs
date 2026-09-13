/**
 * Lab 11: Phân loại Tương tác Số
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab11 = window.AGY_LABS[11] = function (env) {
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

    function Lab13({ onSuccess: a }) {
      const [n, i] = reactExports.useState(0),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState("mobility"),
        [N, M] = reactExports.useState([
          { name: "Bai_Thuyet_Trinh_Nhom.pptx", type: "doc", size: "12 MB" },
        ]),
        [y, I] = reactExports.useState(null),
        [R, z] = reactExports.useState(!1),
        [A, O] = reactExports.useState(0),
        [L, le] = reactExports.useState(""),
        [P, G] = reactExports.useState("doc"),
        [ee, ce] = reactExports.useState(!0),
        [V, pe] = reactExports.useState(!0),
        [Ie, se] = reactExports.useState([
          "Bao_Cao_IC3_GS6.docx",
          "Hinh_Ky_Niem_Lop.png",
          "Bai_Toan_Cuoi_Ky.xlsx",
        ]),
        [de, _] = reactExports.useState([]),
        [U, Z] = reactExports.useState(null),
        [be, he] = reactExports.useState(!1),
        [E, v] = reactExports.useState(100),
        [K, te] = reactExports.useState([]),
        [je, Se] = reactExports.useState(!1),
        [He, Xe] = reactExports.useState(!1),
        [Qe, qe] = reactExports.useState(!1),
        [at, ze] = reactExports.useState("conn"),
        [De, tt] = reactExports.useState(!0),
        [it, oe] = reactExports.useState(!1),
        [ie, ge] = reactExports.useState([
          "[Hệ thống] Internet đang hoạt động bình thường.",
          "[Đồng bộ] Đang kết nối ổn định đến Cloud...",
        ]),
        [ae, Ae] = reactExports.useState("123456"),
        [Q, Te] = reactExports.useState(!1),
        [$e, _e] = reactExports.useState(!1),
        [Ue, Ke] = reactExports.useState("idle"),
        [ot, w] = reactExports.useState([
          "[Bảo mật] Nhập mật khẩu để cấu hình bảo vệ tài khoản Cloud.",
        ]),
        [C, Ee] = reactExports.useState("cloud"),
        [ke, We] = reactExports.useState("idle"),
        [ht, lt] = reactExports.useState(60),
        [Fe, rt] = reactExports.useState([
          "[Hệ thống] Trình duyệt Web và Môi trường Cục bộ đã sẵn sàng.",
          "[Hướng dẫn] Hãy chọn phiên bản chạy ứng dụng phía dưới để bắt đầu so sánh.",
        ]),
        [yt, xt] = reactExports.useState("idle"),
        ve = (W) => {
          if ((W.preventDefault(), R || !L.trim())) return;
          (z(!0), O(0));
          let Me = 0;
          const et = setInterval(() => {
            ((Me += 20),
              Me >= 100
                ? (clearInterval(et),
                  O(100),
                  z(!1),
                  M((Je) => {
                    const Et = P === "doc" ? ".docx" : ".png",
                      ft = L.endsWith(Et) ? L : `${L}${Et}`;
                    return Je.some((Mt) => Mt.name === ft)
                      ? Je
                      : [
                          ...Je,
                          {
                            name: ft,
                            type: P,
                            size: `${Math.floor(Math.random() * 20 + 1)} MB`,
                          },
                        ];
                  }),
                  le(""))
                : O(Me));
          }, 150);
        },
        Ye = () => {
          (pe(!1), Z(ee ? "success" : "fail"));
        },
        mt = () => {
          (pe(!0), _([]), Z(null), he(!1));
        },
        Dt = () => {
          (he(!0),
            setTimeout(() => {
              (_([...Ie]), he(!1), Z("restored"));
            }, 1500));
        },
        ye = { hardware: 4500, aircon: 1200, itSupport: 1500 },
        H = (W) => Math.round(5 + W * 0.05),
        me = (W) => {
          const Me = ye.hardware + ye.aircon + ye.itSupport * W,
            et = H(E) * W;
          return { localTotal: Me, cloudTotal: et, saved: Me - et };
        },
        Le = me(6),
        Pe = me(12);
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-6",
        id: "lab-13-root",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col sm:flex-row border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-t-2xl p-1 shadow-sm gap-2",
            children: [
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i(0),
                className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 0 ? "bg-blue-600 text-white dark:bg-blue-600 shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-850"}`,
                children: [
                  jsxRuntimeExports.jsx(Info, { className: "h-4 w-4" }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Khái Niệm Điện Toán Đám Mây",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i(1),
                className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 1 ? "bg-blue-600 text-white dark:bg-blue-600 shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-850"}`,
                children: [
                  jsxRuntimeExports.jsx(Cloud, {
                    className: "h-4 w-4 animate-pulse",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Ưu Điểm Của Điện Toán Đám Mây",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i(2),
                className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 2 ? "bg-amber-600 text-white dark:bg-amber-600 shadow-md" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-850"}`,
                children: [
                  jsxRuntimeExports.jsx(ShieldAlert, { className: "h-4 w-4" }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Nhược Điểm Của Điện Toán Đám Mây",
                  }),
                ],
              }),
            ],
          }),
          n === 0 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-6 text-left",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 p-5 sm:p-6 rounded-r-xl",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400",
                      children: "Kiến Thức Cốt Lõi IC3 GS6",
                    }),
                    jsxRuntimeExports.jsxs("h4", {
                      className:
                        "mt-1 text-xl font-extrabold text-slate-950 dark:text-white leading-relaxed flex items-center gap-2",
                      children: [
                        jsxRuntimeExports.jsx(Cloud, {
                          className:
                            "h-5 w-5 text-blue-600 dark:text-blue-400 animate-bounce",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          children:
                            "Điện Toán Đám Mây Là Gì? (Cloud Computing)",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("p", {
                      className:
                        "mt-2 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-medium",
                      children: [
                        "Hãy hiểu một cách đơn giản nhất: ",
                        jsxRuntimeExports.jsx("strong", {
                          children: "Điện toán đám mây",
                        }),
                        " là việc cung cấp các dịch vụ điện toán (bao gồm lưu trữ, máy chủ, cơ sở dữ liệu, phần mềm, mạng) qua ",
                        jsxRuntimeExports.jsx("strong", {
                          children: "mạng Internet",
                        }),
                        '. Thay vì lưu mọi thứ trên ổ cứng máy tính cá nhân (cục bộ), em gửi chúng lên các "đám mây" - thực chất là các trung tâm dữ liệu cực lớn được đặt ở khắp nơi trên toàn cầu.',
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "mt-4 pt-4 border-t border-blue-200/60 dark:border-blue-900/40 space-y-3",
                      children: [
                        jsxRuntimeExports.jsxs("span", {
                          className:
                            "text-sm sm:text-base font-semibold font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block flex items-center gap-1.5",
                          children: [
                            jsxRuntimeExports.jsx(CircleCheck, {
                              className:
                                "h-4 w-4 text-emerald-500 animate-pulse",
                            }),
                            " 2 Nguyên lý cốt lõi chính xác về Điện toán đám mây (IC3 GS6):",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-start gap-2.5 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-8 sm:p-5 rounded-3xl hover:border-emerald-300 dark:hover:border-emerald-800 transition-all",
                              children: [
                                jsxRuntimeExports.jsx(Check, {
                                  className:
                                    "h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 stroke-[3]",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-0.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block",
                                      children: "Cách thức truy cập",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 font-bold leading-normal",
                                      children:
                                        "Máy chủ có thể được truy cập thông qua internet.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-start gap-2.5 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-8 sm:p-5 rounded-3xl hover:border-emerald-300 dark:hover:border-emerald-800 transition-all",
                              children: [
                                jsxRuntimeExports.jsx(Check, {
                                  className:
                                    "h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 stroke-[3]",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-0.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block",
                                      children: "Nơi lưu trữ dữ liệu",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 font-bold leading-normal",
                                      children:
                                        "Dữ liệu trong điện toán đám mây được lưu trữ trên một máy chủ từ xa.",
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
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "p-5 sm:p-6 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 dark:from-slate-850/30 dark:to-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl flex flex-col justify-between space-y-3",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-400 px-2.5 py-1 rounded-md text-sm sm:text-base font-bold uppercase tracking-wider",
                              children: "💡 Ẩn dụ thực tế dễ hiểu",
                            }),
                            jsxRuntimeExports.jsx("h5", {
                              className:
                                "mt-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white",
                              children: 'Ẩn dụ "Dòng điện & Nước sạch"',
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "mt-1.5 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-medium",
                              children:
                                "Hãy tưởng tượng đám mây giống như dòng điện hay nước máy tại nhà em: Em không cần xây nhà máy phát điện hay đào giếng khoan riêng, cũng không cần bảo trì chúng. Chỉ cần cắm phích nước hoặc vặn vòi (kết nối Internet) là em có điện, nước để dùng ngay. Dùng bao nhiêu trả tiền bấy nhiêu!",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-wrap gap-x-4 gap-y-1.5 text-sm sm:text-base font-bold text-slate-500",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                jsxRuntimeExports.jsx(Check, {
                                  className: "h-3.5 w-3.5 text-blue-500",
                                }),
                                " Không tốn chi phí mua thiết bị",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                jsxRuntimeExports.jsx(Check, {
                                  className: "h-3.5 w-3.5 text-blue-500",
                                }),
                                " Dùng bao nhiêu trả bấy nhiêu",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "p-5 sm:p-6 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-slate-850/30 dark:to-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl flex flex-col justify-between space-y-3",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400 px-2.5 py-1 rounded-md text-sm sm:text-base font-bold uppercase tracking-wider",
                              children: "📂 So sánh lưu trữ",
                            }),
                            jsxRuntimeExports.jsx("h5", {
                              className:
                                "mt-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white",
                              children: "Ổ cứng cá nhân vs. Điện toán đám mây",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "mt-2 space-y-1.5 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-red-500 font-bold shrink-0",
                                      children: "✘ Cục bộ:",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Lưu trên Laptop. Nếu máy hỏng, mất trộm hoặc quên mang máy là em hoàn toàn mất sạch dữ liệu.",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-emerald-500 font-bold shrink-0",
                                      children: "✔ Đám mây:",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Lưu trực tuyến. Em chỉ cần mượn bất kỳ thiết bị nào, đăng nhập tài khoản là thấy lại dữ liệu tức thì.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "pt-1.5 text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400",
                          children:
                            "ℹ️ Tính cơ động và an toàn dữ liệu vượt trội!",
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wider",
                      children: "Ảnh Minh Họa",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "relative group overflow-hidden border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-950 shadow-md",
                      children: [
                        jsxRuntimeExports.jsx("img", {
                          src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&h=550&q=80",
                          alt: "Cloud Computing Data Center Servers",
                          className:
                            "w-full h-[240px] md:h-[280px] object-cover opacity-85 hover:opacity-100 transition-opacity duration-300",
                          referrerPolicy: "no-referrer",
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "absolute bottom-4 left-4 right-4 text-left",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "inline-flex items-center gap-1 bg-blue-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-1",
                              children: "Cloud Data Center",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-medium md:text-sm sm:text-base font-bold text-white leading-tight",
                              children:
                                "Hạ tầng Trung tâm dữ liệu Đám mây với hàng triệu ổ cứng SSD và chip xử lý hoạt động liên tục 24/7/365",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "text-sm sm:text-base font-semibold text-slate-500 text-center font-medium italic",
                      children:
                        "Hình 13.1: Trung tâm dữ liệu (Data Center) khổng lồ của các nhà cung cấp đám mây như Google Cloud, Microsoft Azure, AWS.",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl space-y-4",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-0.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider",
                              children: "Mô Hình Trực Quan",
                            }),
                            jsxRuntimeExports.jsx("h5", {
                              className:
                                "text-sm sm:text-base font-bold text-slate-900 dark:text-white",
                              children:
                                "Sơ đồ luồng hoạt động của Điện toán đám mây",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-semibold text-slate-400",
                          children:
                            "Cách dữ liệu luân chuyển trực tuyến qua Internet",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "py-6 px-5 sm:px-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-150 dark:border-slate-850 flex flex-col md:flex-row items-center justify-between gap-6 relative",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex flex-col gap-3 w-full md:w-1/3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-extrabold text-slate-400 text-center uppercase tracking-wider",
                              children: "1. Thiết Thiết bị của em (Client)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-3 gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-3xl flex flex-col items-center text-center justify-center space-y-1 hover:border-blue-500 transition-colors group",
                                  children: [
                                    jsxRuntimeExports.jsx(Laptop, {
                                      className:
                                        "h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[9px] font-bold",
                                      children: "Laptop",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-3xl flex flex-col items-center text-center justify-center space-y-1 hover:border-blue-500 transition-colors group",
                                  children: [
                                    jsxRuntimeExports.jsx(Smartphone, {
                                      className:
                                        "h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[9px] font-bold",
                                      children: "Điện thoại",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 rounded-3xl flex flex-col items-center text-center justify-center space-y-1 hover:border-blue-500 transition-colors group",
                                  children: [
                                    jsxRuntimeExports.jsx(Tablet, {
                                      className:
                                        "h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-[9px] font-bold",
                                      children: "Tablet",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center w-full md:w-1/4 space-y-2",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-extrabold text-blue-600 uppercase tracking-wider",
                              children: "2. Đường truyền mạng",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "relative w-full flex items-center justify-center h-4",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "absolute w-full h-[2px] bg-blue-100 dark:bg-blue-950/60 rounded",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse rounded",
                                }),
                                jsxRuntimeExports.jsx(Wifi, {
                                  className:
                                    "h-4 w-4 text-blue-600 relative bg-white dark:bg-slate-900 px-1",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] text-slate-400 font-medium text-center",
                              children: "Kết nối Internet siêu tốc",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-full md:w-1/3 p-5 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/60 rounded-3xl space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 text-center block uppercase tracking-wider",
                              children: "3. Máy chủ đám mây (Cloud Server)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "space-y-1.5 text-sm sm:text-base font-semibold",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 border border-blue-100/50 rounded shadow-sm font-semibold",
                                  children: [
                                    jsxRuntimeExports.jsx(Server, {
                                      className: "h-3.5 w-3.5 text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children: "Bộ xử lý máy chủ khổng lồ",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 border border-blue-100/50 rounded shadow-sm font-semibold",
                                  children: [
                                    jsxRuntimeExports.jsx(Cloud, {
                                      className: "h-3.5 w-3.5 text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children: "Lưu trữ SSD tự động đồng bộ",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 bg-white dark:bg-slate-900 p-1.5 border border-blue-100/50 rounded shadow-sm font-semibold",
                                  children: [
                                    jsxRuntimeExports.jsx(Sparkles, {
                                      className: "h-3.5 w-3.5 text-blue-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children: "Hệ điều hành & Ứng dụng SaaS",
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
                jsxRuntimeExports.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wider block",
                      children:
                        "Các Ví Dụ Thực Tế Về Công Cụ & Phần Mềm Đám Mây",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 hover:shadow-md transition-all",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "h-8 w-8 rounded-3xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-blue-600",
                              children: jsxRuntimeExports.jsx(Cloud, {
                                className: "h-4 w-4",
                              }),
                            }),
                            jsxRuntimeExports.jsx("h6", {
                              className:
                                "font-extrabold text-sm sm:text-base font-medium text-slate-950 dark:text-white uppercase tracking-wide",
                              children: "Lưu trữ & Chia sẻ file",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                              children:
                                "Google Drive, OneDrive, Dropbox, iCloud.",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] block text-slate-400 italic",
                              children:
                                "Lưu tệp an toàn trực tuyến, không tốn ổ cứng cá nhân.",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 hover:shadow-md transition-all",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "h-8 w-8 rounded-3xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600",
                              children: jsxRuntimeExports.jsx(FileText, {
                                className: "h-4 w-4",
                              }),
                            }),
                            jsxRuntimeExports.jsx("h6", {
                              className:
                                "font-extrabold text-sm sm:text-base font-medium text-slate-950 dark:text-white uppercase tracking-wide",
                              children: "Học Tập & Làm Việc",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                              children: "Google Docs, Microsoft 365, Canva.",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] block text-slate-400 italic",
                              children:
                                "Soạn thảo tài liệu, thiết kế trực tiếp trên trình duyệt.",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 hover:shadow-md transition-all",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "h-8 w-8 rounded-3xl bg-purple-100 dark:bg-purple-950/40 flex items-center justify-center text-purple-600",
                              children: jsxRuntimeExports.jsx(Sparkles, {
                                className: "h-4 w-4",
                              }),
                            }),
                            jsxRuntimeExports.jsx("h6", {
                              className:
                                "font-extrabold text-sm sm:text-base font-medium text-slate-950 dark:text-white uppercase tracking-wide",
                              children: "Giải Trí & Stream",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                              children: "YouTube, Netflix, Spotify, TikTok.",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] block text-slate-400 italic",
                              children:
                                "Truyền phát phim ảnh, âm nhạc lưu trên đám mây khổng lồ.",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 hover:shadow-md transition-all",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "h-8 w-8 rounded-3xl bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600",
                              children: jsxRuntimeExports.jsx(Smartphone, {
                                className: "h-4 w-4",
                              }),
                            }),
                            jsxRuntimeExports.jsx("h6", {
                              className:
                                "font-extrabold text-sm sm:text-base font-medium text-slate-950 dark:text-white uppercase tracking-wide",
                              children: "Liên Lạc & Giao Tiếp",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                              children: "Zalo, Facebook, Gmail, Zoom.",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[9px] block text-slate-400 italic",
                              children:
                                "Mọi tin nhắn, hình ảnh trò chuyện được đồng bộ tự động.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          n === 1 &&
            jsxRuntimeExports.jsx("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-6 text-left",
              children: jsxRuntimeExports.jsxs("div", {
                className: "space-y-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 text-sm sm:text-base font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider",
                        children: "Mô Phỏng Trực Quan Trải Nghiệm",
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-400 font-semibold",
                        children:
                          "Tự tay kiểm chứng các ưu điểm của điện toán đám mây qua công cụ mô phỏng",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-4",
                    children: [
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => k("mobility"),
                        className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center gap-1.5 cursor-pointer ${b === "mobility" ? "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800" : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(Smartphone, {
                            className: "h-3.5 w-3.5",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "1. Mô phỏng: Tính di động (Mobility)",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => k("backup"),
                        className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center gap-1.5 cursor-pointer ${b === "backup" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(RefreshCw, {
                            className: "h-3.5 w-3.5",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "2. Mô phỏng: Sao lưu & Khôi phục",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => k("cost"),
                        className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center gap-1.5 cursor-pointer ${b === "cost" ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800" : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(DollarSign, {
                            className: "h-3.5 w-3.5",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "3. Mô phỏng: Tiết kiệm chi phí",
                          }),
                        ],
                      }),
                    ],
                  }),
                  b === "mobility" &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-50 dark:bg-slate-850/20 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsxs("h5", {
                              className:
                                "font-bold text-sm sm:text-base font-medium text-slate-900 dark:text-white flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx(Smartphone, {
                                  className: "h-4 w-4 text-blue-500",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Cách thức Đám mây hỗ trợ truy cập đa thiết bị mọi lúc mọi nơi",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "mt-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-medium",
                              children: [
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Trải nghiệm thực tế:",
                                }),
                                " Thử tải tệp tin bài học của em từ chiếc Laptop cá nhân lên đám mây (Cloud), sau đó thử click vào các thiết bị di động ở xa để kiểm tra xem tài liệu đã tự động đồng bộ chưa nhé!",
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-5 bg-slate-50 dark:bg-slate-850/40 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-extrabold text-blue-600 uppercase tracking-wider",
                                  children: "Bước 1: Laptop cá nhân của em",
                                }),
                                jsxRuntimeExports.jsxs("form", {
                                  onSubmit: ve,
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "block text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                          children: "Tên tệp tin muốn tải lên",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: L,
                                          onChange: (W) => le(W.target.value),
                                          placeholder:
                                            "Ví dụ: Bai_Thuyet_Trinh_Lich_Su",
                                          className:
                                            "w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-3xl px-5 sm:px-5 py-3 text-sm sm:text-base font-medium focus:ring-2 focus:ring-blue-500 font-medium",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "block text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mb-1.5",
                                          children: "Thể loại tệp",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "grid grid-cols-2 gap-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("button", {
                                              type: "button",
                                              onClick: () => G("doc"),
                                              className: `py-3 text-sm sm:text-base font-bold rounded-3xl border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${P === "doc" ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800"}`,
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  FileText,
                                                  { className: "h-3.5 w-3.5" },
                                                ),
                                                jsxRuntimeExports.jsx("span", {
                                                  children: "Tài liệu (.docx)",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("button", {
                                              type: "button",
                                              onClick: () => G("image"),
                                              className: `py-3 text-sm sm:text-base font-bold rounded-3xl border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${P === "image" ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300" : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800"}`,
                                              children: [
                                                jsxRuntimeExports.jsx(Image, {
                                                  className: "h-3.5 w-3.5",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  children: "Hình ảnh (.png)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      type: "submit",
                                      disabled: R || !L.trim(),
                                      className: `w-full py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${!L.trim() || R ? "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white shadow-md"}`,
                                      children: [
                                        jsxRuntimeExports.jsx(Cloud, {
                                          className: "h-4 w-4",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: R
                                            ? "Đang tải lên Đám Mây..."
                                            : "Tải lên Đám Mây",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                R &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between text-sm sm:text-base font-bold text-slate-500",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Đang tải lên máy chủ đám mây...",
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            children: [A, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                        children: jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-full bg-blue-500 transition-all duration-150",
                                          style: { width: `${A}%` },
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-7 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 bg-white dark:bg-slate-900 flex flex-col justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-indigo-600 uppercase tracking-wider",
                                          children:
                                            "Bước 2: Hệ thống đám mây (Cloud storage)",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "inline-flex items-center gap-1 text-sm sm:text-base font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold",
                                          children: [
                                            jsxRuntimeExports.jsx(Wifi, {
                                              className: "h-3 w-3",
                                            }),
                                            " Đã kết nối mạng",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-5 sm:p-6 bg-linear-to-br from-blue-500/10 to-indigo-500/10 dark:from-slate-850 dark:to-indigo-950/40 border border-blue-100 dark:border-slate-800 rounded-3xl space-y-3 relative overflow-hidden",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute top-2 right-2 opacity-10",
                                          children: jsxRuntimeExports.jsx(
                                            Cloud,
                                            {
                                              className:
                                                "h-40 w-24 text-blue-500 animate-pulse",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest",
                                          children:
                                            "Các tệp tin hiện tại trên Mây:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "space-y-1.5 max-h-40 overflow-y-auto pr-1",
                                          children: N.map((W, Me) =>
                                            jsxRuntimeExports.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "flex items-center justify-between bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-800 text-sm sm:text-base font-medium animate-fadeIn",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        W.type === "doc"
                                                          ? jsxRuntimeExports.jsx(
                                                              FileText,
                                                              {
                                                                className:
                                                                  "h-3.5 w-3.5 text-blue-500",
                                                              },
                                                            )
                                                          : jsxRuntimeExports.jsx(
                                                              Image,
                                                              {
                                                                className:
                                                                  "h-3.5 w-3.5 text-emerald-500",
                                                              },
                                                            ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-slate-800 dark:text-slate-200 font-semibold",
                                                            children: W.name,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-400 font-mono",
                                                      children: W.size,
                                                    },
                                                  ),
                                                ],
                                              },
                                              Me,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-amber-600 uppercase tracking-wider block",
                                          children:
                                            "Bước 3: Mô phỏng kết nối thiết bị từ các vị trí địa lý khác nhau",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-3 gap-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              onClick: () => I("phone"),
                                              className: `p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group ${y === "phone" ? "border-amber-500 bg-amber-50/40 dark:border-amber-500 dark:bg-amber-950/20 shadow-md scale-[1.02]" : "border-slate-200 dark:border-slate-800 bg-slate-50/30 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute -right-3 -bottom-3 opacity-10 group-hover:scale-110 transition-transform",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      Smartphone,
                                                      {
                                                        className:
                                                          "h-16 w-16 text-amber-600",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 mb-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "p-8 sm:p-5 bg-amber-100 dark:bg-amber-950/40 rounded-3xl text-amber-600",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            Smartphone,
                                                            {
                                                              className:
                                                                "h-5 w-5",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "h6",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                                              children:
                                                                "Điện thoại di động",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] font-bold text-amber-600 dark:text-amber-400",
                                                              children:
                                                                "Cách xa 15 km",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-500 block",
                                                        children:
                                                          "Vị trí địa lý:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                                        children:
                                                          "🌳 Công viên Yên Sở",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded ${y === "phone" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`,
                                                        children:
                                                          y === "phone"
                                                            ? "ĐANG ĐỒNG BỘ"
                                                            : "CHƯA KẾT NỐI",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-bold text-blue-600 group-hover:translate-x-1 transition-transform",
                                                        children: "Thử →",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              onClick: () => I("tablet"),
                                              className: `p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group ${y === "tablet" ? "border-amber-500 bg-amber-50/40 dark:border-amber-500 dark:bg-amber-950/20 shadow-md scale-[1.02]" : "border-slate-200 dark:border-slate-800 bg-slate-50/30 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute -right-3 -bottom-3 opacity-10 group-hover:scale-110 transition-transform",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      Tablet,
                                                      {
                                                        className:
                                                          "h-16 w-16 text-indigo-600",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 mb-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "p-8 sm:p-5 bg-indigo-100 dark:bg-indigo-950/40 rounded-3xl text-indigo-600",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            Tablet,
                                                            {
                                                              className:
                                                                "h-5 w-5",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "h6",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                                              children:
                                                                "Máy tính bảng",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] font-bold text-indigo-600 dark:text-indigo-400",
                                                              children:
                                                                "Cách xa 35 km",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-500 block",
                                                        children:
                                                          "Vị trí địa lý:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                                        children:
                                                          "✈️ Sân bay Nội Bài",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded ${y === "tablet" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`,
                                                        children:
                                                          y === "tablet"
                                                            ? "ĐANG ĐỒNG BỘ"
                                                            : "CHƯA KẾT NỐI",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-bold text-blue-600 group-hover:translate-x-1 transition-transform",
                                                        children: "Thử →",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              onClick: () => I("desktop"),
                                              className: `p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden group ${y === "desktop" ? "border-amber-500 bg-amber-50/40 dark:border-amber-500 dark:bg-amber-950/20 shadow-md scale-[1.02]" : "border-slate-200 dark:border-slate-800 bg-slate-50/30 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute -right-3 -bottom-3 opacity-10 group-hover:scale-110 transition-transform",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      Monitor,
                                                      {
                                                        className:
                                                          "h-16 w-16 text-emerald-600",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 mb-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "p-8 sm:p-5 bg-emerald-100 dark:bg-emerald-950/40 rounded-3xl text-emerald-600",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            Monitor,
                                                            {
                                                              className:
                                                                "h-5 w-5",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "h6",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                                              children:
                                                                "Máy tính học tập",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] font-bold text-emerald-600 dark:text-emerald-400",
                                                              children:
                                                                "Cách xa 5 km",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-500 block",
                                                        children:
                                                          "Vị trí địa lý:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                                        children:
                                                          "🏫 Phòng máy trường học",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded ${y === "desktop" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`,
                                                        children:
                                                          y === "desktop"
                                                            ? "ĐANG ĐỒNG BỘ"
                                                            : "CHƯA KẾT NỐI",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-bold text-blue-600 group-hover:translate-x-1 transition-transform",
                                                        children: "Thử →",
                                                      },
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
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "mt-4 border-t border-slate-100 dark:border-slate-800 pt-4",
                                  children: y
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 rounded-3xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/40 space-y-2 animate-fadeIn text-sm sm:text-base font-medium",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-amber-700 dark:text-amber-400",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                CircleCheck,
                                                {
                                                  className: "h-4 w-4 shrink-0",
                                                },
                                              ),
                                              jsxRuntimeExports.jsxs("span", {
                                                className: "font-extrabold",
                                                children: [
                                                  "Đồng bộ hoàn tất trên ",
                                                  y === "phone"
                                                    ? "Điện thoại"
                                                    : y === "tablet"
                                                      ? "Máy tính bảng"
                                                      : "Máy tính trường học",
                                                  "!",
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-slate-600 dark:text-slate-400 font-medium",
                                            children: [
                                              "Tuyệt vời! Em có thể thấy ngay cả khi em ",
                                              y === "phone"
                                                ? "đang ở Công viên Yên Sở cách xa chiếc Laptop 15 km"
                                                : y === "tablet"
                                                  ? "đang ở Sân bay Nội Bài cách xa chiếc Laptop 35 km"
                                                  : "đang ở Phòng máy trường học cách xa chiếc Laptop 5 km",
                                              ", chiếc ",
                                              y === "phone"
                                                ? "Điện thoại"
                                                : y === "tablet"
                                                  ? "Máy tính bảng"
                                                  : "Máy tính học tập",
                                              " vẫn truy cập được đầy đủ ",
                                              N.length,
                                              " tệp tin ở trên Đám Mây mà không cần mang theo máy tính cá nhân. Đây chính là ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "Tính di động (Mobility)",
                                              }),
                                              ".",
                                            ],
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/20 text-center text-sm sm:text-base font-medium text-slate-500 font-medium",
                                        children:
                                          "💡 Hãy chọn 1 thiết bị từ xa ở phía trên để bật màn hình mô phỏng đồng bộ!",
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  b === "backup" &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-50 dark:bg-slate-850/20 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsxs("h5", {
                              className:
                                "font-bold text-sm sm:text-base font-medium text-slate-900 dark:text-white flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx(RefreshCw, {
                                  className: "h-4 w-4 text-emerald-500",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Cứu dữ liệu an toàn khi xảy ra sự cố phần cứng cực mạnh",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "mt-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-medium",
                              children: [
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Trải nghiệm thực tế:",
                                }),
                                " Máy tính cá nhân có thể hỏng bất ngờ do rơi vỡ, chập nguồn hoặc dính nước. Hãy thử bật/tắt chế độ tự động đồng bộ lên Mây, rồi kích hoạt sự cố hỏng hóc máy tính để xem Đám mây cứu nguy cho dữ liệu như thế nào nhé!",
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-5 bg-slate-50 dark:bg-slate-850/40 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-extrabold text-emerald-600 uppercase tracking-wider block",
                                  children: "Cài đặt sao lưu trên máy tính",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl flex items-center justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                          children: "Tự động sao lưu lên mây",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-500 font-medium",
                                          children: "Auto-sync Cloud Backup",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      disabled: !V,
                                      onClick: () => ce(!ee),
                                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${ee ? "bg-emerald-500" : "bg-slate-300"} ${V ? "" : "opacity-50 cursor-not-allowed"}`,
                                      children: jsxRuntimeExports.jsx("span", {
                                        className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${ee ? "translate-x-5" : "translate-x-0"}`,
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block",
                                      children:
                                        "Các tệp quan trọng trong ổ cứng máy tính:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "space-y-1.5",
                                      children:
                                        !V && !ee
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "p-5 sm:p-6 bg-red-50/50 dark:bg-red-950/20 border border-dashed border-red-300 dark:border-red-900 rounded-3xl text-center space-y-2",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  TriangleAlert,
                                                  {
                                                    className:
                                                      "h-8 w-8 text-red-500 mx-auto animate-pulse",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-extrabold text-red-600 dark:text-red-400 block",
                                                        children:
                                                          "DỮ LIỆU ĐÃ MẤT VĨNH VIỄN ❌",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium",
                                                      children:
                                                        "Toàn bộ tệp tin trong ổ cứng vật lý đã bị phá huỷ hoàn toàn, không thể phục hồi!",
                                                    }),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "space-y-1 text-left opacity-60",
                                                  children: Ie.map((W, Me) =>
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center gap-2 p-1.5 bg-red-100/30 dark:bg-red-950/30 rounded text-sm sm:text-base font-semibold font-medium line-through text-red-700 dark:text-red-400",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            CircleX,
                                                            {
                                                              className:
                                                                "h-3 w-3 text-red-500 shrink-0",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "truncate",
                                                              children: W,
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                      Me,
                                                    ),
                                                  ),
                                                }),
                                              ],
                                            })
                                          : !V && ee
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "p-5 sm:p-6 bg-emerald-50/50 dark:bg-emerald-950/20 border border-dashed border-emerald-300 dark:border-emerald-900 rounded-3xl text-center space-y-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(Cloud, {
                                                    className:
                                                      "h-8 w-8 text-emerald-500 mx-auto animate-bounce",
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400 block",
                                                            children:
                                                              "DỮ LIỆU AN TOÀN TRÊN MÂY ✅",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium",
                                                            children:
                                                              "Ổ cứng vật lý bị hỏng nhưng các tệp đã được lưu trữ bản sao dự phòng trên đám mây.",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "space-y-1 text-left",
                                                    children: Ie.map((W, Me) =>
                                                      jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center gap-2 p-1.5 bg-emerald-100/30 dark:bg-emerald-950/30 rounded text-sm sm:text-base font-semibold font-medium text-emerald-750 dark:text-emerald-400",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              Check,
                                                              {
                                                                className:
                                                                  "h-3 w-3 text-emerald-500 shrink-0",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "span",
                                                              {
                                                                className:
                                                                  "truncate",
                                                                children: [
                                                                  W,
                                                                  " (An toàn trên Mây)",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                        Me,
                                                      ),
                                                    ),
                                                  }),
                                                ],
                                              })
                                            : Ie.map((W, Me) =>
                                                jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-semibold",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        FileText,
                                                        {
                                                          className:
                                                            "h-3.5 w-3.5 text-blue-500 shrink-0",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-slate-700 dark:text-slate-300 truncate",
                                                          children: W,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  Me,
                                                ),
                                              ),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "pt-2",
                                  children: V
                                    ? jsxRuntimeExports.jsx("button", {
                                        onClick: Ye,
                                        className:
                                          "w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base font-medium py-3 px-5 sm:px-6 rounded-3xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:scale-103 transition-all",
                                        children: jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            children:
                                              "🔨 Dùng Búa Đập Vỡ Laptop!",
                                          },
                                        ),
                                      })
                                    : jsxRuntimeExports.jsxs("button", {
                                        onClick: mt,
                                        className:
                                          "w-full bg-slate-700 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base font-medium py-3 px-5 sm:px-6 rounded-3xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:scale-103 transition-all",
                                        children: [
                                          jsxRuntimeExports.jsx(RefreshCw, {
                                            className: "h-4 w-4",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Mua Laptop Mới / Sửa Laptop",
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-7 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 bg-white dark:bg-slate-900 flex flex-col justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-extrabold text-indigo-600 uppercase tracking-wider block",
                                      children: "Tình trạng thực tế thiết bị",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "flex items-center justify-center p-8 bg-slate-50 dark:bg-slate-850/30 rounded-3xl relative border border-slate-100 dark:border-slate-800",
                                      children: V
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex flex-col items-center gap-3 text-center",
                                            children: [
                                              jsxRuntimeExports.jsx(Laptop, {
                                                className:
                                                  "h-16 w-16 text-blue-500 animate-bounce",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-1",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-extrabold text-slate-900 dark:text-white",
                                                      children:
                                                        "Laptop đang hoạt động bình thường",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-slate-500 font-bold block",
                                                    children:
                                                      "Chứa nhiều tài liệu học tập, báo cáo quan trọng trên ổ cứng vật lý",
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center justify-center gap-1.5 text-emerald-600 font-extrabold text-sm sm:text-base font-semibold",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "h-2 w-2 rounded-full bg-emerald-500 inline-block animate-ping",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            children:
                                                              "HỆ THỐNG AN TOÀN (ONLINE)",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex flex-col items-center gap-3 text-center",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-5xl animate-pulse",
                                                children: "🔨💥💻",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-1",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-extrabold text-red-600 dark:text-red-400",
                                                      children:
                                                        "MÁY TÍNH BỊ BÚA ĐẬP VỠ, HỎNG VẬT LÝ HOÀN TOÀN!",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-500 font-bold block",
                                                      children:
                                                        "Ổ cứng vật lý lưu trữ dữ liệu đã bị vỡ nát, hỏng hóc và mất hoàn toàn khả năng đọc/ghi.",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "mt-4 border-t border-slate-100 dark:border-slate-800 pt-4",
                                  children: [
                                    U === "success" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400 border border-emerald-200/50 space-y-3 animate-fadeIn text-sm sm:text-base font-medium",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                CircleCheck,
                                                {
                                                  className:
                                                    "h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400",
                                                },
                                              ),
                                              jsxRuntimeExports.jsx("span", {
                                                className: "font-extrabold",
                                                children:
                                                  "Dữ Liệu Đã Được Tự Động Sao Lưu Trên Mây!",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "font-medium text-slate-600 dark:text-slate-400",
                                            children: [
                                              "Do em đã bật ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "Tự động sao lưu lên mây (Auto-sync Cloud Backup)",
                                              }),
                                              ", bản sao lưu của toàn bộ ",
                                              Ie.length,
                                              " tài liệu quan trọng đã được đồng bộ an toàn lên đám mây từ trước đó. Mặc dù laptop bị búa đập vỡ nát, em vẫn có thể sử dụng bản sao lưu này để khôi phục nguyên vẹn dữ liệu sang máy mới!",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: Dt,
                                            disabled: be,
                                            className:
                                              "bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-5 sm:px-6 py-3 rounded-3xl transition-all flex items-center gap-1.5 cursor-pointer",
                                            children: be
                                              ? "Đang tải bản sao lưu từ đám mây..."
                                              : "Sử dụng bản sao lưu trên Mây để Khôi phục",
                                          }),
                                        ],
                                      }),
                                    U === "fail" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-red-50 text-red-800 dark:bg-red-950/20 dark:text-red-400 border border-red-200/50 space-y-2 animate-fadeIn text-sm sm:text-base font-medium",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                TriangleAlert,
                                                {
                                                  className:
                                                    "h-4 w-4 shrink-0 text-red-600",
                                                },
                                              ),
                                              jsxRuntimeExports.jsx("span", {
                                                className: "font-extrabold",
                                                children:
                                                  "DỮ LIỆU ĐÃ MẤT VĨNH VIỄN ❌",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-slate-600 dark:text-slate-400",
                                            children: [
                                              "Do em ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "tắt tính năng đồng bộ hóa/sao lưu đám mây",
                                              }),
                                              ", các tệp tin quan trọng chỉ tồn tại duy nhất trên ổ cứng vật lý của chiếc Laptop. Khi máy bị đập vỡ hỏng hoàn toàn, các tệp tài liệu này cũng biến mất vĩnh viễn và không cách nào khôi phục lại được!",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-700 dark:text-slate-300 font-bold",
                                            children:
                                              '💡 Hãy nhấn "Mua Laptop Mới / Sửa Laptop", sau đó bật "Tự động sao lưu lên mây" để bảo vệ an toàn dữ liệu nhé!',
                                          }),
                                        ],
                                      }),
                                    U === "restored" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-blue-50 text-blue-800 dark:bg-blue-950/20 dark:text-blue-400 border border-blue-200/50 space-y-3 animate-fadeIn text-sm sm:text-base font-medium",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                CircleCheck,
                                                {
                                                  className:
                                                    "h-4 w-4 shrink-0 text-blue-600",
                                                },
                                              ),
                                              jsxRuntimeExports.jsx("span", {
                                                className: "font-extrabold",
                                                children:
                                                  "Khôi Phục Bản Sao Lưu Thành Công!",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1 bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-blue-100 dark:border-slate-800",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-bold text-slate-400 block mb-1",
                                                children:
                                                  "Các tệp tin được kéo về nguyên vẹn từ bản sao lưu đám mây:",
                                              }),
                                              de.map((W, Me) =>
                                                jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        Check,
                                                        {
                                                          className:
                                                            "h-3.5 w-3.5 text-emerald-500",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        { children: W },
                                                      ),
                                                    ],
                                                  },
                                                  Me,
                                                ),
                                              ),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "font-medium text-slate-600 dark:text-slate-400",
                                            children: [
                                              "Tuyệt vời! Đây chính là ưu điểm cực kỳ quan trọng của tính năng ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "Sao lưu & Khôi phục (Backup & Restore)",
                                              }),
                                              " nhờ Điện toán đám mây.",
                                            ],
                                          }),
                                        ],
                                      }),
                                    !U &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-850/20 text-center text-sm sm:text-base font-medium text-slate-500 font-medium",
                                        children:
                                          '💡 Hãy nhấn nút "Dùng Búa Đập Vỡ Laptop!" màu đỏ để bắt đầu mô phỏng tai nạn phá hủy ổ cứng vật lý!',
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  b === "cost" &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-6 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-50 dark:bg-slate-850/20 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsxs("h5", {
                              className:
                                "font-bold text-sm sm:text-base font-medium text-slate-900 dark:text-white flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx(DollarSign, {
                                  className: "h-4 w-4 text-indigo-500",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Tại sao Điện toán đám mây giúp tiết kiệm chi phí khổng lồ?",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "mt-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-medium",
                              children: [
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Trải nghiệm thực tế:",
                                }),
                                " Tự xây dựng một phòng máy chủ riêng (Physical Server Room) đòi hỏi tiền mua thiết bị đắt đỏ, điều hòa làm mát chạy 24/7 và kỹ sư vận hành. Trái lại, Đám mây chỉ tính phí cho không gian thực tế em thuê. Hãy điều chỉnh dung lượng dữ liệu cần lưu trữ để xem bảng so sánh tiết kiệm!",
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-5 bg-slate-50 dark:bg-slate-850/40 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-extrabold text-indigo-600 uppercase tracking-wider block",
                                  children: "Yêu cầu dung lượng lưu trữ",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-2 p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between items-center text-sm sm:text-base font-bold",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-700 dark:text-slate-300",
                                          children: "Dung lượng dữ liệu:",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-blue-600 text-sm sm:text-base font-medium font-mono",
                                          children: [E, " GB"],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "range",
                                      min: "10",
                                      max: "2000",
                                      step: "10",
                                      value: E,
                                      onChange: (W) =>
                                        v(Number(W.target.value)),
                                      className:
                                        "w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-3xl appearance-none cursor-pointer accent-blue-600",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between text-[9px] font-bold text-slate-400",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "10 GB (Nhỏ)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "1,000 GB (1 TB)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "2,000 GB (Lớn)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-2.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-red-600 uppercase tracking-wider block",
                                      children:
                                        "Chi phí máy chủ vật lý truyền thống:",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "space-y-1.5 text-sm sm:text-base font-medium",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between p-8 sm:p-5 bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-950/20 rounded-3xl font-medium",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "flex items-center gap-1 text-slate-700 dark:text-slate-300",
                                              children: [
                                                jsxRuntimeExports.jsx(Server, {
                                                  className:
                                                    "h-3.5 w-3.5 text-red-500",
                                                }),
                                                " Thiết bị phần cứng máy chủ:",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "font-bold text-slate-900 dark:text-white",
                                              children: [
                                                "$",
                                                ye.hardware,
                                                " (Một lần)",
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between p-8 sm:p-5 bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-950/20 rounded-3xl font-medium",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "flex items-center gap-1 text-slate-700 dark:text-slate-300",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  CloudRain,
                                                  {
                                                    className:
                                                      "h-3.5 w-3.5 text-red-500",
                                                  },
                                                ),
                                                " Hệ thống điều hòa, tủ rack mát:",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "font-bold text-slate-900 dark:text-white",
                                              children: [
                                                "$",
                                                ye.aircon,
                                                " (Một lần)",
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between p-8 sm:p-5 bg-red-50/40 dark:bg-red-950/10 border border-red-100 dark:border-red-950/20 rounded-3xl font-medium",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "flex items-center gap-1 text-slate-700 dark:text-slate-300",
                                              children: [
                                                jsxRuntimeExports.jsx(Check, {
                                                  className:
                                                    "h-3.5 w-3.5 text-red-500",
                                                }),
                                                " Chi phí điện lực & kỹ thuật viên:",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "font-bold text-slate-900 dark:text-white",
                                              children: [
                                                "$",
                                                ye.itSupport,
                                                " / tháng",
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
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "lg:col-span-7 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 bg-white dark:bg-slate-900 flex flex-col justify-between",
                              children: jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-extrabold text-indigo-600 uppercase tracking-wider block",
                                    children: "Bảng So Sánh Chi Phí Thực Tế",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "Cách 1: Tự mua phòng máy chủ riêng (Vận hành 1 năm)",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-red-600 font-mono",
                                                children: ["$", Pe.localTotal],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
                                            children: jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                className:
                                                  "h-full bg-red-500 rounded-full",
                                                style: { width: "100%" },
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                            children: [
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "Cách 2: Thuê Điện toán đám mây (Thuê 1 năm cho ",
                                                  E,
                                                  " GB)",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-emerald-600 font-mono",
                                                children: ["$", Pe.cloudTotal],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",
                                            children: jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                className:
                                                  "h-full bg-emerald-500 rounded-full transition-all duration-300",
                                                style: {
                                                  width: `${Math.max(3, Math.min(100, (Pe.cloudTotal / Pe.localTotal) * 100))}%`,
                                                },
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-5 sm:p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-950/40 text-sm sm:text-base font-medium space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400",
                                        children: [
                                          jsxRuntimeExports.jsx(TrendingDown, {
                                            className:
                                              "h-4 w-4 shrink-0 text-indigo-500",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "font-extrabold text-sm sm:text-base font-medium",
                                            children:
                                              "Điện toán đám mây giúp em tiết kiệm bao nhiêu?",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-2 gap-3 pt-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "bg-white dark:bg-slate-900 p-8 sm:p-5 border border-slate-100 dark:border-slate-800 rounded-3xl",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-400 block",
                                                children:
                                                  "Tiết kiệm sau 6 tháng:",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-emerald-600 text-lg font-bold font-mono",
                                                children: ["$", Le.saved],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "bg-white dark:bg-slate-900 p-8 sm:p-5 border border-slate-100 dark:border-slate-800 rounded-3xl",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-400 block",
                                                children:
                                                  "Tiết kiệm sau 1 năm:",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-emerald-600 text-lg font-bold font-mono",
                                                children: ["$", Pe.saved],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 leading-relaxed font-semibold",
                                        children: [
                                          "💡 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Lợi ích vượt trội:",
                                          }),
                                          " Em không cần trả bất cứ khoản phí khổng lồ đầu vào nào ($0 ban đầu), chỉ thuê bao với giá khoảng ",
                                          jsxRuntimeExports.jsxs("strong", {
                                            children: ["$", H(E), " / tháng"],
                                          }),
                                          " dựa trên dữ liệu thật của em. Đây chính là đặc điểm cực mạnh của ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children:
                                              "Tiết kiệm chi phí (Cost Saving)",
                                          }),
                                          " trong giáo trình thi quốc tế.",
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
                    }),
                ],
              }),
            }),
          n === 2 &&
            jsxRuntimeExports.jsx("div", {
              className: "space-y-6",
              children: jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm space-y-6 text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-extrabold text-amber-600 uppercase tracking-widest block",
                        children: "Mô phỏng Trực quan Tương tác",
                      }),
                      jsxRuntimeExports.jsx("h3", {
                        className:
                          "text-xl font-black text-slate-900 dark:text-white",
                        children:
                          "Trải nghiệm & Đối mặt với 3 Nhược điểm của Đám mây",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed",
                        children:
                          "Để thấu hiểu sâu sắc vì sao chúng được coi là nhược điểm trong thực tế, em hãy trực tiếp kích hoạt các tình huống mô phỏng dưới đây:",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-2 border-b border-slate-100 dark:border-slate-800 pb-4",
                    children: [
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => ze("conn"),
                        className: `flex-1 py-3 px-5 sm:px-6 rounded-3xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${at === "conn" ? "bg-amber-500 border-amber-500 text-white shadow-sm" : "bg-slate-50 border-slate-250 dark:bg-slate-850/30 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(WifiOff, {
                            className: "h-4 w-4",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "1. Kết nối (Connectivity)",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => ze("sec"),
                        className: `flex-1 py-3 px-5 sm:px-6 rounded-3xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${at === "sec" ? "bg-amber-500 border-amber-500 text-white shadow-sm" : "bg-slate-50 border-slate-250 dark:bg-slate-850/30 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
                          jsxRuntimeExports.jsx("span", {
                            children: "2. Bảo mật (Security)",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("button", {
                        onClick: () => ze("desktop"),
                        className: `flex-1 py-3 px-5 sm:px-6 rounded-3xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border ${at === "desktop" ? "bg-amber-500 border-amber-500 text-white shadow-sm" : "bg-slate-50 border-slate-250 dark:bg-slate-850/30 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                        children: [
                          jsxRuntimeExports.jsx(Monitor, {
                            className: "h-4 w-4",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "3. Hỗ trợ MT Để bàn (Desktop)",
                          }),
                        ],
                      }),
                    ],
                  }),
                  at === "conn" &&
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "lg:col-span-5 space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 text-sm sm:text-base font-medium text-amber-800 dark:text-amber-400",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className: "font-bold mb-1",
                                  children: "Mô tả tình huống:",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "font-medium text-slate-600 dark:text-slate-400 leading-relaxed",
                                  children:
                                    "Làm việc trên các ứng dụng đám mây (như Google Docs, Office 365, Canva) đòi hỏi máy tính của em liên tục kết nối Internet ổn định. Hãy thử ngắt công tắc cáp mạng bên dưới và xem hậu quả!",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest block",
                                  children: "Công tắc kết nối Internet",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        De
                                          ? jsxRuntimeExports.jsx("div", {
                                              className:
                                                "h-10 w-10 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center shrink-0",
                                              children: jsxRuntimeExports.jsx(
                                                Wifi,
                                                {
                                                  className:
                                                    "h-5 w-5 text-emerald-600",
                                                },
                                              ),
                                            })
                                          : jsxRuntimeExports.jsx("div", {
                                              className:
                                                "h-10 w-10 bg-red-100 dark:bg-red-950/40 rounded-full flex items-center justify-center shrink-0",
                                              children: jsxRuntimeExports.jsx(
                                                WifiOff,
                                                {
                                                  className:
                                                    "h-5 w-5 text-red-600",
                                                },
                                              ),
                                            }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-800 dark:text-white block",
                                              children: [
                                                "Internet: ",
                                                De
                                                  ? "ĐANG KẾT NỐI (ONLINE)"
                                                  : "ĐÃ BỊ NGẮT (OFFLINE)",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 block font-medium",
                                              children:
                                                "Cáp quang FTTH tốc độ cao",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        const W = !De;
                                        (tt(W),
                                          ge(
                                            W
                                              ? (Me) => [
                                                  ...Me,
                                                  "[Hệ thống] Cáp mạng đã được cắm lại.",
                                                  "[Đồng bộ] Đang thiết lập lại đường truyền ổn định...",
                                                ]
                                              : (Me) => [
                                                  ...Me,
                                                  "[Hệ thống - CẢNH BÁO] Đã rút cáp mạng! Không có kết nối mạng Internet.",
                                                  "[Đồng bộ - LỖI] Mất kết nối đến Máy chủ Cloud.",
                                                ],
                                          ));
                                      },
                                      className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all shadow-sm cursor-pointer whitespace-nowrap text-center ${De ? "bg-red-600 hover:bg-red-700 text-white" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`,
                                      children: De
                                        ? "Ngắt Kết Nối Internet 🔌"
                                        : "Cắm Cáp Mạng Internet 🔌",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => {
                                if (!De) {
                                  ge((W) => [
                                    ...W,
                                    "[Sự cố] Không thể chỉnh sửa trực tuyến! Hãy bật Internet trước.",
                                  ]);
                                  return;
                                }
                                (oe(!0),
                                  ge((W) => [
                                    ...W,
                                    "[Hành động] Người dùng bấm: Chỉnh sửa bài tập lớn trực tiếp trên mây...",
                                    "[Đồng bộ] Đang cập nhật dữ liệu thời gian thực lên máy chủ Google Drive...",
                                  ]),
                                  setTimeout(() => {
                                    (oe(!1),
                                      ge((W) => [
                                        ...W,
                                        "[Thành công] Tệp tin đã được lưu tự động lên Đám mây.",
                                      ]));
                                  }, 1e3));
                              },
                              disabled: it,
                              className:
                                "w-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-sm sm:text-base font-medium py-3 px-5 sm:px-6 rounded-3xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer",
                              children: [
                                it
                                  ? jsxRuntimeExports.jsx(RefreshCw, {
                                      className: "h-4 w-4 animate-spin",
                                    })
                                  : jsxRuntimeExports.jsx(Cloud, {
                                      className: "h-4 w-4",
                                    }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Chỉnh sửa tài liệu học tập trực tuyến",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-7 flex flex-col border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-slate-900 text-slate-100 font-mono text-sm sm:text-base font-semibold h-[300px]",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 px-5 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between shrink-0",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-red-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-yellow-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-green-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "ml-2 text-sm sm:text-base font-bold text-slate-400",
                                      children:
                                        "GOOGLE DOCS EDITOR (Cloud Interface)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "flex items-center gap-1.5",
                                  children: De
                                    ? jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "flex items-center gap-1 text-sm sm:text-base font-semibold text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping",
                                          }),
                                          "ONLINE",
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("span", {
                                        className:
                                          "flex items-center gap-1 text-sm sm:text-base font-semibold text-red-400 font-bold bg-red-950/50 px-2 py-0.5 rounded border border-red-800",
                                        children: "OFFLINE",
                                      }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 p-5 sm:p-6 space-y-2 overflow-y-auto select-none font-mono",
                              children: [
                                ie.map((W, Me) => {
                                  let et = "text-slate-300";
                                  return (
                                    (W.includes("[CẢNH BÁO]") ||
                                      W.includes("[Sự cố]")) &&
                                      (et = "text-amber-400 font-bold"),
                                    W.includes("[LỖI]") &&
                                      (et = "text-red-400 font-bold"),
                                    W.includes("[Thành công]") &&
                                      (et = "text-emerald-400 font-bold"),
                                    W.includes("[Hành động]") &&
                                      (et = "text-blue-400"),
                                    jsxRuntimeExports.jsx(
                                      "div",
                                      {
                                        className: `leading-relaxed ${et}`,
                                        children: W,
                                      },
                                      Me,
                                    )
                                  );
                                }),
                                it &&
                                  jsxRuntimeExports.jsx("div", {
                                    className: "text-blue-300 animate-pulse",
                                    children:
                                      "> Đang truyền tải gói tin qua TCP/IP... (12% - 55% - 87%)...",
                                  }),
                                !De &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-red-950/20 text-red-400 p-8 sm:p-5 rounded-3xl border border-red-900/50 space-y-1 mt-4 animate-pulse",
                                    children: [
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "font-extrabold text-sm sm:text-base font-medium",
                                        children: "⚠️ MẤT KẾT NỐI INTERNET:",
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold leading-relaxed",
                                        children:
                                          "Hệ thống đã bị treo. Bạn không thể nhập ký tự mới, tệp tin không thể tự động lưu, mọi thao tác soạn thảo bị đình chỉ ngay lập tức do thiếu Connectivity.",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  at === "sec" &&
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "lg:col-span-5 space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 text-sm sm:text-base font-medium text-amber-800 dark:text-amber-400",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className: "font-bold mb-1",
                                  children: "Mô tả tình huống:",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "font-medium text-slate-600 dark:text-slate-400 leading-relaxed",
                                  children:
                                    "Đưa dữ liệu lên Đám mây đồng nghĩa với việc nó trực tiếp nằm trên máy chủ công cộng. Nếu em dùng mật khẩu quá đơn giản và không bật Xác thực 2 yếu tố (2FA), hacker có thể bẻ khóa tài khoản cực nhanh và lấy trộm toàn bộ tài liệu của em.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest block",
                                  children: "Cấu hình Đăng Nhập Cloud",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1.5",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                          children:
                                            "Nhập mật khẩu tự thiết lập:",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className: `text-sm sm:text-base font-bold px-2 py-0.5 rounded-full border ${evaluatePassword(ae).color}`,
                                          children: evaluatePassword(ae).label,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "text",
                                      value: ae,
                                      onChange: (W) => {
                                        (Ae(W.target.value),
                                          w((Me) => [
                                            ...Me,
                                            `[Thay đổi] Đã nhập mật khẩu mới: "${W.target.value}"`,
                                          ]),
                                          Ke("idle"));
                                      },
                                      placeholder: "Nhập mật khẩu của em...",
                                      className:
                                        "w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold focus:outline-none focus:border-amber-500",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex flex-wrap gap-1.5 pt-1",
                                      children: [
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => {
                                            (Ae("123456"),
                                              w((W) => [
                                                ...W,
                                                '[Thay đổi] Đặt mật khẩu mẫu: "123456" (Rất yếu)',
                                              ]),
                                              Ke("idle"));
                                          },
                                          className:
                                            "px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300 cursor-pointer",
                                          children: "Mẫu yếu (123456)",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => {
                                            (Ae("hoanglong_2015"),
                                              w((W) => [
                                                ...W,
                                                '[Thay đổi] Đặt mật khẩu mẫu: "hoanglong_2015" (Trung bình)',
                                              ]),
                                              Ke("idle"));
                                          },
                                          className:
                                            "px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300 cursor-pointer",
                                          children:
                                            "Mẫu trung bình (hoanglong_2015)",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => {
                                            (Ae("Xy9#pQ@2mK$"),
                                              w((W) => [
                                                ...W,
                                                '[Thay đổi] Đặt mật khẩu mẫu: "Xy9#pQ@2mK$" (Rất mạnh)',
                                              ]),
                                              Ke("idle"));
                                          },
                                          className:
                                            "px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300 cursor-pointer",
                                          children: "Mẫu mạnh (Xy9#pQ@2mK$)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("label", {
                                  className:
                                    "flex items-center gap-2.5 p-8 sm:p-5 bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-3xl cursor-pointer select-none",
                                  children: [
                                    jsxRuntimeExports.jsx("input", {
                                      type: "checkbox",
                                      checked: $e,
                                      onChange: (W) => {
                                        const Me = W.target.checked;
                                        (_e(Me),
                                          w((et) => [
                                            ...et,
                                            Me
                                              ? "[Rò rỉ] CẢNH BÁO: Vô tình để lộ mật khẩu! (Qua link lừa đảo Phishing, dán note màn hình, lộ ảnh chụp...)."
                                              : "[Bảo mật] Đã thu hồi sự cố lộ mật khẩu.",
                                            Me
                                              ? "[Cảnh báo] LƯU Ý: Một khi đã bị rò rỉ, bất kỳ ai cũng có thể biết mật khẩu của em lập tức. Dù mật khẩu mạnh đến mấy cũng trở nên vô dụng!"
                                              : "[Bảo mật] Đã phục hồi độ tin cậy mật khẩu.",
                                          ]),
                                          Ke("idle"));
                                      },
                                      className:
                                        "h-4 w-4 rounded border-red-300 text-red-600 focus:ring-red-500 cursor-pointer",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-red-600 dark:text-red-400 block",
                                          children: "Vô tình để lộ mật khẩu ⚠️",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-500 dark:text-slate-400 block font-medium",
                                          children:
                                            "Bị dụ bấm link lừa đảo Phishing hoặc lộ ảnh màn hình",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("label", {
                                  className:
                                    "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl cursor-pointer select-none",
                                  children: [
                                    jsxRuntimeExports.jsx("input", {
                                      type: "checkbox",
                                      checked: Q,
                                      onChange: (W) => {
                                        const Me = W.target.checked;
                                        (Te(Me),
                                          w((et) => [
                                            ...et,
                                            Me
                                              ? "[Bảo mật] Đã BẬT tính năng Xác thực 2 lớp (2FA)."
                                              : "[Cảnh báo] Đã TẮT Xác thực 2 lớp.",
                                          ]),
                                          Ke("idle"));
                                      },
                                      className:
                                        "h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-800 dark:text-white block",
                                          children:
                                            "Kích hoạt Xác thực 2 lớp (2FA)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 block font-medium",
                                          children:
                                            "Bắt buộc nhập mã OTP gửi về điện thoại di động",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-slate-100 dark:bg-slate-950/50 rounded-3xl border border-slate-200 dark:border-slate-800/80 space-y-1 text-sm sm:text-base font-medium",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-wider block",
                                      children: "ƯỚC TÍNH THỜI GIAN BẺ KHÓA",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-2 w-2 rounded-full bg-amber-500",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: $e
                                            ? "Tức thì (0.01 giây) - Do mật khẩu đã bị rò rỉ!"
                                            : evaluatePassword(ae).time,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => {
                                Ke("hacking");
                                const W = evaluatePassword(ae),
                                  Me = $e
                                    ? "Tức thì (0.01 giây) - do bị lộ"
                                    : W.time;
                                (w([
                                  "[Hành động] Kích hoạt mô phỏng Hacker tấn công tài khoản của em...",
                                  "[Hacker] Đang thu thập địa chỉ email Cloud...",
                                  $e
                                    ? "[Hacker] PHÁT HIỆN MẬT KHẨU ĐÃ BỊ RÒ RỈ! Do em vô tình để lộ (Phishing/giấy note/chia sẻ), Hacker và NGƯỜI LẠ đều biết mật khẩu ngay lập tức."
                                    : "[Hacker] Chạy tool bẻ khóa Brute Force, dò quét 100,000 cụm mật khẩu mỗi giây...",
                                  $e
                                    ? `[Hacker] Sử dụng trực tiếp mật khẩu đã thu thập được: "${ae}" để đăng nhập.`
                                    : `[Hacker] Độ mạnh mật khẩu phát hiện: ${W.label.toUpperCase()}`,
                                  $e
                                    ? "[Cảnh báo] Khi mật khẩu bị lộ, độ mạnh mật khẩu trở nên vô nghĩa! Dù đặt mật khẩu mạnh đến đâu cũng vô dụng."
                                    : `[Hacker] Thời gian bẻ khóa: ${Me}`,
                                ]),
                                  setTimeout(() => {
                                    $e ||
                                    W.strength === "weak" ||
                                    W.strength === "medium"
                                      ? (w(
                                          $e
                                            ? (Je) => [
                                                ...Je,
                                                `[Hacker] Đăng nhập thành công TỨC THÌ! Hacker sử dụng mật khẩu rò rỉ "${ae}".`,
                                                "[Cảnh báo nghiêm trọng] Khi em vô tình lộ mật khẩu, không chỉ hacker và người lạ đều có thể đọc được và đăng nhập dễ dàng, cho dù em có thiết lập mật khẩu siêu mạnh và phức tạp đến đâu đi nữa!",
                                              ]
                                            : (Je) => [
                                                ...Je,
                                                `[Hacker] Bẻ khóa thành công sau ${W.time}! Mật khẩu "${ae}" quá yếu.`,
                                              ],
                                        ),
                                        Q
                                          ? (Ke("defended"),
                                            w((Je) => [
                                              ...Je,
                                              "[Hệ thống Cloud] Phát hiện đăng nhập từ IP lạ. Yêu cầu nhập mã OTP gửi về điện thoại!",
                                              "[Hacker] Thất bại! Hacker không thể vượt qua hàng rào OTP lớp thứ hai.",
                                              "[Bảo vệ] Tài khoản Cloud của em được bảo vệ an toàn nhờ có 2FA! 🔒",
                                            ]))
                                          : (Ke("hacked"),
                                            w((Je) => [
                                              ...Je,
                                              "[Cảnh báo] Tài khoản bị truy cập trái phép hoàn toàn! Không có 2FA cản đường.",
                                              "[Mất dữ liệu] Hacker đã tải hết tài liệu mật và xóa sạch tệp tin của em trên mây! 😱",
                                            ])))
                                      : (w((Je) => [
                                          ...Je,
                                          "[Hacker] Thất bại! Brute force không hiệu quả đối với mật khẩu bảo mật cao.",
                                          `[Hacker] Cần ít nhất ${W.time} để hoàn tất dò quét.`,
                                          "[Bảo vệ] Tài khoản của em an toàn tuyệt đối nhờ mật khẩu cực mạnh! 🔒",
                                        ]),
                                        Ke("defended"));
                                  }, 2e3));
                              },
                              disabled: Ue === "hacking",
                              className:
                                "w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base font-medium py-3 px-5 sm:px-6 rounded-3xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 hover:scale-103 transition-all disabled:bg-slate-400",
                              children: [
                                jsxRuntimeExports.jsx(ShieldAlert, {
                                  className: "h-4 w-4",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: "⚡ Mô Phỏng Hacker Tấn Công",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-7 flex flex-col border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-slate-950 text-slate-100 font-mono text-sm sm:text-base font-semibold h-[340px]",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-900 px-5 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between shrink-0",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-red-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-yellow-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-green-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "ml-2 text-sm sm:text-base font-bold text-slate-400",
                                      children:
                                        "CYBER SECURITY PENETRATION LAB",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    Ue === "hacking" &&
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-yellow-400 font-bold animate-pulse",
                                        children: "⚡ ATTACKING...",
                                      }),
                                    Ue === "hacked" &&
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-red-500 font-extrabold animate-bounce",
                                        children: "🚨 COMPROMISED",
                                      }),
                                    Ue === "defended" &&
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-emerald-400 font-bold",
                                        children: "🛡️ PROTECTED",
                                      }),
                                    Ue === "idle" &&
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400",
                                        children: "READY",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 p-5 sm:p-6 space-y-2 overflow-y-auto font-mono",
                              children: [
                                ot.map((W, Me) => {
                                  let et = "text-slate-300";
                                  return (
                                    (W.includes("[Thay đổi]") ||
                                      W.includes("[Bảo mật]")) &&
                                      (et = "text-blue-400"),
                                    W.includes("[Hacker]") &&
                                      !W.includes("Thất bại") &&
                                      (et = "text-red-400"),
                                    W.includes("[Rò rỉ]") &&
                                      (et = "text-amber-400 font-bold"),
                                    (W.includes("Thất bại") ||
                                      W.includes("[Bảo vệ]") ||
                                      W.includes("an toàn")) &&
                                      (et = "text-emerald-400 font-bold"),
                                    (W.includes("[Cảnh báo]") ||
                                      W.includes("[Mất dữ liệu]")) &&
                                      (et =
                                        "text-red-500 font-extrabold animate-pulse"),
                                    jsxRuntimeExports.jsx(
                                      "div",
                                      {
                                        className: `leading-relaxed ${et}`,
                                        children: W,
                                      },
                                      Me,
                                    )
                                  );
                                }),
                                Ue === "hacking" &&
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-yellow-400 font-bold animate-pulse",
                                    children:
                                      "> Đang bẻ khóa bảo mật, gửi hàng nghìn requests/giây...",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  at === "desktop" &&
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "lg:col-span-5 space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 text-sm sm:text-base font-medium text-amber-800 dark:text-amber-400",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className: "font-bold mb-1",
                                  children: "Mô tả tình huống:",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "font-medium text-slate-600 dark:text-slate-400 leading-relaxed",
                                  children:
                                    'Điện toán đám mây được thiết kế để chạy trên mọi thiết bị (điện thoại, máy tính bảng, laptop) qua trình duyệt web. Chính vì "đa năng" như vậy nên nó không tối ưu riêng cho máy tính để bàn. Nhiều phần mềm chạy trên đám mây (bản web) sẽ bị cắt bớt tính năng, không mượt và mạnh mẽ bằng phần mềm cài đặt trực tiếp vào ổ cứng máy tính.',
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest block",
                                  children:
                                    "Chọn phiên bản phần mềm để kiểm tra:",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (Ee("cloud"),
                                          We("idle"),
                                          lt(60),
                                          xt("idle"),
                                          rt([
                                            "[Hệ thống] Đang xem ứng dụng Bản Đám Mây (Web App).",
                                            "[Đặc tính] Chạy trên mọi thiết bị (Điện thoại, Tablet, Laptop) qua Trình duyệt Web.",
                                            "[Nhấn] Click thử các nút gửi File/Thư mục Zalo bên dưới.",
                                          ]));
                                      },
                                      className: `p-8 sm:p-5 rounded-3xl border transition-all text-left flex flex-col justify-between cursor-pointer ${C === "cloud" ? "border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 shadow-sm" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100"}`,
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5 mb-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Cloud, {
                                              className: "h-4 w-4 text-sky-500",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-bold",
                                              children: "1. Bản Đám Mây",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 block font-medium leading-tight",
                                          children:
                                            "Web App đa năng, chạy qua trình duyệt trên mọi thiết bị.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (Ee("native"),
                                          We("idle"),
                                          lt(60),
                                          xt("idle"),
                                          rt([
                                            "[Hệ thống] Đang xem ứng dụng Bản Cài Đặt Cục Bộ (Native App).",
                                            "[Đặc tính] Cài trực tiếp vào ổ cứng, tối ưu hóa riêng cho tài nguyên máy tính để bàn.",
                                            "[Nhấn] Click thử các nút gửi File/Thư mục Zalo bên dưới.",
                                          ]));
                                      },
                                      className: `p-8 sm:p-5 rounded-3xl border transition-all text-left flex flex-col justify-between cursor-pointer ${C === "native" ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-200 shadow-sm" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100"}`,
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5 mb-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Monitor, {
                                              className:
                                                "h-4 w-4 text-indigo-500",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-bold",
                                              children: "2. Bản Cài Đặt PC",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 block font-medium leading-tight",
                                          children:
                                            "Cài trực tiếp vào ổ cứng, chuyên dụng cho máy tính để bàn.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 border border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest block",
                                  children:
                                    "Thử Nghiệm Tính Năng Zalo Web vs Zalo PC:",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 leading-tight",
                                  children: [
                                    "Bấm thử các nút dưới đây để mô phỏng truyền tải File/Thư mục trên ",
                                    C === "cloud" ? "Zalo Web" : "Zalo PC",
                                    ":",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        (xt("file"),
                                          rt(
                                            C === "cloud"
                                              ? (W) => [
                                                  ...W,
                                                  '[Zalo Web] 📄 Đã gửi tập tin "Bao_Cao.pdf" thành công qua đường truyền trình duyệt!',
                                                ]
                                              : (W) => [
                                                  ...W,
                                                  '[Zalo PC] 📄 Đã gửi tập tin "Bao_Cao.pdf" thành công từ ổ cứng cục bộ!',
                                                ],
                                          ));
                                      },
                                      className:
                                        "py-3 px-5 sm:px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base font-semibold rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all flex items-center justify-center gap-1 cursor-pointer",
                                      children: "📄 Gửi Tập Tin",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => {
                                        C === "cloud"
                                          ? (xt("folder-error"),
                                            rt((W) => [
                                              ...W,
                                              "[Zalo Web] ❌ LỖI: Trình duyệt Web chỉ cho phép gửi tập tin đơn lẻ, KHÔNG hỗ trợ gửi cả Thư mục!",
                                              "[Giải thích] Sandbox bảo mật của trình duyệt chặn quyền đọc toàn bộ cây thư mục từ ổ cứng máy tính.",
                                            ]))
                                          : (xt("folder-success"),
                                            rt((W) => [
                                              ...W,
                                              '[Zalo PC] 📂 GỬI THƯ MỤC THÀNH CÔNG: Đã quét và truyền tải trọn vẹn thư mục "Project_Lab13" (gồm 35 tệp tin) thành công!',
                                              "[Giải thích] Phần mềm cài trên Desktop có đầy đủ quyền tương tác hệ điều hành và hệ thống tệp cục bộ.",
                                            ]));
                                      },
                                      className:
                                        "py-3 px-5 sm:px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base font-semibold rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all flex items-center justify-center gap-1 cursor-pointer",
                                      children: "📂 Gửi Thư Mục",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-7 flex flex-col border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-slate-900 text-slate-100 font-mono text-sm sm:text-base font-semibold h-[360px]",
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: `px-5 sm:px-6 py-3 flex items-center justify-between text-white font-sans font-bold shrink-0 ${C === "cloud" ? "bg-amber-700" : "bg-indigo-700"}`,
                              children: jsxRuntimeExports.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                  C === "cloud"
                                    ? jsxRuntimeExports.jsx(Cloud, {
                                        className: "h-4 w-4",
                                      })
                                    : jsxRuntimeExports.jsx(Monitor, {
                                        className: "h-4 w-4",
                                      }),
                                  jsxRuntimeExports.jsx("span", {
                                    children:
                                      C === "cloud"
                                        ? "BẢN ĐÁM MÂY (Chạy qua Trình duyệt Web)"
                                        : "BẢN CÀI ĐẶT CỤC BỘ (Cài vào Ổ cứng PC)",
                                  }),
                                ],
                              }),
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-8 sm:p-5 bg-slate-950 border-b border-slate-800 grid grid-cols-3 gap-2.5 shrink-0",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900/80 p-8 sm:p-5 rounded-3xl border border-slate-800 text-center space-y-0.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-slate-400 font-bold block uppercase",
                                      children: "Độ Mượt Mà",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "flex justify-center items-center gap-1",
                                      children: jsxRuntimeExports.jsx("span", {
                                        className: `text-sm sm:text-base font-extrabold ${C === "cloud" ? "text-amber-400" : "text-emerald-400"}`,
                                        children:
                                          C === "cloud"
                                            ? "Trung Bình"
                                            : "Tối Đa",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: `text-[8px] block ${C === "cloud" ? "text-amber-500 font-semibold" : "text-emerald-500 font-semibold"}`,
                                      children:
                                        C === "cloud"
                                          ? "Có thể sụt FPS 🟡"
                                          : "Khóa 60 FPS mượt mà 🟢",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900/80 p-8 sm:p-5 rounded-3xl border border-slate-800 text-center space-y-0.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-slate-400 font-bold block uppercase",
                                      children: "Tính Năng Hỗ Trợ",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-sm sm:text-base font-extrabold text-white",
                                      children:
                                        C === "cloud"
                                          ? "Bị Cắt Bớt"
                                          : "Đầy Đủ 100%",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-slate-400 block font-medium",
                                      children:
                                        C === "cloud"
                                          ? "Chỉ hỗ trợ cơ bản ⚠️"
                                          : "Toàn bộ công cụ nâng cao ✅",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900/80 p-8 sm:p-5 rounded-3xl border border-slate-800 text-center space-y-0.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-slate-400 font-bold block uppercase",
                                      children: "Tận Dụng GPU",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-sm sm:text-base font-extrabold text-white",
                                      children:
                                        C === "cloud"
                                          ? "Hạn Chế (Web)"
                                          : "Tối Đa (Native)",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[8px] text-slate-400 block font-medium",
                                      children:
                                        C === "cloud"
                                          ? "Bị nghẽn bởi Chrome"
                                          : "Trực tiếp card đồ họa",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-8 sm:p-5 bg-slate-950 border-b border-slate-850 flex flex-col gap-2 shrink-0 font-sans",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between border-b border-slate-800 pb-1.5",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-extrabold text-sm sm:text-base font-semibold",
                                          children: "Z",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-bold block text-white leading-tight",
                                              children:
                                                C === "cloud"
                                                  ? "Zalo Web (Bản Trình Duyệt)"
                                                  : "Zalo PC (Bản Cài Đặt Máy Tính)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8px] text-slate-400 block leading-none",
                                              children:
                                                C === "cloud"
                                                  ? "URL: chat.zalo.me"
                                                  : "Ứng dụng cục bộ cài đặt",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: `text-[8px] font-bold px-1.5 py-0.5 rounded ${C === "cloud" ? "bg-amber-950/40 text-amber-400 border border-amber-900/50" : "bg-emerald-950/40 text-emerald-400 border border-emerald-900/50"}`,
                                      children:
                                        C === "cloud"
                                          ? "GIỚI HẠN WEB SANDBOX"
                                          : "ĐẦY ĐỦ QUYỀN HỆ THỐNG",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900 rounded-3xl p-8 sm:p-5 border border-slate-800 text-sm sm:text-base font-semibold space-y-1.5",
                                  children: [
                                    yt === "idle" &&
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-slate-400 leading-relaxed font-medium",
                                        children: [
                                          "💬 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Hệ thống Zalo:",
                                          }),
                                          " Chào mừng em! Hãy click nút ",
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-blue-400 font-bold",
                                            children: "Gửi Tập Tin",
                                          }),
                                          " hoặc ",
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-indigo-400 font-bold",
                                            children: "Gửi Thư Mục",
                                          }),
                                          " ở cột điều khiển bên trái để mô phỏng tương tác thực tế.",
                                        ],
                                      }),
                                    yt === "file" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-start gap-2 text-emerald-400 animate-fadeIn font-medium",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-4 w-4 shrink-0 text-emerald-400 mt-0.5",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: "font-bold",
                                                children:
                                                  "Đồng ý gửi tệp tin thành công!",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-slate-300 text-[9px] mt-0.5",
                                                children: [
                                                  '📄 Đã tải lên và gửi tệp tin "Bao_Cao.pdf" ( dung lượng 1.2 MB ) thành công trên ',
                                                  C === "cloud"
                                                    ? "Zalo Web"
                                                    : "Zalo PC",
                                                  ".",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    yt === "folder-error" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-start gap-2 text-red-400 animate-fadeIn font-medium",
                                        children: [
                                          jsxRuntimeExports.jsx(TriangleAlert, {
                                            className:
                                              "h-4 w-4 shrink-0 text-red-400 mt-0.5",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-bold text-red-500",
                                                children:
                                                  "❌ LỖI TRUY CẬP: TRÌNH DUYỆT CHẶN GỬI THƯ MỤC!",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-slate-300 text-[9px] mt-1 leading-relaxed",
                                                children: [
                                                  "Khi dùng ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Zalo trên Web (Bản Đám mây)",
                                                    },
                                                  ),
                                                  ", trình duyệt web hoạt động trong môi trường cô lập bảo mật (Sandbox). Trình duyệt chỉ được phép chọn tệp đơn lẻ, **không thể gửi trực tiếp cả Thư mục**. Muốn gửi thư mục, em phải nén lại thành file zip trước hoặc cài đặt Zalo PC.",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    yt === "folder-success" &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-start gap-2 text-emerald-400 animate-fadeIn font-medium",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-4 w-4 shrink-0 text-emerald-400 mt-0.5",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-bold text-emerald-400",
                                                children:
                                                  "📂 GỬI THƯ MỤC THÀNH CÔNG TRỰC TIẾP!",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-slate-300 text-[9px] mt-1 leading-relaxed",
                                                children: [
                                                  "Khi dùng ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Zalo Desktop (Bản Cài đặt PC)",
                                                    },
                                                  ),
                                                  ' cài trực tiếp vào ổ cứng, ứng dụng có toàn quyền truy cập tài nguyên của hệ điều hành. Em có thể kéo thả và gửi trực tiếp trọn vẹn cả Thư mục "Project_Lab13" (gồm 35 tệp tin bên trong) vô cùng dễ dàng!',
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
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "flex-1 p-8 sm:p-5 space-y-1.5 overflow-y-auto font-mono text-[9px] bg-slate-950",
                              children: Fe.map((W, Me) => {
                                let et = "text-slate-400";
                                return (
                                  (W.includes("[Cảnh báo]") ||
                                    W.includes("[Hạn chế]")) &&
                                    (et = "text-amber-400 font-semibold"),
                                  W.includes("[Sát hạch]") &&
                                    (et = "text-blue-400"),
                                  (W.includes("sụt giảm") ||
                                    W.includes("giật lag") ||
                                    W.includes("🔴") ||
                                    W.includes("❌")) &&
                                    (et = "text-red-400 font-bold"),
                                  (W.includes("mượt mà") ||
                                    W.includes("[Kết quả]") ||
                                    W.includes("🟢") ||
                                    W.includes("thành công") ||
                                    W.includes("THÀNH CÔNG")) &&
                                    (et = "text-emerald-400 font-bold"),
                                  jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: `leading-relaxed ${et}`,
                                      children: W,
                                    },
                                    Me,
                                  )
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            }),
        ],
      });
    }

    return Lab11;
  };
})();
