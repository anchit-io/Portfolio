const $ = (selector) => document.querySelector(selector);

const formatNumber = (n) => new Intl.NumberFormat('en', { notation: n > 9999 ? 'compact' : 'standard', maximumFractionDigits: 1 }).format(n || 0);

function setStatus(message, isError = false) {
  const status = $('#github-status');
  status.textContent = message;
  status.style.color = isError ? 'var(--coral)' : '';
}

function displayProfile(profile, repos) {
  $('#avatar').src = profile.avatar_url;
  $('#avatar').alt = `${profile.login} GitHub avatar`;
  $('#profile-handle').textContent = `@${profile.login}`;
  $('#profile-name').textContent = profile.name || profile.login;
  $('#profile-bio').textContent = profile.bio || 'Building in public on GitHub.';
  $('#profile-link').href = profile.html_url;
  $('#repos').textContent = formatNumber(profile.public_repos);
  $('#followers').textContent = formatNumber(profile.followers);
  $('#following').textContent = formatNumber(profile.following);
  $('#location').textContent = profile.location || 'Remote';
  $('#repo-count').textContent = `${repos.length} recent repositories`;
  $('#repo-items').innerHTML = repos.length ? repos.map(repo => `
    <article class="repo"><h4><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name} ↗</a></h4>
    <p>${repo.description || 'No description provided.'}</p>
    <div class="repo-meta"><span class="language">${repo.language || 'Code'}</span><span>★ ${formatNumber(repo.stargazers_count)}</span></div></article>`).join('') : '<p class="loading">No public repositories to show.</p>';
}

async function loadGitHubProfile() {
  const username = $('#github-user').value.trim().replace(/^@/, '');
  if (!username) return setStatus('Enter a GitHub username first.', true);
  const button = $('#load-profile');
  button.disabled = true; button.textContent = 'Loading…';
  setStatus(`Fetching @${username} from GitHub…`);
  try {
    const [profileResponse, repoResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=3`)
    ]);
    if (!profileResponse.ok) throw new Error(profileResponse.status === 404 ? 'That GitHub user was not found.' : 'GitHub could not load this profile right now.');
    const [profile, repos] = await Promise.all([profileResponse.json(), repoResponse.ok ? repoResponse.json() : []]);
    displayProfile(profile, repos);
    setStatus(`Live data loaded for @${profile.login}.`);
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    button.disabled = false; button.textContent = 'Load profile';
  }
}

$('#load-profile').addEventListener('click', loadGitHubProfile);
$('#github-user').addEventListener('keydown', (event) => { if (event.key === 'Enter') loadGitHubProfile(); });

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('hide', button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter));
}));

$('#theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark');

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('shown'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
