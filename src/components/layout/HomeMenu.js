import Image from "next/image";

export default function HomeMenu(){
    return(
        <section>
            <div>
                <div className="relative">
                    <div className="h-48 w-48 absolute left-0">
                        <Image src={'/sallad1.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                    <div className="h-48 w-48 absolute right-0">
                        <Image src={'/sallad2.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                </div>
                <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold loading-3">
                Check out
            </h3>
            <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
            </div>
            
        </section>
    );
}