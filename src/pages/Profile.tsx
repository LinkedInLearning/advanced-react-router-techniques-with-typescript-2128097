import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  height: calc(100vh - 160px); /* Account for header and footer height */
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

const ProfileDetails = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Profile: React.FC = () => {
  const user = {
    id: "12345",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://www.example.com/avatar.jpg",
  };


  if (!user) {
    return (
      <Container>
        <Title>Error</Title>
        <p>Error fetching profile information. Please try again later.</p>
      </Container>
    );
  }

  return (
      <Container>
        <Title>Profile</Title>
        <ProfileDetails>
          <Avatar src={user.avatar} alt={`${user.name}'s Avatar`} />
          <Info>
            <Label>Name:</Label> {user.name}
          </Info>
          <Info>
            <Label>Email:</Label> {user.email}
          </Info>
          <Info>
            <Label>User ID:</Label> {user.id}
          </Info>
        </ProfileDetails>
      </Container>
  );
};

export default Profile;
