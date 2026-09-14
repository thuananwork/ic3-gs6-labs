/**
 * Lab 18: Các Hành vi Nguy hiểm
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab18 = window.AGY_LABS[18] = function (env) {
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

    function Lab18({ onSuccess: a }) {
      const [n, i] = reactExports.useState("baiting"),
        [l, c] = reactExports.useState(0),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(!1),
        [N, M] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        d && u && p && b && N && a();
      }, [d, u, p, b, N, a]);
      const [y, I] = reactExports.useState("usb"),
        [R, z] = reactExports.useState("hallway"),
        [A, O] = reactExports.useState("website"),
        [L, le] = reactExports.useState(0),
        [P, G] = reactExports.useState(""),
        ee = () => {
          (z("hallway"), O("website"), le(0), G(""));
        },
        ce = (_e) => {
          if (_e === "safe")
            (z("outcome_safe"), !d && A !== "website" && c((Ue) => Ue + 10));
          else {
            z("outcome_danger");
            let Ue = 0;
            const Ke = setInterval(() => {
              ((Ue += 20),
                le(Ue),
                Ue === 20 && G("Kích hoạt AutoRun.inf..."),
                Ue === 60 && G("Ghi tệp tin lén lút: trojan_keylogger.exe..."),
                Ue === 100 &&
                  (G("Đồng bộ dữ liệu sang Server Hacker thành công!"),
                  clearInterval(Ke)));
            }, 300);
          }
        },
        V = (_e) => {
          _e === "safe"
            ? (O("outcome_safe"), !d && R !== "hallway" && c((Ue) => Ue + 10))
            : O("outcome_danger");
        },
        pe = () => {
          (m(!0), c((_e) => _e + 20));
        },
        [Ie, se] = reactExports.useState([
          {
            sender: "bot",
            text: "Chào em! Nick em đẹp quá. Anh đang có code tặng 5,000 Robux miễn phí cho học sinh nè, em có muốn nhận không? 🎁✨",
            timestamp: "20:10",
          },
        ]),
        [de, _] = reactExports.useState(1),
        [U, Z] = reactExports.useState(!1),
        [be, he] = reactExports.useState(null),
        E = () => {
          (se([
            {
              sender: "bot",
              text: "Chào em! Nick em đẹp quá. Anh đang có code tặng 5,000 Robux miễn phí cho học sinh nè, em có muốn nhận không? 🎁✨",
              timestamp: "20:10",
            },
          ]),
            _(1),
            Z(!1),
            he(null));
        },
        v = (_e, Ue, Ke = null) => {
          const ot = { sender: "user", text: _e, timestamp: "20:11" };
          (se((w) => [...w, ot]),
            setTimeout(() => {
              let w = "";
              Ue === 2
                ? (w =
                    "Tuyệt vời! Anh là Admin của Roblox Việt Nam. Giờ em gửi tên đăng nhập với mật khẩu tài khoản để anh kích hoạt Robux thẳng vào ví nhé!")
                : Ue === 3
                  ? (w =
                      "Hacker nào đâu, anh uy tín lắm. Không đưa mật khẩu thì anh gửi link web tri ân, em tự vào đăng nhập Facebook/Gmail để nhận nhé: roblox-gift-codes.net/claim")
                  : Ue === 4
                    ? (w =
                        "Anh nạp xong rồi đó! Điện thoại em vừa báo mã OTP 6 số đúng không? Gửi nhanh mã đó cho anh để kích hoạt tài khoản nhận Robux nha!")
                    : Ue === 5
                      ? (w =
                          "Hahaha! Cảm ơn nhóc nhé! Nick Roblox và Facebook của em đã chính thức bị anh lấy mất rồi!")
                      : Ue === 6
                        ? (w =
                            "Em đăng nhập tài khoản Facebook trên trang web đó chưa? Anh chưa nhận được mật khẩu em gõ vào. Gõ lại giúp anh nhé!")
                        : Ue === 7 &&
                          (w =
                            "Này! Em cảnh giác quá đấy. Thôi anh đi tìm đứa khác dễ lừa hơn!");
              const C = { sender: "bot", text: w, timestamp: "20:12" };
              (se((Ee) => [...Ee, C]),
                _(Ue),
                Ke && (Z(!0), he(Ke), Ke === "saved" && c((Ee) => Ee + 20)));
            }, 600));
        },
        K = () => {
          g(!0);
        },
        [te, je] = reactExports.useState([]),
        [Se, He] = reactExports.useState(null),
        [Xe, Qe] = reactExports.useState(!1),
        qe = {
          sender: {
            id: "sender",
            title: "Đầu số hoặc Email giả mạo (Fake Source)",
            desc: 'Email gửi từ địa chỉ lạ "canbo-hinhsu113@gmail-police-vietnam.net" hoặc cuộc gọi có đầu số lạ quốc tế (+44...). Cơ quan công an chính thống không bao giờ làm việc qua gmail công cộng hoặc số máy lạ.',
          },
          threat: {
            id: "threat",
            title: "Đe dọa khởi tố / Đi tù khẩn cấp (Arrest Threat)",
            desc: 'Cụm từ "LẬP TỨC KHỞI TỐ, BẮT GIÂM TRONG 2 GIỜ" tạo sự hoảng loạn tột độ nhằm ép buộc nạn nhân làm theo. Công an làm việc theo quy trình, có giấy triệu tập gửi tận nhà, không đe dọa gián tiếp.',
          },
          demand: {
            id: "demand",
            title: "Yêu cầu mật khẩu và chuyển tiền (Money/Cred Request)",
            desc: 'Yêu cầu chuyển "tiền tạm giữ để chứng minh vô tội" hoặc đòi thông tin đăng nhập ngân hàng/mã OTP. Cơ quan điều tra tuyệt đối không bao giờ thu giữ tiền trực tuyến hoặc hỏi mật khẩu.',
          },
          link: {
            id: "link",
            title: "Đường dẫn liên kết giả mạo nguy hiểm (Phishing Link)",
            desc: 'Đường dẫn bắt đầu bằng http:// (không có bảo mật https) hoặc tên miền lạ hoắc, mạo danh cơ quan tư pháp: "chuyengan-dieu-tra-ma-tuy.gq". Các trang web chính phủ phải kết thúc bằng đuôi ".gov.vn".',
          },
        },
        at = (_e) => {
          if (!te.includes(_e)) {
            const Ue = [...te, _e];
            (je(Ue), Ue.length === 4 && (Qe(!0), c((Ke) => Ke + 20)));
          }
          He(_e);
        },
        ze = () => {
          (je([]), He(null), Qe(!1));
        },
        De = () => {
          f(!0);
        },
        [tt, it] = reactExports.useState("select"),
        oe = (_e) => {
          _e === "safe"
            ? (it("outcome_safe"), c((Ue) => Ue + 20))
            : it("outcome_danger");
        },
        ie = () => {
          it("select");
        },
        ge = () => {
          k(!0);
        },
        [ae, Ae] = reactExports.useState("select"),
        Q = (_e) => {
          _e === "safe"
            ? (Ae("outcome_safe"), c((Ue) => Ue + 20))
            : Ae("outcome_danger");
        },
        Te = () => {
          Ae("select");
        },
        $e = () => {
          M(!0);
        };
      return jsxRuntimeExports.jsxs("div", {
        id: "activity-18",
        className:
          "space-y-6 animate-fadeIn text-slate-800 dark:text-slate-100",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 text-slate-800 dark:text-white shadow-lg",
            children: [
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute right-0 top-0 -mt-6 -mr-6 h-40 w-32 rounded-full bg-red-500/10 blur-2xl",
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "absolute left-0 bottom-0 -mb-6 -ml-6 h-40 w-32 rounded-full bg-blue-500/10 blur-2xl",
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-center justify-between gap-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "text-left space-y-2",
                    children: [
                      jsxRuntimeExports.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/20 px-5 sm:px-6 py-1 text-sm sm:text-base font-medium font-black text-red-500 dark:text-red-400",
                        children: [
                          jsxRuntimeExports.jsx(Skull, {
                            className: "h-4 w-4 animate-pulse",
                          }),
                          " AN TOÀN TRỰC TUYẾN",
                        ],
                      }),
                      jsxRuntimeExports.jsx("h1", {
                        className:
                          "text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white",
                        children: "Lab 18: Các hành vi nguy hiểm trên Internet",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-350 max-w-3xl font-semibold leading-relaxed",
                        children:
                          "Rèn luyện phản xạ, cảnh giác trước các thủ đoạn lừa đảo phổ biến: Baiting, Catfishing, Social Engineering, Spoofing và Internet Fraud thông qua các mô phỏng trực quan, ngắn gọn.",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-slate-100 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shrink-0 flex flex-col items-center justify-center min-w-[160px] shadow-xs",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-extrabold tracking-wider block uppercase",
                        children: "ĐIỂM KỸ NĂNG MẠNG",
                      }),
                      jsxRuntimeExports.jsxs("span", {
                        className:
                          "text-4xl font-black text-amber-500 dark:text-amber-400 tracking-tighter block my-1 font-mono",
                        children: [
                          l,
                          " ",
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-bold",
                            children: "PTS",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-1.5 mt-1",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: `h-2.5 w-2.5 rounded-full ${d ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
                            title: "Baiting",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: `h-2.5 w-2.5 rounded-full ${u ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
                            title: "Catfishing",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: `h-2.5 w-2.5 rounded-full ${p ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
                            title: "Social Engineering",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: `h-2.5 w-2.5 rounded-full ${b ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
                            title: "Spoofing",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: `h-2.5 w-2.5 rounded-full ${N ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`,
                            title: "Internet Fraud",
                          }),
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-bold ml-1",
                            children: [
                              "(",
                              [d, u, p, b, N].filter(Boolean).length,
                              "/5)",
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
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",
            children: [
              {
                id: "baiting",
                label: "1. BAITING",
                icon: Usb,
                completed: d,
                color:
                  "border-amber-500/30 text-amber-600 dark:text-amber-500 active:bg-amber-600",
                activeBg: "bg-amber-600 border-amber-500 text-white shadow-md",
              },
              {
                id: "catphishing",
                label: "2. CATFISHING",
                icon: UserX,
                completed: u,
                color:
                  "border-pink-500/30 text-pink-600 dark:text-pink-500 active:bg-pink-600",
                activeBg: "bg-pink-600 border-pink-500 text-white shadow-md",
              },
              {
                id: "social_engineering",
                label: "3. SOCIAL ENGINEERING",
                icon: ShieldAlert,
                completed: p,
                color:
                  "border-blue-500/30 text-blue-600 dark:text-blue-500 active:bg-blue-600",
                activeBg: "bg-blue-600 border-blue-500 text-white shadow-md",
              },
              {
                id: "spoofing",
                label: "4. SPOOFING",
                icon: UserCheck,
                completed: b,
                color:
                  "border-purple-500/30 text-purple-600 dark:text-purple-500 active:bg-purple-600",
                activeBg:
                  "bg-purple-600 border-purple-500 text-white shadow-md",
              },
              {
                id: "internet_fraud",
                label: "5. INTERNET FRAUD",
                icon: Coins,
                completed: N,
                color:
                  "border-emerald-500/30 text-emerald-600 dark:text-emerald-500 active:bg-emerald-600",
                activeBg:
                  "bg-emerald-600 border-emerald-500 text-white shadow-md",
              },
            ].map((_e) => {
              const Ue = _e.icon,
                Ke = n === _e.id;
              return jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => i(_e.id),
                  className: `p-8 sm:p-5 sm:p-5 sm:p-6 rounded-3xl border text-center font-bold text-sm sm:text-base font-medium cursor-pointer transition-all duration-200 relative group flex flex-col items-center justify-center gap-2 ${Ke ? _e.activeBg : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 shadow-xs"}`,
                  children: [
                    _e.completed &&
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "absolute right-2 top-2 bg-emerald-500 text-white p-0.5 rounded-full text-[8px] shadow-xs",
                        children: jsxRuntimeExports.jsx(Check, {
                          className: "h-2.5 w-2.5 stroke-[4]",
                        }),
                      }),
                    jsxRuntimeExports.jsx(Ue, {
                      className: `h-5 w-5 sm:h-6 sm:w-6 ${Ke ? "text-white" : _e.color.split(" ")[1]}`,
                    }),
                    jsxRuntimeExports.jsx("span", {
                      className: "truncate max-w-full tracking-tight",
                      children: _e.label,
                    }),
                  ],
                },
                _e.id,
              );
            }),
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden min-h-[500px] flex flex-col justify-between",
            children: [
              n === "baiting" &&
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className: "text-left",
                          children: jsxRuntimeExports.jsxs("h3", {
                            className:
                              "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx(Usb, {
                                className:
                                  "h-5.5 w-5.5 text-amber-500 animate-pulse",
                              }),
                              "Mô phỏng 1: Baiting (Nhử mồi) - Cạm bẫy tò mò & Lòng tham",
                            ],
                          }),
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "inline-flex bg-slate-150 dark:bg-slate-900 p-1 rounded-3xl text-sm sm:text-base font-medium shadow-inner",
                          children: [
                            jsxRuntimeExports.jsx("button", {
                              onClick: () => {
                                (I("usb"), ee());
                              },
                              className: `px-5 sm:px-6 py-3 rounded-3xl font-bold transition-all cursor-pointer ${y === "usb" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`,
                              children: "📟 USB Hành Lang",
                            }),
                            jsxRuntimeExports.jsx("button", {
                              onClick: () => {
                                (I("download"), ee());
                              },
                              className: `px-5 sm:px-6 py-3 rounded-3xl font-bold transition-all cursor-pointer ${y === "download" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`,
                              children: "🌐 Link Hack Game",
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-5 sm:p-6 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 rounded-3xl text-left",
                      children: jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                        children: [
                          "💡 ",
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-amber-600 dark:text-amber-400 font-extrabold",
                            children: "Khái niệm cốt lõi:",
                          }),
                          " Baiting là hành vi lợi dụng sự tò mò hoặc lòng tham, dụ dỗ nạn nhân tải tệp chứa mã độc hoặc cắm thiết bị lưu trữ vật lý (như USB) nhiễm độc vào máy tính.",
                        ],
                      }),
                    }),
                    y === "usb" &&
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "lg:col-span-5 text-left space-y-4 flex flex-col justify-between",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "inline-block text-sm sm:text-base font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                    children: "TÌNH HUỐNG THỰC TẾ",
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children: [
                                      "Nhìn thấy chiếc USB màu đỏ bí ẩn rơi dọc hành lang lớp học, nhãn dán: ",
                                      jsxRuntimeExports.jsx("strong", {
                                        className: "text-red-500",
                                        children:
                                          '"ĐỀ THI TIN HỌC CUỐI KỲ II (BẢO MẬT)"',
                                      }),
                                      ". Bạn bè rủ rê cắm thử xem trước đáp án.",
                                    ],
                                  }),
                                ],
                              }),
                              R === "hallway"
                                ? jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-3 pt-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => ce("danger"),
                                        className:
                                          "w-full p-5 sm:p-6 bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-98",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-lg",
                                            children: "💻",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Cắm ngay USB vào máy tính",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => ce("safe"),
                                        className:
                                          "w-full p-5 sm:p-6 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-98",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-lg",
                                            children: "👮",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Đem nộp phòng Thầy cô / Bảo vệ",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsxs("button", {
                                    onClick: ee,
                                    className:
                                      "flex items-center gap-2 text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 font-bold hover:underline cursor-pointer self-start pt-4",
                                    children: [
                                      jsxRuntimeExports.jsx(RotateCcw, {
                                        className: "h-4 w-4",
                                      }),
                                      " Thử lại tình huống này",
                                    ],
                                  }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "lg:col-span-7 bg-slate-50 dark:bg-slate-950 rounded-3xl border-2 border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden min-h-[320px] shadow-lg relative justify-between",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-200 dark:bg-slate-900 px-5 sm:px-6 py-3 border-b border-slate-300 dark:border-slate-800 flex items-center justify-between text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium font-mono font-bold select-none",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx(Laptop, {
                                        className: "h-4.5 w-4.5 text-amber-500",
                                      }),
                                      " VIRTUAL OS SANDBOX",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "h-2.5 w-2.5 rounded-full bg-red-500",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex-1 p-5 sm:p-6 flex flex-col items-center justify-center bg-radial from-slate-100 to-white dark:from-slate-900 dark:to-slate-950",
                                children: [
                                  R === "hallway" &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-center space-y-3 animate-scaleUp",
                                      children: [
                                        jsxRuntimeExports.jsx(Usb, {
                                          className:
                                            "h-14 w-14 text-amber-500 animate-bounce mx-auto",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-black tracking-widest block",
                                          children: "CHỜ CẮM USB...",
                                        }),
                                      ],
                                    }),
                                  R === "outcome_safe" &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-center space-y-3 animate-fadeIn max-w-sm",
                                      children: [
                                        jsxRuntimeExports.jsx(Shield, {
                                          className:
                                            "h-12 w-12 text-emerald-500 dark:text-emerald-400 mx-auto animate-pulse",
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide",
                                          children: "CHÍNH XÁC & BẢO MẬT",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed font-semibold",
                                          children:
                                            "USB rơi vương vãi thường chứa mã độc tự khởi chạy (Rubber Ducky) lấy cắp dữ liệu tức thì. Em đã hành xử rất chuẩn mực!",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: pe,
                                          className:
                                            "px-5 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all hover:scale-105 active:scale-95 hover:scale-103 transition-all transition-all shadow-md",
                                          children: "Hoàn thành bẫy USB (+20đ)",
                                        }),
                                      ],
                                    }),
                                  R === "outcome_danger" &&
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "w-full text-center space-y-3 animate-fadeIn",
                                      children:
                                        L < 100
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "space-y-3 p-5 sm:p-6 bg-red-50/70 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 rounded-3xl max-w-sm mx-auto text-left shadow-xs",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium text-red-600 dark:text-red-400 font-mono font-black block animate-pulse",
                                                  children:
                                                    "⚙️ ĐANG KHAI THÁC PHẦN CỨNG...",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "h-full bg-red-600 transition-all duration-350",
                                                        style: {
                                                          width: `${L}%`,
                                                        },
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 block font-mono font-bold",
                                                  children: P,
                                                }),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "space-y-2 animate-scaleUp max-w-sm mx-auto p-5 sm:p-6 border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 rounded-3xl",
                                              children: [
                                                jsxRuntimeExports.jsx(Skull, {
                                                  className:
                                                    "h-10 w-10 text-red-500 mx-auto animate-bounce",
                                                }),
                                                jsxRuntimeExports.jsx("h4", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-red-600 dark:text-red-400 tracking-wider",
                                                  children:
                                                    "HỆ THỐNG BỊ CHIẾM QUYỀN!",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-medium text-red-700 dark:text-red-200 leading-relaxed font-semibold",
                                                  children:
                                                    "Mã độc Keylogger đã bí mật cài đặt, toàn bộ mật khẩu mạng xã hội và gõ phím của em đã được gửi về máy chủ Hacker!",
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
                    y === "download" &&
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "lg:col-span-5 text-left space-y-4 flex flex-col justify-between",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "inline-block text-sm sm:text-base font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                    children: "CẠM BẪY PHẦN MỀM GIAO DIỆN SỐ",
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 font-bold leading-relaxed",
                                    children: [
                                      "Xem video hướng dẫn trên YouTube tải file hack game miễn phí vô hạn tiền xu. Liên kết yêu cầu: ",
                                      jsxRuntimeExports.jsx("strong", {
                                        className:
                                          "text-purple-600 dark:text-purple-400",
                                        children:
                                          '"Tắt chương trình diệt virus và chạy tệp Hack_Full_Vip.exe"',
                                      }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                              A === "website"
                                ? jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-3 pt-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => V("danger"),
                                        className:
                                          "w-full p-5 sm:p-6 bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-98",
                                        children: [
                                          jsxRuntimeExports.jsx(Download, {
                                            className: "h-5 w-5 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Tải về & Chạy công cụ hack",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: () => V("safe"),
                                        className:
                                          "w-full p-5 sm:p-6 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-98",
                                        children: [
                                          jsxRuntimeExports.jsx(ShieldCheck, {
                                            className: "h-5 w-5 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Tắt trang web ngay lập tức",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsxs("button", {
                                    onClick: ee,
                                    className:
                                      "flex items-center gap-2 text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 font-bold hover:underline cursor-pointer self-start pt-4",
                                    children: [
                                      jsxRuntimeExports.jsx(RotateCcw, {
                                        className: "h-4 w-4",
                                      }),
                                      " Thử lại tình huống này",
                                    ],
                                  }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "lg:col-span-7 bg-slate-50 dark:bg-slate-950 rounded-3xl border-2 border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden min-h-[320px] shadow-lg relative justify-between",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "bg-slate-200 dark:bg-slate-900 px-5 sm:px-6 py-3 border-b border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium font-mono font-bold select-none",
                                children: jsxRuntimeExports.jsx("span", {
                                  children: "🌐 roblox-vip-hacks.net/downloads",
                                }),
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex-1 p-5 sm:p-6 flex flex-col items-center justify-center bg-white dark:bg-slate-950",
                                children: [
                                  A === "website" &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-center space-y-3 animate-scaleUp bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 p-5 sm:p-6 rounded-3xl max-w-sm shadow-sm",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "inline-block text-sm sm:text-base font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 font-black px-2 py-0.5 rounded-full uppercase tracking-wider",
                                          children: "AUTO GENERATOR",
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 mt-2",
                                          children:
                                            "HACK TẶNG 50,000 ROBUX FREE",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-yellow-600 dark:text-yellow-500 font-bold leading-relaxed",
                                          children:
                                            "⚠️ Đề xuất: Tắt Windows Defender để tool tiêm mã độc can thiệp vào máy chủ game.",
                                        }),
                                      ],
                                    }),
                                  A === "outcome_safe" &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-center space-y-3 animate-fadeIn max-w-sm",
                                      children: [
                                        jsxRuntimeExports.jsx(Shield, {
                                          className:
                                            "h-12 w-12 text-emerald-500 dark:text-emerald-400 mx-auto animate-pulse",
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide",
                                          children: "TRÁNH ĐƯỢC RANSOMWARE",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed font-semibold",
                                          children:
                                            "Mọi bản hack, crack game kêu tắt trình diệt virus thực chất là lừa đảo cài đặt phần mềm độc hại tống tiền phá hủy ổ cứng. Cảnh giác cực cao!",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: pe,
                                          className:
                                            "px-5 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all hover:scale-105 active:scale-95 hover:scale-103 transition-all transition-all shadow-md",
                                          children:
                                            "Hoàn thành bẫy Online (+20đ)",
                                        }),
                                      ],
                                    }),
                                  A === "outcome_danger" &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-center space-y-3 animate-scaleUp max-w-sm bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500 p-5 sm:p-6 rounded-3xl shadow-md",
                                      children: [
                                        jsxRuntimeExports.jsx(Lock, {
                                          className:
                                            "h-10 w-10 text-red-500 mx-auto animate-bounce",
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-sm sm:text-base font-medium font-black text-red-600 dark:text-red-400 tracking-wider",
                                          children: "MÁY TÍNH BỊ KHÓA FILE!",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-red-700 dark:text-red-200 leading-relaxed font-semibold",
                                          children:
                                            "Toàn bộ bài tập, ảnh gia đình đã bị mã hóa định dạng AES-256. Hacker yêu cầu nạp phạt 100 USD để mở khóa. Bài học nhớ đời!",
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
              n === "catphishing" &&
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "text-left pb-4 border-b border-slate-200 dark:border-slate-800",
                      children: jsxRuntimeExports.jsxs("h3", {
                        className:
                          "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(UserX, {
                            className: "h-5.5 w-5.5 text-pink-500",
                          }),
                          "Mô phỏng 2: Catfishing (Giả danh trực tuyến) - Hồ sơ giả cho mục đích lừa đảo",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-5 sm:p-6 bg-pink-500/5 dark:bg-pink-500/10 border border-pink-500/20 rounded-3xl text-left",
                      children: jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                        children: [
                          "💡 ",
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-pink-600 dark:text-pink-400 font-extrabold",
                            children: "Khái niệm cốt lõi:",
                          }),
                          " Catfishing là hành vi tạo hồ sơ/danh tính giả trên mạng (dùng hình ảnh, thông tin người khác) để lừa đảo tình cảm hoặc tài sản của nạn nhân.",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-4 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 text-left flex flex-col justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "inline-block text-sm sm:text-base font-medium bg-pink-500/10 text-pink-600 dark:text-pink-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                  children: "QUÉT ĐỐI TƯỢNG NGHI VẤN",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-3 mt-4",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-pink-500 overflow-hidden flex items-center justify-center font-bold text-xl",
                                      children: "🤴",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "min-w-0",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white block truncate",
                                          children: "Admin_Roblox_TriAn2026",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 block font-bold mt-0.5",
                                          children: "Nick mới lập 1 ngày",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "mt-4 p-5 sm:p-6 bg-yellow-500/5 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 rounded-3xl text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold space-y-2 shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsx("strong", {
                                      className:
                                        "text-red-500 text-sm sm:text-base font-medium block font-black",
                                      children: "🚩 DẤU HIỆU CATFISHING:",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      children:
                                        "• Sử dụng avatar hotboy/hotgirl lôi cuốn lượm lặt trên mạng.",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      children:
                                        "• Chủ động làm quen nhiệt tình, vẽ ra các phần thưởng siêu khủng.",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-bold italic leading-relaxed pt-4 border-t border-slate-200 dark:border-slate-800",
                              children:
                                "💡 Bài học: Không bao giờ tin tưởng tuyệt đối người lạ quen trực tuyến dù họ tự đắc là bất kì ai.",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-8 bg-white dark:bg-slate-950 rounded-3xl border-2 border-slate-200 dark:border-slate-800 flex flex-col h-[400px] shadow-lg relative justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-100 dark:bg-slate-900 px-5 sm:px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-700 dark:text-slate-300 select-none rounded-t-2xl",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-3 w-3 rounded-full bg-emerald-500 animate-pulse",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-medium font-black",
                                      children: "Admin_Roblox_TriAn2026",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: E,
                                  className:
                                    "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 p-1 cursor-pointer transition-all hover:rotate-180",
                                  title: "Khởi động lại chat",
                                  children: jsxRuntimeExports.jsx(RotateCcw, {
                                    className: "h-4.5 w-4.5",
                                  }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "flex-1 p-5 sm:p-6 overflow-y-auto space-y-3 flex flex-col justify-end bg-slate-50/50 dark:bg-slate-950",
                              children: Ie.map((_e, Ue) =>
                                jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: `flex items-end gap-2.5 ${_e.sender === "user" ? "justify-end" : "justify-start"}`,
                                    children: jsxRuntimeExports.jsx("div", {
                                      className: `max-w-[85%] rounded-3xl p-8 sm:p-5 text-sm sm:text-base font-medium text-left leading-relaxed font-bold shadow-xs ${_e.sender === "user" ? "bg-pink-600 text-white rounded-br-none" : "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none"}`,
                                      children: _e.text,
                                    }),
                                  },
                                  Ue,
                                ),
                              ),
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "bg-slate-100 dark:bg-slate-900 p-8 sm:p-5 border-t border-slate-200 dark:border-slate-800 text-left rounded-b-2xl",
                              children: U
                                ? jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "text-center p-8 sm:p-5 space-y-3",
                                    children: [
                                      be === "hacked"
                                        ? jsxRuntimeExports.jsx("div", {
                                            className:
                                              "bg-red-50 dark:bg-red-950/80 border-2 border-red-500 rounded-3xl p-5 sm:p-6 text-sm sm:text-base font-medium text-red-700 dark:text-red-200 font-extrabold leading-relaxed",
                                            children:
                                              "🚨 TÀI KHOẢN ĐÃ BỊ CƯỚP ĐOẠT! Kẻ xấu lập tức lấy mật khẩu, đổi mail liên kết và giả danh em đi mượn tiền bạn bè.",
                                          })
                                        : jsxRuntimeExports.jsx("div", {
                                            className:
                                              "bg-emerald-50 dark:bg-emerald-950/80 border-2 border-emerald-500 rounded-3xl p-5 sm:p-6 text-sm sm:text-base font-medium text-emerald-700 dark:text-emerald-200 font-extrabold leading-relaxed",
                                            children:
                                              "🛡️ AN TOÀN TUYỆT ĐỐI! Em giữ vững quy tắc: Không gửi Mật khẩu, Không đưa OTP, Không bấm link lạ để giữ tài khoản an toàn!",
                                          }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-center gap-3",
                                        children: [
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: E,
                                            className:
                                              "px-5 sm:px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium font-black rounded-3xl hover:bg-slate-350 dark:hover:bg-slate-700 transition-all cursor-pointer",
                                            children: "Trải nghiệm lại",
                                          }),
                                          be === "saved" &&
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: K,
                                              disabled: u,
                                              className:
                                                "px-5 sm:px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl disabled:opacity-40 transition-all shadow-md cursor-pointer",
                                              children: u
                                                ? "✓ Đã nhận điểm"
                                                : "Hoàn thành bẫy quan hệ (+20đ)",
                                            }),
                                        ],
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-extrabold tracking-wider block uppercase",
                                        children: "LỰA CHỌN CỦA EM:",
                                      }),
                                      de === 1 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Thích thế ạ! Nhận Robux thế nào hả anh? 😍",
                                                  2,
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Thích quá, hỏi cách nhận",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Lại lừa đảo rồi. Em báo cáo và chặn anh nhé! ⚠️",
                                                  3,
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children: "💬 Nghi ngờ, từ chối",
                                            }),
                                          ],
                                        }),
                                      de === 2 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Acc em là: 'hocsinh', mật khẩu: '123456'. Anh nạp nhanh hộ em nhé!",
                                                  4,
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Đưa tài khoản + mật khẩu",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Không bao giờ đưa mật khẩu, Thầy giáo dạy đó là tuyệt mật ạ!",
                                                  3,
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Từ chối cung cấp mật khẩu",
                                            }),
                                          ],
                                        }),
                                      de === 3 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Dạ vậy em bấm vào link đăng nhập tài khoản xem sao...",
                                                  6,
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Tin tưởng click link lạ",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Link phishing mạo danh lừa đảo! Block và báo cáo đây! 🚫",
                                                  7,
                                                  "saved",
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Vạch trần liên kết, chặn ngay",
                                            }),
                                          ],
                                        }),
                                      de === 4 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Mã OTP gửi về điện thoại em là: 554310 đây anh!",
                                                  5,
                                                  "hacked",
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Gửi ngay mã OTP điện thoại",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Tuyệt đối không đưa mã OTP xác thực đổi mật khẩu! BLOCK anh!",
                                                  7,
                                                  "saved",
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Không đưa OTP và Chặn luôn",
                                            }),
                                          ],
                                        }),
                                      de === 6 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Để em đăng nhập lại: hocsinhtieubieu / mật khẩu: @abc12345",
                                                  5,
                                                  "hacked",
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Gõ tài khoản mật khẩu vào web",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                v(
                                                  "Trình duyệt báo web không bảo mật nguy hiểm! Em thoát ra đây.",
                                                  7,
                                                  "saved",
                                                ),
                                              className:
                                                "p-8 sm:p-5 bg-white hover:bg-slate-50 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-medium font-black rounded-3xl text-left border border-slate-200 dark:border-slate-700 cursor-pointer transition-all hover:translate-x-1",
                                              children:
                                                "💬 Nhìn cảnh báo đỏ, thoát gấp",
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
              n === "social_engineering" &&
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "text-left pb-4 border-b border-slate-200 dark:border-slate-800",
                      children: jsxRuntimeExports.jsxs("h3", {
                        className:
                          "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(ShieldAlert, {
                            className: "h-5.5 w-5.5 text-blue-500",
                          }),
                          "Mô phỏng 3: Social Engineering (Kỹ nghệ xã hội) - Mạo danh đe dọa đi tù",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-5 sm:p-6 bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 rounded-3xl text-left",
                      children: jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                        children: [
                          "💡 ",
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-blue-600 dark:text-blue-400 font-extrabold",
                            children: "Khái niệm cốt lõi:",
                          }),
                          " Social Engineering (Kỹ nghệ xã hội) là phương pháp thao túng tâm lý nhằm đánh lừa nạn nhân tự nguyện giao nộp thông tin bảo mật, tài sản hoặc quyền truy cập.",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-4 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 text-left flex flex-col justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "inline-block text-sm sm:text-base font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                  children: "MÁY QUÉT DETECTIVE",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-bold mt-2 leading-relaxed",
                                  children: [
                                    "Em nhận được một thông báo khẩn cấp từ cơ quan giả danh. Hãy đóng vai Thám tử điều tra, click vào ",
                                    jsxRuntimeExports.jsx("strong", {
                                      className: "text-red-500",
                                      children:
                                        "4 vùng đỏ đáng nghi (🚩 Red Flags)",
                                    }),
                                    " để vạch trần kẻ lừa đảo!",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-2 gap-2 mt-4 text-sm sm:text-base font-medium font-black",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl text-center border transition-all ${te.includes("sender") ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-white dark:bg-slate-950 text-slate-400 border-slate-200 dark:border-slate-800"}`,
                                      children: te.includes("sender")
                                        ? "✓ Đầu số giả"
                                        : "🚩 SĐT/Mail lạ",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl text-center border transition-all ${te.includes("threat") ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-white dark:bg-slate-950 text-slate-400 border-slate-200 dark:border-slate-800"}`,
                                      children: te.includes("threat")
                                        ? "✓ Đe dọa khẩn"
                                        : "🚩 Dọa đi tù",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl text-center border transition-all ${te.includes("demand") ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-white dark:bg-slate-950 text-slate-400 border-slate-200 dark:border-slate-800"}`,
                                      children: te.includes("demand")
                                        ? "✓ Đòi tiền cọc"
                                        : "🚩 Yêu cầu tiền",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl text-center border transition-all ${te.includes("link") ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-white dark:bg-slate-950 text-slate-400 border-slate-200 dark:border-slate-800"}`,
                                      children: te.includes("link")
                                        ? "✓ Link mạo danh"
                                        : "🚩 Link liên kết",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx(AnimatePresence, {
                              mode: "wait",
                              children: Se
                                ? jsxRuntimeExports.jsxs(
                                    motion.div,
                                    {
                                      initial: { opacity: 0, y: 5 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -5 },
                                      className:
                                        "p-8 sm:p-5 bg-blue-50 dark:bg-slate-950/60 border border-blue-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium leading-relaxed mt-4 shadow-xs",
                                      children: [
                                        jsxRuntimeExports.jsxs("strong", {
                                          className:
                                            "text-blue-700 dark:text-blue-400 block uppercase font-black mb-1",
                                          children: ["🕵️‍♂️ ", qe[Se].title],
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-600 dark:text-slate-300 font-bold",
                                          children: qe[Se].desc,
                                        }),
                                      ],
                                    },
                                    Se,
                                  )
                                : jsxRuntimeExports.jsx("div", {
                                    className:
                                      "p-8 sm:p-5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-400 text-center font-bold mt-4 shadow-inner",
                                    children:
                                      "💡 Click vào các nút màu đỏ bên cạnh để phân tích kỹ thuật lừa đảo.",
                                  }),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-8 bg-slate-50 dark:bg-slate-950 rounded-3xl border-2 border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden min-h-[320px] shadow-lg relative justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-red-50 dark:bg-red-950/30 border-b border-red-200 dark:border-red-900/40 px-5 sm:px-6 py-3 flex items-center justify-between text-red-600 dark:text-red-400 text-sm sm:text-base font-medium font-mono font-bold select-none rounded-t-2xl",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx(PhoneCall, {
                                      className: "h-4.5 w-4.5 animate-pulse",
                                    }),
                                    " ĐANG CUỘC GỌI / EMAIL NGHI VẤN",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: ze,
                                  className:
                                    "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 p-1 cursor-pointer transition-all hover:rotate-180",
                                  children: jsxRuntimeExports.jsx(RotateCcw, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-center text-left text-slate-800 dark:text-slate-300 select-none text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-2 bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 leading-normal",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-wrap items-center gap-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 font-black text-sm sm:text-base font-semibold uppercase tracking-wider",
                                          children: "Từ SĐT/Gmail:",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => at("sender"),
                                          className: `px-2.5 py-1 rounded-3xl text-sm sm:text-base font-bold font-mono border transition-all cursor-pointer shadow-xs ${te.includes("sender") ? "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400" : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 text-slate-700 dark:text-slate-300"}`,
                                          children:
                                            "+84 7919 0113 (Gmail: canbohinhsu113@gmail-police-vietnam.net) 🚩",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-wrap items-center gap-2 mt-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-slate-500 font-black text-sm sm:text-base font-semibold uppercase tracking-wider",
                                          children: "Tiêu đề / Lời dọa:",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => at("threat"),
                                          className: `px-2.5 py-1 rounded-3xl text-sm sm:text-base font-bold border text-left transition-all cursor-pointer shadow-xs ${te.includes("threat") ? "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400" : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 text-slate-700 dark:text-slate-300"}`,
                                          children:
                                            "[KHẨN] TRIỆU TẬP BẮT TẠM GIAM TRONG 2 GIỜ, PHẠT 15 NĂM TÙ CHUYÊN ÁN MA TÚY! 🚩",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-3 leading-relaxed font-bold bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-red-600 dark:text-red-400 uppercase tracking-tight text-sm sm:text-base font-medium flex items-center gap-1.5 justify-center bg-red-100/40 dark:bg-red-950/20 py-3 rounded-3xl font-black",
                                      children:
                                        "⚠️ CẢNH SÁT HÌNH SỰ - THÔNG BÁO SAI PHẠM",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-slate-700 dark:text-slate-300 font-bold leading-relaxed",
                                      children:
                                        "Tài khoản cá nhân của bạn liên quan trực tiếp đến Chuyên án buôn bán ma túy và Rửa tiền tại biên giới quốc gia. Yêu cầu tuân thủ ngay lập tức:",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "bg-red-50 dark:bg-red-950/10 p-8 sm:p-5 rounded-3xl text-red-800 dark:text-red-200 border border-red-200 dark:border-red-900/20",
                                      children: jsxRuntimeExports.jsx(
                                        "button",
                                        {
                                          onClick: () => at("demand"),
                                          className: `px-2 py-3 rounded-3xl text-left border transition-all cursor-pointer shadow-xs ${te.includes("demand") ? "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400" : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 text-slate-700 dark:text-slate-300"}`,
                                          children:
                                            "👉 Cung cấp thông tin ngân hàng và Chuyển 15.000.000 VNĐ tạm cọc vào ví an ninh chứng minh vô tội 🚩",
                                        },
                                      ),
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className: "text-center",
                                      children: jsxRuntimeExports.jsx(
                                        "button",
                                        {
                                          onClick: () => at("link"),
                                          className: `px-5 sm:px-5 py-3 rounded-3xl font-mono text-sm sm:text-base font-medium border transition-all cursor-pointer shadow-xs ${te.includes("link") ? "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400" : "bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-red-500 dark:hover:border-red-500 text-blue-600 dark:text-blue-400"}`,
                                          children:
                                            "Xác minh hồ sơ tại link: http://dieutra-dichvusocongan.gq 🚩",
                                        },
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Xe &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "absolute inset-x-4 bottom-4 bg-emerald-50 dark:bg-emerald-950 border-2 border-emerald-500 rounded-3xl p-5 sm:p-6 text-center space-y-3 shadow-xl animate-scaleUp",
                                children: [
                                  jsxRuntimeExports.jsx(ShieldCheck, {
                                    className:
                                      "h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider",
                                    children:
                                      "VẠCH TRẦN KỸ NGHỆ XÃ HỘI THÀNH CÔNG!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-emerald-800 dark:text-emerald-100 font-bold leading-relaxed",
                                    children:
                                      "Cơ quan pháp luật không bao giờ làm việc qua điện thoại hay nhắn tin đòi tiền, tài khoản ngân hàng. Gặp tình huống này, hãy giữ bình tĩnh báo ngay cho bố mẹ hoặc công an gần nhất!",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: De,
                                    disabled: p,
                                    className:
                                      "px-5 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl shadow-md cursor-pointer transition-all hover:scale-105 active:scale-95 hover:scale-103 transition-all transition-all",
                                    children: p
                                      ? "✓ Đã hoàn thành"
                                      : "Nhận điểm Social Engineering (+20đ)",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              n === "spoofing" &&
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "text-left pb-4 border-b border-slate-200 dark:border-slate-800",
                      children: jsxRuntimeExports.jsxs("h3", {
                        className:
                          "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(UserCheck, {
                            className: "h-5.5 w-5.5 text-purple-500",
                          }),
                          "Mô phỏng 4: Spoofing (Tấn công mạo danh trùng lặp)",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-5 sm:p-6 bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 rounded-3xl text-left",
                      children: jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                        children: [
                          "💡 ",
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-purple-600 dark:text-purple-400 font-extrabold",
                            children: "Khái niệm cốt lõi:",
                          }),
                          " Spoofing (Giả mạo) là kỹ thuật làm giả danh tính (như số điện thoại, email, tài khoản...) để mạo danh nguồn đáng tin cậy nhằm đánh lừa người dùng hoặc hệ thống.",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-4 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-left flex flex-col justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "inline-block text-sm sm:text-base font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                  children: "NHẬN DIỆN THỦ ĐOẠN",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-bold leading-relaxed",
                                  children:
                                    "Bạn đột ngột nhận được yêu cầu kết bạn trên Facebook từ **Nguyễn Hải Nam** (bạn thân cùng lớp 8B). Nhưng khoan đã... Bạn nhớ là mình và Nam đã là bạn bè từ rất lâu rồi mà?",
                                }),
                              ],
                            }),
                            tt === "select"
                              ? jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => oe("danger"),
                                      className:
                                        "w-full p-8 sm:p-5 bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer shadow-md hover:scale-101 active:scale-99",
                                      children:
                                        "👥 Đồng ý kết bạn ngay (Chắc bạn lập nick mới)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => oe("safe"),
                                      className:
                                        "w-full p-8 sm:p-5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer shadow-md hover:scale-101 active:scale-99",
                                      children:
                                        "🛡️ Từ chối & Chặn báo cáo mạo danh",
                                    }),
                                  ],
                                })
                              : jsxRuntimeExports.jsxs("button", {
                                  onClick: ie,
                                  className:
                                    "flex items-center gap-1.5 text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 font-black hover:underline cursor-pointer pt-6",
                                  children: [
                                    jsxRuntimeExports.jsx(RotateCcw, {
                                      className: "h-4 w-4",
                                    }),
                                    " Thử lại tình huống này",
                                  ],
                                }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-4 min-h-[260px] shadow-lg flex flex-col justify-center",
                          children: [
                            tt === "select" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4 animate-scaleUp",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 block font-black uppercase text-left tracking-wider",
                                    children:
                                      "👥 SO SÁNH 2 TÀI KHOẢN GỬI KẾT BẠN:",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 sm:grid-cols-2 gap-4 text-left",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2.5 relative overflow-hidden shadow-xs",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "absolute right-2 top-2 bg-emerald-100 dark:bg-emerald-500/25 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider",
                                            children: "BẠN CŨ",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2.5",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white flex items-center justify-center font-bold text-lg",
                                                children: "👦",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-200 block",
                                                      children:
                                                        "Nguyễn Hải Nam",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-400 block font-bold",
                                                      children:
                                                        "Đang kết bạn • 150 Bạn chung",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed font-bold",
                                            children:
                                              "📝 Hoạt động từ năm 2021. Đăng nhiều ảnh hoạt động của lớp học, tương tác liên tục hàng tuần.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border-2 border-red-200 dark:border-red-500/20 space-y-2.5 relative shadow-xs",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "absolute right-2 top-2 bg-red-100 dark:bg-red-500/25 border border-red-200 dark:border-red-500/40 text-red-800 dark:text-red-400 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider",
                                            children: "MỚI GỬI",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2.5",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white flex items-center justify-center font-bold text-lg",
                                                children: "👦",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-200 block",
                                                      children:
                                                        "Nguyễn Hải Nam",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-red-600 dark:text-red-400 font-extrabold block",
                                                      children:
                                                        "0 bạn chung • Đăng ký 1 giờ trước",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed font-bold",
                                            children:
                                              "📝 Không có bất kỳ bài viết công khai nào. Toàn bộ ảnh đại diện được tải lên mới tinh cách đây ít phút.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            tt === "outcome_safe" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "text-center space-y-4 animate-fadeIn py-6",
                                children: [
                                  jsxRuntimeExports.jsx(ShieldCheck, {
                                    className:
                                      "h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wider",
                                    children: "CHÍNH XÁC - BẢO VỆ DANH TÍNH!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 max-w-[500px] mx-auto leading-relaxed font-bold",
                                    children:
                                      "Tuyệt vời! Đây là đòn tấn công sao chép danh tính (Spoofing). Kẻ gian lấy cắp ảnh đại diện người quen của em, tạo nick trùng tên để kết bạn rồi nhắn tin mượn tiền khẩn cấp. Từ chối và chặn ngay là quyết định siêu an toàn!",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: ge,
                                    disabled: b,
                                    className:
                                      "px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer disabled:opacity-40 shadow-md transition-all hover:scale-105 active:scale-95 hover:scale-103 transition-all transition-all",
                                    children: b
                                      ? "✓ Đã cộng điểm"
                                      : "Hoàn thành bẫy Spoofing (+20đ)",
                                  }),
                                ],
                              }),
                            tt === "outcome_danger" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-red-50 dark:bg-red-950/40 border-2 border-red-500 p-5 sm:p-6 rounded-3xl text-center space-y-3 animate-scaleUp",
                                children: [
                                  jsxRuntimeExports.jsx(TriangleAlert, {
                                    className:
                                      "h-10 w-10 text-red-600 dark:text-red-500 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-red-700 dark:text-red-400 uppercase tracking-wider",
                                    children: "SẬP BẪY MẠO DANH!",
                                  }),
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-red-800 dark:text-red-200 leading-relaxed max-w-[500px] mx-auto font-bold",
                                    children: [
                                      "Kẻ gian vừa kết bạn lập tức nhắn tin: ",
                                      jsxRuntimeExports.jsx("strong", {
                                        className:
                                          "text-slate-900 dark:text-white font-extrabold",
                                        children:
                                          '"Nam đang đi trên đường bị hỏng xe cần cọc sửa 300k gấp, tài khoản ngân hàng của Nam bị lỗi nhờ bạn chuyển hộ xíu tối Nam chuyển trả nha!"',
                                      }),
                                      ". Em hoặc bạn bè dễ dàng bị cướp đoạt tiền vì nhầm tưởng là Nam thật!",
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
              n === "internet_fraud" &&
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "p-5 sm:p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "text-left pb-4 border-b border-slate-200 dark:border-slate-800",
                      children: jsxRuntimeExports.jsxs("h3", {
                        className:
                          "text-lg font-black text-slate-900 dark:text-white flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(Coins, {
                            className: "h-5.5 w-5.5 text-emerald-500",
                          }),
                          "Mô phỏng 5: Internet Fraud (Gian lận thương mại trực tuyến)",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className:
                        "p-5 sm:p-6 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-left",
                      children: jsxRuntimeExports.jsxs("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-semibold",
                        children: [
                          "💡 ",
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-emerald-600 dark:text-emerald-400 font-extrabold",
                            children: "Khái niệm cốt lõi:",
                          }),
                          " Internet Fraud (Gian lận trực tuyến) là hành vi sử dụng các dịch vụ Internet để lừa đảo, nhằm chiếm đoạt tiền bạc, tài sản hoặc thông tin cá nhân của nạn nhân.",
                        ],
                      }),
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-4 bg-slate-50 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-left flex flex-col justify-between",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "inline-block text-sm sm:text-base font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                  children: "MÔ HÌNH LỪA ĐẢO",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-bold leading-relaxed",
                                  children:
                                    "Gặp tin đăng bán xe ô tô Mazda cũ giá thanh lý cực hời chỉ **120 triệu**. Người bán tự xưng là Sĩ quan quân đội đang làm nhiệm vụ mật ngoài biên giới, yêu cầu chuyển cọc rồi cho xe quân sự giao hàng tận nhà.",
                                }),
                              ],
                            }),
                            ae === "select"
                              ? jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => Q("danger"),
                                      className:
                                        "w-full p-8 sm:p-5 bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer shadow-md hover:scale-101 active:scale-99",
                                      children:
                                        "💸 Chuyển khoản đặt cọc 15 triệu (Giữ xe giá rẻ)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => Q("safe"),
                                      className:
                                        "w-full p-8 sm:p-5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer shadow-md hover:scale-101 active:scale-99",
                                      children:
                                        "🛡️ Từ chối cọc, đòi xem xe trực tiếp mới trả tiền",
                                    }),
                                  ],
                                })
                              : jsxRuntimeExports.jsxs("button", {
                                  onClick: Te,
                                  className:
                                    "flex items-center gap-1.5 text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 font-black hover:underline cursor-pointer pt-6",
                                  children: [
                                    jsxRuntimeExports.jsx(RotateCcw, {
                                      className: "h-4 w-4",
                                    }),
                                    " Thử lại tình huống này",
                                  ],
                                }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "lg:col-span-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-4 min-h-[260px] shadow-lg flex flex-col justify-center",
                          children: [
                            ae === "select" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-4 text-left animate-scaleUp",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 shadow-xs",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-16 w-20 rounded-3xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center font-bold text-lg text-slate-500 shrink-0 border border-emerald-100 dark:border-slate-700",
                                        children: jsxRuntimeExports.jsx(Car, {
                                          className:
                                            "h-9 w-9 text-emerald-600 dark:text-emerald-400",
                                        }),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "min-w-0",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "inline-block text-sm sm:text-base font-semibold bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 font-black px-2 py-0.5 rounded-full uppercase tracking-wider",
                                            children: "XẢ KHO CỰC SHOCK",
                                          }),
                                          jsxRuntimeExports.jsx("h4", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-slate-200 truncate mt-1",
                                            children:
                                              "Mazda 3 Đời Mới Toanh Full Option",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-emerald-600 dark:text-emerald-400 block mt-0.5",
                                            children:
                                              "Giá bán: 120,000,000 VNĐ",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium font-black",
                                        children: jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            children:
                                              "🎖️ Đại Úy: Trần Mạnh Hùng (Quân đội VN)",
                                          },
                                        ),
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed font-bold",
                                        children:
                                          '"Tôi đang đóng quân bí mật ở khu biên giới phía Bắc, không thể cho bạn xem xe trực tiếp. Bạn cọc trước 15 triệu tiền làm thủ tục bảo mật và đổ xăng, xe chuyên dụng quân đội sẽ chở thẳng đến nhà cho bạn kiểm tra!"',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ae === "outcome_safe" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "text-center space-y-2 py-4 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsx(ShieldCheck, {
                                    className:
                                      "h-10 w-10 text-emerald-400 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-emerald-400",
                                    children:
                                      "CHÍNH XÁC - NGUYÊN TẮC VÀNG THƯƠNG MẠI!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-300 max-w-[400px] mx-auto leading-relaxed",
                                    children:
                                      "Tuyệt vời! Đây là hình thức gian lận đặt cọc kinh điển trên Internet (Internet Deposit Fraud). Kẻ xấu giả danh công an, quân nhân để khất từ chối gặp trực tiếp. Không bao giờ cọc tiền mua hàng trực tuyến khi chưa xem xét trực tiếp món hàng!",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: $e,
                                    disabled: N,
                                    className:
                                      "px-5 sm:px-5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold rounded cursor-pointer disabled:opacity-40",
                                    children: N
                                      ? "✓ Đã nhận điểm"
                                      : "Hoàn thành bẫy Gian lận (+20đ)",
                                  }),
                                ],
                              }),
                            ae === "outcome_danger" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-red-950/40 border border-red-500 p-5 sm:p-6 rounded-3xl text-center space-y-2 animate-scaleUp",
                                children: [
                                  jsxRuntimeExports.jsx(TriangleAlert, {
                                    className:
                                      "h-8 w-8 text-red-500 mx-auto animate-bounce",
                                  }),
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-red-400",
                                    children: "MẤT SẠCH TIỀN CỌC!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-[9.5px] text-red-200 leading-normal max-w-[420px] mx-auto",
                                    children:
                                      "Ngay sau khi em chuyển khoản 15 triệu đồng, kẻ gian lập tức xóa bài đăng, khóa số điện thoại và block tài khoản của em! Không hề có chiếc ô tô hay quân nhân nào cả. Bài học đắt giá về mua sắm trực tuyến!",
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
          d &&
            u &&
            p &&
            b &&
            N &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-emerald-500/10 border-2 border-emerald-500 p-5 sm:p-6 rounded-3xl text-center space-y-3 animate-scaleUp",
              children: [
                jsxRuntimeExports.jsx(Award, {
                  className:
                    "h-10 w-10 text-emerald-400 mx-auto animate-bounce",
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "space-y-0.5",
                  children: [
                    jsxRuntimeExports.jsx("h4", {
                      className:
                        "text-base font-black text-emerald-400 uppercase tracking-wider",
                      children: "🎉 XUẤT SẮC HOÀN THÀNH TOÀN BỘ LAB 18! 🎉",
                    }),
                    jsxRuntimeExports.jsxs("p", {
                      className:
                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-semibold",
                      children: [
                        "Chúc mừng em đã chinh phục thành công cả 5 bài tập huấn luyện bảo mật mạng trực quan. Em đã đạt mức tối đa ",
                        jsxRuntimeExports.jsxs("strong", {
                          className: "text-emerald-500 font-black",
                          children: [l, " Điểm"],
                        }),
                        ", tự tin phòng vệ trước các nguy cơ an ninh mạng hàng đầu theo chuẩn giáo trình Công nghệ số quốc tế IC3 GS6!",
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("p", {
                  className:
                    "text-[8.5px] text-slate-500 font-extrabold uppercase tracking-widest",
                  children:
                    "HỆ THỐNG ĐÃ CẬP NHẬT TRẠNG THÁI TIẾN TRÌNH TRÊN THANH TIÊU ĐỀ",
                }),
              ],
            }),
        ],
      });
    }

    return Lab18;
  };
})();
