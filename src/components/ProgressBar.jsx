import React from 'react'

const ProgressBar = ({ habits }) => {


  const completedCount = habits.filter(habit => habit.completedToday).length
  const totalHabits = habits.length
  const progress = (completedCount / totalHabits) * 100

  console.log(completedCount)

  return (
    <div className='glassify p-4 flex flex-col gap-2'>
      <h3>Your progress today: {progress}%</h3>
      <div id="progress-bar">
        <div id='current-progress' style={{ width: `${progress}%` }}></div>
      </div>

    </div>

  )
}

export default ProgressBar
