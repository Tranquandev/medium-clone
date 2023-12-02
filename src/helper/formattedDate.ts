export const formattedDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
