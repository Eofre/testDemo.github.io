import React from "react";
import DayCard from "../DayCard";

function OddWeek() {
  const scheduleOfClasses = [
    {
      day: "Понедельник",
      lesson: [
        {
          lesson: "Русский язык",
          time: "8:15",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
        {
          lesson: "Литература",
          time: "10:00",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
      ],
    },
    {
      day: "Вторник",
      lesson: [
        {
          lesson: "Физра",
          time: "8:15",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
        {
          lesson: "Литература",
          time: "10:00",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
      ],
    },
    {
      day: "Среда",
      lesson: [
        {
          lesson: "Управление проектами",
          time: "8:15",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
        {
          lesson: "Литература",
          time: "10:00",
          description: "(лекция, очно)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "А100",
        },
      ],
    },
    {
      day: "Четверг",
      lesson: [
        {
          lesson: "Зарубежная литература",
          time: "8:15",
          description: "(лекция, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Зарубежная литература",
          time: "10:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Русский язык",
          time: "12:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
      ],
    },
    {
      day: "Пятница",
      lesson: [
        {
          lesson: "Зарубежная литература",
          time: "8:15",
          description: "(лекция, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Зарубежная литература",
          time: "10:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Русский язык",
          time: "12:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
      ],
    },
    {
      day: "Суббота",
      lesson: [
        {
          lesson: "Зарубежная литература",
          time: "8:15",
          description: "(лекция, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Зарубежная литература",
          time: "10:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
        {
          lesson: "Русский язык",
          time: "12:00",
          description: "(практика, дистант)",
          teacher: "Иванова Александра Ивановна",
          auditorium: "ZOOM",
        },
      ],
    },
  ];

  return (
    <section className="evenWeek section">
      <div className="container">
        <h1 className="evenWeek__title">Нечётная неделя</h1>
        <div className="dayCards dayCards-one">
          {scheduleOfClasses.map((day) => (
            <DayCard key={day.day} day={day.day} lesson={day.lesson} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OddWeek;
