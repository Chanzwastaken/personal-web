# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [https://chanzwastaken.vercel.app/](https://chanzwastaken.vercel.app/)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🛠️ Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chanzwastaken/personal-web.git
   cd personal-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To test the production build locally:

```bash
npm run start
# or
yarn start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications and is created by the same team.

#### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers a new deployment
   - Preview deployments are created for pull requests

#### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Push your code to GitHub**

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables if needed

4. **Deploy**
   - Click "Deploy site"

### Deploy to Other Platforms

#### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

#### DigitalOcean App Platform
1. Connect your GitHub repository
2. Select the repository and branch
3. Configure build settings:
   - Build Command: `npm run build`
   - Run Command: `npm run start`
4. Deploy

#### AWS Amplify
1. Connect your GitHub repository
2. AWS Amplify auto-detects Next.js
3. Configure build settings if needed
4. Deploy

## 🔧 Environment Variables

If your project requires environment variables, create a `.env.local` file:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

> **Note**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization

- **Content**: Update content in `src/data/` directory
- **Styles**: Modify Tailwind configuration in `tailwind.config.ts`
- **Components**: Edit React components in `src/components/`
- **Pages**: Update pages in `src/app/`

## 📂 Project Structure

```
personal-web/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── app/         # Next.js app directory (pages & layouts)
│   ├── components/  # React components
│   ├── data/        # Content data files
│   └── styles/      # Global styles
├── .gitignore       # Git ignore rules
├── next.config.mjs  # Next.js configuration
├── package.json     # Dependencies and scripts
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next` (or `rmdir /s .next` on Windows)
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or feedback, feel free to reach out through the contact form on the website.

---

**Built with ❤️ using Next.js**
