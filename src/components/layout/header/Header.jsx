

const Header = ({ logo, background, textColor }) => {
  return (
    <div className={`w-full p-4 space-x-2 ${background} flex justify-around`}>
      <div>
        <img
          src={logo}
          alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li className={`${textColor}`}>Home</li>
          <li className={`${textColor}`}>Quem somos</li>
          <li className={`${textColor}`}>Contato</li>
        </ul>
      </div>
    </div>
  )
}

export default Header