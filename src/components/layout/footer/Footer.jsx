import { useState } from 'react'

const Footer = ({ background = "", textColor = "", logoColor="", logoColorHover = "" }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouse = () => setIsHover(!isHover)
  const getColorClass = (color) => color.includes("#") ? ["", color] : [color, ""]
  
  const [backgroundClass, backgroundStyle] = getColorClass(background)
  const [textColorClass, textColorStyle] = getColorClass(textColor)
  const [logoColorClass, logoColorStyle] = getColorClass(logoColor)
  const [logoColorHoverClass, logoColorHoverStyle] = getColorClass(logoColorHover)

  return (
    <div 
      className={`${backgroundClass} ${textColorClass} h-16 text-wrap flex items-center justify-center`}
      style={{
        background: backgroundStyle
      }}
    >
      <span className={`${textColorClass}`} style={{color: textColorStyle,}}>
        © Desenvolvido por <a
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
          className={`${logoColorClass} ${logoColorHoverClass}`}
          style={{
            color: isHover ? logoColorHoverStyle : logoColorStyle,
          }}
          href='https://sigesistema.com.br/'>Sigesis</a>
      </span>
    </div>
  )
}

export default Footer