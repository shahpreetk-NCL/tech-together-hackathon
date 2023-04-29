import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const API_ENDPOINT = `http://api.nessieisreal.com/customers?key=${process.env.API_KEY}`;

axios
  .get(API_ENDPOINT)
  .then((response) => {
    console.log(`Data successfully received: ${JSON.stringify(response.data)}`);
  })
  .catch((error) => {
    console.error(`Error receiving data: ${error}`);
  });
