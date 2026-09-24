const dialog = document.querySelector('dialog');
const opener = document.querySelector('a[href="#free-pizza"]');
function syncModal() {
  const open = location.hash === '#free-pizza';
  if (open && !dialog.open) dialog.showModal();
  if (!open && dialog.open) dialog.close();
  document.body.classList.toggle('modal-open', open);
}
function closeModal() {
  history.replaceState(null, '', location.pathname + location.search);
  syncModal();
  opener.focus();
}
opener.addEventListener('click', event => {
  event.preventDefault();
  if (location.hash !== '#free-pizza') history.pushState(null, '', '#free-pizza');
  syncModal();
});
window.addEventListener('hashchange', syncModal);
window.addEventListener('popstate', syncModal);
document.querySelector('.modal-close').addEventListener('click', closeModal);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeModal(); });
dialog.addEventListener('click', event => {
  const r = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) closeModal();
});
document.querySelector('#signup-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#signup-status').textContent = 'Preview complete. No details were sent or saved.';
});
syncModal();
