import React from 'react'

function ContactForm() {
  return (
    <div className=''>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-center text-6xl font-bold mt-28 mb-8 text-[#41a950]'>Skriv en besked</h1>
        
        <div className='w-2/5 p-6 rounded-lg shadow-2xl' >
            <form className='mx-auto'>
                <div className='my-3 mx-auto'>
                    <input type='text' className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2' placeholder="Indtast dit navn" />
                </div>

                <div className='my-3 mx-auto'>
                    <input type='email' className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2' placeholder='Indtast din Email'/>
                </div>

                <div className='my-3 mx-auto'>
                    <textarea className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 h-36' placeholder='Indtast din besked'/>
                </div>

                <button className='inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-[#41a950] hover:bg-[#10a950] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Indsend besked</button>
            </form>
        </div>

        </div>
    </div>
  )
}

export default ContactForm