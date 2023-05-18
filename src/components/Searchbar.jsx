import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }

  return (
  <form onSubmit={ handleSubmit } autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Search songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4"/>
      <input
        className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        name="search-field"
        autoComplete="off"
        id="search-field"
        placeholder="Search"
        type="search"
        value={searchTerm}
        onChange={(e)=> setSearchItem(e.target.value)}
      />
    </div>
  </form>
)
}

export default Searchbar;
