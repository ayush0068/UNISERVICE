import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
    return (
        <div className="flex justify-center p-4">
      <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-8 bg-white text-gray-900 shadow-[0px_4px_25px_0px_#0000000D]">
        
        <Title 
          title="Stay Inspired" 
          subtitle="Subscribe to our newsletter for the latest travel tips, exclusive offers, and inspiring stories from around the world." 
        />
        
        
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-lg">
          <input 
            type="email"
            placeholder="Enter Your Email"
            className="bg-gray-50 px-4 py-2.5 border border-gray-300 rounded outline-none w-full text-gray-900 placeholder-gray-500"
          />
          <button
            type="button"
            className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all hover:bg-gray-800 text-white font-medium text-sm min-w-fit"
          >
            Subscribe
            <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </button>
        </div>
        
        <div className="w-full max-w-lg h-px bg-gray-300 mt-8"></div>
        
        <p className="text-gray-600 mt-6 text-xs text-center max-w-lg">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
        
      </div>
    </div>
    )
}

export default NewsLetter
