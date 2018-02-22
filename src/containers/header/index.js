import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

        this.handleToggle = this.handleToggle.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleToggle() { this.setState({ open: !this.state.open }); }

    handleClose() { this.setState({ open: false }); }

    render() {
        return (
            <section>
                <AppBar
                    title="Title"
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle} />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}>


                    <Link key={1} to=''><MenuItem>JOOJ}</MenuItem></Link>
                    <Link key={2} to='about-us'><MenuItem>JOOJ}</MenuItem></Link>


                    {/* {menuItems.map((item, index) => <Link key={index} href={item.url}><MenuItem>{item.title}</MenuItem></Link>)} */}
                </Drawer>
            </section>
        )
    }
}

export default Header;