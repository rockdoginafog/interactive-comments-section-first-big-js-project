let data = {

  "currentUser": {
    "image": {
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": {
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": {
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": {
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": {
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}

const username = document.querySelectorAll(".username")
const timeAgo = document.querySelectorAll(".time-ago")
const comment = document.querySelectorAll(".comment")
const upvotes = document.querySelectorAll(".upvotes")
const avatar = document.querySelectorAll(".avatar")
const sendBtn = document.querySelector(".send")
const userComment = document.querySelector(".user-comment")
const form = document.querySelector(".form")
const bigCommentContainers = document.querySelectorAll(".big-comment-container")
const userFirstComment = document.querySelector(".user-first-comment")
const deleteBtns = document.querySelectorAll(".delete-btn")
const editBtn = document.querySelectorAll(".edit-btn")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")
const deleteText = document.querySelectorAll('.delete')
const hero = document.querySelector('.hero')
const replyBtns = document.querySelectorAll('.reply-btn')
const commentContainers = document.querySelectorAll('.comment-container')
const plusAndMinusContainer = document.querySelectorAll('.plus-and-minus-container')
const areYouSureContainer = document.querySelector('.are-you-sure-container')
const noBtn = document.querySelector('.no')
const yesBtn = document.querySelector('.yes')


//zastosowanie pliku json do wyświetlania danych
username[0].innerHTML = data.comments[0].user.username
username[1].innerHTML = data.comments[1].user.username
username[2].innerHTML = data.comments[1].replies[0].user.username
username[3].innerHTML = data.comments[1].replies[1].user.username
timeAgo[0].innerHTML = data.comments[0].createdAt
timeAgo[1].innerHTML = data.comments[1].createdAt
timeAgo[2].innerHTML = data.comments[1].replies[0].createdAt
timeAgo[3].innerHTML = data.comments[1].replies[1].createdAt
comment[0].innerHTML = data.comments[0].content
comment[1].innerHTML = data.comments[1].content
comment[2].innerHTML = data.comments[1].replies[0].content
comment[3].innerHTML = data.comments[1].replies[1].content
upvotes[0].innerHTML = data.comments[0].score
upvotes[1].innerHTML = data.comments[1].score
upvotes[2].innerHTML = data.comments[1].replies[0].score
upvotes[3].innerHTML = data.comments[1].replies[1].score
avatar[0].src = data.comments[0].user.image.png
avatar[1].src = data.comments[1].user.image.png
avatar[2].src = data.comments[1].replies[0].user.image.png
avatar[3].src = data.comments[1].replies[1].user.image.png
avatar[4].src = data.comments[1].replies[1].user.image.png


//dodawanie nowego komentarza
form.addEventListener("submit", () =>{
    event.preventDefault()
    if(!userComment.value == ''){
      const newElement = document.createElement('div')
      newElement.classList.add('big-comment-container')
        const newerElement = document.createElement('div')
        newerElement.classList.add('plus-and-minus-container')
          const plusBtn = document.createElement('button')
          plusBtn.classList.add('plus')
          plusBtn.classList.add('scale')
            const newImg = document.createElement('img')
            newImg.classList.add('icon-plus')
            newImg.classList.add('plus-new')
            newImg.classList.add("icon")
            newImg.src = 'images/icon-plus.svg'
              const newP = document.createElement('p')
              newP.classList.add('upvotes')
              newP.classList.add('upvotes-new')
              newP.innerHTML = 0
                const minusBtn = document.createElement('button')
                minusBtn.classList.add('minus')
                minusBtn.classList.add('scale')
                  const newerImg = document.createElement('img')
                  newerImg.classList.add('icon')
                  newerImg.classList.add('icon-minus')
                  newerImg.classList.add('minus-new')
                  newerImg.src = 'images/icon-minus.svg'
                    const commentContainer = document.createElement('div')
                    commentContainer.classList.add('comment-container')
                      const usernameTimeReplyContainer = document.createElement('div')
                      usernameTimeReplyContainer.classList.add("username-time-reply-container")
                        const avatarUsernameTimeAgo = document.createElement("div")
                        avatarUsernameTimeAgo.classList.add("avatar-username-time-ago")
                          const avatarImg = document.createElement('img')
                          avatarImg.classList.add('avatar')
                          avatarImg.src = data.comments[1].replies[1].user.image.png
                            const newUsername = document.createElement('p')
                            newUsername.classList.add('username')
                            newUsername.innerHTML = data.comments[1].replies[1].user.username
                              const newDiv = document.createElement('div')
                              newDiv.classList.add('you')
                              newDiv.innerHTML = 'you'
                                const newTimeAgo = document.createElement('p')
                                newTimeAgo.classList.add("time-ago")
                                newTimeAgo.innerHTML = '1 sec ago'
                                  const ourContainer = document.createElement('div')
                                  ourContainer.classList.add('our-container')
                                    const newDeleteBtn = document.createElement('button')
                                    newDeleteBtn.classList.add('delete-btn')
                                      const iconDelete = document.createElement('img')
                                      iconDelete.src = 'images/icon-delete.svg'
                                      iconDelete.classList.add('delete-icon')
                                      const newerP = document.createElement('p')
                                      newerP.classList.add('delete')
                                      newerP.innerHTML = 'Delete'
                                        const editBtn = document.createElement('button')
                                        editBtn.classList.add("edit-btn")
                                          const editImg = document.createElement('img')
                                          editImg.src = 'images/icon-edit.svg'
                                          editImg.classList.add('edit-icon')
                                            const editP = document.createElement('p')
                                            editP.classList.add('editp')
                                            editP.innerHTML = 'Edit'
                                              const commentP = document.createElement('p')
                                              commentP.classList.add('comment')

    userFirstComment.appendChild(newElement)
    newElement.appendChild(newerElement)
    newerElement.appendChild(plusBtn)
    plusBtn.appendChild(newImg)
    minusBtn.appendChild(newerImg)
    newerElement.appendChild(newP)
    newerElement.appendChild(minusBtn)
    newElement.appendChild(commentContainer)
    commentContainer.appendChild(usernameTimeReplyContainer)
    usernameTimeReplyContainer.appendChild(avatarUsernameTimeAgo)
    usernameTimeReplyContainer.appendChild(ourContainer)
    avatarUsernameTimeAgo.appendChild(avatarImg)
    avatarUsernameTimeAgo.appendChild(newUsername)
    avatarUsernameTimeAgo.appendChild(newDiv)
    avatarUsernameTimeAgo.appendChild(newTimeAgo)
    ourContainer.appendChild(newDeleteBtn)
    newDeleteBtn.appendChild(iconDelete)
    newDeleteBtn.appendChild(newerP)
    ourContainer.appendChild(editBtn)
    editBtn.appendChild(editImg)
    editBtn.appendChild(editP)
    commentContainer.appendChild(commentP)
    commentP.innerHTML = userComment.value
    userComment.value = ''
    }
})

//like a msg
function like() {
  plus.forEach((onePlus, index) =>{
    let clicked = true
    onePlus.addEventListener('click', () =>{
      if(clicked){
      upvotes[index].classList.add('green')
      upvotes[index].classList.remove('red')
      upvotes[index].innerHTML = parseInt(upvotes[index].innerHTML) + 1
      clicked = false
      }
    })
  })
}
like()

//dislike msg
function dislike(){
  minus.forEach((oneMinus, index) =>{
    let clicked = true
    oneMinus.addEventListener("click", () =>{
      if(clicked){
        upvotes[index].classList.add("red")
        upvotes[index].classList.remove('green')
        upvotes[index].innerHTML = parseInt(upvotes[index].innerHTML) - 1
        clicked = false
      }
    })
  })
}
dislike()

//editing msg
function edit(){
  editBtn.forEach(oneEditBtn => {
    oneEditBtn.addEventListener('click', () => {
      editComponent()
    });
  });
}
edit()

//replying to a msg
  replyBtns.forEach(replyBtn =>{
    replyBtn.addEventListener('click', (event) =>{
      const bigCommentContainer = event.target.closest('.username-time-reply-container')
      const userReply = bigCommentContainer.childNodes[1].childNodes[3].innerHTML
      userComment.value = `@${userReply}  `
    })
  })


//deleting a message
  function deleteFnc(){
    deleteBtns.forEach(deleteBtn =>{
      deleteBtn.addEventListener('click', () =>{
        deleteFncDel()
      })
    })
  }
  deleteFnc()

//delete msg fnc
  function deleteFncDel(){
    const bigCommentContainer = event.target.closest('.big-comment-container')
    areYouSureContainer.classList.remove('hidden')
    areYouSureContainer.classList.add('nice-animation')
    hero.classList.add('filter')
    yesBtn.addEventListener('click', () =>{
      bigCommentContainer.classList.add("hidden")
      areYouSureContainer.classList.add('hidden')
      hero.classList.remove('filter')
    })
    noBtn.addEventListener('click', () =>{
      areYouSureContainer.classList.add('hidden')
      hero.classList.remove("filter")
    })
  }


  //edit msg fnc
  let clickedEdit = true
  function editComponent(){
    if(clickedEdit){
    const commentContainer = event.target.closest('.comment-container')
    const commentText = commentContainer.querySelector('.comment')
    const newInput = document.createElement('textarea')
    newInput.classList.add('new-input')
    newInput.rows = '5'
    newInput.style.padding = '1em'
    newInput.style.resize = 'none'
    const newBtnEdit = document.createElement('button')
    const newBtnCancel = document.createElement('button')
    const btnsContainer = document.createElement('div')
    commentContainer.appendChild(newInput)
    commentContainer.appendChild(btnsContainer)
    btnsContainer.classList.add('edit-cancel-container')
    btnsContainer.appendChild(newBtnEdit)
    btnsContainer.appendChild(newBtnCancel)
    newBtnEdit.classList.add('edit')
    newBtnCancel.classList.add('cancel')
    newBtnEdit.innerHTML = 'edit'
    newBtnCancel.innerHTML = 'cancel'
    newInput.value = commentText.innerHTML
    commentText.innerHTML = ''
  
    newBtnEdit.addEventListener('click', () => {
      commentText.innerHTML = newInput.value
      newInput.classList.add('hidden')
      btnsContainer.classList.add('hidden')
      newBtnEdit.classList.add('hidden')
      newBtnCancel.classList.add('hidden')
      clickedEdit = true
    })
  
    newBtnCancel.addEventListener('click', () => {
      newInput.classList.add('hidden');
      btnsContainer.classList.add('hidden');
      newBtnEdit.classList.add('hidden');
      newBtnCancel.classList.add('hidden');
      commentText.innerHTML = newInput.value;
      clickedEdit = true
    });
    clickedEdit = false
  }
  }

  //like - new
  function likeDelegation(){
    const plusNew = document.querySelectorAll(".plus-new")
    const upvotesNew = document.querySelectorAll(".upvotes-new")
    plusNew.forEach((plusNewNew,index) =>{
      plusNewNew.addEventListener('click', a =>{
        upvotesNew[index].classList.add("green")
        upvotesNew[index].classList.remove('red')
        upvotesNew[index].innerHTML = 1
      })
    })
  }

//dislike - new
  function dislikeDelegation(){
    const minusNew = document.querySelectorAll(".minus-new")
    const upvotesNew = document.querySelectorAll(".upvotes-new")
    minusNew.forEach((minusNewNew,index) =>{
      minusNewNew.addEventListener('click',() =>{
        upvotesNew[index].classList.remove("green")
        upvotesNew[index].classList.add('red')
        upvotesNew[index].innerHTML = -1
      })
    })
  }

//dynamic applied functions
userFirstComment.addEventListener('click', (event) =>{
  if(event.target.classList.contains('delete') || event.target.classList.contains('delete-icon')){
    deleteFncDel()
  }
  if(event.target.classList.contains('editp') || event.target.classList.contains('edit-icon')){
    editComponent()
  }
  if(event.target.classList.contains('icon-plus')){
    likeDelegation()
  }
  if(event.target.classList.contains('icon-minus')){
    dislikeDelegation()
  }
})