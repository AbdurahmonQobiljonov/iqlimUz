const GetTime = (dayIggle, locale = "ru") => {
  const time = new Date(dayIggle * 1000).toLocaleTimeString(locale, {
    hour: "numeric",
    hour24: true,
    minute: "numeric",
  });
  return time;
};
const GetWeekDay = (dayIggle, expSh, locale = "ru") => {
  const day = new Date(dayIggle * 1000).toLocaleDateString(locale, {
    weekday: expSh,
  });
  return day;
};
const GetMonth = (dayIggle, locale = "ru") => {
  const today = new Date(dayIggle * 1000);
  const month = `${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "short",
  })}\n\n`;

  return month;
};

export { GetTime, GetWeekDay, GetMonth };
