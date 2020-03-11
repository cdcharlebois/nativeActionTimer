import { Component, createElement } from "react";
import { Text, View, Button } from "react-native";

import { flattenStyles } from "../utils/common";

const defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export class HelloWorldSample extends Component {
    styles = flattenStyles(defaultStyle, this.props.style);
    executeActionHandler = this.executeAction.bind(this);
    _pendingAction = null;

    componentDidMount() { // doesn't seem to execute, likely because the component mounts when props are empty?
        this._pendingAction = true;
    }

    componentDidUpdate() { // executes in an infinite loop
        if (this._pendingAction) {
            this.executeActionHandler()
            this._pendingAction = false;
        }
    }

    render() {
        console.log("render")
        return (
            <View style={this.styles.container}></View>
        );
    }

    executeAction() {
        if (this.props.action && this.props.action.canExecute && !this.props.action.isExecuting) {
            this.props.action.execute();
        }
    }

    tick() {
        this.executeAction();
    }
}
