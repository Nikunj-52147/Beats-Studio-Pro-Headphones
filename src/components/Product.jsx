

const Product = ({src, colorName, price}) => {
  return (
    <div className="text-black flex flex-col">
      <img src={src} alt={colorName} width={400}/>
      <div className="flex flex-col items-center mt-4"> 
        <h3 className="text-xl font-semibold">{colorName}</h3>
        <h4 className="text-xl font-semibold mt-2">{price}</h4>
        <div className="w-fit mt-3 px-5 py-1.5 rounded-3xl border-2 border-[#78797d] cursor-pointer">
              <div className="inline-block text-center font-bold">Add to Cart</div>
              <div className="bg-neutral-900 h-2 w-2 rounded inline-block ml-2 text-center"></div>
      </div>
      </div>
    </div>
  )
}

export default Product
