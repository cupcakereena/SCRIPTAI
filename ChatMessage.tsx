import { Box, Typography, Paper, Avatar } from '@mui/material';
import { ChatMessage as ChatMessageType } from '../../types';
import { Brain } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAi = message.sender === 'ai';

  return (
    <Box
      className="slide-in"
      sx={{
        display: 'flex',
        justifyContent: isAi ? 'flex-start' : 'flex-end',
        mb: 2,
      }}
    >
      {isAi && (
        <Avatar 
          sx={{ 
            mr: 1, 
            bgcolor: 'primary.main',
            width: 36,
            height: 36
          }}
        >
          <Brain size={20} />
        </Avatar>
      )}
      
      <Paper
        elevation={0}
        sx={{
          p: 2,
          maxWidth: '75%',
          borderRadius: isAi ? '0px 12px 12px 12px' : '12px 0px 12px 12px',
          bgcolor: isAi ? 'background.paper' : 'primary.main',
          color: isAi ? 'text.primary' : 'white',
          border: '1px solid',
          borderColor: isAi ? 'divider' : 'primary.main',
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography 
          variant="caption" 
          color={isAi ? 'text.secondary' : 'rgba(255,255,255,0.7)'} 
          sx={{ display: 'block', mt: 1, textAlign: 'right' }}
        >
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Typography>
      </Paper>
      
      {!isAi && (
        <Avatar 
          sx={{ 
            ml: 1, 
            bgcolor: 'secondary.main',
            width: 36,
            height: 36
          }}
        >
          U
        </Avatar>
      )}
    </Box>
  );
}