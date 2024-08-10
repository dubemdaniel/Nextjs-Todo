import Image from "next/image";
import Layout from "./components/Layout";
import NewTodo from "./todo/new/page";
import Todos from './todo/[id]/page'
import Page from './todo/page'
import Lay from './layout'
// import image from './../public/image.jpeg'
// import norm from './pages'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen sm:p-24"
    // style={{backgroundImage: "url('./../public/image.jpeg')"}}
    >
      {/* <Layout /> */}
      <Page />
{/* <Todos/> */}
      
      {/* <NewTodo/> */}
      
    </main>
  );
}
