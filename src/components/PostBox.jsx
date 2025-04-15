import Dayjs from 'dayjs';

const PostBox = ({post}) => {
  const { title, createdAt, categories, content } = post

  return (
    <div className="w-full pt-10 px-4">
      <div className="mx-auto border border-zinc-300 py-4 px-5 max-w-3xl">
        <div className="flex pr-30">
          <div className="text-sm opacity-50 flex flex-auto justify-start">
            {Dayjs(createdAt).format("YYYY/M/DD")}
          </div>
          <div className="flex flex-auto justify-end">
            <ul className="flex text-xs">
              {categories.map((elem) => 
              <li key={elem} className="text-sky-700 border-1 py-1 px-1.5 ml-2 rounded-sm">{elem}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="text-2xl py-2 mb-2 opacity-80">
            {title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} className="line-clamp-2 opacity-80" />
      </div>
    </div>
  )
}

export default PostBox