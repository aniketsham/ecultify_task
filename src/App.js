import './App.css';
import Navbar from './components/Navbar';
import CardSection from './pages/CardSection';
import Community from './pages/Community';
import GallerySection from './pages/GallerySection';
import Home from './pages/Home';
import ListCardSection from './pages/ListCardSection';
import Footer from './pages/Footer';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <GallerySection />
      <CardSection />
      <Community />
      <ListCardSection />
      <Footer/>
    </div>
  );
}

export default App;
