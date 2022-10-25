import React from 'react'
import CocktailList from './CocktailList'
import SearchForm from '../components/SearchForms'

const Home = () => {
  return (
    <main>
      <div className="form">
        <SearchForm />
      </div>
      <div className="item">
        <CocktailList />
      </div>
    </main>
  );
}

export default Home