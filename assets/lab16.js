/**
 * Lab 16: 4 Công cụ Mật mã Bảo mật
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab16 = window.AGY_LABS[16] = function (env) {
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

    function symmetricEncrypt(a, n) {
      const i = sha256(n).substring(0, 8),
        l = new TextEncoder(),
        c = Array.from(l.encode(a))
          .map((m) => (m ^ 66).toString(16).padStart(2, "0"))
          .join(""),
        d = sha256(a + n).substring(0, 8);
      return `AES_GCM[iv:${i}]:pay_${c}:sum_${d}`;
    }
    function symmetricDecrypt(a, n) {
      try {
        const i = a.match(/^AES_GCM\[iv:(.{8})\]:pay_(.+):sum_(.{8})$/);
        if (!i)
          return {
            success: !1,
            data: "",
            error:
              "Định dạng bản mật mã (Ciphertext) bị sai hoặc cấu trúc bị lỗi!",
          };
        const [l, c, d, m] = i,
          u = sha256(n).substring(0, 8);
        if (c !== u)
          return {
            success: !1,
            data: "",
            error: "Sai khóa giải mã hoặc Khóa không khớp với cấu trúc IV!",
          };
        const g = [];
        for (let k = 0; k < d.length; k += 2)
          g.push(parseInt(d.substring(k, k + 2), 16) ^ 66);
        const f = new TextDecoder().decode(new Uint8Array(g));
        return sha256(f + n).substring(0, 8) !== m
          ? {
              success: !1,
              data: "",
              error:
                "Tính toàn vẹn bị vi phạm! Dữ liệu bản mật mã đã bị chỉnh sửa hoặc can thiệp trái phép!",
            }
          : { success: !0, data: f };
      } catch {
        return {
          success: !1,
          data: "",
          error: "Giải mã thất bại! Lỗi dữ liệu không đồng nhất.",
        };
      }
    }
    function asymmetricEncrypt(a, n) {
      const i = new TextEncoder(),
        l = Array.from(i.encode(a))
          .map((m) => (m ^ 119).toString(16).padStart(2, "0"))
          .join(""),
        c = n.replace("RSA_PUBLIC_KEY_", ""),
        d = sha256(a + n).substring(0, 10);
      return `RSA_OAEP[pub:${c}]:ct_${l}:sig_${d}`;
    }
    function asymmetricDecrypt(a, n, i) {
      try {
        const l = a.match(/^RSA_OAEP\[pub:(.{10})\]:ct_(.+):sig_(.{10})$/i);
        if (!l)
          return {
            success: !1,
            data: "",
            error:
              "Bản mật mã không đúng định dạng RSA-OAEP hoặc đã bị sửa đổi!",
          };
        const [c, d, m, u] = l,
          g = sha256(n).substring(0, 10);
        if (d.toLowerCase() !== g.toLowerCase())
          return {
            success: !1,
            data: "",
            error:
              "Giải mã thất bại! Khóa Private Key này không thuộc cặp khóa của Public Key tương ứng!",
          };
        const p = [];
        for (let N = 0; N < m.length; N += 2)
          p.push(parseInt(m.substring(N, N + 2), 16) ^ 119);
        const b = new TextDecoder().decode(new Uint8Array(p)),
          k = sha256(b + i).substring(0, 10);
        return u.toLowerCase() !== k.toLowerCase()
          ? {
              success: !1,
              data: "",
              error:
                "Giải mã thất bại! Khóa chữ ký không khớp, bản mật mã đã bị hacker sửa đổi!",
            }
          : { success: !0, data: b };
      } catch {
        return {
          success: !1,
          data: "",
          error: "Giải mã bất đối xứng thất bại!",
        };
      }
    }
    function encodeA1Z26(a) {
      return removeAccents(a)
        .toUpperCase()
        .split(/\s+/)
        .map((c) => {
          const d = [];
          for (let m = 0; m < c.length; m++) {
            const u = c.charCodeAt(m);
            u >= 65 && u <= 90 && d.push(u - 64);
          }
          return d.join("-");
        })
        .filter((c) => c.length > 0)
        .join(" / ");
    }
    function decodeA1Z26(a) {
      return a
        .trim()
        .split(/\s*\/\s*/)
        .map((l) =>
          l
            ? l
                .split("-")
                .map((d) => {
                  const m = parseInt(d.trim(), 10);
                  return isNaN(m)
                    ? ""
                    : m >= 1 && m <= 26
                      ? String.fromCharCode(m + 64)
                      : "?";
                })
                .join("")
            : "",
        )
        .join(" ");
    }
    function Lab16({ onSuccess: a }) {
      const [n, i] = reactExports.useState("symmetric"),
        [l, c] = reactExports.useState(""),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(0),
        [b, k] = reactExports.useState(""),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(
          "Xin chào! Nhập mật khẩu bất kỳ và bấm vào tôi để bắt đầu tiến hành bẻ khóa thử nhé! 💻",
        ),
        [R, z] = reactExports.useState("info"),
        [A, O] = reactExports.useState(!1),
        [L, le] = reactExports.useState(""),
        [P, G] = reactExports.useState(!1),
        [ee, ce] = reactExports.useState(""),
        [V, pe] = reactExports.useState(!1),
        [Ie, se] = reactExports.useState(""),
        [de, _] = reactExports.useState(""),
        [U, Z] = reactExports.useState(""),
        [be, he] = reactExports.useState(""),
        [E, v] = reactExports.useState(!1),
        [K, te] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        a();
      }, [a]);
      const [je, Se] = reactExports.useState(""),
        [He, Xe] = reactExports.useState(
          "Chào mừng bạn đến với phòng lab mật mã 🔐",
        ),
        [Qe, qe] = reactExports.useState(""),
        [at, ze] = reactExports.useState(""),
        [De, tt] = reactExports.useState(""),
        [it, oe] = reactExports.useState(""),
        [ie, ge] = reactExports.useState(""),
        [ae, Ae] = reactExports.useState(""),
        [Q, Te] = reactExports.useState(!1),
        [$e, _e] = reactExports.useState(!1),
        [Ue, Ke] = reactExports.useState(""),
        [ot, w] = reactExports.useState(""),
        [C, Ee] = reactExports.useState(""),
        [ke, We] = reactExports.useState(!1),
        [ht, lt] = reactExports.useState(
          "Nội dung đề thi giữa kỳ được bảo mật tuyệt đối!",
        ),
        [Fe, rt] = reactExports.useState(""),
        [yt, xt] = reactExports.useState(""),
        [ve, Ye] = reactExports.useState(""),
        [mt, Dt] = reactExports.useState(!1),
        [ye, H] = reactExports.useState(""),
        [me, Le] = reactExports.useState("Học mật mã học chuẩn IC3 GS6"),
        [Pe, W] = reactExports.useState("sha256"),
        [Me, et] = reactExports.useState("MAT MA HOC RAT THU VI"),
        [Je, Et] = reactExports.useState(""),
        [ft, Mt] = reactExports.useState(""),
        [D, Re] = reactExports.useState(""),
        [Ve, Ge] = reactExports.useState({}),
        [Ze, Nt] = reactExports.useState(!1),
        [Kt, It] = reactExports.useState(!1),
        wt = () => {
          const q = Array.from({ length: 16 }, () =>
            Math.floor(Math.random() * 16).toString(16),
          )
            .join("")
            .toUpperCase();
          (Se(q), qe(q), oe(""), ze(""), tt(""), ge(""), Ae(""), Te(!1));
        },
        Ls = () => {
          je &&
            (navigator.clipboard.writeText(je),
            _e(!0),
            setTimeout(() => _e(!1), 2e3));
        },
        Ot = () => {
          if (!Qe) return;
          const q = symmetricEncrypt(He, Qe);
          (ze(q), tt(q), oe(je), ge(""), Ae(""), Te(!1));
        },
        Ce = () => {
          if (Q) {
            (Ae(
              "Tính toàn vẹn bị vi phạm! Dữ liệu bản mật mã đã bị hacker chỉnh sửa hoặc can thiệp trái phép! (Sai lệch mã kiểm tra sum_...)",
            ),
              ge(""));
            return;
          }
          const q = symmetricDecrypt(at, it);
          q.success
            ? (ge(q.data), Ae(""))
            : (Ae(q.error || "Giải mã thất bại!"), ge(""));
        },
        st = () => {
          if ((Te(!0), De)) {
            const q = De.replace(":pay_", ":pay_corrupted_");
            ze(q);
          }
        },
        At = () => {
          const q = "RSA_PRIVATE_KEY_" + Math.floor(1e5 + Math.random() * 9e5),
            bt = "RSA_PUBLIC_KEY_" + sha256(q).substring(0, 10).toUpperCase(),
            vt = `PUB-${sha256(bt).substring(0, 6).toUpperCase()}`;
          (Ke(q), w(bt), Ee(vt), We(!1), rt(""), xt(""), Ye(""), Dt(!1));
        },
        Lt = () => {
          We(!0);
        },
        Zt = () => {
          const q = asymmetricEncrypt(ht, ot);
          (rt(q), H(q), xt(""), Ye(""), Dt(!1));
        },
        Vt = () => {
          if (mt) {
            (Ye(
              "Cảnh báo bảo mật: Tính toàn vẹn bị vi phạm! Bản mật mã mã hoá đã bị hacker sửa đổi hoặc can thiệp trên đường truyền mạng! (Chữ ký sig_... của người gửi không khớp)",
            ),
              xt(""));
            return;
          }
          const q = asymmetricDecrypt(Fe, Ue, ot);
          q.success
            ? (xt(q.data), Ye(""))
            : (Ye(q.error || "Giải mã thất bại!"), xt(""));
        },
        Ut = () => {
          if ((Dt(!0), ye)) {
            const q = ye.replace(":ct_", ":ct_corrupted_");
            rt(q);
          }
        },
        hs = () => (Pe === "sha1" ? sha1(me) : sha256(me)),
        Xs = () => {
          const q = encodeA1Z26(Me);
          (Et(q), Mt(q), Re(""));
        },
        ws = () => {
          const q = decodeA1Z26(ft);
          Re(q);
        },
        fs = (q) => {
          if (!q)
            return {
              score: 0,
              label: "Trống",
              color:
                "text-slate-400 bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800",
              barColor: "bg-slate-300",
              percent: 0,
            };
          const vt = [
              "123456",
              "12345678",
              "123456789",
              "12345",
              "1234567",
              "password",
              "1234567890",
              "admin",
              "qwerty",
              "111111",
              "123123",
              "chaoem",
              "matkhau",
              "123456a",
              "anhyeuem",
            ].includes(q.toLowerCase()),
            { seconds: Ct } = F(q),
            St = Ct / 31536e3,
            _t = q.length >= 8,
            ns = /[a-z]/.test(q) && /[A-Z]/.test(q),
            Xt = /[0-9]/.test(q),
            as = /[^a-zA-Z0-9]/.test(q),
            Ft = (_t ? 1 : 0) + (ns ? 1 : 0) + (Xt ? 1 : 0) + (as ? 1 : 0);
          let Tt = 0,
            T = "",
            Oe = "",
            dt = "",
            gt = 0;
          return (
            vt || Ct < 300
              ? ((T = "Rất yếu"),
                (Oe =
                  "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-950"),
                (dt = "bg-rose-600"),
                (gt = 20),
                (Tt = 1))
              : St >= 1e15 || (q.length >= 20 && Ft >= 2)
                ? ((T = "Rất mạnh"),
                  (Oe =
                    "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-950"),
                  (dt = "bg-blue-600"),
                  (gt = 100),
                  (Tt = 4))
                : St > 100 && Ft >= 3
                  ? ((T = "Mạnh"),
                    (Oe =
                      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-950"),
                    (dt = "bg-emerald-500"),
                    (gt = 80),
                    (Tt = 3))
                  : ((T = "Yếu / Trung bình"),
                    (Oe =
                      "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900"),
                    (dt = "bg-orange-500"),
                    (gt = 50),
                    (Tt = 2)),
            { score: Tt, label: T, color: Oe, barColor: dt, percent: gt }
          );
        },
        Bs = (q) =>
          q === 0
            ? "0 giây"
            : q < 0.001
              ? `${q.toLocaleString("vi-VN", { maximumFractionDigits: 6 })} giây`
              : q < 1
                ? `${q.toLocaleString("vi-VN", { maximumFractionDigits: 4 })} giây`
                : q < 60
                  ? `${q.toLocaleString("vi-VN", { maximumFractionDigits: 2 })} giây`
                  : `${Math.round(q).toLocaleString("vi-VN")} giây`,
        F = (q) => {
          if (!q)
            return {
              seconds: 0,
              formatted: "0 giây",
              friendly: "Tức thì (0 giây)",
            };
          if (
            [
              "123456",
              "12345678",
              "123456789",
              "12345",
              "1234567",
              "password",
              "1234567890",
              "admin",
              "qwerty",
              "111111",
              "123123",
              "chaoem",
              "matkhau",
              "123456a",
              "anhyeuem",
            ].includes(q.toLowerCase())
          )
            return {
              seconds: 0,
              formatted: "0 giây",
              friendly: "Tức thì (0 giây - mật khẩu siêu phổ biến)",
            };
          let vt = 0;
          (/[a-z]/.test(q) && (vt += 26),
            /[A-Z]/.test(q) && (vt += 26),
            /[0-9]/.test(q) && (vt += 10),
            /[^a-zA-Z0-9]/.test(q) && (vt += 32),
            vt === 0 && (vt = 1));
          const Ct = q.length,
            ns = Math.pow(vt, Ct) / 2e9,
            Xt = Bs(ns);
          let as = "";
          if (ns < 0.001) as = "Tức thì (Dưới 1 mili-giây)";
          else if (ns < 1) as = "Tức thì (Chưa đầy 1 giây)";
          else if (ns < 60)
            as = `${ns.toLocaleString("vi-VN", { maximumFractionDigits: 1 })} giây`;
          else {
            const Ft = ns / 60,
              Tt = Ft / 60,
              T = Tt / 24,
              Oe = T / 365;
            Ft < 60
              ? (as = `Khoảng ${Math.round(Ft).toLocaleString("vi-VN")} phút`)
              : Tt < 24
                ? (as = `Khoảng ${Math.round(Tt).toLocaleString("vi-VN")} giờ`)
                : T < 365
                  ? (as = `Khoảng ${Math.round(T).toLocaleString("vi-VN")} ngày`)
                  : Oe < 1e3
                    ? (as = `Khoảng ${Math.round(Oe).toLocaleString("vi-VN")} năm`)
                    : (as = `Khoảng ${Oe.toExponential(2).replace(".", ",")} năm`);
          }
          return { seconds: ns, formatted: Xt, friendly: as };
        },
        Be = (q) =>
          q
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D"),
        S = () => {
          if (!de.trim()) {
            alert("Vui lòng nhập tên của bạn trước nhé!");
            return;
          }
          const q = Be(de.trim()).replace(/[^a-zA-Z]/g, "");
          if (q.length === 0) {
            alert(
              "Vui lòng nhập tên chứa chữ cái tiếng Việt hoặc tiếng Anh hợp lệ!",
            );
            return;
          }
          const bt = q
              .split("")
              .map((Ft, Tt) =>
                Tt % 2 === 0 ? Ft.toUpperCase() : Ft.toLowerCase(),
              )
              .join("_"),
            vt = ["@", "#", "$", "*", "!", "&", "?"],
            Ct = vt[Math.floor(Math.random() * vt.length)],
            St = vt[(Math.floor(Math.random() * vt.length) + 1) % vt.length],
            _t = Math.floor(Math.random() * 8) + 1,
            ns = ((_t + 3) % 9) + 1,
            Xt = ((_t + 6) % 9) + 1,
            as = `${Ct}${bt}_${_t}${St}${ns}_SeCuRe${Xt}`;
          (Z(as),
            he(`Mật khẩu đề xuất cho bạn là: "${as}" (Độ dài ${as.length} ký tự).
• Đã cá nhân hóa dựa trên tên "${de.trim()}" viết xen kẽ hoa-thường và ngăn cách bởi ký tự gạch dưới.
• Được chèn xen kẽ ký tự đặc biệt (${Ct}, ${St}) và các chữ số ngẫu nhiên không liên tiếp (${_t}, ${ns}, ${Xt}) ở giữa mật khẩu.
• Kết thúc bằng từ khóa bảo mật phối hợp viết hoa thường "_SeCuRe" để đạt độ dài lý tưởng phòng chống Brute Force tuyệt đối.
👉 Mật khẩu này chứa đầy đủ chữ hoa, chữ thường, số, ký tự đặc biệt, không có cấu trúc khuôn mẫu thông thường và có thời gian bẻ khóa lý thuyết lên tới HÀNG TỶ NĂM!`));
        },
        J = (q) => {
          if (!q)
            return {
              behavioralWeakness: "Mật khẩu trống",
              realCrackTime: "Không khả dụng",
              realCrackTimeColor: "text-slate-400",
            };
          const vt = [
              "123456",
              "12345678",
              "123456789",
              "12345",
              "1234567",
              "password",
              "1234567890",
              "admin",
              "qwerty",
              "111111",
              "123123",
              "chaoem",
              "matkhau",
              "123456a",
              "anhyeuem",
            ].includes(q.toLowerCase()),
            Ct = q.length,
            St = (dt) => {
              for (
                let gt = Math.min(5, Math.floor(dt.length / 2));
                gt >= 3;
                gt--
              )
                for (let Rt = 0; Rt <= dt.length - 2 * gt; Rt++) {
                  const ps = dt.substring(Rt, Rt + gt);
                  if (dt.substring(Rt + gt).includes(ps)) return ps;
                }
              return null;
            },
            _t = (dt) => {
              const gt = [
                  "123",
                  "234",
                  "345",
                  "456",
                  "567",
                  "678",
                  "789",
                  "abc",
                  "bcd",
                  "cde",
                  "def",
                  "efg",
                  "fgh",
                  "ghi",
                  "hij",
                  "qwerty",
                  "asdf",
                  "zxcv",
                ],
                Rt = dt.toLowerCase();
              for (const ps of gt) if (Rt.includes(ps)) return ps;
              return null;
            },
            ns = St(q),
            Xt = _t(q),
            as = (dt) => {
              if (dt.length < 8 || dt.length > 12) return !1;
              const gt = /^[A-Z]/.test(dt),
                Rt = /[0-9!@#$%^&*()_+={}\[\]|\\:;"'<>,.?\/~`\-]$/.test(dt);
              return gt && Rt;
            };
          let Ft = "",
            Tt = "",
            T = "";
          const { seconds: Oe } = F(q);
          if (vt)
            ((Ft =
              "Mật khẩu siêu phổ biến, nằm trong danh mục từ điển nhạy cảm"),
              (Tt = "< 1 giây (Bị phát hiện ngay lập tức bằng từ điển)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (Ct < 8)
            ((Ft = "Mật khẩu quá ngắn (Dưới 8 ký tự, dễ bị bẻ khóa vét cạn)"),
              (Tt = "< 1 giây (Brute force dò vét cạn siêu nhanh)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (
            !/[A-Z]/.test(q) &&
            !/[0-9]/.test(q) &&
            !/[^a-zA-Z0-9]/.test(q)
          )
            ((Ft = "Chỉ dùng chữ thường (Dễ bị cô lập vùng quét mặt nạ)"),
              (Tt = "< 1 giây (Quét từ điển/Mặt nạ)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (!/[a-zA-Z]/.test(q))
            ((Ft = "Chỉ chứa chữ số (Tập ký tự cực hẹp, dò vét số cực nhanh)"),
              (Tt = "< 1 giây (Dò số liên tục)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (ns && Ct < 12)
            ((Ft = `Chứa chuỗi lặp lại '${ns}' và độ dài ngắn (Bị dò đoán mẫu hành vi)`),
              (Tt = "< 1 giây (Tấn công từ điển/mặt nạ thông minh)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (Xt && Ct < 12)
            ((Ft = `Chứa chuỗi tuần tự '${Xt}' và độ dài ngắn (Dễ bị đoán trước)`),
              (Tt = "< 1 giây (Quét từ điển / Mặt nạ thông minh)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else if (as(q))
            ((Ft =
              "Cấu trúc đặt mật khẩu theo khuôn mẫu thông thường (Chữ hoa -> Chữ thường -> Số/Ký tự đặc biệt)"),
              (Tt =
                "< 1 giây (Tấn công mặt nạ thông minh ưu tiên quét mẫu này)"),
              (T = "text-rose-600 dark:text-rose-400"));
          else {
            const dt = [];
            (/[a-z]/.test(q) || dt.push("chữ thường"),
              /[A-Z]/.test(q) || dt.push("chữ hoa"),
              /[0-9]/.test(q) || dt.push("chữ số"),
              /[^a-zA-Z0-9]/.test(q) || dt.push("ký tự đặc biệt"),
              dt.length >= 2
                ? ((Ft = `Thiếu nhiều nhóm ký tự (${dt.join(", ")})`),
                  (Tt = "< 1 giây (Quét mặt nạ / đoán mẫu)"),
                  (T = "text-rose-600 dark:text-rose-400"))
                : dt.length === 1
                  ? Ct >= 16
                    ? ((Ft = `Mật khẩu dài tốt nhưng thiếu nhóm ${dt[0]} (Có thể tối ưu hóa lọc quét)`),
                      (Tt = "Vài phút đến vài giờ (Dò vét cụm lọc)"),
                      (T = "text-orange-500 dark:text-orange-400"))
                    : ((Ft = `Thiếu nhóm ${dt[0]} và độ dài trung bình (Dễ bị cô lập vùng quét)`),
                      (Tt = "< 1 giây (Quét từ điển / Mặt nạ)"),
                      (T = "text-rose-600 dark:text-rose-400"))
                  : ns
                    ? ((Ft = `Có tất cả nhóm ký tự nhưng chứa chuỗi lặp lại '${ns}'`),
                      Ct < 15
                        ? ((Tt = "Vài giây đến vài phút (Tấn công đoán mẫu)"),
                          (T = "text-orange-500 dark:text-orange-400"))
                        : ((Tt =
                            "Vài giờ đến vài ngày (Rút ngắn thời gian nhờ tối ưu hóa vùng quét)"),
                          (T = "text-amber-500 dark:text-amber-400")))
                    : Xt
                      ? ((Ft = `Có tất cả nhóm ký tự nhưng chứa chuỗi tuần tự '${Xt}'`),
                        Ct < 15
                          ? ((Tt = "Vài giây đến vài phút (Tấn công đoán mẫu)"),
                            (T = "text-orange-500 dark:text-orange-400"))
                          : ((Tt =
                              "Vài giờ đến vài ngày (Rút ngắn thời gian nhờ tối ưu hóa vùng quét)"),
                            (T = "text-amber-500 dark:text-amber-400")))
                      : ((Ft =
                          "Không phát hiện điểm yếu hành vi (Cấu trúc trộn lẫn ngẫu nhiên cực tốt)"),
                        Oe <= 300
                          ? ((Tt =
                              "< 5 phút (Vét cạn siêu nhanh vì độ dài quá ngắn)"),
                            (T = "text-rose-600 dark:text-rose-400"))
                          : ((Tt = `${F(q).friendly} (Đạt độ an toàn lý thuyết tuyệt đối)`),
                            (T = "text-emerald-600 dark:text-emerald-400"))));
          }
          return {
            behavioralWeakness: Ft,
            realCrackTime: Tt,
            realCrackTimeColor: T,
          };
        },
        pt = (q) => {
          if (!q) return null;
          const bt = /[a-z]/.test(q),
            vt = /[A-Z]/.test(q),
            Ct = /[0-9]/.test(q),
            St = /[^a-zA-Z0-9]/.test(q),
            _t = bt ? 26 : 0,
            ns = vt ? 26 : 0,
            Xt = Ct ? 10 : 0,
            as = St ? 32 : 0,
            Ft = _t + ns + Xt + as || 1,
            Tt = q.length;
          let T;
          try {
            T = BigInt(Ft) ** BigInt(Tt);
          } catch {
            T = BigInt(0);
          }
          const Oe = (Hn) => Hn.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            dt = Oe(T.toString()),
            Rt = Number(T) / 2e9;
          let ps = "";
          Rt < 0.001
            ? (ps = Rt.toLocaleString("vi-VN", { maximumFractionDigits: 6 }))
            : Rt < 1
              ? (ps = Rt.toLocaleString("vi-VN", { maximumFractionDigits: 4 }))
              : Rt < 60
                ? (ps = Rt.toLocaleString("vi-VN", {
                    maximumFractionDigits: 2,
                  }))
                : (ps = Oe(Math.round(Rt).toString()));
          let Pt = "";
          T >= BigInt(10) ** BigInt(15)
            ? (Pt = `hơn ${Number(T / BigInt(10) ** BigInt(15)).toLocaleString("vi-VN")} triệu tỷ`)
            : T >= BigInt(10) ** BigInt(12)
              ? (Pt = `hơn ${Number(T / BigInt(10) ** BigInt(12)).toLocaleString("vi-VN")} nghìn tỷ`)
              : T >= BigInt(10) ** BigInt(9)
                ? (Pt = `hơn ${Number(T / BigInt(10) ** BigInt(9)).toLocaleString("vi-VN")} tỷ`)
                : T >= BigInt(10) ** BigInt(6) &&
                  (Pt = `hơn ${Number(T / BigInt(10) ** BigInt(6)).toLocaleString("vi-VN")} triệu`);
          const ms = Rt / 31536e3;
          let xs = "";
          ms >= 1e3
            ? (xs = ms.toExponential(2).replace(".", ","))
            : (xs = ms.toLocaleString("vi-VN", { maximumFractionDigits: 2 }));
          const { friendly: Qs } = F(q),
            ks = [];
          (bt && ks.push("26"),
            vt && ks.push("26"),
            Ct && ks.push("10"),
            St && ks.push("32"));
          const sa = ks.length > 0 ? ks.join(" + ") : "0";
          let Ws = "Rất thấp";
          Ft >= 50 && Tt >= 12
            ? (Ws = "Rất cao")
            : Ft >= 36 && Tt >= 10
              ? (Ws = "Cao")
              : Ft >= 26 && Tt >= 8
                ? (Ws = "Trung bình")
                : Tt >= 6 && (Ws = "Thấp");
          const Zs = (bt ? 1 : 0) + (vt ? 1 : 0) + (Ct ? 1 : 0) + (St ? 1 : 0),
            Mn = (Tt >= 12 && Zs >= 3) || (Tt >= 15 && Zs >= 2);
          return {
            hasLower: bt,
            hasUpper: vt,
            hasDigit: Ct,
            hasSpecial: St,
            countLower: _t,
            countUpper: ns,
            countDigit: Xt,
            countSpecial: as,
            N: Ft,
            L: Tt,
            combinationsStr: dt,
            scaleLabel: Pt,
            seconds: Rt,
            secondsStr: ps,
            years: ms,
            yearsStr: xs,
            friendly: Qs,
            sumExpression: sa,
            complexityLabel: Ws,
            isHighlyResistant: Mn,
          };
        },
        nt = () => {
          if (u) return;
          if (!l) {
            (I("Vui lòng nhập mật khẩu trước khi bẻ khóa chứ! 😾"),
              z("warning"));
            return;
          }
          const q = fs(l),
            { seconds: bt, friendly: vt, formatted: Ct } = F(l);
          if (bt > 300) {
            if (q.label.includes("Rất mạnh") || q.label.includes("Mạnh"))
              (I(
                `Mật khẩu này quá mạnh (${q.label})! Thời gian bẻ khóa lý thuyết ước tính lên tới ${vt}. Tôi chỉ được thiết kế để chạy mô phỏng bẻ khóa mật khẩu dưới 5 phút, do vậy tôi xin đầu hàng! 😭🔒`,
              ),
                z("error"));
            else {
              const { behavioralWeakness: Xt, realCrackTime: as } = J(l);
              (I(
                `Mật khẩu này có mức bảo mật là [${q.label}]. Trên lý thuyết toán học cần đến ${vt} để vét cạn, tuy nhiên trong thực tế do điểm yếu hành vi: "${Xt}", hacker bẻ khóa trong ${as}. Vì tôi chỉ được thiết kế để mô phỏng bẻ khóa trực tiếp mật khẩu dưới 5 phút (tránh làm đơ trình duyệt), nên tôi không chạy mô phỏng vét cạn, nhưng thực tế mật khẩu này VẪN CỰC KỲ YẾU! ⚠️💀`,
              ),
                z("warning"));
            }
            M(null);
            return;
          }
          (g(!0), f(0), M(null), z("info"));
          const St = [
            "Đang quét cấu trúc mật khẩu...",
            "Bắt đầu dò tìm từ điển...",
            "Thử bẻ khóa bằng brute-force...",
            "Tìm thấy tiền tố phù hợp...",
            "Xác minh chữ ký băm...",
            "Bẻ khóa thành công!",
          ];
          let _t = 0;
          const ns = setInterval(() => {
            if (((_t += 5), _t >= 100))
              ((_t = 100),
                clearInterval(ns),
                g(!1),
                f(100),
                M(l),
                m(!0),
                I(
                  "Bẻ khóa thành công rồi nhé! Mật khẩu này yếu quá nên tôi chỉ mất chưa tới 5 phút. Hãy xem mật khẩu đã bẻ khóa ở dưới xem có khớp không nhé! 😈",
                ),
                z("success"));
            else {
              f(_t);
              const Xt = Math.floor((_t / 100) * St.length);
              (k(St[Xt] || "Đang bẻ khóa..."),
                I(`💻 Đang bẻ khóa mật khẩu: ${St[Xt]} (${_t}%)`));
            }
          }, 100);
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 animate-fadeIn text-left w-full",
        id: "lab16-workspace",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4",
            children: [
              jsxRuntimeExports.jsxs("div", {
                children: [
                  jsxRuntimeExports.jsxs("h2", {
                    className:
                      "text-xl font-extrabold flex items-center gap-2 text-slate-800 dark:text-slate-100",
                    children: [
                      jsxRuntimeExports.jsx(Lock, {
                        className: "h-5 w-5 text-indigo-600",
                      }),
                      "5 Công Cụ Mật Mã Trực Quan",
                    ],
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-500 font-semibold mt-1",
                    children:
                      "Tìm hiểu nguyên lý của các thuật toán bảo mật cốt lõi qua mô phỏng tương tác.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "flex flex-wrap gap-1.5 bg-slate-100 dark:bg-slate-950 p-1 rounded-3xl border border-slate-200 dark:border-slate-800 self-start md:self-auto",
                children: [
                  {
                    id: "symmetric",
                    label: "Symmetric",
                    icon: Key,
                    color: "text-amber-500",
                  },
                  {
                    id: "asymmetric",
                    label: "Asymmetric",
                    icon: LockOpen,
                    color: "text-indigo-500",
                  },
                  {
                    id: "hashing",
                    label: "Hashing",
                    icon: Hash,
                    color: "text-emerald-500",
                  },
                  {
                    id: "a1z26",
                    label: "Algorithmic cổ điển",
                    icon: Binary,
                    color: "text-rose-500",
                  },
                  {
                    id: "check_password",
                    label: "Check Password",
                    icon: ShieldCheck,
                    color: "text-blue-500",
                  },
                ].map((q) => {
                  const bt = q.icon,
                    vt = n === q.id;
                  return jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        (i(q.id), Ae(""), Ye(""));
                      },
                      className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-medium font-black flex items-center gap-1.5 transition-all cursor-pointer ${vt ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"}`,
                      children: [
                        jsxRuntimeExports.jsx(bt, {
                          className: `h-3.5 w-3.5 ${q.color}`,
                        }),
                        jsxRuntimeExports.jsx("span", { children: q.label }),
                      ],
                    },
                    q.id,
                  );
                }),
              }),
            ],
          }),
          jsxRuntimeExports.jsx("div", {
            className: "w-full",
            children: jsxRuntimeExports.jsxs(AnimatePresence, {
              mode: "wait",
              children: [
                n === "symmetric" &&
                  jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className:
                        "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-8 w-8 rounded-3xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                  children: "AES",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("h3", {
                                      className:
                                        "text-sm sm:text-base font-extrabold uppercase tracking-wide text-amber-600",
                                      children: "Mã hóa đối xứng (Symmetric)",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-400 font-bold",
                                      children:
                                        "Mô phỏng Mã hóa đối xứng AES-GCM qua truyền thông điệp của Linh & Minh",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300",
                              children: "Dùng chung 1 khóa duy nhất",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-8 sm:p-5 bg-amber-50/40 dark:bg-slate-800/40 border border-amber-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-600 dark:text-slate-350 leading-relaxed",
                          children: [
                            "💬 ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Kịch bản:",
                            }),
                            " Linh muốn gửi cho Minh một tin nhắn bí mật. Vì sử dụng mã hóa đối xứng (AES-GCM), Linh sẽ tạo một ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Khóa chung bí mật",
                            }),
                            ", dùng nó để mã hóa văn bản thành ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Bản mật mã (Ciphertext)",
                            }),
                            ". Sau đó, Linh gửi cả Khóa chung và Bản mật mã cho Minh. Hãy xem điều gì xảy ra nếu có Hacker rình rập trên đường truyền mạng!",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "space-y-3 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                                  children: [
                                    jsxRuntimeExports.jsx(Key, {
                                      className: "h-4 w-4 text-amber-500",
                                    }),
                                    "BƯỚC 1: Linh Tạo Khóa Chung Bí Mật",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: wt,
                                  className:
                                    "px-5 sm:px-5 py-3 rounded-3xl bg-amber-500 hover:bg-amber-600 text-white text-sm sm:text-base font-semibold font-black flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 hover:scale-103 transition-all shadow-xs",
                                  children: [
                                    jsxRuntimeExports.jsx(RefreshCw, {
                                      className: "h-3 w-3",
                                    }),
                                    " Tạo khóa ngẫu nhiên",
                                  ],
                                }),
                              ],
                            }),
                            je
                              ? jsxRuntimeExports.jsx("div", {
                                  className: "space-y-2",
                                  children: jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex items-center justify-between bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 font-mono text-sm sm:text-base font-medium text-amber-600 font-bold",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 truncate",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className: "text-slate-400",
                                            children: "KHÓA CHUNG:",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className: "truncate",
                                            children: je,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: Ls,
                                        className:
                                          "p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors flex items-center gap-1 shrink-0 ml-2",
                                        title: "Copy khóa",
                                        children: [
                                          jsxRuntimeExports.jsx(Copy, {
                                            className: "h-3.5 w-3.5",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold",
                                            children: $e
                                              ? "Đã copy!"
                                              : "Copy nhanh",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                })
                              : jsxRuntimeExports.jsx("p", {
                                  className:
                                    "text-center py-3 text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                  children:
                                    'Linh cần tạo khóa chung bằng cách bấm nút "Tạo khóa ngẫu nhiên".',
                                }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                              children: [
                                jsxRuntimeExports.jsx(FileText, {
                                  className: "h-4 w-4 text-blue-500",
                                }),
                                "BƯỚC 2: Linh Nhập Tin Nhắn & Mã Hóa Bằng Khóa Chung",
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase block",
                                      children: "Tin nhắn gốc của Linh:",
                                    }),
                                    jsxRuntimeExports.jsx("textarea", {
                                      value: He,
                                      onChange: (q) => {
                                        (Xe(q.target.value),
                                          ze(""),
                                          tt(""),
                                          ge(""));
                                      },
                                      className:
                                        "w-full text-sm sm:text-base font-medium p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-medium focus:ring-1 focus:ring-amber-500",
                                      rows: 2,
                                      placeholder:
                                        "Nhập nội dung Linh muốn gửi...",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase block",
                                      children: "Khóa mã hóa (Khóa chung):",
                                    }),
                                    jsxRuntimeExports.jsx("input", {
                                      type: "text",
                                      value: Qe,
                                      onChange: (q) => {
                                        (qe(q.target.value),
                                          ze(""),
                                          tt(""),
                                          ge(""));
                                      },
                                      className:
                                        "w-full text-sm sm:text-base font-medium font-mono p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-bold text-amber-600",
                                      placeholder:
                                        "Nhập khóa chung dùng để mã hóa...",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("button", {
                              onClick: Ot,
                              disabled: !Qe || !He,
                              className:
                                "w-full py-3 rounded-3xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-750 dark:hover:bg-slate-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs disabled:opacity-50",
                              children: [
                                jsxRuntimeExports.jsx(Lock, {
                                  className: "h-3.5 w-3.5 text-amber-400",
                                }),
                                "Linh Tiến Hành Mã Hóa 🔒",
                              ],
                            }),
                          ],
                        }),
                        at &&
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                                    children: [
                                      jsxRuntimeExports.jsx(Send, {
                                        className: "h-4 w-4 text-emerald-500",
                                      }),
                                      "BƯỚC 3: Linh Gửi Khóa Chung và Bản Mật Mã Qua Mạng",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: st,
                                    disabled: Q,
                                    className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black flex items-center gap-1 cursor-pointer transition-all ${Q ? "bg-rose-500/10 text-rose-500 border border-rose-200 dark:border-rose-950 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-700 text-white shadow-xs animate-pulse"}`,
                                    children: [
                                      jsxRuntimeExports.jsx(ShieldAlert, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " Mô phỏng Hacker tấn công ⚡",
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "bg-white dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                        children:
                                          "Dữ liệu truyền tải trên đường truyền mạng:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm sm:text-base font-medium font-mono",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "p-8 sm:p-5 bg-amber-50/40 dark:bg-amber-950/10 rounded border border-amber-100 dark:border-amber-950/40",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-slate-400 font-bold text-sm sm:text-base font-semibold block",
                                                children:
                                                  "KHÓA CHUNG ĐANG GỬI:",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-amber-600 font-extrabold",
                                                children: je,
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "p-8 sm:p-5 bg-blue-50/40 dark:bg-blue-950/10 rounded border border-blue-100 dark:border-blue-950/40 break-all",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-slate-400 font-bold text-sm sm:text-base font-semibold block",
                                                children:
                                                  "CIPHERTEXT ĐANG GỬI:",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-blue-600 dark:text-blue-400 font-bold",
                                                children: at,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Q
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-950 rounded-3xl space-y-3 animate-slideUp",
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-extrabold text-rose-600 flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                TriangleAlert,
                                                {
                                                  className:
                                                    "h-4 w-4 shrink-0 animate-bounce",
                                                },
                                              ),
                                              "🚨 CẢNH BÁO BẢO MẬT: HACKER ĐÃ ĐÁNH CẮP KHÓA & BẢN TIN!",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-medium space-y-2 leading-relaxed",
                                            children: [
                                              jsxRuntimeExports.jsxs("p", {
                                                children: [
                                                  "🕵️‍♂️ ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Đánh cắp thông tin:",
                                                    },
                                                  ),
                                                  " Vì Linh gửi cả ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Khóa chung bí mật",
                                                    },
                                                  ),
                                                  " và bản tin đã mã hóa chung một kênh truyền, hacker đã ngửi (sniff) mạng và đánh cắp thành công cả hai!",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "bg-slate-100 dark:bg-slate-900 p-8 sm:p-5 rounded border border-slate-200 dark:border-slate-800 space-y-1 font-mono text-sm sm:text-base font-semibold",
                                                children: [
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className: "text-rose-600",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          children:
                                                            "[HACKER STOLE KEY]:",
                                                        },
                                                      ),
                                                      " ",
                                                      je,
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className: "text-rose-600",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          children:
                                                            "[HACKER STOLE CIPHER]:",
                                                        },
                                                      ),
                                                      " ",
                                                      De,
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className:
                                                      "text-emerald-600",
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          children:
                                                            "[HACKER DECRYPTED ORIGINAL MESS]:",
                                                        },
                                                      ),
                                                      ' "',
                                                      He,
                                                      '"',
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-rose-600 font-bold",
                                                children:
                                                  "⚠️ Do có khóa chung bí mật, hacker dễ dàng giải mã và đọc trộm được 100% tin nhắn gốc của Linh! Đây là lỗ hổng phân phối khóa nghiêm trọng của mật mã đối xứng.",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "border-t border-rose-100 dark:border-rose-950/50 pt-2",
                                                children: [
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className:
                                                      "text-slate-700 dark:text-slate-350 font-bold",
                                                    children: [
                                                      "⚙️ ",
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          children:
                                                            "Hành vi phá hoại:",
                                                        },
                                                      ),
                                                      " Ngoài việc đọc trộm, Hacker còn sửa đổi trực tiếp dữ liệu trên đường truyền:",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className: "mt-1 font-bold",
                                                    children: [
                                                      "- Đã sửa đổi ký tự: đổi nhãn cấu trúc ",
                                                      jsxRuntimeExports.jsx(
                                                        "code",
                                                        {
                                                          className:
                                                            "bg-rose-100 dark:bg-rose-950/60 px-1 py-0.5 rounded text-rose-700 font-mono text-[9px]",
                                                          children: ":pay_",
                                                        },
                                                      ),
                                                      " thành ",
                                                      jsxRuntimeExports.jsx(
                                                        "code",
                                                        {
                                                          className:
                                                            "bg-rose-200 dark:bg-rose-950 text-rose-800 px-1 py-0.5 rounded font-mono text-[9px]",
                                                          children:
                                                            ":pay_corrupted_",
                                                        },
                                                      ),
                                                      ".",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs("p", {
                                                    className: "mt-1",
                                                    children: [
                                                      "Bản mật mã truyền đi bây giờ bị lỗi, khiến mã băm kiểm tra tính toàn vẹn ",
                                                      jsxRuntimeExports.jsx(
                                                        "code",
                                                        {
                                                          className:
                                                            "font-mono text-[9px]",
                                                          children: "sum_...",
                                                        },
                                                      ),
                                                      " không còn chính xác!",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-8 sm:p-5 bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-950 rounded-3xl",
                                        children: jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "h-2 w-2 rounded-full bg-emerald-500 animate-ping",
                                            }),
                                            "🟢 Đường truyền an toàn: Khóa và Bản mật mã đang được gửi nguyên vẹn tới Minh.",
                                          ],
                                        }),
                                      }),
                                ],
                              }),
                            ],
                          }),
                        at &&
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                            children: [
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                                children: [
                                  jsxRuntimeExports.jsx(LockOpen, {
                                    className: "h-4 w-4 text-indigo-500",
                                  }),
                                  "BƯỚC 4: Minh Nhận Được Bản Tin & Tiến Hành Giải Mã",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base font-medium font-mono",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-slate-400 font-black text-sm sm:text-base font-semibold block",
                                            children:
                                              "CIPHERTEXT MINH NHẬN ĐƯỢC:",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-slate-700 dark:text-slate-300 break-all",
                                            children: at,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-slate-100 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-800",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-slate-400 font-black text-sm sm:text-base font-semibold block",
                                            children: "KHÓA MINH NHẬN ĐƯỢC:",
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "text",
                                            value: it,
                                            onChange: (q) => {
                                              (oe(q.target.value),
                                                ge(""),
                                                Ae(""));
                                            },
                                            className:
                                              "w-full text-sm sm:text-base font-medium font-mono font-bold text-amber-600 bg-transparent border-none p-0 focus:ring-0",
                                            placeholder: "Nhập khóa chung...",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: Ce,
                                    className:
                                      "w-full py-3 rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
                                    children: [
                                      jsxRuntimeExports.jsx(LockOpen, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " Minh Giải Mã Bản Tin 🔓",
                                    ],
                                  }),
                                ],
                              }),
                              ie &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-950 rounded-3xl text-left",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className: "h-4 w-4 shrink-0",
                                        }),
                                        "MINH GIẢI MÃ THÀNH CÔNG!",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-bold mb-1",
                                      children:
                                        "Khóa chung khớp hoàn toàn và bản mật mã truyền đi nguyên vẹn, đảm bảo tính bảo mật và toàn vẹn tuyệt đối. Tin nhắn giải mã được:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-8 sm:p-5 rounded border border-emerald-100 dark:border-emerald-950 font-mono",
                                      children: ie,
                                    }),
                                  ],
                                }),
                              ae &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-3xl text-left space-y-2",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-rose-700 dark:text-rose-400 flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(TriangleAlert, {
                                          className:
                                            "h-4 w-4 shrink-0 text-rose-600",
                                        }),
                                        "MINH GIẢI MÃ THẤT BẠI!",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 font-bold leading-relaxed",
                                      children: [
                                        "⚠️ Lỗi giải mã: ",
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-rose-600",
                                          children: ae,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium",
                                      children: [
                                        "💡 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Giải thích lý do:",
                                        }),
                                        " Hacker đã chèn chuỗi ",
                                        jsxRuntimeExports.jsx("code", {
                                          className: "font-mono text-rose-600",
                                          children: "_corrupted_",
                                        }),
                                        " vào trong bản mã. Khi thuật toán AES-GCM giải mã, nó tính lại mã băm kiểm tra tính toàn vẹn (checksum) và thấy không còn trùng khớp với phần ",
                                        jsxRuntimeExports.jsx("code", {
                                          className: "font-mono",
                                          children: "sum_...",
                                        }),
                                        " ban đầu, lập tức dừng giải mã và cảnh báo tin nhắn đã bị sửa đổi trái phép.",
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    },
                    "symmetric",
                  ),
                n === "asymmetric" &&
                  jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className:
                        "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-8 w-8 rounded-3xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                  children: "RSA",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("h3", {
                                      className:
                                        "text-sm sm:text-base font-extrabold uppercase tracking-wide text-indigo-600",
                                      children: "Mã Hoá Bất Đối Xứng RSA",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-400 font-bold",
                                      children:
                                        "Mô phỏng sử dụng cặp khóa công khai (Public) & riêng tư (Private)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300",
                              children: "Khóa mã hóa & giải mã khác nhau",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-8 sm:p-5 bg-indigo-50/40 dark:bg-slate-800/40 border border-indigo-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-600 dark:text-slate-350 leading-relaxed",
                          children: [
                            "💬 ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Kịch bản:",
                            }),
                            " Linh (Người nhận) tạo cặp khóa RSA: ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Khóa công khai (Public Key)",
                            }),
                            " để mọi người dùng mã hóa, và ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Khóa riêng tư (Private Key)",
                            }),
                            " Linh giữ riêng để giải mã. Linh gửi Public Key cho Minh. Minh dùng Public Key đó mã hóa tin nhắn rồi gửi lại bản mật mã cho Linh. Nếu Hacker đánh cắp Public Key và bản mật mã trên đường truyền, liệu họ có đọc trộm được tin nhắn như ở mã hóa đối xứng không? Hãy cùng tìm hiểu!",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5",
                                  children: jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-indigo-700 dark:text-indigo-400",
                                    children: "🏠 NGƯỜI NHẬN (Linh)",
                                  }),
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: At,
                                  className:
                                    "w-full py-3 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-semibold font-black flex items-center justify-center gap-1 cursor-pointer transition-all",
                                  children: [
                                    jsxRuntimeExports.jsx(RefreshCw, {
                                      className: "h-3 w-3",
                                    }),
                                    " 1. Khởi tạo cặp khóa RSA",
                                  ],
                                }),
                                Ue &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-2 text-sm sm:text-base font-semibold animate-slideUp",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-900 p-8 sm:p-5 rounded border border-slate-200 dark:border-slate-850 font-mono",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-red-500 font-black block",
                                            children:
                                              "🔑 PRIVATE KEY (Linh giữ tuyệt mật - Chỉ dùng để Giải Mã):",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "truncate block text-slate-500",
                                            children: Ue,
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 font-bold block mt-1",
                                            children:
                                              "💡 Khóa này Linh tuyệt đối giữ kín, không gửi cho ai.",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-white dark:bg-slate-900 p-8 sm:p-5 rounded border border-slate-200 dark:border-slate-850 font-mono",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-emerald-600 font-black block",
                                            children:
                                              "🟢 PUBLIC KEY (Gửi công khai - Chỉ dùng để Mã Hóa):",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "truncate block text-slate-500 font-extrabold",
                                            children: ot,
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "mt-1 flex items-center gap-1 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded text-indigo-700 dark:text-indigo-300 font-black text-[9px]",
                                            children: jsxRuntimeExports.jsxs(
                                              "span",
                                              {
                                                children: [
                                                  "📌 Mã nhận diện Public Key: ",
                                                  C,
                                                ],
                                              },
                                            ),
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-450 font-bold block mt-1",
                                            children:
                                              "💡 Khóa này Linh gửi cho Minh thoải mái qua mạng.",
                                          }),
                                        ],
                                      }),
                                      !ke &&
                                        jsxRuntimeExports.jsxs("button", {
                                          onClick: Lt,
                                          className:
                                            "w-full py-3 rounded-3xl bg-amber-500 hover:bg-amber-600 text-white font-black flex items-center justify-center gap-1 cursor-pointer mt-2",
                                          children: [
                                            jsxRuntimeExports.jsx(Send, {
                                              className: "h-3 w-3",
                                            }),
                                            " 2. Gửi Public Key sang cho Minh ➔",
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5",
                                  children: jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400",
                                    children: "👤 NGƯỜI GỬI (Minh)",
                                  }),
                                }),
                                ke
                                  ? jsxRuntimeExports.jsxs("div", {
                                      className: "space-y-3 animate-slideUp",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "bg-emerald-50 dark:bg-emerald-950/20 p-8 sm:p-5 rounded border border-emerald-150 text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400 font-bold space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("p", {
                                              children:
                                                "✓ Đã nhận Public Key từ Linh qua mạng Internet!",
                                            }),
                                            jsxRuntimeExports.jsxs("p", {
                                              className:
                                                "text-indigo-600 dark:text-indigo-400 font-black bg-indigo-50/50 dark:bg-slate-900 p-1 rounded font-mono text-[9px] inline-block",
                                              children: [
                                                "🔑 Đang sử dụng Public Key: ",
                                                C,
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-1",
                                          children: [
                                            jsxRuntimeExports.jsx("label", {
                                              className:
                                                "text-[9px] font-black text-slate-400 uppercase block",
                                              children:
                                                "Minh nhập văn bản cần mã hóa:",
                                            }),
                                            jsxRuntimeExports.jsx("textarea", {
                                              value: ht,
                                              onChange: (q) => {
                                                (lt(q.target.value),
                                                  rt(""),
                                                  xt(""));
                                              },
                                              className:
                                                "w-full text-sm sm:text-base font-medium p-8 sm:p-5 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-medium",
                                              rows: 2,
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("button", {
                                          onClick: Zt,
                                          className:
                                            "w-full py-3 rounded-3xl bg-slate-850 hover:bg-slate-900 dark:bg-slate-750 text-white text-sm sm:text-base font-semibold font-black flex items-center justify-center gap-1.5 cursor-pointer",
                                          children: [
                                            jsxRuntimeExports.jsx(Lock, {
                                              className:
                                                "h-3 w-3 text-indigo-400",
                                            }),
                                            " Mã hóa bằng Public Key của Linh 🔒",
                                          ],
                                        }),
                                      ],
                                    })
                                  : jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-center py-8 text-sm sm:text-base font-semibold text-slate-400 font-bold border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl",
                                      children:
                                        "Chờ Linh khởi tạo và gửi Public Key sang để bắt đầu...",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        Fe &&
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                                    children: [
                                      jsxRuntimeExports.jsx(Send, {
                                        className: "h-4 w-4 text-indigo-500",
                                      }),
                                      "Bản Mật Mã (Ciphertext) Minh Gửi Về Cho Linh Qua Mạng:",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("button", {
                                    onClick: Ut,
                                    disabled: mt,
                                    className: `px-5 sm:px-5 py-3 rounded-3xl text-sm sm:text-base font-semibold font-black flex items-center gap-1 cursor-pointer transition-all ${mt ? "bg-rose-500/10 text-rose-500 border border-rose-200 dark:border-rose-950 cursor-not-allowed" : "bg-rose-600 hover:bg-rose-700 text-white shadow-xs animate-pulse"}`,
                                    children: [
                                      jsxRuntimeExports.jsx(ShieldAlert, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " Mô phỏng Hacker tấn công ⚡",
                                    ],
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "p-8 sm:p-5 bg-indigo-50/20 dark:bg-indigo-950/10 border border-dashed border-indigo-300 dark:border-indigo-900 rounded-3xl font-mono text-sm sm:text-base font-medium text-indigo-800 dark:text-indigo-400 break-all",
                                    children: Fe,
                                  }),
                                  mt
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-950 rounded-3xl space-y-3 animate-slideUp",
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-extrabold text-rose-600 flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                TriangleAlert,
                                                {
                                                  className:
                                                    "h-4 w-4 shrink-0 animate-bounce",
                                                },
                                              ),
                                              "🚨 CẢNH BÁO BẢO MẬT: HACKER ĐÃ CAN THIỆP THÀNH CÔNG!",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-medium space-y-2 leading-relaxed",
                                            children: [
                                              jsxRuntimeExports.jsxs("p", {
                                                children: [
                                                  "🕵️‍♂️ ",
                                                  jsxRuntimeExports.jsx(
                                                    "strong",
                                                    {
                                                      children:
                                                        "Hacker đã đánh cắp:",
                                                    },
                                                  ),
                                                  " Hacker chặn đường truyền, lấy được **Public Key** của Linh và bản mật mã **Ciphertext** của Minh.",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-rose-600 font-black",
                                                children:
                                                  "🔒 KHÁC BIỆT CHÍ TỬ VỚI ĐỐI XỨNG: Hacker có Public Key và Ciphertext nhưng KHÔNG THỂ giải mã để đọc trộm! Vì chỉ có duy nhất Khóa riêng tư (Private Key) của Linh mới giải mã được bản mật mã này. Private Key nằm an toàn trong thiết bị của Linh và chưa bao giờ được gửi qua mạng!",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "border-t border-rose-100 dark:border-rose-950/50 pt-2 font-bold text-slate-700 dark:text-slate-350",
                                                children: [
                                                  jsxRuntimeExports.jsxs("p", {
                                                    children: [
                                                      "⚙️ ",
                                                      jsxRuntimeExports.jsx(
                                                        "strong",
                                                        {
                                                          children:
                                                            "Sửa đổi bản tin để phá hoại:",
                                                        },
                                                      ),
                                                      " Không đọc trộm được, hacker đổi sang phá hoại tính toàn vẹn bằng cách sửa đổi bản mật mã:",
                                                    ],
                                                  }),
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "mt-1.5 space-y-1 font-mono text-sm sm:text-base font-semibold",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-slate-500",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  children:
                                                                    "- Bản mật mã gốc:",
                                                                },
                                                              ),
                                                              " ",
                                                              ye,
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-rose-600",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  children:
                                                                    "- Bản mật mã bị sửa:",
                                                                },
                                                              ),
                                                              " ",
                                                              Fe,
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "p",
                                                          {
                                                            className:
                                                              "text-rose-550 mt-1",
                                                            children: [
                                                              "🔍 ",
                                                              jsxRuntimeExports.jsx(
                                                                "strong",
                                                                {
                                                                  children:
                                                                    "Chi tiết thay đổi:",
                                                                },
                                                              ),
                                                              " Đã đổi ký tự cấu trúc từ ",
                                                              jsxRuntimeExports.jsx(
                                                                "code",
                                                                {
                                                                  className:
                                                                    "bg-rose-100 dark:bg-rose-950/60 text-rose-700 px-1 py-0.5 rounded font-mono text-[9px]",
                                                                  children:
                                                                    ":ct_",
                                                                },
                                                              ),
                                                              " thành ",
                                                              jsxRuntimeExports.jsx(
                                                                "code",
                                                                {
                                                                  className:
                                                                    "bg-rose-200 dark:bg-rose-950 text-rose-800 px-1 py-0.5 rounded font-mono text-[9px]",
                                                                  children:
                                                                    ":ct_corrupted_",
                                                                },
                                                              ),
                                                              " nhằm làm hỏng chữ ký điện tử kiểm tra tính toàn vẹn ",
                                                              jsxRuntimeExports.jsx(
                                                                "code",
                                                                {
                                                                  className:
                                                                    "font-mono text-[9px]",
                                                                  children:
                                                                    "sig_...",
                                                                },
                                                              ),
                                                              "!",
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
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-8 sm:p-5 bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-950 rounded-3xl",
                                        children: jsxRuntimeExports.jsxs("p", {
                                          className:
                                            "text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "h-2 w-2 rounded-full bg-emerald-500 animate-ping",
                                            }),
                                            "🟢 Bản mật mã truyền đi an toàn đến Linh.",
                                          ],
                                        }),
                                      }),
                                ],
                              }),
                            ],
                          }),
                        Fe &&
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "space-y-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                            children: [
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "text-sm sm:text-base font-medium font-black flex items-center gap-1.5 text-slate-700 dark:text-slate-300",
                                children: [
                                  jsxRuntimeExports.jsx(LockOpen, {
                                    className: "h-4 w-4 text-emerald-500",
                                  }),
                                  "BƯỚC 4: Linh Tiến Hành Giải Mã Bằng Khóa Riêng Tư (Private Key)",
                                ],
                              }),
                              jsxRuntimeExports.jsxs("button", {
                                onClick: Vt,
                                className:
                                  "w-full py-3 rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
                                children: [
                                  jsxRuntimeExports.jsx(LockOpen, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                  " Linh Giải Mã Bằng Private Key Của Mình 🔓",
                                ],
                              }),
                              yt &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-8 sm:p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-3xl text-left",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(CircleCheck, {
                                          className: "h-4 w-4 shrink-0",
                                        }),
                                        "Linh Giải Mã Thành Công!",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-bold mb-1",
                                      children:
                                        "Bản mật mã nguyên vẹn và chữ ký số khớp 100%. Thông điệp giải mã được từ Minh là:",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 p-8 sm:p-5 rounded border border-emerald-100 dark:border-emerald-950 font-mono",
                                      children: yt,
                                    }),
                                  ],
                                }),
                              ve &&
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 rounded-3xl text-left space-y-2 animate-slideUp",
                                  children: [
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-rose-700 dark:text-rose-400 flex items-center gap-1.5",
                                      children: [
                                        jsxRuntimeExports.jsx(TriangleAlert, {
                                          className:
                                            "h-4 w-4 shrink-0 text-rose-600",
                                        }),
                                        "GIẢI MÃ THẤT BẠI!",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 font-bold leading-relaxed",
                                      children: [
                                        "⚠️ Lỗi giải mã: ",
                                        jsxRuntimeExports.jsx("span", {
                                          className: "text-rose-600",
                                          children: ve,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("p", {
                                      className:
                                        "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium",
                                      children: [
                                        "💡 ",
                                        jsxRuntimeExports.jsx("strong", {
                                          children: "Giải thích lý do:",
                                        }),
                                        " Hacker sửa đổi bản mã khiến chữ ký ",
                                        jsxRuntimeExports.jsx("code", {
                                          className: "font-mono text-rose-600",
                                          children: "sig_...",
                                        }),
                                        " bị lệch. Thuật toán kiểm tra tính toàn vẹn phát hiện bản mật mã đã bị chỉnh sửa, lập tức từ chối giải mã để tránh tin nhắn bị đầu độc!",
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    },
                    "asymmetric",
                  ),
                n === "hashing" &&
                  jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className:
                        "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-6",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-8 w-8 rounded-3xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                  children: "SHA",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  children: [
                                    jsxRuntimeExports.jsx("h3", {
                                      className:
                                        "text-sm sm:text-base font-extrabold uppercase tracking-wide text-emerald-600",
                                      children: "Hàm Băm Một Chiều",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-400 font-bold",
                                      children:
                                        "Mã hoá chuỗi đầu vào thành giá trị băm không thể đảo ngược",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300",
                              children: "Một Chiều & Không thể dịch ngược",
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                jsxRuntimeExports.jsx("label", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 uppercase block",
                                  children: "Nhập dữ liệu đầu vào:",
                                }),
                                jsxRuntimeExports.jsx("textarea", {
                                  value: me,
                                  onChange: (q) => Le(q.target.value),
                                  className:
                                    "w-full text-sm sm:text-base font-medium p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-semibold",
                                  rows: 3,
                                  placeholder:
                                    "Nhập bất cứ văn bản hoặc ký tự nào...",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                jsxRuntimeExports.jsx("label", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 uppercase block",
                                  children: "Chọn thuật toán băm:",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className: "flex gap-2",
                                  children: [
                                    {
                                      id: "sha1",
                                      name: "SHA-1 (160-bit)",
                                      desc: "Thường dùng kiểm tra tính toàn vẹn cũ",
                                    },
                                    {
                                      id: "sha256",
                                      name: "SHA-256 (256-bit)",
                                      desc: "Chuẩn bảo mật hiện đại",
                                    },
                                  ].map((q) =>
                                    jsxRuntimeExports.jsxs(
                                      "button",
                                      {
                                        onClick: () => W(q.id),
                                        className: `flex-1 p-8 sm:p-5 rounded-3xl border text-left cursor-pointer transition-all ${Pe === q.id ? "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-xs" : "bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-500"}`,
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "text-sm sm:text-base font-extrabold",
                                            children: q.name,
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "text-[9px] opacity-85 mt-0.5 font-medium",
                                            children: q.desc,
                                          }),
                                        ],
                                      },
                                      q.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-1.5 animate-fadeIn",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-sm sm:text-base font-semibold font-black text-slate-400 uppercase",
                                  children: [
                                    jsxRuntimeExports.jsxs("span", {
                                      children: [
                                        "Kết quả mã băm (",
                                        Pe.toUpperCase(),
                                        "):",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className: "text-emerald-500",
                                      children: [hs().length, " ký tự hex"],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 font-mono text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 break-all",
                                  children: hs(),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 font-bold italic text-center",
                              children:
                                "⚡ Chỉ cần thay đổi một ký tự (như dấu câu hoặc chữ hoa), giá trị băm sẽ lập tức thay đổi hoàn toàn (Hiệu ứng Thác đổ).",
                            }),
                          ],
                        }),
                      ],
                    },
                    "hashing",
                  ),
                n === "a1z26" &&
                  jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className:
                        "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-6",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "h-8 w-8 rounded-3xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                children: "A1Z",
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("h3", {
                                    className:
                                      "text-sm sm:text-base font-extrabold uppercase tracking-wide text-rose-600",
                                    children: "Mật mã cổ điển",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-500 font-extrabold mt-0.5",
                                    children:
                                      "Quy đổi ký tự chữ cái sang vị trí tương ứng trong bảng chữ cái tiếng Anh từ 1 đến 26.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-rose-600 block uppercase",
                                  children: "🔠 MÃ HÓA (CHỮ ➔ SỐ)",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase block",
                                      children: "Văn bản gốc cần mã hóa (Chữ):",
                                    }),
                                    jsxRuntimeExports.jsx("textarea", {
                                      value: Me,
                                      onChange: (q) => {
                                        (et(q.target.value), Et(""));
                                      },
                                      className:
                                        "w-full text-sm sm:text-base font-medium p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 uppercase font-bold text-slate-800 dark:text-slate-200",
                                      rows: 2.5,
                                      placeholder:
                                        "Nhập chữ cái không dấu (Ví dụ: HELLO)...",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: Xs,
                                  disabled: !Me.trim(),
                                  className:
                                    "w-full py-3 rounded-3xl bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50",
                                  children: "Mã hóa thành số 🔒",
                                }),
                                Je &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-rose-100 dark:border-rose-950 rounded-3xl space-y-1 animate-slideUp",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between text-sm sm:text-base font-semibold font-black text-rose-600 uppercase",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "Kết quả mã hóa (Dãy số):",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => {
                                              (navigator.clipboard.writeText(
                                                Je,
                                              ),
                                                alert(
                                                  "Đã sao chép dãy số mã hóa!",
                                                ));
                                            },
                                            className:
                                              "text-[9px] hover:underline bg-rose-50 dark:bg-rose-950 px-1.5 py-0.5 rounded text-rose-700 dark:text-rose-450",
                                            children: "Copy dãy số",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "font-mono text-sm sm:text-base font-extrabold text-rose-700 dark:text-rose-400 break-all select-all",
                                        children: Je,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850 space-y-3",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-sm sm:text-base font-medium font-black text-indigo-600 block uppercase",
                                  children: "🔢 GIẢI MÃ (SỐ ➔ CHỮ)",
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase block",
                                      children: "Nhập dãy số cần giải mã (Số):",
                                    }),
                                    jsxRuntimeExports.jsx("textarea", {
                                      value: ft,
                                      onChange: (q) => {
                                        (Mt(q.target.value), Re(""));
                                      },
                                      className:
                                        "w-full text-sm sm:text-base font-medium p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-mono text-slate-800 dark:text-slate-200",
                                      rows: 2.5,
                                      placeholder:
                                        "Nhập dãy số cách nhau bởi dấu - và / (Ví dụ: 8-5-12-12-15)...",
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: ws,
                                  disabled: !ft.trim(),
                                  className:
                                    "w-full py-3 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50",
                                  children: "Giải mã về chữ 🔓",
                                }),
                                D &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950 rounded-3xl space-y-1 animate-slideUp",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-emerald-600 block uppercase",
                                        children: "Kết quả giải mã về chữ:",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "font-mono text-sm sm:text-base font-extrabold text-emerald-700 dark:text-emerald-400 break-all",
                                        children: D,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "space-y-2 pt-4 border-t border-slate-150 dark:border-slate-800 animate-fadeIn",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-[10.5px] font-black text-slate-700 dark:text-slate-300 block uppercase",
                              children:
                                "📋 Bảng tra cứu quy đổi chữ cái A1Z26 (A-Z)",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "grid grid-cols-4 sm:grid-cols-7 md:grid-cols-13 gap-1.5",
                              children: Array.from({ length: 26 }, (q, bt) => {
                                const vt = String.fromCharCode(65 + bt),
                                  Ct = bt + 1;
                                return jsxRuntimeExports.jsxs(
                                  "div",
                                  {
                                    className:
                                      "p-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center font-mono text-sm sm:text-base font-semibold shadow-2xs hover:border-rose-400 transition-all duration-200",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "font-black text-rose-600 dark:text-rose-450",
                                        children: vt,
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-slate-400 dark:text-slate-500 font-extrabold text-[9px]",
                                        children: Ct,
                                      }),
                                    ],
                                  },
                                  vt,
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    },
                    "a1z26",
                  ),
                n === "check_password" &&
                  jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className:
                        "bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm space-y-6 animate-fadeIn",
                      children: [
                        jsxRuntimeExports.jsx("div", {
                          className:
                            "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                          children: jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "h-8 w-8 rounded-3xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-sm sm:text-base font-medium",
                                children: jsxRuntimeExports.jsx(ShieldCheck, {
                                  className: "h-5 w-5",
                                }),
                              }),
                              jsxRuntimeExports.jsxs("div", {
                                children: [
                                  jsxRuntimeExports.jsx("h3", {
                                    className:
                                      "text-sm sm:text-base font-extrabold uppercase tracking-wide text-blue-600",
                                    children:
                                      "Kiểm Tra Mật Khẩu (Check Password)",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-medium text-slate-400 font-bold",
                                    children:
                                      "Mô phỏng bẻ khóa và đánh giá độ mạnh của mật khẩu học sinh tự chọn",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-8 sm:p-5 bg-blue-50/40 dark:bg-slate-800/40 border border-blue-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-medium text-slate-600 dark:text-slate-350 leading-relaxed",
                          children: [
                            "💬 ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Kịch bản học tập:",
                            }),
                            " Nhập thử mật khẩu bất kỳ (ví dụ mật khẩu dễ bẻ khóa như ",
                            jsxRuntimeExports.jsx("code", {
                              className:
                                "bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded font-mono font-black text-rose-500",
                              children: "123456",
                            }),
                            ", ",
                            jsxRuntimeExports.jsx("code", {
                              className:
                                "bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded font-mono font-black text-rose-500",
                              children: "admin",
                            }),
                            ", hoặc mật khẩu mạnh hơn). Bấm vào ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Hacker Mô Phỏng",
                            }),
                            " kế bên để xem hacker bẻ khóa mất bao lâu. Nếu mật khẩu quá mạnh (thời gian bẻ khóa lớn hơn 5 phút), hacker sẽ chịu thua và thông báo thất bại!",
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-7 space-y-5",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "space-y-3 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                                  children: [
                                    jsxRuntimeExports.jsx("label", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block",
                                      children: "Nhập mật khẩu kiểm tra:",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        jsxRuntimeExports.jsx("input", {
                                          type: d ? "text" : "password",
                                          value: l,
                                          onChange: (q) => {
                                            (c(q.target.value),
                                              M(null),
                                              le(""),
                                              G(!1),
                                              ce(""),
                                              pe(!1),
                                              se(""));
                                          },
                                          placeholder:
                                            "Nhập mật khẩu bất kỳ (ví dụ: 123456, abc1, Abcd123!)...",
                                          className:
                                            "w-full pl-3 pr-10 py-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm sm:text-base font-medium font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-hidden font-bold",
                                        }),
                                        jsxRuntimeExports.jsx("button", {
                                          type: "button",
                                          onClick: () => m(!d),
                                          className:
                                            "absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer",
                                          title: d
                                            ? "Ẩn mật khẩu"
                                            : "Hiện mật khẩu",
                                          children: d
                                            ? jsxRuntimeExports.jsx(EyeOff, {
                                                className: "h-4 w-4",
                                              })
                                            : jsxRuntimeExports.jsx(Eye, {
                                                className: "h-4 w-4",
                                              }),
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "pt-1 flex flex-col gap-2",
                                      children: [
                                        jsxRuntimeExports.jsxs("button", {
                                          type: "button",
                                          onClick: () => {
                                            if (l) {
                                              const q = sha256(l);
                                              (le(q), G(!0));
                                            } else
                                              alert(
                                                "Vui lòng nhập mật khẩu trước khi băm!",
                                              );
                                          },
                                          className:
                                            "py-3 px-5 sm:px-5 rounded-3xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1.5 cursor-pointer self-start transition-all shadow-xs",
                                          children: [
                                            jsxRuntimeExports.jsx(Hash, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            " Băm mật khẩu (SHA-256) ⚙️",
                                          ],
                                        }),
                                        P &&
                                          L &&
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "p-8 sm:p-5 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-150 dark:border-indigo-900/60 rounded-3xl space-y-1.5 animate-fadeIn",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between text-sm sm:text-base font-semibold font-black text-indigo-600 uppercase",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Mã băm SHA-256 của mật khẩu:",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => {
                                                        (navigator.clipboard.writeText(
                                                          L,
                                                        ),
                                                          alert(
                                                            "Đã sao chép mã băm mật khẩu!",
                                                          ));
                                                      },
                                                      className:
                                                        "text-[9px] hover:underline bg-indigo-100 dark:bg-indigo-950 px-2 py-0.5 rounded text-indigo-700 dark:text-indigo-300 font-black cursor-pointer",
                                                      children:
                                                        "Sao chép mã băm 📋",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "font-mono text-sm sm:text-base font-extrabold text-indigo-850 dark:text-indigo-300 break-all bg-white dark:bg-slate-900 p-8 sm:p-5 rounded border border-indigo-100 dark:border-indigo-950 select-all",
                                                children: L,
                                              }),
                                              jsxRuntimeExports.jsx("p", {
                                                className:
                                                  "text-[9px] text-slate-400 font-medium italic",
                                                children:
                                                  '*Đây là chuỗi 64 ký tự đại diện cho mật khẩu của bạn. Hãy sao chép chuỗi này xuống công cụ "Quét mật khẩu" để đối chiếu kiểm tra điểm yếu hành vi từ mã băm!',
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    l &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "pt-2 space-y-3 animate-fadeIn",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between items-center text-sm sm:text-base font-medium",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-bold text-slate-500",
                                                children: "Mức độ bảo mật:",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className: `px-2.5 py-1 rounded-full text-sm sm:text-base font-semibold font-black uppercase ${fs(l).color}`,
                                                children: fs(l).label,
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden",
                                            children: jsxRuntimeExports.jsx(
                                              "div",
                                              {
                                                className: `h-full transition-all duration-300 ${fs(l).barColor}`,
                                                style: {
                                                  width: `${fs(l).percent}%`,
                                                },
                                              },
                                            ),
                                          }),
                                          (() => {
                                            const q = pt(l);
                                            if (!q) return null;
                                            const {
                                              behavioralWeakness: bt,
                                              realCrackTime: vt,
                                              realCrackTimeColor: Ct,
                                            } = J(l);
                                            return jsxRuntimeExports.jsxs(
                                              "div",
                                              {
                                                className: "space-y-3.5",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-850 shadow-xs animate-fadeIn text-sm sm:text-base font-medium",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "space-y-3",
                                                            children: [
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5 border-b border-blue-100 dark:border-blue-900/40 pb-2",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      Calculator,
                                                                      {
                                                                        className:
                                                                          "h-4 w-4 text-blue-500 shrink-0",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-sm sm:text-base font-semibold font-black uppercase tracking-wider text-blue-600 dark:text-blue-400",
                                                                        children:
                                                                          "📐 LÝ THUYẾT TOÁN HỌC:",
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "space-y-2.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex flex-col gap-0.5",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsxs(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 dark:text-slate-500",
                                                                                children:
                                                                                  [
                                                                                    "Tổng tổ hợp (",
                                                                                    q.N,
                                                                                    jsxRuntimeExports.jsx(
                                                                                      "sup",
                                                                                      {
                                                                                        children:
                                                                                          q.L,
                                                                                      },
                                                                                    ),
                                                                                    ")",
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsxs(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "font-mono font-bold text-slate-800 dark:text-slate-200 break-all",
                                                                                children:
                                                                                  [
                                                                                    "~ ",
                                                                                    q.combinationsStr,
                                                                                    " ",
                                                                                    q.scaleLabel
                                                                                      ? `(${q.scaleLabel})`
                                                                                      : "tổ hợp",
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
                                                                          "flex flex-col gap-0.5",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 dark:text-slate-500",
                                                                                children:
                                                                                  "Thời gian bẻ khóa lý thuyết",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "font-extrabold text-blue-600 dark:text-blue-400",
                                                                                children:
                                                                                  q.friendly,
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
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "space-y-3",
                                                            children: [
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex items-center gap-1.5 border-b border-amber-100 dark:border-amber-900/40 pb-2",
                                                                  children: [
                                                                    jsxRuntimeExports.jsx(
                                                                      ShieldAlert,
                                                                      {
                                                                        className:
                                                                          "h-4 w-4 text-amber-500 shrink-0",
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "text-sm sm:text-base font-semibold font-black uppercase tracking-wider text-amber-600 dark:text-amber-400",
                                                                        children:
                                                                          "🛡️ THỰC TẾ AN NINH MẠNG:",
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "space-y-2.5",
                                                                  children: [
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex flex-col gap-0.5",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 dark:text-slate-500",
                                                                                children:
                                                                                  "Điểm yếu hành vi",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "font-bold text-slate-700 dark:text-slate-300",
                                                                                children:
                                                                                  bt,
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    jsxRuntimeExports.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "flex flex-col gap-0.5",
                                                                        children:
                                                                          [
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-sm sm:text-base font-semibold uppercase font-black text-slate-400 dark:text-slate-500",
                                                                                children:
                                                                                  "Thời gian Hacker bẻ khóa",
                                                                              },
                                                                            ),
                                                                            jsxRuntimeExports.jsx(
                                                                              "span",
                                                                              {
                                                                                className: `font-black ${Ct}`,
                                                                                children:
                                                                                  vt,
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
                                                  jsxRuntimeExports.jsxs(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => O(!A),
                                                      className:
                                                        "w-full flex items-center justify-between px-5 sm:px-5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-3xl border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-bold transition-all cursor-pointer",
                                                      children: [
                                                        jsxRuntimeExports.jsxs(
                                                          "span",
                                                          {
                                                            className:
                                                              "flex items-center gap-1.5",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                Calculator,
                                                                {
                                                                  className:
                                                                    "h-3.5 w-3.5 text-blue-500 animate-pulse",
                                                                },
                                                              ),
                                                              A
                                                                ? "Ẩn cách tính độ phức tạp toán học"
                                                                : "Xem cách tính độ phức tạp toán học",
                                                            ],
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-medium",
                                                            children: A
                                                              ? "▲"
                                                              : "▼",
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  A &&
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "p-5 sm:p-6 bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-3 text-sm sm:text-base font-medium animate-fadeIn",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-black uppercase text-sm sm:text-base font-semibold tracking-wider",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  Calculator,
                                                                  {
                                                                    className:
                                                                      "h-4 w-4",
                                                                  },
                                                                ),
                                                                "🧮 Độ phức tạp toán học: ",
                                                                q.complexityLabel,
                                                                " (",
                                                                q.N,
                                                                jsxRuntimeExports.jsx(
                                                                  "sup",
                                                                  {
                                                                    children:
                                                                      q.L,
                                                                  },
                                                                ),
                                                                " tổ hợp)",
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "space-y-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base font-semibold leading-relaxed",
                                                              children: [
                                                                jsxRuntimeExports.jsxs(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "font-semibold text-slate-700 dark:text-slate-200",
                                                                    children: [
                                                                      "Cách tính con số ",
                                                                      jsxRuntimeExports.jsxs(
                                                                        "code",
                                                                        {
                                                                          className:
                                                                            "bg-slate-250 dark:bg-slate-800 px-1 py-0.5 rounded font-mono text-blue-600 dark:text-blue-400 font-bold",
                                                                          children:
                                                                            [
                                                                              q.N,
                                                                              jsxRuntimeExports.jsx(
                                                                                "sup",
                                                                                {
                                                                                  children:
                                                                                    q.L,
                                                                                },
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                      " tổ hợp là:",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "ul",
                                                                  {
                                                                    className:
                                                                      "list-disc pl-4 space-y-0.5 font-medium",
                                                                    children: [
                                                                      jsxRuntimeExports.jsxs(
                                                                        "li",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "Chữ cái thường (a-z): ",
                                                                              jsxRuntimeExports.jsx(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    "font-bold font-mono text-slate-850 dark:text-slate-150",
                                                                                  children:
                                                                                    q.countLower,
                                                                                },
                                                                              ),
                                                                              " ký tự ",
                                                                              q.hasLower
                                                                                ? "✅"
                                                                                : "❌",
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsxs(
                                                                        "li",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "Chữ cái hoa (A-Z): ",
                                                                              jsxRuntimeExports.jsx(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    "font-bold font-mono text-slate-850 dark:text-slate-150",
                                                                                  children:
                                                                                    q.countUpper,
                                                                                },
                                                                              ),
                                                                              " ký tự ",
                                                                              q.hasUpper
                                                                                ? "✅"
                                                                                : "❌",
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsxs(
                                                                        "li",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "Chữ số (0-9): ",
                                                                              jsxRuntimeExports.jsx(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    "font-bold font-mono text-slate-850 dark:text-slate-150",
                                                                                  children:
                                                                                    q.countDigit,
                                                                                },
                                                                              ),
                                                                              " ký tự ",
                                                                              q.hasDigit
                                                                                ? "✅"
                                                                                : "❌",
                                                                            ],
                                                                        },
                                                                      ),
                                                                      jsxRuntimeExports.jsxs(
                                                                        "li",
                                                                        {
                                                                          children:
                                                                            [
                                                                              "Ký tự đặc biệt tiêu chuẩn: ",
                                                                              jsxRuntimeExports.jsxs(
                                                                                "span",
                                                                                {
                                                                                  className:
                                                                                    "font-bold font-mono text-slate-850 dark:text-slate-150",
                                                                                  children:
                                                                                    [
                                                                                      "~",
                                                                                      q.countSpecial,
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              " ký tự ",
                                                                              q.hasSpecial
                                                                                ? "✅"
                                                                                : "❌",
                                                                            ],
                                                                        },
                                                                      ),
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "pt-0.5",
                                                                    children: [
                                                                      "👉 ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Tổng số ký tự trong bảng chữ cái (N):",
                                                                        },
                                                                      ),
                                                                      " ",
                                                                      jsxRuntimeExports.jsxs(
                                                                        "code",
                                                                        {
                                                                          className:
                                                                            "bg-slate-250 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono font-bold text-slate-800 dark:text-slate-200",
                                                                          children:
                                                                            [
                                                                              q.sumExpression,
                                                                              " = ",
                                                                              q.N,
                                                                            ],
                                                                        },
                                                                      ),
                                                                      " ký tự.",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "p",
                                                                  {
                                                                    children: [
                                                                      "👉 Với độ dài là ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "font-black font-mono text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium",
                                                                          children:
                                                                            q.L,
                                                                        },
                                                                      ),
                                                                      " ký tự (Mật khẩu nhập vào: ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "code",
                                                                        {
                                                                          className:
                                                                            "bg-slate-250 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono font-bold text-rose-500 break-all",
                                                                          children:
                                                                            l,
                                                                        },
                                                                      ),
                                                                      "), tổng số trường hợp máy tính phải thử để vét cạn (Brute-force) là:",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "p-8 sm:p-5 bg-slate-200/50 dark:bg-slate-950 rounded-3xl text-center font-mono font-bold text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-800 text-sm sm:text-base font-medium my-1 shadow-2xs",
                                                                    children: [
                                                                      "N",
                                                                      jsxRuntimeExports.jsx(
                                                                        "sup",
                                                                        {
                                                                          children:
                                                                            "L",
                                                                        },
                                                                      ),
                                                                      " = ",
                                                                      q.N,
                                                                      jsxRuntimeExports.jsx(
                                                                        "sup",
                                                                        {
                                                                          children:
                                                                            q.L,
                                                                        },
                                                                      ),
                                                                      " = ",
                                                                      q.combinationsStr,
                                                                      " tổ hợp ",
                                                                      q.scaleLabel
                                                                        ? `(${q.scaleLabel} tổ hợp)`
                                                                        : "",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "pt-0.5",
                                                                    children: [
                                                                      "👉 Lấy tổng số tổ hợp này chia cho tốc độ thử ",
                                                                      jsxRuntimeExports.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            "font-bold",
                                                                          children:
                                                                            "(2 tỷ phép thử/giây)",
                                                                        },
                                                                      ),
                                                                      ":",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "p-8 sm:p-5 bg-slate-200/50 dark:bg-slate-950 rounded-3xl text-center font-mono font-bold text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-slate-800 text-sm sm:text-base font-medium my-1 shadow-2xs break-all",
                                                                    children: [
                                                                      "Số giây = ",
                                                                      q.combinationsStr,
                                                                      " / 2.000.000.000 ≈ ",
                                                                      q.secondsStr,
                                                                      " giây",
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "p",
                                                                  {
                                                                    className:
                                                                      "pt-0.5",
                                                                    children:
                                                                      "👉 Quy đổi ra năm:",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "p-8 sm:p-5 bg-slate-200/50 dark:bg-slate-950 rounded-3xl text-center font-mono font-bold text-emerald-600 dark:text-emerald-400 border border-slate-300 dark:border-slate-800 text-sm sm:text-base font-medium my-1 shadow-2xs break-all",
                                                                    children: [
                                                                      "Số năm = ",
                                                                      q.secondsStr,
                                                                      " / 31.536.000 giây/năm ≈ ",
                                                                      q.yearsStr,
                                                                      " năm",
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
                                            );
                                          })(),
                                        ],
                                      }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "p-5 sm:p-6 bg-emerald-50/30 dark:bg-slate-900/40 border border-emerald-100 dark:border-slate-800 rounded-3xl space-y-3",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-medium font-black text-emerald-700 dark:text-emerald-400 block uppercase tracking-wider",
                                      children:
                                        "💡 Hướng dẫn đặt mật khẩu mạnh chuẩn khoa học",
                                    }),
                                    jsxRuntimeExports.jsx("p", {
                                      className:
                                        "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed font-semibold",
                                      children:
                                        "Để đạt mức bảo mật an toàn cao nhất, mật khẩu của học sinh cần đạt đủ đồng thời cả 4 điều kiện vàng sau:",
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm sm:text-base font-medium",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `p-1 rounded-full ${l.length >= 8 ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600" : "bg-slate-100 dark:bg-slate-900 text-slate-400"}`,
                                              children:
                                                l.length >= 8
                                                  ? jsxRuntimeExports.jsx(
                                                      Check,
                                                      {
                                                        className:
                                                          "h-3.5 w-3.5",
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsx(X, {
                                                      className:
                                                        "h-3.5 w-3.5 text-rose-500",
                                                    }),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "font-black text-slate-700 dark:text-slate-300",
                                                  children:
                                                    "Độ dài từ 8 ký tự trở lên",
                                                }),
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400",
                                                  children: [
                                                    "Hiện tại: ",
                                                    l.length,
                                                    " ký tự",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `p-1 rounded-full ${/[a-z]/.test(l) && /[A-Z]/.test(l) ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600" : "bg-slate-100 dark:bg-slate-900 text-slate-400"}`,
                                              children:
                                                /[a-z]/.test(l) &&
                                                /[A-Z]/.test(l)
                                                  ? jsxRuntimeExports.jsx(
                                                      Check,
                                                      {
                                                        className:
                                                          "h-3.5 w-3.5",
                                                      },
                                                    )
                                                  : jsxRuntimeExports.jsx(X, {
                                                      className:
                                                        "h-3.5 w-3.5 text-rose-500",
                                                    }),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "font-black text-slate-700 dark:text-slate-300",
                                                  children:
                                                    "Chữ hoa và chữ thường",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400",
                                                  children: "Ví dụ: A-Z và a-z",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `p-1 rounded-full ${/[0-9]/.test(l) ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600" : "bg-slate-100 dark:bg-slate-900 text-slate-400"}`,
                                              children: /[0-9]/.test(l)
                                                ? jsxRuntimeExports.jsx(Check, {
                                                    className: "h-3.5 w-3.5",
                                                  })
                                                : jsxRuntimeExports.jsx(X, {
                                                    className:
                                                      "h-3.5 w-3.5 text-rose-500",
                                                  }),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "font-black text-slate-700 dark:text-slate-300",
                                                  children: "Có chứa số (0-9)",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400",
                                                  children:
                                                    "Ví dụ: 0, 1, ..., 9",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-2.5 p-8 sm:p-5 bg-white dark:bg-slate-950 rounded-3xl border border-slate-150 dark:border-slate-850",
                                          children: [
                                            jsxRuntimeExports.jsx("div", {
                                              className: `p-1 rounded-full ${/[^a-zA-Z0-9]/.test(l) ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600" : "bg-slate-100 dark:bg-slate-900 text-slate-400"}`,
                                              children: /[^a-zA-Z0-9]/.test(l)
                                                ? jsxRuntimeExports.jsx(Check, {
                                                    className: "h-3.5 w-3.5",
                                                  })
                                                : jsxRuntimeExports.jsx(X, {
                                                    className:
                                                      "h-3.5 w-3.5 text-rose-500",
                                                  }),
                                            }),
                                            jsxRuntimeExports.jsxs("div", {
                                              children: [
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "font-black text-slate-700 dark:text-slate-300",
                                                  children: "Ký tự đặc biệt",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-400",
                                                  children:
                                                    "Ví dụ: @, #, $, !, %, *, ...",
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
                                  className:
                                    "bg-blue-50/30 dark:bg-slate-900/40 border border-blue-100 dark:border-slate-850 rounded-3xl overflow-hidden transition-all duration-300",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      type: "button",
                                      onClick: () => v(!E),
                                      className:
                                        "w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer hover:bg-blue-50/50 dark:hover:bg-slate-900/60 transition-colors text-left",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx(Sparkles, {
                                              className:
                                                "h-4 w-4 text-blue-500 shrink-0",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black text-blue-700 dark:text-blue-400 block uppercase tracking-wider",
                                              children:
                                                "✨ GỢI Ý ĐẶT MẬT KHẨU MẠNH CÁ NHÂN HÓA",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                              children: E
                                                ? "Thu gọn 🔼"
                                                : "Bấm để dùng 🔽",
                                            }),
                                            E
                                              ? jsxRuntimeExports.jsx(
                                                  ChevronUp,
                                                  {
                                                    className:
                                                      "h-3.5 w-3.5 text-slate-400",
                                                  },
                                                )
                                              : jsxRuntimeExports.jsx(
                                                  ChevronDown,
                                                  {
                                                    className:
                                                      "h-3.5 w-3.5 text-slate-400",
                                                  },
                                                ),
                                          ],
                                        }),
                                      ],
                                    }),
                                    E &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "px-5 sm:px-6 pb-4 space-y-3 border-t border-blue-100 dark:border-blue-950/40 pt-3 animate-fadeIn",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                                            children:
                                              "Để có một mật khẩu cực mạnh mà vẫn dễ nhớ dựa trên tên riêng của bạn, hãy nhập tên bên dưới và bấm nút gợi ý:",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("input", {
                                                type: "text",
                                                value: de,
                                                onChange: (q) =>
                                                  _(q.target.value),
                                                placeholder:
                                                  "Nhập tên của bạn (ví dụ: Xuan Loc)...",
                                                className:
                                                  "flex-1 px-5 sm:px-5 py-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-hidden font-bold",
                                              }),
                                              jsxRuntimeExports.jsxs("button", {
                                                type: "button",
                                                onClick: S,
                                                className:
                                                  "px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all flex items-center gap-1 shrink-0 shadow-xs",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    Sparkles,
                                                    {
                                                      className: "h-3.5 w-3.5",
                                                    },
                                                  ),
                                                  " Gợi ý 🪄",
                                                ],
                                              }),
                                            ],
                                          }),
                                          U &&
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "mt-2.5 p-8 sm:p-5 bg-white dark:bg-slate-950 border border-blue-100 dark:border-blue-950 rounded-3xl space-y-2.5 animate-fadeIn",
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between text-sm sm:text-base font-semibold font-black text-blue-600 uppercase tracking-wide",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        children:
                                                          "Mật khẩu cực mạnh đề xuất:",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        onClick: () => {
                                                          (navigator.clipboard.writeText(
                                                            U,
                                                          ),
                                                            alert(
                                                              "Đã sao chép mật khẩu gợi ý!",
                                                            ));
                                                        },
                                                        className:
                                                          "text-[9px] bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded text-blue-700 dark:text-blue-300 font-black cursor-pointer hover:underline",
                                                        children:
                                                          "Sao chép mật khẩu 📋",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "font-mono text-sm sm:text-base font-medium font-black text-rose-500 dark:text-rose-400 break-all bg-slate-50 dark:bg-slate-900 p-8 sm:p-5 rounded border border-slate-150 dark:border-slate-850 select-all text-center",
                                                  children: U,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-medium whitespace-pre-line leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-2",
                                                  children: be,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className: "pt-1 text-center",
                                                  children:
                                                    jsxRuntimeExports.jsxs(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        onClick: () => {
                                                          (c(U),
                                                            M(null),
                                                            le(""),
                                                            G(!1),
                                                            ce(""),
                                                            pe(!1),
                                                            se(""));
                                                        },
                                                        className:
                                                          "text-sm sm:text-base font-semibold font-black text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 underline cursor-pointer bg-emerald-50 dark:bg-emerald-950/20 px-5 sm:px-5 py-1 rounded-3xl border border-emerald-100 dark:border-emerald-900/40 inline-flex items-center gap-1 transition-all",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            CircleCheck,
                                                            {
                                                              className:
                                                                "h-3 w-3",
                                                            },
                                                          ),
                                                          " Đưa vào ô Kiểm tra mật khẩu bên trên 🔐",
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
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "lg:col-span-5 space-y-4",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  onClick: nt,
                                  className: `p-5 sm:p-6 rounded-3xl border transition-all duration-300 text-center cursor-pointer relative overflow-hidden group select-none shadow-xs ${u ? "bg-rose-950/20 border-rose-500/50 shadow-lg shadow-rose-500/15 animate-pulse" : R === "error" ? "bg-red-50 dark:bg-red-950/15 border-red-200 dark:border-red-950 hover:bg-red-100/50 dark:hover:bg-red-950/25" : R === "success" ? "bg-emerald-50 dark:bg-emerald-950/15 border-emerald-200 dark:border-emerald-950 hover:bg-emerald-100/50 dark:hover:bg-emerald-950/25" : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-850"}`,
                                  children: [
                                    u &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-linear-to-r from-rose-500/10 to-red-500/10 pointer-events-none",
                                      }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "flex flex-col items-center justify-center space-y-3 relative",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className: `h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${u ? "bg-rose-600 text-white animate-bounce" : R === "error" ? "bg-red-500 text-white" : R === "success" ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-200 group-hover:scale-105"}`,
                                          children: u
                                            ? jsxRuntimeExports.jsx(Skull, {
                                                className:
                                                  "h-8 w-8 animate-pulse",
                                              })
                                            : R === "error"
                                              ? jsxRuntimeExports.jsx(Skull, {
                                                  className: "h-8 w-8",
                                                })
                                              : R === "success"
                                                ? jsxRuntimeExports.jsx(
                                                    CircleCheck,
                                                    { className: "h-8 w-8" },
                                                  )
                                                : jsxRuntimeExports.jsx(Skull, {
                                                    className:
                                                      "h-8 w-8 text-rose-500",
                                                  }),
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "space-y-0.5",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black tracking-wider uppercase text-slate-400 block",
                                              children: "Hacker Mô Phỏng",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-medium font-black text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors",
                                              children: u
                                                ? "💀 Đang bẻ khóa..."
                                                : "👈 Click vào tôi để tiến hành bẻ khóa!",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "mt-4 p-8 sm:p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850 text-left text-sm sm:text-base font-medium leading-relaxed font-bold text-slate-600 dark:text-slate-350 relative shadow-2xs",
                                      children: [
                                        jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-slate-900",
                                        }),
                                        jsxRuntimeExports.jsx("p", {
                                          className:
                                            R === "error"
                                              ? "text-rose-600 dark:text-rose-400"
                                              : R === "success"
                                                ? "text-emerald-600 dark:text-emerald-400 font-extrabold"
                                                : "text-slate-600 dark:text-slate-350",
                                          children: y,
                                        }),
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className:
                                        "mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-400 dark:text-slate-500 font-bold leading-normal flex items-start gap-1.5 text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: "shrink-0 text-amber-500",
                                          children: "📌",
                                        }),
                                        jsxRuntimeExports.jsxs("span", {
                                          children: [
                                            jsxRuntimeExports.jsx("strong", {
                                              children: "Ghi chú mô phỏng:",
                                            }),
                                            " Hacker được thiết kế để bẻ khóa mật khẩu trong thời gian dưới 5 phút. Mật khẩu có thời gian bẻ khóa lý thuyết > 5 phút sẽ không thể chạy mô phỏng bẻ khóa trực tiếp vì mất nhiều thời gian.",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                u &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-black text-emerald-400 font-mono text-[10.5px] rounded-3xl border border-emerald-950/60 space-y-2 animate-fadeIn shadow-inner",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center justify-between border-b border-emerald-950 pb-1 text-[9px] text-emerald-600 font-bold",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(Terminal, {
                                                className: "h-3 w-3",
                                              }),
                                              "BRUTEFORCE_ENGINE v2.5",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            children: ["PROGRESS: ", p, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "animate-pulse font-bold",
                                            children: ["> ", b],
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-[9px] text-emerald-600",
                                            children:
                                              "> Đang quét tổ hợp ký tự bằng thuật toán Brute-Force...",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "grid grid-cols-5 gap-1 pt-1.5 text-center text-[9px] text-emerald-700 font-semibold",
                                            children: Array.from({
                                              length: 5,
                                            }).map((q, bt) =>
                                              jsxRuntimeExports.jsx(
                                                "div",
                                                {
                                                  className:
                                                    "bg-slate-950/90 p-1 rounded border border-emerald-950/40 animate-pulse",
                                                  children: Math.random()
                                                    .toString(36)
                                                    .substring(2, 6)
                                                    .toUpperCase(),
                                                },
                                                bt,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                N !== null &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-5 sm:p-6 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-950 rounded-3xl space-y-2.5 animate-slideUp",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex items-center gap-1.5 text-rose-600 dark:text-rose-400 text-sm sm:text-base font-medium font-black uppercase",
                                        children: [
                                          jsxRuntimeExports.jsx(Skull, {
                                            className: "h-4 w-4 animate-bounce",
                                          }),
                                          "Hacker đã tóm được mật khẩu của bạn!",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                                        children:
                                          "Do mật khẩu của bạn quá đơn giản hoặc có độ dài chưa an toàn, Hacker đã dễ dàng tìm thấy bản gốc thông tin của bạn thông qua Brute-force:",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-black rounded-3xl font-mono text-center relative border border-rose-950",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-rose-500/75 absolute top-1 left-2.5 uppercase font-black",
                                            children: "CRACKED_PASSWORD:",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-base font-black text-red-500 tracking-widest pt-2 select-all break-all",
                                            children: N,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-emerald-50 dark:bg-slate-900/50 rounded-3xl text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-bold leading-normal",
                                        children: [
                                          "💡 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Lưu ý đối chiếu:",
                                          }),
                                          " Mật khẩu ban đầu bạn nhập đã tự động được bật hiển thị (mở mắt) phía trên để học sinh có thể trực quan so sánh tính chính xác 100% của bản tin bị bẻ khóa!",
                                        ],
                                      }),
                                    ],
                                  }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-850 overflow-hidden transition-all duration-300",
                                  children: [
                                    jsxRuntimeExports.jsxs("button", {
                                      type: "button",
                                      onClick: () => te(!K),
                                      className:
                                        "w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-left",
                                      children: [
                                        jsxRuntimeExports.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            jsxRuntimeExports.jsx(Terminal, {
                                              className:
                                                "h-4 w-4 text-rose-500 shrink-0",
                                            }),
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold font-black uppercase tracking-wider text-rose-600 dark:text-rose-400",
                                              children:
                                                "🔍 QUÉT MÃ BĂM MẬT KHẨU (HASH SCANNER)",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsxs("div", {
                                          className: "flex items-center gap-1",
                                          children: [
                                            jsxRuntimeExports.jsx("span", {
                                              className:
                                                "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                              children: K
                                                ? "Thu gọn 🔼"
                                                : "Bấm để dùng 🔽",
                                            }),
                                            K
                                              ? jsxRuntimeExports.jsx(
                                                  ChevronUp,
                                                  {
                                                    className:
                                                      "h-3.5 w-3.5 text-slate-400",
                                                  },
                                                )
                                              : jsxRuntimeExports.jsx(
                                                  ChevronDown,
                                                  {
                                                    className:
                                                      "h-3.5 w-3.5 text-slate-400",
                                                  },
                                                ),
                                          ],
                                        }),
                                      ],
                                    }),
                                    K &&
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "px-5 sm:px-6 pb-4 space-y-4 border-t border-slate-200 dark:border-slate-850 pt-3 animate-fadeIn",
                                        children: [
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold leading-relaxed",
                                            children:
                                              "Để hiểu cách Hacker phát hiện điểm yếu từ dữ liệu đã băm (ví dụ dán mã băm rò rỉ vào phân tích), hãy dán đoạn mã băm (SHA-256) vào đây để quét phân tích cấu trúc:",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "input",
                                                    {
                                                      type: "text",
                                                      value: ee,
                                                      onChange: (q) => {
                                                        (ce(
                                                          q.target.value.trim(),
                                                        ),
                                                          pe(!1),
                                                          se(""));
                                                      },
                                                      placeholder:
                                                        "Dán mã băm (64 ký tự hex) tại đây...",
                                                      className:
                                                        "flex-1 px-5 sm:px-5 py-3 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm sm:text-base font-medium font-mono text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-rose-500 focus:outline-hidden font-bold",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => {
                                                        if (!ee) {
                                                          (se(
                                                            "Vui lòng dán mã băm vào ô bên cạnh!",
                                                          ),
                                                            pe(!1));
                                                          return;
                                                        }
                                                        if (
                                                          ee.toLowerCase() !==
                                                          sha256(
                                                            l,
                                                          ).toLowerCase()
                                                        ) {
                                                          (se(
                                                            "Mã băm không khớp với mật khẩu kiểm tra hiện tại! Vui lòng băm mật khẩu kiểm tra ở bên trái và copy chính xác.",
                                                          ),
                                                            pe(!1));
                                                          return;
                                                        }
                                                        (se(""), pe(!0));
                                                      },
                                                      className:
                                                        "px-5 sm:px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-base font-medium font-black rounded-3xl cursor-pointer transition-all flex items-center gap-1.5 shrink-0",
                                                      children: "Quét 🔍",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              Ie &&
                                                jsxRuntimeExports.jsxs("p", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-rose-600 dark:text-rose-400 font-bold",
                                                  children: ["⚠️ ", Ie],
                                                }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold font-black text-slate-400 uppercase tracking-wider block",
                                                children:
                                                  "Các tiêu chuẩn phân tích bảo mật:",
                                              }),
                                              [
                                                {
                                                  id: "length",
                                                  label:
                                                    "Chưa đủ độ dài (< 8 ký tự)",
                                                  isWeaknessActive:
                                                    l.length < 8,
                                                  desc: "Dễ bị bẻ khóa bằng brute force cực nhanh do không gian mẫu hẹp.",
                                                },
                                                {
                                                  id: "upper",
                                                  label: "Thiếu chữ hoa (A-Z)",
                                                  isWeaknessActive:
                                                    !/[A-Z]/.test(l),
                                                  desc: "Khiến không gian tìm kiếm bị thu hẹp đáng kể, giảm thời gian giải mã.",
                                                },
                                                {
                                                  id: "lower",
                                                  label:
                                                    "Thiếu chữ thường (a-z)",
                                                  isWeaknessActive:
                                                    !/[a-z]/.test(l),
                                                  desc: "Giảm độ phong phú của mật khẩu, dễ bị đoán quy luật.",
                                                },
                                                {
                                                  id: "digit",
                                                  label: "Thiếu chữ số (0-9)",
                                                  isWeaknessActive:
                                                    !/[0-9]/.test(l),
                                                  desc: "Hacker có thể bỏ qua việc quét vùng số, tăng tốc độ dò tìm.",
                                                },
                                                {
                                                  id: "special",
                                                  label:
                                                    "Thiếu ký tự đặc biệt (@, #, $, ...)",
                                                  isWeaknessActive:
                                                    !/[^a-zA-Z0-9]/.test(l),
                                                  desc: "Mật khẩu chỉ gồm chữ và số rất dễ bị quét bằng tấn công từ điển thông thường.",
                                                },
                                              ].map((q) => {
                                                const bt =
                                                  V && q.isWeaknessActive;
                                                return jsxRuntimeExports.jsxs(
                                                  "div",
                                                  {
                                                    className: `p-8 sm:p-5 rounded-3xl border transition-all duration-300 flex items-start gap-2.5 ${bt ? "bg-rose-100 dark:bg-rose-950/50 border-rose-500 animate-[pulse_1.5s_infinite] text-rose-800 dark:text-rose-200 font-bold shadow-xs" : V ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500/20 text-slate-600 dark:text-slate-400" : "bg-white dark:bg-slate-900 border-slate-150 dark:border-slate-800 text-slate-500"}`,
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "mt-0.5 shrink-0",
                                                          children: bt
                                                            ? jsxRuntimeExports.jsx(
                                                                TriangleAlert,
                                                                {
                                                                  className:
                                                                    "h-4 w-4 text-rose-600 dark:text-rose-400 animate-bounce",
                                                                },
                                                              )
                                                            : V
                                                              ? jsxRuntimeExports.jsx(
                                                                  CircleCheck,
                                                                  {
                                                                    className:
                                                                      "h-4 w-4 text-emerald-500",
                                                                  },
                                                                )
                                                              : jsxRuntimeExports.jsx(
                                                                  CircleQuestionMark,
                                                                  {
                                                                    className:
                                                                      "h-4 w-4 text-slate-400",
                                                                  },
                                                                ),
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "div",
                                                        {
                                                          className:
                                                            "space-y-0.5 text-left",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className: `text-sm sm:text-base font-medium font-black ${bt ? "text-rose-600 dark:text-rose-450" : "text-slate-800 dark:text-slate-200"}`,
                                                                children:
                                                                  q.label,
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "p",
                                                              {
                                                                className:
                                                                  "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-semibold leading-tight",
                                                                children: bt
                                                                  ? `⚠️ Phát hiện điểm yếu: ${q.desc}`
                                                                  : "Đạt yêu cầu bảo mật lý tưởng.",
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                  q.id,
                                                );
                                              }),
                                            ],
                                          }),
                                          V &&
                                            jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "p-8 sm:p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-[10.5px] leading-relaxed font-bold text-slate-600 dark:text-slate-450 text-center animate-slideUp",
                                              children: [
                                                "✨ ",
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Phân tích giáo khoa:",
                                                  },
                                                ),
                                                " Khi Hacker thu thập được mã băm này từ cơ sở dữ liệu bị rò rỉ, các tùy chọn bị ",
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-rose-500 font-extrabold animate-pulse",
                                                  children: "NHẤP NHÁY ĐỎ",
                                                }),
                                                " ở trên sẽ chỉ rõ cho Hacker biết mật khẩu gốc bị thiếu đi các yếu tố bảo mật nào. Điều này cho phép chúng tùy biến mặt nạ quét (Mask Attack) để bẻ khóa mật khẩu gốc của bạn trong tích tắc!",
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
                    },
                    "check_password",
                  ),
              ],
            }),
          }),
        ],
      });
    }
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
    function Lab19({ onSuccess: a }) {
      const [n, i] = reactExports.useState("phase1_design"),
        [l, c] = reactExports.useState([]),
        [d, m] = reactExports.useState("#10b981"),
        [u, g] = reactExports.useState("idle"),
        [p, f] = reactExports.useState(""),
        [b, k] = reactExports.useState(null),
        [N, M] = reactExports.useState(null),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        y && R && a();
      }, [y, R, a]);
      const A = [
          {
            id: "header",
            label: "Thanh tiêu đề (Header)",
            desc: "Hiển thị tên ứng dụng và logo thương hiệu",
            icon: PanelsTopLeft,
            requiredInP1: !0,
            requiredInP2: !0,
          },
          {
            id: "search",
            label: "Ô tìm kiếm (Search Bar)",
            desc: "Tìm nhanh món ăn theo từ khóa gõ tay",
            icon: Search,
            requiredInP1: !1,
            requiredInP2: !0,
          },
          {
            id: "products",
            label: "Khung sản phẩm (Products)",
            desc: "Danh sách burger kèm hình ảnh & giá bán lẻ",
            icon: Utensils,
            requiredInP1: !0,
            requiredInP2: !0,
          },
          {
            id: "cart",
            label: "Nút Giỏ hàng (Cart Button)",
            desc: "Hiển thị tổng tiền và nút thanh toán",
            icon: ShoppingBag,
            requiredInP1: !0,
            requiredInP2: !0,
          },
        ],
        O = (se, de) => {
          (se.dataTransfer.setData("text/plain", de), k(de));
        },
        L = () => {
          (k(null), M(null));
        },
        le = (se, de) => {
          (se.preventDefault(), M(de));
        },
        P = () => {
          M(null);
        },
        G = (se, de) => {
          se.preventDefault();
          const _ = se.dataTransfer.getData("text/plain") || b;
          (_ && _ === de && ee(_), M(null), k(null));
        },
        ee = (se) => {
          (l.includes(se) || c([...l, se]), g("idle"));
        },
        ce = (se) => {
          (c(l.filter((de) => de !== se)), g("idle"));
        },
        V = () => {
          (c([]), m("#10b981"), g("idle"));
        },
        pe = () => {
          (g("testing"),
            setTimeout(() => {
              const se = l.includes("header"),
                de = l.includes("search"),
                _ = l.includes("products"),
                U = l.includes("cart");
              if (n === "phase1_design")
                se && _ && U && !de
                  ? (g("feedback_p1_ok"),
                    f(`🎉 Tuyệt vời! Anh Hoàng nhận xét: "Bản mẫu đầu tiên rất trực quan!"

👉 Ý kiến khách hàng: "Cần thêm Ô tìm kiếm (Search Bar) và đổi màu Header sang màu Cam ấm áp (Amber/Orange) để kích thích thèm ăn."

Hãy nhấn nút "Bước tiếp theo" bên dưới để chỉnh sửa!`),
                    I(!0))
                  : (g("feedback_p1_error"),
                    se
                      ? _
                        ? U
                          ? de &&
                            f(
                              "❌ Chưa cần Ô tìm kiếm (Search Bar) ở bản đầu tiên. Hãy gỡ ra để test luồng cơ bản.",
                            )
                          : f(
                              "❌ Thiếu Nút Giỏ hàng (Cart Button)! Khách không có nút để đặt hàng.",
                            )
                        : f(
                            "❌ Thiếu Khung sản phẩm (Products Grid)! Khách không thấy món ăn để mua.",
                          )
                      : f(
                          "❌ Thiếu Thanh tiêu đề (Header)! Khách sẽ không biết đây là cửa hàng gì.",
                        ));
              else if (n === "phase2_design") {
                const Z = d === "#f59e0b";
                se && de && _ && U && Z
                  ? (g("feedback_p2_ok"),
                    f(`🎉 HOÀN HẢO! Khách hàng khen nức nở: tìm món nhanh, màu cam bắt mắt!

💡 Nhờ Prototype, chúng ta chỉ mất vài giây chỉnh sửa với 0 đồng chi phí trước khi lập trình thật!`),
                    z(!0))
                  : (g("feedback_p2_error"),
                    de
                      ? Z
                        ? (!se || !_ || !U) &&
                          f(
                            "❌ Khi thêm ô tìm kiếm, vui lòng giữ đầy đủ Thanh tiêu đề, Khung sản phẩm và Giỏ hàng.",
                          )
                        : f(
                            "❌ Quên đổi màu Thanh tiêu đề sang màu Cam ấm áp (Amber/Orange) rồi!",
                          )
                      : f(
                          "❌ Chưa có Ô tìm kiếm (Search Bar)! Hãy kéo thêm vào điện thoại.",
                        ));
              }
            }, 1200));
        },
        Ie = () => {
          (i("phase2_design"), g("idle"), f(""));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-6",
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
                      "inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-0.5 text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400",
                    children: [
                      jsxRuntimeExports.jsx(Smartphone, {
                        className: "h-3.5 w-3.5 animate-pulse",
                      }),
                      " THỬ NGHIỆM GIAO DIỆN",
                    ],
                  }),
                  jsxRuntimeExports.jsx("h1", {
                    className:
                      "text-xl font-black text-slate-900 dark:text-white mt-1",
                    children:
                      "Lab 19: Thiết Kế Bản Mẫu Phần Mềm (Software Prototyping)",
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className:
                      "text-sm sm:text-base font-medium text-slate-400 max-w-2xl font-semibold mt-0.5 leading-relaxed",
                    children:
                      "Học cách xây dựng bản mẫu thô sơ (Prototype) để kiểm thử trực quan với khách hàng, thu thập ý kiến phản hồi sớm giúp tiết kiệm tối đa thời gian và chi phí phát triển.",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800 text-center shrink-0 flex flex-col items-center justify-center min-w-[200px] shadow-inner",
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className:
                      "text-[9px] text-slate-500 font-extrabold tracking-wider block uppercase",
                    children: "TIẾN TRÌNH LAB 19",
                  }),
                  jsxRuntimeExports.jsxs("span", {
                    className:
                      "text-2xl font-black text-emerald-400 tracking-tighter block my-0.5 font-mono",
                    children: [
                      (y ? 1 : 0) + (R ? 1 : 0),
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
                        className: `h-2.5 w-2.5 rounded-full ${y ? "bg-emerald-500" : "bg-slate-700"}`,
                        title: "Bản mẫu ban đầu",
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: `h-2.5 w-2.5 rounded-full ${R ? "bg-emerald-500" : "bg-slate-700"}`,
                        title: "Bản nâng cấp chỉnh sửa",
                      }),
                      jsxRuntimeExports.jsx("span", {
                        className: "text-[9px] text-slate-400 font-bold ml-1",
                        children: y && R ? "ĐÃ HOÀN THÀNH!" : "CHƯA HOÀN THÀNH",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "bg-indigo-500/5 border border-indigo-500/10 rounded-3xl p-5 sm:p-6 text-left grid grid-cols-1 md:grid-cols-3 gap-5",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "space-y-1",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-indigo-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(Lightbulb, {
                        className: "h-4 w-4",
                      }),
                      " Bản Mẫu Là Gì?",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-indigo-500",
                        children: "Software Prototype",
                      }),
                      " là mô hình thô sơ, trực quan dựng cực nhanh để khách hàng chạy thử nhằm xác minh tính năng và trải nghiệm trước khi code thật.",
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "space-y-1 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-850 md:pl-5 pt-3 md:pt-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-emerald-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(CircleCheck, {
                        className: "h-4 w-4",
                      }),
                      " Lợi Ích Khổng Lồ",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      "Giúp phát hiện ",
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-emerald-500",
                        children: "sai sót trải nghiệm sớm",
                      }),
                      ". Việc chỉnh sửa trên bản mẫu chỉ mất ",
                      jsxRuntimeExports.jsx("span", {
                        className: "underline",
                        children: "vài giây kéo thả",
                      }),
                      " với giá ",
                      jsxRuntimeExports.jsx("strong", { children: "0 đồng" }),
                      " thay vì sửa trên sản phẩm đã lập trình cực kỳ đắt đỏ.",
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("div", {
                className:
                  "space-y-1 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-850 md:pl-5 pt-3 md:pt-0",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-amber-500 font-black text-sm sm:text-base font-medium uppercase",
                    children: [
                      jsxRuntimeExports.jsx(RefreshCw, {
                        className: "h-4 w-4",
                      }),
                      " Quy Trình Tinh Gọn",
                    ],
                  }),
                  jsxRuntimeExports.jsxs("p", {
                    className:
                      "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-350 leading-relaxed font-semibold",
                    children: [
                      "Dựng nhanh bản thô ➔ Lấy phản hồi khách hàng ➔ ",
                      jsxRuntimeExports.jsx("strong", {
                        className: "text-amber-500",
                        children: "Chỉnh sửa tức thì",
                      }),
                      " ➔ Lập trình viên lập trình chính xác sản phẩm thực tế mà không sợ làm sai ý.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-wrap items-center justify-center gap-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: `flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${n === "phase1_design" ? "bg-indigo-600 text-white shadow-md" : y ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-bold"}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: `h-6 w-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${n === "phase1_design" ? "bg-white text-indigo-700" : y ? "bg-white text-emerald-700" : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                    children: "1",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "Dựng Bản mẫu đầu tiên",
                  }),
                ],
              }),
              jsxRuntimeExports.jsx(ArrowRight, {
                className: "h-4 w-4 text-slate-400 shrink-0",
              }),
              jsxRuntimeExports.jsxs("div", {
                className: `flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${n === "phase2_design" ? "bg-indigo-600 text-white shadow-md" : R ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-bold"}`,
                children: [
                  jsxRuntimeExports.jsx("span", {
                    className: `h-6 w-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${n === "phase2_design" ? "bg-white text-indigo-700" : R ? "bg-white text-emerald-700" : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                    children: "2",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    className: "whitespace-nowrap",
                    children: "Bổ sung & Chỉnh sửa màu theo Feedback",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntimeExports.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-6 text-left",
            children: [
              jsxRuntimeExports.jsxs("div", {
                className: "lg:col-span-5 space-y-4",
                children: [
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-3",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center gap-3 border-b border-slate-100 dark:border-slate-850 pb-3",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "relative",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg font-bold shadow-md",
                                children: "👨‍🍳",
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "absolute -bottom-1 -right-1 h-4.5 w-4.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center text-[9px] text-white",
                                children: "✓",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            children: [
                              jsxRuntimeExports.jsx("h4", {
                                className:
                                  "text-sm sm:text-base font-medium font-black text-slate-900 dark:text-white",
                                children: "Anh Hoàng",
                              }),
                              jsxRuntimeExports.jsx("p", {
                                className:
                                  "text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                children:
                                  "Chủ chuỗi cửa hàng Hoàng Burger (Khách hàng)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "bg-slate-50 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl relative text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-150 dark:border-slate-850",
                        children: [
                          n === "phase1_design" &&
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-indigo-500 font-black block mb-1",
                                  children: "🎯 YÊU CẦU BẢN MẪU LẦN 1:",
                                }),
                                '"Chào em! Anh đang muốn mở app giao đồ ăn thô sơ. Bản đầu tiên hãy kéo thả giúp anh 3 phần tử cơ bản nhất: ',
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Thanh tiêu đề (Header)",
                                }),
                                ", ",
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Khung sản phẩm (Products)",
                                }),
                                ", và ",
                                jsxRuntimeExports.jsx("strong", {
                                  className: "text-slate-900 dark:text-white",
                                  children: "Nút Giỏ hàng (Cart Button)",
                                }),
                                ' vào điện thoại để chạy thử luồng chính nhé! Đừng vội thêm thanh tìm kiếm."',
                              ],
                            }),
                          n === "phase2_design" &&
                            jsxRuntimeExports.jsxs("div", {
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "text-indigo-500 font-black block mb-1",
                                  children:
                                    "🎯 CẬP NHẬT YÊU CẦU BẢN MẪU LẦN 2 (EDIT):",
                                }),
                                '"Tuyệt quá, bản mẫu giúp khách của anh hiểu cách mua ngay! Bây giờ hãy nâng cấp bản mẫu theo feedback khách hàng nhé:',
                                jsxRuntimeExports.jsxs("ul", {
                                  className:
                                    "list-disc pl-4 mt-1.5 space-y-1 font-semibold text-slate-600 dark:text-slate-400",
                                  children: [
                                    jsxRuntimeExports.jsxs("li", {
                                      children: [
                                        "Kéo thả thêm ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className: "text-emerald-500",
                                          children: "Ô tìm kiếm (Search Bar)",
                                        }),
                                        " vào để tìm món nhanh.",
                                      ],
                                    }),
                                    jsxRuntimeExports.jsxs("li", {
                                      children: [
                                        "Sử dụng bảng màu bên dưới để đổi màu sơn Thanh tiêu đề thành ",
                                        jsxRuntimeExports.jsx("strong", {
                                          className: "text-amber-500",
                                          children:
                                            "Màu Vàng Cam (Amber/Orange)",
                                        }),
                                        " giúp tạo cảm giác thèm ăn!",
                                      ],
                                    }),
                                  ],
                                }),
                                'Thử xem chúng ta sửa nhanh thế nào!"',
                              ],
                            }),
                          jsxRuntimeExports.jsx("div", {
                            className:
                              "absolute top-4 -left-2 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-slate-50 dark:border-r-slate-900/60 border-b-8 border-b-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs space-y-4",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        children: [
                          jsxRuntimeExports.jsxs("h3", {
                            className:
                              "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wider flex items-center gap-1.5",
                            children: [
                              jsxRuntimeExports.jsx(PanelsTopLeft, {
                                className: "h-4 w-4 text-indigo-500",
                              }),
                              "Thư viện phần tử Bản mẫu (Wireframe Assets)",
                            ],
                          }),
                          jsxRuntimeExports.jsx("p", {
                            className:
                              "text-[10.5px] text-slate-400 font-semibold mt-1",
                            children:
                              "Kéo thả các phần tử này sang màn hình điện thoại bên phải, hoặc nhấn trực tiếp để thêm/gỡ nhanh.",
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsx("div", {
                        className: "grid grid-cols-1 gap-2.5",
                        children: A.map((se) => {
                          const de = l.includes(se.id),
                            _ = se.icon;
                          return jsxRuntimeExports.jsxs(
                            "div",
                            {
                              draggable: !de,
                              onDragStart: (U) => O(U, se.id),
                              onDragEnd: L,
                              onClick: () => {
                                de ? ce(se.id) : ee(se.id);
                              },
                              className: `p-8 sm:p-5 rounded-3xl border transition-all duration-200 cursor-pointer select-none flex items-center justify-between group ${de ? "border-emerald-500/30 bg-emerald-500/5 text-slate-500 dark:text-slate-500 opacity-60" : "border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 shadow-xs"}`,
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-8 sm:p-5 rounded-3xl ${de ? "bg-emerald-500/10 text-emerald-500" : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 group-hover:text-indigo-500"}`,
                                      children: jsxRuntimeExports.jsx(_, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsxs("div", {
                                      className: "text-left",
                                      children: [
                                        jsxRuntimeExports.jsx("span", {
                                          className: `text-sm sm:text-base font-bold block ${de ? "line-through text-slate-400" : "text-slate-800 dark:text-white"}`,
                                          children: se.label,
                                        }),
                                        jsxRuntimeExports.jsx("span", {
                                          className:
                                            "text-[9.5px] text-slate-400 font-semibold block leading-tight",
                                          children: se.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-[9px] font-extrabold text-slate-400 uppercase tracking-wide group-hover:text-indigo-500 transition-colors",
                                      children: de
                                        ? "ĐÃ GẮN ✓"
                                        : "KÉO HOẶC CLICK",
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      className: `h-4.5 w-4.5 rounded-full border flex items-center justify-center ${de ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300"}`,
                                      children:
                                        de &&
                                        jsxRuntimeExports.jsx(Check, {
                                          className: "h-3 w-3",
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            se.id,
                          );
                        }),
                      }),
                      n === "phase2_design" &&
                        jsxRuntimeExports.jsxs(motion.div, {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          className:
                            "pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2.5",
                          children: [
                            jsxRuntimeExports.jsxs("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black text-slate-500 uppercase flex items-center gap-1.5",
                              children: [
                                jsxRuntimeExports.jsx(Palette, {
                                  className: "h-3.5 w-3.5 text-amber-500",
                                }),
                                " CHỈNH SỬA MÀU SƠN PROTOTYPE (THEME):",
                              ],
                            }),
                            jsxRuntimeExports.jsx("p", {
                              className:
                                "text-sm sm:text-base font-semibold text-slate-400 font-semibold",
                              children:
                                "Nhấp vào màu bên dưới để đổi màu Thanh tiêu đề ngay lập tức:",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex gap-2",
                              children: [
                                {
                                  hex: "#10b981",
                                  name: "Xanh Lá",
                                  class: "bg-emerald-500",
                                },
                                {
                                  hex: "#3b82f6",
                                  name: "Xanh Lam",
                                  class: "bg-blue-500",
                                },
                                {
                                  hex: "#f59e0b",
                                  name: "Vàng Cam (Yêu cầu)",
                                  class: "bg-amber-500 ring-2 ring-indigo-500",
                                },
                              ].map((se) =>
                                jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => m(se.hex),
                                    className: `flex-1 py-3 px-2 rounded-3xl text-sm sm:text-base font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${d === se.hex ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 border-transparent shadow-xs" : "bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-250 dark:border-slate-800 hover:bg-slate-50"}`,
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className: `h-3 w-3 rounded-full ${se.class}`,
                                      }),
                                      se.name.split(" ")[0],
                                    ],
                                  },
                                  se.hex,
                                ),
                              ),
                            }),
                          ],
                        }),
                      jsxRuntimeExports.jsxs("div", {
                        className:
                          "pt-3 border-t border-slate-100 dark:border-slate-850 flex justify-between items-center text-sm sm:text-base font-medium",
                        children: [
                          jsxRuntimeExports.jsxs("button", {
                            onClick: V,
                            className:
                              "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold flex items-center gap-1 cursor-pointer",
                            children: [
                              jsxRuntimeExports.jsx(Undo2, {
                                className: "h-3.5 w-3.5",
                              }),
                              " Xóa hết thiết kế lại",
                            ],
                          }),
                          jsxRuntimeExports.jsxs("span", {
                            className:
                              "text-sm sm:text-base font-semibold text-indigo-500 font-black",
                            children: ["Giao diện: ", l.length, " / 4 phần tử"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx("div", {
                className:
                  "lg:col-span-7 bg-white dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xs flex flex-col justify-between items-stretch",
                children: jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "md:col-span-7 flex flex-col items-center",
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-extrabold text-slate-400 mb-2 uppercase block",
                          children: "BẢN MẪU DI ĐỘNG (PROTOTYPE WORKSPACE)",
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-[240px] h-[440px] border-[8px] border-slate-800 dark:border-slate-700 rounded-[36px] bg-slate-950 overflow-hidden relative shadow-2xl flex flex-col justify-between p-8 sm:p-5",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-full flex items-center justify-center gap-1.5 z-20",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-1 w-8 bg-slate-900 rounded-full",
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-1.5 w-1.5 bg-slate-900 rounded-full",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex-1 bg-slate-50 dark:bg-slate-900 rounded-[24px] mt-1.5 overflow-hidden p-8 sm:p-5 flex flex-col gap-2 relative",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "header"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "header"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "header" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("header")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "header-item",
                                        className:
                                          "text-white p-8 sm:p-5 rounded-3xl text-center font-bold text-[10.5px] shadow-sm flex justify-between items-center relative group",
                                        style: { backgroundColor: d },
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: "🍔 Hoàng Burger",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[7px] bg-white/25 px-1 py-0.2 rounded uppercase font-black",
                                            children: "Bản mẫu",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("header"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-9 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Thanh tiêu đề tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "search"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "search"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "search" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("search")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "search-item",
                                        className:
                                          "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 sm:p-5 rounded-3xl text-[9px] text-slate-400 flex items-center justify-between shadow-xs relative group",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children:
                                              "🔍 Nhập món ăn tìm kiếm...",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("search"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-7 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          n === "phase1_design"
                                            ? "🔒 Khóa ở Bản 1"
                                            : "+ Kéo thả Ô tìm kiếm tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "products"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "products"),
                                  className: `flex-1 transition-all duration-200 rounded-3xl relative flex flex-col ${N === "products" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("products")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "products-item",
                                        className:
                                          "flex-1 bg-white dark:bg-slate-800 border border-slate-250 dark:border-slate-750 p-8 sm:p-5 rounded-3xl space-y-2 overflow-hidden text-[9px] relative group flex flex-col justify-between",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "font-extrabold text-slate-700 dark:text-slate-300 block border-b dark:border-slate-700 pb-1 text-[8px] uppercase tracking-wider",
                                                children: "🍔 THỰC ĐƠN HÔM NAY",
                                              }),
                                              jsxRuntimeExports.jsxs("div", {
                                                className: "space-y-1.5 mt-1.5",
                                                children: [
                                                  jsxRuntimeExports.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex gap-2 items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-7 h-7 bg-amber-500/20 rounded flex items-center justify-center text-[12px]",
                                                            children: "🍔",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className: "flex-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold block text-slate-800 dark:text-white",
                                                                  children:
                                                                    "Bò Burger Phô Mai",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-500 font-bold text-[8px]",
                                                                  children:
                                                                    "45.000đ",
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
                                                        "flex gap-2 items-center",
                                                      children: [
                                                        jsxRuntimeExports.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "w-7 h-7 bg-red-500/20 rounded flex items-center justify-center text-[12px]",
                                                            children: "🍟",
                                                          },
                                                        ),
                                                        jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className: "flex-1",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "font-bold block text-slate-800 dark:text-white",
                                                                  children:
                                                                    "Khoai Tây Chiên",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-emerald-500 font-bold text-[8px]",
                                                                  children:
                                                                    "25.000đ",
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
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "text-[7.5px] text-indigo-500 font-semibold border-t dark:border-slate-700 pt-1 text-center bg-slate-50 dark:bg-slate-900 rounded py-0.5",
                                            children:
                                              "✓ Sản phẩm hiển thị thành công!",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("products"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "flex-1 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Khung sản phẩm tại đây",
                                      }),
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  onDragOver: (se) => le(se, "cart"),
                                  onDragLeave: P,
                                  onDrop: (se) => G(se, "cart"),
                                  className: `transition-all duration-200 rounded-3xl relative ${N === "cart" ? "ring-2 ring-indigo-500 scale-98 bg-indigo-50 dark:bg-indigo-950/20" : ""}`,
                                  children: l.includes("cart")
                                    ? jsxRuntimeExports.jsxs(motion.div, {
                                        layoutId: "cart-item",
                                        className:
                                          "bg-emerald-500 text-white p-8 sm:p-5 rounded-3xl text-center font-black text-[9.5px] shadow-sm flex items-center justify-center gap-1 cursor-pointer active:scale-95 hover:scale-103 transition-all relative group",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            children:
                                              "🛒 Xem giỏ hàng & Đặt món (70.000đ)",
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => ce("cart"),
                                            className:
                                              "absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm cursor-pointer z-10",
                                            children: jsxRuntimeExports.jsx(
                                              Trash2,
                                              { className: "h-3 w-3" },
                                            ),
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "h-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-3xl flex items-center justify-center text-[8.5px] text-slate-400 font-extrabold bg-slate-100/50 dark:bg-slate-900/30",
                                        children:
                                          "+ Kéo thả Nút Giỏ hàng tại đây",
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "md:col-span-5 flex flex-col justify-between space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black text-slate-800 dark:text-white block uppercase tracking-wider",
                              children:
                                "💬 ĐÁNH GIÁ CỦA NGƯỜI DÙNG CHẠY THỬ (USER FEEDBACK)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "min-h-[160px] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 p-5 sm:p-6 rounded-3xl text-sm sm:text-base font-medium flex flex-col justify-between shadow-inner",
                              children: [
                                u === "idle" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "text-slate-500 italic text-sm sm:text-base font-semibold space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("p", {
                                        children:
                                          "📱 Giao diện bản mẫu của em hiện tại:",
                                      }),
                                      jsxRuntimeExports.jsxs("ul", {
                                        className:
                                          "list-disc pl-4 text-sm sm:text-base font-semibold not-italic text-slate-400",
                                        children: [
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Thanh tiêu đề: ",
                                              l.includes("header")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Ô tìm kiếm: ",
                                              l.includes("search")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Thực đơn sản phẩm: ",
                                              l.includes("products")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "Nút đặt giỏ hàng: ",
                                              l.includes("cart")
                                                ? "Đã lắp ✓"
                                                : "Chưa có",
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-indigo-500 font-bold mt-1.5",
                                        children:
                                          '👉 Hãy lắp các phần tử cần thiết và bấm nút "Kiểm thử Bản mẫu" để gọi người dùng vào nhận xét!',
                                      }),
                                    ],
                                  }),
                                u === "testing" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-3 py-8 flex-1",
                                    children: [
                                      jsxRuntimeExports.jsx(RefreshCw, {
                                        className:
                                          "h-8 w-8 text-indigo-500 animate-spin",
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "text-center space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-sm sm:text-base font-semibold font-black text-slate-700 dark:text-slate-300 block",
                                            children:
                                              "Đang mời người dùng kiểm thử...",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 font-bold block",
                                            children:
                                              "Đang thu thập ý kiến về trải nghiệm nút bấm, bố cục và màu sắc...",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                (u === "feedback_p1_error" ||
                                  u === "feedback_p2_error") &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-2 text-left flex-1 flex flex-col justify-between",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex gap-2 text-rose-500",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleAlert, {
                                            className: "h-5 w-5 shrink-0",
                                          }),
                                          jsxRuntimeExports.jsx("p", {
                                            className:
                                              "text-sm sm:text-base font-bold leading-relaxed whitespace-pre-line",
                                            children: p,
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9.5px] bg-rose-500/10 text-rose-600 px-2 py-0.5 rounded font-black block text-center uppercase",
                                        children:
                                          "Sửa đổi bản mẫu trong 1 giây ngay!",
                                      }),
                                    ],
                                  }),
                                u === "feedback_p1_ok" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-3 text-left flex flex-col justify-between flex-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex gap-2 text-emerald-600 dark:text-emerald-400",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-5 w-5 shrink-0 text-emerald-500",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "space-y-1",
                                            children: jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "text-[10.5px] font-bold leading-relaxed whitespace-pre-line",
                                                children: p,
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("button", {
                                        onClick: Ie,
                                        className:
                                          "w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-black text-sm sm:text-base font-medium rounded-3xl flex items-center justify-center gap-1.5 active:scale-95 hover:scale-103 transition-all transition-all shadow-md cursor-pointer",
                                        children: [
                                          "Bước tiếp theo: Chỉnh sửa Bản mẫu ",
                                          jsxRuntimeExports.jsx(ArrowRight, {
                                            className: "h-4 w-4",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                u === "feedback_p2_ok" &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-3 text-left flex flex-col justify-between flex-1",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex gap-2 text-emerald-600 dark:text-emerald-400",
                                        children: [
                                          jsxRuntimeExports.jsx(CircleCheck, {
                                            className:
                                              "h-5.5 w-5.5 shrink-0 text-emerald-500 animate-bounce",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "space-y-1",
                                            children: jsxRuntimeExports.jsx(
                                              "p",
                                              {
                                                className:
                                                  "text-[10.5px] font-bold leading-relaxed whitespace-pre-line",
                                                children: p,
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "text-[9.5px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-5 sm:px-5 py-1 rounded-3xl font-black text-center uppercase tracking-wider",
                                        children:
                                          "🎉 ĐÃ HOÀN THÀNH BÀI LAB XUẤT SẮC!",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        u !== "feedback_p1_ok" &&
                          u !== "feedback_p2_ok" &&
                          jsxRuntimeExports.jsx("button", {
                            disabled: u === "testing",
                            onClick: pe,
                            className:
                              "w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 hover:scale-103 transition-all disabled:opacity-50 text-white text-sm sm:text-base font-medium font-black rounded-3xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer",
                            children:
                              u === "testing"
                                ? jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsx(RefreshCw, {
                                          className: "h-4 w-4 animate-spin",
                                        }),
                                        "ĐANG KIỂM THỬ PHẢN HỒI...",
                                      ],
                                    },
                                  )
                                : jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsx(Play, {
                                          className: "fill-current h-3.5 w-3.5",
                                        }),
                                        n === "phase1_design"
                                          ? "KIỂM THỬ BẢN MẪU LẦN 1"
                                          : "KIỂM THỬ BẢN NÂNG CẤP",
                                      ],
                                    },
                                  ),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }

    return Lab16;
  };
})();
