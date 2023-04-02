export function getDateFormat(str) {
    const date = new Date(str).toLocaleDateString('en-GB').replaceAll('/', '.');
  
    return date;
  }
  