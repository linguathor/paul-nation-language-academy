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
      "Approaching B1": {
        short: "Focus on building your core vocabulary through extensive reading, listening to English media, and practicing high-frequency words in context.",
        detailed: {
          title: "Intermediate Level – Expanding Your Core Vocabulary",
          description: "You can handle everyday situations and express personal opinions. Focus on building a stronger vocabulary foundation and improving fluency.",
          focus: "Core vocabulary expansion & fluency building",
          activities: [
            "Input sources: Graded readers, news websites (BBC Learning English), educational podcasts",
            "Vocabulary priorities: Focus on most frequent 3,000 words, phrasal verbs, topic-specific vocab",
            "Learning strategies: Use flashcards with example sentences, keep a vocabulary notebook",
            "Practice activities: Join conversation groups, write diary entries, describe daily activities"
          ],
          tip: "Consistency is key – study a little bit every day rather than cramming occasionally."
        }
      },
      "Likely B1": {
        short: "Focus on expanding your academic vocabulary, idiomatic expressions, and context-specific terminology.",
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
      "Solid B1": {
        short: "Focus on expanding your academic vocabulary, idiomatic expressions, and context-specific terminology.",
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
      "Likely B2": {
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
      "Likely C1": {
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
    title: "Test de Vocabulaire Français",
    description: "Testez votre niveau de compétence en français du B1 au C1",
    welcomeText: "Bienvenue à votre test de vocabulaire français !",
    instructions: [
      "Vous répondrez à 30 questions sur le vocabulaire.",
      "Après chaque réponse, vous recevrez un feedback instantané (correct/incorrect) et une explication.",
      "À la fin, vous verrez un résumé de vos résultats et votre niveau estimé.",
      "Selon votre niveau, nous vous fournirons des recommandations pour vos prochaines étapes d'apprentissage.",
      "Nous mettrons continuellement à jour et améliorerons ce test"
    ],
    recommendations: {
      "Below B1": {
        short: "Concentrez-vous sur l'apprentissage des mots les plus fréquents et de la communication de base.",
        detailed: {
          title: "Niveau Élémentaire – Construire vos Bases",
          description: "Vous construisez les bases de votre vocabulaire français. Concentrez-vous sur les mots les plus courants.",
          focus: "Vocabulaire essentiel & communication de base",
          activities: [
            "Vocabulaire prioritaire : Les 1 000-2 000 mots français les plus fréquents",
            "Matériels d'apprentissage : Manuels pour débutants, applications linguistiques",
            "Méthodes de pratique : Utilisez des images et associations visuelles",
            "Pratique de communication : Conversations basiques sur des sujets familiers"
          ],
          tip: "Ne vous inquiétez pas des erreurs – concentrez-vous sur la communication de vos idées."
        }
      },
      // Similar structure for other levels...
      "Approaching B1": {
        short: "Concentrez-vous sur l'expansion de votre vocabulaire de base.",
        detailed: {
          title: "Niveau Intermédiaire – Élargir votre Vocabulaire",
          description: "Vous pouvez gérer les situations quotidiennes. Concentrez-vous sur l'expansion de votre vocabulaire.",
          focus: "Expansion du vocabulaire de base & fluidité",
          activities: [
            "Sources d'entrée : Lecteurs gradués, podcasts éducatifs en français",
            "Priorités vocabulaire : Les 3 000 mots les plus fréquents, verbes à particule",
            "Stratégies d'apprentissage : Cartes mémoire, carnets de vocabulaire",
            "Activités de pratique : Groupes de conversation, journaux intimes"
          ],
          tip: "La régularité est essentielle – étudiez un peu chaque jour."
        }
      },
      "Likely B1": {
        short: "Excellent progrès ! Concentrez-vous sur le vocabulaire académique et les expressions complexes.",
        detailed: {
          title: "Niveau Intermédiaire Supérieur – Vocabulaire Avancé",
          description: "Vous avez une base solide. Concentrez-vous sur l'expansion de votre registre.",
          focus: "Vocabulaire académique, expressions complexes & usage contextuel",
          activities: [
            "Lecture & Écoute : Articles d'actualité, TED talks, textes académiques",
            "Construction du vocabulaire : Liste de mots académiques, familles de mots",
            "Stratégies de pratique : Systèmes de répétition espacée, journaux de vocabulaire",
            "Pratique de production : Rédaction d'essais, discussions, présentations"
          ],
          tip: "Qualité plutôt que quantité – apprenez profondément moins de mots."
        }
      },
      "Solid B1": {
        short: "Excellent progrès ! Concentrez-vous sur le vocabulaire académique et les expressions complexes.",
        detailed: {
          title: "Niveau Intermédiaire Supérieur – Vocabulaire Avancé",
          description: "Vous avez une base solide. Concentrez-vous sur l'expansion de votre registre.",
          focus: "Vocabulaire académique, expressions complexes & usage contextuel",
          activities: [
            "Lecture & Écoute : Articles d'actualité, TED talks, textes académiques",
            "Construction du vocabulaire : Liste de mots académiques, familles de mots",
            "Stratégies de pratique : Systèmes de répétition espacée, journaux de vocabulaire",
            "Pratique de production : Rédaction d'essais, discussions, présentations"
          ],
          tip: "Qualité plutôt que quantité – apprenez profondément moins de mots."
        }
      },
      "Likely B2": {
        short: "Excellent progrès ! Concentrez-vous sur le vocabulaire académique et les expressions complexes.",
        detailed: {
          title: "Niveau Intermédiaire Supérieur – Vocabulaire Avancé",
          description: "Vous avez une base solide. Concentrez-vous sur l'expansion de votre registre.",
          focus: "Vocabulaire académique, expressions complexes & usage contextuel",
          activities: [
            "Lecture & Écoute : Articles d'actualité, TED talks, textes académiques",
            "Construction du vocabulaire : Liste de mots académiques, familles de mots",
            "Stratégies de pratique : Systèmes de répétition espacée, journaux de vocabulaire",
            "Pratique de production : Rédaction d'essais, discussions, présentations"
          ],
          tip: "Qualité plutôt que quantité – apprenez profondément moins de mots."
        }
      },
      "Solid B2": {
        short: "Excellent progrès ! Concentrez-vous sur le vocabulaire académique et les expressions complexes.",
        detailed: {
          title: "Niveau Intermédiaire Supérieur – Vocabulaire Avancé",
          description: "Vous avez une base solide. Concentrez-vous sur l'expansion de votre registre.",
          focus: "Vocabulaire académique, expressions complexes & usage contextuel",
          activities: [
            "Lecture & Écoute : Articles d'actualité, TED talks, textes académiques",
            "Construction du vocabulaire : Liste de mots académiques, familles de mots",
            "Stratégies de pratique : Systèmes de répétition espacée, journaux de vocabulaire",
            "Pratique de production : Rédaction d'essais, discussions, présentations"
          ],
          tip: "Qualité plutôt que quantité – apprenez profondément moins de mots."
        }
      },
      "Likely C1": {
        short: "Excellent ! Votre vocabulaire est à un niveau avancé. Concentrez-vous sur la terminologie spécialisée.",
        detailed: {
          title: "Niveau Avancé – Raffiner votre Maîtrise du Français",
          description: "Votre vocabulaire est à un niveau avancé. Concentrez-vous sur la fluidité native-like.",
          focus: "Vocabulaire spécialisé, expressions nuancées & précision académique",
          activities: [
            "Lecture : Revues académiques, œuvres littéraires, publications professionnelles",
            "Écoute : Conférences académiques, films documentaires, analyses d'actualité",
            "Expansion du vocabulaire : Collocations, expressions idiomatiques, terminologie académique",
            "Pratique : Débats, rédaction d'articles, présentations sur des sujets complexes"
          ],
          tip: "Fixez-vous des objectifs spécifiques comme réussir des tests de compétence avancée."
        }
      },
      "Solid C1": {
        short: "Excellent ! Votre vocabulaire est à un niveau avancé. Concentrez-vous sur la terminologie spécialisée.",
        detailed: {
          title: "Niveau Avancé – Raffiner votre Maîtrise du Français",
          description: "Votre vocabulaire est à un niveau avancé. Concentrez-vous sur la fluidité native-like.",
          focus: "Vocabulaire spécialisé, expressions nuancées & précision académique",
          activities: [
            "Lecture : Revues académiques, œuvres littéraires, publications professionnelles",
            "Écoute : Conférences académiques, films documentaires, analyses d'actualité",
            "Expansion du vocabulaire : Collocations, expressions idiomatiques, terminologie académique",
            "Pratique : Débats, rédaction d'articles, présentations sur des sujets complexes"
          ],
          tip: "Fixez-vous des objectifs spécifiques comme réussir des tests de compétence avancée."
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
    title: "Test de Vocabulario Español",
    description: "Evalúa tu competencia en español de nivel B1 a C1",
    welcomeText: "¡Bienvenido a tu test de vocabulario en español!",
    instructions: [
      "Responderás 30 preguntas sobre vocabulario.",
      "Después de cada respuesta, recibirás retroalimentación instantánea (correcto/incorrecto) y una explicación.",
      "Al final, verás un resumen de tus resultados y tu nivel estimado.",
      "Según tu nivel, te proporcionaremos recomendaciones para tus próximos pasos de aprendizaje.",
      "Actualizaremos y mejoraremos continuamente este test"
    ],
    recommendations: {
      "Below B1": {
        short: "Concéntrate en aprender las palabras más frecuentes y la comunicación básica.",
        detailed: {
          title: "Nivel Elemental – Construyendo tus Bases",
          description: "Estás construyendo las bases de tu vocabulario en español. Concéntrate en las palabras más comunes.",
          focus: "Vocabulario esencial & comunicación básica",
          activities: [
            "Vocabulario prioritario: Las 1,000-2,000 palabras españolas más frecuentes",
            "Materiales de aprendizaje: Libros para principiantes, aplicaciones de idiomas",
            "Métodos de práctica: Usa imágenes y asociaciones visuales",
            "Práctica de comunicación: Conversaciones básicas sobre temas familiares"
          ],
          tip: "No te preocupes por los errores – concéntrate en comunicar tus ideas."
        }
      },
      // Similar structure for other levels...
      "Approaching B1": {
        short: "Concéntrate en expandir tu vocabulario básico.",
        detailed: {
          title: "Nivel Intermedio – Expandiendo tu Vocabulario",
          description: "Puedes manejar situaciones cotidianas. Concéntrate en expandir tu vocabulario.",
          focus: "Expansión del vocabulario básico & fluidez",
          activities: [
            "Fuentes de entrada: Lectores graduados, podcasts educativos en español",
            "Prioridades de vocabulario: Las 3,000 palabras más frecuentes, expresiones idiomáticas",
            "Estrategias de aprendizaje: Tarjetas de memoria, cuadernos de vocabulario",
            "Actividades de práctica: Grupos de conversación, diarios personales"
          ],
          tip: "La regularidad es esencial – estudia un poco cada día."
        }
      },
      "Likely B1": {
        short: "¡Excelente progreso! Concéntrate en vocabulario académico y expresiones complejas.",
        detailed: {
          title: "Nivel Intermedio Superior – Vocabulario Avanzado",
          description: "Tienes una base sólida. Concéntrate en expandir tu registro.",
          focus: "Vocabulario académico, expresiones complejas & uso contextual",
          activities: [
            "Lectura y Escucha: Artículos de noticias, TED talks, textos académicos",
            "Construcción de vocabulario: Lista de palabras académicas, familias de palabras",
            "Estrategias de práctica: Sistemas de repetición espaciada, diarios de vocabulario",
            "Práctica de producción: Redacción de ensayos, discusiones, presentaciones"
          ],
          tip: "Calidad sobre cantidad – aprende profundamente menos palabras."
        }
      },
      "Solid B1": {
        short: "¡Excelente progreso! Concéntrate en vocabulario académico y expresiones complejas.",
        detailed: {
          title: "Nivel Intermedio Superior – Vocabulario Avanzado",
          description: "Tienes una base sólida. Concéntrate en expandir tu registro.",
          focus: "Vocabulario académico, expresiones complejas & uso contextual",
          activities: [
            "Lectura y Escucha: Artículos de noticias, TED talks, textos académicos",
            "Construcción de vocabulario: Lista de palabras académicas, familias de palabras",
            "Estrategias de práctica: Sistemas de repetición espaciada, diarios de vocabulario",
            "Práctica de producción: Redacción de ensayos, discusiones, presentaciones"
          ],
          tip: "Calidad sobre cantidad – aprende profundamente menos palabras."
        }
      },
      "Likely B2": {
        short: "¡Excelente progreso! Concéntrate en vocabulario académico y expresiones complejas.",
        detailed: {
          title: "Nivel Intermedio Superior – Vocabulario Avanzado",
          description: "Tienes una base sólida. Concéntrate en expandir tu registro.",
          focus: "Vocabulario académico, expresiones complejas & uso contextual",
          activities: [
            "Lectura y Escucha: Artículos de noticias, TED talks, textos académicos",
            "Construcción de vocabulario: Lista de palabras académicas, familias de palabras",
            "Estrategias de práctica: Sistemas de repetición espaciada, diarios de vocabulario",
            "Práctica de producción: Redacción de ensayos, discusiones, presentaciones"
          ],
          tip: "Calidad sobre cantidad – aprende profundamente menos palabras."
        }
      },
      "Solid B2": {
        short: "¡Excelente progreso! Concéntrate en vocabulario académico y expresiones complejas.",
        detailed: {
          title: "Nivel Intermedio Superior – Vocabulario Avanzado",
          description: "Tienes una base sólida. Concéntrate en expandir tu registro.",
          focus: "Vocabulario académico, expresiones complejas & uso contextual",
          activities: [
            "Lectura y Escucha: Artículos de noticias, TED talks, textos académicos",
            "Construcción de vocabulario: Lista de palabras académicas, familias de palabras",
            "Estrategias de práctica: Sistemas de repetición espaciada, diarios de vocabulario",
            "Práctica de producción: Redacción de ensayos, discusiones, presentaciones"
          ],
          tip: "Calidad sobre cantidad – aprende profundamente menos palabras."
        }
      },
      "Likely C1": {
        short: "¡Excelente! Tu vocabulario está en nivel avanzado. Concéntrate en terminología especializada.",
        detailed: {
          title: "Nivel Avanzado – Refinando tu Dominio del Español",
          description: "Tu vocabulario está en nivel avanzado. Concéntrate en fluidez nativa.",
          focus: "Vocabulario especializado, expresiones matizadas & precisión académica",
          activities: [
            "Lectura: Revistas académicas, obras literarias, publicaciones profesionales",
            "Escucha: Conferencias académicas, documentales, análisis de noticias",
            "Expansión de vocabulario: Colocaciones, expresiones idiomáticas, terminología académica",
            "Práctica: Debates, redacción de artículos, presentaciones sobre temas complejos"
          ],
          tip: "Establece objetivos específicos como aprobar exámenes de competencia avanzada."
        }
      },
      "Solid C1": {
        short: "¡Excelente! Tu vocabulario está en nivel avanzado. Concéntrate en terminología especializada.",
        detailed: {
          title: "Nivel Avanzado – Refinando tu Dominio del Español",
          description: "Tu vocabulario está en nivel avanzado. Concéntrate en fluidez nativa.",
          focus: "Vocabulario especializado, expresiones matizadas & precisión académica",
          activities: [
            "Lectura: Revistas académicas, obras literarias, publicaciones profesionales",
            "Escucha: Conferencias académicas, documentales, análisis de noticias",
            "Expansión de vocabulario: Colocaciones, expresiones idiomáticas, terminología académica",
            "Práctica: Debates, redacción de artículos, presentaciones sobre temas complejos"
          ],
          tip: "Establece objetivos específicos como aprobar exámenes de competencia avanzada."
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
    title: "Deutscher Wortschatztest",
    description: "Testen Sie Ihre Deutschkenntnisse von B1 bis C1",
    welcomeText: "Willkommen zu Ihrem deutschen Wortschatztest!",
    instructions: [
      "Sie werden 30 Fragen zum Wortschatz beantworten.",
      "Nach jeder Antwort erhalten Sie sofortiges Feedback (richtig/falsch) und eine Erklärung.",
      "Am Ende sehen Sie eine Zusammenfassung Ihrer Ergebnisse und Ihr geschätztes Niveau.",
      "Basierend auf Ihrem Niveau geben wir Ihnen Empfehlungen für Ihre nächsten Lernschritte.",
      "Wir werden diesen Test kontinuierlich aktualisieren und verbessern"
    ],
    recommendations: {
      "Below B1": {
        short: "Konzentrieren Sie sich auf die häufigsten Wörter und grundlegende Kommunikation.",
        detailed: {
          title: "Elementarstufe – Ihre Grundlagen aufbauen",
          description: "Sie bauen Ihre Grundlagen im deutschen Wortschatz auf. Konzentrieren Sie sich auf die häufigsten Wörter.",
          focus: "Wichtiger Wortschatz & grundlegende Kommunikation",
          activities: [
            "Wortschatz-Prioritäten: Die 1.000-2.000 häufigsten deutschen Wörter",
            "Lernmaterialien: Lehrbücher für Anfänger, Sprachlern-Apps",
            "Übungsmethoden: Verwenden Sie Bilder und visuelle Assoziationen",
            "Kommunikationspraxis: Grundlegende Gespräche über vertraute Themen"
          ],
          tip: "Machen Sie sich keine Sorgen über Fehler – konzentrieren Sie sich auf die Kommunikation Ihrer Ideen."
        }
      },
      "Approaching B1": {
        short: "Konzentrieren Sie sich auf die Erweiterung Ihres Grundwortschatzes.",
        detailed: {
          title: "Mittelstufe – Ihren Wortschatz erweitern",
          description: "Sie können alltägliche Situationen bewältigen. Konzentrieren Sie sich auf die Erweiterung Ihres Wortschatzes.",
          focus: "Erweiterung des Grundwortschatzes & flüssiges Sprechen",
          activities: [
            "Eingabequellen: Abgestufte Lesetexte, pädagogische Podcasts auf Deutsch",
            "Wortschatz-Prioritäten: Die 3.000 häufigsten Wörter, idiomatische Ausdrücke",
            "Lernstrategien: Karteikarten, Wortschatz-Hefte",
            "Übungsaktivitäten: Gesprächsgruppen, Tagebücher"
          ],
          tip: "Regelmäßigkeit ist entscheidend – lernen Sie täglich ein wenig."
        }
      },
      "Likely B1": {
        short: "Ausgezeichneter Fortschritt! Konzentrieren Sie sich auf akademischen Wortschatz und komplexe Ausdrücke.",
        detailed: {
          title: "Obere Mittelstufe – Fortgeschrittener Wortschatz",
          description: "Sie haben eine solide Grundlage. Konzentrieren Sie sich auf die Erweiterung Ihres Registers.",
          focus: "Akademischer Wortschatz, komplexe Ausdrücke & kontextueller Gebrauch",
          activities: [
            "Lesen & Hören: Nachrichtenartikel, TED-Vorträge, akademische Texte",
            "Wortschatz-Aufbau: Akademische Wortliste, Wortfamilien",
            "Übungsstrategien: Spaced Repetition Systeme, Wortschatz-Tagebücher",
            "Produktionspraxis: Essays schreiben, Diskussionen, Präsentationen"
          ],
          tip: "Qualität vor Quantität – lernen Sie weniger Wörter gründlicher."
        }
      },
      "Solid B1": {
        short: "Ausgezeichneter Fortschritt! Konzentrieren Sie sich auf akademischen Wortschatz und komplexe Ausdrücke.",
        detailed: {
          title: "Obere Mittelstufe – Fortgeschrittener Wortschatz",
          description: "Sie haben eine solide Grundlage. Konzentrieren Sie sich auf die Erweiterung Ihres Registers.",
          focus: "Akademischer Wortschatz, komplexe Ausdrücke & kontextueller Gebrauch",
          activities: [
            "Lesen & Hören: Nachrichtenartikel, TED-Vorträge, akademische Texte",
            "Wortschatz-Aufbau: Akademische Wortliste, Wortfamilien",
            "Übungsstrategien: Spaced Repetition Systeme, Wortschatz-Tagebücher",
            "Produktionspraxis: Essays schreiben, Diskussionen, Präsentationen"
          ],
          tip: "Qualität vor Quantität – lernen Sie weniger Wörter gründlicher."
        }
      },
      "Likely B2": {
        short: "Ausgezeichneter Fortschritt! Konzentrieren Sie sich auf akademischen Wortschatz und komplexe Ausdrücke.",
        detailed: {
          title: "Obere Mittelstufe – Fortgeschrittener Wortschatz",
          description: "Sie haben eine solide Grundlage. Konzentrieren Sie sich auf die Erweiterung Ihres Registers.",
          focus: "Akademischer Wortschatz, komplexe Ausdrücke & kontextueller Gebrauch",
          activities: [
            "Lesen & Hören: Nachrichtenartikel, TED-Vorträge, akademische Texte",
            "Wortschatz-Aufbau: Akademische Wortliste, Wortfamilien",
            "Übungsstrategien: Spaced Repetition Systeme, Wortschatz-Tagebücher",
            "Produktionspraxis: Essays schreiben, Diskussionen, Präsentationen"
          ],
          tip: "Qualität vor Quantität – lernen Sie weniger Wörter gründlicher."
        }
      },
      "Solid B2": {
        short: "Ausgezeichneter Fortschritt! Konzentrieren Sie sich auf akademischen Wortschatz und komplexe Ausdrücke.",
        detailed: {
          title: "Obere Mittelstufe – Fortgeschrittener Wortschatz",
          description: "Sie haben eine solide Grundlage. Konzentrieren Sie sich auf die Erweiterung Ihres Registers.",
          focus: "Akademischer Wortschatz, komplexe Ausdrücke & kontextueller Gebrauch",
          activities: [
            "Lesen & Hören: Nachrichtenartikel, TED-Vorträge, akademische Texte",
            "Wortschatz-Aufbau: Akademische Wortliste, Wortfamilien",
            "Übungsstrategien: Spaced Repetition Systeme, Wortschatz-Tagebücher",
            "Produktionspraxis: Essays schreiben, Diskussionen, Präsentationen"
          ],
          tip: "Qualität vor Quantität – lernen Sie weniger Wörter gründlicher."
        }
      },
      "Likely C1": {
        short: "Ausgezeichnet! Ihr Wortschatz ist auf fortgeschrittenem Niveau. Konzentrieren Sie sich auf Fachterminologie.",
        detailed: {
          title: "Fortgeschrittenes Niveau – Ihre Deutschkenntnisse verfeinern",
          description: "Ihr Wortschatz ist auf fortgeschrittenem Niveau. Konzentrieren Sie sich auf muttersprachliche Flüssigkeit.",
          focus: "Fachwortschatz, nuancierte Ausdrücke & akademische Präzision",
          activities: [
            "Lesen: Akademische Zeitschriften, literarische Werke, Fachpublikationen",
            "Hören: Akademische Vorträge, Konferenzen, Dokumentarfilme, Nachrichtenanalysen",
            "Wortschatz-Erweiterung: Kollokationen, idiomatische Ausdrücke, akademische Terminologie",
            "Praxis: Debatten, Forschungsarbeiten schreiben, Präsentationen zu komplexen Themen"
          ],
          tip: "Setzen Sie sich spezifische Ziele wie das Bestehen fortgeschrittener Sprachprüfungen."
        }
      },
      "Solid C1": {
        short: "Ausgezeichnet! Ihr Wortschatz ist auf fortgeschrittenem Niveau. Konzentrieren Sie sich auf Fachterminologie.",
        detailed: {
          title: "Fortgeschrittenes Niveau – Ihre Deutschkenntnisse verfeinern",
          description: "Ihr Wortschatz ist auf fortgeschrittenem Niveau. Konzentrieren Sie sich auf muttersprachliche Flüssigkeit.",
          focus: "Fachwortschatz, nuancierte Ausdrücke & akademische Präzision",
          activities: [
            "Lesen: Akademische Zeitschriften, literarische Werke, Fachpublikationen",
            "Hören: Akademische Vorträge, Konferenzen, Dokumentarfilme, Nachrichtenanalysen",
            "Wortschatz-Erweiterung: Kollokationen, idiomatische Ausdrücke, akademische Terminologie",
            "Praxis: Debatten, Forschungsarbeiten schreiben, Präsentationen zu komplexen Themen"
          ],
          tip: "Setzen Sie sich spezifische Ziele wie das Bestehen fortgeschrittener Sprachprüfungen."
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
    title: "中文词汇量测试",
    description: "测试您的中文水平从B1到C1",
    welcomeText: "欢迎参加您的中文词汇量测试！",
    instructions: [
      "您将回答30个词汇问题。",
      "每次回答后，您将获得即时反馈（正确/错误）和解释。",
      "最后，您将看到结果摘要和估计水平。",
      "根据您的水平，我们将为您提供学习建议。",
      "我们将不断更新和改进这个测试"
    ],
    recommendations: {
      "Below B1": {
        short: "专注于学习最常见的词汇和基本沟通。",
        detailed: {
          title: "初级水平 – 建立基础",
          description: "您正在建立中文词汇基础。专注于最常见的词汇。",
          focus: "基本词汇 & 基础沟通",
          activities: [
            "优先词汇：最常见的1,000-2,000个中文词汇",
            "学习材料：初学者教材，语言学习应用",
            "练习方法：使用图片和视觉联想",
            "沟通练习：关于熟悉话题的基本对话"
          ],
          tip: "不要担心错误 – 专注于表达您的想法。"
        }
      },
      "Approaching B1": {
        short: "专注于扩展您的基础词汇。",
        detailed: {
          title: "中级水平 – 扩展词汇",
          description: "您可以处理日常情况。专注于扩展词汇。",
          focus: "基础词汇扩展 & 流畅度",
          activities: [
            "输入来源：分级阅读器，中文教育播客",
            "词汇优先级：最常见的3,000个词汇，习语",
            "学习策略：记忆卡，词汇笔记本",
            "练习活动：对话小组，日记写作"
          ],
          tip: "规律性至关重要 – 每天学习一点。"
        }
      },
      "Likely B1": {
        short: "优秀进步！专注于学术词汇和复杂表达。",
        detailed: {
          title: "中高级水平 – 高级词汇",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "学术词汇，复杂表达 & 上下文使用",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "质量胜于数量 – 深入学习较少的词汇。"
        }
      },
      "Solid B1": {
        short: "优秀进步！专注于学术词汇和复杂表达。",
        detailed: {
          title: "中高级水平 – 高级词汇",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "学术词汇，复杂表达 & 上下文使用",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "质量胜于数量 – 深入学习较少的词汇。"
        }
      },
      "Likely B2": {
        short: "优秀进步！专注于学术词汇和复杂表达。",
        detailed: {
          title: "中高级水平 – 高级词汇",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "学术词汇，复杂表达 & 上下文使用",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "质量胜于数量 – 深入学习较少的词汇。"
        }
      },
      "Solid B2": {
        short: "优秀进步！专注于学术词汇和复杂表达。",
        detailed: {
          title: "中高级水平 – 高级词汇",
          description: "您有扎实的基础。专注于扩展您的表达范围。",
          focus: "学术词汇，复杂表达 & 上下文使用",
          activities: [
            "阅读和听力：新闻文章，TED演讲，学术文本",
            "词汇构建：学术词表，词族",
            "练习策略：间隔重复系统，词汇日记",
            "输出练习：写作论文，参与讨论，演讲"
          ],
          tip: "质量胜于数量 – 深入学习较少的词汇。"
        }
      },
      "Likely C1": {
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
    title: "Test di Vocabolario Italiano",
    description: "Testa la tua competenza in italiano da B1 a C1",
    welcomeText: "Benvenuto al tuo test di vocabolario italiano!",
    instructions: [
      "Risponderai a 30 domande sul vocabolario.",
      "Dopo ogni risposta, riceverai un feedback immediato (corretto/sbagliato) e una spiegazione.",
      "Alla fine, vedrai un riepilogo dei tuoi risultati e il tuo livello stimato.",
      "In base al tuo livello, ti forniremo raccomandazioni per i tuoi prossimi passi di apprendimento.",
      "Aggiorneremo e miglioreremo continuamente questo test"
    ],
    recommendations: {
      "Below B1": {
        short: "Concentrati sulle parole più frequenti e sulla comunicazione di base.",
        detailed: {
          title: "Livello Elementare – Costruire le tue Basi",
          description: "Stai costruendo le basi del tuo vocabolario italiano. Concentrati sulle parole più comuni.",
          focus: "Vocabolario essenziale & comunicazione di base",
          activities: [
            "Vocabolario prioritario: Le 1.000-2.000 parole italiane più frequenti",
            "Materiali di apprendimento: Libri per principianti, app di apprendimento linguistico",
            "Metodi di pratica: Usa immagini e associazioni visive",
            "Pratica di comunicazione: Conversazioni basilari su argomenti familiari"
          ],
          tip: "Non preoccuparti degli errori – concentrati sulla comunicazione delle tue idee."
        }
      },
      "Approaching B1": {
        short: "Concentrati sull'espansione del tuo vocabolario di base.",
        detailed: {
          title: "Livello Intermedio – Espandere il tuo Vocabolario",
          description: "Puoi gestire situazioni quotidiane. Concentrati sull'espansione del vocabolario.",
          focus: "Espansione del vocabolario di base & fluidità",
          activities: [
            "Fonti di input: Lettori graduati, podcast educativi in italiano",
            "Priorità di vocabolario: Le 3.000 parole più frequenti, espressioni idiomatiche",
            "Strategie di apprendimento: Schede di memoria, quaderni di vocabolario",
            "Attività di pratica: Gruppi di conversazione, diari personali"
          ],
          tip: "La regolarità è essenziale – studia un po' ogni giorno."
        }
      },
      "Likely B1": {
        short: "Ottimo progresso! Concentrati sul vocabolario accademico e espressioni complesse.",
        detailed: {
          title: "Livello Intermedio Superiore – Vocabolario Avanzato",
          description: "Hai una base solida. Concentrati sull'espansione del tuo registro.",
          focus: "Vocabolario accademico, espressioni complesse & uso contestuale",
          activities: [
            "Lettura e Ascolto: Articoli di notizie, TED talks, testi accademici",
            "Costruzione del vocabolario: Lista di parole accademiche, famiglie di parole",
            "Strategie di pratica: Sistemi di ripetizione spaziata, diari di vocabolario",
            "Pratica di produzione: Scrivere saggi, discussioni, presentazioni"
          ],
          tip: "Qualità piuttosto che quantità – impara profondamente meno parole."
        }
      },
      "Solid B1": {
        short: "Ottimo progresso! Concentrati sul vocabolario accademico e espressioni complesse.",
        detailed: {
          title: "Livello Intermedio Superiore – Vocabolario Avanzato",
          description: "Hai una base solida. Concentrati sull'espansione del tuo registro.",
          focus: "Vocabolario accademico, espressioni complesse & uso contestuale",
          activities: [
            "Lettura e Ascolto: Articoli di notizie, TED talks, testi accademici",
            "Costruzione del vocabolario: Lista di parole accademiche, famiglie di parole",
            "Strategie di pratica: Sistemi di ripetizione spaziata, diari di vocabolario",
            "Pratica di produzione: Scrivere saggi, discussioni, presentazioni"
          ],
          tip: "Qualità piuttosto che quantità – impara profondamente meno parole."
        }
      },
      "Likely B2": {
        short: "Ottimo progresso! Concentrati sul vocabolario accademico e espressioni complesse.",
        detailed: {
          title: "Livello Intermedio Superiore – Vocabolario Avanzato",
          description: "Hai una base solida. Concentrati sull'espansione del tuo registro.",
          focus: "Vocabolario accademico, espressioni complesse & uso contestuale",
          activities: [
            "Lettura e Ascolto: Articoli di notizie, TED talks, testi accademici",
            "Costruzione del vocabolario: Lista di parole accademiche, famiglie di parole",
            "Strategie di pratica: Sistemi di ripetizione spaziata, diari di vocabolario",
            "Pratica di produzione: Scrivere saggi, discussioni, presentazioni"
          ],
          tip: "Qualità piuttosto che quantità – impara profondamente meno parole."
        }
      },
      "Solid B2": {
        short: "Ottimo progresso! Concentrati sul vocabolario accademico e espressioni complesse.",
        detailed: {
          title: "Livello Intermedio Superiore – Vocabolario Avanzato",
          description: "Hai una base solida. Concentrati sull'espansione del tuo registro.",
          focus: "Vocabolario accademico, espressioni complesse & uso contestuale",
          activities: [
            "Lettura e Ascolto: Articoli di notizie, TED talks, testi accademici",
            "Costruzione del vocabolario: Lista di parole accademiche, famiglie di parole",
            "Strategie di pratica: Sistemi di ripetizione spaziata, diari di vocabolario",
            "Pratica di produzione: Scrivere saggi, discussioni, presentazioni"
          ],
          tip: "Qualità piuttosto che quantità – impara profondamente meno parole."
        }
      },
      "Likely C1": {
        short: "Eccellente! Il tuo vocabolario è a livello avanzato. Concentrati sulla terminologia specializzata.",
        detailed: {
          title: "Livello Avanzato – Raffinare la tua Padronanza dell'Italiano",
          description: "Il tuo vocabolario è a livello avanzato. Concentrati sulla fluidità simile alla lingua madre.",
          focus: "Vocabolario specializzato, espressioni sfumate & precisione accademica",
          activities: [
            "Lettura: Riviste accademiche, opere letterarie, pubblicazioni professionali",
            "Ascolto: Conferenze accademiche, documentari, analisi di notizie",
            "Espansione del vocabolario: Collocazioni, espressioni idiomatiche, terminologia accademica",
            "Pratica: Dibattiti, scrivere articoli di ricerca, presentazioni su argomenti complessi"
          ],
          tip: "Fissati obiettivi specifici come superare esami di competenza avanzata."
        }
      },
      "Solid C1": {
        short: "Eccellente! Il tuo vocabolario è a livello avanzato. Concentrati sulla terminologia specializzata.",
        detailed: {
          title: "Livello Avanzato – Raffinare la tua Padronanza dell'Italiano",
          description: "Il tuo vocabolario è a livello avanzato. Concentrati sulla fluidità simile alla lingua madre.",
          focus: "Vocabolario specializzato, espressioni sfumate & precisione accademica",
          activities: [
            "Lettura: Riviste accademiche, opere letterarie, pubblicazioni professionali",
            "Ascolto: Conferenze accademiche, documentari, analisi di notizie",
            "Espansione del vocabolario: Collocazioni, espressioni idiomatiche, terminologia accademica",
            "Pratica: Dibattiti, scrivere articoli di ricerca, presentazioni su argomenti complessi"
          ],
          tip: "Fissati obiettivi specifici come superare esami di competenza avanzata."
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
    title: "日本語ボキャブラリーテスト",
    description: "B1からC1までの日本語能力をテスト",
    welcomeText: "日本語ボキャブラリーテストへようこそ！",
    instructions: [
      "語彙に関する30問に答えます。",
      "各回答後に即時フィードバック（正解/不正解）と説明が表示されます。",
      "最後に結果の概要と推定レベルが表示されます。",
      "レベルに応じて、次の学習ステップに関する推奨事項を提供します。",
      "このテストを継続的に更新・改善していきます"
    ],
    recommendations: {
      "Below B1": {
        short: "最も頻繁な単語と基本的なコミュニケーションに集中してください。",
        detailed: {
          title: "初級レベル – 基礎を築く",
          description: "日本語の語彙の基礎を築いています。最頻出の単語に集中してください。",
          focus: "必須語彙 & 基本コミュニケーション",
          activities: [
            "優先語彙：最も頻繁な1,000-2,000の日本語単語",
            "学習教材：初心者向け教科書、言語学習アプリ",
            "練習方法：画像と視覚的連想を使用",
            "コミュニケーション練習：馴染みのあるトピックについての基本会話"
          ],
          tip: "間違いを心配しないでください – あなたの考えを伝えることに集中してください。"
        }
      },
      "Approaching B1": {
        short: "基礎語彙の拡張に集中してください。",
        detailed: {
          title: "中級レベル – 語彙を拡張する",
          description: "日常的な状況を扱えます。語彙の拡張に集中してください。",
          focus: "基礎語彙の拡張 & 流暢さ",
          activities: [
            "インプットソース：段階的リーダー、日本語教育ポッドキャスト",
            "語彙優先事項：最も頻繁な3,000語、慣用表現",
            "学習戦略：記憶カード、語彙ノート",
            "練習活動：会話グループ、日記"
          ],
          tip: "規則性が重要 – 毎日少しずつ学習してください。"
        }
      },
      "Likely B1": {
        short: "優れた進歩！ 学術語彙と複雑な表現に集中してください。",
        detailed: {
          title: "中上級レベル – 上級語彙",
          description: "しっかりした基礎があります。表現範囲の拡張に集中してください。",
          focus: "学術語彙、複雑な表現 & 文脈的用法",
          activities: [
            "読解・聴解：ニュース記事、TEDトーク、学術テキスト",
            "語彙構築：学術語彙リスト、単語族",
            "練習戦略：間隔反復システム、語彙日記",
            "産出練習：エッセイを書く、議論に参加、プレゼンテーション"
          ],
          tip: "量より質 – 少ない単語を深く学習してください。"
        }
      },
      "Solid B1": {
        short: "優れた進歩！ 学術語彙と複雑な表現に集中してください。",
        detailed: {
          title: "中上級レベル – 上級語彙",
          description: "しっかりした基礎があります。表現範囲の拡張に集中してください。",
          focus: "学術語彙、複雑な表現 & 文脈的用法",
          activities: [
            "読解・聴解：ニュース記事、TEDトーク、学術テキスト",
            "語彙構築：学術語彙リスト、単語族",
            "練習戦略：間隔反復システム、語彙日記",
            "産出練習：エッセイを書く、議論に参加、プレゼンテーション"
          ],
          tip: "量より質 – 少ない単語を深く学習してください。"
        }
      },
      "Likely B2": {
        short: "優れた進歩！ 学術語彙と複雑な表現に集中してください。",
        detailed: {
          title: "中上級レベル – 上級語彙",
          description: "しっかりした基礎があります。表現範囲の拡張に集中してください。",
          focus: "学術語彙、複雑な表現 & 文脈的用法",
          activities: [
            "読解・聴解：ニュース記事、TEDトーク、学術テキスト",
            "語彙構築：学術語彙リスト、単語族",
            "練習戦略：間隔反復システム、語彙日記",
            "産出練習：エッセイを書く、議論に参加、プレゼンテーション"
          ],
          tip: "量より質 – 少ない単語を深く学習してください。"
        }
      },
      "Solid B2": {
        short: "優れた進歩！ 学術語彙と複雑な表現に集中してください。",
        detailed: {
          title: "中上級レベル – 上級語彙",
          description: "しっかりした基礎があります。表現範囲の拡張に集中してください。",
          focus: "学術語彙、複雑な表現 & 文脈的用法",
          activities: [
            "読解・聴解：ニュース記事、TEDトーク、学術テキスト",
            "語彙構築：学術語彙リスト、単語族",
            "練習戦略：間隔反復システム、語彙日記",
            "産出練習：エッセイを書く、議論に参加、プレゼンテーション"
          ],
          tip: "量より質 – 少ない単語を深く学習してください。"
        }
      },
      "Likely C1": {
        short: "素晴らしい！ あなたの語彙は上級レベルです。専門用語に集中してください。",
        detailed: {
          title: "上級レベル – 日本語の習得を洗練する",
          description: "あなたの語彙は上級レベルです。母語に近い流暢さに集中してください。",
          focus: "専門語彙、微妙な表現 & 学術的正確性",
          activities: [
            "読解：学術雑誌、文学作品、専門出版物",
            "聴解：学術講演、専門会議、ドキュメンタリー、ニュース分析",
            "語彙拡張：コロケーション、慣用表現、成句、学術用語",
            "練習：討論に参加、研究論文を書く、複雑なトピックについてのプレゼンテーション"
          ],
          tip: "上級日本語能力試験に合格するなどの具体的な目標を設定してください。"
        }
      },
      "Solid C1": {
        short: "素晴らしい！ あなたの語彙は上級レベルです。専門用語に集中してください。",
        detailed: {
          title: "上級レベル – 日本語の習得を洗練する",
          description: "あなたの語彙は上級レベルです。母語に近い流暢さに集中してください。",
          focus: "専門語彙、微妙な表現 & 学術的正確性",
          activities: [
            "読解：学術雑誌、文学作品、専門出版物",
            "聴解：学術講演、専門会議、ドキュメンタリー、ニュース分析",
            "語彙拡張：コロケーション、慣用表現、成句、学術用語",
            "練習：討論に参加、研究論文を書く、複雑なトピックについてのプレゼンテーション"
          ],
          tip: "上級日本語能力試験に合格するなどの具体的な目標を設定してください。"
        }
      }
    }
  },

  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    title: "Teste de Vocabulário Português",
    description: "Teste sua competência em português do B1 ao C1",
    welcomeText: "Bem-vindo ao seu teste de vocabulário português!",
    instructions: [
      "Você responderá 30 perguntas sobre vocabulário.",
      "Após cada resposta, você receberá feedback imediato (correto/incorreto) e uma explicação.",
      "No final, você verá um resumo dos seus resultados e seu nível estimado.",
      "Com base no seu nível, forneceremos recomendações para seus próximos passos de aprendizagem.",
      "Atualizaremos e melhoraremos continuamente este teste"
    ],
    recommendations: {
      "Below B1": {
        short: "Concentre-se nas palavras mais frequentes e na comunicação básica.",
        detailed: {
          title: "Nível Elementar – Construindo suas Bases",
          description: "Você está construindo as bases do seu vocabulário português. Concentre-se nas palavras mais comuns.",
          focus: "Vocabulário essencial & comunicação básica",
          activities: [
            "Vocabulário prioritário: As 1.000-2.000 palavras portuguesas mais frequentes",
            "Materiais de aprendizagem: Livros para iniciantes, aplicativos de aprendizagem de idiomas",
            "Métodos de prática: Use imagens e associações visuais",
            "Prática de comunicação: Conversas básicas sobre tópicos familiares"
          ],
          tip: "Não se preocupe com erros – concentre-se em comunicar suas ideias."
        }
      },
      "Approaching B1": {
        short: "Concentre-se na expansão do seu vocabulário básico.",
        detailed: {
          title: "Nível Intermediário – Expandindo seu Vocabulário",
          description: "Você pode lidar com situações cotidianas. Concentre-se na expansão do vocabulário.",
          focus: "Expansão do vocabulário básico & fluência",
          activities: [
            "Fontes de entrada: Leitores graduados, podcasts educacionais em português",
            "Prioridades de vocabulário: As 3.000 palavras mais frequentes, expressões idiomáticas",
            "Estratégias de aprendizagem: Cartões de memória, cadernos de vocabulário",
            "Atividades de prática: Grupos de conversa, diários pessoais"
          ],
          tip: "A regularidade é essencial – estude um pouco todos os dias."
        }
      },
      "Likely B1": {
        short: "Excelente progresso! Concentre-se no vocabulário acadêmico e expressões complexas.",
        detailed: {
          title: "Nível Intermediário Superior – Vocabulário Avançado",
          description: "Você tem uma base sólida. Concentre-se na expansão do seu registro.",
          focus: "Vocabulário acadêmico, expressões complexas & uso contextual",
          activities: [
            "Leitura e Escuta: Artigos de notícias, TED talks, textos acadêmicos",
            "Construção de vocabulário: Lista de palavras acadêmicas, famílias de palavras",
            "Estratégias de prática: Sistemas de repetição espaçada, diários de vocabulário",
            "Prática de produção: Escrever ensaios, discussões, apresentações"
          ],
          tip: "Qualidade em vez de quantidade – aprenda menos palavras mais profundamente."
        }
      },
      "Solid B1": {
        short: "Excelente progresso! Concentre-se no vocabulário acadêmico e expressões complexas.",
        detailed: {
          title: "Nível Intermediário Superior – Vocabulário Avançado",
          description: "Você tem uma base sólida. Concentre-se na expansão do seu registro.",
          focus: "Vocabulário acadêmico, expressões complexas & uso contextual",
          activities: [
            "Leitura e Escuta: Artigos de notícias, TED talks, textos acadêmicos",
            "Construção de vocabulário: Lista de palavras acadêmicas, famílias de palavras",
            "Estratégias de prática: Sistemas de repetição espaçada, diários de vocabulário",
            "Prática de produção: Escrever ensaios, discussões, apresentações"
          ],
          tip: "Qualidade em vez de quantidade – aprenda menos palavras mais profundamente."
        }
      },
      "Likely B2": {
        short: "Excelente progresso! Concentre-se no vocabulário acadêmico e expressões complexas.",
        detailed: {
          title: "Nível Intermediário Superior – Vocabulário Avançado",
          description: "Você tem uma base sólida. Concentre-se na expansão do seu registro.",
          focus: "Vocabulário acadêmico, expressões complexas & uso contextual",
          activities: [
            "Leitura e Escuta: Artigos de notícias, TED talks, textos acadêmicos",
            "Construção de vocabulário: Lista de palavras acadêmicas, famílias de palavras",
            "Estratégias de prática: Sistemas de repetição espaçada, diários de vocabulário",
            "Prática de produção: Escrever ensaios, discussões, apresentações"
          ],
          tip: "Qualidade em vez de quantidade – aprenda menos palavras mais profundamente."
        }
      },
      "Solid B2": {
        short: "Excelente progresso! Concentre-se no vocabulário acadêmico e expressões complexas.",
        detailed: {
          title: "Nível Intermediário Superior – Vocabulário Avançado",
          description: "Você tem uma base sólida. Concentre-se na expansão do seu registro.",
          focus: "Vocabulário acadêmico, expressões complexas & uso contextual",
          activities: [
            "Leitura e Escuta: Artigos de notícias, TED talks, textos acadêmicos",
            "Construção de vocabulário: Lista de palavras acadêmicas, famílias de palavras",
            "Estratégias de prática: Sistemas de repetição espaçada, diários de vocabulário",
            "Prática de produção: Escrever ensaios, discussões, apresentações"
          ],
          tip: "Qualidade em vez de quantidade – aprenda menos palavras mais profundamente."
        }
      },
      "Likely C1": {
        short: "Excelente! Seu vocabulário está em nível avançado. Concentre-se na terminologia especializada.",
        detailed: {
          title: "Nível Avançado – Refinando seu Domínio do Português",
          description: "Seu vocabulário está em nível avançado. Concentre-se na fluência nativa.",
          focus: "Vocabulário especializado, expressões matizadas & precisão acadêmica",
          activities: [
            "Leitura: Revistas acadêmicas, obras literárias, publicações profissionais",
            "Escuta: Conferências acadêmicas, documentários, análises de notícias",
            "Expansão de vocabulário: Colocações, expressões idiomáticas, terminologia acadêmica",
            "Prática: Debates, escrever artigos de pesquisa, apresentações sobre tópicos complexos"
          ],
          tip: "Defina objetivos específicos como passar em exames de competência avançada."
        }
      },
      "Solid C1": {
        short: "Excelente! Seu vocabulário está em nível avançado. Concentre-se na terminologia especializada.",
        detailed: {
          title: "Nível Avançado – Refinando seu Domínio do Português",
          description: "Seu vocabulário está em nível avançado. Concentre-se na fluência nativa.",
          focus: "Vocabulário especializado, expressões matizadas & precisão acadêmica",
          activities: [
            "Leitura: Revistas acadêmicas, obras literárias, publicações profissionais",
            "Escuta: Conferências acadêmicas, documentários, análises de notícias",
            "Expansão de vocabulário: Colocações, expressões idiomáticas, terminologia acadêmica",
            "Prática: Debates, escrever artigos de pesquisa, apresentações sobre tópicos complexos"
          ],
          tip: "Defina objetivos específicos como passar em exames de competência avançada."
        }
      }
    }
  },

  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    title: "Русский Тест Словарного Запаса",
    description: "Проверьте свою компетентность в русском языке с B1 по C1",
    welcomeText: "Добро пожаловать на ваш тест словарного запаса русского языка!",
    instructions: [
      "You'll answer 30 questions on vocabulary.",
      "After each answer, you'll get instant feedback (correct/incorrect) and a rationale.",
      "At the end, you'll see a summary of your results and an estimated proficiency level.",
      "Based on your level, we'll provide recommendations for your next steps in learning.",
      "We will continuously update and improve this test"
    ],
    recommendations: {
      "Below B1": {
        short: "Сосредоточьтесь на наиболее частых словах и базовом общении.",
        detailed: {
          title: "Элементарный Уровень – Строим ваши Основы",
          description: "Вы строите основы своего словарного запаса русского языка. Сосредоточьтесь на наиболее частых словах.",
          focus: "Основной словарный запас & базовое общение",
          activities: [
            "Приоритетный словарный запас: 1,000-2,000 наиболее частых русских слов",
            "Материалы для обучения: Учебники для начинающих, приложения для изучения языков",
            "Методы практики: Используйте изображения и визуальные ассоциации",
            "Практика общения: Базовые разговоры на знакомые темы"
          ],
          tip: "Не беспокойтесь об ошибках – сосредоточьтесь на выражении своих мыслей."
        }
      },
      "Approaching B1": {
        short: "Сосредоточьтесь на расширении вашего базового словарного запаса.",
        detailed: {
          title: "Средний Уровень – Расширяем ваш Словарный Запас",
          description: "Вы можете справляться с повседневными ситуациями. Сосредоточьтесь на расширении словарного запаса.",
          focus: "Расширение базового словарного запаса & беглость речи",
          activities: [
            "Источники ввода: Градуированные читатели, образовательные подкасты на русском",
            "Приоритеты словарного запаса: 3,000 наиболее частых слов, идиоматические выражения",
            "Стратегии обучения: Карточки памяти, тетради словарного запаса",
            "Практические занятия: Группы общения, личные дневники"
          ],
          tip: "Регулярность важна – учитесь понемногу каждый день."
        }
      },
      "Likely B1": {
        short: "Отличный прогресс! Сосредоточьтесь на академическом словарном запасе и сложных выражениях.",
        detailed: {
          title: "Выше Среднего Уровня – Продвинутый Словарный Запас",
          description: "У вас есть прочная основа. Сосредоточьтесь на расширении вашего регистра.",
          focus: "Академический словарный запас, сложные выражения & контекстуальное использование",
          activities: [
            "Чтение и Слушание: Статьи новостей, TED выступления, академические тексты",
            "Построение словарного запаса: Академический список слов, семейства слов",
            "Стратегии практики: Системы интервального повторения, дневники словарного запаса",
            "Практика продукции: Писать эссе, участвовать в обсуждениях, презентации"
          ],
          tip: "Качество, а не количество – глубоко изучайте меньше слов."
        }
      },
      "Solid B1": {
        short: "Отличный прогресс! Сосредоточьтесь на академическом словарном запасе и сложных выражениях.",
        detailed: {
          title: "Выше Среднего Уровня – Продвинутый Словарный Запас",
          description: "У вас есть прочная основа. Сосредоточьтесь на расширении вашего регистра.",
          focus: "Академический словарный запас, сложные выражения & контекстуальное использование",
          activities: [
            "Чтение и Слушание: Статьи новостей, TED выступления, академические тексты",
            "Построение словарного запаса: Академический список слов, семейства слов",
            "Стратегии практики: Системы интервального повторения, дневники словарного запаса",
            "Практика продукции: Писать эссе, участвовать в обсуждениях, презентации"
          ],
          tip: "Качество, а не количество – глубоко изучайте меньше слов."
        }
      },
      "Likely B2": {
        short: "Отличный прогресс! Сосредоточьтесь на академическом словарном запасе и сложных выражениях.",
        detailed: {
          title: "Выше Среднего Уровня – Продвинутый Словарный Запас",
          description: "У вас есть прочная основа. Сосредоточьтесь на расширении вашего регистра.",
          focus: "Академический словарный запас, сложные выражения & контекстуальное использование",
          activities: [
            "Чтение и Слушание: Статьи новостей, TED выступления, академические тексты",
            "Построение словарного запаса: Академический список слов, семейства слов",
            "Стратегии практики: Системы интервального повторения, дневники словарного запаса",
            "Практика продукции: Писать эссе, участвовать в обсуждениях, презентации"
          ],
          tip: "Качество, а не количество – глубоко изучайте меньше слов."
        }
      },
      "Solid B2": {
        short: "Отличный прогресс! Сосредоточьтесь на академическом словарном запасе и сложных выражениях.",
        detailed: {
          title: "Выше Среднего Уровня – Продвинутый Словарный Запас",
          description: "У вас есть прочная основа. Сосредоточьтесь на расширении вашего регистра.",
          focus: "Академический словарный запас, сложные выражения & контекстуальное использование",
          activities: [
            "Чтение и Слушание: Статьи новостей, TED выступления, академические тексты",
            "Построение словарного запаса: Академический список слов, семейства слов",
            "Стратегии практики: Системы интервального повторения, дневники словарного запаса",
            "Практика продукции: Писать эссе, участвовать в обсуждениях, презентации"
          ],
          tip: "Качество, а не количество – глубоко изучайте меньше слов."
        }
      },
      "Likely C1": {
        short: "Отлично! Ваш словарный запас находится на продвинутом уровне. Сосредоточьтесь на специализированной терминологии.",
        detailed: {
          title: "Продвинутый Уровень – Совершенствуем ваше Владение Русским",
          description: "Ваш словарный запас находится на продвинутом уровне. Сосредоточьтесь на беглости, близкой к родной.",
          focus: "Специализированный словарный запас, нюансированные выражения & академическая точность",
          activities: [
            "Чтение: Академические журналы, литературные произведения, профессиональные публикации",
            "Слушание: Академические лекции, конференции, документальные фильмы, анализ новостей",
            "Расширение словарного запаса: Коллокации, идиоматические выражения, академическая терминология",
            "Практика: Участвовать в дебатах, писать исследовательские статьи, презентации по сложным темам"
          ],
          tip: "Ставьте конкретные цели, такие как сдача продвинутых экзаменов по русскому языку."
        }
      },
      "Solid C1": {
        short: "Отлично! Ваш словарный запас находится на продвинутом уровне. Сосредоточьтесь на специализированной терминологии.",
        detailed: {
          title: "Продвинутый Уровень – Совершенствуем ваше Владение Русским",
          description: "Ваш словарный запас находится на продвинутом уровне. Сосредоточьтесь на беглости, близкой к родной.",
          focus: "Специализированный словарный запас, нюансированные выражения & академическая точность",
          activities: [
            "Чтение: Академические журналы, литературные произведения, профессиональные публикации",
            "Слушание: Академические лекции, конференции, документальные фильмы, анализ новостей",
            "Расширение словарного запаса: Коллокации, идиоматические выражения, академическая терминология",
            "Практика: Участвовать в дебатах, писать исследовательские статьи, презентации по сложным темам"
          ],
          tip: "Ставьте конкретные цели, такие как сдача продвинутых экзаменов по русскому языку."
        }
      }
    }
  },

  nl: {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    title: "Nederlandse Woordenschat Test",
    description: "Test uw competentie in het Nederlands van B1 tot C1",
    welcomeText: "Welkom bij uw Nederlandse woordenschat test!",
    instructions: [
      "U beantwoordt 30 vragen over woordenschat.",
      "Na elk antwoord ontvangt u directe feedback (correct/onjuist) en een uitleg.",
      "Aan het einde ziet u een samenvatting van uw resultaten en uw geschatte niveau.",
      "Op basis van uw niveau geven wij aanbevelingen voor uw volgende leerstappen.",
      "Wij zullen deze test continu bijwerken en verbeteren"
    ],
    recommendations: {
      "Below B1": {
        short: "Concentreer u op de meest frequente woorden en basiscommunicatie.",
        detailed: {
          title: "Beginnersniveau – Uw Grondslagen Bouwen",
          description: "U bouwt de grondslagen van uw Nederlandse woordenschat op. Concentreer u op de meest voorkomende woorden.",
          focus: "Essentiële woordenschat & basiscommunicatie",
          activities: [
            "Prioritaire woordenschat: De 1.000-2.000 meest frequente Nederlandse woorden",
            "Leermaterialen: Boeken voor beginners, taal leer apps",
            "Praktijkmethoden: Gebruik beelden en visuele associaties",
            "Communicatiepraktijk: Basisgesprekken over vertrouwde onderwerpen"
          ],
          tip: "Maak u geen zorgen over fouten – concentreer u op het uitdrukken van uw ideeën."
        }
      },
      "Approaching B1": {
        short: "Concentreer u op de uitbreiding van uw basiswoordenschat.",
        detailed: {
          title: "Gemiddeld Niveau – Uw Woordenschat Uitbreiden",
          description: "U kunt dagelijkse situaties aan. Concentreer u op de uitbreiding van de woordenschat.",
          focus: "Uitbreiding van basiswoordenschat & vloeiendheid",
          activities: [
            "Invoersbronnen: Gestrede lezers, educatieve podcasts in het Nederlands",
            "Woordenschatprioriteiten: De 3.000 meest frequente woorden, idiomatische uitdrukkingen",
            "Leerstategieën: Geheugenkaarten, woordenschatnotitieboeken",
            "Praktijkactiviteiten: Gespreksgroepen, persoonlijke dagboeken"
          ],
          tip: "Regelmaat is essentieel – studeer elke dag een beetje."
        }
      },
      "Likely B1": {
        short: "Uitstekende vooruitgang! Concentreer u op academische woordenschat en complexe uitdrukkingen.",
        detailed: {
          title: "Boven Gemiddeld Niveau – Geavanceerde Woordenschat",
          description: "U heeft een solide basis. Concentreer u op de uitbreiding van uw register.",
          focus: "Academische woordenschat, complexe uitdrukkingen & contextueel gebruik",
          activities: [
            "Lezen en Luisteren: Nieuwsartikelen, TED talks, academische teksten",
            "Woordenschatopbouw: Academische woordenlijst, woordfamilies",
            "Praktijkstrategieën: Gespreide herhalingssystemen, woordenschatdagboeken",
            "Productiepraktijk: Essays schrijven, deelname aan discussies, presentaties"
          ],
          tip: "Kwaliteit in plaats van kwantiteit – leer minder woorden dieper."
        }
      },
      "Solid B1": {
        short: "Uitstekende vooruitgang! Concentreer u op academische woordenschat en complexe uitdrukkingen.",
        detailed: {
          title: "Boven Gemiddeld Niveau – Geavanceerde Woordenschat",
          description: "U heeft een solide basis. Concentreer u op de uitbreiding van uw register.",
          focus: "Academische woordenschat, complexe uitdrukkingen & contextueel gebruik",
          activities: [
            "Lezen en Luisteren: Nieuwsartikelen, TED talks, academische teksten",
            "Woordenschatopbouw: Academische woordenlijst, woordfamilies",
            "Praktijkstrategieën: Gespreide herhalingssystemen, woordenschatdagboeken",
            "Productiepraktijk: Essays schrijven, deelname aan discussies, presentaties"
          ],
          tip: "Kwaliteit in plaats van kwantiteit – leer minder woorden dieper."
        }
      },
      "Likely B2": {
        short: "Uitstekende vooruitgang! Concentreer u op academische woordenschat en complexe uitdrukkingen.",
        detailed: {
          title: "Boven Gemiddeld Niveau – Geavanceerde Woordenschat",
          description: "U heeft een solide basis. Concentreer u op de uitbreiding van uw register.",
          focus: "Academische woordenschat, complexe uitdrukkingen & contextueel gebruik",
          activities: [
            "Lezen en Luisteren: Nieuwsartikelen, TED talks, academische teksten",
            "Woordenschatopbouw: Academische woordenlijst, woordfamilies",
            "Praktijkstrategieën: Gespreide herhalingssystemen, woordenschatdagboeken",
            "Productiepraktijk: Essays schrijven, deelname aan discussies, presentaties"
          ],
          tip: "Kwaliteit in plaats van kwantiteit – leer minder woorden dieper."
        }
      },
      "Solid B2": {
        short: "Uitstekende vooruitgang! Concentreer u op academische woordenschat en complexe uitdrukkingen.",
        detailed: {
          title: "Boven Gemiddeld Niveau – Geavanceerde Woordenschat",
          description: "U heeft een solide basis. Concentreer u op de uitbreiding van uw register.",
          focus: "Academische woordenschat, complexe uitdrukkingen & contextueel gebruik",
          activities: [
            "Lezen en Luisteren: Nieuwsartikelen, TED talks, academische teksten",
            "Woordenschatopbouw: Academische woordenlijst, woordfamilies",
            "Praktijkstrategieën: Gespreide herhalingssystemen, woordenschatdagboeken",
            "Productiepraktijk: Essays schrijven, deelname aan discussies, presentaties"
          ],
          tip: "Kwaliteit in plaats van kwantiteit – leer minder woorden dieper."
        }
      },
      "Likely C1": {
        short: "Uitstekend! Uw woordenschat is op gevorderd niveau. Concentreer u op gespecialiseerde terminologie.",
        detailed: {
          title: "Gevorderd Niveau – Uw Beheersing van het Nederlands Verfijnen",
          description: "Uw woordenschat is op gevorderd niveau. Concentreer u op moedertaalachtige vloeiendheid.",
          focus: "Gespecialiseerde woordenschat, genuanceerde uitdrukkingen & academische precisie",
          activities: [
            "Lezen: Academische tijdschriften, literaire werken, professionele publicaties",
            "Luisteren: Academische lezingen, conferenties, documentaires, nieuwsanalyses",
            "Woordenschatuitbreiding: Collocaties, idiomatische uitdrukkingen, academische terminologie",
            "Praktijk: Deelnemen aan debatten, onderzoekspapers schrijven, presentaties over complexe onderwerpen"
          ],
          tip: "Stel specifieke doelen zoals slagen voor gevorderde Nederlandse competentie-examens."
        }
      },
      "Solid C1": {
        short: "Uitstekend! Uw woordenschat is op gevorderd niveau. Concentreer u op gespecialiseerde terminologie.",
        detailed: {
          title: "Gevorderd Niveau – Uw Beheersing van het Nederlands Verfijnen",
          description: "Uw woordenschat is op gevorderd niveau. Concentreer u op moedertaalachtige vloeiendheid.",
          focus: "Gespecialiseerde woordenschat, genuanceerde uitdrukkingen & academische precisie",
          activities: [
            "Lezen: Academische tijdschriften, literaire werken, professionele publicaties",
            "Luisteren: Academische lezingen, conferenties, documentaires, nieuwsanalyses",
            "Woordenschatuitbreiding: Collocaties, idiomatische uitdrukkingen, academische terminologie",
            "Praktijk: Deelnemen aan debatten, onderzoekspapers schrijven, presentaties over complexe onderwerpen"
          ],
          tip: "Stel specifieke doelen zoals slagen voor gevorderde Nederlandse competentie-examens."
        }
      }
    }
  }
}
