import React, { useState, createContext } from 'react';
import  {base_url}  from '../BaseURL';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loader, setLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  async function fetchpost(page=1) {
    setLoader(true);
    const url = `${base_url}?page=${page}`;
    try {
      const data = await fetch(url);
      const response = await data.json();
      setPosts(response.posts);
      setPage(response.page);
      setTotalPage(response.totalPages);
    } catch (error) {
      console.error("Error:", error);
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoader(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchpost(page);
  }

  const value = {
    posts,
    setPosts,
    loader,
    setLoader,
    fetchpost,
    page,
    setPage,
    totalPage,
    setTotalPage,
    handlePageChange
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
