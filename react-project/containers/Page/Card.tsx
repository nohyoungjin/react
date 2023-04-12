import Link from 'next/link'

const Card = props => (
   <Link
    key={props.id}
    href={
        props.published
        ? `/blog/${encodeURIComponent(props.slug)}`
        : `/drafts/${props.id}`
    }
    className="rounded-md border hover:shadow-xl transition-shadow p-6"
    >
        <h3 className="text-3xl font-bold leading-snug tracking-tight mb-2 truncate">
            {props?.title || 'Untitled'}
        </h3>
        {props?.author ? (
            <div className="flex items-center space-x-2 mb-4">
                <img
                    src={props.author?.image}
                    className="border-blue-600 rounded-full w-12 h-12"
                />
                <div className="text-sm">
                    <p className="font-semibold">{props.author?.name}</p>
                    <p className="text-gray-500">
                        {props.published_at}
                    </p>
                </div>
            </div>
        ) : null}
        <p className="flex items-center space-x-2 mb-4">
            {props?.content?.slice(0, 250)}
        </p>
    </Link>
)

export default Card