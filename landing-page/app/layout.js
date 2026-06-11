// landing-page/app/layout.js

import "../styles/globals.css";

export const metadata = {
  title: "Cebu Pacific — Phone Rental for Seniors",
  description: "A simple phone with everything you need for your flight. Big text, easy buttons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
