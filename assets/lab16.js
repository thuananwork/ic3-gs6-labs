/**
 * Lab 16: 4 Công cụ Mật mã Bảo mật
 * Modular standalone lab decoupled from main bundle.
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

    function sha256(a) {
      function n(f, b) {
        return (f >>> b) | (f << (32 - b));
      }
      const i = [],
        l = a.length,
        c = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ],
        d = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        m = l * 8;
      let u = [];
      for (let f = 0; f < l; f++) u.push(a.charCodeAt(f));
      for (u.push(128); (u.length * 8) % 512 !== 448;) u.push(0);
      const g = new Array(8).fill(0);
      let p = m;
      for (let f = 7; f >= 0; f--)
        ((g[f] = p & 255), (p = Math.floor(p / 256)));
      u = u.concat(g);
      for (let f = 0; f < u.length; f += 64) {
        const b = new Array(64).fill(0);
        for (let O = 0; O < 16; O++)
          b[O] =
            (u[f + O * 4] << 24) |
            (u[f + O * 4 + 1] << 16) |
            (u[f + O * 4 + 2] << 8) |
            u[f + O * 4 + 3];
        for (let O = 16; O < 64; O++) {
          const L = n(b[O - 15], 7) ^ n(b[O - 15], 18) ^ (b[O - 15] >>> 3),
            le = n(b[O - 2], 17) ^ n(b[O - 2], 19) ^ (b[O - 2] >>> 10);
          b[O] = (b[O - 16] + L + b[O - 7] + le) | 0;
        }
        let k = c[0],
          N = c[1],
          M = c[2],
          y = c[3],
          I = c[4],
          R = c[5],
          z = c[6],
          A = c[7];
        for (let O = 0; O < 64; O++) {
          const L = n(I, 6) ^ n(I, 11) ^ n(I, 25),
            le = (I & R) ^ (~I & z),
            P = (A + L + le + d[O] + b[O]) | 0,
            G = n(k, 2) ^ n(k, 13) ^ n(k, 22),
            ee = (k & N) ^ (k & M) ^ (N & M),
            ce = (G + ee) | 0;
          ((A = z),
            (z = R),
            (R = I),
            (I = (y + P) | 0),
            (y = M),
            (M = N),
            (N = k),
            (k = (P + ce) | 0));
        }
        ((c[0] = (c[0] + k) | 0),
          (c[1] = (c[1] + N) | 0),
          (c[2] = (c[2] + M) | 0),
          (c[3] = (c[3] + y) | 0),
          (c[4] = (c[4] + I) | 0),
          (c[5] = (c[5] + R) | 0),
          (c[6] = (c[6] + z) | 0),
          (c[7] = (c[7] + A) | 0));
      }
      for (let f = 0; f < 8; f++) {
        let b = (c[f] >>> 0).toString(16);
        for (; b.length < 8;) b = "0" + b;
        i.push(b);
      }
      return i.join("");
    }
    function sha1(a) {
      const n = unescape(encodeURIComponent(a)),
        i = new ArrayBuffer(n.length),
        l = new Uint8Array(i);
      for (let M = 0; M < n.length; M++) l[M] = n.charCodeAt(M);
      const d = Math.floor((l.length + 8) / 64) + 1,
        m = new Uint32Array(d * 16);
      for (let M = 0; M < l.length; M++)
        m[M >> 2] |= l[M] << (24 - (M & 3) * 8);
      m[l.length >> 2] |= 128 << (24 - (l.length & 3) * 8);
      const u = l.length * 8;
      m[m.length - 1] = u;
      let g = 1732584193,
        p = 4023233417,
        f = 2562383102,
        b = 271733878,
        k = 3285377520;
      const N = new Uint32Array(80);
      for (let M = 0; M < m.length; M += 16) {
        for (let O = 0; O < 16; O++) N[O] = m[M + O];
        for (let O = 16; O < 80; O++) {
          const L = N[O - 3] ^ N[O - 8] ^ N[O - 14] ^ N[O - 16];
          N[O] = (L << 1) | (L >>> 31);
        }
        let y = g,
          I = p,
          R = f,
          z = b,
          A = k;
        for (let O = 0; O < 80; O++) {
          let L, le;
          O < 20
            ? ((L = (I & R) | (~I & z)), (le = 1518500249))
            : O < 40
              ? ((L = I ^ R ^ z), (le = 1859775393))
              : O < 60
                ? ((L = (I & R) | (I & z) | (R & z)), (le = 2400959708))
                : ((L = I ^ R ^ z), (le = 3395469782));
          const P = (((y << 5) | (y >>> 27)) + L + A + le + N[O]) | 0;
          ((A = z), (z = R), (R = (I << 30) | (I >>> 2)), (I = y), (y = P));
        }
        ((g = (g + y) | 0),
          (p = (p + I) | 0),
          (f = (f + R) | 0),
          (b = (b + z) | 0),
          (k = (k + A) | 0));
      }
      return [g, p, f, b, k]
        .map((M) => {
          let y = (M >>> 0).toString(16);
          for (; y.length < 8;) y = "0" + y;
          return y;
        })
        .join("");
    }
    function removeAccents(a) {
      return a
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
    }
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

    return Lab16;
  };
})();
