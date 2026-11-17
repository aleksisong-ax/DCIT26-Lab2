const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Reusable weekly timetable. Highlights the current weekday.
export default function ScheduleGrid({ subjects }) {
  const today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
  return (
    <div className="sis-week">
      {DAYS.map((day) => {
        const list = subjects.filter((subject) => subject.days.includes(day));
        return (
          <div key={day} className={`sis-day${day === today ? ' is-today' : ''}`}>
            <h4>{day}{day === today && <em>Today</em>}</h4>
            {list.length ? list.map((subject) => (
              <div key={subject.code} className="sis-slot">
                <strong>{subject.code}</strong>
                <span>{subject.title}</span>
                <span>{subject.time}</span>
                <span>{subject.room} · {subject.instructor}</span>
              </div>
            )) : <p className="sis-noclass">No classes</p>}
          </div>
        );
      })}
    </div>
  );
}
