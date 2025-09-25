# DataMambo - Social Media Analytics Dashboard

DataMambo is a comprehensive social media analytics and metrics tracking application that helps businesses, influencers, and content creators monitor, analyze, and optimize their social media performance across multiple platforms. This dashboard provides a clean, responsive, and data-rich interface to make informed decisions.

This project also features AI-powered content suggestions using the **Google Gemini API** to help users generate new, engaging post ideas based on their existing top-performing content.

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Security](#security)
- [License](#license)

## About The Project

In today's digital landscape, understanding social media performance is crucial for growth. DataMambo provides a centralized hub to:
*   Visualize key performance indicators (KPIs) across all major social platforms.
*   Track follower growth, engagement rates, and content reach.
*   Analyze audience demographics to better understand your followers.
*   Leverage AI to overcome creative blocks and generate fresh content ideas.
*   Generate performance reports for stakeholders.

### Built With

This project is built with a modern, robust, and performant tech stack:

*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Recharts](https://recharts.org/) for data visualization
*   [Google Gemini API](https://ai.google.dev/) for AI features

## Features

*   **Global Overview**: A unified dashboard showing high-level metrics for all connected social media accounts.
*   **Detailed Analytics**: In-depth charts for follower growth and engagement breakdowns per platform.
*   **Content Performance**: A view of your top-performing posts to easily identify what works.
*   **AI Content Suggestions**: A powerful feature that uses the Gemini API to analyze your best posts and suggest new ideas for captions, topics, and content formats.
*   **Audience Insights**: Visualize audience demographics with interactive pie charts.
*   **Report Generation**: A simple interface to configure and generate simulated performance reports.
*   **Customizable Theming**: Switch between Light, Dark, and Black & White themes to suit your preference.
*   **Authentication**: A mock authentication flow for user sign-up, sign-in, and guest access.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project is designed to run in an environment that supports modern JavaScript and has a module system for imports.

### Installation

1.  **Set up Environment Variables**

    To use the AI-powered features, you need a Google Gemini API key. The application is configured to load this variable from `process.env.API_KEY`. You must ensure this variable is available in the execution environment.

    1.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    2.  Make the API key available as an environment variable named `API_KEY`.

    _Note: The method for setting environment variables depends on your deployment or development platform._

2.  **Run the application**
    
    Open the `index.html` file in your web browser. The application will start automatically.

## Security

Security is a top priority for DataMambo.

*   **API Key Management**: The Google Gemini API key is intended to be used via a serverless backend or a build-time environment variable substitution. **Do not expose your API key directly in client-side code in a production environment.** The current setup uses `process.env.API_KEY` to abstract away the key's origin, assuming it is provided by a secure environment.
*   **Authentication**: The app includes a mock authentication system. In a real-world scenario, this would be replaced with a secure service like Firebase Authentication, including security rules for data access.
*   **Cross-Site Scripting (XSS)**: We leverage React's automatic escaping of JSX content to prevent XSS attacks from user-generated data. All data should be properly sanitized on the backend before being sent to the client.

## License

Distributed under the MIT License.
