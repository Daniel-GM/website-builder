import React from 'react'

const Banner = ({ height, imageUrl, link, target=true }) => {
  const targetMode = target ? "_blank" : ""

  return (
    <a href={link} target={targetMode}>
      <div
        style={{
          height: height,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        alt="banner"
      >

      </div>
    </a>
  )
}

export default Banner