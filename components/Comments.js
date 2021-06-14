import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-end;
`;

const Comment = styled.Text`
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;

const Nickname = styled.Text`
  color: white;
  font-weight: bold;
  margin-right: 5px;
`;

const Image = styled.Image`
    width: 50px;
    height: 50px;
    margin-left: 30px;
`;

const Date = styled.Text`
  color: gray;
`;

const Reply = styled.Text`
  color: gray;
  margin-top: 5px;
`;

const Comments = ({}) => (
    <Container>
        <Image
          source={require('../profile/bros_blank.jpg')} 
        />
        <Comment>
            <Nickname>sumin</Nickname>안가가abcfdsafdsafdsafdsafdsafdsaaee가가가가abc가가가가가가가ㅏ가가가가가ㅏ가가가가가가가가가ㅏ가가가가ㅏ가가가가가
        </Comment>
        <Date>2020.02.01</Date>
        <TouchableOpacity>
          <Reply>답글달기</Reply>
        </TouchableOpacity>
    </Container>
);

// Horizontal.propTypes = {
//    id: PropTypes.number.isRequired,
//    title: PropTypes.string.isRequired,
//    votes: PropTypes.number.isRequired,
//    overview: PropTypes.string.isRequired,
//    poster: PropTypes.string.isRequired
//  };

export default Comments;