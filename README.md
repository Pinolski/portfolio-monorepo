# My Nuxt 3 App

This is a Nuxt 3 project set up with Tailwind CSS for styling.

## Project Structure

```
my-nuxt-app
├── src
│   ├── pages
│   │   └── index.vue
│   ├── components
│   │   └── HelloWorld.vue
│   └── assets
│       └── css
│           └── tailwind.css
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Install Dependencies**
   Make sure you have [pnpm](https://pnpm.io/) installed. Then run the following command to install the project dependencies:

   ```
   pnpm install
   ```

2. **Run the Development Server**
   To start the development server, use the following command:

   ```
   pnpm dev
   ```

   Your application will be available at `http://localhost:3000`.

## Usage

- The main page of the application is located at `src/pages/index.vue`.
- The `HelloWorld` component can be found in `src/components/HelloWorld.vue` and is used to display a greeting message.
- Tailwind CSS styles are imported in `src/assets/css/tailwind.css`.

## Customization

You can customize the Tailwind CSS configuration in `tailwind.config.js` to fit your design needs. 

## License

This project is open-source and available under the [MIT License](LICENSE).