/**
 * -- Dragon Ball Characters Website --
 * 
 * This is a simple website developed in React and Next.js 
 * that displays information and images of Dragon Ball characters.
 * 
 * Version: 1.0.1
 * Author: Willian D. Daniel
 * 
 */

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Skeleton from "@/components/Skeleton"
import { Suspense } from "react"

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
