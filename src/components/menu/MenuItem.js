
export  default function  MenuItem(){
    return(
        <div className="bg-gray-200 rounded-lg p-4 text-center hover:bg-white hover:shadow-md
        hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto"  alt="Pizza" />
            </div>
        <h4 className="font-semibold text-xl my-3">Pepporoni Pizza</h4>
        <p className="text-gray-500 text-sm">
            Indulge in a symphony of flavors with our mouthwatering pizzas, expertly crafted to perfection
             and now available on our online food platform!
        </p>
        <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">
            Add to cart $12
        </button>
    </div>
    );
}