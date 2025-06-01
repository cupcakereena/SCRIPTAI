import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Tabs, 
  Tab, 
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { 
  FileText, 
  Upload, 
  BarChart2, 
  PieChart,
  MessageCircle,
  Book,
  CheckCircle,
  Download,
  Database,
  Info,
} from 'lucide-react';
import { recommendationDataCSV } from '../data/sampleData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Documentation() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  const handleDownloadSample = () => {
    const blob = new Blob([recommendationDataCSV], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recommendation_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={500}>
          Documentation
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Learn how to use ScriptAI to detect and mitigate bias in your content recommendations.
        </Typography>
      </Box>
      
      <Paper 
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTab-root': {
              py: 2,
              minHeight: 'auto',
            },
          }}
        >
          <Tab 
            label="Getting Started" 
            icon={<Book size={18} />} 
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
          <Tab 
            label="Data Format" 
            icon={<FileText size={18} />} 
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
          <Tab 
            label="Dashboard" 
            icon={<BarChart2 size={18} />} 
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
          <Tab 
            label="Analysis" 
            icon={<PieChart size={18} />} 
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
          <Tab 
            label="Chatbot" 
            icon={<MessageCircle size={18} />} 
            iconPosition="start"
            sx={{ textTransform: 'none' }}
          />
        </Tabs>
        
        <Box sx={{ px: 3 }}>
          <TabPanel value={activeTab} index={0}>
            <Typography variant="h5" gutterBottom>
              Getting Started with ScriptAI
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              ScriptAI helps you detect and mitigate bias in content recommendation systems. Follow these simple steps to get started:
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: 3,
              mb: 4,
            }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
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
                    Prepare Your Data
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Prepare your content recommendation data in CSV format. Each row should represent a content item with its properties.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    startIcon={<Download size={18} />}
                    onClick={handleDownloadSample}
                    size="small"
                  >
                    Download Sample CSV
                  </Button>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
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
                    Upload Your Data
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload your data file on the home page or use our sample dataset to explore the platform.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
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
                    Explore the Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The dashboard provides an overview of bias metrics with visualizations to help you understand the patterns.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
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
                    Analyze Content Items
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use the Analysis page to examine individual content items and understand specific bias patterns.
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  5
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Get AI Assistance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use the AI Chatbot to ask questions and get insights about your content recommendation bias.
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              p: 2,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}>
              <Info size={24} />
              <Box>
                <Typography variant="subtitle1" fontWeight={500}>
                  Need Help?
                </Typography>
                <Typography variant="body2">
                  If you have any questions, use the AI Chatbot or contact our support team at support@scriptai.example.com
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          
          <TabPanel value={activeTab} index={1}>
            <Typography variant="h5" gutterBottom>
              Data Format Requirements
            </Typography>
            
            <Typography variant="body1" paragraph>
              ScriptAI analyzes your content recommendation data to detect bias patterns. Your data should be in CSV format with the following columns:
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  fontFamily: 'monospace',
                  bgcolor: '#f5f5f5',
                  overflowX: 'auto',
                }}
              >
                <pre style={{ margin: 0 }}>
                  title,genre,language,platform,views,bias_label
                </pre>
              </Paper>
            </Box>
            
            <Typography variant="subtitle1" gutterBottom>
              Required Columns:
            </Typography>
            
            <List disablePadding>
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="title" 
                  secondary="The name of the content item (movie, video, etc.)"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="genre" 
                  secondary="The genre or category of the content (Action, Drama, Comedy, etc.)"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="language" 
                  secondary="The primary language of the content (English, Hindi, Spanish, etc.)"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="platform" 
                  secondary="The platform where the content is available (Netflix, YouTube, etc.)"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="views" 
                  secondary="The number of views or impressions the content has received"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircle size={16} color="#4CAF50" />
                </ListItemIcon>
                <ListItemText 
                  primary="bias_label" 
                  secondary="Optional pre-labeled bias indicator (Biased, Unbiased)"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            </List>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="subtitle1" gutterBottom>
              Sample Data Entry:
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  fontFamily: 'monospace',
                  bgcolor: '#f5f5f5',
                  overflowX: 'auto',
                }}
              >
                <pre style={{ margin: 0 }}>
                  Interstellar,Sci-Fi,English,Netflix,92000,Biased
                  Lagaan,Drama,Hindi,YouTube,5000,Biased
                  Zindagi Na Milegi Dobara,Drama,Hindi,Netflix,8700,Unbiased
                </pre>
              </Paper>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button 
                variant="contained" 
                startIcon={<Download size={18} />}
                onClick={handleDownloadSample}
              >
                Download Sample CSV
              </Button>
              
              <Button 
                variant="outlined" 
                startIcon={<Upload size={18} />}
                onClick={() => window.location.href = '/'}
              >
                Upload Data
              </Button>
            </Box>
            
            <Box sx={{ 
              bgcolor: 'info.main', 
              color: 'white',
              p: 2,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}>
              <Database size={24} />
              <Box>
                <Typography variant="subtitle1" fontWeight={500}>
                  Additional Data Options
                </Typography>
                <Typography variant="body2">
                  For advanced analysis, you can include additional columns such as content_creator, release_year, or audience_demographics.
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          
          <TabPanel value={activeTab} index={2}>
            <Typography variant="h5" gutterBottom>
              Understanding the Dashboard
            </Typography>
            
            <Typography variant="body1" paragraph>
              The Dashboard provides a comprehensive overview of bias in your content recommendations with visualizations and metrics.
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
              Key Components:
            </Typography>
            
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box 
                    sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    1
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary="Overall Bias Score" 
                  secondary="A composite score (0-100) representing the overall fairness of your content recommendations. Higher scores indicate less bias."
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box 
                    sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    2
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary="Bias Metrics" 
                  secondary="Three key metrics showing current vs. expected values for Genre Fairness, Language Balance, and Age Representation."
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box 
                    sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    3
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary="Visualization Charts" 
                  secondary="Visual representations of language distribution (pie chart) and genre distribution (bar chart) to easily identify imbalances."
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <ListItem disablePadding sx={{ mb: 2 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Box 
                    sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    4
                  </Box>
                </ListItemIcon>
                <ListItemText 
                  primary="Recommendation Insights" 
                  secondary="Actionable suggestions to improve content fairness based on the analysis of your data."
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            </List>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
              How to Use the Dashboard:
            </Typography>
            
            <Box sx={{ pl: 2 }}>
              <Typography variant="body2" paragraph>
                <strong>1. Filter by Platform:</strong> Use the platform filter to compare bias across different content platforms (Netflix, YouTube, etc.).
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>2. Analyze Metrics:</strong> Review the bias metrics to identify areas with the largest gaps between current and expected values.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>3. Examine Charts:</strong> Look for patterns in the charts to understand which languages or genres are over/under-represented.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>4. Review Recommendations:</strong> Implement the suggested recommendations to improve your algorithm's fairness.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>5. Export Report:</strong> Use the Export button to save your bias report for sharing or future reference.
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => window.location.href = '/dashboard'}
              sx={{ mt: 3 }}
            >
              Go to Dashboard
            </Button>
          </TabPanel>
          
          <TabPanel value={activeTab} index={3}>
            <Typography variant="h5" gutterBottom>
              Content Analysis Guide
            </Typography>
            
            <Typography variant="body1" paragraph>
              The Analysis page allows you to examine individual content items and detailed bias reports to understand specific patterns.
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
                Content Items Section:
              </Typography>
              
              <Box sx={{ pl: 2, mb: 3 }}>
                <Typography variant="body2" paragraph>
                  <strong>Filtering:</strong> Use the search box and filters to find specific content items by title, platform, or bias label.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Content Cards:</strong> Each card shows basic information about a content item including title, genre, language, platform, views, and bias label.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Selection:</strong> Click on a content card to view detailed analysis for that item.
                </Typography>
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                Content Detail Section:
              </Typography>
              
              <Box sx={{ pl: 2, mb: 3 }}>
                <Typography variant="body2" paragraph>
                  <strong>Basic Information:</strong> View complete details about the selected content item.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Bias Analysis:</strong> Understand why the content is labeled as biased or unbiased in the recommendation system.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Recommendations:</strong> Get specific suggestions to address bias for this particular content type.
                </Typography>
              </Box>
              
              <Typography variant="subtitle1" gutterBottom>
                Bias Reports Section:
              </Typography>
              
              <Box sx={{ pl: 2 }}>
                <Typography variant="body2" paragraph>
                  <strong>Report Cards:</strong> Each card represents a bias analysis report for a specific platform or time period.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Metrics Overview:</strong> See key metrics at a glance including overall score and category-specific percentages.
                </Typography>
                
                <Typography variant="body2" paragraph>
                  <strong>Recommendations:</strong> View actionable suggestions to improve content fairness.
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="subtitle1" gutterBottom>
              Interpreting Bias Labels:
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" paragraph>
                <strong>Biased:</strong> Content that is significantly over or under-represented in recommendations compared to expected distribution.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>Unbiased:</strong> Content that appears in recommendations at an appropriate frequency relative to similar content.
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => window.location.href = '/analysis'}
              sx={{ mt: 1 }}
            >
              Go to Analysis
            </Button>
          </TabPanel>
          
          <TabPanel value={activeTab} index={4}>
            <Typography variant="h5" gutterBottom>
              Using the AI Chatbot
            </Typography>
            
            <Typography variant="body1" paragraph>
              The AI Chatbot provides an interactive way to explore insights about content bias and get answers to your questions.
            </Typography>
            
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 3 }}>
              What You Can Ask:
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <MessageCircle size={20} color="#7C4DFF" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Platform-specific bias questions" 
                    secondary='Example: "Which platform shows more English bias?"'
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <MessageCircle size={20} color="#7C4DFF" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Recommendations for improving fairness" 
                    secondary='Example: "How can I improve recommendation fairness?"'
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <MessageCircle size={20} color="#7C4DFF" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Explanations of bias metrics" 
                    secondary='Example: "What does genre fairness mean?"'
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <MessageCircle size={20} color="#7C4DFF" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Technical concepts in simple terms" 
                    secondary='Example: "Why is my genre distribution skewed?"'
                  />
                </ListItem>
              </List>
            </Box>
            
            <Typography variant="subtitle1" gutterBottom>
              How to Use the Chatbot:
            </Typography>
            
            <Box sx={{ pl: 2, mb: 4 }}>
              <Typography variant="body2" paragraph>
                <strong>1. Ask a Question:</strong> Type your question in the text field at the bottom of the chat interface.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>2. Use Sample Questions:</strong> Click on one of the sample questions to get started quickly.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>3. Follow-up Questions:</strong> You can ask follow-up questions to get more detailed information.
              </Typography>
              
              <Typography variant="body2" paragraph>
                <strong>4. Context-Aware:</strong> The chatbot knows about your data and can provide specific insights.
              </Typography>
            </Box>
            
            <Box 
              sx={{ 
                bgcolor: '#f0f4ff', 
                p: 2, 
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'primary.light',
              }}
            >
              <Typography variant="subtitle1" fontWeight={500} gutterBottom color="primary.main">
                Pro Tip: Be Specific
              </Typography>
              <Typography variant="body2">
                For the best results, ask specific questions about your content data. For example, instead of asking "Is there bias?", try "Is there language bias in Netflix recommendations?"
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => window.location.href = '/chatbot'}
              sx={{ mt: 3 }}
            >
              Go to AI Chatbot
            </Button>
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
}