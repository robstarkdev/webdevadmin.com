

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { css, jsx } from '@emotion/react';
// import { css, cx } from '@emotion/css';
import axios from 'axios';
import htmlParser from 'html-react-parser';


import './css/cssHomePage.css';

import img_hammer_wrench from './images/hammer_wrench.png';
import contact_logo from './images/square_contact_logo_2021.png';


async function getFullBoxContent(url){

    try {
        let res = await axios.get(url);

        if(res.data){
            console.log(res.data);
        }

    }catch(error){
        console.log("CATCH BLOCK SAYS: " + error.message);
    }

}
// window.skill_items
window.skill_items = [
    {
        tech_type: "View My Developer Videos",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/youtube_logo_transp_backgrnd.png",
        link_type: "external",
        content_path: "none"
    }
    ,
     {
        tech_type: "React",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/react_logo_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgreact.html"
    }
    ,
    {
        tech_type: "Vanilla Javascript & jQuery",
        link_text: "coding examples etc",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_javascript_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgvanilla.html"
    },
    {
        tech_type: "HTML/CSS",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_html5_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pghtmlcss.html"
    }
    ,
    {
        tech_type: "MySQL/MS SQL Server",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_sql_transpbackgrnd.png",
        link_type: "internal",
        content_path: "pgsql.html"
    }
    ,

    {
        tech_type: "PHP",
        link_text: "coding examples etc",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/php_logo_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgphp.html"
    },


    {
        tech_type: "Node JS",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_node_transp_bckgrnd.png",
        link_type: "internal",
        content_path: "pgnode.html"
    }
    ,
    {
        tech_type: "System Administration",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_sysadmin_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgsysadmin.html"
    }
    ,

    {
        tech_type: "Chinese",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_chinese_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgchinese.html"
    }
    ,


    {
        tech_type: "Spanish",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_spanish_transp_backgrnd.png",
        link_type: "internal",
        content_path: "pgspanish.html"
    }
];

function PicBox(props){
    return (
          <img src={contact_logo} css={css`
                  width: 100%;
                  height: auto;
                  border-radius: 40px;
                  flex: 0 0 auto;
                  margin-bottom: 10px;
                `} />
    );
}



function Item(props){


    function handleSkillClick(evt){

        let skill_arr_index = evt.currentTarget.id;

        props.shiftLeft(skill_arr_index);
        alert(skill_arr_index)

    }

    const color_bckgrnd_hover = 'whitesmoke';
    const color_bckgrnd = 'lightgrey';
    const logo_styles = {
        height: "28px",
        width: "auto",
        marginRight: "5px"
    }

    return (
        <a id={props.id} css={css`
                  width: 100%;
                  flex: 1 0 auto;
                  height: 40px;
                  //background-color: ${color_bckgrnd};
                  font-size: 16px;
                  padding-left: 15px;
                  cursor: pointer;
                  font-family: FuturaLight, sans-serif;
                  border: 1px solid black;
                  border-radius: 25px;
                  margin-bottom: 5px;
                  &:hover {
                    background-color: ${color_bckgrnd_hover};
                  }
          
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap;
                  justify-content: flex-start;
                  align-items: center;
                  
                  
                `} onClick={handleSkillClick}>

            <img src={props.item.logo_url} style={logo_styles} alt=""/>
                {props.item.tech_type}

        </a>
    );
}

function AllItems(props){


    return (
        skill_items.map(function(item, arr_index){
            return <Item key={arr_index} item={item} id={arr_index}
                         center_box_location={props.center_box_location}
                         shiftLeft={props.shiftLeft}
                         current_location={props.current_location}

                    />;
        })
    );
}


function ContactDetailsBox(props){

    return (
            <div css={css`
                  width: 100%;
                  flex: 1 1 auto;
                  display: flex;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  justify-content: flex-start;
                  align-items: flex-start;
                `}>

                <AllItems
                    center_box_location={props.center_box_location}
                    shiftLeft={props.shiftLeft}
                    current_location={props.current_location}
                />

            </div>
    );
}



function CenterStartBlock(props) {

    return (

        <div css={css`
                  width: 23%;
                  height: auto;
                  font-size: 18px;
                  padding: 15px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}>

            <PicBox />
            <ContactDetailsBox
                center_box_location={props.center_box_location}
                shiftLeft={props.shiftLeft}
                current_location={props.current_location}

            />
        </div>
    );
}


function FullSkillBox(props){
    let visibility;
    if(props.full_box_open === true){
        visibility = 'flex';
    }else{
        visibility = 'none';
    }

    return (

        <div css={css`
                  flex: 1 1 77%;
                  width: 77%;
                  height: 100%;
                  font-size: 18px;
                  border: 10px solid dodgerblue;
                  //margin-left: 30px;
                  position: relative;
                  
                  
                  display: ${visibility};
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}>

            {htmlParser(props.full_box_html_content)}


        </div>
    );
}


class HomePage extends React.Component {


    render() {

        const homeStyles = {

            width: "100%",
            height: "100%",
            // paddingLeft: "30px",
            display: "flex",
            flexdirection: "row",
            flexWrap: "nowrap",
            justifyContent: this.state.center_box_location,
            alignItems: "center"
        };

        if(this.state.center_box_location === "left"){

            homeStyles.justifyContent = "flex-start";
        }else{
            homeStyles.justifyContent = "center";
        }


        return (
            <div id="HomePage" style={homeStyles}>

                <CenterStartBlock
                    center_box_location={this.state.center_box_location}
                    shiftLeft={this.shiftLeft}
                    current_location={this.state.current_location}

                />

                <FullSkillBox
                    center_box_location={this.state.center_box_location}
                    shiftLeft={this.shiftLeft}
                    current_location={this.state.current_location}
                    full_box_open={this.state.full_box_open}
                    displayFullSkillbox={this.displayFullSkillbox}
                    full_box_html_content={this.state.full_box_html_content}
                />

            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            center_box_location: "center",
            current_location: "center",
            full_box_open: false,
            full_box_html_content: "",
            returned_date: ""
        };
        this.updateFormState = this.updateFormState.bind(this);
        this.updateSingleStateVar = this.updateSingleStateVar.bind(this);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.displayFullSkillbox= this.displayFullSkillbox.bind(this);

    }

    shiftLeft(item_index){
        // first check location of box


        // if already left, don't move it
        /**
         {
        tech_type: "Node JS",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/logo_node_transp_bckgrnd.png",
        link_type: "internal"
    }
         */



        if(window.skill_items[item_index].link_type === "external"){
            this.openInNewTab(window.skill_items[item_index].link_url);

        }else{
            this.updateFormState('center_box_location', "left");
            this.displayFullSkillbox(item_index);
        }


    }
    openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    displayFullSkillbox(item_index){

        this.updateFormState('full_box_open', true);

        // turn on spinner

        let path = window.skill_items[item_index].content_path;

        axios.get(path)
            .then(res => {
                console.log(res.data);
                this.updateFormState('full_box_html_content', res.data);

                // turn off spinner

            }).catch(err=> {
            console.log(err.message)
        });


    }

    updateFormState(name, val) {
        this.setState(
            {
                [name]: val
            }// down below is a callback function: after you update state update itemlist....
            //,
            //this.updateItemList
        );
    }

    updateSingleStateVar(name, val){
        this.setState(
            {[name]: val}
        );
    }

    componentDidMount() {

    }
// ... end HomePage component class
}



ReactDom.render(<HomePage />, document.querySelector('#root'));


