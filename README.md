Pokédex App

A simple and responsive Pokédex application built with React.js and Tailwind CSS, powered by the Pokémon API. This app allows users to search for their favorite Pokémon and view detailed information such as types, stats, abilities, height, weight, and more.

Features

Search Functionality: Search for Pokémon by name.

Pokémon Details: View information including:

Image

Types

Height

Weight

Base stats (Attack, Speed, etc.)

Abilities

Responsive Design: Fully optimized for mobile, tablet, and desktop devices.

Dynamic Data Fetching: Uses the Pokémon API to fetch real-time data.

Live Demo

Check out the live app here: Pokédex App

Technologies Used

React.js: For building the user interface.

Tailwind CSS: For styling and layout.

Pokémon API: To fetch Pokémon data.

Vite: For fast builds and development.

Netlify/Cloudflare Pages: For deployment.

Installation

To run this project locally, follow these steps:

Clone the Repository:

git clone https://github.com/your-username/pokedex-app.git
cd pokedex-app

Install Dependencies:

npm install

Start the Development Server:

npm run dev

Open your browser and go to http://localhost:3000 to view the app.

Folder Structure

├── public
│   ├── assets
│   │   └── poke.png    # Pokémon logo
├── src
│   ├── components
│   │   ├── Cards.jsx   # Card component for displaying Pokémon details
│   │   └── Nav.jsx     # Navbar component
│   ├── App.jsx         # Main application file
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
└── vite.config.js      # Vite configuration

Usage

Type the name of a Pokémon in the search bar to find it.

Browse through the list of Pokémon to explore their details.

Deployment

This app is deployed using Cloudflare Pages and is accessible at the link provided above.

Screenshots

Home Page



Pokémon Card



Future Improvements

Add filters by type (e.g., Fire, Water, Grass).

Implement pagination for better navigation.

Add animations for a more interactive UI.

Use Redux for state management.

Upgrade to Next.js for server-side rendering and SEO benefits.

Contributing

Contributions are welcome! If you have any suggestions or find bugs, feel free to open an issue or submit a pull request.
