import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  
  return (<div className={styles.searchBar}>
      <div className={styles.two}>
      <input className={styles.input} placeholder="Ciudad a Buscar" />
      <button onClick={()=>onSearch('Buscando Ciudad')} className={styles.btn}>Agregar</button>    
      </div>
    </div>)
};