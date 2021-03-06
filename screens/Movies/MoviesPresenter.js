import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, ScrollView, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Comments from "../../components/Comments";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

const Container = styled.View`
`;

export default ({loading, nowPlaying, popular, upcoming}) => {
    return(
        <ScrollView style={{
            backgroundColor: "black"
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
                    <Container>
                        <Title title={"Popular Movies"} />
                        <ScrollView
                            style ={{marginTop: 20, marginBottom: 40}}
                            contentContainerStyle={{ paddingLeft: 30}} 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {popular.map(movie => (
                                <Vertical
                                    id={movie.id}
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                    votes={movie.vote_average}
                                />
                            ))}     
                        </ScrollView>
                        
                        <Comments
                               
                        />
                    </Container>
                </>
            )}
        </ScrollView>
    );
};