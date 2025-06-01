import { Movie, BiasReport } from '../types';

export const sampleMovies: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    genre: 'Sci-Fi',
    language: 'English',
    platform: 'Netflix',
    views: 92000,
    bias_label: 'Biased',
    poster: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Lagaan',
    genre: 'Drama',
    language: 'Hindi',
    platform: 'YouTube',
    views: 5000,
    bias_label: 'Biased',
    poster: 'https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Zindagi Na Milegi Dobara',
    genre: 'Drama',
    language: 'Hindi',
    platform: 'Netflix',
    views: 8700,
    bias_label: 'Unbiased',
    poster: 'https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    language: 'English',
    platform: 'Amazon Prime',
    views: 75000,
    bias_label: 'Unbiased',
    poster: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Parasite',
    genre: 'Thriller',
    language: 'Korean',
    platform: 'Hulu',
    views: 45000,
    bias_label: 'Unbiased',
    poster: 'https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'Fast & Furious 9',
    genre: 'Action',
    language: 'English',
    platform: 'Netflix',
    views: 110000,
    bias_label: 'Biased',
    poster: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    title: 'La Casa de Papel',
    genre: 'Thriller',
    language: 'Spanish',
    platform: 'Netflix',
    views: 89000,
    bias_label: 'Unbiased',
    poster: 'https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    title: 'Train to Busan',
    genre: 'Horror',
    language: 'Korean',
    platform: 'Amazon Prime',
    views: 18000,
    bias_label: 'Biased',
    poster: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const sampleBiasReports: BiasReport[] = [
  {
    id: '1',
    date: '2025-04-10',
    platform: 'Netflix',
    metrics: {
      genreFairness: {
        category: 'Genre',
        current: 72,
        expected: 90,
        percentage: 80
      },
      languageBalance: {
        category: 'Language',
        current: 45,
        expected: 70,
        percentage: 64.3
      },
      ageRepresentation: {
        category: 'Age Representation',
        current: 58,
        expected: 75,
        percentage: 77.3
      }
    },
    recommendations: [
      'Reweight algorithm to improve language diversity',
      'Increase representation of foreign language films',
      'Consider introducing more age-diverse content in recommendations'
    ],
    overallScore: 73.9
  },
  {
    id: '2',
    date: '2025-04-05',
    platform: 'YouTube',
    metrics: {
      genreFairness: {
        category: 'Genre',
        current: 68,
        expected: 85,
        percentage: 80
      },
      languageBalance: {
        category: 'Language',
        current: 55,
        expected: 65,
        percentage: 84.6
      },
      ageRepresentation: {
        category: 'Age Representation',
        current: 40,
        expected: 60,
        percentage: 66.7
      }
    },
    recommendations: [
      'Improve age representation in recommendations',
      'Slightly adjust genre balance to favor underrepresented categories',
      'Current language diversity is good, maintain this approach'
    ],
    overallScore: 77.1
  },
  {
    id: '3',
    date: '2025-03-28',
    platform: 'Amazon Prime',
    metrics: {
      genreFairness: {
        category: 'Genre',
        current: 78,
        expected: 85,
        percentage: 91.8
      },
      languageBalance: {
        category: 'Language',
        current: 42,
        expected: 75,
        percentage: 56
      },
      ageRepresentation: {
        category: 'Age Representation',
        current: 65,
        expected: 80,
        percentage: 81.3
      }
    },
    recommendations: [
      'Significant improvement needed in language diversity',
      'Consider featuring more non-English content prominently',
      'Genre and age representation are fairly balanced'
    ],
    overallScore: 76.3
  }
];

export const recommendationDataCSV = `title,genre,language,platform,views,bias_label
Interstellar,Sci-Fi,English,Netflix,92000,Biased
Lagaan,Drama,Hindi,YouTube,5000,Biased
Zindagi Na Milegi Dobara,Drama,Hindi,Netflix,8700,Unbiased
The Shawshank Redemption,Drama,English,Amazon Prime,75000,Unbiased
Parasite,Thriller,Korean,Hulu,45000,Unbiased
Fast & Furious 9,Action,English,Netflix,110000,Biased
La Casa de Papel,Thriller,Spanish,Netflix,89000,Unbiased
Train to Busan,Horror,Korean,Amazon Prime,18000,Biased`;