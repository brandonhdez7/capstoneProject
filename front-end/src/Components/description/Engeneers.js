import React from 'react'
// import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';


function Engeneers(props){
    return (
        <div className="engeneers">
        <div className="meet">
            <h1>Meet The Developers</h1>
        </div>
        <div className="bio">
            <div className="text1">
                <h2>Brian Lafuente</h2>
                <p>
                My name is Lou Brian Lafuente, but everyone calls me Brian. I was born and raised in the state of Georgia. 
                I studied Electrical Engineering Technology at Southern Polytechnic State University which is now merged with Kennesaw State University.
                 I received my Bachelor's of Science Degree in 2014 from SPSU. During my college my career I took two programming language classes,
                  which were Java/C++ and C/C#, that sparked my interest with programming and programming languages. 
                </p>
            
                    <div className="bioLink">
                        <a href="https://www.loubrianlafuente.com/index.html" target="_blank"><i className="fas fa-globe fa-3x"></i></a>
                        <a href="https://github.com/blafuente" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/brianlafuente11/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
                    </div>

                
            </div>
            <div className="codeImg">
                <div className="codeBox1">
                    <img src="./Images/hg_50.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="bio">
            <div className="codeImg">
                <div className="codeBox1">
                    <img src="./Images/50531528_555962024873475_7809065299424051200_n.png" alt=""/>
                </div>
            </div>
            <div className="text1">
                <h2>Brandon Hernandez</h2>
            <p> My name is Brandon, I'm a full-stack developer. With the passion
                 for creating something and seeing it come to life. I truly believe
                  in the impact web-development has in connecting users from all over 
                  the world and making their lives easier by creating something new. 
                  I enjoy solving problems and turning them into simple solutions. 
                  I am passionate about detail design. I love making clean user friendly experiences.
            </p>
            <div class="bioLink">
                <a href="http://brandonhdez.com/" target="_blank"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://github.com/brandonhdez7" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/brandon-hernandez-34254b175/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
            </div>
            </div>
        </div>
        <div className="bio">
            <div className="text1">
                <h2>Khanh Vu</h2>
                <p> Discovering my passion for coding did not come to me as quick as others but my love for technology did. 
                    My love for tech started when I was 8 when I got my first RC car, tore it apart, just to see how it worked 
                    and put it back together again to play with. That's when my family discovered that I was the "techie" to go 
                    to for all of the answers. Discovering my passion for coding started with Udemy courses learning this new "hobby" 
                    and then I looked up from my screen and it was 2:00 A.M. This passion of mine has come with a lot of hours spent 
                    building websites from scratch, many nights of Chinese take-out and a few all-nighters to perfect the projects while 
                    improving my code. Turning a hobby into a career is everyone's dream...I just happened to hustle to make that a reality.</p>
                      <div className="bioLink">
                        <a href="https://khanhqvu.com/" target="_blank"><i className="fas fa-globe fa-3x"></i></a>
                        <a href="https://github.com/Khanhvu09" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/khanh-vu-75ba8394/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
                          </div>
            </div>
            <div className="codeImg">
                <div className="codeBox1">
                    
                </div>
            </div>
        </div>
       
    </div>   
    ) 
}
  
  export default Engeneers;