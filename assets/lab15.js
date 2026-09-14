/**
 * Lab 15: Chỉnh sửa Ảnh & Video
 * Modular standalone lab decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab15 = window.AGY_LABS[15] = function (env) {
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

    function Lab15({ onSuccess: a }) {
      const [n, i] = reactExports.useState(1);
      reactExports.useEffect(() => {
        a();
      }, []);
      const [l, c] = reactExports.useState(null),
        [d, m] = reactExports.useState(!1),
        [u, g] = reactExports.useState(!1),
        [p, f] = reactExports.useState(!1),
        [b, k] = reactExports.useState("none"),
        [N, M] = reactExports.useState(!1),
        [y, I] = reactExports.useState(!1),
        [R, z] = reactExports.useState(!1),
        [A, O] = reactExports.useState("normal"),
        [L, le] = reactExports.useState(100),
        [P, G] = reactExports.useState(0),
        [ee, ce] = reactExports.useState(100),
        [V, pe] = reactExports.useState(100),
        [Ie, se] = reactExports.useState(100),
        [de, _] = reactExports.useState([
          {
            id: "spot-1",
            x: 25,
            y: 18,
            size: 22,
            label: "Vết ố bụi trên bầu trời",
            isHealed: !1,
            isHealing: !1,
            scanProgress: 0,
          },
        ]),
        [U, Z] = reactExports.useState(!1),
        [be, he] = reactExports.useState(null),
        [E, v] = reactExports.useState(null),
        [K, te] = reactExports.useState(!1),
        [je, Se] = reactExports.useState(0),
        [He, Xe] = reactExports.useState(!1),
        [Qe, qe] = reactExports.useState(!1),
        [at, ze] = reactExports.useState("school"),
        [De, tt] = reactExports.useState({
          left: 0,
          top: 0,
          right: 100,
          bottom: 100,
        }),
        [it, oe] = reactExports.useState(null),
        [ie, ge] = reactExports.useState([]),
        [ae, Ae] = reactExports.useState([]),
        [Q, Te] = reactExports.useState([]),
        [$e, _e] = reactExports.useState(!1),
        [Ue, Ke] = reactExports.useState(0),
        [ot, w] = reactExports.useState(!1),
        [C, Ee] = reactExports.useState({ x: 0, y: 0 }),
        [ke, We] = reactExports.useState({ x: 0, y: 0 }),
        ht = reactExports.useRef(null),
        [lt, Fe] = reactExports.useState({ x: -100, y: -100 }),
        [rt, yt] = reactExports.useState(!1),
        [xt, ve] = reactExports.useState(!1),
        [Ye, mt] = reactExports.useState({ x: 0, y: 0 }),
        [Dt, ye] = reactExports.useState({ brightness: 100, contrast: 100 }),
        H = () => {
          (I(!1),
            z(!1),
            O("normal"),
            le(100),
            G(0),
            ce(100),
            pe(100),
            se(100),
            _([
              {
                id: "spot-1",
                x: 25,
                y: 18,
                size: 22,
                label: "Vết ố bụi trên bầu trời",
                isHealed: !1,
                isHealing: !1,
                scanProgress: 0,
              },
            ]),
            tt({ left: 0, top: 0, right: 100, bottom: 100 }),
            ge([]),
            Ae([]),
            Te([]),
            Ke(0),
            qe(!1),
            ze("school"),
            k("none"),
            oe(null),
            w(!1),
            _e(!1),
            ve(!1),
            yt(!1));
        },
        me = (T) => {
          _((gt) =>
            gt.map((Rt) =>
              Rt.id === T ? { ...Rt, isHealing: !0, scanProgress: 0 } : Rt,
            ),
          );
          let Oe = 0;
          const dt = setInterval(() => {
            ((Oe += 10),
              _((gt) =>
                gt.map((Rt) =>
                  Rt.id === T
                    ? Oe >= 100
                      ? (clearInterval(dt),
                        {
                          ...Rt,
                          isHealing: !1,
                          isHealed: !0,
                          scanProgress: 100,
                        })
                      : { ...Rt, scanProgress: Oe }
                    : Rt,
                ),
              ));
          }, 150);
        },
        Le = (T, Oe, dt) => {
          (Ae((gt) => gt.filter((Rt) => Rt.id !== T)),
            ge((gt) => gt.filter((Rt) => Rt.left !== Oe || Rt.top !== dt)),
            ae.length <= 1 && qe(!1));
        },
        Pe = (T) => {
          (Ae((Oe) => Oe.filter((dt) => dt.id !== T)),
            ae.length <= 1 && qe(!1));
        },
        W = (T) => {
          if (!ht.current) return;
          const Oe = ht.current.getBoundingClientRect(),
            dt = T.clientX,
            gt = T.clientY,
            Rt = dt - Oe.left,
            ps = gt - Oe.top,
            Pt = Math.max(0, Math.min(100, (Rt / Oe.width) * 100)),
            es = Math.max(0, Math.min(100, (ps / Oe.height) * 100));
          if (b === "crop") {
            const xs = Math.abs(Pt - De.left),
              Qs = Math.abs(Pt - De.right),
              ks = Math.abs(es - De.top),
              sa = Math.abs(es - De.bottom),
              Ws = Pt >= De.left - 4 && Pt <= De.right + 4,
              Zs = es >= De.top - 4 && es <= De.bottom + 4;
            xs < 4 && Zs
              ? oe("left")
              : Qs < 4 && Zs
                ? oe("right")
                : ks < 4 && Ws
                  ? oe("top")
                  : sa < 4 && Ws
                    ? oe("bottom")
                    : (w(!0), Ee({ x: Pt, y: es }), We({ x: Pt, y: es }));
          } else if (b === "cut")
            (w(!0), Ee({ x: Pt, y: es }), We({ x: Pt, y: es }));
          else if (b === "erase") {
            _e(!0);
            const ms = [{ x: Pt, y: es }];
            Te((xs) => [...xs, ms]);
          } else
            b === "filter"
              ? (ve(!0),
                mt({ x: dt, y: gt }),
                ye({ brightness: L, contrast: ee }))
              : b === "spot" &&
                (Z(!0), he({ x: Pt, y: es }), v({ x: Pt, y: es }));
        },
        Me = (T) => {
          if (!ht.current) return;
          const Oe = ht.current.getBoundingClientRect(),
            dt = T.clientX,
            gt = T.clientY,
            Rt = dt - Oe.left,
            ps = gt - Oe.top,
            Pt = Math.max(0, Math.min(100, (Rt / Oe.width) * 100)),
            es = Math.max(0, Math.min(100, (ps / Oe.height) * 100));
          if ((Fe({ x: Rt, y: ps }), yt(!0), b === "crop"))
            it
              ? (tt((ms) => {
                  const xs = { ...ms };
                  return (
                    it === "left"
                      ? (xs.left = Math.min(ms.right - 10, Pt))
                      : it === "right"
                        ? (xs.right = Math.max(ms.left + 10, Pt))
                        : it === "top"
                          ? (xs.top = Math.min(ms.bottom - 10, es))
                          : it === "bottom" &&
                            (xs.bottom = Math.max(ms.top + 10, es)),
                    xs
                  );
                }),
                I(!0))
              : ot && We({ x: Pt, y: es });
          else if (b === "cut" && ot) We({ x: Pt, y: es });
          else if (b === "erase" && $e)
            (Te((ms) => {
              if (ms.length === 0) return [[{ x: Pt, y: es }]];
              const xs = [...ms],
                Qs = [...xs[xs.length - 1], { x: Pt, y: es }];
              return ((xs[xs.length - 1] = Qs), xs);
            }),
              Pt >= 60 &&
                Pt <= 95 &&
                es >= 25 &&
                es <= 95 &&
                Ke((ms) => {
                  const xs = ms + 1;
                  return (xs >= 15 && !R && z(!0), xs);
                }));
          else if (b === "filter" && xt) {
            const ms = dt - Ye.x,
              xs = gt - Ye.y,
              Qs = Math.max(
                50,
                Math.min(150, Math.round(Dt.brightness + ms / 2)),
              ),
              ks = Math.max(
                50,
                Math.min(150, Math.round(Dt.contrast - xs / 2)),
              );
            (le(Qs), ce(ks));
          } else b === "spot" && U && v({ x: Pt, y: es });
        },
        et = () => {
          if (b === "crop") {
            if (ot) {
              w(!1);
              const T = Math.min(C.x, ke.x),
                Oe = Math.max(C.x, ke.x),
                dt = Math.min(C.y, ke.y),
                gt = Math.max(C.y, ke.y);
              Oe - T > 3 &&
                gt - dt > 3 &&
                (tt({ left: T, top: dt, right: Oe, bottom: gt }), I(!0));
            }
            oe(null);
          } else if (b === "cut") {
            if (ot) {
              w(!1);
              const T = Math.min(C.x, ke.x),
                Oe = Math.max(C.x, ke.x),
                dt = Math.min(C.y, ke.y),
                gt = Math.max(C.y, ke.y);
              if (Oe - T > 3 && gt - dt > 3) {
                const Rt = Math.random().toString(36).substring(2, 9),
                  ps = { left: T, top: dt, right: Oe, bottom: gt };
                (ge((Pt) => [...Pt, ps]),
                  qe(!0),
                  Ae((Pt) => [
                    ...Pt,
                    {
                      id: Rt,
                      left: T,
                      top: dt,
                      right: Oe,
                      bottom: gt,
                      timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }),
                    },
                  ]));
              }
            }
          } else if (b === "erase") _e(!1);
          else if (b === "filter") ve(!1);
          else if (b === "spot") {
            if (U && be && E) {
              const T = de.find((Oe) => {
                const dt = Math.sqrt(
                    Math.pow(Oe.x - be.x, 2) + Math.pow(Oe.y - be.y, 2),
                  ),
                  gt = Math.sqrt(
                    Math.pow(Oe.x - E.x, 2) + Math.pow(Oe.y - E.y, 2),
                  );
                return (dt < 12 || gt < 12) && !Oe.isHealed && !Oe.isHealing;
              });
              T && me(T.id);
            }
            (Z(!1), he(null), v(null));
          }
          yt(!1);
        },
        [Je, Et] = reactExports.useState("trim"),
        [ft, Mt] = reactExports.useState(1),
        [D, Re] = reactExports.useState("16:9"),
        [Ve, Ge] = reactExports.useState(!1),
        [Ze, Nt] = reactExports.useState(!1),
        [Kt, It] = reactExports.useState(0),
        [wt, Ls] = reactExports.useState(0),
        [Ot, Ce] = reactExports.useState(10),
        [st, At] = reactExports.useState(!1),
        [Lt, Zt] = reactExports.useState(5),
        [Vt, Ut] = reactExports.useState(5),
        [hs, Xs] = reactExports.useState(1),
        [ws, fs] = reactExports.useState(!1),
        [Bs, F] = reactExports.useState("none"),
        [Be, S] = reactExports.useState("none"),
        [J, pt] = reactExports.useState(!1),
        [nt, q] = reactExports.useState(3),
        [bt, vt] = reactExports.useState(3),
        [Ct] = reactExports.useState(3),
        [St, _t] = reactExports.useState("all");
      reactExports.useEffect(() => {
        (Vt < wt && Ut(wt),
          Vt > Ot && Ut(Ot),
          bt < wt && vt(wt),
          bt > Ot && vt(Ot));
      }, [wt, Ot]);
      const ns = () => {
        let T = wt,
          Oe = J ? Ot + Ct : Ot;
        return (
          st
            ? St === "A"
              ? (Oe = Lt)
              : St === "B" && (T = Lt)
            : J &&
              (St === "A"
                ? (Oe = nt)
                : St === "spliced"
                  ? ((T = nt), (Oe = nt + Ct))
                  : St === "B" && ((T = nt + Ct), (Oe = Ot + Ct))),
          { start: T, end: Oe }
        );
      };
      (reactExports.useEffect(() => {
        const { start: T, end: Oe } = ns();
        (Kt < T || Kt > Oe) && It(T);
      }, [St, st, J, wt, Ot]),
        reactExports.useEffect(() => {
          let T,
            Oe = performance.now();
          const dt = (gt) => {
            if (Ze) {
              const Rt = ((gt - Oe) / 1e3) * hs;
              It((ps) => {
                let Pt = ps + Rt;
                const { start: es, end: ms } = ns();
                return Pt > ms || Pt < es ? es : Pt;
              });
            }
            ((Oe = gt), (T = requestAnimationFrame(dt)));
          };
          return (
            Ze && (T = requestAnimationFrame(dt)),
            () => cancelAnimationFrame(T)
          );
        }, [Ze, wt, Ot, hs, st, J, Lt, St]));
      const Xt = (T) => {
          T < Ot - 1 && (Ls(T), It(T));
        },
        as = (T) => {
          T > wt + 1 && (Ce(T), It(T));
        },
        Ft = () => {
          (At(!0), Zt(Vt), It(Vt), _t("all"));
        },
        Tt = () => {
          (Nt(!1),
            It(0),
            Ls(0),
            Ce(10),
            At(!1),
            Zt(5),
            Ut(5),
            Xs(1),
            fs(!1),
            F("none"),
            S("none"),
            pt(!1),
            q(3),
            vt(3),
            _t("all"),
            Et("trim"),
            Re("16:9"),
            Ge(!1),
            Mt(1));
        };
      return jsxRuntimeExports.jsxs("div", {
        className: "space-y-8 text-slate-800 dark:text-slate-100",
        children: [
          jsxRuntimeExports.jsxs("div", {
            className:
              "flex flex-col sm:flex-row gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-inner",
            children: [
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i(1),
                id: "tab-photo-studio",
                className: `flex-1 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 1 ? "bg-blue-600 text-white shadow-md scale-102" : "text-slate-600 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-700/40"}`,
                children: [
                  jsxRuntimeExports.jsx(Image, {
                    className: "h-4.5 w-4.5 shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Mô Phỏng Chỉnh Sửa Ảnh",
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => i(2),
                id: "tab-video-studio",
                className: `flex-1 py-3 text-sm sm:text-base font-medium font-black rounded-3xl transition-all flex items-center justify-center gap-2 cursor-pointer ${n === 2 ? "bg-blue-600 text-white shadow-md scale-102" : "text-slate-600 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-700/40"}`,
                children: [
                  jsxRuntimeExports.jsx(Video, {
                    className: "h-4.5 w-4.5 shrink-0",
                  }),
                  jsxRuntimeExports.jsx("span", {
                    children: "Mô Phỏng Chỉnh Sửa Video",
                  }),
                ],
              }),
            ],
          }),
          !1,
          n === 1 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 shadow-xs space-y-6 text-left animate-fadeIn",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 p-5 sm:p-6 rounded-r-2xl flex items-start gap-3",
                  children: [
                    jsxRuntimeExports.jsx(SlidersVertical, {
                      className:
                        "h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      children: [
                        jsxRuntimeExports.jsx("h4", {
                          className:
                            "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wide",
                          children: "PHÒNG LAB GIẢ LẬP: PHOTO STUDIO PRO 🎨",
                        }),
                        jsxRuntimeExports.jsxs("p", {
                          className:
                            "mt-0.5 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                          children: [
                            "Chào mừng em đến với Studio chỉnh sửa ảnh! Hãy trải nghiệm trực tiếp các công cụ ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Crop",
                            }),
                            ", ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Erase",
                            }),
                            ", ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Cut",
                            }),
                            " và ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Filters",
                            }),
                            " để thấu hiểu sự khác biệt cơ bản về tính năng chuẩn đề thi IC3.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "space-y-0.5",
                      children: [
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-semibold font-black uppercase text-blue-600 dark:text-blue-400 tracking-wider block",
                          children: "ẢNH MẪU ĐỒ HỌA THỰC HÀNH:",
                        }),
                        jsxRuntimeExports.jsx("span", {
                          className:
                            "text-sm sm:text-base font-semibold text-slate-500",
                          children:
                            "Hình ảnh giả lập được đồng bộ hóa từ đề bài bao gồm Vùng (1) và Vùng (2) với các hình khối tiêu chuẩn.",
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsx("div", {
                      className: "flex items-center gap-2",
                      children: jsxRuntimeExports.jsx("span", {
                        className:
                          "text-sm sm:text-base font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-5 sm:px-5 py-3 rounded-3xl font-bold flex items-center gap-1.5 shadow-2xs",
                        children: jsxRuntimeExports.jsx("span", {
                          children: "🎯 Phiên bản Lab 2026",
                        }),
                      }),
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "lg:col-span-4 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800 space-y-3.5",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 dark:text-slate-500 tracking-wider block",
                              children: "CHỌN CÔNG CỤ CHỈNH SỬA",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-1 gap-2",
                              children: [
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (k("crop"), Xe(!1));
                                  },
                                  className: `w-full p-8 sm:p-5 rounded-3xl border text-left flex items-center gap-3 transition-all cursor-pointer ${b === "crop" ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white hover:bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-1.5 rounded-3xl ${b === "crop" ? "bg-white/20 text-white" : "bg-blue-100 dark:bg-blue-950 text-blue-600"}`,
                                      children: jsxRuntimeExports.jsx(Crop, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      children: jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black block",
                                        children: "Crop (cắt xén)",
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (k("erase"), Xe(!0));
                                  },
                                  className: `w-full p-8 sm:p-5 rounded-3xl border text-left flex items-center gap-3 transition-all cursor-pointer ${b === "erase" ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white hover:bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-1.5 rounded-3xl ${b === "erase" ? "bg-white/20 text-white" : "bg-amber-100 dark:bg-amber-950 text-amber-600"}`,
                                      children: jsxRuntimeExports.jsx(Eraser, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      children: jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black block",
                                        children: "Erase (Xóa định hướng)",
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (k("cut"), Xe(!1));
                                  },
                                  className: `w-full p-8 sm:p-5 rounded-3xl border text-left flex items-center gap-3 transition-all cursor-pointer ${b === "cut" ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white hover:bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-1.5 rounded-3xl ${b === "cut" ? "bg-white/20 text-white" : "bg-purple-100 dark:bg-purple-950 text-purple-600"}`,
                                      children: jsxRuntimeExports.jsx(Move, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      children: jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black block",
                                        children: "Cut (Xóa phần được chọn)",
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (k("filter"), Xe(!1));
                                  },
                                  className: `w-full p-8 sm:p-5 rounded-3xl border text-left flex items-center gap-3 transition-all cursor-pointer ${b === "filter" ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white hover:bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-1.5 rounded-3xl ${b === "filter" ? "bg-white/20 text-white" : "bg-emerald-100 dark:bg-emerald-950 text-emerald-600"}`,
                                      children: jsxRuntimeExports.jsx(
                                        Sparkles,
                                        { className: "h-4.5 w-4.5" },
                                      ),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      children: jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black block",
                                        children: "Filter (Bộ lọc)",
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("button", {
                                  onClick: () => {
                                    (k("spot"), Xe(!1));
                                  },
                                  className: `w-full p-8 sm:p-5 rounded-3xl border text-left flex items-center gap-3 transition-all cursor-pointer ${b === "spot" ? "bg-blue-600 border-blue-600 text-white shadow-md" : "bg-white hover:bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-850"}`,
                                  children: [
                                    jsxRuntimeExports.jsx("div", {
                                      className: `p-1.5 rounded-3xl ${b === "spot" ? "bg-white/20 text-white" : "bg-red-100 dark:bg-red-950 text-red-600"}`,
                                      children: jsxRuntimeExports.jsx(
                                        Sparkles,
                                        { className: "h-4.5 w-4.5" },
                                      ),
                                    }),
                                    jsxRuntimeExports.jsx("div", {
                                      children: jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black block",
                                        children: "Spot (Tinh chỉnh)",
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
                            "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800 space-y-3 min-h-[160px]",
                          children: [
                            b === "none" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-2 animate-fadeIn text-slate-500 text-sm sm:text-base font-medium py-3",
                                children: [
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "font-extrabold text-slate-700 dark:text-slate-300",
                                    children: "💡 CHƯA CHỌN CÔNG CỤ NÀO",
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className: "font-semibold leading-relaxed",
                                    children:
                                      "Em hãy chọn một trong các công cụ chuyên dụng phía trên (Crop, Erase, Cut hoặc Filter) để bắt đầu trải nghiệm cách biên tập trực quan nhé!",
                                  }),
                                ],
                              }),
                            b === "crop" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed",
                                    children: [
                                      "👉 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Cách dùng:",
                                      }),
                                      " Rê chuột kéo vẽ một hộp chữ nhật trực tiếp trên ảnh, hoặc kéo ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "4 tay cầm màu trắng",
                                      }),
                                      " ở các cạnh (Trên, Dưới, Trái, Phải) để cắt xén!",
                                    ],
                                  }),
                                  y
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "p-8 sm:p-5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-sm sm:text-base font-semibold rounded-3xl font-bold flex items-center gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsx(Check, {
                                                className:
                                                  "h-3.5 w-3.5 shrink-0",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "Đã xén khung ảnh thành công!",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 font-mono font-bold flex flex-wrap gap-x-2 gap-y-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "Trái: ",
                                                  Math.round(De.left),
                                                  "%",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "Phải: ",
                                                  Math.round(100 - De.right),
                                                  "%",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "Trên: ",
                                                  Math.round(De.top),
                                                  "%",
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "Dưới: ",
                                                  Math.round(100 - De.bottom),
                                                  "%",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-8 sm:p-5 bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-500/20 text-sm sm:text-base font-semibold rounded-3xl font-bold",
                                        children:
                                          "💡 Thao tác trực tiếp để xén bớt phần rìa ngoài thừa.",
                                      }),
                                ],
                              }),
                            b === "erase" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3 animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed",
                                    children: [
                                      "👉 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Cách dùng:",
                                      }),
                                      " Giữ chuột trái và di chuyển cọ bôi xóa đè lên nhân vật ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: '"Bạn nghịch ngợm 🤪"',
                                      }),
                                      " để xóa sạch đối tượng này khỏi tấm ảnh sân trường!",
                                    ],
                                  }),
                                  R
                                    ? jsxRuntimeExports.jsx("div", {
                                        className:
                                          "p-8 sm:p-5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-sm sm:text-base font-semibold rounded-3xl font-bold",
                                        children:
                                          '🎉 Đã xóa sạch nhân vật "Bạn nghịch ngợm 🤪" bằng cọ bôi xóa! Chiều rộng ảnh vẫn giữ nguyên 800px.',
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          jsxRuntimeExports.jsx("div", {
                                            className:
                                              "p-8 sm:p-5 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-sm sm:text-base font-semibold rounded-3xl font-bold",
                                            children:
                                              "🧽 Hãy di chuột bôi xóa lên vùng nhân vật ở rìa bên phải!",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-extrabold text-slate-500",
                                                children: "Tiến trình xóa:",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",
                                                children: jsxRuntimeExports.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "h-full bg-amber-500 transition-all duration-150",
                                                    style: {
                                                      width: `${Math.min(100, Math.round((Ue / 15) * 100))}%`,
                                                    },
                                                  },
                                                ),
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-sm sm:text-base font-semibold font-mono font-bold text-amber-600",
                                                children: [
                                                  Math.min(
                                                    100,
                                                    Math.round((Ue / 15) * 100),
                                                  ),
                                                  "%",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            b === "cut" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3 animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed",
                                    children: [
                                      "👉 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Cách dùng:",
                                      }),
                                      " Giữ chuột trái quét một hộp chọn trên bất kỳ vùng nào của ảnh để cắt rời (vùng đó sẽ bị biến mất khỏi canvas chính và được chuyển vào ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Bộ nhớ tạm (Clipboard)",
                                      }),
                                      " bên dưới).",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2 mt-4",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1.5 text-purple-600",
                                            children: [
                                              jsxRuntimeExports.jsx(Scissors, {
                                                className: "h-3.5 w-3.5",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "BỘ NHỚ TẠM CLIPBOARD (",
                                                  ae.length,
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          }),
                                          ae.length > 0 &&
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => {
                                                (ge([]), Ae([]), qe(!1));
                                              },
                                              className:
                                                "text-sm sm:text-base font-semibold text-rose-500 hover:underline font-bold cursor-pointer",
                                              children: "Xóa tất cả",
                                            }),
                                        ],
                                      }),
                                      ae.length === 0
                                        ? jsxRuntimeExports.jsx("div", {
                                            className:
                                              "p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-sm sm:text-base font-semibold text-slate-400 font-bold",
                                            children:
                                              "🗂️ Chưa có dữ liệu cắt. Hãy rê chuột vẽ chọn một vùng trên ảnh!",
                                          })
                                        : jsxRuntimeExports.jsx("div", {
                                            className:
                                              "space-y-1.5 max-h-[160px] overflow-y-auto pr-1",
                                            children: ae.map((T) => {
                                              const Oe = Math.round(
                                                  T.right - T.left,
                                                ),
                                                dt = Math.round(
                                                  T.bottom - T.top,
                                                );
                                              return jsxRuntimeExports.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "flex items-center justify-between p-8 sm:p-5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-semibold gap-2 hover:border-purple-300 dark:hover:border-purple-900/50 transition-colors animate-fadeIn",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "relative w-8 h-8 rounded-md border border-slate-200 dark:border-slate-700 overflow-hidden bg-white flex-shrink-0 flex items-center justify-center",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "absolute inset-0",
                                                                    style: {
                                                                      backgroundImage:
                                                                        "conic-gradient(#f1f5f9 25%, #ffffff 25% 50%, #f1f5f9 50% 75%, #ffffff 75%)",
                                                                      backgroundSize:
                                                                        "6px 6px",
                                                                    },
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-sm sm:text-base font-medium relative z-10",
                                                                    children:
                                                                      "👦",
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              children: [
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "font-bold text-slate-700 dark:text-slate-300",
                                                                    children: [
                                                                      "Mảnh cắt #",
                                                                      T.id,
                                                                    ],
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsxs(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "text-[9px] text-slate-400 font-medium",
                                                                    children: [
                                                                      "Kích thước: ",
                                                                      Oe,
                                                                      "% x ",
                                                                      dt,
                                                                      "% • ",
                                                                      T.timestamp,
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
                                                        className: "flex gap-1",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: () =>
                                                                Le(
                                                                  T.id,
                                                                  T.left,
                                                                  T.top,
                                                                ),
                                                              className:
                                                                "px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 rounded font-bold text-[9px] transition-all cursor-pointer",
                                                              title:
                                                                "Dán ngược lại ảnh",
                                                              children:
                                                                "Khôi phục 📋",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "button",
                                                            {
                                                              onClick: () =>
                                                                Pe(T.id),
                                                              className:
                                                                "p-1 bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 rounded transition-all cursor-pointer animate-pulse",
                                                              title:
                                                                "Xóa vĩnh viễn",
                                                              children:
                                                                jsxRuntimeExports.jsx(
                                                                  Trash2,
                                                                  {
                                                                    className:
                                                                      "h-3 w-3",
                                                                  },
                                                                ),
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                },
                                                T.id,
                                              );
                                            }),
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            b === "filter" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-4 animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2 pb-2",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 block tracking-wider",
                                        children:
                                          "Bộ lọc màu (Filter Presets):",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "grid grid-cols-2 gap-1.5",
                                        children: [
                                          {
                                            id: "normal",
                                            name: "Gốc",
                                            emoji: "🖼️",
                                          },
                                          {
                                            id: "grayscale",
                                            name: "Đen Trắng",
                                            emoji: "🪙",
                                          },
                                          {
                                            id: "vintage",
                                            name: "Hoài Cổ",
                                            emoji: "🎞️",
                                          },
                                          {
                                            id: "sunset",
                                            name: "Ấm Áp",
                                            emoji: "🌇",
                                          },
                                          {
                                            id: "vibrant",
                                            name: "Rực Rỡ",
                                            emoji: "🎨",
                                          },
                                        ].map((T) =>
                                          jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              onClick: () => O(T.id),
                                              className: `px-2 py-3 rounded-3xl text-sm sm:text-base font-bold border cursor-pointer transition-all flex items-center gap-1.5 ${A === T.id ? "bg-emerald-600 border-emerald-600 text-white shadow-sm" : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  children: T.emoji,
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  children: T.name,
                                                }),
                                              ],
                                            },
                                            T.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between text-sm sm:text-base font-bold text-slate-500",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(Sun, {
                                                className: "h-3 w-3",
                                              }),
                                              "Độ Sáng (Brightness)",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-emerald-600",
                                            children: [L, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "range",
                                        min: "50",
                                        max: "150",
                                        value: L,
                                        onChange: (T) =>
                                          le(Number(T.target.value)),
                                        className:
                                          "w-full accent-emerald-600 h-1 bg-slate-200 rounded-3xl cursor-pointer",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between text-sm sm:text-base font-bold text-slate-500",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(Flame, {
                                                className:
                                                  "h-3 w-3 text-amber-500",
                                              }),
                                              "Phơi Sáng (Exposure)",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-emerald-600",
                                            children: [
                                              P >= 0 ? "+" : "",
                                              (P / 50).toFixed(1),
                                              " EV",
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "range",
                                        min: "-100",
                                        max: "100",
                                        value: P,
                                        onChange: (T) =>
                                          G(Number(T.target.value)),
                                        className:
                                          "w-full accent-emerald-600 h-1 bg-slate-200 rounded-3xl cursor-pointer",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between text-sm sm:text-base font-bold text-slate-500",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(Contrast, {
                                                className: "h-3 w-3",
                                              }),
                                              "Độ Tương Phản",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-emerald-600",
                                            children: [ee, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "range",
                                        min: "50",
                                        max: "150",
                                        value: ee,
                                        onChange: (T) =>
                                          ce(Number(T.target.value)),
                                        className:
                                          "w-full accent-emerald-600 h-1 bg-slate-200 rounded-3xl cursor-pointer",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "flex justify-between text-sm sm:text-base font-bold text-slate-500",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              jsxRuntimeExports.jsx(Eye, {
                                                className: "h-3 w-3",
                                              }),
                                              "Độ Mờ (Opacity)",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "font-mono text-emerald-600",
                                            children: [Ie, "%"],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("input", {
                                        type: "range",
                                        min: "10",
                                        max: "100",
                                        value: Ie,
                                        onChange: (T) =>
                                          se(Number(T.target.value)),
                                        className:
                                          "w-full accent-emerald-600 h-1 bg-slate-200 rounded-3xl cursor-pointer",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            b === "spot" &&
                              jsxRuntimeExports.jsxs("div", {
                                className: "space-y-3 animate-fadeIn text-left",
                                children: [
                                  jsxRuntimeExports.jsxs("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-semibold leading-relaxed",
                                    children: [
                                      "👉 ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "Cách dùng:",
                                      }),
                                      " Nhấn giữ chuột vào một vùng sạch lân cận (Nguồn 🟢) và ",
                                      jsxRuntimeExports.jsx("strong", {
                                        children: "kéo (drag) thả",
                                      }),
                                      " vào vết bẩn (Đích 🔴) để tự động đắp màu, trộn nền tự nhiên nhằm xoá vết bẩn nhưng vẫn giữ nguyên vẹn cấu trúc nền ban đầu.",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-950/20 rounded-3xl space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-sm sm:text-base font-semibold font-black text-red-600 dark:text-red-400 uppercase tracking-wider block",
                                        children:
                                          "CƠ CHẾ THUẬT TOÁN SPOT HEALING:",
                                      }),
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 font-semibold leading-relaxed",
                                        children: [
                                          "1. ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Quét biên:",
                                          }),
                                          " Tự động phân tích vùng đệm xung quanh vết bẩn.",
                                          jsxRuntimeExports.jsx("br", {}),
                                          "2. ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Sao chép nền:",
                                          }),
                                          " Tìm vùng có kết cấu (texture) tương đồng & sạch đẹp.",
                                          jsxRuntimeExports.jsx("br", {}),
                                          "3. ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Trộn màu (Blending):",
                                          }),
                                          " Sử dụng phương pháp toán học Poisson Blending để bù đắp các chi tiết, đảm bảo sự mượt mà không để lại vết sẹo trên ảnh.",
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-2 mt-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("span", {
                                            className:
                                              "flex items-center gap-1.5 text-red-600",
                                            children: [
                                              jsxRuntimeExports.jsx(Sparkles, {
                                                className: "h-3.5 w-3.5",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                children: [
                                                  "DANH SÁCH VẾT BẨN TRÊN ẢNH (",
                                                  de.filter((T) => !T.isHealed)
                                                    .length,
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          }),
                                          de.some((T) => T.isHealed) &&
                                            jsxRuntimeExports.jsx("button", {
                                              onClick: () => {
                                                _((T) =>
                                                  T.map((Oe) => ({
                                                    ...Oe,
                                                    isHealed: !1,
                                                    isHealing: !1,
                                                    scanProgress: 0,
                                                  })),
                                                );
                                              },
                                              className:
                                                "text-sm sm:text-base font-semibold text-rose-500 hover:underline font-bold cursor-pointer",
                                              children: "Tạo lại vết bẩn 🔄",
                                            }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "space-y-1.5",
                                        children: de.map((T) =>
                                          jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center justify-between p-8 sm:p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl text-sm sm:text-base font-semibold hover:border-red-300 dark:hover:border-red-900/50 transition-all cursor-pointer",
                                              onClick: () => {
                                                !T.isHealed &&
                                                  !T.isHealing &&
                                                  me(T.id);
                                              },
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className: "text-base",
                                                        children:
                                                          T.id === "spot-1"
                                                            ? "☁️"
                                                            : T.id === "spot-2"
                                                              ? "📷"
                                                              : "🌱",
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
                                                                "font-extrabold text-slate-700 dark:text-slate-300",
                                                              children: T.label,
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[9px] font-semibold text-slate-400 block",
                                                              children: [
                                                                "Vị trí: X: ",
                                                                T.x,
                                                                "%, Y: ",
                                                                T.y,
                                                                "%",
                                                              ],
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  children: T.isHealed
                                                    ? jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-sm sm:text-base font-semibold bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-black uppercase tracking-wide",
                                                          children: "✓ Đã Sửa",
                                                        },
                                                      )
                                                    : T.isHealing
                                                      ? jsxRuntimeExports.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-center gap-1.5 text-sm sm:text-base font-semibold text-amber-600 dark:text-amber-400 font-bold",
                                                            children: [
                                                              jsxRuntimeExports.jsx(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "animate-spin text-sm sm:text-base font-medium",
                                                                  children:
                                                                    "⏳",
                                                                },
                                                              ),
                                                              jsxRuntimeExports.jsxs(
                                                                "span",
                                                                {
                                                                  children: [
                                                                    T.scanProgress,
                                                                    "%",
                                                                  ],
                                                                },
                                                              ),
                                                            ],
                                                          },
                                                        )
                                                      : jsxRuntimeExports.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-sm sm:text-base font-semibold bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 px-2 py-0.5 rounded-full font-black uppercase tracking-wide animate-pulse-subtle",
                                                            children:
                                                              "Chưa Sửa 🔴",
                                                          },
                                                        ),
                                                }),
                                              ],
                                            },
                                            T.id,
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
                    jsxRuntimeExports.jsxs("div", {
                      className:
                        "lg:col-span-8 flex flex-col items-center justify-center space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          ref: ht,
                          onMouseDown: W,
                          onMouseMove: Me,
                          onMouseUp: et,
                          onMouseLeave: et,
                          style: {
                            backgroundImage:
                              "conic-gradient(#f1f5f9 25%, #ffffff 25% 50%, #f1f5f9 50% 75%, #ffffff 75%)",
                            backgroundSize: "20px 20px",
                            backgroundColor: "#ffffff",
                          },
                          className: `w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg relative flex items-center justify-center select-none transition-shadow ${b === "crop" ? "cursor-crosshair hover:shadow-blue-500/10" : b === "erase" ? "cursor-cell hover:shadow-amber-500/10" : b === "cut" ? "cursor-crosshair hover:shadow-purple-500/10" : b === "filter" ? "cursor-move hover:shadow-emerald-500/10" : b === "spot" ? "cursor-none hover:shadow-red-500/10" : "cursor-default"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "absolute inset-0 overflow-hidden",
                              style: {
                                clipPath: y
                                  ? `inset(${De.top}% ${100 - De.right}% ${100 - De.bottom}% ${De.left}%)`
                                  : "none",
                              },
                              children: [
                                jsxRuntimeExports.jsxs("svg", {
                                  className:
                                    "absolute inset-0 w-full h-full pointer-events-none",
                                  viewBox: "0 0 100 100",
                                  preserveAspectRatio: "none",
                                  children: [
                                    jsxRuntimeExports.jsx("defs", {
                                      children: jsxRuntimeExports.jsxs("mask", {
                                        id: `photo-combined-mask-${Q.length}-${ie.length}`,
                                        maskUnits: "userSpaceOnUse",
                                        x: "0",
                                        y: "0",
                                        width: "100",
                                        height: "100",
                                        children: [
                                          jsxRuntimeExports.jsx("rect", {
                                            x: "0",
                                            y: "0",
                                            width: "100",
                                            height: "100",
                                            fill: "white",
                                          }),
                                          Q.map((T, Oe) => {
                                            if (T.length === 0) return null;
                                            const dt = T.map(
                                              (gt, Rt) =>
                                                `${Rt === 0 ? "M" : "L"} ${gt.x} ${gt.y}`,
                                            ).join(" ");
                                            return jsxRuntimeExports.jsx(
                                              "path",
                                              {
                                                d: dt,
                                                fill: "none",
                                                stroke: "black",
                                                strokeWidth: "8",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                              },
                                              Oe,
                                            );
                                          }),
                                          ie.map((T, Oe) =>
                                            jsxRuntimeExports.jsx(
                                              "rect",
                                              {
                                                x: T.left,
                                                y: T.top,
                                                width: T.right - T.left,
                                                height: T.bottom - T.top,
                                                fill: "black",
                                              },
                                              Oe,
                                            ),
                                          ),
                                        ],
                                      }),
                                    }),
                                    jsxRuntimeExports.jsx("g", {
                                      mask: `url(#photo-combined-mask-${Q.length}-${ie.length})`,
                                      children: jsxRuntimeExports.jsx(
                                        "foreignObject",
                                        {
                                          x: "0",
                                          y: "0",
                                          width: "100",
                                          height: "100",
                                          className: "w-full h-full",
                                          children: jsxRuntimeExports.jsxs(
                                            "div",
                                            {
                                              className:
                                                "relative overflow-hidden select-none",
                                              style: {
                                                width: "800px",
                                                height: "600px",
                                                transform:
                                                  "scale(0.125, 0.16666667)",
                                                transformOrigin: "top left",
                                                opacity: Ie / 100,
                                                filter: `
                              ${A === "grayscale" ? "grayscale(100%)" : ""}
                              ${A === "vintage" ? "sepia(60%) hue-rotate(-20deg)" : ""}
                              ${A === "sunset" ? "saturate(130%) sepia(30%) hue-rotate(10deg)" : ""}
                              ${A === "vibrant" ? "saturate(160%) contrast(110%)" : ""}
                              brightness(${L}%)
                              brightness(${100 + P}%)
                              contrast(${ee}%)
                            `,
                                              },
                                              children: [
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute inset-0 bg-gradient-to-b from-sky-300 via-emerald-150 to-emerald-400 flex flex-col justify-between p-8 overflow-hidden select-none",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex justify-between items-start w-full",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "h-20 w-20 rounded-full bg-yellow-100 flex items-center justify-center shadow-lg border-2 border-yellow-300 text-yellow-500 font-bold text-3xl animate-pulse",
                                                              children: "☀️",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "text-right",
                                                              children: [
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "bg-sky-950 text-white font-black text-3xl px-5 sm:px-6 py-3 rounded-3xl shadow-xl border border-sky-700 block tracking-widest uppercase select-none",
                                                                    children:
                                                                      "SCHOOL YARD",
                                                                  },
                                                                ),
                                                                jsxRuntimeExports.jsx(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-sky-900 bg-white/60 dark:bg-slate-900/40 px-2.5 py-0.5 rounded-full text-sm sm:text-base font-semibold font-black tracking-wider uppercase inline-block mt-1.5 shadow-xs",
                                                                    children:
                                                                      "Ảnh Test Lab 15",
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
                                                          "h-16 bg-emerald-600/40 rounded-t-3xl border-t-2 border-emerald-500/20",
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "absolute bottom-6 left-[15%] w-[30%] h-[70%] flex flex-col justify-end items-center z-10 select-none",
                                                  children: [
                                                    jsxRuntimeExports.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-24 h-40 rounded-full bg-yellow-100 flex items-center justify-center border-4 border-yellow-400 relative shadow-md",
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-5xl",
                                                              children: "👦",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "absolute -top-5 bg-blue-600 text-sm sm:text-base font-semibold text-white px-5 sm:px-6 py-1 rounded-full font-black uppercase whitespace-nowrap tracking-wider shadow-md border border-blue-400",
                                                              children: "TÔI",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "w-32 h-40 bg-white dark:bg-slate-850 rounded-t-3xl border-t-8 border-blue-500 relative flex items-center justify-center shadow-xs",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "font-black text-sm sm:text-base font-medium mt-3 text-blue-600 tracking-wider",
                                                              children:
                                                                "IC3 STUDENT",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                  ],
                                                }),
                                                jsxRuntimeExports.jsx(
                                                  AnimatePresence,
                                                  {
                                                    children:
                                                      !R &&
                                                      jsxRuntimeExports.jsxs(
                                                        motion.div,
                                                        {
                                                          initial: {
                                                            opacity: 1,
                                                            scale: 1,
                                                          },
                                                          exit: {
                                                            opacity: 0,
                                                            scale: 0.5,
                                                          },
                                                          className:
                                                            "absolute bottom-6 right-[12%] w-[30%] h-[70%] flex flex-col justify-end items-center pointer-events-auto z-10 select-none",
                                                          children: [
                                                            jsxRuntimeExports.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "w-24 h-40 rounded-full bg-yellow-200 border-yellow-400 flex items-center justify-center border-4 relative shadow-md",
                                                                children: [
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-5xl",
                                                                      children:
                                                                        "🤪",
                                                                    },
                                                                  ),
                                                                  jsxRuntimeExports.jsx(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "absolute -top-5 bg-rose-600 text-sm sm:text-base font-semibold text-white px-5 sm:px-6 py-1 rounded-full font-black uppercase whitespace-nowrap tracking-wider shadow-md border border-rose-400",
                                                                      children:
                                                                        "BẠN NGHỊCH NGỢM",
                                                                    },
                                                                  ),
                                                                ],
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "w-32 h-40 bg-rose-500 border-amber-400 rounded-t-3xl border-t-8 flex items-center justify-center relative shadow-xs",
                                                                children:
                                                                  jsxRuntimeExports.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-white font-black text-sm sm:text-base font-medium mt-3 text-center px-1 tracking-wider",
                                                                      children:
                                                                        "ÁO ĐỎ RÌA NGOÀI",
                                                                    },
                                                                  ),
                                                              },
                                                            ),
                                                          ],
                                                        },
                                                      ),
                                                  },
                                                ),
                                              ],
                                            },
                                          ),
                                        },
                                      ),
                                    }),
                                  ],
                                }),
                                b === "erase" &&
                                  Q.length > 0 &&
                                  jsxRuntimeExports.jsx("svg", {
                                    className:
                                      "absolute inset-0 pointer-events-none z-20 w-full h-full",
                                    viewBox: "0 0 100 100",
                                    preserveAspectRatio: "none",
                                    children: Q.map((T, Oe) => {
                                      if (T.length === 0) return null;
                                      const dt = T.map(
                                        (gt, Rt) =>
                                          `${Rt === 0 ? "M" : "L"} ${gt.x} ${gt.y}`,
                                      ).join(" ");
                                      return jsxRuntimeExports.jsx(
                                        "path",
                                        {
                                          d: dt,
                                          fill: "none",
                                          stroke: "#fbbf24",
                                          strokeWidth: "8",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          className: "opacity-65",
                                        },
                                        Oe,
                                      );
                                    }),
                                  }),
                                ot &&
                                  jsxRuntimeExports.jsx("div", {
                                    className: `absolute border-2 border-dashed pointer-events-none z-30 ${b === "crop" ? "border-blue-500 bg-blue-500/15" : "border-purple-500 bg-purple-500/15"}`,
                                    style: {
                                      left: `${Math.min(C.x, ke.x)}%`,
                                      top: `${Math.min(C.y, ke.y)}%`,
                                      width: `${Math.abs(ke.x - C.x)}%`,
                                      height: `${Math.abs(ke.y - C.y)}%`,
                                    },
                                  }),
                                R &&
                                  !y &&
                                  jsxRuntimeExports.jsx(motion.div, {
                                    initial: { opacity: 0 },
                                    animate: { opacity: [0, 1, 0] },
                                    transition: { duration: 1.5 },
                                    className:
                                      "absolute bottom-4 right-[10%] w-[35%] h-[75%] bg-amber-500/10 border-2 border-dashed border-amber-500 rounded-3xl flex items-center justify-center pointer-events-none",
                                    children: jsxRuntimeExports.jsx("span", {
                                      className: "text-2xl animate-spin",
                                      children: "✨",
                                    }),
                                  }),
                                b === "spot" &&
                                  de.map((T) =>
                                    T.isHealed
                                      ? null
                                      : jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            style: {
                                              left: `${T.x}%`,
                                              top: `${T.y}%`,
                                              width: `${T.size}px`,
                                              height: `${T.size}px`,
                                            },
                                            className:
                                              "absolute -translate-x-1/2 -translate-y-1/2 z-25 group cursor-pointer pointer-events-auto",
                                            onClick: (Oe) => {
                                              (Oe.stopPropagation(),
                                                !T.isHealed &&
                                                  !T.isHealing &&
                                                  me(T.id));
                                            },
                                            children: [
                                              jsxRuntimeExports.jsx(
                                                AnimatePresence,
                                                {
                                                  children:
                                                    !T.isHealed &&
                                                    jsxRuntimeExports.jsx(
                                                      motion.div,
                                                      {
                                                        initial: {
                                                          opacity: 0.8,
                                                        },
                                                        animate: T.isHealing
                                                          ? {
                                                              scale: [
                                                                1, 0.9, 1.1, 1,
                                                              ],
                                                              opacity: [
                                                                0.8, 0.4, 0.8,
                                                              ],
                                                            }
                                                          : {
                                                              scale: 1,
                                                              opacity: 0.8,
                                                            },
                                                        exit: {
                                                          opacity: 0,
                                                          scale: 0,
                                                          filter: "blur(8px)",
                                                        },
                                                        transition: {
                                                          duration: T.isHealing
                                                            ? 0.5
                                                            : 0.3,
                                                          repeat: T.isHealing
                                                            ? 1 / 0
                                                            : 0,
                                                        },
                                                        className: `absolute inset-0 rounded-full blur-[2.5px] border border-black/10 shadow-inner flex items-center justify-center ${T.id === "spot-1" ? "bg-sky-900/60" : T.id === "spot-2" ? "bg-slate-800/80" : "bg-emerald-950/70"}`,
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "w-1.5 h-1.5 bg-black/45 rounded-full blur-[0.5px]",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                },
                                              ),
                                              !T.isHealed &&
                                                !T.isHealing &&
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute inset-0 rounded-full border-2 border-red-500/50 scale-125 animate-ping opacity-60",
                                                }),
                                              T.isHealing &&
                                                jsxRuntimeExports.jsxs(
                                                  jsxRuntimeExports.Fragment,
                                                  {
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "absolute -inset-6 rounded-full border-2 border-dashed border-red-500 animate-spin z-35",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "absolute -inset-4 rounded-full border border-red-400 bg-red-400/10 animate-ping z-30",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "svg",
                                                        {
                                                          className:
                                                            "absolute overflow-visible pointer-events-none z-30",
                                                          style: {
                                                            left: "50%",
                                                            top: "50%",
                                                          },
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "line",
                                                              {
                                                                x1: "0",
                                                                y1: "0",
                                                                x2: "-35",
                                                                y2: "25",
                                                                stroke:
                                                                  "#ef4444",
                                                                strokeWidth:
                                                                  "1.5",
                                                                strokeDasharray:
                                                                  "3 3",
                                                                className:
                                                                  "animate-pulse",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsx(
                                                              "circle",
                                                              {
                                                                r: "3",
                                                                fill: "#3b82f6",
                                                                className:
                                                                  "animate-bounce",
                                                                children:
                                                                  jsxRuntimeExports.jsx(
                                                                    "animateMotion",
                                                                    {
                                                                      path: "M -35 25 L 0 0",
                                                                      dur: "0.8s",
                                                                      repeatCount:
                                                                        "indefinite",
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
                                                            "absolute top-8 left-1/2 -translate-x-1/2 bg-slate-950/95 border border-red-500/50 text-white text-[8px] font-black px-2 py-0.5 rounded-3xl shadow-xl whitespace-nowrap z-40 flex flex-col items-center gap-0.5",
                                                          children: [
                                                            jsxRuntimeExports.jsx(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-red-400 font-extrabold uppercase animate-pulse",
                                                                children:
                                                                  T.scanProgress <
                                                                  40
                                                                    ? "🔍 Quét nền..."
                                                                    : T.scanProgress <
                                                                        80
                                                                      ? "📋 Sao chép nền..."
                                                                      : "✨ Trộn màu Poisson...",
                                                              },
                                                            ),
                                                            jsxRuntimeExports.jsxs(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[7px] font-mono font-medium opacity-80 text-yellow-400",
                                                                children: [
                                                                  T.scanProgress,
                                                                  "%",
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
                                          T.id,
                                        ),
                                  ),
                                b === "spot" &&
                                  U &&
                                  be &&
                                  E &&
                                  jsxRuntimeExports.jsxs(
                                    jsxRuntimeExports.Fragment,
                                    {
                                      children: [
                                        jsxRuntimeExports.jsxs("svg", {
                                          className:
                                            "absolute inset-0 w-full h-full pointer-events-none z-45",
                                          children: [
                                            jsxRuntimeExports.jsx("defs", {
                                              children: jsxRuntimeExports.jsxs(
                                                "linearGradient",
                                                {
                                                  id: "patch-grad",
                                                  x1: "0%",
                                                  y1: "0%",
                                                  x2: "100%",
                                                  y2: "100%",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "stop",
                                                      {
                                                        offset: "0%",
                                                        stopColor: "#10b981",
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "stop",
                                                      {
                                                        offset: "100%",
                                                        stopColor: "#ef4444",
                                                      },
                                                    ),
                                                  ],
                                                },
                                              ),
                                            }),
                                            jsxRuntimeExports.jsx("line", {
                                              x1: `${be.x}%`,
                                              y1: `${be.y}%`,
                                              x2: `${E.x}%`,
                                              y2: `${E.y}%`,
                                              stroke: "url(#patch-grad)",
                                              strokeWidth: "2",
                                              strokeDasharray: "4 4",
                                            }),
                                            jsxRuntimeExports.jsx("circle", {
                                              cx: `${be.x}%`,
                                              cy: `${be.y}%`,
                                              r: "3",
                                              fill: "#10b981",
                                            }),
                                          ],
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          style: {
                                            left: `${be.x}%`,
                                            top: `${be.y}%`,
                                            width: "26px",
                                            height: "26px",
                                          },
                                          className:
                                            "absolute -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-emerald-500 bg-emerald-500/20 rounded-full z-40 flex items-center justify-center animate-pulse",
                                          children: jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className:
                                                "absolute -top-7 left-1/2 -translate-x-1/2 bg-emerald-600/90 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow whitespace-nowrap",
                                              children: "LÂN CẬN (NGUỒN) 🟢",
                                            },
                                          ),
                                        }),
                                        jsxRuntimeExports.jsx("div", {
                                          style: {
                                            left: `${E.x}%`,
                                            top: `${E.y}%`,
                                            width: "26px",
                                            height: "26px",
                                          },
                                          className: `absolute -translate-x-1/2 -translate-y-1/2 border-2 rounded-full z-40 flex items-center justify-center transition-colors ${de.some((T) => !T.isHealed && Math.sqrt(Math.pow(T.x - E.x, 2) + Math.pow(T.y - E.y, 2)) < 12) ? "border-emerald-500 bg-emerald-500/35 scale-110 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-bounce" : "border-dashed border-red-500 bg-red-500/20"}`,
                                          children: jsxRuntimeExports.jsx(
                                            "span",
                                            {
                                              className:
                                                "absolute top-7 left-1/2 -translate-x-1/2 bg-red-600/90 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow whitespace-nowrap",
                                              children: "ĐẮP MÀU (ĐÍCH) 🔴",
                                            },
                                          ),
                                        }),
                                      ],
                                    },
                                  ),
                                b === "spot" &&
                                  rt &&
                                  !U &&
                                  jsxRuntimeExports.jsx("div", {
                                    style: {
                                      left: `${lt.x}px`,
                                      top: `${lt.y}px`,
                                      width: "24px",
                                      height: "24px",
                                    },
                                    className:
                                      "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300 dark:border-slate-600 bg-slate-500/5 dark:bg-white/5 shadow-[0_0_4px_rgba(0,0,0,0.15)] pointer-events-none z-50",
                                  }),
                              ],
                            }),
                            b === "crop" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "absolute border-2 border-blue-500 z-25 pointer-events-none",
                                style: {
                                  left: `${De.left}%`,
                                  top: `${De.top}%`,
                                  right: `${100 - De.right}%`,
                                  bottom: `${100 - De.bottom}%`,
                                },
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "absolute top-2 left-2 bg-blue-600 text-[8px] text-white font-mono px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap",
                                    children: [
                                      "CROP (",
                                      Math.round(
                                        800 * ((De.right - De.left) / 100),
                                      ),
                                      " x ",
                                      Math.round(
                                        600 * ((De.bottom - De.top) / 100),
                                      ),
                                      " px)",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-10 bg-white border-2 border-blue-600 rounded-full cursor-ew-resize pointer-events-auto flex items-center justify-center shadow-md",
                                    onMouseDown: (T) => {
                                      (T.stopPropagation(), oe("left"));
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "w-0.5 h-4 bg-blue-600 rounded",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-10 bg-white border-2 border-blue-600 rounded-full cursor-ew-resize pointer-events-auto flex items-center justify-center shadow-md",
                                    onMouseDown: (T) => {
                                      (T.stopPropagation(), oe("right"));
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "w-0.5 h-4 bg-blue-600 rounded",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute left-1/2 -translate-x-1/2 -top-1.5 w-10 h-3 bg-white border-2 border-blue-600 rounded-full cursor-ns-resize pointer-events-auto flex flex-col items-center justify-center shadow-md",
                                    onMouseDown: (T) => {
                                      (T.stopPropagation(), oe("top"));
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-0.5 w-4 bg-blue-600 rounded",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-10 h-3 bg-white border-2 border-blue-600 rounded-full cursor-ns-resize pointer-events-auto flex flex-col items-center justify-center shadow-md",
                                    onMouseDown: (T) => {
                                      (T.stopPropagation(), oe("bottom"));
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-0.5 w-4 bg-blue-600 rounded",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-full flex items-center justify-between text-sm sm:text-base font-semibold bg-slate-50 dark:bg-slate-950 px-5 sm:px-6 py-3 rounded-3xl border border-slate-200/50 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "h-2 w-2 rounded-full bg-green-500",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className: "text-slate-500",
                                  children: "Kích thước ảnh:",
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className:
                                    "font-mono text-slate-800 dark:text-white font-bold",
                                  children:
                                    b === "crop" && y
                                      ? `${Math.round(800 * ((De.right - De.left) / 100))} x ${Math.round(600 * ((De.bottom - De.top) / 100))} px (ĐÃ CẮT BỎ RÌA)`
                                      : "800 x 600 px (GỐC)",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className: "flex gap-2",
                              children: jsxRuntimeExports.jsxs("button", {
                                onClick: H,
                                className:
                                  "px-5 sm:px-5 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-850 dark:hover:bg-slate-800 rounded-3xl text-sm sm:text-base font-semibold font-black flex items-center gap-1 transition-all cursor-pointer",
                                children: [
                                  jsxRuntimeExports.jsx(RefreshCw, {
                                    className: "h-3 w-3",
                                  }),
                                  "Reset",
                                ],
                              }),
                            }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "w-full bg-blue-50/50 dark:bg-blue-950/10 border border-blue-200/20 rounded-3xl overflow-hidden text-sm sm:text-base font-medium",
                          children: [
                            jsxRuntimeExports.jsxs("button", {
                              onClick: () => M(!N),
                              className:
                                "w-full flex items-center justify-between p-5 sm:p-6 bg-blue-100/10 dark:bg-blue-950/10 hover:bg-blue-100/20 dark:hover:bg-blue-950/20 transition-all text-left cursor-pointer",
                              children: [
                                jsxRuntimeExports.jsxs("span", {
                                  className:
                                    "text-blue-600 dark:text-blue-400 font-black uppercase tracking-wider flex items-center gap-1.5",
                                  children: [
                                    jsxRuntimeExports.jsx(Info, {
                                      className: "h-4 w-4 text-blue-500",
                                    }),
                                    "Mẹo ghi nhớ đặc tính kỹ thuật & So sánh quan trọng",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("span", {
                                  className: "text-blue-500",
                                  children: N
                                    ? jsxRuntimeExports.jsx(ChevronUp, {
                                        className: "h-4.5 w-4.5",
                                      })
                                    : jsxRuntimeExports.jsx(ChevronDown, {
                                        className: "h-4.5 w-4.5",
                                      }),
                                }),
                              ],
                            }),
                            N &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "p-8 sm:p-5 pt-1.5 border-t border-blue-100/20 space-y-4 animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "font-extrabold text-blue-700 dark:text-blue-300",
                                        children:
                                          "Đặc tính kỹ thuật công cụ đang chọn:",
                                      }),
                                      jsxRuntimeExports.jsxs("p", {
                                        className:
                                          "leading-relaxed text-slate-600 dark:text-slate-400 font-semibold",
                                        children: [
                                          b === "none" &&
                                            jsxRuntimeExports.jsx("span", {
                                              children:
                                                "Chọn các nút bên trái để xem cách từng công cụ biến đổi tấm ảnh 800x600 px này một cách khác biệt!",
                                            }),
                                          b === "crop" &&
                                            jsxRuntimeExports.jsxs("span", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children: "Crop (Cắt xén)",
                                                  },
                                                ),
                                                " làm thay đổi độ phân giải ảnh từ 800x600 px xuống còn ",
                                                Math.round(
                                                  800 *
                                                    ((De.right - De.left) /
                                                      100),
                                                ),
                                                "x",
                                                Math.round(
                                                  600 *
                                                    ((De.bottom - De.top) /
                                                      100),
                                                ),
                                                " px. Đây là cách cắt phăng các rìa ngoài dư thừa để loại bỏ nhân vật không mong muốn ở rìa mà không làm biến dạng tỷ lệ người còn lại.",
                                              ],
                                            }),
                                          b === "erase" &&
                                            jsxRuntimeExports.jsxs("span", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Erase (Xóa chi tiết)",
                                                  },
                                                ),
                                                " tẩy bỏ nhân vật nghịch ngợm bằng công nghệ lấp điểm ảnh, nhưng giữ nguyên vẹn chiều rộng ảnh 800px. Dùng khi vật thể nằm ở chính giữa hoặc bạn muốn giữ nguyên tỷ lệ khung ban đầu.",
                                              ],
                                            }),
                                          b === "cut" &&
                                            jsxRuntimeExports.jsxs("span", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Cut (Cắt nhân vật)",
                                                  },
                                                ),
                                                ' cho phép em "nhấc" nhân vật chính ra khỏi sân trường và dán vào Starfield hay Beach. Nó tách hẳn đối tượng khỏi bức nền hiện tại.',
                                              ],
                                            }),
                                          b === "filter" &&
                                            jsxRuntimeExports.jsxs("span", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Filters & Adjust",
                                                  },
                                                ),
                                                " thay đổi tông màu (Đen trắng, Vintage) hoặc ánh sáng của toàn bộ bức ảnh, không làm mất bất kỳ chi tiết hay pixel nào.",
                                              ],
                                            }),
                                          b === "spot" &&
                                            jsxRuntimeExports.jsxs("span", {
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  "strong",
                                                  {
                                                    children:
                                                      "Spot Healing (Xóa vết bẩn)",
                                                  },
                                                ),
                                                " khôi phục lại các điểm ảnh bị hỏng/dơ bẩn bằng cách lấy dữ liệu vùng lân cận sạch và trộn nền thông minh.",
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "p-8 sm:p-5 bg-white/50 dark:bg-slate-900/40 rounded-3xl border border-blue-200/10 space-y-2",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "font-bold text-emerald-700 dark:text-emerald-400 block uppercase tracking-wide text-sm sm:text-base font-semibold",
                                        children:
                                          "Phân biệt độ sáng & phơi sáng:",
                                      }),
                                      jsxRuntimeExports.jsxs("ul", {
                                        className:
                                          "space-y-1.5 text-slate-600 dark:text-slate-400 font-semibold leading-relaxed",
                                        children: [
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "💡 ",
                                              jsxRuntimeExports.jsx("strong", {
                                                className:
                                                  "text-slate-850 dark:text-slate-200",
                                                children:
                                                  "Phơi sáng (Exposure):",
                                              }),
                                              " Là lượng ánh sáng thực tế mà cảm biến máy ảnh (hoặc phim) thu nhận được tại trước và trong khi chụp ảnh.",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("li", {
                                            children: [
                                              "☀️ ",
                                              jsxRuntimeExports.jsx("strong", {
                                                className:
                                                  "text-slate-850 dark:text-slate-200",
                                                children:
                                                  "Độ sáng (Brightness):",
                                              }),
                                              " Là mức độ sáng/tối tổng thể của bức ảnh mà mắt người nhìn thấy sau khi đã có ảnh.",
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
          n === 2 &&
            jsxRuntimeExports.jsxs("div", {
              className:
                "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 sm:p-5 sm:p-6 shadow-xs space-y-6 text-left animate-fadeIn",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className:
                    "border-l-4 border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 p-5 sm:p-6 rounded-r-2xl flex items-start gap-3",
                  children: [
                    jsxRuntimeExports.jsx(Film, {
                      className:
                        "h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0",
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      children: [
                        jsxRuntimeExports.jsx("h4", {
                          className:
                            "text-sm sm:text-base font-medium font-black text-slate-950 dark:text-white uppercase tracking-wide",
                          children:
                            "PHÒNG LAB GIẢ LẬP: VIDEO STUDIO TIMELINE 🎬",
                        }),
                        jsxRuntimeExports.jsxs("p", {
                          className:
                            "mt-0.5 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                          children: [
                            "Sử dụng các công cụ chỉnh sửa video như ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Trim (Cắt tỉa thời lượng)",
                            }),
                            ", ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Split (Tách đoạn)",
                            }),
                            ", và ",
                            jsxRuntimeExports.jsx("strong", {
                              children: "Speed (Điều tốc)",
                            }),
                            " để hiểu cách chúng thay đổi thời gian của clip chuẩn đề thi IC3.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                  children: [
                    jsxRuntimeExports.jsxs("div", {
                      className: "lg:col-span-7 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className: `relative w-full overflow-hidden border border-slate-800 shadow-md group transition-all duration-300 bg-slate-950 ${Ve && Je === "crop" ? (D === "16:9" ? "aspect-video rounded-3xl" : D === "1:1" ? "aspect-square rounded-3xl max-w-[320px] mx-auto" : "aspect-[9/16] rounded-3xl max-w-[210px] mx-auto") : "aspect-video rounded-3xl"}`,
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute inset-0 border border-white/5 pointer-events-none z-15",
                              children: [
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "absolute top-3 left-3 flex items-center gap-1.5 text-[9px] text-white/50 font-bold uppercase",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse",
                                    }),
                                    "REC [PREVIEW]",
                                  ],
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className:
                                    "absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[9px] text-purple-300 font-mono font-bold tracking-wider",
                                  children: [
                                    "PHẠM VI PHÁT: ",
                                    wt.toFixed(1),
                                    "s - ",
                                    Ot.toFixed(1),
                                    "s",
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "absolute bottom-3 right-3 text-[9px] text-white/40 font-mono",
                                  children: "1080P 60FPS",
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "absolute inset-0 bg-slate-950 overflow-hidden",
                              children: [
                                jsxRuntimeExports.jsx(motion.div, {
                                  className:
                                    "absolute inset-0 flex flex-col justify-end p-5 sm:p-6 origin-center",
                                  animate: { scale: ft },
                                  transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                  },
                                  children:
                                    st && Be === "left" && Kt < Lt
                                      ? jsxRuntimeExports.jsx("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center bg-slate-950 text-slate-500 font-mono text-sm sm:text-base font-medium z-10",
                                          children: "🚫 Clip A đã bị xóa bỏ",
                                        })
                                      : st && Be === "right" && Kt >= Lt
                                        ? jsxRuntimeExports.jsx("div", {
                                            className:
                                              "absolute inset-0 flex items-center justify-center bg-slate-950 text-slate-500 font-mono text-sm sm:text-base font-medium z-10",
                                            children: "🚫 Clip B đã bị xóa bỏ",
                                          })
                                        : J && Kt >= nt && Kt < nt + Ct
                                          ? jsxRuntimeExports.jsxs("div", {
                                              className:
                                                "absolute inset-0 bg-indigo-950 flex flex-col items-center justify-center text-center overflow-hidden z-10",
                                              children: [
                                                jsxRuntimeExports.jsx(
                                                  motion.div,
                                                  {
                                                    className: "text-7xl mb-3",
                                                    animate: { rotate: 360 },
                                                    transition: {
                                                      duration: 6,
                                                      repeat: 1 / 0,
                                                      ease: "linear",
                                                    },
                                                    children: "🌌",
                                                  },
                                                ),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-semibold text-emerald-400 font-black tracking-widest uppercase mb-1",
                                                  children:
                                                    "✨ ĐANG PHÁT CLIP CHÈN (SPLICED) ✨",
                                                }),
                                                jsxRuntimeExports.jsx("h4", {
                                                  className:
                                                    "text-sm sm:text-base font-bold text-white font-mono bg-indigo-900/60 px-5 sm:px-5 py-1 rounded-full border border-indigo-500/30",
                                                  children: "Galaxy.mp4 (3.0s)",
                                                }),
                                                jsxRuntimeExports.jsx("p", {
                                                  className:
                                                    "text-[9px] text-indigo-300 mt-2 max-w-[280px]",
                                                  children:
                                                    "Clip chèn đẩy clip gốc dịch chuyển về phía sau mà không ghi đè bất kỳ giây nào!",
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "absolute inset-0 opacity-20 pointer-events-none",
                                                  children: [...Array(15)].map(
                                                    (T, Oe) =>
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "absolute bg-indigo-400 rounded-full animate-ping",
                                                          style: {
                                                            width: "3px",
                                                            height: "3px",
                                                            top: `${(Oe * 27) % 100}%`,
                                                            left: `${(Oe * 31) % 100}%`,
                                                          },
                                                        },
                                                        Oe,
                                                      ),
                                                  ),
                                                }),
                                              ],
                                            })
                                          : jsxRuntimeExports.jsxs(
                                              jsxRuntimeExports.Fragment,
                                              {
                                                children: [
                                                  (() => {
                                                    const T =
                                                      J && Kt >= nt + Ct
                                                        ? Kt - Ct
                                                        : Kt;
                                                    return jsxRuntimeExports.jsxs(
                                                      motion.div,
                                                      {
                                                        className:
                                                          "absolute flex flex-col items-center select-none",
                                                        style: {
                                                          left: `${(T / 10) * 80 + 10}%`,
                                                          bottom: `${(T / 10) * 60 + 15}%`,
                                                        },
                                                        children: [
                                                          jsxRuntimeExports.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "text-4xl animate-bounce",
                                                              children: "🚀",
                                                            },
                                                          ),
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "bg-purple-600/80 backdrop-blur-xs text-[8px] text-white font-mono px-1 rounded whitespace-nowrap",
                                                              children:
                                                                "Rocket.mp4",
                                                            },
                                                          ),
                                                        ],
                                                      },
                                                    );
                                                  })(),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "absolute inset-0 opacity-40",
                                                    children: [
                                                      ...Array(20),
                                                    ].map((T, Oe) =>
                                                      jsxRuntimeExports.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "absolute bg-white rounded-full animate-pulse",
                                                          style: {
                                                            width: "2px",
                                                            height: "2px",
                                                            top: `${(Oe * 17) % 100}%`,
                                                            left: `${(Oe * 23) % 100}%`,
                                                          },
                                                        },
                                                        Oe,
                                                      ),
                                                    ),
                                                  }),
                                                  ((J && Kt < 1.5) ||
                                                    (!J && Kt < 1.5)) &&
                                                    jsxRuntimeExports.jsx(
                                                      "div",
                                                      {
                                                        className:
                                                          "absolute bottom-0 left-0 right-0 h-4 bg-slate-800 border-t border-slate-700 flex items-center justify-center",
                                                        children:
                                                          jsxRuntimeExports.jsx(
                                                            "span",
                                                            {
                                                              className:
                                                                "text-[7px] text-slate-400 font-mono",
                                                              children:
                                                                "STARTING PAD",
                                                            },
                                                          ),
                                                      },
                                                    ),
                                                ],
                                              },
                                            ),
                                }),
                                Bs === "glitch" &&
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-cyan-500/10 mix-blend-color-dodge animate-pulse z-10 border border-cyan-500/30 pointer-events-none",
                                    children: jsxRuntimeExports.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-linear-to-b from-transparent via-red-500/10 to-transparent bg-[size:100%_4px]",
                                    }),
                                  }),
                                Bs === "cinema" &&
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute inset-0 border-y-[20px] border-black pointer-events-none z-10",
                                  }),
                                ws &&
                                  Ze &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "absolute bottom-2 left-3 flex items-end gap-0.5 h-6 z-15 bg-black/60 px-2 py-1 rounded-md pointer-events-none",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-[8px] text-purple-400 font-bold mr-1 flex items-center gap-0.5",
                                        children: [
                                          jsxRuntimeExports.jsx(Volume2, {
                                            className: "h-2.5 w-2.5",
                                          }),
                                          " AUDIO",
                                        ],
                                      }),
                                      [...Array(6)].map((T, Oe) =>
                                        jsxRuntimeExports.jsx(
                                          motion.div,
                                          {
                                            className: "w-0.5 bg-purple-500",
                                            animate: { height: [4, 16, 4] },
                                            transition: {
                                              duration: 0.5 + Oe * 0.1,
                                              repeat: 1 / 0,
                                            },
                                          },
                                          Oe,
                                        ),
                                      ),
                                    ],
                                  }),
                                ft !== 1 &&
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "absolute top-2 left-2 bg-purple-600/90 backdrop-blur-md px-2 py-1 rounded-3xl border border-purple-400/40 text-[9px] text-white font-mono font-black tracking-wider flex items-center gap-1 z-15 shadow-md",
                                    children: [
                                      jsxRuntimeExports.jsx(ZoomIn, {
                                        className: "h-2.5 w-2.5 animate-pulse",
                                      }),
                                      jsxRuntimeExports.jsxs("span", {
                                        children: [
                                          "ZOOM: ",
                                          Math.round(ft * 100),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            Je === "crop" &&
                              !Ve &&
                              D !== "16:9" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "absolute inset-0 pointer-events-none z-20",
                                children: [
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute left-0 top-0 bottom-0 bg-black/70 backdrop-blur-[0.5px] transition-all duration-300 flex items-center justify-center text-slate-400 font-mono text-[8px] border-r border-dashed border-red-500/40",
                                    style: {
                                      width: D === "1:1" ? "21.875%" : "34.18%",
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "rotate-90 whitespace-nowrap tracking-wider font-bold",
                                      children: "SẼ BỊ XÉN BỎ",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsx("div", {
                                    className:
                                      "absolute right-0 top-0 bottom-0 bg-black/70 backdrop-blur-[0.5px] transition-all duration-300 flex items-center justify-center text-slate-400 font-mono text-[8px] border-l border-dashed border-red-500/40",
                                    style: {
                                      width: D === "1:1" ? "21.875%" : "34.18%",
                                    },
                                    children: jsxRuntimeExports.jsx("span", {
                                      className:
                                        "rotate-270 whitespace-nowrap tracking-wider font-bold",
                                      children: "SẼ BỊ XÉN BỎ",
                                    }),
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "absolute top-0 bottom-0 border-2 border-dashed border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 flex flex-col justify-between p-8 sm:p-5",
                                    style: {
                                      left: D === "1:1" ? "21.875%" : "34.18%",
                                      right: D === "1:1" ? "21.875%" : "34.18%",
                                    },
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-3 w-3 border-t-2 border-l-2 border-emerald-400",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-3 w-3 border-t-2 border-r-2 border-emerald-400",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "bg-emerald-600/90 text-white font-mono text-[8px] font-black px-1.5 py-0.5 rounded self-center shadow-md border border-emerald-400 tracking-wider",
                                        children: [
                                          "KHUNG ",
                                          D,
                                          " (",
                                          D === "1:1" ? "INSTAGRAM" : "TIKTOK",
                                          ")",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-3 w-3 border-b-2 border-l-2 border-emerald-400",
                                          }),
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "h-3 w-3 border-b-2 border-r-2 border-emerald-400",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            hs !== 1 &&
                              jsxRuntimeExports.jsxs("span", {
                                className:
                                  "absolute top-3 right-3 bg-red-600 text-white font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded-full z-15",
                                children: ["⚡ ", hs, "x SPEED"],
                              }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "flex items-center justify-between bg-slate-50 dark:bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800",
                          children: [
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => Nt(!Ze),
                                  className:
                                    "h-10 w-10 bg-blue-600 hover:bg-blue-700 active:scale-95 hover:scale-103 transition-all text-white rounded-full flex items-center justify-center cursor-pointer transition-all shadow-xs",
                                  children: Ze
                                    ? jsxRuntimeExports.jsx(Pause, {
                                        className: "h-5 w-5 fill-white",
                                      })
                                    : jsxRuntimeExports.jsx(Play, {
                                        className: "h-5 w-5 fill-white ml-0.5",
                                      }),
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "flex flex-col text-left",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "text-sm sm:text-base font-medium font-black text-slate-800 dark:text-white",
                                      children: Ze
                                        ? "▶ Đang phát video"
                                        : "⏸ Đã tạm dừng",
                                    }),
                                    jsxRuntimeExports.jsxs("span", {
                                      className:
                                        "text-sm sm:text-base font-semibold font-mono text-slate-400 font-bold",
                                      children: [
                                        "THỜI GIAN: ",
                                        Kt.toFixed(2),
                                        "s / ",
                                        J ? "13.00" : "10.00",
                                        "s",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                jsxRuntimeExports.jsx("button", {
                                  onClick: () => {
                                    const { start: T } = ns();
                                    It(T);
                                  },
                                  className:
                                    "p-8 sm:p-5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-800 border border-slate-200 rounded-3xl text-sm sm:text-base font-bold transition-all cursor-pointer",
                                  title: "Quay lại điểm bắt đầu",
                                  children: jsxRuntimeExports.jsx(RotateCcw, {
                                    className: "h-4 w-4",
                                  }),
                                }),
                                jsxRuntimeExports.jsx("button", {
                                  onClick: Tt,
                                  className:
                                    "p-8 sm:p-5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-800 border border-slate-200 rounded-3xl text-sm sm:text-base font-bold transition-all cursor-pointer",
                                  title: "Khôi phục trạng thái ban đầu",
                                  children: "Reset Video",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (st || J) &&
                          jsxRuntimeExports.jsxs("div", {
                            className:
                              "p-8 sm:p-5 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-100 dark:border-indigo-950/30 rounded-3xl text-left space-y-2.5 animate-fadeIn",
                            children: [
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row sm:items-center justify-between gap-1",
                                children: [
                                  jsxRuntimeExports.jsxs("span", {
                                    className:
                                      "text-sm sm:text-base font-semibold font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1",
                                    children: [
                                      jsxRuntimeExports.jsx(Film, {
                                        className: "h-3.5 w-3.5",
                                      }),
                                      " CHỌN PHÂN ĐOẠN ĐỂ PHÁT VIDEO (SPLIT/SPLICE)",
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-[9px] bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-black self-start",
                                    children:
                                      St === "all"
                                        ? "Cả hai / Toàn bộ"
                                        : St === "A"
                                          ? "Chỉ Clip A"
                                          : St === "spliced"
                                            ? "Chỉ Clip Chèn (Galaxy)"
                                            : "Chỉ Clip B",
                                  }),
                                ],
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "grid grid-cols-3 sm:grid-cols-4 gap-1.5",
                                children: st
                                  ? jsxRuntimeExports.jsx(
                                      jsxRuntimeExports.Fragment,
                                      {
                                        children: [
                                          {
                                            id: "all",
                                            label: "Cả hai clip",
                                            desc: `0s - ${Ot}s`,
                                          },
                                          {
                                            id: "A",
                                            label: "Chỉ Clip A",
                                            desc: `0s - ${Lt.toFixed(1)}s`,
                                          },
                                          {
                                            id: "B",
                                            label: "Chỉ Clip B",
                                            desc: `${Lt.toFixed(1)}s - ${Ot}s`,
                                          },
                                        ].map((T) =>
                                          jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              onClick: () => {
                                                (_t(T.id),
                                                  T.id === "all" || T.id === "A"
                                                    ? It(wt)
                                                    : It(Lt));
                                              },
                                              className: `py-3 px-2 rounded-3xl text-center border cursor-pointer transition-all ${St === T.id ? "bg-amber-600 border-amber-600 text-white shadow-xs font-black scale-102" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 text-slate-600 font-bold"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-[9px] uppercase tracking-tight",
                                                  children: T.label,
                                                }),
                                                jsxRuntimeExports.jsx("div", {
                                                  className:
                                                    "text-[7px] font-mono opacity-75",
                                                  children: T.desc,
                                                }),
                                              ],
                                            },
                                            T.id,
                                          ),
                                        ),
                                      },
                                    )
                                  : J
                                    ? jsxRuntimeExports.jsx(
                                        jsxRuntimeExports.Fragment,
                                        {
                                          children: [
                                            {
                                              id: "all",
                                              label: "Toàn bộ clip",
                                              desc: "13.0s",
                                            },
                                            {
                                              id: "A",
                                              label: "Gốc Ph.1",
                                              desc: `0s - ${nt.toFixed(1)}s`,
                                            },
                                            {
                                              id: "spliced",
                                              label: "🌌 Galaxy",
                                              desc: `${nt.toFixed(1)}s - ${(nt + 3).toFixed(1)}s`,
                                            },
                                            {
                                              id: "B",
                                              label: "Gốc Ph.2",
                                              desc: `${(nt + 3).toFixed(1)}s - 13.0s`,
                                            },
                                          ].map((T) =>
                                            jsxRuntimeExports.jsxs(
                                              "button",
                                              {
                                                onClick: () => {
                                                  (_t(T.id),
                                                    T.id === "all" ||
                                                    T.id === "A"
                                                      ? It(wt)
                                                      : T.id === "spliced"
                                                        ? It(nt)
                                                        : It(nt + 3));
                                                },
                                                className: `py-3 px-1 rounded-3xl text-center border cursor-pointer transition-all ${St === T.id ? "bg-emerald-600 border-emerald-600 text-white shadow-xs font-black scale-102" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 text-slate-600 font-bold"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "text-[9px] uppercase tracking-tight",
                                                    children: T.label,
                                                  }),
                                                  jsxRuntimeExports.jsx("div", {
                                                    className:
                                                      "text-[7px] font-mono opacity-75",
                                                    children: T.desc,
                                                  }),
                                                ],
                                              },
                                              T.id,
                                            ),
                                          ),
                                        },
                                      )
                                    : null,
                              }),
                            ],
                          }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs("div", {
                      className: "lg:col-span-5 space-y-4",
                      children: [
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200/50 dark:border-slate-800 space-y-4",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black uppercase text-slate-400 tracking-wider block",
                              children: "CÔNG CỤ BIẾN ĐỔI THỜI GIAN VIDEO",
                            }),
                            jsxRuntimeExports.jsx("div", {
                              className:
                                "grid grid-cols-3 sm:grid-cols-6 gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800",
                              children: [
                                {
                                  id: "trim",
                                  label: "Cắt (Trim)",
                                  icon: Scissors,
                                },
                                {
                                  id: "split",
                                  label: "Tách (Split)",
                                  icon: Film,
                                },
                                {
                                  id: "splice",
                                  label: "Ghép (Splice)",
                                  icon: Sparkles,
                                },
                                { id: "crop", label: "Xén (Crop)", icon: Crop },
                                { id: "zoom", label: "Zoom", icon: ZoomIn },
                                {
                                  id: "effects",
                                  label: "Hiệu ứng",
                                  icon: SlidersVertical,
                                },
                              ].map((T) => {
                                const Oe = T.icon,
                                  dt = Je === T.id;
                                return jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    onClick: () => Et(T.id),
                                    className: `no-override py-1.5 rounded-xl text-[10px] sm:text-xs font-black flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${dt ? "bg-blue-600 text-white shadow-sm scale-102" : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"}`,
                                    children: [
                                      jsxRuntimeExports.jsx(Oe, {
                                        className: "h-3.5 w-3.5 shrink-0",
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        children: T.label,
                                      }),
                                    ],
                                  },
                                  T.id,
                                );
                              }),
                            }),
                            Je === "trim" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Scissors, {
                                            className:
                                              "h-4 w-4 text-purple-600",
                                          }),
                                          "TRIM VIDEO (Cắt đầu/cuối)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded font-black",
                                        children: "Xén bớt thời lượng",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                    children:
                                      "Kéo lề để xén bớt phần thừa đầu/cuối của clip. Video chỉ phát trong vùng sáng màu.",
                                  }),
                                  st || J
                                    ? jsxRuntimeExports.jsx("div", {
                                        className:
                                          "bg-slate-150/50 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                        children:
                                          "ℹ️ Tính năng Trim không khả dụng khi đang chia tách (Split) hoặc ghép video (Splice). Reset video để sử dụng lại Trim.",
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Điểm đầu (Trim Start):",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-mono text-purple-600 dark:text-purple-400",
                                                      children: [
                                                        wt.toFixed(1),
                                                        "s",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "range",
                                                min: "0",
                                                max: "10",
                                                step: "0.5",
                                                value: wt,
                                                onChange: (T) =>
                                                  Xt(Number(T.target.value)),
                                                className:
                                                  "w-full accent-purple-600 h-1 bg-slate-200 dark:bg-slate-800 rounded-3xl cursor-pointer",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Điểm cuối (Trim End):",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-mono text-purple-600 dark:text-purple-400",
                                                      children: [
                                                        Ot.toFixed(1),
                                                        "s",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "range",
                                                min: "0",
                                                max: "10",
                                                step: "0.5",
                                                value: Ot,
                                                onChange: (T) =>
                                                  as(Number(T.target.value)),
                                                className:
                                                  "w-full accent-purple-600 h-1 bg-slate-200 dark:bg-slate-800 rounded-3xl cursor-pointer",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            Je === "split" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Scissors, {
                                            className: "h-4 w-4 text-amber-500",
                                          }),
                                          "SPLIT CLIP (Chia tách đôi)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-black",
                                        children: "Tách làm 2 clip độc lập",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                    children:
                                      "Chọn vị trí trên thanh trượt và bấm nút Tách để chia nhỏ video thành hai phần độc lập.",
                                  }),
                                  st
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-500/5 p-8 sm:p-5 rounded-3xl border border-emerald-500/20",
                                            children: [
                                              "✓ Đã tách thành Clip A (đầu đến ",
                                              Lt.toFixed(1),
                                              "s) và Clip B (",
                                              Lt.toFixed(1),
                                              "s đến cuối).",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1 bg-slate-100 dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] font-black text-slate-400 uppercase block",
                                                children:
                                                  "Chọn đoạn phát video:",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "grid grid-cols-3 gap-1",
                                                children: [
                                                  {
                                                    id: "all",
                                                    label: "Cả hai clip",
                                                  },
                                                  {
                                                    id: "A",
                                                    label: "Chỉ Clip A",
                                                  },
                                                  {
                                                    id: "B",
                                                    label: "Chỉ Clip B",
                                                  },
                                                ].map((T) =>
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      onClick: () => {
                                                        (_t(T.id),
                                                          T.id === "all" ||
                                                          T.id === "A"
                                                            ? It(wt)
                                                            : It(Lt));
                                                      },
                                                      className: `py-1 rounded text-[9px] font-black border cursor-pointer transition-all ${St === T.id ? "bg-amber-600 border-amber-600 text-white shadow-xs" : "bg-white border-slate-200 hover:bg-slate-50 dark:bg-slate-850 dark:border-slate-800 dark:text-slate-300"}`,
                                                      children: T.label,
                                                    },
                                                    T.id,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "grid grid-cols-2 gap-1.5",
                                            children: [
                                              jsxRuntimeExports.jsxs("button", {
                                                onClick: () =>
                                                  S(
                                                    Be === "left"
                                                      ? "none"
                                                      : "left",
                                                  ),
                                                className: `py-3 rounded-3xl text-sm sm:text-base font-bold border flex items-center justify-center gap-1 cursor-pointer transition-all ${Be === "left" ? "bg-red-500/10 border-red-500 text-red-500" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-850 dark:text-slate-300"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    Trash2,
                                                    { className: "h-3 w-3" },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        Be === "left"
                                                          ? "Khôi phục Clip A"
                                                          : "Xóa Clip A",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("button", {
                                                onClick: () =>
                                                  S(
                                                    Be === "right"
                                                      ? "none"
                                                      : "right",
                                                  ),
                                                className: `py-3 rounded-3xl text-sm sm:text-base font-bold border flex items-center justify-center gap-1 cursor-pointer transition-all ${Be === "right" ? "bg-red-500/10 border-red-500 text-red-500" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-850 dark:text-slate-300"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    Trash2,
                                                    { className: "h-3 w-3" },
                                                  ),
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        Be === "right"
                                                          ? "Khôi phục Clip B"
                                                          : "Xóa Clip B",
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1 bg-slate-100 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Vị trí chia tách (Split Point):",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-mono text-amber-600 dark:text-amber-400 font-black",
                                                      children: [
                                                        Vt.toFixed(1),
                                                        "s",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "range",
                                                min: wt,
                                                max: Ot,
                                                step: "0.5",
                                                value: Vt,
                                                onChange: (T) => {
                                                  const Oe = Number(
                                                    T.target.value,
                                                  );
                                                  (Ut(Oe), It(Oe));
                                                },
                                                className:
                                                  "w-full accent-amber-600 h-1 bg-slate-200 dark:bg-slate-800 rounded-3xl cursor-pointer mt-1",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: Ft,
                                            disabled: J,
                                            className:
                                              "w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-3xl text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1 cursor-pointer shadow-xs transition-all",
                                            children: [
                                              "✂ Chia Tách Tại Vị Trí ",
                                              Vt.toFixed(1),
                                              "s",
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            Je === "splice" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Sparkles, {
                                            className:
                                              "h-4 w-4 text-emerald-500",
                                          }),
                                          "SPLICE VIDEO (Ghép / Chèn Clip)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-black",
                                        children: "Nối chèn & Dịch chuyển",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                    children:
                                      "Chọn vị trí trên thanh trượt và bấm nút Chèn để ghép video mới (Galaxy.mp4 - 3s). Vị trí này sẽ được chèn và đẩy phần video sau dịch chuyển lùi lại.",
                                  }),
                                  J
                                    ? jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-2.5",
                                        children: [
                                          jsxRuntimeExports.jsxs("p", {
                                            className:
                                              "text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-500/5 p-8 sm:p-5 rounded-3xl border border-emerald-500/20",
                                            children: [
                                              "✓ Đã chèn thành công Galaxy.mp4 (3.0s) tại vị trí ",
                                              nt.toFixed(1),
                                              "s. Tổng thời lượng phát tăng thành ",
                                              (Ot - wt + 3).toFixed(1),
                                              "s!",
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1 bg-slate-100 dark:bg-slate-900 p-8 sm:p-5 rounded-3xl border border-slate-200/50 dark:border-slate-800",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] font-black text-slate-400 uppercase block",
                                                children:
                                                  "Chọn đoạn để phát video:",
                                              }),
                                              jsxRuntimeExports.jsx("div", {
                                                className:
                                                  "grid grid-cols-2 gap-1",
                                                children: [
                                                  {
                                                    id: "all",
                                                    label: "Tất cả",
                                                  },
                                                  {
                                                    id: "A",
                                                    label: `Gốc Ph.1 (${wt.toFixed(1)}s - ${nt.toFixed(1)}s)`,
                                                  },
                                                  {
                                                    id: "spliced",
                                                    label: `🌌 Galaxy (${nt.toFixed(1)}s - ${(nt + 3).toFixed(1)}s)`,
                                                  },
                                                  {
                                                    id: "B",
                                                    label: `Gốc Ph.2 (${(nt + 3).toFixed(1)}s - ${(Ot + 3).toFixed(1)}s)`,
                                                  },
                                                ].map((T) =>
                                                  jsxRuntimeExports.jsx(
                                                    "button",
                                                    {
                                                      onClick: () => {
                                                        (_t(T.id),
                                                          T.id === "all" ||
                                                          T.id === "A"
                                                            ? It(wt)
                                                            : T.id === "spliced"
                                                              ? It(nt)
                                                              : It(nt + 3));
                                                      },
                                                      className: `py-1 rounded text-[8px] font-black border cursor-pointer transition-all ${St === T.id ? "bg-emerald-600 border-emerald-600 text-white shadow-xs" : "bg-white border-slate-200 hover:bg-slate-50 dark:bg-slate-850 dark:border-slate-800 dark:text-slate-300"}`,
                                                      children: T.label,
                                                    },
                                                    T.id,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => {
                                              (pt(!1), _t("all"), It(wt));
                                            },
                                            className:
                                              "w-full py-3 rounded-3xl text-sm sm:text-base font-bold border border-red-200 bg-red-500/5 hover:bg-red-500/10 text-red-600 dark:border-red-950/40 cursor-pointer transition-all",
                                            children:
                                              "Huỷ bỏ chèn clip (Splice)",
                                          }),
                                        ],
                                      })
                                    : jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "space-y-1 bg-slate-100 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800",
                                            children: [
                                              jsxRuntimeExports.jsxs("div", {
                                                className:
                                                  "flex justify-between text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    {
                                                      children:
                                                        "Vị trí chèn clip (Splice Point):",
                                                    },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "font-mono text-emerald-600 dark:text-emerald-400 font-black",
                                                      children: [
                                                        bt.toFixed(1),
                                                        "s",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsx("input", {
                                                type: "range",
                                                min: wt,
                                                max: Ot,
                                                step: "0.5",
                                                value: bt,
                                                onChange: (T) => {
                                                  const Oe = Number(
                                                    T.target.value,
                                                  );
                                                  (vt(Oe), It(Oe));
                                                },
                                                className:
                                                  "w-full accent-emerald-600 h-1 bg-slate-200 dark:bg-slate-800 rounded-3xl cursor-pointer mt-1",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: () => {
                                              (pt(!0),
                                                q(bt),
                                                _t("all"),
                                                It(bt));
                                            },
                                            disabled: st,
                                            className:
                                              "w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-3xl text-sm sm:text-base font-medium font-black flex items-center justify-center gap-1 cursor-pointer shadow-xs transition-all",
                                            children: [
                                              "➕ Thực Hiện Chèn Galaxy Tại ",
                                              bt.toFixed(1),
                                              "s",
                                            ],
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            Je === "crop" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-4 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(Crop, {
                                            className:
                                              "h-4 w-4 text-emerald-600",
                                          }),
                                          "CROP VIDEO (Cắt xén khung hình)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-black",
                                        children: "Tỷ lệ khung hình",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                    children:
                                      "Đổi tỷ lệ khung hình (Aspect Ratio) để phù hợp với không gian hiển thị mong muốn bằng cách xén bỏ các phần rìa video dư thừa.",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-3",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-black text-slate-400 uppercase tracking-wider block",
                                        children: "CHỌN KHÔNG GIAN HIỂN THỊ:",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "grid grid-cols-3 gap-1.5",
                                        children: [
                                          {
                                            id: "16:9",
                                            label: "Ngang (16:9)",
                                            desc: "Gốc / Youtube",
                                            emoji: "📺",
                                          },
                                          {
                                            id: "1:1",
                                            label: "Vuông (1:1)",
                                            desc: "Instagram",
                                            emoji: "🔲",
                                          },
                                          {
                                            id: "9:16",
                                            label: "Dọc (9:16)",
                                            desc: "TikTok / Shorts",
                                            emoji: "📱",
                                          },
                                        ].map((T) =>
                                          jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              onClick: () => {
                                                Re(T.id);
                                              },
                                              className: `py-3 px-1.5 rounded-3xl text-center border cursor-pointer transition-all flex flex-col items-center justify-center gap-1 ${D === T.id ? "bg-emerald-600 border-emerald-600 text-white shadow-xs scale-102 font-black" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 text-slate-600 text-sm sm:text-base font-bold"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-sm sm:text-base font-medium",
                                                  children: T.emoji,
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[9px] font-black",
                                                  children: T.label,
                                                }),
                                                jsxRuntimeExports.jsx("span", {
                                                  className:
                                                    "text-[7px] opacity-75 font-normal",
                                                  children: T.desc,
                                                }),
                                              ],
                                            },
                                            T.id,
                                          ),
                                        ),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className: "text-left",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-[9px] font-black text-slate-400 uppercase block",
                                                children: "Chế độ xem trước:",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                className:
                                                  "text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300",
                                                children: Ve
                                                  ? "Hiển thị khung hình đã cắt xén"
                                                  : "Hiển thị vùng giới hạn (Dashed)",
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("button", {
                                            onClick: () => Ge(!Ve),
                                            className: `px-5 sm:px-5 py-3 rounded-3xl text-[9px] font-black border cursor-pointer transition-all ${Ve ? "bg-blue-600 border-blue-600 text-white shadow-xs" : "bg-white border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"}`,
                                            children: Ve
                                              ? "Xem Toàn Cảnh"
                                              : "Xem Thực Tế Đã Cắt",
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-purple-50/50 dark:bg-purple-950/20 rounded-3xl border border-purple-100 dark:border-purple-950/40 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                                        children: [
                                          "💡 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Lưu ý IC3 GS6:",
                                          }),
                                          " Trong chỉnh sửa video, công cụ ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Crop",
                                          }),
                                          " làm giảm kích thước không gian để vừa không gian hiển thị cụ thể, khác hoàn toàn với công cụ ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Trim",
                                          }),
                                          " dùng để rút ngắn thời lượng thời gian!",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Je === "zoom" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-4 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsxs("div", {
                                    className:
                                      "flex justify-between items-center",
                                    children: [
                                      jsxRuntimeExports.jsxs("span", {
                                        className:
                                          "text-sm sm:text-base font-medium font-black flex items-center gap-1",
                                        children: [
                                          jsxRuntimeExports.jsx(ZoomIn, {
                                            className:
                                              "h-4 w-4 text-purple-600",
                                          }),
                                          "ZOOM VIDEO (Thu phóng tương tác)",
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded font-black",
                                        children: "Mô phỏng ống kính",
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsx("p", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-slate-500 font-medium leading-relaxed",
                                    children:
                                      "Kéo thanh trượt hoặc chọn các nút thiết lập sẵn để phóng to (Zoom In) vào chủ thể hoặc thu nhỏ (Zoom Out) để lấy toàn cảnh.",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-3",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "space-y-1 bg-slate-100 dark:bg-slate-900/60 p-8 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800",
                                        children: [
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-sm sm:text-base font-bold text-slate-600 dark:text-slate-300",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "Mức thu phóng (Scale level):",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "font-mono text-purple-600 dark:text-purple-400 font-black",
                                                children: [
                                                  ft.toFixed(2),
                                                  "x (",
                                                  Math.round(ft * 100),
                                                  "%)",
                                                ],
                                              }),
                                            ],
                                          }),
                                          jsxRuntimeExports.jsx("input", {
                                            type: "range",
                                            min: "0.5",
                                            max: "3.0",
                                            step: "0.05",
                                            value: ft,
                                            onChange: (T) =>
                                              Mt(Number(T.target.value)),
                                            className:
                                              "w-full accent-purple-600 h-1 bg-slate-200 dark:bg-slate-800 rounded-3xl cursor-pointer mt-1",
                                          }),
                                          jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "flex justify-between text-[8px] text-slate-400 font-mono mt-1",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children: "0.5x (Thu nhỏ)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children: "1.0x (Gốc)",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children: "3.0x (Phóng to)",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-black text-slate-400 uppercase tracking-wider block",
                                        children:
                                          "CÁC THIẾT LẬP NHANH (ZOOM PRESETS):",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                          {
                                            value: 0.7,
                                            label: "Zoom Out (0.7x)",
                                            desc: "Góc rộng / Toàn cảnh",
                                            emoji: "🔭",
                                          },
                                          {
                                            value: 1,
                                            label: "Mặc định (1.0x)",
                                            desc: "Tỷ lệ gốc ban đầu",
                                            emoji: "🎬",
                                          },
                                          {
                                            value: 1.6,
                                            label: "Zoom In (1.6x)",
                                            desc: "Cận cảnh vừa phải",
                                            emoji: "🔍",
                                          },
                                          {
                                            value: 2.5,
                                            label: "Super Zoom (2.5x)",
                                            desc: "Cận cảnh đặc tả",
                                            emoji: "⚡",
                                          },
                                        ].map((T) =>
                                          jsxRuntimeExports.jsxs(
                                            "button",
                                            {
                                              onClick: () => Mt(T.value),
                                              className: `p-8 sm:p-5 rounded-3xl text-left border cursor-pointer transition-all flex items-start gap-2 ${Math.abs(ft - T.value) < 0.01 ? "bg-purple-600 border-purple-600 text-white shadow-xs scale-102" : "bg-white hover:bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 text-slate-600"}`,
                                              children: [
                                                jsxRuntimeExports.jsx("span", {
                                                  className: "text-base mt-0.5",
                                                  children: T.emoji,
                                                }),
                                                jsxRuntimeExports.jsxs("div", {
                                                  className:
                                                    "flex flex-col min-w-0",
                                                  children: [
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[9.5px] font-black truncate",
                                                        children: T.label,
                                                      },
                                                    ),
                                                    jsxRuntimeExports.jsx(
                                                      "span",
                                                      {
                                                        className:
                                                          "text-[7.5px] opacity-75 truncate",
                                                        children: T.desc,
                                                      },
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            },
                                            T.value,
                                          ),
                                        ),
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className:
                                          "p-8 sm:p-5 bg-blue-50/50 dark:bg-blue-950/25 rounded-3xl border border-blue-100 dark:border-blue-950/40 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-400 leading-relaxed font-semibold",
                                        children: [
                                          "💡 ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Khái niệm kỹ thuật:",
                                          }),
                                          " Trong sản xuất video, ",
                                          jsxRuntimeExports.jsx("strong", {
                                            children: "Zoom (Thu phóng)",
                                          }),
                                          " là thao tác giả lập hoặc sử dụng thấu kính tiêu cự thay đổi để thay đổi góc nhìn (Field of View). Zoom In làm tăng kích thước đối tượng trung tâm, còn Zoom Out mở rộng góc nhìn xung quanh.",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Je === "effects" &&
                              jsxRuntimeExports.jsxs("div", {
                                className:
                                  "space-y-3 pt-1 text-left animate-fadeIn",
                                children: [
                                  jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-sm sm:text-base font-medium font-black block",
                                    children:
                                      "TÙY CHỈNH HIỆU ỨNG ĐA PHƯƠNG TIỆN",
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 uppercase",
                                            children: "Tốc độ (Speed):",
                                          }),
                                          jsxRuntimeExports.jsx("div", {
                                            className: "grid grid-cols-3 gap-1",
                                            children: [0.5, 1, 2].map((T) =>
                                              jsxRuntimeExports.jsxs(
                                                "button",
                                                {
                                                  onClick: () => Xs(T),
                                                  className: `py-1 rounded text-[9px] font-black border cursor-pointer transition-all ${hs === T ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                                                  children: [T, "x"],
                                                },
                                                T,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                      jsxRuntimeExports.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          jsxRuntimeExports.jsx("span", {
                                            className:
                                              "text-[9px] font-bold text-slate-400 uppercase",
                                            children: "Nhạc nền (Audio):",
                                          }),
                                          jsxRuntimeExports.jsxs("button", {
                                            onClick: () => fs(!ws),
                                            className: `w-full py-1 rounded text-[9px] font-black border flex items-center justify-center gap-1 cursor-pointer transition-all ${ws ? "bg-purple-600 border-purple-600 text-white" : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                                            children: [
                                              jsxRuntimeExports.jsx(Music, {
                                                className:
                                                  "h-3 w-3 animate-pulse",
                                              }),
                                              jsxRuntimeExports.jsx("span", {
                                                children: ws
                                                  ? "Đã bật nhạc"
                                                  : "Chưa có nhạc",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  jsxRuntimeExports.jsxs("div", {
                                    className: "space-y-1.5 pt-1.5",
                                    children: [
                                      jsxRuntimeExports.jsx("span", {
                                        className:
                                          "text-[9px] font-bold text-slate-400 uppercase block",
                                        children:
                                          "Hiệu ứng hình ảnh (Video Effect):",
                                      }),
                                      jsxRuntimeExports.jsx("div", {
                                        className: "grid grid-cols-3 gap-1",
                                        children: [
                                          { id: "none", label: "Không" },
                                          { id: "glitch", label: "Glitch" },
                                          { id: "cinema", label: "Cinema" },
                                        ].map((T) =>
                                          jsxRuntimeExports.jsx(
                                            "button",
                                            {
                                              onClick: () => F(T.id),
                                              className: `py-1 rounded text-[9px] font-bold border cursor-pointer transition-all ${Bs === T.id ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"}`,
                                              children: T.label,
                                            },
                                            T.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        jsxRuntimeExports.jsxs("div", {
                          className:
                            "p-5 sm:p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-2 font-mono",
                          children: [
                            jsxRuntimeExports.jsx("span", {
                              className:
                                "text-sm sm:text-base font-semibold font-black text-slate-400 block tracking-wider uppercase text-left",
                              children: "SƠ ĐỒ TRỰC QUAN TIMELINE (THỜI GIAN)",
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "relative h-16 w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 flex",
                              children: [
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-full bg-slate-900/80 border-r border-red-500/20 relative flex items-center justify-center transition-all",
                                  style: {
                                    width: `${(wt / (J ? 13 : 10)) * 100}%`,
                                  },
                                  children: jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-[7px] text-red-500 absolute rotate-90",
                                    children: "TRIMMED",
                                  }),
                                }),
                                jsxRuntimeExports.jsxs("div", {
                                  className: "h-full flex-1 relative flex",
                                  children: [
                                    st
                                      ? jsxRuntimeExports.jsxs(
                                          jsxRuntimeExports.Fragment,
                                          {
                                            children: [
                                              jsxRuntimeExports.jsxs("button", {
                                                onClick: () => {
                                                  (_t("A"), It(wt));
                                                },
                                                className: `h-full border-r-2 border-dashed border-amber-400 flex flex-col items-center justify-center text-[9px] font-black cursor-pointer transition-all ${Be === "left" ? "bg-red-500/10 text-red-400 line-through" : St === "A" ? "bg-purple-600 text-white shadow-inner scale-y-105 border-2 border-yellow-400 ring-2 ring-purple-400" : "bg-purple-600/20 text-purple-300 hover:bg-purple-600/40"}`,
                                                style: {
                                                  width: `${Math.max(0, ((Lt - wt) / (Ot - wt)) * 100)}%`,
                                                },
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: "Clip A" },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[7px] opacity-75",
                                                      children: [
                                                        "(",
                                                        wt.toFixed(1),
                                                        "s - ",
                                                        Lt.toFixed(1),
                                                        "s)",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                              jsxRuntimeExports.jsxs("button", {
                                                onClick: () => {
                                                  (_t("B"), It(Lt));
                                                },
                                                className: `h-full flex-1 flex flex-col items-center justify-center text-[9px] font-black cursor-pointer transition-all ${Be === "right" ? "bg-red-500/10 text-red-400 line-through" : St === "B" ? "bg-blue-600 text-white shadow-inner scale-y-105 border-2 border-yellow-400 ring-2 ring-blue-400" : "bg-blue-600/20 text-blue-300 hover:bg-blue-600/40"}`,
                                                children: [
                                                  jsxRuntimeExports.jsx(
                                                    "span",
                                                    { children: "Clip B" },
                                                  ),
                                                  jsxRuntimeExports.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-[7px] opacity-75",
                                                      children: [
                                                        "(",
                                                        Lt.toFixed(1),
                                                        "s - ",
                                                        Ot.toFixed(1),
                                                        "s)",
                                                      ],
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          },
                                        )
                                      : J
                                        ? jsxRuntimeExports.jsxs(
                                            jsxRuntimeExports.Fragment,
                                            {
                                              children: [
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      (_t("A"), It(0));
                                                    },
                                                    className: `h-full border-r border-emerald-500/30 flex flex-col items-center justify-center text-[9px] font-black cursor-pointer transition-all ${St === "A" ? "bg-indigo-600 text-white shadow-inner scale-y-105 border-2 border-yellow-400 ring-2 ring-indigo-400" : "bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30"}`,
                                                    style: {
                                                      width: `${(nt / 13) * 100}%`,
                                                    },
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          children: "Gốc Ph.1",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[7px] opacity-75",
                                                          children: [
                                                            "(0s - ",
                                                            nt.toFixed(1),
                                                            "s)",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      (_t("spliced"), It(nt));
                                                    },
                                                    className: `h-full border-r-2 border-emerald-400 flex flex-col items-center justify-center text-[9px] font-black cursor-pointer transition-all ${St === "spliced" ? "bg-emerald-600 text-white shadow-inner scale-y-105 border-2 border-yellow-400 ring-2 ring-emerald-400" : "bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30"}`,
                                                    style: {
                                                      width: `${(Ct / 13) * 100}%`,
                                                    },
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          children: "🌌 Galaxy",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[7px] opacity-75",
                                                          children: [
                                                            "(",
                                                            nt.toFixed(1),
                                                            "s - ",
                                                            (nt + Ct).toFixed(
                                                              1,
                                                            ),
                                                            "s)",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                jsxRuntimeExports.jsxs(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      (_t("B"), It(nt + Ct));
                                                    },
                                                    className: `h-full flex-1 flex flex-col items-center justify-center text-[9px] font-black cursor-pointer transition-all ${St === "B" ? "bg-indigo-600 text-white shadow-inner scale-y-105 border-2 border-yellow-400 ring-2 ring-indigo-400" : "bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30"}`,
                                                    children: [
                                                      jsxRuntimeExports.jsx(
                                                        "span",
                                                        {
                                                          children: "Gốc Ph.2",
                                                        },
                                                      ),
                                                      jsxRuntimeExports.jsxs(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-[7px] opacity-75",
                                                          children: [
                                                            "(",
                                                            (nt + Ct).toFixed(
                                                              1,
                                                            ),
                                                            "s - 13.0s)",
                                                          ],
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                              ],
                                            },
                                          )
                                        : jsxRuntimeExports.jsxs("div", {
                                            className:
                                              "h-full flex-1 bg-indigo-600/15 flex flex-col items-center justify-center text-[9px] text-indigo-300 font-black tracking-wide",
                                            children: [
                                              jsxRuntimeExports.jsx("span", {
                                                children:
                                                  "PHÂN ĐOẠN ĐANG PHÁT (ACTIVE VIDEO)",
                                              }),
                                              jsxRuntimeExports.jsxs("span", {
                                                className:
                                                  "text-[8px] text-yellow-400 font-mono mt-0.5",
                                                children: [
                                                  "(",
                                                  wt.toFixed(1),
                                                  "s - ",
                                                  Ot.toFixed(1),
                                                  "s)",
                                                ],
                                              }),
                                            ],
                                          }),
                                    Je === "split" &&
                                      !st &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "absolute top-0 bottom-0 w-0.5 bg-amber-400 border-l border-dashed border-amber-500 z-15 flex flex-col justify-start",
                                        style: {
                                          left: `${((Vt - wt) / ((J ? 13 : 10) - wt)) * 100}%`,
                                        },
                                        children: jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className:
                                              "absolute -top-4 -left-12 bg-amber-500 text-slate-950 px-1 py-0.5 rounded text-[7px] font-black uppercase whitespace-nowrap shadow-md border border-amber-300 z-30",
                                            children: [
                                              "✂ Tách tại ",
                                              Vt.toFixed(1),
                                              "s",
                                            ],
                                          },
                                        ),
                                      }),
                                    Je === "splice" &&
                                      !J &&
                                      jsxRuntimeExports.jsx("div", {
                                        className:
                                          "absolute top-0 bottom-0 w-0.5 bg-emerald-400 border-l border-dashed border-emerald-500 z-15 flex flex-col justify-start",
                                        style: {
                                          left: `${((bt - wt) / ((J ? 13 : 10) - wt)) * 100}%`,
                                        },
                                        children: jsxRuntimeExports.jsxs(
                                          "div",
                                          {
                                            className:
                                              "absolute -top-4 -left-12 bg-emerald-500 text-white px-1 py-0.5 rounded text-[7px] font-black uppercase whitespace-nowrap shadow-md border border-emerald-300 z-30 animate-pulse",
                                            children: [
                                              "➕ Chèn tại ",
                                              bt.toFixed(1),
                                              "s",
                                            ],
                                          },
                                        ),
                                      }),
                                    jsxRuntimeExports.jsx("div", {
                                      className:
                                        "absolute top-0 bottom-0 w-0.5 bg-yellow-400 shadow-[0_0_8px_#f59e0b] z-20",
                                      style: {
                                        left: `${((Kt - wt) / ((J ? 13 : 10) - wt)) * 100}%`,
                                      },
                                      children: jsxRuntimeExports.jsx("div", {
                                        className:
                                          "absolute -top-1 -left-1.5 h-3 w-3.5 bg-yellow-400 rounded-xs border border-slate-950 flex items-center justify-center text-[7px] text-slate-950 font-black",
                                        children: "▼",
                                      }),
                                    }),
                                  ],
                                }),
                                jsxRuntimeExports.jsx("div", {
                                  className:
                                    "h-full bg-slate-900/80 border-l border-red-500/20 relative flex items-center justify-center",
                                  style: {
                                    width: `${(((J ? 13 : 10) - Ot) / (J ? 13 : 10)) * 100}%`,
                                  },
                                  children: jsxRuntimeExports.jsx("span", {
                                    className:
                                      "text-[7px] text-red-500 absolute rotate-90",
                                    children: "TRIMMED",
                                  }),
                                }),
                              ],
                            }),
                            jsxRuntimeExports.jsxs("div", {
                              className:
                                "flex justify-between text-[9px] text-slate-500 font-mono",
                              children: [
                                jsxRuntimeExports.jsx("span", {
                                  children: "0.00s",
                                }),
                                st &&
                                  jsxRuntimeExports.jsxs("span", {
                                    children: ["Tách: ", Lt.toFixed(1), "s"],
                                  }),
                                J &&
                                  jsxRuntimeExports.jsxs("span", {
                                    children: [
                                      "Ghép: ",
                                      nt.toFixed(1),
                                      "s - ",
                                      (nt + Ct).toFixed(1),
                                      "s",
                                    ],
                                  }),
                                jsxRuntimeExports.jsxs("span", {
                                  children: [J ? "13.00" : "10.00", "s"],
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

    return Lab15;
  };
})();
