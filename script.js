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
