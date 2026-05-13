
  function toggleDropdown() {
    const btn = document.getElementById('profileBtn');
    const dd = document.getElementById('hnDropdown');
    dd.classList.toggle('open');
    btn.classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#profileBtn') && !e.target.closest('#hnDropdown')) {
      document.getElementById('hnDropdown').classList.remove('open');
      document.getElementById('profileBtn').classList.remove('open');
    }
  });
