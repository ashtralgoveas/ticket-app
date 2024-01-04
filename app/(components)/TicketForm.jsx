"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleRefresh = () => {
    router.push("/");
    router.refresh();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to update Ticket.");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Ticket.");
      }
    }
    handleRefresh();
  };

  return (
    <div className="flex justify-center mt-6">
      <div className="bg-white rounded-md p-4 shadow-md w-1/2 text-card">
        <form
          className="flex flex-col gap-3"
          method="post"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center">
            {EDITMODE ? "Update Your Ticket" : "Create Your Ticket"}
          </h2>
          <label className="font-bold">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="text-default-text rounded-md"
            onChange={handleChange}
            required={true}
            value={formData.title}
          />
          <label className="font-bold">Description</label>
          <textarea
            id="description"
            name="description"
            className="text-default-text rounded-md"
            onChange={handleChange}
            required={true}
            value={formData.description}
            rows="5"
          />
          <label className="font-bold">Category</label>
          <select
            name="category"
            className="text-default-text rounded-md"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Software Problem">Software Problem</option>
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Project">Project</option>
          </select>
          <label className="font-bold">Priority</label>
          <div>
            <input
              id="priority-1"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={1}
              checked={formData.priority == 1}
            />
            <label>1</label>
            <input
              id="priority-2"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={2}
              checked={formData.priority == 2}
            />
            <label>2</label>
            <input
              id="priority-3"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={3}
              checked={formData.priority == 3}
            />
            <label>3</label>
            <input
              id="priority-4"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={4}
              checked={formData.priority == 4}
            />
            <label>4</label>
            <input
              id="priority-5"
              name="priority"
              type="radio"
              onChange={handleChange}
              value={5}
              checked={formData.priority == 5}
            />
            <label>5</label>
          </div>
          <label>Progress</label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handleChange}
          />
          <label className="font-bold">Status</label>
          <select
            name="status"
            value={formData.status}
            className="text-default-text"
            onChange={handleChange}
          >
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
          <input
            type="submit"
            className="btn bg-blue-accent text-default-text"
            value={EDITMODE ? "Update Ticket" : "Create Ticket"}
          />
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
