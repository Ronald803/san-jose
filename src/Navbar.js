import React from 'react'

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3>San Jose de Kala</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" style={{"justify-content":"end"}} id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://drive.google.com/file/d/1nTB80tAk23yUwgwAcT909K9q8OgN7k9C/view?usp=drive_link">Mapa General</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://drive.google.com/file/d/1hMZ2aYgC-9FAVHMt0S2vOK7RdGGkapZr/view?usp=drive_link">Mapa Principal</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar