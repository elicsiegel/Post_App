export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);

export const fetchPost = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`,
  })
}
  
export const createPost = post => (
 $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post 
  })
);

export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.post.id}`,
    data: post 
  })
}
  

export const destroyPost = post => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  })
);