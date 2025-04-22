import './App.css'
import { useEffect } from 'react'
import { useUsers } from './hooks/useUsers'

function App() {
  const { data: users, isLoading, error, isFetching, refetch } = useUsers()

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <button onClick={() => refetch}>Refetch</button>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
