document.addEventListener('DOMContentLoaded', fetchUserData){
    async function fetchUserData(){
        const apiUrl = 'https://jsonplaceholder.typicode.com/users.';
      const dataContainer = document.getElementById('api-data');
}
try{
    const response = await fetch(apiUrl);
    const users = await response.jason();
       // Clear any existing content before displaying new data
        dataContainer.innerHTML = '';
          // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
});
dataContainer.appendChild(userList);
}
catch(error){
   console.error('Error fetching user data:', error);  
    dataContainer.innerHTML = '';
     dataContainer.textContent = `Failed to load user data.`;
}

}
document.addEventListener('DOMContentLoaded', fetchUserData);
