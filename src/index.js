

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { css, jsx } from '@emotion/react';
// import { css, cx } from '@emotion/css';

import './css/cssHomePage.css';

import img_hammer_wrench from './images/hammer_wrench.png';
import contact_logo from './images/square_contact_logo_2021.png';


window.skill_items = [
    {
        skill_id: 1,
        tech_type: "View My Developer Videos",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "src/images/skill_logos/youtube_logo_transp_backgrnd.png",
        link_type: "simple"
    }
    ,
    {
        skill_id: 2,
        tech_type: "React",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    }
    ,
    {
        skill_id: 3,
        tech_type: "Javascript/jQuery",
        link_text: "coding examples etc",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    },
    {
        skill_id: 4,
        tech_type: "HTML/CSS",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    }
    ,

    {
        skill_id: 5,
        tech_type: "PHP",
        link_text: "coding examples etc",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    },


    {
        skill_id: 6,
        tech_type: "Node",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    }
    ,
    {
        skill_id: 7,
        tech_type: "System Administration",
        link_text: "example sites",
        link_url: "https://google.com",
        logo_url: "./images/skill_logos/unnamed.jpg",
        link_type: "fancyreact"
    }
    ,

    {
        skill_id: 8,
        tech_type: "Chinese",
        link_text: "example sites",
        link_url: "https://google.com",
        link_type: "fancyreact"
    }
    ,


    {
        skill_id: 9,
        tech_type: "Spanish",
        link_text: "example sites",
        link_url: "https://google.com",
        link_type: "fancyreact"
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

    const color_bckgrnd_hover = 'lightblue';
    const color_bckgrnd = 'lightgrey';
    const logo_styles = {
        height: "28px",
        width: "auto",
        marginRight: "5px"
    }

    return (
        <div id={props.item.skill_id} css={css`
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
                  
                  
                `}>

            <img src={props.item.logo_url} style={logo_styles} alt=""/>
                {props.item.tech_type}

        </div>
    );
}

function AllItems(props){

    return (
        skill_items.map(function(item){
            return <Item key={item.skill_id} item={item} />;
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

                <AllItems />

            </div>
    );
}



function CenterStartBlock(props) {

    return (

        <div css={css`
                  width: 340px;
                  height: auto;
                  font-size: 18px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                `}>

            <PicBox />
            <ContactDetailsBox />
        </div>
    );
}


const homeStyles = {

    width: "100%",
    height: "100%",
    paddingLeft: "3px",
    display: "flex",
    flexdirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center"
};


class HomePage extends React.Component {

    render() {

        if(this.state.center_box_location === "left"){

            homeStyles.justifyContent = "flex-start";
        }


        return (
            <div id="HomePage" style={homeStyles}>

                <CenterStartBlock />

            </div>
        );
    }

    shiftLeft(skill_item){
        // first check location of box

        // if already left, don't move it

        // if this is a "fancyreact" link type, shift left

        // make call to method and pass the skill_item as
        // parameter, this other method will display
        // all of the relevent info in a large box to
        // the right with skill info, maybe get it from
        // a database

    }

    constructor(props) {
        super(props);
        this.state = {
            center_box_location: "left",
            returned_date: ""
        };
        this.updateFormState = this.updateFormState.bind(this);
        this.updateSingleStateVar = this.updateSingleStateVar.bind(this);
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



ReactDom.render(<HomePage />, document.querySelector('body'));


