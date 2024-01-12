import { useState } from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Link } from "react-router-dom";


export default function Result() {
  const [showModal, setShowModal] = useState(false);
  let [nextId , setNextId] = useState(1)
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([
    {
      id: 0,
      name: 'DE Shaw',
    },
  ]);

  function addCompany() {
    setShowModal(() => false)
    setNextId(nextId => nextId + 1)
     setCompanies(prevCompany => [
        ...prevCompany,
        {
          id:nextId,
          name:companyName
        }
     ]);
     setCompanyName("")
  }

  return (
    <>
      <div className="add__jobs">
      <Button
        type="button"
        color="danger"
        className="add__button"
        onClick={() => setShowModal(true)}
      >
        +New
      </Button>
      {companies.map((company) => (
        <div key={company.id} className="company__description">
          <p>{company.name}</p>
          <Link to= "shortlist">
          <Button color="secondary">View Shortlist</Button>
          </Link>
        </div>
      ))}
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
                  <h3 className="text-3xl font-semibold">
                    Result Title
                  </h3>
                  <Button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </Button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto modal__form">
                <Input type="text" label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} isRequired/>
                <Textarea
                  label="Description"
                  placeholder="Enter your description"
                  className="max-w-xs"
                  />
                <Input type = "number" label = "CGPA" />
                <Input type="text" label="Branch" />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="Button"
                    onClick={addCompany}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="Button"
                    onClick={addCompany}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
















// function Result() {

//     return (
//       <>
//      <h1 className="title">Results</h1>
//       <div className="company__info">
//               <p>DE Shaw</p>
//               <p>Rejected</p>
//      </div>
//       </>
//     )
//   }
  
//   export default Result