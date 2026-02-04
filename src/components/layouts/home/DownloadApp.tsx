import React from 'react'

export default function DownloadApp() {
  return (
    <div className='bg-red-500 px-10 py-15 mt-10 rounded-2xl md:flex justify-between items-center'>
        <div>
            <h1 className='text-5xl font-semibold text-white'>For better experience, <br /> Download the Foodi app now</h1>
            <div className='mt-10 flex gap-3'>
                <button>
                    <img src="https://foodibd.com/_next/static/media/google-play.b18c2a61.svg" alt="" />
                </button>
                <button>
                    <img src="https://foodibd.com/_next/static/media/app-store.89469932.svg" alt="" />
                </button>
            </div>
        </div>
        <div className='bg-white w-60 rounded-2xl p-5 mx-auto mt-5'>
            <img className='w-50 mx-auto border-red-500' src="https://foodibd.com/_next/static/media/qr-code.9111b0a2.svg" alt="" />
            <p className='text-center'>Download app</p>
        </div>
    </div>
  )
}
