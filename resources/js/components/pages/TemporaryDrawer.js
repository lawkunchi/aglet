import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default class TemporaryDrawer extends Component {

       constructor(props) {
            super(props);
            this.toggleDrawer = this.toggleDrawer.bind(this);
            this.list = this.list.bind(this);
            this.state = {
                  bottom: false
            }
      }

      toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          // setState({ ...state, [anchor]: open });
          this.setState({
                  [anchor]: open
            })
        };

      list = (anchor, id) => {
            return <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={this.toggleDrawer(anchor, false)}
                  onKeyDown={this.toggleDrawer(anchor, false)}
                >
                  <List>
                          dsads
                  </List>
          </Box>
}


          render() {

            return (
                  <div>
                

                      <Button onClick={this.toggleDrawer('bottom', true)}>bottom</Button>
                      <Drawer
                        anchor={'bottom'}
                        open={this.state['bottom']}
                        onClose={this.toggleDrawer('bottom', false)}
                      >
                        {this.list('bottom')}
                      </Drawer>
                </div>
            );
      }

}

