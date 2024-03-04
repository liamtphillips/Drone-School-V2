import React from 'react'
import { Link } from "react-router-dom"; 

const banner = () => {
  return (
    <section className='bg-gradient-to-r from-slate-900 to-blue-900  font-raleway '>
      <div className='container px-20 mx-auto text-white text-center'>
        <div className="flex items-center justify-center p-14">
          <div className="">
            <h2 className="text-4xl font-semibold mb-2">Any questions? Contact us!</h2>
            <p className="lg:max-w-[550px] mt-4">Everybody has different needs, if you want to have a chat with us before you book a lesson
            head over to our contact page and send us an email or give us a call!
             </p>
             <Link to='/contact'>
              <button className='bg-white text-black font-bold p-4 rounded-lg mt-5'>Contact us!</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default banner;