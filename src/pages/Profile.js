import React, { useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'

export default ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) return <p className="text-center">ЗАГРУЗКА...</p>

  const {
    name, company, avatar_url, 
    location, bio, blog, 
    login, html_url, followers,
    public_repos, public_gists,
    following
  } = user

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img 
                src={avatar_url} 
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>}
              <a 
                href={html_url} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="btn btn-dark"
              >Открыть профиль</a>
              <ul className="mt-2">
                {login && <li>
                  <strong>Usernamr: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
                <div className="badge badge-primary mr-2">Подписчики: {followers}</div>
                <div className="badge badge-success mr-2">Подписан: {following}</div>
                <div className="badge badge-info mr-2">Репозитории: {public_repos}</div>
                <div className="badge badge-dark mr-2">Gists: {public_gists}</div>

                { repos.join(' ') }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}