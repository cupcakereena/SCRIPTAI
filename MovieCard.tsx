import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  selected: boolean;
}

export default function MovieCard({ movie, onClick, selected }: MovieCardProps) {
  return (
    <Card 
      className="fade-in"
      sx={{ 
        display: 'flex', 
        mb: 2, 
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: selected ? 'scale(1.01)' : 'scale(1)',
        boxShadow: selected ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
        border: selected ? '2px solid' : '1px solid',
        borderColor: selected ? 'primary.main' : 'divider',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        }
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 150, objectFit: 'cover' }}
        image={movie.poster || 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Typography component="div" variant="h6">
              {movie.title}
            </Typography>
            <Chip 
              label={movie.bias_label} 
              size="small"
              color={movie.bias_label === 'Biased' ? 'error' : 'success'}
              sx={{ ml: 1 }}
            />
          </Box>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.genre}
          </Typography>
          <Box sx={{ display: 'flex', mt: 1, gap: 1, flexWrap: 'wrap' }}>
            <Chip 
              label={movie.language} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
            <Chip 
              label={movie.platform} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
            <Chip 
              label={`${(movie.views / 1000).toFixed(0)}K views`} 
              size="small" 
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}