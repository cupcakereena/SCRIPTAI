import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Movie, BiasReport, ChatMessage } from '../types';
import { sampleMovies, sampleBiasReports } from '../data/sampleData';

interface DataContextType {
  movies: Movie[];
  biasReports: BiasReport[];
  chatMessages: ChatMessage[];
  selectedMovieId: string | null;
  selectedReportId: string | null;
  isLoading: boolean;
  uploadData: (data: any) => void;
  analyzeContent: () => void;
  selectMovie: (id: string) => void;
  selectReport: (id: string) => void;
  addChatMessage: (message: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [biasReports, setBiasReports] = useState<BiasReport[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Load sample data on initial mount
  useEffect(() => {
    setMovies(sampleMovies);
    setBiasReports(sampleBiasReports);
    // Add welcome message for the chatbot
    setChatMessages([
      {
        id: '1',
        sender: 'ai',
        text: 'Hello! I\'m the ScriptAI assistant. Ask me anything about content bias in your recommendations!',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const uploadData = (data: any) => {
    setIsLoading(true);
    // Simulating data processing delay
    setTimeout(() => {
      // In a real application, this would process the uploaded CSV
      // For now, just add it to our existing data
      setMovies([...sampleMovies, ...(data.movies || [])]);
      setIsLoading(false);
    }, 1500);
  };

  const analyzeContent = () => {
    setIsLoading(true);
    // Simulating analysis delay
    setTimeout(() => {
      // In a real application, this would call the backend API
      // For now, just use our sample data
      setIsLoading(false);
    }, 2000);
  };

  const selectMovie = (id: string) => {
    setSelectedMovieId(id);
  };

  const selectReport = (id: string) => {
    setSelectedReportId(id);
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('english bias')) {
      return 'Based on our analysis, Netflix shows a 23% higher representation of English content compared to the expected balance. YouTube has a more diverse language distribution with only 12% English overrepresentation.';
    }
    
    if (message.includes('improve') || message.includes('fairness')) {
      return 'To improve recommendation fairness, consider:\n1. Reweighting your algorithm to boost underrepresented languages\n2. Implementing a diversity factor in your ranking system\n3. Creating separate recommendation tracks for different demographic groups\n4. Regularly monitoring and adjusting content distribution metrics';
    }
    
    if (message.includes('genre') || message.includes('distribution')) {
      return 'Our analysis shows that:\n- Sci-Fi and Action genres are overrepresented by 31% and 27%\n- Documentary and Foreign films are underrepresented by 43% and 38%\n- Drama and Comedy maintain relatively balanced distribution\n\nThis indicates a significant bias in the recommendation system favoring high-action content.';
    }
    
    if (message.includes('language') || message.includes('languages')) {
      return 'Current language distribution analysis:\n- English: 45% (target: 35%)\n- Hindi: 12% (target: 18%)\n- Spanish: 18% (target: 20%)\n- Korean: 10% (target: 12%)\n- Others: 15% (target: 15%)\n\nEnglish content is overrepresented while regional languages need more visibility.';
    }
    
    if (message.includes('platform') || message.includes('platforms')) {
      return 'Platform-specific bias analysis:\n- Netflix: 73.9% fairness score (main issue: language diversity)\n- YouTube: 77.1% fairness score (strongest in language diversity)\n- Amazon Prime: 76.3% fairness score (needs improvement in non-English content)\n\nYouTube currently shows the most balanced content distribution.';
    }

    return 'I understand you\'re asking about content bias. Could you be more specific? You can ask about:\n- Language distribution and bias\n- Genre representation\n- Platform-specific analysis\n- Recommendations for improving fairness';
  };

  const addChatMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: message,
      timestamp: new Date(),
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Generate and add AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: generateAIResponse(message),
        timestamp: new Date(),
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const value = {
    movies,
    biasReports,
    chatMessages,
    selectedMovieId,
    selectedReportId,
    isLoading,
    uploadData,
    analyzeContent,
    selectMovie,
    selectReport,
    addChatMessage,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}