/**
 * Lab 08: Phương thức Đưa File/App
 * Modular standalone lab decoupled from main bundle.
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

    const MATCH_ITEMS = [
        {
          id: "upload",
          term: "Uploading",
          definition:
            "Quá trình lấy một tập tin từ thiết bị máy tính của bạn và gửi tập tin đó đến một vị trí trực tuyến",
          icon: jsxRuntimeExports.jsx(CloudUpload, {
            className: "h-5 w-5 text-blue-500",
          }),
        },
        {
          id: "subscribe",
          term: "Subscribing",
          definition:
            "Phần mềm thường được lưu trữ trên đám mây và được trả tiền hàng năm hoặc hàng tháng",
          icon: jsxRuntimeExports.jsx(CreditCard, {
            className: "h-5 w-5 text-indigo-500",
          }),
        },
        {
          id: "install",
          term: "Installing",
          definition:
            "Đưa các chương trình thực thi vào thiết bị máy tính của bạn",
          icon: jsxRuntimeExports.jsx(Settings, {
            className: "h-5 w-5 text-emerald-500",
          }),
        },
        {
          id: "download",
          term: "Downloading",
          definition:
            "Quá trình di chuyển một tập tin từ nguồn trực tuyến của nó sang một thiết bị máy tính",
          icon: jsxRuntimeExports.jsx(CloudDownload, {
            className: "h-5 w-5 text-amber-500",
          }),
        },
      ],
      SAAS_SERVICES = [
        {
          id: "office",
          name: "EduCloud Office 365",
          price: 9,
          description: "Bộ soạn thảo văn bản, bảng tính học tập trực tuyến",
          storage: "1 TB Cloud Storage",
        },
        {
          id: "design",
          name: "Creativity Suite Pro",
          price: 19,
          description: "Thiết kế đồ hoạ, biên tập video đám mây",
          storage: "500 GB Cloud Storage",
        },
        {
          id: "code",
          name: "DevWorkspace AI",
          price: 15,
          description: "Trình biên dịch mã nguồn trực tuyến tích hợp AI",
          storage: "Unlimited Workspace",
        },
      ],
      INSTALLER_STEPS = [
        {
          title: "Tải tập tin cài đặt",
          desc: "Để cài đặt phần mềm cục bộ, bước đầu tiên bạn cần Tải xuống (Download) trình cài đặt EduSuite_Setup.exe từ internet về máy tính của mình.",
        },
        {
          title: "Thỏa thuận Giấy phép",
          desc: "Đồng ý với các điều khoản bảo mật thông tin và bản quyền người dùng.",
        },
        {
          title: "Chọn Đường dẫn",
          desc: "Chọn thư mục đích để lưu trữ mã nguồn chạy cục bộ.",
        },
        {
          title: "Đang giải nén & Cài đặt",
          desc: "Hệ thống đang sao chép tài nguyên hệ thống vào ổ đĩa C:/Program Files.",
        },
        {
          title: "Hoàn thành!",
          desc: "Cài đặt thành công! Tạo phím tắt desktop và sẵn sàng khởi chạy ứng dụng cục bộ.",
        },
      ];
    function Lab8({ onSuccess: a }) {
      var rt, yt, xt;
      const [n, i] = reactExports.useState("simulators"),
        [l, c] = reactExports.useState(null),
        [d, m] = reactExports.useState(null),
        [u, g] = reactExports.useState({}),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(0),
        [N, M] = reactExports.useState([]),
        [y, I] = reactExports.useState([]);
      React.useEffect(() => {
        (M([...MATCH_ITEMS].sort(() => Math.random() - 0.5)),
          I([...MATCH_ITEMS].sort(() => Math.random() - 0.5)),
          a());
      }, []);
      const [R, z] = reactExports.useState("upload"),
        [A, O] = reactExports.useState(null),
        [L, le] = reactExports.useState(0),
        [P, G] = reactExports.useState(!1),
        [ee, ce] = reactExports.useState([]),
        V = (ve) => {
          if (P) return;
          (O(ve), G(!0), le(0));
          const Ye = setInterval(() => {
            le((mt) =>
              mt >= 100
                ? (clearInterval(Ye),
                  G(!1),
                  ce((Dt) => [
                    { name: ve.name, type: ve.type, date: "Vừa xong" },
                    ...Dt,
                  ]),
                  100)
                : mt + 5,
            );
          }, 100);
        },
        [pe, Ie] = reactExports.useState(0),
        [se, de] = reactExports.useState(!1),
        [_, U] = reactExports.useState(null),
        [Z, be] = reactExports.useState([]),
        he = (ve) => {
          if (se) return;
          (U(ve), de(!0), Ie(0));
          const Ye = setInterval(() => {
            Ie((mt) =>
              mt >= 100
                ? (clearInterval(Ye), de(!1), be((Dt) => [ve, ...Dt]), 100)
                : mt + 8,
            );
          }, 120);
        },
        [E, v] = reactExports.useState(0),
        [K, te] = reactExports.useState(!1),
        [je, Se] = reactExports.useState(0),
        [He, Xe] = reactExports.useState(!1),
        [Qe, qe] = reactExports.useState(!1),
        [at, ze] = reactExports.useState(0),
        [De, tt] = reactExports.useState(!1),
        [it, oe] = reactExports.useState(""),
        [ie, ge] = reactExports.useState(
          "Chào bạn! Tôi là EduSuite AI v2.5 chạy cục bộ trên máy tính của bạn. Hãy hỏi tôi bất kỳ điều gì về tin học văn phòng hoặc IC3 GS6!",
        ),
        [ae, Ae] = reactExports.useState(!1),
        Q = () => {
          if (De) return;
          (tt(!0), ze(0));
          const ve = setInterval(() => {
            ze((Ye) => (Ye >= 100 ? (clearInterval(ve), tt(!1), 100) : Ye + 5));
          }, 50);
        },
        Te = () => {
          (Xe(!0), Se(0));
          const ve = setInterval(() => {
            Se((Ye) =>
              Ye >= 100
                ? (clearInterval(ve), Xe(!1), v(4), qe(!0), 100)
                : Ye + 4,
            );
          }, 100);
        },
        $e = (ve) => {
          if (ae) return;
          (Ae(!0), ge("Đang xử lý câu hỏi của bạn trên CPU cục bộ..."));
          let Ye =
            "Xin lỗi, tôi không hiểu câu hỏi của bạn. Hãy thử hỏi về các khái niệm IC3 GS6!";
          const mt = ve.toLowerCase();
          (mt.includes("độc hại") ||
          mt.includes("malware") ||
          mt.includes("virus")
            ? (Ye =
                "Phần mềm độc hại (Malware) là bất kỳ loại phần mềm nào được thiết kế để gây hại, đánh cắp thông tin hoặc phá hoại hệ thống máy tính của bạn. Các loại phổ biến bao gồm Virus, Worm, Trojan và Ransomware.")
            : mt.includes("cc-by-nc") ||
                mt.includes("creative") ||
                mt.includes("giấy phép")
              ? (Ye =
                  "CC-BY-NC là giấy phép Creative Commons yêu cầu Ghi công (BY) và Phi thương mại (NC). Bạn có thể chia sẻ, sửa đổi tác phẩm nhưng không được dùng cho mục đích kiếm tiền và bắt buộc phải ghi tên tác giả gốc.")
              : mt.includes("download") ||
                  mt.includes("upload") ||
                  mt.includes("tải")
                ? (Ye =
                    "Downloading là tải tập tin từ internet (máy chủ đám mây) về máy tính của bạn để dùng ngoại tuyến. Uploading là gửi tập tin từ thiết bị cục bộ của bạn lên máy chủ trực tuyến. Chúng là hai chiều ngược nhau!")
                : mt.includes("phần mềm") ||
                    mt.includes("cài đặt") ||
                    mt.includes("install")
                  ? (Ye =
                      "Installing (Cài đặt) là đưa các tệp chạy thực thi cục bộ vào ổ đĩa của bạn và thiết lập hệ thống để sử dụng. Subscribing là thuê bao phần mềm chạy trên đám mây và trả tiền định kỳ hàng tháng/hàng năm.")
                  : ve.trim() !== "" &&
                    (Ye = `Tôi đã nhận được câu hỏi: "${ve}". Trả lời: Đây là câu hỏi rất hay! Trên máy tính cục bộ của bạn, EduSuite AI có thể phân tích dữ liệu ngoại tuyến vô cùng bảo mật và nhanh chóng mà không cần kết nối Internet liên tục.`),
            setTimeout(() => {
              (ge(Ye), Ae(!1));
            }, 1e3));
        },
        _e = () => {
          (v(0),
            te(!1),
            Se(0),
            Xe(!1),
            ze(0),
            tt(!1),
            oe(""),
            ge(
              "Chào bạn! Tôi là EduSuite AI v2.5 chạy cục bộ trên máy tính của bạn. Hãy hỏi tôi bất kỳ điều gì về tin học văn phòng hoặc IC3 GS6!",
            ));
        },
        [Ue, Ke] = reactExports.useState("monthly"),
        [ot, w] = reactExports.useState([]),
        [C, Ee] = reactExports.useState([]),
        ke = (ve, Ye, mt) => {
          if (ot.includes(ve))
            (w((ye) => ye.filter((H) => H !== ve)),
              Ee((ye) => [`Hủy đăng ký thành công: ${Ye}`, ...ye]));
          else {
            w((me) => [...me, ve]);
            const ye = Ue === "annually" ? Math.round(mt * 12 * 0.8) : mt,
              H = Ue === "annually" ? "/năm (Đã giảm 20%)" : "/tháng";
            Ee((me) => [
              `Đăng ký gói thành công: ${Ye} với giá $${ye}${H}`,
              ...me,
            ]);
          }
        },
        [We, ht] = reactExports.useState({}),
        [lt, Fe] = reactExports.useState(!1);
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 animate-fade-in text-left",
        id: "lab-8-root",
        children: [
          jsxRuntimeExports.jsx("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs",
            children: jsxRuntimeExports.jsxs("div", {
              children: [
                jsxRuntimeExports.jsx("span", {
                  className:
                    "text-sm sm:text-base font-semibold uppercase font-black tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md",
                  children: "Chủ đề IC3 GS6: Vận Hành Máy Tính & Phần Mềm",
                }),
                jsxRuntimeExports.jsx("h4", {
                  className:
                    "font-extrabold text-slate-900 dark:text-white text-lg mt-1.5",
                  children:
                    "Lab 8: Phương Thức Đưa Phần Mềm & Tập Tin Vào Máy Tính",
                }),
              ],
            }),
          }),
          !1,
          n === "simulators" &&
            jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "lg:col-span-3 space-y-2",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 tracking-wider block",
                      children: "Chọn Công Cụ Mô Phỏng",
                    }),
                    [
                      {
                        id: "upload",
                        label: "☁️ 1. Uploading Lab",
                        color: "border-blue-500",
                      },
                      {
                        id: "download",
                        label: "📥 2. Downloading Lab",
                        color: "border-amber-500",
                      },
                      {
                        id: "install",
                        label: "⚙️ 3. Installing Lab",
                        color: "border-emerald-500",
                      },
                      {
                        id: "subscribe",
                        label: "💳 4. Subscribing Lab",
                        color: "border-indigo-500",
                      },
                    ].map((ve) =>
                      jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => z(ve.id),
                          className: `w-full p-8 sm:p-5 rounded-3xl border text-left text-sm sm:text-base font-extrabold transition-all cursor-pointer ${R === ve.id ? "bg-slate-100 text-slate-900 border-l-4 dark:bg-slate-800 dark:text-white " + ve.color : "border-slate-100 bg-white hover:bg-slate-50 text-slate-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                          children: ve.label,
                        },
                        ve.id,
                      ),
                    ),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "lg:col-span-9 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs min-h-[460px] flex flex-col justify-between",
                  children: [
                    R === "upload" &&
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-5 flex-1",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-black px-2.5 py-1 rounded",
                                children: "MÔ PHỎNG UPLOADING",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 mt-2 leading-relaxed",
                                children: [
                                  "Học sinh tương tác chọn tệp ở máy tính cục bộ để ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "Upload (Tải lên)",
                                  }),
                                  " đám mây. Xem tốc độ tải lên và kiểm tra tệp đã lưu thành công ở kho lưu trữ trực tuyến.",
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3.5 bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-850",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 block flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx(HardDrive, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " FILE TRÊN MÁY TÍNH CỦA BẠN (CỤC BỘ)",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className: "space-y-2",
                                    children: [
                                      {
                                        name: "BaiTapNhom_TinHoc.docx",
                                        type: "Văn bản Word",
                                        size: "2.4 MB",
                                        icon: jsxRuntimeExports.jsx(FileText, {
                                          className: "h-4 w-4 text-blue-500",
                                        }),
                                      },
                                      {
                                        name: "AnhDuAnCreative.png",
                                        type: "Hình ảnh",
                                        size: "4.8 MB",
                                        icon: jsxRuntimeExports.jsx(Image, {
                                          className: "h-4 w-4 text-emerald-500",
                                        }),
                                      },
                                      {
                                        name: "VideoReviewGame.mp4",
                                        type: "Video chất lượng cao",
                                        size: "45.2 MB",
                                        icon: jsxRuntimeExports.jsx(Film, {
                                          className: "h-4 w-4 text-purple-500",
                                        }),
                                      },
                                    ].map((ve, Ye) =>
                                      jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex justify-between items-center p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2.5 overflow-hidden",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className: "shrink-0",
                                                  children: ve.icon,
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-left overflow-hidden",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold block truncate",
                                                        children: ve.name,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 block",
                                                        children: [
                                                          ve.type,
                                                          " • ",
                                                          ve.size,
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => V(ve),
                                              disabled: P,
                                              className: `p-1.5 rounded-3xl border transition-all cursor-pointer ${P ? "bg-slate-550 border-slate-100 text-slate-400 cursor-not-allowed" : "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-900"}`,
                                              children: jsxRuntimeExports.jsx(
                                                CloudUpload,
                                                { className: "h-4 w-4" },
                                              ),
                                            }),
                                          ],
                                        },
                                        Ye,
                                      ),
                                    ),
                                  }),
                                  A &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-2 animate-fade-in text-left",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-center text-sm sm:text-base font-bold",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className: "text-blue-600",
                                              children: [
                                                "Đang truyền tải: ",
                                                A.name,
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className: "font-mono",
                                              children: [L, "%"],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-full bg-slate-100 dark:bg-slate-850 h-2 rounded-full overflow-hidden",
                                          children: jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              style: { width: `${L}%` },
                                              className:
                                                "bg-blue-600 h-full transition-all duration-100",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-[9px] text-slate-400 flex justify-between",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "Tốc độ: ~12 MB/s",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                L === 100
                                                  ? "✅ Hoàn thành"
                                                  : "Đang xử lý...",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3.5 bg-blue-50/10 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-blue-100/30 dark:border-slate-850",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold uppercase font-black text-indigo-500 block flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx(Cloud, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " KHO LƯU TRỮ ĐÁM MÂY (TRỰC TUYẾN)",
                                    ],
                                  }),
                                  ee.length === 0
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "h-40 flex flex-col items-center justify-center text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900",
                                        children: [
                                          jsxRuntimeExports.jsx(Cloud, {
                                            className:
                                              "h-8 w-8 stroke-[1.5] mb-2 animate-bounce",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[10.5px] font-semibold",
                                            children:
                                              "Chưa có tệp nào trên Đám mây.",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400",
                                            children:
                                              "Hãy nhấn biểu tượng Tải lên bên máy tính.",
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "space-y-2 max-h-[180px] overflow-y-auto",
                                        children: ee.map((ve, Ye) =>
                                          jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl animate-fade-in",
                                              children: [
                                                jsxRuntimeExports.jsx(Cloud, {
                                                  className:
                                                    "h-4 w-4 text-blue-500 shrink-0",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-left overflow-hidden",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold block truncate text-slate-800 dark:text-slate-200",
                                                        children: ve.name,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 block",
                                                        children: [
                                                          "Được tải lên: ",
                                                          ve.date,
                                                          " • Cloud Storage",
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            },
                                            Ye,
                                          ),
                                        ),
                                      }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                                    children: [
                                      "💡 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Nguyên lý IC3:",
                                      }),
                                      " Khi bạn upload, tệp được chuyển từ ",
                                      jsxRuntimeExports.jsx("em", {
                                        children:
                                          "thiết bị cá nhân (Local Device)",
                                      }),
                                      " lên ",
                                      jsxRuntimeExports.jsx("em", {
                                        children:
                                          "máy chủ internet (Remote Server)",
                                      }),
                                      " thông qua giao thức truyền tải.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    R === "download" &&
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-5 flex-1",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-black px-2.5 py-1 rounded",
                                children: "MÔ PHỎNG DOWNLOADING",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 mt-2 leading-relaxed",
                                children: [
                                  "Trải nghiệm quá trình di chuyển tệp tin từ ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children:
                                      "Nguồn trực tuyến (Online Source)",
                                  }),
                                  " xuống ổ đĩa lưu trữ trong máy tính của bạn để sử dụng ngoại tuyến (offline).",
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3.5 bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-850",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 block flex items-center gap-1",
                                    children:
                                      "🌐 CÁC TỆP SẴN SÀNG TRÊN TRANG WEB INTERNET",
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className: "space-y-2",
                                    children: [
                                      {
                                        id: "math_pdf",
                                        name: "SachGiaoKhoa_Toan10.pdf",
                                        size: "12.5 MB",
                                        cat: "Sách học tập",
                                      },
                                      {
                                        id: "beat_mp3",
                                        name: "NhacNen_CreativeCommons.mp3",
                                        size: "5.2 MB",
                                        cat: "Nhạc miễn phí",
                                      },
                                      {
                                        id: "app_installer",
                                        name: "EduSuite_Setup.exe",
                                        size: "85.4 MB",
                                        cat: "Trình cài đặt phần mềm",
                                      },
                                    ].map((ve, Ye) =>
                                      jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex justify-between items-center p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "text-left overflow-hidden",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-bold block truncate",
                                                  children: ve.name,
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-[9px] text-slate-400 block",
                                                  children: [
                                                    ve.cat,
                                                    " • ",
                                                    ve.size,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => he(ve.name),
                                              disabled: se,
                                              className:
                                                "p-1.5 rounded-3xl border bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-900 cursor-pointer transition-all",
                                              children: jsxRuntimeExports.jsx(
                                                CloudDownload,
                                                { className: "h-4 w-4" },
                                              ),
                                            }),
                                          ],
                                        },
                                        Ye,
                                      ),
                                    ),
                                  }),
                                  se &&
                                    _ &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-2 animate-fade-in text-left",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-center text-sm sm:text-base font-bold",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className: "text-amber-600",
                                              children: ["Đang tải xuống: ", _],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className: "font-mono",
                                              children: [pe, "%"],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-full bg-slate-100 dark:bg-slate-850 h-2 rounded-full overflow-hidden",
                                          children: jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              style: { width: `${pe}%` },
                                              className:
                                                "bg-amber-500 h-full transition-all duration-100",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-400 block text-right",
                                          children: "Tốc độ: ~2.5 MB/s",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3.5 bg-amber-50/10 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-amber-100/30 dark:border-slate-850",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold uppercase font-black text-amber-600 block flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx(HardDrive, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " THƯ MỤC DOWNLOAD CỤC BỘ (C:/DOWNLOADS)",
                                    ],
                                  }),
                                  Z.length === 0
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "h-40 flex flex-col items-center justify-center text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900",
                                        children: [
                                          jsxRuntimeExports.jsx(HardDrive, {
                                            className:
                                              "h-8 w-8 stroke-[1.5] mb-2",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[10.5px] font-semibold",
                                            children:
                                              "Thư mục Downloads trống.",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400",
                                            children:
                                              "Hãy kích hoạt nút Tải xuống trên internet.",
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "space-y-2 max-h-[180px] overflow-y-auto",
                                        children: Z.map((ve, Ye) =>
                                          jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl animate-fade-in",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      FileText,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-amber-500 shrink-0",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className: "text-left",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-bold block truncate max-w-[150px]",
                                                              children: ve,
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[8px] text-emerald-500 font-extrabold flex items-center gap-0.5",
                                                              children:
                                                                "✓ Đã lưu ngoại tuyến (Offline)",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] bg-slate-100 dark:bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded",
                                                  children: "Local Path",
                                                }),
                                              ],
                                            },
                                            Ye,
                                          ),
                                        ),
                                      }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                                    children: [
                                      "💡 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Đặc tính Downloading:",
                                      }),
                                      " Tập tin sau khi tải xuống sẽ được lưu hoàn toàn vào phần cứng máy tính (HDD/SSD). Bạn có thể mở nó bất kỳ lúc nào kể cả khi ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "không kết nối Wifi/Internet",
                                      }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    R === "install" &&
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-5 flex-1 text-left",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-black px-2.5 py-1 rounded",
                                children: "MÔ PHỎNG INSTALLING",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 mt-2 leading-relaxed",
                                children: [
                                  "Trải nghiệm quá trình tải và cài đặt chương trình ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "Cục bộ (Installing)",
                                  }),
                                  " vào hệ thống máy tính, giúp máy tính có khả năng khởi chạy ứng dụng trực tiếp trên thiết bị của mình mà không cần phụ thuộc hoàn toàn vào dịch vụ trực tuyến.",
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 flex flex-col justify-between min-h-[350px]",
                            children:
                              E < 5
                                ? jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-between items-center",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black uppercase text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded",
                                                  children: [
                                                    "Bước ",
                                                    E + 1,
                                                    ": ",
                                                    (rt = INSTALLER_STEPS[E]) ==
                                                    null
                                                      ? void 0
                                                      : rt.title,
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-mono text-slate-400",
                                                  children:
                                                    "EduSuite AI Installer v2.5",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("h6", {
                                              className:
                                                "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1.5",
                                              children:
                                                (yt = INSTALLER_STEPS[E]) ==
                                                null
                                                  ? void 0
                                                  : yt.title,
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-medium text-slate-650 dark:text-slate-350 leading-relaxed",
                                              children:
                                                (xt = INSTALLER_STEPS[E]) ==
                                                null
                                                  ? void 0
                                                  : xt.desc,
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "py-4",
                                          children: [
                                            E === 0 &&
                                              jsxRuntimeExports.jsx("div", {
                                                className: "space-y-4",
                                                children:
                                                  at === 0 && !De
                                                    ? jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex flex-col items-center justify-center p-5 sm:p-6 bg-white dark:bg-slate-900 border border-dashed rounded-3xl space-y-3",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              CloudDownload,
                                                              {
                                                                className:
                                                                  "h-10 w-10 text-emerald-500 animate-bounce",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-medium text-center text-slate-500 font-semibold",
                                                                children: [
                                                                  "Để có thể tiến hành cài đặt, bạn cần tải tập tin cài đặt ",
                                                                  jsxRuntimeExports.jsx(
                                                                    "code",
                                                                    {
                                                                      className:
                                                                        "bg-slate-100 dark:bg-slate-850 px-1 py-0.5 rounded text-rose-500 font-mono",
                                                                      children:
                                                                        "EduSuite_Setup.exe",
                                                                    },
                                                                  ),
                                                                  " về máy.",
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "button",
                                                              {
                                                                onClick: Q,
                                                                className:
                                                                  "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-black px-5 py-3 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all flex items-center gap-1.5",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    CloudDownload,
                                                                    {
                                                                      className:
                                                                        "h-4 w-4",
                                                                    },
                                                                  ),
                                                                  " Tải xuống trình cài đặt (85.4 MB)",
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
                                                            "bg-white dark:bg-slate-900 p-5 sm:p-6 border rounded-3xl space-y-3",
                                                          children: [
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "flex justify-between text-sm sm:text-base font-bold",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-emerald-600",
                                                                      children:
                                                                        "Đang tải xuống: EduSuite_Setup.exe",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsxs(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "font-mono",
                                                                      children:
                                                                        [
                                                                          at,
                                                                          "%",
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "w-full bg-slate-100 dark:bg-slate-850 h-2.5 rounded-full overflow-hidden",
                                                                children:
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      style: {
                                                                        width: `${at}%`,
                                                                      },
                                                                      className:
                                                                        "bg-emerald-500 h-full transition-all duration-100",
                                                                    },
                                                                  ),
                                                              },
                                                            ),
                                                            at < 100
                                                              ? jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-sm sm:text-base font-semibold text-slate-400 block text-right font-medium",
                                                                    children:
                                                                      "Tốc độ: ~15 MB/s • Khoảng 3 giây còn lại",
                                                                  },
                                                                )
                                                              : jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-emerald-500 rounded-3xl space-y-2 text-left",
                                                                    children: [
                                                                      jsxRuntimeExports.jsxs(
                                                                        "p",
                                                                        {
                                                                          className:
                                                                            "text-sm sm:text-base font-medium text-slate-500 font-bold mb-1 flex items-center gap-1",
                                                                          children:
                                                                            [
                                                                              jsxRuntimeExports.jsx(
                                                                                Check,
                                                                                {
                                                                                  className:
                                                                                    "h-3.5 w-3.5 text-emerald-500",
                                                                                },
                                                                              ),
                                                                              " Đã tải xong trình cài đặt cục bộ!",
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsxs(
                                                                        "div",
                                                                        {
                                                                          onClick:
                                                                            () =>
                                                                              v(
                                                                                1,
                                                                              ),
                                                                          className:
                                                                            "flex items-center justify-between p-8 sm:p-5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/60 border border-emerald-300 rounded-3xl cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] group shadow-sm",
                                                                          children:
                                                                            [
                                                                              jsxRuntimeExports.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-3",
                                                                                  children:
                                                                                    [
                                                                                      jsxRuntimeExports.jsx(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "bg-emerald-500 text-white p-8 sm:p-5 rounded-3xl group-hover:animate-pulse",
                                                                                          children:
                                                                                            jsxRuntimeExports.jsx(
                                                                                              Settings,
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
                                                                                          children:
                                                                                            [
                                                                                              jsxRuntimeExports.jsx(
                                                                                                "span",
                                                                                                {
                                                                                                  className:
                                                                                                    "font-mono text-sm sm:text-base font-medium font-black block text-emerald-800 dark:text-emerald-300 group-hover:underline",
                                                                                                  children:
                                                                                                    "EduSuite_Setup.exe",
                                                                                                },
                                                                                              ),
                                                                                              jsxRuntimeExports.jsx(
                                                                                                "span",
                                                                                                {
                                                                                                  className:
                                                                                                    "text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-medium",
                                                                                                  children:
                                                                                                    "Dung lượng: 85.4 MB • Loại: Ứng dụng thực thi (Application)",
                                                                                                },
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              jsxRuntimeExports.jsx(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    "text-[10.5px] bg-emerald-600 text-white font-extrabold px-5 sm:px-5 py-3 rounded-3xl flex items-center gap-1 shadow-sm",
                                                                                  children:
                                                                                    "👉 Nhấn để mở tệp",
                                                                                },
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsx(
                                                                        "p",
                                                                        {
                                                                          className:
                                                                            "text-[10.5px] text-center text-emerald-600 dark:text-emerald-400 font-black mt-1 animate-pulse",
                                                                          children:
                                                                            "Nhấp chuột trực tiếp vào tập tin EduSuite_Setup.exe ở trên để tiến hành mở trình cài đặt và ký thỏa thuận EULA!",
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                          ],
                                                        },
                                                      ),
                                              }),
                                            E === 1 &&
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      id: "agree",
                                                      checked: K,
                                                      onChange: (ve) =>
                                                        te(ve.target.checked),
                                                      className:
                                                        "h-4 w-4 text-emerald-600 cursor-pointer",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "label",
                                                    {
                                                      htmlFor: "agree",
                                                      className:
                                                        "text-sm sm:text-base font-medium text-slate-650 dark:text-slate-350 font-bold cursor-pointer select-none",
                                                      children:
                                                        "Tôi đồng ý với thỏa thuận bản quyền người dùng cuối cùng (EULA).",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            E === 2 &&
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "p-8 sm:p-5 bg-white dark:bg-slate-900 border rounded-3xl flex justify-between items-center text-sm sm:text-base font-medium",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-bold block",
                                                            children:
                                                              "Thư mục cài đặt mặc định:",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-mono text-[10.5px] text-slate-400",
                                                            children:
                                                              "C:\\Program Files\\EduSuite\\",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded font-bold",
                                                      children: "Mặc định",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            E === 3 &&
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-2.5",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex justify-between text-sm sm:text-base font-bold",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            children:
                                                              "Đang giải nén các thư viện DLL & Assets cục bộ...",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-mono",
                                                            children: [je, "%"],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "w-full bg-slate-200 dark:bg-slate-850 h-2.5 rounded-full overflow-hidden",
                                                    children:
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          style: {
                                                            width: `${je}%`,
                                                          },
                                                          className:
                                                            "bg-emerald-500 h-full transition-all duration-100",
                                                        },
                                                      ),
                                                  }),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-400 font-semibold block",
                                                      children:
                                                        "Đường dẫn đích: C:\\Program Files\\EduSuite\\EduSuite_AI.exe",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            E === 4 &&
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "p-5 sm:p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl space-y-3",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center gap-3",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold",
                                                            children: "✓",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-medium font-black text-emerald-800 dark:text-emerald-400",
                                                            children:
                                                              "Ứng dụng đã tạo phím tắt (Shortcut) thành công tại Màn hình chính!",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-slate-500 leading-relaxed font-semibold",
                                                    children:
                                                      "Quá trình thiết lập đã hoàn tất 100%. Phần mềm đã được đưa sâu vào hệ thống máy tính. Hãy bấm nút khởi chạy bên dưới để mở ứng dụng lên dùng thử ngay!",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-end gap-2 border-t border-slate-200 dark:border-slate-850 pt-3",
                                          children: [
                                            E < 4 &&
                                              jsxRuntimeExports.jsx("button", {
                                                onClick: _e,
                                                className:
                                                  "text-sm sm:text-base font-bold px-5 sm:px-6 py-3 border border-slate-200 hover:bg-slate-100 rounded-3xl dark:border-slate-800 dark:hover:bg-slate-850 cursor-pointer text-slate-700 dark:text-slate-300",
                                                children:
                                                  "Hủy bỏ / Quay lại đầu",
                                              }),
                                            E === 1 &&
                                              jsxRuntimeExports.jsx("button", {
                                                onClick: () => v(2),
                                                disabled: !K,
                                                className: `text-sm sm:text-base font-bold px-5 sm:px-6 py-3 rounded-3xl transition-all ${K ? "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer" : "bg-slate-200 text-slate-400 cursor-not-allowed dark:bg-slate-800"}`,
                                                children: "Tiếp theo",
                                              }),
                                            E === 2 &&
                                              jsxRuntimeExports.jsx("button", {
                                                onClick: () => {
                                                  (v(3), Te());
                                                },
                                                className:
                                                  "text-sm sm:text-base font-medium bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 sm:px-6 py-3 rounded-3xl cursor-pointer transition-all",
                                                children: "Bắt đầu cài đặt",
                                              }),
                                            E === 4 &&
                                              jsxRuntimeExports.jsx("button", {
                                                onClick: () => v(5),
                                                className:
                                                  "text-sm sm:text-base font-medium bg-blue-600 hover:bg-blue-700 text-white font-black px-5 py-3 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all flex items-center gap-1.5 shadow-md",
                                                children:
                                                  "🚀 MỞ ỨNG DỤNG LÊN DÙNG",
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                  )
                                : jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "border border-slate-300 dark:border-slate-800 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-xl animate-fade-in flex flex-col justify-between min-h-[350px]",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-850 px-5 sm:px-6 py-3 border-b border-slate-800 flex justify-between items-center text-sm sm:text-base font-bold select-none",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className: "text-emerald-500",
                                                children: "💻",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-mono text-sm sm:text-base font-semibold tracking-tight text-slate-200",
                                                children:
                                                  "EduSuite AI v2.5 - Ứng dụng Cục bộ (Local Hardware Executable)",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "w-2.5 h-2.5 rounded-full bg-rose-500 inline-block cursor-pointer",
                                                onClick: _e,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-1 md:grid-cols-12 flex-1 min-h-[220px]",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "md:col-span-4 bg-slate-950 p-8 sm:p-5 border-r border-slate-850 flex flex-col justify-between text-left",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-3",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] uppercase font-black text-slate-500 tracking-wider block",
                                                      children:
                                                        "Trạng thái hệ thống",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "p-8 sm:p-5 bg-slate-900/60 rounded-3xl border border-slate-850 space-y-1",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center gap-1.5 text-sm sm:text-base font-semibold font-black text-emerald-400",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  children:
                                                                    "ONLINE READY (OFFLINE MODE)",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[9px] text-slate-400 block font-semibold",
                                                            children:
                                                              "Tài nguyên: Đang nạp từ CPU và RAM cục bộ.",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[8px] font-mono text-slate-500 block truncate",
                                                            children:
                                                              "Path: C:\\Program Files\\EduSuite\\bin\\",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] uppercase font-black text-slate-500 tracking-wider block mt-4",
                                                      children:
                                                        "Gợi ý thử nghiệm",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                      {
                                                        text: "Phần mềm độc hại là gì?",
                                                        query:
                                                          "Phần mềm độc hại",
                                                      },
                                                      {
                                                        text: "CC-BY-NC là gì?",
                                                        query: "CC-BY-NC là gì",
                                                      },
                                                      {
                                                        text: "So sánh Download vs Upload?",
                                                        query:
                                                          "Phân biệt download và upload",
                                                      },
                                                    ].map((ve, Ye) =>
                                                      jsxRuntimeExports.jsxs(
                                                        "button",
                                                        {
                                                          onClick: () => {
                                                            (oe(ve.query),
                                                              $e(ve.query));
                                                          },
                                                          className:
                                                            "w-full text-left p-8 sm:p-5 rounded-3xl bg-slate-900 hover:bg-slate-850 text-sm sm:text-base font-semibold text-slate-300 font-semibold border border-slate-850 transition-all cursor-pointer block truncate",
                                                          children: [
                                                            "💡 ",
                                                            ve.text,
                                                          ],
                                                        },
                                                        Ye,
                                                      ),
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[8.5px] text-slate-500 font-mono mt-4 block leading-tight",
                                                children:
                                                  "EduSuite AI v2.5 được chạy trực tiếp trên máy tính thông qua tiến trình cài đặt (Installing) hoàn tất.",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "md:col-span-8 p-5 sm:p-6 bg-slate-900 flex flex-col justify-between space-y-3",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-800 text-left min-h-[140px] flex flex-col justify-between",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[8.5px] uppercase font-black text-blue-400 block tracking-wider mb-2",
                                                      children:
                                                        "Phản Hồi Từ EduSuite AI",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "text-sm sm:text-base font-medium leading-relaxed text-slate-200 overflow-y-auto max-h-[130px] font-medium pr-1",
                                                    children: ie,
                                                  }),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "text-[8px] text-slate-500 mt-2 text-right italic",
                                                    children: ae
                                                      ? "Đang phân tích..."
                                                      : "✓ Phân tích hoàn thành trên phần cứng cục bộ",
                                                  }),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      value: it,
                                                      onChange: (ve) =>
                                                        oe(ve.target.value),
                                                      placeholder:
                                                        "Hỏi EduSuite AI bất cứ điều gì...",
                                                      onKeyDown: (ve) => {
                                                        ve.key === "Enter" &&
                                                          $e(it);
                                                      },
                                                      className:
                                                        "flex-1 bg-slate-950 border border-slate-800 rounded-3xl px-5 sm:px-5 py-3 text-sm sm:text-base font-medium text-white placeholder-slate-500 focus:outline-hidden focus:ring-1 focus:ring-emerald-500",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      onClick: () => $e(it),
                                                      disabled:
                                                        ae || !it.trim(),
                                                      className: `text-sm sm:text-base font-medium px-5 sm:px-6 py-3 font-black rounded-3xl transition-all cursor-pointer ${!it.trim() || ae ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700 text-white"}`,
                                                      children: "Gửi",
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
                                          "bg-slate-950 px-5 sm:px-6 py-3 border-t border-slate-850 flex justify-between items-center text-[10.5px]",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-slate-400 font-semibold",
                                            children:
                                              "Tác vụ hiện hành: Trải nghiệm sử dụng sau khi cài đặt thành công",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: _e,
                                            className:
                                              "text-[9.5px] bg-rose-900/60 hover:bg-rose-900 hover:text-white border border-rose-800/40 text-rose-200 font-extrabold px-5 sm:px-5 py-1 rounded-3xl transition-all cursor-pointer",
                                            children:
                                              "🔴 Đóng ứng dụng & Khởi động lại simulator",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                    R === "subscribe" &&
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-5 flex-1",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "border-b border-slate-100 dark:border-slate-800 pb-3 text-left",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-black px-2.5 py-1 rounded",
                                children: "MÔ PHỎNG SUBSCRIBING (SAAS)",
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 mt-2 leading-relaxed",
                                children:
                                  "Khám phá cách thức mua bản quyền phần mềm phân phối trên đám mây dạng Thuê bao (Subscription). Người dùng trả tiền theo chu kỳ hàng tháng hoặc hàng năm.",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "flex justify-center my-1.5",
                            children: jsxRuntimeExports.jsxs("div", {
                              className:
                                "inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-3xl border",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => Ke("monthly"),
                                  className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer ${Ue === "monthly" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-850"}`,
                                  children: "Thanh toán Hàng Tháng",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => Ke("annually"),
                                  className: `px-5 sm:px-6 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all cursor-pointer ${Ue === "annually" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-850"}`,
                                  children: "Hàng Năm (Giảm 20%)",
                                }),
                              ],
                            }),
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: SAAS_SERVICES.map((ve) => {
                              const Ye = ot.includes(ve.id),
                                mt =
                                  Ue === "annually"
                                    ? Math.round(ve.price * 12 * 0.8)
                                    : ve.price;
                              return jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: `p-5 sm:p-6 bg-white dark:bg-slate-900 border rounded-3xl text-left flex flex-col justify-between transition-all ${Ye ? "border-indigo-500 ring-1 ring-indigo-500 shadow-xs" : "border-slate-200"}`,
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white block",
                                          children: ve.name,
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 font-semibold leading-relaxed leading-tight",
                                          children: ve.description,
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "pt-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "font-mono text-lg font-black text-indigo-600",
                                              children: ["$", mt],
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-semibold",
                                              children: [
                                                "/",
                                                Ue === "annually"
                                                  ? "năm"
                                                  : "tháng",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () =>
                                        ke(ve.id, ve.name, ve.price),
                                      className: `w-full mt-4 py-3 rounded-3xl text-[10.5px] font-black transition-all cursor-pointer ${Ye ? "bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/20 dark:border-rose-900" : "bg-indigo-600 text-white hover:bg-indigo-700"}`,
                                      children: Ye
                                        ? "Hủy thuê bao"
                                        : "Đăng ký ngay",
                                    }),
                                  ],
                                },
                                ve.id,
                              );
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-slate-50 dark:bg-slate-950 p-8 sm:p-5 rounded-3xl border text-left space-y-1.5",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-[9.5px] uppercase font-black text-slate-400 block",
                                children: "LỊCH SỬ GIAO DỊCH THUÊ BAO ĐÁM MÂY",
                              }),
                              C.length === 0
                                ? jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 italic font-semibold",
                                    children:
                                      "Chưa có giao dịch nào được ghi nhận. Hãy kích hoạt thuê bao của bạn ở trên.",
                                  })
                                : jsxRuntimeExports.jsx("div", {
                                    className:
                                      "space-y-1 max-h-[80px] overflow-y-auto font-mono text-[9.5px] text-slate-600 dark:text-slate-400",
                                    children: C.map((ve, Ye) =>
                                      jsxRuntimeExports.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex gap-1.5 items-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className: "text-indigo-500",
                                              children: "➜",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: ve,
                                            }),
                                          ],
                                        },
                                        Ye,
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
            }),
          !1,
        ],
      });
    }

    return Lab8;
  };
})();
