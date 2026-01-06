
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Create({ post }) {

  const {data, setData, put, processing, errors, reset} = useForm(
    {

      title: post.title,
      description: post.description,
      image: null,

    }
  );

  const [previewUrl, setPreviewUrl] = useState(post.image_url ? `/storage/${post.image_url}` : null);

const handleImageChange = (e) => 
  {

    const file = e.target.files?.[0];
    if (file)
    {

      setData('image', file)
      const reader = new FileReader();
      reader.onloadend = () => 
      {

        setPreviewUrl(reader.result);

      }
      reader.readAsDataURL(file);

    }

  }

  const handleSubmit = (e) => 
  {

    e.preventDefault();

    put(route('post.update', post.id), 
    {

      onSuccess: () => 
      {

       

      }

    })

  }

  return (

    <AuthenticatedLayout
      header={
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Modifier le post
          </h2>
      }>
        
        <Head title="Modifier le post" />

        <div className='py-12'>

          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>

          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>

            <div className='p-6'>

              <h2 className='text-2xl font-semibold mb-6'>Modifier le post</h2>

              <form onSubmit={handleSubmit} className='space-y-6'>

                <div className="space-y-2">

                 <Label htmlFor="title" > Titre </Label> 
                 <Input id="title"  value={data.title} onChange={(e) => setData('title', e.target.value)} />
                 {errors.title && <p className='text-red-500 text-sm'>{errors.title}</p>}

                </div>

                <div className="space-y-2">

                 <Label htmlFor="description" > Description </Label> 
                 <Textarea id="description"  value={data.description} onChange={(e) => setData('description', e.target.value)} />
                 {errors.description && <p className='text-red-500 text-sm'>{errors.description}</p>}

                </div>

                <div className="space-y-2">

                  <Input type='file' id="image" accept='images/*' onChange={handleImageChange} className='py-2 block file mr-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100' />
                  {errors.image && <p className='text-red-500 text-sm'>{errors.image}</p>}

                  {previewUrl && 
                  (

                    <div className="mt-2">
                      <img src={previewUrl} alt="preview" className='max-h-48 rounded-md' />
                    </div>

                  )}

                </div>

                <div className="flex items-center justify-end space-x-4">

                  <Button type="button" variant="outline" onClick={() => window.history.back()} >Annuler</Button>
                  <Button type="submit" disabled={processing} >
                    {processing ? 'En cours...' : 'Modifier le post'}
                    </Button>

                </div>

              </form>

            </div>

          </div>

          </div>

        </div>



    </AuthenticatedLayout>

  )
}
