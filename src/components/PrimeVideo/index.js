import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const ComedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="image"
      />
      <div className="movies-container ">
        <h1 className="action">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="action">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
