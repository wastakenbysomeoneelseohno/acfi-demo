/* ACFI · Payment configuration.
 * Dynamic, runtime-editable, served never-cached. One job: payment settings.
 * NOTE: only browser-safe values belong here. The Stripe SECRET key lives on the
 * server in .env and must never appear in this file. */
window.ACFI = window.ACFI || {};
window.ACFI.payments = {
  // Publishable key is safe in the browser; fill in when available.
  stripePublishableKey: '',
  // Where the browser asks the server to start a Checkout session.
  checkoutEndpoint: '/api/create-checkout-session',
};
