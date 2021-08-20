import React,{useEffect} from 'react';
import {Card} from '@material-ui/core';
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';

export default function Contact() {
     const classes = useStyles();
      return (

            <div className="mx-auto w-50">
                  <Card className={classes.fullWidthProfile}>
                        <h4>Contact Information</h4>
                        <div>
                              <h6 className><b>Name: Lawrence Chibondo</b></h6>
                              <h6><b>Email: lawkunchi@yahoo.com</b></h6>
                              <h6><b>Mobile: 073 731 1860</b></h6>
                        </div>
                  </Card>

            </div>
      );
}