import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/Card';
import data from "./components/data";


export default function App () {

  const cards = data.map(item => {
    return (
        <Card
          key = {item.id} 
          image = {item.coverImg}
          rating = {item.stats.rating}
          reviewCount = {item.stats.reviewCount}
          country = {item.location}
          title = {item.title}
          price = {item.price}
          openSpots = {item.openSpots}
        />
    )
})

  return(
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
       {cards}
      </section>
    </div>
  )
}
