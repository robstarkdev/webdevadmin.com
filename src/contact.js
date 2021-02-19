
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class SimpleApp extends Component {

    render() {
        return (

            <div>
                Jenny:<br></br>
                Tel.: 867-5309
            </div>
        );
    }
}

ReactDom.render(<SimpleApp />, document.getElementById('root'));


