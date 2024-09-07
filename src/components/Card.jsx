    const Card = ({ image, title, subtitle, techstack, link }) => {
        return (
        <a href={link} className="m-4 block max-w-sm overflow-hidden rounded-lg">
            <div className="relative">
                <img className="w-full" src={image} alt={title}/>
                <div className="flex flex-col justify-between p-4 text-white">
                    <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                    <p className="mb-4 text-sm font-medium">{subtitle}</p>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-sm font-medium bg-gray-500 border-0 rounded-md p-4">{techstack}</p>
                        <button className='text-blue-500 font-semibold'>{link}</button>
                    </div>
                </div>
            </div>
        </a>
        )
    }
    
    export default Card;
    
