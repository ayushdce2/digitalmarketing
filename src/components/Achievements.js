import "./Achievements.css";
const Achievements = ()=>{

    return(
        <div className="achievements_wrap">
            <div className="achievements_inside">
                <div className="container text-center">

                
                <span className="section_heading">Our Achievements</span>


                <p className="section_subheading">Our Unmatched Achievements so far . . . </p>

                <p className="section_content">
                At WebSavvy, our track record speaks for itself. 
                We pride ourselves on delivering exceptional results for our clients, 
                and our achievements reflect our commitment to excellence in digital marketing.
                </p>
                </div>
                <div className="container-fluid mt-5">
                    <div className="achievements_box_wrap">
                        <div className="achievements_box_inside d-flex flex-wrap">
                            <div className="achievements_box_unit">
                                <div className="Achievements_counter">
                                    <p>100%</p>

                                </div>
                                <div className="achievements_box_content">
                                    <p className="achievements_box_subheading">
                                    Successful Campaigns 
                                    </p>
                                    <p>
                                    We’ve designed, implemented, and managed over 100 digital marketing campaigns, 
                                    consistently delivering above-average industry performance metrics.
                                    </p>
                                </div>
                            </div>
                            <div className="achievements_box_unit">
                                <div className="Achievements_counter">
                                    <p>200%</p>

                                </div>
                                <div className="achievements_box_content">
                                    <p className="achievements_box_subheading">
                                    Average ROI Increase 
                                    </p>
                                    <p>
                                    Our data-driven strategies have helped clients see an average return on investment (ROI) increase of 200%, turning ad spend into revenue.
                                    </p>
                                </div>
                            </div>
                            <div className="achievements_box_unit">
                                <div className="Achievements_counter">
                                    <p>300%</p>

                                </div>
                                <div className="achievements_box_content">
                                    <p className="achievements_box_subheading">
                                    Social Media Growth
                                    </p>
                                    <p>
                                    Through creative content and targeted social media strategies, we’ve helped brands grow their engagement by up to 300%, building loyal communities across multiple platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="achievements_box_unit">
                                <div className="Achievements_counter">
                                    <p>95%</p>

                                </div>
                                <div className="achievements_box_content">
                                    <p className="achievements_box_subheading">
                                    Client Retention Rate
                                    </p>
                                    <p>
                                    Our client-first approach has earned us a 95% client retention rate, a testament to our long-term relationships and consistent results.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                </div>

        </div>
    )

}

export default Achievements;