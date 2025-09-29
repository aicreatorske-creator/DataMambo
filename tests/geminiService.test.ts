import { describe, it, expect } from 'vitest';
import { generateContentSuggestions } from '../services/geminiService';
import { Post } from '../types';

describe('geminiService', () => {
  it('should throw an error if the VITE_API_KEY is not set', async () => {
    // Arrange
    const mockPosts: Post[] = [
      { id: '1', platform: 'Twitter', caption: 'A test post', likes: 10, comments: 5, timestamp: new Date().toISOString() },
    ];

    // Act & Assert
    // We expect the function to reject with an error because the API key is not defined in the test environment.
    await expect(generateContentSuggestions(mockPosts, 'Twitter')).rejects.toThrow(
      'API Key not configured. Please set the API_KEY environment variable.'
    );
  });
});