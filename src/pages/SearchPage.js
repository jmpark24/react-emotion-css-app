import styled from '@emotion/styled';
import React, { useState } from 'react';
import BookSearchForm from '../components/BookSearchForm';
import axios from 'axios';

const LogoText = styled.h3`
  margin: 0;
`;

const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;

const Header = styled.header`
  border-bottom: 1px solid gray;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${API_BASE_URL}/v1/volumes?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book List</LogoText>
          <HeaderSearchForm>
            <BookSearchForm onChange={handleChange} onSubmit={handleSubmit} searchTerm={searchTerm} />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
    </>
  );
};

export default SearchPage;
