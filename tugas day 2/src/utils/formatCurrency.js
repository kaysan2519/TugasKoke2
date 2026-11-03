/**
 * Formats a numeric amount into Indonesian Rupiah string format (e.g., "Rp 350.000").
 * @param {number} amount - The numeric value to format.
 * @returns {string} Formatted currency string.
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    return 'Rp 0';
  }
  const formattedNumber = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp ${formattedNumber}`;
}

export default formatCurrency;
