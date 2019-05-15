import React from 'react';
import SweetAlert from 'sweetalert2-react';


class SuccessAlert extends React.Component {

    state = {
        show: false
    }


    render() {
        return (
            <div>
                {/* <button onClick={() => this.setState({ isShow: true })}>Alert</button> */}
                <SweetAlert
                    show={() => this.setState({ show: true })}
                    title="Demo"
                    text="SweetAlert in React"
                    onConfirm={() => this.setState({ show: false })}
                />
            </div>
        );
    }
}

export default SuccessAlert;