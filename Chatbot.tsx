import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  IconButton, 
  Paper, 
  Divider,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Send, HelpCircle, MessageSquare } from 'lucide-react';
import { useData } from '../context/DataContext';
import ChatMessage from '../components/chatbot/ChatMessage';

export default function Chatbot() {
  const { chatMessages, addChatMessage, isLoading } = useData();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Sample questions
  const sampleQuestions = [
    'Which platform shows more English bias?',
    'How can I improve recommendation fairness?',
    'Why is my genre distribution skewed?',
    'What metrics are used to measure bias?'
  ];
  
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      addChatMessage(message);
      setMessage('');
    }
  };
  
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSampleQuestion = (question: string) => {
    addChatMessage(question);
  };
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={500}>
          AI Chatbot Assistant
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ask questions about content bias and get insights from our AI assistant.
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', gap: 3, height: 'calc(100vh - 220px)' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Paper 
            elevation={0}
            sx={{ 
              flex: 1, 
              mb: 2, 
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: '#F8F9FA',
            }}
          >
            <Box sx={{ 
              flex: 1, 
              overflowY: 'auto', 
              px: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {chatMessages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              <div ref={messagesEndRef} />
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your question here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 4,
                  },
                }}
              />
              <IconButton 
                color="primary" 
                onClick={handleSendMessage} 
                disabled={isLoading || !message.trim()}
                sx={{ ml: 1 }}
              >
                <Send size={22} />
              </IconButton>
            </Box>
          </Paper>
        </Box>
        
        <Box sx={{ width: 300 }}>
          <Card 
            elevation={0}
            sx={{ 
              height: '100%',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HelpCircle size={20} color="#7C4DFF" />
                <Typography variant="h6" sx={{ ml: 1 }}>
                  How can I help?
                </Typography>
              </Box>
              
              <Typography variant="body2" paragraph color="text.secondary">
                Ask me anything about content bias in your recommendations. I can help with:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <MessageSquare size={16} color="#00B8D4" style={{ marginTop: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    Explaining bias metrics and what they mean
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <MessageSquare size={16} color="#00B8D4" style={{ marginTop: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    Providing insights on improving recommendation fairness
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <MessageSquare size={16} color="#00B8D4" style={{ marginTop: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    Comparing bias across different platforms
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <MessageSquare size={16} color="#00B8D4" style={{ marginTop: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    Explaining technical concepts in simple terms
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="subtitle2" gutterBottom>
                Sample Questions:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
                {sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={() => handleSampleQuestion(question)}
                    sx={{ 
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      py: 0.75,
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}