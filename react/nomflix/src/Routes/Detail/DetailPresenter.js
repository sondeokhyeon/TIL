import React from "react";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import styled from "styled-components";
import Helmet from "react-helmet";
import Message from "../../Components/Message";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainr = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Imdb = styled.a`
  font-weight: 500;
  color: skyblue;
  font-size: 20px;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const VideoDataContainer = styled.div`
  margin-top: 10px;
`;

const TrailerVideo = styled.span`
  margin: 10px 0px;
  font-size: 20px;
  color: skyblue;
`;

const CompanyContainer = styled.div`
  width: 100%;
  background-color: #cacaca59;
  display: flex;
  height: 260px;
  margin-top: 20px;
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 200px;
`;

const Companylogo = styled.div`
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 200px;
  height: 250px;
`;

const Companyname = styled.div`
  padding-top: 5px;
  text-align: center;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const SeasonContainer = styled.div`
  width: 100%;
  background-color: #cacaca59;
  display: flex;
  height: 260px;
  margin-top: 20px;
  overflow: scroll;
`;

const Season = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const SeasonPoster = styled.div`
  margin-top: 15px;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 200px;
  height: 210px;
`;
const SeasonName = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const DetailPresenter = ({ result, loading, error, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={
          result.poster_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : ""
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../asserts/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainr>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>﹒</Divider>
            <Item>
              {result.runtime && result.runtime + 'min'} 
              {result.episode_run_time && result.episode_run_time + 'min'} 
            </Item>
            <Divider>﹒</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genres, index) =>
                  index === result.genres.length - 1
                    ? genres.name
                    : `${genres.name} / `
                )}
            </Item>
          </ItemContainr>
          <Overview>{result.overview}</Overview>
          <VideoDataContainer>
            {result.imdb_id && (
              <>
                <Imdb
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                  target="_blank"
                >
                  DB-link
                </Imdb>
                <Divider>﹒</Divider>
              </>
            )}
            {result.videos && (
              <TrailerVideo>
                <Link to={`/trailer/${result.id}/type=${isMovie}`}>
                  TrailerVideo
                </Link>
              </TrailerVideo>
            )}
          </VideoDataContainer>

          {result.production_companies &&
            result.production_companies.length > 1 && (
              <CompanyContainer>
                {result.production_companies.map(company => (
                  <Company key={company.id}>
                    <Companylogo
                      bgImage={
                        company.logo_path
                          ? `https://image.tmdb.org/t/p/w200${
                              company.logo_path
                            }`
                          : require("../../asserts/noPosterSmall.png")
                      }
                    />
                    <Companyname>{company.name}</Companyname>
                  </Company>
                ))}
              </CompanyContainer>
            )}

          {result.seasons && result.seasons.length > 1 && (
            <SeasonContainer>
              {result.seasons.map(season => (
                <Season>
                  <SeasonPoster
                    bgImage={
                      season.poster_path
                        ? `https://image.tmdb.org/t/p/w200${season.poster_path}`
                        : require("../../asserts/noPosterSmall.png")
                    }
                  />
                  <SeasonName>{season.name}</SeasonName>
                </Season>
              ))}
            </SeasonContainer>
          )}
        </Data>
      </Content>
      {error && <Message error={error} color="#e74c3c" />}
    </Container>
  );

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
