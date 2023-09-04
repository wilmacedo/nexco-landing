import { Button } from "@/components/ui/button";
import { dashboardUrl } from "@/config";
import { stripe } from "@/lib/stripe";
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
import Link from "next/link";
import { Fragment } from "react";
import Stripe from "stripe";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  const prices = await stripe.prices.list({
    expand: ["data.product"],
  });

  return (
    <Fragment>
      <div
        className={twMerge(
          "inline-flex items-center justify-center px-4",
          "md:w-screen md:px-16 lg:h-[calc(100vh-4rem)]"
        )}
      >
        <section className="w-full my-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:max-w-7xl">
          <div>
            <div className="w-fit hidden bg-muted rounded-2xl px-5 py-0.5 md:block">
              <span className="text-sm">FINANCE</span>
            </div>

            <div className="mt-4 text-center md:text-start">
              <h1 className="text-4xl md:text-6xl">Simplificado e</h1>
              <h1 className="text-4xl md:text-6xl inline-flex gap-2">
                <div className="relative">
                  Eficaz
                  <div className="-left-[0.5rem] top-0 absolute w-[calc(100%+1rem)] h-full bg-[#a5dc48] opacity-30 rounded-full" />
                </div>
                na sua <span className="hidden sm:block">gestão</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <h1 className="inline-flex gap-2 text-4xl md:text-6xl">
                  <span className="block sm:hidden">gestão</span>Financeira
                </h1>
                <button className="mt-2 px-5 py-2 rounded-full border border-neutral-200 inline-flex items-center justify-between gap-8 hover:border-neutral-300">
                  <Link
                    href={dashboardUrl + "/register"}
                    className="text-base md:text-lg"
                  >
                    Abrir conta
                  </Link>
                  <MoveUpRight strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="my-12 font-light text-base md:text-lg lg:max-w-md">
              <span>
                Simplifique e otimize sua gestão financeira com nossa solução
                fácil de usar, abrindo caminho para um futuro próspero e seguro.
              </span>
            </div>

            <div className="flex flex-col">
              <div className="w-full lg:w-fit pb-2 inline-flex flex-wrap gap-3 md:gap-6 items-center border-b border-neutral-200">
                <div className="inline-flex gap-2 items-center">
                  <div className="p-1 bg-[#D9E8B7] rounded-full">
                    <Check size={14} />
                  </div>
                  <span className="uppercase text-xs md:text-sm">
                    atualizações semanais
                  </span>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <div className="p-1 bg-[#D9E8B7] rounded-full">
                    <Check size={14} />
                  </div>
                  <span className="uppercase text-xs md:text-sm">
                    seção discovery
                  </span>
                </div>
                <div className="inline-flex gap-2 items-center">
                  <div className="p-1 bg-[#D9E8B7] rounded-full">
                    <Check size={14} />
                  </div>
                  <span className="uppercase text-xs md:text-sm">
                    teste grátis
                  </span>
                </div>
              </div>
              <span className="mt-2 text-xs md:text-sm text-muted-foreground lg:max-w-sm">
                Todos os dados são coletados em portais confiáveis e processados
                por blockchain.
              </span>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 flex flex-col gap-2 md:flex-row">
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
                  <h3 className="text-4xl md:text-5xl">09:59</h3>
                  <span className="text-sm text-neutral-400">Saturday</span>
                </div>
                <div className="my-2 h-[2px] bg-black w-full" />

                <div className="inline-flex gap-2">
                  <div className="border border-neutral-300 rounded-lg p-2">
                    <div className="w-full inline-flex items-center justify-between">
                      <span className=" text-xs">Messages</span>
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

                    <span className="mt-4 mb-1 text-lg md:text-xl">
                      $121.32
                    </span>
                    <span className="text-xs text-neutral-400">
                      3 transfers
                    </span>
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

                    <span className="mt-4 text-lg md:text-xl">$121.32</span>
                    <span className="text-xs text-neutral-400">
                      3 transfers
                    </span>
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
                  <h3 className="text-4xl md:text-5xl font-medium">+116,42%</h3>
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
                  <h3 className="text-4xl md:text-5xl font-medium">
                    10,569.50
                  </h3>
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
      </div>

      <div
        id="prices"
        className="pt-36 md:pt-16 md:w-screen h-screen flex flex-row justify-center px-4 md:px-16"
      >
        <section className="text-center w-full lg:max-w-7xl">
          <h1 className="text-3xl md:text-5xl">Planos para o seu</h1>
          <h1 className="text-3xl md:text-5xl inline-flex items-center gap-2">
            tipo de{" "}
            <div className="relative">
              perfil
              <div className="-left-[0.25rem] bottom-0 -z-10 absolute w-[calc(100%+0.5rem)] h-4 bg-[#a5dc48] opacity-70" />
            </div>
          </h1>

          <p className="text-sm md:text-base mt-4 text-muted-foreground">
            Preços flexíveis para cada tipo de aplicação.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-start md:flex-row">
            {prices.data.reverse().map((item, index) => (
              <div
                key={index}
                className="group w-full p-4 border rounded-lg md:w-fit md:even:scale-110 even:bg-[#D9E8B7]"
              >
                <p className="font-semibold">
                  {(item.product as Stripe.Product).name}
                </p>
                <h2 className="mt-4 text-3xl font-bold">
                  {((item.unit_amount || 0) / 100).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
                <p className="text-sm text-muted-foreground">por mês</p>

                <div className="my-8 w-full h-px bg-input group-even:bg-black" />

                <p className="text-sm font-semibold">O que inclui?</p>
                <ul className="mt-2">
                  {[
                    "Avaliação de risco",
                    "Sugestões de startups",
                    "Filtro por interesse",
                    "Função Discovery",
                  ].map((item, index) => (
                    <li key={index} className="mt-2 first:mt-0 text-sm">
                      <div className="inline-flex items-center gap-2">
                        <div className="flex items-center justify-center h-5 w-5 bg-[#D9E8B7] group-even:bg-foreground rounded-full">
                          <Check
                            size={14}
                            className="text-foreground group-even:text-background"
                          />
                        </div>
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-4 w-full"
                  variant={index % 2 === 1 ? "secondary" : "default"}
                  asChild
                >
                  <Link href={dashboardUrl + "/billing?id=" + item.id}>
                    Comprar agora
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
