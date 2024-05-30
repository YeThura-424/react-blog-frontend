const initialState = {
  posts: [
    {
      title: "title",
      description: "description",
      postedBy: "Ilkin",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "Ilkin",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "Ilkin",
      category: {
        categoryName: "coding",
      },
    },
  ],
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    default:
      return state;
  }
}
