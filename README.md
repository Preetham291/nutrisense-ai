# NutriSense AI

A modern, responsive, and intelligent web application that analyzes your meals and provides personalized feedback based on your health goals using the Gemini API.

## Features

- **AI-Powered Analysis**: Leverages Google's `gemini-1.5-flash` model for fast and accurate food analysis.
- **Personalized Goals**: Choose from Weight Loss, Diabetes Management, Muscle Gain, or General Health.
- **Comprehensive Feedback**: Get a health score (out of 10), calorie estimate, positive points, areas for improvement, and suggestions for your next meal.
- **Visual Score Indicators**: Color-coded feedback (Green for 8-10, Yellow for 5-7, Red for <5).
- **Accessible & Responsive**: Fully responsive design with ARIA labels and keyboard support (Enter to submit).
- **Zero Dependencies**: Built with pure HTML, CSS, and vanilla JavaScript. No build steps required!

## Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+)
- **API**: Google Gemini API (`gemini-1.5-flash`)
- **Fonts & Icons**: Google Fonts (Poppins), Material Icons

## Setup Steps

1. Clone or download this repository.
2. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
3. Open `index.html` in your favorite code editor.
4. Locate the `GEMINI_API_KEY` constant at the top of the `<script>` tag.
5. Replace `"YOUR_API_KEY_HERE"` with your actual API key.
   ```javascript
   const GEMINI_API_KEY = "AIzaSyYourRealKeyHere...";
   ```
6. Open `index.html` in your web browser (you can just double-click the file).
7. Start analyzing your meals!

## Security Note

In a real production environment, **never expose your API key in the frontend code**. This project is built as a single-file prototype. For production deployment, you should set up a backend server (e.g., Node.js/Express) to handle API requests and keep your key secure. Use the `.env` file approach as shown in `.env.example`.

## Testing

You can run the basic unit tests for the input validation using Node.js:
```bash
node test.js
```