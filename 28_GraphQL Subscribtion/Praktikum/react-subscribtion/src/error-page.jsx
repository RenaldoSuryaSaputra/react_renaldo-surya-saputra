import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError();
   console.error(error);

   return (
      <>
         <div id="error-page" className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
               <h1 className="display-1 fw-bold"> 404 </h1>
               <p className="fs-3">
                  <i>{error.statusText || error.message}</i>
               </p>
               <p className="lead">The page you’re looking for doesn’t exist.</p>
               <Link to='/' className="btn btn-primary">
                  Go Home
               </Link>
            </div>
         </div>


      </>
   );
}

export default ErrorPage;