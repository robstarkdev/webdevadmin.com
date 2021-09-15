
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { css, jsx } from '@emotion/react';
import htmlParser from 'html-react-parser';
import './css/cssHomePage.css';
import contact_logo from './images/square_contact_logo_2021.png';
import logo_chinese from './images/skill_logos/final/logo_chinese_transp_backgrnd.png';
import logo_html_css from './images/skill_logos/final/logo_html5_transp_backgrnd.png';
import logo_summary from "./images/skill_logos/final/summary_logo.png";
import logo_youtube from "./images/skill_logos/final/youtube_logo_transp_backgrnd.png";
import logo_react from "./images/skill_logos/final/react_logo_transp_backgrnd.png";
import logo_javascript from "./images/skill_logos/final/logo_javascript_transp_backgrnd.png";
import logo_sql from "./images/skill_logos/final/logo_sql_transpbackgrnd.png";
import logo_php from "./images/skill_logos/final/php_logo_transp_backgrnd.png";
import logo_node from "./images/skill_logos/final/logo_node_transp_bckgrnd.png";
import logo_sysadmin from "./images/skill_logos/final/logo_sysadmin_transp_backgrnd.png";
import logo_dotnet from "./images/skill_logos/final/logo_microsoft.png";
import logo_spanish from "./images/skill_logos/final/logo_spanish_transp_backgrnd.png";
import logo_wordpress from "./images/skill_logos/final/logoWordpress.png";


import * as pages from './pgStrings';


window.skill_items = [
    {
        tech_type: "Summary",
        link_url: "none",
        logo_url: logo_summary,
        link_type: "internal",
        content_path: pages.pgSummary
    },
    {
        tech_type: "View My Developer Videos",
        link_text: "example sites",
        link_url: "https://www.youtube.com/c/BecomeaWebDesignerandDeveloper/videos",
        logo_url: logo_youtube,
        link_type: "external",
        content_path: "none"
    },
    {
        tech_type: "React/React Native (2-3 Yrs.)",
        link_url: "none",
        logo_url: logo_react,
        link_type: "internal",
        content_path: pages.pgReact
    },
    {
        tech_type: "Javascript & jQuery (7+ Yrs.)",
        link_url: "none",
        logo_url: logo_javascript,
        link_type: "internal",
        content_path: pages.pgVanilla
    },
    {
        tech_type: "HTML/CSS (8+ Yrs.)",
        link_url: "none",
        logo_url: logo_html_css,
        link_type: "internal",
        content_path: pages.pgHtmlCss
    },
    {
        tech_type: "MySQL/MS SQL Server (6+ Yrs.)",
        link_url: "none",
        logo_url: logo_sql,
        link_type: "internal",
        content_path: pages.pgSql
    },
    {
        tech_type: "PHP (6+ Yrs.)",
        link_url: "none",
        logo_url: logo_php,
        link_type: "internal",
        content_path: pages.pgPhp
    },
    {
        tech_type: "WordPress (2+ Yrs.)",
        link_url: "none",
        logo_url: logo_wordpress,
        link_type: "internal",
        content_path: pages.pgWordpress
    },
    {
        tech_type: "Node JS (2-3 Yrs.)",
        link_url: "none",
        logo_url: logo_node,
        link_type: "internal",
        content_path: pages.pgNode
    },
    {
        tech_type: "System Administration (7+ Yrs.)",
        link_url: "none",
        logo_url: logo_sysadmin,
        link_type: "internal",
        content_path: pages.pgSysadmin
    },
    {
        tech_type: ".NET Framework (3+ Yrs.)",
        link_url: "none",
        logo_url: logo_dotnet,
        link_type: "internal",
        content_path: pages.pgDotnet
    },
    {
        tech_type: "Chinese",
        link_url: "none",
        logo_url: logo_chinese,
        link_type: "internal",
        content_path: pages.pgChinese
    },
    {
        tech_type: "Spanish/Portuguese",
        link_url: "none",
        logo_url: logo_spanish,
        link_type: "internal",
        content_path: pages.pgSpanish
    }
];

function Item(props){

    function handleSkillClick(evt){
        props.shiftLeft(evt.currentTarget.id);
    }

    let width = "100%";
    let fontSize = "16px";
    let paddingLeft = "15px";
    if(props.item.content_path === "pgsql.html"){
        fontSize = "15px";
    }

    if(props.display_orientation === "portrait"){
        width = "87%";
        fontSize = "15px";
        paddingLeft = "12px";
        if(props.item.content_path === "pgsql.html"){
            fontSize = "14px";
        }
    }

    const color_bckgrnd_hover = 'whitesmoke';
    const logo_styles = {
        height: "25px",
        width: "auto",
        marginRight: "5px"
    }

    return (
        <a id={props.id} css={css`
                  width: ${width};
                  flex: 1 0 auto;
                  height: 34px;
                  font-size: ${fontSize};
                  padding-left: ${paddingLeft};
                  cursor: pointer;
                  font-family: FuturaLight, sans-serif;
                  border: 1px solid black;
                  border-radius: 25px;
                  margin-bottom: 5px;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap;
                  justify-content: flex-start;
                  align-items: center;
                   &:hover {
                    background-color: ${color_bckgrnd_hover};
                  }

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
                         display_orientation={props.display_orientation}
                         center_box_location={props.center_box_location}
                         shiftLeft={props.shiftLeft}
                         current_location={props.current_location}
                    />;
        })
    );
}

function ButtonMenu(props){

    let alignItems = "flex-start";
    if(props.display_orientation === "portrait"){
        alignItems = "center";
    }

    return (
            <div css={css`
                  width: 100%;
                  flex: 0 0 auto;
                  height: auto;
                  display: flex;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  justify-content: flex-start;
                  align-items: ${alignItems};
                `}>

                <AllItems
                    display_orientation={props.display_orientation}
                    center_box_location={props.center_box_location}
                    shiftLeft={props.shiftLeft}
                    current_location={props.current_location}
                />

            </div>
    );
}

function PicBox(props){
    return (

        <img src={contact_logo} css={css`
                  width: 100%;
                  height: auto;
                  border-radius: 40px;
                  flex: 1 0 auto;
                `} />
    );
}

function CenterStartBlock(props) {

    let display = "flex";
    let justifyContent = "center";
    let isPortrait = props.display_orientation !== "landscape" ;
    let skillBoxOpen = props.full_box_open === true ;

    if(isPortrait && skillBoxOpen){
        display = "none";
    }

    let width = '23%';
    let fontSize = '18px';

    if(isPortrait){
        width = '100%';
        justifyContent = "flex-start";
    }

    return (

        <div id="center_start_block" css={css`
                  width: ${width};
                  height: auto;
                  //flex: 0 0 auto;
                  font-size: ${fontSize};
                  padding: 15px;
                  display: ${display};
                  flex-direction: column;
                  justify-content: ${justifyContent};
                  align-items: center;
                  // if it is on a small screen then it is scroll,
                  // look to css styles in the 'index-template.html' file
                  // in src
                  //overflow: scroll;
                  overflow: hidden;
                `}>

            <PicBox
                display_orientation={props.display_orientation}
            />
            <ButtonMenu
                display_orientation={props.display_orientation}
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

    let flex_properties = "1 1 77%";
    let width = "77%";
    let paddingTop = "40px";
    if(!(props.display_orientation === "landscape")){
        flex_properties = "0 0 100%";
        width = "100%";
        paddingTop = "80px";
    }

    let display_close_check = "none";
    if(props.display_orientation === "portrait" && props.full_box_open === true){
        display_close_check = "flex";
    }


    function handleCheckBoxClick(evt){
        props.updateFormState("display_center_start_block", "flex");
        props.updateFormState("full_box_open", false);
    }

    return (

        <div id="full_skill_box" css={css`
                  z-index: 99;
                  flex: ${flex_properties};
                  width: ${width};
                  height: 100%;
                  font-size: 18px;
                  border: 10px solid dodgerblue;

                  position: relative;
                  display: ${visibility};
                  flex-direction: column;
                  justify-content: flex-start;
                  padding-top: ${paddingTop};
                  padding-bottom: 25px;
                  align-items: center;
                  overflow: scroll;
                `}>

            <div className="create_fixed_position">
                <img className="detailbox_logo" src={window.skill_items[props.current_skill_index].logo_url} />
            </div>

            <div css={css`
                  position: fixed;
                  right: 20px;
                  top: 20px;
                  width: 40px;
                  height: 40px;
                  font-size: 35px;
                  font-family: FuturaLight, sans-serif;
                  border: 2px solid grey;
                  cursor: pointer;
                  display: ${display_close_check};
                  justify-content: center;
                  align-items: center;
                `} onClick={handleCheckBoxClick}>

                X

            </div>

            {htmlParser(props.full_box_html_content)}


        </div>
    );
}

class HomePage extends React.Component {

    render() {

        const homeStyles = {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: this.state.center_box_location,
            alignItems: "center",
            overflow: "scroll"
        };

        if(this.state.center_box_location === "left" && !(this.state.display_orientation === "portrait")){
            homeStyles.justifyContent = "flex-start";
        }else if(this.state.center_box_location === "center" && !(this.state.display_orientation === "portrait")){
            homeStyles.justifyContent = "center";
        }else{
            // whenever in portrait, we're in here...
            homeStyles.flexDirection = "column"
            homeStyles.justifyContent = "flex-start";
        }

        return (
            <div id="HomePage" style={homeStyles}>

                <CenterStartBlock
                    display_center_start_block={this.state.display_center_start_block}
                    display_skill_block={this.state.display_skill_box}
                    updateFormState={this.updateFormState}
                    display_orientation={this.state.display_orientation}
                    full_box_open={this.state.full_box_open}
                    center_box_location={this.state.center_box_location}
                    shiftLeft={this.shiftLeft}
                    current_location={this.state.current_location}
                />

                <FullSkillBox
                    display_center_start_block={this.state.display_center_start_block}
                    display_skill_block={this.state.display_skill_box}
                    updateFormState={this.updateFormState}
                    display_orientation={this.state.display_orientation}
                    center_box_location={this.state.center_box_location}
                    shiftLeft={this.shiftLeft}
                    current_location={this.state.current_location}
                    full_box_open={this.state.full_box_open}
                    displayFullSkillbox={this.displayFullSkillbox}
                    full_box_html_content={this.state.full_box_html_content}
                    current_skill_index={this.state.current_skill_index}
                />

            </div>
        );
    }

    constructor(props) {
        super(props);
        let orientation = "landscape";
        let vw = window.innerWidth;
        if(!(vw > 1000)){
            // alert("less than 1000");
            orientation = "portrait";
        }
        this.state = {
            center_box_location: "center",
            current_location: "center",
            full_box_open: false,
            full_box_html_content: "",
            returned_date: "",
            current_skill_index: 0,
            display_orientation: orientation,
            display_center_start_block: "flex",
            display_skill_box: "none"
        };

        this.updateFormState = this.updateFormState.bind(this);
        this.updateSingleStateVar = this.updateSingleStateVar.bind(this);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.displayFullSkillbox= this.displayFullSkillbox.bind(this);

    }

    shiftLeft(item_index){

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
        this.updateFormState("current_skill_index", item_index);

        let html = window.skill_items[item_index].content_path;
        this.updateFormState('full_box_html_content', html);

        function scrollSkillbox(){
            document.getElementById('full_skill_box').scrollTo(0,0);
        }
        setTimeout(scrollSkillbox,100);

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
