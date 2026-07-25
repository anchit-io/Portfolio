document.getElementById('year').textContent = new Date().getFullYear();

/* live ops ticker */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tickerLines = [
  'checking cluster health...',
  'kubectl get pods --all-namespaces → all Running',
  'SLA compliance holding at 90–95%',
  'CloudWatch: 0 active alarms',
  'terraform plan → no changes',
  'ArgoCD: applications synced',
  'patch cycle complete, 0 pending reboots'
];
let tickerIndex = 0;
const tickerEl = document.getElementById('ticker-text');
if (tickerEl && !reduceMotion) {
  setInterval(() => {
    tickerIndex = (tickerIndex + 1) % tickerLines.length;
    tickerEl.style.opacity = 0;
    setTimeout(() => {
      tickerEl.textContent = tickerLines[tickerIndex];
      tickerEl.style.opacity = 1;
    }, 200);
  }, 3200);
  tickerEl.style.transition = 'opacity .2s ease';
}

/* GitHub live profile */
async function loadGitHub() {
  const nameEl = document.getElementById('gh-name');
  const bioEl = document.getElementById('gh-bio');
  const linkEl = document.getElementById('gh-link');
  const reposEl = document.getElementById('gh-repos');
  const followersEl = document.getElementById('gh-followers');
  const followingEl = document.getElementById('gh-following');
  const listEl = document.getElementById('gh-repo-list');
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/anchit-io'),
      fetch('https://api.github.com/users/anchit-io/repos?sort=updated&per_page=3')
    ]);
    if (!profileRes.ok) throw new Error('GitHub profile unavailable right now.');
    const profile = await profileRes.json();
    const repos = reposRes.ok ? await reposRes.json() : [];

    nameEl.textContent = profile.name || 'Anchit Mishra';
    bioEl.textContent = profile.bio || 'Public repositories, pulled live from GitHub.';
    linkEl.href = profile.html_url || linkEl.href;
    reposEl.textContent = profile.public_repos ?? '—';
    followersEl.textContent = profile.followers ?? '—';
    followingEl.textContent = profile.following ?? '—';

    listEl.innerHTML = repos.length
      ? repos.map(r => `
        <div class="repo">
          <a href="${r.html_url}" target="_blank" rel="noreferrer">${r.name} ↗</a>
          <p>${r.description ? r.description : 'No description yet.'}</p>
        </div>`).join('')
      : '<p style="grid-column:1/-1;color:var(--muted);font-size:13px">No public repositories found yet.</p>';
  } catch (err) {
    bioEl.textContent = 'Live GitHub data could not load right now.';
    listEl.innerHTML = `<p style="grid-column:1/-1;color:var(--muted);font-size:13px">${err.message}</p>`;
  }
}
loadGitHub();

/* ambient galactic background */
function createSpaceBackground() {
  const canvas = document.getElementById('space-bg');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    stars = Array.from({ length: Math.min(190, Math.round(window.innerWidth / 7)) }, () => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, r: Math.random() * 1.35 + .25, a: Math.random() * .65 + .18, v: Math.random() * .14 + .025 }));
  }
  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach(s => { s.y += s.v; if (s.y > window.innerHeight) { s.y = -2; s.x = Math.random() * window.innerWidth; } ctx.fillStyle = `rgba(210,226,255,${s.a})`; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill(); });
    if (!reduceMotion) requestAnimationFrame(draw);
  }
  resize(); draw(); window.addEventListener('resize', resize);
}
createSpaceBackground();

/* Orbit Runner */
function initOrbitRunner() {
  const canvas = document.getElementById('orbit-game');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const start = document.getElementById('game-start');
  const overlay = document.getElementById('game-overlay');
  const scoreEl = document.getElementById('game-score');
  const bestEl = document.getElementById('game-best');
  const shieldEl = document.getElementById('game-shield');
  const W = canvas.width, H = canvas.height;
  let running = false, ship, debris, cores, score, shield, keys = {}, last = 0, spawn = 0, coreSpawn = 0;
  let best = Number(localStorage.getItem('orbit-runner-best') || 0);
  bestEl.textContent = String(best).padStart(4, '0');
  function reset() { ship = { x: W / 2, y: H - 54, w: 25 }; debris = []; cores = []; score = 0; shield = 3; spawn = 0; coreSpawn = 0; updateStats(); }
  function updateStats() { scoreEl.textContent = String(Math.floor(score)).padStart(4, '0'); shieldEl.textContent = shield; bestEl.textContent = String(best).padStart(4, '0'); }
  function begin() { reset(); running = true; start.textContent = 'Restart mission'; overlay.classList.add('hidden'); last = performance.now(); requestAnimationFrame(loop); }
  function end() { running = false; best = Math.max(best, Math.floor(score)); localStorage.setItem('orbit-runner-best', best); updateStats(); overlay.innerHTML = `<span>Mission complete</span><small>Score: ${Math.floor(score)} · Launch again to retry</small>`; overlay.classList.remove('hidden'); }
  function circle(x, y, r, color) { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }
  function draw() {
    ctx.fillStyle = '#070c1a'; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 65; i++) { const x = (i * 97) % W, y = (i * 53 + Math.floor(score * .7)) % H; circle(x, y, i % 6 ? .65 : 1.25, i % 6 ? 'rgba(194,213,255,.5)' : 'rgba(92,141,255,.8)'); }
    debris.forEach(d => { circle(d.x, d.y, d.r + 3, 'rgba(242,169,59,.12)'); circle(d.x, d.y, d.r, '#817166'); circle(d.x - d.r * .3, d.y - d.r * .25, d.r * .25, '#4d4650'); });
    cores.forEach(c => { circle(c.x, c.y, c.r + 7, 'rgba(92,141,255,.13)'); circle(c.x, c.y, c.r, '#73b6ff'); circle(c.x - 2, c.y - 2, c.r / 3, '#edf7ff'); });
    ctx.save(); ctx.translate(ship.x, ship.y); ctx.fillStyle = shield > 0 ? '#78a3ff' : '#ff7b7b'; ctx.beginPath(); ctx.moveTo(0, -17); ctx.lineTo(13, 15); ctx.lineTo(0, 10); ctx.lineTo(-13, 15); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#c8efff'; ctx.fillRect(-3, -5, 6, 10); ctx.restore();
  }
  function loop(now) { if (!running) return; const dt = Math.min(36, now - last); last = now; const speed = dt * .25; if (keys.left) ship.x -= speed; if (keys.right) ship.x += speed; ship.x = Math.max(18, Math.min(W - 18, ship.x)); score += dt * .012; spawn += dt; coreSpawn += dt;
    if (spawn > Math.max(280, 700 - score * 1.3)) { debris.push({ x: 20 + Math.random() * (W - 40), y: -18, r: 8 + Math.random() * 11, v: 1.7 + Math.random() * 1.5 + score / 500 }); spawn = 0; }
    if (coreSpawn > 1800) { cores.push({ x: 25 + Math.random() * (W - 50), y: -15, r: 7, v: 2.15 }); coreSpawn = 0; }
    debris.forEach(d => d.y += d.v); cores.forEach(c => c.y += c.v); debris = debris.filter(d => { if (Math.hypot(d.x - ship.x, d.y - ship.y) < d.r + 14) { shield--; d.y = H + 50; if (shield <= 0) end(); } return d.y < H + 35; }); cores = cores.filter(c => { if (Math.hypot(c.x - ship.x, c.y - ship.y) < c.r + 14) { score += 80; return false; } return c.y < H + 30; }); updateStats(); draw(); if (running) requestAnimationFrame(loop); }
  function setDirection(direction, active) { keys[direction] = active; }
  window.addEventListener('keydown', e => { if (['ArrowLeft', 'a', 'A'].includes(e.key)) { setDirection('left', true); e.preventDefault(); } if (['ArrowRight', 'd', 'D'].includes(e.key)) { setDirection('right', true); e.preventDefault(); } });
  window.addEventListener('keyup', e => { if (['ArrowLeft', 'a', 'A'].includes(e.key)) setDirection('left', false); if (['ArrowRight', 'd', 'D'].includes(e.key)) setDirection('right', false); });
  document.querySelectorAll('[data-direction]').forEach(button => { const dir = button.dataset.direction; ['pointerdown', 'pointerenter'].forEach(type => button.addEventListener(type, e => { if (type === 'pointerenter' && e.buttons !== 1) return; setDirection(dir, true); })); ['pointerup', 'pointerleave', 'pointercancel'].forEach(type => button.addEventListener(type, () => setDirection(dir, false))); });
  start.addEventListener('click', begin); reset(); draw();
}
initOrbitRunner();

/* copy to clipboard */
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(btn.dataset.copy).then(() => {
      const original = btn.textContent;
      btn.textContent = 'copied';
      setTimeout(() => { btn.textContent = original; }, 1400);
    });
  });
});
