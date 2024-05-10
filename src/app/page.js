
import Link from "next/link"
import profileEg from "/public/profileEg.jpeg"
import Image from "next/image";
import "@/styles/styles.css";

export default function Homet() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#333] dark:text-[#F5F5F5] font-['Montserrat', 'sans-serif']">
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF5EE] to-[#F5F5F5] dark:from-[#2C2C2C] dark:to-[#1A1A1A]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Journey Together</h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-center mb-8">
          Celebrating the love and memories we've shared.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6B6B] text-white rounded-full hover:bg-[#E55353] transition-colors duration-300"
            href="#"
          >
            View Gallery
          </Link>
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#FF6B6B] text-[#FF6B6B] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300"
            href="#"
          >
            Listen to Playlist
          </Link>
        </div>
      </section>
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center" id="gallery">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Gallery Image 1"
              className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link className="text-white text-lg font-bold" href="#">
                View
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Gallery Image 2"
              className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link className="text-white text-lg font-bold" href="#">
                View
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Gallery Image 3"
              className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link className="text-white text-lg font-bold" href="#">
                View
              </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Gallery Image 4"
              className="object-cover w-full h-60 transform group-hover:scale-105 transition-transform duration-300"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link className="text-white text-lg font-bold" href="#">
                View
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-[#FFF5EE] dark:from-[#1A1A1A] dark:to-[#2C2C2C]"
        id="playlist"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Our Playlist</h2>
        <div className="w-full max-w-3xl bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Our Favorite Songs</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={profileEg}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Thinking Out Loud</h4>
                    <p className="text-gray-500 dark:text-gray-400">Ed Sheeran</p>
                  </div>
                </div>
                <button className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300">
                  <PlayIcon className="h-6 w-6" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={profileEg}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Perfect</h4>
                    <p className="text-gray-500 dark:text-gray-400">Ed Sheeran</p>
                  </div>
                </div>
                <button className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300">
                  <PlayIcon className="h-6 w-6" />
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={profileEg}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Photograph</h4>
                    <p className="text-gray-500 dark:text-gray-400">Ed Sheeran</p>
                  </div>
                </div>
                <button className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300">
                  <PlayIcon className="h-6 w-6" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Being Together</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 1"
              className="object-cover w-full h-60"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our First Date</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">June 15, 2018</p>
              <p className="text-gray-700 dark:text-gray-300">
                We met at a cozy cafe and spent hours talking and laughing. It was the start of something special.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 2"
              className="object-cover w-full h-60"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Engagement</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">December 24, 2020</p>
              <p className="text-gray-700 dark:text-gray-300">
                Under the twinkling lights of a Christmas tree, you got down on one knee and asked me to be your
                forever.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 3"
              className="object-cover w-full h-60"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Wedding</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">June 1, 2021</p>
              <p className="text-gray-700 dark:text-gray-300">
                The most beautiful day of our lives, surrounded by our loved ones as we exchanged vows and became one.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 4"
              className="object-cover w-full h-60"
              height={300}
              src={profileEg}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Anniversary</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">June 1, 2022</p>
              <p className="text-gray-700 dark:text-gray-300">
                We celebrated another year of love, laughter, and adventure. Cheers to many more years together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}