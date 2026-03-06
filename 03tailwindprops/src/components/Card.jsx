import React from 'react'

function Card({username}) {
    console.log({username})
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem]">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>

      <div className="flex flex-col py-2 px-2 pb-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-sm">The Accidental Ape</h1> 
          <h1 className='text-sm'>Price</h1>
        </div>
       
        <div className="flex justify-between">
          <p>Book#345</p>
          <p>₹799</p>
        </div>
        <br />
        <div>
         <p className="text-sm text-gray-400">{username}</p>
        </div>
        
        <button className="mt-5 flex mx-auto w-[50px] text-xs font-semibold text-white bg-blue-500 rounded cursor-pointer">
          Buy
        </button>
      </div>
    </div>
  )
}

export default Card