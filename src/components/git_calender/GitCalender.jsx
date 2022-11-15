import React from "react";
// import GitHubCalendar from "react-github-calender";
// import { Row } from "react-bootstrap";
import './GitCalender.style.css';
// import { Box, Text } from "@chakra-ui/react";
// import React  from "react";
import GitHubCalendar from 'react-github-calendar';
// import styles from "./skills.module.css";
let style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop:"3rem"
}
// const GitHub = () => {
//   return(
//     <div style={style}>
//       <p className={styles.title} mb="1rem">My GitHub Calendar</p>
//       <div>
//         <GitHubCalendar
//         username="VijaySingh8650"
//         // blockSize={18}
//         blockMargin={8}
//         color ='#127369'
//         fontSize={16}
//       />
//       </div>
//     </div>
//   );
// };
// export default GitHub;
export default function Gitstats() {
  return (
    <section class="github-st" id="github-">
    <div id="github-stats">
        <div class="container">
            <h1 class="title">Github Stats</h1>
            <div class="github-stats-list">
                <div class="github-stat">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Anshul-Singla&theme=indian-flag"
                        alt="Github Contributions" />
                </div>
                <div class="github-stat">
                    <img src="https://activity-graph.herokuapp.com/graph?username=Anshul-Singla&bg_color=ffffff&color=000080&line=138808&point=ff9933&area=true"
                        alt="Github Graph" />
                </div>
                <div style={style}>
                    <p 
                    // className={styles.title}
                     mb="1rem">My GitHub Calendar</p>
                    <div>
                        <GitHubCalendar
                        username="Anshul-Singla"
                        // blockSize={18}
                        blockMargin={8}
                        color ='#127369'
                        fontSize={16}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      
    
  );
}
