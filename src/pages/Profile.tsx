import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getUserProfileThunk } from "../state/authSlice";
import {LoadingSpinner} from "../components/LoadingSpinner";

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
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      dispatch(getUserProfileThunk());
    }

    // Add a 1-second delay for local loading
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, user]);

  if (loading || localLoading) {
    return <LoadingSpinner size={50} />;
  }

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
