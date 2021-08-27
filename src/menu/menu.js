
import react, {useState} from 'react'
import { BrowserRouter,Link } from "react-router-dom"




const MainMenu= ()=> {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Menu</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <BrowserRouter>
    <ul class="navbar-nav">
      
      <Link to="/login#">Login</Link>

        <Link to="/home">Home</Link>
      
        <Link to="/todos">Todos</Link>
      
     
    </ul>
    </BrowserRouter>
  </div>
</nav>
    )
  }


export default MainMenu
