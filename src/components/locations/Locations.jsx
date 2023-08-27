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
    src: "https://www.google.com/maps/embed/v1/place?q=Great+Bear+Fitness+UK+(+Formerly+Mammoth+Fitness+UK),+Grovelands+Park,+London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    date: "Saturday 09:30 - 10:30",
  },
  {
    title: "Outdoor sessions",
    location: "Enfield Town",
    src: "https://www.google.com/maps/embed/v1/place?q=Great+Bear+Fitness+UK+(+Formerly+Mammoth+Fitness+UK+),+Cecil+Road,+Enfield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    date: "Sunday 09:30-10:30",
  },
  {
    title: "Indoor Sessions",
    location: "Palmers Green United Reformed Church Hall",
    src: "https://maps.google.com/maps?q=Palmers%20Green%20United%20Reformed%20Church%20Hall&t=&z=13&ie=UTF8&iwloc=&output=embed",
    date: "Monday-Wednesday 19:30 - 20:30 & Friday 07:00 - 07:45",
  },
  {
    title: "Indoor sessions",
    location: "Saint Stephen Church of England",
    src: "https://www.google.com/maps/embed/v1/place?q=Saint+Stephen+Church+of+England,+Village+Road,+Enfield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    date: "Tuesday 18:00 - 19:00 &  Thursday 07:00 - 08:00",
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

// <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;"><div id="embed-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Saint+Stephen+Church+of+England,+Village+Road,+Enfield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="my-codefor-googlemap" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization">premium bootstrap themes</a><style>#embed-map-display img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}</style></div>