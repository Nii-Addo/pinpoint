import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewLink = ({ className, children }) => (
  <Link calssName={className}>{children}</Link>
);

export const StyledLink = styled(Link)`
  color: var(--linkColor);

  &:hover {
    text-decoration: none;
    color: var(--linkColor);
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
    transform: translate3d(0, 0, 0);
    pointer: cursor;
  }
`;

export const StyledMakePostCard = styled.div`
  width: 100%;
  height: 7rem;
  padding: 0 0 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid var(--warmGray-60, #84878a);
  background-color: var(--mainWhite);

  .make-post-text {
    height: 50%;
    border-bottom: 1px solid var(--warmGray);
    padding: 1rem;
  }

  .make-post-buttons {
    height: 50%;
  }
`;

export const Media = styled.div`
  width: 100%;
  outline: none !important;
  display:block;
  position: relative;
  background-color: var(--mainWhite);
  margin-bottom: 1.2rem;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .author-details {
    width: 100%;
    height: 4rem;
    padding: 0.1rem 0.7rem 0.1rem 0.7rem;
    position: relative;
    top: 0;
  }

  .author-pic {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  .author-name {
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.1765;
    white-space: nowrap;
    word-break: break-word;
    margin-right:30rem;
  }

  .top-m{
    width:100%;
  }
  .game-level{
    font-size:0.9rem;
    position:relative;
    float: right;
  }

  .date-posted {
    font-size: 0.6rem;
    font-weight: 400;
    font-size: 0.8125rem;
  }

  .media {
    max-width: 100%;
    height: auto;
  }

  .media-details {
    width: 100%;
    max-height: 7.5rem;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.5rem 0rem 0.7rem;
    display: block;
  }

  .details-tittle {
    display:inline-flex,
    word-wrap: break-word;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5rem;
    width:100%;
    max-height:5rem;
    overflow:hidden;
    padding-right:3rem;
  }

  .details-info {
    font-size: 0.9rem;
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    position:relative;
    margin-top: 0.5rem;
    color: #606060;
    width:100%;
  }

  .tags{
    position:relative;
  }

 .media-views {
    margin-right:2rem;
  }

  .actions-info {
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    margin-left:59%;
  }

.comment-link{
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
}

  .media-actions {
    width: 100%;
    height: 2.7rem;
    position: relative;
    top: 1.5%;
    bottom:0;
    padding: 0.2rem 0.5rem 0.2rem 0.7rem;
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    justify-contents: between;
  }

  .actions-buttons {
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
  }

.comment-list{
  position:relative;
  display:block;
}

.comment-input-pic{
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  margin-bottom:4px;
  margin-left:0.5rem;
}

.comment-box{
  width:89%;
  margin-bottom:4px;
  height:auto;
}
`;

export const CommentWrappper = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--mainWhite);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex: 1 0;
  padding-top: 0.5rem;

  .author-pic {
    width: 2rem;
    height: 2rem;
    align-self: auto;
    position: relative;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }

  .comment-body {
    min-height: 4rem;
    width: 90%;
    padding: 0.5rem 0.5rem 0.2rem 0;
    word-break: break-word;
    border-radius: 6px;
    margin-right: 1.1rem;
    align-items: center;
  }
  .author-name {
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.1765;
    white-space: nowrap;
    word-break: break-word;
  }

  .date-posted {
    font-size: 0.6rem;
    font-weight: 400;
    font-size: 0.8rem;
  }

  .comment-actions {
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    margin-left: 3.5rem;
    font-size: 0.8rem;
    margin-top: 0;
  }
`;
