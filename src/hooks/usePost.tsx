import { useEffect } from 'react';
import http from '../api/http';

export default function usePost(url: string, form: any) {
  useEffect(() => {
    const postData = async() => {
      try {
        await http.post(url, form);
      } catch (error) {
        console.log(error);
      }
    }

    if (form) postData();
  }, [url, form]);
}