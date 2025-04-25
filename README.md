# AI Notes App

A modern, AI-powered notes application built with Next.js, Supabase, and Google's Gemini API.

## Live Demo

Check out the live application at: [https://ai-notes-sigma.vercel.app/](https://ai-notes-sigma.vercel.app/)

## Features

- Create, edit, and delete notes
- AI-powered text summarization using Gemini API
- Real-time updates
- Secure authentication with Google OAuth
- Responsive design
- Dark mode support

## Tech Stack

- Next.js 14
- TypeScript
- Supabase (Authentication & Database)
- Google Gemini API
- Tailwind CSS
- React Query for data fetching
- Radix UI components

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-notes-app.git
cd ai-notes-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication Setup

1. Configure Google OAuth in your Supabase project:
   - Go to Authentication > Providers > Google
   - Enable Google provider
   - Add your Google OAuth credentials
   - Add the following redirect URLs:
     - `http://localhost:3000/auth/callback` (for development)
     - `https://ai-notes-sigma.vercel.app/auth/callback` (for production)

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables in Vercel's project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GEMINI_API_KEY`
4. Deploy!

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
