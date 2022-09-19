import React from "react";
// import GitHubCalendar from "react-github-calender";
// import { Row } from "react-bootstrap";
import './GitCalender.style.css'
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
                {/* <div class="github-stat">
                    <img src="https://github-readme-stats.vercel.app/api?username=Anshul-Singla&theme=flag-india&show_icons=true&count_private=true"
                        alt="Github Stats" />
                </div> */}
                <div class="github-stat">
                    <img src="https://activity-graph.herokuapp.com/graph?username=Anshul-Singla&bg_color=ffffff&color=000080&line=138808&point=ff9933&area=true"
                        alt="Github Graph" />
                </div>
            </div>
        </div>
    </div>
</section>
      
    
  );
}
