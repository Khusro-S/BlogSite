import { useEffect, useState } from "react";
import CircularLoading from "../Components/CircularLoading";
import { useNavigate } from "react-router-dom";

export default function NewBlog() {
  const [addNewBlogData, setAddNewBlogData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("BlogData"));
    return (
      storedData || {
        title: "",
        body: "",
        author: "",
        id: "",
        time: "",
      }
    );
  });
  // console.log("before: ", addNewBlogData);
  useEffect(() => {
    const storedNewBlogData = JSON.parse(localStorage.getItem("BlogData"));
    if (storedNewBlogData !== null) {
      setAddNewBlogData(storedNewBlogData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("BlogData", JSON.stringify(addNewBlogData));
  }, [addNewBlogData]);

  // console.log("after: ", addNewBlogData);

  const handleChange = (e) => {
    const changeField = e.target.name;
    const newValue = e.target.value;

    if (changeField === "title") {
      const newId = newValue.replace(/\s+/g, "-");
      setAddNewBlogData((currData) => ({
        ...currData,
        [changeField]: newValue,
        id: newId,
        time: new Date().toString().slice(0, 24),
      }));
    } else {
      setAddNewBlogData((currData) => ({
        ...currData,
        [changeField]: newValue,
        time: new Date().toString().slice(0, 24),
      }));
    }
  };

  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(addNewBlogData);

    setIsAdding(true);
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(addNewBlogData),
    }).then(() => {
      setIsAdding(false);
      localStorage.removeItem("BlogData");
      return navigate("/");
    });

    setAddNewBlogData({
      title: "",
      body: "",
      author: "",
      time: "",
    });
  };

  return (
    <div className="max-w-[40rem] my-0 mx-auto text-center">
      <h1 className="py-5 text-red-400">Add New Blog</h1>

      <form>
        <label className="text-left block cursor-pointer" htmlFor="title">
          Blog title:
        </label>
        <input
          className="w-full px-3 py-2 my-3 mx-0 box-border block border border-solid border-red-400 rounded-lg focus:outline-none focus:border-red-400 focus:border-2"
          type="text"
          name="title"
          id="title"
          value={addNewBlogData.title}
          onChange={handleChange}
          required
        ></input>

        <label className="text-left block cursor-pointer" htmlFor="body">
          Blog body:
        </label>
        <textarea
          className="w-full px-3 py-2 my-3 mx-0 box-border block border border-solid border-red-400 rounded-lg focus:outline-none focus:border-red-400 focus:border-2 h-64"
          name="body"
          id="body"
          value={addNewBlogData.body}
          onChange={handleChange}
          required
        ></textarea>

        <label className="text-left block cursor-pointer" htmlFor="author">
          Blog author:
        </label>
        <select
          className="w-full px-3 py-2 my-3 mx-0 box-border block border border-solid border-red-400 rounded-lg focus:outline-none focus:border-red-400 focus:border-2"
          name="author"
          id="author"
          onChange={handleChange}
          value={addNewBlogData.author}
        >
          <option value="">Please select an author</option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>

        <input
          type="text"
          name="time"
          id="time"
          value={addNewBlogData.time}
          // onChange={handleChange}
          readOnly
          className="hidden"
        />

        {!isAdding ? (
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-400 border-none p-2 rounded-lg cursor-pointer text-white font-semibold hover:scale-105 active:scale-100 transition-transform ease-linear"
          >
            Publish
          </button>
        ) : (
          <button
            className="bg-red-400 border-none p-2 rounded-lg cursor-pointer text-white font-semibold flex mx-auto"
            disabled
          >
            Publishing {<CircularLoading />}{" "}
          </button>
        )}
      </form>
    </div>
  );
}
