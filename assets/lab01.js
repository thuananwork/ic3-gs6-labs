/**
 * Lab 1 Interactive Component: THCS Level 1 - GM1 (5 Khái Niệm Cơ Bản)
 * Decoupled from minified bundle for instant modifications and full maintainability.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab01 =
    window.initLab1 =
    window.AGY_LABS[1] =
      function (env) {
        const {
          reactExports,
          jsxRuntimeExports,
          motion,
          AnimatePresence,
          Award,
          BookOpen,
          Code,
          Compass,
          Cpu,
          Eye,
          FileCode,
          Folder,
          FolderLock,
          Globe,
          KeyRound,
          Laptop,
          Lock,
          LockOpen,
          Monitor,
          MousePointer,
          Power,
          Printer,
          RefreshCw,
          RotateCcw,
          Search,
          Settings,
          SlidersVertical,
          Sparkles,
          Terminal,
          Trash2,
          Volume2,
          Wifi,
        } = env;

        const TERMS$5 = [
            {
              id: 1,
              name: "Driver",
              icon: jsxRuntimeExports.jsx(Cpu, { className: "h-5 w-5" }),
              color: "from-blue-500 to-cyan-500",
              desc: "Trình điều khiển thiết bị phần cứng.",
            },
            {
              id: 2,
              name: "Daemon",
              icon: jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5" }),
              color: "from-purple-500 to-indigo-500",
              desc: "Tiến trình chạy nền hỗ trợ đa nhiệm.",
            },
            {
              id: 3,
              name: "Boot",
              icon: jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5" }),
              color: "from-emerald-500 to-teal-500",
              desc: "Quá trình nạp hệ điều hành khi bật máy.",
            },
            {
              id: 4,
              name: "Open Source",
              icon: jsxRuntimeExports.jsx(FileCode, { className: "h-5 w-5" }),
              color: "from-rose-500 to-orange-500",
              desc: "Mã nguồn mở miễn phí tự do tùy chỉnh.",
            },
            {
              id: 5,
              name: "Access Token",
              icon: jsxRuntimeExports.jsx(FolderLock, { className: "h-5 w-5" }),
              color: "from-amber-500 to-yellow-500",
              desc: "Mã thông báo quyền hạn truy cập bảo mật.",
            },
          ],
          DEFINITIONS$5 = [
            {
              id: 1,
              text: "Một chương trình phần mềm nhỏ cho phép hệ điều hành và thiết bị giao tiếp với nhau",
              correctTermId: 1,
            },
            {
              id: 2,
              text: "Bắt đầu thời gian khởi động và chạy như một quy trình nền để hỗ trợ đa nhiệm",
              correctTermId: 2,
            },
            {
              id: 3,
              text: "Quá trình khởi động một hệ điều hành. Trong quá trình này, hệ điều hành tải tất cả các trình điều khiển phần mềm cho phép các thành phần phần cứng của máy tính giao tiếp với nhau",
              correctTermId: 3,
            },
            {
              id: 4,
              text: "Bất kỳ ai cũng có thể lấy mã nguồn và sửa đổi phần mềm miễn phí",
              correctTermId: 4,
            },
            {
              id: 5,
              text: "Chứa thông tin xác thực bảo mật cho một phiên đăng nhập và xác định người dùng, các nhóm của người dùng và các đặc quyền của người dùng",
              correctTermId: 5,
            },
          ];

        function Activity2({ onSuccess: a }) {
          const [n, i] = reactExports.useState("simulator"),
            [l, c] = reactExports.useState([]),
            [d, m] = reactExports.useState(
              TERMS$5.map((ye) => ({ termId: ye.id, definition: null })),
            ),
            [u, g] = reactExports.useState(null),
            [p, f] = reactExports.useState(!1),
            [b, k] = reactExports.useState({}),
            [N, M] = reactExports.useState(!1),
            [y, I] = reactExports.useState(null),
            [R, z] = reactExports.useState(null),
            [A, O] = reactExports.useState(1),
            [L, le] = reactExports.useState(!1),
            [P, G] = reactExports.useState(!1),
            [ee, ce] = reactExports.useState(0),
            [V, pe] = reactExports.useState(!1),
            [Ie, se] = reactExports.useState({ x: 50, y: 50 }),
            [de, _] = reactExports.useState(0),
            [U, Z] = reactExports.useState(!1),
            [be, he] = reactExports.useState(!1),
            [E, v] = reactExports.useState([]),
            [K, te] = reactExports.useState([]),
            [je, Se] = reactExports.useState([]),
            [He, Xe] = reactExports.useState("off"),
            [Qe, qe] = reactExports.useState(0),
            [at, ze] = reactExports.useState([]),
            [De, tt] = reactExports.useState("bg-blue-600"),
            [it, oe] = reactExports.useState("Chào mừng em đến với IC3 GS6!"),
            [ie, ge] = reactExports.useState(!0),
            [ae, Ae] = reactExports.useState(
              "Bạn có toàn quyền truy cập và sửa đổi mã nguồn phần mềm này hoàn toàn miễn phí!",
            ),
            [Q, Te] = reactExports.useState(null),
            [$e, _e] = reactExports.useState("HocSinh_Lop6A"),
            [Ue, Ke] = reactExports.useState("123456"),
            [ot, w] = reactExports.useState("guest"),
            [C, Ee] = reactExports.useState(!1),
            [ke, We] = reactExports.useState([
              "[Hệ Thống]: Đang ở chế độ khách vãng lai.",
            ]);
          reactExports.useEffect(() => {
            (ht(), a());
          }, []);
          const ht = () => {
              const ye = [...DEFINITIONS$5].sort(() => Math.random() - 0.5);
              (c(ye),
                m(TERMS$5.map((H) => ({ termId: H.id, definition: null }))),
                g(null),
                f(!1),
                k({}),
                M(!1));
            },
            lt = () => {
              (le((ye) => !ye), L || _(0));
            },
            Fe = () => {
              if (V || P) return;
              (pe(!0), ce(0));
              const ye = setInterval(() => {
                ce((H) =>
                  H >= 100 ? (clearInterval(ye), G(!0), pe(!1), 100) : H + 10,
                );
              }, 150);
            },
            rt = () => {
              (G(!1), ce(0));
            },
            yt = (ye) => {
              if (!L || !P) return;
              const H = ye.currentTarget.getBoundingClientRect(),
                me = ((ye.clientX - H.left) / H.width) * 100,
                Le = ((ye.clientY - H.top) / H.height) * 100;
              (se({ x: me, y: Le }), _((Pe) => Pe + 1));
            },
            xt = (ye) => {
              (te((H) => [...H, ye]),
                v((H) => [
                  ...H,
                  `[Yêu cầu]: Đã thêm tài liệu "${ye}" vào hàng đợi.`,
                ]));
            };
          reactExports.useEffect(() => {
            if (U && K.length > 0) {
              he(!0);
              const ye = K[0];
              v((me) => [
                ...me,
                `[Daemon printd]: Đang xử lý chạy ngầm tác vụ in: "${ye}"...`,
              ]);
              const H = setTimeout(() => {
                (te((me) => me.slice(1)),
                  Se((me) => [...me, ye]),
                  v((me) => [
                    ...me,
                    `[Daemon printd]: ✓ Đã in thành công tài liệu: "${ye}"`,
                  ]),
                  he(!1));
              }, 2500);
              return () => clearTimeout(H);
            } else if (!U && K.length > 0) {
              he(!1);
              v((ye) => {
                var H;
                return (H = ye[ye.length - 1]) != null &&
                  (H.includes("đang TẮT") || H.includes("TẮT"))
                  ? ye
                  : [
                      ...ye,
                      '[Cảnh báo]: Daemon "printd" đang TẮT. Tiến trình in bị tắc nghẽn, không thể in tự động.',
                    ];
              });
            }
          }, [U, K]);
          const ve = () => {
            He === "off"
              ? (Xe("booting"),
                qe(1),
                ze(["[BIOS]: Đang kiểm tra phần cứng (POST)..."]))
              : (Xe("off"), qe(0), ze(["[Hệ Thống]: Đã tắt nguồn máy tính."]));
          };
          reactExports.useEffect(() => {
            He === "booting" &&
              (() => {
                if (Qe === 1) {
                  const H = setTimeout(() => {
                    (ze((me) => [
                      ...me,
                      "✓ RAM: 16GB OK | CPU: Intel Core i7 OK",
                      "[Bootloader]: Đang tìm kiếm Hệ điều hành trên SSD...",
                    ]),
                      qe(2));
                  }, 1500);
                  return () => clearTimeout(H);
                } else if (Qe === 2) {
                  const H = setTimeout(() => {
                    (ze((me) => [
                      ...me,
                      "✓ Đã tìm thấy Kernel Hệ điều hành.",
                      "[OS Kernel]: Đang nạp nhân hệ thống vào bộ nhớ RAM...",
                      "[Driver Loader]: Đang tải các trình điều khiển phần cứng...",
                    ]),
                      qe(3));
                  }, 1500);
                  return () => clearTimeout(H);
                } else if (Qe === 3) {
                  const H = setTimeout(() => {
                    (ze((me) => [
                      ...me,
                      "✓ Đã tải Driver Chuột, Bàn phím & GPU",
                      "[Services]: Khởi chạy các tiến trình chạy ngầm (Daemons)...",
                    ]),
                      qe(4));
                  }, 1500);
                  return () => clearTimeout(H);
                } else if (Qe === 4) {
                  const H = setTimeout(() => {
                    (ze((me) => [
                      ...me,
                      "✓ Daemon mạng (networkd) - Hoạt động",
                      "✓ Daemon in ấn (printd) - Hoạt động",
                      "[Hệ Thống]: Khởi động giao diện người dùng (GUI)...",
                    ]),
                      qe(5));
                  }, 1500);
                  return () => clearTimeout(H);
                } else if (Qe === 5) {
                  const H = setTimeout(() => {
                    (ze((me) => [
                      ...me,
                      "🎉 KHỞI ĐỘNG THÀNH CÔNG! Chào mừng bạn quay trở lại.",
                    ]),
                      Xe("on"));
                  }, 1500);
                  return () => clearTimeout(H);
                }
              })();
          }, [He, Qe]);
          const Ye = (ye) => {
              (ye.preventDefault(),
                !(!$e || !Ue) &&
                  (w("logging"),
                  We((H) => [
                    ...H,
                    `[Hệ Thống]: Đang kiểm tra tài khoản "${$e}"...`,
                  ]),
                  setTimeout(() => {
                    const H = "TOKEN-IC3-GS6-STUDENT-AUTH-KEY-2026";
                    (Te(H),
                      w("authorized"),
                      We((me) => [
                        ...me,
                        "✓ [Xác Minh]: Mật khẩu chính xác!",
                        "🔑 [Hệ Thống]: ĐÃ PHÁT HÀNH ACCESS TOKEN THÀNH CÔNG!",
                        "[Thông Báo]: Mã Token được lưu cho phiên làm việc để truy cập mà không cần nhập lại mật khẩu.",
                      ]));
                  }, 1000)));
            },
            mt = () => {
              (Te(null),
                w("guest"),
                Ee(!1),
                We((ye) => [
                  ...ye,
                  "[Hệ Thống]: Em đã bấm Đăng Xuất.",
                  "🔒 [Hệ Thống]: Đã hủy Access Token. Cửa phòng tự động khóa an toàn.",
                ]));
            },
            Dt = () => {
              (We((ye) => [
                ...ye,
                "📲 [Cổng Kiểm Soát]: Đang kiểm tra mã Access Token gửi kèm...",
              ]),
                setTimeout(() => {
                  Q
                    ? (Ee(!0),
                      We((ye) => [
                        ...ye,
                        "✓ [Cổng Kiểm Soát]: ACCESS TOKEN HỢP LỆ! Quyền truy cập được xác nhận.",
                        "🔓 [Hệ Thống]: ĐÃ MỞ KHÓA THÀNH CÔNG, MỜI EM VÀO!",
                      ]))
                    : (Ee(!1),
                      We((ye) => [
                        ...ye,
                        "❌ [Cổng Kiểm Soát]: TỪ CHỐI TRUY CẬP (CHƯA CÓ TOKEN)!",
                        "[Cảnh Báo]: Yêu cầu phải gửi kèm Access Token hợp lệ.",
                        "[Hướng Dẫn]: Hãy đăng nhập ở bảng bên trái để nhận Access Token nhé.",
                      ]));
                }, 600));
            };
          return jsxRuntimeExports.jsx("div", {
            id: "activity-2",
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
                          "inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-5 sm:px-5 py-1 text-sm sm:text-base font-bold text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
                        children: [
                          jsxRuntimeExports.jsx(BookOpen, {
                            className: "h-3.5 w-3.5",
                          }),
                          " Lab Thực Hành Số 1 (Các Khái Niệm Cơ Bản Của Máy Tính)",
                        ],
                      }),
                      jsxRuntimeExports.jsx("h3", {
                        className:
                          "text-xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight",
                        children: "Tìm Hiểu Các Khái Niệm Cơ Bản Của Máy Tính",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                        children:
                          "Học tập trực quan sinh động thông qua các bản mô phỏng tương tác thực tế.",
                      }),
                    ],
                  }),
                }),
                n === "simulator" &&
                  jsxRuntimeExports.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 w-full",
                        children: TERMS$5.map((ye) => {
                          const H = A === ye.id;
                          return jsxRuntimeExports.jsxs(
                            "button",
                            {
                              onClick: () => O(ye.id),
                              className: `step-card w-full box-border flex items-center gap-2 rounded-2xl p-2.5 text-left transition-all cursor-pointer border ${H ? "active bg-indigo-600 border-indigo-600 !text-white shadow-md font-black" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50 font-bold"}`,
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className: `p-1.5 rounded-xl shrink-0 ${H ? "bg-white/20 !text-white" : "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"}`,
                                  children: ye.icon,
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    jsxRuntimeExports.jsxs("p", {
                                      className: `text-[10px] font-bold uppercase tracking-wider mb-0.5 ${H ? "!text-white" : "text-slate-400"}`,
                                      children: ["Khái niệm ", ye.id],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className: `text-xs font-black leading-tight line-clamp-1 truncate ${H ? "!text-white" : "text-slate-800 dark:text-white"}`,
                                      children: ye.name,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            ye.id,
                          );
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "rounded-3xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 md:p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-950/40 text-left",
                        children: [
                          A === 1 &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-6",
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
                                            jsxRuntimeExports.jsx(Cpu, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Khái niệm 1: Driver (Trình điều khiển)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-lg font-black text-slate-900 dark:text-white mt-2",
                                          children:
                                            "Trình điều khiển thiết bị phần cứng",
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Driver",
                                            }),
                                            " là phần mềm cầu nối giúp Hệ điều hành nhận diện và điều khiển các thiết bị phần cứng kết nối với máy tính.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "pt-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex gap-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: lt,
                                              className: `flex items-center gap-1.5 rounded-3xl px-5 sm:px-6 py-3 text-sm sm:text-base font-extrabold text-white cursor-pointer shadow-xs transition-all active:scale-95 hover:scale-103 transition-all ${L ? "bg-rose-500 hover:bg-rose-600" : "bg-blue-600 hover:bg-blue-700"}`,
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  MousePointer,
                                                  { className: "h-4 w-4" },
                                                ),
                                                L
                                                  ? "Rút Chuột USB Ra"
                                                  : "Cắm Chuột Quang USB",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: Fe,
                                              disabled: !L || P || V,
                                              className: `flex items-center gap-1.5 rounded-3xl px-5 sm:px-6 py-3 text-sm sm:text-base font-extrabold cursor-pointer shadow-xs transition-all active:scale-95 hover:scale-103 transition-all ${L ? (P ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200" : "bg-indigo-600 text-white hover:bg-indigo-700") : "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed"}`,
                                              children: [
                                                jsxRuntimeExports.jsx(Cpu, {
                                                  className: "h-4 w-4",
                                                }),
                                                P
                                                  ? "Driver Đã Có Sẵn"
                                                  : V
                                                    ? "Đang cài đặt..."
                                                    : "Cài Đặt Driver Chuột",
                                              ],
                                            }),
                                          ],
                                        }),
                                        P &&
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: rt,
                                            className:
                                              "mt-3 text-sm sm:text-base font-bold text-rose-500 hover:underline flex items-center gap-1 cursor-pointer",
                                            children: [
                                              jsxRuntimeExports.jsx(RotateCcw, {
                                                className: "h-3 w-3",
                                              }),
                                              " Gỡ Driver thiết bị (Reset)",
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "lg:col-span-7 flex flex-col gap-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block",
                                      children:
                                        "🎮 KHU VỰC THỬ NGHIỆM ĐỒ HOẠ TRỰC QUAN",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col items-center justify-center min-h-[220px]",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400 mb-3 text-center",
                                              children: "MẶT SAU CASE MÁY TÍNH",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "w-24 bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 sm:p-5 border border-slate-300 dark:border-slate-700 space-y-2.5",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-6 bg-slate-300 dark:bg-slate-700 rounded border border-slate-400 dark:border-slate-600 relative flex items-center justify-center",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-bold text-slate-500 dark:text-slate-400",
                                                        children: "Cổng LAN",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className: `h-5 rounded border relative transition-all duration-300 flex items-center justify-center ${L ? "bg-blue-500 border-blue-600 text-white animate-pulse" : "bg-slate-800 border-black text-slate-400"}`,
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-black uppercase tracking-wider",
                                                        children: L
                                                          ? "🔌 ĐÃ CẮM"
                                                          : "Cổng USB 1",
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "h-5 bg-slate-850 rounded border border-black relative flex items-center justify-center",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-bold text-slate-500",
                                                        children: "Cổng USB 2",
                                                      },
                                                    ),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "mt-4 text-center space-y-1",
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-extrabold flex items-center justify-center gap-1",
                                                  children: [
                                                    "Trạng thái phần cứng:",
                                                    L
                                                      ? jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-emerald-500 animate-pulse",
                                                            children:
                                                              "🔌 Đã liên kết vật lý",
                                                          },
                                                        )
                                                      : jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-slate-400",
                                                            children:
                                                              "Chưa cắm thiết bị",
                                                          },
                                                        ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-extrabold flex items-center justify-center gap-1",
                                                  children: [
                                                    "Trạng thái Driver:",
                                                    P
                                                      ? jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-emerald-500",
                                                            children:
                                                              "✓ Đã cài đặt (Nạp nòng)",
                                                          },
                                                        )
                                                      : V
                                                        ? jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-indigo-500 animate-pulse",
                                                              children: [
                                                                "Đang tải (",
                                                                ee,
                                                                "%)",
                                                              ],
                                                            },
                                                          )
                                                        : jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-rose-500",
                                                              children:
                                                                "⚠️ Chưa có Driver",
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
                                            "rounded-3xl border border-slate-200 bg-slate-900 p-5 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[220px]",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center justify-between border-b border-slate-800 pb-2",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Laptop,
                                                      {
                                                        className:
                                                          "h-3.5 w-3.5 text-blue-400",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold font-black uppercase tracking-wider text-slate-400",
                                                        children:
                                                          "Màn Hình Hệ Điều Hành",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: `h-2.5 w-2.5 rounded-full ${L && P ? "bg-emerald-400" : "bg-rose-400"}`,
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              onClick: yt,
                                              className: `flex-1 rounded-3xl border border-slate-800 my-2 relative flex items-center justify-center cursor-crosshair overflow-hidden transition-all ${L && P ? "bg-slate-950 border-emerald-500/30" : "bg-slate-950/90"}`,
                                              children:
                                                L && P
                                                  ? jsxRuntimeExports.jsxs(
                                                      jsxRuntimeExports.Fragment,
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "absolute h-4 w-4 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-75 pointer-events-none",
                                                              style: {
                                                                left: `${Ie.x}%`,
                                                                top: `${Ie.y}%`,
                                                              },
                                                              children:
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "absolute h-1 w-1 bg-white rounded-full",
                                                                  },
                                                                ),
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "text-center p-5 sm:p-6",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-sm sm:text-base font-medium font-black text-emerald-400 animate-pulse",
                                                                    children:
                                                                      "✓ Driver Hoạt Động!",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-sm sm:text-base font-semibold text-slate-400 font-semibold mt-1",
                                                                    children:
                                                                      "Click vào khung này để thử di chuyển & click chuột.",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "text-sm sm:text-base font-semibold text-indigo-400 font-bold mt-1",
                                                                    children: [
                                                                      "Số lần click nhận diện: ",
                                                                      de,
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    )
                                                  : L
                                                    ? jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-center p-5 sm:p-6",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-medium font-black text-rose-500 animate-pulse",
                                                                children:
                                                                  "⚠️ KHÔNG NHẬN DẠNG ĐƯỢC CHUỘT",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-semibold text-slate-400 font-medium mt-1 leading-relaxed",
                                                                children: [
                                                                  "Bạn đã cắm cổng USB nhưng Hệ điều hành không hiểu lệnh. Hãy bấm nút ",
                                                                  jsxRuntimeExports.jsx(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        '"Cài đặt Driver Chuột"',
                                                                    },
                                                                  ),
                                                                  " ở bên trái để tải trình điều khiển!",
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
                                                            "text-center p-5 sm:p-6 text-slate-500",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-bold",
                                                                children:
                                                                  "🖥️ Máy tính đang trống",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-semibold font-medium mt-1",
                                                                children:
                                                                  "Cắm chuột quang USB vào thùng case để thử nghiệm.",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[9px] bg-slate-850 p-1.5 rounded text-left border border-slate-800 font-mono text-slate-300",
                                              children:
                                                L && P
                                                  ? jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-emerald-400",
                                                        children:
                                                          "[Hệ thống]: Chuột USB HID hoạt động bình thường ở 1000Hz.",
                                                      },
                                                    )
                                                  : L
                                                    ? jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-rose-400 animate-pulse",
                                                          children:
                                                            "[Lỗi]: Cảnh báo! Thiết bị USB chưa xác định. Thiếu trình điều khiển (Driver).",
                                                        },
                                                      )
                                                    : jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          children:
                                                            "[Hệ thống]: Chờ kết nối cổng phần cứng...",
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
                          A === 2 &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-6",
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
                                            jsxRuntimeExports.jsx(Compass, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Khái niệm 2: Daemon (Tiến trình chạy ngầm)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-lg font-black text-slate-900 dark:text-white mt-2",
                                          children:
                                            "Tiến trình chạy ngầm hỗ trợ đa nhiệm",
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Daemon",
                                            }),
                                            " là tiến trình chạy lặng lẽ trong nền hệ thống mà không cần giao diện đồ hoạ, tự động đứng chờ và xử lý các sự kiện cụ thể.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "pt-2 space-y-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between p-8 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  Settings,
                                                  {
                                                    className: `h-4.5 w-4.5 text-purple-500 ${U ? "animate-spin" : ""}`,
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white",
                                                      children:
                                                        "Daemon in ấn (printd)",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                                      children:
                                                        "Chạy ngầm quản lý tiến trình in tự động",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => Z(!U),
                                              className: `relative inline-flex h-7 w-14 items-center shrink-0 cursor-pointer rounded-full p-1 transition-colors duration-200 ease-in-out focus:outline-none ${U ? "bg-purple-600" : "bg-slate-300 dark:bg-slate-700"}`,
                                              children: jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${U ? "translate-x-7" : "translate-x-0"}`,
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex gap-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: () =>
                                                xt(
                                                  "Bài Thảo Luận Sử Lớp 7.docx",
                                                ),
                                              className:
                                                "flex-1 flex items-center justify-center gap-1.5 rounded-3xl bg-purple-600 hover:bg-purple-700 text-sm sm:text-base font-extrabold text-white py-3 px-5 sm:px-5 cursor-pointer shadow-xs active:scale-95 hover:scale-103 transition-all transition-all",
                                              children: [
                                                jsxRuntimeExports.jsx(Printer, {
                                                  className: "h-4 w-4",
                                                }),
                                                " Gửi lệnh In Tài liệu A",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("button", {
                                              onClick: () =>
                                                xt(
                                                  "Đề Cương Ôn Tập Tin IC3.pdf",
                                                ),
                                              className:
                                                "flex-1 flex items-center justify-center gap-1.5 rounded-3xl bg-amber-600 hover:bg-amber-700 text-sm sm:text-base font-extrabold text-white py-3 px-5 sm:px-5 cursor-pointer shadow-xs active:scale-95 hover:scale-103 transition-all transition-all",
                                              children: [
                                                jsxRuntimeExports.jsx(Printer, {
                                                  className: "h-4 w-4",
                                                }),
                                                " Gửi lệnh In Tài liệu B",
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
                                    "lg:col-span-7 flex flex-col gap-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block",
                                      children:
                                        "🎮 ĐỒ HOẠ GIÁM SÁT TIẾN TRÌNH KHÔNG GIAN NỀN (BACKGROUND SERVICES)",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between min-h-[220px]",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Printer,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-slate-400",
                                                      },
                                                    ),
                                                    " HÀNG ĐỢI MÁY IN VÀ THIẾT BỊ",
                                                  ],
                                                }),
                                                K.length === 0
                                                  ? jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 text-center text-sm sm:text-base font-semibold text-slate-400",
                                                        children:
                                                          "Hàng đợi đang trống. Gửi tài liệu để in.",
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "space-y-1.5 max-h-[110px] overflow-y-auto pr-1",
                                                        children: K.map(
                                                          (ye, H) =>
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 text-sm sm:text-base font-extrabold",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "truncate max-w-[140px] text-slate-700 dark:text-slate-300",
                                                                      children:
                                                                        ye,
                                                                    },
                                                                  ),
                                                                  H === 0 && be
                                                                    ? jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "text-purple-600 animate-pulse bg-purple-50 px-1 py-0.5 rounded text-[8px]",
                                                                          children:
                                                                            "Đang in...",
                                                                        },
                                                                      )
                                                                    : jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "text-slate-400 text-[8px]",
                                                                          children:
                                                                            "Chờ xử lý",
                                                                        },
                                                                      ),
                                                                ],
                                                              },
                                                              H,
                                                            ),
                                                        ),
                                                      },
                                                    ),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "border-t border-slate-200 pt-3",
                                              children: jsxRuntimeExports.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50/80 border border-slate-200 relative overflow-hidden",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-36 h-5 bg-white border border-slate-300 rounded-t-lg shadow-2xs mx-auto -mb-1 z-0 relative flex items-center justify-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "w-24 h-0.5 bg-slate-200 rounded-full",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[8px] font-bold text-slate-400 absolute right-1.5",
                                                              children: "A4",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className: `w-64 bg-slate-100 text-slate-800 rounded-2xl shadow-sm border border-slate-300 p-3 z-10 relative transition-all ${be ? "ring-2 ring-emerald-500/60 shadow-md" : ""}`,
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex items-center justify-between px-1 pb-2 border-b border-slate-200 text-[10px]",
                                                              children: [
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "flex items-center gap-1.5",
                                                                    children: [
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className: `inline-block w-2.5 h-2.5 rounded-full ${be ? "bg-emerald-500 animate-ping" : "bg-slate-400"}`,
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className: `font-mono font-black ${be ? "text-emerald-700" : "text-slate-600"}`,
                                                                          children:
                                                                            be
                                                                              ? "ĐANG IN TÀI LIỆU..."
                                                                              : "MÁY IN SẴN SÀNG",
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "flex items-center gap-1.5",
                                                                    children: [
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "w-2 h-2 rounded-full bg-slate-300",
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsx(
                                                                        Printer,
                                                                        {
                                                                          className: `w-4 h-4 ${be ? "text-emerald-600 animate-bounce" : "text-slate-500"}`,
                                                                        },
                                                                      ),
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
                                                                "w-52 h-2.5 bg-slate-900 rounded-full mx-auto my-1.5 border border-slate-700 shadow-inner",
                                                            },
                                                          ),
                                                          be
                                                            ? jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "bg-white border border-slate-300 rounded-b-xl shadow-md p-2.5 w-52 mx-auto mt-1 transition-all animate-pulse",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center justify-between text-[10px] font-black text-indigo-700 pb-1 border-b border-slate-200",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "truncate max-w-[130px]",
                                                                                children:
                                                                                  K[0] ||
                                                                                  "Bài Thảo Luận Sử Lớp 7.docx",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-emerald-600 font-extrabold bg-emerald-50 px-1 rounded border border-emerald-200",
                                                                                children:
                                                                                  "80%",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "w-full h-1 bg-slate-300 rounded my-1",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "w-4/5 h-1 bg-slate-300 rounded my-1",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "w-3/5 h-1 bg-indigo-200 rounded my-1",
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              )
                                                            : jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "w-52 bg-slate-50/70 border border-dashed border-slate-300 rounded-b-xl p-2 mx-auto text-center text-[10px] text-slate-400 font-sans",
                                                                  children:
                                                                    "Khay xuất giấy trống. Sẵn sàng in.",
                                                                },
                                                              ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className: `mt-2.5 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${be ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-white text-slate-600 border border-slate-200 shadow-2xs"}`,
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            Printer,
                                                            {
                                                              className: `w-3.5 h-3.5 ${be ? "text-emerald-700" : "text-slate-400"}`,
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              children: be
                                                                ? `Đang kéo giấy & in: ${K[0] || "Tài liệu"}`
                                                                : "Thiết bị máy in: Sẵn sàng nhận lệnh in",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-slate-800 font-mono text-xs sm:text-sm font-semibold flex flex-col justify-between min-h-[220px] shadow-sm",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-xs sm:text-sm font-black text-slate-700 pb-2 border-b border-slate-200 flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Terminal,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-indigo-600",
                                                      },
                                                    ),
                                                    " DAEMON ENGINE LOGS",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "space-y-1.5 my-2 max-h-[125px] overflow-y-auto text-left pr-1",
                                                  children:
                                                    E.length === 0
                                                      ? jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "p-2.5 rounded-lg bg-white border border-slate-200 text-slate-400 italic text-xs",
                                                            children:
                                                              "// Khởi động máy in. Lắng nghe tín hiệu từ daemon printd...",
                                                          },
                                                        )
                                                      : E.map((ye, H) => {
                                                          const isEven =
                                                            H % 2 === 0;
                                                          const zebraShape =
                                                            isEven
                                                              ? "bg-white border border-slate-200 shadow-2xs"
                                                              : "bg-[#f0f7ff] border border-blue-100 shadow-2xs";
                                                          let textColor =
                                                            "text-slate-800";
                                                          if (
                                                            ye.includes("✓")
                                                          ) {
                                                            textColor =
                                                              "text-emerald-700 font-bold";
                                                          } else if (
                                                            ye.includes(
                                                              "Cảnh báo",
                                                            )
                                                          ) {
                                                            textColor =
                                                              "text-amber-800 font-bold";
                                                          } else if (
                                                            ye.includes(
                                                              "[Daemon printd]",
                                                            )
                                                          ) {
                                                            textColor =
                                                              "text-indigo-700 font-semibold";
                                                          }
                                                          return jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className: `${zebraShape} ${textColor} p-2 rounded-lg text-xs leading-normal font-mono transition-all`,
                                                              children: ye,
                                                            },
                                                            H,
                                                          );
                                                        }),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "pt-2.5 border-t border-slate-200",
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 text-left",
                                                  children: [
                                                    "Sản phẩm đã in thành công (",
                                                    je.length,
                                                    "):",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "flex flex-wrap gap-1.5",
                                                  children:
                                                    je.length === 0
                                                      ? jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-400 italic text-xs text-left",
                                                            children:
                                                              "Chưa có bản in nào được xuất bản.",
                                                          },
                                                        )
                                                      : je.map((ye, H) =>
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-md px-2 py-1 text-xs font-bold shadow-2xs flex items-center gap-1",
                                                              children: [
                                                                "✓ In xong: ",
                                                                ye.split(
                                                                  ".",
                                                                )[0],
                                                              ],
                                                            },
                                                            H,
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
                              ],
                            }),
                          A === 3 &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-6",
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
                                            jsxRuntimeExports.jsx(RefreshCw, {
                                              className:
                                                "h-3.5 w-3.5 animate-spin",
                                            }),
                                            " Khái niệm 3: Boot (Quá trình Khởi động)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-lg font-black text-slate-900 dark:text-white mt-2",
                                          children:
                                            "Quá trình nạp và khởi chạy Hệ điều hành",
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-2",
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Boot",
                                            }),
                                            " là quá trình khởi động hệ thống, tự động nạp Hệ điều hành từ ổ cứng vào bộ nhớ RAM và kích hoạt các thiết bị cần thiết.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "pt-2",
                                      children: jsxRuntimeExports.jsxs(
                                        "button",
                                        {
                                          onClick: ve,
                                          className: `flex items-center justify-center gap-2 rounded-3xl w-full py-4 text-sm sm:text-base font-medium font-black text-white shadow-md active:scale-98 transition-all cursor-pointer ${He === "off" ? "bg-rose-600 hover:bg-rose-700 shadow-rose-200 dark:shadow-none" : He === "booting" ? "bg-amber-500 animate-pulse" : "bg-emerald-600 hover:bg-emerald-700"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Power, {
                                              className: "h-5 w-5",
                                            }),
                                            He === "off"
                                              ? "BẤM NÚT NGUỒN (KHỞI ĐỘNG MÁY)"
                                              : He === "booting"
                                                ? "ĐANG KHỞI ĐỘNG (BOOTING...)"
                                                : "MÁY TÍNH ĐANG HOẠT ĐỘNG (TẮT MÁY)",
                                          ],
                                        },
                                      ),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "lg:col-span-7 flex flex-col gap-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block",
                                      children: "🎮 ĐỒ HOẠ QUÁ TRÌNH KHỞI ĐỘNG",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-slate-800 font-mono text-[9px] flex flex-col justify-between min-h-[250px] shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-xs sm:text-sm font-bold text-slate-700 pb-2 border-b border-slate-200 flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Terminal,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-blue-600",
                                                      },
                                                    ),
                                                    " TIẾN TRÌNH KHỞI ĐỘNG (BIOS & KERNEL LOGS)",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-1.5 my-2 max-h-[150px] overflow-y-auto text-left pr-1",
                                                  children: [
                                                    at.map((ye, H) => {
                                                      let me = "text-slate-600";
                                                      return (
                                                        ye.includes("✓") &&
                                                          (me =
                                                            "text-emerald-600 font-bold"),
                                                        ye.includes("🎉") &&
                                                          (me =
                                                            "text-blue-600 font-black"),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className: `${me} leading-relaxed`,
                                                            children: ye,
                                                          },
                                                          H,
                                                        )
                                                      );
                                                    }),
                                                    He === "booting" &&
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-blue-600 animate-pulse italic mt-1 font-bold",
                                                          children:
                                                            "⏳ Đang thực hiện tác vụ tự động...",
                                                        },
                                                      ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "pt-2 border-t border-slate-200 flex items-center justify-between text-slate-500 text-[8.5px] font-bold",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children:
                                                    "TRẠNG THÁI HỆ THỐNG",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    He === "off"
                                                      ? "text-slate-500"
                                                      : He === "booting"
                                                        ? "text-amber-600 font-bold"
                                                        : "text-emerald-600 font-extrabold",
                                                  children:
                                                    He === "off"
                                                      ? "ĐANG TẮT (OFF)"
                                                      : He === "booting"
                                                        ? `BƯỚC ${Qe}/5`
                                                        : "KHỞI ĐỘNG THÀNH CÔNG",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-white text-slate-800 relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] shadow-xs",
                                          children:
                                            He === "off"
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-center p-5 sm:p-6 text-slate-500",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Laptop,
                                                      {
                                                        className:
                                                          "h-12 w-12 mx-auto text-slate-400 mb-3",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-bold text-slate-800",
                                                      children:
                                                        "🖥️ MÀN HÌNH ĐANG TẮT",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed",
                                                      children:
                                                        "Nhấn nút nguồn ở bên trái để bắt đầu chu kỳ nạp hệ điều hành.",
                                                    }),
                                                  ],
                                                })
                                              : He === "booting"
                                                ? jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-center p-5 sm:p-6 flex flex-col items-center justify-center w-full h-full",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "grid grid-cols-2 gap-1 w-10 h-10 mb-4 mx-auto",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "bg-sky-500 rounded-xs shadow-xs",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "bg-sky-500 rounded-xs shadow-xs",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "bg-sky-500 rounded-xs shadow-xs",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "bg-sky-500 rounded-xs shadow-xs",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          RefreshCw,
                                                          {
                                                            className:
                                                              "h-6 w-6 text-sky-600 animate-spin mb-3",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-bold text-slate-800 tracking-wide",
                                                            children:
                                                              "Đang khởi động Windows 11...",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-xs text-slate-500 mt-1",
                                                            children:
                                                              "Hệ điều hành đang nạp dữ liệu từ SSD vào bộ nhớ RAM.",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "mt-3 h-1.5 w-36 bg-slate-200 rounded-full mx-auto overflow-hidden",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "h-full bg-sky-500 rounded-full transition-all duration-500",
                                                                  style: {
                                                                    width: `${(Qe / 5) * 100}%`,
                                                                  },
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsxs(
                                                    motion.div,
                                                    {
                                                      initial: {
                                                        opacity: 0,
                                                        scale: 0.98,
                                                      },
                                                      animate: {
                                                        opacity: 1,
                                                        scale: 1,
                                                      },
                                                      className:
                                                        "w-full h-full min-h-[270px] self-stretch win11-desktop flex flex-col justify-between select-none relative overflow-hidden text-slate-800 rounded-2xl shadow-xs",
                                                      style: {
                                                        background:
                                                          "radial-gradient(ellipse at 60% 35%, #ffffff 0%, #e0f2fe 35%, #bae6fd 70%, #7dd3fc 100%)",
                                                      },
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center justify-between px-3 py-1 bg-white/70 backdrop-blur-xs text-[9px] border-b border-sky-100/60 z-10",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-700 font-bold flex items-center gap-1",
                                                                  children:
                                                                    "✓ BOOT THÀNH CÔNG: ĐÃ NẠP MÀN HÌNH DESKTOP (GUI)",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-slate-600 font-mono text-[8px] font-bold",
                                                                  children:
                                                                    "Windows 11 Home",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex-1 p-2 sm:p-3 flex items-center justify-between gap-2 relative z-10",
                                                            children: [
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex flex-col gap-1.5 shrink-0 pt-0.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "group flex flex-col items-center w-12 sm:w-14 p-1 rounded-lg hover:bg-white/40 cursor-pointer transition-all",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Monitor,
                                                                              {
                                                                                className:
                                                                                  "h-5 w-5 sm:h-6 sm:w-6 text-blue-600 drop-shadow-xs group-hover:scale-105 transition-transform",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-[8px] sm:text-[8.5px] font-bold text-slate-800 text-center mt-1 leading-tight",
                                                                                children:
                                                                                  "This PC",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "group flex flex-col items-center w-12 sm:w-14 p-1 rounded-lg hover:bg-white/40 cursor-pointer transition-all",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Folder,
                                                                              {
                                                                                className:
                                                                                  "h-5 w-5 sm:h-6 sm:w-6 text-amber-500 drop-shadow-xs group-hover:scale-105 transition-transform",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-[8px] sm:text-[8.5px] font-bold text-slate-800 text-center mt-1 leading-tight",
                                                                                children:
                                                                                  "Tài Liệu",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "group flex flex-col items-center w-12 sm:w-14 p-1 rounded-lg hover:bg-white/40 cursor-pointer transition-all",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Globe,
                                                                              {
                                                                                className:
                                                                                  "h-5 w-5 sm:h-6 sm:w-6 text-sky-600 drop-shadow-xs group-hover:scale-105 transition-transform",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-[8px] sm:text-[8.5px] font-bold text-slate-800 text-center mt-1 leading-tight",
                                                                                children:
                                                                                  "MS Edge",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "group flex flex-col items-center w-12 sm:w-14 p-1 rounded-lg hover:bg-white/40 cursor-pointer transition-all",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Trash2,
                                                                              {
                                                                                className:
                                                                                  "h-5 w-5 sm:h-6 sm:w-6 text-slate-500 drop-shadow-xs group-hover:scale-105 transition-transform",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-[8px] sm:text-[8.5px] font-bold text-slate-800 text-center mt-1 leading-tight",
                                                                                children:
                                                                                  "Thùng Rác",
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
                                                                    "flex-1 flex flex-col items-center justify-center text-center p-2",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center gap-2 mb-1",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "grid grid-cols-2 gap-0.5 w-6 h-6",
                                                                                children:
                                                                                  [
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-sm sm:text-base font-black text-slate-800 tracking-tight",
                                                                                children:
                                                                                  "Windows 11",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "text-2xl sm:text-3xl font-extralight text-slate-800 tracking-tight font-sans",
                                                                        children:
                                                                          "10:30",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "text-[10px] text-slate-600 font-medium",
                                                                        children:
                                                                          "Thứ Tư, 9 tháng 9, 2026",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "mt-2.5 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-white/60 shadow-xs flex items-center gap-1.5 text-slate-700 text-[9px] font-bold",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                children:
                                                                                  "Khởi động hoàn tất - Hệ điều hành sẵn sàng",
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
                                                                    "hidden sm:flex flex-col gap-1 self-end mb-1 p-2 bg-white/85 backdrop-blur-md rounded-xl border border-sky-100 shadow-md max-w-[190px] text-left",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center gap-1.5 text-[8.5px] font-bold text-slate-800",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "grid grid-cols-2 gap-0.5 w-3 h-3",
                                                                                children:
                                                                                  [
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "bg-sky-500 rounded-xs",
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                children:
                                                                                  "Bảo mật & Trạng thái",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "p",
                                                                      {
                                                                        className:
                                                                          "text-[8px] text-slate-600 leading-tight mt-0.5",
                                                                        children:
                                                                          "Hệ điều hành đã nạp GUI và các driver phần cứng vào RAM.",
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
                                                              "h-8 bg-white/90 backdrop-blur-md border-t border-slate-200/80 px-2 sm:px-3 flex items-center justify-between text-slate-700 z-20 shadow-xs",
                                                            children: [
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "hidden sm:flex items-center gap-1 text-[8px] font-semibold text-slate-600 bg-slate-100/80 px-1.5 py-0.5 rounded hover:bg-slate-200/80 cursor-pointer transition-colors",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "⛅",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "28°C",
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5 mx-auto sm:mx-0",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "grid grid-cols-2 gap-0.5 p-1 rounded-md hover:bg-slate-200/70 cursor-pointer w-6 h-6 items-center justify-center transition-colors",
                                                                        title:
                                                                          "Start Menu",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "w-1.5 h-1.5 bg-sky-500 rounded-xs",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "w-1.5 h-1.5 bg-sky-500 rounded-xs",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "w-1.5 h-1.5 bg-sky-500 rounded-xs",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "w-1.5 h-1.5 bg-sky-500 rounded-xs",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-full border border-slate-200 text-[7.5px] sm:text-[8px] text-slate-500 cursor-pointer shadow-2xs",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Search,
                                                                              {
                                                                                className:
                                                                                  "h-2.5 w-2.5 text-slate-500",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "hidden sm:inline",
                                                                                children:
                                                                                  "Tìm kiếm...",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-1 rounded-md hover:bg-slate-200/70 cursor-pointer relative",
                                                                        title:
                                                                          "File Explorer",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              Folder,
                                                                              {
                                                                                className:
                                                                                  "h-3.5 w-3.5 text-amber-500",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "absolute bottom-0 left-1 right-1 h-0.5 bg-sky-500 rounded-full",
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-1 rounded-md hover:bg-slate-200/70 cursor-pointer",
                                                                        title:
                                                                          "Microsoft Edge",
                                                                        children:
                                                                          jsxRuntimeExports.jsx(
                                                                            Globe,
                                                                            {
                                                                              className:
                                                                                "h-3.5 w-3.5 text-sky-600",
                                                                            },
                                                                          ),
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-1 rounded-md hover:bg-slate-200/70 cursor-pointer",
                                                                        title:
                                                                          "Terminal",
                                                                        children:
                                                                          jsxRuntimeExports.jsx(
                                                                            Monitor,
                                                                            {
                                                                              className:
                                                                                "h-3.5 w-3.5 text-slate-600",
                                                                            },
                                                                          ),
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-2 text-slate-600",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      Wifi,
                                                                      {
                                                                        className:
                                                                          "h-3 w-3 text-emerald-600",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      Volume2,
                                                                      {
                                                                        className:
                                                                          "h-3 w-3 text-slate-600",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "text-[7px] sm:text-[7.5px] font-sans text-slate-700 text-right leading-tight",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "font-bold",
                                                                                children:
                                                                                  "10:30 AM",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "text-slate-500",
                                                                                children:
                                                                                  "09/09/2026",
                                                                              },
                                                                            ),
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
                                                    },
                                                  ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          A === 4 &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-6",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "lg:col-span-5 space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "inline-flex items-center gap-1.5 rounded-md bg-rose-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-rose-800",
                                          children: [
                                            jsxRuntimeExports.jsx(FileCode, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Khái niệm 4: Open Source (Mã nguồn mở)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-lg font-black text-slate-900 mt-2",
                                          children:
                                            "Mã nguồn mở tự do chia sẻ & chỉnh sửa",
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-600 leading-relaxed mt-2",
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Open Source",
                                            }),
                                            " (Mã nguồn mở) là phần mềm cho phép mọi người tự do xem, sửa đổi mã nguồn gốc và phân phối lại cho cộng đồng.",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "pt-2 space-y-3.5 bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 text-sm sm:text-base font-medium shadow-xs",
                                      children: [
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "font-black text-slate-800 flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx(
                                              SlidersVertical,
                                              {
                                                className:
                                                  "h-4 w-4 text-rose-500",
                                              },
                                            ),
                                            " BẢNG THAY ĐỔI MÃ NGUỒN (CODE EDIT)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("label", {
                                                  className:
                                                    "block text-slate-600 font-bold mb-1.5 text-xs",
                                                  children:
                                                    "Mã Màu Nền (Background Variable):",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "grid grid-cols-2 gap-2",
                                                  children: [
                                                    {
                                                      label:
                                                        "Xanh Dương (Blue)",
                                                      class: "bg-blue-600",
                                                      code: "#2563EB",
                                                      color: "#2563eb",
                                                    },
                                                    {
                                                      label: "Xanh Lá (Green)",
                                                      class: "bg-emerald-600",
                                                      code: "#059669",
                                                      color: "#059669",
                                                    },
                                                    {
                                                      label: "Cam Ấm (Orange)",
                                                      class: "bg-orange-500",
                                                      code: "#F97316",
                                                      color: "#ea580c",
                                                    },
                                                    {
                                                      label:
                                                        "Tím Hồng (Purple)",
                                                      class: "bg-fuchsia-600",
                                                      code: "#C026D3",
                                                      color: "#c026d3",
                                                    },
                                                  ].map((ye, H) =>
                                                    jsxRuntimeExports.jsxs(
                                                      "button",
                                                      {
                                                        onClick: () => {
                                                          (tt(ye.class),
                                                            Ae(
                                                              `[Mã Nguồn]: Thay đổi biến theme_color thành "${ye.code}".`,
                                                            ));
                                                        },
                                                        className: `py-2 px-2.5 rounded-xl font-bold border transition-all cursor-pointer text-xs flex items-center justify-center gap-1.5 ${De === ye.class ? "bg-blue-50 border-blue-600 text-blue-900 shadow-xs ring-2 ring-blue-500/20" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "w-3 h-3 rounded-full shrink-0 shadow-2xs",
                                                              style: {
                                                                backgroundColor:
                                                                  ye.color,
                                                              },
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              children:
                                                                ye.label,
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                      H,
                                                    ),
                                                  ),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("label", {
                                                  className:
                                                    "block text-slate-600 font-bold mb-1 text-xs",
                                                  children:
                                                    "Mã Chuỗi Chữ (Welcome Text String):",
                                                }),
                                                jsxRuntimeExports.jsx("input", {
                                                  type: "text",
                                                  value: it,
                                                  onChange: (ye) => {
                                                    (oe(ye.target.value),
                                                      Ae(
                                                        `[Mã Nguồn]: Cập nhật hằng số WELCOME_TEXT = "${ye.target.value}".`,
                                                      ));
                                                  },
                                                  className:
                                                    "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 font-medium text-xs focus:ring-2 focus:ring-rose-500/30 outline-none",
                                                  placeholder:
                                                    "Nhập thông điệp tuỳ ý...",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center justify-between pt-1",
                                              children: [
                                                jsxRuntimeExports.jsx("label", {
                                                  className:
                                                    "text-slate-600 font-bold text-xs",
                                                  children:
                                                    "Hiển thị Icon (Boolean SHOW_ICON):",
                                                }),
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      (ge(!ie),
                                                        Ae(
                                                          `[Mã Nguồn]: Đặt cờ SHOW_ICON = ${ie ? "false" : "true"}.`,
                                                        ));
                                                    },
                                                    className: `rounded-xl px-4 py-1.5 text-xs font-black tracking-wide cursor-pointer transition-all ${ie ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-200 text-slate-600"}`,
                                                    children: ie
                                                      ? "✓ TRUE (Hiển thị)"
                                                      : "✕ FALSE (Ẩn)",
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
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "lg:col-span-7 flex flex-col gap-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-700 uppercase tracking-wider block",
                                      children:
                                        "🎮 ĐỒ HOẠ BIÊN DỊCH VÀ KHỞI CHẠY (COMPILE & PREVIEW)",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-slate-800 font-mono text-[9px] flex flex-col justify-between min-h-[250px] shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "pb-2 border-b border-slate-200 flex items-center justify-between text-slate-700",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center gap-1.5 font-bold text-xs",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            Code,
                                                            {
                                                              className:
                                                                "h-4 w-4 text-blue-600",
                                                            },
                                                          ),
                                                          " app_customizer.py",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] bg-slate-200/80 px-2 py-0.5 rounded text-slate-600 font-bold font-sans",
                                                        children: "Python 3",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-1 my-2.5 text-left text-slate-700 leading-relaxed font-mono",
                                                  children: [
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-slate-400 italic",
                                                      children:
                                                        "# Khai báo mã nguồn mở (Giấy phép MIT)",
                                                    }),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-purple-600 font-bold",
                                                              children:
                                                                "import",
                                                            },
                                                          ),
                                                          " app_framework",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-purple-600 font-bold",
                                                              children: "def",
                                                            },
                                                          ),
                                                          " ",
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-blue-600 font-bold",
                                                              children:
                                                                "render_app",
                                                            },
                                                          ),
                                                          "():",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className: "pl-4",
                                                        children: [
                                                          "theme_color = ",
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-emerald-700 font-bold",
                                                              children: [
                                                                '"',
                                                                De.replace(
                                                                  "bg-",
                                                                  "",
                                                                ),
                                                                '"',
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className: "pl-4",
                                                        children: [
                                                          "welcome_txt = ",
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-emerald-700 font-bold",
                                                              children: [
                                                                '"',
                                                                it,
                                                                '"',
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className: "pl-4",
                                                        children: [
                                                          "show_logo = ",
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-amber-700 font-bold",
                                                              children: ie
                                                                ? "True"
                                                                : "False",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className: "pl-4",
                                                        children: [
                                                          "app_framework.",
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sky-600 font-bold",
                                                              children:
                                                                "set_bg",
                                                            },
                                                          ),
                                                          "(theme_color)",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className: "pl-4",
                                                        children: [
                                                          "app_framework.",
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sky-600 font-bold",
                                                              children:
                                                                "draw_text",
                                                            },
                                                          ),
                                                          "(welcome_txt)",
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "pt-2 border-t border-slate-200 text-left text-[8.5px] font-sans flex items-center gap-1.5 text-amber-800 bg-amber-50 p-1.5 rounded-lg border border-amber-200",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-bold shrink-0",
                                                  children: "ℹ️",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "line-clamp-2",
                                                  children: ae,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between min-h-[250px] shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              children: jsxRuntimeExports.jsxs(
                                                "p",
                                                {
                                                  className:
                                                    "text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(Eye, {
                                                      className:
                                                        "h-4 w-4 text-blue-600",
                                                    }),
                                                    " PREVIEW ỨNG DỤNG SAU BIÊN DỊCH",
                                                  ],
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex-1 rounded-2xl border border-slate-300 overflow-hidden flex flex-col my-1 shadow-sm app-preview-canvas min-h-[160px]",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "bg-slate-100 border-b border-slate-200 px-3 py-1 flex items-center justify-between text-slate-700 select-none",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center gap-1.5",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "w-2.5 h-2.5 rounded-full bg-rose-400",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "w-2.5 h-2.5 rounded-full bg-amber-400",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "w-2.5 h-2.5 rounded-full bg-emerald-400",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9.5px] font-bold text-slate-700 ml-1.5",
                                                              children:
                                                                "MyOpenSourceApp.exe",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold",
                                                        children: "● Running",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex-1 flex flex-col items-center justify-center p-3 sm:p-4 text-center transition-all duration-500",
                                                  style: {
                                                    background:
                                                      De === "bg-emerald-600"
                                                        ? "linear-gradient(135deg, #047857 0%, #10b981 100%)"
                                                        : De === "bg-orange-500"
                                                          ? "linear-gradient(135deg, #c2410c 0%, #f97316 100%)"
                                                          : De ===
                                                              "bg-fuchsia-600"
                                                            ? "linear-gradient(135deg, #86198f 0%, #d946ef 100%)"
                                                            : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                                                  },
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-md text-center max-w-[210px] w-full flex flex-col items-center",
                                                        children: [
                                                          ie &&
                                                            jsxRuntimeExports.jsx(
                                                              motion.div,
                                                              {
                                                                initial: {
                                                                  scale: 0,
                                                                },
                                                                animate: {
                                                                  scale: 1,
                                                                },
                                                                className:
                                                                  "h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 shadow-xs text-white",
                                                                children:
                                                                  jsxRuntimeExports.jsx(
                                                                    Sparkles,
                                                                    {
                                                                      className:
                                                                        "h-4.5 w-4.5 text-white animate-spin-slow",
                                                                    },
                                                                  ),
                                                              },
                                                            ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-xs sm:text-sm font-extrabold text-white text-center leading-snug drop-shadow-sm",
                                                              style: {
                                                                color:
                                                                  "#ffffff !important",
                                                                textShadow:
                                                                  "0 1px 3px rgba(0,0,0,0.5)",
                                                              },
                                                              children:
                                                                it ||
                                                                "Chưa nhập thông điệp",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "mt-2 px-2.5 py-0.5 rounded-md bg-white/25 hover:bg-white/35 text-white text-[8.5px] font-bold cursor-pointer transition-colors shadow-2xs border border-white/20",
                                                              style: {
                                                                color:
                                                                  "#ffffff !important",
                                                              },
                                                              children:
                                                                "Bấm thử nghiệm",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              className:
                                                "text-[8.5px] text-slate-500 font-bold text-center leading-relaxed mt-2",
                                              children: [
                                                "✓ Do phần mềm này là ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className: "text-rose-600",
                                                    children:
                                                      "Mã Nguồn Mở (Open Source)",
                                                  },
                                                ),
                                                ", em có thể tự ý can thiệp biến màu sắc & nội dung rồi biên dịch lại theo ý muốn!",
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
                          A === 5 &&
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-6",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "lg:col-span-5 space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      children: [
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "inline-flex items-center gap-1.5 rounded-md bg-blue-100 px-2.5 py-0.5 text-sm sm:text-base font-bold text-blue-800",
                                          children: [
                                            jsxRuntimeExports.jsx(FolderLock, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Khái niệm 5: Access Token (Mã truy cập)",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-lg font-black text-slate-900 mt-2",
                                          children:
                                            "Mã xác thực quyền hạn bảo mật",
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mt-2 text-left",
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Access Token (Mã truy cập)",
                                            }),
                                            " là một chuỗi mã bảo mật được cấp sau khi đăng nhập thành công. Mã này chứa thông tin xác thực cho một phiên làm việc, giúp xác định danh tính và quyền hạn của người dùng để truy cập hệ thống an toàn mà ",
                                            jsxRuntimeExports.jsx("strong", {
                                              className:
                                                "text-emerald-700 font-bold",
                                              children:
                                                "không cần phải nhập lại mật khẩu nhiều lần",
                                            }),
                                            ".",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "pt-2 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs",
                                      children:
                                        ot === "guest"
                                          ? jsxRuntimeExports.jsxs("form", {
                                              onSubmit: Ye,
                                              className: "space-y-3.5",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "border-b pb-2 border-slate-100 text-left",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            KeyRound,
                                                            {
                                                              className:
                                                                "h-4 w-4 text-blue-600",
                                                            },
                                                          ),
                                                          " 1. ĐĂNG NHẬP ĐỂ NHẬN ACCESS TOKEN",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-[10px] text-slate-500 mt-0.5",
                                                      children:
                                                        "Nhập thông tin tài khoản để hệ thống xác minh và cấp mã Token:",
                                                    }),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-2 text-left",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "label",
                                                            {
                                                              className:
                                                                "block text-xs font-bold text-slate-600 mb-1",
                                                              children:
                                                                "Tài khoản:",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              required: !0,
                                                              value: $e,
                                                              onChange: (ye) =>
                                                                _e(
                                                                  ye.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-500/30 outline-hidden bg-slate-50 focus:bg-white",
                                                              placeholder:
                                                                "HocSinh_Lop6A",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "label",
                                                            {
                                                              className:
                                                                "block text-xs font-bold text-slate-600 mb-1",
                                                              children:
                                                                "Mật khẩu:",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "password",
                                                              required: !0,
                                                              value: Ue,
                                                              onChange: (ye) =>
                                                                Ke(
                                                                  ye.target
                                                                    .value,
                                                                ),
                                                              className:
                                                                "w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-blue-500/30 outline-hidden bg-slate-50 focus:bg-white",
                                                              placeholder:
                                                                "••••••••",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "submit",
                                                    className:
                                                      "w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2.5 px-4 text-xs sm:text-sm shadow-xs transition-all cursor-pointer",
                                                    children:
                                                      "🔑 Đăng Nhập & Cấp Mã Token",
                                                  },
                                                ),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-3 text-left",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "rounded-2xl border-2 border-blue-400 bg-linear-to-br from-blue-50 via-white to-sky-50 p-4 shadow-md relative overflow-hidden select-none",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center justify-between pb-2.5 border-b border-blue-200/80 mb-3",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex items-center gap-2",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-lg",
                                                                    children:
                                                                      "🔑",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    children: [
                                                                      jsxRuntimeExports.jsx(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "text-[11px] font-black text-blue-900 tracking-tight",
                                                                          children:
                                                                            "ACCESS TOKEN (MÃ TRUY CẬP) - IC3 GS6",
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsx(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "text-[8.5px] font-mono text-blue-600",
                                                                          children:
                                                                            "PHIÊN XÁC THỰC BẢO MẬT & PHÂN QUYỀN",
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
                                                                "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-extrabold border border-emerald-300",
                                                              children:
                                                                "● HỢP LỆ",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-start gap-3",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "w-14 h-16 rounded-xl bg-blue-600 text-white flex flex-col items-center justify-center shrink-0 shadow-xs border-2 border-white",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-2xl mb-0.5",
                                                                    children:
                                                                      "🧑‍🎓",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-[7px] font-bold tracking-wider uppercase",
                                                                    children:
                                                                      "LỚP 6A",
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex-1 min-w-0 space-y-1 text-xs",
                                                              children: [
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "font-extrabold text-slate-900 truncate",
                                                                    children: [
                                                                      "Người dùng: ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "text-blue-700",
                                                                          children:
                                                                            $e ||
                                                                            "HocSinh_Lop6A",
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "text-[9px] text-slate-600",
                                                                    children: [
                                                                      "Quyền hạn: ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "strong",
                                                                        {
                                                                          className:
                                                                            "text-slate-800",
                                                                          children:
                                                                            "Truy cập Phòng Tin Học, Thư Viện",
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "text-[8px] font-mono text-slate-500 bg-white/80 p-1 rounded border border-blue-200 truncate mt-1",
                                                                    children: [
                                                                      "Mã Token: ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "text-blue-600 font-bold",
                                                                          children:
                                                                            Q
                                                                              ? Q.substring(
                                                                                  0,
                                                                                  24,
                                                                                ) +
                                                                                "..."
                                                                              : "CHƯA CẤP",
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "text-[8px] text-emerald-700 font-bold pt-0.5",
                                                                    children:
                                                                      "✓ Đã xác thực bảo mật - Không cần gõ lại mật khẩu",
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
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "flex gap-2 pt-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        onClick: Dt,
                                                        className:
                                                          "flex-1 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-2.5 px-3 text-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            { children: "🔑" },
                                                          ),
                                                          " Gửi Access Token Để Mở Cửa",
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        onClick: mt,
                                                        className:
                                                          "rounded-2xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold py-2.5 px-3 text-xs cursor-pointer transition-all",
                                                        children:
                                                          "🚪 Đăng Xuất",
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
                                    "lg:col-span-7 flex flex-col gap-4",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-700 uppercase tracking-wider block text-left",
                                      children:
                                        "🎮 KIỂM SOÁT CỔNG TRUY CẬP (ACCESS CONTROL)",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col justify-between min-h-[250px] shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              children: jsxRuntimeExports.jsxs(
                                                "p",
                                                {
                                                  className:
                                                    "text-xs sm:text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      FolderLock,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-blue-600",
                                                      },
                                                    ),
                                                    " CỬA PHÒNG THỰC HÀNH TIN HỌC",
                                                  ],
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "flex-1 flex flex-col items-center justify-center py-2",
                                              children: C
                                                ? jsxRuntimeExports.jsxs(
                                                    motion.div,
                                                    {
                                                      initial: { scale: 0.9 },
                                                      animate: { scale: 1 },
                                                      className:
                                                        "text-center space-y-2",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-200 animate-bounce",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                LockOpen,
                                                                {
                                                                  className:
                                                                    "h-6 w-6",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-black text-emerald-600",
                                                            children:
                                                              "🔓 XÁC THỰC TOKEN THÀNH CÔNG! CỬA ĐÃ MỞ!",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-bold text-slate-700 max-w-[210px] mx-auto text-left space-y-1.5 shadow-2xs",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "🖥️",
                                                                      },
                                                                    ),
                                                                    " Máy tính số 08 (Sẵn sàng)",
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "📚",
                                                                      },
                                                                    ),
                                                                    " Giáo trình chuẩn IC3 GS6",
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          "🎮",
                                                                      },
                                                                    ),
                                                                    " Phần mềm mô phỏng Lab",
                                                                  ],
                                                                },
                                                              ),
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
                                                        "text-center space-y-2.5",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "h-12 w-12 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center mx-auto shadow-inner",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                Lock,
                                                                {
                                                                  className:
                                                                    "h-6 w-6",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-xs sm:text-sm font-black text-slate-700",
                                                            children:
                                                              "🔒 CỬA ĐANG KHÓA AN TOÀN",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-[10px] text-slate-500 max-w-[190px] mx-auto",
                                                            children:
                                                              "Yêu cầu gửi kèm Access Token hợp lệ để mở cửa.",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "button",
                                                          {
                                                            onClick: Dt,
                                                            className:
                                                              "text-xs rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-extrabold px-3 py-1.5 border border-blue-200 transition-all cursor-pointer",
                                                            children:
                                                              "🔑 Gửi mã Access Token",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-[9px] text-slate-500 font-bold text-center leading-relaxed pt-2 border-t border-slate-100",
                                              children:
                                                "💡 Cơ chế: Hệ thống kiểm tra Access Token để mở quyền truy cập mà không cần hỏi lại mật khẩu!",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-slate-800 font-mono text-[9px] flex flex-col justify-between min-h-[250px] shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-xs sm:text-sm font-bold text-slate-700 pb-2 border-b border-slate-200 flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Terminal,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-blue-600",
                                                      },
                                                    ),
                                                    " NHẬT KÝ KIỂM SOÁT TRUY CẬP (ACCESS LOGS)",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "space-y-1.5 my-2 max-h-[150px] overflow-y-auto text-left pr-1",
                                                  children: ke.map((ye, H) => {
                                                    let me = "text-slate-600";
                                                    return (
                                                      ye.includes("✓") &&
                                                        (me =
                                                          "text-emerald-600 font-bold"),
                                                      (ye.includes("❌") ||
                                                        ye.includes(
                                                          "TỪ CHỐI",
                                                        )) &&
                                                        (me =
                                                          "text-rose-600 font-black animate-shake"),
                                                      (ye.includes("🔑") ||
                                                        ye.includes("🪪") ||
                                                        ye.includes("📲")) &&
                                                        (me =
                                                          "text-blue-600 font-black"),
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className: `${me} leading-relaxed`,
                                                          children: ye,
                                                        },
                                                        H,
                                                      )
                                                    );
                                                  }),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "pt-2 border-t border-slate-200 text-slate-500 text-[8px] font-bold text-left",
                                              children:
                                                "Phương thức: Xác thực qua mã Access Token (Bearer Token)",
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
                    jsxRuntimeExports.jsx(motion.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      className:
                        "mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-left",
                      children: jsxRuntimeExports.jsxs("div", {
                        className:
                          "rounded-3xl bg-emerald-500/10 border-2 border-emerald-400/30 p-5 sm:p-6",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-emerald-500 text-white shadow-md",
                                children: jsxRuntimeExports.jsx(Award, {
                                  className: "h-6 w-6",
                                }),
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("h4", {
                                    className:
                                      "text-lg font-black text-emerald-950 dark:text-emerald-300",
                                    children:
                                      "Tuyệt vời! Chúc mừng em đã hoàn thành Lab 1!",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-emerald-800 dark:text-emerald-400 font-bold",
                                    children:
                                      "Dưới đây là tóm tắt kiến thức cốt lõi giúp em ôn tập tốt cho kỳ thi IC3 GS6:",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 gap-4 mt-6",
                            children: TERMS$5.map((ye) => {
                              const H = DEFINITIONS$5.find(
                                (me) => me.correctTermId === ye.id,
                              );
                              return jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className:
                                    "rounded-3xl bg-white dark:bg-slate-850 p-5 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `p-1.5 rounded-3xl bg-linear-to-r ${ye.color} text-white`,
                                          children: ye.icon,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "font-black text-slate-800 dark:text-white text-sm sm:text-base font-medium",
                                          children: ye.name,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-medium leading-relaxed",
                                      children: H == null ? void 0 : H.text,
                                    }),
                                  ],
                                },
                                ye.id,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                }),
              ],
            }),
          });
        }

        return Activity2;
      };
})();
