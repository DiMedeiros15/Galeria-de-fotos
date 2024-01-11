import { Photo } from '@/app/types/Photo'
import React from 'react'

type Props = {
    photo: Photo;
    onClick: () => void;
}

export default function PhotoItem({photo , onClick}: Props) {
  return (
    <div className='cursor-pointer hover:opacity-80' onClick={onClick}>
        <img src={`/assets/${photo.url}`} alt="Imagens" className='w-full' style={{height:"210px"}} />
    </div>
  )
}
