import { star } from "../assets/icons"
const PopularProductsCard = ({imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
      src={imgURL} 
      alt={name}
      className="w-[280px] h-[280px] max-sm:m-auto" 
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" 
         width={24} height={24}/>
         <p className="text-xl font-montserrat text-slate-gray leading-normal">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 text-2xl font-montserrat text-coral-red leading-normal font-semibold">{price}</p>
      </div>
  )
}

export default PopularProductsCard