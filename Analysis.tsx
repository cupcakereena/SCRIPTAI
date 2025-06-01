import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Chip,
  CircularProgress,
} from '@mui/material';
import { Search, Filter, AlertCircle, Info } from 'lucide-react';
import { useData } from '../context/DataContext';
import MovieCard from '../components/analysis/MovieCard';
import BiasReportCard from '../components/analysis/BiasReportCard';

export default function Analysis() {
  const { movies, biasReports, selectMovie, selectReport, selectedMovieId, selectedReportId, isLoading } = useData();
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [filterBias, setFilterBias] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const handlePlatformChange = (event: SelectChangeEvent) => {
    setFilterPlatform(event.target.value);
  };
  
  const handleBiasChange = (event: SelectChangeEvent) => {
    setFilterBias(event.target.value);
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // Filter movies based on criteria
  const filteredMovies = movies.filter(movie => {
    // Platform filter
    if (filterPlatform !== 'all' && movie.platform !== filterPlatform) {
      return false;
    }
    
    // Bias filter
    if (filterBias !== 'all' && movie.bias_label !== filterBias) {
      return false;
    }
    
    // Search query
    if (searchQuery && !movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Get selected movie details
  const selectedMovie = movies.find(movie => movie.id === selectedMovieId);
  const selectedReport = biasReports.find(report => report.id === selectedReportId);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight={500}>
          Content Analysis
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Analyze individual content items and detailed bias reports.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Filter Content
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField 
                  fullWidth
                  size="small"
                  label="Search by title"
                  variant="outlined"
                  value={searchQuery}
                  onChange={handleSearch}
                  InputProps={{
                    startAdornment: <Search size={18} color="#757575" style={{ marginRight: 8 }} />,
                  }}
                />
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <FormControl size="small" fullWidth>
                    <InputLabel id="platform-filter-label">Platform</InputLabel>
                    <Select
                      labelId="platform-filter-label"
                      id="platform-filter"
                      value={filterPlatform}
                      label="Platform"
                      onChange={handlePlatformChange}
                      startAdornment={<Filter size={16} color="#757575" style={{ marginRight: 8 }} />}
                    >
                      <MenuItem value="all">All Platforms</MenuItem>
                      <MenuItem value="Netflix">Netflix</MenuItem>
                      <MenuItem value="YouTube">YouTube</MenuItem>
                      <MenuItem value="Amazon Prime">Amazon Prime</MenuItem>
                      <MenuItem value="Hulu">Hulu</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" fullWidth>
                    <InputLabel id="bias-filter-label">Bias Label</InputLabel>
                    <Select
                      labelId="bias-filter-label"
                      id="bias-filter"
                      value={filterBias}
                      label="Bias Label"
                      onChange={handleBiasChange}
                      startAdornment={<AlertCircle size={16} color="#757575" style={{ marginRight: 8 }} />}
                    >
                      <MenuItem value="all">All Labels</MenuItem>
                      <MenuItem value="Biased">Biased</MenuItem>
                      <MenuItem value="Unbiased">Unbiased</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </CardContent>
          </Card>
          
          <Typography variant="h6" gutterBottom>
            Content Items
          </Typography>
          
          <Box sx={{ maxHeight: 500, overflow: 'auto', pr: 1 }}>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
              </Box>
            ) : filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onClick={() => selectMovie(movie.id)} 
                  selected={selectedMovieId === movie.id}
                />
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Info size={32} color="#757575" style={{ margin: '0 auto 16px' }} />
                <Typography variant="body1">No movies match your filters</Typography>
                <Button 
                  variant="text" 
                  size="small" 
                  onClick={() => {
                    setFilterPlatform('all');
                    setFilterBias('all');
                    setSearchQuery('');
                  }}
                  sx={{ mt: 1 }}
                >
                  Clear Filters
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <Card 
            sx={{ 
              mb: 3,
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: selectedMovie ? 'flex-start' : 'center',
              alignItems: selectedMovie ? 'stretch' : 'center',
            }}
          >
            {selectedMovie ? (
              <CardContent>
                <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                  <Box
                    component="img"
                    sx={{
                      width: 120,
                      height: 180,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                    src={selectedMovie.poster || 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    alt={selectedMovie.title}
                  />
                  
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography variant="h5" gutterBottom>
                        {selectedMovie.title}
                      </Typography>
                      <Chip 
                        label={selectedMovie.bias_label} 
                        color={selectedMovie.bias_label === 'Biased' ? 'error' : 'success'}
                      />
                    </Box>
                    
                    <Typography variant="body1" paragraph>
                      {selectedMovie.genre} • {selectedMovie.views.toLocaleString()} views
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip label={selectedMovie.language} variant="outlined" />
                      <Chip label={selectedMovie.platform} variant="outlined" />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary">
                      This content {selectedMovie.bias_label === 'Biased' ? 'shows bias' : 'is balanced'} in the recommendation algorithm. 
                      {selectedMovie.bias_label === 'Biased' ? 
                        ` ${selectedMovie.language} ${selectedMovie.genre} content is ${selectedMovie.language === 'English' ? 'overrepresented' : 'underrepresented'} compared to expected distribution.` : 
                        ' It appears in recommendations at an appropriate frequency relative to other similar content.'}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Bias Analysis
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Platform Bias:
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {selectedMovie.platform} shows a {selectedMovie.bias_label === 'Biased' ? 'significant' : 'minimal'} bias 
                      toward {selectedMovie.genre} content in the {selectedMovie.language} language.
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Recommendation:
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {selectedMovie.bias_label === 'Biased' ? 
                        `Consider ${selectedMovie.language === 'English' ? 'reducing the weight of' : 'increasing exposure for'} ${selectedMovie.language} ${selectedMovie.genre} content in your recommendation algorithm.` : 
                        'Current recommendation frequency for this content type appears to be well-balanced.'}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            ) : (
              <Box sx={{ textAlign: 'center', p: 4 }}>
                <Info size={40} color="#757575" style={{ margin: '0 auto 16px' }} />
                <Typography variant="h6" gutterBottom>
                  Select a Content Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Choose a movie from the list to view its detailed bias analysis
                </Typography>
              </Box>
            )}
          </Card>
          
          <Typography variant="h6" gutterBottom>
            Bias Reports
          </Typography>
          
          <Box sx={{ maxHeight: 400, overflow: 'auto', pr: 1 }}>
            {biasReports.map(report => (
              <BiasReportCard 
                key={report.id} 
                report={report} 
                onClick={() => selectReport(report.id)} 
                selected={selectedReportId === report.id}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}