import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from '@/components/layout/SectionHeader';

export default function Home() {
  return (
   <>
    
    <Hero />
    <HomeMenu />
    <section className='text-center my-16'>
      <SectionHeader 
       subHeader={'Our Story'}
       mainHeader={'About us'}
      />
      <div className='max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4'>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
      quia. Quo neque error repudiandae fuga? 
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
      quia. Quo neque error repudiandae fuga? 
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
      quia. Quo neque error repudiandae fuga? 
      </p>
      </div>
    </section>
    <section className='text-center my-8'>
      <SectionHeader 
       subHeader={'Don\'t hesistate'}
       mainHeader={'Contact us'}
       />
       <div className='my-8'>
       <a className='text-4xl underline text-gray-500' href="tel:+254-71-551-1302">+254-71-551-1302</a>
       </div>
    </section>
   </>
  )
}
