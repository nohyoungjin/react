import React, { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const DataImg = ( props ) => {
    const { name, favoriteNumber, children } = props
    const [message, setMessage] = useState('')

    const onClickEnter = () => { setMessage('안녕하세요!') }
    const onClickLeave = () => { setMessage('안녕히 가세요!') }

    const [color, setColor] = useState('black')

    return (
        <>
        <div className="flex items-center space-x-1 text-blue-600">
            <Image
                src='/img5.png'
                alt="Picture of the author"
                width={330}
                height={116}
                priority
            />
        </div> <br />
        <p>안녕하세요 props 값은 {name} 입니다.</p> <br />
        <p>안녕하세요 child 값은 {children}</p> <br />
        <p>제가 좋아하는 숫자는 PropTypes {favoriteNumber}</p> <br />

        <button onClick={onClickEnter}>입장</button> &nbsp;
        <button onClick={onClickLeave}>퇴장</button>

        <h1 className='font-bold' style={{ color }}>{message}</h1> <br />

        <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
            파랑색
        </button> &nbsp;

        <button style={{ color: 'green' }} onClick={() => setColor('green')}>
            초록색
        </button> <br />

        </>
    )
}

DataImg.defaultProps = {
    name: "Oliver",
}

DataImg.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default DataImg