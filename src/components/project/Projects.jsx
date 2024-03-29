import './projects.style.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import kindmealPoster from './kindmeal.png';
import lifestylePoster from './lifestyle.png';
import apolloPoster from './apollo.png';
import beautyhub from './beutyhub.png';
import timetracker from './timetracker.png'
import {SiBootstrap , SiChakraui , SiJavascript , SiCss3 , SiRedux} from 'react-icons/si'
import {DiReact , DiNodejsSmall , DiMongodb} from 'react-icons/di'
import {AiFillHtml5 , AiFillGithub} from 'react-icons/ai';
import {RiExternalLinkLine} from 'react-icons/ri'
import { useEffect } from 'react';

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:3000 })
})
  const projects =[
    {
      title:"Project-1",
      poster_url:timetracker,
      name:"TIME TRACKER",
      description:"Time tracker is powerful tool to save time and money. To keep an eye on progress and development of Projects . Start a new project and break them into simple and achievable tasks it.",
      tech_stack:[ <DiMongodb color='#3C873A' size='2rem'  />,<DiNodejsSmall color='#3C873A' size='2rem'  /> , <DiReact color='#61DBFB' size='2rem' /> , <SiRedux color='#764abc' size='2rem' /> , <SiChakraui color='teal' size='2rem' /> , <SiBootstrap color='#563d7c' size='2rem' /> ,<SiJavascript size='2rem' color='#F0DB4F' /> , <SiCss3 size='2rem' color='#264de4' />],
      git_link:'https://github.com/Anshul-Singla/tender-letter-2789',
      deploy_link:'https://frontend-omgupta12.vercel.app/',
      animation:'fade-right'
    },
    {
      title:"Project-2",
      poster_url:beautyhub,
      name:"BEAUTY HUB",
      description:"Beautyhub is an online retailer that sells premium beauty , clinical skincare and luxury spa products. Its has a wide range of products for you to choose .The term 'beautyhub' is often associated with large chains that provide a large-format,beauty supply store",
      tech_stack:[ <DiMongodb color='#3C873A' size='2rem'  />,<DiNodejsSmall color='#3C873A' size='2rem'  /> , <DiReact color='#61DBFB' size='2rem' /> , <SiRedux color='#764abc' size='2rem' /> , <SiChakraui color='teal' size='2rem' /> , <SiBootstrap color='#563d7c' size='2rem' /> ,<SiJavascript size='2rem' color='#F0DB4F' /> , <SiCss3 size='2rem' color='#264de4' />],
      git_link:'https://github.com/Sagarsandbhor17/Beautyhub',
      deploy_link:'https://beauty-hub.vercel.app/',
      animation:'fade'
    },
    // {
    //   title:"Project-3",
    //   poster_url:apolloPoster,
    //   name:"APOLLO (CLONE)",
    //   description:"Website of hospital who has wide range of specialist Doctors and Pharmecy Apollo Hospitals Enterprise Limited is an Indian multinational healthcare group headquartered in Chennai. Apart from the eponymous hospital chain, the company also operates pharmacies, primary care and diagnostic centres, and telehealth clinics through its subsidiaries ",
    //   tech_stack:[<SiJavascript size='2rem' color='#F0DB4F' /> , <SiBootstrap color='#563d7c' size='2rem' /> , <SiCss3 size='2rem' color='#264de4' />
    //   , <AiFillHtml5 color='#e34c26' size='2rem'/>],
    //   git_link:'https://github.com/ahmad-DS/WEB18-APOLLO24X7',
    //   deploy_link:'https://calm-alpaca-414005.netlify.app/',
    //   animation:'fade-left'
    // },
    {
      title:"Project-3",
      poster_url:kindmealPoster,
      name:"KINDMEAL.COM (CLONE)",
      description:"International website helps you to choose restaurants in strange places and gives you full description of food and restaurants . Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. you can browse delicious meat-free, vegetarian deals from top restaurants and cafes!",
      tech_stack:[<DiReact color='#61DBFB' size='2rem' /> , <SiChakraui color='teal' size='2rem' /> , <SiBootstrap color='#563d7c' size='2rem' /> ,<SiJavascript size='2rem' color='#F0DB4F' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://github.com/Anshul-Singla/public-language-8892/tree/main/kindmeal',
      deploy_link:'',
      animation:'fade-right'
    },
    {
      title:"Project-4",
      poster_url:lifestylePoster,
      name:"LIFESTYLESTORE.COM (CLONE)",
      description:"LifeStylestore is a online shoping website where you can purchase or sell products like cloths, bueaty, and other accesory. Lifestyle's inventory consists of several national and international brands, and its product categories include Indian and western apparels, footwear, handbags, beauty products, and fashion accessories for men, women, and children.",
      tech_stack:[<SiJavascript size='2rem' color='#F0DB4F' /> , <SiBootstrap color='#563d7c' size='2rem' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://github.com/AmitKuMaurya/LifeStyle-Collaboration',
      deploy_link:'https://ubiquitous-moonbeam-0077c0.netlify.app/',
      animation:'fade'
    },
    {
      title:"Project-5",
      poster_url:apolloPoster,
      name:"APOLLO (CLONE)",
      description:"Website of hospital who has wide range of specialist Doctors and Pharmecy Apollo Hospitals Enterprise Limited is an Indian multinational healthcare group headquartered in Chennai. Apart from the eponymous hospital chain, the company also operates pharmacies, primary care and diagnostic centres, and telehealth clinics through its subsidiaries ",
      tech_stack:[<SiJavascript size='2rem' color='#F0DB4F' /> , <SiBootstrap color='#563d7c' size='2rem' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://github.com/ahmad-DS/WEB18-APOLLO24X7',
      deploy_link:'https://calm-alpaca-414005.netlify.app/',
      animation:'fade-left'
    },

  ]
  return (
    <>
        <h1 className='project-title'>Projects</h1>
      <div className="p-wrapper" >
        {
          projects.map((el,i )=>
            <ProjectCard key={el.title} i={i+1} poster_url={el.poster_url} name={el.name} description={el.description} tech_stack={el.tech_stack} animation={el.animation} git_link={el.git_link} deploy_link={el.deploy_link}  />
          )
        }
      </div>
    </>
  )
}
const ProjectCard = ({poster_url,i,name,description,tech_stack ,git_link, deploy_link,animation})=>{
  const handleGit = (link) =>{
    window.open(link)
  }
  const handledeploy = (link) =>{
    window.open(link)
  }
  return (
    <div data-aos={`${animation}`} className={`project project${i}`} id='project'>
      <div className="poster"  >
        <img src={poster_url} alt={name} />
      </div>
      <div className="projectDetail">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="tech">
          <h3>Tech Stack:</h3>
          {
            tech_stack.map(el=> el )
          }
        </div>
        <div className="codeLink">
          <div className="deploy" onClick={()=>handledeploy(deploy_link)}>
           <p>Live</p> 
            <RiExternalLinkLine size='1.5rem'/>
          </div>
          <div className="git" onClick={()=>handleGit(git_link)} >
           <p>Source Code</p> 
            <AiFillGithub size='1.5rem'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;