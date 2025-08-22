import { useState } from "react";
import type { DataType } from "./lib/types";

export default function App() {
  const [allData, setAllData] = useState<DataType[]>([]);
  const [data, setData] = useState<DataType>({
    name: "",
    fname: "",
    course: "",
    subject: "",
    description: "",
    favourite: "",
    category: {
      first: "",
      second: "",
      third: "",
    },
  });

  const onSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ Add current form data to list
    setAllData((prev) => [...prev, data]);

    // ✅ Reset form after submit (optional)
    setData({
      name: "",
      fname: "",
      course: "",
      subject: "",
      description: "",
      favourite: "",
      category: {
        first: "",
        second: "",
        third: "",
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setData((prev) => {
      if (type === "checkbox") {
        return {
          ...prev,
          category: {
            ...prev.category,
            [name]: checked ? value : "", // ✅ keep empty if unchecked
          },
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={onSubmitClick} className="dark">
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={data.name}
        placeholder="Enter your name..."
      />
      <input
        type="text"
        onChange={handleChange}
        name="fname"
        value={data.fname}
        placeholder="Enter your f/name..."
        className="dark:bg-amber-600"
      />
      <input
        type="text"
        onChange={handleChange}
        name="course"
        value={data.course}
        placeholder="Enter your Course..."
      />
      <input
        type="text"
        onChange={handleChange}
        name="subject"
        value={data.subject}
        placeholder="Enter your Subject..."
      />
      <textarea
        name="description"
        onChange={handleChange}
        value={data.description}
        rows={5}
        cols={35}
        placeholder="Enter description"
      />

      {/* Radio buttons */}
      <label>
        <input
          type="radio"
          checked={data.favourite === "apple"}
          name="favourite"
          onChange={handleChange}
          value="apple"
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          checked={data.favourite === "orange"}
          name="favourite"
          onChange={handleChange}
          value="orange"
        />
        Orange
      </label>
      <label>
        <input
          type="radio"
          checked={data.favourite === "banana"}
          name="favourite"
          onChange={handleChange}
          value="banana"
        />
        Banana
      </label>

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          name="first"
          value="man"
          checked={data.category.first === "man"}
          onChange={handleChange}
        />
        man
      </label>
      <label>
        <input
          type="checkbox"
          name="second"
          value="student"
          checked={data.category.second === "student"}
          onChange={handleChange}
        />
        student
      </label>
      <label>
        <input
          type="checkbox"
          name="third"
          value="person"
          checked={data.category.third === "person"}
          onChange={handleChange}
        />
        person
      </label>

      <button type="submit">Submit</button>

      <hr />

      {allData.length === 0 ? (
        <span>Data not found</span>
      ) : (
        <div>
          <h3>Submitted Data:</h3>
          {allData.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <p><b>Name:</b> {item.name}</p>
              <p><b>Father Name:</b> {item.fname}</p>
              <p><b>Course:</b> {item.course}</p>
              <p><b>Subject:</b> {item.subject}</p>
              <p><b>Description:</b> {item.description}</p>
              <p><b>Favourite:</b> {item.favourite}</p>
              <p>
                <b>Category:</b>{" "}
                {Object.values(item.category).filter(Boolean).join(", ") || "None"}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
