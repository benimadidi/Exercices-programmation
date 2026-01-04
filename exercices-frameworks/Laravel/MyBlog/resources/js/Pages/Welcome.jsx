import { Head, Link } from '@inertiajs/react';
import Nav from '@/Components/Nav';
import Register from './Auth/Register';
import ListPost from './Post/ListPost';

export default function Welcome({auth, posts, canRegister}) {

  return (

    <>

        <Head title='Welcome' />

        <div className='min-h-screen'>

            <Nav />

            <div className='bg-white'>

                <div className='max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8'>

                    <div className='text-center'>

                        <h1 className='text-4xl font-black text-gray-800'>

                            <span className='block'>Bienvenue sur</span>
                            <span className='block text-indigo-700'>Notre Blog Communautaire</span>

                        </h1>
                        <p className='mt-3 max-w-md mx-auto text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quibusdam rerum pariatur delectus quidem animi. Porro dignissimos molestias deleniti ut.
                        </p>

                        {!auth.user && canRegister && 
                        (

                            <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>

                                <div className='rounded-md shadow-md'>

                                    <Link href={route('register')} className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                        Commencer
                                    </Link>

                                </div>
                                
                            </div>

                        )}

                    </div>

                </div>

            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12 '>

                <div className='text-center mb-12'>

                    <h2 className='text-3xl font-extrabold text-gray-800'>Articles récents</h2>
                    <p className='mt-3 max-w-2xl mx-auto text-xl'>Les derniers articles publiés par nos utilisateurs</p>

                </div>

                <ListPost posts={posts} />

            </div>

        </div>


    </>

  )

}
