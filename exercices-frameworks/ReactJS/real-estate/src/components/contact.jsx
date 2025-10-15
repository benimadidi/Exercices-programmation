import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contactez - <span className='underline underline-offset-4 decoration-1 font-light'>nous</span></h1>
        <p className='text-center text-gray-500 mb8 max-w-80 mx-auto'>Prêt à passer à l'action ? Construisons votre avenir ensemble</p>

        <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div  className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    <label htmlFor="name">Votre Nom</label>
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' id='name' name='name' type="text" required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    <label htmlFor="email">Votre Email</label>
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' id='email' name='email' type="email" required />
                </div>
            </div>
            <div className='my-6 text-left'>
                <label htmlFor="message">Votre Message</label>
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="message" id='message' required></textarea>
            </div>
            <button className='bg-blue-600 text-white px-12 py-2 mb-10 rounded'>Envoyer le message</button>
        </form>

    </div>
  )
}

export default Contact