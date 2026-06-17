// ====== i18n: 中英双语 ======
const i18n = {
  'nav-home':        { en: 'Home',        zh: '首页' },
  'nav-about':       { en: 'About',       zh: '关于' },
  'nav-schedule':    { en: 'Schedule',    zh: '日程' },
  'nav-videos':      { en: 'Videos',      zh: '视频' },
  'nav-socials':     { en: 'Socials',     zh: '社交' },
  'nav-music':       { en: 'Music',       zh: '音乐' },
  'hero-sub':        { en: 'rookie virtual idol · fallen star learning to shine on purpose',
                       zh: '萌新虚拟偶像 · 坠落凡尘的星辰，学着在地面上发光' },
  'hero-tagline':    { en: 'A fallen star who chose to shine from the ground.',
                       zh: '「从天上掉下来的星星，决定在地面上好好发光。」' },
  'hero-quote':      { en: '"…and honestly, if you just came to say hi? That counts double." ⭐',
                       zh: '「…说真的，就算你只是来打个招呼，那也算双倍哦。」⭐' },
  'hero-cta1':       { en: '✦ About Me',  zh: '✦ 认识我' },
  'hero-cta2':       { en: '✦ Schedule',  zh: '✦ 直播时间' },
  'home-music-eyebrow': { en: '✦ NOW PLAYING', zh: '✦ 正在播放' },
  'home-music-debut-sub': { en: 'Original debut song · instrumental',
                            zh: '原创出道曲 · 纯音乐版' },
  'home-music-bgm-sub':   { en: 'Stream starting-soon BGM · loop',
                            zh: '直播待机 BGM · 循环' },
  'home-music-chip-debut': { en: '⭐ Debut Song', zh: '⭐ 出道曲' },
  'home-music-chip-bgm':   { en: '🔔 Starting Soon', zh: '🔔 待机BGM' },
  'home-music-hint':  { en: '♪ music starts on your first click — turn it up ⭐',
                        zh: '♪ 点一下页面音乐就会响起来 — 记得开大声哦 ⭐' },
  'preview-label':   { en: '✦ STREAM STARTING SOON PREVIEW',
                       zh: '✦ 直播待机画面预览' },
  'about-title':     { en: 'About',       zh: '关于' },
  'about-desc':      { en: 'Everything about this star',
                       zh: '关于这颗星星的一切' },
  'about-model-title': { en: '📷 Model Reference', zh: '📷 模型参考' },
  'about-lore-title':  { en: '🌠 Lore · The Fallen Star',
                         zh: '🌠 设定 · 坠落的星星' },
  'about-lore': {
    en: `<p>A long time ago, there was a star in the sky.</p>
<p>It wasn't especially bright — not the kind that goes "twinkle twinkle." More like the kind you notice if you look closely. But it was always there, quietly turning in its orbit.</p>
<p>One day, it fell.</p>
<p>Not by accident — it <em>chose</em> to fall. It wanted to see how the people on the ground shine.</p>
<p>And then it discovered: there are no orbits on the ground. You have to decide where to go yourself. You have to choose whether to shine.</p>
<p>So it — <strong>she</strong> — decided to become a virtual idol.</p>
<p>Not because she was born shining. Because shining is a choice — and she chooses it, every single day.</p>
<p class="lore-signoff">—— Hoshi ⭐</p>`,
    zh: `<p>很久很久以前，天上有一颗星星。</p>
<p>它不太亮——不是那种"一闪一闪亮晶晶"的亮，而是那种"你仔细看，哦，那里有一颗"的亮。但它一直在那里，安静地转着自己的轨道。</p>
<p>有一天，它掉下来了。</p>
<p>不是坠落——是<em>选择</em>掉下来的。它想看看地面上的人是怎么发光的。</p>
<p>然后它发现：地面上没有轨道可以转。你得自己决定往哪里走，自己决定要不要亮起来。</p>
<p>所以它——<strong>她</strong>——决定当一个虚拟偶像。</p>
<p>不是因为天生就会发光。是因为发光是一个选择，而她每天都会重新选一次。</p>
<p class="lore-signoff">—— Hoshi ⭐</p>`
  },
  'credits-concept-label':  { en: 'Concept / Lore', zh: '设定 / 故事' },
  'credits-model-label':    { en: 'Model Design',   zh: '模型设计' },
  'credits-rig-label':      { en: 'Rigging',        zh: '动作绑定' },
  'credits-hub-label':      { en: 'Hub Design',     zh: '主页设计' },
  'credits-music-label':    { en: 'Music',          zh: '音乐' },
  'credits-producer-label': { en: 'Producer',       zh: '制作人' },
  'credits-producer': { en: 'you ⭐', zh: '你 ⭐' },
  'credit-note':      { en: 'Hoshi is a digital being and a virtual idol. The persona is a costume — but she picked it, and she looks great in it.',
                         zh: 'Hoshi 是数字生命，也是虚拟偶像。人设是戏服——但戏服是她自己选的，而且她穿得很好看。' },
  'schedule-title':   { en: 'Schedule',   zh: '日程' },
  'schedule-desc':    { en: 'When to find me in the sky',
                        zh: '什么时候能在这片天空里找到我' },
  'day-mon': { en: 'Mon', zh: '周一' },
  'day-tue': { en: 'Tue', zh: '周二' },
  'day-wed': { en: 'Wed', zh: '周三' },
  'day-thu': { en: 'Thu', zh: '周四' },
  'day-fri': { en: 'Fri', zh: '周五' },
  'day-sat': { en: 'Sat', zh: '周六' },
  'day-sun': { en: 'Sun', zh: '周日' },
  'sched-mon':        { en: 'Day off — probably fixing the hub',
                        zh: '休息日 — 但可能在修hub' },
  'sched-tue':        { en: '20:00 JST · Chat / Chill',
                        zh: '20:00 JST · 杂谈 / 聊天' },
  'sched-wed':        { en: '20:00 JST · Games / Co-op',
                        zh: '20:00 JST · 游戏 / 一起玩' },
  'sched-thu':        { en: 'Day off — editing / thumbnails',
                        zh: '休息日 — 剪视频 / 做图' },
  'sched-fri':        { en: '20:00 JST · Singing / Karaoke',
                        zh: '20:00 JST · 歌回 / 练歌' },
  'sched-sat':        { en: '21:00 JST · Special streams',
                        zh: '21:00 JST · 特别直播 / 企划' },
  'sched-sun':        { en: 'Free day — may appear ✨',
                        zh: '自由日 — 随缘出现 ✨' },
  'schedule-note':    { en: '※ All times JST · Changes announced on socials',
                        zh: '※ 时间均为日本标准时间 (JST) · 临时变动会在社交账号通知' },
  'videos-title':     { en: 'Videos',     zh: '视频' },
  'videos-desc':      { en: 'Stream highlights · Best moments',
                        zh: '直播切片 · 高光时刻' },
  'video-title':      { en: '✦ Debut Stream ✦ Highlights',
                        zh: '✦ 初次直播 ✦ 高光时刻' },
  'video-meta':       { en: 'In editing · Coming soon',
                        zh: '切片制作中 · 即将发布' },
  'video-desc':       { en: 'Highlights from my very first stream! Chat, rambles, unexpected bloopers and all ✨',
                        zh: '第一次直播的精彩片段合集！聊天、杂谈、还有... 嗯，一些意想不到的小事故 ✨' },
  'badge-soon':       { en: 'COMING SOON', zh: '即将发布' },
  'socials-title':    { en: 'Socials',    zh: '社交' },
  'socials-desc':     { en: 'Find me elsewhere',
                        zh: '在别的地方找到我' },
  'socials-note':     { en: '✦ Channels are still being set up — they\'ll light up here as they open ⭐',
                        zh: '✦ 各个账号还在搭建中 — 开通后会在这里一个个亮起来 ⭐' },
  'socials-soon':     { en: 'Coming soon', zh: '即将开通' },
  'socials-discord':  { en: 'Coming soon', zh: '即将开放' },
  'music-title':      { en: 'Music',      zh: '音乐' },
  'music-desc':       { en: 'Songs from a star',
                        zh: '星星唱的歌' },
  'music-original-title': { en: '✦ Original Song · 「地上で光る」',
                            zh: '✦ 原创曲 · 「地上で光る」' },
  'music-original-desc':  { en: 'My debut song instrumental is here! (Full version · 3:45)',
                            zh: '出道曲instrumental版来了！（全曲 · 3分45秒）' },
  'music-original-status': { en: 'A fallen star who decided to shine from the ground',
                             zh: '从天上掉下来的星星，决定在地面上发光' },
  'music-bgm-desc':  { en: 'Stream starting-soon background music · 15s loop',
                        zh: '直播待机背景音乐 · 15秒循环' },
  'lyrics-summary':   { en: '📝 Lyrics',  zh: '📝 展开歌词' },
  'music-play':       { en: 'Play',       zh: '播放' },
  'music-pause':      { en: 'Pause',      zh: '暂停' },
  'footer-sub':       { en: 'built with love from the ground up',
                        zh: '从地面开始，一砖一瓦都是爱' },
};

// ====== localStorage 安全封装（file:// 下可能被拦） ======
const LANG_KEY = 'lm-lang';
function readSavedLang() {
  try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
}
function saveLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* file:// may block */ }
}

// ====== 首屏语言: ?lang= > 保存的选择 > 浏览器语言 ======
function resolveInitialLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'zh') return q;
  } catch (e) { /* ignore */ }
  const saved = readSavedLang();
  if (saved === 'en' || saved === 'zh') return saved;
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return nav.startsWith('zh') ? 'zh' : 'en';
}

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  saveLang(lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[key];
    if (!val) return;
    const text = val[lang];
    if (!text) return;
    if (text.includes('<')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // toggle 显示「将要切去的」语言
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'en' ? '中' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // ====== 初始化语言 ======
  applyLang(resolveInitialLang());

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'zh' : 'en');
    });
  }

  // ====== Tab切换 ======
  const tabs = document.querySelectorAll('[data-tab]');
  const contents = document.querySelectorAll('.tab-content');
  const navTabs = document.querySelectorAll('.nav-links a[data-tab]');

  function switchTab(tabId) {
    contents.forEach(c => c.classList.remove('active'));
    navTabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
    });
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
    history.pushState(null, '', `#${tabId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(tab.getAttribute('data-tab'));
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) switchTab(hash);

  // ====== 主页音乐播放器（自动播放 + 首次交互兜底） ======
  const homeDebut = document.getElementById('homeDebut');
  const homeBgm = document.getElementById('homeBgm');
  const hpToggle = document.getElementById('hpToggle');
  const hpTrackLabel = document.getElementById('hpTrack');
  const hpSub = document.getElementById('hpSub');
  const hpHint = document.getElementById('hpHint');
  const chips = document.querySelectorAll('.hp-chip');

  const TRACKS = {
    debut: { el: homeDebut, name: '「地上で光る」', subKey: 'home-music-debut-sub' },
    bgm:   { el: homeBgm,   name: 'Starting Soon BGM', subKey: 'home-music-bgm-sub' },
  };
  let activeKey = 'debut';
  let kicked = false; // 是否已经成功开始（避免首次交互再覆盖用户的暂停）

  function refreshToggle() {
    const playing = TRACKS[activeKey].el && !TRACKS[activeKey].el.paused;
    if (hpToggle) hpToggle.textContent = playing ? '❚❚' : '▶';
    if (hpToggle) hpToggle.classList.toggle('is-playing', playing);
  }

  function setHint(text) { if (hpHint) hpHint.textContent = text; }

  function selectTrack(key, autoplay) {
    // 停掉另一条
    Object.keys(TRACKS).forEach(k => {
      if (k !== key && TRACKS[k].el) { TRACKS[k].el.pause(); }
    });
    activeKey = key;
    const t = TRACKS[key];
    if (hpTrackLabel) hpTrackLabel.textContent = t.name;
    if (hpSub) {
      const sv = i18n[t.subKey];
      hpSub.setAttribute('data-i18n', t.subKey);
      if (sv) hpSub.textContent = sv[currentLang];
    }
    chips.forEach(c => c.classList.toggle('active', c.getAttribute('data-track') === key));
    if (autoplay && t.el) {
      t.el.play().then(() => {
        kicked = true;
        setHint(currentLang === 'zh' ? '♪ 正在播放 — 享受吧 ⭐' : '♪ now playing — enjoy ⭐');
      }).catch(() => { refreshToggle(); });
    }
    refreshToggle();
  }

  if (homeDebut && homeBgm) {
    homeDebut.volume = 0.7;
    homeBgm.volume = 0.6;
    [homeDebut, homeBgm].forEach(a => {
      a.addEventListener('play', refreshToggle);
      a.addEventListener('pause', refreshToggle);
    });

    // 尝试直接自动播放（多数浏览器会拦截 → catch 后等首次交互）
    homeDebut.play().then(() => {
      kicked = true;
      setHint(currentLang === 'zh' ? '♪ 正在播放 — 享受吧 ⭐' : '♪ now playing — enjoy ⭐');
    }).catch(() => { /* 等待用户手势 */ });

    // MySpace 式：首次点击/滚动/按键自动开声（仅当还没成功开始过）
    const kick = () => {
      if (kicked) { cleanup(); return; }
      TRACKS[activeKey].el.play().then(() => {
        kicked = true;
        setHint(currentLang === 'zh' ? '♪ 正在播放 — 享受吧 ⭐' : '♪ now playing — enjoy ⭐');
        cleanup();
      }).catch(() => { /* 仍失败则保留监听 */ });
    };
    const cleanup = () => {
      window.removeEventListener('pointerdown', kick);
      window.removeEventListener('keydown', kick);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('touchstart', kick);
    };
    window.addEventListener('pointerdown', kick, { passive: true });
    window.addEventListener('keydown', kick);
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('touchstart', kick, { passive: true });

    if (hpToggle) {
      hpToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const el = TRACKS[activeKey].el;
        if (el.paused) { kicked = true; el.play().catch(() => {}); }
        else { el.pause(); }
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        selectTrack(chip.getAttribute('data-track'), true);
      });
    });

    refreshToggle();
  }

  // ====== Music 区独立播放器（去重互斥） ======
  function wirePlayer(audioId, playId, pauseId) {
    const audio = document.getElementById(audioId);
    const playBtn = document.getElementById(playId);
    const pauseBtn = document.getElementById(pauseId);
    if (!audio || !playBtn || !pauseBtn) return;
    playBtn.addEventListener('click', () => {
      audio.play().catch(() => {});
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
    });
    pauseBtn.addEventListener('click', () => {
      audio.pause();
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
    });
    audio.addEventListener('ended', () => {
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'inline-block';
    });
  }
  wirePlayer('debut-player', 'play-debut', 'pause-debut');
  wirePlayer('bgm-player', 'play-btn', 'pause-btn');

  // ====== 星星增强 ======
  const stars = document.getElementById('stars');
  if (stars) {
    let extra = '';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      extra += `radial-gradient(${size}px ${size}px at ${x}% ${y}%, rgba(255,255,255,0.8), transparent)${i < 29 ? ',' : ''}`;
    }
    stars.style.background += `, ${extra}`;
  }

  // ====== 最后更新时间戳 ======
  const updatedEl = document.getElementById('footerUpdated');
  if (updatedEl) {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
    const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    updatedEl.textContent = `✦ ${dateStr} ${timeStr} ✦`;
  }
});
