import { useState } from "react"
import path from "./../../../config/path"

const Header = ({ logo, background="", textColor="", textColorHover="" }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouse = () => setIsHover(!isHover)
  const getColorClass = (color) => color.includes("#") ? ["", color] : [color, ""]

  const [backgroundClass, backgroundStyle] = getColorClass(background)
  const [textColorClass, textColorStyle] = getColorClass(textColor)
  const [textColorHoverClass, textColorHoverStyle] = getColorClass(textColorHover)
  
  return (
    <div 
      className={`w-full p-4 space-x-2 ${backgroundClass} flex justify-around`}
      style={
        {background: backgroundStyle}
      }
    >
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-4">
          {path.map((item, index) => (
            <li 
              key={index} 
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouse}
              className={`${textColorClass} ${textColorHoverClass} cursor-pointer`}
              style={{
                color: isHover ? textColorStyle : textColorHoverStyle
              }}
            >
              <a href={item.path}>
                {item.menuName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header