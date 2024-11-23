import Services from "../static/images/services.png";
const WhyUs = ()=>{
    return (
        <>
             
            <div className="container section_wrap">
                <div className="row">

                
                    <div className="col-md-7">

                        <span className="section_heading">Why Choose Us</span>

                        <p className="section_subheading">High Performance Practices</p>

                        <p className="section_content">
                        In the fast-paced world of digital marketing, choosing the right partner can make all the difference. 
                        At WebSavvy, we believe in delivering results that exceed expectations. 
                        Here’s why businesses trust us to be their go-to digital marketing agency:
                        </p>
                        <div className="d-flex justify-content-between section_content">
                        <ul>
                            <li>Proven Track Record</li>
                            
                             <li>Customized, Data-Driven Strategies</li>
                             
                             <li>Full-Service Expertise</li>
                             {/* <li>Agile & Adaptive</li>
                             <li>Affordable Solutions for All Sizes</li> */}
                        </ul>
                        <ul>
                          
                            <li>Transparent Reporting</li>
                           
                             <li>Dedicated Team of Experts</li>
                             <li>ROI-Focused Campaigns</li>
                             {/* <li>Commitment to Your Success</li>
                             <li>Proven Client Satisfaction</li> */}
                             
                        </ul>
                        </div>

                    </div>
                    <div className="col-md-5">

                    <div className="about_left_wrap">
                    <div className="about_left_inside">
                        
                        <div className="about_left_img">
                            <img src={Services}/>

                        </div>

                        </div>

                    </div>

                    </div>

                </div>

            </div>
       
        </>
    )
}

export default WhyUs;