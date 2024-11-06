import React from 'react'
import HabitItem from './HabitItem'

const HabitList = (props) => {

  const { completeHabit, habits} = props

  return (
    <div className='glassify p-4 flex flex-col gap-5'>
      {habits.map((habitObj, habitIndex) => {
        return (
          <HabitItem completeHabit={completeHabit} habit={habitObj} key={habitIndex}/>
        )
      })}
    </div>
  )
}

export default HabitList
