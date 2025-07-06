// Step 9: Invoke the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear "Loading..." text
        dataContainer.innerHTML = '';

        // Step 6: Create UL
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create LIs
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 10: Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}
