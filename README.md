# BlogSite 📝

I created a straightforward blog site to practice routing and utilize the fetch API (I hadn't worked with in a while). The site allows users to view a list of published blogs and publish new ones. All the commits labeled "Minor fixes" was my first attempt to deploy this project (or any project), but couldn't get the json file work properly and make the site work as smoothly as it does locally. Additionally, there's a deliberate manual delay in data loading to showcase a loading skeleton, even though the actual loading time is relatively short.

## ⚡ Technologies

- `Vite`
- `React.js`
- `TailwindCSS`

## 🎥 Demo/Preview

![BlogSite](https://github.com/Khusro-S/BlogSite/assets/149171453/2c6ab68c-9099-402b-b47e-2a7e43e05137)

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` or `yarn` to install the required dependencies.
3. Do the same for career json file with `npx json-server -p 4000 -w ./data/db.json` (againm the address/port or change to any empty one)
4. Start the project with `npm run dev` or `yarn dev`.
5. Open http://localhost:5173 (or the address displayed in your console) in your web browser to view the application.
