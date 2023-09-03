# Tech Together Digital Hackathon

## Inspiration
I've always wanted to monitor my expenses. So, for this hackathon with access to Capital One API I thought of creating a finance dashboard that will help me keep my finances in check.

## What it does
Meet Money Mingle, the personal finance dashboard that takes your financial management to the next level! With Money Mingle, you can easily monitor your spending, and track your expenses. Our platform provides you with insightful analytics that help you make smart financial decisions. Whether you want to save for a rainy day, pay off debt, or invest in your future, Money Mingle has got you covered.

## How we built it
Since I have never used the Capital One API or any similar financial API before, I decided to use it this weekend for the Tech Together hackathon. On signing up to use the API, I discovered that we had to do the data entry for using the API. On researching I found that Faker.js provides fake data. So, I wrote code to generate and push this data to the Capital One API. The code for this can be found in the github repo. Once this was done, I mulled over a few project ideas that could be made using this API and decided on a finance dashboard. Using Vite for the first time, I created a React project along with Daisy UI as my CSS library and went ahead with getting the API data on there to display to the user.

## Challenges we ran into
The Capital One Nessie API provides deposits and withdrawals separately. I wanted to show all transactions and hence needed to collate all the data, sort through transaction_date and then display it. While doing so, I ran into a few issues but was able to do so in the end. I also ran into an issue of trying to expand the project to multiple pages. But because of time limitations, doing so was not possible without sending multiple requests for the same data.

### Accomplishments that we're proud of

- Using Capital One Finance API
- Using plotly.js for visualization

### What we learned

- I used Vite for the very first time and it has an amazingly fast refresh speed.
- This was also the first time I used faker.js to generate fake data and post it to an API

### What's next for Money Mingle

Currently, money mingle is just a one page site but I would like to expand on it by showing details of all accounts separately on new pages. Better data handling would also need to be done for this and I would probably use redux-toolkit or similar for doing so.

## Technologies used
- React
- Vite
- Tailwind CSS
- React Router
- DaisyUI
- Faker.js
- Plotly.js

## How to run this project
Clone this repository
```bash
cd <project folder>
npm install
npm run dev
```

# Deployed on
Netlify: [https://money-mingle.netlify.app/](https://money-mingle.netlify.app/) (please enable site settings to allow insecure content to view the data)

Microsoft Azure: [https://witty-bay-0fbf03210.3.azurestaticapps.net/](https://witty-bay-0fbf03210.3.azurestaticapps.net/) (does not work)
