/* eslint-disable no-unused-vars */
const {
  SPANISH_TO_ENGLISH,
  TRACK_LIST
} = require('./constants.js')

function newSingl(single) {
  
}

const newSingle = (single) => {
  return ('New single ' + single + ' is dropping soon!');

  //console.log(newSingle('cake'));

};

const eresBadBunny = (name) => {
  if (name == 'Bad Bunny' || name == 'BAD BUNNY') {
    return (true);
  }
  else {
    return (false);
  }
};

const areYouLil = (name) => {
  if (name.startsWith('Lil ') || name.startsWith('lil ')) 
  {
    return true;
  }
  else
  {
    return false;
  }
};

const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {

  const array = [videoOneViews, videoTwoViews, videoThreeViews];
  return (Math.max (...array));


};

const mostViews = (videoViews) => {
  return (Math.max (...videoViews));
};

const validateEmail = (email) => {
  if (email.startsWith("@") == false && email.includes("@") == true && email.endsWith(".com" || '.org' || '.edu' || '.net') == true) {
    return 'Valid email';
  }
  else
  {
    return 'Invalid email';
  }
};



const validateEmailWithMessage = (email) => {
  if (email.startsWith("@") == true) {
      return 'Invalid email: missing recipient name';
  }
  else if (email.includes("@") == false) {
    return 'Invalid email: missing @ symbol';
  }
  else if (email.endsWith(".com" || '.org' || '.edu' || '.net') == false) {
    return 'Invalid email: email address should end with .com, .edu, .net, or .org';
  }
  else
  {
    return 'Valid email';
  }
};

/////???
const getInitials = (name) => {
  const fullName = name.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
};


const getInitialsOneName = (name) => {
  const initials = name.charAt(0) + name.charAt(1);
  return initials.toUpperCase();
};


//COMING BACK MAYBE 
const getInitialsLongName = (name) => {
  const fullName = name.split(' ', 3);
  // console.log(fullName);
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
};

//here < ---------------------------------------------------------------- >

const howRepetitiveAreYou = (lyrics, word) => {
  var num = 0;
  var arr = lyrics.split(" ");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)){
      num += 1;
    }
  }
  return num;
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};