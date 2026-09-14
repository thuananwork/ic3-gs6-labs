/**
 * Lab 20: Lưu đồ Thuật toán (Flowchart)
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab20 = window.AGY_LABS[20] = function (env) {
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

    function Lab20({ onSuccess: a }) {
      const [n, i] = reactExports.useState("theory"),
        [l, c] = reactExports.useState(!1),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState({}),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState(0),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(null),
        [A, O] = reactExports.useState(null),
        [L, le] = reactExports.useState(null),
        [P, G] = reactExports.useState({ x: 0, y: 0 }),
        [ee, ce] = reactExports.useState({});
      reactExports.useEffect(() => {
        n === "simulator" && z(null);
      }, [n]);
      const V = [
          {
            id: "ex1_node0",
            shape: "terminator",
            correctText: "Bắt đầu",
            x: 430,
            y: 50,
            width: 140,
            height: 46,
            connections: ["ex1_node1"],
          },
          {
            id: "ex1_node1",
            shape: "io",
            correctText: "Nhập hai số a và b",
            x: 430,
            y: 180,
            width: 170,
            height: 46,
            connections: ["ex1_node2"],
          },
          {
            id: "ex1_node2",
            shape: "decision",
            correctText: "Kiểm tra: a = 0?",
            x: 430,
            y: 270,
            width: 150,
            height: 72,
            connections: ["ex1_node3", "ex1_node4"],
            connectionLabels: { ex1_node3: "Đúng", ex1_node4: "Sai" },
          },
          {
            id: "ex1_node3",
            shape: "decision",
            correctText: "Kiểm tra: b = 0?",
            x: 260,
            y: 380,
            width: 150,
            height: 72,
            connections: ["ex1_node5", "ex1_node6"],
            connectionLabels: { ex1_node5: "Đúng", ex1_node6: "Sai" },
          },
          {
            id: "ex1_node4",
            shape: "process",
            correctText: "Tính x = -b / a",
            x: 630,
            y: 380,
            width: 150,
            height: 46,
            connections: ["ex1_node7"],
          },
          {
            id: "ex1_node5",
            shape: "io",
            correctText: 'Xuất: "Phương trình vô số nghiệm"',
            x: 130,
            y: 500,
            width: 180,
            height: 46,
            connections: ["ex1_node9"],
          },
          {
            id: "ex1_node6",
            shape: "io",
            correctText: 'Xuất: "Phương trình vô nghiệm"',
            x: 380,
            y: 500,
            width: 180,
            height: 46,
            connections: ["ex1_node9"],
          },
          {
            id: "ex1_node7",
            shape: "delay",
            correctText: "Tạm dừng 2 giây",
            x: 630,
            y: 470,
            width: 150,
            height: 46,
            connections: ["ex1_node8"],
          },
          {
            id: "ex1_node8",
            shape: "io",
            correctText: 'Xuất: "Nghiệm x"',
            x: 630,
            y: 560,
            width: 150,
            height: 46,
            connections: ["ex1_node9"],
          },
          {
            id: "ex1_node9",
            shape: "terminator",
            correctText: "Kết thúc",
            x: 430,
            y: 650,
            width: 140,
            height: 46,
            connections: [],
          },
        ],
        pe = [
          {
            id: "ex2_node0",
            shape: "terminator",
            correctText: "Bắt đầu",
            x: 430,
            y: 50,
            width: 140,
            height: 46,
            connections: ["ex2_node1"],
          },
          {
            id: "ex2_node1",
            shape: "io",
            correctText: "Nhập: Tên đăng nhập & Mật khẩu",
            x: 430,
            y: 180,
            width: 220,
            height: 46,
            connections: ["ex2_node2"],
          },
          {
            id: "ex2_node2",
            shape: "decision",
            correctText: "Mật khẩu có đúng không?",
            x: 430,
            y: 270,
            width: 170,
            height: 72,
            connections: ["ex2_node3", "ex2_node4"],
            connectionLabels: { ex2_node3: "Sai", ex2_node4: "Đúng" },
          },
          {
            id: "ex2_node3",
            shape: "io",
            correctText: 'Xuất: Thông báo "Mật khẩu không đúng"',
            x: 230,
            y: 385,
            width: 230,
            height: 46,
            connections: ["ex2_node9"],
          },
          {
            id: "ex2_node4",
            shape: "process",
            correctText: "Hệ thống tạo và gửi mã OTP qua SMS",
            x: 630,
            y: 385,
            width: 230,
            height: 46,
            connections: ["ex2_node5"],
          },
          {
            id: "ex2_node5",
            shape: "delay",
            correctText: "Chờ 3 giây",
            x: 630,
            y: 475,
            width: 150,
            height: 46,
            connections: ["ex2_node6"],
          },
          {
            id: "ex2_node6",
            shape: "io",
            correctText: "Nhập: Người dùng nhập mã OTP",
            x: 630,
            y: 565,
            width: 210,
            height: 46,
            connections: ["ex2_node7"],
          },
          {
            id: "ex2_node7",
            shape: "decision",
            correctText: "Mã OTP có hợp lệ không?",
            x: 630,
            y: 655,
            width: 170,
            height: 72,
            connections: ["ex2_node8", "ex2_node9_succ"],
            connectionLabels: { ex2_node8: "Sai", ex2_node9_succ: "Đúng" },
          },
          {
            id: "ex2_node8",
            shape: "io",
            correctText: 'Xuất: Thông báo "Mã OTP sai"',
            x: 430,
            y: 740,
            width: 185,
            height: 46,
            connections: ["ex2_node9"],
          },
          {
            id: "ex2_node9_succ",
            shape: "process",
            correctText: "Cấp quyền truy cập tài khoản",
            x: 730,
            y: 740,
            width: 180,
            height: 46,
            connections: ["ex2_node9_out"],
          },
          {
            id: "ex2_node9_out",
            shape: "io",
            correctText: 'Xuất: Thông báo "Đăng nhập thành công"',
            x: 730,
            y: 835,
            width: 230,
            height: 46,
            connections: ["ex2_node9"],
          },
          {
            id: "ex2_node9",
            shape: "terminator",
            correctText: "Kết thúc",
            x: 230,
            y: 910,
            width: 140,
            height: 46,
            connections: [],
          },
        ],
        [Ie, se] = reactExports.useState({}),
        [de, _] = reactExports.useState({}),
        [U, Z] = reactExports.useState({}),
        [be, he] = reactExports.useState({ ex1_node0: !0 }),
        [E, v] = reactExports.useState([]),
        [K, te] = reactExports.useState(null),
        [je, Se] = reactExports.useState(null),
        [He, Xe] = reactExports.useState(null),
        [Qe, qe] = reactExports.useState({}),
        [at, ze] = reactExports.useState({}),
        [De, tt] = reactExports.useState({}),
        [it, oe] = reactExports.useState({ ex2_node0: !0 }),
        [ie, ge] = reactExports.useState([]),
        [ae, Ae] = reactExports.useState(null),
        [Q, Te] = reactExports.useState(null),
        [$e, _e] = reactExports.useState(null);
      reactExports.useEffect(() => {
        (Ue(), Ke());
      }, []);
      const Ue = () => {
          (se({}),
            _({}),
            Z({}),
            he({ ex1_node0: !0 }),
            v([]),
            te(null),
            Se(null),
            Xe(null),
            m(!1));
        },
        Ke = () => {
          (qe({}),
            ze({}),
            tt({}),
            oe({ ex2_node0: !0 }),
            ge([]),
            Ae(null),
            Te(null),
            _e(null),
            m(!1));
        },
        ot = [
          {
            id: "terminator",
            name: "Terminator",
            vietnameseName: "Bắt đầu / Kết thúc",
            description:
              "Hình oval dùng để đánh mốc điểm Khởi đầu hoặc Điểm cuối của quy trình.",
            color: "bg-red-500 border-red-700 text-white",
            bgGradient: "from-red-500 to-rose-600",
          },
          {
            id: "process",
            name: "Process",
            vietnameseName: "Tiến trình (Xử lý)",
            description:
              "Hình chữ nhật đại diện cho một tác vụ, tính toán, hoạt động gán.",
            color: "bg-orange-500 border-orange-700 text-white",
            bgGradient: "from-orange-500 to-amber-600",
          },
          {
            id: "decision",
            name: "Decision",
            vietnameseName: "Quyết định / Rẽ nhánh",
            description: "Hình thoi dùng để kiểm tra điều kiện Đúng / Sai.",
            color: "bg-emerald-500 border-emerald-700 text-white",
            bgGradient: "from-emerald-500 to-teal-600",
          },
          {
            id: "io",
            name: "Input / Output",
            vietnameseName: "Nhập / Xuất dữ liệu",
            description:
              "Hình bình hành dùng để nhận đầu vào hoặc hiển thị kết quả.",
            color: "bg-sky-500 border-sky-700 text-white",
            bgGradient: "from-sky-500 to-blue-600",
          },
          {
            id: "delay",
            name: "Delay",
            vietnameseName: "Sự trì hoãn / Chờ đợi",
            description:
              "Hình chữ D dùng để biểu thị khoảng thời gian trì hoãn.",
            color: "bg-purple-500 border-purple-700 text-white",
            bgGradient: "from-purple-500 to-indigo-600",
          },
        ];
      (reactExports.useEffect(() => {
        l && d && a();
      }, [l, d, a]),
        reactExports.useEffect(() => {
          const H =
              V.every((Le) => U[Le.id]) &&
              V.every((Le) =>
                Le.connections.every((Pe) =>
                  E.some((W) => W.from === Le.id && W.to === Pe),
                ),
              ),
            me =
              pe.every((Le) => De[Le.id]) &&
              pe.every((Le) =>
                Le.connections.every((Pe) =>
                  ie.some((W) => W.from === Le.id && W.to === Pe),
                ),
              );
          H && me && m(!0);
        }, [U, De, E, ie]));
      const w = () => {
          let H = 0;
          const me = {
            oval: "terminator",
            rect: "process",
            rhombus: "decision",
            parallelogram: "io",
            dshape: "delay",
          };
          let Le = !0;
          for (const Pe of Object.keys(me)) u[Pe] === me[Pe] ? H++ : (Le = !1);
          (k(H),
            f(!0),
            Le
              ? (c(!0), M(null))
              : M(
                  `Bạn trả lời đúng ${H}/5 câu. Hãy xem lại khái niệm và chọn lại các đáp án chưa chuẩn nhé!`,
                ));
        },
        C = () => {
          (g({}), f(!1), k(0), M(null));
        },
        Ee = (H) =>
          H.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[đĐ]/g, "d")
            .replace(/[^a-z0-9]/g, "")
            .trim(),
        ke = (H, me) => {
          (H.dataTransfer.setData("text/plain", me), O(me), te(null), Ae(null));
        },
        We = (H, me) => {
          const Le = A;
          if (Le) {
            if (Le === me)
              R === 1
                ? (se((Pe) => ({ ...Pe, [H]: !0 })), Se(null))
                : (qe((Pe) => ({ ...Pe, [H]: !0 })), Te(null));
            else {
              const Pe =
                "Sai hình rồi! Hãy quan sát kỹ hình dáng khối này chưa phù hợp.";
              R === 1 ? Se(Pe) : Te(Pe);
            }
            O(null);
          }
        },
        ht = (H, me, Le) => {
          if (me === Le)
            R === 1
              ? (_((Pe) => ({ ...Pe, [H]: me })),
                Z((Pe) => ({ ...Pe, [H]: !0 })),
                Se(null),
                Xe("Tuyệt vời! Đã lắp thành công và khớp nội dung của khối."))
              : (ze((Pe) => ({ ...Pe, [H]: me })),
                tt((Pe) => ({ ...Pe, [H]: !0 })),
                Te(null),
                _e("Tuyệt vời! Đã lắp thành công và khớp nội dung của khối."));
          else {
            const Pe =
              "Nội dung này không phù hợp với bước thuật toán ở vị trí này. Hãy xem kỹ diễn giải bên trái nhé!";
            R === 1 ? Se(Pe) : Te(Pe);
          }
        },
        lt = (H, me) => {
          if (R === 1) {
            const Le = V.find((Pe) => Pe.id === H);
            Le && Le.connections.includes(me)
              ? E.some((W) => W.from === H && W.to === me)
                ? Se("Mũi tên này đã được nối trước đó!")
                : (v((W) => [...W, { from: H, to: me }]),
                  he((W) => ({ ...W, [me]: !0 })),
                  Xe(
                    "Nối mũi tên thành công! Một luồng mới đã được kích hoạt.",
                  ),
                  Se(null))
              : Se(
                  "Luồng kết nối này không chính xác! Hãy quan sát kỹ thứ tự các bước bên trái.",
                );
          } else if (R === 2) {
            const Le = pe.find((Pe) => Pe.id === H);
            Le && Le.connections.includes(me)
              ? ie.some((W) => W.from === H && W.to === me)
                ? Te("Mũi tên này đã được nối trước đó!")
                : (ge((W) => [...W, { from: H, to: me }]),
                  oe((W) => ({ ...W, [me]: !0 })),
                  _e(
                    "Nối mũi tên thành công! Một luồng mới đã được kích hoạt.",
                  ),
                  Te(null))
              : Te(
                  "Luồng kết nối này không chính xác! Hãy quan sát kỹ thứ tự các bước bên trái.",
                );
          }
        },
        Fe = (H, me) => {
          me.stopPropagation();
          let Le = 0,
            Pe = 0;
          "touches" in me
            ? ((Le = me.touches[0].clientX), (Pe = me.touches[0].clientY))
            : ((Le = me.clientX), (Pe = me.clientY));
          const W = document.getElementById("flowchart-canvas-container");
          if (W) {
            const Me = W.getBoundingClientRect();
            G({ x: Le - Me.left, y: Pe - Me.top });
          }
          (le(H),
            R === 1
              ? (te(H),
                Xe(
                  "Đang nối mũi tên. Hãy kéo thả chuột hoặc nhấp vào khối tiếp theo để liên kết!",
                ))
              : (Ae(H),
                _e(
                  "Đang nối mũi tên. Hãy kéo thả chuột hoặc nhấp vào khối tiếp theo để liên kết!",
                )));
        },
        rt = (H) => {
          if (R === 1) {
            if (!U[H]) {
              Se(
                "Vui lòng hoàn thành kéo thả hình và chọn đúng nội dung cho khối này trước!",
              );
              return;
            }
            K === null
              ? (te(H),
                Xe(
                  "Kích hoạt chế độ nối mũi tên. Hãy nhấp vào hình tiếp theo trong luồng để vẽ mũi tên nhé!",
                ))
              : K === H
                ? (te(null), Xe(null))
                : (lt(K, H), te(null));
          } else if (R === 2) {
            if (!De[H]) {
              Te(
                "Vui lòng hoàn thành kéo thả hình và chọn đúng nội dung cho khối này trước!",
              );
              return;
            }
            ae === null
              ? (Ae(H),
                _e(
                  "Kích hoạt chế độ nối mũi tên. Hãy nhấp vào hình tiếp theo trong luồng để vẽ mũi tên nhé!",
                ))
              : ae === H
                ? (Ae(null), _e(null))
                : (lt(ae, H), Ae(null));
          }
        },
        yt = (H) => {
          if (!L) return;
          const me = document.getElementById("flowchart-canvas-container");
          if (me) {
            const Le = me.getBoundingClientRect();
            G({ x: H.clientX - Le.left, y: H.clientY - Le.top });
          }
        },
        xt = (H) => {
          if (!L) return;
          const me = document.getElementById("flowchart-canvas-container");
          if (me && H.touches.length > 0) {
            const Le = me.getBoundingClientRect();
            G({
              x: H.touches[0].clientX - Le.left,
              y: H.touches[0].clientY - Le.top,
            });
          }
        },
        ve = (H) => {
          if (!L) return;
          const me = document.getElementById("flowchart-canvas-container");
          let Le = !1;
          if (me) {
            const Pe = me.getBoundingClientRect(),
              W = H.clientX - Pe.left,
              Me = H.clientY - Pe.top,
              Je = (R === 1 ? V : pe).find((Et) => {
                const ft = Et.width / 2,
                  Mt = Et.height / 2;
                return (
                  W >= Et.x - ft &&
                  W <= Et.x + ft &&
                  Me >= Et.y - Mt &&
                  Me <= Et.y + Mt
                );
              });
            Je && Je.id !== L && (lt(L, Je.id), (Le = !0));
          }
          (le(null), Le && (R === 1 ? te(null) : Ae(null)));
        },
        Ye = (H) => {
          if (!L) return;
          const me = document.getElementById("flowchart-canvas-container");
          let Le = !1;
          if (me && H.changedTouches.length > 0) {
            const Pe = me.getBoundingClientRect(),
              W = H.changedTouches[0].clientX - Pe.left,
              Me = H.changedTouches[0].clientY - Pe.top,
              Je = (R === 1 ? V : pe).find((Et) => {
                const ft = Et.width / 2,
                  Mt = Et.height / 2;
                return (
                  W >= Et.x - ft &&
                  W <= Et.x + ft &&
                  Me >= Et.y - Mt &&
                  Me <= Et.y + Mt
                );
              });
            Je && Je.id !== L && (lt(L, Je.id), (Le = !0));
          }
          (le(null), Le && (R === 1 ? te(null) : Ae(null)));
        },
        mt = (H, me) =>
          R === 1
            ? E.some((Le) => Le.from === H && Le.to === me)
            : ie.some((Le) => Le.from === H && Le.to === me),
        Dt = (H) => {
          const me = A === H,
            Le = `w-full h-10 flex items-center justify-center shadow-md cursor-grab active:cursor-grabbing hover:scale-105 transition-transform ${me ? "ring-2 ring-amber-400 scale-105 border-amber-400" : ""}`,
            Pe = () => {
              (O(me ? null : H), te(null), Ae(null));
            };
          switch (H) {
            case "terminator":
              return jsxRuntimeExports.jsx("div", {
                draggable: "true",
                onDragStart: (W) => ke(W, H),
                onClick: Pe,
                className: `${Le} bg-gradient-to-r from-red-500 to-rose-600 border border-red-700 rounded-full`,
              });
            case "process":
              return jsxRuntimeExports.jsx("div", {
                draggable: "true",
                onDragStart: (W) => ke(W, H),
                onClick: Pe,
                className: `${Le} bg-gradient-to-r from-orange-500 to-amber-600 border border-orange-700 rounded-md`,
              });
            case "decision":
              return jsxRuntimeExports.jsx("div", {
                draggable: "true",
                onDragStart: (W) => ke(W, H),
                onClick: Pe,
                className: `w-32 h-14 relative flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 transition-transform ${me ? "ring-2 ring-amber-400 rounded-3xl scale-105" : ""}`,
                children: jsxRuntimeExports.jsx("svg", {
                  className: "absolute w-full h-full drop-shadow-sm",
                  viewBox: "0 0 100 100",
                  preserveAspectRatio: "none",
                  children: jsxRuntimeExports.jsx("polygon", {
                    points: "50,4 96,50 50,96 4,50",
                    fill: "#10b981",
                    stroke: me ? "#fbbf24" : "#047857",
                    strokeWidth: "2.5",
                  }),
                }),
              });
            case "io":
              return jsxRuntimeExports.jsx("div", {
                draggable: "true",
                onDragStart: (W) => ke(W, H),
                onClick: Pe,
                className: `${Le} bg-gradient-to-r from-sky-500 to-blue-600 border border-sky-700 transform skew-x-[-12deg] rounded-md`,
              });
            case "delay":
              return jsxRuntimeExports.jsx("div", {
                draggable: "true",
                onDragStart: (W) => ke(W, H),
                onClick: Pe,
                className: `${Le} bg-gradient-to-r from-purple-500 to-indigo-600 border border-purple-700 rounded-l-md rounded-r-2xl`,
              });
            default:
              return null;
          }
        },
        ye = (H, me, Le, Pe, W, Me) => {
          const et =
              "text-sm sm:text-base font-bold text-center leading-tight px-1.5 break-words max-w-[95%] select-none",
            Je =
              R === 1
                ? V.map((Ve) => Ve.correctText)
                : pe.map((Ve) => Ve.correctText),
            Et = R === 1 ? de : at;
          let ft = "border shadow-md";
          if (
            (Me
              ? (ft =
                  "border-2 border-amber-400 ring-4 ring-amber-400/30 scale-105")
              : W
                ? (ft = "border-2 border-dashed border-blue-400 animate-pulse")
                : Le && (ft = "border border-slate-700/50 shadow-sm"),
            !me)
          ) {
            const Ve = A === H.shape;
            return jsxRuntimeExports.jsx("div", {
              onDragOver: (Ge) => Ge.preventDefault(),
              onDrop: () => We(H.id, H.shape),
              onClick: (Ge) => {
                (Ge.stopPropagation(), Ve && We(H.id, H.shape));
              },
              className: `w-full h-full flex flex-col items-center justify-center border-2 border-dashed rounded-3xl bg-slate-900/30 cursor-pointer transition-all ${Ve ? "border-amber-400 bg-amber-500/10 animate-pulse scale-102" : "border-slate-800 hover:border-slate-700"}`,
              children: jsxRuntimeExports.jsx("span", {
                className:
                  "text-[9px] text-slate-500 font-bold uppercase tracking-widest text-center px-1",
                children: Ve ? "Nhấp đặt vào" : "Kéo hình vào",
              }),
            });
          }
          if (!Le) {
            const Ve = ee[H.id] || "";
            return jsxRuntimeExports.jsxs("div", {
              className:
                "w-full h-full flex flex-col items-center justify-center bg-slate-900 border border-amber-500/50 rounded-3xl p-1 text-center relative z-25",
              children: [
                jsxRuntimeExports.jsx("input", {
                  type: "text",
                  placeholder: "Nhập nội dung...",
                  value: Ve,
                  onClick: (Ge) => Ge.stopPropagation(),
                  onChange: (Ge) => {
                    Ge.stopPropagation();
                    const Ze = Ge.target.value;
                    (ce((Nt) => ({ ...Nt, [H.id]: Ze })),
                      Ee(Ze) === Ee(H.correctText) &&
                        ht(H.id, H.correctText, H.correctText));
                  },
                  className:
                    "w-full max-w-[95%] bg-slate-950 text-amber-300 font-extrabold border border-amber-500/40 rounded py-1 px-1.5 text-[8.5px] text-center focus:outline-none focus:ring-1 focus:ring-amber-500",
                }),
                jsxRuntimeExports.jsx("div", {
                  className:
                    "absolute top-full left-0 right-0 bg-slate-950 border border-slate-850 rounded shadow-lg z-50 max-h-40 overflow-y-auto mt-1 flex flex-col text-left",
                  children: Je.filter((Ge) => !Object.values(Et).includes(Ge))
                    .filter(
                      (Ge) =>
                        !Ve || Ge.toLowerCase().includes(Ve.toLowerCase()),
                    )
                    .map((Ge, Ze) =>
                      jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (Nt) => {
                            (Nt.preventDefault(),
                              Nt.stopPropagation(),
                              ht(H.id, Ge, H.correctText));
                          },
                          className:
                            "px-1.5 py-1 text-[8.5px] font-semibold text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-900 last:border-0 text-left cursor-pointer",
                          children: Ge,
                        },
                        Ze,
                      ),
                    ),
                }),
              ],
            });
          }
          const Mt = H.connections || [],
            D = Mt.length > 0 && Mt.every((Ve) => mt(H.id, Ve)),
            Re = () =>
              Mt.length === 0 || D
                ? null
                : jsxRuntimeExports.jsx("div", {
                    onMouseDown: (Ve) => Fe(H.id, Ve),
                    onTouchStart: (Ve) => Fe(H.id, Ve),
                    className:
                      "absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4.5 h-4.5 bg-blue-500 hover:bg-blue-600 border border-white rounded-full flex items-center justify-center cursor-crosshair shadow-md hover:scale-125 transition-transform z-30 group/port",
                    title: "Nhấp hoặc kéo thả chuột để nối mũi tên",
                    children: jsxRuntimeExports.jsx("div", {
                      className:
                        "w-1.5 h-1.5 bg-white rounded-full group-hover/port:animate-ping",
                    }),
                  });
          switch (H.shape) {
            case "terminator":
              return jsxRuntimeExports.jsxs("div", {
                className: `w-full h-full flex items-center justify-center bg-gradient-to-r from-red-500 to-rose-600 border border-red-700 rounded-full text-white relative ${ft}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: et,
                    children: Pe,
                  }),
                  Re(),
                ],
              });
            case "io":
              return jsxRuntimeExports.jsxs("div", {
                className: `w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 border border-sky-700 text-white transform skew-x-[-12deg] rounded-md relative ${ft}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: `${et} transform skew-x-[12deg]`,
                    children: Pe,
                  }),
                  Re(),
                ],
              });
            case "process":
              return jsxRuntimeExports.jsxs("div", {
                className: `w-full h-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600 border border-orange-700 text-white rounded-md relative ${ft}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: et,
                    children: Pe,
                  }),
                  Re(),
                ],
              });
            case "decision":
              return jsxRuntimeExports.jsxs("div", {
                className: `w-full h-full flex items-center justify-center relative ${ft}`,
                children: [
                  jsxRuntimeExports.jsx("svg", {
                    className: "absolute w-full h-full",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    children: jsxRuntimeExports.jsx("polygon", {
                      points: "50,3 97,50 50,97 3,50",
                      fill: "#10b981",
                      stroke: "#047857",
                      strokeWidth: "2.5",
                    }),
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "absolute inset-1 flex items-center justify-center z-10",
                    children: jsxRuntimeExports.jsx("span", {
                      className:
                        "text-[9px] font-bold text-center text-white leading-none px-1 break-words max-w-[90%]",
                      children: Pe,
                    }),
                  }),
                  Re(),
                ],
              });
            case "delay":
              return jsxRuntimeExports.jsxs("div", {
                className: `w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 border border-purple-700 text-white rounded-l-md rounded-r-3xl relative ${ft}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: et,
                    children: Pe,
                  }),
                  Re(),
                ],
              });
            default:
              return null;
          }
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-6 text-left",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "text-left",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-0.5 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400",
                    children: [
                      jsxRuntimeExports.jsx(GitCommitHorizontal, {
                        className: "h-3.5 w-3.5",
                      }),
                      " LAB 20: FLOWCHART",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h1", {
                    className:
                      "text-xl font-black text-slate-900 dark:text-white mt-1",
                    children: "Sơ Đồ Lưu Đồ Thuật Toán (Flowchart Builder)",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-400 max-w-2xl font-semibold mt-0.5 leading-relaxed",
                    children:
                      "Học tập biểu diễn thuật toán chuẩn hóa bằng hình khối. Kéo thả các hình học trống vào sơ đồ và gán nhãn, sau đó bấm chọn khối để vẽ đường liên kết luồng hoạt động!",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800 text-center shrink-0 flex flex-col items-center justify-center min-w-[220px] shadow-inner",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-[9px] text-slate-500 font-extrabold tracking-wider block uppercase",
                    children: "TIẾN TRÌNH LAB 20",
                  }),
                  jsxRuntimeExports.jsxs("span", {
                    className:
                      "text-2xl font-black text-blue-400 tracking-tighter block my-0.5 font-mono",
                    children: [
                      (l ? 1 : 0) + (d ? 1 : 0),
                      " ",
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-400 font-bold",
                        children: "/ 2",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center gap-1.5 mt-0.5",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: `h-2.5 w-2.5 rounded-full ${l ? "bg-emerald-500 animate-pulse" : "bg-slate-700"}`,
                        title: "Nhiệm vụ 1: Nhận diện hình khối",
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: `h-2.5 w-2.5 rounded-full ${d ? "bg-emerald-500 animate-pulse" : "bg-slate-700"}`,
                        title: "Nhiệm vụ 2: Mô phỏng lưu đồ",
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className: "text-[9px] text-slate-400 font-bold ml-1",
                        children:
                          l && d ? "HOÀN THÀNH LAB!" : "CHƯA HOÀN THÀNH",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n === "theory" &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850 p-5 sm:p-6 shadow-xs",
              children: [
                jsxRuntimeExports.jsxs("h3", {
                  className:
                    "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5 border-b dark:border-slate-850 pb-3 mb-4",
                  children: [
                    jsxRuntimeExports.jsx(Compass, {
                      className: "h-4 w-4 text-blue-500",
                    }),
                    "5 Thành phần hình khối cốt lõi trong Lưu đồ (Flowchart)",
                  ],
                }),
                jsxRuntimeExports.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4",
                  children: ot.map((H) =>
                    jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className:
                          "p-8 sm:p-5 rounded-3xl border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col justify-between items-stretch hover:shadow-xs hover:border-slate-200 transition-all text-center",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-5 border border-slate-100 dark:border-slate-800 flex items-center justify-center min-h-[64px]",
                            children: [
                              H.id === "terminator" &&
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-24 h-8 bg-gradient-to-r from-red-500 to-rose-600 border border-red-700 rounded-full",
                                }),
                              H.id === "process" &&
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-24 h-8 bg-gradient-to-r from-orange-500 to-amber-600 border border-orange-700 rounded-sm",
                                }),
                              H.id === "decision" &&
                                jsxRuntimeExports.jsx("div", {
                                  className: "w-12 h-12 relative",
                                  children: jsxRuntimeExports.jsx("svg", {
                                    className: "absolute w-full h-full",
                                    viewBox: "0 0 100 100",
                                    children: jsxRuntimeExports.jsx("polygon", {
                                      points: "50,4 96,50 50,96 4,50",
                                      fill: "#10b981",
                                      stroke: "#047857",
                                      strokeWidth: "3",
                                    }),
                                  }),
                                }),
                              H.id === "io" &&
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-24 h-8 bg-gradient-to-r from-sky-500 to-blue-600 border border-sky-700 transform skew-x-[-12deg]",
                                }),
                              H.id === "delay" &&
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "w-24 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 border border-purple-700 rounded-l-sm rounded-r-xl",
                                }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "mt-3 text-left",
                            children: [
                              jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-semibold font-black text-slate-850 dark:text-white block",
                                children: H.vietnameseName,
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold leading-relaxed mt-1",
                                children: H.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      H.id,
                    ),
                  ),
                }),
              ],
            }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-3xl max-w-md mx-auto",
            children: [
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i("theory"),
                className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${n === "theory" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                children: [
                  jsxRuntimeExports.jsx(CircleQuestionMark, {
                    className: "h-3.5 w-3.5",
                  }),
                  "Nhiệm vụ 1: Nhận diện hình khối",
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i("simulator"),
                className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${n === "simulator" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                children: [
                  jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5" }),
                  "Nhiệm vụ 2: Mô phỏng lưu đồ",
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs(AnimatePresence, {
            mode: "wait",
            children: [
              n === "theory" &&
                jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                    children: [
                      jsxRuntimeExports.jsx("div", {
                        className: "lg:col-span-4 space-y-4",
                        children: jsxRuntimeExports.jsxs("div", {
                          className:
                            "border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-950",
                          children: [
                            jsxRuntimeExports.jsxs("button", {
                              type: "button",
                              onClick: () => I(!y),
                              className:
                                "w-full p-8 sm:p-5 flex items-center justify-between text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 transition-all",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "flex items-center gap-1.5 uppercase text-sm sm:text-base font-semibold font-black",
                                  children: [
                                    jsxRuntimeExports.jsx(Info, {
                                      className: "h-3.5 w-3.5 text-blue-500",
                                    }),
                                    "Xem gợi ý ôn tập nhanh",
                                  ],
                                }),
                                y
                                  ? jsxRuntimeExports.jsx(ChevronUp, {
                                      className: "h-4 w-4",
                                    })
                                  : jsxRuntimeExports.jsx(ChevronDown, {
                                      className: "h-4 w-4",
                                    }),
                              ],
                            }),
                            jsxRuntimeExports.jsx(AnimatePresence, {
                              children:
                                y &&
                                jsxRuntimeExports.jsx(motion.div, {
                                  initial: { height: 0, opacity: 0 },
                                  animate: { height: "auto", opacity: 1 },
                                  exit: { height: 0, opacity: 0 },
                                  className: "overflow-hidden",
                                  children: jsxRuntimeExports.jsx("div", {
                                    className:
                                      "p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/40 text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold space-y-2 border-t dark:border-slate-850",
                                    children: jsxRuntimeExports.jsxs("ul", {
                                      className:
                                        "list-disc pl-4 space-y-1.5 text-sm sm:text-base font-semibold",
                                      children: [
                                        jsxRuntimeExports.jsxs("li", {
                                          children: [
                                            "Điểm bắt đầu/kết thúc ➔ là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Hình Oval",
                                            }),
                                            ".",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("li", {
                                          children: [
                                            "Nhập hoặc xuất dữ liệu ➔ là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Hình Bình hành",
                                            }),
                                            ".",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("li", {
                                          children: [
                                            "Các phép tính toán, gán ➔ là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Hình Chữ nhật",
                                            }),
                                            ".",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("li", {
                                          children: [
                                            "Nếu có câu hỏi rẽ nhánh, kiểm tra điều kiện ➔ là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Hình Thoi",
                                            }),
                                            ".",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("li", {
                                          children: [
                                            "Chờ đợi mạng hoặc chậm trễ ➔ là ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Hình chữ D (Trì hoãn)",
                                            }),
                                            ".",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "lg:col-span-8 bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-4",
                        children: [
                          jsxRuntimeExports.jsx("h3", {
                            className:
                              "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wider",
                            children:
                              "Bài tập trắc nghiệm nối hình khối (Match the Symbols)",
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-150 dark:border-slate-850 gap-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "w-24 shrink-0 bg-white dark:bg-slate-950 border rounded-3xl p-1 flex items-center justify-center",
                                        children: jsxRuntimeExports.jsx("svg", {
                                          className: "w-full h-8",
                                          viewBox: "0 0 160 60",
                                          children: jsxRuntimeExports.jsx(
                                            "rect",
                                            {
                                              x: "20",
                                              y: "15",
                                              width: "120",
                                              height: "30",
                                              rx: "15",
                                              fill: "#f43f5e",
                                              stroke: "#e11d48",
                                              strokeWidth: "2",
                                            },
                                          ),
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children: "Hình Oval bo tròn hai đầu",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    disabled: p && l,
                                    value: u.oval || "",
                                    onChange: (H) =>
                                      g({ ...u, oval: H.target.value }),
                                    className:
                                      "p-8 sm:p-5 border rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 min-w-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "",
                                        children:
                                          "-- Chọn khái niệm tương ứng --",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "io",
                                        children:
                                          "Nhập / Xuất dữ liệu (Input/Output)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "process",
                                        children: "Tiến trình (Xử lý tác vụ)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "decision",
                                        children:
                                          "Quyết định / Rẽ nhánh điều kiện",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "terminator",
                                        children:
                                          "Bắt đầu / Kết thúc thuật toán",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "delay",
                                        children:
                                          "Sự trì hoãn / Chờ đợi trì hoãn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-150 dark:border-slate-850 gap-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "w-24 shrink-0 bg-white dark:bg-slate-950 border rounded-3xl p-1 flex items-center justify-center",
                                        children: jsxRuntimeExports.jsx("svg", {
                                          className: "w-full h-8",
                                          viewBox: "0 0 160 60",
                                          children: jsxRuntimeExports.jsx(
                                            "polygon",
                                            {
                                              points:
                                                "80,10 135,30 80,50 25,30",
                                              fill: "#a3e635",
                                              stroke: "#84cc16",
                                              strokeWidth: "2",
                                            },
                                          ),
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children: "Hình thoi 4 cạnh bằng nhau",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    disabled: p && l,
                                    value: u.rhombus || "",
                                    onChange: (H) =>
                                      g({ ...u, rhombus: H.target.value }),
                                    className:
                                      "p-8 sm:p-5 border rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 min-w-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "",
                                        children:
                                          "-- Chọn khái niệm tương ứng --",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "io",
                                        children:
                                          "Nhập / Xuất dữ liệu (Input/Output)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "process",
                                        children: "Tiến trình (Xử lý tác vụ)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "decision",
                                        children:
                                          "Quyết định / Rẽ nhánh điều kiện",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "terminator",
                                        children:
                                          "Bắt đầu / Kết thúc thuật toán",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "delay",
                                        children:
                                          "Sự trì hoãn / Chờ đợi trì hoãn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-150 dark:border-slate-850 gap-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "w-24 shrink-0 bg-white dark:bg-slate-950 border rounded-3xl p-1 flex items-center justify-center",
                                        children: jsxRuntimeExports.jsx("svg", {
                                          className: "w-full h-8",
                                          viewBox: "0 0 160 60",
                                          children: jsxRuntimeExports.jsx(
                                            "polygon",
                                            {
                                              points:
                                                "35,15 140,15 125,45 20,45",
                                              fill: "#38bdf8",
                                              stroke: "#0ea5e9",
                                              strokeWidth: "2",
                                            },
                                          ),
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children: "Hình bình hành nghiêng",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    disabled: p && l,
                                    value: u.parallelogram || "",
                                    onChange: (H) =>
                                      g({
                                        ...u,
                                        parallelogram: H.target.value,
                                      }),
                                    className:
                                      "p-8 sm:p-5 border rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 min-w-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "",
                                        children:
                                          "-- Chọn khái niệm tương ứng --",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "io",
                                        children:
                                          "Nhập / Xuất dữ liệu (Input/Output)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "process",
                                        children: "Tiến trình (Xử lý tác vụ)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "decision",
                                        children:
                                          "Quyết định / Rẽ nhánh điều kiện",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "terminator",
                                        children:
                                          "Bắt đầu / Kết thúc thuật toán",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "delay",
                                        children:
                                          "Sự trì hoãn / Chờ đợi trì hoãn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-150 dark:border-slate-850 gap-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "w-24 shrink-0 bg-white dark:bg-slate-950 border rounded-3xl p-1 flex items-center justify-center",
                                        children: jsxRuntimeExports.jsx("svg", {
                                          className: "w-full h-8",
                                          viewBox: "0 0 160 60",
                                          children: jsxRuntimeExports.jsx(
                                            "rect",
                                            {
                                              x: "20",
                                              y: "15",
                                              width: "120",
                                              height: "30",
                                              fill: "#fb923c",
                                              stroke: "#f97316",
                                              strokeWidth: "2",
                                            },
                                          ),
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children: "Hình chữ nhật vuông vức",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    disabled: p && l,
                                    value: u.rect || "",
                                    onChange: (H) =>
                                      g({ ...u, rect: H.target.value }),
                                    className:
                                      "p-8 sm:p-5 border rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 min-w-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "",
                                        children:
                                          "-- Chọn khái niệm tương ứng --",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "io",
                                        children:
                                          "Nhập / Xuất dữ liệu (Input/Output)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "process",
                                        children: "Tiến trình (Xử lý tác vụ)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "decision",
                                        children:
                                          "Quyết định / Rẽ nhánh điều kiện",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "terminator",
                                        children:
                                          "Bắt đầu / Kết thúc thuật toán",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "delay",
                                        children:
                                          "Sự trì hoãn / Chờ đợi trì hoãn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-150 dark:border-slate-850 gap-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "w-24 shrink-0 bg-white dark:bg-slate-950 border rounded-3xl p-1 flex items-center justify-center",
                                        children: jsxRuntimeExports.jsx("svg", {
                                          className: "w-full h-8",
                                          viewBox: "0 0 160 60",
                                          children: jsxRuntimeExports.jsx(
                                            "path",
                                            {
                                              d: "M 25,15 L 100,15 A 15,15 0 0,1 115,30 A 15,15 0 0,1 100,45 L 25,45 Z",
                                              fill: "#c084fc",
                                              stroke: "#a855f7",
                                              strokeWidth: "2",
                                            },
                                          ),
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                        children:
                                          "Hình chữ D (Một nửa bo tròn)",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("select", {
                                    disabled: p && l,
                                    value: u.dshape || "",
                                    onChange: (H) =>
                                      g({ ...u, dshape: H.target.value }),
                                    className:
                                      "p-8 sm:p-5 border rounded-3xl text-sm sm:text-base font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 min-w-[220px]",
                                    children: [
                                      jsxRuntimeExports.jsx("option", {
                                        value: "",
                                        children:
                                          "-- Chọn khái niệm tương ứng --",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "io",
                                        children:
                                          "Nhập / Xuất dữ liệu (Input/Output)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "process",
                                        children: "Tiến trình (Xử lý tác vụ)",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "decision",
                                        children:
                                          "Quyết định / Rẽ nhánh điều kiện",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "terminator",
                                        children:
                                          "Bắt đầu / Kết thúc thuật toán",
                                      }),
                                      jsxRuntimeExports.jsx("option", {
                                        value: "delay",
                                        children:
                                          "Sự trì hoãn / Chờ đợi trì hoãn",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p &&
                            jsxRuntimeExports.jsx("div", {
                              className: `p-8 sm:p-5 rounded-3xl border text-sm sm:text-base font-semibold ${l ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 border-rose-500/20 text-rose-500"}`,
                              children: l
                                ? jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                      jsxRuntimeExports.jsx(CircleCheck, {
                                        className: "h-5 w-5 shrink-0",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        children:
                                          "Tuyệt vời! Bạn đã ghép nối chính xác tuyệt đối cả 5 hình vẽ lưu đồ! Cùng tiếp tục chuyển qua tab Mô Phỏng Quy Trình để thực hành nhé!",
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                      jsxRuntimeExports.jsx(CircleAlert, {
                                        className: "h-5 w-5 shrink-0",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        children: N,
                                      }),
                                    ],
                                  }),
                            }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex justify-end gap-2.5",
                            children: [
                              p &&
                                !l &&
                                jsxRuntimeExports.jsx("button", {
                                  onClick: C,
                                  className:
                                    "px-5 sm:px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm sm:text-base font-bold rounded-3xl transition-all cursor-pointer",
                                  children: "Làm lại bài tập",
                                }),
                              l
                                ? jsxRuntimeExports.jsxs("button", {
                                    onClick: () => i("simulator"),
                                    className:
                                      "px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base font-bold rounded-3xl transition-all shadow-xs flex items-center gap-1 cursor-pointer",
                                    children: [
                                      "Chuyển sang Bước mô phỏng ",
                                      jsxRuntimeExports.jsx(ArrowRight, {
                                        className: "h-4 w-4",
                                      }),
                                    ],
                                  })
                                : jsxRuntimeExports.jsx("button", {
                                    onClick: w,
                                    className:
                                      "px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-bold rounded-3xl transition-all shadow-xs cursor-pointer",
                                    children: "Kiểm tra đáp án",
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  "quiz",
                ),
              n === "simulator" &&
                jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-4 text-left",
                    children:
                      R === null
                        ? jsxRuntimeExports.jsxs("div", {
                            className:
                              "bg-slate-950 p-8 rounded-3xl border border-slate-800 w-full text-center space-y-6",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2.5 py-1 text-sm sm:text-base font-bold text-blue-400",
                                    children:
                                      "Nhiệm vụ 2: Thực hành thiết kế lưu đồ",
                                  }),
                                  jsxRuntimeExports.jsx("h3", {
                                    className: "text-xl font-black text-white",
                                    children: "CHỌN BÀI TẬP THỰC HÀNH",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-400 max-w-lg mx-auto font-medium",
                                    children:
                                      "Hãy bấm chọn một trong các bài tập dưới đây để tiến hành kéo thả lắp ráp hình khối và vẽ đường liên kết dòng chảy cho thuật toán.",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    onClick: () => z(1),
                                    className:
                                      "group bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-5 sm:p-6 text-left cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded",
                                                children: "Bài tập 1",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-2 w-2 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("h4", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-white group-hover:text-blue-300 transition-colors",
                                            children:
                                              "Giải phương trình bậc nhất ax + b = 0",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-400 leading-relaxed font-semibold",
                                            children:
                                              "Sơ đồ thuật toán giải và biện luận phương trình bậc nhất, xử lý kiểm tra các trường hợp hệ số a, b bằng không hoặc khác không, tính toán nghiệm và hiển thị kết quả.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex flex-wrap gap-1.5 pt-2",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Rẽ nhánh",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Tìm nghiệm",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Tạm dừng",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    onClick: () => z(2),
                                    className:
                                      "group bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-5 sm:p-6 text-left cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded",
                                                children: "Bài tập 2",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "h-2 w-2 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("h4", {
                                            className:
                                              "text-sm sm:text-base font-medium font-black text-white group-hover:text-blue-300 transition-colors",
                                            children:
                                              "Quy trình xác thực bảo mật OTP SMS",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-400 leading-relaxed font-semibold",
                                            children:
                                              "Sơ đồ quy trình đăng nhập bảo mật hai lớp. Bao gồm các khâu kiểm tra tài khoản mật khẩu, tạo mã OTP, chờ đợi thời gian gửi tin, nhận mã OTP từ người dùng và xác thực.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex flex-wrap gap-1.5 pt-2",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Xác thực 2 lớp",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Mã OTP SMS",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded",
                                            children: "Bảo mật",
                                          }),
                                        ],
                                      }),
                                    ],
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
                                  "flex items-center justify-between bg-slate-950 p-8 sm:p-5 rounded-3xl border border-slate-850",
                                children: [
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: () => z(null),
                                    className:
                                      "flex items-center gap-1.5 text-sm sm:text-base font-medium font-black text-blue-400 hover:text-blue-300 transition-all cursor-pointer",
                                    children: [
                                      jsxRuntimeExports.jsx(ArrowLeft, {
                                        className: "h-4 w-4",
                                      }),
                                      " Quay lại danh sách bài tập",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "text-sm sm:text-base font-semibold font-black text-slate-400",
                                    children: [
                                      "ĐANG THỰC HÀNH: ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-white",
                                        children:
                                          R === 1 ? "BÀI TẬP 1" : "BÀI TẬP 2",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "lg:col-span-3 space-y-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800",
                                        children: [
                                          jsxRuntimeExports.jsx("h4", {
                                            className:
                                              "text-sm sm:text-base font-extrabold text-blue-400 uppercase tracking-widest mb-1.5",
                                            children:
                                              "DIỄN GIẢI LƯU ĐỒ TỪNG BƯỚC",
                                          }),
                                          R === 1
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "space-y-2.5 text-sm sm:text-base font-semibold text-slate-200 font-bold leading-relaxed",
                                                children: [
                                                  jsxRuntimeExports.jsxs("p", {
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          className:
                                                            "text-blue-400",
                                                          children: "Mô tả:",
                                                        },
                                                      ),
                                                      " Bài toán nhập vào hai số a và b từ bàn phím, kiểm tra điều kiện để tìm nghiệm x, sau đó hệ thống tạm dừng ngắn (tạo độ trễ) trước khi xuất kết quả ra màn hình.",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsx("hr", {
                                                    className:
                                                      "border-slate-850 my-2",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children: "• Bắt đầu",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nhập hai số a và b",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Kiểm tra: a = 0?",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nếu ĐÚNG (a = 0): Chuyển sang bước kiểm tra b = 0.",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nếu SAI (a khác 0): Chuyển sang tính nghiệm x = -b / a.",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Kiểm tra: b = 0?",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      '• Nếu ĐÚNG: Xuất "Phương trình vô số nghiệm" ➔ Kết thúc.',
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      '• Nếu SAI: Xuất "Phương trình vô nghiệm" ➔ Kết thúc.',
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Tạm dừng ngắn (tạo độ trễ 2 giây).",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Xuất kết quả nghiệm x ra màn hình ➔ Kết thúc.",
                                                  }),
                                                ],
                                              })
                                            : jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "space-y-2.5 text-sm sm:text-base font-semibold text-slate-200 font-bold leading-relaxed",
                                                children: [
                                                  jsxRuntimeExports.jsxs("p", {
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          className:
                                                            "text-blue-400",
                                                          children: "Mô tả:",
                                                        },
                                                      ),
                                                      " Quy trình xác thực đăng nhập bảo mật 2 lớp qua SMS OTP. Kiểm tra mật khẩu tài khoản trước, gửi mã, chờ đợi tạo trễ nhận tin, xác thực OTP của người dùng trước khi cấp quyền truy cập.",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsx("hr", {
                                                    className:
                                                      "border-slate-850 my-2",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children: "• Bắt đầu",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nhập: Tên đăng nhập & Mật khẩu",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Kiểm tra: Mật khẩu có đúng không?",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      '• Nếu SAI: Xuất "Mật khẩu không đúng" ➔ Kết thúc.',
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nếu ĐÚNG: Hệ thống tạo và gửi mã OTP qua SMS.",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Chờ đợi hệ thống truyền tải (tạo độ trễ 3 giây).",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nhập: Người dùng nhập mã OTP",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Kiểm tra: Mã OTP có hợp lệ không?",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      '• Nếu SAI: Xuất "Mã OTP sai" ➔ Kết thúc.',
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      "• Nếu ĐÚNG: Cấp quyền truy cập tài khoản.",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children:
                                                      '• Xuất "Đăng nhập thành công" ➔ Kết thúc.',
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-800 text-sm sm:text-base font-semibold text-slate-300 font-bold leading-normal space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-1.5 font-bold text-amber-400",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                MousePointer,
                                                { className: "h-4 w-4" },
                                              ),
                                              "HƯỚNG DẪN THỰC HIỆN",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("ul", {
                                            className:
                                              "list-decimal pl-4 space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Kéo hình học từ bể ở dưới thả vào ô trống trên sơ đồ (hoặc nhấp trực tiếp vào hình ở bể, sau đó nhấp vào ô trống).",
                                              }),
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Nhập nội dung tương ứng vào ô văn bản, hoặc bấm chọn gợi ý khớp nội dung.",
                                              }),
                                              jsxRuntimeExports.jsx("li", {
                                                children:
                                                  "Khi khối chuyển sang màu chủ đề, nhấp và kéo chuột từ nút tròn xanh ở đáy sang khối tiếp theo để nối luồng mũi tên xử lý!",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "lg:col-span-9 bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-visible min-h-[700px]",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between items-center z-10 border-b border-slate-850 pb-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "text-left",
                                            children: [
                                              jsxRuntimeExports.jsx("h4", {
                                                className:
                                                  "text-sm sm:text-base font-medium font-black text-slate-300 uppercase tracking-widest",
                                                children:
                                                  R === 1
                                                    ? "Bài tập 1: Giải phương trình bậc nhất ax + b = 0"
                                                    : "Bài tập 2: Quy trình xác thực bảo mật OTP",
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-sm sm:text-base font-semibold text-slate-500 font-bold mt-0.5",
                                                children:
                                                  "Xây dựng lưu đồ hoàn thiện gồm cả cấu trúc hình học và luồng mũi tên xử lý",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: R === 1 ? Ue : Ke,
                                            className:
                                              "px-5 sm:px-5 py-3 text-sm sm:text-base font-semibold font-black text-slate-400 hover:text-white flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-3xl cursor-pointer transition-all hover:bg-slate-850",
                                            children: [
                                              jsxRuntimeExports.jsx(RefreshCw, {
                                                className: "h-3.5 w-3.5",
                                              }),
                                              " Reset sơ đồ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "relative flex-1 w-full overflow-auto py-4 flex justify-center min-h-[600px] bg-slate-950 rounded-3xl",
                                        style: { overflow: "visible" },
                                        children: jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            id: "flowchart-canvas-container",
                                            onMouseMove: yt,
                                            onMouseUp: ve,
                                            onTouchMove: xt,
                                            onTouchEnd: Ye,
                                            onClick: () => {
                                              R === 1 ? te(null) : Ae(null);
                                            },
                                            className:
                                              "relative shrink-0 shadow-inner rounded-3xl",
                                            style: {
                                              width: "860px",
                                              height:
                                                R === 1 ? "730px" : "970px",
                                              overflow: "visible",
                                              position: "relative",
                                            },
                                            children: [
                                              jsxRuntimeExports.jsxs("svg", {
                                                className:
                                                  "absolute inset-0 pointer-events-none w-full h-full",
                                                style: {
                                                  overflow: "visible",
                                                  zIndex: 1,
                                                },
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "defs",
                                                    {
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "marker",
                                                          {
                                                            id: "arrowhead",
                                                            markerWidth: "10",
                                                            markerHeight: "10",
                                                            refX: "8",
                                                            refY: "5",
                                                            orient: "auto",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                "path",
                                                                {
                                                                  d: "M 3,2 L 8,5 L 3,8",
                                                                  stroke:
                                                                    "#3b82f6",
                                                                  strokeWidth:
                                                                    "1.5",
                                                                  strokeLinecap:
                                                                    "round",
                                                                  strokeLinejoin:
                                                                    "round",
                                                                  fill: "none",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "marker",
                                                          {
                                                            id: "arrowhead-correct",
                                                            markerWidth: "10",
                                                            markerHeight: "10",
                                                            refX: "8",
                                                            refY: "5",
                                                            orient: "auto",
                                                            children:
                                                              jsxRuntimeExports.jsx(
                                                                "path",
                                                                {
                                                                  d: "M 3,2 L 8,5 L 3,8",
                                                                  stroke:
                                                                    "#10b981",
                                                                  strokeWidth:
                                                                    "1.5",
                                                                  strokeLinecap:
                                                                    "round",
                                                                  strokeLinejoin:
                                                                    "round",
                                                                  fill: "none",
                                                                },
                                                              ),
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  (R === 1 ? V : pe).map((H) =>
                                                    H.connections.map((me) => {
                                                      const Le = (
                                                        R === 1 ? V : pe
                                                      ).find(
                                                        (Ve) => Ve.id === me,
                                                      );
                                                      if (!Le) return null;
                                                      const Pe = mt(H.id, me),
                                                        W =
                                                          (R === 1 ? K : ae) ===
                                                          H.id;
                                                      if (!Pe && !W)
                                                        return null;
                                                      const Me = H.x,
                                                        et = H.y,
                                                        Je = Le.x,
                                                        Et = Le.y;
                                                      let ft = "",
                                                        Mt = 0,
                                                        D = 0;
                                                      if (
                                                        H.shape === "decision"
                                                      )
                                                        if (Je < Me) {
                                                          const Ve =
                                                              Me - H.width / 2,
                                                            Ge = et,
                                                            Ze =
                                                              Et -
                                                              Le.height / 2 -
                                                              4;
                                                          ((ft = `M ${Ve} ${Ge} L ${Je} ${Ge} L ${Je} ${Ze}`),
                                                            (Mt = Ve - 22),
                                                            (D = Ge - 8));
                                                        } else {
                                                          const Ve =
                                                              Me + H.width / 2,
                                                            Ge = et,
                                                            Ze =
                                                              Et -
                                                              Le.height / 2 -
                                                              4;
                                                          ((ft = `M ${Ve} ${Ge} L ${Je} ${Ge} L ${Je} ${Ze}`),
                                                            (Mt = Ve + 22),
                                                            (D = Ge - 8));
                                                        }
                                                      else {
                                                        const Ve = Me,
                                                          Ge =
                                                            et + H.height / 2,
                                                          Ze = Je,
                                                          Nt =
                                                            Et -
                                                            Le.height / 2 -
                                                            4;
                                                        if (
                                                          Math.abs(Me - Je) < 5
                                                        )
                                                          ((ft = `M ${Ve} ${Ge} L ${Ze} ${Nt}`),
                                                            (Mt = Ve),
                                                            (D =
                                                              Ge +
                                                              (Nt - Ge) * 0.4));
                                                        else {
                                                          const Kt =
                                                            Ge +
                                                            (Nt - Ge) * 0.5;
                                                          ((ft = `M ${Ve} ${Ge} L ${Ve} ${Kt} L ${Ze} ${Kt} L ${Ze} ${Nt}`),
                                                            (Mt =
                                                              Ve +
                                                              (Ze - Ve) * 0.5),
                                                            (D = Kt - 8));
                                                        }
                                                      }
                                                      const Re =
                                                        H.connectionLabels
                                                          ? H.connectionLabels[
                                                              me
                                                            ]
                                                          : null;
                                                      return jsxRuntimeExports.jsxs(
                                                        "g",
                                                        {
                                                          className:
                                                            "transition-all",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "path",
                                                              {
                                                                d: ft,
                                                                stroke: Pe
                                                                  ? "#10b981"
                                                                  : "#3b82f6",
                                                                strokeWidth: Pe
                                                                  ? "2"
                                                                  : "1.5",
                                                                strokeDasharray:
                                                                  Pe
                                                                    ? "0"
                                                                    : "4 4",
                                                                markerEnd: Pe
                                                                  ? "url(#arrowhead-correct)"
                                                                  : "url(#arrowhead)",
                                                                fill: "none",
                                                              },
                                                            ),
                                                            Re &&
                                                              jsxRuntimeExports.jsxs(
                                                                "g",
                                                                {
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "rect",
                                                                      {
                                                                        x:
                                                                          Mt -
                                                                          16,
                                                                        y:
                                                                          D - 9,
                                                                        width:
                                                                          "32",
                                                                        height:
                                                                          "13",
                                                                        rx: "3",
                                                                        fill: "#0f172a",
                                                                        stroke:
                                                                          Pe
                                                                            ? "#10b981"
                                                                            : "#3b82f6",
                                                                        strokeWidth:
                                                                          "1",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "text",
                                                                      {
                                                                        x: Mt,
                                                                        y:
                                                                          D + 1,
                                                                        fill: Pe
                                                                          ? "#34d399"
                                                                          : "#60a5fa",
                                                                        fontSize:
                                                                          "9px",
                                                                        fontWeight:
                                                                          "black",
                                                                        textAnchor:
                                                                          "middle",
                                                                        dominantBaseline:
                                                                          "middle",
                                                                        className:
                                                                          "select-none font-black",
                                                                        children:
                                                                          Re,
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                          ],
                                                        },
                                                        `${H.id}-${me}`,
                                                      );
                                                    }),
                                                  ),
                                                  L &&
                                                    jsxRuntimeExports.jsx(
                                                      "path",
                                                      {
                                                        d: (() => {
                                                          const me = (
                                                            R === 1 ? V : pe
                                                          ).find(
                                                            (et) => et.id === L,
                                                          );
                                                          if (!me) return "";
                                                          const Le = me.x,
                                                            Pe = me.y,
                                                            W = P.x,
                                                            Me = P.y;
                                                          if (
                                                            me.shape ===
                                                            "decision"
                                                          ) {
                                                            const Je =
                                                                W < Le
                                                                  ? Le -
                                                                    me.width / 2
                                                                  : Le +
                                                                    me.width /
                                                                      2,
                                                              Et = Pe;
                                                            return `M ${Je} ${Et} L ${W} ${Et} L ${W} ${Me}`;
                                                          } else {
                                                            const et = Le,
                                                              Je =
                                                                Pe +
                                                                me.height / 2;
                                                            if (
                                                              Math.abs(et - W) <
                                                              5
                                                            )
                                                              return `M ${et} ${Je} L ${W} ${Me}`;
                                                            {
                                                              const Et =
                                                                Je +
                                                                (Me - Je) * 0.5;
                                                              return `M ${et} ${Je} L ${et} ${Et} L ${W} ${Et} L ${W} ${Me}`;
                                                            }
                                                          }
                                                        })(),
                                                        stroke: "#3b82f6",
                                                        strokeWidth: "2",
                                                        strokeDasharray: "4 4",
                                                        markerEnd:
                                                          "url(#arrowhead)",
                                                        fill: "none",
                                                      },
                                                    ),
                                                ],
                                              }),
                                              (R === 1 ? V : pe).map((H) => {
                                                var Et;
                                                const me =
                                                    R === 1
                                                      ? !!Ie[H.id]
                                                      : !!Qe[H.id],
                                                  Le =
                                                    R === 1
                                                      ? !!U[H.id]
                                                      : !!De[H.id],
                                                  Pe =
                                                    R === 1
                                                      ? !!be[H.id]
                                                      : !!it[H.id],
                                                  W =
                                                    R === 1
                                                      ? de[H.id] || ""
                                                      : at[H.id] || "",
                                                  Me =
                                                    (R === 1 ? K : ae) === H.id,
                                                  et = R === 1 ? K : ae,
                                                  Je =
                                                    (et !== null &&
                                                      ((Et = (
                                                        R === 1 ? V : pe
                                                      ).find(
                                                        (ft) => ft.id === et,
                                                      )) == null
                                                        ? void 0
                                                        : Et.connections.includes(
                                                            H.id,
                                                          ))) ||
                                                    !1;
                                                return Pe
                                                  ? jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        onClick: (ft) => {
                                                          (ft.stopPropagation(),
                                                            rt(H.id));
                                                        },
                                                        className: `absolute flex items-center justify-center transition-all z-10 ${Le ? "cursor-pointer hover:scale-103" : "cursor-default"}`,
                                                        style: {
                                                          left: `${H.x - H.width / 2}px`,
                                                          top: `${H.y - H.height / 2}px`,
                                                          width: `${H.width}px`,
                                                          height: `${H.height}px`,
                                                        },
                                                        children: [
                                                          ye(
                                                            H,
                                                            me,
                                                            Le,
                                                            W,
                                                            Je,
                                                            Me,
                                                          ),
                                                          me &&
                                                            !Le &&
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "absolute -top-1 -right-1 flex h-3 w-3",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "relative inline-flex rounded-full h-3 w-3 bg-amber-500",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          Me &&
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "absolute -inset-1.5 border-2 border-dashed border-blue-400 rounded-3xl animate-pulse pointer-events-none z-0",
                                                              },
                                                            ),
                                                        ],
                                                      },
                                                      H.id,
                                                    )
                                                  : jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "absolute flex items-center justify-center border border-dashed border-slate-700 bg-slate-900/30 rounded-3xl pointer-events-none",
                                                        style: {
                                                          left: `${H.x - H.width / 2}px`,
                                                          top: `${H.y - H.height / 2}px`,
                                                          width: `${H.width}px`,
                                                          height: `${H.height}px`,
                                                          transition:
                                                            "all 0.3s ease",
                                                        },
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[8.5px] text-slate-400 font-black select-none uppercase tracking-wider",
                                                              children:
                                                                "Chưa mở khoá",
                                                            },
                                                          ),
                                                      },
                                                      H.id,
                                                    );
                                              }),
                                            ],
                                          },
                                        ),
                                      }),
                                      (R === 1 ? je : Q) &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center gap-2 text-sm sm:text-base font-bold text-red-400 animate-bounce",
                                          children: [
                                            jsxRuntimeExports.jsx(CircleAlert, {
                                              className: "h-4.5 w-4.5 shrink-0",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: R === 1 ? je : Q,
                                            }),
                                          ],
                                        }),
                                      (R === 1 ? He : $e) &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-400",
                                          children: [
                                            jsxRuntimeExports.jsx(CircleCheck, {
                                              className:
                                                "h-4.5 w-4.5 shrink-0 text-emerald-500",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children: R === 1 ? He : $e,
                                            }),
                                          ],
                                        }),
                                      R === 1 &&
                                        V.every((H) => U[H.id]) &&
                                        V.every((H) =>
                                          H.connections.every((me) =>
                                            E.some(
                                              (Le) =>
                                                Le.from === H.id &&
                                                Le.to === me,
                                            ),
                                          ),
                                        ) &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-5 sm:p-6 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-3xl flex flex-col items-center justify-center text-center space-y-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Sparkles, {
                                              className:
                                                "h-8 w-8 text-emerald-400 animate-bounce",
                                            }),
                                            jsxRuntimeExports.jsx("h5", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black text-white",
                                              children:
                                                "CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH XUẤT SẮC BÀI TẬP 1!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold max-w-md",
                                              children:
                                                "Sơ đồ tìm nghiệm phương trình bậc nhất đã được lắp đúng cấu trúc rẽ nhánh! Hãy bấm nút quay lại và click chuyển sang Bài tập 2 để tiếp tục thử thách nhé.",
                                            }),
                                          ],
                                        }),
                                      R === 2 &&
                                        pe.every((H) => De[H.id]) &&
                                        pe.every((H) =>
                                          H.connections.every((me) =>
                                            ie.some(
                                              (Le) =>
                                                Le.from === H.id &&
                                                Le.to === me,
                                            ),
                                          ),
                                        ) &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-5 sm:p-6 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-3xl flex flex-col items-center justify-center text-center space-y-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Award, {
                                              className:
                                                "h-8 w-8 text-amber-400 animate-pulse",
                                            }),
                                            jsxRuntimeExports.jsx("h5", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black text-white",
                                              children:
                                                "XUẤT SẮC! HOÀN THÀNH SƠ ĐỒ XÁC THỰC OTP!",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold max-w-md",
                                              children:
                                                "Bạn đã chinh phục thành công toàn bộ sơ đồ lưu đồ thuật toán khó nhằn này! Bạn thật tuyệt vời!",
                                            }),
                                          ],
                                        }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "border-t border-slate-850 pt-5 space-y-3",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-widest block text-center",
                                            children:
                                              "BỂ HÌNH KHỐI CHƯA GÁN NHÃN (Hãy kéo thả hình vào các ô trống trên sơ đồ, hoặc nhấp vào hình sau đó nhấp vào ô trống)",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-items-center bg-slate-900/40 p-5 sm:p-6 rounded-3xl border border-slate-850",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex flex-col items-center space-y-2 w-full max-w-[120px]",
                                                children: [
                                                  Dt("terminator"),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] text-slate-400 font-black tracking-wider block uppercase",
                                                      children: "Oval",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex flex-col items-center space-y-2 w-full max-w-[120px]",
                                                children: [
                                                  Dt("process"),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] text-slate-400 font-black tracking-wider block uppercase",
                                                      children: "Chữ nhật",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex flex-col items-center space-y-2 w-full max-w-[120px]",
                                                children: [
                                                  Dt("decision"),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] text-slate-400 font-black tracking-wider block uppercase",
                                                      children: "Hình thoi",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex flex-col items-center space-y-2 w-full max-w-[120px]",
                                                children: [
                                                  Dt("io"),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] text-slate-400 font-black tracking-wider block uppercase",
                                                      children: "Bình hành",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex flex-col items-center space-y-2 w-full max-w-[120px]",
                                                children: [
                                                  Dt("delay"),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[9px] text-slate-400 font-black tracking-wider block uppercase",
                                                      children:
                                                        "Chữ D (Trì hoãn)",
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
                  },
                  "simulator",
                ),
            ],
          }),
        ],
      });
    }

    return Lab20;
  };
})();
