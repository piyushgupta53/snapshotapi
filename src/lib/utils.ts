export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function extractDomain(url: string) {
  try {
    // Create a URL object
    const urlObject = new URL(url);

    // Get the hostname (e.g., mydukaan.io)
    let domain = urlObject.hostname;

    // Remove 'www.' if present
    if (domain.startsWith("www.")) {
      domain = domain.slice(4);
    }

    return domain;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
