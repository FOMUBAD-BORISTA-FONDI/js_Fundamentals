const fetchUsers = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const simplifiedUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city
        }));
        console.table(simplifiedUsers);
        return simplifiedUsers;
    }catch(err) {
        console.error("Project Error: ", err.message);
    }
}

fetchUsers();

const runUserDirectory = async (targetCity) => {
    console.log(`Fetching users from ${targetCity}...`);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const allUsers = await response.json();
    const filteredUsers = allUsers.filter(user => user.address.city === targetCity);

    if (filteredUsers.length === 0) {
        console.log(`No users found from ${targetCity}.`);
    } else {
        filteredUsers.forEach(user => {
            console.log(`[=>ID: ${user.id}]`);
            console.log(`Name: ${user.name.toUpperCase()}, Email: ${user.email}, Company: ${user.company.name}`);
            console.log(`Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`);
        });
    }
}

runUserDirectory("Gwenborough");

const API_URL ='https://jsonplaceholder.typicode.com/users';

    const loadUserApp = async () => {
        try {
            console.log("Trying to access Database...");
            const response = await fetch(API_URL);
            const rawData = await response.json();
            console.table(rawData);

            const cleanUsers = rawData.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username.toLowerCase(),
                email: user.email,
                city: user.address.city,
                company: user.company.name,
                address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
            }));

            

            const searchCity = "Roscoeview";
            const results = cleanUsers.filter(user => user.city === searchCity);
            console.log("\n==========================================");
            console.log(`Users results -  ${searchCity}:`);
            console.table(results);

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    loadUserApp();

