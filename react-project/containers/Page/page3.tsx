import Image from 'next/image'

const DataImg = () => {
    return (
    <div className="flex items-center space-x-1 text-blue-600">
        <Image
            src='/img5.png'
            alt="Picture of the author"
            width={330}
            height={116}
            priority
        />
        <span className="font-bold text-lg tracking-tight whitespace-nowrap">Blog for dev</span>
    </div>
    )
}
export default DataImg