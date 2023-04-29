import * as dotenv from "dotenv";
dotenv.config();
import { faker } from "@faker-js/faker";
import axios from "axios";

const API_ENDPOINT = `http://api.nessieisreal.com/merchants?key=${process.env.API_KEY}`;

// Generate an array of 10 objects with US addresses and zip codes
const dataArray = [];
for (let i = 0; i < 10; i++) {
  const name = faker.name.fullName();
  const category = faker.commerce.department();
  const streetNumber = faker.address.streetAddress("###");
  const streetName = faker.address.streetName();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zip = faker.address.zipCode("#####");
  const lat = faker.address.latitude();
  const lng = faker.address.longitude();

  const dataObject = {
    name: name,
    category: category,
    address: {
      street_number: streetNumber,
      street_name: streetName,
      city: city,
      state: state,
      zip: zip,
    },
    geocode: {
      lat: lat,
      lng: lng,
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
