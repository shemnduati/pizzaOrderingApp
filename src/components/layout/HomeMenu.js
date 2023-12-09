import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div>
                <div className="absolute left-0 right-0 h-full w-full justify-start">
                    <div className="h-48 w-48 absolute -top-[70] -left-12 -z-10">
                        <Image src={'/sallad1.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                    <div className="h-48 w-48 absolute -top-[100] -right-12 -z-10">
                        <Image src={'/sallad2.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                </div>
                <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold loading-3">
                Check out
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-300 rounded-lg p-4 text-center">
                    <img src="/pizza.png" alt="Pizza"></img>
                    <h4 className="font-semibold text-xl my-2">Pepporoni Pizza</h4>
                    <p className="text-gray-500 text-sm">
                        Indulge in a symphony of flavors with our mouthwatering pizzas, expertly crafted to perfection
                         and now available on our online food platform!
                    </p>
                    <button className="bg-primary text-white rounded-full px-4 py-2">
                        Add to cart $12
                    </button>
                </div>
            </div>
            </div>
            
        </section>
    );
}