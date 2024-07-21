import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/Card';

export default function App () {
  return(
    <div>
      <Navbar/>
      <Hero/>
        <div>
          <Card 
            image="image.png" 
            rating="5.0" 
            number="(6)" 
            country="USA"
            para="Life lessons with Katie Zaferes"
            price="$136"
          />
          <Card 
            image="wedding-photography.png" 
            rating="5.0" 
            number="(30)" 
            country="USA"
            para="Learn wedding photography"
            price="$125"
          />
          <Card 
            image="mountain-bike.png" 
            rating="4.8" 
            number="(2)" 
            country="USA"
            para="Group Mountain Biking"
            price="$50"
          />
        </div>
    </div>
  )
}
