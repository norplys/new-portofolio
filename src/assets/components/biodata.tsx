import {motion} from 'framer-motion';

export default function Biodata() {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - 2003;



    return (
        <motion.section id="about"  
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }} >
            <img src="../../img/profile-photo.png"/>
            <div className="text">
                <h1>About <div className="yellow">Me</div></h1>
                <p className="sub-text">"Passionately pursuing my dreams and embracing the journey, one step at a time. 🚀 #LivingWithPurpose"</p>
                <div className="data">
                    <div className="data-item-1">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Country</p>
                        <p>Email</p>
                    </div>
                    <div className="data-item-2">
                        <p>Joy Winata</p>
                        <p>{age}</p>
                        <p>Jakarta Barat, Indonesia</p>
                        <p>joywinata88@gmail.com</p>
                    </div>
                </div>
                <p className="project">... Project Complete</p>
                <a className="cv-button"  href="../../file/Cv.pdf" download="Cv.pdf">Download CV</a>
            </div>
        </motion.section>
    )
}