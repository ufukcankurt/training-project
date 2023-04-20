import React from 'react'
import styles from './locations.module.css'

import SectionTitle from '../../common/sectionTitle/SectionTitle';
import Location from '../location/Location';


const pageInfos = {
  firstTitle: "Locations | ",
  secondTitle: "Classes",
  description:
    "60 minutes full body workout led by fitness experts who use a mixture of dumbbells, bands, battle ropes, sandbags, sliders, pull-up bars, body weight and HIIT. The aim is to build both your strength and cardiovascular endurance.",
};

const LOCATIONS = [
  {
    title: "Outdoor Sessions",
    location: "Grovelands Park",
    src: "https://maps.google.com/maps?q=Grovelands%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed",
    date: "Saturday 09:30 - 10:30",
  },
  {
    title: "Indoor Sessions",
    location: "Palmers Green United Reformed Church Hall",
    src: "https://maps.google.com/maps?q=Palmers%20Green%20United%20Reformed%20Church%20Hall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    date: "Monday-Wednesday 19:30 - 20:30 & Friday 07:00 - 07:45",
  },
  {
    title: "Outdoor sessions",
    location: "Enfield Town Park",
    src: "https://www.google.com/maps/embed/v1/place?q=51.6485547,-0.0861552&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    date: "Sunday 09:30-10:30",
  },
]

const Locations = () => {
  return (
    <div className={styles.container}>
      <SectionTitle pageInfos={pageInfos} />
      <div className={styles.maps}>
        {
          LOCATIONS.map((location, index) =>
            <Location key={index} location={location} />
          )
        }
      </div>
    </div>
  )
}

export default Locations
