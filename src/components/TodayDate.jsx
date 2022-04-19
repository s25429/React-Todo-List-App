import { useState, useEffect } from 'react'

const TodayDate = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December', 
  ]

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const [time, setTime] = useState('')

  useEffect(() => {
    const getTime = () => {
      const time = new Date()
  
      let hours = time.getHours()
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()
  
      return `${doubleDigits(hours)}:${doubleDigits(minutes)}:${doubleDigits(seconds)}`
    }

    const doubleDigits = (num) => {
      return `${num < 10 ? '0' : ''}${num}`
    }

    if (time === '') setTime(getTime())
    setTimeout(() => { setTime(getTime()) }, 1000)
  }, [time])

  const getDate = () => {
    const date = new Date()

    let full_year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    let weekday = date.getDay()

    let ordinal = ''
    switch (day.toString().slice(-1)) {
      case '1': ordinal = 'st'; break
      case '2': ordinal = 'nd'; break
      case '3': ordinal = 'rd'; break
      default:  ordinal = 'th';
    }

    return `${day}${ordinal} of ${months[month]} ${full_year}, ${weekdays[weekday]}`
  }

  return (
    <div className='today-date'>
      <h2 className='ff-josefin fs-small'>Today is</h2>
      <h2 className='ff-josefin fs-small'>{getDate()}</h2>
      <h2 className='ff-josefin fs-small'>{time}</h2>
    </div>
  )
}

export default TodayDate