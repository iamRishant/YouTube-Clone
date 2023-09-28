import React, { useState } from 'react'
import './Comments.css'
import DisplayComments from './DisplayComments';
function Comments() {
    const [commentText,setCommentText]=useState("")

    const commentList=[
        {
        _id:"1",
        commentBody:"Hello",
        userCommented:"Abc"
        },
        {
        _id:"2",
        commentBody:"haalooo",
        userCommented:"Abc"
        },
        {
        _id:"3",
        commentBody:"hhhyyyyeeee",
        userCommented:"Abc"
        },
    ]
    const handleOnSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
      <form
      className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
      <input type='text' onChange={e=>setCommentText(e.target.value)} placeholder='Add Comments...' className='comment_ibox'/>
      <input type='submit' value='add' className='comments_add_btn_comments'/>
      </form>
      <div className='display_comment_container'>
      {
        commentList.map(m=>{
            return (

                <DisplayComments
                    cId={m._id} 
                    commentBody={m.commentBody}
                    userCommented={m.userCommented}
                />
            )
        })
      }
      </div>
    </>
  )
}

export default Comments
