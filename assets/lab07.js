/**
 * Lab 07: Sử dụng Hợp lý (Fair Use)
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab07 = window.AGY_LABS[7] = function (env) {
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
    function Lab7({ onSuccess: a }) {
      const [n, i] = reactExports.useState("intro"),
        [l, c] = reactExports.useState(50),
        [d, m] = reactExports.useState(50),
        [u, g] = reactExports.useState(50),
        [p, f] = reactExports.useState(50),
        [b, k] = reactExports.useState(1),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(null),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState(30),
        [L, le] = reactExports.useState(15),
        [P, G] = reactExports.useState(!1),
        [ee, ce] = reactExports.useState(10),
        [V, pe] = reactExports.useState(!0),
        [Ie, se] = reactExports.useState("published"),
        [de, _] = reactExports.useState(!1),
        [U, Z] = reactExports.useState(0),
        [be, he] = reactExports.useState(null),
        [E, v] = reactExports.useState(!1),
        [K, te] = reactExports.useState(0),
        [je, Se] = reactExports.useState(!1),
        [He, Xe] = reactExports.useState(""),
        [Qe, qe] = reactExports.useState(!1),
        at = Math.round(l * 0.35 + d * 0.15 + u * 0.25 + p * 0.25),
        ze = (ie) =>
          ie >= 70
            ? {
                label: "AN TOÀN (FAIR USE MẠNH)",
                color: "text-emerald-500 border-emerald-500 bg-emerald-500/10",
              }
            : ie >= 45
              ? {
                  label: "VÙNG XÁM (CÓ RỦI RO)",
                  color: "text-amber-500 border-amber-500 bg-amber-500/10",
                }
              : {
                  label: "VI PHẠM BẢN QUYỀN CAO",
                  color: "text-rose-500 border-rose-500 bg-rose-500/10",
                },
        De = (ie) => {
          E || he(ie);
        },
        tt = () => {
          if (!be || E) return;
          const ge = JUDGE_CASES[U].options.find((ae) => ae.id === be);
          (ge != null && ge.isCorrect && te((ae) => ae + 1), v(!0));
        },
        it = () => {
          (he(null),
            v(!1),
            U < JUDGE_CASES.length - 1 ? Z((ie) => ie + 1) : (Se(!0), a()));
        },
        oe = () => {
          (Z(0), he(null), v(!1), te(0), Se(!1), qe(!1));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 animate-fade-in text-left",
        id: "lab-7-root",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs",
            children: [
              jsxRuntimeExports.jsxs("div", {
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-semibold uppercase font-black tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-md",
                    children: "Chủ đề IC3 GS6: Bản Quyền Kỹ Thuật Số",
                  }),
                  jsxRuntimeExports.jsx("h4", {
                    className:
                      "font-extrabold text-slate-900 dark:text-white text-lg mt-1.5",
                    children:
                      "Lab 7: Luật Sử Dụng Hợp Lý (Fair Use) Trong Kỷ Nguyên Số",
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className: "flex flex-wrap gap-1.5 w-full sm:w-auto",
                children: [
                  { id: "intro", label: "1. Khái Niệm & 5 Trụ Cột" },
                  { id: "simulations", label: "2. Mô Phỏng Đặc Điểm" },
                  { id: "court", label: "3. Tòa Án Bản Quyền" },
                ].map((ie) =>
                  jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => i(ie.id),
                      className: `flex-1 sm:flex-none text-center rounded-3xl px-5 sm:px-6 py-3 text-sm sm:text-base font-medium font-black transition-all cursor-pointer ${n === ie.id ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-650 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"}`,
                      children: ie.label,
                    },
                    ie.id,
                  ),
                ),
              }),
            ],
          }),
          n === "intro" &&
            jsxRuntimeExports.jsxs("div", {
              className: "space-y-6",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className:
                    "bg-linear-to-br from-blue-500/5 to-indigo-500/5 border border-blue-100 dark:border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4",
                  children: jsxRuntimeExports.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-md",
                        children: jsxRuntimeExports.jsx(Compass, {
                          className: "h-6 w-6",
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          jsxRuntimeExports.jsx("h5", {
                            className:
                              "font-black text-slate-900 dark:text-white text-base",
                            children: "Fair Use (Quyền sử dụng hợp lý) là gì?",
                          }),
                          jsxRuntimeExports.jsxs("p", {
                            className:
                              "text-sm sm:text-base font-medium text-slate-650 dark:text-slate-300 leading-relaxed font-medium",
                            children: [
                              jsxRuntimeExports.jsx("strong", {
                                children: "Sử dụng hợp lý (Fair Use)",
                              }),
                              " là một học thuyết pháp lý cho phép mọi người tái sử dụng các tài liệu đã có bản quyền của tác giả khác ",
                              jsxRuntimeExports.jsx("strong", {
                                children: "mà không cần xin phép trước",
                              }),
                              " và ",
                              jsxRuntimeExports.jsx("strong", {
                                children: "không phải trả phí bản quyền",
                              }),
                              " dưới những điều kiện chặt chẽ.",
                            ],
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-sm sm:text-base font-medium text-slate-550 dark:text-slate-400 leading-relaxed",
                            children:
                              "Học thuyết này được thiết kế để cân bằng quyền lợi giữa nhà sáng tạo gốc và quyền tự do ngôn luận, học thuật, báo chí của công chúng. Để thẩm định một hành vi có thuộc Fair Use hay không, tòa án quốc tế dựa trên các yếu tố cốt lõi. Hãy cùng kéo các thanh trượt bên dưới để thử nghiệm thuật toán ước tính Fair Use!",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "lg:col-span-7 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xs space-y-5",
                      children: [
                        jsxRuntimeExports.jsxs("h5", {
                          className:
                            "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white uppercase tracking-wide flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "flex h-5 w-5 items-center justify-center rounded-3xl bg-blue-100 dark:bg-blue-950 text-blue-600 text-sm sm:text-base font-semibold font-black",
                              children: "🎛️",
                            }),
                            "BẢNG ƯỚC TÍNH 4 NHÂN TỐ CHÍNH (FAIR USE CHECKLIST)",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between items-center text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-slate-700 dark:text-slate-300",
                                  children:
                                    "Yếu tố 1: Mục đích & tính chất sử dụng",
                                }),
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "font-mono text-blue-500 font-bold",
                                  children: [l, "%"],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "100",
                              value: l,
                              onChange: (ie) => c(Number(ie.target.value)),
                              className:
                                "w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between text-sm sm:text-base font-bold text-slate-400",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children: "Thương mại đơn thuần (0)",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: "Sáng tạo / Giáo dục (100)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between items-center text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-slate-700 dark:text-slate-300",
                                  children:
                                    "Yếu tố 2: Tính tự do & sáng tạo của tác phẩm gốc",
                                }),
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "font-mono text-blue-500 font-bold",
                                  children: [d, "%"],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "100",
                              value: d,
                              onChange: (ie) => m(Number(ie.target.value)),
                              className:
                                "w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between text-sm sm:text-base font-bold text-slate-400",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children: "Cực kỳ sáng tạo/Nghệ thuật (0)",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: "Thuần thực tế/Dữ liệu (100)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between items-center text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-slate-700 dark:text-slate-300",
                                  children:
                                    "Yếu tố 3: Số lượng & quy mô sử dụng",
                                }),
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "font-mono text-blue-500 font-bold",
                                  children: [u, "%"],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "100",
                              value: u,
                              onChange: (ie) => g(Number(ie.target.value)),
                              className:
                                "w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between text-sm sm:text-base font-bold text-slate-400",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children: "Toàn bộ / Phần cốt lõi (0)",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Một đoạn cực nhỏ / Trích dẫn (100)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between items-center text-sm sm:text-base font-medium",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-slate-700 dark:text-slate-300",
                                  children:
                                    "Yếu tố 4: Tác động thị trường của tác phẩm gốc",
                                }),
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "font-mono text-blue-500 font-bold",
                                  children: [p, "%"],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("input", {
                              type: "range",
                              min: "0",
                              max: "100",
                              value: p,
                              onChange: (ie) => f(Number(ie.target.value)),
                              className:
                                "w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between text-sm sm:text-base font-bold text-slate-400",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Cạnh tranh trực tiếp/Mất doanh thu (0)",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Không ảnh hưởng thị phần gốc (100)",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "lg:col-span-5 keep-dark bg-slate-950 text-white p-5 sm:p-6 rounded-3xl border border-slate-800 flex flex-col justify-between",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-xs sm:text-sm font-black uppercase tracking-wider text-indigo-400 block",
                              children:
                                "⚡ THỬ NGHIỆM ĐỒNG HỒ CÂN BẰNG PHÁP LÝ (FAIR USE METER)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "relative py-8 flex flex-col items-center justify-center bg-black/50 rounded-3xl border border-slate-800 overflow-hidden",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-col items-center transition-all duration-500 ease-out",
                                  style: {
                                    transform: `rotate(${(at - 50) * 0.4}deg)`,
                                  },
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "h-3 w-56 bg-slate-700 rounded-full relative flex items-center justify-between px-2",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-amber-400",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "px-2 py-1 rounded-lg bg-rose-600 border border-rose-400 flex items-center justify-center text-[10px] font-black text-white shadow-md select-none -translate-y-6 z-20",
                                          children: "Vi Phạm ⚠️",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "px-2 py-1 rounded-lg bg-emerald-600 border border-emerald-400 flex items-center justify-center text-[10px] font-black text-white shadow-md select-none -translate-y-6 z-20",
                                          children: "Hợp Lý 🟢",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-5 w-5 rounded-full bg-slate-300 border-2 border-white -mt-2 shadow-md z-10",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-10 w-3 bg-slate-600 -mt-1 rounded-b",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "mt-4 text-center",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-xs font-bold text-slate-300 uppercase block",
                                      children: "Tỉ lệ ước tính hợp lý:",
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "text-3xl font-mono font-black text-indigo-300 block mt-1",
                                      children: [at, "%"],
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
                                    "text-sm sm:text-base font-bold text-slate-400 uppercase",
                                  children: "Trạng thái ước tính:",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: `p-8 sm:p-5 rounded-3xl border text-sm sm:text-base font-medium font-black text-center ${ze(at).color}`,
                                  children: ze(at).label,
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "text-[10.5px] text-slate-400 leading-relaxed italic bg-slate-900/50 p-8 sm:p-5 rounded-3xl border border-slate-900 mt-4",
                          children: [
                            "💡 ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Lời khuyên của chuyên gia:",
                            }),
                            " Để tự tin sử dụng tài nguyên của người khác, em hãy ưu tiên chọn nguồn dữ liệu thực tế (Factual), trích dẫn một phần nhỏ (Small Portion), lồng ghép bình luận sâu sắc (Transformative) và đảm bảo không phân phối cạnh tranh trực tiếp với tác giả.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("div", {
                  className: "flex justify-end pt-2",
                  children: jsxRuntimeExports.jsxs("button", {
                    onClick: () => i("simulations"),
                    className:
                      "bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium font-black px-6 py-3 rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-md flex items-center gap-1.5 cursor-pointer",
                    children: [
                      "Tiến vào 5 Mô Phỏng Đặc Điểm Tương Tác ",
                      jsxRuntimeExports.jsx(ChevronRight, {
                        className: "h-4.5 w-4.5",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          n === "simulations" &&
            jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "lg:col-span-4 space-y-2.5 text-left",
                  children: [
                    jsxRuntimeExports.jsx("span", {
                      className:
                        "text-sm sm:text-base font-semibold uppercase font-black tracking-wide text-slate-500 block",
                      children: "Chọn đặc điểm mô phỏng:",
                    }),
                    [
                      {
                        id: 1,
                        title: "1. Mục đích sử dụng",
                        sub: "Chuyển đổi sáng tạo vs Sao chép thô",
                        icon: "📝",
                      },
                      {
                        id: 2,
                        title: "2. Tính sáng tạo gốc",
                        sub: "Sách tra cứu thông tin vs Tranh vẽ nghệ thuật",
                        icon: "🎨",
                      },
                      {
                        id: 3,
                        title: "3. Số lượng & quy mô",
                        sub: "Cắt đoạn nhạc ngắn vs Toàn bộ điệp khúc",
                        icon: "✂️",
                      },
                      {
                        id: 4,
                        title: "4. Tác động thị trường",
                        sub: "Hội thảo phi thương mại vs Bản PDF miễn phí",
                        icon: "📊",
                      },
                      {
                        id: 5,
                        title: "5. Bản chất tác phẩm gốc",
                        sub: "Phát biểu công khai vs Nhật ký đời tư mật",
                        icon: "🔒",
                      },
                    ].map((ie) =>
                      jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => k(ie.id),
                          className: `w-full p-8 sm:p-5 rounded-3xl border text-left transition-all relative flex gap-3.5 ${b === ie.id ? "border-blue-600 bg-blue-50/20 dark:bg-blue-950/25 shadow-sm scale-[1.01] ring-1 ring-blue-500" : "border-slate-200 bg-white hover:border-slate-350 dark:bg-slate-900 dark:border-slate-800"} cursor-pointer`,
                          children: [
                            jsxRuntimeExports.jsx("div", {
                              className: "text-xl shrink-0 mt-1",
                              children: ie.icon,
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("h6", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                  children: ie.title,
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-0.5 leading-relaxed",
                                  children: ie.sub,
                                }),
                              ],
                            }),
                          ],
                        },
                        ie.id,
                      ),
                    ),
                  ],
                }),
                jsxRuntimeExports.jsx("div", {
                  className: "lg:col-span-8",
                  children: jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs min-h-[480px] flex flex-col justify-between text-left",
                    children: [
                      b === 1 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "border-b border-slate-100 dark:border-slate-800 pb-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold uppercase font-black text-blue-600 dark:text-blue-400 block",
                                  children: "ĐẶC ĐIỂM SỐ 1",
                                }),
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1",
                                  children:
                                    "Mục đích và tính chất của việc sử dụng (Purpose and Character of the Use)",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-1 leading-relaxed",
                                  children: [
                                    "Sử dụng có mang tính ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: '"Chuyển đổi" (Transformative)',
                                    }),
                                    " không? Nghĩa là có thêm bớt, phân tích, giảng giải gì mới để tạo giá trị mới cho xã hội không? Hay chỉ là sao chép nguyên trạng để trục lợi?",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-3.5",
                              children: [
                                jsxRuntimeExports.jsx("label", {
                                  className:
                                    "block text-sm sm:text-base font-medium font-black uppercase text-slate-600 dark:text-slate-400",
                                  children:
                                    'TÌNH HUỐNG: ĐĂNG TẢI TRÍCH ĐOẠN PHIM "AVENGERS" LÊN YOUTUBE',
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (M("copy"), I(!1));
                                      },
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all ${N === "copy" ? "border-rose-500 bg-rose-50/15 ring-1 ring-rose-500" : "border-slate-200 hover:border-slate-300"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-start gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                              children:
                                                "Lựa chọn A: Đăng lại (Re-upload)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono whitespace-nowrap shrink-0 text-slate-700 dark:text-slate-300",
                                              children: "Verbatim",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-[10.5px] text-slate-550 dark:text-slate-400 font-semibold mt-2 leading-relaxed",
                                          children:
                                            "Cắt ghép 5 phút cảnh đánh nhau hoành tráng nhất, giữ nguyên âm thanh, đăng tải lên kênh kiếm tiền mà không có lời giới thiệu hay bình luận gì thêm.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (M("transform"), I(!0));
                                      },
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all ${N === "transform" ? "border-emerald-600 bg-emerald-50/15 ring-1 ring-emerald-500" : "border-slate-200 hover:border-slate-300"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-start gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white",
                                              children:
                                                "Lựa chọn B: Review phim phê bình",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded font-mono whitespace-nowrap shrink-0",
                                              children: "Transformative",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-[10.5px] text-slate-550 dark:text-slate-400 font-semibold mt-2 leading-relaxed",
                                          children:
                                            "Cắt các phân cảnh cực ngắn đan xen nhau, giảm tiếng phim gốc xuống, lồng giọng đọc (voiceover) phân tích bố cục hình ảnh và phân tích diễn xuất của diễn viên.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            N &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-850 space-y-2 animate-fade-in text-sm sm:text-base font-semibold leading-relaxed",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      y
                                        ? jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1 text-emerald-600 font-black uppercase bg-emerald-100/60 px-2 py-0.5 rounded text-sm sm:text-base font-semibold",
                                            children: [
                                              jsxRuntimeExports.jsx(ThumbsUp, {
                                                className: "h-3 w-3",
                                              }),
                                              " HỢP LỆ FAIR USE MẠNH",
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1 text-rose-500 font-black uppercase bg-rose-100/60 px-2 py-0.5 rounded text-sm sm:text-base font-semibold",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                ThumbsDown,
                                                { className: "h-3 w-3" },
                                              ),
                                              " VI PHẠM BẢN QUYỀN",
                                            ],
                                          }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-slate-400 font-mono text-sm sm:text-base font-semibold",
                                        children:
                                          "Hệ thống YouTube copyright quét...",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-slate-700 dark:text-slate-300 font-medium",
                                    children: y
                                      ? 'Chính xác! Bằng cách thêm vào phân tích phê bình chuyên sâu và bối cảnh phê bình điện ảnh, em đã "chuyển hóa" tác phẩm gốc thành một tài nguyên giáo dục/bình luận mới có ích cho cộng đồng, không cạnh tranh trực tiếp với vé xem phim rạp.'
                                      : "Cảnh báo! Đây là hành vi Re-upload thô bạo. Nó không tạo ra bất cứ giá trị giáo dục hay chuyển biến nghệ thuật nào, mà trực tiếp sử dụng sức hút của phim gốc để lôi kéo lượt xem phi pháp. Hệ thống sẽ ngay lập tức gửi một Copyright Strike (Gậy bản quyền).",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      b === 2 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "border-b border-slate-100 dark:border-slate-800 pb-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold uppercase font-black text-blue-600 dark:text-blue-400 block",
                                  children: "ĐẶC ĐIỂM SỐ 2",
                                }),
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1",
                                  children:
                                    "Tính tự do và sáng tạo của tác phẩm gốc (Creativity of the Original Work)",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-1 leading-relaxed",
                                  children: [
                                    "Pháp luật bảo hộ bản quyền cực kỳ khắt khe đối với những tác phẩm mang ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "tính nghệ thuật sáng tạo cao",
                                    }),
                                    " (phim ảnh viễn tưởng, tiểu thuyết, tranh vẽ giả tưởng) hơn là những tài nguyên ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "thuần sự thật, số liệu thực tế",
                                    }),
                                    " (bản tin dự báo thời tiết, danh bạ, niên giám số liệu).",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-650 dark:text-slate-400 uppercase",
                                  children:
                                    "THỰC NGHIỆM SO SÁNH HAI LOẠI NGUỒN TÀI NGUYÊN:",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "grid grid-cols-2 gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => z("factual"),
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all ${R === "factual" ? "border-indigo-600 bg-indigo-50/10" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-2xl block",
                                          children: "📊",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "font-black text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1.5 block",
                                          children:
                                            "Nguồn A: Biểu đồ thời tiết & số liệu",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed mt-1",
                                          children:
                                            "Các thông tin nhiệt độ thực tế đo đạc tại Hà Nội trong 10 năm qua.",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => z("creative"),
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all ${R === "creative" ? "border-indigo-600 bg-indigo-50/10" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-2xl block",
                                          children: "🎨",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "font-black text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1.5 block",
                                          children:
                                            "Nguồn B: Bức tranh phong cảnh kỳ ảo",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed mt-1",
                                          children:
                                            "Bức vẽ tay kỹ thuật số miêu tả thế giới tương lai đầy sáng tạo của họa sĩ.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                R &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between items-center text-sm sm:text-base font-medium",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "font-bold text-slate-700 dark:text-slate-350",
                                            children:
                                              "Chọn tỷ lệ mượn dùng tham khảo:",
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-indigo-600 font-bold",
                                            children: [A, "% tác phẩm"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "range",
                                        min: "10",
                                        max: "100",
                                        value: A,
                                        onChange: (ie) =>
                                          O(Number(ie.target.value)),
                                        className:
                                          "w-full accent-indigo-600 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 animate-fade-in text-sm sm:text-base font-semibold leading-relaxed",
                                        children:
                                          R === "factual"
                                            ? jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-slate-700 dark:text-slate-350",
                                                children: [
                                                  "🟢 ",
                                                  jsxRuntimeExports.jsxs(
                                                    "strong",
                                                    {
                                                      children: [
                                                        "Khả năng Fair Use: CAO (",
                                                        100 - A + 20,
                                                        "% an toàn)",
                                                      ],
                                                    },
                                                  ),
                                                  ".",
                                                  jsxRuntimeExports.jsx(
                                                    "br",
                                                    {},
                                                  ),
                                                  "Số liệu thời tiết thực tế là các dữ kiện tự nhiên (factual facts), không ai có thể độc quyền sở hữu tính khoa học của tự nhiên. Kể cả em có trích dẫn tới ",
                                                  A,
                                                  "% bảng số liệu để làm đề tài nghiên cứu địa lý, luật pháp vẫn cực kỳ khuyến khích sử dụng và bảo vệ em an toàn!",
                                                ],
                                              })
                                            : jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-slate-700 dark:text-slate-350",
                                                children: [
                                                  "🔴 ",
                                                  jsxRuntimeExports.jsxs(
                                                    "strong",
                                                    {
                                                      children: [
                                                        "Khả năng Fair Use: THẤP (",
                                                        Math.max(0, 50 - A),
                                                        "% an toàn)",
                                                      ],
                                                    },
                                                  ),
                                                  ".",
                                                  jsxRuntimeExports.jsx(
                                                    "br",
                                                    {},
                                                  ),
                                                  "Tác phẩm nghệ thuật giả tưởng này là sản phẩm tinh hoa mang đậm bản sắc cá nhân và sức lao động sáng tạo thăng hoa độc quyền của họa sĩ gốc. Việc sao chép ",
                                                  A,
                                                  "% bức tranh để in ấn quảng cáo hay làm nền game của em mà không có bản quyền sẽ rất dễ bị khởi kiện vi phạm!",
                                                ],
                                              }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      b === 3 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "border-b border-slate-100 dark:border-slate-800 pb-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold uppercase font-black text-blue-600 dark:text-blue-400 block",
                                  children: "ĐẶC ĐIỂM SỐ 3",
                                }),
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1",
                                  children:
                                    "Số lượng và quy mô của tác phẩm sử dụng (Amount and Substantiality)",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-1 leading-relaxed",
                                  children: [
                                    "Sử dụng bao nhiêu phần trăm dung lượng tác phẩm gốc? Và quan trọng nhất: Đoạn em lấy có phải là ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        '"Trái tim / Linh hồn" (Heart of the work)',
                                    }),
                                    " chứa đựng tinh hoa tinh túy nhất của tác phẩm hay không?",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-slate-950 rounded-3xl border border-slate-800 space-y-3.5",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold uppercase font-black text-slate-500 block",
                                      children:
                                        "🎚️ TRÌNH CẮT GHÉP SÓNG NHẠC AUDIO",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "h-16 bg-slate-900 rounded-3xl flex items-end gap-1 px-5 sm:px-6 py-3 relative overflow-hidden",
                                      children: [
                                        [
                                          40, 60, 20, 80, 45, 95, 30, 75, 50,
                                          10, 85, 90, 60, 70, 40, 85, 30, 20,
                                          95, 100, 90, 40, 60, 20, 80, 45, 95,
                                          30, 75,
                                        ].map((ie, ge) => {
                                          const ae = ge >= 15 && ge <= 21;
                                          return jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              style: { height: `${ie}%` },
                                              className: `w-full rounded-sm transition-all duration-300 ${ae && P ? "bg-red-500 shadow-xs shadow-red-500" : "bg-indigo-500"}`,
                                            },
                                            ge,
                                          );
                                        }),
                                        P &&
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-red-500/5 flex items-center justify-center border border-red-500/20 rounded-3xl",
                                            children: jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                className:
                                                  "text-[9px] font-black text-red-500 uppercase bg-black px-2 py-0.5 rounded tracking-wide animate-pulse",
                                                children:
                                                  "🔥 ĐANG CHỌN ĐOẠN ĐIỆP KHÚC HOT NHẤT (HEART OF THE WORK)",
                                              },
                                            ),
                                          }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base font-medium text-slate-300",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1.5 text-left",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "font-extrabold text-slate-400 block uppercase text-sm sm:text-base font-semibold",
                                              children: "Thời lượng mượn dùng:",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                jsxRuntimeExports.jsx("input", {
                                                  type: "range",
                                                  min: "3",
                                                  max: "180",
                                                  value: L,
                                                  onChange: (ie) =>
                                                    le(Number(ie.target.value)),
                                                  className:
                                                    "w-full accent-indigo-500",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "font-mono font-bold text-indigo-300 shrink-0 w-12 text-right",
                                                  children: [L, " giây"],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-extrabold block text-slate-200",
                                                  children:
                                                    "Đoạn nhạc linh hồn?",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 leading-none",
                                                  children:
                                                    "Chứa giai điệu hook chính bài hát",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => G(!P),
                                              className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black transition-all ${P ? "bg-red-600 text-white shadow-md" : "bg-slate-800 text-slate-400 hover:bg-slate-750"} cursor-pointer`,
                                              children: P
                                                ? "CÓ (HEART)"
                                                : "KHÔNG",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-sm sm:text-base font-semibold leading-relaxed",
                                  children:
                                    L > 90
                                      ? jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-slate-700 dark:text-slate-350",
                                          children: [
                                            "🔴 ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Đánh giá bản quyền: VI PHẠM BẢN QUYỀN CAO!",
                                            }),
                                            jsxRuntimeExports.jsx("br", {}),
                                            "Em đã lấy quá nhiều (",
                                            L,
                                            " giây - tương đương hơn nửa bài hát gốc). Sử dụng dung lượng lớn như vậy trực tiếp thay thế trải nghiệm nghe bài hát gốc trên thị trường của ca sĩ, không thể coi là sử dụng hợp lý.",
                                          ],
                                        })
                                      : P
                                        ? jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-slate-700 dark:text-slate-350",
                                            children: [
                                              "⚠️ ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "Đánh giá bản quyền: VÙNG RỦI RO LỚN!",
                                              }),
                                              jsxRuntimeExports.jsx("br", {}),
                                              "Mặc dù em lấy khá ít (",
                                              L,
                                              " giây) nhưng đoạn này lại là ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  '"Trái tim tinh túy" (Heart of the work)',
                                              }),
                                              " chứa đựng phần đặc sắc nổi tiếng nhất của cả tác phẩm âm nhạc. Luật bản quyền nghiêm cấm lấy đi phần linh hồn cốt lõi của người khác vì nó trực tiếp cạnh tranh thương mại.",
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-slate-700 dark:text-slate-350",
                                            children: [
                                              "🟢 ",
                                              jsxRuntimeExports.jsx("strong", {
                                                children:
                                                  "Đánh giá bản quyền: AN TOÀN FAIR USE!",
                                              }),
                                              jsxRuntimeExports.jsx("br", {}),
                                              "Tuyệt vời! Em chỉ mượn một lượng rất nhỏ (",
                                              L,
                                              " giây) và tránh hoàn toàn đoạn điệp khúc chính. Điều này phù hợp để lồng ghép minh họa thông tin bài học mà không gây ảnh hưởng đến doanh thu nhạc gốc.",
                                            ],
                                          }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      b === 4 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "border-b border-slate-100 dark:border-slate-800 pb-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold uppercase font-black text-blue-600 dark:text-blue-400 block",
                                  children: "ĐẶC ĐIỂM SỐ 4",
                                }),
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1",
                                  children:
                                    "Tác động đến thị trường tiềm năng của tác phẩm gốc (Effect on Potential Market)",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-1 leading-relaxed",
                                  children: [
                                    "Đây được coi là ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "yếu tố quan trọng nhất",
                                    }),
                                    " trong thực tiễn xét xử. Liệu việc em sử dụng tác phẩm có cướp đi khách hàng tiềm năng, triệt tiêu doanh số bán hàng hay làm sụt giảm nghiêm trọng giá trị thương mại của tác phẩm gốc không?",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-650 dark:text-slate-400 block uppercase",
                                      children:
                                        "📋 MÔ PHỎNG PHÂN PHỐI SÁCH PHOTOCOPY CHO HỌC SINH",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base font-semibold",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1.5 text-left",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "text-sm sm:text-base font-semibold uppercase text-slate-400 font-bold block",
                                              children:
                                                "Số lượng học sinh nhận bản photocopy:",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                jsxRuntimeExports.jsx("input", {
                                                  type: "range",
                                                  min: "2",
                                                  max: "200",
                                                  value: ee,
                                                  onChange: (ie) =>
                                                    ce(Number(ie.target.value)),
                                                  className:
                                                    "w-full accent-blue-600 cursor-pointer",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "font-mono font-extrabold text-blue-600 dark:text-indigo-400 shrink-0 w-16 text-right",
                                                  children: [ee, " học viên"],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-black text-sm sm:text-base font-medium block text-slate-850 dark:text-white",
                                                  children:
                                                    "Tình trạng sách gốc:",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[9.5px] text-slate-450 font-semibold",
                                                  children: V
                                                    ? "Đang bán rầm rộ rạp sách"
                                                    : "Đã ngưng xuất bản/Sách cổ",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => pe(!V),
                                              className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black transition-colors ${V ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"} cursor-pointer`,
                                              children: V
                                                ? "ĐANG BÁN"
                                                : "HẾT SÁCH",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-sm sm:text-base font-semibold leading-relaxed",
                                  children: V
                                    ? ee > 40
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-1 text-slate-700 dark:text-slate-350",
                                          children: [
                                            jsxRuntimeExports.jsxs("p", {
                                              className:
                                                "text-rose-500 font-black flex items-center gap-1 uppercase",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  TrendingDown,
                                                  { className: "h-4 w-4" },
                                                ),
                                                " THIỆT HẠI KINH TẾ LỚN (NOT FAIR USE)",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              className: "mt-1",
                                              children: [
                                                "Cuốn sách đang bán chính thức ngoài hiệu sách với giá cao. Việc tự ý photocopy phân phối rộng rãi cho tận ",
                                                ee,
                                                " học viên trực tiếp khiến nhà xuất bản mất đi ",
                                                ee,
                                                " khách hàng tiềm năng mua sách thật, hủy hoại trực tiếp doanh số thị trường. Đây chắc chắn cấu thành hành vi xâm phạm bản quyền nghiêm trọng!",
                                              ],
                                            }),
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-1 text-slate-700 dark:text-slate-350",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-amber-500 font-black flex items-center gap-1 uppercase",
                                              children:
                                                "⚠️ ẢNH HƯỞNG THẤP (XEM XÉT CẨN TRỌNG)",
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              className: "mt-1",
                                              children: [
                                                "Dù sách đang bán, nhưng quy mô sử dụng của em rất giới hạn (",
                                                ee,
                                                " học viên trong khuôn khổ nhóm học nhỏ) làm giảm nhẹ mức độ thiệt hại kinh tế. Tuy nhiên, khuyến khích giáo viên chỉ photocopy vài trang bài tập ví dụ thay vì trích lục nguyên chương!",
                                              ],
                                            }),
                                          ],
                                        })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "space-y-1 text-slate-700 dark:text-slate-350",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-emerald-500 font-black flex items-center gap-1 uppercase",
                                            children:
                                              "🟢 AN TOÀN FAIR USE MẠNH (HẦU NHƯ KHÔNG CÓ TÁC ĐỘNG)",
                                          }),
                                          jsxRuntimeExports.jsxs("p", {
                                            className: "mt-1",
                                            children: [
                                              "Tuyệt vời! Vì tác phẩm gốc đã ngưng xuất bản hoàn toàn (Out of print) từ lâu, độc giả không thể mua mới từ nhà sản xuất nữa. Hành vi nhân bản ",
                                              ee,
                                              " bản sao cho lớp nghiên cứu học thuật của em hoàn toàn không làm suy giảm một thị trường thương mại vốn dĩ không còn tồn tại. Fair Use được tòa án phê chuẩn dễ dàng!",
                                            ],
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      b === 5 &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "border-b border-slate-100 dark:border-slate-800 pb-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-semibold uppercase font-black text-blue-600 dark:text-blue-400 block",
                                  children: "ĐẶC ĐIỂM SỐ 5",
                                }),
                                jsxRuntimeExports.jsx("h5", {
                                  className:
                                    "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white mt-1",
                                  children:
                                    "Bản chất của tác phẩm gốc (Nature of the Copyrighted Work)",
                                }),
                                jsxRuntimeExports.jsxs("p", {
                                  className:
                                    "text-sm sm:text-base font-semibold text-slate-500 mt-1 leading-relaxed",
                                  children: [
                                    "Tác phẩm gốc đã được ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "công bố rộng rãi ra công chúng (Published)",
                                    }),
                                    " chưa? Hay là một tư liệu ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children:
                                        "tuyệt mật, đời tư chưa từng xuất bản (Unpublished)",
                                    }),
                                    " của tác giả? Fair Use bảo vệ rất nghiêm ngặt quyền quyết định công bố đầu tiên của người sáng lập.",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-650 dark:text-slate-400 uppercase",
                                  children:
                                    "TÌNH HUỐNG: ĐĂNG TẢI TÀI LIỆU CỦA CHỦ TỊCH TẬP ĐOÀN",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-3.5",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        se("published");
                                      },
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all flex items-start gap-3 ${Ie === "published" ? "border-indigo-600 bg-indigo-50/15" : "border-slate-200"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsx(FileText, {
                                          className:
                                            "h-5 w-5 text-indigo-500 shrink-0 mt-0.5",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "font-extrabold text-sm sm:text-base font-medium block text-slate-800 dark:text-white",
                                              children:
                                                "Tài liệu A: Sách hồi ký đã phát hành",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed mt-1",
                                              children:
                                                "Hồi ký kể về hành trình khởi nghiệp của chủ tịch đã được in ấn phát hành rộng rãi toàn quốc.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        se("unpublished");
                                      },
                                      className: `p-5 sm:p-6 rounded-3xl border text-left transition-all flex items-start gap-3 ${Ie === "unpublished" ? "border-indigo-600 bg-indigo-50/15" : "border-slate-200"} cursor-pointer`,
                                      children: [
                                        jsxRuntimeExports.jsx(Lock, {
                                          className:
                                            "h-5 w-5 text-rose-500 shrink-0 mt-0.5",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "font-extrabold text-sm sm:text-base font-medium block text-slate-800 dark:text-white",
                                              children:
                                                "Tài liệu B: Nhật ký thư tay tuyệt mật",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed mt-1",
                                              children:
                                                "Bản thư tay nháp, nhật ký cá nhân để trong két sắt tại phòng làm việc chưa từng được tiết lộ ra bên ngoài.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 text-sm sm:text-base font-semibold leading-relaxed",
                                  children:
                                    Ie === "published"
                                      ? jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-slate-700 dark:text-slate-350",
                                          children: [
                                            "🟢 ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Đánh giá pháp lý: CƠ HỘI ĐẠT FAIR USE CAO!",
                                            }),
                                            jsxRuntimeExports.jsx("br", {}),
                                            "Tác phẩm gốc đã được chủ sở hữu chủ động xuất bản công khai trước toàn xã hội. Do đó, việc trích dẫn một vài câu nói truyền cảm hứng từ cuốn hồi ký để phân tích phong cách sống hoàn toàn hợp lý và dễ dàng được pháp luật cho phép dưới diện phê bình/đào tạo học thuật.",
                                          ],
                                        })
                                      : jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-slate-700 dark:text-slate-350",
                                          children: [
                                            "🔴 ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Đánh giá pháp lý: KHẢ NĂNG VI PHẠM CỰC KỲ CAO!",
                                            }),
                                            jsxRuntimeExports.jsx("br", {}),
                                            "Cực kỳ nguy hiểm! Do nhật ký thư tay này là tác phẩm ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "chưa công bố (Unpublished)",
                                            }),
                                            ". Luật sở hữu trí tuệ cực kỳ bảo vệ quyền riêng tư đầu tay của tác giả. Việc tự ý tiết lộ hoặc đăng tải nội dung thư tay chưa công bố của người khác là hành vi xâm phạm nghiêm trọng lợi ích tác giả, hầu như KHÔNG BAO GIỜ được tòa án bảo vệ dưới luật Fair Use!",
                                          ],
                                        }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center mt-6",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className: "text-[10.5px] font-bold text-slate-400",
                            children:
                              "Hãy nhấp và khám phá hết cả 5 đặc điểm mấu chốt để nắm vững kiến thức!",
                          }),
                          jsxRuntimeExports.jsxs("button", {
                            onClick: () => i("court"),
                            className:
                              "bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium font-black px-5 sm:px-5 py-3 rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-md flex items-center gap-1",
                            children: [
                              "Bắt đầu thử thách Thẩm Phán Bản Quyền ",
                              jsxRuntimeExports.jsx(ChevronRight, {
                                className: "h-4 w-4",
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
          n === "court" &&
            jsxRuntimeExports.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
              children: [
                jsxRuntimeExports.jsx("div", {
                  className: "lg:col-span-8 space-y-5",
                  children: je
                    ? jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-5 text-center",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
                            children: jsxRuntimeExports.jsx(Trophy, {
                              className: "h-7 w-7",
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-1.5",
                            children: [
                              jsxRuntimeExports.jsx("h5", {
                                className:
                                  "font-extrabold text-slate-900 dark:text-white text-base",
                                children:
                                  "HOÀN THÀNH PHIÊN TÒA KIỂM ĐỊNH FAIR USE!",
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 font-semibold max-w-md mx-auto leading-relaxed",
                                children: [
                                  "Em đã xuất sắc đưa ra phán quyết chính xác cho ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className:
                                      "text-emerald-600 font-mono text-sm sm:text-base font-medium",
                                    children: K,
                                  }),
                                  " trên tổng số ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className:
                                      "text-slate-800 dark:text-slate-250 font-mono text-sm sm:text-base font-medium",
                                    children: JUDGE_CASES.length,
                                  }),
                                  " vụ tranh chấp bản quyền thực tế khó nhằn chuẩn IC3 GS6.",
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
                                children: "Cấp bậc thẩm phán:",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "font-extrabold text-sm sm:text-base font-medium text-blue-600 dark:text-indigo-400 block mt-1",
                                children:
                                  K === JUDGE_CASES.length
                                    ? "🏅 THẨM PHÁN TỐI CAO TUYÊN BỐ FAIR USE"
                                    : K >= 3
                                      ? "⚖️ PHÒNG THẨM PHÁN PHÁP LÝ ĐẠT CHUẨN"
                                      : "📖 CẦN THAM KHẢO LẠI 5 TRỤ CỘT",
                              }),
                            ],
                          }),
                          Qe
                            ? jsxRuntimeExports.jsx("div", {
                                className: "pt-2",
                                children: jsxRuntimeExports.jsx("button", {
                                  onClick: oe,
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:text-blue-400 px-5 sm:px-6 py-3 rounded-3xl transition-all cursor-pointer",
                                  children: "🔄 Tái thẩm định các vụ án khác",
                                }),
                              })
                            : jsxRuntimeExports.jsxs("form", {
                                onSubmit: (ie) => {
                                  (ie.preventDefault(), He.trim() && qe(!0));
                                },
                                className: "max-w-xs mx-auto pt-3 space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider text-left",
                                        children:
                                          "Nhập tên của em để lưu vào Bằng khen Thẩm phán:",
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "text",
                                        required: !0,
                                        value: He,
                                        onChange: (ie) => Xe(ie.target.value),
                                        placeholder: "Ví dụ: Nguyễn Thị B",
                                        className:
                                          "w-full px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    type: "submit",
                                    disabled: !He.trim(),
                                    className:
                                      "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-150 disabled:text-slate-400 text-white text-sm sm:text-base font-medium font-black py-3 rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm",
                                    children: [
                                      jsxRuntimeExports.jsx(Sparkles, {
                                        className: "h-4 w-4 text-yellow-300",
                                      }),
                                      " Nhận Bằng Khen Thẩm Phán Bản Quyền",
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      })
                    : jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-5",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                            children: [
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-sm sm:text-base font-semibold font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                  jsxRuntimeExports.jsx(Gavel, {
                                    className: "h-4 w-4 text-amber-500",
                                  }),
                                  " Tòa Án Bản Quyền - Thẩm Phán Học Sinh (",
                                  U + 1,
                                  "/",
                                  JUDGE_CASES.length,
                                  ")",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400",
                                children: [
                                  "Phán quyết chính xác: ",
                                  jsxRuntimeExports.jsx("strong", {
                                    className:
                                      "text-emerald-600 font-mono text-sm sm:text-base font-medium",
                                    children: K,
                                  }),
                                  "/",
                                  JUDGE_CASES.length,
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              jsxRuntimeExports.jsx("h5", {
                                className:
                                  "font-extrabold text-sm sm:text-base font-medium text-slate-850 dark:text-white leading-relaxed",
                                children: JUDGE_CASES[U].title,
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-5 sm:p-6 rounded-3xl bg-amber-500/5 border border-amber-500/10 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 font-medium leading-relaxed space-y-2",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "font-black text-amber-600 dark:text-amber-400 uppercase block text-[9.5px]",
                                    children: "HỒ SƠ TÌNH HUỐNG THỰC TẾ:",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    children: JUDGE_CASES[U].context,
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "pt-2.5 flex flex-wrap gap-1.5 border-t border-amber-500/10",
                                    children: JUDGE_CASES[U].pills.map(
                                      (ie, ge) =>
                                        jsxRuntimeExports.jsx(
                                          "span",
                                          {
                                            className:
                                              "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2 py-0.5 rounded text-[9.5px]",
                                            children: ie,
                                          },
                                          ge,
                                        ),
                                    ),
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "font-black text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 uppercase mt-4 flex items-center gap-1.5",
                                children: [
                                  jsxRuntimeExports.jsx(CircleQuestionMark, {
                                    className: "h-4.5 w-4.5 text-blue-500",
                                  }),
                                  " PHÁN QUYẾT PHÁP LÝ CỦA EM:",
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className: "space-y-2.5",
                                children: JUDGE_CASES[U].options.map((ie) => {
                                  const ge = be === ie.id,
                                    ae = E;
                                  return jsxRuntimeExports.jsxs(
                                    "button",
                                    {
                                      disabled: E,
                                      onClick: () => De(ie.id),
                                      className: `w-full p-8 sm:p-5 rounded-3xl border text-left transition-all relative overflow-hidden flex items-start gap-3.5 leading-relaxed ${ae ? (ie.isCorrect ? "border-emerald-500 bg-emerald-50/15" : ge ? "border-rose-500 bg-rose-50/15" : "border-slate-200 bg-slate-50/50 dark:bg-slate-900/30 opacity-60") : ge ? "border-blue-600 bg-blue-50/10 dark:bg-blue-950/10 ring-1 ring-blue-500 scale-[1.005]" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 hover:border-slate-350 cursor-pointer"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-sm sm:text-base font-semibold font-black ${ae ? (ie.isCorrect ? "bg-emerald-500 border-emerald-500 text-white" : ge ? "bg-rose-500 border-rose-500 text-white" : "border-slate-300 text-slate-400") : ge ? "bg-blue-600 border-blue-600 text-white" : "border-slate-355 text-slate-650"}`,
                                          children: ae
                                            ? ie.isCorrect
                                              ? "✓"
                                              : ge
                                                ? "✗"
                                                : ""
                                            : ie.id.slice(-1).toUpperCase(),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200",
                                          children: [
                                            ie.text,
                                            ae &&
                                              (ge || ie.isCorrect) &&
                                              jsxRuntimeExports.jsxs("p", {
                                                className: `mt-2 text-sm sm:text-base font-semibold leading-relaxed border-t pt-2 ${ie.isCorrect ? "text-emerald-600 dark:text-emerald-400 border-emerald-500/10" : "text-rose-500 border-red-500/10"}`,
                                                children: [
                                                  "💡 ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Giải thích lý do phán quyết:",
                                                    },
                                                  ),
                                                  " ",
                                                  ie.explanation,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    ie.id,
                                  );
                                }),
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "pt-3.5 border-t border-slate-100 dark:border-slate-800 flex justify-end items-center gap-3",
                            children: E
                              ? jsxRuntimeExports.jsx("button", {
                                  onClick: it,
                                  className:
                                    "bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-md flex items-center gap-1 cursor-pointer",
                                  children:
                                    U < JUDGE_CASES.length - 1
                                      ? "Vụ án tiếp theo"
                                      : "Hoàn thành phiên tòa",
                                })
                              : jsxRuntimeExports.jsx("button", {
                                  onClick: tt,
                                  disabled: !be,
                                  className: `px-5 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all active:scale-95 hover:scale-103 transition-all shadow-sm flex items-center gap-1.5 ${be ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer animate-pulse" : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed"}`,
                                  children: "🔨 Gõ búa phán quyết",
                                }),
                          }),
                        ],
                      }),
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "lg:col-span-4 space-y-4",
                  children: [
                    Qe &&
                      He.trim() &&
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
                              "absolute -right-10 -bottom-10 h-40 w-32 rounded-full bg-blue-500/10 blur-2xl",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute left-2.5 top-2.5 right-2.5 bottom-2.5 border border-dashed border-amber-500/20 rounded-3xl pointer-events-none",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-[8px] font-black text-amber-500 uppercase tracking-widest block",
                            children: "VIỆN SỞ HỮU TRÍ TUỆ SIMULATOR",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className: "mt-2 text-2xl",
                            children: "⚖️",
                          }),
                          jsxRuntimeExports.jsx("h6", {
                            className:
                              "font-extrabold text-[12px] uppercase text-slate-100 tracking-wide mt-1.5",
                            children: "BẰNG KHEN THẨM PHÁN",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[8px] text-slate-450 uppercase font-bold tracking-wider mt-0.5",
                            children:
                              "CHUYÊN GIA KIỂM ĐỊNH SỬ DỤNG HỢP LÝ (FAIR USE)",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "my-3 text-slate-400 text-sm sm:text-base font-semibold italic",
                            children: "Vinh danh thẩm phán học sinh:",
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "font-serif text-base text-amber-300 font-extrabold border-b border-slate-800 pb-1.5 max-w-[180px] mx-auto truncate",
                            children: He,
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[9px] text-slate-300 font-semibold mt-2.5 leading-relaxed max-w-xs mx-auto",
                            children:
                              "Đã hoàn thành xuất sắc vai trò chủ tọa phiên tòa phân tích, xử lý tranh chấp và thẩm định chuẩn xác 5 vụ án bản quyền số quốc tế chuẩn kiến thức IC3 GS6.",
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "mt-4.5 flex items-center justify-between text-[8px] text-slate-400 font-mono",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                children: "Hệ thống: Courtroom Live",
                              }),
                              jsxRuntimeExports.jsx("span", {
                                className: "text-amber-500",
                                children: "Mã: FU-JUDGE-2026",
                              }),
                            ],
                          }),
                        ],
                      }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 sm:p-6 rounded-3xl shadow-xs space-y-3.5 text-left",
                      children: [
                        jsxRuntimeExports.jsxs("h6", {
                          className:
                            "font-extrabold text-sm sm:text-base font-medium text-slate-800 dark:text-white uppercase tracking-wide flex items-center gap-1.5",
                          children: [
                            jsxRuntimeExports.jsx(ShieldAlert, {
                              className: "h-4.5 w-4.5 text-blue-500",
                            }),
                            " BẢN GHI NHỚ QUY TẮC PHÁP LÝ (IC3 GS6)",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-sm sm:text-base font-semibold leading-relaxed border-b border-slate-50 dark:border-slate-850 pb-2",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-blue-600 dark:text-blue-400 text-[10.5px] block",
                                  children: "⚠️ SỬ DỤNG PHI THƯƠNG MẠI",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-slate-500 dark:text-slate-450 font-semibold mt-0.5",
                                  children:
                                    "Mục đích phi lợi nhuận/giáo dục rất tốt, nhưng KHÔNG ĐẢM BẢO 100% là Fair Use nếu gây mất tiền cho tác giả gốc.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-sm sm:text-base font-semibold leading-relaxed border-b border-slate-50 dark:border-slate-850 pb-2",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-blue-600 dark:text-blue-400 text-[10.5px] block",
                                  children: "⚠️ CHỈ CẦN GHI CÔNG LÀ ĐỦ?",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-slate-500 dark:text-slate-450 font-semibold mt-0.5",
                                  children:
                                    "Sai lầm phổ biến! Ghi công (Attribution) tác giả gốc không giúp hành vi ăn cắp bản quyền biến thành Fair Use. Ghi công là điều khoản bắt buộc của giấy phép CC chứ không phải Fair Use.",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-sm sm:text-base font-semibold leading-relaxed",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-extrabold text-blue-600 dark:text-blue-400 text-[10.5px] block",
                                  children: "⚠️ TỶ LỆ PHẦN TRĂM CỤ THỂ?",
                                }),
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-slate-500 dark:text-slate-450 font-semibold mt-0.5",
                                  children:
                                    'Luật không có quy tắc tuyệt đối (ví dụ: "dưới 10 giây nhạc hay dưới 10% sách là được"). Mọi trường hợp đều được cân nhắc riêng biệt qua cả 4 yếu tố.',
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
      });
    }

    return Lab7;
  };
})();
