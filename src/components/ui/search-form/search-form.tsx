'use client'
import s from './search-form.module.scss'
import { Input } from '.././input'
import { Button } from '.././button'

type Props = {
  onSubmit: () => void
  placeholder?: string
}
export const SearchForm = ({ onSubmit, placeholder }: Props) => {
  return (
    <form className={s.root} onSubmit={onSubmit}>
      <Input
        type={'search'}
        style={{ width: '100%' }}
        placeholder={placeholder}
      />
      <Button title={'Поиск'} bg={'blue'} />
    </form>
  )
}
