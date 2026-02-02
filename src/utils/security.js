export const sanitizeString = (str) => {
  if (typeof str !== 'string') return str;
  
  // Substitui caracteres que podem iniciar tags html por versões "seguras" 
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};