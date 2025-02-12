
import {useState} from 'react'
import data from '../data.js'
import MovieCard from './MovieCard.jsx'

const Main = () => {
    const [currentMovie, setCurrentMovie] = useState(data[0])

    const moviesArray = data.slice(1)

    function handleMovieClick(movie) {
        setCurrentMovie(movie)
    }

    const movieContainerElement = moviesArray.map(movie => {
        return (
            <MovieCard 
                key={movie.id}
                index={movie.id} 
                movieName={movie.movieName} 
                episode={movie.episode} 
                image={movie.image} 
                onClick={() => handleMovieClick(movie)}/>
        )
    })

    return ( 
        <div className="main-container">
            <h2>Explore</h2>
            <p>What are you gonna watch today ?</p>
            <div className='current-movie'>
                <img className='overlay' src="src/assets/overlay.png" alt="" />
                <img src={currentMovie.image} alt="" />
                
                <h2>{currentMovie.movieName}</h2>
                <p>{currentMovie.description}</p>
            </div>
            <h2>New Release</h2>
            <div className="movie-card-container">
            {movieContainerElement}
            </div>
        </div>
    );
}
 
export default Main;