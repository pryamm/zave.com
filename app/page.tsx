export default function Home() {
  return (
    <div className='font-sans bg-white text-gray-900'>
      {/* Hero Section */}
      <section className='bg-blue-600 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Mewujudkan Impian Anda Dalam Desain dan Konstruksi
          </h1>
          <p className='text-xl mb-6'>
            Kami adalah perusahaan arsitektur dan kontraktor yang berfokus pada
            kualitas, efisiensi, dan kepuasan pelanggan.
          </p>
          <button className='bg-yellow-400 text-white py-3 px-8 rounded-full text-lg hover:bg-yellow-500'>
            Hubungi Kami
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Tentang Kami</h2>
          <p className='text-lg mb-6'>
            Kami memiliki pengalaman lebih dari 10 tahun dalam bidang
            arsitektur, konstruksi, dan pemeliharaan. Dengan tim yang
            berpengalaman dan profesional, kami memberikan solusi yang inovatif
            dan berkualitas tinggi untuk setiap proyek yang kami kerjakan.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-12'>Layanan Kami</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            {/* Service 1 */}
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition'>
              <h3 className='text-2xl font-semibold mb-4'>Arsitektur</h3>
              <p className='text-gray-700'>
                Desain kreatif dan fungsional yang disesuaikan dengan kebutuhan
                Anda. Kami menciptakan ruang yang indah dan efisien.
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition'>
              <h3 className='text-2xl font-semibold mb-4'>Konstruksi</h3>
              <p className='text-gray-700'>
                Layanan konstruksi dari awal hingga selesai dengan kualitas dan
                ketepatan waktu yang terjamin.
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition'>
              <h3 className='text-2xl font-semibold mb-4'>Pemeliharaan</h3>
              <p className='text-gray-700'>
                Pemeliharaan rutin dan perbaikan untuk memastikan bangunan Anda
                selalu dalam kondisi terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
