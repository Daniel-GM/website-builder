import React from 'react'

const Title = ({ text, fontSize, fontWeight, textColor, verticalPadding, horizontalPadding }) => {
  const getColorClass = (color) => color.includes("#") ? ["", color] : [color, ""]
  const [textColorClass, textColorStyle] = getColorClass(textColor)

  return (
    <div className={`flex items-center justify-center`}>
      <span
        className={`${textColorClass}`}
        style={{
          color: textColorStyle,
          fontSize: fontSize,
          fontWeight: fontWeight,
          padding: `${verticalPadding} ${horizontalPadding}`,
        }}
      >
        {text}
      </span>
    </div>
  )
}

export default Title