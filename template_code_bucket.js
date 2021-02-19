






const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
    return <div style={divStyle}>Hello World!</div>;
}




function Marker1(props) {

    const [display, setDisplay] = useState(false);


    function toggleDisplay(evt){
        if(display === false){
            setDisplay(true);
        }else{
            setDisplay(false);
        }

    }

    return (
        <div id={props.id} key={props.key} className="rs_marker" onClick={toggleDisplay}>
            <img className="rs_marker_image" src={img_mk} alt="" />

            <div
                className={display ? 'rs_popup' : 'rs_popup_hidden'}>
                {props.txtTitle}
            </div>
        </div>
    );

}








