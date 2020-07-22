import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export default (props) => {
  const [value, setValue] = useState('')
  const { show, hide }  = useContext(AlertContext)
  const { search, clearUsers }  = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    clearUsers()

    if (value.trim()) {
      hide()
      search(value.trim())
    } else {
      show('Введите данные пользователя')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        value={value}
        onChange={event => setValue(event.target.value) }
        onKeyPress={onSubmit}
      />
    </div>
  )
}