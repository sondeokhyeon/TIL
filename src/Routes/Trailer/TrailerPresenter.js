import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
`;

const VideoPlayer = styled(YouTube)`
  width: 70vw;
  height: 100%;
`;

const youtubeOpts = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1
  }
};

const VideoListContainer = styled.ul`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const VideoList = styled.li`
  border-bottom: 1px solid gray;
  padding: 30px 0;
  &:hover {
    background-color: grey;
  }
`;
const VideoName = styled(Link)`
  font-size: 15px;
  overflow: hidden;
  padding-left: 5px;
`;

const TrailerPresenter = ({ result, loading, error, pathname, trailerId }) =>
  loading ? (
    <>
      <Helmet>
        <title>loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message text={error} color="#fff" />
  ) : (
    <>
      <Helmet>
        <title>{result.original_title}</title>
      </Helmet>
      <Container>
        <VideoPlayer videoId={trailerId} opts={youtubeOpts} />
        <VideoListContainer>
          {result.videos.results.map(video => (
            <VideoList key={video.id}>
              <VideoName to={`${pathname}/${video.key}`}>
                {video.name}
              </VideoName>
            </VideoList>
          ))}
        </VideoListContainer>
      </Container>
    </>
  );

TrailerPresenter.propTypes = {
  name: PropTypes.string,
  video: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TrailerPresenter;
