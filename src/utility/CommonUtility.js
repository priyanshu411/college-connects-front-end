export const logout = () => {
    localStorage.removeItem("token");
}

export const getDate = (minusDays) => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + minusDays);
  
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    let day = currentDate.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  