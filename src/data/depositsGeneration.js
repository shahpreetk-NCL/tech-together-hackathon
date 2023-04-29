import * as dotenv from "dotenv";
dotenv.config();
import { faker } from "@faker-js/faker";
import axios from "axios";

const accountsArr = [
  "644d27a69683f20dd5187942",
  "644d27a69683f20dd5187943",
  "644d27a69683f20dd5187944",
  "644d27a69683f20dd5187945",
  "644d27a69683f20dd5187946",
];

const dataArray = [];
for (let i = 0; i < 15; i++) {
  var transactionDate = faker.date.between(
    "2023-01-01T00:00:00.000Z",
    "2023-04-29T00:00:00.000Z"
  );
  transactionDate = transactionDate.toISOString().split("T")[0];
  const amount = Number(faker.finance.amount(0, 500, 2));
  const description = faker.finance.transactionDescription();

  const dataObject = {
    medium: "balance",
    transaction_date: transactionDate,
    status: "pending",
    amount: amount,
    description: description,
  };

  dataArray.push(dataObject);
}
// console.log(dataArray);
// Send a POST request for each object in the array
for (let i = 0; i < dataArray.length; i++) {
  const data = dataArray[i];
  const API_ENDPOINT = `http://api.nessieisreal.com/accounts/${
    accountsArr[Math.floor(Math.random() * accountsArr.length)]
  }/deposits?key=${process.env.API_KEY}`;
  axios
    .post(API_ENDPOINT, data)
    .then((response) => {
      console.log(API_ENDPOINT);
      console.log(`Data ${i + 1} successfully sent: ${response.data}`);
    })
    .catch((error) => {
      console.error(`Error sending data ${i + 1}: ${error}`);
    });
  // wait for 10 seconds before sending the next request and print a message to the console
  console.log(`Waiting for 10 seconds before sending the next request...`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
}
