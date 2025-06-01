import { Card, CardContent, Typography, Box, Chip, Divider } from '@mui/material';
import { BiasReport } from '../../types';

interface BiasReportCardProps {
  report: BiasReport;
  onClick: () => void;
  selected: boolean;
}

export default function BiasReportCard({ report, onClick, selected }: BiasReportCardProps) {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Score color
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'success.main';
    if (score >= 70) return 'warning.main';
    return 'error.main';
  };

  return (
    <Card 
      className="fade-in"
      sx={{ 
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
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="h6">
              {report.platform} Bias Report
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(report.date)}
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Typography 
              variant="h4" 
              fontWeight="medium" 
              color={getScoreColor(report.overallScore)}
            >
              {report.overallScore.toFixed(1)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Overall Score
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 1.5 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="h6" color="primary.main">
              {report.metrics.genreFairness.percentage.toFixed(1)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Genre Fairness
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="h6" color="secondary.main">
              {report.metrics.languageBalance.percentage.toFixed(1)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Language Balance
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="h6" color="warning.main">
              {report.metrics.ageRepresentation.percentage.toFixed(1)}%
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Age Representation
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ my: 1.5 }} />
        
        <Typography variant="subtitle2" gutterBottom>
          Recommendations:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {report.recommendations.map((rec, index) => (
            <Chip 
              key={index}
              label={rec}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}