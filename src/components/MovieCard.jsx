import PropTypes from "prop-types";

export default function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster === "N/A"
              ? "https://via.placeholder.com/300x450"
              : movie.Poster
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};
