import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BellRing,
  Check,
  Mail,
  MoreHorizontal,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="grid grid-cols-2 w-[calc(100vw-1rem))] h-[calc(100vh-4.16rem)] lg:px-12 lg:gap-4">
        <div className="mt-12">
          <div className="w-fit bg-gray-100 rounded-3xl px-5 py-0.5">
            <span className="text-sm">FINANCE</span>
          </div>

          <div className="mt-4">
            <h1 className="text-7xl">Streamlined and</h1>
            <h1 className="text-7xl inline-flex gap-4">
              <div className="px-5 bg-[#D9E8B7] rounded-full">Improved</div>
              Financial
            </h1>
            <div className="inline-flex gap-4 items-center">
              <h1 className="text-7xl">Navigation</h1>
              <button className="mt-2 px-5 py-2 rounded-full border border-neutral-200 inline-flex items-center justify-between gap-8 hover:border-neutral-300">
                <span className="text-lg">Open account</span>
                <MoveUpRight strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="my-12 font-light text-lg lg:max-w-md">
            <span>
              Simplify and optimize your financial management with our
              user-friendly solution, paving the way for a prosperous and secure
              future.
            </span>
          </div>

          <div className="flex flex-col">
            <div className="w-fit pb-2 inline-flex gap-6 items-center border-b border-neutral-200">
              <div className="inline-flex gap-2 items-center">
                <div className="p-1 bg-[#D9E8B7] rounded-full">
                  <Check size={14} />
                </div>
                <span className="uppercase text-sm">weekly updates</span>
              </div>
              <div className="inline-flex gap-2 items-center">
                <div className="p-1 bg-[#D9E8B7] rounded-full">
                  <Check size={14} />
                </div>
                <span className="uppercase text-sm">discovery section</span>
              </div>
              <div className="inline-flex gap-2 items-center">
                <div className="p-1 bg-[#D9E8B7] rounded-full">
                  <Check size={14} />
                </div>
                <span className="uppercase text-sm">trial</span>
              </div>
            </div>
            <span className="mt-2 text-sm text-neutral-400 lg:max-w-sm">
              All data has colected with trusted portals and processed by
              blockchain.
            </span>
          </div>
        </div>
        <div className="inline-flex gap-2">
          <div className="my-auto">
            <div className="pt-12 p-4 bg-[#F0F1EA] rounded-lg flex flex-col relative">
              <div className="absolute right-8 -top-12 border-4 border-[#FCFDF8] rounded-full">
                <Image
                  className="object-cover rounded-full w-[4.5rem] h-1w-[4.5rem]"
                  src="/profile-pic.png"
                  alt="Profile Picture"
                  width={72}
                  height={72}
                />
              </div>

              <div className="inline-flex items-center justify-between">
                <span className="text-xs font-medium uppercase">
                  your account
                </span>
                <MoreHorizontal />
              </div>

              <div className="mt-4 inline-flex items-end justify-between">
                <h3 className="text-5xl">09:59</h3>
                <span className="text-sm text-neutral-400">Saturday</span>
              </div>
              <div className="my-2 h-[2px] bg-black w-full" />

              <div className="inline-flex gap-2">
                <div className="border border-neutral-300 rounded-lg p-2">
                  <div className="w-full inline-flex items-center justify-between">
                    <span className="text-xs">Messages</span>
                    <ArrowUpRight strokeWidth={1.75} size={16} />
                  </div>

                  <div className="py-5 px-9 flex items-center justify-center">
                    <Mail strokeWidth={1.25} size={28} />
                  </div>
                </div>
                <div className="border border-[#D9E8B7] bg-[#D9E8B7] rounded-lg p-2">
                  <div className="w-full inline-flex items-center justify-between">
                    <span className="text-xs">New Alerts</span>
                    <ArrowRight strokeWidth={1.75} size={16} />
                  </div>

                  <div className="py-5 px-9 flex items-center justify-center">
                    <BellRing strokeWidth={1.25} size={28} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 p-4 flex flex-col rounded-lg bg-[#F0F1EA]">
              <div className="inline-flex items-center gap-2">
                <div className="w-full px-2.5 py-2 flex flex-col border border-neutral-300 rounded-lg">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-sm">Profit</span>
                    <ArrowUp
                      className="text-green-600"
                      strokeWidth={1.5}
                      size={16}
                    />
                  </div>

                  <span className="mt-4 mb-1 text-xl">$121.32</span>
                  <span className="text-xs text-neutral-400">3 transfers</span>
                </div>

                <div className="w-full px-2.5 py-2 flex flex-col border border-neutral-300 rounded-lg">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-sm">Expense</span>
                    <ArrowDown
                      className="text-red-600"
                      strokeWidth={1.5}
                      size={16}
                    />
                  </div>

                  <span className="mt-4 text-xl">$121.32</span>
                  <span className="text-xs text-neutral-400">3 transfers</span>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%-1rem)] mx-auto border-t border-neutral-300 border-dashed" />
            <div className="w-full px-4 py-2 inline-flex items-center justify-between rounded-lg bg-[#F0F1EA]">
              <div className="inline-flex items-center gap-2">
                <Image
                  className="w-6 h-6 bg-white rounded-md"
                  src="/company-logo.png"
                  alt="Company Logo"
                  width={24}
                  height={24}
                />
                <span className="text-sm">Klever</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <span className="text-xs">119,2</span>
                <ArrowUp
                  className="text-green-600"
                  strokeWidth={1.75}
                  size={12}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="py-4 px-6 flex items-center justify-between bg-[#D9E8B7] rounded-lg">
              <span className="lg:max-w-[12.5rem]">
                New system update and features
              </span>
              <ArrowUpRight strokeWidth={1.75} />
            </div>
            <div className="mt-2 flex flex-col py-8 px-4 bg-[#FFE17F] rounded-lg">
              <div className="inline-flex items-center justify-between">
                <span className="text-xs font-medium uppercase">
                  your profit
                </span>
                <MoreHorizontal />
              </div>
              <div>
                <h3 className="text-5xl font-medium">+116,42%</h3>
                <p className="text-xs font-light text-neutral-700 lg:max-w-[12rem]">
                  Maximaze your financial potential with our intelligent
                  investment solutions
                </p>
              </div>
            </div>
            <div className="mt-2 p-4 rounded-lg bg-[#D9E8B7]">
              <div className="w-full inline-flex items-center justify-between">
                <span className="text-xs font-medium uppercase">
                  your summary
                </span>
                <MoreHorizontal />
              </div>
              <div className="w-full inline-flex items-end justify-between">
                <h3 className="text-5xl font-medium">10,569.50</h3>
                <span className="text-sm text-neutral-400">USD</span>
              </div>
              <div className="my-2 h-[2px] bg-black w-full" />
            </div>
            <div className="w-[calc(100%-1rem)] mx-auto border-t border-neutral-300 bg-[#D9E8B7] border-dashed" />
            <div className="w-full px-4 py-2 inline-flex items-center justify-between rounded-lg bg-[#D9E8B7]">
              hello
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
