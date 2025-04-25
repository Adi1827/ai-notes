# AI Notes App

A modern, AI-powered notes application built with Next.js, Supabase, and Google's Gemini API.

## Features

- Create, edit, and delete notes
- AI-powered text summarization using Gemini API
- Real-time updates
- Secure authentication
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Supabase (Authentication & Database)
- Google Gemini API
- Tailwind CSS

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

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables in Vercel's project settings
4. Deploy!

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
