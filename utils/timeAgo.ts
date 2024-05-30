export function timeAgo(timestamp:any) {
    const now = Date.now(); // Current time in milliseconds
    const secondsPast = Math.floor((now - timestamp * 1000) / 1000);
  
    if (secondsPast < 60) {
      return `${secondsPast} seconds ago`;
    }
    if (secondsPast < 3600) {
      const minutes = Math.floor(secondsPast / 60);
      return `${minutes} minutes ago`;
    }
    if (secondsPast < 86400) {
      const hours = Math.floor(secondsPast / 3600);
      return `${hours} hours ago`;
    }
    if (secondsPast < 2592000) {
      const days = Math.floor(secondsPast / 86400);
      return `${days} days ago`;
    }
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); // Returns the date if it's more than a month ago
  }