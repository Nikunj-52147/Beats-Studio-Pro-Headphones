

const Sound_Profile = ({src, desc}) => {
  return (
    <div className="text-black flex items-center gap-10 text-2xl">
        <div className="w-fit bg-neutral-200 rounded-2xl p-2">

      <img src={src} alt="" width={70} className=""/>
        </div>
      <p>{desc}</p>
    </div>
  )
}

export default Sound_Profile
