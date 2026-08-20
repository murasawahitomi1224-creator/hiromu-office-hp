document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('.submit-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = '送信中…';
    status.textContent = '';
    status.classList.remove('is-error', 'is-success');

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();

      if (response.status === 200 && result.success) {
        form.reset();
        status.textContent = 'お問い合わせありがとうございます。送信が完了しました。';
        status.classList.add('is-success');
      } else {
        throw new Error(result.message || '送信に失敗しました');
      }
    } catch (err) {
      status.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
      status.classList.add('is-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = '送信する';
    }
  });
});
