import { useState } from "react"
function Verification() {
  let name = "Naman"
  let enrollment = "21232122"
  let branch= "Electrical"


  const [showModal, setShowModal] = useState(false);
    return (

      <>
      <div>
        <h1 className="title">Pending</h1>
        <div className="verification__info">
              <p>{name}</p>
              <p>{enrollment}</p>
              <p>{branch}</p>
              <button onClick={() => setShowModal(true)}>Verify</button>
        </div>
        <h1 className="title">Verified</h1>
        <div className="verification__info">
              <p>Name</p>
              <p>Enrollment</p>
              <p>Branch</p>
              <p>☑️</p>
        </div>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto verification__modal">
                  <div className="verification__resume">
                     
                  </div>
                  <div className="verification__form">
                    <label>Name:<input type="text"></input></label>
                    <label>Enrollment no:<input type = "number"></input></label>
                    <label>Branch:<input type = "text"></input></label>
                    <label>CGPA:<input type = "number"></input></label>
                    <label>POR:<textarea></textarea></label>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    On Chain
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
      </>
    )
  }
  
  export default Verification