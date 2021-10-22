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





class contact extends React.Component{
    constructor(){
        super();
    }
    
    render(){

            return(
                <body>
        
               
                             
        <div class="col-sm-12">
                                 <h2 class="myskills">Contact</h2>
                                 <br/>
                                 <table class="table table-dark table-striped">
                                     <thead>
                                         <tr>
                                         <th>Name</th>
                                         <th>Contact no:</th>
                                         <th>Email</th>
                                         </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                 <td>Arunkumar</td>
                                                 <td>8870662036</td>
                                                 <td>arun17593@gmail.com</td>
                                                 </tr>
                                             </tbody>
                                             </table>
                                             </div>
                                             <br/>

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

export default contact;

