import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Divider,
  useTheme,
} from '@mui/material';
import {
  BarChart2,
  Brain,
  Gauge,
  Upload,
  ArrowRight,
  BarChart,
  PieChart,
  MessageCircle,
} from 'lucide-react';
import UploadBox from '../components/shared/UploadBox';
import { useData } from '../context/DataContext';

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { uploadData, isLoading } = useData();
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUpload = (data: any) => {
    uploadData(data);
    setUploadSuccess(true);
    // After a simulated delay, navigate to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const features = [
    {
      title: 'Bias Detection',
      icon: <Gauge size={32} color={theme.palette.primary.main} />,
      description:
        'Identify content recommendation biases across platforms using machine learning analysis.',
    },
    {
      title: 'Visualization',
      icon: <BarChart2 size={32} color={theme.palette.secondary.main} />,
      description:
        'View comprehensive charts and metrics to understand bias patterns in your content.',
    },
    {
      title: 'AI Assistant',
      icon: <Brain size={32} color={theme.palette.error.main} />,
      description:
        'Ask questions and get insights about content bias from our intelligent chatbot.',
    },
    {
      title: 'Recommendations',
      icon: <MessageCircle size={32} color={theme.palette.success.main} />,
      description:
        'Receive actionable suggestions to improve content diversity and fairness.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        className="fade-in"
        sx={{
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          fontWeight={500}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          ScriptAI
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Detect and mitigate bias in AI content recommendations
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            startIcon={<Upload size={18} />}
            onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Upload Data
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            endIcon={<ArrowRight size={18} />}
            onClick={() => navigate('/dashboard')}
          >
            View Dashboard
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className="fade-in"
              sx={{
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight={500} textAlign="center">
          How It Works
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  1
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Upload your content recommendation data
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use our CSV template or upload your own dataset with movie titles, genres, languages, and platforms.
                  </Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'white',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  2
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    AI analysis detects bias patterns
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our machine learning algorithm identifies patterns of over or under-representation in content recommendations.
                  </Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'error.main',
                    color: 'white',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  3
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Visualize bias metrics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Interactive charts and metrics show you exactly where and how bias occurs in your recommendations.
                  </Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'success.main',
                    color: 'white',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  4
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Get actionable recommendations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Receive specific suggestions to improve fairness and diversity in your content algorithm.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  maxWidth: 400,
                }}
              >
                <PieChart size={80} color={theme.palette.primary.main} strokeWidth={1.5} />
                <BarChart size={80} color={theme.palette.secondary.main} strokeWidth={1.5} />
                <Typography variant="body2" color="text.secondary" textAlign="center">
                  Our advanced visualization tools help you understand content bias at a glance.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box id="upload-section" sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom fontWeight={500} textAlign="center">
          Get Started
        </Typography>
        <Divider sx={{ mb: 4 }} />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <UploadBox onUpload={handleUpload} />
            {uploadSuccess && (
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography color="success.main">
                  Upload successful! Redirecting to dashboard...
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h6" gutterBottom>
                Don't have data yet?
              </Typography>
              <Typography variant="body2" paragraph color="text.secondary">
                You can explore our platform with our sample dataset to see how ScriptAI works.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/dashboard')}
                endIcon={<ArrowRight size={18} />}
              >
                Try Sample Data
              </Button>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Need help getting started?
                </Typography>
                <Typography variant="body2" paragraph color="text.secondary">
                  Check our documentation for detailed instructions on data formats and analysis options.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate('/documentation')}
                >
                  View Documentation
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}