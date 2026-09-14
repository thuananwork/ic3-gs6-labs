/**
 * Lab 17: Các Tính năng Tự động
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab17 = window.AGY_LABS[17] = function (env) {
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

    function Lab17({ onSuccess }) {
      var a;
      const [selectedFeature, setSelectedFeature] =
          reactExports.useState("autofill"),
        [completedFeatures, setCompletedFeatures] = reactExports.useState({
          autofill: !1,
          autocomplete: !1,
          autofix: !1,
          autocorrect: !1,
          autoplay: !1,
          autorun: !1,
          autostart: !1,
          autosearch: !1,
          autoformat: !1,
          autoconnect: !1,
          autofit: !1,
          autogenerate: !1,
          automation: !1,
        }),
        [showCertificate, setShowCertificate] = reactExports.useState(!1),
        [autofillForm, setAutofillForm] = reactExports.useState({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          studentId: "",
        }),
        [autofillAnimate, setAutofillAnimate] = reactExports.useState(!1),
        [autofillDemoType, setAutofillDemoType] = reactExports.useState("web"),
        [excelCells, setExcelCells] = reactExports.useState([
          "January",
          "",
          "",
          "",
          "",
          "",
        ]),
        [isExcelFilled, setIsExcelFilled] = reactExports.useState(!1),
        [isDraggingFill, setIsDraggingFill] = reactExports.useState(!1),
        [dragHoverIndex, setDragHoverIndex] = reactExports.useState(-1),
        [autocompleteInput, setAutocompleteInput] = reactExports.useState(""),
        [autocompleteGhost, setAutocompleteGhost] = reactExports.useState(""),
        [acDemoType, setAcDemoType] = reactExports.useState("google"),
        [acExcelRow3, setAcExcelRow3] = reactExports.useState(""),
        [acExcelRow4, setAcExcelRow4] = reactExports.useState(""),
        autocompleteMap = {
          g: "google.com",
          go: "google.com",
          goo: "google.com",
          goog: "google.com",
          googl: "google.com",
          google: "google.com",
          y: "youtube.com",
          yo: "youtube.com",
          you: "youtube.com",
          t: "tiktok.com",
          ti: "tiktok.com",
          tik: "tiktok.com",
          tikt: "tiktok.com",
          tikto: "tiktok.com",
          n: "no",
          ye: "yes",
        },
        [autofixDemoType, setAutofixDemoType] = reactExports.useState("code"),
        [brokenCode, setBrokenCode] =
          reactExports.useState(`const hocSinh = "Nguyễn Văn A
console.log("Chào mừng " + hocSinh
if (hocSinh == "A") {
  alert("Học sinh lớp 8A")`),
        [codeFixed, setCodeFixed] = reactExports.useState(!1),
        [fixingStep, setFixingStep] = reactExports.useState(""),
        [autofixIssue, setAutofixIssue] = reactExports.useState("wifi"),
        [troubleshootStep, setTroubleshootStep] = reactExports.useState(""),
        [troubleshootProgress, setTroubleshootProgress] =
          reactExports.useState(0),
        [troubleshootFixed, setTroubleshootFixed] = reactExports.useState(!1),
        [autocorrectText, setAutocorrectText] = reactExports.useState(""),
        [isAutocorrectActive, setIsAutocorrectActive] =
          reactExports.useState(!0),
        typoMap = {
          tinhnang: "tính năng",
          tudong: "tự động",
          hco: "học",
          hcosinh: "học sinh",
          maytinh: "máy tính",
          baomat: "bảo mật",
          internet: "Internet",
          hocsinh: "học sinh",
          chamchi: "chăm chỉ",
          latet: "later",
        },
        [autoplayEnabled, setAutoplayEnabled] = reactExports.useState(!0),
        [dataConsumed, setDataConsumed] = reactExports.useState(0),
        [ytVideoIndex, setYtVideoIndex] = reactExports.useState(0),
        [ytPlaying, setYtPlaying] = reactExports.useState(!0),
        [ytProgress, setYtProgress] = reactExports.useState(0),
        [ytCountdown, setYtCountdown] = reactExports.useState(null),
        [autorunEnabled, setAutorunEnabled] = reactExports.useState(!0),
        [insertedUsb, setInsertedUsb] = reactExports.useState(null),
        [usbStatus, setUsbStatus] = reactExports.useState(
          "Chưa cắm USB. Hãy chọn 1 ổ USB bên dưới để cắm vào máy tính!",
        ),
        [screenAlert, setScreenAlert] = reactExports.useState("idle"),
        [startupApps, setStartupApps] = reactExports.useState([
          { name: "Discord (Nhắn tin)", enabled: !0, delay: 12 },
          { name: "Spotify (Nghe nhạc)", enabled: !0, delay: 10 },
          { name: "Steam (Chơi game)", enabled: !0, delay: 15 },
          { name: "Phần mềm Diệt Virus", enabled: !0, delay: 2 },
          { name: "Minecraft Launcher", enabled: !1, delay: 18 },
          { name: "Zalo PC", enabled: !1, delay: 8 },
        ]),
        [booting, setBooting] = reactExports.useState(!1),
        [bootTime, setBootTime] = reactExports.useState(39),
        [bootSecondsLeft, setBootSecondsLeft] = reactExports.useState(0),
        [bootSuccess, setBootSuccess] = reactExports.useState(!1),
        [autoConnectEnabled, setAutoConnectEnabled] = reactExports.useState(!0),
        [wifiScanning, setWifiScanning] = reactExports.useState(!1),
        [wifiConnectingCount, setWifiConnectingCount] =
          reactExports.useState(null),
        [wifiStatus, setWifiStatus] = reactExports.useState(
          "🔴 Wi-Fi đã bị tắt. Vui lòng bật Wi-Fi để tìm kiếm mạng!",
        ),
        [wifiConnected, setWifiConnected] = reactExports.useState(!1),
        [wifiPower, setWifiPower] = reactExports.useState(!0),
        [wifiDistance, setWifiDistance] = reactExports.useState(25),
        [showAutoConnectExplanation, setShowAutoConnectExplanation] =
          reactExports.useState(!1),
        [columnBWidth, setColumnBWidth] = reactExports.useState(80),
        [isAutofitApplied, setIsAutofitApplied] = reactExports.useState(!1),
        [isResizingB, setIsResizingB] = reactExports.useState(!1),
        resizeStartRef = reactExports.useRef(null),
        [agFormula, setAgFormula] = reactExports.useState(""),
        [selectedAgCell, setSelectedAgCell] = reactExports.useState("A1"),
        [isEditingAgCell, setIsEditingAgCell] = reactExports.useState(!1),
        [agIsDragged, setAgIsDragged] = reactExports.useState(!1),
        [agIsDragging, setAgIsDragging] = reactExports.useState(!1),
        [agDragSourceCell, setAgDragSourceCell] = reactExports.useState(null),
        [agRecalcFlash, setAgRecalcFlash] = reactExports.useState(!1),
        [agGrid, setAgGrid] = reactExports.useState({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          A5: "",
          B1: "",
          B2: "",
          B3: "",
          B4: "",
          B5: "",
        }),
        [agCellFormulas, setAgCellFormulas] = reactExports.useState({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          A5: "",
          B1: "",
          B2: "",
          B3: "",
          B4: "",
          B5: "",
        }),
        agCellFormulasRef = reactExports.useRef(agCellFormulas),
        selectedAgCellRef = reactExports.useRef(selectedAgCell);
      (reactExports.useEffect(() => {
        agCellFormulasRef.current = agCellFormulas;
      }, [agCellFormulas]),
        reactExports.useEffect(() => {
          selectedAgCellRef.current = selectedAgCell;
        }, [selectedAgCell]));
      const isValidDragTarget = (n, i) => {
          if (!n) return !1;
          const l = n.charAt(0),
            c = n.slice(1),
            d = i.charAt(0),
            m = i.slice(1);
          return l === d || c === m;
        },
        [ambientLight, setAmbientLight] = reactExports.useState(80),
        [soilMoisture, setSoilMoisture] = reactExports.useState(75),
        [isLightAutomationActive, setIsLightAutomationActive] =
          reactExports.useState(!0),
        [isIrrigationAutomationActive, setIsIrrigationAutomationActive] =
          reactExports.useState(!0),
        [automationDemoType, setAutomationDemoType] =
          reactExports.useState("smarthome"),
        [factoryMode, setFactoryMode] = reactExports.useState("manual"),
        [factoryActive, setFactoryActive] = reactExports.useState(!1),
        [factoryStep, setFactoryStep] = reactExports.useState(0),
        [factoryCompletedCount, setFactoryCompletedCount] =
          reactExports.useState(0),
        [factoryHumanClicks, setFactoryHumanClicks] = reactExports.useState(0),
        [robotActive, setRobotActive] = reactExports.useState(!1),
        [robotStep, setRobotStep] = reactExports.useState(0),
        [robotLoopCount, setRobotLoopCount] = reactExports.useState(0),
        [searchQuery, setSearchQuery] = reactExports.useState(""),
        [searchResults, setSearchResults] = reactExports.useState([]),
        knowledgeBase = {
          t: [
            "Trái Đất hình gì? - Hình cầu dẹt hai cực.",
            "Tại sao trời mưa? - Do hơi nước bốc lên ngưng tụ.",
            "Thông tin là gì? - Là những hiểu biết về thế giới xung quanh.",
          ],
          tr: [
            "Trái Đất hình gì? - Hình cầu dẹt hai cực.",
            "Trọng lực là gì? - Là lực hút của Trái Đất.",
          ],
          trai: [
            "Trái Đất hình gì? - Hình cầu dẹt hai cực.",
            "Trái Đất cách Mặt Trời bao xa? - Khoảng 150 triệu km.",
          ],
          m: [
            "Máy tính là gì? - Thiết bị điện tử xử lý thông tin.",
            "Mạng LAN là gì? - Mạng kết nối nội bộ diện tích nhỏ.",
            "Mật mã là gì? - Công cụ bảo vệ dữ liệu bí mật.",
          ],
          ma: [
            "Mạng LAN là gì? - Mạng kết nối nội bộ diện tích nhỏ.",
            "Máy tính là gì? - Thiết bị điện tử xử lý thông tin.",
          ],
          b: [
            "Bảo mật thông tin là gì? - Bảo vệ thông tin khỏi truy cập trái phép.",
            "Bàn phím là gì? - Thiết bị nhập dữ liệu vào máy tính.",
          ],
        },
        [editorText, setEditorText] = reactExports.useState(""),
        [formatApplied, setFormatApplied] = reactExports.useState([]);
      (reactExports.useEffect(() => {
        const i = startupApps
          .filter((l) => l.enabled)
          .reduce((l, c) => l + c.delay, 0);
        setBootTime(5 + i);
      }, [startupApps]),
        reactExports.useEffect(() => {}, [autocompleteInput]),
        reactExports.useEffect(() => {
          const n = searchQuery.trim().toLowerCase();
          if (!n) {
            setSearchResults([]);
            return;
          }
          let i = [];
          (Object.keys(knowledgeBase).forEach((l) => {
            n.startsWith(l) && (i = knowledgeBase[l]);
          }),
            i.length === 0 &&
              (i = [
                `Tìm kiếm "${searchQuery}" trên Wikipedia THCS...`,
                `Thư viện số: 1.230 kết quả cho câu hỏi "${searchQuery}"`,
              ]),
            setSearchResults(i));
        }, [searchQuery]),
        reactExports.useEffect(() => {
          let n;
          return (
            selectedFeature === "autoplay" &&
              (n = setInterval(() => {
                ytPlaying &&
                  ytProgress < 100 &&
                  (setYtProgress((i) => {
                    const l = i + 5;
                    return l >= 100
                      ? (setYtPlaying(!1),
                        autoplayEnabled
                          ? setYtCountdown(9)
                          : markFeatureCompleted("autoplay"),
                        100)
                      : l;
                  }),
                  setDataConsumed((i) => i + 0.4));
              }, 300)),
            () => clearInterval(n)
          );
        }, [selectedFeature, ytPlaying, ytProgress, autoplayEnabled]),
        reactExports.useEffect(() => {
          let n;
          return (
            selectedFeature === "autoplay" &&
              ytCountdown !== null &&
              (n = setInterval(() => {
                setYtCountdown((i) =>
                  i === null
                    ? null
                    : i <= 1
                      ? (setYtVideoIndex((l) => (l + 1) % 4),
                        setYtProgress(0),
                        setYtPlaying(!0),
                        markFeatureCompleted("autoplay"),
                        null)
                      : i - 1,
                );
              }, 1e3)),
            () => clearInterval(n)
          );
        }, [selectedFeature, ytCountdown]),
        reactExports.useEffect(() => {
          const n = (l) => {
              isResizingB &&
                setColumnBWidth((c) => {
                  const d = c + l.movementX,
                    m = Math.max(60, Math.min(400, d));
                  return (
                    m >= 200
                      ? (setIsAutofitApplied(!0),
                        markFeatureCompleted("autofit"))
                      : setIsAutofitApplied(!1),
                    m
                  );
                });
            },
            i = () => {
              isResizingB && setIsResizingB(!1);
            };
          return (
            isResizingB &&
              (window.addEventListener("mousemove", n),
              window.addEventListener("mouseup", i)),
            () => {
              (window.removeEventListener("mousemove", n),
                window.removeEventListener("mouseup", i));
            }
          );
        }, [isResizingB]),
        reactExports.useEffect(() => {
          let n;
          return (
            booting && bootSecondsLeft > 0
              ? (n = setTimeout(() => {
                  setBootSecondsLeft((i) => i - 1);
                }, 1e3))
              : booting &&
                bootSecondsLeft === 0 &&
                (setBooting(!1),
                setBootSuccess(!0),
                markFeatureCompleted("autostart")),
            () => clearTimeout(n)
          );
        }, [booting, bootSecondsLeft]),
        reactExports.useEffect(() => {
          const n = () => {
            isDraggingFill &&
              (setIsDraggingFill(!1),
              dragHoverIndex > 0 && runExcelAutofill(dragHoverIndex),
              setDragHoverIndex(-1));
          };
          return (
            window.addEventListener("mouseup", n),
            () => window.removeEventListener("mouseup", n)
          );
        }, [isDraggingFill, dragHoverIndex]),
        reactExports.useEffect(() => {
          const n = () => {
            agIsDragging &&
              (setAgIsDragging(!1),
              setAgDragSourceCell(null),
              Object.values(agCellFormulasRef.current).filter((l) =>
                (l || "").trim().toUpperCase().startsWith("=RANDBETWEEN("),
              ).length > 1 &&
                (setAgIsDragged(!0), markFeatureCompleted("autogenerate")));
          };
          return (
            window.addEventListener("mouseup", n),
            () => window.removeEventListener("mouseup", n)
          );
        }, [agIsDragging]),
        reactExports.useEffect(() => {
          const n = (i) => {
            if (selectedFeature === "autogenerate") {
              if (i.key === "F9") (i.preventDefault(), handleAgRecalculate());
              else if (i.key === "Backspace" || i.key === "Delete") {
                const l = i.target;
                l &&
                  l.tagName !== "INPUT" &&
                  l.tagName !== "TEXTAREA" &&
                  (i.preventDefault(),
                  handleAgClearCell(selectedAgCellRef.current));
              }
            }
          };
          return (
            window.addEventListener("keydown", n),
            () => window.removeEventListener("keydown", n)
          );
        }, [selectedFeature]),
        reactExports.useEffect(() => {
          let n;
          return (
            selectedFeature === "autoconnect" &&
              (wifiPower
                ? wifiDistance <= 15
                  ? wifiConnected ||
                    (wifiScanning ||
                      (setWifiScanning(!0),
                      setWifiStatus(
                        "🔍 Đang đi vào vùng phủ sóng... Đang tự động quét mạng...",
                      )),
                    (n = setTimeout(() => {
                      (setWifiScanning(!1),
                        setWifiConnected(!0),
                        setWifiStatus(
                          '🟢 Đã tự động kết nối thành công với Wi-Fi "Trường THCS Ngô Sĩ Liên"!',
                        ),
                        markFeatureCompleted("autoconnect"));
                    }, 800)))
                  : (setWifiScanning(!1),
                    setWifiConnected(!1),
                    setWifiStatus(
                      `⚠️ Thiết bị cách bộ phát ${wifiDistance}m (Ngoài vùng phủ sóng > 15m). Hãy kéo slider lại gần để tự động kết nối!`,
                    ))
                : (setWifiScanning(!1),
                  setWifiConnected(!1),
                  setWifiStatus(
                    "🔴 Wi-Fi đã bị tắt trên điện thoại. Hãy gạt công tắc để bật Wi-Fi!",
                  ))),
            () => clearTimeout(n)
          );
        }, [selectedFeature, wifiPower, wifiDistance, wifiConnected]),
        reactExports.useEffect(() => {
          const n = (l) => {
              if (!isResizingB || !resizeStartRef.current) return;
              const c = l.clientX - resizeStartRef.current.x,
                d = Math.max(
                  40,
                  Math.min(450, resizeStartRef.current.width + c),
                );
              (setColumnBWidth(d),
                d >= 160
                  ? (setIsAutofitApplied(!0), markFeatureCompleted("autofit"))
                  : setIsAutofitApplied(!1));
            },
            i = () => {
              isResizingB &&
                (setIsResizingB(!1), (resizeStartRef.current = null));
            };
          return (
            isResizingB &&
              (window.addEventListener("mousemove", n),
              window.addEventListener("mouseup", i)),
            () => {
              (window.removeEventListener("mousemove", n),
                window.removeEventListener("mouseup", i));
            }
          );
        }, [isResizingB]),
        reactExports.useEffect(() => {
          let n;
          return (
            automationDemoType === "factory" &&
            factoryMode === "auto" &&
            factoryActive
              ? (n = setInterval(() => {
                  setFactoryStep((i) =>
                    i === 4
                      ? (setFactoryCompletedCount((l) => l + 1),
                        markFeatureCompleted("automation"),
                        1)
                      : i + 1,
                  );
                }, 1e3))
              : automationDemoType === "robot" &&
                robotActive &&
                (n = setInterval(() => {
                  setRobotStep((i) =>
                    i === 3
                      ? (setRobotLoopCount((l) => l + 1),
                        markFeatureCompleted("automation"),
                        1)
                      : i + 1,
                  );
                }, 1200)),
            () => clearInterval(n)
          );
        }, [automationDemoType, factoryMode, factoryActive, robotActive]));
      const markFeatureCompleted = (n) => {
          if (!completedFeatures[n]) {
            const i = { ...completedFeatures, [n]: !0 };
            (setCompletedFeatures(i),
              Object.values(i).every((c) => c === !0) &&
                (onSuccess(), setShowCertificate(!0)));
          }
        },
        featuresList = [
          {
            id: "autofill",
            title: "AutoFill",
            vietnameseTitle: "Tự động điền dữ liệu",
            icon: User,
            color: "bg-indigo-500 text-indigo-500",
            shortDesc:
              "Tự động điền các thông tin cá nhân quen thuộc (họ tên, số điện thoại, địa chỉ) vào các biểu mẫu đăng ký chỉ bằng một cú nhấp chuột.",
            concept:
              "Khi em đăng ký tài khoản mới hoặc mua hàng trực tuyến, trình duyệt web có thể lưu lại thông tin của em. Lần sau, nó sẽ tự động nhận diện mẫu và đề xuất điền giúp em để tiết kiệm thời gian gõ phím.",
            caution:
              "⚠️ CHÚ Ý BẢO MẬT: Không sử dụng AutoFill thông tin nhạy cảm (như mật khẩu, thẻ tín dụng) trên máy tính công cộng (như ở trường học, quán nét) vì người khác có thể dùng thông tin đó của em!",
          },
          {
            id: "autocomplete",
            title: "AutoComplete",
            vietnameseTitle: "Tự động gợi ý từ",
            icon: Search,
            color: "bg-emerald-500 text-emerald-500",
            shortDesc:
              "Dự đoán và hiển thị những từ hoặc cụm từ tiếp theo mà em định gõ dựa trên thói quen hoặc từ điển có sẵn.",
            concept:
              'Tính năng này giống như một "trợ lý thông minh". Khi em mới gõ chữ "họ", hệ thống tự động suy luận ra các từ em hay dùng như "học sinh", "học tập" để em chọn nhanh mà không cần gõ hết cả cụm từ.',
            caution:
              "💡 CỦNG CỐ KIẾN THỨC: AutoComplete giúp tăng tốc độ gõ phím lên tới 60% và giảm sai sót chính tả khi tìm kiếm thông tin.",
          },
          {
            id: "autofix",
            title: "AutoFix",
            vietnameseTitle: "Tự động sửa lỗi hệ thống",
            icon: RefreshCw,
            color: "bg-rose-500 text-rose-500",
            shortDesc:
              "Phát hiện các lỗi cú pháp, tệp tin bị hỏng hoặc cài đặt sai lệch và tự động sửa chữa chúng để hệ thống tiếp tục hoạt động.",
            concept:
              "Trong lập trình hoặc khi ứng dụng bị treo, tính năng AutoFix sẽ quét qua cấu trúc mã nguồn hoặc hệ thống, so khớp với tiêu chuẩn và tự động chèn các dấu câu thiếu, sửa hàm lỗi hoặc tải lại file bị hỏng một cách kỳ diệu.",
            caution:
              "🛠️ THỰC TẾ: Các chương trình soạn thảo code hiện đại (như VS Code) có tính năng AutoFix cực mạnh để giúp lập trình viên phát hiện lỗi ngay khi gõ.",
          },
          {
            id: "autocorrect",
            title: "AutoCorrect",
            vietnameseTitle: "Tự động sửa chính tả",
            icon: Check,
            color: "bg-amber-500 text-amber-500",
            shortDesc:
              "Tự động nhận diện các lỗi gõ phím sai, từ viết không dấu hoặc sai chính tả phổ biến và thay thế ngay lập tức bằng từ đúng.",
            concept:
              'Khi em gõ nhanh trên điện thoại hoặc máy tính, việc gõ nhầm vị trí các phím xảy ra rất thường xuyên. AutoCorrect sử dụng một bảng từ điển đối chiếu (ví dụ gõ "maytinh" thành "máy tính") để tự động thay thế ngay khi em nhấn phím cách.',
            caution:
              "⚠️ LƯU Ý: Đôi khi AutoCorrect hiểu sai ý và tự sửa thành từ em không mong muốn. Do đó, hãy chú ý đọc lại văn bản trước khi gửi nhé!",
          },
          {
            id: "autoplay",
            title: "AutoPlay",
            vietnameseTitle: "Tự động phát đa phương tiện",
            icon: Play,
            color: "bg-red-500 text-red-500",
            shortDesc:
              "Mô phỏng điện thoại đang xem YouTube. Khi video kết thúc, hệ thống hiển thị đồng hồ đếm ngược và tự động phát video tiếp theo nếu không bị hủy.",
            concept:
              'Khi em xem xong một video trên YouTube, tính năng AutoPlay sẽ hiển thị một đồng hồ đếm ngược (khoảng 8-10 giây). Nếu em không bấm nút "Hủy" hay chủ động chọn video khác, hệ thống sẽ tự động chuyển hướng và phát video tiếp theo trong danh sách gợi ý.',
            caution:
              "📉 TÁC ĐỘNG: AutoPlay liên tục tải video mới làm tiêu tốn rất nhiều dung lượng mạng (Data 3G/4G). Cơ chế tự phát liên hoàn này còn rất dễ cuốn em vào việc xem điện thoại không ngừng nghỉ, gây mỏi mắt và lãng phí thời gian học tập!",
          },
          {
            id: "autorun",
            title: "AutoRun",
            vietnameseTitle: "Tự động chạy ổ đĩa/thiết bị",
            icon: Usb,
            color: "bg-blue-500 text-blue-500",
            shortDesc:
              "Tự động kích hoạt chương trình cài đặt hoặc tệp thực thi ngay khi đĩa CD, DVD hoặc USB được cắm vào máy tính.",
            concept:
              "Thời xưa, khi em đút đĩa game vào máy, game tự động khởi động lên nhờ file cài đặt đặc biệt có tên autorun.inf. Tuy nhiên, tính năng này hiện nay đã bị hạn chế rất nhiều vì lý do an ninh.",
            caution:
              "💀 CẢNH BÁO BẢO MẬT: AutoRun cực kỳ nguy hiểm vì Hacker có thể cài mã độc vào USB. Chỉ cần em cắm USB vào, virus sẽ tự khởi động và phá hủy máy tính của em lập tức mà không cần em bấm gì!",
          },
          {
            id: "autostart",
            title: "AutoStart",
            vietnameseTitle: "Khởi động cùng máy tính",
            icon: Cpu,
            color: "bg-purple-500 text-purple-500",
            shortDesc:
              "Cấu hình cho phép các phần mềm tự động chạy ngầm ngay sau khi hệ điều hành máy tính được bật lên.",
            concept:
              "Các ứng dụng như Messenger, Zalo, Discord hay Phần mềm diệt Virus thường tự động chạy khi bật máy để em có thể nhận tin nhắn ngay lập tức. Tuy nhiên, nếu có quá nhiều ứng dụng AutoStart, máy tính sẽ khởi động cực kỳ chậm.",
            caution:
              "🐢 MẸO CÔNG NGHỆ: Hãy tắt tính năng AutoStart của các phần mềm không cần thiết (như game, nhạc) trong Task Manager để máy tính của em khởi động nhanh hơn gấp nhiều lần!",
          },
          {
            id: "autosearch",
            title: "AutoSearch / Instant Search",
            vietnameseTitle: "Tìm kiếm tự động tức thời",
            icon: Search,
            color: "bg-cyan-500 text-cyan-500",
            shortDesc:
              "Hiển thị ngay kết quả hoặc gợi ý tìm kiếm ngay trong lúc em đang gõ chữ vào thanh tìm kiếm, không cần bấm phím Enter.",
            concept:
              'Thay vì bắt em gõ toàn bộ câu hỏi rồi bấm "Tìm kiếm", hệ thống sẽ liên tục gửi các ký tự em gõ lên máy chủ dữ liệu và trả về kết quả khớp nhất ngay lập tức. Điều này giúp em tìm câu trả lời chỉ trong vài mili-giây.',
            caution:
              "🔍 TIỆN LỢI: Giúp em nhanh chóng kiểm chứng thông tin hoặc tìm thấy bài viết học tập một cách trực quan cực kỳ nhanh chóng.",
          },
          {
            id: "autoformat",
            title: "AutoFormat",
            vietnameseTitle: "Tự động định dạng văn bản",
            icon: FileText,
            color: "bg-teal-500 text-teal-500",
            shortDesc:
              "Tự động điều chỉnh định dạng ký tự, chữ viết hoa đầu câu hoặc đổi ký tự số thứ tự tiếng Anh thành dạng chỉ số trên khi gõ phím.",
            concept:
              "Khi em soạn thảo trong Word, nếu em gõ các cụm số thứ tự tiếng Anh như 1st, 2nd, 3rd rồi nhấn phím cách (Space), Word sẽ tự động thu nhỏ và đưa các chữ cái st, nd, rd lên góc phía trên thành dạng superscript (1ˢᵗ, 2ⁿᵈ, 3ʳᵈ) đúng chuẩn ngữ pháp quốc tế.",
            caution:
              "✍️ THẨM MỸ: AutoFormat giúp văn bản của em luôn ngay ngắn, chuyên nghiệp, tiết kiệm thời gian chỉnh tay cực kỳ hiệu quả!",
          },
          {
            id: "autoconnect",
            title: "AutoConnect",
            vietnameseTitle: "Tự động kết nối thiết bị",
            icon: Wifi,
            color: "bg-sky-500 text-sky-500",
            shortDesc:
              "Tự động phát hiện và kết nối với các mạng không dây quen thuộc (Wi-Fi, Bluetooth) khi nằm trong phạm vi phủ sóng.",
            concept:
              "Khi em mang điện thoại từ ngoài sân vào trong nhà, điện thoại tự kết nối vào mạng Wi-Fi của gia đình mà em không cần thao tác gì. Hoặc khi bật Bluetooth, tai nghe không dây sẽ tự động kết nối với máy tính.",
            caution:
              '⚠️ CẢNH BÁO AN TOÀN: Hãy tắt tính năng "Tự động kết nối Wi-Fi công cộng không có mật khẩu" trên điện thoại để phòng tránh bị tin tặc đánh cắp dữ liệu tài khoản!',
          },
          {
            id: "autofit",
            title: "AutoFit",
            vietnameseTitle: "Tự khớp kích thước",
            icon: ArrowLeftRight,
            color: "bg-pink-500 text-pink-500",
            shortDesc:
              "Tự động căn chỉnh độ rộng của các hàng hoặc cột trong bảng tính (như Excel) sao cho vừa khít với nội dung dài nhất bên trong.",
            concept:
              'Khi em nhập một cột dữ liệu quá dài trong Excel (như họ tên học sinh), chữ có thể bị tràn sang cột bên cạnh hoặc hiển thị thành lỗi "###". Nhờ AutoFit, cột sẽ tự động nới rộng ra vừa vặn chỉ bằng một cú click đúp chuột.',
            caution:
              "📊 MẸO EXCEL: Chỉ cần nhấp đúp chuột trái vào vạch phân chia giữa tiêu đề hai cột (ví dụ vạch giữa cột A và B), Excel sẽ tự thực hiện AutoFit cho em!",
          },
          {
            id: "autogenerate",
            title: "AutoGenerate",
            vietnameseTitle: "Tự động sinh chuỗi dữ liệu",
            icon: WandSparkles,
            color: "bg-fuchsia-500 text-fuchsia-500",
            shortDesc:
              "Tự động tạo ra các giá trị, chuỗi số, email hoặc mật khẩu dựa trên quy luật hoặc thông tin đầu vào được cung cấp trước.",
            concept:
              "Thay vì ngồi gõ thủ công hàng trăm email học sinh hay mã số thứ tự, AutoGenerate có thể tự động sinh ra chuỗi (như HS001, HS002...) hoặc kết hợp họ tên học sinh với tên trường để tạo email hàng loạt một cách nhanh chóng.",
            caution:
              "🚀 HIỆU SUẤT: Giúp giảm thiểu 95% thời gian nhập liệu lặp đi lặp lại và hạn chế tối đa sai sót gõ phím của con người.",
          },
          {
            id: "automation",
            title: "Automation",
            vietnameseTitle: "Tự động hóa thông minh",
            icon: Zap,
            color: "bg-orange-500 text-orange-500",
            shortDesc:
              'Kết hợp nhiều hành động tự động theo chuỗi quy tắc "Nếu - Thì" để điều khiển các thiết bị hoặc hệ thống hoạt động tự lập mà không cần con người can thiệp.',
            concept:
              "Ví dụ trong nhà thông minh (Smart Home): Nếu cảm biến phát hiện trời tối THÌ tự động bật đèn ngoài sân; Nếu lúc 7:00 sáng và đất bị khô THÌ tự động kích hoạt máy phun nước tưới cây. Đây chính là nền tảng của vạn vật kết nối IoT!",
            caution:
              "🤖 XU THẾ: Tự động hóa đang thay đổi cách chúng ta sống và làm việc, giúp tiết kiệm năng lượng, công sức và tăng sự tiện nghi tối đa.",
          },
        ],
        currentFeature = featuresList.find((n) => n.id === selectedFeature),
        triggerAutoFillDemo = () => {
          (setAutofillAnimate(!0),
            setTimeout(() => {
              (setAutofillForm({
                fullName: "Nguyễn Tuấn Kiệt",
                phone: "0912.345.678",
                email: "tuankiet.8a@thcs-kimdong.edu.vn",
                address: "Phòng học 8A, Trường THCS Kim Đồng, Việt Nam",
                studentId: "HS-2026-0817",
              }),
                setAutofillAnimate(!1),
                markFeatureCompleted("autofill"));
            }, 800));
        },
        handleTypingAutocomplete = (n) => {
          setAutocompleteInput(n);
          const i = n.toLowerCase();
          if (i && autocompleteMap[i]) {
            const l = autocompleteMap[i];
            l.startsWith(i)
              ? setAutocompleteGhost(l.slice(i.length))
              : setAutocompleteGhost("");
          } else setAutocompleteGhost("");
        },
        acceptAutocomplete = () => {
          if (autocompleteGhost) {
            const n = autocompleteInput + autocompleteGhost;
            (setAutocompleteInput(n),
              setAutocompleteGhost(""),
              markFeatureCompleted("autocomplete"));
          }
        },
        triggerAutoFixDemo = () => {
          (setFixingStep('Đang tìm lỗi thiếu dấu ngoặc kép (")...'),
            setTimeout(() => {
              (setFixingStep("Đang thêm dấu ngoặc kép và dấu chấm phẩy... 🛠️"),
                setTimeout(() => {
                  (setFixingStep("Đang sửa lỗi viết sai thẻ đóng/mở... ⚙️"),
                    setTimeout(() => {
                      (setBrokenCode(`const hocSinh = "Nguyễn Văn A";
console.log("Chào mừng " + hocSinh);
if (hocSinh == "A") {
  alert("Học sinh lớp 8A");
}`),
                        setCodeFixed(!0),
                        setFixingStep(
                          "Thành công! Mã nguồn đã chạy mượt mà không còn lỗi cú pháp 🎉",
                        ),
                        markFeatureCompleted("autofix"));
                    }, 800));
                }, 800));
            }, 800));
        },
        handleAutocorrectTyping = (n) => {
          if (
            (setAutocorrectText(n), !!isAutocorrectActive && n.endsWith(" "))
          ) {
            const i = n.trim().split(" ");
            let l = !1;
            const c = i.map((d) => {
              const m = d.toLowerCase().replace(/[^a-zA-Z]/g, "");
              if (typoMap[m]) {
                l = !0;
                const u = typoMap[m];
                return d[0] === d[0].toUpperCase()
                  ? u[0].toUpperCase() + u.slice(1)
                  : u;
              }
              return d;
            });
            l &&
              (setAutocorrectText(c.join(" ") + " "),
              markFeatureCompleted("autocorrect"));
          }
        },
        applyAutocorrectShortcut = () => {
          (setAutocorrectText(
            "Hco sinh lop 8 dang hoc tap chamchi voi tinhnang tudong cua maytinh see you latet ",
          ),
            setTimeout(() => {
              (setAutocorrectText(
                "Học sinh lớp 8 đang học tập chăm chỉ với tính năng tự động của máy tính see you later ",
              ),
                markFeatureCompleted("autocorrect"));
            }, 1e3));
        },
        toggleStartupApp = (n) => {
          const i = [...startupApps];
          ((i[n].enabled = !i[n].enabled),
            setStartupApps(i),
            markFeatureCompleted("autostart"));
        },
        triggerBootSimulation = () => {
          (setBooting(!0), setBootSuccess(!1), setBootSecondsLeft(bootTime));
        },
        handleInsertUsb = (n) => {
          (setInsertedUsb(n),
            setUsbStatus(`Đang đọc thiết bị USB: "${n}"...`),
            setScreenAlert("idle"),
            setTimeout(() => {
              (autorunEnabled
                ? n.toLowerCase().includes("mã độc")
                  ? (setUsbStatus(
                      '🔴 CẢNH BÁO: Tính năng AutoRun đã kích hoạt file "autorun.inf" độc hại! Virus tự động xâm nhập và khóa màn hình máy tính của em!',
                    ),
                    setScreenAlert("danger"))
                  : (setUsbStatus(
                      `🟢 THÀNH CÔNG: Tính năng AutoRun đã tự động mở chương trình "${n}"!`,
                    ),
                    setScreenAlert("safe"))
                : (setUsbStatus(
                    `⚠️ AN TOÀN: Đã phát hiện USB "${n}". Do tính năng AutoRun đang tắt, không có chương trình nào tự ý chạy. Em cần mở File Explorer để quét virus trước khi mở thủ công!`,
                  ),
                  setScreenAlert("safe")),
                markFeatureCompleted("autorun"));
            }, 1200));
        },
        handleAutoFormatTyping = (n) => {
          let i = n;
          const l = [];
          (i.includes("1st ") &&
            ((i = i.replace(/1st\s/g, "1ˢᵗ ")),
            l.push('Thay thế "1st" thành "1ˢᵗ" (số thứ tự 1st)')),
            i.includes("2nd ") &&
              ((i = i.replace(/2nd\s/g, "2ⁿᵈ ")),
              l.push('Thay thế "2nd" thành "2ⁿᵈ" (số thứ tự 2nd)')),
            i.includes("(c)") &&
              ((i = i.replace(/\(c\)/g, "©")),
              l.push('Thay thế "(c)" thành ký hiệu bản quyền "©"')),
            setEditorText(i),
            l.length > 0 &&
              (setFormatApplied((c) => {
                const d = [...c, ...l];
                return Array.from(new Set(d));
              }),
              markFeatureCompleted("autoformat")));
        },
        applyAutoFormatDemo = () => {
          (setEditorText("We won 1st prize in the 2nd round! (c) 2026."),
            setFormatApplied([]),
            setTimeout(() => {
              (setEditorText("We won 1ˢᵗ prize in the 2ⁿᵈ round! © 2026."),
                setFormatApplied([
                  'Thay thế "1st" thành "1ˢᵗ" (First)',
                  'Thay thế "2nd" thành "2ⁿᵈ" (Second)',
                  'Thay thế "(c)" thành ký hiệu bản quyền "©" (Copyright)',
                ]),
                markFeatureCompleted("autoformat"));
            }, 1e3));
        },
        runExcelAutofill = (n = 5) => {
          const i = excelCells[0].trim();
          if (!i) return;
          let l = [];
          const c = i.toLowerCase();
          if (c === "january")
            l = ["January", "February", "March", "April", "May", "June"];
          else if (c === "jan") l = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
          else if (c === "monday")
            l = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
          else if (c === "mon") l = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          else {
            const d = parseInt(i, 10);
            isNaN(d)
              ? (l = Array.from({ length: 6 }, () => i))
              : (l = Array.from({ length: 6 }, (m, u) => (d + u).toString()));
          }
          setIsExcelFilled(!0);
          for (let d = 1; d <= n; d++)
            setTimeout(() => {
              (setExcelCells((m) => {
                const u = [...m];
                return ((u[d] = l[d] || ""), u);
              }),
                d === n && markFeatureCompleted("autofill"));
            }, d * 150);
        },
        resetExcelAutofill = () => {
          (setExcelCells(["January", "", "", "", "", ""]),
            setIsExcelFilled(!1));
        },
        runWindowsTroubleshooter = () => {
          (setTroubleshootProgress(10),
            setTroubleshootFixed(!1),
            setTroubleshootStep(
              autofixIssue === "wifi"
                ? "🔍 Đang kiểm tra card mạng Wi-Fi và bộ định tuyến..."
                : "🔍 Đang chẩn đoán Driver thiết bị âm thanh...",
            ),
            setTimeout(() => {
              (setTroubleshootProgress(40),
                setTroubleshootStep(
                  autofixIssue === "wifi"
                    ? "⚠️ Phát hiện lỗi: Trùng lặp địa chỉ IP (IP Conflict) với thiết bị khác!"
                    : "⚠️ Phát hiện lỗi: Driver âm thanh bị đóng băng (kẹt luồng)!",
                ),
                setTimeout(() => {
                  (setTroubleshootProgress(70),
                    setTroubleshootStep(
                      autofixIssue === "wifi"
                        ? "🛠️ Đang gửi lệnh giải phóng IP và gia hạn DHCP lease..."
                        : "🛠️ Đang khởi động lại dịch vụ Windows Audio và nạp lại Driver...",
                    ),
                    setTimeout(() => {
                      (setTroubleshootProgress(100),
                        setTroubleshootStep(
                          autofixIssue === "wifi"
                            ? "🎉 Thành công! Windows đã khôi phục địa chỉ IP hợp lệ tự động!"
                            : "🎉 Thành công! Đã khôi phục cổng kết nối âm thanh tai nghe!",
                        ),
                        setTroubleshootFixed(!0),
                        markFeatureCompleted("autofix"));
                    }, 1200));
                }, 1200));
            }, 1200));
        },
        resetWindowsTroubleshooter = () => {
          (setTroubleshootProgress(0),
            setTroubleshootFixed(!1),
            setTroubleshootStep(""));
        },
        applyAutoFit = () => {
          (setColumnBWidth(195),
            setIsAutofitApplied(!0),
            markFeatureCompleted("autofit"));
        },
        resetAutoFit = () => {
          (setColumnBWidth(80), setIsAutofitApplied(!1));
        },
        handleNextVideo = () => {
          (setYtVideoIndex((n) => (n + 1) % 4),
            setYtProgress(0),
            setYtPlaying(!0),
            setYtCountdown(null),
            markFeatureCompleted("autoplay"));
        },
        handlePrevVideo = () => {
          (setYtVideoIndex((n) => (n - 1 + 4) % 4),
            setYtProgress(0),
            setYtPlaying(!0),
            setYtCountdown(null),
            markFeatureCompleted("autoplay"));
        },
        cancelAutoplayTimer = () => {
          (setYtCountdown(null), setYtPlaying(!1));
        },
        evaluateFormula = (
          formulaStr,
          currentGrid,
          cellKey,
          forceNewRand = !1,
        ) => {
          const clean = formulaStr.trim();
          if (!clean.startsWith("=")) return clean;
          const uppercase = clean.toUpperCase(),
            randMatch = uppercase.match(
              /^=RANDBETWEEN\s*\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            );
          if (randMatch) {
            const n = parseInt(randMatch[1], 10),
              i = parseInt(randMatch[2], 10),
              l = Math.min(n, i),
              c = Math.max(n, i);
            if (!forceNewRand && currentGrid[cellKey]) {
              const d = parseInt(currentGrid[cellKey], 10);
              if (!isNaN(d) && d >= l && d <= c) return d.toString();
            }
            return Math.floor(Math.random() * (c - l + 1) + l).toString();
          }
          const getCellKeysInRange = (n) => {
              const i = n.trim().split(":");
              if (i.length !== 2) return [n.trim()];
              const l = i[0],
                c = i[1],
                d = l.charAt(0),
                m = parseInt(l.substring(1), 10),
                u = c.charAt(0),
                g = parseInt(c.substring(1), 10),
                p = [],
                f = Math.min(d.charCodeAt(0), u.charCodeAt(0)),
                b = Math.max(d.charCodeAt(0), u.charCodeAt(0)),
                k = Math.min(m, g),
                N = Math.max(m, g);
              for (let M = f; M <= b; M++)
                for (let y = k; y <= N; y++)
                  p.push(`${String.fromCharCode(M)}${y}`);
              return p;
            },
            parseArgs = (n) => {
              const i = n.split(","),
                l = [];
              for (const c of i) {
                const d = c.trim();
                if (d.includes(":")) {
                  const m = getCellKeysInRange(d);
                  for (const u of m) {
                    const g = parseFloat(currentGrid[u] || "");
                    isNaN(g) || l.push(g);
                  }
                } else if (/^[A-B]\d+$/.test(d)) {
                  const m = parseFloat(currentGrid[d] || "");
                  isNaN(m) || l.push(m);
                } else {
                  const m = parseFloat(d);
                  isNaN(m) || l.push(m);
                }
              }
              return l;
            },
            sumMatch = uppercase.match(/^=SUM\s*\((.*)\)$/);
          if (sumMatch)
            return parseArgs(sumMatch[1])
              .reduce((l, c) => l + c, 0)
              .toString();
          const avgMatch = uppercase.match(/^=AVERAGE\s*\((.*)\)$/);
          if (avgMatch) {
            const n = parseArgs(avgMatch[1]);
            return n.length === 0
              ? "0"
              : (n.reduce((l, c) => l + c, 0) / n.length).toString();
          }
          const minMatch = uppercase.match(/^=MIN\s*\((.*)\)$/);
          if (minMatch) {
            const n = parseArgs(minMatch[1]);
            return n.length === 0 ? "0" : Math.min(...n).toString();
          }
          const maxMatch = uppercase.match(/^=MAX\s*\((.*)\)$/);
          if (maxMatch) {
            const n = parseArgs(maxMatch[1]);
            return n.length === 0 ? "0" : Math.max(...n).toString();
          }
          const countMatch = uppercase.match(/^=COUNT\s*\((.*)\)$/);
          if (countMatch) return parseArgs(countMatch[1]).length.toString();
          let mathExpr = clean.substring(1);
          const cellRegex = /[A-B][1-5]/g;
          mathExpr = mathExpr.replace(cellRegex, (n) => {
            const i = parseFloat(currentGrid[n] || "0");
            return isNaN(i) ? "0" : i.toString();
          });
          try {
            if (/^[0-9+\-*/().\s]+$/.test(mathExpr)) {
              const result = eval(mathExpr);
              return Number(result).toString();
            }
          } catch (n) {}
          return clean;
        },
        evaluateAllFormulas = (n, i, l) => {
          const c = { ...i };
          Object.keys(n).forEach((d) => {
            const m = n[d] || "";
            m.startsWith("=") || (c[d] = m);
          });
          for (let d = 0; d < 3; d++)
            Object.keys(n).forEach((m) => {
              const u = n[m] || "";
              if (u.startsWith("=")) {
                const g = m === l;
                c[m] = evaluateFormula(u, c, m, g);
              }
            });
          return c;
        },
        handleAgFormulaChange = (n) => {
          (setAgFormula(n),
            setAgCellFormulas((i) => {
              const l = { ...i, [selectedAgCell]: n };
              return (
                setAgGrid((c) => evaluateAllFormulas(l, c, selectedAgCell)),
                l
              );
            }));
        },
        runRandBetweenFill = () => {
          setAgIsDragged(!0);
          const n = selectedAgCell.charAt(0),
            i = agCellFormulas[selectedAgCell] || "=RANDBETWEEN(1,5)";
          (setAgCellFormulas((d) => {
            const m = { ...d, [`${n}1`]: i };
            return (setAgGrid((u) => evaluateAllFormulas(m, u, `${n}1`)), m);
          }),
            selectedAgCell === `${n}1` && setAgFormula(i));
          let l = 1;
          const c = setInterval(() => {
            if ((l++, l <= 5)) {
              const d = `${n}${l}`;
              setAgCellFormulas((m) => {
                const u = { ...m, [d]: i };
                return (setAgGrid((g) => evaluateAllFormulas(u, g, d)), u);
              });
            } else (clearInterval(c), markFeatureCompleted("autogenerate"));
          }, 200);
        },
        resetRandBetweenFill = () => {
          (setAgFormula(""),
            setAgGrid({
              A1: "",
              A2: "",
              A3: "",
              A4: "",
              A5: "",
              B1: "",
              B2: "",
              B3: "",
              B4: "",
              B5: "",
            }),
            setAgCellFormulas({
              A1: "",
              A2: "",
              A3: "",
              A4: "",
              A5: "",
              B1: "",
              B2: "",
              B3: "",
              B4: "",
              B5: "",
            }),
            setAgIsDragged(!1),
            setSelectedAgCell("A1"));
        },
        handleAgFormulaSubmit = (n) => {
          const i = agFormula.trim();
          (setAgCellFormulas((l) => {
            const c = { ...l, [selectedAgCell]: i };
            return (
              setAgGrid((d) => evaluateAllFormulas(c, d, selectedAgCell)),
              c
            );
          }),
            setAgFormula(i));
        },
        handleAgClearCell = (n) => {
          (setAgCellFormulas((i) => {
            const l = { ...i };
            return ((l[n] = ""), l);
          }),
            setAgGrid((i) => {
              const l = { ...i };
              return ((l[n] = ""), l);
            }),
            selectedAgCellRef.current === n && setAgFormula(""));
        },
        handleAgRecalculate = () => {
          setAgGrid((n) => {
            const i = { ...n };
            let l = !1;
            return (
              Object.keys(agCellFormulasRef.current).forEach((c) => {
                const d = agCellFormulasRef.current[c] || "";
                d.startsWith("=") &&
                  ((i[c] = evaluateFormula(d, i, c, !0)), (l = !0));
              }),
              l &&
                (setAgRecalcFlash(!0),
                setTimeout(() => setAgRecalcFlash(!1), 500)),
              i
            );
          });
        },
        handleLightSliderChange = (n) => {
          (setAmbientLight(n), n < 30 && markFeatureCompleted("automation"));
        },
        handleMoistureSliderChange = (n) => {
          (setSoilMoisture(n), n < 30 && markFeatureCompleted("automation"));
        },
        handleManualFactoryStep = () => {
          (setFactoryHumanClicks((n) => n + 1),
            setFactoryStep((n) =>
              n === 4 || n === 0
                ? (n === 4 &&
                    (setFactoryCompletedCount((i) => i + 1),
                    markFeatureCompleted("automation")),
                  1)
                : n + 1,
            ));
        },
        resetFactorySimulation = () => {
          (setFactoryStep(0),
            setFactoryCompletedCount(0),
            setFactoryHumanClicks(0),
            setFactoryActive(!1));
        };
      reactExports.useEffect(() => {
        const n = () => {
          isDraggingFill &&
            (setIsDraggingFill(!1),
            dragHoverIndex > 0 && runExcelAutofill(),
            setDragHoverIndex(-1));
        };
        return (
          window.addEventListener("mouseup", n),
          () => window.removeEventListener("mouseup", n)
        );
      }, [isDraggingFill, dragHoverIndex]);
      const resetAllLab = () => {
          (setCompletedFeatures({
            autofill: !1,
            autocomplete: !1,
            autofix: !1,
            autocorrect: !1,
            autoplay: !1,
            autorun: !1,
            autostart: !1,
            autosearch: !1,
            autoformat: !1,
            autoconnect: !1,
            autofit: !1,
            autogenerate: !1,
            automation: !1,
          }),
            setAutofillForm({
              fullName: "",
              phone: "",
              email: "",
              address: "",
              studentId: "",
            }),
            setAutocompleteInput(""),
            setAutocompleteGhost(""),
            setBrokenCode(`const hocSinh = "Nguyễn Văn A
console.log("Chào mừng " + hocSinh
if (hocSinh == "A") {
  alert("Học sinh lớp 8A")`),
            setCodeFixed(!1),
            setFixingStep(""),
            setAutocorrectText(""),
            setYtVideoIndex(0),
            setYtPlaying(!0),
            setYtProgress(0),
            setYtCountdown(null),
            setDataConsumed(0),
            setInsertedUsb(null),
            setUsbStatus(
              "Chưa cắm USB. Hãy chọn 1 ổ USB bên dưới để cắm vào máy tính!",
            ),
            setScreenAlert("idle"),
            setSearchQuery(""),
            setEditorText(""),
            setFormatApplied([]),
            setShowCertificate(!1),
            setExcelCells(["January", "", "", "", "", ""]),
            setIsExcelFilled(!1),
            setIsDraggingFill(!1),
            setDragHoverIndex(-1),
            setAcDemoType("google"),
            setAcExcelRow3(""),
            setAcExcelRow4(""),
            setWifiPower(!0),
            setWifiConnected(!1),
            setWifiStatus("🔍 Đang tìm kiếm các mạng Wi-Fi lân cận..."),
            setColumnBWidth(80),
            setIsAutofitApplied(!1),
            setAgFormula(""),
            setAgIsDragged(!1),
            setAgGrid({
              A1: "",
              A2: "",
              A3: "",
              A4: "",
              A5: "",
              B1: "",
              B2: "",
              B3: "",
              B4: "",
              B5: "",
            }),
            setAgCellFormulas({
              A1: "",
              A2: "",
              A3: "",
              A4: "",
              A5: "",
              B1: "",
              B2: "",
              B3: "",
              B4: "",
              B5: "",
            }),
            setSelectedAgCell("A1"),
            setAmbientLight(80),
            setSoilMoisture(75),
            setAutomationDemoType("smarthome"),
            setFactoryMode("manual"),
            setFactoryActive(!1),
            setFactoryStep(0),
            setFactoryCompletedCount(0),
            setFactoryHumanClicks(0),
            setTroubleshootProgress(0),
            setTroubleshootStep(""),
            setTroubleshootFixed(!1));
        },
        getCompletedCount = () =>
          Object.values(completedFeatures).filter((n) => n).length;
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 animate-fadeIn text-left",
        id: "lab-17-container",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-150 dark:border-slate-800 space-y-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-semibold font-black tracking-wider uppercase bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-md",
                        children: "🖥️ CHUẨN CÔNG NGHỆ THÔNG TIN IC3 GS6",
                      }),
                      jsxRuntimeExports.jsx("h1", {
                        className:
                          "text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2",
                        children:
                          "Lab 17: Khám Phá Các Tính Năng Tự Động (Automation Features) 🤖",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl",
                        children:
                          "Các thiết bị công nghệ hiện đại tích hợp rất nhiều tính năng tự động để nâng cao hiệu suất làm việc và tiết kiệm thời gian cho người dùng. Hãy cùng trải nghiệm mô phỏng và rèn luyện kỹ năng sử dụng an toàn thông qua danh sách bên dưới!",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-slate-50 dark:bg-slate-950 px-5 sm:px-6 py-3 rounded-3xl border border-slate-150 dark:border-slate-850 flex items-center gap-3 shrink-0 self-start md:self-auto",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "text-center",
                        children: [
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-sm sm:text-base font-semibold text-slate-400 uppercase font-black tracking-wider",
                            children: "Tiến trình Lab 17",
                          }),
                          jsxRuntimeExports.jsxs("p", {
                            className:
                              "text-lg font-black text-blue-600 dark:text-blue-400",
                            children: [getCompletedCount(), " / 13 bài tập"],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: "h-8 w-1 bg-slate-200 dark:bg-slate-800",
                      }),
                      jsxRuntimeExports.jsx("div", {
                        children:
                          getCompletedCount() === 13
                            ? jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-medium font-black text-emerald-500 flex items-center gap-1 animate-bounce",
                                children: "✨ ĐÃ HOÀN THÀNH",
                              })
                            : jsxRuntimeExports.jsx("span", {
                                className:
                                  "text-sm sm:text-base font-medium font-black text-slate-400",
                                children: "Đang làm... ✍️",
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-3 pt-2",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-blue-50/40 dark:bg-blue-950/10 p-8 sm:p-5 rounded-3xl border border-blue-100/60 dark:border-blue-950/40 text-sm sm:text-base font-medium",
                    children: [
                      jsxRuntimeExports.jsx("p", {
                        className: "font-bold text-blue-700 dark:text-blue-400",
                        children: "⚡ Tiết kiệm thời gian",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5",
                        children:
                          "Giảm tải công việc nhập liệu thủ công lặp đi lặp lại hàng ngày.",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-emerald-50/40 dark:bg-emerald-950/10 p-8 sm:p-5 rounded-3xl border border-emerald-100/60 dark:border-emerald-950/40 text-sm sm:text-base font-medium",
                    children: [
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "font-bold text-emerald-700 dark:text-emerald-400",
                        children: "🛡️ Lưu ý rủi ro an toàn",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5",
                        children:
                          "Cần chú ý cài đặt bảo mật để không bị lộ thông tin hoặc nhiễm mã độc.",
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-purple-50/40 dark:bg-purple-950/10 p-8 sm:p-5 rounded-3xl border border-purple-100/60 dark:border-purple-950/40 text-sm sm:text-base font-medium",
                    children: [
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "font-bold text-purple-700 dark:text-purple-400",
                        children: "🎯 Trải nghiệm mô phỏng",
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5",
                        children:
                          "Thực hành tương tác trực tiếp với từng loại tính năng để hiểu cách hoạt động.",
                      }),
                    ],
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
                  "lg:col-span-4 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-150 dark:border-slate-800 space-y-3",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-sm sm:text-base font-semibold font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 block",
                    children: "📋 DANH SÁCH MENU TÍNH NĂNG:",
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "flex flex-col items-stretch gap-2 max-h-[520px] overflow-y-auto pr-1 pb-5 w-full",
                    children: featuresList.map((n) => {
                      const i = n.icon,
                        l = selectedFeature === n.id,
                        c = completedFeatures[n.id];
                      return jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => setSelectedFeature(n.id),
                          className: `no-override w-full box-border min-h-[58px] p-3 rounded-2xl border transition-all cursor-pointer text-left flex items-center justify-between ${l ? "bg-blue-600 border-blue-600 text-white shadow-md scale-[1.01] font-bold" : "bg-slate-50 dark:bg-slate-950 border-slate-200/80 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex items-center gap-2.5 min-w-0 flex-1",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className: `p-2 rounded-xl shrink-0 ${l ? "bg-white/20 text-white" : "bg-slate-200/80 dark:bg-slate-850 text-slate-700 dark:text-slate-300"}`,
                                  children: jsxRuntimeExports.jsx(i, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    jsxRuntimeExports.jsx("p", {
                                      className: `text-xs sm:text-sm font-extrabold truncate ${l ? "text-white" : "text-slate-850 dark:text-white"}`,
                                      children: n.title,
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className: `text-[10.5px] sm:text-xs font-semibold leading-tight mt-0.5 truncate ${l ? "text-white" : "text-slate-400"}`,
                                      children: n.vietnameseTitle,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "shrink-0 ml-auto pl-2",
                              children: c
                                ? jsxRuntimeExports.jsx("span", {
                                    className: `flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${l ? "bg-white text-blue-700" : "bg-emerald-500 text-white"}`,
                                    children: "✓",
                                  })
                                : jsxRuntimeExports.jsx("span", {
                                    className: `text-[10px] px-1.5 py-0.5 rounded-md font-extrabold whitespace-nowrap ${l ? "bg-white/20 text-white" : "bg-slate-200/80 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`,
                                    children: "Học 📝",
                                  }),
                            }),
                          ],
                        },
                        n.id,
                      );
                    }),
                  }),
                  jsxRuntimeExports.jsx("div", {
                    className:
                      "pt-2 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between px-2",
                    children: jsxRuntimeExports.jsxs("button", {
                      onClick: resetAllLab,
                      className:
                        "text-sm sm:text-base font-semibold font-black text-rose-500 hover:underline flex items-center gap-1 cursor-pointer",
                      children: [
                        jsxRuntimeExports.jsx(RefreshCw, {
                          className: "h-3 w-3",
                        }),
                        " Khởi động lại tất cả 🔄",
                      ],
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-8 space-y-6",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-150 dark:border-slate-800 space-y-3",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                          jsxRuntimeExports.jsx("div", {
                            className: `p-8 sm:p-5 rounded-3xl text-white ${currentFeature.color.split(" ")[0]}`,
                            children: jsxRuntimeExports.jsx(
                              currentFeature.icon,
                              { className: "h-5 w-5" },
                            ),
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "text-left",
                            children: [
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider",
                                children: "Tính năng đang chọn",
                              }),
                              jsxRuntimeExports.jsxs("h2", {
                                className:
                                  "text-lg font-black text-slate-850 dark:text-white",
                                children: [
                                  currentFeature.title,
                                  " — ",
                                  currentFeature.vietnameseTitle,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("p", {
                        className:
                          "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 font-semibold leading-relaxed",
                        children: currentFeature.shortDesc,
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "p-8 sm:p-5 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200/60 dark:border-slate-850 text-sm sm:text-base font-semibold leading-relaxed font-medium text-slate-500 dark:text-slate-400 space-y-1",
                        children: [
                          jsxRuntimeExports.jsx("strong", {
                            className:
                              "text-slate-700 dark:text-slate-300 font-extrabold text-sm sm:text-base font-medium block",
                            children: "💡 Nguyên lý hoạt động:",
                          }),
                          jsxRuntimeExports.jsx("p", {
                            children: currentFeature.concept,
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className:
                          "p-8 sm:p-5 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 rounded-3xl text-[10.5px] leading-relaxed font-bold text-amber-800 dark:text-amber-400",
                        children: currentFeature.caution,
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-150 dark:border-slate-800 space-y-4",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-3",
                        children: [
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5",
                            children: [
                              jsxRuntimeExports.jsx(Terminal, {
                                className: "h-4 w-4 text-blue-500",
                              }),
                              "MÔ PHỎNG TƯƠNG TÁC THỰC TẾ",
                            ],
                          }),
                          jsxRuntimeExports.jsx("span", {
                            className:
                              "text-sm sm:text-base font-extrabold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full",
                            children: "Dành cho học sinh lớp 7-8 🎒",
                          }),
                        ],
                      }),
                      selectedFeature === "autofill" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                              children:
                                "Trải nghiệm tính năng AutoFill trong 2 trường hợp: Điền biểu mẫu trên trình duyệt Web hoặc tự động điền chuỗi liên tiếp (Fill Series) trong Microsoft Excel.",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-center gap-2 p-1 bg-slate-100 dark:bg-slate-950 rounded-3xl max-w-xs mx-auto",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAutofillDemoType("web"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${autofillDemoType === "web" ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Form Thư Viện Web 📝",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAutofillDemoType("excel"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${autofillDemoType === "excel" ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Chuỗi Excel Series 📊",
                                }),
                              ],
                            }),
                            autofillDemoType === "web" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-3 max-w-md mx-auto animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                        children: "HỌ VÀ TÊN HỌC SINH:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "relative flex items-center",
                                        children: [
                                          jsxRuntimeExports.jsx(User, {
                                            className:
                                              "absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 z-10",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            value: autofillForm.fullName,
                                            onChange: (n) =>
                                              setAutofillForm({
                                                ...autofillForm,
                                                fullName: n.target.value,
                                              }),
                                            placeholder:
                                              "Em tự gõ hoặc dùng AutoFill...",
                                            className:
                                              "w-full input-with-icon pr-3 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("label", {
                                            className:
                                              "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                            children: "SỐ ĐIỆN THOẠI:",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "relative flex items-center",
                                            children: [
                                              jsxRuntimeExports.jsx(Phone, {
                                                className:
                                                  "absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 z-10",
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "text",
                                                value: autofillForm.phone,
                                                onChange: (n) =>
                                                  setAutofillForm({
                                                    ...autofillForm,
                                                    phone: n.target.value,
                                                  }),
                                                placeholder: "09xx...",
                                                className:
                                                  "w-full input-with-icon pr-3 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-bold text-slate-850 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("label", {
                                            className:
                                              "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                            children: "MÃ HỌC SINH (ID):",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "relative",
                                            children: jsxRuntimeExports.jsx(
                                              "input",
                                              {
                                                type: "text",
                                                value: autofillForm.studentId,
                                                onChange: (n) =>
                                                  setAutofillForm({
                                                    ...autofillForm,
                                                    studentId: n.target.value,
                                                  }),
                                                placeholder: "HS-...",
                                                className:
                                                  "w-full px-5 sm:px-5 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-medium font-mono font-bold text-slate-850 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden",
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                        children: "ĐỊA CHỈ EMAIL LIÊN HỆ:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "relative flex items-center",
                                        children: [
                                          jsxRuntimeExports.jsx(Mail, {
                                            className:
                                              "absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 z-10",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "email",
                                            value: autofillForm.email,
                                            onChange: (n) =>
                                              setAutofillForm({
                                                ...autofillForm,
                                                email: n.target.value,
                                              }),
                                            placeholder: "email@thcs...",
                                            className:
                                              "w-full input-with-icon pr-3 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-bold text-slate-850 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                        children: "ĐỊA CHỈ NHÀ / LỚP HỌC:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "relative flex items-center",
                                        children: [
                                          jsxRuntimeExports.jsx(MapPin, {
                                            className:
                                              "absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 z-10",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            value: autofillForm.address,
                                            onChange: (n) =>
                                              setAutofillForm({
                                                ...autofillForm,
                                                address: n.target.value,
                                              }),
                                            placeholder:
                                              "Tên lớp, tên trường...",
                                            className:
                                              "w-full input-with-icon pr-3 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-bold text-slate-850 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "pt-2 flex gap-2",
                                    children: [
                                      jsxRuntimeExports.jsxs("button", {
                                        type: "button",
                                        onClick: triggerAutoFillDemo,
                                        disabled: autofillAnimate,
                                        className:
                                          "flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer flex items-center justify-center gap-1.5 transition-all shadow-xs",
                                        children: [
                                          jsxRuntimeExports.jsx(Sparkles, {
                                            className: `h-4 w-4 ${autofillAnimate ? "animate-spin" : ""}`,
                                          }),
                                          autofillAnimate
                                            ? "Đang tự điền..."
                                            : "Bấm nút AutoFill mẫu 📝",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: () =>
                                          setAutofillForm({
                                            fullName: "",
                                            phone: "",
                                            email: "",
                                            address: "",
                                            studentId: "",
                                          }),
                                        className:
                                          "px-5 sm:px-5 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer transition-all",
                                        children: "Xóa trắng 🗑️",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            autofillDemoType === "excel" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-md mx-auto animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-bold",
                                    children: [
                                      "💡 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Hướng dẫn:",
                                      }),
                                      " Trong Excel, khi em nhập một giá trị bắt đầu vào ô đầu tiên (như ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-blue-500",
                                        children: "January",
                                      }),
                                      ", ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-blue-500",
                                        children: "Monday",
                                      }),
                                      ", hoặc số ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-blue-500",
                                        children: "1",
                                      }),
                                      ") rồi kéo rê chuột qua các ô khác, Excel sẽ tự động đoán chuỗi liên tiếp và điền giúp em cực kỳ thông minh!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-green-500/10 border border-green-500/20 rounded-3xl text-[10.5px] text-slate-600 dark:text-slate-400 font-bold leading-relaxed",
                                    children: [
                                      "👉 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Mẹo tương tác:",
                                      }),
                                      " Nhấp giữ ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "ô vuông xanh lá 🟩",
                                      }),
                                      " ở góc dưới bên phải ô số 1 và ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "kéo rê chuột xuống dưới",
                                      }),
                                      ", các ô được chọn sẽ có viền chấm xanh. Thả chuột ra để tự động điền (AutoFill)!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 font-mono text-sm sm:text-base font-medium select-none",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold py-1 text-center",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-200 dark:border-slate-800",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "col-span-10",
                                            children:
                                              "Cột A (Dữ liệu tháng/thứ/số)",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "divide-y divide-slate-150 dark:divide-slate-800",
                                        children: excelCells.map((n, i) =>
                                          jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className: `grid grid-cols-12 items-center text-center transition-all ${isDraggingFill && i > 0 && i <= dragHoverIndex ? "bg-emerald-500/10 border-l-2 border-r-2 border-dashed border-emerald-500" : ""}`,
                                              onMouseEnter: () => {
                                                isDraggingFill &&
                                                  setDragHoverIndex(i);
                                              },
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "col-span-2 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 py-3 font-bold",
                                                  children: i + 1,
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "col-span-10 text-left px-5 sm:px-5 text-slate-700 dark:text-slate-300 font-bold relative h-8 flex items-center",
                                                  children: [
                                                    i === 0
                                                      ? jsxRuntimeExports.jsx(
                                                          "input",
                                                          {
                                                            type: "text",
                                                            value: n,
                                                            onChange: (l) => {
                                                              const c = [
                                                                ...excelCells,
                                                              ];
                                                              ((c[0] =
                                                                l.target.value),
                                                                setExcelCells(
                                                                  c,
                                                                ));
                                                            },
                                                            placeholder:
                                                              "Gõ January, Monday hoặc số...",
                                                            className:
                                                              "w-full bg-transparent border-none p-0 focus:ring-0 text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 focus:outline-hidden",
                                                          },
                                                        )
                                                      : jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className: `transition-all duration-300 ${n ? "text-slate-850 dark:text-slate-200 animate-fadeIn" : "text-slate-355"}`,
                                                            children:
                                                              n ||
                                                              "(Trống - Chờ AutoFill)",
                                                          },
                                                        ),
                                                    i === 0 &&
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          onMouseDown: (l) => {
                                                            (l.preventDefault(),
                                                              l.stopPropagation(),
                                                              setIsDraggingFill(
                                                                !0,
                                                              ),
                                                              setDragHoverIndex(
                                                                0,
                                                              ));
                                                          },
                                                          className:
                                                            "absolute right-0 bottom-0 w-3 h-3 bg-green-600 border border-white cursor-crosshair z-20 hover:scale-125 transition-transform",
                                                          title:
                                                            "Nhấn giữ và kéo xuống dưới để AutoFill!",
                                                        },
                                                      ),
                                                  ],
                                                }),
                                              ],
                                            },
                                            i,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: runExcelAutofill,
                                        disabled:
                                          isExcelFilled || !excelCells[0],
                                        className:
                                          "flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer flex items-center justify-center gap-1.5 transition-all shadow-xs",
                                        children: "Kéo tay nắm AutoFill ⬇️",
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: resetExcelAutofill,
                                        className:
                                          "px-5 sm:px-5 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer transition-all",
                                        children: "Làm mới 🔄",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 font-semibold italic text-center",
                                    children:
                                      "*Em hãy gõ thử các giá trị khác vào ô số 1: 'Monday', '1', 'Jan'... rồi kéo thử nhé!",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      selectedFeature === "autocomplete" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "💡 ",
                                jsxRuntimeExports.jsx("strong", {
                                  children:
                                    "Tính năng tự động hoàn thành (AutoComplete).",
                                }),
                                jsxRuntimeExports.jsx("br", {}),
                                "Hệ thống đoán trước từ em muốn gõ dựa trên thói quen (Google) hoặc dữ liệu đã có trong cột (Excel).",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-center gap-2 p-1 bg-slate-100 dark:bg-slate-950 rounded-3xl max-w-xs mx-auto",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAcDemoType("google"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${acDemoType === "google" ? "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Đề xuất Google 🔍",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAcDemoType("excel"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${acDemoType === "excel" ? "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Excel AutoComplete 📊",
                                }),
                              ],
                            }),
                            acDemoType === "google" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-md mx-auto animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("label", {
                                        className:
                                          "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                        children:
                                          "THANH ĐỊA CHỈ TRÌNH DUYỆT CHROME (MÔ PHỎNG):",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "relative flex items-center bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 rounded-3xl px-5 sm:px-6 py-3 shadow-xs",
                                        children: [
                                          jsxRuntimeExports.jsx(Search, {
                                            className:
                                              "h-4 w-4 text-slate-400 mr-2 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "relative flex-1 flex items-center font-mono text-sm sm:text-base font-medium",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "absolute left-0 top-0 pointer-events-none select-none text-slate-400 font-bold whitespace-pre",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-transparent",
                                                      children:
                                                        autocompleteInput,
                                                    },
                                                  ),
                                                  autocompleteGhost,
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "text",
                                                value: autocompleteInput,
                                                onChange: (n) =>
                                                  handleTypingAutocomplete(
                                                    n.target.value,
                                                  ),
                                                placeholder: "Nhập g, y, t...",
                                                className:
                                                  "w-full bg-transparent border-none p-0 focus:ring-0 text-sm sm:text-base font-medium font-mono font-bold text-slate-850 dark:text-slate-100 focus:outline-hidden z-10",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  autocompleteGhost &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-left animate-slideUp space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between text-sm sm:text-base font-semibold font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-wide",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "💡 Đề xuất AutoComplete sẵn có:",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "bg-emerald-200 dark:bg-emerald-950 px-2 py-0.5 rounded-full text-[9px]",
                                              children: "Gợi ý từ hệ thống",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-medium font-mono font-bold text-slate-700 dark:text-slate-300",
                                          children: [
                                            "Từ đã điền: ",
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-600 dark:text-emerald-400 underline",
                                              children: autocompleteInput,
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-slate-400 font-black",
                                              children: autocompleteGhost,
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          onClick: acceptAutocomplete,
                                          className:
                                            "w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-[10.5px] font-black rounded-3xl cursor-pointer transition-all shadow-xs flex items-center justify-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx(Sparkles, {
                                              className: "h-3 w-3",
                                            }),
                                            " Chắp nhận đề xuất này!",
                                          ],
                                        }),
                                      ],
                                    }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                        children: "NÚT TƯƠNG TÁC GÕ NHANH:",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: [
                                          { key: "g", label: "g (google.com)" },
                                          {
                                            key: "y",
                                            label: "y (youtube.com)",
                                          },
                                          { key: "t", label: "t (tiktok.com)" },
                                        ].map((n) =>
                                          jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () =>
                                                handleTypingAutocomplete(n.key),
                                              className:
                                                "px-2.5 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer transition-all border border-slate-300/40",
                                              children: ['Gõ "', n.key, '" ⌨️'],
                                            },
                                            n.key,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-400 font-semibold italic",
                                    children:
                                      "*Mẹo: Nhấn phím đề xuất gõ nhanh để trải nghiệm hoạt động tự động hoàn thành địa chỉ trang web của trình duyệt Chrome cực kỳ thú vị!",
                                  }),
                                ],
                              }),
                            acDemoType === "excel" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-md mx-auto animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-bold leading-relaxed",
                                    children: [
                                      "💡 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "AutoComplete trong Excel:",
                                      }),
                                      " Khi nhập dữ liệu lặp lại vào một cột, Excel sẽ tự động dựa vào các giá trị ở các hàng trên (như ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-emerald-600 font-bold",
                                        children: "Yes",
                                      }),
                                      ", ",
                                      jsxRuntimeExports.jsx("span", {
                                        className: "text-rose-600 font-bold",
                                        children: "No",
                                      }),
                                      ") để tự điền phần còn lại ngay khi em mới chỉ gõ chữ cái đầu tiên!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 font-mono text-sm sm:text-base font-medium",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold py-3 text-center",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-200 dark:border-slate-800",
                                            children: "STT",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-6 border-r border-slate-200 dark:border-slate-800",
                                            children: "Họ và Tên",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "col-span-4",
                                            children: "Tham Gia?",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 border-b border-slate-150 dark:border-slate-800 py-3 text-center items-center",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-150 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                            children: "1",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-6 border-r border-slate-150 dark:border-slate-800 px-5 sm:px-5 text-left font-semibold text-slate-700 dark:text-slate-300",
                                            children: "Nguyễn Văn An",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-4 text-emerald-600 font-black",
                                            children: "Yes",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 border-b border-slate-150 dark:border-slate-800 py-3 text-center items-center",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-150 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                            children: "2",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-6 border-r border-slate-150 dark:border-slate-800 px-5 sm:px-5 text-left font-semibold text-slate-700 dark:text-slate-300",
                                            children: "Trần Thị Bình",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-4 text-rose-600 font-black",
                                            children: "No",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 border-b border-slate-150 dark:border-slate-800 py-3 text-center items-center bg-blue-50/20 dark:bg-slate-900/40",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-150 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                            children: "3",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-6 border-r border-slate-150 dark:border-slate-800 px-5 sm:px-5 text-left font-semibold text-slate-700 dark:text-slate-300",
                                            children: "Lê Hoàng Cường",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "col-span-4 px-2 text-left relative flex items-center h-7 font-bold",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "absolute left-2 pointer-events-none select-none text-slate-400 font-bold whitespace-pre text-sm sm:text-base font-medium",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-transparent",
                                                      children: acExcelRow3,
                                                    },
                                                  ),
                                                  acExcelRow3.toLowerCase() ===
                                                  "y"
                                                    ? "es"
                                                    : acExcelRow3.toLowerCase() ===
                                                        "n"
                                                      ? "o"
                                                      : "",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "text",
                                                value: acExcelRow3,
                                                onChange: (n) => {
                                                  const i = n.target.value;
                                                  setAcExcelRow3(i);
                                                },
                                                onKeyDown: (n) => {
                                                  (n.key === "Enter" ||
                                                    n.key === "Tab") &&
                                                    (acExcelRow3.toLowerCase() ===
                                                    "y"
                                                      ? (setAcExcelRow3("Yes"),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        ))
                                                      : acExcelRow3.toLowerCase() ===
                                                          "n" &&
                                                        (setAcExcelRow3("No"),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        )));
                                                },
                                                placeholder: "Gõ y hoặc n...",
                                                className:
                                                  "w-full bg-transparent border-none p-0 focus:ring-0 text-sm sm:text-base font-bold text-slate-850 dark:text-white focus:outline-hidden z-10",
                                              }),
                                              (acExcelRow3.toLowerCase() ===
                                                "y" ||
                                                acExcelRow3.toLowerCase() ===
                                                  "n") &&
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => {
                                                      (setAcExcelRow3(
                                                        acExcelRow3.toLowerCase() ===
                                                          "y"
                                                          ? "Yes"
                                                          : "No",
                                                      ),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        ));
                                                    },
                                                    className:
                                                      "absolute right-1 px-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[8px] rounded uppercase cursor-pointer",
                                                    children: "Tab ⇥",
                                                  },
                                                ),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-12 py-3 text-center items-center bg-blue-50/20 dark:bg-slate-900/40",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-2 border-r border-slate-150 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                            children: "4",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "col-span-6 border-r border-slate-150 dark:border-slate-800 px-5 sm:px-5 text-left font-semibold text-slate-700 dark:text-slate-300",
                                            children: "Phạm Minh Đức",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "col-span-4 px-2 text-left relative flex items-center h-7 font-bold",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "absolute left-2 pointer-events-none select-none text-slate-400 font-bold whitespace-pre text-sm sm:text-base font-medium",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-transparent",
                                                      children: acExcelRow4,
                                                    },
                                                  ),
                                                  acExcelRow4.toLowerCase() ===
                                                  "y"
                                                    ? "es"
                                                    : acExcelRow4.toLowerCase() ===
                                                        "n"
                                                      ? "o"
                                                      : "",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "text",
                                                value: acExcelRow4,
                                                onChange: (n) => {
                                                  const i = n.target.value;
                                                  setAcExcelRow4(i);
                                                },
                                                onKeyDown: (n) => {
                                                  (n.key === "Enter" ||
                                                    n.key === "Tab") &&
                                                    (acExcelRow4.toLowerCase() ===
                                                    "y"
                                                      ? (setAcExcelRow4("Yes"),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        ))
                                                      : acExcelRow4.toLowerCase() ===
                                                          "n" &&
                                                        (setAcExcelRow4("No"),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        )));
                                                },
                                                placeholder: "Gõ y hoặc n...",
                                                className:
                                                  "w-full bg-transparent border-none p-0 focus:ring-0 text-sm sm:text-base font-bold text-slate-850 dark:text-white focus:outline-hidden z-10",
                                              }),
                                              (acExcelRow4.toLowerCase() ===
                                                "y" ||
                                                acExcelRow4.toLowerCase() ===
                                                  "n") &&
                                                jsxRuntimeExports.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => {
                                                      (setAcExcelRow4(
                                                        acExcelRow4.toLowerCase() ===
                                                          "y"
                                                          ? "Yes"
                                                          : "No",
                                                      ),
                                                        markFeatureCompleted(
                                                          "autocomplete",
                                                        ));
                                                    },
                                                    className:
                                                      "absolute right-1 px-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[8px] rounded uppercase cursor-pointer",
                                                    children: "Tab ⇥",
                                                  },
                                                ),
                                            ],
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
                                          "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                        children:
                                          "PHÍM TƯƠNG TÁC NHANH TRÊN EXCEL:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              setAcExcelRow3("y");
                                            },
                                            className:
                                              "flex-1 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-[10.5px] font-bold rounded-3xl cursor-pointer",
                                            children: 'Gõ "y" vào Dòng 3 ⌨️',
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              setAcExcelRow4("n");
                                            },
                                            className:
                                              "flex-1 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-[10.5px] font-bold rounded-3xl cursor-pointer",
                                            children: 'Gõ "n" vào Dòng 4 ⌨️',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (acExcelRow3 === "Yes" ||
                                    acExcelRow4 === "No") &&
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-8 sm:p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl text-[10.5px] text-emerald-800 dark:text-emerald-400 font-bold leading-relaxed text-center animate-fadeIn",
                                      children: [
                                        "🎯 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Xuất sắc!",
                                        }),
                                        " Hệ thống đã tự động điền phần còn lại của từ dựa trên quy tắc AutoComplete trong Excel.",
                                      ],
                                    }),
                                ],
                              }),
                          ],
                        }),
                      selectedFeature === "autofix" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children:
                                "Trải nghiệm AutoFix trong sửa lỗi cú pháp lập trình hoặc tự động vá lỗi kết nối phần cứng của hệ điều hành Windows.",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-center gap-2 p-1 bg-slate-100 dark:bg-slate-950 rounded-3xl max-w-xs mx-auto",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAutofixDemoType("code"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${autofixDemoType === "code" ? "bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Sửa Lỗi Code 💻",
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  type: "button",
                                  onClick: () => setAutofixDemoType("windows"),
                                  className: `flex-1 py-3 text-sm sm:text-base font-semibold font-black rounded-3xl transition-all cursor-pointer ${autofixDemoType === "windows" ? "bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                  children: "Sự Cố Windows 🛠️",
                                }),
                              ],
                            }),
                            autofixDemoType === "code" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-rose-500 uppercase tracking-wider block text-left",
                                        children: "🛠️ CỬA SỔ MÃ NGUỒN:",
                                      }),
                                      jsxRuntimeExports.jsx("pre", {
                                        className:
                                          "p-5 sm:p-6 rounded-3xl border border-rose-100 dark:border-rose-950/40 bg-slate-950 text-rose-400 font-mono text-sm sm:text-base font-medium leading-relaxed overflow-x-auto text-left h-40",
                                        children: brokenCode,
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-250 dark:border-slate-850 space-y-3 flex flex-col justify-between text-left",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                            children: "TRẠNG THÁI HỆ THỐNG:",
                                          }),
                                          fixingStep
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "p-8 sm:p-5 bg-slate-900 border border-slate-800 rounded-3xl font-mono text-sm sm:text-base font-semibold text-slate-300 space-y-1 animate-fadeIn text-left",
                                                children: [
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-blue-400 font-bold",
                                                    children:
                                                      "❯ AutoFix Scanner v1.0",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    children: fixingStep,
                                                  }),
                                                ],
                                              })
                                            : jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "p-8 sm:p-5 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 rounded-3xl text-rose-800 dark:text-rose-400 font-bold text-sm sm:text-base font-medium",
                                                children:
                                                  "⚠️ Phát hiện 3 lỗi cú pháp có thể khiến phần mềm bị sập!",
                                              }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        type: "button",
                                        onClick: triggerAutoFixDemo,
                                        disabled: codeFixed,
                                        className: `w-full py-3 rounded-3xl font-black text-sm sm:text-base font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs ${codeFixed ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-rose-600 hover:bg-rose-700 text-white"}`,
                                        children: [
                                          jsxRuntimeExports.jsx(RefreshCw, {
                                            className: `h-4 w-4 ${fixingStep && !codeFixed ? "animate-spin" : ""}`,
                                          }),
                                          codeFixed
                                            ? "Đã sửa chữa thành công ✓"
                                            : "Sửa lỗi AutoFix ⚙️",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            autofixDemoType === "windows" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-md mx-auto animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-bold",
                                    children: [
                                      "💡 Windows Troubleshooter là một công cụ ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "AutoFix",
                                      }),
                                      " thực tế của hệ điều hành. Khi gặp sự cố kết nối mạng hoặc lỗi phần cứng, thay vì cấu hình thủ công phức tạp, trình gỡ lỗi tự động tìm nguyên nhân và sửa chữa ngay!",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-black text-slate-400 uppercase",
                                        children: "CHỌN SỰ CỐ ĐỂ THỬ NGHIỆM:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              (setAutofixIssue("wifi"),
                                                resetWindowsTroubleshooter());
                                            },
                                            className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl border transition-all cursor-pointer ${autofixIssue === "wifi" ? "bg-blue-600 border-blue-600 text-white shadow-xs font-black" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                            children: "🌐 Lỗi Mất Mạng Wi-Fi",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: () => {
                                              (setAutofixIssue("audio"),
                                                resetWindowsTroubleshooter());
                                            },
                                            className: `flex-1 py-3 text-sm sm:text-base font-bold rounded-3xl border transition-all cursor-pointer ${autofixIssue === "audio" ? "bg-blue-600 border-blue-600 text-white shadow-xs font-black" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                            children: "🔊 Lỗi Mất Âm Thanh",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: `p-5 sm:p-6 rounded-3xl border font-mono text-sm sm:text-base font-medium ${troubleshootFixed ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400" : troubleshootProgress > 0 && troubleshootProgress < 100 ? "bg-blue-500/10 border-blue-500/30 text-blue-750 dark:text-blue-400" : "bg-rose-500/10 border-rose-500/30 text-rose-750 dark:text-rose-400"}`,
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between border-b border-slate-350/25 pb-2 mb-2",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "font-extrabold uppercase text-sm sm:text-base font-semibold",
                                            children:
                                              "🖥️ TRÌNH GỠ LỖI WINDOWS:",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "font-bold",
                                            children: troubleshootFixed
                                              ? "🟢 ĐÃ KHẮC PHỤC"
                                              : troubleshootProgress > 0
                                                ? "⚡ ĐANG SỬA"
                                                : "🚨 CÓ SỰ CỐ",
                                          }),
                                        ],
                                      }),
                                      !troubleshootFixed &&
                                        troubleshootProgress === 0 &&
                                        jsxRuntimeExports.jsx("div", {
                                          className: "space-y-1",
                                          children:
                                            autofixIssue === "wifi"
                                              ? jsxRuntimeExports.jsxs(
                                                  jsxRuntimeExports.Fragment,
                                                  {
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "font-black text-red-550",
                                                          children:
                                                            "❌ Wi-Fi: Địa chỉ IP không hợp lệ hoặc trùng Gateway (Mất mạng).",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-sm sm:text-base font-semibold text-slate-400",
                                                          children:
                                                            "Máy tính của em không thể kết nối tới máy chủ học tập trực tuyến.",
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                )
                                              : jsxRuntimeExports.jsxs(
                                                  jsxRuntimeExports.Fragment,
                                                  {
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "font-black text-red-550",
                                                          children:
                                                            "❌ Audio: Không phát hiện tai nghe hoặc Driver âm thanh bị kẹt.",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-sm sm:text-base font-semibold text-slate-400",
                                                          children:
                                                            "Không nghe thấy tiếng cô giáo giảng bài.",
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                        }),
                                      !troubleshootFixed &&
                                        troubleshootProgress > 0 &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-1.5 text-blue-500",
                                          children: [
                                            jsxRuntimeExports.jsxs("p", {
                                              className: "font-black",
                                              children: [
                                                "⚡ ",
                                                troubleshootStep ||
                                                  "Đang phân tích cấu hình hệ thống...",
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-full bg-slate-200 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden",
                                              children: jsxRuntimeExports.jsx(
                                                "div",
                                                {
                                                  className:
                                                    "bg-blue-500 h-1.5 rounded-full transition-all duration-300",
                                                  style: {
                                                    width: `${troubleshootProgress}%`,
                                                  },
                                                },
                                              ),
                                            }),
                                          ],
                                        }),
                                      troubleshootFixed &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-1 text-emerald-600 dark:text-emerald-400",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              className: "font-black",
                                              children:
                                                "✓ Thành công: Đã tìm ra nguyên nhân và tự động sửa!",
                                            }),
                                            autofixIssue === "wifi"
                                              ? jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-emerald-500 font-bold",
                                                  children:
                                                    "Đã thiết lập lại card mạng, cập nhật địa chỉ IP và DNS tự động. Internet đã khôi phục hoàn toàn!",
                                                })
                                              : jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-emerald-500 font-bold",
                                                  children:
                                                    "Đã giải phóng Driver bị kẹt và khởi động lại cổng âm thanh. Tai nghe đã phát tiếng mượt mà!",
                                                }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: runWindowsTroubleshooter,
                                        disabled:
                                          troubleshootFixed ||
                                          troubleshootProgress > 0,
                                        className:
                                          "flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:dark:bg-slate-800 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all shadow-xs",
                                        children:
                                          "Chạy Windows Troubleshooter 🛠️",
                                      }),
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: resetWindowsTroubleshooter,
                                        className:
                                          "px-5 sm:px-5 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer transition-all",
                                        children: "Làm lại 🔄",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      selectedFeature === "autocorrect" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                              children: [
                                "Hãy viết một đoạn câu không dấu, bị dính chữ (ví dụ: ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-mono bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded text-rose-500",
                                  children: "maytinh",
                                }),
                                " hoặc ",
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-mono bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded text-rose-500",
                                  children: "tudong",
                                }),
                                ") rồi bấm ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "Phím Cách (Space)",
                                }),
                                " để xem điều kỳ diệu gõ phím tiếng Việt nhé!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-3 max-w-md mx-auto",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                      children: "KHUNG SOẠN THẢO TIN NHẮN:",
                                    }),
                                    jsxRuntimeExports.jsxs("label", {
                                      className:
                                        "flex items-center gap-1.5 cursor-pointer",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: "checkbox",
                                          checked: isAutocorrectActive,
                                          onChange: () =>
                                            setIsAutocorrectActive(
                                              !isAutocorrectActive,
                                            ),
                                          className:
                                            "h-3.5 w-3.5 text-amber-500 focus:ring-amber-400 rounded-sm",
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase",
                                          children: "BẬT AUTOCORRECT",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("textarea", {
                                  value: autocorrectText,
                                  onChange: (n) =>
                                    handleAutocorrectTyping(n.target.value),
                                  placeholder:
                                    "Hãy gõ 'maytinh ' hoặc 'see you latet ' và bấm phím cách...",
                                  className:
                                    "w-full p-8 sm:p-5 border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-medium text-slate-850 dark:text-slate-200 font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-hidden h-40 text-left",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: applyAutocorrectShortcut,
                                      className:
                                        "flex-1 py-3 bg-amber-500 hover:bg-amber-600 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all shadow-xs",
                                      children:
                                        "Demo gõ nhanh sửa lỗi tự động ✍️",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: () => setAutocorrectText(""),
                                      className:
                                        "px-5 sm:px-5 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer hover:bg-slate-350 transition-all",
                                      children: "Xóa 🗑️",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-950/40 rounded-3xl text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium",
                                  children: [
                                    "💡 ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "Gợi ý gõ thử:",
                                    }),
                                    " 'tinhnang' ➔ 'tính năng' | 'tudong' ➔ 'tự động' | 'hcosinh' ➔ 'học sinh' | 'maytinh' ➔ 'máy tính' | 'see you latet' ➔ 'see you later'",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "autoplay" &&
                        (() => {
                          const n = [
                              {
                                title:
                                  "1. Học Tin học Lớp 7 - Chủ đề: Thiết bị số quanh ta",
                                channel: "Kênh Học Tập THCS",
                                views: "25K lượt xem",
                                duration: "06:12",
                                thumbnail: "from-blue-600 to-indigo-800",
                                icon: "💻",
                              },
                              {
                                title:
                                  "2. Tại sao AutoPlay lại dễ gây nghiện điện thoại?",
                                channel: "Sức Khỏe Học Đường",
                                views: "42K lượt xem",
                                duration: "08:45",
                                thumbnail: "from-rose-600 to-red-800",
                                icon: "📱",
                              },
                              {
                                title:
                                  "3. Hướng dẫn sử dụng phần mềm diệt virus an toàn",
                                channel: "An Ninh Mạng 101",
                                views: "18K lượt xem",
                                duration: "10:30",
                                thumbnail: "from-purple-600 to-fuchsia-800",
                                icon: "🛡️",
                              },
                              {
                                title:
                                  "4. Khám phá ngôi nhà thông minh Smart Home siêu hiện đại",
                                channel: "Thế Giới Công Nghệ",
                                views: "55K lượt xem",
                                duration: "05:15",
                                thumbnail: "from-teal-600 to-emerald-800",
                                icon: "💡",
                              },
                            ],
                            i = n[ytVideoIndex];
                          return jsxRuntimeExports.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              jsxRuntimeExports.jsxs("p", {
                                className:
                                  "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                                children: [
                                  "Mô phỏng ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "điện thoại đang lướt YouTube",
                                  }),
                                  ": Khám phá cách tính năng ",
                                  jsxRuntimeExports.jsx("strong", {
                                    children: "AutoPlay (Tự động phát)",
                                  }),
                                  " hoạt động khi video hiện tại kết thúc và ảnh hưởng của nó!",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "flex justify-center animate-fadeIn",
                                    children: jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "relative w-[310px] sm:w-[340px] h-[560px] bg-slate-900 dark:bg-black rounded-[40px] p-3.5 shadow-2xl border-4 border-slate-800 ring-8 ring-slate-700/25 flex flex-col overflow-hidden",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center",
                                          children: jsxRuntimeExports.jsx(
                                            "div",
                                            {
                                              className:
                                                "w-10 h-1 bg-slate-700 rounded-full",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "relative flex-1 bg-slate-950 rounded-[28px] overflow-hidden flex flex-col select-none text-white text-left",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "h-6 bg-slate-950/60 absolute top-0 inset-x-0 px-4 flex justify-between items-center text-[10px] font-black text-white/90 z-20",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children: "09:41",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "📶" },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "4G" },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "🔋 88%" },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "h-10 bg-red-600 px-3.5 pt-5 flex items-center justify-between z-10 text-white shadow-xs",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm font-black bg-white text-red-600 px-1 rounded-sm",
                                                        children: "▶",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-xs font-black tracking-tight",
                                                        children: "YouTube",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex gap-2.5 text-xs font-bold",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "🔍" },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      { children: "⚙️" },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "relative h-[150px] bg-black flex flex-col justify-center overflow-hidden border-b border-slate-800",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className: `absolute inset-0 bg-gradient-to-br ${i.thumbnail} transition-all duration-500 opacity-80`,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute inset-0 flex flex-col items-center justify-center bg-black/30",
                                                  children: ytPlaying
                                                    ? jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "text-center space-y-1",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-4xl animate-bounce inline-block",
                                                                children:
                                                                  i.icon,
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "flex gap-1 justify-center items-end h-4",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "w-1 bg-red-500 h-4 animate-bounce",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "w-1 bg-red-500 h-2 animate-bounce",
                                                                      style: {
                                                                        animationDelay:
                                                                          "0.1s",
                                                                      },
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "w-1 bg-red-500 h-3 animate-bounce",
                                                                      style: {
                                                                        animationDelay:
                                                                          "0.2s",
                                                                      },
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      )
                                                    : ytCountdown !== null
                                                      ? jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-3 text-center z-20",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "text-xs font-black text-amber-300 uppercase tracking-wider drop-shadow-md",
                                                                  children:
                                                                    "Video tiếp theo phát sau",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "relative my-1.5 w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-500 bg-red-600 shadow-lg shadow-red-600/50",
                                                                  children:
                                                                    jsxRuntimeExports.jsxs(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-lg font-black text-white drop-shadow-md",
                                                                        children:
                                                                          [
                                                                            ytCountdown,
                                                                            "s",
                                                                          ],
                                                                      },
                                                                    ),
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "text-xs font-black text-white line-clamp-1 mb-2 max-w-[200px] drop-shadow-sm",
                                                                  children:
                                                                    n[
                                                                      (ytVideoIndex +
                                                                        1) %
                                                                        4
                                                                    ].title,
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex gap-2 justify-center",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      "button",
                                                                      {
                                                                        type: "button",
                                                                        onClick:
                                                                          cancelAutoplayTimer,
                                                                        className:
                                                                          "px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-black uppercase cursor-pointer border border-slate-500 shadow-xs",
                                                                        children:
                                                                          "Hủy",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "button",
                                                                      {
                                                                        type: "button",
                                                                        onClick:
                                                                          handleNextVideo,
                                                                        className:
                                                                          "px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-black uppercase cursor-pointer shadow-md",
                                                                        children:
                                                                          "Phát ngay",
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
                                                              "flex flex-col items-center",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "button",
                                                                {
                                                                  type: "button",
                                                                  onClick:
                                                                    () => {
                                                                      (setYtProgress(
                                                                        0,
                                                                      ),
                                                                        setYtPlaying(
                                                                          !0,
                                                                        ),
                                                                        markFeatureCompleted(
                                                                          "autoplay",
                                                                        ));
                                                                    },
                                                                  className:
                                                                    "w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-base font-bold cursor-pointer",
                                                                  children:
                                                                    "🔄",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-[9px] font-black text-slate-300 uppercase mt-1 tracking-wider",
                                                                  children:
                                                                    "Đã dừng phát",
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                }),
                                                ytPlaying &&
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "absolute bottom-1.5 left-2 text-[9px] font-black text-white bg-black/60 px-1.5 py-0.5 rounded-sm",
                                                      children: [
                                                        "🔴 ĐANG PHÁT | Tiến trình: ",
                                                        ytProgress,
                                                        "%",
                                                      ],
                                                    },
                                                  ),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute bottom-1.5 right-2 text-[9px] font-bold bg-black/80 px-1.5 py-0.5 rounded-sm",
                                                  children: i.duration,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute bottom-0 inset-x-0 h-1 bg-slate-800",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "bg-red-600 h-full transition-all duration-300",
                                                        style: {
                                                          width: `${ytProgress}%`,
                                                        },
                                                      },
                                                    ),
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "p-3 space-y-2 overflow-y-auto flex-1",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "h4",
                                                      {
                                                        className:
                                                          "text-xs font-black text-white leading-snug line-clamp-2",
                                                        children: i.title,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-[10px] text-slate-400 font-semibold mt-0.5",
                                                        children: [
                                                          i.channel,
                                                          " • ",
                                                          i.views,
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-4 gap-1 border-y border-slate-800 py-1.5 text-center text-[9px] text-slate-400 font-extrabold",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "block text-white font-black",
                                                              children:
                                                                "👍 1.2K",
                                                            },
                                                          ),
                                                          " Thích",
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
                                                                "block text-white font-black",
                                                              children: "👎 2",
                                                            },
                                                          ),
                                                          " Bỏ thích",
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
                                                                "block text-white font-black",
                                                              children: "💬 89",
                                                            },
                                                          ),
                                                          " Bình luận",
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
                                                                "block text-white font-black",
                                                              children:
                                                                "🔄 Chia sẻ",
                                                            },
                                                          ),
                                                          " Gửi",
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between p-2 bg-slate-900 border border-slate-800 rounded-2xl",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "space-y-0.5 pr-1",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[11px] font-black text-slate-200 block",
                                                              children:
                                                                "Tự động phát tiếp (AutoPlay)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] text-slate-400 block leading-tight",
                                                              children:
                                                                "Hết video tự đếm ngược 9s chuyển tập",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "label",
                                                      {
                                                        className:
                                                          "flex items-center cursor-pointer shrink-0",
                                                        children:
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className: `relative w-8 h-4 rounded-full transition-colors duration-200 ${autoplayEnabled ? "bg-red-500" : "bg-slate-700"}`,
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "input",
                                                                  {
                                                                    type: "checkbox",
                                                                    checked:
                                                                      autoplayEnabled,
                                                                    onChange:
                                                                      () => {
                                                                        const l =
                                                                          !autoplayEnabled;
                                                                        (setAutoplayEnabled(
                                                                          l,
                                                                        ),
                                                                          l ||
                                                                            setYtCountdown(
                                                                              null,
                                                                            ),
                                                                          markFeatureCompleted(
                                                                            "autoplay",
                                                                          ));
                                                                      },
                                                                    className:
                                                                      "opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "div",
                                                                  {
                                                                    className: `absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 ${autoplayEnabled ? "translate-x-4" : ""}`,
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[7px] font-black text-slate-400 uppercase tracking-wide block",
                                                        children:
                                                          "Gợi ý tiếp theo (Up Next):",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "space-y-1 max-h-[110px] overflow-y-auto no-scrollbar",
                                                        children: n.map(
                                                          (l, c) => {
                                                            const d =
                                                                c ===
                                                                ytVideoIndex,
                                                              m =
                                                                c ===
                                                                (ytVideoIndex +
                                                                  1) %
                                                                  4;
                                                            return jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                onClick: () => {
                                                                  (setYtVideoIndex(
                                                                    c,
                                                                  ),
                                                                    setYtProgress(
                                                                      0,
                                                                    ),
                                                                    setYtPlaying(
                                                                      !0,
                                                                    ),
                                                                    setYtCountdown(
                                                                      null,
                                                                    ),
                                                                    markFeatureCompleted(
                                                                      "autoplay",
                                                                    ));
                                                                },
                                                                className: `p-1.5 rounded-3xl border transition-all flex items-center gap-2 cursor-pointer ${d ? "bg-red-500/10 border-red-500/30" : "bg-slate-900/40 border-transparent hover:bg-slate-900"}`,
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-medium bg-slate-800 w-5 h-5 rounded flex items-center justify-center shrink-0",
                                                                      children:
                                                                        l.icon,
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "min-w-0 flex-1",
                                                                      children:
                                                                        [
                                                                          jsxRuntimeExports.jsx(
                                                                            "p",
                                                                            {
                                                                              className:
                                                                                "text-[7.5px] font-bold text-white truncate leading-tight",
                                                                              children:
                                                                                l.title,
                                                                            },
                                                                          ),
                                                                          jsxRuntimeExports.jsx(
                                                                            "p",
                                                                            {
                                                                              className:
                                                                                "text-[6.5px] text-slate-400 leading-none mt-0.5",
                                                                              children:
                                                                                d
                                                                                  ? "🟢 Đang phát"
                                                                                  : m &&
                                                                                      autoplayEnabled
                                                                                    ? "⏭️ Sắp phát"
                                                                                    : l.channel,
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                              c,
                                                            );
                                                          },
                                                        ),
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
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 flex flex-col justify-between text-left h-full",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                            children:
                                              "BẢNG ĐIỀU KHIỂN VIDEO GIẢ LẬP:",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                  (setYtPlaying((l) => !l),
                                                    markFeatureCompleted(
                                                      "autoplay",
                                                    ));
                                                },
                                                className:
                                                  "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer animate-none",
                                                children: ytPlaying
                                                  ? "⏸️ Tạm Dừng Video"
                                                  : "▶️ Tiếp Tục Phát",
                                              }),
                                              jsxRuntimeExports.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                  (setYtProgress(95),
                                                    setYtPlaying(!0),
                                                    setYtCountdown(null));
                                                },
                                                className:
                                                  "px-2 py-3 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer shadow-xs",
                                                children:
                                                  "⏩ Tua Tới Hết Video",
                                              }),
                                              jsxRuntimeExports.jsx("button", {
                                                type: "button",
                                                onClick: handlePrevVideo,
                                                className:
                                                  "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer",
                                                children: "⏮️ Video Trước",
                                              }),
                                              jsxRuntimeExports.jsx("button", {
                                                type: "button",
                                                onClick: handleNextVideo,
                                                className:
                                                  "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-bold rounded-3xl cursor-pointer",
                                                children: "⏭️ Video Tiếp Theo",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl text-center",
                                            children: [
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-[9px] font-black text-slate-400",
                                                children:
                                                  "DUNG LƯỢNG 4G TIÊU THỤ:",
                                              }),
                                              jsxRuntimeExports.jsxs("p", {
                                                className:
                                                  "text-2xl font-black text-red-500 font-mono my-0.5",
                                                children: [
                                                  dataConsumed.toFixed(1),
                                                  " MB",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-[9px] font-semibold text-slate-500 dark:text-slate-400",
                                                children:
                                                  "(Phát video tiêu tốn khoảng 1.3 MB dung lượng mạng mỗi giây)",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "p-8 sm:p-5 rounded-3xl border text-sm sm:text-base font-semibold leading-relaxed transition-all bg-red-500/10 border-red-500/20 text-red-800 dark:text-red-400 font-semibold",
                                            children: autoplayEnabled
                                              ? jsxRuntimeExports.jsxs("span", {
                                                  children: [
                                                    "⚠️ ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "Cơ chế tự phát:",
                                                      },
                                                    ),
                                                    " AutoPlay tạo một đồng hồ đếm ngược khi kết thúc. Nếu em không nhấn ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      { children: '"Hủy"' },
                                                    ),
                                                    " hoặc đổi video khác, hệ thống tự chuyển hướng. Điều này cuốn em vào việc xem liên hoàn không ngừng, gây mỏi mắt, xao lãng học tập và cạn kiệt gói mạng di động 4G cực nhanh!",
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-emerald-700 dark:text-emerald-400",
                                                  children: [
                                                    "🟢 ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children:
                                                          "AutoPlay đang tắt:",
                                                      },
                                                    ),
                                                    " Khi video kết thúc, hệ thống sẽ dừng lại chờ em tương tác. Điều này giúp em làm chủ hoàn toàn thời gian, kiểm soát lượng thông tin tiếp nhận và tiết kiệm dung lượng mạng tuyệt đối!",
                                                  ],
                                                }),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-1.5",
                                        children: jsxRuntimeExports.jsx(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => {
                                              setDataConsumed(0);
                                            },
                                            className:
                                              "flex-1 py-3 bg-slate-200 hover:bg-slate-350 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer",
                                            children:
                                              "Xóa Bộ Đếm Dung Lượng 🧹",
                                          },
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          });
                        })(),
                      selectedFeature === "autorun" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "Bảo mật số lớp 7-8: Khi cắm USB lạ, nếu tính năng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoRun đang bật",
                                }),
                                ", chương trình ẩn trong USB sẽ lập tức kích hoạt. Thử trải nghiệm xem điều gì xảy ra khi cắm 2 loại USB thử nghiệm bên dưới!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex flex-col items-center",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `w-full max-w-[340px] border-[10px] border-slate-800 dark:border-slate-700 rounded-t-2xl shadow-2xl relative overflow-hidden transition-all duration-500 ${screenAlert === "danger" ? "ring-4 ring-rose-500/50" : screenAlert === "safe" ? "ring-4 ring-emerald-500/50" : ""}`,
                                      children: jsxRuntimeExports.jsxs("div", {
                                        className: `h-48 w-full p-8 sm:p-5 font-mono text-white flex flex-col justify-between transition-colors duration-500 ${screenAlert === "danger" ? "bg-gradient-to-b from-red-950 to-rose-900 text-red-100" : screenAlert === "safe" ? "bg-gradient-to-b from-slate-900 to-emerald-950 text-emerald-100" : "bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-slate-300"}`,
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center border-b border-white/15 pb-1 text-[8px] font-black tracking-wider uppercase opacity-75",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "🖥️ Laptop OS v12.4",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1.5 cursor-pointer",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: "AutoRun:" },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => {
                                                        (setAutorunEnabled(
                                                          !autorunEnabled,
                                                        ),
                                                          setInsertedUsb(null),
                                                          setUsbStatus(
                                                            autorunEnabled
                                                              ? "🟢 Đã TẮT tính năng AutoRun. Hãy cắm lại USB để thử nghiệm mức độ an toàn!"
                                                              : "⚠️ Đã BẬT tính năng AutoRun. Hãy cẩn thận khi cắm USB chứa mã độc!",
                                                          ),
                                                          setScreenAlert(
                                                            "idle",
                                                          ));
                                                      },
                                                      className: `px-1.5 py-0.5 rounded-sm text-[7px] font-black transition-all ${autorunEnabled ? "bg-rose-600 text-white animate-pulse" : "bg-emerald-600 text-white"}`,
                                                      children: autorunEnabled
                                                        ? "BẬT (Nguy hiểm)"
                                                        : "TẮT (An toàn)",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-5 space-y-1.5",
                                            children:
                                              screenAlert === "danger"
                                                ? jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "space-y-1 animate-fadeIn",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          TriangleAlert,
                                                          {
                                                            className:
                                                              "h-9 w-9 text-red-500 mx-auto animate-bounce",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-semibold font-black uppercase text-red-400 tracking-wide",
                                                            children:
                                                              "🚨 RANSOMWARE LOCKED!",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-[8px] text-red-300 leading-tight bg-black/40 px-2 py-1 rounded-md",
                                                            children:
                                                              'Tệp độc hại "autorun.inf" đã tự kích hoạt malware mã hóa toàn bộ dữ liệu máy tính mà không cần bạn đồng ý!',
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  )
                                                : screenAlert === "safe"
                                                  ? jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "space-y-1 animate-fadeIn",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            CircleCheck,
                                                            {
                                                              className:
                                                                "h-9 w-9 text-emerald-400 mx-auto",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold font-black uppercase text-emerald-400 tracking-wide",
                                                              children:
                                                                "🟢 THIẾT BỊ AN TOÀN",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[8.5px] text-emerald-300 leading-tight",
                                                              children:
                                                                insertedUsb !=
                                                                  null &&
                                                                insertedUsb.includes(
                                                                  "Mã Độc",
                                                                )
                                                                  ? "Ngăn chặn thành công! Mã độc không thể tự chạy do AutoRun đã tắt. Hãy quét virus!"
                                                                  : "Đã mở thư mục Tài Liệu học tập của em an toàn!",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "text-slate-500 space-y-1 animate-pulse text-center",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            Usb,
                                                            {
                                                              className:
                                                                "h-9 w-9 text-slate-600 mx-auto",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[9px] font-black uppercase",
                                                              children:
                                                                "ĐANG CHỜ KẾT NỐI USB...",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[8px] text-slate-600 leading-none",
                                                              children:
                                                                "Vui lòng bấm cắm 1 trong 2 USB phía bên phải",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center text-[8px] pt-1.5 border-t border-white/10 opacity-80",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "📁 File Explorer",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "flex items-center gap-1",
                                                children: insertedUsb
                                                  ? "🔌 Connected"
                                                  : "🔌 No USB",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "w-full max-w-[370px] h-3 bg-slate-700 dark:bg-slate-600 rounded-b-xl relative flex items-center justify-center shadow-md",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-16 h-1 bg-slate-800 rounded-full",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute right-6 top-[-3px] w-4 h-1 bg-slate-900 border border-slate-500 rounded-xs",
                                          title: "USB Port",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "w-full mt-3 bg-black/40 p-8 sm:p-5 rounded-3xl text-[9px] font-semibold text-center leading-tight border border-slate-800 text-slate-300 font-mono",
                                      children: usbStatus,
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-3 text-left",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                      children:
                                        "🔌 THIẾT BỊ USB NGOÀI (CHỌN CẮM VÀO MÁY):",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "grid grid-cols-1 gap-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border transition-all ${insertedUsb === "USB Tài Liệu" ? "bg-blue-500/10 border-blue-500 text-blue-900 dark:text-blue-300 shadow-sm" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                          children: jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-start justify-between gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "flex gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-2xl mt-0.5",
                                                        children: "📂",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black",
                                                              children:
                                                                "USB Tài Liệu Học Tập (An toàn)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold text-slate-400 dark:text-slate-500 mt-0.5 leading-tight",
                                                              children:
                                                                "Ghi chú: Chỉ chứa tệp tin PDF sách giáo khoa, bài tập Tin học 8.",
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
                                                    type: "button",
                                                    onClick: () =>
                                                      insertedUsb ===
                                                      "USB Tài Liệu"
                                                        ? setInsertedUsb(
                                                            null,
                                                          ) ||
                                                          setScreenAlert(
                                                            "idle",
                                                          ) ||
                                                          setUsbStatus(
                                                            "Đã rút USB an toàn.",
                                                          )
                                                        : handleInsertUsb(
                                                            "USB Tài Liệu",
                                                          ),
                                                    className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black cursor-pointer transition-all ${insertedUsb === "USB Tài Liệu" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                                                    children:
                                                      insertedUsb ===
                                                      "USB Tài Liệu"
                                                        ? "Rút ra ⏏️"
                                                        : "Cắm vào 🔌",
                                                  },
                                                ),
                                              ],
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className: `p-8 sm:p-5 rounded-3xl border transition-all ${insertedUsb === "USB Chứa Mã Độc" ? "bg-rose-500/10 border-rose-500 text-rose-900 dark:text-rose-300 shadow-sm" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                          children: jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-start justify-between gap-2",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className: "flex gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-2xl mt-0.5",
                                                        children: "💀",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black text-red-500",
                                                              children:
                                                                "USB chứa Mã Độc Ransomware (Có AutoRun)",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold text-slate-400 dark:text-slate-500 mt-0.5 leading-tight",
                                                              children:
                                                                "Ghi chú: Chứa mã độc phá hoại tống tiền và tệp 'autorun.inf' tự khởi động.",
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
                                                    type: "button",
                                                    onClick: () =>
                                                      insertedUsb ===
                                                      "USB Chứa Mã Độc"
                                                        ? setInsertedUsb(
                                                            null,
                                                          ) ||
                                                          setScreenAlert(
                                                            "idle",
                                                          ) ||
                                                          setUsbStatus(
                                                            "Đã rút USB mã độc.",
                                                          )
                                                        : handleInsertUsb(
                                                            "USB Chứa Mã Độc",
                                                          ),
                                                    className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black cursor-pointer transition-all ${insertedUsb === "USB Chứa Mã Độc" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-rose-600 hover:bg-rose-700 text-white"}`,
                                                    children:
                                                      insertedUsb ===
                                                      "USB Chứa Mã Độc"
                                                        ? "Rút ra ⏏️"
                                                        : "Cắm vào 🔌",
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
                                        "text-sm sm:text-base font-semibold text-slate-400 font-semibold leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-2 bg-slate-100/30 p-8 sm:p-5 rounded-3xl",
                                      children: [
                                        "💡 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Nguyên tắc bảo mật IC3:",
                                        }),
                                        " Để chống lây nhiễm mã độc tự động, hệ điều hành hiện đại đã ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Mặc định Tắt AutoRun",
                                        }),
                                        " cho mọi ổ USB. Học sinh tuyệt đối không bật lại tính năng này!",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "autostart" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                              children: [
                                "Khi khởi động máy tính, nếu có quá nhiều ứng dụng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoStart",
                                }),
                                " chạy cùng lúc, máy sẽ khởi động cực chậm. Hãy thử bật/tắt các ứng dụng bên dưới để tối ưu hóa thời gian bật máy!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-3 text-left",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide",
                                      children:
                                        "⚙️ CẤU HÌNH KHỞI ĐỘNG (STARTUP APPS):",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "space-y-2",
                                      children: startupApps.map((n, i) =>
                                        jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-between p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-3xl",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                children: [
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-medium font-black text-slate-850 dark:text-white",
                                                    children: n.name,
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className:
                                                      "text-sm sm:text-base font-semibold text-slate-400 font-medium",
                                                    children: [
                                                      "+ ",
                                                      n.delay,
                                                      " giây khi bật máy",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("label", {
                                                className:
                                                  "relative inline-flex items-center cursor-pointer",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      checked: n.enabled,
                                                      onChange: () =>
                                                        toggleStartupApp(i),
                                                      className: "sr-only peer",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "w-8 h-4 bg-slate-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-slate-600 peer-checked:bg-purple-600",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          i,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 flex flex-col justify-between text-left",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide",
                                          children:
                                            "🖥️ MÀN HÌNH MÁY TÍNH KHỞI ĐỘNG:",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-full h-44 rounded-3xl bg-black border-4 border-slate-800 flex flex-col items-center justify-center p-8 sm:p-5 text-center text-white font-mono relative overflow-hidden shadow-inner",
                                          children: booting
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "space-y-3 animate-fadeIn",
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent animate-spin mx-auto",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-[10.5px] font-bold text-slate-300",
                                                    children:
                                                      "Đang tự động khởi chạy các ứng dụng AutoStart...",
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className:
                                                      "text-[9px] text-purple-400 font-bold",
                                                    children: [
                                                      "⚡ Đang nạp: ",
                                                      ((a = startupApps.filter(
                                                        (n) => n.enabled,
                                                      )[
                                                        Math.floor(
                                                          (bootTime -
                                                            bootSecondsLeft) /
                                                            Math.max(
                                                              1,
                                                              bootTime /
                                                                startupApps.filter(
                                                                  (n) =>
                                                                    n.enabled,
                                                                ).length,
                                                            ),
                                                        )
                                                      ]) == null
                                                        ? void 0
                                                        : a.name) ||
                                                        "Hệ điều hành Windows",
                                                      "...",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "mt-2 inline-flex items-center gap-1 px-2 py-1 bg-slate-900 rounded-3xl border border-purple-500/20",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-medium",
                                                            children: "⏱️",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-semibold font-black text-purple-400 animate-pulse",
                                                            children: [
                                                              "Đồng hồ đếm giây: ",
                                                              bootSecondsLeft,
                                                              " giây còn lại",
                                                            ],
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              })
                                            : bootSuccess
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-950 flex flex-col justify-between p-8 sm:p-5 animate-fadeIn relative",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "absolute inset-0 bg-blue-500/5 pointer-events-none",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex justify-between items-center text-[8px] text-white/60",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              children:
                                                                "📁 File Explorer",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              children:
                                                                "09:41 AM",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className: "space-y-1",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black text-emerald-400 drop-shadow-md",
                                                              children:
                                                                "✓ MÁY TÍNH ĐÃ KHỞI ĐỘNG XONG!",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[10.5px] text-white font-black leading-tight",
                                                              children:
                                                                "CHÀO MỪNG EM ĐẾN VỚI WINDOWS 11 💻",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[9.5px] text-purple-200",
                                                              children: [
                                                                "Tổng thời gian: ",
                                                                jsxRuntimeExports.jsxs(
                                                                  "strong",
                                                                  {
                                                                    children: [
                                                                      bootTime,
                                                                      " giây",
                                                                    ],
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
                                                          "flex justify-center gap-2 bg-white/10 backdrop-blur-xs py-1 px-5 sm:px-5 rounded-full mx-auto",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold",
                                                              children: "🎨",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold",
                                                              children: "🌐",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold",
                                                              children: "📁",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-semibold",
                                                              children: "⚙️",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-2 text-slate-500",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-4xl block",
                                                        children: "🔌",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-bold text-slate-400",
                                                      children:
                                                        "Máy tính hiện tại đang TẮT.",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold",
                                                      children:
                                                        'Hãy nhấn nút "Khởi động máy tính" phía dưới để đo thời gian.',
                                                    }),
                                                  ],
                                                }),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-3xl space-y-1 text-center shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-between items-center text-sm sm:text-base font-semibold font-black text-slate-400",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children:
                                                    "THỜI GIAN KHỞI ĐỘNG ƯỚC TÍNH:",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    bootTime > 35
                                                      ? "text-rose-500"
                                                      : bootTime > 15
                                                        ? "text-amber-500"
                                                        : "text-emerald-500",
                                                  children: [bootTime, " GIÂY"],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-full bg-slate-100 dark:bg-slate-950 rounded-full h-1.5 overflow-hidden",
                                              children: jsxRuntimeExports.jsx(
                                                "div",
                                                {
                                                  className: `h-1.5 rounded-full transition-all duration-500 ${bootTime > 35 ? "bg-rose-500" : bootTime > 15 ? "bg-amber-500" : "bg-emerald-500"}`,
                                                  style: {
                                                    width: `${Math.min((bootTime / 65) * 100, 100)}%`,
                                                  },
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-[9px] text-slate-450 font-bold",
                                              children:
                                                bootTime > 35
                                                  ? "🐢 Máy chạy siêu rùa bò! Em hãy tắt bớt các app rác để boot nhanh hơn!"
                                                  : bootTime > 15
                                                    ? "⚡ Máy chạy bình thường."
                                                    : "🚀 Máy bật siêu tốc như tên lửa!",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: "space-y-3",
                                      children: jsxRuntimeExports.jsx(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: triggerBootSimulation,
                                          disabled: booting,
                                          className:
                                            "w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-300 disabled:dark:bg-slate-800 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all shadow-xs",
                                          children: booting
                                            ? `Đang khởi động... (${bootSecondsLeft} giây còn lại)`
                                            : "Bấm thử Khởi động máy tính 💻",
                                        },
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "autosearch" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                              children: [
                                "Trải nghiệm tính năng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoSearch / Instant Search",
                                }),
                                ". Hãy gõ chữ cái như ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: '"t"',
                                }),
                                ", ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: '"m"',
                                }),
                                " hoặc ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: '"b"',
                                }),
                                " để máy tính tự động tìm câu trả lời tức thời từ cơ sở dữ liệu!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-md mx-auto",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "block text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                      children:
                                        "THANH TÌM KIẾM TỨC THỜI (AUTO-SEARCH):",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        jsxRuntimeExports.jsx(Search, {
                                          className:
                                            "absolute left-3 top-2.5 h-4 w-4 text-slate-400",
                                        }),
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: searchQuery,
                                          onChange: (n) => {
                                            (setSearchQuery(n.target.value),
                                              markFeatureCompleted(
                                                "autosearch",
                                              ));
                                          },
                                          placeholder:
                                            "Gõ 'trai' (Trái Đất) hoặc 'ma' (Mạng LAN)...",
                                          className:
                                            "w-full pl-9 pr-3 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2 text-left min-h-40",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] font-black text-slate-400 uppercase tracking-wide",
                                      children:
                                        "KẾT QUẢ TÌM THẤY NGAY LẬP TỨC:",
                                    }),
                                    searchResults.length > 0
                                      ? jsxRuntimeExports.jsx("div", {
                                          className: "space-y-2",
                                          children: searchResults.map((n, i) =>
                                            jsxRuntimeExports.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "p-8 sm:p-5 bg-cyan-500/5 hover:bg-cyan-500/10 rounded-3xl border border-cyan-500/10 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 font-bold animate-fadeIn",
                                                children: ["💡 ", n],
                                              },
                                              i,
                                            ),
                                          ),
                                        })
                                      : jsxRuntimeExports.jsx("p", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 italic text-center pt-4",
                                          children:
                                            "(Hãy gõ chữ cái để xem kết quả cập nhật trong thời gian thực)",
                                        }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "text-[10.5px] text-slate-400 leading-tight",
                                  children: [
                                    "💡 Khác với tìm kiếm truyền thống, ",
                                    jsxRuntimeExports.jsx("strong", {
                                      children: "AutoSearch",
                                    }),
                                    " đưa ra câu trả lời ngay khi phím của em vừa nảy lên, tối ưu hóa tối đa tốc độ truy xuất thông tin học tập.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "autoformat" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "Mô phỏng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoFormat trong Microsoft Word",
                                }),
                                ": Trình soạn thảo văn bản tự động chuyển đổi các tổ hợp phím thô thành ký tự định dạng chuẩn đẹp khi nhấn phím cách!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-3xl shadow-lg overflow-hidden flex flex-col text-left",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-[#2b579a] text-white px-5 sm:px-6 py-3 flex items-center justify-between text-sm sm:text-base font-bold select-none",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "bg-white text-[#2b579a] w-4 h-4 rounded-sm flex items-center justify-center font-black text-sm sm:text-base font-semibold",
                                              children: "W",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "Tài liệu 1 - Microsoft Word",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex gap-2",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "w-2.5 h-2.5 rounded-full bg-yellow-400",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "w-2.5 h-2.5 rounded-full bg-emerald-400",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "w-2.5 h-2.5 rounded-full bg-rose-400",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-50 dark:bg-slate-950 border-b border-slate-250/60 dark:border-slate-800 p-8 sm:p-5 flex flex-wrap gap-2 items-center text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1 border-r border-slate-300/50 pr-2",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "px-1.5 py-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-sm sm:text-base font-semibold",
                                              children: "Home",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "px-1.5 py-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-sm sm:text-base font-semibold text-blue-600",
                                              children: "AutoFormat",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded font-black",
                                              children: "B",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded italic",
                                              children: "I",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded underline",
                                              children: "U",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              className:
                                                "p-1 bg-[#2b579a]/10 text-[#2b579a] rounded font-black text-sm sm:text-base font-medium px-1.5",
                                              children: "• ≡",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "ml-auto flex items-center gap-1.5 bg-[#2b579a]/10 text-[#2b579a] dark:text-blue-400 px-2 py-0.5 rounded-full text-sm sm:text-base font-semibold font-black",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
                                            }),
                                            "AutoFormat: ĐANG BẬT",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "bg-slate-100 dark:bg-slate-950 p-5 sm:p-6 flex-1 flex justify-center",
                                      children: jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-900 border border-slate-350/50 dark:border-slate-850 w-full min-h-[220px] rounded-sm p-5 sm:p-6 shadow-sm flex flex-col relative",
                                        children: [
                                          jsxRuntimeExports.jsx("textarea", {
                                            value: editorText,
                                            onChange: (n) =>
                                              handleAutoFormatTyping(
                                                n.target.value,
                                              ),
                                            placeholder:
                                              "Hãy gõ văn bản tại đây... (ví dụ: gõ '1st', '2nd' rồi ấn dấu CÁCH, hoặc gõ '(c)' để xem Word tự động đổi dạng nhé)",
                                            className:
                                              "w-full flex-1 resize-none border-none bg-transparent focus:ring-0 focus:outline-hidden text-sm sm:text-base font-bold leading-relaxed text-slate-800 dark:text-slate-100 placeholder-slate-400",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "absolute bottom-2 right-3 text-[9px] font-black text-slate-400",
                                            children: [
                                              "Trang 1 / 1 | Số từ: ",
                                              editorText
                                                ? editorText.trim().split(/\s+/)
                                                    .length
                                                : 0,
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "lg:col-span-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 p-5 sm:p-6 rounded-3xl flex flex-col justify-between text-left gap-3",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2.5",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                          children:
                                            "BẢNG QUY TẮC ĐỊNH DẠNG TỰ ĐỘNG (WORD):",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className: "space-y-2",
                                          children: [
                                            {
                                              id: "1st",
                                              rule: 'Gõ "1st "',
                                              output:
                                                'Chuyển thành chữ nhỏ "1ˢᵗ"',
                                              matched:
                                                editorText.includes("1ˢᵗ"),
                                            },
                                            {
                                              id: "2nd",
                                              rule: 'Gõ "2nd "',
                                              output:
                                                'Chuyển thành chữ nhỏ "2ⁿᵈ"',
                                              matched:
                                                editorText.includes("2ⁿᵈ"),
                                            },
                                            {
                                              id: "copyright",
                                              rule: 'Gõ "(c)"',
                                              output:
                                                'Chuyển thành ký hiệu "©"',
                                              matched: editorText.includes("©"),
                                            },
                                          ].map((n) =>
                                            jsxRuntimeExports.jsxs(
                                              "div",
                                              {
                                                className: `p-8 sm:p-5 rounded-3xl border transition-all flex items-start gap-2.5 ${n.matched ? "bg-teal-500/10 border-teal-500/30 text-teal-800 dark:text-teal-400" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className: `text-sm sm:text-base font-medium p-0.5 rounded-full font-black ${n.matched ? "bg-teal-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-400"}`,
                                                      children: n.matched
                                                        ? "✓"
                                                        : "⌨️",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-[10.5px]",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "p",
                                                          {
                                                            className:
                                                              "font-extrabold",
                                                            children: [
                                                              n.rule,
                                                              " ➔ ",
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "underline",
                                                                  children:
                                                                    n.output,
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-[9px] text-slate-400 mt-0.5",
                                                            children: n.matched
                                                              ? "Trạng thái: Đã tự động thay thế!"
                                                              : "Trạng thái: Chờ gõ rồi bấm cách...",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              },
                                              n.id,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9px] font-black text-slate-400 uppercase tracking-wider block",
                                          children: "PHÍM GÕ NHANH GIẢ LẬP:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "grid grid-cols-3 gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                handleAutoFormatTyping(
                                                  editorText + "1st ",
                                                ),
                                              className:
                                                "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer",
                                              children: "+ '1st ' ⌨️",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                handleAutoFormatTyping(
                                                  editorText + "2nd ",
                                                ),
                                              className:
                                                "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer",
                                              children: "+ '2nd ' ⌨️",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                handleAutoFormatTyping(
                                                  editorText + "(c)",
                                                ),
                                              className:
                                                "px-2 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold font-black rounded-3xl cursor-pointer",
                                              children: "+ '(c)' ⌨️",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex gap-2 pt-1",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: applyAutoFormatDemo,
                                              className:
                                                "flex-1 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all shadow-xs",
                                              children: "Chạy Toàn Bộ Demo 📋",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                (setEditorText(""),
                                                  setFormatApplied([]));
                                              },
                                              className:
                                                "px-5 sm:px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-bold rounded-3xl cursor-pointer",
                                              children: "Xóa Sạch 🧹",
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
                      selectedFeature === "autoconnect" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "Thiết bị số lớp 7: Trải nghiệm tính năng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoConnect (Tự động kết nối)",
                                }),
                                " bằng cách bật công tắc Wi-Fi. Hệ thống sẽ tự quét tìm mạng đã lưu và tự động kết nối sau một khoảng thời gian đếm ngược!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-900 text-white rounded-3xl border-4 border-slate-800 p-5 sm:p-6 shadow-xl text-left font-sans max-w-sm mx-auto w-full relative overflow-hidden flex flex-col justify-between min-h-[360px]",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex justify-between items-center text-sm sm:text-base font-semibold text-slate-400 font-semibold font-mono",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              children: "09:41 AM",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-1.5",
                                              children: [
                                                wifiConnected &&
                                                  jsxRuntimeExports.jsx(Wifi, {
                                                    className:
                                                      "h-3 w-3 text-emerald-400",
                                                  }),
                                                jsxRuntimeExports.jsx("span", {
                                                  children: "5G",
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "w-5 h-2.5 border border-slate-500 rounded-xs relative flex items-center p-px",
                                                  children:
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "h-full w-4/5 bg-white rounded-xs",
                                                      },
                                                    ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "border-b border-slate-800 pb-2 flex items-center justify-between",
                                          children: jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              children: [
                                                jsxRuntimeExports.jsx("h4", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black uppercase text-slate-300",
                                                  children:
                                                    "Cài đặt điện thoại",
                                                }),
                                                jsxRuntimeExports.jsxs("h3", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-white flex items-center gap-1.5",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      Wifi,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-sky-400",
                                                      },
                                                    ),
                                                    " Kết nối Wi-Fi",
                                                  ],
                                                }),
                                              ],
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center justify-between p-8 sm:p-5 bg-slate-850 rounded-3xl border border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "text-lg",
                                                  children: "📶",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  children: [
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black animate-fadeIn",
                                                      children: "Bật/Tắt Wi-Fi",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-[9px] text-slate-400 font-medium",
                                                      children: wifiPower
                                                        ? "Đang bật bộ thu phát sóng"
                                                        : "Đã tắt bộ thu phát sóng",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("label", {
                                              className:
                                                "relative inline-flex items-center cursor-pointer select-none",
                                              children: [
                                                jsxRuntimeExports.jsx("input", {
                                                  type: "checkbox",
                                                  checked: wifiPower,
                                                  onChange: () =>
                                                    setWifiPower(!wifiPower),
                                                  className: "sr-only peer",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "w-9 h-5 bg-slate-700 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-sky-500",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1.5 pt-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-[9px] font-black text-slate-500 uppercase tracking-wider block",
                                              children:
                                                "MẠNG KHẢ DỤNG XUNG QUANH:",
                                            }),
                                            wifiPower
                                              ? wifiScanning
                                                ? jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-center py-6 text-slate-400 space-y-2 bg-slate-950/40 border border-slate-850 rounded-3xl animate-pulse",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-5 h-5 rounded-full border-2 border-t-sky-400 border-r-transparent border-b-sky-400 border-l-transparent animate-spin mx-auto",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-[10.5px] font-bold",
                                                            children:
                                                              "Đang tìm kiếm mạng Wi-Fi...",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  )
                                                : jsxRuntimeExports.jsx("div", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                      {
                                                        name: "Trường THCS Ngô Sĩ Liên 🏫",
                                                        isSaved: !0,
                                                        signal: "strong",
                                                        desc: "Mạng trường học đã lưu mật khẩu",
                                                      },
                                                      {
                                                        name: "Wifi Nhà Riêng 🏠",
                                                        isSaved: !0,
                                                        signal: "strong",
                                                        desc: "Mạng gia đình đã lưu mật khẩu",
                                                      },
                                                      {
                                                        name: "Coffee Free Wifi ☕",
                                                        isSaved: !1,
                                                        signal: "medium",
                                                        desc: "Mạng mở không mật khẩu",
                                                      },
                                                      {
                                                        name: "Wifi Hàng Xóm 📶",
                                                        isSaved: !1,
                                                        signal: "weak",
                                                        desc: "Mạng có bảo mật mật khẩu",
                                                      },
                                                    ].map((n, i) => {
                                                      const l =
                                                        wifiConnected &&
                                                        n.isSaved &&
                                                        n.name.includes(
                                                          "Ngô Sĩ Liên",
                                                        );
                                                      return jsxRuntimeExports.jsxs(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          onClick: () => {
                                                            !wifiConnected &&
                                                              wifiPower &&
                                                              (setWifiConnected(
                                                                !0,
                                                              ),
                                                              setWifiStatus(
                                                                "🟢 Đã kết nối thủ công thành công!",
                                                              ),
                                                              markFeatureCompleted(
                                                                "autoconnect",
                                                              ));
                                                          },
                                                          className: `w-full p-8 sm:p-5 rounded-3xl border text-left transition-all flex items-center justify-between cursor-pointer ${l ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold" : "bg-slate-850/60 border-slate-800 hover:bg-slate-800 text-slate-300"}`,
                                                          children: [
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "space-y-0.5 max-w-[80%]",
                                                                children: [
                                                                  jsxRuntimeExports.jsxs(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-bold flex items-center gap-1",
                                                                      children:
                                                                        [
                                                                          n.name,
                                                                          n.isSaved &&
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-[8px] bg-sky-500/20 text-sky-400 px-1 py-0.2 rounded font-medium uppercase",
                                                                                children:
                                                                                  "Đã lưu",
                                                                              },
                                                                            ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-[9px] text-slate-500 leading-tight truncate",
                                                                      children:
                                                                        n.desc,
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "flex items-center gap-1.5 shrink-0",
                                                                children: l
                                                                  ? jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-[9px] font-black text-emerald-400 flex items-center gap-0.5",
                                                                        children:
                                                                          "✓ Connected",
                                                                      },
                                                                    )
                                                                  : jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-slate-500",
                                                                        children:
                                                                          "📶",
                                                                      },
                                                                    ),
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                        i,
                                                      );
                                                    }),
                                                  })
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-center py-6 text-slate-500 space-y-1 bg-slate-950/40 border border-slate-850 rounded-3xl",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-xl block",
                                                        children: "🚫",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-bold",
                                                      children:
                                                        "Wi-Fi đang tắt",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-[8px] text-slate-600",
                                                      children:
                                                        "Hãy gạt công tắc Wi-Fi phía trên để quét mạng.",
                                                    }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "mt-3 pt-2 border-t border-slate-850 text-center",
                                      children: jsxRuntimeExports.jsx("div", {
                                        className:
                                          "bg-black/30 p-8 sm:p-5 rounded-3xl text-[9.5px] font-semibold leading-tight text-slate-400 min-h-[32px] flex items-center justify-center",
                                        children: wifiStatus,
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 flex flex-col justify-between text-left space-y-4",
                                  children: jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-3",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide",
                                        children:
                                          "🕹️ ĐIỀU KHIỂN KHOẢNG CÁCH (WIFI DISTANCE):",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center text-[10.5px]",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-extrabold text-slate-600 dark:text-slate-300",
                                                children:
                                                  "Khoảng cách tới Bộ phát Wi-Fi:",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className: `font-black text-sm sm:text-base font-medium px-2 py-0.5 rounded-full ${wifiDistance <= 15 ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"}`,
                                                children: [
                                                  wifiDistance,
                                                  " mét ",
                                                  wifiDistance <= 15
                                                    ? "📶 (Trong vùng)"
                                                    : "🚫 (Quá xa)",
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "h-14 bg-slate-50 dark:bg-slate-950 rounded-3xl relative overflow-hidden border border-slate-100 dark:border-slate-850 flex items-center px-5 sm:px-6",
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "absolute top-0 left-0 bottom-0 w-[37.5%] bg-sky-500/10 dark:bg-sky-500/5 border-r border-dashed border-sky-400 flex items-center justify-center select-none",
                                                children: jsxRuntimeExports.jsx(
                                                  "span",
                                                  {
                                                    className:
                                                      "text-[8px] text-sky-500 font-black tracking-wider uppercase opacity-80",
                                                    children:
                                                      "Vùng phủ sóng Wifi (<=15m)",
                                                  },
                                                ),
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "absolute left-2 flex flex-col items-center z-10",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm sm:text-base font-medium shadow-md",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "animate-ping absolute inline-flex h-6 w-6 rounded-full bg-sky-400 opacity-75",
                                                          },
                                                        ),
                                                        "📡",
                                                      ],
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[7.5px] font-black text-slate-400 mt-0.5",
                                                      children: "ROUTER",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "absolute right-2 text-[8px] text-slate-400 font-black",
                                                children: "40m",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                style: {
                                                  left: `${20 + (wifiDistance / 40) * 60}%`,
                                                },
                                                className:
                                                  "absolute flex flex-col items-center transition-all duration-300 z-10 -translate-x-1/2",
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className: `w-7 h-7 rounded-full flex items-center justify-center text-sm sm:text-base font-medium shadow-md border ${wifiConnected ? "bg-emerald-500 text-white border-emerald-400 animate-bounce" : "bg-slate-400 text-white border-slate-300"}`,
                                                    children: "📱",
                                                  }),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[7.5px] font-black text-slate-500 mt-0.5 whitespace-nowrap",
                                                      children: "ĐIỆN THOẠI",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx("input", {
                                                type: "range",
                                                min: "1",
                                                max: "40",
                                                value: wifiDistance,
                                                onChange: (n) =>
                                                  setWifiDistance(
                                                    parseInt(n.target.value),
                                                  ),
                                                className:
                                                  "w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none cursor-pointer accent-sky-500",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between text-[8.5px] text-slate-400 font-extrabold uppercase",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children: "0m (Cực gần)",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "15m (Ranh giới)",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children: "40m (Cực xa)",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                        children:
                                          "📉 TRẠNG THÁI KẾT NỐI HỆ THỐNG:",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: `p-5 sm:p-6 rounded-3xl border text-center space-y-2.5 transition-all duration-300 ${wifiConnected ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"}`,
                                        children: wifiConnected
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className: "animate-fadeIn",
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-3xl animate-bounce",
                                                  children: "📶",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-medium font-black text-emerald-600 dark:text-emerald-400 uppercase",
                                                  children:
                                                    "Đã kết nối Internet thành công!",
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-[9.5px] font-medium leading-relaxed mt-1 text-slate-500 dark:text-slate-400 space-y-0.5",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        children: [
                                                          "✓ Tốc độ mạng: ",
                                                          jsxRuntimeExports.jsx(
                                                            "strong",
                                                            {
                                                              className:
                                                                "text-slate-700 dark:text-slate-300",
                                                              children:
                                                                "150 Mbps (Băng thông rộng)",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        children: [
                                                          "✓ Địa chỉ IP: ",
                                                          jsxRuntimeExports.jsx(
                                                            "strong",
                                                            {
                                                              className:
                                                                "text-slate-700 dark:text-slate-300",
                                                              children:
                                                                "192.168.1.45",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : wifiScanning
                                            ? jsxRuntimeExports.jsxs("div", {
                                                className: "py-3",
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full border-2 border-t-sky-500 border-r-transparent border-b-sky-500 border-l-transparent animate-spin mx-auto",
                                                  }),
                                                  jsxRuntimeExports.jsx("p", {
                                                    className:
                                                      "text-sm sm:text-base font-medium font-black text-slate-500 dark:text-slate-400 mt-2 uppercase",
                                                    children:
                                                      "Đang quét tìm sóng Wi-Fi lân cận...",
                                                  }),
                                                ],
                                              })
                                            : wifiConnectingCount !== null
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "space-y-2 animate-pulse",
                                                  children: [
                                                    jsxRuntimeExports.jsx("p", {
                                                      className: "text-2xl",
                                                      children: "⏳",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black text-amber-600 dark:text-amber-400",
                                                      children:
                                                        "ĐANG TỰ ĐỘNG KẾT NỐI LẠI...",
                                                    }),
                                                    jsxRuntimeExports.jsxs(
                                                      "p",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold font-medium text-slate-500 dark:text-slate-400",
                                                        children: [
                                                          "Đồng hồ đếm ngược: ",
                                                          jsxRuntimeExports.jsxs(
                                                            "strong",
                                                            {
                                                              className:
                                                                "text-amber-600 font-mono text-sm sm:text-base font-medium",
                                                              children: [
                                                                wifiConnectingCount,
                                                                "s",
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
                                                          "flex gap-2 justify-center pt-1.5",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              onClick: () => {
                                                                (setWifiConnectingCount(
                                                                  null,
                                                                ),
                                                                  setWifiStatus(
                                                                    "⏸️ Đã hủy tự động kết nối.",
                                                                  ));
                                                              },
                                                              className:
                                                                "px-2.5 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-semibold font-black rounded-md cursor-pointer",
                                                              children:
                                                                "Hủy 🚫",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              onClick: () => {
                                                                (setWifiConnectingCount(
                                                                  null,
                                                                ),
                                                                  setWifiConnected(
                                                                    !0,
                                                                  ),
                                                                  setWifiStatus(
                                                                    "🟢 Đã kết nối tự động thành công!",
                                                                  ),
                                                                  markFeatureCompleted(
                                                                    "autoconnect",
                                                                  ));
                                                              },
                                                              className:
                                                                "px-2.5 py-1 bg-sky-600 text-white text-sm sm:text-base font-semibold font-black rounded-md cursor-pointer",
                                                              children:
                                                                "Kết nối ngay ⚡",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className: "animate-fadeIn",
                                                  children: [
                                                    jsxRuntimeExports.jsx("p", {
                                                      className: "text-3xl",
                                                      children: "🚫",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-medium font-black",
                                                      children:
                                                        "CHƯA CÓ KẾT NỐI INTERNET",
                                                    }),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-sm sm:text-base font-semibold font-medium leading-tight text-slate-500 dark:text-slate-400 mt-1",
                                                      children: wifiPower
                                                        ? "Điện thoại ở quá xa bộ phát sóng. Hãy kéo slider khoảng cách bên trên về mức <= 15m để tự động kết nối Wi-Fi!"
                                                        : "Bộ thu Wi-Fi trên điện thoại đang tắt. Hãy bật Wi-Fi để bắt đầu.",
                                                    }),
                                                  ],
                                                }),
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        type: "button",
                                        onClick: () =>
                                          setShowAutoConnectExplanation(
                                            !showAutoConnectExplanation,
                                          ),
                                        className:
                                          "flex items-center gap-2 text-sm sm:text-base font-semibold font-black text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer pt-2",
                                        children: [
                                          showAutoConnectExplanation
                                            ? jsxRuntimeExports.jsx(
                                                ChevronDown,
                                                {
                                                  className:
                                                    "h-4 w-4 text-sky-500",
                                                },
                                              )
                                            : jsxRuntimeExports.jsx(
                                                ChevronRight,
                                                {
                                                  className:
                                                    "h-4 w-4 text-sky-500",
                                                },
                                              ),
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "💡 Cơ chế hoạt động & Ý nghĩa thực tế của AutoConnect",
                                          }),
                                        ],
                                      }),
                                      showAutoConnectExplanation &&
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "space-y-3 animate-fadeIn pt-2 border-t border-slate-200 dark:border-slate-800",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: "space-y-1.5",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide block",
                                                  children:
                                                    "💡 CƠ CHẾ HOẠT ĐỘNG:",
                                                }),
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 leading-normal",
                                                  children: [
                                                    "Tính năng ",
                                                    jsxRuntimeExports.jsx(
                                                      "strong",
                                                      {
                                                        children: "AutoConnect",
                                                      },
                                                    ),
                                                    " tự động nạp cấu hình bảo mật đã lưu (SSID, Password) để kết nối lại với điểm phát sóng quen thuộc ngay khi bộ thu Wi-Fi hoạt động. Không cần thao tác thủ công, tiết kiệm thời gian và đảm bảo kết nối liền mạch.",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-medium border-t border-slate-200 dark:border-slate-850 pt-2.5",
                                              children: [
                                                "💡 ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Ý nghĩa thực tế:",
                                                  },
                                                ),
                                                " AutoConnect giúp điện thoại tự kết nối lại Wifi nhà mình ngay khi em đi học về mà không cần hỏi lại mật khẩu. Tuy nhiên, hãy tắt AutoConnect với các Wifi công cộng mạo danh để bảo mật thông tin cá nhân nhé!",
                                              ],
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
                      selectedFeature === "autofit" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "Excel nâng cao lớp 8: Khi tên học sinh bị che khuất do cột quá hẹp, hãy ",
                                jsxRuntimeExports.jsx("strong", {
                                  children:
                                    "nhấp đúp vào vạch phân chia ở bên phải tiêu đề cột B",
                                }),
                                " để thực hiện ",
                                jsxRuntimeExports.jsx("strong", {
                                  children: "AutoFit",
                                }),
                                " tự động nới rộng cột vừa khít nhé!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-lg mx-auto text-left",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-2 w-full min-w-0",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider",
                                      children: "MÔ PHỎNG EXCEL SPREADSHEET:",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: applyAutoFit,
                                      className:
                                        "no-override px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white keep-light text-xs sm:text-sm font-black rounded-full shadow-md hover:shadow-lg cursor-pointer transition-all shrink-0 active:scale-95 border border-indigo-400",
                                      children: "Bấm AutoFit Nhanh ↔",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "border border-slate-200 dark:border-slate-800 rounded-2xl overflow-x-auto bg-white dark:bg-slate-900 font-mono text-xs sm:text-sm font-medium",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-xs sm:text-sm font-black text-slate-500 dark:text-slate-400",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-10 text-center py-2 border-r border-slate-200 dark:border-slate-800 shrink-0 bg-slate-150 dark:bg-slate-900",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-16 text-center py-2 border-r border-slate-200 dark:border-slate-800 shrink-0 font-bold",
                                          children: "A",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          style: { width: `${columnBWidth}px` },
                                          className: `text-center py-2 shrink-0 font-black relative group bg-indigo-50/50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-r border-slate-300 dark:border-slate-700 ${isResizingB ? "" : "transition-all duration-300"}`,
                                          children: [
                                            "B",
                                            jsxRuntimeExports.jsxs("div", {
                                              onDoubleClick: applyAutoFit,
                                              onMouseDown: (n) => {
                                                (setIsResizingB(!0),
                                                  (resizeStartRef.current = {
                                                    x: n.clientX,
                                                    width: columnBWidth,
                                                  }),
                                                  n.preventDefault());
                                              },
                                              title:
                                                "Kéo thả để chỉnh kích thước, nhấp đúp để tự AutoFit!",
                                              className:
                                                "absolute right-[-4px] top-0 bottom-0 w-[8px] bg-indigo-500 hover:bg-indigo-600 cursor-col-resize z-25 group-hover:opacity-100 opacity-80 flex items-center justify-center transition-all",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute top-1/2 -translate-y-1/2 bg-indigo-700 text-white text-[8px] px-1 py-0.5 rounded-sm font-black shadow-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30",
                                                  children: "←|→",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className: `h-full w-[2px] ${isResizingB ? "bg-indigo-600 w-[3px]" : "bg-white"}`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "divide-y divide-slate-150 dark:divide-slate-800",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center text-xs sm:text-sm font-black bg-slate-100/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-10 text-center py-2 bg-slate-150 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-500 shrink-0",
                                              children: "1",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-16 text-center py-2 border-r border-slate-200 dark:border-slate-800 shrink-0 font-black",
                                              children: "STT",
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              style: {
                                                width: `${columnBWidth}px`,
                                              },
                                              className: `px-2.5 py-2 shrink-0 truncate whitespace-nowrap text-left font-black border-r border-slate-200 dark:border-slate-800 ${isResizingB ? "" : "transition-all duration-300"}`,
                                              title: "Họ và Tên",
                                              children: "Họ và Tên",
                                            }),
                                          ],
                                        }),
                                        [
                                          {
                                            stt: 1,
                                            name: "Nguyễn Hoàng Hải Nam",
                                          },
                                          { stt: 2, name: "Trần Minh Đức" },
                                          { stt: 3, name: "Lê Hoàng Diệp Chi" },
                                        ].map((n, i) =>
                                          jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center text-xs sm:text-sm font-semibold",
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "w-10 text-center py-2 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-400 shrink-0",
                                                  children: i + 2,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "w-16 text-center py-2 border-r border-slate-200 dark:border-slate-800 text-slate-500 shrink-0",
                                                  children: n.stt,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  style: {
                                                    width: `${columnBWidth}px`,
                                                  },
                                                  className: `px-2.5 py-2 font-bold shrink-0 truncate whitespace-nowrap text-slate-850 dark:text-slate-100 text-left border-r border-slate-200 dark:border-slate-800 ${isResizingB ? "" : "transition-all duration-300"}`,
                                                  title: n.name,
                                                  children: n.name,
                                                }),
                                              ],
                                            },
                                            i,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex flex-wrap gap-2 justify-between items-center bg-indigo-50 dark:bg-slate-900 p-3.5 sm:p-4 rounded-2xl border border-indigo-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-bold leading-tight",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className: "flex-1 min-w-0",
                                      children: isAutofitApplied
                                        ? '🟢 Trạng thái: Đã AutoFit! Cột B tự động giãn rộng vừa khít hiển thị trọn vẹn "Nguyễn Hoàng Hải Nam".'
                                        : "🚨 Trạng thái: Cột B bị hẹp (80px), khiến dữ liệu tên học sinh bị che mờ!",
                                    }),
                                    isAutofitApplied &&
                                      jsxRuntimeExports.jsx("button", {
                                        type: "button",
                                        onClick: resetAutoFit,
                                        className:
                                          "allow-wrap px-3 py-1 rounded-xl bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 text-xs font-black border border-indigo-300/60 dark:border-slate-700 transition-all cursor-pointer shrink-0",
                                        children: "Thu hẹp lại 🔄",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "autogenerate" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("p", {
                              className:
                                "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed text-center",
                              children: [
                                "Mô phỏng ",
                                jsxRuntimeExports.jsx("strong", {
                                  children:
                                    "AutoGenerate trong Microsoft Excel",
                                }),
                                ": Hàm ",
                                jsxRuntimeExports.jsx("code", {
                                  children: "=RANDBETWEEN(bottom, top)",
                                }),
                                " giúp sinh ngẫu nhiên số nguyên trong phạm vi được định nghĩa trước!",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 max-w-2xl w-full mx-auto text-left",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-5 space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 text-xs sm:text-sm font-black text-slate-400",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          children: "fx",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "h-3 w-[1px] bg-slate-200 dark:bg-slate-800",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          className: "text-slate-500 uppercase",
                                          children: [
                                            "Thanh công thức (",
                                            selectedAgCell,
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-wrap sm:flex-nowrap gap-2 items-center",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: "text",
                                          value: agFormula,
                                          onChange: (n) =>
                                            handleAgFormulaChange(
                                              n.target.value,
                                            ),
                                          onKeyDown: (n) => {
                                            n.key === "Enter" &&
                                              handleAgFormulaSubmit();
                                          },
                                          placeholder:
                                            "Chọn ô bất kỳ, nhập công thức rồi nhấn Enter...",
                                          className:
                                            "flex-1 min-w-[200px] px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm font-mono font-bold text-blue-600 dark:text-blue-400 focus:outline-hidden focus:ring-1 focus:ring-fuchsia-500",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () =>
                                            handleAgFormulaSubmit(),
                                          className:
                                            "px-3.5 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-xs font-black rounded-xl transition-all cursor-pointer shrink-0 whitespace-nowrap min-w-fit",
                                          title: "Áp dụng công thức (Enter)",
                                          children: "Enter ↵",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () =>
                                            handleAgClearCell(selectedAgCell),
                                          className:
                                            "px-3.5 py-2 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-black rounded-xl border border-rose-200 dark:border-rose-900 transition-all cursor-pointer shrink-0 whitespace-nowrap min-w-fit",
                                          title:
                                            "Xóa nội dung ô đang chọn (Delete / Backspace)",
                                          children: "Xóa ô ⌫",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "border border-slate-200 dark:border-slate-800 rounded-3xl overflow-visible bg-white dark:bg-slate-900 font-mono text-sm sm:text-base font-medium shadow-xs relative",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-sm sm:text-base font-semibold text-slate-400 font-bold divide-x divide-slate-200 dark:divide-slate-800 rounded-t-xl",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "w-10 text-center py-3 shrink-0",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className: "flex-1 text-center py-3",
                                          children: "CỘT A",
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          className: "flex-1 text-center py-3",
                                          children: "CỘT B",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "divide-y divide-slate-150 dark:divide-slate-800",
                                      children: [1, 2, 3, 4, 5].map((n) =>
                                        jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className: `flex items-stretch text-sm sm:text-base font-semibold relative ${n === 5 ? "rounded-b-xl" : ""}`,
                                            children: [
                                              jsxRuntimeExports.jsx("div", {
                                                className: `w-10 text-center py-3 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 font-bold text-slate-400 shrink-0 flex items-center justify-center ${n === 5 ? "rounded-bl-xl" : ""}`,
                                                children: n,
                                              }),
                                              (() => {
                                                const i = `A${n}`,
                                                  l = selectedAgCell === i,
                                                  c = agGrid[i],
                                                  d = agCellFormulas[i],
                                                  m =
                                                    agIsDragging &&
                                                    agDragSourceCell &&
                                                    isValidDragTarget(
                                                      agDragSourceCell,
                                                      i,
                                                    );
                                                return jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className: `flex-1 border-r border-slate-200 dark:border-slate-800 relative min-h-[52px] flex items-stretch transition-colors duration-150 ${m ? "hover:bg-fuchsia-500/10 cursor-crosshair" : ""} ${n === 5 ? "rounded-bl-none" : ""}`,
                                                    onMouseEnter: () => {
                                                      if (
                                                        agIsDragging &&
                                                        agDragSourceCell &&
                                                        isValidDragTarget(
                                                          agDragSourceCell,
                                                          i,
                                                        )
                                                      ) {
                                                        const u =
                                                            agCellFormulas[
                                                              agDragSourceCell
                                                            ] || "",
                                                          g =
                                                            agGrid[
                                                              agDragSourceCell
                                                            ] || "";
                                                        (setAgCellFormulas(
                                                          (p) => {
                                                            const f = {
                                                              ...p,
                                                              [i]: u,
                                                            };
                                                            return (
                                                              setAgGrid((b) =>
                                                                u.startsWith(
                                                                  "=",
                                                                )
                                                                  ? evaluateAllFormulas(
                                                                      f,
                                                                      b,
                                                                      i,
                                                                    )
                                                                  : {
                                                                      ...b,
                                                                      [i]: g,
                                                                    },
                                                              ),
                                                              f
                                                            );
                                                          },
                                                        ),
                                                          setAgIsDragged(!0));
                                                      }
                                                    },
                                                    children:
                                                      isEditingAgCell && l
                                                        ? jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              autoFocus: !0,
                                                              value: agFormula,
                                                              onChange: (u) =>
                                                                handleAgFormulaChange(
                                                                  u.target
                                                                    .value,
                                                                ),
                                                              onBlur: () => {
                                                                (setIsEditingAgCell(
                                                                  !1,
                                                                ),
                                                                  handleAgFormulaSubmit());
                                                              },
                                                              onKeyDown: (
                                                                u,
                                                              ) => {
                                                                u.key ===
                                                                  "Enter" &&
                                                                  (setIsEditingAgCell(
                                                                    !1,
                                                                  ),
                                                                  handleAgFormulaSubmit());
                                                              },
                                                              className:
                                                                "w-full bg-fuchsia-50 dark:bg-fuchsia-950 font-bold px-2.5 py-3 outline-hidden text-slate-800 dark:text-slate-100 font-mono text-sm sm:text-base font-semibold border-2 border-fuchsia-500 rounded-xs",
                                                            },
                                                          )
                                                        : jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              onClick: () => {
                                                                (setSelectedAgCell(
                                                                  i,
                                                                ),
                                                                  setAgFormula(
                                                                    agCellFormulas[
                                                                      i
                                                                    ] ||
                                                                      agGrid[
                                                                        i
                                                                      ] ||
                                                                      "",
                                                                  ),
                                                                  setIsEditingAgCell(
                                                                    !1,
                                                                  ));
                                                              },
                                                              onDoubleClick:
                                                                () => {
                                                                  (setSelectedAgCell(
                                                                    i,
                                                                  ),
                                                                    setAgFormula(
                                                                      agCellFormulas[
                                                                        i
                                                                      ] ||
                                                                        agGrid[
                                                                          i
                                                                        ] ||
                                                                        "",
                                                                    ),
                                                                    setIsEditingAgCell(
                                                                      !0,
                                                                    ));
                                                                },
                                                              title: d
                                                                ? `Công thức: ${d}`
                                                                : "Nhấp đúp để gõ công thức hoặc giá trị!",
                                                              className: `flex-1 px-5 sm:px-5 py-3 flex items-center justify-center font-bold relative transition-all duration-150 ${l ? "ring-2 ring-fuchsia-500 ring-inset bg-fuchsia-500/5" : ""}`,
                                                              children: [
                                                                c
                                                                  ? jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className: `text-fuchsia-600 dark:text-fuchsia-400 text-sm sm:text-base font-medium animate-fadeIn font-extrabold px-2.5 py-1 rounded-sm ${agRecalcFlash && d ? "bg-amber-400/20 scale-105 shadow-xs" : "bg-fuchsia-500/5"}`,
                                                                        children:
                                                                          c,
                                                                      },
                                                                    )
                                                                  : jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-slate-300 dark:text-slate-800 italic",
                                                                        children:
                                                                          "-",
                                                                      },
                                                                    ),
                                                                l &&
                                                                  !isEditingAgCell &&
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      onMouseDown:
                                                                        (u) => {
                                                                          (u.preventDefault(),
                                                                            u.stopPropagation(),
                                                                            setAgIsDragging(
                                                                              !0,
                                                                            ),
                                                                            setAgDragSourceCell(
                                                                              i,
                                                                            ));
                                                                        },
                                                                      title:
                                                                        "Giữ và kéo tay nắm này qua các ô khác để AutoGenerate!",
                                                                      className:
                                                                        "absolute right-[-4px] bottom-[-4px] w-4 h-4 bg-fuchsia-600 border-2 border-white dark:border-slate-900 cursor-crosshair z-30 hover:scale-130 transition-transform shadow-md rounded-xs flex items-center justify-center",
                                                                      children:
                                                                        jsxRuntimeExports.jsx(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-75",
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                              ],
                                                            },
                                                          ),
                                                  },
                                                );
                                              })(),
                                              (() => {
                                                const i = `B${n}`,
                                                  l = selectedAgCell === i,
                                                  c = agGrid[i],
                                                  d = agCellFormulas[i],
                                                  m =
                                                    agIsDragging &&
                                                    agDragSourceCell &&
                                                    isValidDragTarget(
                                                      agDragSourceCell,
                                                      i,
                                                    );
                                                return jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className: `flex-1 relative min-h-[52px] flex items-stretch transition-colors duration-150 ${m ? "hover:bg-fuchsia-500/10 cursor-crosshair" : ""} ${n === 5 ? "rounded-br-xl" : ""}`,
                                                    onMouseEnter: () => {
                                                      if (
                                                        agIsDragging &&
                                                        agDragSourceCell &&
                                                        isValidDragTarget(
                                                          agDragSourceCell,
                                                          i,
                                                        )
                                                      ) {
                                                        const u =
                                                            agCellFormulas[
                                                              agDragSourceCell
                                                            ] || "",
                                                          g =
                                                            agGrid[
                                                              agDragSourceCell
                                                            ] || "";
                                                        (setAgCellFormulas(
                                                          (p) => {
                                                            const f = {
                                                              ...p,
                                                              [i]: u,
                                                            };
                                                            return (
                                                              setAgGrid((b) =>
                                                                u.startsWith(
                                                                  "=",
                                                                )
                                                                  ? evaluateAllFormulas(
                                                                      f,
                                                                      b,
                                                                      i,
                                                                    )
                                                                  : {
                                                                      ...b,
                                                                      [i]: g,
                                                                    },
                                                              ),
                                                              f
                                                            );
                                                          },
                                                        ),
                                                          setAgIsDragged(!0));
                                                      }
                                                    },
                                                    children:
                                                      isEditingAgCell && l
                                                        ? jsxRuntimeExports.jsx(
                                                            "input",
                                                            {
                                                              type: "text",
                                                              autoFocus: !0,
                                                              value: agFormula,
                                                              onChange: (u) =>
                                                                handleAgFormulaChange(
                                                                  u.target
                                                                    .value,
                                                                ),
                                                              onBlur: () => {
                                                                (setIsEditingAgCell(
                                                                  !1,
                                                                ),
                                                                  handleAgFormulaSubmit());
                                                              },
                                                              onKeyDown: (
                                                                u,
                                                              ) => {
                                                                u.key ===
                                                                  "Enter" &&
                                                                  (setIsEditingAgCell(
                                                                    !1,
                                                                  ),
                                                                  handleAgFormulaSubmit());
                                                              },
                                                              className:
                                                                "w-full bg-fuchsia-50 dark:bg-fuchsia-950 font-bold px-2.5 py-3 outline-hidden text-slate-800 dark:text-slate-100 font-mono text-sm sm:text-base font-semibold border-2 border-fuchsia-500 rounded-xs",
                                                            },
                                                          )
                                                        : jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              onClick: () => {
                                                                (setSelectedAgCell(
                                                                  i,
                                                                ),
                                                                  setAgFormula(
                                                                    agCellFormulas[
                                                                      i
                                                                    ] ||
                                                                      agGrid[
                                                                        i
                                                                      ] ||
                                                                      "",
                                                                  ),
                                                                  setIsEditingAgCell(
                                                                    !1,
                                                                  ));
                                                              },
                                                              onDoubleClick:
                                                                () => {
                                                                  (setSelectedAgCell(
                                                                    i,
                                                                  ),
                                                                    setAgFormula(
                                                                      agCellFormulas[
                                                                        i
                                                                      ] ||
                                                                        agGrid[
                                                                          i
                                                                        ] ||
                                                                        "",
                                                                    ),
                                                                    setIsEditingAgCell(
                                                                      !0,
                                                                    ));
                                                                },
                                                              title: d
                                                                ? `Công thức: ${d}`
                                                                : "Nhấp đúp để gõ công thức hoặc giá trị!",
                                                              className: `flex-1 px-5 sm:px-5 py-3 flex items-center justify-center font-bold relative transition-all duration-150 ${l ? "ring-2 ring-fuchsia-500 ring-inset bg-fuchsia-500/5" : ""} ${n === 5 ? "rounded-br-xl" : ""}`,
                                                              children: [
                                                                c
                                                                  ? jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className: `text-fuchsia-600 dark:text-fuchsia-400 text-sm sm:text-base font-medium animate-fadeIn font-extrabold px-2.5 py-1 rounded-sm ${agRecalcFlash && d ? "bg-amber-400/20 scale-105 shadow-xs" : "bg-fuchsia-500/5"}`,
                                                                        children:
                                                                          c,
                                                                      },
                                                                    )
                                                                  : jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-slate-300 dark:text-slate-800 italic",
                                                                        children:
                                                                          "-",
                                                                      },
                                                                    ),
                                                                l &&
                                                                  !isEditingAgCell &&
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      onMouseDown:
                                                                        (u) => {
                                                                          (u.preventDefault(),
                                                                            u.stopPropagation(),
                                                                            setAgIsDragging(
                                                                              !0,
                                                                            ),
                                                                            setAgDragSourceCell(
                                                                              i,
                                                                            ));
                                                                        },
                                                                      title:
                                                                        "Giữ và kéo tay nắm này qua các ô khác để AutoGenerate!",
                                                                      className:
                                                                        "absolute right-[-4px] bottom-[-4px] w-4 h-4 bg-fuchsia-600 border-2 border-white dark:border-slate-900 cursor-crosshair z-30 hover:scale-130 transition-transform shadow-md rounded-xs flex items-center justify-center",
                                                                      children:
                                                                        jsxRuntimeExports.jsx(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-75",
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                              ],
                                                            },
                                                          ),
                                                  },
                                                );
                                              })(),
                                            ],
                                          },
                                          n,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex gap-2 justify-between items-center bg-fuchsia-500/5 p-8 sm:p-5 rounded-3xl border border-fuchsia-500/10 text-[10.5px] text-slate-500 font-semibold leading-tight animate-fadeIn",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      children: Object.values(
                                        agCellFormulas,
                                      ).some((n) =>
                                        (n || "")
                                          .trim()
                                          .toUpperCase()
                                          .startsWith("=RANDBETWEEN("),
                                      )
                                        ? agIsDragged
                                          ? jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-emerald-500 font-black",
                                              children:
                                                "🟢 Thành công: Excel đã tự động chạy tính toán và sinh ngẫu nhiên số! Hãy thử ấn phím F9 (hoặc nút trên giao diện) để đổi loạt số mới.",
                                            })
                                          : agIsDragging
                                            ? jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-fuchsia-500 font-black animate-pulse",
                                                children:
                                                  "🖱️ Đang kéo chuột... Hãy di chuyển chuột theo hàng dọc hoặc hàng ngang và THẢ ra!",
                                              })
                                            : jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "💡 Di chuột vào góc dưới bên phải ô chứa công thức (tay nắm nhỏ màu hồng), ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "giữ chuột và kéo qua các ô cùng hàng hoặc cùng cột",
                                                    },
                                                  ),
                                                  " để AutoFill sinh số! Bạn có thể nhấn ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Backspace / Delete",
                                                    },
                                                  ),
                                                  " hoặc nút ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    { children: "Xóa ô ⌫" },
                                                  ),
                                                  " để xóa ô đã chọn.",
                                                ],
                                              })
                                        : jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "text-amber-500 font-bold",
                                            children: [
                                              "💡 Nhấp đúp vào bất kỳ ô nào (hoặc chọn ô rồi gõ vào thanh công thức) và nhập công thức ",
                                              jsxRuntimeExports.jsx("code", {
                                                children: "=RANDBETWEEN(1,5)",
                                              }),
                                              " để kích hoạt kéo tay nắm AutoFill!",
                                            ],
                                          }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex gap-1.5 shrink-0 items-center",
                                      children: [
                                        Object.values(agCellFormulas).some(
                                          (n) =>
                                            (n || "")
                                              .trim()
                                              .toUpperCase()
                                              .startsWith("=RANDBETWEEN("),
                                        ) &&
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: handleAgRecalculate,
                                            title:
                                              "Bấm để mô phỏng nhấn phím F9 trên bàn phím",
                                            className:
                                              "px-2 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-3xl text-sm sm:text-base font-semibold shadow-xs flex items-center gap-1 transition-all cursor-pointer whitespace-nowrap",
                                            children: "Phím F9 ⌨️",
                                          }),
                                        !agIsDragged &&
                                          (agCellFormulas[selectedAgCell] || "")
                                            .toUpperCase()
                                            .startsWith("=RANDBETWEEN(") &&
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: runRandBetweenFill,
                                            className:
                                              "px-2.5 py-1 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-3xl text-[10.5px] transition-all cursor-pointer",
                                            title:
                                              "Tự động kéo điền nhanh cả cột cho ô này",
                                            children: "Kéo nhanh ⚡",
                                          }),
                                        (agIsDragged ||
                                          Object.values(agGrid).some(
                                            (n) => n !== "",
                                          )) &&
                                          jsxRuntimeExports.jsx("button", {
                                            type: "button",
                                            onClick: resetRandBetweenFill,
                                            className:
                                              "px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-750 dark:text-slate-200 font-black rounded-3xl hover:bg-slate-300 dark:hover:bg-slate-750 transition-all text-sm sm:text-base font-semibold cursor-pointer",
                                            children: "Xóa hết 🔄",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      selectedFeature === "automation" &&
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "text-center space-y-1.5 max-w-2xl mx-auto",
                              children: [
                                jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                                  children:
                                    "Tự động hóa (Automation) là quy trình vận hành lặp đi lặp lại một chuỗi công việc được lập trình sẵn, giúp giảm thiểu tối đa sự can thiệp của con người, tiết kiệm sức lực và tối ưu hóa năng suất.",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex justify-center p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md sm:max-w-lg w-full mx-auto gap-1",
                                  children: [
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: () =>
                                        setAutomationDemoType("smarthome"),
                                      className: `flex-1 px-3 py-2.5 text-xs font-black rounded-2xl transition-all cursor-pointer whitespace-nowrap ${automationDemoType === "smarthome" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,
                                      children: "🏡 Nhà Thông Minh (Nếu-Thì)",
                                    }),
                                    jsxRuntimeExports.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        (setAutomationDemoType("factory"),
                                          setFactoryActive(!1));
                                      },
                                      className: `flex-1 px-3 py-2.5 text-xs font-black rounded-2xl transition-all cursor-pointer whitespace-nowrap ${automationDemoType === "factory" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`,
                                      children: "🏭 Nhà Máy Tự Động (Lặp Lại)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            automationDemoType === "smarthome"
                              ? jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 text-left",
                                      children: [
                                        jsxRuntimeExports.jsxs("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-orange-500 uppercase tracking-wide flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx(Cpu, {
                                              className: "h-4 w-4 animate-spin",
                                            }),
                                            " THÔNG SỐ CẢM BIẾN MÔI TRƯỜNG",
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1.5",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-between text-sm sm:text-base font-bold",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children:
                                                    "Cường độ ánh sáng mặt trời:",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-orange-500 font-black",
                                                  children: [ambientLight, "%"],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("input", {
                                              type: "range",
                                              min: "0",
                                              max: "100",
                                              value: ambientLight,
                                              onChange: (n) =>
                                                handleLightSliderChange(
                                                  parseInt(n.target.value, 10),
                                                ),
                                              className:
                                                "w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none cursor-pointer accent-orange-500",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-[9px] text-slate-400 font-bold",
                                              children:
                                                "💡 Quy tắc: Nếu Ánh sáng < 30% (Trời tối) ➔ Đèn sân tự động BẬT!",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1.5 pt-2",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "flex justify-between text-sm sm:text-base font-bold",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children:
                                                    "Độ ẩm của đất trồng cây:",
                                                }),
                                                jsxRuntimeExports.jsxs("span", {
                                                  className:
                                                    "text-blue-500 font-black",
                                                  children: [soilMoisture, "%"],
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsx("input", {
                                              type: "range",
                                              min: "0",
                                              max: "100",
                                              value: soilMoisture,
                                              onChange: (n) =>
                                                handleMoistureSliderChange(
                                                  parseInt(n.target.value, 10),
                                                ),
                                              className:
                                                "w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-3xl appearance-none cursor-pointer accent-blue-500",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-[9px] text-slate-400 font-bold",
                                              children:
                                                "🚿 Quy tắc: Nếu Độ ẩm < 30% (Đất khô) ➔ Máy bơm tự động PHUN NƯỚC!",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 text-left space-y-3 flex flex-col justify-between",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wide",
                                          children:
                                            "💡 PHẢN HỒI THIẾT BỊ TỰ ĐỘNG IoT:",
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-2.5",
                                          children: [
                                            jsxRuntimeExports.jsxs("div", {
                                              className: `p-8 sm:p-5 rounded-3xl border flex items-center justify-between ${ambientLight < 30 ? "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400 animate-pulse" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(Zap, {
                                                      className:
                                                        "h-5 w-5 shrink-0",
                                                    }),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black",
                                                              children:
                                                                "Hệ thống Đèn Sân Vườn",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[9.5px] text-slate-400 font-bold",
                                                              children:
                                                                ambientLight <
                                                                30
                                                                  ? "🟢 ĐÃ BẬT TỰ ĐỘNG"
                                                                  : "⏸️ ĐANG TẮT (Tiết kiệm điện)",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "text-[18px]",
                                                  children:
                                                    ambientLight < 30
                                                      ? "💡"
                                                      : "🌑",
                                                }),
                                              ],
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              className: `p-8 sm:p-5 rounded-3xl border flex items-center justify-between ${soilMoisture < 30 ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 animate-pulse" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"}`,
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      WandSparkles,
                                                      {
                                                        className:
                                                          "h-5 w-5 shrink-0",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-sm sm:text-base font-medium font-black",
                                                              children:
                                                                "Máy Bơm Nước Tưới Cây",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[9.5px] text-slate-400 font-bold",
                                                              children:
                                                                soilMoisture <
                                                                30
                                                                  ? "🟢 ĐÃ BẬT TỰ ĐỘNG"
                                                                  : "⏸️ ĐANG TẮT (Đủ nước)",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "text-[18px]",
                                                  children:
                                                    soilMoisture < 30
                                                      ? "🚿"
                                                      : "🌱",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "text-sm sm:text-base font-semibold text-slate-400 leading-tight",
                                          children: [
                                            "💡 ",
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Kết luận:",
                                            }),
                                            " Tự động hóa IoT giúp tiết kiệm sức lao động tối đa, bảo vệ tài nguyên môi trường và nâng cấp tiện ích cuộc sống tương lai.",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 space-y-4 text-left animate-fadeIn",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-850 pb-3",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black text-teal-600 dark:text-teal-400 uppercase tracking-wide flex items-center gap-1.5",
                                              children:
                                                "🏭 DÂY CHUYỀN SẢN XUẤT ĐÓNG CHAI NƯỚC TỰ ĐỘNG",
                                            }),
                                            jsxRuntimeExports.jsx("p", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold mt-0.5",
                                              children:
                                                "Mô phỏng sự khác biệt giữa can thiệp thủ công & quy trình lặp tuần hoàn tự động",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex p-0.5 bg-slate-200 dark:bg-slate-900 rounded-3xl shrink-0",
                                          children: [
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                (setFactoryMode("manual"),
                                                  setFactoryActive(!1));
                                              },
                                              className: `px-5 sm:px-5 py-1 text-[9.5px] font-black rounded-md cursor-pointer transition-all ${factoryMode === "manual" ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                              children:
                                                "🧑‍🔧 Bằng tay (Thủ công)",
                                            }),
                                            jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                (setFactoryMode("auto"),
                                                  setFactoryActive(!0));
                                              },
                                              className: `px-5 sm:px-5 py-1 text-[9.5px] font-black rounded-md cursor-pointer transition-all ${factoryMode === "auto" ? "bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs" : "text-slate-500 hover:text-slate-700"}`,
                                              children: "⚡ Chạy Tự Động Hóa",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-150 dark:border-slate-800 space-y-4",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "relative pt-4 pb-2",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "h-3 bg-slate-200 dark:bg-slate-800 rounded-full w-full relative overflow-hidden flex items-center",
                                              children:
                                                factoryActive &&
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:15px_15px] animate-[pulse_1.5s_infinite] w-full h-full",
                                                }),
                                            }),
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "grid grid-cols-4 absolute top-0 inset-x-0",
                                              children: [
                                                {
                                                  step: 1,
                                                  label: "Bơm Nước",
                                                  icon: "💧",
                                                },
                                                {
                                                  step: 2,
                                                  label: "Đóng Nắp",
                                                  icon: "🍾",
                                                },
                                                {
                                                  step: 3,
                                                  label: "Dán Nhãn",
                                                  icon: "🏷️",
                                                },
                                                {
                                                  step: 4,
                                                  label: "Đóng Thùng",
                                                  icon: "📦",
                                                },
                                              ].map((n) => {
                                                const i =
                                                    factoryStep === n.step,
                                                  l = factoryStep > n.step;
                                                return jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex flex-col items-center",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className: `w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-300 ${i ? "bg-teal-500 border-teal-400 text-white shadow-md animate-bounce scale-110" : l ? "bg-teal-500/20 border-teal-500 text-teal-600 dark:text-teal-400" : "bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-400"}`,
                                                          children: n.icon,
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          className: `text-[8.5px] font-black mt-1 ${i ? "text-teal-600 dark:text-teal-400 font-extrabold scale-105" : "text-slate-400"}`,
                                                          children: [
                                                            n.step,
                                                            ". ",
                                                            n.label,
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  n.step,
                                                );
                                              }),
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "h-36 sm:h-40 bg-slate-50 dark:bg-slate-950/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center p-8 sm:p-5 relative overflow-hidden",
                                          children: [
                                            factoryStep === 0
                                              ? jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "text-center space-y-1",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xl",
                                                        children: "⏸️",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx("p", {
                                                      className:
                                                        "text-[10.5px] font-black text-slate-400",
                                                      children:
                                                        "ĐANG TẠM DỪNG: CHỜ NẠP VẬT LIỆU MỚI",
                                                    }),
                                                  ],
                                                })
                                              : jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-6 animate-fadeIn",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "relative w-14 h-40 border border-slate-300 dark:border-slate-700 rounded-3xl bg-slate-100/50 dark:bg-slate-900/30 overflow-hidden shadow-xs flex flex-col justify-end",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              style: {
                                                                height:
                                                                  factoryStep >=
                                                                  1
                                                                    ? "70%"
                                                                    : "0%",
                                                              },
                                                              className:
                                                                "w-full bg-sky-400/70 dark:bg-sky-500/50 transition-all duration-500 ease-out relative",
                                                              children:
                                                                factoryStep ===
                                                                  1 &&
                                                                jsxRuntimeExports.jsx(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "absolute inset-x-0 top-0 h-1 bg-white/40 animate-pulse",
                                                                  },
                                                                ),
                                                            },
                                                          ),
                                                          factoryStep >= 2 &&
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "absolute top-0 inset-x-0 h-4 bg-teal-600 border-b border-teal-500 flex items-center justify-center text-[7px] text-white font-bold animate-slideDown",
                                                                children: "CAP",
                                                              },
                                                            ),
                                                          factoryStep >= 3 &&
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "absolute top-1/2 -translate-y-1/2 inset-x-1.5 h-6 bg-amber-400 dark:bg-amber-500 text-amber-950 flex items-center justify-center text-[7.5px] font-black tracking-wider uppercase rounded-sm animate-pulse",
                                                                children:
                                                                  "AQUA ISO",
                                                              },
                                                            ),
                                                          factoryStep >= 4 &&
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "absolute inset-0 bg-amber-800/95 text-white flex flex-col items-center justify-center text-[9px] font-black animate-fadeIn border-2 border-amber-700",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      children:
                                                                        "📦 OK",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-[6.5px] tracking-tight text-amber-200 font-medium",
                                                                      children:
                                                                        "ĐÃ ĐÓNG HỘP",
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
                                                          "text-left space-y-1 max-w-[200px]",
                                                        children: [
                                                          factoryStep === 1 &&
                                                            jsxRuntimeExports.jsxs(
                                                              jsxRuntimeExports.Fragment,
                                                              {
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-[8.5px] bg-sky-500/10 text-sky-600 px-2 py-0.5 rounded-full font-black",
                                                                      children:
                                                                        "TRẠM BƠM NƯỚC",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-250",
                                                                      children:
                                                                        "Đang chiết nước tinh khiết...",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-[9px] text-slate-400 leading-tight",
                                                                      children:
                                                                        "Cảm biến lưu lượng tự ngắt khi nước đầy 70% thể tích chai.",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          factoryStep === 2 &&
                                                            jsxRuntimeExports.jsxs(
                                                              jsxRuntimeExports.Fragment,
                                                              {
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-[8.5px] bg-teal-500/10 text-teal-600 px-2 py-0.5 rounded-full font-black",
                                                                      children:
                                                                        "TRẠM ĐÓNG NẮP",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-250",
                                                                      children:
                                                                        "Đang dập nắp khít chân không...",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-[9px] text-slate-400 leading-tight",
                                                                      children:
                                                                        "Trục khí nén xoáy ren nắp chai với lực dập tiêu chuẩn quốc tế.",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          factoryStep === 3 &&
                                                            jsxRuntimeExports.jsxs(
                                                              jsxRuntimeExports.Fragment,
                                                              {
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-[8.5px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full font-black",
                                                                      children:
                                                                        "TRẠM DÁN NHÃN",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-250",
                                                                      children:
                                                                        "Đang dán mác chống hàng giả...",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-[9px] text-slate-400 leading-tight",
                                                                      children:
                                                                        "Keo dán nhiệt bám dính siêu chắc, in thêm mã QR xuất xứ.",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                          factoryStep === 4 &&
                                                            jsxRuntimeExports.jsxs(
                                                              jsxRuntimeExports.Fragment,
                                                              {
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-[8.5px] bg-purple-500/10 text-purple-600 px-2 py-0.5 rounded-full font-black",
                                                                      children:
                                                                        "TRẠM ĐÓNG THÙNG",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-250",
                                                                      children:
                                                                        "Hoàn thiện đóng hộp carton!",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "p",
                                                                    {
                                                                      className:
                                                                        "text-[9px] text-slate-400 leading-tight",
                                                                      children:
                                                                        "Robot gắp chai xếp gọn 24 chai/hộp, sẵn sàng chuyển kho.",
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
                                            factoryActive &&
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "absolute top-2 right-2 flex items-center gap-1 bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded-full text-[8.5px] font-black animate-pulse",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping",
                                                    },
                                                  ),
                                                  "CHUYÊN CẦN LẶP LẠI VÔ TẬN 🔄",
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "flex gap-3 items-center",
                                      children: [
                                        factoryMode === "manual"
                                          ? jsxRuntimeExports.jsxs("button", {
                                              type: "button",
                                              onClick: handleManualFactoryStep,
                                              className:
                                                "flex-1 py-3 bg-slate-800 hover:bg-slate-950 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all active:scale-98 flex items-center justify-center gap-2 border border-slate-700 shadow-md",
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children: "🧑‍🔧",
                                                }),
                                                factoryStep === 0 ||
                                                factoryStep === 4
                                                  ? "NẠP CHAI MỚI LÊN BĂNG TẢI ➕"
                                                  : factoryStep === 1
                                                    ? "ẤN NÚT: ĐÓNG NẮP CHAI (BƯỚC 2/4) 🍾"
                                                    : factoryStep === 2
                                                      ? "ẤN NÚT: DÁN NHÃN THƯƠNG HIỆU (BƯỚC 3/4) 🏷️"
                                                      : "ẤN NÚT: XẾP CHAI VÀO HỘP XUẤT XƯỞNG (BƯỚC 4/4) 📦",
                                              ],
                                            })
                                          : jsxRuntimeExports.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                setFactoryActive(
                                                  !factoryActive,
                                                ),
                                              className: `flex-1 py-3 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all active:scale-98 flex items-center justify-center gap-2 shadow-md ${factoryActive ? "bg-teal-600 hover:bg-teal-700 animate-pulse" : "bg-slate-600 hover:bg-slate-750"}`,
                                              children: jsxRuntimeExports.jsx(
                                                "span",
                                                {
                                                  children: factoryActive
                                                    ? "⏸️ TẠM DỪNG BĂNG TẢI"
                                                    : "⚡ KHỞI ĐỘNG DÂY CHUYỀN LẶP LẠI",
                                                },
                                              ),
                                            }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: resetFactorySimulation,
                                          className:
                                            "px-5 sm:px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-bold rounded-3xl cursor-pointer shrink-0 transition-all",
                                          title: "Reset thống kê dây chuyền",
                                          children: "Reset 🔄",
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "grid grid-cols-2 gap-3 pt-1",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "p-8 sm:p-5 bg-teal-500/5 border border-teal-500/10 rounded-3xl flex items-center gap-3",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-9 h-9 rounded-3xl bg-teal-500 text-white flex items-center justify-center text-lg shadow-xs font-bold",
                                              children: "🥤",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 font-extrabold uppercase",
                                                  children:
                                                    "Thành phẩm hoàn thành",
                                                }),
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-lg font-black text-teal-600 dark:text-teal-400",
                                                  children: [
                                                    factoryCompletedCount,
                                                    " ",
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold text-slate-400",
                                                        children: "chai",
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
                                            "p-8 sm:p-5 bg-rose-500/5 border border-rose-500/10 rounded-3xl flex items-center gap-3",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className:
                                                "w-9 h-9 rounded-3xl bg-rose-500 text-white flex items-center justify-center text-lg shadow-xs font-bold",
                                              children: "🖱️",
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400 font-extrabold uppercase",
                                                  children:
                                                    "Con người can thiệp",
                                                }),
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-lg font-black text-rose-600 dark:text-rose-400",
                                                  children: [
                                                    factoryHumanClicks,
                                                    " ",
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-sm sm:text-base font-semibold text-slate-400",
                                                        children: "lần nhấp",
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
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl border text-[10.5px] leading-relaxed font-semibold transition-all duration-300 ${factoryMode === "auto" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400" : "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400"}`,
                                      children:
                                        factoryMode === "auto"
                                          ? jsxRuntimeExports.jsxs("p", {
                                              children: [
                                                "🎯 ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "ĐÚNG CHUẨN TỰ ĐỘNG HÓA:",
                                                  },
                                                ),
                                                " Hệ thống tự lặp đi lặp lại quy trình (Bơm nước ➔ Đóng nắp ➔ Dán nhãn ➔ Đóng thùng) không biết mỏi mệt. ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Sự can thiệp của con người giảm về 0 lần!",
                                                  },
                                                ),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs("p", {
                                              children: [
                                                "⚠️ ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "BẠN ĐANG TÁC ĐỘNG THỦ CÔNG:",
                                                  },
                                                ),
                                                " Ở chế độ này, bạn chính là người nhân công phải click liên tục từng bước mệt mỏi. Hãy bấm chuyển sang ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      '"Chạy Tự Động Hóa"',
                                                  },
                                                ),
                                                " để trải nghiệm sự khác biệt tối ưu nhé!",
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    ],
                  }),
                  showCertificate &&
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "p-5 sm:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-950 dark:to-emerald-950/20 border border-emerald-300 dark:border-emerald-900/60 rounded-3xl text-center space-y-4 animate-fadeIn shadow-lg",
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-semibold font-black tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-5 sm:px-5 py-3 rounded-full inline-block",
                          children: "🏆 CHỨNG NHẬN HOÀN THÀNH LAB 17",
                        }),
                        jsxRuntimeExports.jsx("h3", {
                          className:
                            "text-xl font-black text-slate-850 dark:text-white",
                          children:
                            "Chúc mừng em đã làm chủ 13 tính năng tự động của thời đại số! 🎓",
                        }),
                        jsxRuntimeExports.jsx("p", {
                          className:
                            "text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-semibold",
                          children:
                            "Qua bài học này, em đã nắm chắc các khái niệm quan trọng phục vụ thi chứng chỉ tin học quốc tế IC3 GS6: Hiểu rõ lợi ích đẩy nhanh tốc độ gõ phím của AutoFill, AutoComplete, AutoCorrect, tối ưu hóa hệ thống máy tính qua AutoStart, AutoFix, AutoFormat và đặc biệt là rèn luyện tư duy phòng tránh nguy hiểm an ninh mạng đến từ AutoPlay và AutoRun!",
                        }),
                        jsxRuntimeExports.jsx("div", {
                          className: "flex justify-center gap-3",
                          children: jsxRuntimeExports.jsx("button", {
                            type: "button",
                            onClick: resetAllLab,
                            className:
                              "px-5 sm:px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all",
                            children: "Luyện tập lại 🔄",
                          }),
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

    return Lab17;
  };
})();
