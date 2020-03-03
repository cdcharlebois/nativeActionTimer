import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";

export class NativeActionTimer extends Component {

    render() {
        return <HelloWorldSample
            style={this.props.style}
            action={this.props.action}
        />;
    }
}
