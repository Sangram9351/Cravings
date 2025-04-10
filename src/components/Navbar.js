import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
  <Link class="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
        
      
     
   </div>
  </div>
</nav>
    </div>
  )
}
