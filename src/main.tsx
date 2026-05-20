import { createRoot } from 'react-dom/client'
import './shared/style/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/view/pages/Home'
import SearchPage from '../src/view/pages/Search'
import DisplayPage from '../src/view/pages/Display'
import MediaPage from './view/pages/Media';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/display" element={<DisplayPage />} />
      <Route path="/media/:id" element={<MediaPage />} />
    </Routes>
  </BrowserRouter>
)
