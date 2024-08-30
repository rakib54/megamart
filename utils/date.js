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

export const formattedDateAndTime = (date) => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
  const formattedDate = new Intl.DateTimeFormat("en-us", options).format(date);
  // const formattedDate2 = new Date(date).toLocaleString("en-us", options);

  return formattedDate;

}

export const updateOrderStatus = (date) => {
  const currentDate = new Date();
  const orderDate = new Date(date);

  // Calculate the difference in days
  const timeDifference = currentDate - orderDate;
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  let status;

  // Update the status based on the day difference
  if (dayDifference >= 3) {
    status = "Delivered";
  } else {
    status = "Pending";
  }

  return status;
}