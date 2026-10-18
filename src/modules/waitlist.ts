const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Client-side waitlist. There is no backend yet: connect `submit` to your
 * email provider (Mailchimp, Buttondown, a form endpoint) where marked.
 */
export function initWaitlists(): void {
  document.querySelectorAll<HTMLFormElement>('[data-waitlist]').forEach((form) => {
    const input = form.querySelector<HTMLInputElement>('input[type="email"]');
    const msg = form.querySelector<HTMLElement>('[data-msg]');
    if (!input || !msg) return;

    const defaultMsg = msg.textContent ?? '';

    const showError = (text: string) => {
      input.setAttribute('aria-invalid', 'true');
      msg.textContent = text;
      msg.classList.add('is-error');
    };

    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') !== 'true') return;
      input.removeAttribute('aria-invalid');
      msg.textContent = defaultMsg;
      msg.classList.remove('is-error');
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = input.value.trim();

      if (!email) {
        showError('Enter your email address to join the waitlist.');
        input.focus();
        return;
      }
      if (!EMAIL.test(email)) {
        showError('Check the email address. It needs an @ and a domain, like name@example.com.');
        input.focus();
        return;
      }

      // Send `email` to the waitlist provider here.
      msg.classList.remove('is-error');
      msg.textContent = `You’re on the waitlist. We’ll email ${email} when pre-orders open.`;
      form.classList.add('is-done');
      msg.setAttribute('tabindex', '-1');
      msg.focus({ preventScroll: true });
    });
  });
}
