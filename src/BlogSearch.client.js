import { useState, useTransition } from "react";
import { useLocation } from "./LocationContext.client";
import Spinner from './Spinner';

export default function BlogSearch() {
  const [location, setLocation] = useLocation();
  const [isSearch, startTransition] = useTransition();
  const [searchText, setSearchText] = useState('');

  return <div style={{
    width: 180,
    height: 80,
    margin: 0
  }}>
    <input type="text" value={searchText} onInput={(e) => {
      startTransition(() => {
        const value = e.target.value;
        setLocation({
          ...location,
          searchText: value,
        });
        setSearchText(value);
      })
    }} />
    <Spinner active={isSearch} />
  </div>
}