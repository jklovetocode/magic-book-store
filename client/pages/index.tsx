import Icon from '@/components/Icon'
import services from '@/composables/services'
import { TBooksInfo } from '@/types/books'
import { FormControl, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<TBooksInfo[]>()
  const getBook = async () => {
    const data = await services.getBooks()
    setData(data)
    console.table(data)
  }
  useEffect(() => {
    getBook()
  }, [])
  return (
    <div className='flex justify-center items-center text-3xl pt-4'>
      <div>Welcome to The Magic Book Store</div>
    </div>
  )
}
