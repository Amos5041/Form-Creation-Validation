// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const apiDataDiv = document.getElementById('api-data');

    // Fetch user data from the public API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            // Create a list element to hold the user names
            const userList = document.createElement('ul');

            // Loop through users and create list items
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Clear the loading message and append the list
            apiDataDiv.textContent = ''; // Clear "Loading..." text
            apiDataDiv.appendChild(userList);
        })
        .catch(error => {
            apiDataDiv.textContent = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        });
});
