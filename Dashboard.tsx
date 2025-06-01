import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Divider,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { Download, Filter } from 'lucide-react';
import { useData } from '../context/DataContext';
import BiasMetricCard from '../components/dashboard/BiasMetricCard';
import BiasChart from '../components/dashboard/BiasChart';

export default function Dashboard() {
  const { biasReports } = useData();
  const [platform, setPlatform] = useState<string>('all');
  
  // Get the latest report (or first one if filtered)
  const getActiveReport = () => {
    if (platform === 'all') {
      return biasReports[0];
    }
    return biasReports.find(report => report.platform === platform) || biasReports[0];
  };
  
  const activeReport = getActiveReport();
  
  const handlePlatformChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
  
  // Prepare chart data
  const languageData = {
    labels: ['English', 'Hindi', 'Spanish', 'Korean', 'French', 'Other'],
    datasets: [
      {
        label: 'Language Distribution',
        data: [45, 12, 18, 10, 8, 7],
        backgroundColor: [
          '#7C4DFF',
          '#B47CFF',
          '#00B8D4',
          '#64FFDA',
          '#FF5252',
          '#FFC107',
        ],
      },
    ],
  };
  
  const genreData = {
    labels: ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Documentary'],
    datasets: [
      {
        label: 'Current Distribution',
        data: [28, 22, 19, 15, 10, 6],
        backgroundColor: '#7C4DFF',
      },
      {
        label: 'Expected Distribution',
        data: [20, 20, 20, 13, 12, 15],
        backgroundColor: '#00B8D4',
      },
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={500}>
          Content Bias Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor and analyze bias metrics across your content recommendation platforms.
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Filter size={20} color="#757575" />
          <Typography variant="body1" sx={{ ml: 1, mr: 2 }}>
            Filter:
          </Typography>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="platform-select-label">Platform</InputLabel>
            <Select
              labelId="platform-select-label"
              id="platform-select"
              value={platform}
              label="Platform"
              onChange={handlePlatformChange}
            >
              <MenuItem value="all">All Platforms</MenuItem>
              <MenuItem value="Netflix">Netflix</MenuItem>
              <MenuItem value="YouTube">YouTube</MenuItem>
              <MenuItem value="Amazon Prime">Amazon Prime</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Button 
          variant="outlined" 
          startIcon={<Download size={18} />}
          size="small"
        >
          Export Report
        </Button>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card 
            className="fade-in"
            sx={{ 
              mb: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  {platform === 'all' ? 'Overall' : platform} Bias Score
                </Typography>
                <Typography variant="h4" fontWeight="medium" color="primary.main">
                  {activeReport.overallScore.toFixed(1)}
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                This score represents the overall fairness of your content recommendations based on genre distribution, language balance, and age representation. 
                A higher score indicates less bias in recommendations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <BiasMetricCard 
            metric={activeReport.metrics.genreFairness} 
            color={activeReport.metrics.genreFairness.percentage >= 85 ? '#4CAF50' : 
                  activeReport.metrics.genreFairness.percentage >= 70 ? '#FFC107' : '#FF5252'} 
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <BiasMetricCard 
            metric={activeReport.metrics.languageBalance} 
            color={activeReport.metrics.languageBalance.percentage >= 85 ? '#4CAF50' : 
                  activeReport.metrics.languageBalance.percentage >= 70 ? '#FFC107' : '#FF5252'} 
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <BiasMetricCard 
            metric={activeReport.metrics.ageRepresentation} 
            color={activeReport.metrics.ageRepresentation.percentage >= 85 ? '#4CAF50' : 
                  activeReport.metrics.ageRepresentation.percentage >= 70 ? '#FFC107' : '#FF5252'} 
          />
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
            Detailed Analysis
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <BiasChart
            title="Language Distribution"
            description="Breakdown of content recommendations by language."
            data={languageData}
            type="pie"
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <BiasChart
            title="Genre Distribution"
            description="Comparison between current and expected genre representation."
            data={genreData}
            type="bar"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recommendation Insights
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {activeReport.recommendations.map((recommendation, index) => (
                  <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        mr: 2,
                      }}
                    />
                    {recommendation}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}