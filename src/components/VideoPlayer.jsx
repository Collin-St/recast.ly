var VideoPlayer = ({video}) => (
  // console.log(props, 'video player activate');
  // var url = "https://www.youtube.com/embed/" + props.id.videoId;
  // var title = props.snippet.title;
  // var desc = props.snippet.description;
  // return (
  !video ? <div className="video-player">Please wait...</div> :
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      {/*<iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>*/}
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
  // )
);

// var VideoPlayer = () => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>Video Title</h3>
//       <div>Video Description</div>
//     </div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
