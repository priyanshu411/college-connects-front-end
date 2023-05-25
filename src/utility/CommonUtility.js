export const logout = () => {
    localStorage.removeItem("token");
}

export const getDate = (days) => {
    let currentDate = new Date();
    currentDate.setUTCDate(currentDate.getUTCDate() + days + 1); // Add +1 to account for IST offset
  
    let year = currentDate.getUTCFullYear();
    let month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getUTCDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  