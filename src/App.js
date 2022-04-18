import React, { useState } from 'react'
import Post from './post'

export default function App() {

  const [news, setNews] = useState([])

  function AppAlert(data) {
    setNews(data)

  }
  // console.log(news[0].body)
  // console.log(news[0].title)



  return <>
    {
      news?.map((user) => (
        <ul key={user.id}>
          <li>{user.title}</li>
          <li>{user.body}</li>
        </ul>
      ))
    }
    <Post AppAlert={AppAlert} />
  </>
}