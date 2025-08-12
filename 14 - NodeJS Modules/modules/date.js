const months = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
const days = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

export function getFullDate(date) {
  return `${getDayName(date)} ${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`;
}

export function getMonthName(date) {
  const monthIndex = date.getMonth();
  return months[monthIndex];
}

export function getDayName(date) {
  const dayIndex = date.getDay();
  return days[dayIndex];
}
