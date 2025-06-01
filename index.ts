// Movie data types
export interface Movie {
  id: string;
  title: string;
  genre: string;
  language: string;
  platform: string;
  views: number;
  bias_label: string;
  poster?: string;
}

// Bias report types
export interface BiasMetric {
  category: string;
  current: number;
  expected: number;
  percentage: number;
}

export interface BiasReport {
  id: string;
  date: string;
  platform: string;
  metrics: {
    genreFairness: BiasMetric;
    languageBalance: BiasMetric;
    ageRepresentation: BiasMetric;
  };
  recommendations: string[];
  overallScore: number;
}

// Chart data types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

// Chat message types
export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}