import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    homeRoot: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    containerDiv: {
      flex:'auto',
      position: 'fixed',
      top: '40%',
      left: '42.5%',
    },
    extraBtnStyle:{
      margin:'2%'
    },
    centerItem:{
      flex:'auto',
      top:'15%',
      position:'relative',
      left:'25%',
      right:'25%',
      width:'50%',
      marginBottom: '50px',
      marginTop: '60px'
    },
    fullWidth:{
      width:'100%',
     marginBottom:'25px',
     marginTop:'20px'
    },
    linkContainer:{
     marginBottom:'20px',
     'color': '#8400ff'
    },
    authResponse:{
      fontWeight:'bolder'
    },
    title: {
      flexGrow: 1,
    },
   fullWidthProfile:{
     marginTop:'100px',
     padding: '20px',
   },
   link: {
     color: 'white',
     textDecoration: "none"
   },
   header: {
    background: 'transparent !important',
    boxShadow: 'none',
   },
  }));