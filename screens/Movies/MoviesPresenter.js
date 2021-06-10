import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

export default ({loading, nowPlaying, popular}) => {
    return(
        <ScrollView style={{
            backgroundColor: "black", 
            }}
            contentContainerStyle={{
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {loading ? (
                <ActivityIndicator color="white" size="small"/>
            ) : (
                <>
                    <SlideContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map(movie => (
                                <Slide 
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    overview={movie.overview}
                                    votes={movie.vote_average}
                                    backImage={movie.backdrop_path}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SlideContainer>
                    <Title title={"Popular Movies"} />
                    <ScrollView horizontal >
                        {popular.map(movie => (
                            <Vertical
                                key={movie.id}
                                poster={movie.poster_path}
                                title={movie.original_title}
                                votes={movie.vote_average}
                            />
                        ))}     
                    </ScrollView>
                </>
            )}
        </ScrollView>
    );
};