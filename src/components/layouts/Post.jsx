import React, { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Media } from "../../components/styledComponents/Divs";
import { ActionButton } from "../../components/styledComponents/Buttons";
import { FetchContext } from "../../contexts/FetchContext";
import CommentList from "../../components/layouts/CommentList";
import CommentBox from "../../components/layouts/CommentBox";

const Post = (props) => {
  let { _id, upVotes, downVotes, views, comments, title, tags } = props.post;
  const fetchContext = useContext(FetchContext);
  const [showComments, setShowComments] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [upVoteCount, setUpVoteCount] = useState(upVotes);
  const [downVoteCount, setDownVoteCount] = useState(downVotes);
  const upVoteRef = useRef(upVoteCount);
  const downVoteRef = useRef(downVoteCount);

  const upVote = async (id) => {
    try {
      const postUpVote = await fetchContext.authAxios.post(
        `/posts/upvote/${id}`
      );
      if (postUpVote) {
        setUpVoteCount(postUpVote.data.upVotes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    upVoteRef.current = upVoteCount;
  }, [upVoteCount]);

  const downVote = async (id) => {
    try {
      const postDownVote = await fetchContext.authAxios.post(
        `/posts/downvote/${id}`
      );
      if (postDownVote) {
        setDownVoteCount(postDownVote.data.downVotes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    downVoteRef.current = downVoteCount;
  }, [downVoteCount]);
  return (
    <Media>
      <div className="author-details d-flex flex-wrap align-items-center">
        <img
          src="images/pic.jpg"
          alt="user"
          className="img-fluid author-pic rounded-circle"
        />
        <div>
          <div className="author-name">Nii</div>
          <div className="date-posted">04/08/2018</div>
        </div>
      </div>
      <div className="media embed-responsive embed-responsive-16by9">
        <video controls>
          <source src="images/trial.mp4" type="video/mp4" />
          <source src="images/trial.mp4" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className="media-details">
        <div className="details-title">{title}</div>
        <div className="details-info d-flex flex-wrap justify-content-between">
          <div className="taglist">{tags}</div>
          <div className="info-right d-flex flex-wrap">
            <div className="media-views">{views} views</div>
            <div
              onClick={() =>
                showComments === false
                  ? setShowComments(true)
                  : setShowComments(false)
              }
              className="comment-link"
            >
              {comments.length} Comments
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="media-actions">
        <div>
          <ActionButton
            className="d-flex flex wrap"
            onClick={() => upVote(_id)}
          >
            Up <span className="ml-2">{upVoteCount}</span>
          </ActionButton>
        </div>
        <div>
          <ActionButton
            className="d-flex flex wrap"
            onClick={() => downVote(_id)}
          >
            Down <span className="ml-2">{downVoteCount}</span>
          </ActionButton>
        </div>
        <div>
          <ActionButton
            onClick={() =>
              showCommentInput === false
                ? setShowCommentInput(true)
                : setShowCommentInput(false)
            }
          >
            Comment
          </ActionButton>
        </div>
        <div>
          <ActionButton>Share</ActionButton>
        </div>
      </div>
      {showComments === true ? (
        <div className="comment-list">
          <div className="divider"></div>
          {comments.length > 0 ? (
            <>
              <div>
                <CommentList comments={comments} />
              </div>
            </>
          ) : (
            <div className="ml-4 mb-4">
              <br />
              No comments yet.Be the first to comment
            </div>
          )}
        </div>
      ) : null}
      <>
        {showCommentInput ? (
          <>
            <div className="d-flex flex-wrap mt-2 ">
              <img
                src="images/pic.jpg"
                alt="user"
                className="img-fluid comment-input-pic rounded-circle"
              />
              <div className="comment-box">
                <CommentBox />
              </div>
            </div>
            <div className="comment-list">
              {comments.length > 0 ? (
                <>
                  <div>
                    <CommentList comments={comments} />
                  </div>
                </>
              ) : (
                <div className="ml-4 mb-4">
                  <br />
                  No comments yet.Be the first to comment
                </div>
              )}
            </div>
          </>
        ) : null}
      </>
    </Media>
  );
};

export default Post;
