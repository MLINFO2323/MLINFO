import style__hamburger from "./Hamburger.module.css"
import React from "react";
interface IProps {
    children?: JSX.Element[]
}

interface IState {
    open?: boolean;
}

class Hamburger extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    handleClick() {
        if (this.state.open == false)
            this.setState({ open: true });
        else
            this.setState({ open: false });
    }
    render() {
        return <div className={style__hamburger.Container}>
            <div className={style__hamburger.panel_wrap + (this.state.open ? " " + style__hamburger.open_panel : "")}>
                <div className={style__hamburger.panel}>
                    {this.props.children}
                </div>
            </div>
            <div className={style__hamburger.ButContainer}>
                <div
                    onClick={() => this.handleClick()}
                    className={style__hamburger.btn6 + (this.state.open ? " " + style__hamburger.open : "")}
                >
                    <div className={style__hamburger.icon} />
                </div>
            </div>
        </div>
    }
}
export default Hamburger;