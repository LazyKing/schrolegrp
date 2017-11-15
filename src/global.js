
//console.log(process.env.REACT_APP_BASE_URL);
//console.log(process.env.NODE_ENV);
if( process.env.REACT_APP_BASE_URL === undefined && process.env.NODE_ENV === 'development' ) {
  global.devHost = 'http://13.126.224.211';
  //console.log(global.devHost);
}
 else if ( process.env.REACT_APP_BASE_URL ) {
   global.devHost = process.env.REACT_APP_BASE_URL ;
   //console.log(global.devHost);
 }
  else if ( process.env.NODE_ENV === 'production' ) {
    global.devHost = 'production URL' ;
  } else {

  }
