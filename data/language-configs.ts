// Language-specific content and configurations
export interface LanguageConfig {
  code: string
  name: string
  nativeName: string
  flag: string
  title: string
  description: string
  welcomeText: string
  instructions: string[]
  recommendations: {
    [key: string]: {
      short: string
      detailed: {
        title: string
        description: string
        focus: string
        activities: string[]
        tip: string
      }
    }
  }
}

export const languageConfigs: { [key: string]: LanguageConfig } = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    title: "English Vocabulary Size Test",
    description: "Test your English language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your English Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on building your core vocabulary through extensive reading, listening to English media, and practicing high-frequency words in context.",
        detailed: {
          title: "Elementary Level – Building Your Foundation",
          description: "You're building your English vocabulary foundation. Focus on the most common words and basic communication needs.",
          focus: "Essential vocabulary & basic communication",
          activities: [
            "Priority vocabulary: Focus on the most frequent 1,000-2,000 English words",
            "Learning materials: Beginner textbooks, language learning apps, simple news articles",
            "Practice methods: Use pictures and visual associations, practice with simple sentences, repeat and review regularly",
            "Communication practice: Start with basic conversations about familiar topics"
          ],
          tip: "Don't worry about making mistakes – focus on communicating your ideas, even if imperfectly."
        }
      },
      "Approaching B2": {
        short: "Great progress! You have a solid vocabulary foundation. Work on expanding your academic vocabulary, idiomatic expressions, and context-specific terminology.",
        detailed: {
          title: "Upper-Intermediate Level – Building Advanced Vocabulary",
          description: "You have a solid vocabulary foundation and can handle most everyday situations. Focus on expanding your range and developing more sophisticated expression.",
          focus: "Academic vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: News articles, podcasts, TED talks, academic texts in areas of interest",
            "Vocabulary building: Work on Academic Word List (AWL), word families and derivatives",
            "Practice strategies: Use spaced repetition systems, create vocabulary journals",
            "Output practice: Write essays, participate in discussions, give presentations"
          ],
          tip: "Quality over quantity – deeply learn fewer words rather than superficially knowing many."
        }
      },
      "Solid B2": {
        short: "Great progress! You have a solid vocabulary foundation. Work on expanding your academic vocabulary, idiomatic expressions, and context-specific terminology.",
        detailed: {
          title: "Upper-Intermediate Level – Building Advanced Vocabulary",
          description: "You have a solid vocabulary foundation and can handle most everyday situations. Focus on expanding your range and developing more sophisticated expression.",
          focus: "Academic vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: News articles, podcasts, TED talks, academic texts in areas of interest",
            "Vocabulary building: Work on Academic Word List (AWL), word families and derivatives",
            "Practice strategies: Use spaced repetition systems, create vocabulary journals",
            "Output practice: Write essays, participate in discussions, give presentations"
          ],
          tip: "Quality over quantity – deeply learn fewer words rather than superficially knowing many."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your vocabulary is at an advanced level. Focus on specialized terminology, academic writing, and nuanced expressions to reach near-native proficiency.",
        detailed: {
          title: "Advanced Level – Refining Your English Mastery",
          description: "Your vocabulary is at an advanced level, allowing you to understand complex texts and express sophisticated ideas. Focus on achieving native-like fluency and precision in specialized contexts.",
          focus: "Specialized vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic journals, literary works, professional publications in your field",
            "Listening: Academic lectures, professional conferences, documentary films, news analysis",
            "Vocabulary expansion: Collocations, phrasal verbs, idiomatic expressions, academic terminology",
            "Practice: Engage in debates, write research papers, give presentations on complex topics"
          ],
          tip: "Set specific goals like passing advanced English proficiency tests or presenting at international conferences."
        }
      },
      "Solid C1": {
        short: "Excellent! Your vocabulary is at an advanced level. Focus on specialized terminology, academic writing, and nuanced expressions to reach near-native proficiency.",
        detailed: {
          title: "Advanced Level – Refining Your English Mastery",
          description: "Your vocabulary is at an advanced level, allowing you to understand complex texts and express sophisticated ideas. Focus on achieving native-like fluency and precision in specialized contexts.",
          focus: "Specialized vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic journals, literary works, professional publications in your field",
            "Listening: Academic lectures, professional conferences, documentary films, news analysis",
            "Vocabulary expansion: Collocations, phrasal verbs, idiomatic expressions, academic terminology",
            "Practice: Engage in debates, write research papers, give presentations on complex topics"
          ],
          tip: "Set specific goals like passing advanced English proficiency tests or presenting at international conferences."
        }
      }
    }
  },

  // Placeholder for other languages - these would be fully translated and culturally adapted
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    title: "French Vocabulary Size Test",
    description: "Test your French language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your French Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent French words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your French Foundation",
          description: "You're building your French vocabulary foundation. Focus on the most common French words.",
          focus: "Essential French vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent French words",
            "Learning materials: Beginner French textbooks, language learning apps",
            "Practice methods: Use images and visual associations for French words",
            "Communication practice: Basic conversations about familiar topics in French"
          ],
          tip: "Don't worry about mistakes – focus on communicating your ideas in French."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core French vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your French Vocabulary",
          description: "You can handle everyday French situations. Focus on expanding your vocabulary range.",
          focus: "Core French vocabulary expansion & fluency",
          activities: [
            "Input sources: French graded readers, educational French podcasts",
            "Vocabulary priorities: The 3,000 most frequent French words, phrasal verbs",
            "Learning strategies: Flashcards for French words, vocabulary notebooks",
            "Practice activities: French conversation groups, journaling in French"
          ],
          tip: "Consistency is essential – study French a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic French vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced French Vocabulary",
          description: "You have a solid French foundation. Focus on expanding your register and range.",
          focus: "Academic French vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: French news articles, TED talks, academic French texts",
            "Vocabulary building: Academic French word lists, French word families",
            "Practice strategies: Spaced repetition systems, French vocabulary journals",
            "Production practice: Writing French essays, discussions, French presentations"
          ],
          tip: "Quality over quantity – learn fewer French words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic French vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced French Vocabulary",
          description: "You have a solid French foundation. Focus on expanding your register and range.",
          focus: "Academic French vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: French news articles, TED talks, academic French texts",
            "Vocabulary building: Academic French word lists, French word families",
            "Practice strategies: Spaced repetition systems, French vocabulary journals",
            "Production practice: Writing French essays, discussions, French presentations"
          ],
          tip: "Quality over quantity – learn fewer French words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Outstanding! Your French vocabulary is at an advanced level. Focus on specialized French terminology.",
        detailed: {
          title: "Advanced Level – Refining Your French Mastery",
          description: "Your French vocabulary is at an advanced level. Focus on native-like fluency in French.",
          focus: "Specialized French vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: French academic journals, French literature, professional French publications",
            "Listening: French academic conferences, French documentaries, French current affairs analysis",
            "Vocabulary expansion: French collocations, French idioms, French academic terminology",
            "Practice: French debates, writing French articles, presentations on complex topics in French"
          ],
          tip: "Set specific French goals like passing advanced French proficiency tests."
        }
      },
      "Solid C1": {
        short: "Excellent! Your French vocabulary is at an advanced level. Focus on specialized French terminology.",
        detailed: {
          title: "Advanced Level – Refining Your French Mastery",
          description: "Your French vocabulary is at an advanced level. Focus on native-like fluency in French.",
          focus: "Specialized French vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: French academic journals, French literature, professional French publications",
            "Listening: French academic conferences, French documentaries, French current affairs analysis",
            "Vocabulary expansion: French collocations, French idioms, French academic terminology",
            "Practice: French debates, writing French articles, presentations on complex topics in French"
          ],
          tip: "Set specific French goals like passing advanced French proficiency tests."
        }
      }
    }
  },

  // Add similar structures for other languages...
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    title: "Spanish Vocabulary Size Test",
    description: "Test your Spanish language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Spanish Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Spanish words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Spanish Foundation",
          description: "You're building your Spanish vocabulary foundation. Focus on the most common Spanish words.",
          focus: "Essential Spanish vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Spanish words",
            "Learning materials: Beginner Spanish textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Spanish words",
            "Communication practice: Basic conversations about familiar topics in Spanish"
          ],
          tip: "Don't worry about mistakes – focus on communicating your ideas in Spanish."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Spanish vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Spanish Vocabulary",
          description: "You can handle everyday Spanish situations. Focus on expanding your vocabulary range.",
          focus: "Core Spanish vocabulary expansion & fluency",
          activities: [
            "Input sources: Spanish graded readers, educational Spanish podcasts",
            "Vocabulary priorities: The 3,000 most frequent Spanish words, Spanish idiomatic expressions",
            "Learning strategies: Flashcards for Spanish words, vocabulary notebooks",
            "Practice activities: Spanish conversation groups, journaling in Spanish"
          ],
          tip: "Consistency is essential – study Spanish a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Spanish vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Spanish Vocabulary",
          description: "You have a solid Spanish foundation. Focus on expanding your register and range.",
          focus: "Academic Spanish vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Spanish news articles, TED talks, academic Spanish texts",
            "Vocabulary building: Academic Spanish word lists, Spanish word families",
            "Practice strategies: Spaced repetition systems, Spanish vocabulary journals",
            "Production practice: Writing Spanish essays, discussions, Spanish presentations"
          ],
          tip: "Quality over quantity – learn fewer Spanish words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Spanish vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Spanish Vocabulary",
          description: "You have a solid Spanish foundation. Focus on expanding your register and range.",
          focus: "Academic Spanish vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Spanish news articles, TED talks, academic Spanish texts",
            "Vocabulary building: Academic Spanish word lists, Spanish word families",
            "Practice strategies: Spaced repetition systems, Spanish vocabulary journals",
            "Production practice: Writing Spanish essays, discussions, Spanish presentations"
          ],
          tip: "Quality over quantity – learn fewer Spanish words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Outstanding! Your Spanish vocabulary is at an advanced level. Focus on specialized Spanish terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Spanish Mastery",
          description: "Your Spanish vocabulary is at an advanced level. Focus on native-like fluency in Spanish.",
          focus: "Specialized Spanish vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Spanish academic journals, Spanish literature, professional Spanish publications",
            "Listening: Spanish academic conferences, Spanish documentaries, Spanish current affairs analysis",
            "Vocabulary expansion: Spanish collocations, Spanish idioms, Spanish academic terminology",
            "Practice: Spanish debates, writing Spanish articles, presentations on complex topics in Spanish"
          ],
          tip: "Set specific Spanish goals like passing advanced Spanish proficiency tests."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Spanish vocabulary is at an advanced level. Focus on specialized Spanish terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Spanish Mastery",
          description: "Your Spanish vocabulary is at an advanced level. Focus on native-like fluency in Spanish.",
          focus: "Specialized Spanish vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Spanish academic journals, Spanish literature, professional Spanish publications",
            "Listening: Spanish academic conferences, Spanish documentaries, Spanish current affairs analysis",
            "Vocabulary expansion: Spanish collocations, Spanish idioms, Spanish academic terminology",
            "Practice: Spanish debates, writing Spanish articles, presentations on complex topics in Spanish"
          ],
          tip: "Set specific Spanish goals like passing advanced Spanish proficiency tests."
        }
      }
    }
  },

  // Add similar structures for German, Chinese, Italian, Japanese, Portuguese, Russian, Dutch
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    title: "German Vocabulary Size Test",
    description: "Test your German language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your German Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent German words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your German Foundation",
          description: "You're building your German vocabulary foundation. Focus on the most common German words.",
          focus: "Essential German vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent German words",
            "Learning materials: Beginner German textbooks, language learning apps",
            "Practice methods: Use images and visual associations for German words",
            "Communication practice: Basic conversations about familiar topics in German"
          ],
          tip: "Don't worry about mistakes – focus on communicating your ideas in German."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic German vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced German Vocabulary",
          description: "You have a solid German foundation. Focus on expanding your register and range.",
          focus: "Academic German vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: German news articles, TED talks, academic German texts",
            "Vocabulary building: Academic German word lists, German word families",
            "Practice strategies: Spaced repetition systems, German vocabulary journals",
            "Production practice: Writing German essays, discussions, German presentations"
          ],
          tip: "Quality over quantity – learn fewer German words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic German vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced German Vocabulary",
          description: "You have a solid German foundation. Focus on expanding your register and range.",
          focus: "Academic German vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: German news articles, TED talks, academic German texts",
            "Vocabulary building: Academic German word lists, German word families",
            "Practice strategies: Spaced repetition systems, German vocabulary journals",
            "Production practice: Writing German essays, discussions, German presentations"
          ],
          tip: "Quality over quantity – learn fewer German words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Outstanding! Your German vocabulary is at an advanced level. Focus on specialized German terminology.",
        detailed: {
          title: "Advanced Level – Refining Your German Mastery",
          description: "Your German vocabulary is at an advanced level. Focus on native-like fluency in German.",
          focus: "Specialized German vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: German academic journals, German literature, professional German publications",
            "Listening: German academic conferences, German documentaries, German current affairs analysis",
            "Vocabulary expansion: German collocations, German idioms, German academic terminology",
            "Practice: German debates, writing German articles, presentations on complex topics in German"
          ],
          tip: "Set specific German goals like passing advanced German proficiency tests."
        }
      },
      "Solid C1": {
        short: "Excellent! Your German vocabulary is at an advanced level. Focus on specialized German terminology.",
        detailed: {
          title: "Advanced Level – Refining Your German Mastery",
          description: "Your German vocabulary is at an advanced level. Focus on native-like fluency in German.",
          focus: "Specialized German vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: German academic journals, German literature, professional German publications",
            "Listening: German academic conferences, German documentaries, German current affairs analysis",
            "Vocabulary expansion: German collocations, German idioms, German academic terminology",
            "Practice: German debates, writing German articles, presentations on complex topics in German"
          ],
          tip: "Set specific German goals like passing advanced German proficiency tests."
        }
      }
    }
  },

  // Simplified placeholders for remaining languages
  zh: {
    code: "zh",
    name: "Chinese (Mandarin)",
    nativeName: "中文",
    flag: "🇨🇳",
    title: "Chinese Vocabulary Size Test",
    description: "Test your Chinese language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Chinese Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Chinese words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Chinese Foundation",
          description: "You're building your Chinese vocabulary foundation. Focus on the most common Chinese words.",
          focus: "Essential Chinese vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Chinese words",
            "Learning materials: Beginner Chinese textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Chinese characters",
            "Communication practice: Basic conversations about familiar topics in Chinese"
          ],
          tip: "Don't worry about mistakes – focus on communicating your ideas in Chinese."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Chinese vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Chinese Vocabulary",
          description: "You can handle everyday Chinese situations. Focus on expanding your vocabulary range.",
          focus: "Core Chinese vocabulary expansion & fluency",
          activities: [
            "Input sources: Chinese graded readers, educational Chinese podcasts",
            "Vocabulary priorities: The 3,000 most frequent Chinese words, Chinese idioms",
            "Learning strategies: Flashcards for Chinese characters, vocabulary notebooks",
            "Practice activities: Chinese conversation groups, journaling in Chinese"
          ],
          tip: "Consistency is essential – study Chinese a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Vocabulary",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "Academic vocabulary, complex expressions & contextual usage",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "Quality over quantity – learn fewer words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Vocabulary",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "Academic vocabulary, complex expressions & contextual usage",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "Quality over quantity – learn fewer words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "优秀！您的词汇处于高级水平。专注于专业术语。",
        detailed: {
          title: "高级水平 – 精炼您的中文掌握",
          description: "您的词汇处于高级水平。专注于接近母语的流畅度。",
          focus: "专业词汇，细微表达 & 学术精确性",
          activities: [
            "阅读：学术期刊，文学作品，专业出版物",
            "听力：学术讲座，专业会议，纪录片，新闻分析",
            "词汇扩展：搭配，习语，成语，学术术语",
            "练习：参与辩论，撰写研究论文，关于复杂主题的演讲"
          ],
          tip: "设定具体目标，如通过高级中文能力考试。"
        }
      },
      "Solid C1": {
        short: "优秀！您的词汇处于高级水平。专注于专业术语。",
        detailed: {
          title: "高级水平 – 精炼您的中文掌握",
          description: "您的词汇处于高级水平。专注于接近母语的流畅度。",
          focus: "专业词汇，细微表达 & 学术精确性",
          activities: [
            "阅读：学术期刊，文学作品，专业出版物",
            "听力：学术讲座，专业会议，纪录片，新闻分析",
            "词汇扩展：搭配，习语，成语，学术术语",
            "练习：参与辩论，撰写研究论文，关于复杂主题的演讲"
          ],
          tip: "设定具体目标，如通过高级中文能力考试。"
        }
      }
    }
  },

  // Simplified placeholders for remaining languages
  it: {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    title: "Italian Vocabulary Size Test",
    description: "Test your Italian language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Italian Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Italian words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Italian Foundation",
          description: "You're building your Italian vocabulary foundation. Focus on the most common Italian words.",
          focus: "Essential Italian vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Italian words",
            "Learning materials: Beginner Italian textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Italian words",
            "Communication practice: Basic Italian conversations on familiar topics"
          ],
          tip: "Don't worry about errors – focus on communicating your ideas in Italian."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Italian vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Italian Vocabulary",
          description: "You can handle everyday Italian situations. Focus on expanding your vocabulary range.",
          focus: "Core Italian vocabulary expansion & fluency",
          activities: [
            "Input sources: Italian graded readers, educational Italian podcasts",
            "Vocabulary priorities: The 3,000 most frequent Italian words, Italian idiomatic expressions",
            "Learning strategies: Flashcards for Italian words, vocabulary notebooks",
            "Practice activities: Italian conversation groups, journaling in Italian"
          ],
          tip: "Consistency is essential – study Italian a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Italian vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Italian Vocabulary",
          description: "You have a solid Italian foundation. Focus on expanding your register and range.",
          focus: "Academic Italian vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Italian news articles, TED talks, academic Italian texts",
            "Vocabulary building: Academic Italian word lists, Italian word families",
            "Practice strategies: Spaced repetition systems, Italian vocabulary journals",
            "Production practice: Writing Italian essays, discussions, Italian presentations"
          ],
          tip: "Quality over quantity – learn fewer Italian words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Italian vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Italian Vocabulary",
          description: "You have a solid Italian foundation. Focus on expanding your register and range.",
          focus: "Academic Italian vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Italian news articles, TED talks, academic Italian texts",
            "Vocabulary building: Academic Italian word lists, Italian word families",
            "Practice strategies: Spaced repetition systems, Italian vocabulary journals",
            "Production practice: Writing Italian essays, discussions, Italian presentations"
          ],
          tip: "Quality over quantity – learn fewer Italian words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your Italian vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Italian Mastery",
          description: "Your Italian vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Italian vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Italian journals, literary works, professional publications",
            "Listening: Academic lectures, documentaries, Italian news analysis",
            "Vocabulary expansion: Italian collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Italian debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Italian proficiency exams."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Italian vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Italian Mastery",
          description: "Your Italian vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Italian vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Italian journals, literary works, professional publications",
            "Listening: Academic lectures, documentaries, Italian news analysis",
            "Vocabulary expansion: Italian collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Italian debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Italian proficiency exams."
        }
      }
    }
  },

  // Simplified placeholders for remaining languages
  ja: {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    title: "Japanese Vocabulary Size Test",
    description: "Test your Japanese language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Japanese Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Japanese words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Japanese Foundation",
          description: "You're building your Japanese vocabulary foundation. Focus on the most common Japanese words.",
          focus: "Essential Japanese vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Japanese words",
            "Learning materials: Beginner Japanese textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Japanese words",
            "Communication practice: Basic Japanese conversations on familiar topics"
          ],
          tip: "Don't worry about errors – focus on communicating your ideas in Japanese."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Japanese vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Japanese Vocabulary",
          description: "You can handle everyday Japanese situations. Focus on expanding your vocabulary range.",
          focus: "Core Japanese vocabulary expansion & fluency",
          activities: [
            "Input sources: Japanese graded readers, educational Japanese podcasts",
            "Vocabulary priorities: The 3,000 most frequent Japanese words, Japanese idiomatic expressions",
            "Learning strategies: Flashcards for Japanese words, vocabulary notebooks",
            "Practice activities: Japanese conversation groups, journaling in Japanese"
          ],
          tip: "Consistency is essential – study Japanese a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Japanese vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Japanese Vocabulary",
          description: "You have a solid Japanese foundation. Focus on expanding your register and range.",
          focus: "Academic Japanese vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Japanese news articles, TED talks, academic Japanese texts",
            "Vocabulary building: Academic Japanese word lists, Japanese word families",
            "Practice strategies: Spaced repetition systems, Japanese vocabulary journals",
            "Production practice: Writing Japanese essays, discussions, Japanese presentations"
          ],
          tip: "Quality over quantity – learn fewer Japanese words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Japanese vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Japanese Vocabulary",
          description: "You have a solid Japanese foundation. Focus on expanding your register and range.",
          focus: "Academic Japanese vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Japanese news articles, TED talks, academic Japanese texts",
            "Vocabulary building: Academic Japanese word lists, Japanese word families",
            "Practice strategies: Spaced repetition systems, Japanese vocabulary journals",
            "Production practice: Writing Japanese essays, discussions, Japanese presentations"
          ],
          tip: "Quality over quantity – learn fewer Japanese words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your Japanese vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Japanese Mastery",
          description: "Your Japanese vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Japanese vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Japanese journals, literary works, professional publications",
            "Listening: Academic lectures, professional conferences, documentaries, Japanese news analysis",
            "Vocabulary expansion: Japanese collocations, idiomatic expressions, set phrases, academic terminology",
            "Practice: Engaging in Japanese debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Japanese proficiency exams."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Japanese vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Japanese Mastery",
          description: "Your Japanese vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Japanese vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Japanese journals, literary works, professional publications",
            "Listening: Academic lectures, professional conferences, documentaries, Japanese news analysis",
            "Vocabulary expansion: Japanese collocations, idiomatic expressions, set phrases, academic terminology",
            "Practice: Engaging in Japanese debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Japanese proficiency exams."
        }
      }
    }
  },

  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    title: "Portuguese Vocabulary Size Test",
    description: "Test your Portuguese language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Portuguese Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Portuguese words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Portuguese Foundation",
          description: "You're building your Portuguese vocabulary foundation. Focus on the most common Portuguese words.",
          focus: "Essential Portuguese vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Portuguese words",
            "Learning materials: Beginner Portuguese textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Portuguese words",
            "Communication practice: Basic Portuguese conversations on familiar topics"
          ],
          tip: "Don't worry about errors – focus on communicating your ideas in Portuguese."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Portuguese vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Portuguese Vocabulary",
          description: "You can handle everyday Portuguese situations. Focus on expanding your vocabulary range.",
          focus: "Core Portuguese vocabulary expansion & fluency",
          activities: [
            "Input sources: Portuguese graded readers, educational Portuguese podcasts",
            "Vocabulary priorities: The 3,000 most frequent Portuguese words, Portuguese idiomatic expressions",
            "Learning strategies: Flashcards for Portuguese words, vocabulary notebooks",
            "Practice activities: Portuguese conversation groups, journaling in Portuguese"
          ],
          tip: "Consistency is essential – study Portuguese a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Portuguese vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Portuguese Vocabulary",
          description: "You have a solid Portuguese foundation. Focus on expanding your register and range.",
          focus: "Academic Portuguese vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Portuguese news articles, TED talks, academic Portuguese texts",
            "Vocabulary building: Academic Portuguese word lists, Portuguese word families",
            "Practice strategies: Spaced repetition systems, Portuguese vocabulary journals",
            "Production practice: Writing Portuguese essays, discussions, Portuguese presentations"
          ],
          tip: "Quality over quantity – learn fewer Portuguese words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Portuguese vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Portuguese Vocabulary",
          description: "You have a solid Portuguese foundation. Focus on expanding your register and range.",
          focus: "Academic Portuguese vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Portuguese news articles, TED talks, academic Portuguese texts",
            "Vocabulary building: Academic Portuguese word lists, Portuguese word families",
            "Practice strategies: Spaced repetition systems, Portuguese vocabulary journals",
            "Production practice: Writing Portuguese essays, discussions, Portuguese presentations"
          ],
          tip: "Quality over quantity – learn fewer Portuguese words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your Portuguese vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Portuguese Mastery",
          description: "Your Portuguese vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Portuguese vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Portuguese journals, literary works, professional publications",
            "Listening: Academic lectures, documentaries, Portuguese news analysis",
            "Vocabulary expansion: Portuguese collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Portuguese debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Portuguese proficiency exams."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Portuguese vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Portuguese Mastery",
          description: "Your Portuguese vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Portuguese vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Portuguese journals, literary works, professional publications",
            "Listening: Academic lectures, documentaries, Portuguese news analysis",
            "Vocabulary expansion: Portuguese collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Portuguese debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Portuguese proficiency exams."
        }
      }
    }
  },

  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    title: "Russian Vocabulary Size Test",
    description: "Test your Russian language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Russian Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Russian words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Russian Foundation",
          description: "You're building your Russian vocabulary foundation. Focus on the most common Russian words.",
          focus: "Essential Russian vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Russian words",
            "Learning materials: Beginner Russian textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Russian words",
            "Communication practice: Basic Russian conversations on familiar topics"
          ],
          tip: "Don't worry about errors – focus on communicating your ideas in Russian."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Russian vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Russian Vocabulary",
          description: "You can handle everyday Russian situations. Focus on expanding your vocabulary range.",
          focus: "Core Russian vocabulary expansion & fluency",
          activities: [
            "Input sources: Russian graded readers, educational Russian podcasts",
            "Vocabulary priorities: The 3,000 most frequent Russian words, Russian idiomatic expressions",
            "Learning strategies: Flashcards for Russian words, vocabulary notebooks",
            "Practice activities: Russian conversation groups, journaling in Russian"
          ],
          tip: "Consistency is essential – study Russian a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Russian vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Russian Vocabulary",
          description: "You have a solid Russian foundation. Focus on expanding your register and range.",
          focus: "Academic Russian vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Russian news articles, TED talks, academic Russian texts",
            "Vocabulary building: Academic Russian word lists, Russian word families",
            "Practice strategies: Spaced repetition systems, Russian vocabulary journals",
            "Production practice: Writing Russian essays, discussions, Russian presentations"
          ],
          tip: "Quality over quantity – learn fewer Russian words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Russian vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Russian Vocabulary",
          description: "You have a solid Russian foundation. Focus on expanding your register and range.",
          focus: "Academic Russian vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Russian news articles, TED talks, academic Russian texts",
            "Vocabulary building: Academic Russian word lists, Russian word families",
            "Practice strategies: Spaced repetition systems, Russian vocabulary journals",
            "Production practice: Writing Russian essays, discussions, Russian presentations"
          ],
          tip: "Quality over quantity – learn fewer Russian words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your Russian vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Russian Mastery",
          description: "Your Russian vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Russian vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Russian journals, literary works, professional publications",
            "Listening: Academic lectures, conferences, documentaries, Russian news analysis",
            "Vocabulary expansion: Russian collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Russian debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Russian proficiency exams."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Russian vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Russian Mastery",
          description: "Your Russian vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Russian vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Russian journals, literary works, professional publications",
            "Listening: Academic lectures, conferences, documentaries, Russian news analysis",
            "Vocabulary expansion: Russian collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Russian debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Russian proficiency exams."
        }
      }
    }
  },

  nl: {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    title: "Dutch Vocabulary Size Test",
    description: "Test your Dutch language proficiency from B1 to C1 levels",
    welcomeText: "Welcome to your Dutch Vocabulary Size Test!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Focus on learning the most frequent Dutch words and basic communication skills.",
        detailed: {
          title: "Elementary Level – Building Your Dutch Foundation",
          description: "You're building your Dutch vocabulary foundation. Focus on the most common Dutch words.",
          focus: "Essential Dutch vocabulary & basic communication",
          activities: [
            "Priority vocabulary: The 1,000-2,000 most frequent Dutch words",
            "Learning materials: Beginner Dutch textbooks, language learning apps",
            "Practice methods: Use images and visual associations for Dutch words",
            "Communication practice: Basic Dutch conversations on familiar topics"
          ],
          tip: "Don't worry about errors – focus on communicating your ideas in Dutch."
        }
      },
      "Approaching B1": {
        short: "Focus on expanding your core Dutch vocabulary and improving fluency.",
        detailed: {
          title: "Intermediate Level – Expanding Your Dutch Vocabulary",
          description: "You can handle everyday Dutch situations. Focus on expanding your vocabulary range.",
          focus: "Core Dutch vocabulary expansion & fluency",
          activities: [
            "Input sources: Dutch graded readers, educational Dutch podcasts",
            "Vocabulary priorities: The 3,000 most frequent Dutch words, Dutch idiomatic expressions",
            "Learning strategies: Flashcards for Dutch words, vocabulary notebooks",
            "Practice activities: Dutch conversation groups, journaling in Dutch"
          ],
          tip: "Consistency is essential – study Dutch a little each day."
        }
      },
      "Approaching B2": {
        short: "Excellent progress! Focus on academic Dutch vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Dutch Vocabulary",
          description: "You have a solid Dutch foundation. Focus on expanding your register and range.",
          focus: "Academic Dutch vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Dutch news articles, TED talks, academic Dutch texts",
            "Vocabulary building: Academic Dutch word lists, Dutch word families",
            "Practice strategies: Spaced repetition systems, Dutch vocabulary journals",
            "Production practice: Writing Dutch essays, discussions, Dutch presentations"
          ],
          tip: "Quality over quantity – learn fewer Dutch words but learn them deeply."
        }
      },
      "Solid B2": {
        short: "Excellent progress! Focus on academic Dutch vocabulary and complex expressions.",
        detailed: {
          title: "Upper Intermediate Level – Advanced Dutch Vocabulary",
          description: "You have a solid Dutch foundation. Focus on expanding your register and range.",
          focus: "Academic Dutch vocabulary, complex expressions & contextual usage",
          activities: [
            "Reading & Listening: Dutch news articles, TED talks, academic Dutch texts",
            "Vocabulary building: Academic Dutch word lists, Dutch word families",
            "Practice strategies: Spaced repetition systems, Dutch vocabulary journals",
            "Production practice: Writing Dutch essays, discussions, Dutch presentations"
          ],
          tip: "Quality over quantity – learn fewer Dutch words but learn them deeply."
        }
      },
      "Approaching C1": {
        short: "Excellent! Your Dutch vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Dutch Mastery",
          description: "Your Dutch vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Dutch vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Dutch journals, literary works, professional publications",
            "Listening: Academic lectures, conferences, documentaries, Dutch news analysis",
            "Vocabulary expansion: Dutch collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Dutch debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Dutch proficiency exams."
        }
      },
      "Solid C1": {
        short: "Excellent! Your Dutch vocabulary is at an advanced level. Focus on specialized terminology.",
        detailed: {
          title: "Advanced Level – Refining Your Dutch Mastery",
          description: "Your Dutch vocabulary is at an advanced level. Focus on approaching native-like fluency.",
          focus: "Specialized Dutch vocabulary, nuanced expressions & academic precision",
          activities: [
            "Reading: Academic Dutch journals, literary works, professional publications",
            "Listening: Academic lectures, conferences, documentaries, Dutch news analysis",
            "Vocabulary expansion: Dutch collocations, idiomatic expressions, academic terminology",
            "Practice: Engaging in Dutch debates, writing research papers, presentations on complex topics"
          ],
          tip: "Set specific goals such as passing advanced Dutch proficiency exams."
        }
      }
    }
  }
}






