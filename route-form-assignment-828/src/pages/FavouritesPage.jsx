import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'

const favSchema = z.object({
  number: z.number().min(1).max(100),
  query: z.enum(['love', 'like']),
  size: z.enum(['small', 'medium', 'large'])
})

const FavouritesPage = () => {
  const navigate = useNavigate()
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(favSchema),
    defaultValues: {
      number: 1,
      query: 'love',
      size: 'medium'
    }
  })

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.query}&size=${data.size}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">This is the Favourites Page</h1>
      
      <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Navigate to a Favourite</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="number">
              Number (1-100)
            </label>
            <input
              id="number"
              type="number"
              className="w-full px-3 py-2 border rounded-lg"
              {...register('number', { valueAsNumber: true })}
              min="1"
              max="100"
            />
            {errors.number && (
              <p className="text-red-500 mt-1">{errors.number.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Query</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="love"
                  {...register('query')}
                  className="mr-1"
                />
                Love
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="like"
                  {...register('query')}
                  className="mr-1"
                />
                Like
              </label>
            </div>
            {errors.query && (
              <p className="text-red-500 mt-1">{errors.query.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Size</label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              {...register('size')}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && (
              <p className="text-red-500 mt-1">{errors.size.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            View Favourite
          </button>
        </form>
      </div>
    </div>
  )
}

export default FavouritesPage;