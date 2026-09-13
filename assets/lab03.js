/**
 * Lab 03: Phân loại Phản hồi Email / Application
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab03 = window.AGY_LABS[3] = function (env) {
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

    function Lab4({ onSuccess: a }) {
      var it, oe, ie, ge, ae, Ae;
      const [n, i] = reactExports.useState("simulator"),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState(
          TERMS$3.map((Q) => ({ termId: Q.id, definition: null })),
        ),
        [u, g] = reactExports.useState(null),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState({}),
        [N, M] = reactExports.useState(!1),
        [y, I] = reactExports.useState(1),
        [R, z] = reactExports.useState("inbox"),
        [A, O] = reactExports.useState(null),
        [L, le] = reactExports.useState(""),
        [P, G] = reactExports.useState(""),
        [ee, ce] = reactExports.useState(""),
        [V, pe] = reactExports.useState(""),
        [Ie, se] = reactExports.useState(""),
        [de, _] = reactExports.useState("normal"),
        [U, Z] = reactExports.useState(!1),
        [be, he] = reactExports.useState("compose"),
        [E, v] = reactExports.useState([]),
        [K, te] = reactExports.useState(!1),
        [je, Se] = reactExports.useState(null);
      reactExports.useEffect(() => {
        (He(), a());
      }, []);
      const He = () => {
          const Q = [...DEFINITIONS$3].sort(() => Math.random() - 0.5);
          (c(Q),
            m(TERMS$3.map((Te) => ({ termId: Te.id, definition: null }))),
            g(null),
            f(!1),
            k({}),
            M(!1));
        },
        Xe = (Q) => {
          (I(Q), Se(null), z("inbox"), O(null), Qe());
        },
        Qe = () => {
          (le(""), G(""), ce(""), pe(""), se(""), _("normal"), Z(!1));
        },
        qe = () => {
          const Q = SCENARIOS.find((Te) => Te.id === y);
          if (Q) {
            if (Q.taskType !== "compose") {
              Se({
                status: "warning",
                title: "Sai quy trình thao tác!",
                message:
                  "Nhiệm vụ này yêu cầu bạn phải phản hồi (Reply/Forward) dựa trên email có sẵn trong Hộp thư đến chứ không phải soạn thư mới hoàn toàn.",
              });
              return;
            }
            (he("compose"),
              z("compose"),
              pe(""),
              se(""),
              _("normal"),
              Z(!1),
              Se(null));
          }
        },
        at = (Q) => {
          (O(Q), z("reading"), Se(null));
        },
        ze = (Q) => {
          const Te = SCENARIOS.find(($e) => $e.id === y);
          if (!(!Te || !A)) {
            if (y === 4 && Q === "reply_all") {
              Se({
                status: "error",
                title: "⚠️ CẢNH BÁO BẢO MẬT NGHIÊM TRỌNG!",
                message:
                  'LỖI NGUY HIỂM: Thư gốc được gửi đến tất cả 50 cán bộ nhân viên. Nếu bạn bấm "Reply All", thông tin Mã số thuế cá nhân của bạn sẽ bị rò rỉ công khai cho toàn công ty! Hãy bấm nút "Reply" để chỉ gửi riêng cho Trưởng phòng Lê Hoa.',
              });
              return;
            }
            if (y === 5 && Q === "reply") {
              Se({
                status: "warning",
                title: "⚠️ Cần phản hồi đồng bộ!",
                message:
                  'Nếu bạn chỉ bấm "Reply", đồng nghiệp Tuấn Nguyễn (người được Cc trong nhóm) sẽ không nhận được cập nhật của bạn, dẫn đến lệch pha và làm chồng chéo công việc. Hãy chọn "Reply All" để thông báo cho cả Lê Hoa và Tuấn.',
              });
              return;
            }
            if (Te.correctAction !== Q) {
              Se({
                status: "warning",
                title: "Sai tính năng phản hồi!",
                message: `Mục tiêu của nhiệm vụ là rèn luyện phản hồi phù hợp. Vui lòng bấm đúng tính năng (${Te.correctAction === "reply" ? "Reply" : Te.correctAction === "reply_all" ? "Reply All" : "Forward"}) để đạt hiệu quả tối ưu.`,
              });
              return;
            }
            (he(Q),
              z("compose"),
              Q === "reply"
                ? (le(A.from),
                  G(""),
                  ce(""),
                  pe(`Re: ${A.subject}`),
                  se(`

--- Trả lời email của ${A.senderName} --- 
> ${A.body.replace(
                    /\n/g,
                    `
> `,
                  )}`))
                : Q === "reply_all"
                  ? (le(A.from),
                    G(A.cc || ""),
                    ce(""),
                    pe(`Re: ${A.subject}`),
                    se(`

--- Trả lời tất cả --- 
> ${A.body.replace(
                      /\n/g,
                      `
> `,
                    )}`))
                  : Q === "forward" &&
                    (le(""),
                    G(""),
                    ce(""),
                    pe(`Fwd: ${A.subject}`),
                    se(`

---------- Forwarded message ---------
From: ${A.from}
Date: ${A.date}
Subject: ${A.subject}

${A.body}`)),
              Se({
                status: "info",
                title: "Đã tạo bản nháp tự động",
                message:
                  Q === "forward"
                    ? "Ý nghĩa: Chức năng Forward tự động chuyển tiếp nội dung cũ và đính kèm. Bạn PHẢI điền người nhận mới vào ô To."
                    : "Ý nghĩa: Khi dùng Reply / Reply All, hệ thống tự điền và khóa các trường địa chỉ phù hợp để tránh rò rỉ hoặc thiếu thông tin!",
              }));
          }
        },
        De = (Q, Te) => {
          (Q === "to" && le(Te),
            Q === "cc" && G(Te),
            Q === "bcc" && ce(Te),
            Q === "subject" && pe(Te));
        },
        tt = () => {
          const Q = SCENARIOS.find((Te) => Te.id === y);
          if (Q) {
            if (be !== Q.correctAction) {
              Se({
                status: "error",
                title: "Sai phương thức gửi!",
                message:
                  "Bạn đã không dùng đúng tính năng (Compose / Reply / Reply All / Forward) theo yêu cầu thực tế.",
              });
              return;
            }
            if (L.trim().toLowerCase() !== Q.requiredTo.toLowerCase()) {
              Se({
                status: "error",
                title: "Sai địa chỉ người nhận chính (To)!",
                message: `Địa chỉ "To" hiện tại là "${L}". Yêu cầu đúng phải là: "${Q.requiredTo}".`,
              });
              return;
            }
            if (P.trim().toLowerCase() !== Q.requiredCc.toLowerCase()) {
              Se({
                status: "error",
                title: "Sai địa chỉ bản sao công khai (Cc)!",
                message: Q.requiredCc
                  ? `Bạn cần Cc cho sếp hoặc đồng nghiệp theo đúng yêu cầu: "${Q.requiredCc}".`
                  : "Hãy để trống trường Cc vì tình huống này không yêu cầu gửi bản sao công khai.",
              });
              return;
            }
            if (ee.trim().toLowerCase() !== Q.requiredBcc.toLowerCase()) {
              Se({
                status: "error",
                title: "Sai địa chỉ bản sao ẩn danh (Bcc)!",
                message: Q.requiredBcc
                  ? `Bạn cần Bcc ẩn danh sếp bảo mật: "${Q.requiredBcc}".`
                  : "Hãy để trống trường Bcc vì tình huống này không yêu cầu gửi bản sao ẩn danh.",
              });
              return;
            }
            if (!V.trim()) {
              Se({
                status: "error",
                title: "Thiếu tiêu đề Email!",
                message:
                  "Một email chuyên nghiệp bắt buộc phải có tiêu đề rõ ràng, không được để trống.",
              });
              return;
            }
            (Se({
              status: "success",
              title: Q.feedbackSuccess,
              message:
                "Chúc mừng bạn đã xuất sắc vượt qua các kiểm duyệt email thực tế!",
              conceptExplanation: Q.feedbackConcept,
            }),
              v((Te) => {
                var $e;
                return [
                  {
                    id: Date.now(),
                    type:
                      (($e = TERMS$3.find(
                        (_e) => _e.name.toLowerCase() === be.replace("_", " "),
                      )) == null
                        ? void 0
                        : $e.name) || be,
                    to: L,
                    cc: P,
                    bcc: ee,
                    subject: V,
                    importance: de,
                    hasSignature: U,
                    date: "Vừa xong",
                  },
                  ...Te,
                ];
              }),
              setTimeout(() => {
                y === 6 && a();
              }, 500));
          }
        };
      return jsxRuntimeExports.jsx("div", {
        id: "activity-5",
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
                      "inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-5 sm:px-5 py-1 text-sm sm:text-base font-bold text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",
                    children: [
                      jsxRuntimeExports.jsx(BookOpen, {
                        className: "h-3.5 w-3.5",
                      }),
                      " Lab Thực Hành Số 4 (Phòng Thực Nghiệm Tương Tác)",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className:
                      "text-xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight",
                    children:
                      "Phân Loại & Bản Chất Phản Hồi Email chuẩn Quốc Tế IC3 GS6",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                    children:
                      "Học cách gửi thư thực tế: Phân biệt rõ To, Cc, Bcc, Reply, Reply All, Forward qua bối cảnh cụ thể và bảo mật an toàn thông tin.",
                  }),
                ],
              }),
            }),
            n === "simulator" &&
              jsxRuntimeExports.jsxs("div", {
                className: "space-y-6",
                children: [
                  jsxRuntimeExports.jsx("div", {
                    className: "flex flex-wrap gap-2 justify-start",
                    children: SCENARIOS.map((Q) => {
                      const Te = y === Q.id,
                        $e = {
                          1: "Mô phỏng trường TO",
                          2: "Mô phỏng trường CC",
                          3: "Mô phỏng trường BCC",
                          4: "Mô phỏng nút REPLY",
                          5: "Mô phỏng nút REPLY ALL",
                          6: "Mô phỏng nút FORWARD",
                        };
                      return jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => Xe(Q.id),
                          className: `px-5 sm:px-6 py-3 rounded-3xl text-sm sm:text-base font-medium font-black transition-all cursor-pointer border ${Te ? "bg-cyan-600 border-cyan-600 text-white shadow-md scale-102" : "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-850 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                          children: $e[Q.id] || `Nhiệm vụ ${Q.id}`,
                        },
                        Q.id,
                      );
                    }),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "lg:col-span-5 flex flex-col justify-between space-y-4 text-left",
                        children: jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "inline-flex items-center gap-1 rounded-md bg-blue-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
                                  children: "🎯 Yêu cầu nhiệm vụ thực tế",
                                }),
                                jsxRuntimeExports.jsx("h4", {
                                  className:
                                    "text-base font-black text-slate-900 dark:text-white mt-2 leading-snug",
                                  children:
                                    (it = SCENARIOS.find((Q) => Q.id === y)) ==
                                    null
                                      ? void 0
                                      : it.title,
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "mt-3 p-5 sm:p-6 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 text-sm sm:text-base font-medium space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "font-extrabold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(Info, {
                                          className: "h-4 w-4 shrink-0",
                                        }),
                                        "Bối cảnh & Tình huống:",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-slate-700 dark:text-slate-300 font-semibold leading-relaxed",
                                      children:
                                        (oe = SCENARIOS.find(
                                          (Q) => Q.id === y,
                                        )) == null
                                          ? void 0
                                          : oe.context,
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "mt-3 p-8 sm:p-5 rounded-3xl bg-indigo-50 border border-indigo-100 dark:bg-slate-800/40 dark:border-slate-800 text-sm sm:text-base font-medium",
                                  children: jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-slate-600 dark:text-slate-300 font-medium leading-relaxed",
                                    children: [
                                      jsxRuntimeExports.jsx("strong", {
                                        className:
                                          "text-slate-800 dark:text-slate-100",
                                        children: "Hướng dẫn thực hành:",
                                      }),
                                      " ",
                                      (ie = SCENARIOS.find(
                                        (Q) => Q.id === y,
                                      )) == null
                                        ? void 0
                                        : ie.guide,
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-6 dark:bg-slate-850 dark:border-slate-800 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 space-y-2.5",
                              children: [
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "font-extrabold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx(Sparkles, {
                                      className: "h-4 w-4",
                                    }),
                                    " THƯ VIỆN GỢI Ý ĐỊA CHỈ & TIÊU ĐỀ:",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-2 font-bold text-sm sm:text-base font-semibold flex flex-col gap-1.5",
                                  children: [
                                    y === 1 &&
                                      jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De("to", "client@partner.com"),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 transition-all border border-emerald-500/25 cursor-pointer",
                                              children:
                                                "➕ To: client@partner.com (Đối tác)",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De(
                                                  "subject",
                                                  "Đề xuất kế hoạch làm việc tuần mới - Team Công Nghệ",
                                                ),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-all border border-blue-500/25 cursor-pointer",
                                              children:
                                                "✏️ Tiêu đề: Đề xuất kế hoạch làm việc tuần mới - Team Công Nghệ",
                                            }),
                                          ],
                                        },
                                      ),
                                    y === 2 &&
                                      jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 italic",
                                              children:
                                                "Nam đã được gán To khi nhấn Reply. Gợi ý thêm email Sếp:",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De(
                                                  "cc",
                                                  "giamdoc.viet@company.com",
                                                ),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 transition-all border border-amber-500/25 cursor-pointer",
                                              children:
                                                "➕ Cc: giamdoc.viet@company.com (Sếp Việt)",
                                            }),
                                          ],
                                        },
                                      ),
                                    y === 3 &&
                                      jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De("to", "ungvien@career.com"),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 transition-all border border-emerald-500/25 cursor-pointer",
                                              children:
                                                "➕ To: ungvien@career.com (Ứng viên)",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De(
                                                  "bcc",
                                                  "giamdoc.viet@company.com",
                                                ),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-rose-500/10 text-rose-600 hover:bg-rose-500/20 transition-all border border-rose-500/25 cursor-pointer",
                                              children:
                                                "➕ Bcc: giamdoc.viet@company.com (Sếp Việt - Ẩn danh)",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De(
                                                  "subject",
                                                  "Thư mời phỏng vấn vị trí Thực tập sinh Công nghệ",
                                                ),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-all border border-blue-500/25 cursor-pointer",
                                              children:
                                                "✏️ Tiêu đề: Thư mời phỏng vấn vị trí Thực tập sinh Công nghệ",
                                            }),
                                          ],
                                        },
                                      ),
                                    y === 4 &&
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 italic",
                                        children:
                                          "Khi bấm Reply, To tự động khóa là hoa.le@company.com để đảm bảo an toàn tối đa.",
                                      }),
                                    y === 5 &&
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-400 italic",
                                        children:
                                          "Khi bấm Reply All, To và Cc được khóa đầy đủ tự động để giữ luồng thảo luận nhóm.",
                                      }),
                                    y === 6 &&
                                      jsxRuntimeExports.jsxs(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 italic",
                                              children:
                                                "Sau khi bấm Forward, điền địa chỉ người nhận chuyển tiếp:",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () =>
                                                De(
                                                  "to",
                                                  "troly.ha@company.com",
                                                ),
                                              className:
                                                "text-left px-2.5 py-3 rounded-3xl bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 transition-all border border-purple-500/25 cursor-pointer",
                                              children:
                                                "➕ To: troly.ha@company.com (Trợ lý Hà)",
                                            }),
                                          ],
                                        },
                                      ),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "rounded-3xl border border-slate-200 bg-linear-to-b from-cyan-50/50 to-blue-50/10 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900/40 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  type: "button",
                                  onClick: () => te(!K),
                                  className:
                                    "w-full flex items-center justify-between font-extrabold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide cursor-pointer text-left",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(BookOpen, {
                                          className: "h-4 w-4 text-cyan-600",
                                        }),
                                        " Bảng Tra Cứu Khái Niệm Email (IC3 GS6)",
                                      ],
                                    }),
                                    K
                                      ? jsxRuntimeExports.jsx(ChevronDown, {
                                          className:
                                            "h-4 w-4 text-cyan-600 shrink-0",
                                        })
                                      : jsxRuntimeExports.jsx(ChevronRight, {
                                          className:
                                            "h-4 w-4 text-cyan-600 shrink-0",
                                        }),
                                  ],
                                }),
                                K &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-2.5 max-h-[280px] overflow-y-auto pr-1 font-semibold pt-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-emerald-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-emerald-700 dark:text-emerald-400",
                                            children:
                                              "📬 Trường To (Người nhận chính)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Địa chỉ của những người nhận chính trực tiếp chịu trách nhiệm thực thi hoặc xử lý nội dung email.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-amber-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-amber-700 dark:text-amber-400",
                                            children:
                                              "👥 Trường Cc (Carbon Copy - Sao chép công khai)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Gửi bản sao công khai cho những người cần theo dõi thông tin (ví dụ: Sếp hoặc đồng nghiệp) nhưng không cần hành động trực tiếp. Mọi người đều thấy địa chỉ của nhau.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-rose-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-rose-700 dark:text-rose-400",
                                            children:
                                              "🕵️ Trường Bcc (Blind Carbon Copy - Sao chép ẩn danh)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Gửi bản sao bí mật/ẩn danh. Những người nhận khác trong trường To/Cc hoàn toàn KHÔNG biết sự tồn tại của người trong trường Bcc. Rất hữu ích khi cần bảo mật thông tin hoặc gửi email hàng loạt.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-sky-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-sky-700 dark:text-sky-400",
                                            children:
                                              "↩️ Nút Reply (Trả lời riêng)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Chỉ gửi thư phản hồi đến duy nhất người gửi thư gốc. Thích hợp cho trao đổi riêng tư hoặc phản hồi thông tin cá nhân bảo mật.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-indigo-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-indigo-700 dark:text-indigo-400",
                                            children:
                                              "🔄 Nút Reply All (Trả lời tất cả)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Gửi phản hồi cho tất cả mọi người trong chuỗi email (cả người gửi gốc và những người nhận Cc cũ). Giúp toàn nhóm luôn đồng bộ thông tin tiến độ công việc.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-purple-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-purple-700 dark:text-purple-400",
                                            children:
                                              "⏩ Nút Forward (Chuyển tiếp)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Chuyển tiếp nguyên văn bức thư đã nhận cho một người nhận mới hoàn toàn nằm ngoài chuỗi hội thoại ban đầu.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-blue-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-blue-700 dark:text-blue-400",
                                            children: "🏷️ Tiêu đề (Subject)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Tóm tắt ngắn gọn, rõ ràng nội dung chính của email giúp người nhận phân loại, tìm kiếm nhanh và quyết định độ khẩn cấp để mở đọc.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-l-2 border-red-500 pl-2",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "font-black text-red-700 dark:text-red-400",
                                            children:
                                              "⚠️ Độ ưu tiên (Importance / Priority)",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-slate-500 dark:text-slate-400 text-sm sm:text-base font-semibold font-medium mt-0.5",
                                            children:
                                              "Thiết lập mức độ khẩn cấp (Cao - High, Bình thường - Normal, Thấp - Low) nhằm báo hiệu cho đối tác biết độ ưu tiên cần xử lý của bức thư.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "space-y-3 pt-4",
                              children:
                                je &&
                                jsxRuntimeExports.jsxs(motion.div, {
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 },
                                  className: `p-5 sm:p-6 rounded-3xl border text-sm sm:text-base font-medium flex gap-3 text-left ${je.status === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-900/40 dark:text-emerald-300" : je.status === "error" ? "bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-300" : "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/20 dark:border-amber-900/40 dark:text-amber-300"}`,
                                  children: [
                                    je.status === "success"
                                      ? jsxRuntimeExports.jsx(CircleCheckBig, {
                                          className:
                                            "h-5 w-5 shrink-0 text-emerald-500",
                                        })
                                      : je.status === "error"
                                        ? jsxRuntimeExports.jsx(TriangleAlert, {
                                            className:
                                              "h-5 w-5 shrink-0 text-rose-500 animate-pulse",
                                          })
                                        : jsxRuntimeExports.jsx(Info, {
                                            className:
                                              "h-5 w-5 shrink-0 text-amber-500",
                                          }),
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "font-extrabold text-sm sm:text-base font-medium",
                                          children: je.title,
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "font-semibold mt-1 leading-relaxed text-sm sm:text-base font-medium",
                                          children: je.message,
                                        }),
                                        je.conceptExplanation &&
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "mt-2 pt-2 border-t border-emerald-300/30 text-sm sm:text-base font-semibold font-medium leading-relaxed italic text-emerald-700 dark:text-emerald-400",
                                            children: je.conceptExplanation,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "lg:col-span-7 flex flex-col gap-3",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-sm sm:text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block text-left",
                            children:
                              "💻 TRÌNH DUYỆT QUẢN LÝ EMAIL CHUYÊN NGHIỆP",
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "rounded-3xl border-2 border-slate-300 bg-slate-100 text-slate-900 overflow-hidden shadow-2xl flex flex-col min-h-[500px] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-200 dark:bg-slate-900 px-5 sm:px-5 py-3 border-b border-slate-300 dark:border-slate-800 flex items-center gap-2",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-1.5 shrink-0",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-3 w-3 rounded-full bg-rose-500 block",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-3 w-3 rounded-full bg-amber-500 block",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-3 w-3 rounded-full bg-emerald-500 block",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex-1 bg-white dark:bg-slate-800 rounded-3xl px-5 sm:px-5 py-0.5 text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-300 font-mono flex items-center justify-between border border-slate-200 dark:border-slate-700",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className: "truncate",
                                        children:
                                          "https://mail.workstation.com/inbox",
                                      }),
                                      jsxRuntimeExports.jsx(Mail, {
                                        className: "h-3.5 w-3.5 text-slate-400",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-white dark:bg-slate-900 px-4 sm:px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "flex items-center gap-2 min-w-0",
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-xs sm:text-sm font-black tracking-tight text-slate-800 dark:text-white uppercase truncate",
                                      children: "Hộp thư IC3-Workstation",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 shrink-0",
                                    children: [
                                      jsxRuntimeExports.jsx("button", {
                                        onClick: qe,
                                        className: `allow-wrap px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1 cursor-pointer transition-all ${((ge = SCENARIOS.find((Q) => Q.id === y)) == null ? void 0 : ge.taskType) === "compose" ? "bg-cyan-600 text-white hover:bg-cyan-700 shadow-xs" : "bg-slate-200 text-slate-500 dark:bg-slate-800 cursor-not-allowed opacity-40"}`,
                                        children: "📝 Soạn thư mới",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-1 rounded font-mono font-bold",
                                        children: "you@company.com",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "email-browser-grid flex-1 grid grid-cols-1 md:grid-cols-[270px_1fr] gap-0 items-stretch min-h-[420px] w-full overflow-hidden",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "inbox-sidebar relative w-full md:w-[270px] border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-2 flex flex-col gap-1.5 overflow-y-auto shrink-0 min-w-0",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between items-center px-1 pb-1 border-b border-slate-200/60 dark:border-slate-800",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400",
                                            children: "Hộp Thư Đến",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[10px] bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 px-1.5 py-0.5 rounded-full font-bold font-mono",
                                            children: INBOX_EMAILS.length,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "space-y-1.5 w-full min-w-0",
                                        children: INBOX_EMAILS.map((Q) => {
                                          var _e;
                                          const Te =
                                              ((_e = SCENARIOS.find(
                                                (Ue) => Ue.id === y,
                                              )) == null
                                                ? void 0
                                                : _e.incomingEmailId) === Q.id,
                                            $e =
                                              (A == null ? void 0 : A.id) ===
                                                Q.id && R === "reading";
                                          return jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              onClick: () => at(Q),
                                              className: `allow-wrap w-full text-left p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 box-border min-w-0 ${$e ? "bg-cyan-50 border-cyan-400 dark:bg-cyan-950/30 dark:border-cyan-600 shadow-2xs" : Te ? "bg-amber-500/10 border-amber-400 dark:bg-amber-950/20 shadow-2xs" : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex justify-between items-center w-full gap-1 min-w-0",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `text-xs font-black truncate flex-1 min-w-0 ${Te ? "text-amber-700 dark:text-amber-400" : "text-slate-800 dark:text-slate-200"}`,
                                                        children: Q.senderName,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-400 font-mono shrink-0 font-medium",
                                                        children: Q.date,
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-[11px] font-medium text-slate-600 dark:text-slate-300 truncate w-full leading-tight",
                                                  children: Q.subject,
                                                }),
                                                Te &&
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "inline-flex items-center gap-1 mt-0.5 text-[9px] bg-amber-500/20 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded-md font-extrabold tracking-wide",
                                                      children:
                                                        "🔔 CLICK ĐỂ XỬ LÝ",
                                                    },
                                                  ),
                                              ],
                                            },
                                            Q.id,
                                          );
                                        }),
                                      }),
                                      E.length > 0 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "mt-4 pt-3 border-t border-slate-200 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "text-[9px] font-black uppercase text-slate-400 block px-1 text-left mb-1",
                                              children: [
                                                "Thư Đã Gửi (",
                                                E.length,
                                                ")",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className: "space-y-1",
                                              children: E.map((Q, Te) =>
                                                jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "p-2.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-left",
                                                    children: [
                                                      jsxRuntimeExports.jsxs(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-[9px] font-extrabold text-emerald-600 truncate",
                                                          children: [
                                                            "Tới: ",
                                                            Q.to,
                                                          ],
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-[8px] text-slate-400 truncate",
                                                          children: Q.subject,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  Te,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "email-content-area relative min-w-0 flex-1 bg-white dark:bg-slate-950 p-3 sm:p-4 flex flex-col justify-between overflow-y-auto",
                                    children: [
                                      R === "inbox" &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 flex flex-col items-center justify-center text-center p-5 sm:p-6 space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsx(Mail, {
                                              className:
                                                "h-10 w-10 text-slate-300 dark:text-slate-700 animate-bounce",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-1 max-w-xs",
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200",
                                                  children:
                                                    ((ae = SCENARIOS.find(
                                                      (Q) => Q.id === y,
                                                    )) == null
                                                      ? void 0
                                                      : ae.taskType) ===
                                                    "compose"
                                                      ? 'Bước tiếp theo: Hãy nhấp vào nút "📝 Soạn thư mới" ở thanh tiêu đề hộp thư để bắt đầu.'
                                                      : "Bước tiếp theo: Hãy mở email thích hợp ở cột bên trái để bắt đầu thực hiện phản hồi.",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 font-medium",
                                                  children:
                                                    (Ae = SCENARIOS.find(
                                                      (Q) => Q.id === y,
                                                    )) == null
                                                      ? void 0
                                                      : Ae.hint,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      R === "reading" &&
                                        A &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 flex flex-col justify-between text-left space-y-3 min-w-0",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-3 min-w-0",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "border-b border-slate-100 dark:border-slate-800 pb-3 min-w-0",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "h3",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-black text-slate-900 dark:text-white leading-snug break-words",
                                                        children: A.subject,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "mt-2 flex flex-col gap-0.5 text-xs sm:text-sm font-semibold text-slate-500",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "p",
                                                            {
                                                              className:
                                                                "break-all",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "strong",
                                                                  {
                                                                    className:
                                                                      "text-slate-700 dark:text-slate-300",
                                                                    children:
                                                                      "Từ:",
                                                                  },
                                                                ),
                                                                " ",
                                                                A.senderName,
                                                                " <",
                                                                A.from,
                                                                ">",
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "p",
                                                            {
                                                              className:
                                                                "break-all",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "strong",
                                                                  {
                                                                    className:
                                                                      "text-slate-700 dark:text-slate-300",
                                                                    children:
                                                                      "Tới:",
                                                                  },
                                                                ),
                                                                " <",
                                                                A.to,
                                                                ">",
                                                              ],
                                                            },
                                                          ),
                                                          A.cc &&
                                                            jsxRuntimeExports.jsxs(
                                                              "p",
                                                              {
                                                                className:
                                                                  "break-all",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "strong",
                                                                    {
                                                                      className:
                                                                        "text-slate-700 dark:text-slate-300",
                                                                      children:
                                                                        "Cc:",
                                                                    },
                                                                  ),
                                                                  " <",
                                                                  A.cc,
                                                                  ">",
                                                                ],
                                                              },
                                                            ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "p-3 sm:p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs sm:text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap break-words",
                                                  children: A.body,
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-end gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () => ze("reply"),
                                                    className:
                                                      "allow-wrap flex items-center gap-1 px-3 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 dark:bg-sky-950/20 dark:text-sky-300 text-xs sm:text-sm font-bold transition-all cursor-pointer border border-sky-200/50",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        Reply,
                                                        {
                                                          className:
                                                            "h-3.5 w-3.5 shrink-0",
                                                        },
                                                      ),
                                                      " Reply (Trả lời)",
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      ze("reply_all"),
                                                    className:
                                                      "allow-wrap flex items-center gap-1 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/20 dark:text-blue-300 text-xs sm:text-sm font-bold transition-all cursor-pointer border border-blue-200/50",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        ReplyAll,
                                                        {
                                                          className:
                                                            "h-3.5 w-3.5 shrink-0",
                                                        },
                                                      ),
                                                      " Reply All (Trả lời tất cả)",
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () =>
                                                      ze("forward"),
                                                    className:
                                                      "allow-wrap flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-950/20 dark:text-purple-300 text-xs sm:text-sm font-bold transition-all cursor-pointer border border-purple-200/50",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        CornerUpRight,
                                                        {
                                                          className:
                                                            "h-3.5 w-3.5 shrink-0",
                                                        },
                                                      ),
                                                      " Forward (Chuyển tiếp)",
                                                    ],
                                                  },
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                      R === "compose" &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 flex flex-col justify-between text-left space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "space-y-2 text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-12 gap-1 items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "label",
                                                      {
                                                        className:
                                                          "col-span-2 text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                                        children: "To:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-span-10 relative flex items-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value: L,
                                                              onChange: (Q) =>
                                                                le(
                                                                  Q.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full border rounded px-2.5 py-3 text-sm sm:text-base font-medium font-mono font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700",
                                                              placeholder:
                                                                "Nhập địa chỉ email người nhận chính (To)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "absolute right-2 text-[9px] bg-emerald-500/10 text-emerald-600 px-1 py-0.5 rounded font-black uppercase",
                                                              children: "To",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-12 gap-1 items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "label",
                                                      {
                                                        className:
                                                          "col-span-2 text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                                        children: "Cc:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-span-10 relative flex items-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value: P,
                                                              onChange: (Q) =>
                                                                G(
                                                                  Q.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full border rounded px-2.5 py-3 text-sm sm:text-base font-medium font-mono bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700",
                                                              placeholder:
                                                                "Gửi bản sao công khai (Cc)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "absolute right-2 text-[9px] bg-amber-500/10 text-amber-600 px-1 py-0.5 rounded font-black uppercase",
                                                              children: "Cc",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-12 gap-1 items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "label",
                                                      {
                                                        className:
                                                          "col-span-2 text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                                        children: "Bcc:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-span-10 relative flex items-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value: ee,
                                                              onChange: (Q) =>
                                                                ce(
                                                                  Q.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full border rounded px-2.5 py-3 text-sm sm:text-base font-medium font-mono bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700",
                                                              placeholder:
                                                                "Gửi bản sao ẩn danh bảo mật (Bcc)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "absolute right-2 text-[9px] bg-rose-500/10 text-rose-600 px-1 py-0.5 rounded font-black uppercase",
                                                              children: "Bcc",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-12 gap-1 items-center",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "label",
                                                      {
                                                        className:
                                                          "col-span-2 text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                                        children: "Tiêu đề:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-span-10 relative flex items-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              value: V,
                                                              onChange: (Q) =>
                                                                pe(
                                                                  Q.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full border rounded px-2.5 py-3 text-sm sm:text-base font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-slate-300 dark:border-slate-700",
                                                              placeholder:
                                                                "Nhập tiêu đề thư chi tiết...",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "absolute right-2 text-[9px] bg-blue-500/10 text-blue-600 px-1 py-0.5 rounded font-black uppercase",
                                                              children:
                                                                "Subject",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-12 gap-1 items-center py-1",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "label",
                                                      {
                                                        className:
                                                          "col-span-3 text-sm sm:text-base font-semibold font-black text-slate-400 uppercase flex items-center gap-1",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            Flag,
                                                            {
                                                              className:
                                                                "h-3 w-3 text-rose-500",
                                                            },
                                                          ),
                                                          " Độ ưu tiên:",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "col-span-9 flex gap-1.5",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: () =>
                                                                _("high"),
                                                              className: `px-2.5 py-1 rounded text-sm sm:text-base font-extrabold cursor-pointer border transition-all flex items-center gap-1 ${de === "high" ? "bg-rose-500 border-rose-600 text-white shadow-xs" : "bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"}`,
                                                              children:
                                                                "🔴 Quan trọng cao (High)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: () =>
                                                                _("normal"),
                                                              className: `px-2.5 py-1 rounded text-sm sm:text-base font-extrabold cursor-pointer border transition-all flex items-center gap-1 ${de === "normal" ? "bg-slate-300 border-slate-400 text-slate-800 dark:bg-slate-700 dark:border-slate-600 dark:text-white" : "bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"}`,
                                                              children:
                                                                "⚪ Bình thường (Normal)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: () =>
                                                                _("low"),
                                                              className: `px-2.5 py-1 rounded text-sm sm:text-base font-extrabold cursor-pointer border transition-all flex items-center gap-1 ${de === "low" ? "bg-blue-500 border-blue-600 text-white" : "bg-slate-100 border-slate-200 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"}`,
                                                              children:
                                                                "🔵 Thấp (Low)",
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
                                                "flex-1 flex flex-col gap-1 pt-1",
                                              children: [
                                                jsxRuntimeExports.jsx("label", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                                  children:
                                                    "Nội dung soạn thảo:",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "relative flex flex-col flex-1 border border-slate-300 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-900",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "textarea",
                                                      {
                                                        rows:
                                                          be === "forward"
                                                            ? 5
                                                            : 4,
                                                        value: Ie,
                                                        onChange: (Q) =>
                                                          se(Q.target.value),
                                                        className:
                                                          "w-full bg-transparent p-8 sm:p-5 text-sm sm:text-base font-medium font-sans text-slate-800 dark:text-slate-200 focus:outline-hidden leading-relaxed font-semibold resize-none",
                                                        placeholder:
                                                          "Hãy soạn thảo hoặc gõ nội dung thư tại đây...",
                                                      },
                                                    ),
                                                    U &&
                                                      jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "mx-3 my-2 pt-2 border-t border-dashed border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-serif",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-semibold text-sm sm:text-base font-medium text-slate-800 dark:text-slate-300 font-sans",
                                                                children: "--",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-black text-cyan-600 dark:text-cyan-400 font-sans",
                                                                children:
                                                                  "Nguyễn Xuân Lộc",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-semibold font-sans",
                                                                children:
                                                                  "Chức vụ: Chuyên viên Công nghệ thông tin",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "font-mono text-sm sm:text-base font-semibold",
                                                                children:
                                                                  "SĐT: 0987.654.321 | Email: you@company.com",
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
                                                "pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs(
                                                  "label",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 select-none cursor-pointer",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          checked: U,
                                                          onChange: (Q) =>
                                                            Z(Q.target.checked),
                                                          className:
                                                            "rounded text-cyan-600 focus:ring-cyan-500 h-4 w-4",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        PenTool,
                                                        {
                                                          className:
                                                            "h-4 w-4 text-cyan-500 shrink-0",
                                                        },
                                                      ),
                                                      " Chèn chữ ký tự động (Nguyễn Xuân Lộc)",
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "flex gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        onClick: () => Xe(y),
                                                        className:
                                                          "px-5 sm:px-5 py-3 rounded-3xl border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-black hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer",
                                                        children:
                                                          "Hủy Bản Nháp",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "button",
                                                      {
                                                        onClick: tt,
                                                        className:
                                                          "flex items-center justify-center gap-1.5 px-5 py-3 rounded-3xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-sm sm:text-base font-medium shadow-md transition-all active:scale-95 hover:scale-103 transition-all cursor-pointer",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            Send,
                                                            {
                                                              className:
                                                                "h-3.5 w-3.5",
                                                            },
                                                          ),
                                                          " Gửi Email Ngay",
                                                        ],
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
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            !1,
            jsxRuntimeExports.jsx(AnimatePresence, {
              children:
                N &&
                jsxRuntimeExports.jsxs(motion.div, {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  className:
                    "mt-6 p-5 sm:p-6 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-center space-y-3 shadow-xl",
                  children: [
                    jsxRuntimeExports.jsx(Award, {
                      className:
                        "h-12 w-12 mx-auto text-yellow-300 animate-pulse",
                    }),
                    jsxRuntimeExports.jsx("h4", {
                      className: "text-lg font-black",
                      children:
                        "Xuất Sắc! Hoàn Thành Lab 4 Ghép Nối Phản Hồi Email",
                    }),
                    jsxRuntimeExports.jsx("p", {
                      className:
                        "text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed",
                      children:
                        "Chúc mừng em đã nhận diện chuẩn xác 100% định nghĩa về các phản hồi Email: To, Cc, Bcc, Reply, Reply All, Forward. Em đã sẵn sàng cho bài thi chuẩn quốc tế!",
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "pt-2",
                      children: jsxRuntimeExports.jsx("button", {
                        onClick: () => M(!1),
                        className:
                          "px-6 py-3 rounded-3xl bg-white text-cyan-700 font-extrabold text-sm sm:text-base font-medium shadow-md hover:bg-slate-50 transition-all active:scale-95 hover:scale-103 transition-all cursor-pointer",
                        children: "Tiếp Tục Luyện Tập",
                      }),
                    }),
                  ],
                }),
            }),
          ],
        }),
      });
    }
    const TERMS$2 = [
        {
          id: 1,
          name: "Trojan",
          icon: jsxRuntimeExports.jsx(ShieldAlert, { className: "h-5 w-5" }),
          color: "from-amber-500 to-amber-600",
          desc: "Phần mềm ẩn mình dưới vỏ bọc một ứng dụng hữu ích để lừa cài đặt.",
          label: "Mô phỏng Trojan",
        },
        {
          id: 2,
          name: "Ransomware",
          icon: jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }),
          color: "from-red-500 to-rose-600",
          desc: "Mã hóa dữ liệu cá nhân của bạn và yêu cầu trả tiền chuộc.",
          label: "Mô phỏng Ransomware",
        },
        {
          id: 3,
          name: "Phishing",
          icon: jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
          color: "from-sky-500 to-indigo-500",
          desc: "Tấn công giả mạo (email/web) để lấy cắp thông tin đăng nhập/thẻ tín dụng.",
          label: "Mô phỏng Phishing",
        },
        {
          id: 4,
          name: "Spyware",
          icon: jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" }),
          color: "from-emerald-500 to-teal-500",
          desc: "Theo dõi ngầm hành động, chụp màn hình, ghi lại phím bấm của người dùng.",
          label: "Mô phỏng Spyware",
        },
        {
          id: 5,
          name: "Virus",
          icon: jsxRuntimeExports.jsx(Bug, { className: "h-5 w-5" }),
          color: "from-orange-500 to-red-500",
          desc: "Chương trình độc hại bám vào một tệp vật chủ khác để tự sao chép lây lan.",
          label: "Mô phỏng Virus",
        },
        {
          id: 6,
          name: "Malware",
          icon: jsxRuntimeExports.jsx(FileWarning, { className: "h-5 w-5" }),
          color: "from-slate-600 to-slate-800",
          desc: "Thuật ngữ rộng chỉ chung mọi loại phần mềm độc hại gây hại hệ thống.",
          label: "Mô phỏng Malware",
        },
        {
          id: 7,
          name: "Worm",
          icon: jsxRuntimeExports.jsx(Network, { className: "h-5 w-5" }),
          color: "from-purple-500 to-fuchsia-600",
          desc: "Sâu máy tính tự nhân bản và chủ động lan truyền siêu tốc qua mạng LAN/Internet.",
          label: "Mô phỏng Worm",
        },
        {
          id: 8,
          name: "Adware",
          icon: jsxRuntimeExports.jsx(Megaphone, { className: "h-5 w-5" }),
          color: "from-blue-400 to-cyan-500",
          desc: "Phần mềm quảng cáo tự động hiển thị hoặc tải các quảng cáo (pop-up, banner) không mong muốn.",
          label: "Mô phỏng Adware",
        },
      ],
      DEFINITIONS$2 = [
        {
          id: 1,
          text: "Phần mềm độc hại tự mô tả sai để có vẻ hữu ích, quen thuộc hoặc thú vị nhằm thuyết phục nạn nhân cài đặt phần mềm đó",
          correctTermId: 1,
        },
        {
          id: 2,
          text: "Khóa máy tính của bạn cho đến khi thu được một khoản tiền thanh toán",
          correctTermId: 2,
        },
        {
          id: 3,
          text: "Cố gắng đánh lừa ai đó chia sẻ thông tin nhạy cảm như mật khẩu và số thẻ tín dụng",
          correctTermId: 3,
        },
        {
          id: 4,
          text: "Được cài đặt trên máy tính mà chủ sở hữu không biết để thu thập thông tin cá nhân của chủ sở hữu",
          correctTermId: 4,
        },
        {
          id: 5,
          text: "Một chương trình máy tính độc hại tự tái tạo bằng cách sao chép chính nó sang một chương trình khác",
          correctTermId: 5,
        },
        {
          id: 6,
          text: "Một thuật ngữ rộng dùng để chỉ nhiều loại chương trình độc hại, chẳng hạn như adware, bots, bugs, rootkits, spyware, Trojan horses, viruses, và worms",
          correctTermId: 6,
        },
        {
          id: 7,
          text: "Một chương trình có thể tự sao chép và lây lan sang các máy tính khác",
          correctTermId: 7,
        },
        {
          id: 8,
          text: "Một loại chương trình độc hại tự động hiển thị hoặc tải quảng cáo trực tuyến không mong muốn lên máy tính của người dùng",
          correctTermId: 8,
        },
      ],
      getInitialVirusFiles = () => [
        {
          name: "games_crack_mien_phi.exe",
          size: "5.4 MB",
          infected: !1,
          hasVirus: !0,
          content:
            "0xEF99 [Chương trình lậu bẻ khóa game - NHẤP CHUỘT ĐỂ MỞ TỆP!]",
        },
        {
          name: "pdf_reader_pro_crack.exe",
          size: "8.2 MB",
          infected: !1,
          hasVirus: !0,
          content:
            "0xEF99 [Phần mềm chỉnh sửa PDF crack - NHẤP CHUỘT ĐỂ MỞ TỆP!]",
        },
        {
          name: "luong_nhan_vien.xlsx",
          size: "2.4 MB",
          infected: !1,
          content: "0x4D5A... [Bản tính lương nhân sự tháng 7]",
        },
        {
          name: "hop_dong_kinh_doanh.docx",
          size: "1.2 MB",
          infected: !1,
          content: "0x4D5A... [Kế hoạch kinh doanh 2026]",
        },
        {
          name: "bao_cao_tai_chinh_quy2.xlsx",
          size: "3.5 MB",
          infected: !1,
          content: "0x4D5A... [Báo cáo tài chính quý 2]",
        },
        {
          name: "ke_hoach_marketing.pptx",
          size: "8.7 MB",
          infected: !1,
          content: "0x4D5A... [Slide kế hoạch Marketing]",
        },
        {
          name: "co_so_du_lieu_khach_hang.sql",
          size: "15.4 MB",
          infected: !1,
          content: "0x4D5A... [CSDL thông tin mật khách hàng]",
        },
        {
          name: "ma_nguon_phan_mem.ts",
          size: "0.4 MB",
          infected: !1,
          content: "0x4D5A... [Source code cốt lõi của công ty]",
        },
        {
          name: "mat_khau_tai_khoan.txt",
          size: "0.1 MB",
          infected: !1,
          content: "0x4D5A... [Danh sách mật khẩu tài khoản hệ thống]",
        },
        {
          name: "hinh_anh_van_phong.jpg",
          size: "4.2 MB",
          infected: !1,
          content: "0x4D5A... [Hình ảnh nội bộ công ty]",
        },
      ];

    return Lab3;
  };
})();
