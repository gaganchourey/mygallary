import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
            <div className=" h-60 w-90 bg-white rounded-xl overflow-hidden">
            <img className="h-full w-full object-cover" src={props.elem.download_url} />
          </div>
          <h2 className="text-center">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
