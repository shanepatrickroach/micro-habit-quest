import React from 'react'

const HabitItem = (props) => {

  
  const { id, name, completedToday, points } = props.habit
  const { completeHabit } = props


  return (
    <div className='rounded-lg bg-orange-200 p-4 flex justify-between items-center'>
      <h3 className='font-bold text-xl'>{name}</h3>

      
      {completedToday ? <p>done for today</p> :<button onClick={() => completeHabit(id)} className='font-semibold text-lg border border-neutral-500 p-3 rounded-lg'>Complete</button> }

     
    </div>
  )
}

export default HabitItem
