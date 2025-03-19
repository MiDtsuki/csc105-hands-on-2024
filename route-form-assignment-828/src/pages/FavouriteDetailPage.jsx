import { useParams, useSearchParams } from 'react-router-dom'

const FavouriteDetailPage = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  
  const query = searchParams.get('q') || 'none'
  const size = searchParams.get('size') || 'medium'

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Favourite Detail</h1>
      <p className="text-lg">
        Your favourite post is {query}. Post ID is {id}. Size is {size}.
      </p>
    </div>
  )
}

export default FavouriteDetailPage;