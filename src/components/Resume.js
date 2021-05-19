import {
  createTheme,
  Events,
  TextEvent,
  themes,
  Timeline,
  Button
} from "@merc/react-timeline";
import React, { useEffect, useState } from "react";
const customTheme = createTheme(themes.default, {
  date: {
    backgroundColor: "#2B2B2B",
  },
  marker: {
    borderColor: "#2B2B2B",
  },
  timelineTrack: {
    backgroundColor: "#2B2B2B",
  },
});

const Resume = (props) => {
  const [showMoreIndex, setShowMoreIndex] = useState(-1);
  const [expand, setExpand] = useState(false);

  const resumeData = props.resumeData;

  const getHiddenText = (text) => {
    const _textArr = text.slice(0, 100).split(" ");
    _textArr.pop();
    return _textArr.join(" ") + "...";
  };

  const handleClick = (index) => {
    setShowMoreIndex(index);
  };

  const handleExpand = () => { setExpand(true); }

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Jornada</span>
          </h1>
        </div>

        <div className={expand? "nine columns main-col collapsible-open": "nine columns main-col collapsible"}>
          <Timeline theme={customTheme}>
            <Events>
              {resumeData.events.map((item, index) => (
                <TextEvent data-idx={index} date={item.date} text="">
                  <div className="two-two">
                    <div className="two-two-item">
                      <img src={item.logo} />
                    </div>
                    <div className="two-two-item">
                      <div className="timeline-text-sub">{item.title}</div>
                      <div className="timeline-text-title">
                        {item.organization}
                      </div>
                      <div className="timeline-text-desc">
                        {item.description}
                      </div>
                      <div
                        style={{ marginTop: "1rem" }}
                        className="timeline-text-desc"
                      >
                        {index === showMoreIndex
                          ? item.longdesc
                          : getHiddenText(item.longdesc)}
                        {!(index === showMoreIndex) && (
                          <span
                            style={{ cursor: "pointer", color: "#999" }}
                            href="#"
                            onClick={() => handleClick(index)}
                          >
                            {" "}
                            Ver mais
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </TextEvent>
              ))}
            </Events>
          </Timeline>
        </div>
        {!expand && <button className="nine columns expand" onClick={handleExpand}>Expandir</button>}
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>
          <div>
            <ul className="skills">
              <li>
                <b>Especialidades:</b>{" "}
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <em>{item.level === "exp" && item.skillname + ";"} </em>
                    );
                  })}
              </li>
              <li>
                <b>Extras:</b>{" "}
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <em>{item.level === "bgn" && item.skillname + ";"} </em>
                    );
                  })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
