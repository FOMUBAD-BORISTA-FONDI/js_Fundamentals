let name = "John";
function greet() {
  console.log("Hello, " + name);
}
greet();

// The Logic Trap
console.log("Step 1: Ordering Coffee...");

const data = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log("Step 2: Coffee Owner Data is: ", data);
console.log("Step 3: Talking to a friend...");

console.log("fetching User data from the API...");
//Await step 1: The request is sent to the API and we wait for the response
const getUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //Await step 2: Once the response is received, we wait for the data to be parsed as JSON
  const data = await response.json();
  //Once we have the data, we can log it to the console
  console.log(`Success! Name: ${data.name} from ${data.address.city}`);
};
//We call the async function to fetch the user data
getUserData();
console.log(
  "I am a non-blocking background task, I will execute before the data is fetched.",
);

const getSafeUserData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) {
      throw new Error(
        `Could Not find User, HTTP error! status: ${response.status}`,
      );
    }
    const data = await response.json();
    console.log(
      `Success! Name: ${data.name} from ${data.address.city} with company ${data.company.name}`,
    );
  } catch (error) {
    console.log("Error Caught: ", error.message);
    console.error("Error fetching user data:", error);
    console.log("Please check the API endpoint and try again.");
  }
};
//We call the async function to fetch the user data
getSafeUserData();

const getPostInfo = async (PostId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${PostId}`,
    );
    if (!response.ok) {
      throw new Error(
        `Could Not find Post, HTTP error! status: ${response.status}`,
      );
    }
    const data = await response.json();
    console.log(`Post Title: ${data.title}`);
    console.log(`Post Body: ${data.body}`);
  } catch (error) {
    console.log("Error Caught: ", error.message);
    console.error("Error whilefetching post data:", error);
    console.log("Please check the API endpoint and try again.");
  }
};

//We call the async function to fetch the post data
getPostInfo(9999);
