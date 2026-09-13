/**
 * Portal Giảng Dạy Tin Học & IC3 GS6 - Logic Điều Hướng Phân Cấp & Dynamic Scale
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Data Structure
  const navData = [
    {
      id: 'tieuhoc',
      name: 'Tiểu học (IC3 Spark)',
      icon: 'fa-child-reaching',
      levels: [
        { id: 'th_lv1', name: 'Level 1 (LV1)', modules: ['GM1', 'GM2', 'OT'] },
        { id: 'th_lv2', name: 'Level 2 (LV2)', modules: ['GM1', 'GM2', 'OT'] },
        { id: 'th_lv3', name: 'Level 3 (LV3)', modules: ['GM1', 'GM2', 'OT'] }
      ]
    },
    {
      id: 'thcs',
      name: 'THCS (IC3 GS6)',
      icon: 'fa-laptop-code',
      expanded: true, // Default open for demonstration
      levels: [
        { 
          id: 'thcs_lv1', 
          name: 'Level 1 (LV1)', 
          activeModule: 'GM1',
          modules: ['GM1', 'GM2', 'OT'],
          moduleDetails: {
            GM1: {
              title: '🚀 GM1: Quy Trình Xử Lý Sự Cố Kết Nối Internet',
              desc: '18 Bài thực hành mô phỏng chuẩn quốc tế IC3 GS6 Level 1 (Khắc phục sự cố mạng, thuật ngữ HĐH, thiết bị, bảo mật...)',
              isClonedLab: true,
              src: './thcs_lv1_gm1.html'
            },
            GM2: {
              title: '🎮 GM2: Trò Chơi Ôn Tập & Thách Thức Kiến Thức LV1',
              desc: 'Các trò chơi ghép nối thuật ngữ, trắc nghiệm tương tác và xử lý tình huống thực tế cho học sinh THCS Level 1.'
            },
            OT: {
              title: '📝 OT: Bộ Đề Thi Ôn Tập Tổng Hợp IC3 GS6 Level 1',
              desc: 'Ngân hàng 50 câu hỏi ôn luyện mô phỏng đề thi chính thức kèm đáp án và giải thích chi tiết cho giáo viên.'
            }
          }
        },
        { id: 'thcs_lv2', name: 'Level 2 (LV2)', modules: ['GM1', 'GM2', 'OT'] },
        { id: 'thcs_lv3', name: 'Level 3 (LV3)', modules: ['GM1', 'GM2', 'OT'] }
      ]
    },
    {
      id: 'thpt',
      name: 'THPT (Chứng Chỉ MOS)',
      icon: 'fa-graduation-cap',
      levels: [
        { id: 'thpt_word', name: '📘 WORD 2019 / 365', modules: ['Thực hành', 'Đề thi MOS'] },
        { id: 'thpt_excel', name: '📊 EXCEL 2019 / 365', modules: ['Thực hành', 'Đề thi MOS'] },
        { id: 'thpt_ppt', name: '📙 POWERPOINT', modules: ['Thực hành', 'Đề thi MOS'] }
      ]
    }
  ];

  // Current State
  let currentState = {
    category: 'thcs',
    level: 'thcs_lv1',
    module: 'GM1',
    isFocusMode: false,
    theme: 'dark',
    zoomLevel: 85 // Default content scale 85%
  };

  // DOM Elements
  const sidebarNav = document.getElementById('sidebar-nav');
  const stageBreadcrumb = document.getElementById('stage-breadcrumb');
  const viewerContainer = document.getElementById('viewer-container');
  const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
  const btnFocusMode = document.getElementById('btn-focus-mode');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const searchInput = document.getElementById('search-input');
  
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const zoomText = document.getElementById('zoom-text');

  // Handle Zoom Scale
  function setZoom(newZoom) {
    currentState.zoomLevel = Math.max(65, Math.min(125, newZoom));
    const scale = currentState.zoomLevel / 100;
    document.documentElement.style.setProperty('--content-zoom', scale);
    zoomText.innerText = `${currentState.zoomLevel}%`;
    
    // Apply zoom to iframe if present
    const iframe = viewerContainer.querySelector('iframe');
    if (iframe) {
      iframe.style.zoom = scale;
    }
  }

  btnZoomIn.addEventListener('click', () => setZoom(currentState.zoomLevel + 5));
  btnZoomOut.addEventListener('click', () => setZoom(currentState.zoomLevel - 5));

  // Initialize Sidebar Navigation
  function renderSidebar() {
    sidebarNav.innerHTML = '';

    navData.forEach(cat => {
      const isCatActive = currentState.category === cat.id;
      
      const blockEl = document.createElement('div');
      blockEl.className = 'category-block';

      // Category Header Button
      const titleBtn = document.createElement('button');
      titleBtn.className = `category-title ${isCatActive ? 'active' : ''} ${cat.expanded ? 'expanded' : ''}`;
      titleBtn.innerHTML = `
        <div class="title-left">
          <i class="fa-solid ${cat.icon}"></i>
          <span>${cat.name}</span>
        </div>
        <i class="fa-solid fa-chevron-down chevron"></i>
      `;

      // Levels Container
      const levelsContainer = document.createElement('div');
      levelsContainer.className = `levels-container ${cat.expanded ? 'expanded' : ''}`;

      cat.levels.forEach(lvl => {
        const isLvlActive = currentState.level === lvl.id;

        const levelItem = document.createElement('div');
        levelItem.className = 'level-item';

        const lvlBtn = document.createElement('button');
        lvlBtn.className = `level-header ${isLvlActive ? 'active' : ''}`;
        lvlBtn.innerHTML = `
          <span>${lvl.name}</span>
          ${lvl.id === 'thcs_lv1' ? '<span class="card-badge emerald">18 Labs</span>' : ''}
        `;

        lvlBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          selectLevel(cat.id, lvl.id, lvl.modules[0]);
        });

        // Submodules (GM1, GM2, OT)
        const subContainer = document.createElement('div');
        subContainer.className = 'submodules-container';

        lvl.modules.forEach(mod => {
          const isModActive = isLvlActive && currentState.module === mod;
          const isClonedGM1 = (lvl.id === 'thcs_lv1' && mod === 'GM1');

          const modPill = document.createElement('button');
          modPill.className = `module-pill ${isModActive ? (isClonedGM1 ? 'active-gm1-cloned' : 'active') : ''}`;
          modPill.innerHTML = isClonedGM1 
            ? `<i class="fa-solid fa-play"></i> ${mod}` 
            : mod;

          modPill.addEventListener('click', (e) => {
            e.stopPropagation();
            selectLevel(cat.id, lvl.id, mod);
          });

          subContainer.appendChild(modPill);
        });

        levelItem.appendChild(lvlBtn);
        levelItem.appendChild(subContainer);
        levelsContainer.appendChild(levelItem);
      });

      // Category toggle expand/collapse
      titleBtn.addEventListener('click', () => {
        cat.expanded = !cat.expanded;
        titleBtn.classList.toggle('expanded', cat.expanded);
        levelsContainer.classList.toggle('expanded', cat.expanded);
      });

      blockEl.appendChild(titleBtn);
      blockEl.appendChild(levelsContainer);
      sidebarNav.appendChild(blockEl);
    });
  }

  // Handle Level/Module Selection
  function selectLevel(catId, lvlId, modId) {
    currentState.category = catId;
    currentState.level = lvlId;
    currentState.module = modId;

    renderSidebar();
    updateStage();
  }

  // Update Main Stage Viewer
  function updateStage() {
    const catObj = navData.find(c => c.id === currentState.category);
    const lvlObj = catObj ? catObj.levels.find(l => l.id === currentState.level) : null;

    // Update Breadcrumb
    const catName = catObj ? catObj.name : '';
    const lvlName = lvlObj ? lvlObj.name : '';
    stageBreadcrumb.innerHTML = `
      <span>${catName}</span>
      <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
      <span>${lvlName}</span>
      <i class="fa-solid fa-angle-right" style="font-size: 0.75rem;"></i>
      <span class="active-item">${currentState.module}</span>
    `;

    // Render Content Viewer
    if (currentState.level === 'thcs_lv1' && currentState.module === 'GM1') {
      // Render Cloned Lab SPA inside Iframe
      viewerContainer.innerHTML = `
        <iframe src="./thcs_lv1_gm1.html" class="lab-iframe" title="THCS Level 1 GM1 Lab" style="zoom: ${currentState.zoomLevel / 100}"></iframe>
      `;
    } else {
      // Render Dashboard Grid for Other Courses
      renderDashboardView(catObj, lvlObj);
    }
  }

  // Render Dashboard Cards View for Non-Cloned Labs
  function renderDashboardView(catObj, lvlObj) {
    const moduleTitle = `${catObj ? catObj.name : ''} - ${lvlObj ? lvlObj.name : ''} (${currentState.module})`;

    viewerContainer.innerHTML = `
      <div class="dashboard-grid-view">
        <div class="hero-banner">
          <div class="hero-text">
            <h2>${moduleTitle}</h2>
            <p>Hệ thống bài giảng, mô phỏng tương tác và kho đề thi trắc nghiệm phục vụ công tác giảng dạy Tin học cho giáo viên.</p>
          </div>
          <div class="hero-stats">
            <div class="stat-card">
              <div class="num">12+</div>
              <div class="label">Bài thực hành</div>
            </div>
            <div class="stat-card">
              <div class="num">100%</div>
              <div class="label">Chuẩn IC3/MOS</div>
            </div>
          </div>
        </div>

        <div class="modules-section-title">
          <i class="fa-solid fa-folder-open" style="color: var(--accent-primary);"></i>
          <span>Danh Sách Mô-đun & Bài Tập</span>
        </div>

        <div class="cards-grid">
          <!-- Quick Card for THCS LV1 GM1 -->
          <div class="lab-card active-cloned-card" onclick="window.selectLab('thcs', 'thcs_lv1', 'GM1')">
            <div class="card-top">
              <div class="card-icon" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%);">
                <i class="fa-solid fa-wifi"></i>
              </div>
              <span class="card-badge emerald">SẴN SÀNG ĐĂNG BÀI</span>
            </div>
            <div class="card-title">THCS Level 1 - GM1</div>
            <div class="card-desc">Quy Trình Xử Lý Sự Cố Kết Nối Internet (18 bài thực hành mô phỏng chuẩn IC3 GS6 Level 1).</div>
            <div class="card-footer">
              <span>Mở bài thực hành ngay</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <!-- Sample Module Cards -->
          <div class="lab-card">
            <div class="card-top">
              <div class="card-icon">
                <i class="fa-solid fa-computer"></i>
              </div>
              <span class="card-badge">MÔ PHỎNG</span>
            </div>
            <div class="card-title">${currentState.module} - Bài 01: Nhận diện Phần cứng & Phần mềm</div>
            <div class="card-desc">Phân loại các thiết bị đầu vào, đầu ra, thiết bị lưu trữ và khái niệm hệ điều hành cốt lõi.</div>
            <div class="card-footer">
              <span>Bắt đầu bài giảng</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div class="lab-card">
            <div class="card-top">
              <div class="card-icon" style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <span class="card-badge">BẢO MẬT</span>
            </div>
            <div class="card-title">${currentState.module} - Bài 02: An toàn thông tin & Mật mã</div>
            <div class="card-desc">Thực hành đặt mật khẩu mạnh, nhận biết Email lừa đảo (Phishing) và bảo vệ dữ liệu cá nhân.</div>
            <div class="card-footer">
              <span>Bắt đầu bài giảng</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div class="lab-card">
            <div class="card-top">
              <div class="card-icon" style="background: linear-gradient(135deg, #EC4899 0%, #DB2777 100%);">
                <i class="fa-solid fa-file-lines"></i>
              </div>
              <span class="card-badge">ĐỀ THI MẪU</span>
            </div>
            <div class="card-title">${currentState.module} - Bài 03: Đề thi thử tổng hợp</div>
            <div class="card-desc">Bài kiểm tra 25 câu hỏi trắc nghiệm đếm ngược thời gian hỗ trợ giáo viên chấm điểm trực tiếp.</div>
            <div class="card-footer">
              <span>Vào phòng thi thử</span>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Global helper to switch to cloned lab from card
  window.selectLab = function(catId, lvlId, modId) {
    selectLevel(catId, lvlId, modId);
  };

  // Classroom Presentation / Focus Mode Toggle
  btnFocusMode.addEventListener('click', () => {
    currentState.isFocusMode = !currentState.isFocusMode;
    document.body.classList.toggle('focus-mode', currentState.isFocusMode);
    btnFocusMode.innerHTML = currentState.isFocusMode
      ? `<i class="fa-solid fa-compress"></i> <span>Thoát Trình Chiếu</span>`
      : `<i class="fa-solid fa-expand"></i> <span>Trình Chiếu Giảng Dạy</span>`;
  });

  // Toggle Sidebar Button
  btnToggleSidebar.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
  });

  // Dark / Light Theme Toggle
  btnThemeToggle.addEventListener('click', () => {
    currentState.theme = currentState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentState.theme);
    btnThemeToggle.innerHTML = currentState.theme === 'dark'
      ? `<i class="fa-solid fa-moon"></i>`
      : `<i class="fa-solid fa-sun"></i>`;
  });

  // Search filter
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderSidebar();
      return;
    }
    // Expand all categories if searching
    navData.forEach(c => c.expanded = true);
    renderSidebar();
  });

  // Initial Setup
  setZoom(85);
  renderSidebar();
  updateStage();
});
