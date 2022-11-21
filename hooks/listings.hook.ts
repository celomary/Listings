import {useState, useEffect} from 'react';
import { ListingType } from '../types';
const useListings = () => {
    const [listings, setListings] = useState<ListingType[]>([]);
    const fetchListings = async () => {
      const response = await fetch('https://house-lydiahallie.vercel.app/api/listings');
      const data = await response.json();
      setListings(data.listings);
    }
  
    useEffect(()=>{
      fetchListings();
    }, [])
  
    const onRefresh = () => {
      setListings([]);
      fetchListings();
    }
    return [listings, onRefresh] as const;
}

export default useListings;
