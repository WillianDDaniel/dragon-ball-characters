import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Main"
import { Suspense } from "react"
import Skeleton from "@/components/Skeleton"

export default function Home() {

  return (
    <>
      <Header />
      <Suspense fallback={<Skeleton></Skeleton>}>
        <Main />
      </Suspense>
      <Footer />
    </>

  )
}
