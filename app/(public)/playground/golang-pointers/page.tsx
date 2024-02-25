import type {NextPage} from 'next'

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="flex max-w-xl flex-col items-start justify-between">
        <ul>
          <li>package main</li>
          <li>&nbsp;</li>
          <li>import "fmt"</li>
          <li>&nbsp;</li>
          <li>func main&#40;&#41; &#123;</li>
          <li className="pl-4">a &#58;&#61; 4</li>
          <li className="pl-4">squareVal&#40;a&#41;</li>
          <li>&#125;</li>
          <li>&nbsp;</li>
          <li>func squareVal&#40;v int&#41; &#123;</li>
          <li className="pl-4">v &#58;&#61; v</li>
          <li className="pl-4">fmt.Println&#40;&#38;v, v&#41;</li>
          <li>&#125;</li>
        </ul>
      </div>
      <div className="flex max-w-xl flex-col items-start justify-between">
        <div
          className="border-b-2 border-l-2 border-r-2 border-gray-200"
          style={{
            width: 200,
            height: 300,
            position: 'relative',
          }}
        >
          <div
            className="bg-blue-200 absolute p-4 text-gray-600"
            style={{
              bottom: 116,
              left: 8,
              width: 180,
              height: 100,
            }}
          >
            squareVal&#40;&#41;
            <br />
            <br />
            value: 16
          </div>
          <div
            className="bg-gray-200 absolute p-4 text-gray-600"
            style={{
              bottom: 8,
              left: 8,
              width: 180,
              height: 100,
            }}
          >
            main&#40;&#41;
            <br />
            <br />
            value: 4
          </div>
        </div>
        <p className="text-m text-center text-gray-400" style={{width: 200}}>
          Memory Stack
        </p>
      </div>
    </div>
  )
}

export default Page
