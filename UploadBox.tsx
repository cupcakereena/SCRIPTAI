import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Paper, Button } from '@mui/material';
import { Upload, FileText } from 'lucide-react';

interface UploadBoxProps {
  onUpload: (data: any) => void;
}

export default function UploadBox({ onUpload }: UploadBoxProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvText = reader.result as string;
        // In a real app, we would parse the CSV properly
        // For demo purposes, we'll just simulate data loading
        onUpload({ success: true, filename: file.name });
      };
      reader.readAsText(file);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    maxFiles: 1,
  });

  return (
    <Paper
      elevation={0}
      sx={{
        border: '2px dashed',
        borderColor: isDragActive ? 'primary.main' : 'divider',
        borderRadius: 2,
        p: 4,
        backgroundColor: isDragActive ? 'rgba(124, 77, 255, 0.04)' : 'background.paper',
        transition: 'all 0.3s ease',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        {isDragActive ? (
          <Upload size={48} className="mb-4" color="#7C4DFF" />
        ) : (
          <FileText size={48} className="mb-4" color="#7C4DFF" />
        )}
        
        <Typography variant="h6" gutterBottom>
          {isDragActive ? 'Drop the file here' : 'Upload CSV Data'}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Drag and drop your CSV file here, or click to select
        </Typography>
        
        <Button
          variant="outlined"
          color="primary"
          component="span"
          startIcon={<Upload size={18} />}
        >
          Select File
        </Button>
        
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
          Supported format: CSV
        </Typography>
      </Box>
    </Paper>
  );
}