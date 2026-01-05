import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ListPost from './Post/ListPost';


export default function Dashboard({ usersPosts }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">

                       <div className='p-6'>

                            <div className='flex justify-between items-center mb-6'>

                                <h2 className='text-2xl font-semibold text-gray-900'>Mes publications</h2>

                                <Link href={route('post.create')} className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                    Créer un post
                                </Link>

                            </div>

                            {usersPosts.length > 0 ? 
                            (

                                <ListPost posts={usersPosts} showAuthor={false} canEdit={true}/>

                            )
                            :
                            (
                                <div className='text-center py-12 '>

                                   <p className='mb-4 text-gray-500'>Vous n'avez pas encore de publications </p>
                                    <Link href={route('post.create')} className="text-indigo-600 hover:text-indigo-700">
                                        Créer votre premier post
                                    </Link>

                                </div>
                            )
                            }

                       </div>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}
