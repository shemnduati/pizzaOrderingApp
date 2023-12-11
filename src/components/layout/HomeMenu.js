import Image from "next/image";
import MenuItem from '@/components/menu/MenuItem';
import SectionHeader from '@/components/layout/SectionHeader';

export default function HomeMenu(){
    return(
        <section>
            <div>
                <div className="absolute left-0 right-0 w-full justify-start">
                    <div className="h-48 w-48 absolute -top-[70] -left-12 -z-10">
                        <Image src={'/sallad1.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                    <div className="h-48 w-48 absolute -top-[100] -right-12 -z-10">
                        <Image src={'/sallad2.png'} layout={'fill'} odjectFit={'contain'} alt={'sallad'} />
                    </div>
                </div>
                <div className="text-center mb-4">
                <SectionHeader 
                  subHeader={'check out'}
                  mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </div>
            </div>
            
        </section>
    );
}