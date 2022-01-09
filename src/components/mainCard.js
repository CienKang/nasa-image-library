import { useState } from "react";
import { Button, Carousel } from "react-bootstrap";



var numValue = 6;


const MainCard = () => {
  
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const [data, setData] = useState([
    {
      "date": "2015-07-09",
        "explanation": "An image snapped on July 7 by the New Horizons spacecraft while just under 5 million miles (8 million kilometers) from Pluto is combined with color data in this most detailed view yet of the Solar System's most famous world about to be explored. The region imaged includes the tip of an elongated dark area along Pluto's equator already dubbed \"the whale\". A bright heart-shaped region on the right is about 1,200 miles (2,000) kilometers across, possibly covered with a frost of frozen methane, nitrogen, and/or carbon monoxide. The view is centered near the area that will be seen during New Horizons much anticipated July 14 closest approach to a distance of about 7,750 miles (12,500 kilometers).",
        "hdurl": "https://apod.nasa.gov/apod/image/1507/2015Jul8_plutoNH_nasajhuaplswri.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "5 Million Miles from Pluto",
        "url": "https://apod.nasa.gov/apod/image/1507/2015Jul8_plutoNH_nasajhuaplswri950.jpg",
        "like":0
      },
      {
        "date": "2007-10-16",
        "explanation": "What could cause a bang this big?  This supernova explosion was so inherently bright that it could be seen nearly 5 billion light years away (a redshift of 0.28) even with a small telescope. Specific colors emitted during SN 2005ap indicate that it was a Type II supernova, a breed of stellar explosion that results when a high mass star begins fusing heavy elements in or near its core.  Type II supernovas may be more powerful than their Type Ia cousins, but they are not currently more useful cosmologically because astronomers don't understand how to accurately recover their intrinsic brightnesses.  It is therefore dimmer Type Ia supernovas that are used by astronomers to calibrate the distance scale of the nearby universe.  Were Type II supernova better understood, astronomers might be able to probe distances further into the universe, and so probe the stability of the strange dark energy that dominates the present universe. Pictured above in a digitally compressed image, the bright supernova SN 2005ap is visible on the right where no exploding star had been seen on the left less than three months before.",
        "hdurl": "https://apod.nasa.gov/apod/image/0710/sn2005ap_het_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "SN 2005ap: The Brightest Supernova Yet Found",
        "url": "https://apod.nasa.gov/apod/image/0710/sn2005ap_het.jpg",
        "like":0
      },
    {
      "date": "2001-09-23",
      "explanation": "Where did all the stars go?  What used to be considered a hole in the sky is now known to astronomers as a dark molecular cloud.  Here, a high concentration of dust and molecular gas absorb practically all the visible light emitted from background stars.  The eerily dark surroundings help make the interiors of molecular clouds some of the coldest and most isolated places in the universe.  One of the most notable of these dark absorption nebulae is a cloud toward the constellation Ophiuchus known as Barnard 68, pictured above.  That no stars are visible in the center indicates that Barnard 68 is relatively nearby, with measurements placing it about 500 light-years away and half a light-year across.  It is not known exactly how molecular clouds like Barnard 68 form, but it is known that these clouds are themselves likely places for new stars to form.",
        "hdurl": "https://apod.nasa.gov/apod/image/0109/barnard68_vlt_big.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Molecular Cloud Barnard 68",
        "url": "https://apod.nasa.gov/apod/image/0109/barnard68_vlt.jpg",
        "like":0
      },
      {
        "copyright": "Rogelio Bernal Andreo",
        "date": "2012-10-09",
        "explanation": "It's easy to get lost following the intricate filaments in this detailed mosaic image of faint supernova remnant Simeis 147 (S147). Also cataloged as Sh2-240, it covers nearly 3 degrees or 6 full moons on the sky. That's about 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. Anchoring the frame at the right, bright star Elnath (Beta Tauri) is seen towards the boundary of the constellations Taurus and Auriga, almost exactly opposite the galactic center in planet Earth's sky. This sharp composite includes image data taken through a narrow-band filter to highlight emission from hydrogen atoms tracing the shocked, glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But the expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.",
        "hdurl": "https://apod.nasa.gov/apod/image/1210/mbp_2011-11_Simeis147Andreo.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Simeis 147: Supernova Remnant",
        "url": "https://apod.nasa.gov/apod/image/1210/mp_2011-11_Simeis147Andreo.jpg",
        "like":0
      },
      {
        "copyright": "Steve Milne",
        "date": "2019-03-27",
        "explanation": "NGC 1333 is seen in visible light as a reflection nebula, dominated by bluish hues characteristic of starlight reflected by interstellar dust. A mere 1,000 light-years distant toward the heroic constellation Perseus, it lies at the edge of a large, star-forming molecular cloud. This striking close-up spans about two full moons on the sky or just over 15 light-years at the estimated distance of NGC 1333. It shows details of the dusty region along with telltale hints of contrasty red emission from Herbig-Haro objects, jets and shocked glowing gas emanating from recently formed stars. In fact, NGC 1333 contains hundreds of stars less than a million years old, most still hidden from optical telescopes by the pervasive stardust. The chaotic environment may be similar to one in which our own Sun formed over 4.5 billion years ago.",
        "hdurl": "https://apod.nasa.gov/apod/image/1903/A_NGC1333_APOD.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "NGC 1333: Stellar Nursery in Perseus",
        "url": "https://apod.nasa.gov/apod/image/1903/A_NGC1333_APOD1024.jpg",
        "like":0
      },
    {
      "date": "2010-11-09",
      "explanation": "Why is there a line segment on the sky? In one of the more precise alignments known in the universe, what is pictured above is actually a disk galaxy being seen almost perfectly edge on. The image from the Hubble Space Telescope is a spectacular visual reminder of just how thin disk galaxies can be.  NGC 4452, a galaxy in the nearby Virgo Cluster of Galaxies, is so thin that it is actually difficult to determine what type of disk galaxy it is.  Its lack of a visible dust lane indicates that it is a low-dust lenticular galaxy, although it is still possible that a view from on top would reveal spiral structure. The unusual stellar line segment spans about 35,000 light years from end to end. Near NGC 4452's center is a slight bulge of stars, while hundreds of background galaxies are visible far in the distance.  Galaxies that appear this thin are rare mostly because our Earth must reside (nearly) in the extrapolated planes of their thin galactic disks.  Galaxies that actually are this thin are relatively common -- for example our own Milky Way Galaxy is thought to be about this thin.",
      "hdurl": "https://apod.nasa.gov/apod/image/1011/ngc4452_hst_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "NGC 4452: An Extremely Thin Galaxy",
      "url": "https://apod.nasa.gov/apod/image/1011/ngc4452_hst.jpg",
      "like":0
    }
  ])
  const getData = async (numValue) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=N2399q8wrkEEafMRv967elKhHmOlo1IhfrkJ2ZeW&count=${numValue}`;
  
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      responseJson.forEach(x=>{
        if(x.like == null)
        x.like = 0
      })
    setData(responseJson);
    setIndex(1);
    }

  }


  const handleLikes = (index) =>{
      if(data[index].like === 0)
      data[index].like = 1
      else data[index].like = 0 
      console.log(data[index].like)
      setData(data)
  }
  
  return (
    <>
    <button onClick={()=>getData(numValue)} >Click Me</button>
    <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-sm-5">
    <Carousel activeIndex={index} onSelect={handleSelect} >
         {
          data.map((x, i) => (
            <Carousel.Item >
               <img className="d-block w-100" src={x.url} alt="First slide" />
               <Carousel.Caption>
                 <h5>{x.date}</h5>
             </Carousel.Caption>
             </Carousel.Item>
           )
           )
         }
       </Carousel>
    </div>
    <div className="col-sm-7" >
      <div className="card-body">
        <h5 className="card-title ti">{data[index].title}</h5>
        <p clasNames="card-title tex">{data[index].explanation}</p>
        <div className="row mt-3">
          <div className="col-sm-4">
        <Button className="btn btn-block btn-danger " onClick={()=> handleLikes(index)}>
        {data[index].like ===0 ? <>Liked <i class="fa fa-heart"></i></> : <>Disliked <i class="fa fa-heart-broken"></i></>}
          </Button>
          </div>
          <div className="col-sm-4">
          <Button className="btn btn-block btn-info">Next <i class="fas fa-chevron-circle-right"></i> </Button>
          </div>
          <div className="col-sm-4">
          <Button className="btn btn-block btn-dark">Random <i class="fas fa-random"></i> </Button>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}
export default MainCard;