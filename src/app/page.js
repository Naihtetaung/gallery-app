'use client'
import Link from "next/link"
import steal from "/public/steal.jpg"
import blue from "/public/blue.jpeg"
import sadgf from "/public/sadgf.jpg"
import photo1 from "/public/photo1.jpg"
import photo11 from "/public/photo11.jpg"
import photo3 from "/public/photo3.jpeg"
import photo4 from "/public/photo4.jpeg"
import photo5 from "/public/photo5.jpg"
import photo6 from "/public/photo6.jpg"
import photo7 from "/public/photo7.jpg"
import photo8 from "/public/photo8.jpg"
import photo9 from "/public/photo9.jpg"
import photo10 from "/public/photo10.jpg"
import hantun from "/public/hantun.jpeg"
import Image from "next/image";
import "@/styles/styles.css";

export default function Homet() {
  const scrollToSession = () => {
    const sessionDiv = document.getElementById('memory');
    sessionDiv.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToPlaylist = () => {
    const sessionDiv = document.getElementById('playlist');
    sessionDiv.scrollIntoView({ behavior: 'smooth' });
  }
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
            onClick={() => scrollToSession()}
          >
            View Memory
          </Link>
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#FF6B6B] text-[#FF6B6B] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-colors duration-300"
            href="#"
            onClick={() => scrollToPlaylist()}
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
              src={photo4}
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
              src={photo1}
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
              src={photo3}
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
              src={photo11}
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
            <h3 className="text-2xl font-bold mb-4">Songs We Like</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={steal}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Steal The Show</h4>
                    <p className="text-gray-500 dark:text-gray-400">Lauv</p>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/watch?v=DwuJeGYlYyw"
                  className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300"
                >
                  <PlayIcon className="h-6 w-6" />
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={sadgf}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Wan Nae Tat Tae Chitthu</h4>
                    <p className="text-gray-500 dark:text-gray-400">Idiots</p>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/watch?v=rWRFAf6-yQE"
                  className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300"
                >
                  <PlayIcon className="h-6 w-6" />
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={blue}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Kyal Pyar Lay Nae Way Tae Nout</h4>
                    <p className="text-gray-500 dark:text-gray-400">Ko Aung</p>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/watch?v=9A3sQLeSZLo"
                  className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300"
                >
                  <PlayIcon className="h-6 w-6" />
                </Link>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    alt="Song Cover"
                    className="rounded-full mr-4"
                    height={50}
                    src={hantun}
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width={50}
                  />
                  <div>
                    <h4 className="text-lg font-bold">Thu Achit</h4>
                    <p className="text-gray-500 dark:text-gray-400">Han Tun</p>
                  </div>
                </div>
                <Link
                  href="https://www.youtube.com/watch?v=pQE24iCKl0U"
                  className="text-[#FF6B6B] hover:text-[#E55353] transition-colors duration-300"
                >
                  <PlayIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="memory"
        className="w-full py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Being Together</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 1"
              className="object-cover w-full h-60"
              height={300}
              src={photo8}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our First Contact</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">26 Aug, 2023</p>
              <p className="text-gray-700 dark:text-gray-300">
                We liked each other at telegram and start chating. It was the start of something special.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 1"
              className="object-cover w-full h-60"
              height={300}
              src={photo5}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our First Date</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">23 Jan, 2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                We met at a Sein Pan Drinks and Foods and spent few minutes talking and laughing. She did not drink too much coz bubble tea is too sweat.
                We sat down under the tree and smiles.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 1"
              className="object-cover w-full h-60"
              height={300}
              src={photo6}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Second Date</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">11 Feb, 2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                We celebrate Thae Thae's birthday and took photos, eats and walked.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 2"
              className="object-cover w-full h-60"
              height={300}
              src={photo7}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Third Date</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">25 Mar, 2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                The day that Thae Thae's exam has finished, we sit at our usual place and kissed.
                Next day Thae Thae cried.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 3"
              className="object-cover w-full h-60"
              height={300}
              src={photo10}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Start Date</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">25 Oct, 2023</p>
              <p className="text-gray-700 dark:text-gray-300">
                The most start day of our promise, Thae Thae was willing to date with me too.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <Image
              alt="Being Together 4"
              className="object-cover w-full h-60"
              height={300}
              src={photo9}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Anniversary</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">25 Oct</p>
              <p className="text-gray-700 dark:text-gray-300">
                This day will become on every single year!!
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