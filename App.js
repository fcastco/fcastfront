import React from 'react';
import logo from './logo.png';
import './App.css';
import DropZone from './DropZone';
import ZipForm from './ZipForm';


function App() {
  return (
    <div className="App">
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="../">FCast | Share files securely</a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active"><a>Home</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4by4">
                          <img src={logo} alt="Description"></img>
                      </figure>
                  </div>
                  <div class="column is-6 is-offset-1">
                      <h1 class="title is-2">
                          Create a password protected zip file
                      </h1>
                      <h2 class="subtitle is-4">
                          Upload your files below
                      </h2>
                      <br></br>
                          <DropZone />
                          <ZipForm />
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li><a>Copyright FCast, Inc. 2019</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
