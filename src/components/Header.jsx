const Header = () => {
  return (
    <div className="font-bold flex text-white bg-neutral-800 p-6 text-md">
      <div className="flex flex-auto justify-start">
        <h1><a href="">Blog</a></h1>
      </div>
      <div className="flex flex-auto justify-end">
        <a>お問い合わせ</a>
      </div>
    </div>
  )
}

export default Header