import { Component, createElement } from "react";
import { View } from "react-native";

import { HelloWorldSample } from "./components/HelloWorldSample";

export class NativeActionTimer extends Component {

    executeAction = this.executeAction.bind(this);
    _interval = null;
    _pendingAction = null;

    componentDidMount() {
        this._pendingAction = true;
    }

    componentDidUpdate(prevProps) { // executes in an infinite loop
        if (!prevProps.action && this.props.action) {
            if (this.props.interval === 0) {
                //execute action once
                this.executeAction()
            }
            else {
                //setup interval
                this._interval = setInterval(() => {
                    this.executeAction();
                }, this.props.interval)
            }
        }
        if (this._pendingAction) {
            this.executeAction();
            this._pendingAction = false;
        }

    }

    componentWillUnmount() {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }

    render() {
        return <View />;
    }

    executeAction() {
        if (this.props.action && this.props.action.canExecute && !this.props.action.isExecuting) {
            this.props.action.execute(); // since this updates the prop, the component will update
        }
    }


}
