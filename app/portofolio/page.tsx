import Image from "next/image";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      src: "https://picsum.photos/300/300",
      name: "Project Alpha",
      location: "New York",
    },
    {
      id: 2,
      src: "https://picsum.photos/301/301",
      name: "Project Beta",
      location: "Los Angeles",
    },
    {
      id: 3,
      src: "https://picsum.photos/302/302",
      name: "Project Gamma",
      location: "Chicago",
    },
    {
      id: 4,
      src: "https://picsum.photos/303/303",
      name: "Project Delta",
      location: "San Francisco",
    },
    {
      id: 5,
      src: "https://picsum.photos/304/304",
      name: "Project Epsilon",
      location: "Miami",
    },
    {
      id: 6,
      src: "https://picsum.photos/305/305",
      name: "Project Zeta",
      location: "Houston",
    },
  ];

  return (
    <div className='bg-gray-500 min-h-screen'>
      {/* Banner */}
      <div className='relative w-full h-96 group overflow-hidden rounded-md'>
        <Image
          src={"https://picsum.photos/1920/1080"}
          alt='Random Banner'
          layout='fill'
          objectFit='cover'
          className='transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center'>
          <h1 className='text-4xl font-bold drop-shadow-md'>Kitchen Set</h1>
          <h2 className='text-2xl drop-shadow-md'>Portofolio</h2>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8'>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className='relative overflow-hidden group shadow-md'
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.name}
              layout='responsive'
              width={300}
              height={300}
              objectFit='cover'
              className='transition-transform duration-300 group-hover:scale-110'
            />
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300'></div>
            {/* Text Overlay */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h3 className='text-lg font-bold'>{item.name}</h3>
              <p className='text-sm'>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
