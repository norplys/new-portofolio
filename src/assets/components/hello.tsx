import {motion} from 'framer-motion'; 

function Hello() : JSX.Element {
const data = ["Web Developer", "Front End Developer", "Back End Developer", "Gamers"];


    return (
        <motion.section id="home"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }} 
        exit={{opacity : 0}}>
                <div className="text">
                    <p className="hello yellow">HI THERE!</p>
                    <h1>I'm <div className="yellow">Joy</div></h1>
                    <div className="yellow">Winata</div>
                    <div className="wrapper">
                    <div className="static-text">A 
                    <ul  className="dynamic-text">
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul></div>
                    </div>
                    <div className="home-button">
                        <button>Lets Colaborate !</button>
                        <button>Reach Me</button>
                    </div>
                </div>
                <img src="../../img/profile-photo.png"/>
              
        </motion.section>
    );
}

export default Hello;