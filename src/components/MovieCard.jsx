const MovieCard = ({movieName,episode,image, onClick, index}) => {
    return ( 
        <div onClick={onClick} className="movie-card">
            <div className="card-overlay"></div>
            <img src={image} alt="" />
            <p style={{fontWeight: "bold"}}>{movieName}</p>
            <p className="episode">Episode {episode}</p>
        </div>
    );
}
 
export default MovieCard;