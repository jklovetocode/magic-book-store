import { TBooksInfo } from './../types/books'
import { useFetch } from './axios'
const books = {
  getBooks: () => useFetch<TBooksInfo[]>('books', 'get'),
}

export default {
  ...books,
}
