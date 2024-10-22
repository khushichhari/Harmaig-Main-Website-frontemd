import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CategorySection from './components/CategorySection';
import EmotionSection from './components/EmotionSection';
import CollectionSection from './components/CollectionSection';


const Home = () => {

  return (
    <div>
      <Navbar />
      <Carousel />
      <CategorySection />
      <EmotionSection />
      <CollectionSection />

    </div>
  );
};

export default Home;