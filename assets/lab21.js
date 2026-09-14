/**
 * Lab 21: Phân loại Các loại Biểu đồ
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab21 = window.AGY_LABS[21] = function (env) {
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

    const CHART_TYPES = [
      {
        id: "column",
        englishTitle: "Column Chart",
        vietnameseSubtitle: "Biểu đồ cột đứng",
        icon: jsxRuntimeExports.jsx(ChartColumn, { className: "h-5 w-5" }),
        color: "from-blue-500 to-indigo-600",
        badge: "So sánh số lượng",
        shortNote:
          "Thích hợp so sánh giá trị giữa các danh mục ít (<7 danh mục) và có tên ngắn gọn.",
        useCase:
          "Hiển thị khối lượng bán hàng của 5 sản phẩm thời trang chính.",
      },
      {
        id: "line",
        englishTitle: "Line Chart",
        vietnameseSubtitle: "Biểu đồ đường",
        icon: jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
        color: "from-emerald-500 to-teal-600",
        badge: "Xu hướng thời gian",
        shortNote:
          "Tối ưu để thể hiện dữ liệu liên tục thay đổi theo mốc thời gian (Tháng, Quý, Năm).",
        useCase:
          "Theo dõi biến động doanh thu & lợi nhuận qua 12 tháng trong năm.",
      },
      {
        id: "bar",
        englishTitle: "Bar Chart",
        vietnameseSubtitle: "Biểu đồ thanh - cột ngang",
        icon: jsxRuntimeExports.jsx(ChartBar, { className: "h-5 w-5" }),
        color: "from-amber-500 to-orange-600",
        badge: "Xếp hạng & Tên dài",
        shortNote:
          "Dùng khi tên nhãn dài, nhiều danh mục (>7), xếp hạng dữ liệu.",
        useCase: "So sánh ngân sách hoạt động của 9 phòng ban doanh nghiệp.",
      },
      {
        id: "pie",
        englishTitle: "Pie Chart",
        vietnameseSubtitle: "Biểu đồ tròn",
        icon: jsxRuntimeExports.jsx(ChartPie, { className: "h-5 w-5" }),
        color: "from-purple-500 to-fuchsia-600",
        badge: "Cơ cấu 100%",
        shortNote:
          "Minh họa tỷ lệ % đóng góp của từng phần so với tổng thể (tốt nhất 3-6 lát cắt).",
        useCase: "Phân tích cơ cấu phân bổ ngân sách dự án.",
      },
      {
        id: "table",
        englishTitle: "Table",
        vietnameseSubtitle: "Bảng",
        icon: jsxRuntimeExports.jsx(Table, { className: "h-5 w-5" }),
        color: "from-sky-500 to-blue-600",
        badge: "Tra cứu chính xác",
        shortNote:
          "Hiển thị dữ liệu chính xác tuyệt đối, tra cứu đa chỉ số và so sánh nhiều thuộc tính.",
        useCase:
          "Danh mục quản lý kho hàng với SKU, giá, tồn kho & chiết khấu.",
      },
      {
        id: "scatter",
        englishTitle: "Scatter Plot Graph",
        vietnameseSubtitle: "Biểu đồ phân tán",
        icon: jsxRuntimeExports.jsx(ChartScatter, { className: "h-5 w-5" }),
        color: "from-rose-500 to-pink-600",
        badge: "Tương quan 2 biến",
        shortNote:
          "Quan sát sự tương quan, phân bố dữ liệu (Biến A thay đổi thì B có thay đổi theo hay không?).",
        useCase:
          "Khảo sát mối quan hệ giữa Chi phí Quảng cáo vs Doanh số bán hàng.",
      },
    ];
    function Lab21({ onSuccess: a }) {
      var it;
      const [n, i] = reactExports.useState("column"),
        [l, c] = reactExports.useState([
          { id: 1, name: "Áo sơ mi", sales: 420, color: "#3b82f6" },
          { id: 2, name: "Quần jeans", sales: 680, color: "#6366f1" },
          { id: 3, name: "Áo khoác", sales: 290, color: "#8b5cf6" },
          { id: 4, name: "Mũ len", sales: 150, color: "#ec4899" },
          { id: 5, name: "Balo học sinh", sales: 530, color: "#14b8a6" },
        ]),
        [d, m] = reactExports.useState(!0),
        [u, g] = reactExports.useState("12months"),
        [p, f] = reactExports.useState(!0),
        [b, k] = reactExports.useState([
          45, 52, 58, 65, 60, 72, 85, 90, 82, 95, 108, 120,
        ]),
        [N, M] = reactExports.useState([
          30, 38, 42, 50, 48, 55, 62, 70, 68, 75, 82, 90,
        ]),
        y = [
          "T1",
          "T2",
          "T3",
          "T4",
          "T5",
          "T6",
          "T7",
          "T8",
          "T9",
          "T10",
          "T11",
          "T12",
        ],
        [I, R] = reactExports.useState("desc"),
        [z, A] = reactExports.useState(9),
        O = [
          {
            name: "1. Nghiên cứu & Phát triển (R&D)",
            budget: 850,
            dept: "Khối Kỹ thuật",
          },
          {
            name: "2. Bán hàng & Tiếp thị Toàn quốc",
            budget: 1200,
            dept: "Khối Kinh doanh",
          },
          {
            name: "3. Chăm sóc Khách hàng & Hậu mãi",
            budget: 640,
            dept: "Khối Dịch vụ",
          },
          {
            name: "4. Hành chính Nhân sự & Pháp chế",
            budget: 420,
            dept: "Khối Quản trị",
          },
          {
            name: "5. Tài chính Kế toán & Kiểm toán",
            budget: 510,
            dept: "Khối Quản trị",
          },
          {
            name: "6. Công nghệ Thông tin & Hạ tầng",
            budget: 980,
            dept: "Khối Kỹ thuật",
          },
          {
            name: "7. Vận tải & Kho vận Logistics",
            budget: 760,
            dept: "Khối Vận hành",
          },
          {
            name: "8. Đảm bảo Chất lượng & Kiểm định",
            budget: 390,
            dept: "Khối Kỹ thuật",
          },
          {
            name: "9. Quản lý Chuỗi Cung ứng Quốc tế",
            budget: 890,
            dept: "Khối Vận hành",
          },
        ],
        L = () => {
          let oe = [...O];
          return (
            I === "desc"
              ? oe.sort((ie, ge) => ge.budget - ie.budget)
              : I === "asc" && oe.sort((ie, ge) => ie.budget - ge.budget),
            oe.slice(0, z)
          );
        },
        [le, P] = reactExports.useState("donut"),
        [G, ee] = reactExports.useState(null),
        [ce, V] = reactExports.useState([
          { id: 0, label: "Lương nhân viên", value: 40, color: "#3b82f6" },
          { id: 1, label: "Marketing & QC", value: 25, color: "#10b981" },
          { id: 2, label: "Mặt bằng & Văn phòng", value: 15, color: "#f59e0b" },
          { id: 3, label: "Vận hành & Điện nước", value: 10, color: "#8b5cf6" },
          { id: 4, label: "Lợi nhuận dự phòng", value: 10, color: "#ec4899" },
        ]),
        [pe, Ie] = reactExports.useState(""),
        [se, de] = reactExports.useState("revenue"),
        [_, U] = reactExports.useState(!1),
        Z = [
          {
            sku: "SKU-101",
            name: 'Laptop UltraBook Pro 15"',
            price: 245e5,
            stock: 45,
            discount: "5%",
            status: "Còn hàng",
            revenue: 11025e5,
          },
          {
            sku: "SKU-102",
            name: "Màn hình 4K IPS 27 Inch",
            price: 89e5,
            stock: 12,
            discount: "10%",
            status: "Sắp hết",
            revenue: 1068e5,
          },
          {
            sku: "SKU-103",
            name: "Bàn phím Cơ Không dây RGB",
            price: 185e4,
            stock: 120,
            discount: "0%",
            status: "Còn hàng",
            revenue: 222e6,
          },
          {
            sku: "SKU-104",
            name: "Chuột Máy tính Ergonomic",
            price: 95e4,
            stock: 85,
            discount: "15%",
            status: "Còn hàng",
            revenue: 8075e4,
          },
          {
            sku: "SKU-105",
            name: "Tai nghe Chống ồn Active",
            price: 32e5,
            stock: 0,
            discount: "20%",
            status: "Hết hàng",
            revenue: 0,
          },
          {
            sku: "SKU-106",
            name: "Ổ cứng SSD NVMe 1TB High-Speed",
            price: 21e5,
            stock: 64,
            discount: "8%",
            status: "Còn hàng",
            revenue: 1344e5,
          },
          {
            sku: "SKU-107",
            name: "Webcam 1080p Full HD AutoFocus",
            price: 125e4,
            stock: 30,
            discount: "0%",
            status: "Còn hàng",
            revenue: 375e5,
          },
        ],
        be = () => {
          let oe = Z.filter(
            (ie) =>
              ie.name.toLowerCase().includes(pe.toLowerCase()) ||
              ie.sku.toLowerCase().includes(pe.toLowerCase()) ||
              ie.status.toLowerCase().includes(pe.toLowerCase()),
          );
          return (
            oe.sort((ie, ge) => {
              let ae = ie[se],
                Ae = ge[se];
              return typeof ae == "string"
                ? _
                  ? ae.localeCompare(Ae)
                  : Ae.localeCompare(ae)
                : _
                  ? ae - Ae
                  : Ae - ae;
            }),
            oe
          );
        },
        [he, E] = reactExports.useState("positive"),
        [v, K] = reactExports.useState(!0),
        [te, je] = reactExports.useState(!1),
        Se = () =>
          he === "positive"
            ? [
                { x: 10, y: 120, label: "Chi dịch A1" },
                { x: 15, y: 180, label: "Chi dịch A2" },
                { x: 22, y: 240, label: "Chi dịch A3" },
                { x: 28, y: 310, label: "Chi dịch A4" },
                { x: 35, y: 390, label: "Chi dịch A5" },
                { x: 42, y: 450, label: "Chi dịch A6" },
                { x: 50, y: 520, label: "Chi dịch A7" },
                { x: 58, y: 610, label: "Chi dịch A8" },
                { x: 65, y: 680, label: "Chi dịch A9" },
                { x: 75, y: 790, label: "Chi dịch A10" },
              ]
            : he === "negative"
              ? [
                  { x: 10, y: 800, label: "Mặt hàng B1" },
                  { x: 18, y: 720, label: "Mặt hàng B2" },
                  { x: 25, y: 610, label: "Mặt hàng B3" },
                  { x: 32, y: 530, label: "Mặt hàng B4" },
                  { x: 40, y: 410, label: "Mặt hàng B5" },
                  { x: 48, y: 320, label: "Mặt hàng B6" },
                  { x: 55, y: 250, label: "Mặt hàng B7" },
                  { x: 65, y: 170, label: "Mặt hàng B8" },
                  { x: 75, y: 100, label: "Mặt hàng B9" },
                ]
              : [
                  { x: 12, y: 450, label: "Mẫu C1" },
                  { x: 18, y: 120, label: "Mẫu C2" },
                  { x: 25, y: 680, label: "Mẫu C3" },
                  { x: 30, y: 220, label: "Mẫu C4" },
                  { x: 42, y: 590, label: "Mẫu C5" },
                  { x: 48, y: 150, label: "Mẫu C6" },
                  { x: 55, y: 710, label: "Mẫu C7" },
                  { x: 62, y: 320, label: "Mẫu C8" },
                  { x: 70, y: 500, label: "Mẫu C9" },
                ],
        [He, Xe] = reactExports.useState({}),
        [Qe, qe] = reactExports.useState(!1),
        [at, ze] = reactExports.useState(!1),
        De = Math.max(...l.map((oe) => oe.sales)),
        tt = Math.min(...l.map((oe) => oe.sales));
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 pb-12 text-left",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden",
            children: [
              jsxRuntimeExports.jsx("div", {
                className: "absolute -right-10 -bottom-10 opacity-10",
                children: jsxRuntimeExports.jsx(ChartColumn, {
                  className: "w-80 h-80",
                }),
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "relative z-10 space-y-3",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase text-blue-100",
                    children: [
                      jsxRuntimeExports.jsx(Sparkles, {
                        className: "h-3.5 w-3.5 text-amber-300",
                      }),
                      "LAB 21: TRỰC QUAN HÓA DỮ LIỆU",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h1", {
                    className: "text-2xl sm:text-4xl font-black tracking-tight",
                    children:
                      "Mô Phỏng Trực Quan Các Loại Biểu Đồ (Types of Charts)",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base text-blue-100 max-w-3xl leading-relaxed font-medium",
                    children:
                      "Mỗi loại biểu đồ được thiết kế riêng để giải quyết một nhu cầu trực quan hóa cụ thể: so sánh số lượng, theo dõi xu hướng thời gian, xếp hạng nhãn dài, phân tích cơ cấu hay khám phá mối tương quan 2 biến số!",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className:
                  "lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm space-y-3",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center justify-between px-2 pb-2 border-b border-slate-100 dark:border-slate-800",
                    children: [
                      jsxRuntimeExports.jsxs("span", {
                        className:
                          "text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5",
                        children: [
                          jsxRuntimeExports.jsx(SlidersVertical, {
                            className: "h-4 w-4 text-blue-500",
                          }),
                          " CHỌN LOẠI BIỂU ĐỒ MÔ PHỎNG",
                        ],
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full",
                        children: "6 Mô Hình",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className: "space-y-2",
                    children: CHART_TYPES.map((oe) => {
                      const ie = n === oe.id;
                      return jsxRuntimeExports.jsx(
                        "button",
                        {
                          onClick: () => i(oe.id),
                          className: `w-full p-3.5 rounded-2xl text-left transition-all duration-200 flex items-center justify-between group cursor-pointer ${ie ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.01]" : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800"}`,
                          children: jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className: `p-2.5 rounded-xl transition-colors ${ie ? "bg-white/20 text-white" : "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/60 dark:border-slate-700"}`,
                                children: oe.icon,
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "font-extrabold text-sm sm:text-base leading-tight",
                                    children: oe.englishTitle,
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className: `text-xs sm:text-sm mt-0.5 font-medium ${ie ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`,
                                    children: oe.vietnameseSubtitle,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        oe.id,
                      );
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between min-h-[520px]",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    children: [
                      (() => {
                        const oe = CHART_TYPES.find((ie) => ie.id === n);
                        return jsxRuntimeExports.jsx("div", {
                          className:
                            "border-b border-slate-100 dark:border-slate-800 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                          children: jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className: `px-2.5 py-0.5 rounded-full text-xs font-black text-white bg-linear-to-r ${oe.color}`,
                                    children: oe.badge,
                                  }),
                                  jsxRuntimeExports.jsxs("h3", {
                                    className:
                                      "text-lg sm:text-xl font-black text-slate-900 dark:text-white",
                                    children: [
                                      oe.vietnameseSubtitle,
                                      " (",
                                      oe.englishTitle,
                                      ")",
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1",
                                children: [
                                  "📌 ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "Ứng dụng:",
                                  }),
                                  " ",
                                  oe.useCase,
                                ],
                              }),
                            ],
                          }),
                        });
                      })(),
                      n === "column" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center justify-between bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-bold text-slate-600 dark:text-slate-300",
                                  children:
                                    "💡 Thử điều chỉnh doanh số các sản phẩm:",
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => m(!d),
                                  className: `px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${d ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Eye, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    d
                                      ? "Đang bật Highlight Max/Min"
                                      : "Tắt Highlight",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-2xl p-6 text-white space-y-4 border border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Mô Phỏng Doanh Số Bán Hàng (Đơn vị: Sản phẩm)",
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "text-blue-400",
                                      children: [
                                        "Số sản phẩm: ",
                                        l.length,
                                        " (< 7 sản phẩm)",
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-64 flex items-end justify-around gap-2 sm:gap-4 pt-8 pb-4 px-2 border-b border-slate-800 relative",
                                  children: l.map((oe) => {
                                    const ie = Math.max(
                                        15,
                                        (oe.sales / 800) * 100,
                                      ),
                                      ge = d && oe.sales === De,
                                      ae = d && oe.sales === tt;
                                    return jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex-1 flex flex-col items-center h-full justify-end group relative",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className: `mb-2 text-xs font-black px-2 py-0.5 rounded transition-all ${ge ? "bg-emerald-500 text-white scale-110 shadow-lg" : ae ? "bg-rose-500 text-white" : "bg-slate-800 text-slate-200"}`,
                                            children: oe.sales,
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: `w-full max-w-[48px] rounded-t-xl transition-all duration-300 relative ${ge ? "bg-linear-to-t from-emerald-600 to-emerald-400 ring-2 ring-emerald-300" : ae ? "bg-linear-to-t from-rose-600 to-rose-400 ring-2 ring-rose-300" : "bg-linear-to-t from-blue-600 to-indigo-400 hover:from-blue-500 hover:to-indigo-300"}`,
                                            style: { height: `${ie}%` },
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "mt-3 text-xs font-extrabold text-slate-300 truncate max-w-full text-center",
                                            children: oe.name,
                                          }),
                                        ],
                                      },
                                      oe.id,
                                    );
                                  }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2",
                                  children: l.map((oe) =>
                                    jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className:
                                          "bg-slate-900 p-2 rounded-xl border border-slate-800 space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "text-[11px] font-bold text-slate-300 truncate",
                                            children: oe.name,
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "range",
                                            min: "50",
                                            max: "750",
                                            value: oe.sales,
                                            onChange: (ie) => {
                                              const ge = parseInt(
                                                ie.target.value,
                                              );
                                              c((ae) =>
                                                ae.map((Ae) =>
                                                  Ae.id === oe.id
                                                    ? { ...Ae, sales: ge }
                                                    : Ae,
                                                ),
                                              );
                                            },
                                            className:
                                              "w-full accent-blue-500 cursor-pointer h-1.5",
                                          }),
                                        ],
                                      },
                                      oe.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      n === "line" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-bold text-slate-600 dark:text-slate-300",
                                      children: "Chu kỳ thời gian:",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => g("12months"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${u === "12months" ? "bg-emerald-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children: "12 Tháng (T1 - T12)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => f(!p),
                                  className: `px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${p ? "bg-indigo-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Plus, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    p
                                      ? "Đang so sánh 2 chuỗi dữ liệu"
                                      : "+ Thêm chuỗi so sánh",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-2xl p-6 text-white space-y-4 border border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "h-2.5 w-2.5 rounded-full bg-emerald-400",
                                        }),
                                        " Doanh thu 2026",
                                        p &&
                                          jsxRuntimeExports.jsxs(
                                            jsxRuntimeExports.Fragment,
                                            {
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "h-2.5 w-2.5 rounded-full bg-indigo-400 ml-3",
                                                }),
                                                " Doanh thu 2025",
                                              ],
                                            },
                                          ),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-emerald-400",
                                      children:
                                        "Trục hoành: Chuỗi thời gian liên tục",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "h-64 relative pt-6 pb-6 border-b border-slate-800",
                                  children: [
                                    jsxRuntimeExports.jsxs("svg", {
                                      className:
                                        "w-full h-full overflow-visible",
                                      viewBox: "0 0 500 200",
                                      preserveAspectRatio: "none",
                                      children: [
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "40",
                                          x2: "500",
                                          y2: "40",
                                          stroke: "#334155",
                                          strokeDasharray: "4 4",
                                          strokeWidth: "1",
                                        }),
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "90",
                                          x2: "500",
                                          y2: "90",
                                          stroke: "#334155",
                                          strokeDasharray: "4 4",
                                          strokeWidth: "1",
                                        }),
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "140",
                                          x2: "500",
                                          y2: "140",
                                          stroke: "#334155",
                                          strokeDasharray: "4 4",
                                          strokeWidth: "1",
                                        }),
                                        (() => {
                                          const oe = b
                                            .map((ie, ge) => {
                                              const ae =
                                                  (ge / (b.length - 1)) * 480 +
                                                  10,
                                                Ae = 180 - (ie / 140) * 160;
                                              return `${ae},${Ae}`;
                                            })
                                            .join(" ");
                                          return jsxRuntimeExports.jsx(
                                            "polyline",
                                            {
                                              fill: "none",
                                              stroke: "#10b981",
                                              strokeWidth: "3",
                                              points: oe,
                                              className:
                                                "transition-all duration-300",
                                            },
                                          );
                                        })(),
                                        p &&
                                          (() => {
                                            const oe = N.map((ie, ge) => {
                                              const ae =
                                                  (ge / (N.length - 1)) * 480 +
                                                  10,
                                                Ae = 180 - (ie / 140) * 160;
                                              return `${ae},${Ae}`;
                                            }).join(" ");
                                            return jsxRuntimeExports.jsx(
                                              "polyline",
                                              {
                                                fill: "none",
                                                stroke: "#818cf8",
                                                strokeWidth: "2.5",
                                                strokeDasharray: "6 3",
                                                points: oe,
                                                className:
                                                  "transition-all duration-300",
                                              },
                                            );
                                          })(),
                                        b.map((oe, ie) => {
                                          const ge =
                                              (ie / (b.length - 1)) * 480 + 10,
                                            ae = 180 - (oe / 140) * 160;
                                          return jsxRuntimeExports.jsxs(
                                            "g",
                                            {
                                              className: "group cursor-pointer",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "circle",
                                                  {
                                                    cx: ge,
                                                    cy: ae,
                                                    r: "5",
                                                    fill: "#10b981",
                                                    stroke: "#ffffff",
                                                    strokeWidth: "1.5",
                                                    className:
                                                      "hover:r-7 transition-all",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx("rect", {
                                                  x: ge - 17,
                                                  y: ae - 25,
                                                  width: "34",
                                                  height: "17",
                                                  rx: "5",
                                                  fill: "#064e3b",
                                                  stroke: "#10b981",
                                                  strokeWidth: "1.5",
                                                }),
                                                jsxRuntimeExports.jsxs("text", {
                                                  x: ge,
                                                  y: ae - 13,
                                                  textAnchor: "middle",
                                                  fill: "#ffffff",
                                                  fontSize: "10",
                                                  fontWeight: "900",
                                                  children: [oe, "M"],
                                                }),
                                              ],
                                            },
                                            `l1-${ie}`,
                                          );
                                        }),
                                        p &&
                                          N.map((oe, ie) => {
                                            const ge =
                                                (ie / (N.length - 1)) * 480 +
                                                10,
                                              ae = 180 - (oe / 140) * 160;
                                            return jsxRuntimeExports.jsxs(
                                              "g",
                                              {
                                                className:
                                                  "group cursor-pointer",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "circle",
                                                    {
                                                      cx: ge,
                                                      cy: ae,
                                                      r: "4",
                                                      fill: "#818cf8",
                                                      stroke: "#ffffff",
                                                      strokeWidth: "1",
                                                      className:
                                                        "hover:r-6 transition-all",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "rect",
                                                    {
                                                      x: ge - 15,
                                                      y: ae + 8,
                                                      width: "30",
                                                      height: "15",
                                                      rx: "4",
                                                      fill: "#1e1b4b",
                                                      stroke: "#818cf8",
                                                      strokeWidth: "1.5",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "text",
                                                    {
                                                      x: ge,
                                                      y: ae + 19,
                                                      textAnchor: "middle",
                                                      fill: "#ffffff",
                                                      fontSize: "9",
                                                      fontWeight: "900",
                                                      children: [oe, "M"],
                                                    },
                                                  ),
                                                ],
                                              },
                                              `l2-${ie}`,
                                            );
                                          }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "flex justify-between text-[11px] font-extrabold text-slate-400 mt-2 px-1",
                                      children: y.map((oe, ie) =>
                                        jsxRuntimeExports.jsx(
                                          "span",
                                          { children: oe },
                                          ie,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      n === "bar" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-bold text-slate-600 dark:text-slate-300",
                                      children: "Sắp xếp:",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => R("desc"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${I === "desc" ? "bg-amber-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children: "Giảm dần (Top cao nhất)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => R("asc"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${I === "asc" ? "bg-amber-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children: "Tăng dần",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-bold text-slate-600 dark:text-slate-300",
                                      children: "Hiển thị:",
                                    }),
                                    jsxRuntimeExports.jsxs("select", {
                                      value: z,
                                      onChange: (oe) =>
                                        A(parseInt(oe.target.value)),
                                      className:
                                        "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-2.5 py-1 text-xs font-bold cursor-pointer",
                                      children: [
                                        jsxRuntimeExports.jsx("option", {
                                          value: 9,
                                          children:
                                            "Tất cả 9 phòng ban (> 7 danh mục)",
                                        }),
                                        jsxRuntimeExports.jsx("option", {
                                          value: 5,
                                          children: "Top 5 phòng ban",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-2xl p-5 sm:p-6 text-white space-y-3 border border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children:
                                        "Xếp Hạng Ngân Sách Các Phòng Ban (Tên dài & Nhiều danh mục)",
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-amber-400",
                                      children:
                                        "Trục tung nằm ngang hiển thị rõ nhãn",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "space-y-2.5 pt-1",
                                  children: L().map((oe, ie) => {
                                    const ge = (oe.budget / 1200) * 100;
                                    return jsxRuntimeExports.jsxs(
                                      "div",
                                      {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-xs font-bold",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-slate-200 truncate pr-2 max-w-[280px] sm:max-w-[360px]",
                                                children: oe.name,
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-amber-400 font-mono font-black",
                                                children: [
                                                  oe.budget,
                                                  " Triệu VNĐ",
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "h-6 w-full bg-slate-900 rounded-lg overflow-hidden p-0.5 border border-slate-800",
                                            children: jsxRuntimeExports.jsx(
                                              motion.div,
                                              {
                                                initial: { width: 0 },
                                                animate: { width: `${ge}%` },
                                                transition: { duration: 0.4 },
                                                className:
                                                  "h-full bg-linear-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-end pr-2 text-[10px] font-black text-white",
                                                children:
                                                  ge > 20 &&
                                                  `${Math.round(ge)}%`,
                                              },
                                            ),
                                          }),
                                        ],
                                      },
                                      ie,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      n === "pie" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-6 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center justify-between bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-bold text-slate-600 dark:text-slate-300",
                                      children: "Kiểu hiển thị:",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => P("donut"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${le === "donut" ? "bg-purple-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children: "Bánh Vòng (Donut)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => P("pie"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${le === "pie" ? "bg-purple-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children: "Bánh Tròn (Pie)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-xs font-bold text-purple-600 dark:text-purple-400",
                                  children:
                                    "💡 Click chọn từng lát cắt để tách riêng!",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "bg-slate-950 rounded-2xl p-6 text-white space-y-4 border border-slate-800",
                              children: jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-12 gap-6 items-center",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "md:col-span-6 flex flex-col items-center justify-center relative",
                                    children: jsxRuntimeExports.jsx("svg", {
                                      className: "w-56 h-56 overflow-visible",
                                      viewBox: "-1.1 -1.1 2.2 2.2",
                                      children: (() => {
                                        let oe = 0;
                                        return ce.map((ie) => {
                                          const ge = oe;
                                          oe += ie.value / 100;
                                          const ae = oe,
                                            Ae = ge * 2 * Math.PI - Math.PI / 2,
                                            Q = ae * 2 * Math.PI - Math.PI / 2,
                                            Te = G === ie.id,
                                            $e = Te ? 0.12 : 0,
                                            _e = (Ae + Q) / 2,
                                            Ue = Math.cos(_e) * $e,
                                            Ke = Math.sin(_e) * $e,
                                            ot = Math.cos(Ae),
                                            w = Math.sin(Ae),
                                            C = Math.cos(Q),
                                            Ee = Math.sin(Q),
                                            ke = ie.value > 50 ? 1 : 0,
                                            We =
                                              le === "pie"
                                                ? `M 0 0 L ${ot} ${w} A 1 1 0 ${ke} 1 ${C} ${Ee} Z`
                                                : `M ${ot} ${w} A 1 1 0 ${ke} 1 ${C} ${Ee}`;
                                          return jsxRuntimeExports.jsx(
                                            "path",
                                            {
                                              d: We,
                                              fill:
                                                le === "pie"
                                                  ? ie.color
                                                  : "none",
                                              stroke: ie.color,
                                              strokeWidth:
                                                le === "donut"
                                                  ? "0.45"
                                                  : "0.02",
                                              transform: `translate(${Ue}, ${Ke})`,
                                              onClick: () =>
                                                ee(Te ? null : ie.id),
                                              className:
                                                "cursor-pointer transition-all duration-300 hover:opacity-85",
                                            },
                                            ie.id,
                                          );
                                        });
                                      })(),
                                    }),
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "md:col-span-6 space-y-2.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-xs font-black uppercase text-slate-400 block border-b border-slate-800 pb-1.5",
                                        children:
                                          "CƠ CẤU PHÂN BỔ NGÂN SÁCH (TỔNG 100%)",
                                      }),
                                      ce.map((oe) => {
                                        const ie = G === oe.id;
                                        return jsxRuntimeExports.jsxs(
                                          "button",
                                          {
                                            onClick: () =>
                                              ee(ie ? null : oe.id),
                                            className: `w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${ie ? "bg-purple-900/40 border-purple-500 scale-102 shadow-md" : "bg-slate-900 border-slate-800 hover:bg-slate-850"}`,
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2.5",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "h-3 w-3 rounded-full shrink-0",
                                                      style: {
                                                        backgroundColor:
                                                          oe.color,
                                                      },
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-xs font-bold text-slate-200",
                                                      children: oe.label,
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-xs font-mono font-black text-white",
                                                children: [oe.value, "%"],
                                              }),
                                            ],
                                          },
                                          oe.id,
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      n === "table" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "relative w-full sm:w-64",
                                  children: [
                                    jsxRuntimeExports.jsx(Search, {
                                      className:
                                        "h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "text",
                                      placeholder: "Tìm sản phẩm",
                                      value: pe,
                                      onChange: (oe) => Ie(oe.target.value),
                                      className:
                                        "w-full pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-medium",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className: "font-bold text-slate-500",
                                      children: "Sắp xếp cột:",
                                    }),
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => {
                                        (de("revenue"), U(!_));
                                      },
                                      className:
                                        "px-3 py-1 bg-sky-600 text-white rounded-xl font-bold flex items-center gap-1 cursor-pointer",
                                      children: [
                                        jsxRuntimeExports.jsx(ArrowUpDown, {
                                          className: "h-3 w-3",
                                        }),
                                        "Doanh thu ",
                                        _ ? "↑" : "↓",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-2xl overflow-hidden border border-slate-800",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className: "overflow-x-auto",
                                  children: jsxRuntimeExports.jsxs("table", {
                                    className:
                                      "w-full text-left text-xs text-slate-300",
                                    children: [
                                      jsxRuntimeExports.jsx("thead", {
                                        className:
                                          "bg-slate-900 uppercase font-black text-slate-400 border-b border-slate-800",
                                        children: jsxRuntimeExports.jsxs("tr", {
                                          children: [
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3",
                                              children: "Mã SKU",
                                            }),
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3",
                                              children: "Tên sản phẩm",
                                            }),
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3 text-right",
                                              children: "Đơn giá",
                                            }),
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3 text-center",
                                              children: "Tồn kho",
                                            }),
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3 text-center",
                                              children: "Trạng thái",
                                            }),
                                            jsxRuntimeExports.jsx("th", {
                                              className: "p-3 text-right",
                                              children: "Doanh số",
                                            }),
                                          ],
                                        }),
                                      }),
                                      jsxRuntimeExports.jsx("tbody", {
                                        className: "divide-y divide-slate-850",
                                        children: be().map((oe, ie) =>
                                          jsxRuntimeExports.jsxs(
                                            "tr",
                                            {
                                              className:
                                                "hover:bg-slate-900/60 transition-colors",
                                              children: [
                                                jsxRuntimeExports.jsx("td", {
                                                  className:
                                                    "p-3 font-mono text-slate-400 font-bold",
                                                  children: oe.sku,
                                                }),
                                                jsxRuntimeExports.jsx("td", {
                                                  className:
                                                    "p-3 font-bold text-white",
                                                  children: oe.name,
                                                }),
                                                jsxRuntimeExports.jsxs("td", {
                                                  className:
                                                    "p-3 text-right font-mono",
                                                  children: [
                                                    oe.price.toLocaleString(
                                                      "vi-VN",
                                                    ),
                                                    " đ",
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("td", {
                                                  className:
                                                    "p-3 text-center font-bold",
                                                  children: oe.stock,
                                                }),
                                                jsxRuntimeExports.jsx("td", {
                                                  className: "p-3 text-center",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: `px-2 py-0.5 rounded-full text-[10px] font-black ${oe.status === "Còn hàng" ? "bg-emerald-500/20 text-emerald-400" : oe.status === "Sắp hết" ? "bg-amber-500/20 text-amber-400" : "bg-rose-500/20 text-rose-400"}`,
                                                        children: oe.status,
                                                      },
                                                    ),
                                                }),
                                                jsxRuntimeExports.jsxs("td", {
                                                  className:
                                                    "p-3 text-right font-mono font-black text-sky-400",
                                                  children: [
                                                    oe.revenue.toLocaleString(
                                                      "vi-VN",
                                                    ),
                                                    " đ",
                                                  ],
                                                }),
                                              ],
                                            },
                                            ie,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900 p-3 text-xs font-bold text-slate-400 flex justify-between border-t border-slate-800",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      children: [
                                        "Tổng số bản ghi: ",
                                        be().length,
                                        " mặt hàng",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "text-sky-400 font-mono",
                                      children: [
                                        "Tổng Doanh Thu: ",
                                        be()
                                          .reduce(
                                            (oe, ie) => oe + ie.revenue,
                                            0,
                                          )
                                          .toLocaleString("vi-VN"),
                                        " VNĐ",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      n === "scatter" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-5 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-3 bg-slate-50 dark:bg-slate-850 p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "font-bold text-slate-600 dark:text-slate-300",
                                      children: "Kịch bản tương quan:",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => E("positive"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${he === "positive" ? "bg-rose-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children:
                                        "Tương quan Thuận (Quảng cáo vs Doanh số)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      onClick: () => E("negative"),
                                      className: `px-3 py-1 rounded-xl font-bold transition-all cursor-pointer ${he === "negative" ? "bg-rose-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                      children:
                                        "Tương quan Nghịch (Giá vs Lượng mua)",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => K(!v),
                                  className: `px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${v ? "bg-rose-600 text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                  children: [
                                    jsxRuntimeExports.jsx(Zap, {
                                      className: "h-3.5 w-3.5",
                                    }),
                                    v
                                      ? "Đang bật Đường Xu Hướng (Trendline)"
                                      : "Bật Đường Xu Hướng",
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-950 rounded-2xl p-6 text-white space-y-3 border border-slate-800",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      children: [
                                        he === "positive" &&
                                          "📈 Tương quan Thuận: Quảng cáo tăng ➔ Doanh số tăng",
                                        he === "negative" &&
                                          "📉 Tương quan Nghịch: Giá tăng ➔ Lượng mua giảm",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("span", {
                                      className: "text-rose-400",
                                      children:
                                        "Trục X & Trục Y: 2 Biến số liên tục",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "h-64 relative pt-4 pb-6 px-4 border-b border-slate-800",
                                  children: [
                                    jsxRuntimeExports.jsxs("svg", {
                                      className:
                                        "w-full h-full overflow-visible",
                                      viewBox: "0 0 500 200",
                                      preserveAspectRatio: "none",
                                      children: [
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "50",
                                          x2: "500",
                                          y2: "50",
                                          stroke: "#334155",
                                          strokeDasharray: "3 3",
                                        }),
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "100",
                                          x2: "500",
                                          y2: "100",
                                          stroke: "#334155",
                                          strokeDasharray: "3 3",
                                        }),
                                        jsxRuntimeExports.jsx("line", {
                                          x1: "0",
                                          y1: "150",
                                          x2: "500",
                                          y2: "150",
                                          stroke: "#334155",
                                          strokeDasharray: "3 3",
                                        }),
                                        v &&
                                          he === "positive" &&
                                          jsxRuntimeExports.jsx("line", {
                                            x1: "20",
                                            y1: "180",
                                            x2: "480",
                                            y2: "20",
                                            stroke: "#f43f5e",
                                            strokeWidth: "2.5",
                                            strokeDasharray: "6 3",
                                          }),
                                        v &&
                                          he === "negative" &&
                                          jsxRuntimeExports.jsx("line", {
                                            x1: "20",
                                            y1: "20",
                                            x2: "480",
                                            y2: "180",
                                            stroke: "#f43f5e",
                                            strokeWidth: "2.5",
                                            strokeDasharray: "6 3",
                                          }),
                                        Se().map((oe, ie) => {
                                          const ge = (oe.x / 80) * 460 + 20,
                                            ae = 190 - (oe.y / 850) * 170;
                                          return jsxRuntimeExports.jsxs(
                                            "g",
                                            {
                                              className: "group cursor-pointer",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "circle",
                                                  {
                                                    cx: ge,
                                                    cy: ae,
                                                    r: "6",
                                                    fill: "#f43f5e",
                                                    className:
                                                      "hover:r-9 transition-all hover:fill-rose-300",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs("text", {
                                                  x: ge,
                                                  y: ae - 10,
                                                  textAnchor: "middle",
                                                  fill: "#fecdd3",
                                                  fontSize: "9",
                                                  fontWeight: "bold",
                                                  className:
                                                    "opacity-0 group-hover:opacity-100 transition-opacity",
                                                  children: [
                                                    "(",
                                                    oe.x,
                                                    ", ",
                                                    oe.y,
                                                    ")",
                                                  ],
                                                }),
                                              ],
                                            },
                                            ie,
                                          );
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex justify-between text-[10px] text-slate-400 mt-2 font-bold",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "Mức độ thấp (Trục X)",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "Mức độ trung bình",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          children: "Mức độ cao (Trục X)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "pt-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      onClick: () => je(!te),
                                      className:
                                        "w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all cursor-pointer border border-rose-500",
                                      children: [
                                        jsxRuntimeExports.jsxs("span", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx(
                                              CircleQuestionMark,
                                              {
                                                className:
                                                  "h-4 w-4 text-white shrink-0",
                                              },
                                            ),
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "💡 Đọc & Giải Thích Chi Tiết Biểu Đồ Phân Tán (Scatter Plot)",
                                            }),
                                          ],
                                        }),
                                        te
                                          ? jsxRuntimeExports.jsx(ChevronUp, {
                                              className:
                                                "h-4 w-4 shrink-0 text-white",
                                            })
                                          : jsxRuntimeExports.jsx(ChevronDown, {
                                              className:
                                                "h-4 w-4 shrink-0 text-white",
                                            }),
                                      ],
                                    }),
                                    te &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "mt-3 p-5 bg-slate-950 text-white rounded-2xl border-2 border-slate-700 shadow-xl text-xs sm:text-sm space-y-4 animate-fadeIn",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-2 border-b border-slate-800 pb-3",
                                            children: [
                                              jsxRuntimeExports.jsxs("h4", {
                                                className:
                                                  "font-black text-rose-400 text-sm sm:text-base flex items-center gap-1.5",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: "📌" },
                                                  ),
                                                  " Cấu Trúc Trục & Ý Nghĩa Mối Quan Hệ:",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("ul", {
                                                className:
                                                  "space-y-2 text-slate-100 font-medium",
                                                children: [
                                                  jsxRuntimeExports.jsxs("li", {
                                                    className:
                                                      "flex items-start gap-1.5",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-rose-400 font-extrabold",
                                                          children: "•",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "strong",
                                                              {
                                                                className:
                                                                  "text-white",
                                                                children:
                                                                  "Trục ngang (Trục X):",
                                                              },
                                                            ),
                                                            " Biến số thứ nhất (ví dụ: Chi phí Quảng cáo hoặc Giá bán).",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("li", {
                                                    className:
                                                      "flex items-start gap-1.5",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-rose-400 font-extrabold",
                                                          children: "•",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "strong",
                                                              {
                                                                className:
                                                                  "text-white",
                                                                children:
                                                                  "Trục dọc (Trục Y):",
                                                              },
                                                            ),
                                                            " Biến số thứ hai (ví dụ: Doanh số hoặc Lượng người mua).",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("li", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                      jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-start gap-1.5",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-rose-400 font-extrabold",
                                                                children: "•",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                children:
                                                                  jsxRuntimeExports.jsx(
                                                                    "strong",
                                                                    {
                                                                      className:
                                                                        "text-white",
                                                                      children:
                                                                        "Mỗi chấm đỏ chính là kết quả của 1 tháng:",
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
                                                            "pl-5 space-y-1 text-slate-200 text-xs sm:text-sm",
                                                          children: [
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                children: [
                                                                  "- ",
                                                                  jsxRuntimeExports.jsx(
                                                                    "em",
                                                                    {
                                                                      className:
                                                                        "text-rose-300 not-italic font-semibold",
                                                                      children:
                                                                        "Chấm ở góc dưới - bên trái:",
                                                                    },
                                                                  ),
                                                                  " Tháng đó bạn chi ít tiền quảng cáo (X thấp) ➔ thu về doanh số thấp (Y thấp).",
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                children: [
                                                                  "- ",
                                                                  jsxRuntimeExports.jsx(
                                                                    "em",
                                                                    {
                                                                      className:
                                                                        "text-emerald-300 not-italic font-semibold",
                                                                      children:
                                                                        "Chấm ở góc trên - bên phải:",
                                                                    },
                                                                  ),
                                                                  " Tháng đó bạn chi rất nhiều tiền quảng cáo (X cao) ➔ thu về doanh số rất cao (Y cao).",
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("li", {
                                                    className:
                                                      "flex items-start gap-1.5",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-rose-400 font-extrabold",
                                                          children: "•",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "strong",
                                                              {
                                                                className:
                                                                  "text-white",
                                                                children:
                                                                  "Đường gạch đứt màu đỏ (Trendline)",
                                                              },
                                                            ),
                                                            " kết nối xu hướng của tất cả các chấm đỏ lại, chứng minh một quy luật rõ ràng: Tiền quảng cáo tăng đến đâu, doanh số tăng theo đến đó.",
                                                          ],
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
                                              "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "bg-emerald-50 border border-emerald-300 rounded-2xl p-4 space-y-3 shadow-md",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "font-black text-emerald-800 text-sm sm:text-base flex items-center gap-2 bg-emerald-100 px-3 py-2 rounded-lg border border-emerald-200 w-fit",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-lg",
                                                            children: "📈",
                                                          },
                                                        ),
                                                        "TƯƠNG QUAN THUẬN",
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-slate-700 leading-6",
                                                    children:
                                                      "Cái này tăng thì cái kia cũng tăng (và ngược lại, cái này giảm thì cái kia giảm).",
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base space-y-2 pt-3 border-t border-emerald-200 text-slate-700",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Quy luật:",
                                                                },
                                                              ),
                                                              " Cùng chiều (X tăng → Y tăng).",
                                                            ],
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
                                                                    "text-emerald-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Đường xu hướng:",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold text-emerald-700",
                                                                  children:
                                                                    " Dốc LÊN ↗",
                                                                },
                                                              ),
                                                              ".",
                                                            ],
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
                                                                    "text-emerald-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Ví dụ thực tế:",
                                                                },
                                                              ),
                                                              " Quảng cáo tăng → Doanh số tăng.",
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "bg-rose-50 border border-rose-300 rounded-2xl p-4 space-y-3 shadow-md",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "font-black text-rose-800 text-sm sm:text-base flex items-center gap-2 bg-rose-100 px-3 py-2 rounded-lg border border-rose-200 w-fit",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-lg",
                                                            children: "📉",
                                                          },
                                                        ),
                                                        "TƯƠNG QUAN NGHỊCH",
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-slate-700 leading-6",
                                                    children:
                                                      "Một cái đi lên, một cái đi xuống.",
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-sm sm:text-base space-y-2 pt-3 border-t border-rose-200 text-slate-700",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-rose-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Quy luật:",
                                                                },
                                                              ),
                                                              " Ngược chiều (X tăng → Y giảm).",
                                                            ],
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
                                                                    "text-rose-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Đường xu hướng:",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold text-rose-700",
                                                                  children:
                                                                    " Dốc XUỐNG ↘",
                                                                },
                                                              ),
                                                              ".",
                                                            ],
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
                                                                    "text-rose-600 mr-1",
                                                                  children: "✔",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  className:
                                                                    "text-slate-900",
                                                                  children:
                                                                    "Ví dụ thực tế:",
                                                                },
                                                              ),
                                                              " Giá bán tăng → Lượng mua giảm.",
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
                      "mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 p-4 rounded-2xl",
                    children: jsxRuntimeExports.jsxs("div", {
                      className: "flex items-start gap-2.5",
                      children: [
                        jsxRuntimeExports.jsx(Info, {
                          className:
                            "h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1 text-xs sm:text-sm",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wide",
                              children:
                                "📌 TỔNG KẾT TÍNH NĂNG VÀ NGHĨA THỰC TẾ:",
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-slate-600 dark:text-slate-300 font-medium leading-relaxed",
                              children:
                                (it = CHART_TYPES.find((oe) => oe.id === n)) ==
                                null
                                  ? void 0
                                  : it.shortNote,
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
      });
    }

    return Lab21;
  };
})();
