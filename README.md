This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Optmization description

To give more flexibility to the user who's searching through the application, I'd start creating a search field for organizations where the user could select from wich one they want to start seeing `since` part of the request. 
After that, I'd create a selector with some other amounts to show `per_page` and add a pagination or a button to load more. To achieve that, I'd change the react query to accept the amount of items per page and would use the value selected to load more dinamically when the users clicked in the `load more` button. 

## Other features I'd add

- Possibility to click into a member, then open a modal showing some repos
- Add an external link to the selected org or user to open their github page


---
### Development time
**less than 3 hours**