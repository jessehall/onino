const overlay = document.querySelector('.modal-overlay');
const dialog = document.querySelector('.modal-dialog');
const opener = document.querySelector('a[href="#free-pizza"]');
const closeButton = document.querySelector('.modal-close');
function syncModal() {
  const open = location.hash === '#free-pizza';
  overlay.classList.toggle('hidden', !open);
  document.body.classList.toggle('modal-open', open);
  dialog.classList.toggle('fly-in', open);
  if (open) closeButton.focus();
  else opener.focus();
}
function closeModal() { history.replaceState(null, '', location.pathname + location.search); syncModal(); }
window.addEventListener('hashchange', syncModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', event => { if (event.target === overlay) closeModal(); });
document.addEventListener('keydown', event => {
  if (overlay.classList.contains('hidden')) return;
  if (event.key === 'Escape') closeModal();
  if (event.key === 'Tab') {
    const fields = [...dialog.querySelectorAll('button, input:not([type="hidden"]), a[href]')];
    const first = fields[0], last = fields.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
document.querySelector('#signup-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#signup-status').textContent = 'Preview complete. No details were sent or saved.';
});
if (location.hash === '#free-pizza') syncModal();
