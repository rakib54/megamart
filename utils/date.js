export const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }

  const formattedDate = new Intl.DateTimeFormat("en-us", options).format(date);

  return formattedDate;
}


export const formatDateInBd = (date) => {
  let day = new Date(date).getDate();
  let month = new Date(date).getMonth() + 1; // Months are zero-based in JavaScript
  let year = new Date(date).getFullYear();

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }

  return `${day}/${month}/${year}`;
}