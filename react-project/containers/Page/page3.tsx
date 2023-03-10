import Image from 'next/image'

const DataImg = () => {
    return (
    <div className="pt-2">
        <Image
            src='/img5.png'
            alt="Picture of the author"
            width={330}
            height={116}
            priority
        />
    </div>
    )
}
export default DataImg