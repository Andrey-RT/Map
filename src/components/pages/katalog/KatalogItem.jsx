import React, { useState } from 'react';
import list from './katalogData';
import Item from './Item';

const KatalogItem = ({ handle }) => {
  const [value, setValue] = useState('');
  const [sortingType, setSortingType] = useState(null);

  const filterSearch = list.filter((list) => {
    return list.name.toLowerCase().includes(value.toLowerCase());
  });

  const sort = () => {
    switch (sortingType) {
      case 'asc':
        return [...filterSearch].sort((a, b) => a.price - b.price);
      case 'desc':
        return [...filterSearch].sort((a, b) => b.price - a.price);
      case 'alphabetical':
        return [...filterSearch].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      default:
        return filterSearch;
    }
  };

  const handleClickSort = (type) => {
    setSortingType(type);
  };

  const sortedArray = sort();


  return (
    <div>
      <div className="input_sort_line">
        <div className="input_container">
            <p className="sort_name">Пошук :</p>
        <input className='input_katalog'
          placeholder="Знайти..."
          type="text"
          onChange={(event) => setValue(event.target.value)}
        /></div>
        <div className="sort_container">
          <p className="sort_name">Сортувати за :</p>
          <button
            className={sortingType === 'asc' ? 'active_sort' : ''}
            onClick={() => handleClickSort('asc')}
          >
            За ціною вгору
          </button>
          <button
            className={sortingType === 'desc' ? 'active_sort' : ''}
            onClick={() => handleClickSort('desc')}
          >
            За ціною вниз
          </button>
          <button
            className={sortingType === 'alphabetical' ? 'active_sort' : ''}
            onClick={() => handleClickSort('alphabetical')}
          >
              За алфавітом
          </button>
        </div>
      </div>

      {filterSearch.length > 0 ? (
  <div className="katalog_container_blok">
    {sortedArray.map((item) => (
      <Item key={item.id} item={item} handle={handle} />
    ))}
  </div>
) : (
  <p className='no_results'>Упс...   Ми нічого не знайшли</p>
)}
    </div>
  );
};

export default KatalogItem;
