/**
 * Lab 08: Phương thức Đưa File/App
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab08 = window.AGY_LABS[8] = function (env) {
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

    function Lab9({ onSuccess: a }) {
      const [n, i] = reactExports.useState("simulator"),
        [l, c] = reactExports.useState(1),
        [d, m] = reactExports.useState([]),
        [u, g] = reactExports.useState(
          TERMS$1.map((D) => ({ termId: D.id, definition: null })),
        ),
        [p, f] = reactExports.useState(null),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState({}),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState(null),
        [L, le] = reactExports.useState(["Trang Chủ"]),
        [P, G] = reactExports.useState("Trang Chủ"),
        [ee, ce] = reactExports.useState(1),
        V = {
          "Trang Chủ": ["Tin Học", "Công Nghệ", "Giải Trí"],
          "Tin Học": ["IC3 GS6", "Lập Trình Web", "Tin Học Văn Phòng"],
          "IC3 GS6": ["Bài Học Lý Thuyết", "Lab Thực Hành", "Thi Thử Quốc Tế"],
          "Bài Học Lý Thuyết": [
            "Bài 1: Hệ Điều Hành",
            "Bài 2: Mạng Máy Tính",
            "Bài 3: Bản Quyền Số",
          ],
          "Lab Thực Hành": ["Lab 1 đến 8", "Lab 9: Ghép Nối & Dịch Vụ Mạng"],
          "Lập Trình Web": [
            "Khóa Học HTML/CSS",
            "Khóa Học Javascript",
            "Khóa Học ReactJS",
          ],
          "Công Nghệ": [
            "Điện Thoại Thông Minh",
            "Trí Tuệ Nhân Tạo (AI)",
            "Internet Vạn Vật (IoT)",
          ],
          "Giải Trí": ["Game Vui Học Tập", "Xem Video Khoa Học"],
        },
        [pe, Ie] = reactExports.useState("Viettel"),
        [se, de] = reactExports.useState("Cáp Quang FTTH"),
        [_, U] = reactExports.useState(!1),
        [Z, be] = reactExports.useState(null),
        [he, E] = reactExports.useState(0),
        [v, K] = reactExports.useState(() => {
          try {
            const D = localStorage.getItem("lab9_cart_items");
            return D ? JSON.parse(D) : [];
          } catch {
            return [];
          }
        }),
        [te, je] = reactExports.useState(() => {
          const D = localStorage.getItem("lab9_site_theme");
          return D === "Tối" || D === "Sáng" ? D : "Sáng";
        }),
        [Se, He] = reactExports.useState(
          () => localStorage.getItem("lab9_user_nickname") || "",
        ),
        [Xe, Qe] = reactExports.useState({}),
        [qe, at] = reactExports.useState(
          () => localStorage.getItem("lab9_is_logged_in") === "true",
        ),
        [ze, De] = reactExports.useState(
          () => localStorage.getItem("lab9_logged_in_user") || "",
        ),
        [tt, it] = reactExports.useState(""),
        [oe, ie] = reactExports.useState(!1),
        [ge, ae] = reactExports.useState("shop"),
        [Ae, Q] = reactExports.useState(
          () => localStorage.getItem("lab9_allow_3rd_party") !== "false",
        ),
        [Te, $e] = reactExports.useState(
          () => localStorage.getItem("lab9_last_viewed") || "",
        ),
        [_e, Ue] = reactExports.useState("login");
      reactExports.useEffect(() => {
        try {
          (localStorage.setItem("lab9_cart_items", JSON.stringify(v)),
            localStorage.setItem("lab9_site_theme", te),
            localStorage.setItem("lab9_user_nickname", Se),
            localStorage.setItem("lab9_is_logged_in", qe ? "true" : "false"),
            localStorage.setItem("lab9_logged_in_user", ze),
            localStorage.setItem("lab9_last_viewed", Te),
            localStorage.setItem(
              "lab9_allow_3rd_party",
              Ae ? "true" : "false",
            ));
        } catch (Re) {
          console.error(Re);
        }
        const D = {};
        (v.length > 0 && (D.cart_items = JSON.stringify(v)),
          te === "Tối" && (D.site_theme = "Tối"),
          Se.trim() && (D.user_nickname = Se),
          qe &&
            ((D.is_logged_in = "true"),
            (D.logged_in_user = ze),
            (D.session_token = "token_auth_class6_abc123")),
          Ae &&
            Te &&
            ((D["3rd_party_tracker_uid"] = "tr_uid_9988_6th_grader"),
            (D["3rd_party_last_visited_prod"] = Te)),
          Qe(D));
      }, [v, te, Se, qe, ze, Te, Ae]);
      const [Ke, ot] = reactExports.useState(
          "Chào Mừng Bạn Đến Với Học Viện IC3!",
        ),
        [w, C] = reactExports.useState(
          "Đây là trang web tĩnh được viết bằng HTML kết hợp Tailwind CSS.",
        ),
        [Ee, ke] = reactExports.useState("Bấm Vào Tôi!"),
        [We, ht] = reactExports.useState("bg-blue-600"),
        [lt, Fe] = reactExports.useState(0),
        [rt, yt] = reactExports.useState("ic3-academy.edu.vn"),
        [xt, ve] = reactExports.useState("idle"),
        [Ye, mt] = reactExports.useState([]),
        [Dt, ye] = reactExports.useState(""),
        H = {
          "ic3-academy.edu.vn": "103.155.60.22",
          "google.com": "142.250.190.46",
          "vnexpress.net": "111.65.250.2",
          "facebook.com": "157.240.22.35",
        };
      reactExports.useEffect(() => {
        (me(), a());
      }, []);
      const me = () => {
          const D = [...DEFINITIONS$1].sort(() => Math.random() - 0.5);
          (m(D),
            g(TERMS$1.map((Re) => ({ termId: Re.id, definition: null }))),
            f(null),
            k(!1),
            M({}),
            I(!1));
        },
        Le = (D) => {
          if (L.includes(D)) {
            const Re = L.indexOf(D);
            le(L.slice(0, Re + 1));
          } else le([...L, D]);
          (G(D), ce((Re) => Re + 1));
        },
        Pe = (D) => {
          const Re = L[D];
          (le(L.slice(0, D + 1)), G(Re), ce((Ve) => Ve + 1));
        },
        W = () => {
          if (_) return;
          (U(!0), be(null), E(0));
          const D = setInterval(() => {
            E((Re) => {
              if (Re >= 100) {
                clearInterval(D);
                let Ve = 0,
                  Ge = 0,
                  Ze = 0;
                return (
                  se === "ADSL Đồng"
                    ? ((Ve = Number((Math.random() * 5 + 10).toFixed(1))),
                      (Ge = Number((Math.random() * 2 + 1).toFixed(1))),
                      (Ze = Math.floor(Math.random() * 15 + 30)))
                    : se === "Cáp Quang FTTH"
                      ? ((Ve = Number((Math.random() * 150 + 150).toFixed(1))),
                        (Ge = Number((Math.random() * 100 + 150).toFixed(1))),
                        (Ze = Math.floor(Math.random() * 4 + 2)))
                      : ((Ve = Number((Math.random() * 400 + 400).toFixed(1))),
                        (Ge = Number((Math.random() * 50 + 50).toFixed(1))),
                        (Ze = Math.floor(Math.random() * 10 + 12))),
                  be({ download: Ve, upload: Ge, ping: Ze }),
                  U(!1),
                  100
                );
              }
              return Re + 10;
            });
          }, 150);
        },
        Me = (D) => {
          ($e(D), v.includes(D) ? K(v.filter((Re) => Re !== D)) : K([...v, D]));
        },
        et = () => {
          (K([]), je("Sáng"), He(""), at(!1), De(""), it(""), $e(""), Qe({}));
          try {
            (localStorage.removeItem("lab9_cart_items"),
              localStorage.removeItem("lab9_site_theme"),
              localStorage.removeItem("lab9_user_nickname"),
              localStorage.removeItem("lab9_is_logged_in"),
              localStorage.removeItem("lab9_logged_in_user"),
              localStorage.removeItem("lab9_last_viewed"),
              localStorage.removeItem("lab9_allow_3rd_party"));
          } catch (D) {
            console.error(D);
          }
        },
        Je = (D) => {
          (D.preventDefault(),
            tt.trim() && (at(!0), De(tt.trim()), He(tt.trim()), it("")));
        },
        Et = () => {
          (at(!1),
            De(""),
            localStorage.removeItem("lab9_is_logged_in"),
            localStorage.removeItem("lab9_logged_in_user"));
        },
        ft = () => {
          (ie(!0),
            setTimeout(() => {
              ie(!1);
            }, 800));
        },
        Mt = () => {
          if (xt !== "idle") return;
          const D = rt.trim().toLowerCase();
          (ve("searching_cache"),
            mt([
              "[Trình Duyệt]: Đang tìm trong bộ nhớ tạm (Browser Cache) cục bộ...",
            ]),
            setTimeout(() => {
              (ve("query_root"),
                mt((Re) => [
                  ...Re,
                  "❌ Không tìm thấy trong cache cục bộ!",
                  "[Trình Duyệt]: Gửi yêu cầu truy vấn đến Root Server (.)",
                ]),
                setTimeout(() => {
                  ve("query_tld");
                  const Re = D.endsWith(".vn")
                    ? "TLD .vn Server"
                    : "TLD .com Server";
                  (mt((Ve) => [
                    ...Ve,
                    `✓ Root Server phản hồi! Chuyển hướng yêu cầu tới ${Re}...`,
                  ]),
                    setTimeout(() => {
                      (ve("query_auth"),
                        mt((Ve) => [
                          ...Ve,
                          `✓ ${Re} phản hồi! Chuyển tiếp tới máy chủ ủy quyền (Authoritative Server) của tên miền...`,
                        ]),
                        setTimeout(() => {
                          const Ve =
                            H[D] ||
                            "103.24.120." + Math.floor(Math.random() * 254 + 1);
                          (ye(Ve),
                            ve("resolved"),
                            mt((Ge) => [
                              ...Ge,
                              `✓ [DNS Server]: Đã ánh xạ tên miền "${D}" thành công thành địa chỉ IP vật lý: ${Ve}`,
                              `[Trình Duyệt]: 🚀 Đang kết xuất tài nguyên từ máy chủ IP ${Ve} để hiển thị nội dung trang web!`,
                            ]));
                        }, 1200));
                    }, 1200));
                }, 1200));
            }, 1200));
        };
      return jsxRuntimeExports.jsx("div", {
        id: "lab-9",
        className: "scroll-mt-6",
        children: jsxRuntimeExports.jsxs("div", {
          className:
            "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 transition-all duration-300",
          children: [
            jsxRuntimeExports.jsx("div", {
              className:
                "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800",
              children: jsxRuntimeExports.jsxs("div", {
                className: "text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-5 sm:px-5 py-1 text-sm sm:text-base font-bold text-blue-700 dark:bg-slate-850 dark:text-blue-300",
                    children: [
                      jsxRuntimeExports.jsx(BookOpen, {
                        className: "h-3.5 w-3.5",
                      }),
                      " Lab Thực Hành Số 9 (Dịch Vụ Mạng)",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className:
                      "text-xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight",
                    children: "Ghép Nối Thuật Ngữ Mạng & Trải Nghiệm Tương Tác",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                    children:
                      "Phát triển kỹ năng nhận diện và vận dụng 5 khái niệm cốt lõi theo đề thi IC3 GS6 quốc tế.",
                  }),
                ],
              }),
            }),
            !1,
            n === "simulator" &&
              jsxRuntimeExports.jsxs("div", {
                className: "space-y-6 text-left",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 w-full",
                    children: TERMS$1.map((D) => {
                      const Re = l === D.id;
                      return jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => c(D.id),
                          className: `step-card w-full box-border flex items-center gap-2.5 rounded-2xl p-3 text-left transition-all cursor-pointer border min-w-0 ${Re ? "active bg-blue-600 border-blue-600 !text-white shadow-md font-black" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50 font-bold"}`,
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className: `p-2 rounded-xl shrink-0 ${Re ? "bg-white/20 !text-white" : "bg-blue-500/15 text-blue-600 dark:text-blue-400"}`,
                              children: D.icon,
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "min-w-0 flex-1 overflow-hidden",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className: `text-[9px] font-bold uppercase tracking-wider mb-0.5 truncate ${Re ? "!text-white" : "text-slate-400"}`,
                                  children: ["Khái niệm 0", D.id],
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className: `text-xs font-black leading-tight truncate ${Re ? "!text-white" : "text-slate-800 dark:text-white"}`,
                                  children: D.name,
                                }),
                              ],
                            }),
                          ],
                        },
                        D.id,
                      );
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "rounded-3xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 md:p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-950/40",
                    children: [
                      l === 1 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 rounded-md bg-blue-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
                                      children: [
                                        jsxRuntimeExports.jsx(FolderTree, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Khái niệm 1: Breadcrumb",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("h4", {
                                      className:
                                        "text-lg font-black text-slate-900 dark:text-white mt-2",
                                      children:
                                        "Truy vết lịch sử đường dẫn trang web",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Breadcrumb",
                                        }),
                                        " (Dấu vết vụn bánh mì) là một thanh định vị giúp người dùng nhìn thấy vị trí hiện tại của mình trong sơ đồ cây phân cấp của một website, đồng thời cho phép họ dễ dàng click quay lại các cấp thư mục cha cao hơn.",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "pt-2 text-sm sm:text-base font-bold text-slate-500",
                                  children: [
                                    "Đã ghi nhận ",
                                    ee,
                                    " lần định vị lùi tiến.",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-7 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-400 uppercase tracking-wider block",
                                  children: "Giao diện kiểm thử định vị",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-850 flex items-center flex-wrap gap-1.5 text-sm sm:text-base font-medium",
                                      children: [
                                        jsxRuntimeExports.jsx(House, {
                                          className:
                                            "h-4 w-4 text-slate-400 shrink-0",
                                        }),
                                        L.map((D, Re) =>
                                          jsxRuntimeExports.jsxs(
                                            React.Fragment,
                                            {
                                              children: [
                                                Re > 0 &&
                                                  jsxRuntimeExports.jsx(
                                                    ChevronRight,
                                                    {
                                                      className:
                                                        "h-3.5 w-3.5 text-slate-300 shrink-0",
                                                    },
                                                  ),
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    onClick: () => Pe(Re),
                                                    className: `px-2 py-1 rounded-md font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${Re === L.length - 1 ? "bg-blue-600 text-white font-black shadow-sm" : "text-blue-600 hover:bg-blue-100 dark:hover:bg-slate-850 hover:underline"}`,
                                                    children: D,
                                                  },
                                                ),
                                              ],
                                            },
                                            Re,
                                          ),
                                        ),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium font-black text-slate-400",
                                          children: [
                                            "Thư mục con khả dụng tại: ",
                                            jsxRuntimeExports.jsxs("strong", {
                                              className:
                                                "text-blue-600 font-mono",
                                              children: ['"', P, '"'],
                                            }),
                                          ],
                                        }),
                                        V[P]
                                          ? jsxRuntimeExports.jsx("div", {
                                              className:
                                                "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                              children: V[P].map((D, Re) =>
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () => Le(D),
                                                    className:
                                                      "flex items-center justify-between p-8 sm:p-5 border border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-blue-50/30 rounded-3xl cursor-pointer text-left transition-all active:scale-98 group dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-850",
                                                    children: [
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 flex items-center gap-2",
                                                          children: ["📁 ", D],
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        ChevronRight,
                                                        {
                                                          className:
                                                            "h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform",
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  Re,
                                                ),
                                              ),
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-3 bg-slate-50/20",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "text-3xl block",
                                                  children: "📄",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                                  children:
                                                    "Đã chạm mốc cuối hệ thống dữ liệu!",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 font-semibold",
                                                  children:
                                                    "Thư mục này không có nhánh con. Nhấn nút màu xanh trên thanh Breadcrumb ở trên để nhảy lùi lại thư mục cha.",
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (le(["Trang Chủ"]), G("Trang Chủ"));
                                      },
                                      disabled: L.length === 1,
                                      className: `text-sm sm:text-base font-bold px-5 sm:px-5 py-3 rounded-3xl border flex items-center gap-1 ${L.length === 1 ? "text-slate-300 border-slate-100 dark:border-slate-850 dark:text-slate-700 cursor-not-allowed" : "text-slate-600 border-slate-200 hover:bg-slate-100 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-850 cursor-pointer"}`,
                                      children: [
                                        jsxRuntimeExports.jsx(RefreshCw, {
                                          className: "h-3 w-3",
                                        }),
                                        " Quay về Trang Chủ mặc định",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      l === 2 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 rounded-md bg-purple-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-purple-800 dark:bg-purple-950/40 dark:text-purple-300",
                                      children: [
                                        jsxRuntimeExports.jsx(Globe, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Khái niệm 2: ISP (Nhà cung cấp dịch vụ Internet)",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("h4", {
                                      className:
                                        "text-lg font-black text-slate-900 dark:text-white mt-2",
                                      children:
                                        "Đường truyền vật lý kết nối ra toàn cầu",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "ISP (Internet Service Provider)",
                                        }),
                                        " là một doanh nghiệp, công ty sở hữu hạ tầng mạng cáp/vô tuyến và đứng ra cung cấp hợp đồng kết nối đường truyền mạng cho các hộ gia đình hoặc tổ chức (VD tại Việt Nam: Viettel, FPT, VNPT).",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3 pt-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                          children: "Chọn nhà mạng ISP:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-3 gap-2 mt-1",
                                          children: [
                                            "Viettel",
                                            "FPT",
                                            "VNPT",
                                          ].map((D) =>
                                            jsxRuntimeExports.jsx(
                                              "button",
                                              {
                                                onClick: () => Ie(D),
                                                className: `py-3 px-2 rounded-3xl border text-sm sm:text-base font-extrabold cursor-pointer transition-all ${pe === D ? "bg-purple-600 border-purple-600 text-white shadow-xs" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                                                children: D,
                                              },
                                              D,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                          children:
                                            "Chọn gói công nghệ đường truyền:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "grid grid-cols-3 gap-2 mt-1",
                                          children: [
                                            "ADSL Đồng",
                                            "Cáp Quang FTTH",
                                            "Mạng Di Động 5G",
                                          ].map((D) =>
                                            jsxRuntimeExports.jsx(
                                              "button",
                                              {
                                                onClick: () => de(D),
                                                className: `py-3 px-1 rounded-3xl border text-sm sm:text-base font-extrabold cursor-pointer transition-all ${se === D ? "bg-indigo-600 border-indigo-600 text-white shadow-xs" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                                                children: D,
                                              },
                                              D,
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
                              className: "lg:col-span-7 space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-400 uppercase tracking-wider block",
                                  children: "Bảng điều khiển Speedtest mạng",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between min-h-[300px]",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Wifi, {
                                              className:
                                                "h-5 w-5 text-purple-600 animate-pulse",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white",
                                                  children: [
                                                    "ISP: ",
                                                    pe,
                                                    " Network",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 block font-semibold",
                                                  children: [
                                                    "Công nghệ: ",
                                                    se,
                                                    " • Máy chủ: Hanoi, VN",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "bg-emerald-50 px-2.5 py-1 rounded-full text-sm sm:text-base font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 font-extrabold flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Check, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Trực tuyến",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "flex-1 flex flex-col items-center justify-center py-6 relative",
                                      children: _
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-3 text-center",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-16 w-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto flex items-center justify-center",
                                                children: jsxRuntimeExports.jsx(
                                                  Zap,
                                                  {
                                                    className:
                                                      "h-6 w-6 text-purple-600 animate-bounce",
                                                  },
                                                ),
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-sm sm:text-base font-medium font-black text-purple-700 dark:text-purple-400 animate-pulse",
                                                children:
                                                  "ĐANG TRUYỀN TẢI THỬ NGHIỆM GÓI DỮ LIỆU LỚN...",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-2 w-48 bg-slate-100 rounded-full mx-auto overflow-hidden border",
                                                children: jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "h-2 bg-purple-600 transition-all",
                                                    style: { width: `${he}%` },
                                                  },
                                                ),
                                              }),
                                            ],
                                          })
                                        : Z
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "grid grid-cols-3 gap-3 text-center w-full max-w-md mx-auto",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "bg-slate-50 dark:bg-slate-950 p-3 sm:p-4 rounded-2xl border flex flex-col items-center justify-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider block truncate w-full",
                                                        children: "DOWNLOAD",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-lg sm:text-xl font-black text-purple-600 mt-0.5",
                                                        children: Z.download,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 block font-bold mt-0.5",
                                                        children: "Mbps",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "bg-slate-50 dark:bg-slate-950 p-3 sm:p-4 rounded-2xl border flex flex-col items-center justify-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider block truncate w-full",
                                                        children: "UPLOAD",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-lg sm:text-xl font-black text-indigo-600 mt-0.5",
                                                        children: Z.upload,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 block font-bold mt-0.5",
                                                        children: "Mbps",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "bg-slate-50 dark:bg-slate-950 p-3 sm:p-4 rounded-2xl border flex flex-col items-center justify-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-wider block truncate w-full",
                                                        children: "LATENCY",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-lg sm:text-xl font-black text-emerald-600 mt-0.5",
                                                        children: Z.ping,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 block font-bold mt-0.5",
                                                        children: "Ping ms",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "text-center space-y-3",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-16 w-16 rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-600 flex items-center justify-center mx-auto text-2xl shadow-sm",
                                                  children: "⏱️",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-bold text-slate-500",
                                                  children:
                                                    "Mô phỏng đo tốc độ đường truyền trực thuộc ISP",
                                                }),
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: W,
                                                    className:
                                                      "px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-3xl text-sm sm:text-base font-medium font-black shadow-md cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all flex items-center gap-1.5 mx-auto",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        Play,
                                                        {
                                                          className: "h-4 w-4",
                                                        },
                                                      ),
                                                      " KÍCH HOẠT ĐO TỐC ĐỘ (SPEEDTEST)",
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-semibold font-medium border text-slate-500 text-center leading-relaxed",
                                      children:
                                        se === "ADSL Đồng"
                                          ? jsxRuntimeExports.jsx("span", {
                                              children:
                                                "🔌 Mạng dây đồng truyền thống dễ suy hao tín hiệu theo khoảng cách địa lý xa trạm phát. Tốc độ thấp (~10-15 Mbps) và độ trễ Ping cao (~40ms).",
                                            })
                                          : se === "Cáp Quang FTTH"
                                            ? jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "⚡ Cáp quang truyền dữ liệu bằng ánh sáng cực kỳ nhanh và ổn định. Gần như không suy hao, cho phép tốc độ cao hàng trăm Mbps và Ping siêu nhạy (~3ms).",
                                              })
                                            : jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "📡 Công nghệ vô tuyến di động thế hệ thứ 5 (5G) có tốc độ siêu cao vượt trội nhưng độ trễ Ping giao động rộng theo mật độ thời tiết và vị trí đặt cột thu sóng.",
                                              }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      l === 3 &&
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-6 relative",
                          children: [
                            oe &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "absolute inset-0 bg-white/95 dark:bg-slate-950/95 z-50 flex flex-col items-center justify-center space-y-4 rounded-3xl",
                                children: [
                                  jsxRuntimeExports.jsx(RefreshCw, {
                                    className:
                                      "h-12 w-12 text-amber-500 animate-spin",
                                  }),
                                  jsxRuntimeExports.jsx("h3", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white uppercase tracking-wider",
                                    children:
                                      "🔄 TRÌNH DUYỆT ĐANG TẢI LẠI TRANG (F5)...",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-500 font-bold max-w-sm text-center px-5 sm:px-6 leading-relaxed",
                                    children:
                                      "Hệ thống đang tải lại toàn bộ mã nguồn của trang web, nhưng sẽ tự động đọc tệp tin Cookie trong trình duyệt để khôi phục trạng thái!",
                                  }),
                                ],
                              }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
                                      children: [
                                        jsxRuntimeExports.jsx(Cookie, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Khái niệm 3: Cookie",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("h4", {
                                      className:
                                        "text-lg font-black text-slate-900 dark:text-white mt-2",
                                      children:
                                        "Tệp tin văn bản lưu vết trạng thái người dùng",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Cookie",
                                        }),
                                        ' là những tệp văn bản nhỏ được trang web tự động tạo ra và ghi vào bộ nhớ trình duyệt để "nhận diện" em trong các lần tải trang (F5) hoặc ghé thăm tiếp theo.',
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex bg-slate-100 dark:bg-slate-950 p-1 rounded-3xl border",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => Ue("login"),
                                      className: `flex-1 py-3 text-sm sm:text-base font-semibold rounded-3xl font-black text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${_e === "login" ? "bg-white text-amber-700 shadow-xs dark:bg-slate-900 dark:text-amber-400" : "text-slate-500 hover:text-slate-700"}`,
                                      children: "🔐 ĐĂNG NHẬP & BẤM F5",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => Ue("thirdparty"),
                                      className: `flex-1 py-3 text-sm sm:text-base font-semibold rounded-3xl font-black text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${_e === "thirdparty" ? "bg-white text-amber-700 shadow-xs dark:bg-slate-900 dark:text-amber-400" : "text-slate-500 hover:text-slate-700"}`,
                                      children: "🕵️ BÊN THỨ 1 VS BÊN THỨ 3",
                                    }),
                                  ],
                                }),
                                _e === "login"
                                  ? jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-3 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800",
                                          children: [
                                            qe
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-3",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex justify-between items-center bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 p-8 sm:p-5 rounded-3xl",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold font-black text-emerald-800 dark:text-emerald-400 flex items-center gap-1",
                                                              children:
                                                                "✅ ĐÃ ĐĂNG NHẬP THÀNH CÔNG",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: Et,
                                                              className:
                                                                "text-sm sm:text-base font-semibold bg-rose-100 text-rose-700 hover:bg-rose-200 px-2 py-0.5 rounded font-black cursor-pointer transition-all",
                                                              children:
                                                                "Đăng xuất ✕",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                                        children: [
                                                          "Tài khoản: ",
                                                          jsxRuntimeExports.jsx(
                                                            "strong",
                                                            {
                                                              className:
                                                                "text-amber-600 font-extrabold",
                                                              children: ze,
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("form", {
                                                  onSubmit: Je,
                                                  className: "space-y-2.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                                        children:
                                                          "Mô phỏng Đăng nhập hệ thống:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className: "flex gap-2",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value: tt,
                                                              onChange: (D) =>
                                                                it(
                                                                  D.target
                                                                    .value,
                                                                ),
                                                              placeholder:
                                                                "Nhập tên của em...",
                                                              className:
                                                                "flex-1 text-sm sm:text-base font-bold p-8 sm:p-5 bg-white dark:bg-slate-950 border rounded-3xl focus:border-amber-500",
                                                              required: !0,
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              type: "submit",
                                                              className:
                                                                "px-5 sm:px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-3xl text-sm sm:text-base font-medium font-black transition-all cursor-pointer shadow-sm active:scale-95 hover:scale-103 transition-all",
                                                              children:
                                                                "Đăng Nhập",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "border-t pt-3 space-y-2",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                                  children:
                                                    "Tùy chọn giao diện website (Lưu bằng Cookie):",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "grid grid-cols-2 gap-2",
                                                  children: ["Sáng", "Tối"].map(
                                                    (D) =>
                                                      jsxRuntimeExports.jsxs(
                                                        "button",
                                                        {
                                                          onClick: () => je(D),
                                                          className: `py-3 px-2 rounded-3xl border text-sm sm:text-base font-extrabold cursor-pointer transition-all ${te === D ? "bg-amber-600 border-amber-600 text-white" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                                                          children: [
                                                            "Chế độ ",
                                                            D,
                                                          ],
                                                        },
                                                        D,
                                                      ),
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: ft,
                                              className:
                                                "w-full py-3 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-3xl text-sm sm:text-base font-medium font-black transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md active:scale-95 hover:scale-103 transition-all",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  RefreshCw,
                                                  { className: "h-4 w-4" },
                                                ),
                                                " BẤM F5 (TẢI LẠI TRANG GIẢ LẬP)",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold italic text-center",
                                              children:
                                                "💡 Gợi ý: Em cũng có thể bấm nút Tải lại (F5) thật của trình duyệt mạng, thông tin vẫn sẽ được bảo lưu an toàn tuyệt đối!",
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl bg-purple-50 border border-purple-100 p-5 sm:p-6 dark:bg-purple-950/20 dark:border-purple-900/40 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 space-y-2",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "font-extrabold text-purple-800 dark:text-purple-400",
                                              children:
                                                "💡 PHÂN BIỆT 1ST VS 3RD PARTY COOKIE:",
                                            }),
                                            jsxRuntimeExports.jsxs("ul", {
                                              className:
                                                "list-disc pl-4 space-y-1 font-semibold text-sm sm:text-base font-semibold",
                                              children: [
                                                jsxRuntimeExports.jsxs("li", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "Cookie bên thứ nhất (First-party)",
                                                      },
                                                    ),
                                                    ": Do chính website em đang xem tạo ra (",
                                                    jsxRuntimeExports.jsx(
                                                      "code",
                                                      {
                                                        children:
                                                          "ic3-shop.com",
                                                      },
                                                    ),
                                                    "). Phục vụ giỏ hàng, thông tin của em. ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "Cực kỳ an toàn!",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("li", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "Cookie bên thứ ba (Third-party)",
                                                      },
                                                    ),
                                                    ": Do một công ty khác (mạng quảng cáo, MXH) đặt ké trên trang này. Khi em chuyển qua xem trang web khác (",
                                                    jsxRuntimeExports.jsx(
                                                      "code",
                                                      {
                                                        children:
                                                          "game-vui.com",
                                                      },
                                                    ),
                                                    "), mạng quảng cáo sẽ đọc Cookie này để ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "hiển thị quảng cáo bám đuổi em!",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center justify-between",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300",
                                                  children:
                                                    "CẤU HÌNH QUYỀN RIÊNG TƯ:",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: `text-sm sm:text-base font-semibold px-2 py-0.5 rounded-full font-black ${Ae ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`,
                                                  children: Ae
                                                    ? "⚠️ Cho phép 3rd Party"
                                                    : "🔒 Đã chặn 3rd Party",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                jsxRuntimeExports.jsxs(
                                                  "label",
                                                  {
                                                    className:
                                                      "relative inline-flex items-center cursor-pointer",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          checked: Ae,
                                                          onChange: (D) =>
                                                            Q(D.target.checked),
                                                          className:
                                                            "sr-only peer",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-500",
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 select-none",
                                                  children:
                                                    "Cho phép cookie bên thứ 3 theo dõi",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl border border-dashed",
                                              children: Ae
                                                ? jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      children: [
                                                        "🕵️ ",
                                                        jsxRuntimeExports.jsx(
                                                          "strong",
                                                          {
                                                            children:
                                                              "Đang BẬT",
                                                          },
                                                        ),
                                                        ": Khi em xem sách ở ",
                                                        jsxRuntimeExports.jsx(
                                                          "code",
                                                          {
                                                            children:
                                                              "ic3-shop.com",
                                                          },
                                                        ),
                                                        ", mạng quảng cáo ",
                                                        jsxRuntimeExports.jsx(
                                                          "code",
                                                          {
                                                            children:
                                                              "quangcao.net",
                                                          },
                                                        ),
                                                        " sẽ đặt cookie theo dõi. Khi em chuyển sang chơi game ở ",
                                                        jsxRuntimeExports.jsx(
                                                          "code",
                                                          {
                                                            children:
                                                              "game-vui.com",
                                                          },
                                                        ),
                                                        ", em sẽ bị ",
                                                        jsxRuntimeExports.jsx(
                                                          "strong",
                                                          {
                                                            children:
                                                              "bám đuổi quảng cáo sách",
                                                          },
                                                        ),
                                                        "!",
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      children: [
                                                        "🛡️ ",
                                                        jsxRuntimeExports.jsx(
                                                          "strong",
                                                          {
                                                            children:
                                                              "Đang CHẶN",
                                                          },
                                                        ),
                                                        ": An toàn bảo mật! Mạng quảng cáo bị cấm đọc ghi thông tin hành vi của em. Trang game ",
                                                        jsxRuntimeExports.jsx(
                                                          "code",
                                                          {
                                                            children:
                                                              "game-vui.com",
                                                          },
                                                        ),
                                                        " chỉ hiển thị quảng cáo sữa ngẫu nhiên.",
                                                      ],
                                                    },
                                                  ),
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
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-400 uppercase tracking-wider block",
                                  children:
                                    "Trực quan hóa hoạt động của Trình Duyệt",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    _e === "login"
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className: `p-5 sm:p-6 border rounded-3xl transition-all relative overflow-hidden ${te === "Tối" ? "bg-slate-950 border-amber-600/30 text-white" : "bg-amber-50/10 border-slate-200 text-slate-900"}`,
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-between items-center border-b pb-2 mb-3",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black flex items-center gap-1.5",
                                                  children: [
                                                    "🛍️ CỬA HÀNG SÁCH IC3 ",
                                                    qe
                                                      ? `| Chào ${ze}! 👋`
                                                      : "| Đang duyệt tư cách khách",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold bg-amber-500 text-white px-2 py-0.5 rounded-full font-black flex items-center gap-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      ShoppingCart,
                                                      { className: "h-3 w-3" },
                                                    ),
                                                    " Giỏ hàng (",
                                                    v.length,
                                                    ")",
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
                                                    "Chọn sách muốn đưa vào giỏ hàng:",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                                  children: [
                                                    "Giáo trình Luyện thi IC3 GS6",
                                                    "Bộ đề ôn thi thực hành Tin học",
                                                    "Sổ tay phím tắt tin học văn phòng",
                                                  ].map((D, Re) => {
                                                    const Ve = v.includes(D);
                                                    return jsxRuntimeExports.jsxs(
                                                      "button",
                                                      {
                                                        onClick: () => Me(D),
                                                        className: `p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-extrabold text-left transition-all flex items-center justify-between border cursor-pointer ${Ve ? "bg-amber-100 border-amber-400 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "truncate mr-2",
                                                              children: [
                                                                "📚 ",
                                                                D,
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20",
                                                              children: Ve
                                                                ? "✕ Bỏ"
                                                                : "➕ Thêm",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                      Re,
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex gap-1.5 p-8 sm:p-5 bg-slate-100 dark:bg-slate-950 rounded-3xl border items-center",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className: "flex gap-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-2.5 w-2.5 rounded-full bg-rose-400",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-2.5 w-2.5 rounded-full bg-amber-400",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-2.5 w-2.5 rounded-full bg-emerald-400",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex-1 flex gap-1.5 px-5 sm:px-5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        onClick: () =>
                                                          ae("shop"),
                                                        className: `px-5 sm:px-5 py-1 rounded-md text-[10.5px] font-black flex items-center gap-1 cursor-pointer transition-all ${ge === "shop" ? "bg-white text-amber-700 border shadow-xs dark:bg-slate-900 dark:text-amber-400 dark:border-slate-800" : "text-slate-400 hover:text-slate-600"}`,
                                                        children:
                                                          "🌐 ic3-shop.com (Cửa hàng)",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        onClick: () =>
                                                          ae("game"),
                                                        className: `px-5 sm:px-5 py-1 rounded-md text-[10.5px] font-black flex items-center gap-1 cursor-pointer transition-all ${ge === "game" ? "bg-white text-purple-700 border shadow-xs dark:bg-slate-900 dark:text-purple-400 dark:border-slate-800" : "text-slate-400 hover:text-slate-600"}`,
                                                        children:
                                                          "🎮 game-vui.com (Giải trí)",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            ge === "shop"
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "p-5 sm:p-6 bg-white dark:bg-slate-900 border rounded-3xl shadow-xs space-y-3",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex justify-between items-center border-b pb-2",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black text-amber-600",
                                                              children:
                                                                "🛍️ TRANG SÁCH CHÍNH HÃNG ic3-shop.com",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-black animate-pulse",
                                                              children:
                                                                "⚠️ GẮN MÃ QUẢNG CÁO THEO DÕI",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold font-medium text-slate-500 text-left",
                                                      children:
                                                        "Hãy nhấp xem một sản phẩm bất kỳ bên dưới để hệ thống ghi nhớ hành vi của em:",
                                                    }),
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "grid grid-cols-1 sm:grid-cols-3 gap-2",
                                                        children: [
                                                          {
                                                            name: "Giáo trình Luyện thi IC3 GS6",
                                                            icon: "📚",
                                                          },
                                                          {
                                                            name: "Bộ đề ôn thi thực hành Tin học",
                                                            icon: "📝",
                                                          },
                                                          {
                                                            name: "Sổ tay phím tắt tin học văn phòng",
                                                            icon: "📓",
                                                          },
                                                        ].map((D, Re) =>
                                                          jsxRuntimeExports.jsxs(
                                                            "button",
                                                            {
                                                              onClick: () => {
                                                                $e(D.name);
                                                              },
                                                              className: `p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-semibold font-black text-center border cursor-pointer flex flex-col items-center justify-center gap-1 transition-all ${Te === D.name ? "bg-amber-50 border-amber-500 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200" : "bg-white hover:bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300"}`,
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-lg",
                                                                    children:
                                                                      D.icon,
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "leading-tight text-sm sm:text-base font-semibold",
                                                                    children:
                                                                      D.name,
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-[9px] text-amber-500 uppercase font-bold mt-1 block",
                                                                    children:
                                                                      Te ===
                                                                      D.name
                                                                        ? "👀 Đang xem"
                                                                        : "Bấm Xem",
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                            Re,
                                                          ),
                                                        ),
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-bold text-slate-500 leading-normal border border-dashed flex items-center gap-2 text-left",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-lg",
                                                              children: "🍪",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-amber-700 font-extrabold block",
                                                                    children:
                                                                      "First-Party Cookie từ ic3-shop.com:",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    children:
                                                                      "Trang web đang lưu giỏ hàng của em. Việc lưu này rất hữu ích và an toàn cho trải nghiệm mua sắm!",
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "p-5 sm:p-6 bg-white dark:bg-slate-900 border rounded-3xl shadow-xs space-y-3 text-left",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex justify-between items-center border-b pb-2",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black text-purple-600",
                                                              children:
                                                                "🎮 TRANG WEB CHƠI GAME game-vui.com",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "h-2 w-2 rounded-full bg-emerald-500",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-gradient-to-r from-violet-500 to-indigo-600 text-white p-5 sm:p-6 rounded-3xl text-center space-y-2",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-base",
                                                              children:
                                                                "👾🕹️🎮",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black",
                                                              children:
                                                                "GAME VUI TUỔI THƠ: PHIÊU LƯU TIN HỌC LỚP 6",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold text-violet-200 font-bold",
                                                              children:
                                                                "Hãy nhấp vào các nút bên dưới để điều khiển nhân vật!",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex justify-center gap-1.5",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "px-5 sm:px-5 py-1 bg-white/20 hover:bg-white/30 rounded text-sm sm:text-base font-semibold font-black cursor-not-allowed",
                                                                    children:
                                                                      "⬅️ Trái",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "px-5 sm:px-5 py-1 bg-white/20 hover:bg-white/30 rounded text-sm sm:text-base font-semibold font-black cursor-not-allowed",
                                                                    children:
                                                                      "跳 Nhảy",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "px-5 sm:px-5 py-1 bg-white/20 hover:bg-white/30 rounded text-sm sm:text-base font-semibold font-black cursor-not-allowed",
                                                                    children:
                                                                      "➡️ Phải",
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
                                                          "border border-red-250 dark:border-red-900/40 rounded-3xl overflow-hidden shadow-xs",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "bg-red-50 dark:bg-red-950/30 px-5 sm:px-5 py-3 border-b border-red-100 dark:border-red-900/30 text-sm sm:text-base font-semibold font-black text-red-600 dark:text-red-400 flex items-center justify-between",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    children:
                                                                      "🔥 KHU VỰC QUẢNG CÁO TÀI TRỢ (quangcao-bam-duoi.net)",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-[8px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider",
                                                                    children:
                                                                      "Mạng Quảng Cáo Bên Thứ 3",
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          Ae && Te
                                                            ? jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "p-8 sm:p-5 bg-red-50/10 space-y-1",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "p",
                                                                      {
                                                                        className:
                                                                          "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white leading-snug",
                                                                        children:
                                                                          [
                                                                            "🎯 ĐẶC BIỆT DÀNH CHO BẠN: Click mua ngay tài liệu ",
                                                                            jsxRuntimeExports.jsxs(
                                                                              "strong",
                                                                              {
                                                                                className:
                                                                                  "text-red-600",
                                                                                children:
                                                                                  [
                                                                                    '"',
                                                                                    Te,
                                                                                    '"',
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            " đang giảm giá cực khủng 50% chỉ hôm nay!",
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-8 sm:p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 rounded-3xl text-sm sm:text-base font-semibold font-medium text-slate-600 dark:text-slate-400 leading-relaxed mt-2",
                                                                        children:
                                                                          [
                                                                            "⚠️ ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  "Phân tích cho Học sinh:",
                                                                              },
                                                                            ),
                                                                            " Em thấy chưa? Trang chơi game ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "code",
                                                                              {
                                                                                children:
                                                                                  "game-vui.com",
                                                                              },
                                                                            ),
                                                                            " biết chính xác em đang tìm mua ",
                                                                            jsxRuntimeExports.jsxs(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    '"',
                                                                                    Te,
                                                                                    '"',
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            " ở bên trang ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "code",
                                                                              {
                                                                                children:
                                                                                  "ic3-shop.com",
                                                                              },
                                                                            ),
                                                                            ", vì đoạn code quảng cáo bên thứ ba ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "code",
                                                                              {
                                                                                children:
                                                                                  "quangcao-bam-duoi.net",
                                                                              },
                                                                            ),
                                                                            " đã bám đuôi và đọc cookie hành vi của em!",
                                                                          ],
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              )
                                                            : jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 text-slate-600 space-y-1",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "p",
                                                                      {
                                                                        className:
                                                                          "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white leading-snug",
                                                                        children:
                                                                          '🥛 QUẢNG CÁO NGẪU NHIÊN: "Sữa tươi Milo thơm ngon bổ dưỡng, giúp tăng cường trí tuệ mỗi ngày!"',
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-8 sm:p-5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 rounded-3xl text-sm sm:text-base font-semibold font-medium text-slate-600 dark:text-slate-400 leading-relaxed mt-2",
                                                                        children:
                                                                          [
                                                                            "🛡️ ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  "Phân tích cho Học sinh:",
                                                                              },
                                                                            ),
                                                                            " Em thấy chưa? Do em đã ",
                                                                            jsxRuntimeExports.jsx(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  "TẮT / CHẶN Cookie bên thứ ba",
                                                                              },
                                                                            ),
                                                                            " (hoặc chưa xem quyển sách nào), mạng quảng cáo không thể theo dấu em nữa. Trang game chỉ hiển thị quảng cáo ngẫu nhiên, quyền riêng tư của em đã được bảo vệ an toàn!",
                                                                          ],
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
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 text-white rounded-3xl border border-slate-850 p-5 sm:p-6 font-mono text-[10.5px]",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-center border-b border-slate-850 pb-2 mb-3",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black text-amber-500 flex items-center gap-1.5",
                                              children:
                                                "📂 BỘ NHỚ TRÌNH DUYỆT (COOKIE DATABASE)",
                                            }),
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: et,
                                              className:
                                                "text-[9px] bg-rose-950 text-rose-300 hover:bg-rose-900 border border-rose-800 rounded px-2 py-1 flex items-center gap-1 cursor-pointer transition-all",
                                              children: [
                                                jsxRuntimeExports.jsx(Trash2, {
                                                  className: "h-3 w-3",
                                                }),
                                                " Xóa tệp tin Cookie",
                                              ],
                                            }),
                                          ],
                                        }),
                                        Object.keys(Xe).length === 0
                                          ? jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-slate-600 text-center py-6",
                                              children:
                                                "// Trình duyệt đang trống Cookie. Hãy tương tác giỏ hàng, đăng nhập, hoặc xem sản phẩm để ghi tệp tin Cookie!",
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-2",
                                              children: [
                                                Object.entries(Xe).map(
                                                  ([D, Re]) =>
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-8 sm:p-5 rounded bg-slate-900/60 border border-slate-850",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-amber-400 font-black shrink-0",
                                                              children: [
                                                                'Tên: "',
                                                                D,
                                                                '"',
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-slate-300 truncate max-w-xs text-left",
                                                              children: [
                                                                "Giá trị lưu trữ: ",
                                                                jsxRuntimeExports.jsx(
                                                                  "strong",
                                                                  {
                                                                    className:
                                                                      "text-emerald-400",
                                                                    children:
                                                                      Re,
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                      D,
                                                    ),
                                                ),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-[9.5px] text-slate-400 font-bold border-t border-slate-850 pt-2 text-center flex items-center justify-center gap-1",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        children:
                                                          "⚠️ Cookie giúp website lưu giữ trạng thái này bền vững kể cả khi em bấm F5 tải lại trang!",
                                                      },
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
                          ],
                        }),
                      l === 4 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 rounded-md bg-rose-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-rose-800 dark:bg-rose-950/40 dark:text-rose-300",
                                      children: [
                                        jsxRuntimeExports.jsx(Code, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Khái niệm 4: HTML",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("h4", {
                                      className:
                                        "text-lg font-black text-slate-900 dark:text-white mt-2",
                                      children:
                                        "Ngôn ngữ định cấu trúc trang web tĩnh",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "HTML (HyperText Markup Language)",
                                        }),
                                        " không phải ngôn ngữ lập trình, mà là một ngôn ngữ đánh dấu sử dụng các cặp thẻ đặc trưng (VD `<h1>`, `<p>`, `<button>`) để dựng sườn cấu trúc, văn bản và hình ảnh nền móng cho tất cả các trang web trên mạng.",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-3 pt-2 text-sm sm:text-base font-medium",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                          children:
                                            "Sửa thẻ <h1> (Tiêu đề chính):",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: Ke,
                                          onChange: (D) => ot(D.target.value),
                                          className:
                                            "w-full font-bold p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl focus:border-rose-500 mt-1",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                          children:
                                            "Sửa thẻ <p> (Văn bản đoạn):",
                                        }),
                                        jsxRuntimeExports.jsx("textarea", {
                                          rows: 2,
                                          value: w,
                                          onChange: (D) => C(D.target.value),
                                          className:
                                            "w-full font-bold p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl focus:border-rose-500 mt-1",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "grid grid-cols-2 gap-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider block",
                                              children: "Chữ trong nút:",
                                            }),
                                            jsxRuntimeExports.jsx("input", {
                                              type: "text",
                                              value: Ee,
                                              onChange: (D) =>
                                                ke(D.target.value),
                                              className:
                                                "w-full font-bold p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl focus:border-rose-500 mt-1",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider block",
                                              children: "Lớp màu CSS nút:",
                                            }),
                                            jsxRuntimeExports.jsxs("select", {
                                              value: We,
                                              onChange: (D) =>
                                                ht(D.target.value),
                                              className:
                                                "w-full font-bold p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl focus:border-rose-500 mt-1",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "option",
                                                  {
                                                    value: "bg-blue-600",
                                                    children:
                                                      "bg-blue-600 (Xanh Dương)",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx(
                                                  "option",
                                                  {
                                                    value: "bg-emerald-600",
                                                    children:
                                                      "bg-emerald-600 (Lục)",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx(
                                                  "option",
                                                  {
                                                    value: "bg-rose-600",
                                                    children:
                                                      "bg-rose-600 (Hồng Đỏ)",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx(
                                                  "option",
                                                  {
                                                    value: "bg-indigo-600",
                                                    children:
                                                      "bg-indigo-600 (Chàm)",
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
                              className: "lg:col-span-7 flex flex-col gap-4",
                              children: jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4 flex-1",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "rounded-3xl border border-slate-250 bg-slate-950 p-5 sm:p-6 text-white font-mono text-[10.5px] flex flex-col justify-between min-h-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-slate-400 pb-2 border-b border-slate-850 flex items-center gap-1.5 text-left",
                                            children: [
                                              jsxRuntimeExports.jsx(Terminal, {
                                                className:
                                                  "h-4 w-4 text-slate-500",
                                              }),
                                              " SOURCE_CODE.HTML",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1.5 my-3 text-left",
                                            children: [
                                              jsxRuntimeExports.jsx("p", {
                                                className: "text-slate-600",
                                                children:
                                                  "<!-- Sườn văn bản trang web -->",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className: "text-amber-400",
                                                children: [
                                                  "<div ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-400",
                                                      children: "class",
                                                    },
                                                  ),
                                                  "=",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-emerald-400",
                                                      children:
                                                        '"container text-center"',
                                                    },
                                                  ),
                                                  ">",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: [
                                                  "<h1 ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-400",
                                                      children: "class",
                                                    },
                                                  ),
                                                  "=",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-emerald-400",
                                                      children:
                                                        '"text-xl font-bold text-slate-900"',
                                                    },
                                                  ),
                                                  ">",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-8 text-slate-100 italic truncate max-w-[200px]",
                                                children: Ke,
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: "</h1>",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: [
                                                  "<p ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-400",
                                                      children: "class",
                                                    },
                                                  ),
                                                  "=",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-emerald-400",
                                                      children:
                                                        '"text-sm sm:text-base font-medium text-slate-500 mt-2"',
                                                    },
                                                  ),
                                                  ">",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-8 text-slate-100 italic truncate max-w-[200px]",
                                                children: w,
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: "</p>",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: [
                                                  "<button ",
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-blue-400",
                                                      children: "class",
                                                    },
                                                  ),
                                                  "=",
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-emerald-400",
                                                      children: [
                                                        '"px-5 sm:px-6 py-3 text-white rounded-3xl ',
                                                        We,
                                                        '"',
                                                      ],
                                                    },
                                                  ),
                                                  ">",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-8 text-slate-100 italic",
                                                children: Ee,
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "pl-4 text-amber-400",
                                                children: "</button>",
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className: "text-amber-400",
                                                children: "</div>",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "text-[9px] text-slate-500 font-extrabold border-t border-slate-850 pt-2 text-left",
                                        children:
                                          "Nhận diện: Hệ thống tự động phân tích cú pháp tĩnh và hiển thị kết quả.",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 text-slate-900 flex flex-col justify-between min-h-[220px] shadow-sm",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between border-b pb-2 mb-3",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                            children:
                                              "Trình duyệt kết xuất (Render)",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-2.5 w-2.5 rounded-full bg-emerald-500",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-5",
                                        children: [
                                          jsxRuntimeExports.jsx("h1", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-slate-900 leading-tight",
                                            children: Ke || "Chưa có tiêu đề",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-500 font-medium mt-2 leading-relaxed",
                                            children: w || "Chưa có mô tả",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => Fe((D) => D + 1),
                                            className: `mt-4 px-5 sm:px-6 py-3 text-white font-black text-sm sm:text-base font-semibold rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all shadow-xs ${We}`,
                                            children: Ee || "Bấm",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "text-[9.5px] text-slate-400 font-bold border-t pt-2 text-center",
                                        children: [
                                          "Sự kiện click nút bấm ghi nhận: ",
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "text-blue-600 font-mono font-black",
                                            children: [lt, " lần"],
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
                      l === 5 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1.5 rounded-md bg-emerald-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
                                      children: [
                                        jsxRuntimeExports.jsx(Network, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Khái niệm 5: DNS",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("h4", {
                                      className:
                                        "text-lg font-black text-slate-900 dark:text-white mt-2",
                                      children:
                                        "Bản đồ ánh xạ tên miền sang địa chỉ IP",
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "DNS (Domain Name Service)",
                                        }),
                                        " đóng vai trò như một danh bạ điện thoại khổng lồ của Internet. Con người chỉ nhớ được các từ khóa tên miền dễ thuộc (VD ",
                                        jsxRuntimeExports.jsx("em", {
                                          children: "google.com",
                                        }),
                                        "), và DNS có nhiệm vụ biên dịch/ánh xạ chúng thành địa chỉ số IP của máy chủ lưu trữ (VD ",
                                        jsxRuntimeExports.jsx("em", {
                                          children: "142.250.190.46",
                                        }),
                                        ") để máy tính hiểu và kết nối tới.",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3 pt-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                      children: "Danh mục tên miền thử nghiệm:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "grid grid-cols-2 gap-1.5",
                                      children: Object.keys(H).map((D) =>
                                        jsxRuntimeExports.jsxs(
                                          "button",
                                          {
                                            onClick: () => {
                                              (xt === "idle" ||
                                                xt === "resolved") &&
                                                (yt(D), ve("idle"), mt([]));
                                            },
                                            className: `p-8 sm:p-5 rounded-3xl border text-sm sm:text-base font-semibold font-mono font-bold text-left cursor-pointer transition-all truncate ${rt === D ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                                            children: ["🌐 ", D],
                                          },
                                          D,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "lg:col-span-7 space-y-4 text-sm sm:text-base font-bold text-slate-500",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-400 uppercase tracking-wider block",
                                  children:
                                    "Tiến trình đệ quy phân giải tên miền",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          disabled:
                                            xt !== "idle" && xt !== "resolved",
                                          value: rt,
                                          onChange: (D) => yt(D.target.value),
                                          placeholder:
                                            "Nhập tên miền (VD: custom.com)",
                                          className:
                                            "flex-1 font-mono text-sm sm:text-base font-medium p-8 sm:p-5 border rounded-3xl dark:bg-slate-950 dark:border-slate-800 focus:border-emerald-500",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: Mt,
                                          disabled:
                                            xt !== "idle" && xt !== "resolved",
                                          className: `px-5 sm:px-6 py-3 text-white font-black text-sm sm:text-base font-medium rounded-3xl shadow-xs cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all ${xt !== "idle" && xt !== "resolved" ? "bg-slate-300 dark:bg-slate-800 text-slate-400 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"}`,
                                          children: "Phân giải DNS",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-4 gap-2 text-center text-sm sm:text-base font-semibold",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border ${xt === "searching_cache" ? "bg-blue-100 border-blue-500 text-blue-800 animate-pulse" : "bg-slate-50 dark:bg-slate-950 text-slate-400 border-slate-100 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "font-mono text-sm sm:text-base font-medium mb-0.5",
                                              children: "💻",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "block font-black leading-tight",
                                              children: "1. Cache Trình Duyệt",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border ${xt === "query_root" ? "bg-purple-100 border-purple-500 text-purple-800 animate-pulse" : "bg-slate-50 dark:bg-slate-950 text-slate-400 border-slate-100 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "font-mono text-sm sm:text-base font-medium mb-0.5",
                                              children: "🌐",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "block font-black leading-tight",
                                              children: "2. Root Server (.)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border ${xt === "query_tld" ? "bg-indigo-100 border-indigo-500 text-indigo-800 animate-pulse" : "bg-slate-50 dark:bg-slate-950 text-slate-400 border-slate-100 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "font-mono text-sm sm:text-base font-medium mb-0.5",
                                              children: "📡",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "block font-black leading-tight",
                                              children:
                                                "3. TLD Server (.vn/.com)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border ${xt === "query_auth" ? "bg-emerald-100 border-emerald-500 text-emerald-850 animate-pulse" : xt === "resolved" ? "bg-emerald-500 text-white font-black" : "bg-slate-50 dark:bg-slate-950 text-slate-400 border-slate-100 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "font-mono text-sm sm:text-base font-medium mb-0.5",
                                              children: "📂",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "block font-black leading-tight",
                                              children: "4. Auth Server",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-950 text-white rounded-3xl p-5 sm:p-6 font-mono text-[10.5px] min-h-[140px] flex flex-col justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "space-y-1 my-1 max-h-[120px] overflow-y-auto text-left pr-1",
                                          children:
                                            Ye.length === 0
                                              ? jsxRuntimeExports.jsx("p", {
                                                  className: "text-slate-600",
                                                  children:
                                                    '// Nhấn nút "Phân giải DNS" để khởi chạy truy vấn đệ quy...',
                                                })
                                              : Ye.map((D, Re) => {
                                                  let Ve = "text-slate-300";
                                                  return (
                                                    D.includes("✓") &&
                                                      (Ve =
                                                        "text-emerald-400 font-bold"),
                                                    D.includes("❌") &&
                                                      (Ve =
                                                        "text-rose-400 font-semibold"),
                                                    jsxRuntimeExports.jsx(
                                                      "p",
                                                      {
                                                        className: `${Ve} leading-normal`,
                                                        children: D,
                                                      },
                                                      Re,
                                                    )
                                                  );
                                                }),
                                        }),
                                        xt === "resolved" &&
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "bg-emerald-950/40 p-8 sm:p-5 border border-emerald-500/20 rounded-3xl mt-2 text-center",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-emerald-300 block text-sm sm:text-base font-semibold font-black",
                                                children: "ÁNH XẠ HOÀN THÀNH:",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "font-mono text-sm sm:text-base font-medium text-white font-extrabold tracking-wide",
                                                children: [rt, " ➔ ", Dt],
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
                ],
              }),
          ],
        }),
      });
    }
    const TERMS = [
        {
          id: 1,
          name: "Digital Subscriber Line (DSL)",
          icon: jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
          color: "from-blue-500 to-cyan-500",
          desc: "Công nghệ truyền dữ liệu băng thông rộng chạy trên đường dây cáp điện thoại đồng.",
        },
        {
          id: 2,
          name: "Modem",
          icon: jsxRuntimeExports.jsx(Radio, { className: "h-5 w-5" }),
          color: "from-amber-500 to-orange-500",
          desc: "Thiết bị điều chế/giải điều chế tín hiệu nối nhà bạn với ISP.",
        },
        {
          id: 3,
          name: "Ethernet",
          icon: jsxRuntimeExports.jsx(Cable, { className: "h-5 w-5" }),
          color: "from-rose-500 to-pink-500",
          desc: "Công nghệ dây cáp kết nối có dây tốc độ cao trong mạng cục bộ LAN.",
        },
        {
          id: 4,
          name: "Router",
          icon: jsxRuntimeExports.jsx(Network, { className: "h-5 w-5" }),
          color: "from-purple-500 to-indigo-500",
          desc: "Thiết bị định tuyến, điều phối các gói dữ liệu giữa nhiều mạng khác nhau.",
        },
        {
          id: 5,
          name: "Cable Service",
          icon: jsxRuntimeExports.jsx(Tv, { className: "h-5 w-5" }),
          color: "from-teal-500 to-emerald-500",
          desc: "Dịch vụ mạng băng thông rộng tận dụng hệ thống cáp đồng trục truyền hình TV.",
        },
        {
          id: 6,
          name: "Network Adapter",
          icon: jsxRuntimeExports.jsx(Cpu, { className: "h-5 w-5" }),
          color: "from-sky-500 to-blue-600",
          desc: "Card mạng (bảng mạch) gắn vào bo mạch chủ để cho phép PC kết nối dây/wifi.",
        },
      ],
      DEFINITIONS = [
        {
          id: 1,
          text: "Một công nghệ mạng chạy trên dây điện thoại",
          correctTermId: 1,
        },
        {
          id: 2,
          text: "Một thiết bị gửi và nhận thông tin giữa nhà của bạn và ISP thông qua đường dây điện thoại, cáp quang hoặc cáp đồng trục TV",
          correctTermId: 2,
        },
        {
          id: 3,
          text: "Một công nghệ kết nối các máy tính với nhau trong một mạng cục bộ",
          correctTermId: 3,
        },
        {
          id: 4,
          text: "Kết nối nhiều mạng và chuyển tiếp các gói giữa chúng",
          correctTermId: 4,
        },
        {
          id: 5,
          text: "Một công nghệ mạng chạy trên cáp đồng trục của TV",
          correctTermId: 5,
        },
        {
          id: 6,
          text: "Bảng mạch cho phép máy tính để bàn kết nối mạng",
          correctTermId: 6,
        },
      ];

    return Lab8;
  };
})();
