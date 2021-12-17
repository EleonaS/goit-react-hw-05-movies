import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchForm,
  Button,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] =
    useState('');

  function handleInputChange(e) {
    const query =
      e.currentTarget.value.toLowerCase();
    setQuery(query);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      toast.info(
        'РlEASE ENTER CORRECT NAME',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
      return;
    }
    onSubmit(query);
    resetState();
  }

  function resetState() {
    setQuery('');
  }

  return (
    <>
      <SearchForm
        onSubmit={handleSubmit}
      >
        <SearchFormInput
          value={query}
          onChange={handleInputChange}
          placeholder="Search movie"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <Button
          type="submit"
          text="search"
        >
          <ButtonLabel>
            Search
          </ButtonLabel>
        </Button>
      </SearchForm>
    </>
  );
}

export { Searchbar };
