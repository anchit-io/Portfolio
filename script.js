const $ = (selector) => document.querySelector(selector);

const intro = '"Engineering resilient cloud infrastructure, one reliable deployment at a time."';
let character = 0;
const typeIntro = setInterval(() => {
  $('#typed-text').textContent += intro[character++];
  if (character >= intro.length) clearInterval(typeIntro);
}, 24);

const focusItems = ['Cloud Automation', 'Kubernetes Delivery', 'Reliable Operations', 'Infrastructure as Code'];
let focusIndex = 0;
setInterval(() => {
  focusIndex = (focusIndex + 1) % focusItems.length;
  $('#focus-cycle').textContent = focusItems[focusIndex];
}, 2200);

const commands = {
  help: 'Available commands: help, skills, status, projects, contact',
  skills: 'AWS · Azure · Kubernetes · Docker · Terraform · Jenkins · Argo CD · Prometheus · Grafana',
  status: '● All systems operational. Actively seeking DevOps / Cloud Engineer opportunities.',
  projects: '3 featured deployments available. Scroll to projects/ to inspect them.',
  contact: 'Email: ancmishra1998@gmail.com · GitHub: github.com/anchit-io'
};
function runTerminalCommand() {
  const input = $('#terminal-command');
  const value = input.value.trim().toLowerCase();
  $('#terminal-output').textContent = commands[value] || (value ? `command not found: ${value}. Try help.` : 'Enter a command, then press Run.');
  input.value = '';
}
$('#run-command').addEventListener('click', runTerminalCommand);
$('#terminal-command').addEventListener('keydown', event => { if (event.key === 'Enter') runTerminalCommand(); });

document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters .active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.project').forEach(project => project.classList.toggle('hide', button.dataset.filter !== 'all' && !project.classList.contains(button.dataset.filter)));
}));

async function loadGitHub() {
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch('https://api.github.com/users/anchit-io'),
      fetch('https://api.github.com/users/anchit-io/repos?sort=updated&per_page=3')
    ]);
    if (!profileResponse.ok) throw new Error('GitHub is temporarily unavailable.');
    const profile = await profileResponse.json();
    const repos = reposResponse.ok ? await reposResponse.json() : [];
    $('#profile-name').textContent = profile.name || 'Anchit Mishra';
    $('#profile-bio').textContent = profile.bio || 'Public repositories, updated directly from GitHub.';
    $('#profile-link').href = profile.html_url;
    $('#repos').textContent = profile.public_repos;
    $('#followers').textContent = profile.followers;
    $('#following').textContent = profile.following;
    $('#repo-items').innerHTML = repos.length ? repos.map(repo => `<article class="repo"><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name} ↗</a><p>${repo.description || 'No description added yet.'}</p><small>● ${repo.language || 'Code'} · ★ ${repo.stargazers_count}</small></article>`).join('') : '<p>No public repositories found yet.</p>';
  } catch (error) {
    $('#profile-bio').textContent = 'Live GitHub data could not load. Please try again shortly.';
    $('#repo-items').innerHTML = `<p>${error.message}</p>`;
  }
}
loadGitHub();

document.addEventListener('mousemove', event => { $('.cursor-glow').style.left = `${event.clientX}px`; $('.cursor-glow').style.top = `${event.clientY}px`; });
