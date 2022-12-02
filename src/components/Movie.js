import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className={styles.movie}>
            <h1 >
                <Link className={styles.movieLink} to={`/movie/${id}`}>{title}</Link>
            </h1>
            <div className={styles.movieGrid}>
                <span><img src={coverImg} alt={title} /></span>
                <div>
                    <h2>Genres</h2>
                    <ul>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <h2>Summary</h2>
                    <p>{summary}</p>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;