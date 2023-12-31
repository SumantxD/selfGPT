import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=" px-[15vw] h-[100vh] flex">
        <div className=" h-1/2 w-full my-auto relative">
          <div className=" bg-[#0a0047] h-[60vh] aspect-square -z-10 rounded-full absolute transform -translate-x-[13rem] -translate-y-[10rem]"></div>
          <div className=" bg-[#97d3f6] h-[55vh] aspect-square -z-20 rounded-full absolute transform -translate-x-[13rem] -translate-y-[10rem]"></div>

          <div className=" text-9xl font-extrabold font-[Open Sans] flex">
            <p className=" text-[#97d3f6] mr-3">Self</p>
            <p className=" text-[#cc79fa]">GPT</p>
          </div>

          <div className="flex">
            <div>
              <p className=" mt-2 text-xl text-[#cc79fa]">
                meet your AI self !
              </p>

              <p className=" mt-20 ml-2 mb-2">today is : -</p>
              <div className=" flex">
                <div className=" w-24 h-24 border-4 border-[#2c316a] rounded-2xl mr-5 flex">
                  <div className=" my-auto mx-auto flex-col">
                    <p className=" text-center mb-3 text-[#cc79fa] text-2xl font-bold">
                      {new Date().toLocaleString("en-US", { day: "2-digit" })}
                    </p>
                    <p className=" text-center font-semibold">Day</p>
                  </div>
                </div>
                <div className=" w-24 h-24 border-4 border-[#2c316a] rounded-2xl mr-5 flex">
                  <div className=" my-auto mx-auto flex-col">
                    <p className=" text-center mb-3 text-[#cc79fa] text-2xl font-bold">
                      {new Date().toLocaleString("en-US", { month: "long" })}
                    </p>
                    <p className=" text-center font-semibold">Mon</p>
                  </div>
                </div>
                <div className=" w-24 h-24 border-4 border-[#2c316a] rounded-2xl mr-5 flex">
                  <div className=" my-auto mx-auto flex-col">
                    <p className=" text-center mb-3 text-[#cc79fa] text-2xl font-bold">
                      {new Date().getFullYear()}
                    </p>
                    <p className=" text-center font-semibold">Year</p>
                  </div>
                </div>
              </div>
              <Link href="/dashboard">
                <button className="  border-[#2c316a] rounded-xl text-xl font-medium p-5 mt-14 bg-[#ef087bb6] hover:bg-[#ef087a] duration-500 transition-all">
                  {" "}
                  Drop a Note
                </button>
              </Link>
            </div>
            <div className=" w-full ml-7 flex">
              <div className="flex flex-col justify-center mx-auto gap-5">
                <h1 className=" text-3xl">Built by: Sumant_XD</h1>
                <a href="https://github.com/SumantxD/selfGPT">
                  <div>
                    Github{" "}
                    <img
                      src="https://img.shields.io/github/last-commit/SumantxD/selfGPT
"
                      alt=""
                    />{" "}
                  </div>
                </a>
                <a href="https://twitter.com/SumantXd">
                  <div>
                    Twitter{" "}
                    <img
                      src="https://img.shields.io/twitter/follow/SumantXd
"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
