import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "./";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
A flexible table component system with support for:
- **Bleed**: Allows table to extend to container edges
- **Dense**: Compact row spacing
- **Grid**: Adds vertical grid lines between columns
- **Striped**: Alternating row background colors
- **Linkable Rows**: Entire rows can be clickable links
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    bleed: {
      control: "boolean",
      description: "Allow table to bleed to container edges",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dense: {
      control: "boolean",
      description: "Use compact row padding",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    grid: {
      control: "boolean",
      description: "Show vertical grid lines between columns",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    striped: {
      control: "boolean",
      description: "Alternate row background colors",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for stories
const users = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner",
  },
];

const orders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    date: "February 2, 2024",
    status: "Shipped",
    amount: "$42.25",
  },
  {
    id: "#3209",
    customer: "Ava Johnson",
    date: "January 28, 2024",
    status: "Pending",
    amount: "$74.99",
  },
  {
    id: "#3208",
    customer: "Michael Johnson",
    date: "January 25, 2024",
    status: "Completed",
    amount: "$150.00",
  },
  {
    id: "#3207",
    customer: "Lisa Anderson",
    date: "January 20, 2024",
    status: "Cancelled",
    amount: "$89.50",
  },
  {
    id: "#3206",
    customer: "Robert Smith",
    date: "January 18, 2024",
    status: "Shipped",
    amount: "$212.00",
  },
];

// Default story
export const Default: Story = {
  args: {
    bleed: false,
    dense: false,
    grid: false,
    striped: false,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Striped variant
export const Striped: Story = {
  args: {
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Dense variant
export const Dense: Story = {
  args: {
    dense: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Grid variant
export const WithGrid: Story = {
  args: {
    grid: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Bleed variant
export const Bleed: Story = {
  args: {
    bleed: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Combined variants
export const StripedWithGrid: Story = {
  args: {
    striped: true,
    grid: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const DenseStriped: Story = {
  args: {
    dense: true,
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const AllVariants: Story = {
  args: {
    bleed: true,
    dense: true,
    grid: true,
    striped: true,
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Linkable rows
export const LinkableRows: Story = {
  args: {
    striped: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table rows can be made clickable by passing an `href` prop to `TableRow`. Hover over rows to see the effect.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            href={`/users/${user.id}`}
            title={`View ${user.name}'s profile`}
          >
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// External links
export const ExternalLinks: Story = {
  args: {
    striped: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Rows can link to external URLs by setting `external={true}` on `TableRow`.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            href={`https://example.com/users/${user.id}`}
            external
            title={`View ${user.name}'s external profile`}
          >
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Orders table example
export const OrdersExample: Story = {
  args: {
    striped: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A practical example showing an orders table with various data types.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Order ID</TableHeader>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Date</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Amount</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => (
          <TableRow
            key={order.id}
            href={`/orders/${order.id}`}
            title={`View order ${order.id}`}
          >
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell className="font-medium">{order.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Empty state
export const EmptyState: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "How the table looks when there is no data to display.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="text-center text-zinc-500 py-8">
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Single row
export const SingleRow: Story = {
  args: {},
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{users[0].name}</TableCell>
          <TableCell>{users[0].title}</TableCell>
          <TableCell>{users[0].email}</TableCell>
          <TableCell>{users[0].role}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Many columns
export const ManyColumns: Story = {
  args: {
    grid: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with many columns demonstrating horizontal scroll behavior.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Department</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Phone</TableHeader>
          <TableHeader>Location</TableHeader>
          <TableHeader>Start Date</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>+1 (555) 000-000{index}</TableCell>
            <TableCell>San Francisco</TableCell>
            <TableCell>Jan 1, 2024</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// With custom cell content
export const WithCustomContent: Story = {
  args: {
    striped: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table cells can contain any React content including avatars, badges, and buttons.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>User</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-sm font-medium">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-zinc-500 text-xs">
                    @{user.name.toLowerCase().replace(" ", "")}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  user.role === "Owner"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                    : user.role === "Admin"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {user.role}
              </span>
            </TableCell>
            <TableCell>
              <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Edit
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Numeric data alignment
export const NumericData: Story = {
  args: {
    grid: true,
    dense: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Financial or numeric data with right-aligned columns for better readability.",
      },
    },
  },
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Product</TableHeader>
          <TableHeader className="text-right">Quantity</TableHeader>
          <TableHeader className="text-right">Unit Price</TableHeader>
          <TableHeader className="text-right">Total</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Widget Pro</TableCell>
          <TableCell className="text-right tabular-nums">150</TableCell>
          <TableCell className="text-right tabular-nums">$24.99</TableCell>
          <TableCell className="text-right tabular-nums font-medium">
            $3,748.50
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gadget Plus</TableCell>
          <TableCell className="text-right tabular-nums">75</TableCell>
          <TableCell className="text-right tabular-nums">$49.99</TableCell>
          <TableCell className="text-right tabular-nums font-medium">
            $3,749.25
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Super Tool</TableCell>
          <TableCell className="text-right tabular-nums">200</TableCell>
          <TableCell className="text-right tabular-nums">$12.50</TableCell>
          <TableCell className="text-right tabular-nums font-medium">
            $2,500.00
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mega Device</TableCell>
          <TableCell className="text-right tabular-nums">30</TableCell>
          <TableCell className="text-right tabular-nums">$199.99</TableCell>
          <TableCell className="text-right tabular-nums font-medium">
            $5,999.70
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold">Total</TableCell>
          <TableCell className="text-right tabular-nums font-bold">
            455
          </TableCell>
          <TableCell className="text-right">—</TableCell>
          <TableCell className="text-right tabular-nums font-bold">
            $15,997.45
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
