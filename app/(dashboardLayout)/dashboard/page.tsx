import React from 'react'
import Link from "next/link";

import Image from 'next/image'


export const data =[
    {
        id : 1,
        bgImg:"https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
        title:"Avengers",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore accusamus distinctio officiis obcaecati accusantium exercitationem veritatis perferendis, nihil, ex laudantium aliquid commodi quaerat dolorem consectetur minus est! Qui, quam.",
        rating:5,
        button:"watch now",
        play:"Download",

    },
    {
        id : 2,
        bgImg:"https://hd.wallpaperswide.com/thumbs/marvel_doctor_strange-t2.jpg",
        title:"Doctor Strange",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore accusamus distinctio officiis obcaecati accusantium exercitationem veritatis perferendis, nihil, ex laudantium aliquid commodi quaerat dolorem consectetur minus est! Qui, quam.",
        rating:4,
        button:"watch now",
        play:"Download",

    },
    {
        id : 3,
        bgImg:"https://c4.wallpaperflare.com/wallpaper/332/744/992/dark-nature-logo-netflix-mountain-top-hd-wallpaper-thumb.jpg",
        title:"dark",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore accusamus distinctio officiis obcaecati accusantium exercitationem veritatis perferendis, nihil, ex laudantium aliquid commodi quaerat dolorem consectetur minus est! Qui, quam.",
        rating: 5,
        button:"watch now",
        play:"Download",

    },
]
function page() {



//   return (
//     <div>
//         <div className="card">
//   <Image src="https://tse2.mm.bing.net/th?id=OIP.kyrlQlB6VKaQxQWZ5GD9cgAAAA&pid=Api&P=0&h=180" className="absolute w-96 h-96" alt="image" width={200} height={200}/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   )

return (
    <div>
        <div className='flex flex-row gap-44'>
            {data.map((data) => {
                return (
                    <div className=''>
                        <Link href = {`/dashboard/${data.id}`}>
                        
                        <img className="rounded-xl" src={data.bgImg}></img>
                        </Link>
                        {/* <div>{data.bgImg}</div> */}
                        <div className='font-extrabold'>{data.title}</div>
                        <div> <p className='font-bold'>Description :</p> {data.desc}</div>
          
          <div> <p className='font-bold'>Rating :</p> {data. rating}</div>
                    </div>
                )
            })}
        </div>
    </div>
)

}

export default page