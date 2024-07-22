import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/Card';
import Cal from './components/cal';

export default function App () {
  return(
    <div>
      <Navbar/>
      <Hero/>
        <div>
          <Card 
            image="image.png" 
            rating={5.0} 
            reviewCount={6} 
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
          />
          <Card 
            image="wedding-photography.png" 
            rating={5.0} 
            reviewCount={30} 
            country="USA"
            title="Learn wedding photography"
            price={125}
          />
          <Card 
            image="mountain-bike.png" 
            rating={4.8} 
            reviewCount={2} 
            country="USA"
            title="Group Mountain Biking"
            price={50}
          />
        </div>
        <Cal/>
    </div>
  )
}
