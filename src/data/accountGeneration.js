import * as dotenv from "dotenv";
dotenv.config();
import { faker } from "@faker-js/faker";
import axios from "axios";

const API_ENDPOINT = `http://api.nessieisreal.com/customers/644d16619683f20dd5187937/accounts?key=${process.env.API_KEY}`;

const accountTypeArr = ["Credit Card", "Savings", "Checking"];

const dataArray = [];
for (let i = 0; i < 5; i++) {
  const accountType =
    accountTypeArr[Math.floor(Math.random() * accountTypeArr.length)];
  const nickname = faker.finance.accountName();
  const rewards = Number(faker.finance.amount(0, 50, 0));
  const balance = Number(faker.finance.amount(0, 1000, 2));
  const accountNumber = faker.finance.account(16); // 16 digit account number needed by Capital One API

  const dataObject = {
    type: accountType,
    nickname: nickname,
    rewards: rewards,
    balance: balance,
    account_number: accountNumber,
  };

  dataArray.push(dataObject);
}
// console.log(dataArray);
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
