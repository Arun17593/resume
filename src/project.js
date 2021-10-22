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




class project extends React.Component{
    constructor(){
        super();
    }
    
    render(){

            return(
                <body>
                            

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
                                                 <td>Yam</td>
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
                                             
                                    
                            
                 </body>
        );
    }
        
}

export default project;

