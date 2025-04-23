import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './AppLayout';
import Stock from '../features/stock/Stock';
import Categories from '../features/categories/Categories';
import Categorie from '../features/categories/Categorie';
import Recipes from '../features/recipes/Recipes';
import NewRecipeForm from '../components/NewRecipeForm';
import Search from '../features/search/Search';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route path="stock" element={<Stock/>} />
          <Route path="categories" element={<Categories/>} />
          <Route path="categorie" element={<Categorie/>} />
          <Route path="recipes" element={<Recipes/>} />
          <Route path="recipes/new" element={<NewRecipeForm/>} />
          <Route path="search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
