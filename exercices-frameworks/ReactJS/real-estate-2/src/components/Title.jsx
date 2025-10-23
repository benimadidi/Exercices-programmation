import React from 'react'

const Title = ({title, text, link}) => {
  return (
    <div className='flex justify-between items-center flex-wrap gap-3'>
        {/* titre */}
        <div className="">
            <span className='mb-2.5 block'>
                <img src="/images/title-icon.svg" alt="" width={55} height={24}/>
            </span>
            <h2>{title}</h2>
            <p className='mt-3 max-w-[730px]'>{text}</p>
        </div>

        {/* button */}
        {link && <button className="primary-btn">{link}</button>}
    </div>
  )
}

export default Title