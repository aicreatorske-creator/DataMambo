# DataMambo - Social Media Analytics Dashboard

DataMambo is a comprehensive social media analytics and metrics tracking application that helps businesses, influencers, and content creators monitor, analyze, and optimize their social media performance across multiple platforms. This dashboard provides a clean, responsive, and data-rich interface to make informed decisions.

This project also features AI-powered content suggestions using the **Google Gemini API** to help users generate new, engaging post ideas based on their existing top-performing content.

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Features](#features)
- [Getting Started & Deployment](#getting-started--deployment)
  - [Prerequisites](#prerequisites)
  - [Deployment Steps](#deployment-steps)
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
*   [Vercel](https://vercel.com/) for hosting and serverless functions

## Features

*   **Global Overview**: A unified dashboard showing high-level metrics for all connected social media accounts.
*   **Detailed Analytics**: In-depth charts for follower growth and engagement breakdowns per platform.
*   **Content Performance**: A view of your top-performing posts to easily identify what works.
*   **AI Content Suggestions**: A powerful feature that uses the Gemini API to analyze your best posts and suggest new ideas for captions, topics, and content formats.
*   **Audience Insights**: Visualize audience demographics with interactive pie charts.
*   **Report Generation**: A simple interface to configure and generate simulated performance reports.
*   **Customizable Theming**: Switch between Light, Dark, and Black & White themes to suit your preference.
*   **Authentication**: A mock authentication flow for user sign-up, sign-in, and guest access.

## Getting Started & Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Prerequisites

*   A Vercel account.
*   [Vercel CLI](https://vercel.com/cli) installed on your local machine.
*   A Google Gemini API Key.

### Deployment Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Set up Environment Variables on Vercel**

    The application requires a Google Gemini API key. This key is stored securely as an environment variable on Vercel.

    1.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    2.  Link your local project to Vercel:
        ```bash
        vercel link
        ```
    3.  Add the API key as a secret environment variable:
        ```bash
        vercel env add API_KEY
        ```
        When prompted, paste your API key. Vercel will encrypt this value and make it available to the serverless function during runtime.

3.  **Deploy the application:**
    ```bash
    vercel --prod
    ```

Vercel will automatically install dependencies, build the project, deploy the static files, and set up the serverless function. Your analytics dashboard will be live!

## Security

Security is a top priority for DataMambo.

*   **API Key Management**: The Google Gemini API key is securely managed as an environment variable on Vercel. It is only accessible by the backend serverless function (`/api/generate`) and is **never exposed to the client-side browser**. This prevents unauthorized use of the API key.
*   **Authentication**: The app includes a mock authentication system. In a real-world scenario, this would be replaced with a secure service like Firebase Authentication, including security rules for data access.
*   **Cross-Site Scripting (XSS)**: We leverage React's automatic escaping of JSX content to prevent XSS attacks from user-generated data.

## License

Distributed under the MIT License.
