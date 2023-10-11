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

        <div>
            <Image
                src='/img5.png'
                alt="Picture of the author"
                width={330}
                height={116}
                priority
            />
        </div> <br />
        <p>안녕하세요 props 값은 {name} 입니다.</p>
        <p>안녕하세요 child 값은 {children}</p>
        <p>제가 좋아하는 숫자는 PropTypes {favoriteNumber}</p>

        <a href="javascript:" role="button" onClick={onClickEnter}>입장</a> &nbsp;
        <a href="javascript:" role="button" onClick={onClickLeave}>퇴장</a>

        <h1 className='font-bold' style={{ color }}>{message}</h1>

        <a href="javascript:" role="button" class="secondary outline" onClick={() => setColor('blue')} style={{ color: 'blue' }}>
            파랑색
        </a> &nbsp;

        <a href="javascript:" role="button" class="secondary outline" onClick={() => setColor('green')} style={{ color: 'green' }}>
            초록색
        </a>

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