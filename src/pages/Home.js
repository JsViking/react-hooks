import React, {Fragment, useContext} from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'
import { GithubContext } from '../context/github/githubContext'

export default (props) => {
  const {loading, users} = useContext(GithubContext)

  const cards = users.map(user => (
      <div key={user.id} className="col-sm-4 mb-4">
        <Cards user={user}/>
      </div>
    ))
  return (
    <Fragment>
      <Search />

      {
        loading
        ? <p className="text-center">ЗАГРУЗКА...</p>
        : <div className="row">
            { cards }
          </div>
      }
    </Fragment>
  )
}