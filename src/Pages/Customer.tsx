import React, { Component } from 'react'
import {User} from './interfaces'
import { IBooking } from './interfaces'


export default function Customer() {

  const url =  ('https://bookings-api-igtv.onrender.com/bookings ')
  

  return (<>
    <div>Customer</div>
    <div className='Inputfields'>
    <input type='text' placeholder='Name'></input>
    <input type='range'></input>
    <input type='range'></input>
    <input type='date'></input>
    <input type='time'></input>
    </div>
    </>
  )



  }


