import * as React from "react";
import { StyledBubble } from './style';

export class Bubble extends React.Component {
    props: {
        icon: any,
        isFirst?: boolean
    }

    render() {
        return (
            <StyledBubble icon={this.props.icon} isFirst={this.props.isFirst}>

            </StyledBubble>   
        )
    }
}