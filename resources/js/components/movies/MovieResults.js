import React, { Component } from 'react';
import  Preview from './Preview.js';
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

export default class Movie extends Component {

      constructor(props) {
            super(props);
            this.toggleDrawer = this.toggleDrawer.bind(this);
            this.list = this.list.bind(this);
            this.state = {
                  movie: '',
                  title: '',
                  movie: '',
                  bottom: false
            }
      }


      toggleDrawer = (anchor, id, open) => (event) => {
            console.log(id);
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          // setState({ ...state, [anchor]: open });
          this.setState({
                  [anchor]: open,
            })

            if(id !=null) {


                 axios.get('http://127.0.0.1:8000/api/movies/latest/'+id)
                  .then(res => {
                        this.setState({
                              poster: 'https://image.tmdb.org/t/p/original'+res.data.poster,
                              title: res.data.title,
                              movie: res.data.movie_id
                        })
                  } )
                  .catch((err) => {
                        console.log(err);
                  })
            }

        };

      list = (anchor, id) => {
            return <Box
                  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                  role="presentation"
                  onClick={this.toggleDrawer(anchor, false)}
                  onKeyDown={this.toggleDrawer(anchor, false)}
                >
                  <List>
                          {this.state.title}
                  </List>
          </Box>
}

      render() {

            const {movie} = this.props;
            var poster =  'https://image.tmdb.org/t/p/original'+movie.poster;
            return (
                  <div className="col-2">
                        <div className="card border-dark movie-card mb-3"  onClick={this.toggleDrawer('bottom', movie.id, true)}>
                              <img src={poster} className="card-img-top" alt="..."/>
                        </div>

                          <Drawer
                              anchor={'bottom'}
                              open={this.state['bottom']}
                              onClose={this.toggleDrawer('bottom', null, false)}
                            >
                              {this.list('bottom')}
                            </Drawer>


                  </div>
            );
      }
}
