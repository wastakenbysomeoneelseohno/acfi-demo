/* ACFI · Corner banners.
 * Up to 3 diagonal highlight ribbons stacked at the top-left of the page.
 * Dynamic, runtime-editable, served never-cached. One job: promo banners.
 *
 * Each banner: { text, href?, color? }
 *   href  — optional; omit for a non-clickable ribbon
 *   color — optional 'orange' | 'blue' | 'red'; defaults by position
 * Add or remove entries below — a maximum of 3 are shown, nearest the corner
 * first. */
window.ACFI = window.ACFI || {};
window.ACFI.banners = [
  // First two hidden — uncomment to show them again.
  // { text: 'CFC 2026', href: '#events', color: 'orange' },
  // { text: 'CFC 2026', href: '#events', color: 'blue' },
  { text: 'CFC 2026', href: '#events', color: 'red' },
];
