import Image from "next/image";
import Link from "next/link";

const fakeTeamMembers = [
  {
    id: "TM-001",
    name: "Alice Johnson",
    role: "Project Manager",
    email: "alice@example.com",
    status: "Active",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: "TM-002",
    name: "Bob Smith",
    role: "Software Engineer",
    email: "bob@example.com",
    status: "Active",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
  },
  {
    id: "TM-003",
    name: "Clara Williams",
    role: "UI/UX Designer",
    email: "clara@example.com",
    status: "On Leave",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: "TM-004",
    name: "Daniel Brown",
    role: "Marketing Specialist",
    email: "daniel@example.com",
    status: "Inactive",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
];

export default function TeamAdminPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-light">Team Members</h1>
          <p className="font-light text-sm">
            Manage your team and their roles within the company.
          </p>
        </div>
        <Link
          className="bg-black text-white rounded px-3 py-2"
          href={"/addmember"}
        >
          + Add Member
        </Link>
      </div>
      <div className="mt-10">
        <input
          className="border border-gray-300 px-3 py-2 rounded w-full"
          type="text"
          placeholder="Search team members..."
        />
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b border-b-gray-300">
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {fakeTeamMembers.map((member) => (
              <tr key={member.id} className="border-b border-b-gray-300">
                <td className="p-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-3">{member.id}</td>
                <td className="p-3">{member.name}</td>
                <td className="p-3">{member.role}</td>
                <td className="p-3">{member.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      member.status === "Active"
                        ? "bg-green-500"
                        : member.status === "On Leave"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
