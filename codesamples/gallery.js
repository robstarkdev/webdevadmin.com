
/*


I did not use webpack in the normal way for transpiling the react and es6 code

below the —watch dir ’src’ is where your normal or natural javascript is located

the —out-dir is set to “.” ie the present directory -> so … whereever you want your transpiled, transformed react and es6 javascript … you need to cd into that directory (ie the project root in /gallery and THEN run the command

COMMAND:
 npx babel --watch src --out-dir . --presets react-app/prod

ALSO NOTE: that this is a sort of "live reloader" and when you transpile, it will show the src/file.js -> output.js
files in the console but will then just "hang" as though it has not finished execution: no no, it is waiting for you
to save more changes, and then it will transpile again.

I USED BABEL FOR TRANSPILING IN THIS PROJECT … NOT WEBPACK



*/


(function() {
    "use strict";

    window.types = [
        {
            'display': "All Types",
            'key': ""
        },
        {
            'display': 'Theme Parks',
            'key' : 'themeparks'
        },
        {
            'display': 'Resorts',
            'key' : 'resorts'
        },
        {
            'display': 'Exhibits',
            'key' : 'exhibits'
        },
        {
            'display': 'Animal Enclosures',
            'key' : 'animalenclosures'
        },
        {
            'display': 'Small Gardens',
            'key' : 'smallgardens'
        },
        {
            'display': 'Landscape',
            'key' : 'landscape'
        },
        {
            'display': 'Products',
            'key' : 'products'
        },
        {
            'display': 'Other',
            'key' : 'other'
        }
    ];




    function Item(props) {

        function handleItemClick(evt){
            props.fetchItem(evt.currentTarget.id);
        }

        return (
            <div id={props.person.itemid} className="item_thumb" onClick={handleItemClick}>
                <span className="thumb_text">
                    {props.person.title}
                </span>
            </div>
        );
    }

    function ItemCollection(props) {
        return (
            <React.Fragment>
                {props.people.map(function(person) {
                    return <Item updateDisplayID={props.updateDisplayID}
                                 updateFormState={props.updateFormState}
                                 key={person.itemid} person={person} fetchItem={props.fetchItem}
                                 updateSingleStateVar={props.updateSingleStateVar}
                                 statuses={props.statuses}  returned_itemid={props.returned_itemid}
                    />;
                })}
            </React.Fragment>
        );
    }




    function DisplayCase(props) {

        if(props.loaded){
            return (
                <React.Fragment>

                    <div id="strip_title">
                        <div className="substrip_title">
                            {"Gallery ID#: " + props.returned_itemid}
                        </div>
                        <div className="substrip_title">
                            {props.returned_title}
                        </div>
                    </div>

                    <div id="strip_pic">
                        <img src={props.returned_imagepath} alt="" id="pic_img_tag" />
                    </div>

                    <div id="strip_description">
                        <div id="description_text_container">
                            {props.returned_description}
                        </div>
                    </div>

                </React.Fragment>
            );
        }else{
            return (
                <div className="spinner_display_case">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            );
        }
    }



    function Filters(props) {

        function updateTitle(evt) {
            //evt.currentTarget.id
            props.updateFormState("currentTitle", evt.currentTarget.value);
            console.log(evt.currentTarget.value)
        }

        function updateType(evt) {
            props.updateFormState("currentType", evt.currentTarget.value);
            console.log(evt.currentTarget.value)
        }


        return (
            <form action="" id="form_filters">
                <div className="form_control_div">
                    <label htmlFor="person-name">Search by Keywords: </label>
                    <input
                        className="text_title"
                        type="text"
                        name="person_name"
                        placeholder="Title of drawing, sketch etc."
                        id="person-name"
                        value={props.currentTitle}
                        onChange={updateTitle}
                    />
                </div>
                <div className="form_control_div">
                    <label htmlFor="type">Search by Type: </label>
                    <select

                        name="type"
                        id="type"
                        value={props.currentType}
                        onChange={updateType}>
                        <option value="">Select Type</option>
                        {window.types.map(function(tp) {
                            return (
                                <option value={tp.key} key={tp.key}>
                                    {tp.display}
                                </option>
                            );
                        })}
                    </select>
                </div>

            </form>
        );
    }

    class Gallery extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                // people: window.LMDirectory.people,
                people: [],
                currentTitle: "",
                currentType: "",
                displayID: "",
                statuses: "",
                loaded: true,
                returned_itemid: "",
                returned_imagepath: "",
                returned_title: "",
                returned_description: "",
                returned_date: ""
            };

            this.updateFormState = this.updateFormState.bind(this);
            this.updateDisplayID = this.updateDisplayID.bind(this);
            this.updateItemList = this.updateItemList.bind(this);
            this.fetchItem = this.fetchItem.bind(this);
            this.updateSingleStateVar = this.updateSingleStateVar.bind(this);
        }


        getApiUrl(){

            let loc = window.location.href;
            if(loc.indexOf('localhost') === -1){
                return 'gallery_api/sql_init_item_list.php';
            }else{
                return 'http://localhost/draw2build3.net/gallery/gallery_api/sql_init_item_list.php';
            }

        }

        getApiUrlFetchOne(){

            let loc = window.location.href;
            if(loc.indexOf('localhost') === -1){
                return 'gallery_api/sql_fetch_one_item.php?itemid=';
            }else{
                return 'http://localhost/draw2build3.net/gallery/gallery_api/sql_fetch_one_item.php?itemid=';
            }

        }

        /////// initialize ItemList
        componentDidMount(){

            // let apiURL_init = 'http://localhost/dnbasia.net/gallery/gallery_api/sql_init_item_list.php';
            //let apiURL_init = 'gallery_api/sql_init_item_list.php';

            let apiURL_init = this.getApiUrl();
            console.log(apiURL_init);

            axios.get(apiURL_init)
                .then(res => {
                    let items_arr = res.data;
                    this.setState({ people: items_arr });
                    window.people_full = items_arr;
                    console.log("%%%%%%% Here is the people array after fetch %%%%%%%%");
                    console.log(this.state.people);
                });
            let hashtag = window.location.hash;

            if(hashtag !== ""){
                console.log("hash: " + hashtag);
                let itemid = hashtag.substring(1);
                this.fetchItem(itemid);
            }

        }


        updateFormState(name, val) {
            this.setState(
                {
                    [name]: val
                },
                this.updateItemList
            );
        }

        fetchItem(itemid){

            this.setState(
                {loaded: false}
            );

            let that = this;

            let apiURLbase = this.getApiUrlFetchOne();

            let apiURL_fetch_one = apiURLbase + itemid;
            // 'http://localhost/dnbasia.net/gallery/gallery_api/sql_fetch_one_item.php?itemid=' + itemid;
            //'gallery_api/sql_fetch_one_item.php?itemid=' + itemid;



            axios.get(apiURL_fetch_one)
                .then(res => {

                    // this.setState({ people: itemArr });
                    console.log("%%%%%%% Here is the fetch one response %%%%%%%%");
                    console.log(res.data);
                    console.log(res.data[0].title);
                    this.setState(
                        {
                            returned_itemid: res.data[0].itemid,
                            returned_title: res.data[0].title,
                            returned_imagepath: res.data[0].imagepath,
                            returned_description: res.data[0].description,
                            returned_date: res.data[0].date,
                            loaded: true
                        }
                    );

                    window.location.hash = itemid;

                })
        }


        fetchItemsold(){
            this.updateSingleStateVar('loaded', false);
            // let apiURL = 'http://localhost/dnbasia.net/gallery/gallery_api/get.php?delay=3';
            let apiURL = 'gallery_api/get.php?delay=3';
            let resp_data = "waiting for data box...";
            let that = this;
            axios.get(apiURL).then(function (response){

                console.log(response.data);
                resp_data = response.data;
                console.log(that);
                that.updateSingleStateVar('statuses', resp_data);
                that.updateSingleStateVar('loaded', true);
                // should i bind the axios function also? .bind(this)?
            });
        }


        updateDisplayID(name, val){
            this.setState(
                {
                    [name]: val
                },
                this.fetchItems
            );
        }

        updateSingleStateVar(name, val){
            this.setState(
                {[name]: val}
            );
        }

        updateItemList() {
            var filteredPeople = window.people_full.filter(
                function(person) {
                    return (
                        (this.state.currentTitle === "" ||
                            person.title.toLowerCase().indexOf(this.state.currentTitle.toLowerCase()) !==
                            -1)
                        &&
                        (this.state.currentType === "" || person.type === this.state.currentType)
                    );}.bind(this)
            );

            this.setState({people: filteredPeople});
        }


        render() {
            return (
                <div id="gallery">

                    <div id="thumb_list">
                        <div id="box_filters">
                            <Filters
                                currentTitle={this.state.currentTitle}
                                currentType={this.state.currentType}
                                updateFormState={this.updateFormState}
                                updateItemList={this.updateItemList}
                                updateSingleStateVar={this.updateSingleStateVar}
                            />
                        </div>

                        <div id="box_items" className="better_scrollbar">
                            <ItemCollection
                                updateDisplayID={this.updateDisplayID}
                                updateFormState={this.updateFormState}
                                people={this.state.people} fetchItem={this.fetchItem}
                                updateSingleStateVar={this.updateSingleStateVar}
                                returned_itemid={this.state.returned_itemid}
                            />

                        </div>

                    </div>


                    <div id="item_detail" className="better_scrollbar">
                        <DisplayCase
                            selectedID={this.state.displayID}
                            statuses={this.state.statuses}
                            loaded={this.state.loaded}
                            returned_itemid={this.state.returned_itemid}
                            returned_title={this.state.returned_title}
                            returned_description={this.state.returned_description}
                            returned_imagepath={this.state.returned_imagepath}
                            returned_date={this.state.returned_date}
                        />

                    </div>



                </div>
            );
        }
    }

    ReactDOM.render(<Gallery />, document.getElementById("page_gallery_root"));

})();
