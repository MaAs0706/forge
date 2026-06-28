import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectsListPage() {
const navigate = useNavigate();

// Mocked according to ProjectSummary schema
const [projects] = useState([
{
id: 1,
title: "Forge",
status: "active",
timeline_weeks: 12,
created_at: "2026-06-20T10:00:00",
updated_at: "2026-06-27T15:30:00",
},
{
id: 2,
title: "NEXUS",
status: "planning",
timeline_weeks: 8,
created_at: "2026-06-18T12:00:00",
updated_at: "2026-06-25T11:00:00",
},
]);

const formatDate = (dateString) =>
new Date(dateString).toLocaleDateString();

return ( <div className="max-w-6xl mx-auto space-y-6"> <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#232323] pb-4"> <div> <h1 className="text-3xl font-bold text-zinc-100">
Projects </h1>

```
      <p className="text-zinc-400 mt-1">
        View and manage your active projects.
      </p>
    </div>

    <button
      onClick={() => navigate("/projects/new")}
      className="px-4 py-2 bg-[#D97706] text-black font-semibold rounded-lg hover:bg-[#b56205] transition"
    >
      Create Project
    </button>
  </div>

  <div className="space-y-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="p-6 bg-[#111111] border border-[#232323] rounded-xl hover:border-zinc-700 transition"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>

            <p className="text-sm text-zinc-500 mt-2">
              Project ID: {project.id}
            </p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full border border-[#D97706]/30 text-[#D97706] bg-[#D97706]/10">
            {project.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div>
            <p className="text-xs uppercase text-zinc-500">
              Timeline
            </p>

            <p className="text-zinc-200 mt-1">
              {project.timeline_weeks} Weeks
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Created
            </p>

            <p className="text-zinc-200 mt-1">
              {formatDate(project.created_at)}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-zinc-500">
              Updated
            </p>

            <p className="text-zinc-200 mt-1">
              {formatDate(project.updated_at)}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/projects/${project.id}`)}
          className="mt-6 px-4 py-2 border border-[#232323] rounded-lg text-zinc-300 hover:text-white hover:border-zinc-600 transition"
        >
          View Project →
        </button>
      </div>
    ))}
  </div>
</div>


);
}
