import type {NextPage} from 'next'
import Image from 'next/image'

import {Title} from '@shared/components/Title'

import Laptop from './images/laptop.jpg'
import PC from './images/pc.jpg'

type SpecType = {
  name: string
  value: string
}

const pcSpec: SpecType[] = [
  {name: 'Main Monitor', value: 'Samsung Oddyssey G7 27 inch'},
  {name: 'Secondary Monitor', value: 'LG Ultragear 27 inch (Vertical)'},
  {name: 'PC Case', value: 'Lian li o11 dynamic mini'},
  {name: 'CPU', value: 'Ryzen 5 5600x + NZXT kraken x63'},
  {name: 'GPU', value: 'Radeon Sapphire rx 6800-xt nitro+'},
  {name: 'Motherboard', value: 'MSI mag z570 tomhawk wifi'},
  {name: 'Ram', value: 'Samsung Oddyssey G7 27 inch'},
  {name: 'SSD', value: 'Corsair NVME mp600 1 TB'},
  {name: 'PSU', value: 'Cooler Master V850 SFX Gold'},
  {name: 'Fan', value: 'Corsair QL210'},
]

const laptopSpec: SpecType[] = [
  {name: 'Hardware', value: 'Macbook Pro 2024'},
  {name: 'Color', value: 'Space Black'},
  {name: 'Processor', value: 'Apple M3 Pro (CPU 12-core & GPU 18-core)'},
  {name: 'Ram', value: '36GB'},
  {name: 'SSD', value: '1TB'},
]

const Gear: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <Title>Tech Gear</Title>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0 lg:py-8">
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <Image
                alt="pc"
                className="h-full w-full object-cover object-center"
                src={PC}
                width={512}
                height={288}
                priority={true}
              />
            </div>
            <h3 className="mt-8 text-xl font-bold text-red-400">
              Personal Computer
            </h3>
            <div className="block w-full overflow-x-auto mt-4">
              <table className="items-center w-full border-collapse text-blueGray-700  ">
                <thead className="thead-light ">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pcSpec.map((item, index) => {
                    return (
                      <tr key={`pc-spec-${index}`}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {item.name}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {item.value}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <Image
                alt="laptop"
                className="h-full w-full object-cover object-center"
                src={Laptop}
                width={512}
                height={288}
                priority={true}
              />
            </div>
            <h3 className="mt-8 text-xl font-bold text-red-400">Laptop</h3>
            <div className="block w-full overflow-x-auto mt-4">
              <table className="items-center w-full border-collapse text-blueGray-700  ">
                <thead className="thead-light ">
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Category
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {laptopSpec.map((item, index) => {
                    return (
                      <tr key={`pc-spec-${index}`}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {item.name}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {item.value}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 sm:gap-y-8">
  //     <div className="lg:pl-20">
  //       <div className="px-2.5 lg:max-w-none">
  //         <Title>PC</Title>
  //         <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
  //           \
  //           {/* <Image
  //           alt="kelvin mijaya portrait"
  //           className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
  //           src={ImgPortrait}
  //           width={640}
  //           height={640}
  //           priority={true}
  //         /> */}
  //           <p>asd</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="lg:order-first lg:row-span-2">
  //       <div className="px-2.5 lg:max-w-none">
  //         <Title>Laptop</Title>
  //         <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
  //           {/* <Image
  //           alt="kelvin mijaya portrait"
  //           className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
  //           src={ImgPortrait}
  //           width={640}
  //           height={640}
  //           priority={true}
  //         /> */}
  //           <p>asd</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Gear
