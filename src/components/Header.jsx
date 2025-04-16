import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="font-bold flex text-white bg-neutral-800 p-6 text-md">
      <div className="flex flex-auto justify-start">
        <Link to="/"><h1>Blog</h1></Link>
      </div>
      <div className="flex flex-auto justify-end">
        <a>お問い合わせ</a>
      </div>
    </div>
  )
}

export default Header