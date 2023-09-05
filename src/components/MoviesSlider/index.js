import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 3,
  }

  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem user={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
