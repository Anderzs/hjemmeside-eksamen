import React from 'react'

const handleClick = (e) => {
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#message').value
    if(!name || !email || !message) {
        alert("Udfyld venligst alle felter");
        return;
    }


    alert("Din besked er blevet sendt!");
    location.reload();
}

function ContactForm() {
  return (
    <div className=''>
        <div className='flex justify-center items-center flex-col my-10'>
            <div className='pb-9 text-center mt-28'>
                <h1 className='text-6xl font-bold text-[#41a950]'>Skriv en besked</h1>
                <h2 className='pt-2 text-gray-400'>Vi skal nok svare, hvis vi orker, eller nej egentlig ikke 💀</h2>
            </div>
            <div className='w-2/5 p-6 rounded-lg shadow-2xl' >
                <form className='mx-auto'>
                    <div className='my-3 mx-auto'>
                        <input type='text' id='name' className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2' placeholder="Indtast dit navn" />
                    </div>

                    <div className='my-3 mx-auto'>
                        <input type='email' id='email' className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2' placeholder='Indtast din email'/>
                    </div>

                    <div className='my-3 mx-auto'>
                        <textarea id='message' className='block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 h-36' placeholder='Indtast din besked'/>
                    </div>

                    <button type='button' onClick={handleClick} className='inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-[#41a950] hover:bg-[#10a950] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Indsend besked</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default ContactForm