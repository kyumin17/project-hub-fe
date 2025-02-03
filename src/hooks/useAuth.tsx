import { useState, useEffect } from "react";
import http from '../api/http';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async() => {
      try {
        const res = await http.get('/users/4810');
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);

  return { user };
}