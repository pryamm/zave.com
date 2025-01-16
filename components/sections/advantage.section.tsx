export default function AdvantageSection() {
  const features = [
    {
      icon: "📐",
      title: "Pengalaman Beragam",
      desc: "Proyek komersial, rumah tinggal, dan ruang multifungsi.",
    },
    {
      icon: "🔧",
      title: "One Stop Solution",
      desc: "Desain interior, eksterior, visualisasi 3D, hingga pembangunan.",
    },
    {
      icon: "⏱️",
      title: "Renovasi Efisien",
      desc: "Renovasi cepat dengan penyelesaian tepat waktu.",
    },
    {
      icon: "🏗️",
      title: "Workshop Terintegrasi",
      desc: "Material berkualitas tinggi untuk hasil maksimal.",
    },
  ];
  return (
    <section className='py-16 px-4 bg-gray-100 relative overflow-hidden'>
      <div className='absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-white to-blue-100 opacity-50'></div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          {/* Bagian Kiri: Tagline dan Deskripsi */}
          <div>
            <h2 className='text-6xl font-bold text-blue-600 mb-4'>
              Alasan Zave Menjadi Favorit
            </h2>
            <p className='text-3xl text-gray-700'>
              Karena Zave selalu menghadirkan kombinasi sempurna antara
              kualitas, desain, dan kepercayaan untuk setiap kebutuhan Anda.
            </p>
          </div>

          {/* Bagian Kanan: Keunggulan */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='relative group p-6 bg-white rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'
              >
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 text-xl font-bold rounded-full shadow-md'>
                  {feature.icon}
                </div>
                <h3 className='text-4xl font-bold text-blue-600 mt-10 mb-3 text-center'>
                  {feature.title}
                </h3>
                <p className='text-2xl text-gray-700 text-center'>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
