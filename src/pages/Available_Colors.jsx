import black_headphone from "../assets/black-headphone.jpg"
import navy_headphone from "../assets/navy-headphone.jpg"
import Product from "../components/Product"

const Available_Colors = ({s4}) => {
  return (
    <section id="section4" ref={s4} className="min-h-screen text-center pt-10">
      <h2 className="text-neutral-800 text-5xl font-bold">Available Colors</h2>
      <div className="flex justify-around mt-20">
        <Product src={black_headphone} colorName="Black" price="₹37,900.00"/>
        <div className="flex flex-col items-center mt-104 text-black"> 
          <h3 className="font-semibold text-xl">Sandstone</h3>
          <h4 className="font-semibold text-xl mt-2">₹37,500.00</h4>
          <div className="w-fit mt-3 px-5 py-1.5 rounded-3xl border-2 border-[#78797d] cursor-pointer">
                <div className="inline-block text-center font-bold">Add to Cart</div>
                <div className="bg-neutral-900 h-2 w-2 rounded inline-block ml-2 text-center"></div>
        </div>
      </div>
        <Product src={navy_headphone} colorName="Navy" price="₹36,900.00"/>

      </div>
    </section>
  )
}

export default Available_Colors
