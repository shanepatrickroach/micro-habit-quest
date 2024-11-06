import { useState } from "react"
import { AddHabit, Avatar, Footer, HabitList, Header, ProgressBar } from "./components"


function App() {

  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", completedToday: false, points: 0 },
    { id: 2, name: "Stretch", completedToday: false, points: 0 },
  ]);

  const [newHabit, setNewHabit] = useState("")

  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);

  const handleAddHabit = (e) => {
    e.preventDefault()
    if (!newHabit.trim()) return;

    const newHabitObj = {
      id: habits.length + 1,
      name: newHabit,
      completedToday: false,
      points: 0
    }

    setHabits([...habits, newHabitObj])
    setNewHabit("")
  }

  const completeHabit = (id) => {

    setHabits((habits) =>

      habits.map((habit) =>
        habit.id === id && !habit.completedToday
          ? { ...habit, completedToday: true, points: habit.points + 10 }
          : habit
      )

    )
    setPoints(points + 10)
  }


  return (
    <>

      <div className="flex flex-col rounded-md m-6 p-3 gap-4 bg-gradient-to-r from-cyan-500 to-blue-500">


        <Avatar points={points} level={level} />

        <ProgressBar habits={habits} />
        <HabitList completeHabit={completeHabit} habits={habits} />

        <form className="glassify p-3 flex flex-col gap-4" onSubmit={handleAddHabit}>
          <input className="p-2 rounded-lg"type="text" placeholder="Enter a new habit" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} />
          <button type="submit" className=" text-md border border-neutral-500 p-1 rounded-lg">Add Habit</button>
        </form>


      </div>
      <Footer />
    </>
  )
}

export default App
