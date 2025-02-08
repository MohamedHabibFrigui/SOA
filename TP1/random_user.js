const axios = require("axios");

async function getRandomUser() {
  const url = "https://randomuser.me/api/";
  try {
    const response = await axios.get(url);
    const userData = response.data.results[0];
    console.log("Name:", userData.name.first + " " + userData.name.last);
    console.log("Email:", userData.email);
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
}

getRandomUser();
