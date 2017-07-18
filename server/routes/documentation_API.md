## Server API routes

### GET http://localhost:3000/api/v1/users/friend/6(:userID)
{"friend_name": "'lily'"}

### GET http://localhost:3000/api/v1/stories/hotel-room(:name)
{"total_chapters": 2 }

### GET http://localhost:3000/api/v1/stories/tags/1
[
  {
    stories_id：1，"tag": "romantic"
  },
  {
    stories_id:1, "tag": "celebrity"
  }
]
