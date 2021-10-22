import React from "react";
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
}
    from"react-router-dom";



class Home extends React.Component{
    constructor(){
        super();
    }
    
    render(){

            return(
                <body>
                <div class="heading">
                <div class="jumbotron text-center" id="heading">
                    <h1 class="myname">Arunkumar</h1>
                    <p class="occupation">Consultant</p>
                    <ul class="nav nav-pills nav-justified" id="navigation">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">
                                Home
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/project">
                                Project
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/contact">
                                contact
                            </a>
                        </li>
                    </ul>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="rounded-circle">
                                    <img src="https://lh3.googleusercontent.com/a-/AOh14GgRGzzcfeqbdZh_X0ksZZJcqI7iJDoniFQCfSk6yw=s83" class="rounded-circle mx-auto d-block" alt="mypic"
                                    width="130px"
                                    height="150px"
                                    />
                                    </div>
                                    <br/>

                                    </div>

                                    <div class="col-sm-8">
                                        <h2 class="myskills">Career Objective</h2>
                                        <br/>
                                        <p class="skills">To associate with an organization where there is an ample scope for organizational as well as individual growth. Seeking a position to utilize my skills and abilities in the information Technology industry that offers professional growth while being resourceful, innovative and flexible.</p>

                                    </div>  
                            </div>
                    </div>
                    
                    <br/>

                    <div class="container">
                        <div class="col-sm-4">
                            <h2 class="myskills">Technical Skills</h2>
                            <br/>
                            <ul class="skills">
                                
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                                <li>Json</li>
                                <li>React Js</li>
                                </ul>
                            </div>
                                <div class="col-sm-8">
                                    <h2 class="myskills">Educational Qualification</h2>
                                    <br/>
                                    <ul class="skills">
                                        <li>Diploma In Electronics & Communication Engineering from 2008 to 2011</li>
                                        <li>B.E In Electronics & Communication Engineering from 2011 to 2014</li>
                                        <li>MBA in HR & Marketing from 2016 to 2018</li>
                                    </ul>
                                    
                             </div>
                             <br/>

                             <div class="col-sm-12">
                                 <h2 class="myskills">My Projects</h2>
                                 <br/>
                                 <table class="table table-dark table-striped">
                                     <thead>
                                         <tr>
                                         <th>Project Name</th>
                                         <th>Project Domain</th>
                                         <th>Tools</th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                 <td>Benz</td>
                                                 <td>Automation</td>
                                                 <td>YAM</td>
                                                 </tr>
                                                 <tr>
                                                 <td>Continental GT</td>
                                                 <td>Automation</td>
                                                 <td>Canvas</td>
                                                 </tr>
                                                 <tr>
                                                 <td>BMW</td>
                                                 <td>Automation</td>
                                                 <td>YAM</td>
                                                 </tr>

                                             </tbody>
                                             </table>
                                             </div>
                                             <br/>
                                             <div class="col-sm-6">
                                                 <h2 class="myskills">Languages</h2>
                                                 <br/>
                                                 <ul class="skills">
                                                 <li>English- Read, Write, Speak</li>
                                                 <li>Tamil- Read, Write, Speak </li>
                                                 <li>Hindi- Read & Write</li>
                                                   </ul>
                                            </div>

                                            <div class="jumbotron text-center" id="footer">
                                                <ul class="nav justify-content-center">
                                                    <li class="nav-item">
                                                        <a href="http://www.linkedin.com/" class="fa fa-linkedin nav-link"
                                                        style={{color:"blue"}}/>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a href="http://www.facebook.com/" class="fa fa-facebook nav-link"
                                                        style={{color:"blue"}}/>
                                                    </li>

                                                    <li class="nav-item">
                                                        <a href="http://www.twitter.com/" class="fa fa-twitter nav-link"
                                                        style={{color:"blue"}}/>
                                                    </li>
                                                </ul>
                                            </div>
                                             
                                    </div>
                            </div>
                 </body>
        );
    }
        
}

export default Home;

