import React from 'react'
import PropTypes from 'prop-types'



const Curso = ({title, image, price, profesor}) => (
  
    <article className="card">
      
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={ image } alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
            {title}
        </h3>
        <h4 className="t5 s-mb-2 s-center">
          {profesor}
        </h4>
        
        <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="http://">{`$ ${price} USD`}</a>
        </div>
      </div>
    </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
}
Curso.defaultProps = {
  title: "No hay titulo",
  image: "/image/Untitled-2.png",
  price: "--"
}
export default Curso