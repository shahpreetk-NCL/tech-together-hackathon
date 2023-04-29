import * as dotenv from "dotenv";
dotenv.config();
import { faker } from "@faker-js/faker";
import axios from "axios";

const API_ENDPOINT = `http://api.nessieisreal.com/customers?key=${process.env.API_KEY}`;

// Generate an array of 10 objects with US addresses and zip codes
const dataArray = [];
for (let i = 0; i < 10; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const streetNumber = faker.address.streetAddress("###");
  const streetName = faker.address.streetName();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zip = faker.address.zipCode("#####");

  const dataObject = {
    first_name: firstName,
    last_name: lastName,
    address: {
      street_number: streetNumber,
      street_name: streetName,
      city: city,
      state: state,
      zip: zip,
    },
  };

  dataArray.push(dataObject);
}

// Send a POST request for each object in the array
for (let i = 0; i < dataArray.length; i++) {
  const data = dataArray[i];

  axios
    .post(API_ENDPOINT, data)
    .then((response) => {
      console.log(`Data ${i + 1} successfully sent: ${response.data}`);
    })
    .catch((error) => {
      console.error(`Error sending data ${i + 1}: ${error}`);
    });
}
