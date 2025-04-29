

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const USERS_API_URL = 'https://api.jsonbin.io/v3/qs/680d0e678960c979a58dbbe9';

const fetchUsers = async () => {
    const response = await axios.get(USERS_API_URL);
    return response.data.record;  // assumes response.data has the shape { id, record, metadata }
};
    

export const useUsers = () => {
    return useQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
      staleTime: 5 * 60 * 1000,   // cache for 5 minutes
      retry: 1,                    // retry once on failure
    });
  };
  
  