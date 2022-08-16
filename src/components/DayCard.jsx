import React from "react";
import teacherImg from "./Header/img/teacher.png";
import classroomImg from "./Header/img/blackboard.png";

function DayCard({ lesson, ...props }) {
  return (
    <div className="dayCard">
      <h2 className="dayCard__title">{props.day}</h2>
      <ul className="dayCard__subject-list">
        {lesson.map((item) => (
          <li key={item.time} className="dayCard__subject-item ">
            <p className="dayCard__subject-item-description">
              <span className="dayCard__subject-item-time">{item.time}</span>
              {item.lesson} {item.description}
            </p>
            <p className="dayCard__subject-item-teacher dayCard__subject-item-description">
              <img
                src={teacherImg}
                alt=""
                className="dayCard__subject-item-img"
              />
              {item.teacher}
            </p>
            <p className="dayCard__subject-item-auditorium dayCard__subject-item-description">
              <img
                src={classroomImg}
                alt=""
                className="dayCard__subject-item-img"
              />
              {item.auditorium}
            </p>
          </li>
        ))}

        {/* <li className="dayCard__subject-item">
          <span className="dayCard__subject-item-time">10:00</span>Педагогика
        </li>
        <li className="dayCard__subject-item">
          <span className="dayCard__subject-item-time">12:00</span>Литература
        </li> */}
      </ul>
    </div>
  );
}

export default DayCard;
