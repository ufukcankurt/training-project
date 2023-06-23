import React from 'react'
import Swal from 'sweetalert2'


const Alert = ({ status }) => {
  console.log("status", status)
  let timerInterval
  Swal.fire({
    title: status === "success" ? 'Message sent successfully!' : 'Message cannot sent!',
    timer: 2000,
    color: status === "success" ? 'green' : 'red',
    icon: status === "success" ? 'success' : 'error',
    timerProgressBar: true,
    didOpen: () => {
      Swal.getDenyButton()
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  })
  return (
    <></>
  )
}

export default Alert
