import React from "react";
import DayCard from "../DayCard";
import catImg from "../Header/img/cool.png";

function Home() {
  const scheduleOfClassesEvenWeek = [
    {
      day: "Понедельник",
      lesson: [
        {
          lesson: "Литература",
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

  const scheduleOfClassesOddWeek = [
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
          lesson: "Русский язык",
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
  function getWeek() {
    let d0 = new Date().getTime(),
      year = new Date(new Date().getFullYear(), 0, 1),
      d1 = year.getTime(),
      dateDay = year.getDay(),
      re = Math.floor((d0 - d1) / 8.64e7) + (dateDay ? dateDay - 1 : 6);
    return (Math.floor(re / 7) % 2 ? "не" : "") + "чётная";
  }

  const getDays = () => new Date().getDay() - 1;

  // function getDays() {
  //   const days = [
  //     "понедельник",
  //     "вторник",
  //     "среда",
  //     "четверг",
  //     "пятница",
  //     "суббота",
  //     "воскресенье",
  //   ];
  //   let day = new Date().getDay();

  //   console.log(days[day - 1]);
  //   return days[day - 1];
  // }
  const getTimes = () => `${new Date().getHours()}:${new Date().getMinutes()}`;

  return (
    <section className="home section">
      <div className="container">
        <div className="home__inner">
          <div className="home__schedule">
            <h2 className="home__schedule-title">
              Расписание на сегодня <span>(Неделя: {getWeek()})</span>{" "}
              <img src={catImg} alt="" className="home__schedule-title-img" />
            </h2>

            {getWeek() === "чётная"
              ? scheduleOfClassesEvenWeek.map((day, index) =>
                  index == getDays() ? (
                    <DayCard key={day.day} day={day.day} lesson={day.lesson} />
                  ) : (
                    console.log("Неудача ", day.time + " " + getTimes())
                  )
                )
              : scheduleOfClassesOddWeek.map((day, index) =>
                  index == getDays() ? (
                    <DayCard key={day.day} day={day.day} lesson={day.lesson} />
                  ) : (
                    console.log(
                      day.lesson.map((item) =>
                        item.time == getTimes() ? item.time : "Не нашёл"
                      )
                    )
                  )
                )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
