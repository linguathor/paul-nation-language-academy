# Smart Language Learning Academy

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive multi-language vocabulary testing platform based on **Paul Nation's** renowned vocabulary acquisition methodology. This application provides authentic language assessment tools for learners across 10 major world languages.

## 🌟 Features

### 🎯 **Paul Nation's Methodology**
- **Frequency-based word selection** from authentic corpora
- **B1, B2, C1 proficiency levels** following CEFR standards
- **Scientific approach** to vocabulary testing and learning

### 🌍 **Multi-Language Support**
- **French** 🇫🇷
- **Spanish** 🇪🇸
- **German** 🇩🇪
- **Chinese** 🇨🇳
- **Italian** 🇮🇹
- **Japanese** 🇯🇵
- **Portuguese** 🇵🇹
- **Russian** 🇷🇺
- **Dutch** 🇳🇱
- **Arabic** 🇸🇦

### 🎨 **Modern UI/UX**
- **Beautiful, responsive design** with Tailwind CSS
- **Color-coded language selectors** for easy identification
- **shadcn/ui components** for consistent, accessible interface
- **Mobile-first responsive design**
- **Dark/Light theme support**

### 📊 **Advanced Features**
- **Real-time progress tracking** with visual indicators
- **Comprehensive results analysis** with detailed feedback
- **PDF export functionality** for test results
- **Interactive test interface** with multiple choice questions
- **Level-based question progression** (B1 → B2 → C1)

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/linguathor/paul-nation-language-academy.git
   cd paul-nation-language-academy
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
paul-nation-language-academy/
├── app/                    # Next.js 15 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main application page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── language-selector.tsx
│   ├── test-screen.tsx
│   ├── results-screen.tsx
│   ├── welcome-screen.tsx
│   └── pdf-export-button.tsx
├── data/                  # Application data
│   ├── questions.ts      # Language-specific questions
│   └── language-configs.ts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── types/                # TypeScript type definitions
```

## 🧪 Testing Methodology

### Paul Nation's Framework
This application implements **Paul Nation's** research-based vocabulary testing methodology:

- **Word Frequency Analysis**: Questions are selected based on actual usage frequency in authentic texts
- **Level Progression**: Structured progression from B1 (intermediate) to C1 (advanced) proficiency
- **Contextual Learning**: Questions provide meaningful context for vocabulary acquisition
- **Scientific Validation**: Based on extensive corpus linguistics research

### Question Structure
Each question includes:
- **Target vocabulary** in the target language
- **Multiple choice options** with distractors
- **Contextual sentences** for comprehension
- **Proficiency level indicators**
- **Frequency-based selection criteria**

## 🎨 Customization

### Adding New Languages
1. Add language configuration to `data/language-configs.ts`
2. Create language-specific questions in `data/questions.ts`
3. Update color scheme in `components/language-selector.tsx`
4. Add flag emoji and native name

### Styling
- **Tailwind CSS** for utility-first styling
- **CSS custom properties** for theme variables
- **Responsive breakpoints** for mobile optimization
- **shadcn/ui** for consistent component library

## 📊 Data Structure

### Question Format
```typescript
interface Question {
  id: string;
  word: string;
  translation: string;
  options: string[];
  correctAnswer: number;
  level: "B1" | "B2" | "C1";
  context?: string;
  frequency: number;
  commentedOut?: boolean;
}
```

### Language Configuration
```typescript
interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
}
```

## 🔧 Development

### Available Scripts
```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking

# Testing
pnpm test         # Run tests (if implemented)
```

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📈 Performance

- **Next.js 15** with App Router for optimal performance
- **React 19** with concurrent features
- **TypeScript** for type safety and better DX
- **Tailwind CSS** with JIT compilation
- **Optimized bundle size** with tree shaking
- **Fast refresh** for development

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a production URL instantly

### Other Platforms
The application can be deployed to any platform supporting Node.js:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Update documentation for API changes
- Test your changes thoroughly

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Paul Nation** - For the groundbreaking research in vocabulary acquisition
- **shadcn/ui** - For the beautiful component library
- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For the excellent deployment platform

## 📞 Support

If you have any questions or need help:

- **Open an issue** on GitHub
- **Check the documentation** in this README
- **Review the code** for implementation details

## 🔄 Future Enhancements

- [ ] **User authentication** and progress tracking
- [ ] **Additional languages** (Korean, Hindi, Turkish, etc.)
- [ ] **Audio pronunciation** for vocabulary words
- [ ] **Spaced repetition** algorithm integration
- [ ] **Teacher dashboard** for classroom management
- [ ] **Progress analytics** and learning insights
- [ ] **Offline mode** for mobile learning
- [ ] **Integration with language learning APIs**

---

**Built with ❤️ for language learners worldwide**

*Transform your vocabulary learning with scientifically-proven methodology*
