import Dayjs from 'dayjs';

const PostBox = (props) => {
    const { title, createdAt, categories, content } = props
    
    return (
        <div class="w-full pt-10 px-4">
            <div class="mx-auto border border-zinc-300 py-4 px-5 max-w-3xl">
                <div class="flex pr-30">
                    <div class="text-sm opacity-50 flex flex-auto justify-start">
                        {Dayjs(createdAt).format("YYYY/M/DD")}
                    </div>
                    <div class="flex flex-auto justify-end">
                        <ul class="flex text-xs">
                            {categories.map(elem => 
                            <li class="text-sky-700 border-1 py-1 px-1.5 ml-2 rounded-sm">{elem}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div class="text-2xl py-2 mb-2 opacity-80">
                    {title}
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} className="line-clamp-2 opacity-80" />
            </div>
        </div>
    )
}

export default PostBox