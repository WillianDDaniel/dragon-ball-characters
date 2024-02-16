export default function Skeleton() {
    return (
        <div className="w-full flex justify-center h-max-[80vh]">
            <div className={`
                flex animate-pulse w-[90%] h-full lg:h-[84vh] justify-center self-center 
                sm-1:flex-wrap sm-1:w-max-[85%] sm-2:w-[600px] sm-2:h-auto sm-1:h-auto
            `}>

                <div className={`
                    w-3/6 h-full flex flex-col items-center justify-center 
                    sm-1:w-max-[85%] sm-1:w-[600px] sm-1:h-auto sm-2:h-auto
                    `}>

                    <div className="bg-slate-800 w-4/6 h-8 rounded-md m-2"></div>
                    <div className="bg-slate-700 w-5/6 h-20 rounded-lg m-2 mb-5"></div>
                    <div className="bg-slate-800 w-4/6 h-14 rounded-md m-2"></div>
                    <div className="bg-slate-700 w-5/6 h-14 rounded-md m-3"></div>
                    <div className="bg-slate-900 w-5/6 h-4 rounded-md m-2"></div>
                    <div className="bg-slate-800 w-5/6 h-4 rounded-md m-2"></div>
                    <div className="bg-slate-700 w-5/6 h-4 rounded-md m-2"></div>
                    <div className="bg-slate-800 w-5/6 h-4 rounded-md m-2"></div>
                    <div className="bg-slate-900 w-5/6 h-4 rounded-md m-2 mb-5"></div>

                </div>

                <div className={`
                    w-3/6 h-full flex flex-col items-center justify-center 
                    sm-1:w-max-[85%] sm-1:w-[600px] sm-1:h-auto sm-2:h-auto
                    `}>

                <div className="bg-slate-700 w-5/6 h-8 rounded-md m-2"></div>
                    <div className="bg-slate-800 w-5/6 h-36 rounded-md m-2 mb-5"></div>
                    
                    <div className="bg-slate-800 w-5/6 h-4 rounded-md m-2 mt-5"></div>
                    <div className="bg-slate-700 w-5/6 h-4 rounded-md m-2"></div>
                    <div className="bg-slate-900 w-5/6 h-4 rounded-md m-2 mb-5"></div>
                </div>

            </div>
            <span className="fixed self-center text-6xl font-bold">Loading...</span>
        </div>
    )
}