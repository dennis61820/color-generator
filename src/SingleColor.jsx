import React from 'react'
import { toast } from 'react-toastify'

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    toast.success('copied')
  } catch (error) {
    toast.error('failed to copy')
  }
}

const SingleColor = ({ color }) => {
  return (
    <div
      className={'color'}
      style={{ background: `#${color.hex}` }}
      onClick={()=>copyToClipboard(`#${color.hex}`)}
    >
      <p className={color.type === 'shade' ? 'color-light' : null}>
        #{color.hex}
      </p>

      <p className={color.type === 'shade' ? 'color-light' : null}>
        {color.weight}%
      </p>
    </div>
  )
}

export default SingleColor
