import img_example_ondemand from "./images/js_vanilla_app_example.jpg";
import React from "react";


// NOTES: here I started to create components out of each
// fullboxcontent "page" ... it might have been the best way if i did it
// this way from the start, but at this point it would take too much
// work to redo it



const CmpHtmlCss = () => {

    return (
        <div>

            <div className="text_div">

                These days, there are no page layout or styling issues I can't resolve; and usually very quickly at
                that.

                <br></br><br></br>

                Over the last 12 years, I have created literally hundreds of websites and projects (large and small)
                using HTML and CSS. Although, my use of Flexbox has taken over the majority of layout tasks, much of
                the principles undergirding the architecture of webpages has remained the same. The concept of a
                "box", with margins/padding/border in addition to width and height, has not changed. In some sense,
                every element in a webpage is a rectangle (or less often: a square).

                <br></br><br></br>
                The most complex UI creations in the browser I've made are confidential, and are the property of
                the last company I worked for. Thus, I can't show them here. I made complex tools which are
                accessible only to employees on the company VPN. I can code HTML/CSS very quickly and right off
                the top of my head, with very little need to look things up on Google. Of course I use Google in
                this area from time to time; as do all developers of every caliber. I've got links to two (2)
                sample sites below, as well as some videos in which I discuss my understanding of flexbox.
            </div>

            <div className="site_thumbs_div">

                <a href="https://int-amg.com" target="_blank">
                    <img src="images/thumb_intamg.jpg" className="site_thumb" />
                </a>

                <a href="https://goldenpheasant.org" target="_blank">
                    <img src="images/thumb_gp.jpg" className="site_thumb" />
                </a>

            </div>

            <div className="text_div">

                Just below is a user interface I built while working for a company:
            </div>

            <div className="ondemand">

                <img src={img_example_ondemand} alt="" className="ondemand_image" />

            </div>
            <br></br>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/AWqYDURSrA0" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>


        </div>
    )

}

