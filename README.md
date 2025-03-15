# Notion Website Clone

This project is a clone of the Notion.com website, created with a modular architecture following best practices for maintainability and organization.

## Project Structure

The project follows a modular architecture with these key principles:
- No component exceeds 400 lines of code
- Separation of concerns with dedicated files for different components
- Organized folder structure for CSS, JS, and images

## File Organization

- `index.html` - Main HTML structure
- `css/` - Modular CSS files
  - `reset.css` - CSS reset and base styles
  - `styles.css` - Common styles and variables
  - `header.css` - Header component styles
  - `hero.css` - Hero section styles
  - `features.css` - Features section styles
  - `testimonials.css` - Testimonials section styles
  - `footer.css` - Footer styles
- `js/` - JavaScript files
  - `main.js` - Main JavaScript functionality
- `images/` - Image assets
  - `notion-logo.svg` - Notion logo

## Images Needed

To complete this project, you'll need to add the following images:
1. `hero-image.png` - Screenshot of Notion interface for the hero section
2. Company logos for the "Trusted by" section:
   - `logo-pixar.svg`
   - `logo-doordash.svg`
   - `logo-nike.svg`
   - `logo-amazon.svg`
   - `logo-pinterest.svg`
   - `logo-uber.svg`
3. Company logos for testimonials:
   - `logo-figma.svg`
   - `logo-headspace.svg`

You can create these images yourself or download them from the original Notion website.

## How to View the Website

Simply open the `index.html` file in your web browser to view the website.

## Development

To modify the website:
- Edit HTML structure in `index.html`
- Modify styles in the appropriate CSS file in the `css/` directory
- Update JavaScript functionality in `js/main.js`

## Running the Server

To run the website with the Express server:

1. Make sure you have Node.js installed
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your browser and navigate to `http://localhost:3001`