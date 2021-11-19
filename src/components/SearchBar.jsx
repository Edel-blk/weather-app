import React from 'react';
import styles from './SearchBar.module.css'
import {IoSearchOutline} from 'react-icons/io5'

export default function SearchBar({onSearch}) {
  // acá va tu código
  
  return (<div className={styles.searchBar}>
      <input placeholder="Agrega una nueva ciudad..." />
      <button onClick={()=>onSearch('Buscando Ciudad')}><IoSearchOutline/></button>    
    </div>)
};