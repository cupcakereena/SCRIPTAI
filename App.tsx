import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

// Layout components
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Chatbot from './pages/Chatbot';
import Documentation from './pages/Documentation';

// Context
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </Layout>
      </Box>
    </DataProvider>
  );
}

export default App;