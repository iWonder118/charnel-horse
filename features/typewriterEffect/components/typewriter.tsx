import React from "react";

import { TypewriterProps } from "../types/typewriterProps";
import { TypewriterState } from "../types/typewriterState";

class TypeWriter extends React.PureComponent<TypewriterProps, {}> {
  unmounted: boolean = false;
  state: TypewriterState = {text: ""};
  
  constructor(props: TypewriterProps) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: fullText } = this.props;

    let newText = fullText.substring(0, this.state.text.length + 1);

    let delta = 200 - Math.random() * 100;

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick()
    }, delta);

  }

  render() {
    return (
        <div className="w-11/12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <p className="text-gray-900 mt-2">{this.state.text}</p>
          </div>
        </div>
    )
  }
}

export default TypeWriter;
