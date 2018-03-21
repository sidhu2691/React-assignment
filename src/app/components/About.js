import React, {components} from "react";
import PropTypes from "prop-types"

export default class About extends React.Component{

     getteamlist() {
         const teammember = 
            [
            {
              "id": 1,
              "name": "Daan Teunissen",
              "role": "Founder & CEO of Xebia Group",
              "photo": "https://cdn.xebia.com/assets/team/Daan-Teunissen.jpg",
              "desc": "Founder & CEO of Xebia Group"
            },
            {
              "id": 2,
              "name": "Michel den Braver",
              "role": "CFO of Xebia Group",
              "photo": "https://cdn.xebia.com/assets/team/michel.jpg",
              "desc": "CFO of Xebia Group"
            },
            {
              "id": 3,
              "name": "Guido Schoonheim",
              "role": "CEO of Xebia Netherlands",
              "photo": "https://cdn.xebia.com/assets/team/Guido-Schoonheim.jpg",
              "desc": "CEO of Xebia Netherlands"
            },
            {
              "id": 4,
              "name": "Stefan Tijsinger",
              "role": "CFO of Xebia Netherlands",
              "photo": "https://cdn.xebia.com/assets/team/stefan.png",
              "desc": "CFO of Xebia Netherlands"
            },
            {
              "id": 5,
              "name": "Derek Langone",
              "role": "CEO of XebiaLabs",
              "photo": "https://cdn.xebia.com/assets/team/derek.jpg",
              "desc": "CEO of XebiaLabs"
            },
            {
              "id": 6,
              "name": "Gottfried Sehringer",
              "role": "CMO of XebiaLabs",
              "photo": "https://cdn.xebia.com/assets/team/gottfried.jpg",
              "desc": "CMO of XebiaLabs"
            },
            {
              "id": 7,
              "name": "Vincent Partington",
              "role": "Founder & CTO of Xebia Labs",
              "photo": "https://cdn.xebia.com/assets/team/Vincent-Partington_0.jpg",
              "desc": "Founder & CTO of Xebia Labs"
            },
            {
              "id": 8,
              "name": "Coert Baart",
              "role": "Senior Vice President EMEA/APAC",
              "photo": "https://cdn.xebia.com/assets/team/Coert4.jpg",
              "desc": "Senior Vice President EMEA/APAC"
            }
          ]
          return teammember;
}
    render(){
        console.log("about render");
        let teammembers= this.getteamlist()


       return(
            <div className="about-cont">
                <p>To know about us</p>{
                teammembers.map(member =>(
                        
                        <div className="member-display" key={member.id}>
                        <div className="member-section-cont"> 
                        <div className="member-photo"><img src={member.photo} className="member-pic" /></div>
                        <label className="member-name">{member.name}</label>
                        <label className="member-role">{member.role}</label>
                        </div>
                      </div>
                )
                )
              }
            </div>
        )

    }

}