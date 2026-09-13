/**
 * Lab 14: Phân biệt Máy in Laser & Phun
 * Modular standalone component decoupled from main bundle.
 */
(function () {
  window.AGY_LABS = window.AGY_LABS || {};
  window.initLab14 = window.AGY_LABS[14] = function (env) {
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

    return Lab14;
  };
})();
