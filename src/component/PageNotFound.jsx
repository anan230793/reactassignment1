import './PageNotFound.css';
import React from "react";
const PageNotFound=()=>{
return (
    <>
    <section class="p-0 bg-img cover-background" >
        <div class="container-fluid d-flex flex-column">
            <div class="row align-items-center justify-content-center min-vh-100">
                <div class="col-md-9 col-lg-6 my-5">
                    <div class="text-center error-page">
                        <h1 class="mb-0 text-secondary">404</h1>
                        <h2 class="mb-4 text-primary">Sorry, something went wrong!</h2>
                        <p class="w-sm-80 mx-auto mb-4 text-waring">This page is incidentally inaccessible because of support. We will back very before long much obliged for your understanding</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
)
}
export default PageNotFound;