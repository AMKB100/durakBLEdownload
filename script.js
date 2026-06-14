const apkVersions = [
  // Add new APK releases here. Use dotted versions only: v0.4, v0.5, etc.
  {
    version: 'v0.1',
    title: 'Первая тестовая версия',
    description: 'Базовая версия игры',
    status: 'старая версия',
    url: 'https://github.com/AMKB100/durakBLEdownload/releases/download/v0.1/Durak-test-v1.apk',
    available: true,
    current: false,
  },
  {
    version: 'v0.2',
    title: 'AI и переводной режим',
    description: 'Версия с выбором сложности ИИ, улучшенным AI и тестом переводного режима',
    status: 'текущая версия',
    url: 'https://github.com/AMKB100/durakBLEdownload/releases/download/v0.2/Durak-test-v2.apk',
    available: true,
    current: true,
  },
  {
    version: 'v0.3',
    title: 'Будущая версия',
    description: 'Следующие улучшения игры',
    status: 'скоро',
    url: '',
    available: false,
    current: false,
  },
];

const modal = document.getElementById('versionModal');
const versionList = document.getElementById('versionList');
const openButton = document.getElementById('openVersions');
const closeButton = document.getElementById('closeVersions');
const closeBottomButton = document.getElementById('closeVersionsBottom');

function renderVersions() {
  versionList.innerHTML = apkVersions.map((item) => {
    const statusClass = item.current ? ' current' : item.available ? '' : ' disabled';
    const action = item.available
      ? `<a class="version-download${item.current ? ' primary' : ''}" href="${item.url}" download>${item.current ? 'Скачать' : 'Скачать старую'}</a>`
      : '<button class="version-download disabled" type="button" disabled>Скоро</button>';

    return `
      <article class="version-card${statusClass}">
        <div class="version-main">
          <div class="version-heading">
            <strong>${item.version}</strong>
            <span>${item.status}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        ${action}
      </article>
    `;
  }).join('');
}

function openVersions() {
  renderVersions();
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  closeButton.focus();
}

function closeVersions() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  openButton.focus();
}

openButton.addEventListener('click', openVersions);
closeButton.addEventListener('click', closeVersions);
closeBottomButton.addEventListener('click', closeVersions);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeVersions();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closeVersions();
  }
});
