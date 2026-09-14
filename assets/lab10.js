/**
 * Lab 10: Công cụ Kết nối Mạng
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab10 = window.AGY_LABS[10] = function (env) {
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
    function Lab10({ onSuccess: a }) {
      const [n, i] = reactExports.useState("simulator"),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState(
          TERMS.map((Ce) => ({ termId: Ce.id, definition: null })),
        ),
        [u, g] = reactExports.useState(null),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState({}),
        [N, M] = reactExports.useState(!1),
        [y, I] = reactExports.useState(null),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState(1),
        [L, le] = reactExports.useState(!1),
        [P, G] = reactExports.useState(!0),
        [ee, ce] = reactExports.useState(!1),
        [V, pe] = reactExports.useState(!1),
        [Ie, se] = reactExports.useState(
          "Đường truyền rảnh rỗi. Hãy nhấc máy gọi điện hoặc lướt web trải nghiệm nhé!",
        ),
        [de, _] = reactExports.useState("facebook"),
        [U, Z] = reactExports.useState("10110101"),
        [be, he] = reactExports.useState("Chào cậu"),
        [E, v] = reactExports.useState("idle"),
        [K, te] = reactExports.useState("auto"),
        [je, Se] = reactExports.useState(""),
        [He, Xe] = reactExports.useState(""),
        [Qe, qe] = reactExports.useState([]),
        [at, ze] = reactExports.useState(""),
        [De, tt] = reactExports.useState(""),
        [it, oe] = reactExports.useState([
          {
            sender: "friend",
            text: "Chào bạn! Tụi mình trò chuyện trên Facebook như thế nào nhỉ? Hãy gõ tin nhắn gửi tớ xem!",
          },
        ]),
        [ie, ge] = reactExports.useState(
          "Sẵn sàng kiểm thử chuyển dịch tín hiệu Số <-> Tương tự!",
        ),
        [ae, Ae] = reactExports.useState("pc1"),
        [Q, Te] = reactExports.useState("pc2"),
        [$e, _e] = reactExports.useState(!1),
        [Ue, Ke] = reactExports.useState(
          "Cáp Ethernet RJ-45 sẵn sàng kết nối qua Thiết bị chia mạng trung tâm (Switch).",
        ),
        [ot, w] = reactExports.useState("idle"),
        [C, Ee] = reactExports.useState("baitap_tin_hoc.docx"),
        ke = {
          pc1: { x: "20%", y: "25%" },
          pc2: { x: "80%", y: "25%" },
          teacher: { x: "20%", y: "75%" },
          printer: { x: "80%", y: "75%" },
        },
        [We, ht] = reactExports.useState("google_search"),
        [lt, Fe] = reactExports.useState("idle"),
        [rt, yt] = reactExports.useState(
          "Router bưu tá sẵn sàng chỉ đường cho bưu kiện IP của bạn!",
        ),
        [xt, ve] = reactExports.useState("Doraemon HD (CH 9)"),
        [Ye, mt] = reactExports.useState(!1),
        [Dt, ye] = reactExports.useState(0),
        [H, me] = reactExports.useState(!0),
        [Le, Pe] = reactExports.useState(!0),
        [W, Me] = reactExports.useState("192.168.1.102"),
        [et] = reactExports.useState("B4-F1-E2-90-C8-D7"),
        [Je, Et] = reactExports.useState("192.168.1.150");
      reactExports.useEffect(() => {
        (ft(), a());
      }, []);
      const ft = () => {
          const Ce = [...DEFINITIONS].sort(() => Math.random() - 0.5);
          (c(Ce),
            m(TERMS.map((st) => ({ termId: st.id, definition: null }))),
            g(null),
            f(!1),
            k({}),
            M(!1));
        },
        Mt = () => {
          (ce(!0),
            se(
              P
                ? "📞 Cuộc gọi thông suốt, âm thanh trong trẻo! Bộ chia Splitter đã lọc sạch tín hiệu internet ra khỏi ống nghe điện thoại."
                : "🔊 Tiếng rè cực lớn: BZZZ! REEE! Điện thoại bàn bị nhiễu sóng nặng vì tín hiệu web tần số cao tràn vào dải tần thoại!",
            ),
            setTimeout(() => {
              ce(!1);
            }, 4e3));
        },
        D = () => {
          (pe(!0),
            se("🌐 Máy tính bắt đầu tải dữ liệu qua dải sóng DSL cao tần..."),
            setTimeout(() => {
              (se(
                P
                  ? "✓ Trang web tải cực nhanh! Internet băng thông rộng chạy mượt mà ở làn tần số riêng biệt (>25 kHz)."
                  : "⚠️ Lướt web chập chờn / Mất kết nối! Khi điện thoại nhấc máy, sóng giọng nói chen lấn làm rớt gói tin internet.",
              ),
                pe(!1));
            }, 2500));
        },
        Re = (Ce) =>
          Ce.split("")
            .map((st) => {
              const At = st.charCodeAt(0).toString(2);
              return "0".repeat(8 - At.length) + At;
            })
            .join(" "),
        Ve = () => {
          if (E === "idle")
            if (de === "facebook") {
              if (!be.trim()) {
                ge(
                  "⚠️ Vui lòng gõ chữ tin nhắn cần gửi qua Facebook Messenger!",
                );
                return;
              }
              const Ce = be,
                st = Re(Ce).replace(/\s+/g, "");
              (Se(Ce),
                Xe(st),
                ze(""),
                tt(""),
                qe([]),
                K === "manual"
                  ? (v("translating"),
                    ge(
                      `💻 Bước 1/5 [MÁY GỬI]: Máy tính gõ chữ: "${Ce}" -> Được chuyển dịch sang mã nhị phân 0 & 1 (Tín hiệu số - Digital): ${Re(Ce).slice(0, 24)}... (Nhấp nút "Bước tiếp theo ➡️" bên dưới để tiến hành ĐIỀU CHẾ)`,
                    ))
                  : (v("translating"),
                    ge(
                      `💻 Bước 1/5 [MÁY GỬI]: Máy tính gõ chữ: "${Ce}" -> Được chuyển dịch sang mã nhị phân 0 & 1 (Tín hiệu số - Digital): ${Re(Ce).slice(0, 24)}...`,
                    ),
                    setTimeout(() => {
                      (v("modulating"),
                        ge(
                          '📶 Bước 2/5 [MODEM GỬI]: Modem thực hiện "ĐIỀU CHẾ": Biến mã số (Digital 1-0) thành sóng điện/âm thanh uốn lượn (Tín hiệu tương tự - Analog) dạt dào để chạy qua đường dây cáp.',
                        ));
                      const At = st.slice(0, 16),
                        Lt = [];
                      for (let Zt = 0; Zt < At.length; Zt++) {
                        const Ut = At[Zt] === "1" ? 4.5 : 1.8;
                        for (let hs = 0; hs < 12; hs++)
                          Lt.push(Math.sin((hs / 12) * Math.PI * 2 * Ut));
                      }
                      (qe(Lt),
                        setTimeout(() => {
                          (v("transmitting"),
                            ge(
                              "⚡ Bước 3/5 [DÂY CÁP]: Sóng Analog uốn lượn vật lý đang chạy dọc đường truyền dây cáp đồng viễn thông để tới đích...",
                            ),
                            setTimeout(() => {
                              (v("demodulating"),
                                ge(
                                  '🔄 Bước 4/5 [MODEM NHẬN]: Modem đầu nhận lắng nghe sóng Analog uốn lượn, thực hiện "GIẢI ĐIỀU CHẾ" để dịch ngược sóng thành chuỗi nhị phân (Digital) 0 & 1 ban đầu.',
                                ),
                                ze(st),
                                setTimeout(() => {
                                  (v("completed"),
                                    tt(Ce),
                                    ge(
                                      `🎉 Bước 5/5 [MÁY NHẬN]: Máy tính bạn nhận chuỗi bits, khôi phục thành chữ gốc "${Ce}" và hiển thị trên màn hình chat Messenger!`,
                                    ),
                                    oe((Zt) => [
                                      ...Zt,
                                      { sender: "me", text: Ce },
                                    ]),
                                    setTimeout(() => {
                                      const Zt = [
                                          `Nhận được chữ "${Ce}" rồi! Modem bên tớ vừa nghe thấy sóng Analog là giải điều chế thành số 1-0 rồi dịch lại thành chữ ngay!`,
                                          `Thật tuyệt! Hóa ra tin nhắn "${Ce}" của cậu chạy bằng sóng Analog uốn lượn rồi biến lại thành chữ cho tớ đọc!`,
                                          "Modem xịn quá! Dịch từ Chữ -> Nhị phân -> Sóng Analog -> Nhị phân -> Chữ chỉ trong tích tắc!",
                                        ],
                                        Vt =
                                          Zt[
                                            Math.floor(
                                              Math.random() * Zt.length,
                                            )
                                          ];
                                      oe((Ut) => [
                                        ...Ut,
                                        { sender: "friend", text: Vt },
                                      ]);
                                    }, 1500),
                                    setTimeout(() => {
                                      v("idle");
                                    }, 3500));
                                }, 3500));
                            }, 3500));
                        }, 3500));
                    }, 3500)));
            } else {
              const Ce = U.replace(/[^01]/g, "");
              if (!Ce) {
                ge("⚠️ Vui lòng nhập chuỗi số nhị phân chỉ gồm 0 và 1!");
                return;
              }
              (Z(Ce),
                Xe(Ce),
                ze(""),
                qe([]),
                K === "manual"
                  ? (v("translating"),
                    ge(
                      `💻 Bước 1/5 [MÁY GỬI]: Máy tính chuẩn bị chuỗi nhị phân cần truyền (Tín hiệu số - Digital): ${Ce}. (Nhấp nút "Bước tiếp theo ➡️" bên dưới để Modem tiến hành điều chế thành sóng)`,
                    ))
                  : (v("translating"),
                    ge(
                      `💻 Bước 1/5 [MÁY GỬI]: Máy chuẩn bị chuỗi nhị phân đầu vào (Tín hiệu số - Digital): ${Ce}`,
                    ),
                    setTimeout(() => {
                      (v("modulating"),
                        ge(
                          `📶 Bước 2/5 [MODEM GỬI]: Modem thực hiện "ĐIỀU CHẾ" chuỗi bits: ${Ce} (Digital) thành các chu kỳ sóng uốn lượn (Analog) có tần số khác nhau.`,
                        ));
                      const st = [];
                      for (let At = 0; At < Ce.length; At++) {
                        const Zt = Ce[At] === "1" ? 4 : 1.5;
                        for (let Vt = 0; Vt < 20; Vt++)
                          st.push(Math.sin((Vt / 20) * Math.PI * 2 * Zt));
                      }
                      (qe(st),
                        setTimeout(() => {
                          (v("transmitting"),
                            ge(
                              "⚡ Bước 3/5 [DÂY CÁP]: Đang truyền sóng Analog vật lý uốn lượn dọc theo sợi dây đồng tới modem đích...",
                            ),
                            setTimeout(() => {
                              (v("demodulating"),
                                ge(
                                  '🔄 Bước 4/5 [MODEM NHẬN]: Modem đầu nhận thu sóng Analog uốn lượn, tiến hành "GIẢI ĐIỀU CHẾ" (Sóng -> Số) để dịch thành chuỗi nhị phân.',
                                ),
                                setTimeout(() => {
                                  (ze(Ce),
                                    v("completed"),
                                    ge(
                                      `🎉 Bước 5/5 [MÁY NHẬN]: Hoàn thành xuất sắc! Máy nhận nhận được chuỗi bits gốc: ${Ce}`,
                                    ),
                                    setTimeout(() => {
                                      v("idle");
                                    }, 3500));
                                }, 3500));
                            }, 3500));
                        }, 3500));
                    }, 3500)));
            }
        },
        Ge = () => {
          if (K === "manual")
            if (E === "translating")
              if ((v("modulating"), de === "facebook")) {
                ge(
                  '📶 Bước 2/5 [MODEM GỬI]: Modem thực hiện "ĐIỀU CHẾ": Biến mã số (Digital 1-0) thành sóng điện/âm thanh uốn lượn (Tín hiệu tương tự - Analog) để chạy qua dây cáp thoại.',
                );
                const Ce = He.slice(0, 16),
                  st = [];
                for (let At = 0; At < Ce.length; At++) {
                  const Zt = Ce[At] === "1" ? 4.5 : 1.8;
                  for (let Vt = 0; Vt < 12; Vt++)
                    st.push(Math.sin((Vt / 12) * Math.PI * 2 * Zt));
                }
                qe(st);
              } else {
                ge(
                  `📶 Bước 2/5 [MODEM GỬI]: Modem thực hiện "ĐIỀU CHẾ" chuỗi bits: ${He} (Digital) thành sóng uốn lượn (Analog) có tần số khác nhau.`,
                );
                const Ce = [];
                for (let st = 0; st < He.length; st++) {
                  const Lt = He[st] === "1" ? 4 : 1.5;
                  for (let Zt = 0; Zt < 20; Zt++)
                    Ce.push(Math.sin((Zt / 20) * Math.PI * 2 * Lt));
                }
                qe(Ce);
              }
            else
              E === "modulating"
                ? (v("transmitting"),
                  ge(
                    "⚡ Bước 3/5 [DÂY CÁP]: Sóng Analog vật lý uốn lượn đang được truyền dẫn siêu tốc dọc dây cáp đồng viễn thông để tới đích...",
                  ))
                : E === "transmitting"
                  ? (v("demodulating"),
                    ge(
                      '🔄 Bước 4/5 [MODEM NHẬN]: Modem đầu nhận lắng nghe sóng Analog uốn lượn trên dây cáp, thực hiện "GIẢI ĐIỀU CHẾ" biến đổi tín hiệu vật lý đó ngược lại thành các bits số 0 & 1.',
                    ),
                    ze(He))
                  : E === "demodulating"
                    ? (v("completed"),
                      de === "facebook"
                        ? (tt(je),
                          ge(
                            `🎉 Bước 5/5 [MÁY NHẬN]: Hoàn tất! Máy tính bạn nhận bits nhị phân, giải mã thành tin nhắn chữ gốc: "${je}" xuất hiện trên màn hình Messenger!`,
                          ),
                          oe((Ce) => [...Ce, { sender: "me", text: je }]),
                          setTimeout(() => {
                            const Ce = [
                                `Nhận được chữ "${je}" rồi! Modem bên tớ vừa nghe thấy sóng Analog là giải điều chế thành số 1-0 rồi dịch lại thành chữ ngay!`,
                                `Thật tuyệt! Hóa ra tin nhắn "${je}" của cậu chạy bằng sóng Analog uốn lượn rồi biến lại thành chữ cho tớ đọc!`,
                                "Modem xịn quá! Dịch từ Chữ -> Nhị phân -> Sóng Analog -> Nhị phân -> Chữ chỉ trong tích tắc!",
                              ],
                              st = Ce[Math.floor(Math.random() * Ce.length)];
                            oe((At) => [...At, { sender: "friend", text: st }]);
                          }, 1500))
                        : ge(
                            `🎉 Bước 5/5 [MÁY NHẬN]: Hoàn thành xuất sắc! Máy tính nhận khôi phục thành công chuỗi số nhị phân gốc: ${He}`,
                          ))
                    : E === "completed" &&
                      (v("idle"),
                      ge("Sẵn sàng cho quy trình chuyển dịch mới!"));
        },
        Ze = () => {
          if ($e) return;
          if (ae === Q) {
            Ke(
              "⚠️ Lỗi: Không thể gửi dữ liệu cho chính mình! Hãy click chọn hai thiết bị khác nhau.",
            );
            return;
          }
          (_e(!0), w("to_switch"));
          const Ce =
              ae === "pc1"
                ? "Máy 1 (Của em)"
                : ae === "pc2"
                  ? "Máy 2 (Nam)"
                  : ae === "teacher"
                    ? "Máy Giáo Viên"
                    : "Máy in LAN",
            st =
              Q === "pc1"
                ? "Máy 1 (Của em)"
                : Q === "pc2"
                  ? "Máy 2 (Nam)"
                  : Q === "teacher"
                    ? "Máy Giáo Viên"
                    : "Máy in LAN";
          (Ke(
            `🔌 [1/4] Gói tin "${C}" từ [${Ce}] đang đi qua dây cáp mạng đồng xoắn (Ethernet RJ-45) để truyền về Switch trung tâm...`,
          ),
            setTimeout(() => {
              (w("switching"),
                Ke(
                  `🎯 [2/4] Gói tin đã tới Switch mạng. Bộ chuyển mạch đang tra bảng địa chỉ MAC để tìm ra cổng cắm dây nối tới [${st}]...`,
                ),
                setTimeout(() => {
                  (w("to_dest"),
                    Ke(
                      `⚡ [3/4] Switch chuyển mạch thành công! Đẩy gói tin "${C}" tiếp tục truyền dọc sợi cáp Ethernet dẫn thẳng đến [${st}]...`,
                    ),
                    setTimeout(() => {
                      (w("delivered"),
                        Ke(
                          Q === "printer"
                            ? `✓ [4/4] Đích đến [${st}] nhận lệnh in thành công! Máy in đang nạp giấy và in tệp "${C}" của bạn.`
                            : `✓ [4/4] Thành công! [${st}] nhận tệp "${C}" mượt mà với tốc độ truyền LAN 1 Gbps ổn định.`,
                        ),
                        _e(!1));
                    }, 1500));
                }, 1500));
            }, 1500));
        },
        Nt = () => {
          lt === "idle" &&
            (Fe("scanning"),
            yt(
              "🔍 Router bưu tá đang quét phong bì thư để đọc nhãn địa chỉ IP Đích...",
            ),
            setTimeout(() => {
              (Fe("forwarding"),
                yt(
                  We === "dad_printer"
                    ? '🏠 Router phân tích: "Địa chỉ đích 192.168.1.50 thuộc dải mạng nội bộ nhà mình (LAN). Chuyển thẳng tới Máy in trong phòng khách, không cho ra ngoài Internet!"'
                    : '🌐 Router phân tích: "Địa chỉ đích google.com (142.250.74.46) nằm ngoài mạng LAN nhà mình. Phải mở Cửa Ngõ (Default Gateway) đẩy gói tin ra xa lộ Internet toàn cầu!"',
                ),
                setTimeout(() => {
                  Fe("idle");
                }, 3500));
            }, 1500));
        },
        Kt = () => {
          Ye ? mt(!1) : (mt(!0), ye(0));
        };
      reactExports.useEffect(() => {
        let Ce;
        return (
          Ye &&
            (Ce = setInterval(() => {
              ye((st) =>
                st >= 100 ? (mt(!1), clearInterval(Ce), 100) : st + 10,
              );
            }, 400)),
          () => clearInterval(Ce)
        );
      }, [Ye]);
      const It = () => {
          H
            ? (me(!1), Me("Chưa có kết nối mạng"))
            : (me(!0),
              Le
                ? (Me("Đang xin cấp IP..."),
                  setTimeout(() => {
                    Me("192.168.1." + Math.floor(Math.random() * 250 + 10));
                  }, 1200))
                : Me(Je || "192.168.1.150"));
        },
        wt = (Ce) => {
          (Pe(Ce),
            H &&
              (Ce
                ? (Me("Đang xin cấp IP..."),
                  setTimeout(() => {
                    Me("192.168.1." + Math.floor(Math.random() * 250 + 10));
                  }, 1200))
                : Me(Je || "192.168.1.150")));
        },
        Ls = {
          1: {
            title: "THIẾT BỊ DSL (DIGITAL SUBSCRIBER LINE)",
            subtitle: "Đường Dây Điện Thoại DSL",
            url: "https://www.scaler.com/topics/images/digital-subscriber-line_thumbnail.webp",
          },
          2: {
            title: "BỘ ĐIỀU GIẢI MODEM INTERNET",
            subtitle: "Modem Cáp / DSL / Fiber",
            url: "https://e7.pngegg.com/pngimages/75/701/png-clipart-black-modem-router-wireless-router-wi-fi-modem-icons-miscellaneous-electronics-thumbnail.png",
          },
          3: {
            title: "CÁP MẠNG ETHERNET & ĐẦU CẮM RJ-45",
            subtitle: "Cáp Mạng Đồng Xoắn Đôi",
            url: "https://png.pngtree.com/png-clipart/20250128/original/pngtree-colorful-ethernet-cables-vibrant-network-connectors-rainbow-of-internet-cords-organized-png-image_20333680.png",
          },
          4: {
            title: "ROUTER BỘ ĐỊNH TUYẾN MẠNG WI-FI",
            subtitle: "Router Định Tuyến Dữ Liệu IP",
            url: "https://img.pikbest.com/png-images/20241118/-fiber-optical-gpon-epon-onu-modem-with-wifi-router_11104070.png!sw800",
          },
          5: {
            title: "CÁP TRUYỀN HÌNH / QUANG (CABLE SERVICE)",
            subtitle: "Cáp Đồng Trục & Cáp Quang",
            url: "https://p7.hiclipart.com/preview/550/453/187/optical-fiber-cable-electrical-cable-optics-others.jpg",
          },
          6: {
            title: "CARD MẠNG MÁY TÍNH (NETWORK ADAPTER / NIC)",
            subtitle: "Network Interface Card",
            url: "https://png.pngtree.com/png-clipart/20250221/original/pngtree-network-interface-card-png-image_20485575.png",
          },
        },
        Ot = (Ce) => {
          const st = Ls[Ce];
          return st
            ? jsxRuntimeExports.jsxs("div", {
                className:
                  "mt-4 p-4 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center justify-between border-b border-slate-800 pb-2.5",
                    children: [
                      jsxRuntimeExports.jsxs("span", {
                        className:
                          "text-xs sm:text-sm font-black text-cyan-400 font-mono uppercase tracking-wider flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsx(Image, {
                            className: "h-4 w-4",
                          }),
                          " 🖼️ ÀNH MINH HỌA THIẾT BỊ: ",
                          st.title,
                        ],
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-[10px] bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-full font-bold border border-cyan-500/20",
                        children: st.subtitle,
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 flex justify-center items-center min-h-[240px] overflow-hidden",
                    children: jsxRuntimeExports.jsx("img", {
                      src: st.url,
                      alt: st.title,
                      referrerPolicy: "no-referrer",
                      className:
                        "max-h-64 sm:max-h-80 w-auto max-w-full object-contain mx-auto rounded-2xl shadow-2xl bg-white/5 p-2 border border-slate-800 hover:scale-[1.02] transition-transform duration-300",
                    }),
                  }),
                ],
              })
            : null;
        };
      return jsxRuntimeExports.jsx("div", {
        id: "lab-10",
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
                      "inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-5 sm:px-5 py-1 text-sm sm:text-base font-bold text-indigo-700 dark:bg-slate-850 dark:text-indigo-300",
                    children: [
                      jsxRuntimeExports.jsx(BookOpen, {
                        className: "h-3.5 w-3.5",
                      }),
                      " Lab Thực Hành Số 10 (Hạ Tầng Kết Nối Mạng)",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h3", {
                    className:
                      "text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5 tracking-tight",
                    children: "Công Cụ & Thiết Bị Kết Nối Mạng IC3",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-medium mt-0.5",
                    children:
                      "Ghép nối 6 khái niệm thi quốc tế & Khám phá phòng thí nghiệm trực quan dễ hiểu.",
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
                      "flex flex-wrap gap-2 border-b border-slate-105 dark:border-slate-800 pb-4",
                    children: TERMS.map((Ce) =>
                      jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => O(Ce.id),
                          className: `flex items-center gap-2 px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-extrabold transition-all cursor-pointer ${A === Ce.id ? "bg-indigo-600 text-white shadow-md" : "bg-slate-50 hover:bg-slate-100 text-slate-650 dark:bg-slate-850 dark:hover:bg-slate-800 dark:text-slate-300"}`,
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className: "shrink-0",
                              children: Ce.icon,
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className: "truncate max-w-[140px] md:max-w-none",
                              children: Ce.name,
                            }),
                          ],
                        },
                        Ce.id,
                      ),
                    ),
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "lg:col-span-5 space-y-4",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            children: jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 font-semibold leading-relaxed space-y-2 bg-slate-50 dark:bg-slate-850 p-4 sm:p-5 rounded-3xl border border-slate-150 dark:border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  type: "button",
                                  onClick: () => le(!L),
                                  className:
                                    "w-full flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-extrabold cursor-pointer text-left gap-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        "💡 ",
                                        A === 1 &&
                                          "Bộ chia lọc Splitter là gì?",
                                        A === 2 &&
                                          "Tín hiệu Số (Digital) và Tương tự (Analog) là gì?",
                                        A === 3 &&
                                          "Mạng LAN dây và Cáp Ethernet kết nối thế nào?",
                                        A === 4 &&
                                          "Tại sao phải cần đến Router?",
                                        A === 5 &&
                                          "Xem Tivi bằng cáp đồng trục có làm chậm Internet không?",
                                        A === 6 &&
                                          "Địa chỉ MAC và Địa chỉ IP khác nhau thế nào?",
                                      ],
                                    }),
                                    L
                                      ? jsxRuntimeExports.jsx(ChevronDown, {
                                          className:
                                            "h-4 w-4 text-indigo-600 shrink-0",
                                        })
                                      : jsxRuntimeExports.jsx(ChevronRight, {
                                          className:
                                            "h-4 w-4 text-indigo-600 shrink-0",
                                        }),
                                  ],
                                }),
                                L &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "pt-2 border-t border-slate-200/60 dark:border-slate-800 space-y-2",
                                    children: [
                                      A === 1 &&
                                        jsxRuntimeExports.jsxs("p", {
                                          children: [
                                            "Đường dây đồng điện thoại bàn cũ có khoảng trống tần số rất lớn. Để lướt web và gọi điện thoại cùng lúc, ta phải sử dụng một thiết bị gọi là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Bộ chia Splitter (bộ lọc/chia tách tín hiệu)",
                                            }),
                                            '. Nó lọc riêng tần số giọng nói dưới 4 kHz và tần số Internet trên 25 kHz. Nhờ vậy, cuộc trò chuyện điện thoại trong trẻo, không bị dính những tiếng rè rú "BZZZ! REEE!" của dữ liệu mạng cao tần!',
                                          ],
                                        }),
                                      A === 2 &&
                                        jsxRuntimeExports.jsxs("ul", {
                                          className:
                                            "list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-semibold",
                                          children: [
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-slate-800 dark:text-slate-200",
                                                    children:
                                                      "Tín hiệu Số (Digital):",
                                                  },
                                                ),
                                                " Ngôn ngữ máy tính, chỉ gồm các số ",
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded text-blue-500",
                                                  children: "1",
                                                }),
                                                " (bật điện) và ",
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-mono bg-slate-200 dark:bg-slate-800 px-1 rounded text-red-500",
                                                  children: "0",
                                                }),
                                                " (tắt điện).",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-slate-800 dark:text-slate-200",
                                                    children:
                                                      "Tín hiệu Tương tự (Analog):",
                                                  },
                                                ),
                                                " Dạng sóng uốn lượn liên tục truyền qua dây đồng đi xa.",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Ví dụ nhắn tin Facebook:",
                                                  },
                                                ),
                                                ' Khi gõ "Hi" gửi bạn: Máy dịch chữ thành số ',
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-mono text-indigo-500",
                                                  children: "01001000 01101001",
                                                }),
                                                ' ➔ Modem điều chế thành SÓNG uốn lượn gửi đi ➔ Modem bạn nhận sóng, giải điều chế thành số ➔ Máy bạn dịch ngược về chữ "Hi" hiển thị!',
                                              ],
                                            }),
                                          ],
                                        }),
                                      A === 3 &&
                                        jsxRuntimeExports.jsxs("p", {
                                          children: [
                                            "Trong phòng tin học trường em, các máy tính không kết nối lộn xộn mà đều cắm dây cáp ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Ethernet (đầu RJ-45)",
                                            }),
                                            " dẫn về thiết bị trung tâm gọi là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "Switch (Bộ chuyển mạch mạng LAN)",
                                            }),
                                            ". Khi em gửi tệp cho bạn, gói tin chạy qua dây cáp ➔ tới Switch ➔ Switch đọc địa chỉ MAC ➔ đẩy chính xác qua dây cáp nối tới máy bạn.",
                                          ],
                                        }),
                                      A === 4 &&
                                        jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsxs("p", {
                                                children: [
                                                  "Router giống như một ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Bưu tá thông minh",
                                                    },
                                                  ),
                                                  " hay ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Chú cảnh sát giao thông",
                                                    },
                                                  ),
                                                  ". Khi máy tính của em gửi đi một bưu kiện dữ liệu, Router sẽ xem xét địa chỉ IP đích trên nhãn bưu kiện để quyết định:",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("ul", {
                                                className:
                                                  "list-disc pl-4 space-y-1 mt-1 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-semibold",
                                                children: [
                                                  jsxRuntimeExports.jsx("li", {
                                                    children:
                                                      "Nếu là địa chỉ mạng trong nhà (Mạng cục bộ LAN), Router chuyển thẳng sang máy chị hai, máy bố mẹ hay máy in trong nhà một cách nội bộ.",
                                                  }),
                                                  jsxRuntimeExports.jsx("li", {
                                                    children:
                                                      'Nếu là địa chỉ mạng ở cực kỳ xa ngoài thế giới (nhu google.com, facebook.com), Router sẽ mở "cổng chính" để chuyển bưu kiện đó ra ngoài đường truyền rộng lớn (mạng WAN) kết nối với Internet thế giới!',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                        ),
                                      A === 5 &&
                                        jsxRuntimeExports.jsxs("p", {
                                          children: [
                                            "Cáp đồng trục có vỏ bọc kim loại chống nhiễu dày dặn. Đường truyền này được coi như một ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children:
                                                "xa lộ lớn được phân chia thành nhiều làn đường độc lập",
                                            }),
                                            ". Các đài phát truyền hình HD và hoạt hình chạy ở một làn riêng biệt độc lập (tần số thấp), còn dữ liệu mạng Internet chạy trên các làn cao tốc riêng khác (tần số cao). Nhờ đi hai làn riêng biệt không chung đụng nên nhà em vừa xem hoạt hình HD, vừa tải game trên máy tính thoải mái cực kỳ mượt mà!",
                                          ],
                                        }),
                                      A === 6 &&
                                        jsxRuntimeExports.jsxs("ul", {
                                          className:
                                            "list-disc pl-4 space-y-1 text-slate-650 dark:text-slate-400 text-sm sm:text-base font-semibold",
                                          children: [
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-slate-800 dark:text-slate-200",
                                                    children:
                                                      "Địa chỉ MAC (Hộ chiếu phần cứng cố định):",
                                                  },
                                                ),
                                                " Giống như dấu vân tay của em, do nhà sản xuất đúc chết lên linh kiện Card Mạng (NIC), không bao giờ thay đổi và là duy nhất trên thế giới.",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("li", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    className:
                                                      "text-slate-800 dark:text-slate-200",
                                                    children:
                                                      "Địa chỉ IP (Số phòng khách sạn tạm thời):",
                                                  },
                                                ),
                                                " Chỉ được cấp khi máy tính của em kết nối mạng. Router sẽ tự động cấp một số IP để em sử dụng tạm thời. Khi em xách máy tính đến quán cafe hoặc trường học khác, em sẽ nhận được số IP mới tương ứng với phòng học đó.",
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-800 space-y-3.5",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold font-black text-indigo-600 dark:text-indigo-400 tracking-wider uppercase block",
                                children: "BẢNG TƯƠNG TÁC THỰC NGHIỆM:",
                              }),
                              A === 1 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-col bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 gap-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black block text-slate-700 dark:text-slate-300",
                                              children:
                                                "Bộ Lọc Lọc Trùng DSL Splitter (Bộ Chia):",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-450 block leading-tight mt-0.5",
                                              children:
                                                "(Phân chia dải sóng điện thoại < 4 kHz và dải sóng mạng Internet > 25 kHz tránh nhiễu âm rè)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => {
                                            (G(!P),
                                              se(
                                                "Đã " +
                                                  (P ? "THÁO GỠ" : "LẮP ĐẶT") +
                                                  " bộ chia tách lọc Splitter. Thử lướt web hoặc gọi điện thoại để nghe âm thanh!",
                                              ));
                                          },
                                          className: `w-full py-3 text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all ${P ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs" : "bg-rose-600 hover:bg-rose-700 text-white shadow-xs"}`,
                                          children: P
                                            ? "🟢 Đang Bật Splitter (Đã cách ly nhiễu)"
                                            : "🔴 Đang Tắt Splitter (Tín hiệu trộn lẫn!)",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "grid grid-cols-2 gap-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("button", {
                                          onClick: D,
                                          disabled: V,
                                          className:
                                            "flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-extrabold rounded-3xl cursor-pointer shadow-xs disabled:opacity-55",
                                          children: [
                                            jsxRuntimeExports.jsx(Globe, {
                                              className: "h-4 w-4",
                                            }),
                                            " 1. Máy tải Web",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          onClick: Mt,
                                          disabled: ee,
                                          className:
                                            "flex items-center justify-center gap-1.5 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-base font-extrabold rounded-3xl cursor-pointer shadow-xs disabled:opacity-55",
                                          children: [
                                            jsxRuntimeExports.jsx(Phone, {
                                              className: "h-4 w-4",
                                            }),
                                            " 2. Nhấc máy gọi điện",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              A === 2 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex rounded-3xl bg-slate-200 dark:bg-slate-800 p-1",
                                      children: [
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => {
                                            (_("facebook"),
                                              E === "idle" && v("idle"));
                                          },
                                          className: `flex-1 py-3 text-sm sm:text-base font-medium font-black rounded-md cursor-pointer transition-all ${de === "facebook" ? "bg-indigo-650 text-white shadow-sm" : "text-slate-500 dark:text-slate-450 hover:text-slate-850"}`,
                                          children: "💬 1. Nhắn tin Facebook",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: () => {
                                            (_("binary"),
                                              E === "idle" && v("idle"));
                                          },
                                          className: `flex-1 py-3 text-sm sm:text-base font-medium font-black rounded-md cursor-pointer transition-all ${de === "binary" ? "bg-indigo-650 text-white shadow-sm" : "text-slate-500 dark:text-slate-450 hover:text-slate-850"}`,
                                          children: "🔢 2. Tự nhập Nhị phân",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350 block",
                                          children: "Chế độ chạy quy trình:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-2 gap-2 bg-white dark:bg-slate-900 p-1 rounded-3xl border border-slate-150 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                E === "idle" && te("auto");
                                              },
                                              disabled: E !== "idle",
                                              className: `py-1 px-2 rounded-3xl text-[10.5px] font-black cursor-pointer transition-all flex items-center justify-center gap-1 ${K === "auto" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"}`,
                                              children: jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  children: "⏱️ Tự động (Chậm)",
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                E === "idle" && te("manual");
                                              },
                                              disabled: E !== "idle",
                                              className: `py-1 px-2 rounded-3xl text-[10.5px] font-black cursor-pointer transition-all flex items-center justify-center gap-1 ${K === "manual" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"}`,
                                              children: jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  children: "🎯 Bấm từng bước",
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    E !== "idle"
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-3 p-8 sm:p-5 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-3xl border border-indigo-150/40 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center justify-between",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black text-indigo-600 dark:text-indigo-400 uppercase",
                                                  children:
                                                    "TIẾN TRÌNH MINH HỌA:",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[9.5px] font-mono font-black px-1.5 py-0.5 bg-indigo-100 dark:bg-slate-850 text-indigo-700 dark:text-indigo-300 rounded-md",
                                                  children:
                                                    K === "manual"
                                                      ? "CHẾ ĐỘ SƯ PHẠM"
                                                      : "CHẾ ĐỘ TỰ ĐỘNG",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className: "space-y-1.5 py-1",
                                              children: [
                                                {
                                                  s: "translating",
                                                  label:
                                                    "1. Máy gửi chuyển sang nhị phân",
                                                },
                                                {
                                                  s: "modulating",
                                                  label:
                                                    "2. Modem gửi ĐIỀU CHẾ -> Sóng",
                                                },
                                                {
                                                  s: "transmitting",
                                                  label:
                                                    "3. Sóng Analog truyền trên cáp",
                                                },
                                                {
                                                  s: "demodulating",
                                                  label:
                                                    "4. Modem nhận GIẢI ĐIỀU CHẾ",
                                                },
                                                {
                                                  s: "completed",
                                                  label:
                                                    "5. Máy nhận giải mã thông tin gốc",
                                                },
                                              ].map((Ce, st) => {
                                                const At = E === Ce.s,
                                                  Lt =
                                                    Ce.s === "translating" ||
                                                    (Ce.s === "modulating" &&
                                                      E !== "translating") ||
                                                    (Ce.s === "transmitting" &&
                                                      E !== "translating" &&
                                                      E !== "modulating") ||
                                                    (Ce.s === "demodulating" &&
                                                      (E === "completed" ||
                                                        E ===
                                                          "demodulating")) ||
                                                    (Ce.s === "completed" &&
                                                      E === "completed");
                                                return jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 text-sm sm:text-base font-semibold",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className: `h-4.5 w-4.5 rounded-full flex items-center justify-center text-[9px] font-black ${At ? "bg-amber-500 text-white animate-pulse ring-2 ring-amber-300" : Lt ? "bg-emerald-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-400"}`,
                                                          children:
                                                            Lt && !At
                                                              ? "✓"
                                                              : st + 1,
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className: At
                                                            ? "text-slate-900 dark:text-white font-extrabold"
                                                            : "text-slate-450 dark:text-slate-500",
                                                          children: Ce.label,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  st,
                                                );
                                              }),
                                            }),
                                            K === "manual"
                                              ? jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: Ge,
                                                    className:
                                                      "w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer shadow-md animate-bounce flex items-center justify-center gap-1.5",
                                                    children:
                                                      E === "completed"
                                                        ? jsxRuntimeExports.jsx(
                                                            jsxRuntimeExports.Fragment,
                                                            {
                                                              children:
                                                                "KẾT THÚC QUY TRÌNH 🔄",
                                                            },
                                                          )
                                                        : jsxRuntimeExports.jsx(
                                                            jsxRuntimeExports.Fragment,
                                                            {
                                                              children:
                                                                "BƯỚC TIẾP THEO ➡️",
                                                            },
                                                          ),
                                                  },
                                                )
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-center py-3 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-bold block animate-pulse",
                                                        children:
                                                          "⏳ Đang tự động chuyển dời chậm rãi...",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8.5px] text-slate-400 dark:text-slate-500 block mt-0.5",
                                                        children:
                                                          "(Khoảng 3.5 giây mỗi bước để dễ giảng bài)",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                          ],
                                        })
                                      : jsxRuntimeExports.jsx(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children:
                                              de === "facebook"
                                                ? jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className: "space-y-2.5",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "space-y-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350",
                                                                  children:
                                                                    "Gõ tin nhắn gửi sang bạn của em:",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex gap-1",
                                                                  children:
                                                                    jsxRuntimeExports.jsx(
                                                                      "input",
                                                                      {
                                                                        type: "text",
                                                                        maxLength: 20,
                                                                        value:
                                                                          be,
                                                                        onChange:
                                                                          (
                                                                            Ce,
                                                                          ) =>
                                                                            he(
                                                                              Ce
                                                                                .target
                                                                                .value,
                                                                            ),
                                                                        placeholder:
                                                                          "Gõ chữ nhắn tin...",
                                                                        className:
                                                                          "flex-1 p-8 sm:p-5 border border-slate-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500",
                                                                      },
                                                                    ),
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-[9px] text-slate-400 block mt-0.5 font-medium",
                                                                  children:
                                                                    "*(Ví dụ: Hi, Chào, Vui, Đẹp, Ok)*",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "button",
                                                          {
                                                            onClick: Ve,
                                                            className:
                                                              "w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer shadow-md flex items-center justify-center gap-1.5",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                Send,
                                                                {
                                                                  className:
                                                                    "h-3.5 w-3.5",
                                                                },
                                                              ),
                                                              " ",
                                                              K === "manual"
                                                                ? "Bắt đầu từng bước 🚀"
                                                                : "Gửi tin qua Modem điều chế 🚀",
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className: "space-y-2.5",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "space-y-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "label",
                                                                {
                                                                  className:
                                                                    "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350",
                                                                  children:
                                                                    "Tự gõ chuỗi tín hiệu Số (Digital bits 0 và 1):",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "input",
                                                                {
                                                                  type: "text",
                                                                  maxLength: 8,
                                                                  value: U,
                                                                  onChange: (
                                                                    Ce,
                                                                  ) => {
                                                                    const st =
                                                                      Ce.target.value.replace(
                                                                        /[^01]/g,
                                                                        "",
                                                                      );
                                                                    Z(st);
                                                                  },
                                                                  placeholder:
                                                                    "Ví dụ: 10110101",
                                                                  className:
                                                                    "w-full p-8 sm:p-5 border border-slate-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium font-mono bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex flex-wrap gap-1 mt-1.5",
                                                                  children: [
                                                                    "1010",
                                                                    "0110",
                                                                    "11110000",
                                                                    "10010110",
                                                                  ].map((Ce) =>
                                                                    jsxRuntimeExports.jsx(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () => {
                                                                            (Z(
                                                                              Ce,
                                                                            ),
                                                                              ze(
                                                                                "",
                                                                              ),
                                                                              qe(
                                                                                [],
                                                                              ));
                                                                          },
                                                                        className: `px-2 py-1 text-sm sm:text-base font-semibold font-mono font-bold rounded-md border ${U === Ce ? "bg-amber-500 border-amber-500 text-white" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-350"}`,
                                                                        children:
                                                                          Ce,
                                                                      },
                                                                      Ce,
                                                                    ),
                                                                  ),
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "button",
                                                          {
                                                            onClick: Ve,
                                                            className:
                                                              "w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer shadow-md",
                                                            children:
                                                              K === "manual"
                                                                ? "⚡ Bắt đầu từng bước"
                                                                : "⚡ Bấm để Modem điều chế thành sóng Analog",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                          },
                                        ),
                                  ],
                                }),
                              A === 3 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3.5",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350 block",
                                              children:
                                                "Tên tập tin muốn trao đổi (Mạng LAN):",
                                            }),
                                            jsxRuntimeExports.jsx("input", {
                                              type: "text",
                                              maxLength: 30,
                                              value: C,
                                              onChange: (Ce) =>
                                                Ee(Ce.target.value),
                                              placeholder:
                                                "Ví dụ: tailieu_on_tap.pdf",
                                              className:
                                                "w-full p-8 sm:p-5 border border-slate-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-indigo-50/50 dark:bg-slate-900 rounded-3xl border border-indigo-100/30 text-sm sm:text-base font-semibold text-indigo-750 dark:text-indigo-300 leading-relaxed font-semibold",
                                          children: [
                                            "💡 ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "font-bold text-indigo-900 dark:text-indigo-200",
                                              children: "Mẹo tương tác nhanh:",
                                            }),
                                            " Em có thể click trực tiếp vào các máy tính ở sơ đồ bên phải để chọn Thiết bị Gửi (Nguồn) và Thiết bị Nhận (Đích)!",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350 block",
                                              children:
                                                "Bước 1: Chọn thiết bị GỬI (Nguồn):",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "grid grid-cols-2 gap-1.5",
                                              children: [
                                                {
                                                  id: "pc1",
                                                  label: "💻 Máy 1 (Của em)",
                                                },
                                                {
                                                  id: "pc2",
                                                  label: "💻 Máy 2 (Bạn Nam)",
                                                },
                                                {
                                                  id: "teacher",
                                                  label: "👨‍🏫 Máy Giáo Viên",
                                                },
                                                {
                                                  id: "printer",
                                                  label: "🖨️ Máy In LAN",
                                                },
                                              ].map((Ce) =>
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => Ae(Ce.id),
                                                    className: `p-1.5 rounded-3xl text-left border text-[10.5px] font-bold cursor-pointer transition-all ${ae === Ce.id ? "border-rose-400 bg-rose-50/15 text-rose-800 dark:text-rose-300" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`,
                                                    children: Ce.label,
                                                  },
                                                  Ce.id,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350 block",
                                              children:
                                                "Bước 2: Chọn thiết bị NHẬN (Đích):",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "grid grid-cols-2 gap-1.5",
                                              children: [
                                                {
                                                  id: "pc1",
                                                  label: "💻 Máy 1 (Của em)",
                                                },
                                                {
                                                  id: "pc2",
                                                  label: "💻 Máy 2 (Bạn Nam)",
                                                },
                                                {
                                                  id: "teacher",
                                                  label: "👨‍🏫 Máy Giáo Viên",
                                                },
                                                {
                                                  id: "printer",
                                                  label: "🖨️ Máy In LAN",
                                                },
                                              ].map((Ce) =>
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => Te(Ce.id),
                                                    className: `p-1.5 rounded-3xl text-left border text-[10.5px] font-bold cursor-pointer transition-all ${Q === Ce.id ? "border-indigo-400 bg-indigo-50/15 text-indigo-800 dark:text-indigo-300" : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`,
                                                    children: Ce.label,
                                                  },
                                                  Ce.id,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: Ze,
                                      disabled: $e,
                                      className:
                                        "w-full py-3 bg-indigo-650 hover:bg-indigo-750 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer shadow-md disabled:opacity-50",
                                      children: $e
                                        ? "🚀 Cáp mạng đồng xoắn đang dẫn truyền..."
                                        : "📡 Bấm truyền dữ liệu ngay (Mạng LAN)",
                                    }),
                                  ],
                                }),
                              A === 4 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                          children:
                                            "Em muốn bưu kiện thư IP này được gửi đến đâu?",
                                        }),
                                        jsxRuntimeExports.jsxs("select", {
                                          value: We,
                                          onChange: (Ce) => ht(Ce.target.value),
                                          className:
                                            "w-full p-8 sm:p-5 text-sm sm:text-base font-extrabold border rounded-3xl bg-white dark:bg-slate-900 focus:ring-1 focus:ring-indigo-500",
                                          children: [
                                            jsxRuntimeExports.jsx("option", {
                                              value: "dad_printer",
                                              children:
                                                "🖨️ Máy in ở phòng khách (Mạng Trong Nhà - 192.168.1.50)",
                                            }),
                                            jsxRuntimeExports.jsx("option", {
                                              value: "google_search",
                                              children:
                                                "🌐 Gõ tìm kiếm thông tin trên Google (Mạng Internet - google.com)",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: Nt,
                                      disabled: lt !== "idle",
                                      className:
                                        "w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer shadow-md disabled:opacity-50",
                                      children:
                                        lt === "idle"
                                          ? "✉️ Gửi bưu kiện qua Router"
                                          : "🕵️ Router đang phân tích bưu kiện...",
                                    }),
                                  ],
                                }),
                              A === 5 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                          children: "Chọn kênh Tivi đang phát:",
                                        }),
                                        jsxRuntimeExports.jsxs("select", {
                                          value: xt,
                                          onChange: (Ce) => ve(Ce.target.value),
                                          className:
                                            "w-full p-8 sm:p-5 text-sm sm:text-base font-bold border rounded-3xl bg-white dark:bg-slate-900 focus:ring-1 focus:ring-indigo-500",
                                          children: [
                                            jsxRuntimeExports.jsx("option", {
                                              value: "Doraemon HD (CH 9)",
                                              children:
                                                "Cartoon: Doraemon (Kênh CH 9 • 150 MHz)",
                                            }),
                                            jsxRuntimeExports.jsx("option", {
                                              value: "Disney Channel (CH 14)",
                                              children:
                                                "Phim hoạt hình Disney (Kênh CH 14 • 180 MHz)",
                                            }),
                                            jsxRuntimeExports.jsx("option", {
                                              value: "Sport HD (CH 25)",
                                              children:
                                                "Thể thao trực tiếp (Kênh CH 25 • 220 MHz)",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "pt-2",
                                      children: jsxRuntimeExports.jsx(
                                        "button",
                                        {
                                          onClick: Kt,
                                          className: `w-full py-3 text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all ${Ye ? "bg-rose-650 text-white shadow-xs" : "bg-emerald-600 text-white shadow-md"}`,
                                          children: Ye
                                            ? "🛑 Dừng tải game"
                                            : "⬇️ Bấm tải game nặng (Mạng dữ liệu 700 MHz)",
                                        },
                                      ),
                                    }),
                                  ],
                                }),
                              A === 6 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black block text-slate-700 dark:text-slate-300",
                                              children: "Dây Cáp Mạng RJ-45:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-450",
                                              children: "Cắm hoặc rút dây mạng",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          onClick: It,
                                          className: `px-5 sm:px-5 py-3 text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all ${H ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"}`,
                                          children: H
                                            ? "Đã Cắm Dây"
                                            : "Chưa Cắm Dây",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("label", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                          children: "Cơ chế nhận IP của Card:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "grid grid-cols-2 gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => wt(!0),
                                              className: `py-3 rounded-3xl text-sm sm:text-base font-medium font-black cursor-pointer transition-all ${Le ? "bg-indigo-600 text-white shadow-xs" : "bg-white border text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                                              children: "Tự động (DHCP)",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => wt(!1),
                                              className: `py-3 rounded-3xl text-sm sm:text-base font-medium font-black cursor-pointer transition-all ${Le ? "bg-white border text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300" : "bg-indigo-600 text-white shadow-xs"}`,
                                              children: "Đặt IP tĩnh (Static)",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    !Le &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "space-y-1.5 pt-1.5 animate-fadeIn",
                                        children: [
                                          jsxRuntimeExports.jsx("label", {
                                            className:
                                              "text-sm sm:text-base font-bold text-slate-650 dark:text-slate-350 block",
                                            children:
                                              "Gõ địa chỉ IP tĩnh bạn muốn đặt:",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            value: Je,
                                            onChange: (Ce) => {
                                              const st = Ce.target.value;
                                              (Et(st),
                                                H && Me(st || "Chưa đặt IP"));
                                            },
                                            placeholder: "Ví dụ: 192.168.1.150",
                                            className:
                                              "w-full p-8 sm:p-5 border border-slate-200 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium font-mono bg-white dark:bg-slate-900 text-slate-800 dark:text-white font-bold focus:outline-hidden focus:ring-1 focus:ring-indigo-500",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9.5px] text-slate-400 block mt-0.5 leading-tight",
                                            children:
                                              "*(Card mạng sẽ ghi nhớ địa chỉ IP tĩnh này thay vì xin cấp tự động)*",
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
                        className: "lg:col-span-7",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-sm sm:text-base font-medium font-black text-slate-400 uppercase tracking-wider block mb-3",
                            children: "Bảng Trực Quan Sinh Động 🖥️",
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "rounded-3xl bg-slate-950 border border-slate-850 p-5 sm:p-6 min-h-[340px] flex flex-col justify-between text-slate-100 shadow-xl transition-all",
                            children: [
                              A === 1 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-cyan-400 font-black",
                                          children:
                                            "MÔ PHỎNG ĐƯỜNG DÂY DSL TẬN NHÀ",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Phone, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Công nghệ DSL",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "relative py-3 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 rounded-3xl h-[170px] overflow-hidden flex flex-col justify-around",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "absolute top-2 right-2 flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `h-2 w-2 rounded-full ${P ? "bg-emerald-500 animate-ping" : "bg-rose-500"}`,
                                            }),
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "text-xs font-bold text-slate-700 dark:text-slate-200",
                                              children: [
                                                "Splitter: ",
                                                P
                                                  ? "ĐANG BẬT (Đã Lọc)"
                                                  : "ĐANG TẮT (Nhiễu rác)",
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "relative flex items-center px-5 sm:px-6 h-[45px] border-b border-slate-200 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 z-10",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "p-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      Phone,
                                                      {
                                                        className: `h-4 w-4 ${ee ? "animate-bounce" : ""}`,
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold block text-rose-600 dark:text-rose-400",
                                                        children:
                                                          "Điện thoại bàn (Ống nghe)",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] text-slate-500 dark:text-slate-400 font-mono font-semibold",
                                                        children:
                                                          "Dải tần thấp < 4 kHz",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "flex-1 ml-6 h-full flex items-center justify-end",
                                              children: ee
                                                ? jsxRuntimeExports.jsxs(
                                                    "svg",
                                                    {
                                                      className: "w-full h-8",
                                                      viewBox: "0 0 200 40",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "path",
                                                          {
                                                            d: "M 0 20 Q 25 10 50 20 T 100 20 T 150 20 T 200 20",
                                                            fill: "none",
                                                            stroke: P
                                                              ? "#f43f5e"
                                                              : "#e11d48",
                                                            strokeWidth: "2",
                                                            className:
                                                              "animate-pulse",
                                                          },
                                                        ),
                                                        !P &&
                                                          jsxRuntimeExports.jsx(
                                                            "path",
                                                            {
                                                              d: "M 0 15 L 20 25 L 40 10 L 60 30 L 80 5 L 100 25 L 120 10 L 140 30 L 160 5 L 180 25",
                                                              fill: "none",
                                                              stroke: "#ef4444",
                                                              strokeWidth:
                                                                "1.5",
                                                              className:
                                                                "animate-bounce",
                                                            },
                                                          ),
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "h-[1px] bg-slate-300 dark:bg-slate-800 w-full",
                                                  }),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "relative flex items-center px-5 sm:px-6 h-[45px]",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 z-10",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "p-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      Laptop,
                                                      {
                                                        className: `h-4 w-4 ${V ? "animate-pulse" : ""}`,
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-bold block text-blue-600 dark:text-blue-400",
                                                        children:
                                                          "Máy tính lướt Web",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[10px] text-slate-500 dark:text-slate-400 font-mono font-semibold",
                                                        children:
                                                          "Dải tần cao > 25 kHz",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "flex-1 ml-6 h-full flex items-center justify-end",
                                              children: V
                                                ? jsxRuntimeExports.jsx("svg", {
                                                    className: "w-full h-8",
                                                    viewBox: "0 0 200 40",
                                                    children:
                                                      jsxRuntimeExports.jsx(
                                                        "path",
                                                        {
                                                          d: `M 0 20 ${Array.from(
                                                            { length: 15 },
                                                          )
                                                            .map(
                                                              (Ce, st) =>
                                                                `Q ${st * 13 + 6} ${st % 2 === 0 ? 10 : 30} ${(st + 1) * 13} 20`,
                                                            )
                                                            .join(" ")}`,
                                                          fill: "none",
                                                          stroke: P
                                                            ? "#38bdf8"
                                                            : "#94a3b8",
                                                          strokeWidth: "1.5",
                                                          className:
                                                            "animate-pulse",
                                                        },
                                                      ),
                                                  })
                                                : jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "h-[1px] bg-slate-300 dark:bg-slate-800 w-full",
                                                  }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "bg-slate-100 dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 text-left min-h-[50px] flex items-center",
                                      children: jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-bold font-mono text-slate-700 dark:text-slate-200 leading-relaxed",
                                        children: Ie,
                                      }),
                                    }),
                                  ],
                                }),
                              A === 2 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-bold font-mono text-amber-600 dark:text-amber-400",
                                          children:
                                            "QUY TRÌNH CHUYỂN DỊCH TÍN HIỆU ĐẦU-CUỐI",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Radio, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Modem thiết bị dịch",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-5 gap-2 items-stretch py-3 px-1 rounded-3xl relative",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-3 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition-all text-center ${E === "translating" ? "bg-blue-100 dark:bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10" : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-black text-blue-600 dark:text-blue-400 uppercase",
                                              children: "1. Máy gửi",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "my-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",
                                              children: jsxRuntimeExports.jsx(
                                                Laptop,
                                                {
                                                  className: `h-5 w-5 mx-auto ${E === "translating" ? "text-blue-500 animate-pulse" : "text-slate-400"}`,
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-0.5",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-[9px] font-bold block text-slate-800 dark:text-slate-200 truncate max-w-full",
                                                  children: [
                                                    'Gõ: "',
                                                    de === "facebook"
                                                      ? be || "Hi"
                                                      : "SỐ",
                                                    '"',
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7.5px] font-mono font-medium block text-slate-500 break-all leading-none",
                                                  children:
                                                    E !== "idle"
                                                      ? U.slice(0, 8) + "..."
                                                      : "Chờ...",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-3 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition-all text-center ${E === "modulating" ? "bg-amber-100 dark:bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/10" : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-black text-amber-600 dark:text-amber-400 uppercase",
                                              children: "2. Modem gửi",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "my-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",
                                              children: jsxRuntimeExports.jsx(
                                                Radio,
                                                {
                                                  className: `h-5 w-5 mx-auto ${E === "modulating" ? "text-amber-500 animate-spin" : "text-slate-400"}`,
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-0.5",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] font-black text-amber-600 dark:text-amber-300 block",
                                                  children: "ĐIỀU CHẾ",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7px] text-slate-500 dark:text-slate-450 block font-semibold leading-none",
                                                  children: "Số ➔ Sóng",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-3 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition-all text-center ${E === "transmitting" ? "bg-emerald-100 dark:bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10" : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-black text-emerald-600 dark:text-emerald-400 uppercase",
                                              children: "3. Dây cáp",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "my-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",
                                              children: jsxRuntimeExports.jsx(
                                                Activity,
                                                {
                                                  className: `h-5 w-5 mx-auto ${E === "transmitting" ? "text-emerald-400 animate-pulse" : "text-slate-400"}`,
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-0.5",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] font-black text-emerald-600 dark:text-emerald-300 block",
                                                  children: "SÓNG (ANALOG)",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7px] text-slate-500 dark:text-slate-450 block font-semibold leading-none",
                                                  children: "Chạy dọc cáp đồng",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-3 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition-all text-center ${E === "demodulating" ? "bg-purple-100 dark:bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-500/10" : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-black text-purple-600 dark:text-purple-400 uppercase",
                                              children: "4. Modem nhận",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "my-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",
                                              children: jsxRuntimeExports.jsx(
                                                Radio,
                                                {
                                                  className: `h-5 w-5 mx-auto ${E === "demodulating" ? "text-purple-500 animate-spin" : "text-slate-400"}`,
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-0.5",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] font-black text-purple-600 dark:text-purple-300 block",
                                                  children: "GIẢI ĐIỀU CHẾ",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7px] text-slate-500 dark:text-slate-450 block font-semibold leading-none",
                                                  children: "Sóng ➔ Số",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: `p-3 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition-all text-center ${E === "completed" ? "bg-pink-100 dark:bg-pink-950/40 border-pink-500 shadow-lg shadow-pink-500/10" : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-850"}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-black text-pink-600 dark:text-pink-400 uppercase",
                                              children: "5. Máy nhận",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "my-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800",
                                              children: jsxRuntimeExports.jsx(
                                                Laptop,
                                                {
                                                  className: `h-5 w-5 mx-auto ${E === "completed" ? "text-pink-400 animate-bounce" : "text-slate-400"}`,
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-0.5",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-[9px] font-bold block text-slate-800 dark:text-slate-200 truncate max-w-full",
                                                  children: [
                                                    'Nhận: "',
                                                    E === "completed"
                                                      ? de === "facebook"
                                                        ? De || "Hi"
                                                        : "SỐ"
                                                      : "---",
                                                    '"',
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7.5px] font-mono font-medium block text-slate-500 break-all leading-none",
                                                  children:
                                                    E === "completed"
                                                      ? at.slice(0, 8) + "..."
                                                      : "...",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "relative border border-slate-800 min-h-[90px] keep-dark bg-slate-950 text-white rounded-3xl overflow-hidden flex items-center justify-center p-3",
                                      children:
                                        Qe.length > 0
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "w-full h-full flex flex-col justify-between p-1",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-xs text-amber-300 font-mono font-bold",
                                                        children:
                                                          "📡 ĐƯỜNG TRUYỀN SÓNG ĐIỆN TỬ TRÊN ĐƯỜNG DÂY (TÍN HIỆU ANALOG)",
                                                      },
                                                    ),
                                                    E === "transmitting" &&
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-black animate-pulse uppercase",
                                                          children:
                                                            "ĐANG TRUYỀN DẪN SÓNG...",
                                                        },
                                                      ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("svg", {
                                                  className: "w-full h-[60px]",
                                                  viewBox: "0 0 300 60",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "path",
                                                      {
                                                        d: `M 0 30 ${Qe.map(
                                                          (Ce, st) => {
                                                            const At =
                                                              300 / Qe.length;
                                                            return `L ${st * At} ${30 + Ce * 22}`;
                                                          },
                                                        ).join(" ")}`,
                                                        fill: "none",
                                                        stroke:
                                                          E === "transmitting"
                                                            ? "#10b981"
                                                            : "#f59e0b",
                                                        strokeWidth: "2.5",
                                                      },
                                                    ),
                                                }),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "text-center space-y-1 py-2",
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm font-black text-amber-300",
                                                  children:
                                                    'Hãy nhấp "Dịch tín hiệu" để khởi chạy quy trình!',
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-xs text-slate-200 font-semibold",
                                                  children:
                                                    "Tín hiệu uốn lượn uốn lượn chính là dạng sóng điện vật lý Analog được truyền dọc dây cáp.",
                                                }),
                                              ],
                                            }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-100 dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-amber-600 dark:text-amber-400 font-black block font-mono uppercase",
                                          children: "NHẬT KÝ KIỂM TRA MODEM:",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-bold font-mono text-slate-800 dark:text-slate-200 leading-relaxed mt-0.5",
                                          children: ie,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              A === 3 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-rose-400 font-black",
                                          children:
                                            "SƠ ĐỒ PHÒNG TIN HỌC TRƯỜNG EM (MẠNG LAN)",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Cable, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Dây Cáp Ethernet",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "relative bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-900/60 rounded-3xl min-h-[370px] overflow-hidden p-4 sm:p-6",
                                      children: [
                                        jsxRuntimeExports.jsxs("svg", {
                                          className:
                                            "absolute inset-0 w-full h-full pointer-events-none z-0",
                                          children: [
                                            jsxRuntimeExports.jsx("line", {
                                              x1: "20%",
                                              y1: "26%",
                                              x2: "50%",
                                              y2: "50%",
                                              stroke:
                                                $e &&
                                                ae === "pc1" &&
                                                ot === "to_switch"
                                                  ? "#f43f5e"
                                                  : $e &&
                                                      Q === "pc1" &&
                                                      ot === "to_dest"
                                                    ? "#10b981"
                                                    : "#cbd5e1",
                                              strokeWidth:
                                                $e &&
                                                (ae === "pc1" || Q === "pc1")
                                                  ? "3.5"
                                                  : "2",
                                              className:
                                                $e &&
                                                (ae === "pc1" || Q === "pc1")
                                                  ? "animate-pulse"
                                                  : "",
                                            }),
                                            jsxRuntimeExports.jsx("line", {
                                              x1: "80%",
                                              y1: "26%",
                                              x2: "50%",
                                              y2: "50%",
                                              stroke:
                                                $e &&
                                                ae === "pc2" &&
                                                ot === "to_switch"
                                                  ? "#f43f5e"
                                                  : $e &&
                                                      Q === "pc2" &&
                                                      ot === "to_dest"
                                                    ? "#10b981"
                                                    : "#cbd5e1",
                                              strokeWidth:
                                                $e &&
                                                (ae === "pc2" || Q === "pc2")
                                                  ? "3.5"
                                                  : "2",
                                              className:
                                                $e &&
                                                (ae === "pc2" || Q === "pc2")
                                                  ? "animate-pulse"
                                                  : "",
                                            }),
                                            jsxRuntimeExports.jsx("line", {
                                              x1: "20%",
                                              y1: "74%",
                                              x2: "50%",
                                              y2: "50%",
                                              stroke:
                                                $e &&
                                                ae === "teacher" &&
                                                ot === "to_switch"
                                                  ? "#f43f5e"
                                                  : $e &&
                                                      Q === "teacher" &&
                                                      ot === "to_dest"
                                                    ? "#10b981"
                                                    : "#cbd5e1",
                                              strokeWidth:
                                                $e &&
                                                (ae === "teacher" ||
                                                  Q === "teacher")
                                                  ? "3.5"
                                                  : "2",
                                              className:
                                                $e &&
                                                (ae === "teacher" ||
                                                  Q === "teacher")
                                                  ? "animate-pulse"
                                                  : "",
                                            }),
                                            jsxRuntimeExports.jsx("line", {
                                              x1: "80%",
                                              y1: "74%",
                                              x2: "50%",
                                              y2: "50%",
                                              stroke:
                                                $e &&
                                                ae === "printer" &&
                                                ot === "to_switch"
                                                  ? "#f43f5e"
                                                  : $e &&
                                                      Q === "printer" &&
                                                      ot === "to_dest"
                                                    ? "#10b981"
                                                    : "#cbd5e1",
                                              strokeWidth:
                                                $e &&
                                                (ae === "printer" ||
                                                  Q === "printer")
                                                  ? "3.5"
                                                  : "2",
                                              className:
                                                $e &&
                                                (ae === "printer" ||
                                                  Q === "printer")
                                                  ? "animate-pulse"
                                                  : "",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          disabled: $e,
                                          onClick: () => {
                                            ae === "pc1" ||
                                              (Q === "pc1"
                                                ? Te("pc2")
                                                : Ae("pc1"));
                                          },
                                          style: { left: "20%", top: "26%" },
                                          className: `no-override absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-2xl border text-center transition-all z-10 w-28 sm:w-32 cursor-pointer flex flex-col items-center justify-center ${ae === "pc1" ? "bg-rose-100 dark:bg-rose-950/60 border-rose-500 shadow-lg shadow-rose-500/20 ring-1 ring-rose-400" : Q === "pc1" ? "bg-indigo-100 dark:bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Laptop, {
                                              className: `h-4 w-4 mx-auto mb-0.5 ${ae === "pc1" ? "text-rose-500 animate-pulse" : Q === "pc1" ? "text-indigo-500" : "text-slate-400"}`,
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[10px] font-black text-slate-800 dark:text-slate-200 truncate w-full",
                                              children: "Máy 1 (Của em)",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[8px] font-mono text-slate-500 leading-tight mt-0.5",
                                              children: "IP: 192.168.1.101",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-mono text-slate-450 leading-tight",
                                              children:
                                                "MAC: 54-A0-50-8F-11-22",
                                            }),
                                            ae === "pc1" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-rose-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "NGUỒN",
                                              }),
                                            Q === "pc1" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "ĐÍCH",
                                              }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          disabled: $e,
                                          onClick: () => {
                                            ae === "pc2" || Te("pc2");
                                          },
                                          style: { left: "80%", top: "26%" },
                                          className: `no-override absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-2xl border text-center transition-all z-10 w-28 sm:w-32 cursor-pointer flex flex-col items-center justify-center ${ae === "pc2" ? "bg-rose-100 dark:bg-rose-950/60 border-rose-500 shadow-lg shadow-rose-500/20 ring-1 ring-rose-400" : Q === "pc2" ? "bg-indigo-100 dark:bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Laptop, {
                                              className: `h-4 w-4 mx-auto mb-0.5 ${ae === "pc2" ? "text-rose-500" : Q === "pc2" ? "text-indigo-500" : "text-slate-400"}`,
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[10px] font-black text-slate-800 dark:text-slate-200 truncate w-full",
                                              children: "Máy 2 (Nam)",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[8px] font-mono text-slate-500 leading-tight mt-0.5",
                                              children: "IP: 192.168.1.102",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-mono text-slate-450 leading-tight",
                                              children:
                                                "MAC: 54-A0-50-8F-33-44",
                                            }),
                                            ae === "pc2" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-rose-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "NGUỒN",
                                              }),
                                            Q === "pc2" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "ĐÍCH",
                                              }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          style: { left: "50%", top: "50%" },
                                          className: `absolute -translate-x-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center z-15 w-32 sm:w-36 shadow-2xl transition-all ${ot === "switching" ? "border-yellow-500 shadow-yellow-500/20" : ""}`,
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[8.5px] font-black text-amber-500 dark:text-amber-400 uppercase tracking-wider",
                                              children: "Switch Trung Tâm",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "flex gap-1 justify-center my-1 bg-black/80 py-0.5 px-1 rounded-sm border border-slate-800",
                                              children: [
                                                1, 2, 3, 4, 5, 6, 7, 8,
                                              ].map((Ce) =>
                                                jsxRuntimeExports.jsx(
                                                  "span",
                                                  {
                                                    className: `w-1 h-1 rounded-full ${ot === "switching" ? "bg-amber-400 animate-ping" : $e ? "bg-emerald-400 animate-pulse" : "bg-emerald-600"}`,
                                                  },
                                                  Ce,
                                                ),
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-mono text-slate-500 leading-none",
                                              children:
                                                "Thiết bị chia mạng LAN",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          disabled: $e,
                                          onClick: () => {
                                            ae === "teacher" || Te("teacher");
                                          },
                                          style: { left: "20%", top: "74%" },
                                          className: `no-override absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-2xl border text-center transition-all z-10 w-28 sm:w-32 cursor-pointer flex flex-col items-center justify-center ${ae === "teacher" ? "bg-rose-100 dark:bg-rose-950/60 border-rose-500 shadow-lg shadow-rose-500/20 ring-1 ring-rose-400" : Q === "teacher" ? "bg-indigo-100 dark:bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Laptop, {
                                              className: `h-4 w-4 mx-auto mb-0.5 ${ae === "teacher" ? "text-rose-500 animate-pulse" : Q === "teacher" ? "text-indigo-500" : "text-slate-400"}`,
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[10px] font-black text-slate-800 dark:text-slate-200 truncate w-full",
                                              children: "Máy Giáo Viên",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[8px] font-mono text-slate-500 leading-tight mt-0.5",
                                              children: "IP: 192.168.1.200",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-mono text-slate-450 leading-tight",
                                              children:
                                                "MAC: 54-A0-50-8F-FF-FF",
                                            }),
                                            ae === "teacher" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-rose-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "NGUỒN",
                                              }),
                                            Q === "teacher" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "ĐÍCH",
                                              }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          disabled: $e,
                                          onClick: () => {
                                            ae === "printer" || Te("printer");
                                          },
                                          style: { left: "80%", top: "74%" },
                                          className: `no-override absolute -translate-x-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-2xl border text-center transition-all z-10 w-28 sm:w-32 cursor-pointer flex flex-col items-center justify-center ${ae === "printer" ? "bg-rose-100 dark:bg-rose-950/60 border-rose-500 shadow-lg shadow-rose-500/20 ring-1 ring-rose-400" : Q === "printer" ? "bg-indigo-100 dark:bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Printer, {
                                              className: `h-4 w-4 mx-auto mb-0.5 ${ae === "printer" ? "text-rose-500" : Q === "printer" ? "text-indigo-500" : "text-slate-400"}`,
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[10px] font-black text-slate-800 dark:text-slate-200 truncate w-full",
                                              children: "Máy In LAN",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[8px] font-mono text-slate-500 leading-tight mt-0.5",
                                              children: "IP: 192.168.1.250",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "text-[7.5px] font-mono text-slate-450 leading-tight",
                                              children:
                                                "MAC: 54-A0-50-8F-BB-CC",
                                            }),
                                            ae === "printer" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-rose-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "NGUỒN",
                                              }),
                                            Q === "printer" &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white keep-light font-mono text-[7px] font-black rounded-md shadow-md z-20",
                                                children: "ĐÍCH",
                                              }),
                                          ],
                                        }),
                                        $e &&
                                          ot === "to_switch" &&
                                          jsxRuntimeExports.jsxs(motion.div, {
                                            initial: {
                                              left: ke[ae].x,
                                              top: ke[ae].y,
                                            },
                                            animate: {
                                              left: "50%",
                                              top: "50%",
                                            },
                                            transition: {
                                              duration: 1.4,
                                              ease: "easeInOut",
                                            },
                                            className:
                                              "absolute -translate-x-1/2 -translate-y-1/2 z-30 p-1 bg-rose-500 rounded-3xl shadow-xl text-white text-[8px] flex items-center gap-1 font-bold whitespace-nowrap",
                                            children: [
                                              jsxRuntimeExports.jsx(Zap, {
                                                className:
                                                  "h-2.5 w-2.5 animate-pulse text-yellow-300",
                                              }),
                                              " ",
                                              C,
                                            ],
                                          }),
                                        $e &&
                                          ot === "to_dest" &&
                                          jsxRuntimeExports.jsxs(motion.div, {
                                            initial: {
                                              left: "50%",
                                              top: "50%",
                                            },
                                            animate: {
                                              left: ke[Q].x,
                                              top: ke[Q].y,
                                            },
                                            transition: {
                                              duration: 1.4,
                                              ease: "easeInOut",
                                            },
                                            className:
                                              "absolute -translate-x-1/2 -translate-y-1/2 z-30 p-1 bg-emerald-500 rounded-3xl shadow-xl text-white text-[8px] flex items-center gap-1 font-bold whitespace-nowrap",
                                            children: [
                                              jsxRuntimeExports.jsx(Check, {
                                                className: "h-2.5 w-2.5",
                                              }),
                                              " ",
                                              C,
                                            ],
                                          }),
                                        ot === "delivered" &&
                                          jsxRuntimeExports.jsx("div", {
                                            style: {
                                              left: ke[Q].x,
                                              top: ke[Q].y,
                                            },
                                            className:
                                              "absolute -translate-x-1/2 -translate-y-1/2 -mt-12 z-40 bg-emerald-500 text-white font-black text-[9px] py-1 px-2 rounded-full shadow-lg border border-emerald-400 flex items-center gap-1 animate-bounce",
                                            children: jsxRuntimeExports.jsx(
                                              "span",
                                              {
                                                children: "✓ Nhận thành công!",
                                              },
                                            ),
                                          }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-850 text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[8.5px] text-rose-400 block font-mono uppercase",
                                          children:
                                            "Trạng thái truyền Ethernet LAN:",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-slate-350 mt-0.5 leading-relaxed",
                                          children: Ue,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              A === 4 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-purple-400 font-black",
                                          children:
                                            "MẠNG LAN TRONG NHÀ & MẠNG INTERNET NGOÀI",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Network, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Router Cảnh Sát Giao Thông",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-12 gap-2 items-center py-3 relative",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "col-span-4 p-3.5 sm:p-4 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-850 rounded-3xl text-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] text-blue-600 dark:text-blue-400 font-black block",
                                              children: "🏠 TRONG NHÀ (LAN)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-mono font-bold text-slate-800 dark:text-slate-200 mt-1 block",
                                              children: "192.168.1.x",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] text-slate-500 dark:text-slate-400 block font-semibold",
                                              children: "Điện thoại / Máy in",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "col-span-4 flex flex-col items-center justify-center",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: `relative px-4 py-2.5 rounded-2xl bg-slate-900 border-2 transition-all flex flex-col items-center shadow-xl ${lt === "scanning" ? "border-amber-400 shadow-amber-500/20" : lt === "forwarding" ? "border-emerald-500 shadow-emerald-500/20" : "border-indigo-500/50 shadow-indigo-500/10"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute -top-3 inset-x-3 flex justify-between",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-1 h-3.5 bg-slate-600 rounded-t-full transform -rotate-12",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-1 h-3.5 bg-slate-600 rounded-t-full transform rotate-12",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1.5 mt-0.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Network,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-indigo-400",
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
                                                                "text-[9.5px] font-black text-white block leading-none",
                                                              children:
                                                                "THIẾT BỊ ROUTER",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[7.5px] font-mono text-emerald-400 block mt-0.5",
                                                              children:
                                                                "Wi-Fi 6 & NAT Router",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1 mt-1.5 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "w-1 h-1 rounded-full bg-emerald-400 animate-pulse",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "w-1 h-1 rounded-full bg-blue-400",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `w-1 h-1 rounded-full ${lt !== "idle" ? "bg-amber-400 animate-ping" : "bg-slate-700"}`,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "w-1 h-1 rounded-full bg-emerald-400",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8.5px] font-mono font-black mt-1.5 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider",
                                              children: "ROUTER ĐỊNH TUYẾN",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "col-span-4 p-3.5 sm:p-4 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-850 rounded-3xl text-center",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] text-purple-600 dark:text-purple-400 font-black block",
                                              children:
                                                "🌐 NGOÀI THẾ GIỚI (WAN)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-mono font-bold text-slate-800 dark:text-slate-200 mt-1 block",
                                              children: "Khắp Internet",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] text-slate-500 dark:text-slate-400 block font-semibold",
                                              children:
                                                "Google / Netflix / Youtube",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-850 text-left font-mono min-h-[90px] flex items-center",
                                      children: jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-350 leading-relaxed",
                                        children: rt,
                                      }),
                                    }),
                                  ],
                                }),
                              A === 5 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-teal-400 font-black",
                                          children:
                                            "MÔ PHỎNG LÀN ĐƯỜNG CÁP ĐỒNG TRỤC TV",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Tv, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Dịch vụ Cáp đồng trục",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2.5 py-1",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "relative bg-slate-100 dark:bg-slate-900/90 p-4 sm:p-4.5 border border-slate-200 dark:border-slate-850 rounded-3xl flex items-center justify-between text-sm sm:text-base font-medium gap-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "text-left",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-teal-600 dark:text-teal-400 font-black flex items-center gap-1",
                                                  children:
                                                    "📺 LÀN 1 (TẦN SỐ THẤP • 100-400 MHz) - TRUYỀN HÌNH CÁP TV:",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 block font-mono",
                                                  children: [
                                                    "Đang phát kênh: ",
                                                    xt,
                                                    " • Tivi xem mượt mà",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "px-2 py-0.5 bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20 rounded font-black text-[9px] animate-pulse whitespace-nowrap shrink-0",
                                              children: "SÓNG TIVI HD OK",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "relative bg-slate-100 dark:bg-slate-900/90 p-4 sm:p-4.5 border border-slate-200 dark:border-slate-850 rounded-3xl flex items-center justify-between text-sm sm:text-base font-medium gap-3",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "text-left",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 font-black flex items-center gap-1",
                                                  children:
                                                    "🌐 LÀN 2 (TẦN SỐ CAO • 500-800 MHz) - DỮ LIỆU INTERNET MODEM:",
                                                }),
                                                Ye
                                                  ? jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "mt-1 w-48 bg-slate-200 dark:bg-slate-800 h-2 rounded overflow-hidden",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "bg-blue-500 h-full animate-pulse",
                                                              style: {
                                                                width: `${Dt}%`,
                                                              },
                                                            },
                                                          ),
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 block font-mono",
                                                        children:
                                                          "Trạng thái: Đang rảnh rang, sẵn sàng tải dữ liệu siêu tốc",
                                                      },
                                                    ),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className: `px-2 py-0.5 rounded font-black text-[9px] whitespace-nowrap shrink-0 ${Ye ? "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 animate-bounce" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700"}`,
                                              children: Ye
                                                ? "TẢI MẠNG: " + Dt + "%"
                                                : "MẠNG KHỎE",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-50 dark:bg-slate-950/40 p-4 sm:p-4.5 border border-slate-200 dark:border-slate-850 rounded-3xl text-sm sm:text-base font-medium font-mono text-left leading-relaxed text-slate-700 dark:text-slate-300",
                                      children: [
                                        "💡 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className:
                                            "text-teal-600 dark:text-teal-400 font-black",
                                          children: "Nguyên lý Lớp 6:",
                                        }),
                                        " Hãy coi cáp đồng trúc giống như ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children:
                                            "con đường 2 làn xe biệt lập",
                                        }),
                                        ". Xe xem tivi đi ở làn số 1, xe internet đi làn số 2. Không chiếc xe nào đi lấn làn của nhau, vì vậy việc chuyển kênh tivi không bao giờ làm gián đoạn việc tải tệp tin của bạn!",
                                      ],
                                    }),
                                  ],
                                }),
                              A === 6 &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-4 flex-1 flex flex-col justify-between",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-mono text-sky-400 font-black",
                                          children:
                                            "CHI TIẾT BO MẠCH CARD MẠNG LAN (NIC)",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-bold text-slate-400 flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Cpu, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Network Interface Card",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-900 p-5 sm:p-6 border border-slate-850 rounded-3xl text-sm sm:text-base font-medium font-mono space-y-2 text-left relative overflow-hidden",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-center pb-2 border-b border-slate-850",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wider",
                                              children:
                                                "HỘ CHIẾU THIẾT BỊ MẠNG (NIC PASSPORT)",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] bg-sky-500/20 text-sky-400 px-1.5 py-0.5 rounded font-black",
                                              children: "PCIe Slot",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "grid grid-cols-2 gap-3 pt-1",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-500 font-bold block uppercase tracking-wider",
                                                  children:
                                                    "1. ĐỊA CHỈ MAC (VẬT LÝ):",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "font-extrabold text-slate-200 font-mono text-sm sm:text-base font-semibold block mt-0.5",
                                                  children: et,
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] text-amber-500 block mt-0.5",
                                                  children:
                                                    "*(Cố định vĩnh viễn, đúc sẵn)*",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-500 font-bold block uppercase tracking-wider",
                                                  children:
                                                    "2. ĐỊA CHỈ IP (ẢO):",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: `font-black text-sm sm:text-base font-semibold block mt-0.5 ${H ? "text-emerald-400 animate-pulse" : "text-rose-400"}`,
                                                  children: W,
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[8px] text-slate-500 block mt-0.5",
                                                  children: Le
                                                    ? "*(Router tự phát DHCP)*"
                                                    : "*(Đã đặt IP tĩnh bằng tay)*",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "pt-2 border-t border-slate-850 flex justify-between items-center text-sm sm:text-base font-semibold",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-slate-500 font-bold",
                                              children:
                                                "Trạng thái Cổng RJ-45:",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "flex items-center gap-1 text-[9.5px]",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `h-2 w-2 rounded-full ${H ? "bg-emerald-500 animate-ping" : "bg-rose-500"}`,
                                                      },
                                                    ),
                                                    "Link (",
                                                    H
                                                      ? "Xanh - Đã nối"
                                                      : "Đỏ - Rút cáp",
                                                    ")",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "flex items-center gap-1 text-[9.5px]",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `h-2 w-2 rounded-full ${H ? "bg-amber-400 animate-pulse" : "bg-slate-700"}`,
                                                      },
                                                    ),
                                                    "Act (",
                                                    H ? "Nháy vàng" : "Tắt",
                                                    ")",
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
                                        "bg-indigo-950/20 border border-indigo-900/30 p-8 sm:p-5 rounded-3xl text-sm sm:text-base font-semibold text-left text-slate-400 font-semibold leading-relaxed",
                                      children: [
                                        "⚙️ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className: "text-indigo-400",
                                          children: "Ghi nhớ:",
                                        }),
                                        " Địa chỉ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "MAC",
                                        }),
                                        " là vĩnh viễn (như vân tay), còn địa chỉ ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "IP",
                                        }),
                                        " có thể thay đổi liên tục tùy vào Router nhà em cấp (như số phòng em ở khi đi khách sạn).",
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          Ot(A),
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

    return Lab10;
  };
})();
