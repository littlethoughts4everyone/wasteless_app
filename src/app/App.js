import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './AppLayout';
import Stock from '../features/stock/Stock';
import Categories from '../features/categories/Categories';
import Category from '../features/categories/Category';
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
          <Route path="categories/:categoryId" element={<Category/>} />
          <Route path="recipe/new" element={<NewRecipeForm/>} />
          <Route path="search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
