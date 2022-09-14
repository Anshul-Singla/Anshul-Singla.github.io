import './skills.style.css' ;
import {SiExpress} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
const Skills = () =>{
const skills = [
    {
        image:'https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360',
        icon:true,
        tag:'HTML'
    },
    {
        image:'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
        tag:'CSS'
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
        tag:'Java Script'
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        tag:'React'
    },
    {
        image:'https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
        tag:'Redux'
    },
    {
        image:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
        tag:'NodeJS'
    },
    {
        image:'https://www.freelogovectors.net/wp-content/uploads/2022/01/express-logo-freelogovectors.net_.png',
        icon:true,
        iconC:<SiExpress/>,
        tag:'ExpressJS'
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
        tag:'MongoDB'
    },
    // {
    //     image:'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',
    //     tag:'Git Hub'
    // },
    {
        image:'https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png',
        tag:'DS & Algo'
    }
    
]


    return (
        
        <div className="skills_sections">
            <p>Skills</p>
            <div className="cards">
                {
                    skills.map((skill , i) =>(
                            <SkillsCard i={i+1} link={skill.image} tag={skill.tag} />
                    )
                    )
                }
            </div>
        </div>
    )
}
const SkillsCard= ( {i,link , tag ,  icon ,iconC}) =>{
    // console.log(props);
    let picture ; 
    if(icon){
        picture =  <SiExpress/>

    }else{
        picture = <img src={link} alt={tag}/>
    }
    return(
        <div className={`card card${i}`}>
            
            {
                icon ?iconC :<img src={link} alt={tag}  />
                // iconC
            }
            
            <p>{tag}</p>
        </div>
    )
}

export default Skills