import { createRoot } from 'react-dom/client'
import './shared/style/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './view/pages/home-page'
import SearchPage from './view/pages/search-page'
import DisplayPage from './view/pages/display-page'
import MediaPage from './view/pages/media-page';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/display" element={<DisplayPage />} />
      <Route path="/media/:id?type=movie" element={<MediaPage />} />
    </Routes>
  </BrowserRouter>
)
