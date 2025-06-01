import { Box, Card, CardContent, Typography, LinearProgress, Tooltip } from '@mui/material';
import { BiasMetric } from '../../types';

interface BiasMetricCardProps {
  metric: BiasMetric;
  color: string;
}

export default function BiasMetricCard({ metric, color }: BiasMetricCardProps) {
  return (
    <Card 
      className="fade-in"
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom fontWeight={500}>
          {metric.category}
        </Typography>
        
        <Box sx={{ mt: 2, mb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              Current
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Expected
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Typography variant="h4" fontWeight="medium" color={color}>
              {metric.current}
            </Typography>
            <Typography variant="h6" fontWeight="medium" color="text.secondary">
              / {metric.expected}
            </Typography>
          </Box>
        </Box>
        
        <Tooltip title={`${metric.percentage.toFixed(1)}% of expected value`} arrow placement="top">
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={metric.percentage} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                backgroundColor: `${color}30`,
                '& .MuiLinearProgress-bar': {
                  backgroundColor: color,
                }
              }} 
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, textAlign: 'right' }}>
              {metric.percentage.toFixed(1)}%
            </Typography>
          </Box>
        </Tooltip>
      </CardContent>
    </Card>
  );
}