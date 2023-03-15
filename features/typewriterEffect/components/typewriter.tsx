import React from "react";
import { TypewriterProps } from "../types/typewriterProps";
import { TypewriterState } from "../types/typewriterState";

class TypeWriter extends React.PureComponent<TypewriterProps, {}> {
  unmounted: boolean = false;
  loopNum: number = 0;
  period: number = 2000;
  isDeleting: boolean = false;
  state: TypewriterState = {text: ""};
  
  constructor(props: TypewriterProps) {
    super(props);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.period = 2000;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    toRotate.forEach((fullTxt: string) => {

      let newText = fullTxt.substring(0, this.state.text.length + 1);
  
      let delta = 200 - Math.random() * 100;
  
      this.isDeleting = false;
      this.loopNum++;
  
      this.setState({ text: newText });
  
      setTimeout(() => {
        this.tick();
      }, delta);
    });

  }

  render() {
    return <span className="text-gray-50">{this.state.text}</span>;
  }
}

export default TypeWriter;
