import { useState } from "react";
import Description from "./description";
import ImageCard from "./ImageCard";
import Share from "./share";
import Submit from "./submit";

var numValue = 10;

const MainCard = (props) => {
  // for loading while data is fetching
  const [loading, setLoading] = useState(false);

  // Index of image slider
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  // dummy data for preloading
  const [data, setData] = useState([
    {
      "copyright": "Babak Tafreshi",
      "date": "2010-06-25",
      "explanation": "A meteor's streak and the arc of the Milky Way hang over the imposing mountain fortress of Alamut in this starry scene. Found in the central Alborz Mountains of Iran, Alamut Castle was built into the rock in the 9th century. The name means Eagle's Nest. Home of the legendary Assassins featured in the adventure movie Prince of Persia, Alamut was also historically a center for libraries and education. For a time, it was the residence of important 13th century Persian scholar and astronomer Nasir al-Din al-Tusi. To identify the stars in a night sky Tusi certainly pondered, just slide your cursor over the image. Highlights include bright white stars Deneb (in Cygnus), Vega, and Altair, nebulae near the Galactic Center, and the dark obscuring dust clouds of the Milky Way also known as the Great Rift. Lights at the lower right are from small villages and the capital Tehran, over 100 kilometers away to the southwest.",
      "hdurl": "https://apod.nasa.gov/apod/image/1006/Alamut-Babak2.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Starry Night of Alamut",
      "url": "https://apod.nasa.gov/apod/image/1006/Alamut-Babak2.jpg"
    },
    {
      "copyright": "Isaac Guti\ufffdrrez Pascual",
      "date": "2010-09-15",
      "explanation": "Sometimes the sky above can become quite a show. Last week, for example, the Moon and Venus converged, creating quite a sight by itself for sky enthusiasts around the globe.  From some locations, though, the sky was even more picturesque. In the above image taken last week from Spain, a crescent Moon and the planet Venus, on the far right, were captured during sunset posing against a deep blue sky.  In the foreground, dark storm clouds loom across the image bottom, while a white anvil cloud shape appears above. Black specks dot the frame, caused by a flock of birds taking flight. Very soon after this picture was taken, however, the birds passed by, the storm ended, and Venus and the Moon set.  The Moon and Venus have now separated, although Venus will remain visible at sunset for the rest of this month.",
      "hdurl": "https://apod.nasa.gov/apod/image/1009/venusmoon_pascual_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Clouds, Birds, Moon, Venus \n",
      "url": "https://apod.nasa.gov/apod/image/1009/venusmoon_pascual.jpg"
    },
    {
      "date": "2001-02-08",
      "explanation": "Radio waves, like visible light, are electromagnetic radiation and radio telescopes can \"see\" -- their signals translate into radio images of the cosmos. While individually even the largest radio telescopes have very blurry vision compared to their optical counterparts, networks of radio telescopes can combine signals to produce sharper pictures. In fact, using an NRAO supercomputer in New Mexico, USA and technique called VLBI (Very Long Baseline Interferometry), the European network of radio telescopes (EVN) has produced pictures of distant galaxies at a resolution some three times higher than the Hubble Space Telescope. Penetrating obscuring dust, the false-color EVN radio images are inset above according to their relative location in an optical image of the famous Hubble Deep Field region of the sky. (Yellow lines superimposed on the optical image are radio intensity contours from a single telescope.) The bright cosmic radio source in the middle of each inset corresponds to a galaxy. Impressively, the radio sources appear to be so small, less than about 600 light-years across in actual size, that they are thought to be associated with massive central black holes in the distant deep field galaxies.",
      "hdurl": "https://apod.nasa.gov/apod/image/0102/deepfield_evn_big.gif",
      "media_type": "image",
      "service_version": "v1",
      "title": "Distant Galaxies in Radio Vision",
      "url": "https://apod.nasa.gov/apod/image/0102/deepfield_evn.jpg"
    },
    {
      "date": "2016-05-02",
      "explanation": "Where is NASA's rover Curiosity going on Mars? Its geographical goals are on the slopes of Mount Sharp, whose peak is seen in the background on the right.  A key scientific goal, however, remains to better assess when and where conditions on Mars were once suitable for life, in particular microbial life.  To further this goal, Curiosity was directed to cross the rugged terrain of Nautkluft Plateau, visible in the featured image on the foreground left.  Curiosity is crossing toward smoother uphill sites with rocks containing hematite and sulfates, sites that could give the rolling rover new clues on how long this part of Mars was wet -- and hence more favorable for life -- before drying out.  Of recent concern, however, is Curiosity's aluminum wheels, which are showing increasing signs of wear.  Although already fulfilling the goals of its two year study, Curiosity's mission has been extended as it continues to uncover valuable information about the extraordinary past of Mars, the next planet out from the Sun from Earth.",
      "hdurl": "https://apod.nasa.gov/apod/image/1605/MarsSharp_Curiosity_8703.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Crossing Mars",
      "url": "https://apod.nasa.gov/apod/image/1605/MarsSharp_Curiosity_1080.jpg"
    },
    {
      "date": "2004-08-26",
      "explanation": "One million seconds of x-ray image data were used to construct this view of supernova remnant Cassiopeia A, the expanding debris cloud from a stellar explosion. The stunningly detailed image from the Chandra Observatory will allow an unprecedented exploration of the catastrophic fate that awaits stars much more massive than the Sun. Seen in false-color, Cas A's outer green ring, 10 light-years or so in diameter, marks the location of the expanding shock from the original supernova explosion. At about 10 o'clock around the ring, a structure extends beyond it, evidence that the initial explosion may have also produced energetic jets. Still glowing in x-rays, the tiny point source near the center of Cas A is a neutron star, the collapsed remains of the stellar core. While Cas A is about 10,000 light-years away, light from the supernova explosion first reached Earth just over 300 years ago.",
      "hdurl": "https://apod.nasa.gov/apod/image/0408/cassA6_cxo_full.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Cassiopeia A in a Million",
      "url": "https://apod.nasa.gov/apod/image/0408/cassA6_cxo_c1.jpg"
    },
    {
      "copyright": "Tom AbelRalf KaehlerKIPACSLACAMNH",
      "date": "2017-10-31",
      "explanation": "Is our universe haunted?  It might look that way on this dark matter map.  The gravity of unseen dark matter is the leading explanation for why galaxies rotate so fast, why galaxies orbit clusters so fast, why gravitational lenses so strongly deflect light, and why visible matter is distributed as it is both in the local universe and on the cosmic microwave background.  The featured image from the American Museum of Natural History\ufffds Hayden Planetarium Space Show Dark Universe highlights one example of how pervasive dark matter might haunt our universe.  In this frame from a detailed computer simulation, complex filaments of dark matter, shown in black, are strewn about the universe like spider webs, while the relatively rare clumps of familiar baryonic matter are colored orange. These simulations are good statistical matches to astronomical observations.  In what is perhaps a scarier turn of events, dark matter -- although quite strange and in an unknown form -- is no longer thought to be the strangest source of gravity in the universe. That honor now falls to dark energy, a more uniform source of repulsive gravity that seems to now dominate the expansion of the entire universe.    Not only Halloween: Today is Dark Matter Day.",
      "hdurl": "https://apod.nasa.gov/apod/image/1710/DarkMatter_KipacAmnh_1200.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Dark Matter in a Simulated Universe",
      "url": "https://apod.nasa.gov/apod/image/1710/DarkMatter_KipacAmnh_960.jpg"
    },
    {
      "date": "2008-08-23",
      "explanation": "The matter in galaxy cluster 1E 0657-56, fondly known as the \"bullet cluster\", is shown in this composite image. A mere 3.4 billion light-years away, the bullet cluster's individual galaxies are seen in the optical image data, but their total mass adds up to far less than the mass of the cluster's two clouds of hot x-ray emitting gas shown in red. Representing even more mass than the optical galaxies and x-ray gas combined, the blue hues show the distribution of dark matter in the cluster. Otherwise invisible to telescopic views, the dark matter was mapped by observations of gravitational lensing of background galaxies. In a text book example of a shock front, the bullet-shaped cloud of gas at the right was distorted during the titanic collision between two galaxy clusters that created the larger bullet cluster itself. But the dark matter present has not interacted with the cluster gas except by gravity. The clear separation of dark matter and gas clouds is considered direct evidence that dark matter exists.   digg_url = 'http://apod.nasa.gov/apod/ap080823.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0808/bulletcluster_comp_f2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Matter of the Bullet Cluster",
      "url": "https://apod.nasa.gov/apod/image/0808/bullet_cluster_c60w.jpg"
    },
    {
      "date": "1996-09-08",
      "explanation": "Jupiter's moon \r Io is turning out to be our \r Solar System's geologic powerhouse. The churning moon was photographed again just recently on June 27th and again shows signs of violent activity. \r Shown above are photographs of the volcano Euboea Fluctus taken at different times. The black and white photograph on the upper left was taken by the \r Voyager 1 spacecraft when it flew by in 1979, the upper right and lower left photographs were taken in 1996 by the \r Galileo spacecraft, while the lower right photograph is a color image taken by Voyager 2, also in 1979. The upper right Galileo picture has been artifically changed to simulate the color sensitivity of the \r Voyager 2 mission. The marked difference in the two images is highlighted by new red and yellow deposits. These markings may indicate that Euboea Fluctus erupts in an unusual fashion, possibly caused by an obstruction near the volcanic vent.\r \r",
      "hdurl": "https://apod.nasa.gov/apod/image/euboea_gal_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Volcano Euboea Fluctus On Io",
      "url": "https://apod.nasa.gov/apod/image/euboea_gal.gif"
    },
    {
      "date": "2004-03-03",
      "explanation": "Was Mars ever wet enough to support life?  To help answer this question, NASA launched two rover missions to the red planet and landed them in regions that satellite images indicated might have been covered with water.  Yesterday, mounting evidence was released indicating that the Mars Opportunity rover had indeed uncovered indications that its landing site, Meridiani Planum, was once quite wet.  Evidence that liquid water once flowed includes the physical appearance of many rocks, rocks with niches where crystals appear to have grown, and rocks with sulfates.  Pictured above, Opportunity looks back on its now empty lander.  Visible is some of the light rock outcropping that yielded water indications, as well as the rim of the small crater where Opportunity landed.  The rover will continue to explore its surroundings and try to determine the nature and extent that water molded the region.",
      "hdurl": "https://apod.nasa.gov/apod/image/0403/emptynest_opportunity_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Opportunity Rover Indicates Ancient Mars Was Wet",
      "url": "https://apod.nasa.gov/apod/image/0403/emptynest_opportunity.jpg"
    },
    {
      "copyright": "Rob Ratkowski",
      "date": "2006-06-10",
      "explanation": "A waxing crescent Moon shines over the caldera of dormant volcano Haleakala and observatory domes in this dramatic view from above the clouds. Looking west from Maui, Hawaii on May 31st, the scene also records the lights of Honolulu on the horizon. Near the strongly overexposed crescent is bright planet Saturn, but included in the skyscape are planet Mars and the Gemini stars Castor and Pollux. Of course, skywatchers also found star cluster M44, The Beehive Cluster, in this early evening sky, wedged between Saturn and the Moon. In fact, as it closes with Saturn, Mars will pass in front of the Beehive on June 15, so just keep looking west. (Can't find all the players? Click here for help.)",
      "hdurl": "https://apod.nasa.gov/apod/image/0606/moonHaleakala_ratkowski_f.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Moon Over Haleakala",
      "url": "https://apod.nasa.gov/apod/image/0606/moonHaleakala_ratkowski_f50.jpg"
    }
  ])
  const getData = async (numValue) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=N2399q8wrkEEafMRv967elKhHmOlo1IhfrkJ2ZeW&count=${numValue}&thumbs=true`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {
      responseJson.forEach(x => {
        if (x.like == null)
          x.like = 0
        x.explanation = x.explanation.split('digg_url')[0]
      })
      setData(responseJson);
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      setData(responseJson);
    }
  }

  // Description Functions
  const handleLikes = (index, e) => {
    const arr = [...data]
    arr[index].like = arr[index].like === 0 ? 1 : 0
    setData(arr)
  }

  const handleNext = (index, e) => {
    setIndex(index < numValue - 1 ? index + 1 : 0)
  }

  const handleRandom = (e) => {
    setIndex(Math.floor(Math.random() * numValue))
  }



  return (
    <>
      <Submit getData={getData} numValue={numValue} />
      <div className="card mb-3" >
        <div className="row no-gutters">
          <ImageCard loading={loading} data={data} index={index} handleSelect={handleSelect} />
          <Description loading={loading} data={data} index={index} handleLikes={handleLikes} handleNext={handleNext} handleRandom={handleRandom} />
        </div>
      </div>

      <Share data={data} index={index} />
    </>
  );
}
export default MainCard;