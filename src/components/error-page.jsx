import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
  } from "react-router-dom";
  import { useState } from "react";
  
  const Error = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const routerError = useRouteError();
  
    if (isRouteErrorResponse(routerError)) {
      if (routerError.status === 404) {
        setErrorMessage("This page does not exist!");
      }
  
      if (routerError.status === 401) {
        setErrorMessage("You are not authorized to see this");
      }
  
      if (routerError.status === 503) {
        setErrorMessage("Looks like our API is down");
      }
    }
  
    return (
      <div
        role="alert"
        className="flex flex-col items-center justify-center h-screen bg-gray-100 px-8"
      >
        <h1 className="text-3xl font-bold my-8 text-black text-center">
          {errorMessage && errorMessage}
        </h1>
        <h1 className="text-3xl font-bold mb-4 text-black text-center">
          {routerError &&
            (routerError?.statusText ||
              routerError?.data ||
              routerError?.message)}
        </h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-[#3E3FCD] focus:outline-none focus:ring-2 focus:ring-[#3E3FCD]"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    );
  };
  
  export default Error;
  
  export const ErrorFallback = () => {
    return (
      <div
        role="alert"
        className="flex flex-col items-center justify-center h-screen bg-gray-100 px-8"
      >
        <h1 className="text-3xl font-bold text-black mb-20 text-center">
          Something Went Wrong!
        </h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-[#3E3FCD] focus:outline-none focus:ring-2 focus:ring-[#3E3FCD]"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
        <button
          className=" my-8 px-4 py-2 text-white bg-blue-500 rounded hover:bg-[#3E3FCD] focus:outline-none focus:ring-2 focus:ring-[#3E3FCD]"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go Back Home
        </button>
      </div>
    );
  };