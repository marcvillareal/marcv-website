import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

export const Timeline = (props) => {
  const [value, setValue] = useState(0);
  const [setPrevious] = useState(0);

  // Values should be only date
  const VALUES = [
    "2019-06-17",
    "2020-09-21",
    "2022-04-28",
    "2022-07-03",
    "2022-08-21",
    "2022-09-01",
  ];

  // Heading array corresponding to values
  const heading = [
    "Generation Innovation Programme @ Catalyst Inc.",
    "Queen's University Belfast Experience",
    "First Hackathon - HackTheHub by Nigma",
    "Capita",
    "Hackathon @ HKD",
    "Civica",
  ];

  // Description array corresponding to values
  const description = [
    "During my days in St Mary's Christian Brothers' Grammar School, I participated in a 5-day work placement programme (Generation Innovation) was set up by a company named Catalyst Incorporated where groups of people from different schools had worked with best companies in Northern Ireland. Worked with a company called Oracle to solve a real problem or challenge by building a prototype of a mobile application, aids deciding of estimates of sprints. Application involves different variety of games for estimation, so it’s not same old.",
    "I ended up deciding to pursue BEng Software Engineering. The professors and students I met were very ambitious, passionate and collaborative about their knowledge about Software Engineering, although, it was a hefty beginning as I had started when COVID hit so everything was online. I was set on attending Queen's, in the hopes of being with like-minded people to foster my interests in SE and the application of its theory in industry. As expected, the course has been very academic, but it is more focused on how the academic theory could and has been applied in industry.",
    "I participated my first ever in-person hackathon in Northern Ireland, where the theme was data and artificial intelligence. In a team of four with diverse backgrounds, our task was to use machine learning and AI to address a problem. After considering various issues, we chose to tackle the housing shortage. Our team developed UHome, a housing scoring service that uses machine learning to analyze property and landowner data, providing users with a score and matching them with suitable housing options based on their preferences. We presented our project in a 2-minute pitch to a panel of judges.",
    "My first ever IT job as a Service Desk Analyst in Capita, I thoroughly enjoyed my time and met very lovely people. I was responsible for offering essential technical support within schools who support C2k. I served as the initial point of contact for users encountering technical challenges, assisting with tasks like password resets, software installations, and network issues. These analysts assess and prioritise reported problems, striving to diagnose and resolve issues promptly. I kept detailed records, maintain knowledge bases, and engage in effective communication, ensuring users receive clear, empathetic assistance. Additionally, I contributed to security measures and continuously work to improve support processes and tools.",
    "I attended the first HKD (HacKeD) one-day hackathon at PwC's beautiful Merchant Square building in Belfast City Centre. The hackathon featured challenges from DailyPay, Inc., PwC, and Analytics Engines. I had a lot of pleasure working with my teammates on our chosen challenge 'Diversity and Inclusion' posed by PwC to create Diversify'd (Our product). We used Figma to develop a prototype of our idea, which we then presented in a three-minute elevator pitch. Thank you to HKD (HacKeD) for organizing this hackathon, PwC for letting us use their office, and all of the sponsors for making it possible.",
    "I've secured a place in the Civica Scholarship Programme for my third-year placement, which comes with a host of benefits, including £1,000 per academic year, a guaranteed paid third-year industrial placement, and the potential for part-time work during the academic year. In my role, I collaborate on real-world projects with software development teams, gaining hands-on experience and honing my software engineering skills. I contribute to software development using ASP.NET Core, C#, Azure DevOps, and Civica's framework. Throughout projects, I engage in the full software development lifecycle, participate in daily Microsoft Teams meetings with my team, and work under the guidance of Senior Software Engineers, often engaging in pair programming. The role offers flexibility for remote or in-office work, with a preference for efficient online meetings.",
  ];

  // Add file paths for the other timeline values in the same order
  const imagePaths = [
    "/img/timeline/catalyst.jpg",
    "/img/timeline/queens.png",
    "/img/timeline/hackthehub.png",
    "/img/timeline/capita.jpg",
    "/img/timeline/hkd.jpg",
    "/img/timeline/civica.jpg",
  ];

  return (
    <div id="timeline">
      <div className="container">
        <div className="section-title text-center">
          <h2>Timeline</h2>
          <p>
            From when I initially got interested into Software Engineering, to
            my interests now in Cloud, Software Engineering and IT. Checkout my
            journey so far in Software Engineering!
          </p>
        </div>
        <div className="row">
          <div className="root-div">
            <div
              style={{
                width: "90%",
                height: "100px",
                margin: "0 auto",
              }}
            >
              <HorizontalTimeline
                styles={{ outline: "#3876BF", foreground: "#192655" }}
                index={value}
                indexClick={(index) => {
                  setValue(index);
                  setPrevious(value);
                }}
                values={VALUES}
              />
            </div>
            <div className="description-container">
              <div className="description">
                <h3 className="text-center timeline-description">{heading[value]}</h3>
                <p className="text-center timeline-description">{description[value]}</p>
              </div>
              <div className="image">
                <img
                  src={imagePaths[value]}
                  alt="timelineimage"
                  className="timeline-image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
