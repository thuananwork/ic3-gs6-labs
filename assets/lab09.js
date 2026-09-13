/**
 * Lab 09: Dịch vụ Mạng Cốt lõi
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab09 = window.AGY_LABS[9] = function (env) {
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
    function Lab11({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState(!1),
        u = (F) => {
          if (!l.includes(F)) {
            const Be = [...l, F];
            (c(Be), Be.length >= 3 && !d && (m(!0), a()));
          }
        },
        [g, p] = reactExports.useState("doitac.duan@company-tech.com"),
        [f, b] = reactExports.useState(
          "Tài liệu hướng dẫn triển khai Dự án Khoa học lớp 7",
        ),
        [k, N] = reactExports.useState(`Chào Anh/Chị đối tác,

Chúng tôi xin gửi tài liệu hướng dẫn các bước chi tiết để thực hiện dự án sắp tới:
1. Nghiên cứu tài liệu lý thuyết và công nghệ cốt lõi.
2. Triển khai thu thập dữ liệu thử nghiệm tại phòng lab.
3. Phân tích kết quả, lập báo cáo tóm tắt tiến độ.

Vui lòng xem chi tiết trong tệp đính kèm bên dưới. Trân trọng cảm ơn!

--
NGUYEN VAN A (Mr.)
IT Manager - GLOBAL DIGITAL ACADEMY
Phone: +84 908 123 456 | Fax: +84 24 3776 5678
Email: nva@globaltech.edu.vn | Web: http://www.globaltech.edu.vn
Address: 123 Lang Street, Dong Da Dist., Hanoi, Vietnam`),
        [M, y] = reactExports.useState(null),
        [I, R] = reactExports.useState(!1),
        [z, A] = reactExports.useState("idle"),
        [O, L] = reactExports.useState("NGUYEN VAN A (Mr.)"),
        [le, P] = reactExports.useState("+84 908 123 456"),
        [G, ee] = reactExports.useState("IT Manager"),
        [ce, V] = reactExports.useState("nva@globaltech.edu.vn"),
        [pe, Ie] = reactExports.useState("GLOBAL DIGITAL ACADEMY"),
        [se, de] = reactExports.useState(
          "123 Lang Street, Dong Da Dist., Hanoi, Vietnam",
        ),
        [_, U] = reactExports.useState("http://www.globaltech.edu.vn"),
        [Z, be] = reactExports.useState(!1),
        he = [
          { name: "De_xuat_Du_an_Moi.pdf", size: "1.2 MB" },
          { name: "Ke_hoach_Chi_tiet_Lab11.pdf", size: "950 KB" },
          { name: "Bao_cao_Khao_sat_Thuc_dia.pdf", size: "2.4 MB" },
        ],
        E = () => {
          z === "idle" &&
            (A("sending"),
            setTimeout(() => {
              (A("sent"), u(1));
            }, 1500));
        },
        [v, K] = reactExports.useState(""),
        [te, je] = reactExports.useState([
          {
            sender: "friend",
            text: "Mọi người đang đợi ở quán cà phê học nhóm đó nha! Cậu đi tới đâu rồi?",
            time: "20:41",
          },
        ]),
        [Se, He] = reactExports.useState(!1),
        Xe = (F) => {
          const Be = F || v;
          if (!Be.trim()) return;
          const S = {
            sender: "me",
            text: Be,
            time: new Date().toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          (je((J) => [...J, S]),
            K(""),
            He(!0),
            u(2),
            setTimeout(() => {
              He(!1);
              let J =
                "Đã nhận nha! Tụi mình đang chuẩn bị slide, cứ đi cẩn thận an toàn nhé.";
              ((Be.includes("muộn") || Be.includes("trễ")) &&
                (J =
                  "Không sao đâu cậu! Bọn mình đang bàn phần 1 trước, đi thong thả thôi."),
                je((pt) => [
                  ...pt,
                  {
                    sender: "friend",
                    text: J,
                    time: new Date().toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                ]));
            }, 1200));
        },
        [Qe, qe] = reactExports.useState(""),
        [at, ze] = reactExports.useState([
          {
            sender: "other",
            author: "Khánh Mai",
            text: "Chào mọi người, dự án tuần này làm tới đâu rồi nhỉ?",
            time: "14:02",
            avatarBg: "bg-indigo-600",
          },
          {
            sender: "other",
            author: "Minh An",
            text: "Tớ vừa hoàn thành xong slide 1-5 rồi đó",
            time: "14:05",
            avatarBg: "bg-rose-600",
          },
        ]),
        [De, tt] = reactExports.useState(!1),
        [it, oe] = reactExports.useState("Khánh Mai, Minh An đang online"),
        ie = (F) => {
          const Be = F || Qe;
          if (!Be.trim()) return;
          const S = {
            sender: "me",
            author: "Tôi",
            text: Be,
            time: new Date().toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            avatarBg: "bg-emerald-600",
          };
          (ze((J) => [...J, S]),
            qe(""),
            tt(!0),
            oe("Khánh Mai đang soạn tin nhắn..."),
            u(3),
            setTimeout(() => {
              (tt(!1), oe("Minh An đang online"));
              const J = [
                  "Quá đỉnh luôn cậu ơi! 😍",
                  "Để tớ vào xem rồi bổ sung thêm phần biểu đồ nhé!",
                  "Lát bọn mình rảnh gọi cuộc gọi nhóm (IM Video) duyệt qua luôn đi.",
                ],
                pt = J[Math.floor(Math.random() * J.length)];
              ze((nt) => [
                ...nt,
                {
                  sender: "other",
                  author: Math.random() > 0.5 ? "Khánh Mai" : "Minh An",
                  text: pt,
                  time: new Date().toLocaleTimeString("vi-VN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  avatarBg:
                    Math.random() > 0.5 ? "bg-indigo-600" : "bg-rose-600",
                },
              ]);
            }, 1500));
        },
        [ge, ae] = reactExports.useState([
          {
            sender: "agent",
            text: "Xin chào! Tôi là Linh - trợ giúp viên của SmartTech Academy. Tôi có thể hỗ trợ gì cho em hôm nay?",
            time: "20:42",
          },
        ]),
        [Ae, Q] = reactExports.useState(""),
        [Te, $e] = reactExports.useState(!1),
        [_e, Ue] = reactExports.useState(!0),
        Ke = (F) => {
          if (!F.trim()) return;
          const Be = {
            sender: "user",
            text: F,
            time: new Date().toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          (ae((S) => [...S, Be]),
            Q(""),
            $e(!0),
            u(4),
            setTimeout(() => {
              $e(!1);
              let S =
                "Dạ hệ thống đã ghi nhận yêu cầu của em. Hỗ trợ viên Linh đang kiểm tra hồ sơ, vui lòng chờ trong giây lát nha.";
              (F.toLowerCase().includes("mạng") ||
              F.toLowerCase().includes("wifi")
                ? (S =
                    "Để khắc phục sự cố mạng tạm thời, em thử khởi động lại modem hoặc kiểm tra dây cáp nhé! Nếu cần hỗ trợ thêm, chị luôn ở đây.")
                : (F.toLowerCase().includes("học") ||
                    F.toLowerCase().includes("đăng ký") ||
                    F.toLowerCase().includes("ưu đãi")) &&
                  (S =
                    "Đăng ký học trực tuyến IC3 GS6 đang được ưu đãi 30% đó em! Em cho chị xin số điện thoại để chị làm thủ tục giữ chỗ nha."),
                ae((J) => [
                  ...J,
                  {
                    sender: "agent",
                    text: S,
                    time: new Date().toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                ]));
            }, 1500));
        },
        [ot, w] = reactExports.useState(!0),
        [C, Ee] = reactExports.useState(!0),
        [ke, We] = reactExports.useState([
          {
            id: "me",
            name: "Tôi (Chủ phòng)",
            activeSpeaker: !1,
            audioLevel: 20,
          },
          {
            id: "p1",
            name: "Trần Minh (Hà Nội)",
            activeSpeaker: !0,
            audioLevel: 85,
            avatarBg: "bg-indigo-600",
          },
          {
            id: "p2",
            name: "John Smith (London)",
            activeSpeaker: !1,
            audioLevel: 10,
            avatarBg: "bg-teal-600",
          },
          {
            id: "p3",
            name: "Linh Chi (Đà Nẵng)",
            activeSpeaker: !1,
            audioLevel: 0,
            avatarBg: "bg-rose-600",
          },
        ]);
      reactExports.useEffect(() => {
        const F = setInterval(() => {
          We((Be) =>
            Be.map((S) => {
              if (S.id === "me" && !ot)
                return { ...S, audioLevel: 0, activeSpeaker: !1 };
              if (S.id === "p1") {
                const pt = Math.floor(Math.random() * 95);
                return { ...S, audioLevel: pt, activeSpeaker: pt > 40 };
              }
              if (S.id === "p2") {
                const pt = Math.floor(Math.random() * 45);
                return { ...S, audioLevel: pt, activeSpeaker: pt > 30 };
              }
              if (S.id === "p3")
                return { ...S, audioLevel: 0, activeSpeaker: !1 };
              const J = Math.floor(Math.random() * 35);
              return { ...S, audioLevel: J, activeSpeaker: J > 20 };
            }),
          );
        }, 1e3);
        return () => clearInterval(F);
      }, [ot]);
      const [ht, lt] = reactExports.useState([
          {
            id: 1,
            title: "Học tập hiệu quả với phương pháp mô phỏng trực quan",
            category: "Kinh nghiệm học tập",
            body: "Hôm nay mình trải nghiệm phần mềm mô phỏng các công cụ mạng xã hội và truyền thông số của IC3 GS6. Việc tương tác trực quan như thế này giúp mình ghi nhớ sự khác biệt giữa Email, SMS, IM và Forum cực nhanh mà không cần học vẹt!",
            date: "19/07/2026",
            author: "Nguyễn Hải Đăng",
            likes: 12,
          },
          {
            id: 2,
            title: "Tại sao nên dùng Email thay vì SMS cho công việc?",
            category: "Kiến thức số",
            body: "Email cho phép gửi kèm tệp tin dung lượng lớn như tài liệu PDF, bản thảo thiết kế và có lưu vết trao đổi rõ ràng, trang trọng. Trái lại, SMS chỉ phù hợp cho tin nhắn khẩn cấp, ngắn hạn.",
            date: "18/07/2026",
            author: "Phan Hoài Nam",
            likes: 8,
          },
        ]),
        [Fe, rt] = reactExports.useState(""),
        [yt, xt] = reactExports.useState("Chia sẻ hằng ngày"),
        [ve, Ye] = reactExports.useState(""),
        mt = (F) => {
          if ((F.preventDefault(), !Fe.trim() || !ve.trim())) return;
          const Be = {
            id: Date.now(),
            title: Fe,
            category: yt,
            body: ve,
            date: new Date().toLocaleDateString("vi-VN"),
            author: "Tôi (Học viên)",
            likes: 0,
          };
          (lt([Be, ...ht]), rt(""), Ye(""), u(6));
        },
        Dt = (F) => {
          lt((Be) =>
            Be.map((S) => (S.id === F ? { ...S, likes: S.likes + 1 } : S)),
          );
        },
        [ye, H] = reactExports.useState([
          {
            id: 1,
            title:
              "Sự khác biệt thực chất giữa SMS và IM (Instant Messaging) là gì?",
            author: "Tuan_Minh_9x",
            votes: 15,
            repliesCount: 2,
            time: "2 giờ trước",
            content:
              "Mình đang học môn Công nghệ số nhưng vẫn hơi rối giữa SMS truyền thống và các phần mềm nhắn tin tức thời IM như Messenger, Zalo. Hai cái này đều để chat thì khác gì nhau về mặt hạ tầng kỹ thuật?",
            replies: [
              {
                author: "Linh_Tech_GS6",
                time: "1.5 giờ trước",
                text: "SMS chạy trên mạng di động viễn thông (Cellular Network), không cần Internet vẫn gửi được, nhưng bị giới hạn 160 ký tự và mất phí cho nhà mạng. Còn IM chạy trên nền Internet (TCP/IP), hoàn toàn miễn phí nếu có Wi-Fi/4G, hỗ trợ gửi tệp, emoji, ảnh và không giới hạn ký tự nha bạn!",
                avatarBg: "bg-indigo-600",
              },
              {
                author: "Thay_Giao_Nam",
                time: "1 giờ trước",
                text: "Chính xác! Ghi nhớ thêm: SMS là giao tiếp điểm-điểm truyền thống, còn IM hỗ trợ hiển thị trạng thái hoạt động trực tuyến (Online, Typing, Read receipt) thời gian thực.",
                avatarBg: "bg-amber-600",
              },
            ],
          },
          {
            id: 2,
            title:
              "Có nên dùng Messenger/Zalo để gửi tài liệu hợp đồng mật không?",
            author: "Kế_Toán_Vui_Vẻ",
            votes: 9,
            repliesCount: 1,
            time: "5 giờ trước",
            content:
              "Công ty mình sếp hay yêu cầu gửi hợp đồng bản quét qua chat cho nhanh. Mình thấy lo ngại về tính lưu trữ và bảo mật. Mọi người cho ý kiến với ạ?",
            replies: [
              {
                author: "Chuyên_Gia_An_Ninh_Số",
                time: "4 giờ trước",
                text: "Không nên nhé! Hợp đồng quan trọng bắt buộc phải gửi qua Email chính thống của công ty để lưu vết pháp lý chặt chẽ, dễ tìm kiếm, đính kèm tệp PDF bảo mật, và có thể mã hóa đầu cuối. Tránh gửi qua ứng dụng chat cá nhân dễ bị trôi và rò rỉ.",
                avatarBg: "bg-teal-600",
              },
            ],
          },
        ]),
        [me, Le] = reactExports.useState(1),
        [Pe, W] = reactExports.useState(""),
        [Me, et] = reactExports.useState(""),
        [Je, Et] = reactExports.useState(""),
        [ft, Mt] = reactExports.useState(!1),
        D = (F) => {
          if ((F.preventDefault(), !Pe.trim() || !Me.trim())) return;
          const Be = {
            id: Date.now(),
            title: Pe,
            author: "Học_Viên_Chăm_Chỉ",
            votes: 1,
            repliesCount: 0,
            time: "Vừa xong",
            content: Me,
            replies: [],
          };
          (H([Be, ...ye]), Le(Be.id), W(""), et(""), Mt(!1), u(7));
        },
        Re = (F) => {
          (F.preventDefault(),
            !(!Je.trim() || me === null) &&
              (H((Be) =>
                Be.map((S) =>
                  S.id === me
                    ? {
                        ...S,
                        repliesCount: S.repliesCount + 1,
                        replies: [
                          ...S.replies,
                          {
                            author: "Tôi (Học viên)",
                            time: "Vừa xong",
                            text: Je,
                            avatarBg: "bg-emerald-600",
                          },
                        ],
                      }
                    : S,
                ),
              ),
              Et(""),
              u(7)));
        },
        Ve = (F, Be) => {
          (Be.stopPropagation(),
            H((S) =>
              S.map((J) => (J.id === F ? { ...J, votes: J.votes + 1 } : J)),
            ));
        },
        [Ge, Ze] = reactExports.useState(""),
        [Nt, Kt] = reactExports.useState("idle"),
        [It, wt] = reactExports.useState(0),
        [Ls, Ot] = reactExports.useState(!1),
        [Ce, st] = reactExports.useState(!1),
        [At, Lt] = reactExports.useState(""),
        [Zt, Vt] = reactExports.useState(""),
        [Ut, hs] = reactExports.useState("");
      reactExports.useEffect(() => {
        let F;
        return (
          Nt === "connected"
            ? (F = setInterval(() => {
                wt((Be) => Be + 1);
              }, 1e3))
            : wt(0),
          () => clearInterval(F)
        );
      }, [Nt]);
      const Xs = (F) => {
        const Be = F.replace(/[\s\-\(\)]/g, "");
        if (!Be)
          return {
            exists: !1,
            error: "Vui lòng gõ số điện thoại trước khi bấm gọi.",
          };
        if (["113", "114", "115", "111", "112"].includes(Be)) {
          let S = "Số khẩn cấp";
          return (
            Be === "113" && (S = "Cảnh sát phản ứng nhanh 113"),
            Be === "114" && (S = "Cứu hỏa & Cứu hộ 114"),
            Be === "115" && (S = "Tổng đài khẩn cấp 115"),
            Be === "111" && (S = "Đường dây bảo vệ trẻ em 111"),
            Be === "112" && (S = "Cứu nạn cứu hộ quốc gia 112"),
            { exists: !0, name: S }
          );
        }
        return Be === "0912888999"
          ? { exists: !0, name: "Nhóm trưởng Khánh Nam" }
          : Be === "0903456789"
            ? { exists: !0, name: "Cô giáo Thảo Vy" }
            : /^0\d{8,10}$/.test(Be)
              ? { exists: !0, name: `Thuê bao di động (${F})` }
              : {
                  exists: !1,
                  error: `⚠️ Số máy "${F}" không tồn tại trên hệ thống PSTN di động! Vui lòng thử gọi 113, 114, 115 hoặc số điện thoại di động bắt đầu bằng 0 (có 9-11 số).`,
                };
      };
      reactExports.useEffect(() => {
        if (Nt === "connected") {
          const F = {
              "Tổng đài khẩn cấp 115": [
                {
                  time: 0,
                  text: "Tổng đài 115: Tổng đài 115 xin nghe, xin hỏi đầu dây có sự cố y tế khẩn cấp gì ạ?",
                },
                {
                  time: 4,
                  text: "Học viên: Dạ em đang làm bài thực hành mô phỏng kỹ năng gọi cứu hộ...",
                },
                {
                  time: 8,
                  text: "Tổng đài 115: À tốt lắm! Em đang liên lạc qua đường dây điện thoại mạng PSTN truyền thống.",
                },
                {
                  time: 13,
                  text: "Tổng đài 115: Nhớ nhé, cuộc gọi thoại PSTN có độ trễ cực thấp, không cần Internet.",
                },
                {
                  time: 18,
                  text: "Học viên: Dạ vâng em hiểu rồi, em cảm ơn tổng đài nhiều ạ!",
                },
                {
                  time: 22,
                  text: "Tổng đài 115: Chúc em hoàn thành tốt bài học tương tác này nhé!",
                },
              ],
              "Cảnh sát phản ứng nhanh 113": [
                {
                  time: 0,
                  text: "Cảnh sát 113: Cảnh sát 113 xin nghe! Có sự cố an ninh trật tự hay tình huống nguy cấp nào cần hỗ trợ khẩn cấp không?",
                },
                {
                  time: 5,
                  text: "Học viên: Dạ không ạ, em đang thực hành kỹ năng gọi cứu nạn khẩn cấp trên mô phỏng mạng thoại.",
                },
                {
                  time: 10,
                  text: "Cảnh sát 113: Tốt lắm, hãy nhớ đường dây 113 luôn sẵn sàng kết nối trực tiếp, có tính tin cậy cao nhất kể cả khi mất Internet.",
                },
                {
                  time: 15,
                  text: "Học viên: Dạ vâng em ghi nhớ rồi ạ. Em cảm ơn chú cảnh sát nhiều!",
                },
                {
                  time: 19,
                  text: "Cảnh sát 113: Chúc cháu hoàn thành tốt bài thực hành tương tác này nhé!",
                },
              ],
              "Cứu hỏa & Cứu hộ 114": [
                {
                  time: 0,
                  text: "Cứu hỏa 114: Phòng Cảnh sát Phòng cháy chữa cháy và Cứu nạn cứu hộ xin nghe! Có sự cố hỏa hoạn gì báo tin khẩn cấp ạ?",
                },
                {
                  time: 5,
                  text: "Học viên: Dạ em đang thực hiện bài học mô phỏng liên lạc khẩn cấp di động.",
                },
                {
                  time: 9,
                  text: "Cứu hỏa 114: Hoan nghênh tinh thần thực hành của em! Nhớ luôn sử dụng số 114 khi có cháy nổ hoặc tai nạn nguy hiểm nhé.",
                },
                {
                  time: 14,
                  text: "Học viên: Dạ vâng em hiểu rồi ạ. Em chúc các anh luôn mạnh khỏe!",
                },
                {
                  time: 18,
                  text: "Cứu hỏa 114: Cảm ơn em, chúc em học thật tốt!",
                },
              ],
              "Đường dây bảo vệ trẻ em 111": [
                {
                  time: 0,
                  text: "Tổng đài 111: Tổng đài điện thoại quốc gia bảo vệ trẻ em xin nghe.",
                },
                {
                  time: 4,
                  text: "Học viên: Dạ em đang làm bài học tương tác công cụ truyền thông trực tiếp.",
                },
                {
                  time: 8,
                  text: "Tổng đài 111: Rất tốt, đường dây 111 luôn hoạt động 24/7 hoàn toàn miễn phí để tiếp nhận mọi thông tin khẩn cấp bảo vệ trẻ em.",
                },
                { time: 13, text: "Học viên: Dạ em cảm ơn tổng đài nhiều ạ!" },
              ],
              "Cứu nạn cứu hộ quốc gia 112": [
                {
                  time: 0,
                  text: "Tổng đài 112: Trung tâm thông tin tìm kiếm cứu nạn quốc gia xin nghe.",
                },
                {
                  time: 4,
                  text: "Học viên: Dạ em đang thực hành tìm hiểu các đầu số liên lạc khẩn cấp di động.",
                },
                {
                  time: 8,
                  text: "Tổng đài 112: Hãy luôn nhớ số 112 khi gặp thiên tai bão lũ nguy hiểm cần cứu nạn cứu hộ khẩn cấp nhé!",
                },
                {
                  time: 13,
                  text: "Học viên: Dạ em ghi nhớ rồi, em cảm ơn tổng đài nhiều ạ!",
                },
              ],
              "Nhóm trưởng Khánh Nam": [
                {
                  time: 0,
                  text: "Khánh Nam: Alo tớ Nam nghe đây cậu ơi, cậu tới quán chưa?",
                },
                {
                  time: 4,
                  text: "Học viên: Tớ đang trên đường qua nè, bị kẹt xe chút xíu.",
                },
                {
                  time: 8,
                  text: "Khánh Nam: Ok ok, cứ đi cẩn thận nha. Bọn tớ đang xem lại slide.",
                },
                {
                  time: 12,
                  text: "Học viên: Cậu mở sẵn file thuyết trình lên máy chiếu trước nha.",
                },
                {
                  time: 16,
                  text: "Khánh Nam: Nhất trí! Gặp lại cậu sau vài phút nữa nha.",
                },
              ],
              "Cô giáo Thảo Vy": [
                {
                  time: 0,
                  text: "Cô Thảo Vy: Chào em, cô Vy nghe đây. Em cần hỗ trợ gì không?",
                },
                {
                  time: 5,
                  text: "Học viên: Dạ thưa cô, cho em hỏi thời gian thi chứng chỉ tuần này ạ.",
                },
                {
                  time: 10,
                  text: "Cô Thảo Vy: Sáng Thứ Bảy lúc 8:00 tại phòng máy số 3 nhé em.",
                },
                {
                  time: 14,
                  text: "Cô Thảo Vy: Nhớ mang theo thẻ căn cước công dân và thẻ học sinh đầy đủ nha.",
                },
                {
                  time: 19,
                  text: "Học viên: Dạ em nhớ rồi, em cảm ơn cô nhiều ạ!",
                },
              ],
              "Số máy tự gõ": [
                {
                  time: 0,
                  text: "Hệ thống: Thuê bao quý khách vừa gọi hiện chưa thể kết nối.",
                },
                {
                  time: 4,
                  text: "Hệ thống: Vui lòng kiểm tra lại số điện thoại và thực hiện cuộc gọi sau.",
                },
              ],
            },
            Be = At || "Số máy tự gõ";
          let S = F[Be];
          S ||
            (Be.startsWith("Thuê bao di động") || Be.includes("(")
              ? (S = [
                  {
                    time: 0,
                    text: "Thuê bao nhận cuộc gọi: Alo, ai đầu dây đấy ạ? Tôi đang nghe.",
                  },
                  {
                    time: 4,
                    text: "Học viên: Dạ xin chào, em đang thực hành cuộc gọi thoại thử nghiệm.",
                  },
                  {
                    time: 8,
                    text: "Thuê bao nhận cuộc gọi: À, âm thanh cuộc gọi thoại GSM/PSTN nghe rõ ràng, ổn định và không bị giật lag nhỉ!",
                  },
                  {
                    time: 13,
                    text: "Học viên: Dạ đúng rồi ạ, không phụ thuộc vào Internet. Em chúc anh/chị học tập và làm việc vui vẻ nhé!",
                  },
                  {
                    time: 18,
                    text: "Thuê bao nhận cuộc gọi: Cảm ơn em nhiều nha! Chúc em đạt kết quả cao chứng chỉ IC3 GS6.",
                  },
                ])
              : (S = F["Số máy tự gõ"]));
          const J = It,
            pt = S.find(
              (nt) =>
                J >= nt.time &&
                J < nt.time + (nt.time === S[S.length - 1].time ? 5 : 4),
            );
          pt
            ? Vt(pt.text)
            : J >= S[S.length - 1].time + 4
              ? (Vt("--- Cuộc gọi tự động kết thúc thành công ---"),
                setTimeout(() => {
                  Kt("ended");
                }, 1500))
              : Vt("");
        } else Vt("");
      }, [It, Nt, At]);
      const ws = (F, Be) => {
          const S = F.trim() || "0903 456 789",
            J = Xs(S);
          if (!J.exists) {
            hs(J.error || "Số điện thoại không hợp lệ!");
            return;
          }
          (hs(""),
            Lt(J.name),
            Kt("calling"),
            Ot(!1),
            st(!1),
            u(8),
            setTimeout(() => {
              Kt("connected");
            }, 2e3));
        },
        fs = () => {
          (Kt("ended"),
            setTimeout(() => {
              Kt("idle");
            }, 1500));
        },
        Bs = [
          {
            id: 1,
            name: "Thư điện tử (Email)",
            icon: Mail,
            desc: "Gửi thư chính thức, có cấu trúc, cho phép đính kèm tệp tin như tài liệu PDF cho công ty, đối tác.",
          },
          {
            id: 2,
            name: "Tin nhắn ngắn (SMS)",
            icon: Smartphone,
            desc: "Tin nhắn văn bản siêu ngắn gửi qua sóng di động viễn thông (không cần mạng Internet), phù hợp báo khẩn cấp.",
          },
          {
            id: 3,
            name: "Tin nhắn tức thời (IM)",
            icon: MessageSquare,
            desc: "Trò chuyện nhóm hoặc cá nhân thời gian thực qua Internet (Messenger/Zalo), hỗ trợ đa phương tiện dồi dào.",
          },
          {
            id: 4,
            name: "Trò chuyện Web (Live Chat)",
            icon: MessageCircle,
            desc: "Khung hỗ trợ trực tuyến tích hợp trực tiếp trên trang web để tương tác phản hồi khách hàng ngay tức thì.",
          },
          {
            id: 5,
            name: "Hội nghị truyền hình",
            icon: Video,
            desc: "Họp trực tiếp từ xa bằng âm thanh và hình ảnh của nhiều người ở các điểm địa lý khác nhau.",
          },
          {
            id: 6,
            name: "Nhật ký trực tuyến (Blog)",
            icon: BookOpen,
            desc: "Trang web cá nhân dùng để đăng tải bài viết chia sẻ suy nghĩ, quan điểm hằng ngày theo trình tự thời gian.",
          },
          {
            id: 7,
            name: "Diễn đàn (Forum)",
            icon: Globe,
            desc: "Cộng đồng thảo luận công khai trực tuyến, nơi mọi người đặt câu hỏi, phản hồi thảo luận tự do.",
          },
          {
            id: 8,
            name: "Cuộc gọi thoại (Phone Call)",
            icon: PhoneCall,
            desc: "Giao tiếp thoại trực tiếp thời gian thực, kết nối qua hạ tầng di động hoặc điện thoại truyền thống (PSTN), độ ổn định cao và trễ thấp.",
          },
        ].find((F) => F.id === n) || {
          name: "Thư điện tử (Email)",
          icon: Mail,
          desc: "",
        };
      return jsxRuntimeExports.jsxs("div", {
        id: "lab-11-section",
        className: "space-y-6",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "text-left",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 px-2.5 py-1 rounded-md font-extrabold uppercase tracking-wider",
                    children: "Bài thi IC3 GS6 // Phương tiện kỹ thuật số",
                  }),
                  jsxRuntimeExports.jsx("h2", {
                    className:
                      "text-lg font-black text-slate-900 dark:text-white mt-1.5",
                    children: "Bản đồ Mô phỏng các Công cụ Giao tiếp Số",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-500 mt-1",
                    children:
                      "Mục tiêu: Tìm hiểu và phân biệt 8 loại hình truyền thông kỹ thuật số phổ biến bằng trải nghiệm tương tác trực tiếp.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-5 px-5 sm:px-6 flex items-center gap-3.5 shrink-0 text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-semibold text-slate-400 font-extrabold block uppercase",
                        children: "Tiến độ thực hành",
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "text-base font-black text-indigo-600 dark:text-indigo-400",
                            children: [l.length, " / 8"],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-sm sm:text-base font-semibold text-slate-500 font-medium",
                            children: "thiết bị ảo",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "h-10 w-[1px] bg-slate-200 dark:bg-slate-800",
                  }),
                  jsxRuntimeExports.jsx("div", {
                    children: d
                      ? jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-5 sm:px-5 py-3 rounded-3xl flex items-center gap-1.5 font-bold text-sm sm:text-base font-medium animate-bounce",
                          children: [
                            jsxRuntimeExports.jsx(CircleCheck, {
                              className: "h-4 w-4 shrink-0",
                            }),
                            jsxRuntimeExports.jsx("span", {
                              children: "Hoàn thành xuất sắc!",
                            }),
                          ],
                        })
                      : jsxRuntimeExports.jsxs("span", {
                          className:
                            "text-[10.5px] text-slate-500 leading-normal font-medium block max-w-[140px]",
                          children: [
                            "👉 Hãy tương tác thử với ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "ít nhất 3",
                            }),
                            " loại thiết bị để hoàn tất bài học!",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-4 space-y-4 text-left",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-[10.5px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block",
                    children: "Chọn thiết bị ảo cần thử nghiệm:",
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "flex flex-col items-stretch gap-3 w-full",
                    children: [
                      {
                        id: 1,
                        name: "Thư điện tử (Email)",
                        icon: Mail,
                        tag: "Đính kèm tệp PDF lớn",
                        color: "text-blue-500",
                      },
                      {
                        id: 2,
                        name: "Tin nhắn văn bản (SMS)",
                        icon: Smartphone,
                        tag: "Mạng di động thô khẩn cấp",
                        color: "text-emerald-500",
                      },
                      {
                        id: 3,
                        name: "Tin nhắn tức thời (IM)",
                        icon: MessageSquare,
                        tag: "Chat Internet, emoji, nhóm",
                        color: "text-purple-500",
                      },
                      {
                        id: 4,
                        name: "Trò chuyện Web (Live Chat)",
                        icon: MessageCircle,
                        tag: "Hỗ trợ khách hàng portal",
                        color: "text-amber-500",
                      },
                      {
                        id: 5,
                        name: "Hội nghị truyền hình (Video)",
                        icon: Video,
                        tag: "Họp webcam đa địa điểm",
                        color: "text-fuchsia-500",
                      },
                      {
                        id: 6,
                        name: "Nhật ký trực tuyến (Blog)",
                        icon: BookOpen,
                        tag: "Đăng tải suy nghĩ cá nhân",
                        color: "text-sky-500",
                      },
                      {
                        id: 7,
                        name: "Diễn đàn trực tuyến (Forum)",
                        icon: Globe,
                        tag: "Cộng đồng thảo luận hỏi đáp",
                        color: "text-rose-500",
                      },
                      {
                        id: 8,
                        name: "Cuộc gọi thoại (Phone Call)",
                        icon: Phone,
                        tag: "Giao tiếp thoại PSTN trực tiếp",
                        color: "text-teal-500",
                      },
                    ].map((F) => {
                      const Be = F.icon,
                        S = n === F.id,
                        J = l.includes(F.id);
                      return jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => {
                            i(F.id);
                          },
                          className: `w-full box-border px-4 py-3 min-h-[60px] text-left rounded-2xl border text-sm sm:text-base font-bold transition-all flex items-center justify-between cursor-pointer ${S ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-[1.01]" : "bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 hover:bg-slate-50"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-3 min-w-0 flex-1",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className: `p-2 rounded-xl shrink-0 ${S ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 " + F.color}`,
                                  children: jsxRuntimeExports.jsx(Be, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "truncate min-w-0 flex-1",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className: `block font-black text-sm ${S ? "text-white" : "text-slate-800 dark:text-white"}`,
                                      children: F.name,
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: `text-xs font-semibold block truncate ${S ? "text-white" : "text-slate-400 dark:text-slate-400"}`,
                                      children: F.tag,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-1.5 shrink-0 ml-auto pl-2",
                              children: [
                                J &&
                                  jsxRuntimeExports.jsx("span", {
                                    className: `text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${S ? "bg-white/20 text-white" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"}`,
                                    children: "Đã thử",
                                  }),
                                jsxRuntimeExports.jsxs("span", {
                                  className: `text-xs font-mono font-black px-2 py-0.5 rounded-full ${S ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                                  children: ["#0", F.id],
                                }),
                              ],
                            }),
                          ],
                        },
                        F.id,
                      );
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center justify-between px-5 sm:px-5 pb-3 mb-4 border-b border-slate-800/80 text-slate-500 text-sm sm:text-base font-semibold font-mono font-bold uppercase tracking-wider",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "h-2 w-2 rounded-full bg-emerald-500 animate-pulse",
                          }),
                          jsxRuntimeExports.jsxs("span", {
                            children: [
                              "Thiết bị ảo: #",
                              n,
                              " // Active SIMULATOR",
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          jsxRuntimeExports.jsx("span", {
                            children: "Đường truyền: Ổn định",
                          }),
                          jsxRuntimeExports.jsx("span", {
                            children: "Wi-Fi & Di Động",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "mb-4 bg-slate-900 border border-slate-800/60 p-8 sm:p-5 rounded-3xl flex gap-3 items-start",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "p-8 sm:p-5 bg-indigo-500/15 text-indigo-400 rounded-3xl shrink-0 mt-0.5",
                        children: jsxRuntimeExports.jsx(Bs.icon, {
                          className: "h-4 w-4",
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "space-y-0.5",
                        children: [
                          jsxRuntimeExports.jsx("h4", {
                            className: "text-[12px] font-bold text-white",
                            children: Bs.name,
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[10.5px] text-slate-400 leading-normal",
                            children: Bs.desc,
                          }),
                        ],
                      }),
                    ],
                  }),
                  n === 1 &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-inner flex flex-col",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-8 sm:p-5 border-b border-slate-800 space-y-2.5 bg-slate-950",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-12 gap-2 items-center text-sm sm:text-base font-medium",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "col-span-3 text-slate-400 font-bold",
                                      children: "Người nhận (To):",
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "text",
                                      value: g,
                                      onChange: (F) => p(F.target.value),
                                      className:
                                        "col-span-9 p-1.5 rounded-3xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-sm sm:text-base font-medium focus:outline-hidden focus:border-indigo-500",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-12 gap-2 items-center text-sm sm:text-base font-medium",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "col-span-3 text-slate-400 font-bold",
                                      children: "Tiêu đề (Subject):",
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "text",
                                      value: f,
                                      onChange: (F) => b(F.target.value),
                                      className:
                                        "col-span-9 p-1.5 rounded-3xl bg-slate-900 border border-slate-800 text-slate-200 text-sm sm:text-base font-medium focus:outline-hidden focus:border-indigo-500 font-bold",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-12 gap-2 items-center text-sm sm:text-base font-medium",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "col-span-3 text-slate-400 font-bold flex items-center gap-1",
                                      children: [
                                        jsxRuntimeExports.jsx(Paperclip, {
                                          className: "h-3.5 w-3.5",
                                        }),
                                        " Đính kèm:",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "col-span-9 flex items-center gap-2",
                                      children: M
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "bg-red-500/10 border border-red-500/20 text-red-400 px-2.5 py-1 rounded-3xl flex items-center gap-1.5 font-bold text-sm sm:text-base font-semibold animate-scaleUp",
                                            children: [
                                              jsxRuntimeExports.jsx(FileText, {
                                                className:
                                                  "h-3.5 w-3.5 shrink-0",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "max-w-[320px] sm:max-w-md break-all",
                                                children: [
                                                  M.name,
                                                  " (",
                                                  M.size,
                                                  ")",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("button", {
                                                type: "button",
                                                onClick: () => y(null),
                                                className:
                                                  "p-0.5 hover:bg-red-500/20 rounded-md cursor-pointer text-red-500 hover:text-red-400 shrink-0",
                                                children: jsxRuntimeExports.jsx(
                                                  X,
                                                  { className: "h-3 w-3" },
                                                ),
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              jsxRuntimeExports.jsxs("button", {
                                                type: "button",
                                                onClick: () => R(!I),
                                                className:
                                                  "no-override px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1 transition-colors cursor-pointer",
                                                children: [
                                                  jsxRuntimeExports.jsx(Plus, {
                                                    className:
                                                      "h-3 w-3 text-slate-400",
                                                  }),
                                                  " Chọn đính kèm tệp .pdf",
                                                ],
                                              }),
                                              I &&
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute left-0 mt-1.5 w-72 sm:w-96 bg-slate-900 border border-slate-800 rounded-3xl p-2 shadow-2xl z-20 space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] font-bold text-slate-500 px-2 py-1 block uppercase tracking-wider",
                                                        children:
                                                          "Chọn tài liệu PDF đính kèm:",
                                                      },
                                                    ),
                                                    he.map((F, Be) =>
                                                      jsxRuntimeExports.jsxs(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          onClick: () => {
                                                            (y(F), R(!1));
                                                          },
                                                          className:
                                                            "w-full text-left p-2.5 rounded-2xl hover:bg-slate-800 text-sm sm:text-base font-semibold text-slate-200 font-bold flex items-center justify-between gap-2 group cursor-pointer",
                                                          children: [
                                                            jsxRuntimeExports.jsxs(
                                                              "span",
                                                              {
                                                                className:
                                                                  "group-hover:text-red-400 flex items-center gap-1.5 break-all text-xs sm:text-sm",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    FileText,
                                                                    {
                                                                      className:
                                                                        "h-3.5 w-3.5 text-red-500 shrink-0",
                                                                    },
                                                                  ),
                                                                  " ",
                                                                  F.name,
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[9px] text-slate-500 font-mono font-bold shrink-0",
                                                                children:
                                                                  F.size,
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                        Be,
                                                      ),
                                                    ),
                                                  ],
                                                }),
                                            ],
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "p-5 sm:p-6 bg-slate-900 space-y-3",
                              children: jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-950 border border-slate-800 rounded-2xl p-4 text-left flex flex-col gap-2",
                                children: [
                                  jsxRuntimeExports.jsxs("label", {
                                    className:
                                      "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        children:
                                          "NỘI DUNG THƯ & CHỮ KÝ (TỰ DO CHỈNH SỬA):",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[10px] text-slate-500 font-normal",
                                        children:
                                          "Cho phép tự do chỉnh sửa nội dung và chữ ký bên dưới",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("textarea", {
                                    rows: 12,
                                    value: k,
                                    onChange: (F) => N(F.target.value),
                                    className:
                                      "w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl p-3.5 text-slate-100 font-mono text-xs sm:text-sm font-medium leading-relaxed focus:outline-hidden resize-y min-h-[280px]",
                                    placeholder:
                                      "Nhập nội dung thư điện tử và chữ ký tại đây...",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center justify-end pt-1",
                          children: [
                            z === "idle" &&
                              jsxRuntimeExports.jsxs("button", {
                                onClick: E,
                                className:
                                  "px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl text-sm sm:text-base font-medium font-black shadow-lg flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 hover:scale-103 transition-all",
                                children: [
                                  jsxRuntimeExports.jsx(Send, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                  " Gửi Email Chính Thức",
                                ],
                              }),
                            z === "sending" &&
                              jsxRuntimeExports.jsxs("button", {
                                disabled: !0,
                                className:
                                  "px-5 sm:px-6 py-3 bg-slate-800 text-slate-400 rounded-3xl text-sm sm:text-base font-medium font-black flex items-center gap-1.5",
                                children: [
                                  jsxRuntimeExports.jsx(RefreshCw, {
                                    className: "h-3.5 w-3.5 animate-spin",
                                  }),
                                  " Đang tải tệp & truyền thư...",
                                ],
                              }),
                            z === "sent" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "flex flex-col items-end gap-1",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold font-black text-emerald-400 bg-emerald-950/30 border border-emerald-900/60 px-5 sm:px-5 py-3 rounded-3xl flex items-center gap-1.5 animate-scaleUp",
                                    children:
                                      "✓ Đã gửi Email kèm tệp PDF thành công!",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => A("idle"),
                                    className:
                                      "text-sm sm:text-base font-semibold text-indigo-400 font-bold hover:underline cursor-pointer",
                                    children: "[Soạn thư mới]",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  n === 2 &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[400px]",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 py-1.5 px-3 border-b border-slate-850 flex items-center justify-between text-[9px] font-mono text-slate-400",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "flex items-center gap-1 font-bold",
                                  children: jsxRuntimeExports.jsx("span", {
                                    children: "MẠNG DI ĐỘNG VIỄN THÔNG (GSM)",
                                  }),
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children: "160 ký tự / SMS",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-2.5 px-3 bg-slate-900/95 border-b border-slate-850 flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-7 w-7 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                  children: "HS",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "text-left",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-extrabold text-slate-200 block text-xs sm:text-sm",
                                      children: "Nhóm Học Nhóm (SMS)",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] text-slate-500 font-bold block",
                                      children:
                                        "Không cần Internet // Chỉ nhắn tin ngắn thô",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 p-3 overflow-y-auto space-y-2 bg-slate-950 flex flex-col justify-end",
                              children: [
                                te.map((F, Be) => {
                                  const S = F.sender === "me";
                                  return jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: `flex flex-col max-w-[75%] ${S ? "self-end items-end" : "self-start items-start"} animate-scaleUp`,
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className: `p-2 px-3 rounded-2xl text-xs sm:text-sm font-semibold leading-relaxed ${S ? "bg-emerald-600 text-white rounded-br-none" : "bg-slate-800 text-slate-250 rounded-bl-none"}`,
                                          children: F.text,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[8px] text-slate-500 mt-1 font-mono uppercase",
                                          children: F.time,
                                        }),
                                      ],
                                    },
                                    Be,
                                  );
                                }),
                                Se &&
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "self-start flex flex-col items-start",
                                    children: jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-800 text-slate-400 p-2 px-3 rounded-2xl text-xs sm:text-sm font-medium flex items-center gap-1 font-bold",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-1 w-1 bg-slate-400 rounded-full animate-bounce",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-1 w-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-1 w-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]",
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-2 bg-slate-900 border-t border-slate-850 flex gap-1.5 items-center",
                              children: [
                                jsxRuntimeExports.jsx("input", {
                                  type: "text",
                                  maxLength: 160,
                                  placeholder: "Nhập tin nhắn SMS...",
                                  value: v,
                                  onChange: (F) => K(F.target.value),
                                  onKeyDown: (F) => F.key === "Enter" && Xe(),
                                  className:
                                    "no-override flex-1 py-1.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-500 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-emerald-500 h-9",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => Xe(),
                                  className:
                                    "no-override h-9 w-9 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl cursor-pointer shrink-0 flex items-center justify-center",
                                  children: jsxRuntimeExports.jsx(Send, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 block font-bold uppercase tracking-wider",
                              children: "Mẫu tin nhắn ngắn truyền thống (SMS):",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                "Tớ bị kẹt xe nên tới trễ khoảng 10 phút nha, mọi người cứ bắt đầu trước!",
                                "Có ai mang theo sách hướng dẫn IC3 không?",
                                "Con đang trên đường về rồi nha mẹ ơi!",
                              ].map((F, Be) =>
                                jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => Xe(F),
                                    className:
                                      "px-2.5 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[10.5px] font-bold text-slate-350 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all",
                                    children: ['⚡ "', F, '"'],
                                  },
                                  Be,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  n === 3 &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[400px]",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 py-1.5 px-3 border-b border-slate-850 flex items-center justify-between text-[9px] font-mono text-indigo-400",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 font-bold",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-1.5 w-1.5 rounded-full bg-indigo-500 animate-ping",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "TIN NHẮN TỨC THỜI (IM) // QUA INTERNET (TCP/IP)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  children:
                                    "Không giới hạn độ dài // Hỗ trợ Emojis",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-2.5 px-3 bg-slate-900 border-b border-slate-850 flex items-center justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex shrink-0 -space-x-2",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-7 w-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base font-semibold border border-slate-900",
                                          children: "KM",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-7 w-7 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm sm:text-base font-semibold border border-slate-900",
                                          children: "MA",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "font-extrabold text-slate-200 block text-xs sm:text-sm",
                                          children:
                                            "Nhóm Dự Án IC3 GS6 (IM Group)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9.5px] text-indigo-400 font-bold block",
                                          children: it,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[9.5px] text-slate-400 font-bold",
                                  children: "Zalo / Messenger",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 p-3 overflow-y-auto space-y-2 bg-slate-950 flex flex-col justify-end",
                              children: [
                                at.map((F, Be) => {
                                  const S = F.sender === "me";
                                  return jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      className: `flex gap-2 max-w-[80%] ${S ? "self-end flex-row-reverse" : "self-start flex-row"} items-end animate-scaleUp`,
                                      children: [
                                        !S &&
                                          jsxRuntimeExports.jsx("div", {
                                            className: `h-6 w-6 rounded-full ${F.avatarBg} text-white flex items-center justify-center font-bold text-[9px] shrink-0`,
                                            children: F.author.charAt(0),
                                          }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            !S &&
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[8.5px] text-slate-400 font-bold ml-1 mb-0.5",
                                                children: F.author,
                                              }),
                                            jsxRuntimeExports.jsx("div", {
                                              className: `p-2 px-3 rounded-2xl text-xs sm:text-sm font-semibold leading-relaxed ${S ? "bg-indigo-600 text-white rounded-br-none" : "bg-slate-850 text-slate-250 rounded-bl-none"}`,
                                              children: F.text,
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[8px] text-slate-500 mt-0.5 font-mono uppercase text-right",
                                              children: F.time,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    Be,
                                  );
                                }),
                                De &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "self-start flex gap-2 items-center",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-6 w-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[9px] shrink-0",
                                        children: "K",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-850 text-slate-400 p-2 px-3 rounded-2xl text-xs sm:text-sm font-medium flex items-center gap-1 font-bold",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-2 bg-slate-900 border-t border-slate-850 flex gap-1.5 items-center",
                              children: [
                                jsxRuntimeExports.jsx("input", {
                                  type: "text",
                                  placeholder:
                                    "Gõ tin nhắn tức thời có chứa Emojis...",
                                  value: Qe,
                                  onChange: (F) => qe(F.target.value),
                                  onKeyDown: (F) => F.key === "Enter" && ie(),
                                  className:
                                    "no-override flex-1 py-1.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-500 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-indigo-500 h-9",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "flex gap-1 shrink-0",
                                  children: ["👍", "😍", "🔥"].map((F, Be) =>
                                    jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        onClick: () => ie(F),
                                        className:
                                          "no-override p-1.5 text-xs bg-slate-800 hover:bg-slate-750 rounded-lg cursor-pointer transition-all active:scale-90",
                                        children: F,
                                      },
                                      Be,
                                    ),
                                  ),
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => ie(),
                                  className:
                                    "no-override h-9 w-9 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl cursor-pointer shrink-0 flex items-center justify-center",
                                  children: jsxRuntimeExports.jsx(Send, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 block font-bold uppercase tracking-wider",
                              children:
                                "Trò chuyện tức thời qua Internet (IM):",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                "Tớ vừa tải slide lên Google Drive của nhóm rồi nha! 👍",
                                "Mọi người online họp nhóm bàn phân chia slide báo cáo đi thôi! 🔥",
                                "Đồng ý nhé, tớ bắt đầu bật webcam cuộc gọi nhóm đây.",
                              ].map((F, Be) =>
                                jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => ie(F),
                                    className:
                                      "px-2.5 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[10.5px] font-bold text-slate-350 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all",
                                    children: ['💬 "', F, '"'],
                                  },
                                  Be,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  n === 4 &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 p-8 sm:p-5 px-5 sm:px-6 border-b border-slate-800 flex items-center gap-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 shrink-0",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-2.5 w-2.5 rounded-full bg-red-500/80",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-2.5 w-2.5 rounded-full bg-yellow-500/80",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-2.5 w-2.5 rounded-full bg-green-500/80",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex-1 max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl py-1 px-5 sm:px-5 flex items-center gap-2 text-[10.5px] text-slate-400 font-mono",
                                  children: [
                                    jsxRuntimeExports.jsx(Globe, {
                                      className: "h-3 w-3 text-slate-500",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-slate-500",
                                      children: "https://",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-slate-200",
                                      children: "www.smarttech-academy.edu.vn",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "relative bg-slate-950 h-[350px] w-full overflow-hidden flex flex-col justify-between p-5 sm:p-6",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "absolute inset-0 p-5 sm:p-6 overflow-y-auto pb-20 select-none opacity-20 pointer-events-none",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "flex items-center justify-between border-b border-slate-900 pb-3 mb-4",
                                      children: jsxRuntimeExports.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-semibold font-black",
                                            children: "ST",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-white",
                                            children:
                                              "SmartTech Academy Portal",
                                          }),
                                        ],
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-900 p-5 sm:p-6 rounded-3xl space-y-2 text-left mb-3",
                                      children: [
                                        jsxRuntimeExports.jsx("h3", {
                                          className:
                                            "text-sm sm:text-base font-medium font-black text-white",
                                          children:
                                            "CHƯƠNG TRÌNH LUYỆN THI TIN HỌC QUỐC TẾ IC3 GS6",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 leading-normal",
                                          children:
                                            "Trang bị kỹ năng số cốt lõi và chinh phục chứng chỉ tin học quốc tế danh giá. Ưu đãi 30% khi nhắn tin trực tuyến hôm nay!",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                _e
                                  ? jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "absolute bottom-3 right-3 w-[280px] sm:w-[320px] bg-white dark:bg-slate-900 border border-amber-500/60 rounded-2xl shadow-2xl flex flex-col h-[320px] z-20 animate-scaleUp",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "bg-amber-500/10 dark:bg-slate-950 p-2.5 px-3 rounded-t-2xl border-b border-amber-500/20 dark:border-slate-800 flex items-center justify-between text-sm",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "h-7 w-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs relative",
                                                  children: [
                                                    "LT",
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-white dark:border-slate-900",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "text-left",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "font-extrabold text-slate-800 dark:text-slate-100 block text-xs",
                                                        children:
                                                          "Trợ Giúp Học Viên",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9px] text-slate-500 dark:text-slate-400 block",
                                                        children:
                                                          "Tư vấn viên: Linh (Đang Online)",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => Ue(!1),
                                              className:
                                                "no-override p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md text-slate-500 dark:text-slate-400 cursor-pointer",
                                              children: jsxRuntimeExports.jsx(
                                                Minus,
                                                { className: "h-4 w-4" },
                                              ),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex-1 p-3 overflow-y-auto space-y-2 bg-slate-50 dark:bg-slate-900 flex flex-col justify-end",
                                          children: [
                                            ge.map((F, Be) => {
                                              const S = F.sender === "user";
                                              return jsxRuntimeExports.jsxs(
                                                "div",
                                                {
                                                  className: `flex flex-col max-w-[85%] ${S ? "self-end items-end" : "self-start items-start"} animate-scaleUp`,
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className: `p-2 px-3 rounded-2xl text-xs font-semibold leading-relaxed shadow-xs ${S ? "bg-amber-500 text-slate-950 rounded-br-none font-bold" : "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none"}`,
                                                        children: F.text,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[8px] text-slate-500 dark:text-slate-400 mt-0.5 font-mono uppercase",
                                                        children: F.time,
                                                      },
                                                    ),
                                                  ],
                                                },
                                                Be,
                                              );
                                            }),
                                            Te &&
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "self-start flex flex-col items-start",
                                                children:
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "bg-slate-200 dark:bg-slate-800 text-slate-500 p-2 px-3 rounded-2xl text-xs font-medium flex items-center gap-1.5",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce animate-delay-100",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce animate-delay-200",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "h-1.5 w-1.5 bg-slate-500 rounded-full animate-bounce animate-delay-300",
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
                                            "p-2 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 rounded-b-2xl flex gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx("input", {
                                              type: "text",
                                              placeholder:
                                                "Nhập câu hỏi của em...",
                                              value: Ae,
                                              onChange: (F) =>
                                                Q(F.target.value),
                                              onKeyDown: (F) =>
                                                F.key === "Enter" && Ke(Ae),
                                              className:
                                                "no-override flex-1 py-1 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-xs font-medium focus:outline-hidden focus:border-amber-500 h-9",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => Ke(Ae),
                                              className:
                                                "no-override h-9 w-9 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl cursor-pointer flex items-center justify-center shrink-0 shadow-xs",
                                              children: jsxRuntimeExports.jsx(
                                                Send,
                                                { className: "h-3.5 w-3.5" },
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: () => Ue(!0),
                                      className:
                                        "no-override absolute bottom-3 right-3 h-12 w-12 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xl flex items-center justify-center cursor-pointer transition-all hover:scale-105",
                                      children: jsxRuntimeExports.jsx(
                                        MessageCircle,
                                        { className: "h-5 w-5" },
                                      ),
                                    }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 block font-bold uppercase tracking-wider",
                              children:
                                "Nhấp để gửi câu hỏi tư vấn trực tiếp trên Web:",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                "Em muốn đăng ký tư vấn nhận mã ưu đãi giảm học phí 30% khóa học IC3 GS6 ạ!",
                                "Học viện có hỗ trợ tài liệu học tập PDF gửi kèm không ạ?",
                                "Bên mình đào tạo trực tuyến qua Zoom hay qua nền tảng nào ạ?",
                              ].map((F, Be) =>
                                jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => {
                                      (Ue(!0), Ke(F));
                                    },
                                    className:
                                      "px-2.5 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-[10.5px] font-bold text-slate-350 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all",
                                    children: ['❓ "', F, '"'],
                                  },
                                  Be,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  n === 5 &&
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden p-8 sm:p-5 shadow-inner space-y-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 border border-slate-850 p-8 sm:p-5 rounded-3xl flex items-center justify-between",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx(Monitor, {
                                      className: "h-4 w-4 text-purple-400",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[10.5px] font-black text-slate-300 block",
                                          children: "Đang trình chiếu màn hình",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] text-slate-500 block font-bold",
                                          children:
                                            "Slide báo cáo đề tài thực tập công nghệ số",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-[8.5px] bg-red-600/10 text-red-400 border border-red-900/40 px-2 py-0.5 rounded-md font-bold animate-pulse",
                                  children: "● Đang ghi hình cuộc họp",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "grid grid-cols-2 gap-2.5",
                              children: ke.map((F) => {
                                const Be = F.id === "me",
                                  S = F.activeSpeaker;
                                return jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    className: `aspect-video rounded-3xl relative overflow-hidden bg-slate-950 border transition-all ${S ? "border-purple-500 ring-2 ring-purple-500/20" : "border-slate-850"}`,
                                    children: [
                                      !Be || C
                                        ? jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-5",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "absolute inset-0 opacity-15 bg-gradient-to-tr from-purple-800 to-indigo-900",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className: `h-10 w-10 rounded-full flex items-center justify-center text-white font-black text-sm sm:text-base font-medium ${Be ? "bg-emerald-600" : F.avatarBg}`,
                                                children: F.name.charAt(0),
                                              }),
                                            ],
                                          })
                                        : jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-600 text-sm sm:text-base font-semibold gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(VideoOff, {
                                                className: "h-5 w-5",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children: "Camera đã tắt",
                                              }),
                                            ],
                                          }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "absolute bottom-1.5 inset-x-1.5 flex items-center justify-between text-[8.5px] bg-black/60 px-2 py-1 rounded-md text-slate-300",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "font-bold truncate max-w-[80%]",
                                            children: F.name,
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            children:
                                              Be && !ot
                                                ? jsxRuntimeExports.jsx(
                                                    MicOff,
                                                    {
                                                      className:
                                                        "h-3 w-3 text-red-400",
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex gap-[1.5px] items-end h-2.5",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "w-[1.5px] bg-emerald-400 rounded-full transition-all",
                                                            style: {
                                                              height: `${Math.min(F.audioLevel, 100)}%`,
                                                            },
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "w-[1.5px] bg-emerald-400 rounded-full transition-all",
                                                            style: {
                                                              height: `${Math.min(F.audioLevel * 0.7, 100)}%`,
                                                            },
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "w-[1.5px] bg-emerald-400 rounded-full transition-all",
                                                            style: {
                                                              height: `${Math.min(F.audioLevel * 0.4, 100)}%`,
                                                            },
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  F.id,
                                );
                              }),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between bg-slate-900 p-8 sm:p-5 px-5 sm:px-6 rounded-3xl border border-slate-800 text-sm sm:text-base font-medium",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (w(!ot), u(5));
                                  },
                                  className: `no-override px-4 py-2 rounded-2xl font-extrabold flex items-center gap-1.5 cursor-pointer transition-all ${ot ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md" : "bg-rose-600 text-white hover:bg-rose-700 shadow-md"}`,
                                  children: [
                                    ot
                                      ? jsxRuntimeExports.jsx(Mic, {
                                          className: "h-4 w-4",
                                        })
                                      : jsxRuntimeExports.jsx(MicOff, {
                                          className: "h-4 w-4",
                                        }),
                                    ot ? "Tắt Mic" : "Bật Mic",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (Ee(!C), u(5));
                                  },
                                  className: `no-override px-4 py-2 rounded-2xl font-extrabold flex items-center gap-1.5 cursor-pointer transition-all ${C ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md" : "bg-rose-600 text-white hover:bg-rose-700 shadow-md"}`,
                                  children: [
                                    C
                                      ? jsxRuntimeExports.jsx(Video, {
                                          className: "h-4 w-4",
                                        })
                                      : jsxRuntimeExports.jsx(VideoOff, {
                                          className: "h-4 w-4",
                                        }),
                                    C ? "Tắt Camera" : "Bật Camera",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-500 font-bold font-mono",
                              children: "Họp trực tuyến đa phương tiện",
                            }),
                          ],
                        }),
                      ],
                    }),
                  n === 6 &&
                    jsxRuntimeExports.jsx("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto scrollbar-none",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "border-b border-slate-800 pb-3 flex items-center justify-between",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("h3", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-white",
                                    children:
                                      "My Space // Nhật ký học tập cá nhân",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400",
                                    children:
                                      "Nơi đăng tải các câu chuyện, bài học và cảm nghĩ cá nhân hằng ngày.",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-[9.5px] bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-md font-bold border border-sky-900",
                                children: "Mô phỏng Blog cá nhân",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("form", {
                            onSubmit: mt,
                            className:
                              "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-850 space-y-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold text-sky-400 font-extrabold uppercase tracking-wider block",
                                children: "✍️ Tạo một bài nhật ký mới:",
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                children: [
                                  jsxRuntimeExports.jsx("input", {
                                    type: "text",
                                    placeholder: "Tiêu đề bài viết...",
                                    value: Fe,
                                    onChange: (F) => rt(F.target.value),
                                    className:
                                      "p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-bold text-slate-100 placeholder:text-slate-500 focus:outline-hidden focus:border-sky-500",
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    value: yt,
                                    onChange: (F) => xt(F.target.value),
                                    className:
                                      "p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-300 font-bold focus:outline-hidden",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "Chia sẻ hằng ngày",
                                        children: "Chia sẻ hằng ngày",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "Kinh nghiệm học tập",
                                        children: "Kinh nghiệm học tập",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "Công nghệ & Đời sống",
                                        children: "Công nghệ & Đời sống",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("textarea", {
                                rows: 3,
                                placeholder:
                                  "Viết suy nghĩ hằng ngày của bạn lên đây... (ví dụ: Cảm nghĩ sau buổi học hôm nay về công cụ số)",
                                value: ve,
                                onChange: (F) => Ye(F.target.value),
                                className:
                                  "w-full p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-200 placeholder:text-slate-500 focus:outline-hidden focus:border-sky-500 resize-none leading-relaxed",
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className: "flex justify-end",
                                children: jsxRuntimeExports.jsxs("button", {
                                  type: "submit",
                                  className:
                                    "px-5 sm:px-6 py-3 bg-sky-600 hover:bg-sky-500 text-slate-950 rounded-3xl text-sm sm:text-base font-semibold font-black cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all flex items-center gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx(Plus, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    " Đăng tải lên Blog",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold uppercase tracking-wider block",
                                children: "📚 Các bài viết đã đăng:",
                              }),
                              ht.map((F) =>
                                jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    className:
                                      "bg-slate-950/80 p-8 sm:p-5 border border-slate-850 rounded-3xl space-y-2 text-left animate-fadeIn",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md font-bold",
                                            children: F.category,
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-500 font-bold",
                                            children: F.date,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("h4", {
                                        className:
                                          "text-sm sm:text-base font-extrabold text-slate-100",
                                        children: F.title,
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-300 leading-relaxed whitespace-pre-line",
                                        children: F.body,
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between pt-1 border-t border-slate-900 text-sm sm:text-base font-semibold",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "text-slate-500 font-semibold",
                                            children: [
                                              "Tác giả: ",
                                              jsxRuntimeExports.jsx("strong", {
                                                className: "text-slate-300",
                                                children: F.author,
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: () => Dt(F.id),
                                            className:
                                              "flex items-center gap-1 text-slate-400 hover:text-sky-400 font-bold transition-colors cursor-pointer",
                                            children: [
                                              jsxRuntimeExports.jsx(ThumbsUp, {
                                                className: "h-3 w-3",
                                              }),
                                              " Thích (",
                                              F.likes,
                                              ")",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  F.id,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                    }),
                  n === 7 &&
                    jsxRuntimeExports.jsx("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row gap-4 max-h-[380px] overflow-y-auto md:overflow-hidden",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "md:w-1/2 flex flex-col gap-3 md:overflow-y-auto scrollbar-none text-left",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center justify-between pb-1.5 border-b border-slate-800 shrink-0",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 font-bold uppercase tracking-wider",
                                    children: "Chủ đề thảo luận:",
                                  }),
                                  jsxRuntimeExports.jsx("button", {
                                    onClick: () => Mt(!ft),
                                    className:
                                      "px-2 py-1 bg-rose-600 hover:bg-rose-500 text-slate-950 rounded-3xl text-[9px] font-black cursor-pointer transition-colors",
                                    children: ft ? "Hủy" : "+ Đặt Câu Hỏi",
                                  }),
                                ],
                              }),
                              ft
                                ? jsxRuntimeExports.jsxs("form", {
                                    onSubmit: D,
                                    className:
                                      "bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-850 space-y-2 animate-fadeIn shrink-0",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9.5px] text-rose-400 font-black uppercase tracking-wider block",
                                        children: "Hỏi cộng đồng:",
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "text",
                                        placeholder:
                                          "Đặt tiêu đề câu hỏi ngắn gọn...",
                                        value: Pe,
                                        onChange: (F) => W(F.target.value),
                                        className:
                                          "w-full p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-semibold text-slate-100 font-bold placeholder:text-slate-500 focus:outline-hidden focus:border-rose-500",
                                        required: !0,
                                      }),
                                      jsxRuntimeExports.jsx("textarea", {
                                        rows: 3,
                                        placeholder:
                                          "Mô tả chi tiết câu hỏi cần mọi người thảo luận giải đáp giúp...",
                                        value: Me,
                                        onChange: (F) => et(F.target.value),
                                        className:
                                          "w-full p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-semibold text-slate-300 placeholder:text-slate-500 focus:outline-hidden focus:border-rose-500 resize-none leading-relaxed",
                                        required: !0,
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "flex justify-end",
                                        children: jsxRuntimeExports.jsx(
                                          "button",
                                          {
                                            type: "submit",
                                            className:
                                              "px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-slate-950 rounded-md text-sm sm:text-base font-semibold font-black cursor-pointer",
                                            children: "Gửi câu hỏi",
                                          },
                                        ),
                                      }),
                                    ],
                                  })
                                : null,
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "space-y-2 md:overflow-y-auto flex-1 scrollbar-none pr-0.5",
                                children: ye.map((F) =>
                                  jsxRuntimeExports.jsxs(
                                    "div",
                                    {
                                      onClick: () => Le(F.id),
                                      className: `p-8 sm:p-5 rounded-3xl border text-left cursor-pointer transition-all ${me === F.id ? "bg-rose-600/10 border-rose-500/50" : "bg-slate-950/70 border-slate-850 hover:border-slate-700"}`,
                                      children: [
                                        jsxRuntimeExports.jsx("h4", {
                                          className:
                                            "text-sm sm:text-base font-extrabold text-slate-100 leading-snug hover:text-rose-400 transition-colors line-clamp-2",
                                          children: F.title,
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between text-[9px] text-slate-400 mt-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("span", {
                                              className:
                                                "font-semibold text-slate-500",
                                              children: ["@", F.author],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "flex gap-2 font-bold",
                                              children: [
                                                jsxRuntimeExports.jsxs("span", {
                                                  className: "text-rose-400",
                                                  children: ["▲ ", F.votes],
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  children: [
                                                    "💬 ",
                                                    F.repliesCount,
                                                    " phản hồi",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    F.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "md:w-1/2 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-4 flex flex-col justify-between text-left md:h-[350px]",
                            children:
                              me !== null
                                ? (() => {
                                    const F = ye.find((Be) => Be.id === me);
                                    return F
                                      ? jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex flex-col h-full justify-between",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "space-y-3 overflow-y-auto scrollbar-none flex-1 pr-0.5",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-1.5 border-b border-slate-800 pb-3",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center justify-between text-[9px] text-slate-500",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              children: [
                                                                "Đăng bởi ",
                                                                jsxRuntimeExports.jsxs(
                                                                  "strong",
                                                                  {
                                                                    children: [
                                                                      "@",
                                                                      F.author,
                                                                    ],
                                                                  },
                                                                ),
                                                                " (",
                                                                F.time,
                                                                ")",
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "button",
                                                            {
                                                              onClick: (Be) =>
                                                                Ve(F.id, Be),
                                                              className:
                                                                "text-rose-400 hover:text-rose-300 font-bold bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.5 rounded-md cursor-pointer",
                                                              title:
                                                                "Biểu quyết tăng mức độ quan tâm của chủ đề",
                                                              children: [
                                                                "▲ Ủng hộ (",
                                                                F.votes,
                                                                ")",
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "h3",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-extrabold text-slate-100 leading-snug",
                                                        children: F.title,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-850/60",
                                                      children: F.content,
                                                    }),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-2.5",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9.5px] text-slate-400 font-bold block uppercase tracking-wider",
                                                        children: [
                                                          "Cộng đồng thảo luận giải đáp (",
                                                          F.repliesCount,
                                                          "):",
                                                        ],
                                                      },
                                                    ),
                                                    F.replies.length > 0
                                                      ? F.replies.map((Be, S) =>
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "bg-slate-950/60 p-8 sm:p-5 border border-slate-850 rounded-3xl space-y-1.5 text-left animate-fadeIn flex gap-2 items-start",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "div",
                                                                  {
                                                                    className: `h-5 w-5 rounded-full shrink-0 flex items-center justify-center text-white font-extrabold text-[8px] ${Be.avatarBg}`,
                                                                    children:
                                                                      Be.author.charAt(
                                                                        0,
                                                                      ),
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "flex-1 min-w-0",
                                                                    children: [
                                                                      jsxRuntimeExports.jsxs(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "flex items-center justify-between text-[8px] text-slate-400 font-semibold mb-0.5",
                                                                          children:
                                                                            [
                                                                              jsxRuntimeExports.jsxs(
                                                                                "span",
                                                                                {
                                                                                  children:
                                                                                    [
                                                                                      "@",
                                                                                      Be.author,
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              jsxRuntimeExports.jsx(
                                                                                "span",
                                                                                {
                                                                                  children:
                                                                                    Be.time,
                                                                                },
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsx(
                                                                        "p",
                                                                        {
                                                                          className:
                                                                            "text-[10.5px] text-slate-300 leading-normal",
                                                                          children:
                                                                            Be.text,
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                            S,
                                                          ),
                                                        )
                                                      : jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[10.5px] text-slate-500 italic block py-3",
                                                            children:
                                                              "Chưa có ai phản hồi thảo luận này. Hãy viết câu trả lời thảo luận đầu tiên của bạn dưới đây!",
                                                          },
                                                        ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("form", {
                                              onSubmit: Re,
                                              className:
                                                "border-t border-slate-800 pt-2 shrink-0 flex gap-2 bg-slate-950/40 p-1 rounded-3xl",
                                              children: [
                                                jsxRuntimeExports.jsx("input", {
                                                  type: "text",
                                                  placeholder:
                                                    "Gõ nội dung giải đáp, thảo luận công khai...",
                                                  value: Je,
                                                  onChange: (Be) =>
                                                    Et(Be.target.value),
                                                  className:
                                                    "flex-1 p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-200 focus:outline-hidden focus:border-rose-500 placeholder:text-slate-500",
                                                  required: !0,
                                                }),
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "submit",
                                                    className:
                                                      "px-5 sm:px-5 py-3 bg-rose-600 hover:bg-rose-500 text-slate-950 rounded-3xl text-sm sm:text-base font-semibold font-black cursor-pointer transition-colors",
                                                    children: "Gửi",
                                                  },
                                                ),
                                              ],
                                            }),
                                          ],
                                        })
                                      : jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-medium text-slate-500 italic",
                                          children:
                                            "Chọn một thảo luận để xem chi tiết.",
                                        });
                                  })()
                                : jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center h-full text-slate-500 text-sm sm:text-base font-medium italic gap-1.5 p-5 sm:p-6",
                                    children: [
                                      jsxRuntimeExports.jsx(
                                        CircleQuestionMark,
                                        { className: "h-6 w-6 text-slate-600" },
                                      ),
                                      jsxRuntimeExports.jsx("span", {
                                        children:
                                          "Chọn một câu hỏi thảo luận bên trái để xem ý kiến từ cộng đồng!",
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                    }),
                  n === 8 &&
                    jsxRuntimeExports.jsx("div", {
                      className: "space-y-4 animate-fadeIn",
                      children: jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-start min-h-[400px]",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "w-full md:w-[280px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 flex flex-col justify-between shadow-xl relative select-none shrink-0",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold mb-3 px-1",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    children: "Mạng di động (PSTN/GSM)",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-2 w-1 bg-emerald-500 rounded-xs",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-2.5 w-1 bg-emerald-500 rounded-xs",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-3 w-1 bg-emerald-500 rounded-xs",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "h-3.5 w-1 bg-emerald-500 rounded-xs",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Nt === "idle" &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex-1 flex flex-col justify-between space-y-3",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `bg-slate-100 dark:bg-slate-900 p-3 rounded-2xl border text-center min-h-[56px] flex flex-col justify-center transition-all ${Ut ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20" : "border-slate-200 dark:border-slate-800"}`,
                                      children: Ut
                                        ? jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-xs font-semibold text-rose-600 dark:text-rose-400 leading-normal",
                                            children: Ut,
                                          })
                                        : jsxRuntimeExports.jsxs(
                                            jsxRuntimeExports.Fragment,
                                            {
                                              children: [
                                                Ge
                                                  ? jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-base font-mono font-extrabold text-teal-600 dark:text-teal-400 tracking-wider",
                                                        children: Ge,
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-xs text-slate-400 italic font-medium",
                                                        children:
                                                          "Nhập số hoặc chọn danh bạ",
                                                      },
                                                    ),
                                                At &&
                                                  Ge &&
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[10px] text-slate-500 dark:text-slate-400 font-bold block mt-0.5",
                                                      children: At,
                                                    },
                                                  ),
                                              ],
                                            },
                                          ),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "*",
                                        "0",
                                        "#",
                                      ].map((F) =>
                                        jsxRuntimeExports.jsx(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => {
                                              (hs(""),
                                                Lt(""),
                                                Ze((Be) =>
                                                  Be.length < 15 ? Be + F : Be,
                                                ));
                                            },
                                            className:
                                              "no-override h-10 w-full bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-xl text-sm font-bold font-mono transition-all active:scale-95 cursor-pointer flex items-center justify-center",
                                            children: F,
                                          },
                                          F,
                                        ),
                                      ),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center justify-between gap-2 px-1 pt-1",
                                      children: [
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => {
                                            (hs(""), Ze(""), Lt(""));
                                          },
                                          className:
                                            "no-override px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-bold cursor-pointer",
                                          children: "Xóa hết",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () =>
                                            ws(Ge || "0903 456 789"),
                                          className:
                                            "no-override h-11 w-11 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer",
                                          children: jsxRuntimeExports.jsx(
                                            Phone,
                                            {
                                              className:
                                                "h-5 w-5 fill-white text-white",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => {
                                            (hs(""), Ze((F) => F.slice(0, -1)));
                                          },
                                          className:
                                            "no-override px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-mono text-sm font-bold cursor-pointer",
                                          children: "⌫",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              Nt === "calling" &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex-1 flex flex-col justify-between py-6 text-center",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-14 w-14 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto animate-pulse",
                                          children: jsxRuntimeExports.jsx(
                                            PhoneCall,
                                            { className: "h-7 w-7" },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block animate-pulse",
                                              children: "ĐANG KẾT NỐI...",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm font-bold text-slate-800 dark:text-slate-100 block truncate max-w-[180px] mx-auto mt-1",
                                              children: At || "Số máy tự gõ",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono block mt-0.5",
                                              children: Ge,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: fs,
                                      className:
                                        "no-override h-11 w-11 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer mt-4",
                                      title: "Dừng cuộc gọi",
                                      children: jsxRuntimeExports.jsx(
                                        PhoneOff,
                                        { className: "h-5 w-5" },
                                      ),
                                    }),
                                  ],
                                }),
                              Nt === "connected" &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex-1 flex flex-col justify-between py-3 text-center",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider inline-block",
                                          children: "CUỘC GỌI TRỰC TIẾP (PSTN)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm font-bold text-slate-800 dark:text-slate-100 block truncate max-w-[180px] mx-auto pt-2",
                                          children: At || "Số máy tự gõ",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block mt-0.5",
                                          children: [
                                            Math.floor(It / 60)
                                              .toString()
                                              .padStart(2, "0"),
                                            ":",
                                            (It % 60)
                                              .toString()
                                              .padStart(2, "0"),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "flex items-center justify-center gap-1 h-6 my-2",
                                          children: [1, 2, 3, 4, 5, 6, 7].map(
                                            (F) => {
                                              const Be = [
                                                  20, 80, 50, 100, 60, 30, 70,
                                                ],
                                                S = Math.random() * 0.5;
                                              return jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  className:
                                                    "w-1 bg-teal-500 rounded-full animate-pulse",
                                                  style: {
                                                    height: `${Be[F - 1]}%`,
                                                    animationDuration: `${0.6 + S}s`,
                                                  },
                                                },
                                                F,
                                              );
                                            },
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-2xl min-h-[64px] flex items-center justify-center text-center",
                                      children: jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-xs font-semibold text-teal-700 dark:text-teal-300 leading-relaxed italic animate-fadeIn",
                                        children: Zt || "Đang kết nối...",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-center gap-3 my-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          onClick: () => Ot(!Ls),
                                          className: `p-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 w-16 transition-colors cursor-pointer ${Ls ? "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400" : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(MicOff, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: Ls
                                                ? "Đã tắt"
                                                : "Tắt tiếng",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          onClick: () => st(!Ce),
                                          className: `p-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 w-16 transition-colors cursor-pointer ${Ce ? "bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400" : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`,
                                          children: [
                                            jsxRuntimeExports.jsx(Volume2, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: Ce
                                                ? "Loa ngoài"
                                                : "Loa trong",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: fs,
                                      className:
                                        "no-override h-11 w-11 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer mt-1",
                                      title: "Dừng cuộc gọi",
                                      children: jsxRuntimeExports.jsx(
                                        PhoneOff,
                                        { className: "h-5 w-5" },
                                      ),
                                    }),
                                  ],
                                }),
                              Nt === "ended" &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex-1 flex flex-col justify-center py-6 text-center animate-scaleUp",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "h-14 w-14 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-2",
                                      children: jsxRuntimeExports.jsx(
                                        PhoneOff,
                                        { className: "h-6 w-6" },
                                      ),
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm font-bold text-red-600 dark:text-red-400 block uppercase",
                                      children: "CUỘC GỌI ĐÃ KẾT THÚC",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-xs text-slate-500 dark:text-slate-400 block font-medium mt-1",
                                      children:
                                        "Lưu trữ nhật ký thoại thành công",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "flex-1 w-full flex flex-col justify-between text-left space-y-4",
                            children: jsxRuntimeExports.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "border-b border-slate-200 dark:border-slate-800 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block",
                                      children: "📞 Danh bạ liên lạc mô phỏng:",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                      children:
                                        "Nhấp vào danh bạ bất kỳ bên dưới để thực hiện cuộc gọi thoại trực tiếp qua mạng di động:",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "space-y-2.5 max-h-[260px] overflow-y-auto pr-1",
                                  children: [
                                    {
                                      name: "Tổng đài khẩn cấp 115",
                                      phone: "115",
                                      desc: "Đường dây nóng cứu hộ y tế khẩn cấp, mạng viễn thông ưu tiên.",
                                    },
                                    {
                                      name: "Nhóm trưởng Khánh Nam",
                                      phone: "0912 888 999",
                                      desc: "Thảo luận gấp về tiến độ chuẩn bị bài học nhóm IC3.",
                                    },
                                    {
                                      name: "Cô giáo Thảo Vy",
                                      phone: "0903 456 789",
                                      desc: "Hỏi han cô về giờ giấc và thủ tục thi chứng chỉ tin học.",
                                    },
                                  ].map((F, Be) =>
                                    jsxRuntimeExports.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        disabled: Nt !== "idle",
                                        onClick: () => {
                                          (Ze(F.phone), ws(F.phone, F.name));
                                        },
                                        className: `w-full p-3 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${Nt !== "idle" ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500/50 hover:bg-teal-50/50 dark:hover:bg-slate-800/80 shadow-xs"}`,
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-9 w-9 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5",
                                            children: F.name.charAt(0),
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between gap-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-sm font-bold text-slate-800 dark:text-slate-100 truncate",
                                                      children: F.name,
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-xs font-mono font-bold text-teal-600 dark:text-teal-400 shrink-0",
                                                      children: F.phone,
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug",
                                                children: F.desc,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      Be,
                                    ),
                                  ),
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
      });
    }

    return Lab9;
  };
})();
