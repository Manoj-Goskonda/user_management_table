import { Main } from "@/components/layout/main";
import { columns } from "./components/users-columns";
import { UsersTable } from "./components/users-table";
import { userListSchema } from "./data/schema";
import { users } from "./data/users";

export default function Users() {
  const userList = userListSchema.parse(users);

  return (
    <Main>
      <h1 className="text-4xl font-bold">User Management Table</h1>
      <br />
      <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Users List</h2>
          <p className="text-muted-foreground">
            Manage your Users and their details here.
          </p>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <UsersTable data={userList} columns={columns} />
      </div>
    </Main>
  );
}
