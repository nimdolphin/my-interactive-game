# Next.js Interactive Game Field Implementation

## Project Description

This project implements a responsive website using Next.js, featuring an interactive game field where users can spawn and move rectangles with images inside. The website includes multiple pages, all sharing a consistent header and footer. A contact form is also implemented using React Hook Form.

## Features Implemented

### 1. Layout Structure

- **Responsive Layout:** The website is designed with a responsive layout consisting of a header, body, and footer.
- **SCSS for Styling:** All components are styled using SCSS for maintainability and modularity.
- **Multiple Pages:** The website includes a main page that describes the website, and additional pages sharing the same header and footer but containing different content.

### 2. Header

- **Simple Header:** A fixed header bar at the top of the page with a placeholder for the website title or logo.

### 3. Footer

- **Simple Footer:** A fixed footer bar at the bottom of the page with a placeholder for footer content, such as a copyright notice.

### 4. Game Field (Body)

- **Interactive Game Field:** In the body section of the game page, there is a game field where users can spawn and move rectangles containing images.
- **Responsive Design:** The game field adapts to the remaining space between the header and footer and adjusts according to window resizing.

### 5. Rectangle Spawning

- **Spawn Mechanism:** New rectangles can be spawned within the game field when the user clicks on any empty spot.
- **Rectangle Content:** Each rectangle contains a placeholder image.
- **Animation:** Spawning a new rectangle includes an animation from the top left corner to the click/tap coordinates.

### 6. Rectangle Interaction

- **Drag and Move:** Users can drag and move the rectangles around within the game field.
- **Smooth Interaction:** Dragging interaction is smooth and responsive.
- **Layer Management:** The last interacted rectangle always appears on the top layer.

### 7. Responsiveness

- **Responsive Application:** The entire application is responsive, ensuring usability across different devices and screen sizes.
- **Dynamic Resizing:** When the browser window is resized, the game field recalculates its size, and the rectangles adjust their positions accordingly.

### 8. Additional Pages

- **Contact Form:** Implemented a contact form on one of the pages, including fields for the user's name, email, subject, and message, along with a submit button. Form validation is handled using React Hook Form, ensuring valid email format and required fields.

## Technologies Used

- **Next.js:** For server-side rendering and static site generation.
- **SCSS:** For styling components.
- **React Hook Form:** For managing the contact form and its validations.
- **React Draggable:** For enabling draggable functionality on rectangles.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```bash
   cd <project-directory>
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the project in your browser:**
   ```
   http://localhost:3000
   ```
