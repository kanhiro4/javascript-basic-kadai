const today = new Date('July 12, 2024 23:12:00');
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(today.toLocaleDateString(undefined, options));
