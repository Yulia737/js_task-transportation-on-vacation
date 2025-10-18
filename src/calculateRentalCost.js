/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const dailyPrice = 40;
  const discountFor7days = 50;
  const discountFor3days = 20;

  if (numberOfDays >= 7) {
    return days * dailyPrice - discountFor7days;
  }

  if (numberOfDays < 3) {
    return days * dailyPrice;
  }

  if (numberOfDays >= 3) {
    return days * dailyPrice - discountFor3days;
  }
}

module.exports = calculateRentalCost;
