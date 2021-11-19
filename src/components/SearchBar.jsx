import React from 'react';
import styles from './SearchBar.module.css'
export default function SearchBar(props) {
  // acá va tu código
  return (<div className={styles.searchBar}>
      <div>
        <h1 className={styles.title}>
          Aplicacion del Clima
        </h1>
      </div>
      <div className={styles.two}>
      <input className={styles.input} placeholder="Ciudad a Buscar" />
      <button onClick={()=>props.onSearch('Buscando Ciudad')} className={styles.btn}>Agregar</button>    
      </div>
    </div>)
};